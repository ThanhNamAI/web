export type AchievementMetrics = {
  totalSessions: number;
  totalReviews: number;
  totalXp: number;
  currentStreak: number;
};

export type AchievementDefinition = {
  code: string;
  evidence: string;
};

/** Achievements validate demonstrated study behaviors, not social comparison. */
export function getEarnedAchievementDefinitions(metrics: AchievementMetrics): AchievementDefinition[] {
  const earned: AchievementDefinition[] = [];
  if (metrics.totalSessions >= 1) earned.push({ code: "first-step", evidence: "Completed the first tracked learning activity" });
  if (metrics.totalReviews >= 20) earned.push({ code: "review-rhythm", evidence: "Completed 20 spaced-repetition reviews" });
  if (metrics.totalXp >= 100) earned.push({ code: "hundred-xp", evidence: "Earned 100 learning XP" });
  if (metrics.currentStreak >= 3) earned.push({ code: "three-day-flow", evidence: "Studied on three consecutive days" });
  if (metrics.currentStreak >= 7) earned.push({ code: "seven-day-steadiness", evidence: "Studied on seven consecutive days" });
  return earned;
}
