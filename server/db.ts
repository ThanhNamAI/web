import { and, desc, eq, lte } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, learnerProfiles, learningAchievements, mockTestAttempts, studySessions, users, vocabularyProgress } from "../drizzle/schema";
import { ENV } from './_core/env';
import { getEarnedAchievementDefinitions } from "./achievementLogic";
import { getSkillAnalytics } from "./analyticsLogic";

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

export async function updateLearnerSettings(userId: number, values: { targetScore?: number; weeklyGoalMinutes?: number; diagnosticScore?: number; preferredAccent?: string }) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  await ensureLearnerProfile(userId);
  await db.update(learnerProfiles).set(values).where(eq(learnerProfiles.userId, userId));
  return ensureLearnerProfile(userId);
}
