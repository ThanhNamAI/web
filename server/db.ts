import { and, asc, desc, eq, lte } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, learnerProfiles, learningAchievements, lessonProgress, lessons, lessonSteps, mistakeItems, mockTestAttempts, studySessions, users, vocabularyProgress, weeklyBossAttempts } from "../drizzle/schema";
import { ENV } from './_core/env';
import { getEarnedAchievementDefinitions } from "./achievementLogic";
import { getSkillAnalytics } from "./analyticsLogic";
import { starterLessons } from "./starterLessons";
import { partLessons } from "./partLessons";
import { getMistakeReviewUpdate } from "./mistakeLabLogic";
import { getOwnedActiveMistake } from "./mistakeLabAccess";
import { buildMistakeLabDashboard } from "./mistakeLabProjection";
import { checkMistakeAnswerWithStore } from "./mistakeLabService";
import { getWeeklyBossQuestions } from "./bossChallengeContent";
import { getIsoWeekKey, scoreBossChallenge } from "./bossChallengeLogic";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function ensureLearnerProfile(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");

  const existing = await db.select().from(learnerProfiles).where(eq(learnerProfiles.userId, userId)).limit(1);
  if (existing[0]) return existing[0];

  await db.insert(learnerProfiles).values({ userId });
  const created = await db.select().from(learnerProfiles).where(eq(learnerProfiles.userId, userId)).limit(1);
  if (!created[0]) throw new Error("Unable to create learner profile");
  return created[0];
}

export async function getLearningSnapshot(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");

  const profile = await ensureLearnerProfile(userId);
  const now = new Date();
  const dueCards = await db
    .select()
    .from(vocabularyProgress)
    .where(and(eq(vocabularyProgress.userId, userId), lte(vocabularyProgress.dueAt, now)))
    .orderBy(vocabularyProgress.dueAt)
    .limit(24);
  const recentSessions = await db.select().from(studySessions).where(eq(studySessions.userId, userId)).orderBy(desc(studySessions.completedAt)).limit(40);
  const achievements = await db.select().from(learningAchievements).where(eq(learningAchievements.userId, userId)).orderBy(desc(learningAchievements.awardedAt));
  const recentMockTests = await db.select().from(mockTestAttempts).where(eq(mockTestAttempts.userId, userId)).orderBy(desc(mockTestAttempts.completedAt)).limit(5);

  const analytics = getSkillAnalytics(recentSessions);
  return { profile, dueCards, recentSessions, achievements, recentMockTests, analytics };
}

async function syncLearningAchievements(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const profile = await ensureLearnerProfile(userId);
  const sessions = await db.select().from(studySessions).where(eq(studySessions.userId, userId));
  const progress = await db.select().from(vocabularyProgress).where(eq(vocabularyProgress.userId, userId));
  const existing = await db.select().from(learningAchievements).where(eq(learningAchievements.userId, userId));
  const existingCodes = new Set(existing.map(item => item.code));
  const eligible = getEarnedAchievementDefinitions({
    totalSessions: sessions.length,
    totalReviews: progress.reduce((sum, item) => sum + item.repetitions, 0),
    totalXp: profile.totalXp,
    currentStreak: profile.currentStreak,
  }).filter(item => !existingCodes.has(item.code));

  if (eligible.length) await db.insert(learningAchievements).values(eligible.map(item => ({ userId, ...item })));
}

export async function saveVocabularyReview(input: {
  userId: number;
  vocabularyId: string;
  repetitions: number;
  easeFactor: number;
  intervalDays: number;
  quality: number;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const now = new Date();
  const dueAt = new Date(now.getTime() + input.intervalDays * 86_400_000);
  const existing = await db
    .select()
    .from(vocabularyProgress)
    .where(and(eq(vocabularyProgress.userId, input.userId), eq(vocabularyProgress.vocabularyId, input.vocabularyId)))
    .limit(1);
  const values = {
    repetitions: input.repetitions,
    easeFactor: input.easeFactor,
    intervalDays: input.intervalDays,
    dueAt,
    lastQuality: input.quality,
    lastReviewedAt: now,
  };

  if (existing[0]) {
    await db.update(vocabularyProgress).set(values).where(eq(vocabularyProgress.id, existing[0].id));
  } else {
    await db.insert(vocabularyProgress).values({ userId: input.userId, vocabularyId: input.vocabularyId, ...values });
  }
  return { dueAt };
}

export async function recordStudySession(input: {
  userId: number;
  activityType: string;
  skill: string;
  score: number;
  xp: number;
  durationSeconds: number;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const profile = await ensureLearnerProfile(input.userId);
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
  const currentStreak = profile.lastStudyDate === today ? profile.currentStreak : profile.lastStudyDate === yesterday ? profile.currentStreak + 1 : 1;

  await db.insert(studySessions).values(input);
  await db.update(learnerProfiles).set({
    totalXp: profile.totalXp + input.xp,
    currentStreak,
    longestStreak: Math.max(profile.longestStreak, currentStreak),
    lastStudyDate: today,
  }).where(eq(learnerProfiles.userId, input.userId));
  await syncLearningAchievements(input.userId);
}

export async function recordMockTestAttempt(input: {
  userId: number;
  totalQuestions: number;
  correctAnswers: number;
  rawScore: number;
  durationSeconds: number;
  partScores: Array<{ part: number; correct: number; total: number; accuracy: number }>;
  listeningScore: number;
  readingScore: number;
  xp: number;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  await db.insert(mockTestAttempts).values({
    userId: input.userId,
    totalQuestions: input.totalQuestions,
    correctAnswers: input.correctAnswers,
    rawScore: input.rawScore,
    durationSeconds: input.durationSeconds,
    partScoresJson: JSON.stringify(input.partScores),
  });
  await recordStudySession({ userId: input.userId, activityType: "mock-listening", skill: "listening", score: input.listeningScore, xp: Math.floor(input.xp / 2), durationSeconds: Math.floor(input.durationSeconds / 2) });
  await recordStudySession({ userId: input.userId, activityType: "mock-reading", skill: "reading", score: input.readingScore, xp: Math.ceil(input.xp / 2), durationSeconds: Math.ceil(input.durationSeconds / 2) });
}

export async function getBossChallenge(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const weekKey = getIsoWeekKey();
  const attempt = (await db.select().from(weeklyBossAttempts).where(and(eq(weeklyBossAttempts.userId, userId), eq(weeklyBossAttempts.weekKey, weekKey))).limit(1))[0];
  const questions = getWeeklyBossQuestions(weekKey);
  return {
    weekKey,
    durationLimitSeconds: 600,
    attempt: attempt ? { correctAnswers: attempt.correctAnswers, totalQuestions: attempt.totalQuestions, score: attempt.score, durationSeconds: attempt.durationSeconds, completedAt: attempt.completedAt } : undefined,
    questions: attempt ? [] : questions.map(({ answer: _answer, ...question }) => question),
  };
}

export async function submitBossChallenge(input: { userId: number; answers: Array<{ questionId: string; selected: number }>; elapsedSeconds: number }) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const weekKey = getIsoWeekKey();
  const existing = (await db.select().from(weeklyBossAttempts).where(and(eq(weeklyBossAttempts.userId, input.userId), eq(weeklyBossAttempts.weekKey, weekKey))).limit(1))[0];
  if (existing) return { alreadySubmitted: true, correctAnswers: existing.correctAnswers, totalQuestions: existing.totalQuestions, score: existing.score, durationSeconds: existing.durationSeconds };

  const questions = getWeeklyBossQuestions(weekKey);
  const scored = scoreBossChallenge(questions, input.answers);
  await db.insert(weeklyBossAttempts).values({
    userId: input.userId,
    weekKey,
    totalQuestions: questions.length,
    correctAnswers: scored.correctAnswers,
    durationSeconds: input.elapsedSeconds,
    score: scored.score,
    answersJson: JSON.stringify(input.answers),
  });
  await Promise.all(scored.results.filter(result => !result.correct).map(result => recordMistake({
    userId: input.userId,
    source: "boss",
    sourceRef: `${weekKey}-${result.question.id}`,
    skill: result.question.skill,
    prompt: `${result.question.contextLabel}\n${result.question.audioText ?? result.question.prompt}`,
    options: result.question.choices,
    correctIndex: result.question.answer,
    selectedIndex: result.selected,
    explanation: result.question.explanation,
  })));
  const xp = 30 + scored.correctAnswers * 5;
  await recordStudySession({ userId: input.userId, activityType: "weekly-boss", skill: "mixed", score: scored.score, xp, durationSeconds: input.elapsedSeconds });
  return { alreadySubmitted: false, correctAnswers: scored.correctAnswers, totalQuestions: questions.length, score: scored.score, durationSeconds: input.elapsedSeconds, xp };
}

export async function updateLearnerSettings(userId: number, values: { targetScore?: number; weeklyGoalMinutes?: number; diagnosticScore?: number; preferredAccent?: string }) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  await ensureLearnerProfile(userId);
  await db.update(learnerProfiles).set(values).where(eq(learnerProfiles.userId, userId));
  return ensureLearnerProfile(userId);
}

export type LessonStepInput = {
  stepType: "warmup" | "explain" | "quiz" | "listen" | "recap";
  title: string;
  body: string;
  prompt?: string | null;
  options?: string[];
  answerIndex?: number | null;
  explanation?: string | null;
  audioText?: string | null;
};

export type LessonInput = {
  slug: string;
  title: string;
  summary: string;
  skill: "grammar" | "listening" | "reading" | "speaking" | "mixed";
  level: string;
  estimatedMinutes: number;
  status: "draft" | "published";
  steps: LessonStepInput[];
};

export type MistakeInput = {
  userId: number;
  source: "lesson" | "mock" | "boss";
  sourceRef: string;
  skill: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  selectedIndex: number;
  explanation: string;
};

function serializeLessonSteps(lessonId: number, steps: LessonStepInput[]) {
  return steps.map((step, position) => ({
    lessonId,
    position,
    stepType: step.stepType,
    title: step.title,
    body: step.body,
    prompt: step.prompt ?? null,
    optionsJson: step.options?.length ? JSON.stringify(step.options) : null,
    answerIndex: step.answerIndex ?? null,
    explanation: step.explanation ?? null,
    audioText: step.audioText ?? null,
  }));
}

export async function getPublishedLessons() {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  await ensureStarterLessons();
  return db.select().from(lessons).where(eq(lessons.status, "published")).orderBy(desc(lessons.publishedAt), desc(lessons.createdAt));
}

async function ensureStarterLessons() {
  const db = await getDb();
  if (!db) return;
  const author = (await db.select().from(users).where(eq(users.openId, ENV.ownerOpenId)).limit(1))[0];
  if (!author) return;
  for (const lesson of [...starterLessons, ...partLessons]) {
    const existing = (await db.select().from(lessons).where(eq(lessons.slug, lesson.slug)).limit(1))[0];
    if (existing) continue;
    await db.insert(lessons).values({
      slug: lesson.slug,
      title: lesson.title,
      summary: lesson.summary,
      skill: lesson.skill,
      level: lesson.level,
      estimatedMinutes: lesson.estimatedMinutes,
      status: lesson.status,
      authorId: author.id,
      publishedAt: new Date(),
    });
    const created = (await db.select().from(lessons).where(eq(lessons.slug, lesson.slug)).limit(1))[0];
    if (created) await db.insert(lessonSteps).values(serializeLessonSteps(created.id, lesson.steps));
  }
}

export async function getLessonBySlug(slug: string, options: { userId?: number; includeDraft?: boolean } = {}) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const lesson = (await db.select().from(lessons).where(eq(lessons.slug, slug)).limit(1))[0];
  if (!lesson || (lesson.status !== "published" && !options.includeDraft)) return undefined;
  const steps = await db.select().from(lessonSteps).where(eq(lessonSteps.lessonId, lesson.id)).orderBy(asc(lessonSteps.position));
  const progress = options.userId
    ? (await db.select().from(lessonProgress).where(and(eq(lessonProgress.lessonId, lesson.id), eq(lessonProgress.userId, options.userId))).limit(1))[0]
    : undefined;
  return { lesson, steps, progress };
}

export async function getAdminLessons() {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  return db.select().from(lessons).orderBy(desc(lessons.updatedAt));
}

export async function getAdminLesson(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const lesson = (await db.select().from(lessons).where(eq(lessons.id, id)).limit(1))[0];
  if (!lesson) return undefined;
  const steps = await db.select().from(lessonSteps).where(eq(lessonSteps.lessonId, id)).orderBy(asc(lessonSteps.position));
  return { lesson, steps };
}

export async function createLesson(authorId: number, input: LessonInput) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  await db.insert(lessons).values({
    slug: input.slug,
    title: input.title,
    summary: input.summary,
    skill: input.skill,
    level: input.level,
    estimatedMinutes: input.estimatedMinutes,
    status: input.status,
    authorId,
    publishedAt: input.status === "published" ? new Date() : null,
  });
  const created = (await db.select().from(lessons).where(eq(lessons.slug, input.slug)).limit(1))[0];
  if (!created) throw new Error("Unable to create lesson");
  if (input.steps.length) await db.insert(lessonSteps).values(serializeLessonSteps(created.id, input.steps));
  return getAdminLesson(created.id);
}

export async function updateLesson(id: number, input: LessonInput) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const existing = (await db.select().from(lessons).where(eq(lessons.id, id)).limit(1))[0];
  if (!existing) return undefined;
  await db.transaction(async tx => {
    await tx.update(lessons).set({
      slug: input.slug,
      title: input.title,
      summary: input.summary,
      skill: input.skill,
      level: input.level,
      estimatedMinutes: input.estimatedMinutes,
      status: input.status,
      publishedAt: input.status === "published" ? existing.publishedAt ?? new Date() : null,
    }).where(eq(lessons.id, id));
    await tx.delete(lessonSteps).where(eq(lessonSteps.lessonId, id));
    if (input.steps.length) await tx.insert(lessonSteps).values(serializeLessonSteps(id, input.steps));
  });
  return getAdminLesson(id);
}

export async function deleteLesson(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const existing = (await db.select().from(lessons).where(eq(lessons.id, id)).limit(1))[0];
  if (!existing) return false;
  await db.delete(lessons).where(eq(lessons.id, id));
  return true;
}

export async function saveLessonProgress(input: { userId: number; lessonId: number; currentStep: number; score: number; completed: boolean }) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const lesson = (await db.select().from(lessons).where(and(eq(lessons.id, input.lessonId), eq(lessons.status, "published"))).limit(1))[0];
  if (!lesson) throw new Error("Lesson is unavailable");
  const existing = (await db.select().from(lessonProgress).where(and(eq(lessonProgress.userId, input.userId), eq(lessonProgress.lessonId, input.lessonId))).limit(1))[0];
  const values = {
    currentStep: input.currentStep,
    score: input.score,
    status: input.completed ? "completed" as const : "in_progress" as const,
    completedAt: input.completed ? existing?.completedAt ?? new Date() : null,
  };
  if (existing) {
    await db.update(lessonProgress).set(values).where(eq(lessonProgress.id, existing.id));
  } else {
    await db.insert(lessonProgress).values({ userId: input.userId, lessonId: input.lessonId, ...values });
  }
  return { ...values, wasCompleted: existing?.status === "completed" };
}

export async function checkLessonStepAnswer(input: { userId: number; stepId: number; selected: number }) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const step = (await db.select().from(lessonSteps).where(eq(lessonSteps.id, input.stepId)).limit(1))[0];
  if (!step || step.answerIndex === null) throw new Error("This step cannot be graded");
  const lesson = (await db.select().from(lessons).where(and(eq(lessons.id, step.lessonId), eq(lessons.status, "published"))).limit(1))[0];
  if (!lesson) throw new Error("Lesson is unavailable");
  const correct = step.answerIndex === input.selected;
  if (!correct) await recordMistake({
    userId: input.userId,
    source: "lesson",
    sourceRef: `step-${step.id}`,
    skill: lesson.skill,
    prompt: step.prompt ?? step.title,
    options: JSON.parse(step.optionsJson ?? "[]") as string[],
    correctIndex: step.answerIndex,
    selectedIndex: input.selected,
    explanation: step.explanation ?? "Hãy xem lại trọng tâm của bước này.",
  });
  return { correct, explanation: step.explanation ?? "Hãy xem lại trọng tâm của bước này.", lessonId: lesson.id };
}

export async function recordMistake(input: MistakeInput) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const existing = (await db.select().from(mistakeItems).where(and(
    eq(mistakeItems.userId, input.userId), eq(mistakeItems.source, input.source), eq(mistakeItems.sourceRef, input.sourceRef),
  )).limit(1))[0];
  const now = new Date();
  if (existing) {
    await db.update(mistakeItems).set({
      skill: input.skill,
      prompt: input.prompt,
      optionsJson: JSON.stringify(input.options),
      correctIndex: input.correctIndex,
      selectedIndex: input.selectedIndex,
      explanation: input.explanation,
      status: "active",
      timesSeen: existing.timesSeen + 1,
      timesCorrect: 0,
      dueAt: now,
      lastAttemptedAt: now,
    }).where(eq(mistakeItems.id, existing.id));
    return existing.id;
  }
  await db.insert(mistakeItems).values({
    userId: input.userId,
    source: input.source,
    sourceRef: input.sourceRef,
    skill: input.skill,
    prompt: input.prompt,
    optionsJson: JSON.stringify(input.options),
    correctIndex: input.correctIndex,
    selectedIndex: input.selectedIndex,
    explanation: input.explanation,
  });
  const created = (await db.select().from(mistakeItems).where(and(
    eq(mistakeItems.userId, input.userId), eq(mistakeItems.source, input.source), eq(mistakeItems.sourceRef, input.sourceRef),
  )).limit(1))[0];
  return created?.id;
}

export async function getMistakeLab(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const all = await db.select().from(mistakeItems).where(eq(mistakeItems.userId, userId)).orderBy(asc(mistakeItems.dueAt));
  return buildMistakeLabDashboard(all, userId);
}

export async function checkMistakeAnswer(input: { userId: number; mistakeId: number; selected: number }) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  return checkMistakeAnswerWithStore({
    findItem: async ({ userId, mistakeId }) => (await db.select().from(mistakeItems).where(and(eq(mistakeItems.id, mistakeId), eq(mistakeItems.userId, userId))).limit(1))[0],
    saveReview: async ({ item, selected, status, timesSeen, timesCorrect, dueAt, attemptedAt }) => {
      await db.update(mistakeItems).set({ selectedIndex: selected, status, timesSeen, timesCorrect, dueAt, lastAttemptedAt: attemptedAt }).where(eq(mistakeItems.id, item.id));
    },
  }, input);
}
