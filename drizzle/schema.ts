import { double, int, mysqlEnum, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const learnerProfiles = mysqlTable("learner_profiles", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique().references(() => users.id, { onDelete: "cascade" }),
  currentStage: varchar("currentStage", { length: 32 }).default("Foundation").notNull(),
  targetScore: int("targetScore").default(800).notNull(),
  weeklyGoalMinutes: int("weeklyGoalMinutes").default(180).notNull(),
  totalXp: int("totalXp").default(0).notNull(),
  currentStreak: int("currentStreak").default(0).notNull(),
  longestStreak: int("longestStreak").default(0).notNull(),
  lastStudyDate: varchar("lastStudyDate", { length: 10 }),
  diagnosticScore: int("diagnosticScore").default(0).notNull(),
  preferredAccent: varchar("preferredAccent", { length: 16 }).default("en-US").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const vocabularyProgress = mysqlTable("vocabulary_progress", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  vocabularyId: varchar("vocabularyId", { length: 80 }).notNull(),
  repetitions: int("repetitions").default(0).notNull(),
  easeFactor: double("easeFactor").default(2.5).notNull(),
  intervalDays: int("intervalDays").default(0).notNull(),
  dueAt: timestamp("dueAt").defaultNow().notNull(),
  lastQuality: int("lastQuality").default(0).notNull(),
  lastReviewedAt: timestamp("lastReviewedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, table => [
  uniqueIndex("vocabulary_progress_user_vocab_unique").on(table.userId, table.vocabularyId),
]);

export const studySessions = mysqlTable("study_sessions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  activityType: varchar("activityType", { length: 48 }).notNull(),
  skill: varchar("skill", { length: 24 }).notNull(),
  score: int("score").default(0).notNull(),
  xp: int("xp").default(0).notNull(),
  durationSeconds: int("durationSeconds").default(0).notNull(),
  completedAt: timestamp("completedAt").defaultNow().notNull(),
});

export const learningAchievements = mysqlTable("learning_achievements", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  code: varchar("code", { length: 48 }).notNull(),
  evidence: varchar("evidence", { length: 120 }).notNull(),
  awardedAt: timestamp("awardedAt").defaultNow().notNull(),
}, table => [
  uniqueIndex("learning_achievements_user_code_unique").on(table.userId, table.code),
]);

export const mockTestAttempts = mysqlTable("mock_test_attempts", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  mode: varchar("mode", { length: 24 }).default("simulation").notNull(),
  totalQuestions: int("totalQuestions").notNull(),
  correctAnswers: int("correctAnswers").notNull(),
  rawScore: int("rawScore").notNull(),
  durationSeconds: int("durationSeconds").notNull(),
  partScoresJson: text("partScoresJson").notNull(),
  completedAt: timestamp("completedAt").defaultNow().notNull(),
});

export type LearnerProfile = typeof learnerProfiles.$inferSelect;
export type VocabularyProgress = typeof vocabularyProgress.$inferSelect;
export type StudySession = typeof studySessions.$inferSelect;
export type LearningAchievement = typeof learningAchievements.$inferSelect;
export type MockTestAttempt = typeof mockTestAttempts.$inferSelect;
