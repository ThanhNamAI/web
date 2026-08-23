import { COOKIE_NAME } from "@shared/const";
import { vocabulary } from "../shared/vocabulary.generated";
import { mockQuestions } from "../shared/mockTestContent";
import { z } from "zod";
import { checkLessonStepAnswer, checkMistakeAnswer, createLesson, deleteLesson, getAdminLesson, getAdminLessons, getBossChallenge, getLearningSnapshot, getLessonBySlug, getMistakeLab, getPublishedLessons, recordMistake, recordMockTestAttempt, recordStudySession, saveLessonProgress, saveVocabularyReview, submitBossChallenge, updateLearnerSettings, updateLesson } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { calculateSrsUpdate, calculateXp, getNextSessionRecommendation } from "./learningLogic";
import { buildDailyPlan } from "./dailyPlanLogic";
import { getMockScore } from "./mockTestLogic";

const lessonStepInput = z.object({
  stepType: z.enum(["warmup", "explain", "quiz", "listen", "recap"]),
  title: z.string().trim().min(2).max(160),
  body: z.string().trim().min(2).max(4_000),
  prompt: z.string().trim().max(2_000).optional().nullable(),
  options: z.array(z.string().trim().min(1).max(280)).min(2).max(4).optional(),
  answerIndex: z.number().int().min(0).max(3).optional().nullable(),
  explanation: z.string().trim().max(2_000).optional().nullable(),
  audioText: z.string().trim().max(2_000).optional().nullable(),
}).superRefine((step, context) => {
  if ((step.stepType === "quiz" || step.stepType === "listen") && (!step.options || step.answerIndex === null || step.answerIndex === undefined)) {
    context.addIssue({ code: "custom", message: "Bước quiz/nghe cần lựa chọn và đáp án đúng.", path: ["options"] });
  }
  if (step.options && step.answerIndex !== null && step.answerIndex !== undefined && step.answerIndex >= step.options.length) {
    context.addIssue({ code: "custom", message: "Đáp án đúng phải nằm trong danh sách lựa chọn.", path: ["answerIndex"] });
  }
});

const lessonInput = z.object({
  slug: z.string().trim().min(3).max(120).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug chỉ dùng chữ thường, số và dấu gạch ngang."),
  title: z.string().trim().min(4).max(160),
  summary: z.string().trim().min(12).max(1_200),
  skill: z.enum(["grammar", "listening", "reading", "speaking", "mixed"]),
  level: z.string().trim().min(2).max(32),
  estimatedMinutes: z.number().int().min(3).max(90),
  status: z.enum(["draft", "published"]),
  steps: z.array(lessonStepInput).min(1).max(12),
});

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  learning: router({
    dashboard: protectedProcedure.query(async ({ ctx }) => {
      const snapshot = await getLearningSnapshot(ctx.user.id);
      const skillScores = ["grammar", "listening", "reading"].map(skill => snapshot.analytics.skills.find(item => item.skill === skill)?.accuracy ?? 0);
      const dueIds = new Set(snapshot.dueCards.map(card => card.vocabularyId));
      const reviewCards = vocabulary.filter(item => dueIds.has(item.id));
      const cards = reviewCards.length ? reviewCards : vocabulary.slice(0, 20);
      const recommendation = getNextSessionRecommendation({
        dueCards: snapshot.dueCards.length || cards.length,
        grammarScore: skillScores[0],
        listeningScore: skillScores[1],
        readingScore: skillScores[2],
      });
      return { ...snapshot, cards, skillScores, recommendation, vocabularyCount: vocabulary.length };
    }),
    dailyPlan: protectedProcedure.query(async ({ ctx }) => {
      const snapshot = await getLearningSnapshot(ctx.user.id);
      const focus = snapshot.analytics.skills.find(item => item.skill === snapshot.analytics.focusSkill);
      const plan = buildDailyPlan({ focusSkill: snapshot.analytics.focusSkill, focusAccuracy: focus?.accuracy, dueCards: snapshot.dueCards.length });
      const dueIds = new Set(snapshot.dueCards.map(card => card.vocabularyId));
      const plannedCards = vocabulary.filter(item => dueIds.has(item.id)).slice(0, 8);
      return { ...plan, plannedCards: (plannedCards.length ? plannedCards : vocabulary.slice(0, 8)).map(item => ({ id: item.id, term: item.term, meaning: item.meaning, topic: item.topic })), targetScore: snapshot.profile.targetScore };
    }),
    mockTest: protectedProcedure.query(() => mockQuestions.map(({ answer: _answer, ...question }) => question)),
    submitMockTest: protectedProcedure.input(z.object({
      answers: z.array(z.object({ questionId: z.string().min(1).max(32), selected: z.number().int().min(0).max(3) })).min(1).max(mockQuestions.length),
      elapsedSeconds: z.number().int().min(1).max(7_200),
    })).mutation(async ({ ctx, input }) => {
      const answerMap = new Map(mockQuestions.map(question => [question.id, question]));
      const uniqueAnswers = Array.from(new Map(input.answers.filter(answer => answerMap.has(answer.questionId)).map(answer => [answer.questionId, answer])).values());
      const scored = uniqueAnswers.map(answer => ({ part: answerMap.get(answer.questionId)!.part, correct: answerMap.get(answer.questionId)!.answer === answer.selected }));
      const result = getMockScore(scored, input.elapsedSeconds);
      const listening = result.partStats.filter(item => item.part <= 4);
      const reading = result.partStats.filter(item => item.part >= 5);
      const average = (items: typeof result.partStats) => items.reduce((sum, item) => sum + item.correct, 0) / Math.max(1, items.reduce((sum, item) => sum + item.total, 0)) * 100;
      const xp = calculateXp(result.rawScore, input.elapsedSeconds, result.rawScore >= 80 ? 20 : 0);
      await recordMockTestAttempt({ userId: ctx.user.id, totalQuestions: result.total, correctAnswers: result.correct, rawScore: result.rawScore, durationSeconds: result.elapsedSeconds, partScores: result.partStats, listeningScore: Math.round(average(listening)), readingScore: Math.round(average(reading)), xp });
      await Promise.all(uniqueAnswers.flatMap(answer => {
        const question = answerMap.get(answer.questionId)!;
        if (question.answer === answer.selected) return [];
        return [recordMistake({
          userId: ctx.user.id,
          source: "mock",
          sourceRef: question.id,
          skill: question.skill,
          prompt: `${question.contextLabel}\n${question.transcript ?? question.prompt}`,
          options: question.choices,
          correctIndex: question.answer,
          selectedIndex: answer.selected,
          explanation: `Trọng tâm là ${question.contextLabel}. Đáp án đúng diễn đạt: ${question.choices[question.answer]}.`,
        })];
      }));
      return { ...result, xp };
    }),
    review: protectedProcedure.input(z.object({ vocabularyId: z.string().min(1), quality: z.number().int().min(0).max(3) })).mutation(async ({ ctx, input }) => {
      const snapshot = await getLearningSnapshot(ctx.user.id);
      const prior = snapshot.dueCards.find(card => card.vocabularyId === input.vocabularyId);
      const srs = calculateSrsUpdate({ repetitions: prior?.repetitions ?? 0, easeFactor: prior?.easeFactor ?? 2.5, intervalDays: prior?.intervalDays ?? 0 }, input.quality as 0 | 1 | 2 | 3);
      const result = await saveVocabularyReview({ userId: ctx.user.id, vocabularyId: input.vocabularyId, quality: input.quality, ...srs });
      const xp = calculateXp(input.quality >= 2 ? 100 : 45, 45, input.quality === 3 ? 4 : 0);
      await recordStudySession({ userId: ctx.user.id, activityType: "srs-card", skill: "vocabulary", score: input.quality >= 2 ? 100 : 45, xp, durationSeconds: 45 });
      return { ...srs, dueAt: result.dueAt, xp };
    }),
    recordActivity: protectedProcedure.input(z.object({ activityType: z.string().min(1).max(48), skill: z.enum(["vocabulary", "grammar", "listening", "reading", "speaking"]), score: z.number().int().min(0).max(100), durationSeconds: z.number().int().min(0).max(14_400) })).mutation(async ({ ctx, input }) => {
      const xp = calculateXp(input.score, input.durationSeconds);
      await recordStudySession({ userId: ctx.user.id, ...input, xp });
      return { xp };
    }),
    updateSettings: protectedProcedure.input(z.object({ targetScore: z.number().int().min(100).max(990).optional(), weeklyGoalMinutes: z.number().int().min(30).max(1_000).optional(), diagnosticScore: z.number().int().min(0).max(990).optional(), preferredAccent: z.enum(["en-US", "en-GB"]).optional() })).mutation(({ ctx, input }) => updateLearnerSettings(ctx.user.id, input)),
  }),
  lessons: router({
    list: publicProcedure.query(() => getPublishedLessons()),
    bySlug: publicProcedure.input(z.object({ slug: z.string().trim().min(3).max(120) })).query(async ({ ctx, input }) => {
      const result = await getLessonBySlug(input.slug, { userId: ctx.user?.id });
      if (!result) return undefined;
      return { ...result, steps: result.steps.map(({ answerIndex: _answerIndex, ...step }) => step) };
    }),
    checkAnswer: protectedProcedure.input(z.object({ stepId: z.number().int().positive(), selected: z.number().int().min(0).max(3) })).mutation(({ ctx, input }) => checkLessonStepAnswer({ userId: ctx.user.id, ...input })),
    saveProgress: protectedProcedure.input(z.object({ lessonId: z.number().int().positive(), currentStep: z.number().int().min(0).max(12), score: z.number().int().min(0).max(100), completed: z.boolean() })).mutation(async ({ ctx, input }) => {
      const result = await saveLessonProgress({ userId: ctx.user.id, ...input });
      if (input.completed && !result.wasCompleted) await recordStudySession({ userId: ctx.user.id, activityType: "guided-lesson", skill: "mixed", score: input.score, xp: calculateXp(input.score, 900, 15), durationSeconds: 900 });
      return result;
    }),
  }),
  mistakeLab: router({
    dashboard: protectedProcedure.query(({ ctx }) => getMistakeLab(ctx.user.id)),
    checkAnswer: protectedProcedure.input(z.object({ mistakeId: z.number().int().positive(), selected: z.number().int().min(0).max(3) })).mutation(async ({ ctx, input }) => {
      const result = await checkMistakeAnswer({ userId: ctx.user.id, ...input });
      if (result.mastered) await recordStudySession({ userId: ctx.user.id, activityType: "mistake-lab-repair", skill: "mixed", score: 100, xp: calculateXp(100, 120, 5), durationSeconds: 120 });
      return result;
    }),
  }),
  boss: router({
    dashboard: protectedProcedure.query(({ ctx }) => getBossChallenge(ctx.user.id)),
    submit: protectedProcedure.input(z.object({
      answers: z.array(z.object({ questionId: z.string().min(1).max(48), selected: z.number().int().min(0).max(3) })).length(10),
      elapsedSeconds: z.number().int().min(1).max(600),
    })).mutation(({ ctx, input }) => submitBossChallenge({ userId: ctx.user.id, ...input })),
  }),
  admin: router({
    lessons: router({
      list: adminProcedure.query(() => getAdminLessons()),
      detail: adminProcedure.input(z.object({ id: z.number().int().positive() })).query(({ input }) => getAdminLesson(input.id)),
      create: adminProcedure.input(lessonInput).mutation(({ ctx, input }) => createLesson(ctx.user.id, input)),
      update: adminProcedure.input(z.object({ id: z.number().int().positive(), lesson: lessonInput })).mutation(({ input }) => updateLesson(input.id, input.lesson)),
      delete: adminProcedure.input(z.object({ id: z.number().int().positive() })).mutation(({ input }) => deleteLesson(input.id)),
    }),
  }),
});

export type AppRouter = typeof appRouter;
