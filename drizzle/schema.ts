import { double, index, int, mysqlEnum, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

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

export const lessons = mysqlTable("lessons", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 120 }).notNull(),
  title: varchar("title", { length: 160 }).notNull(),
  summary: text("summary").notNull(),
  skill: mysqlEnum("skill", ["grammar", "listening", "reading", "speaking", "mixed"]).default("mixed").notNull(),
  level: varchar("level", { length: 32 }).default("Foundation").notNull(),
  estimatedMinutes: int("estimatedMinutes").default(15).notNull(),
  status: mysqlEnum("status", ["draft", "published"]).default("draft").notNull(),
  authorId: int("authorId").notNull().references(() => users.id),
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, table => [
  uniqueIndex("lessons_slug_unique").on(table.slug),
  index("lessons_status_created_idx").on(table.status, table.createdAt),
]);

export const lessonSteps = mysqlTable("lesson_steps", {
  id: int("id").autoincrement().primaryKey(),
  lessonId: int("lessonId").notNull().references(() => lessons.id, { onDelete: "cascade" }),
  position: int("position").notNull(),
  stepType: mysqlEnum("stepType", ["warmup", "explain", "quiz", "listen", "recap"]).notNull(),
  title: varchar("title", { length: 160 }).notNull(),
  body: text("body").notNull(),
  prompt: text("prompt"),
  optionsJson: text("optionsJson"),
  answerIndex: int("answerIndex"),
  explanation: text("explanation"),
  audioText: text("audioText"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, table => [
  uniqueIndex("lesson_steps_lesson_position_unique").on(table.lessonId, table.position),
  index("lesson_steps_lesson_idx").on(table.lessonId),
]);

export const lessonProgress = mysqlTable("lesson_progress", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  lessonId: int("lessonId").notNull().references(() => lessons.id, { onDelete: "cascade" }),
  currentStep: int("currentStep").default(0).notNull(),
  score: int("score").default(0).notNull(),
  status: mysqlEnum("status", ["in_progress", "completed"]).default("in_progress").notNull(),
  completedAt: timestamp("completedAt"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, table => [
  uniqueIndex("lesson_progress_user_lesson_unique").on(table.userId, table.lessonId),
  index("lesson_progress_lesson_idx").on(table.lessonId),
]);

export type LearnerProfile = typeof learnerProfiles.$inferSelect;
export type VocabularyProgress = typeof vocabularyProgress.$inferSelect;
export type StudySession = typeof studySessions.$inferSelect;
export type LearningAchievement = typeof learningAchievements.$inferSelect;
export type MockTestAttempt = typeof mockTestAttempts.$inferSelect;
export type Lesson = typeof lessons.$inferSelect;
export type LessonStep = typeof lessonSteps.$inferSelect;
export type LessonProgress = typeof lessonProgress.$inferSelect;
