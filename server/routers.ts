import { COOKIE_NAME } from "@shared/const";
import { vocabulary } from "../shared/vocabulary.generated";
import { z } from "zod";
import { getLearningSnapshot, recordStudySession, saveVocabularyReview, updateLearnerSettings } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { calculateSrsUpdate, calculateXp, getNextSessionRecommendation } from "./learningLogic";

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
      const skillScores = ["grammar", "listening", "reading"].map(skill => {
        const sessions = snapshot.recentSessions.filter(session => session.skill === skill);
        return sessions.length ? Math.round(sessions.reduce((sum, session) => sum + session.score, 0) / sessions.length) : 0;
      });
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
});

export type AppRouter = typeof appRouter;
