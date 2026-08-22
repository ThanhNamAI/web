import { describe, expect, it } from "vitest";
import { getEarnedAchievementDefinitions } from "./achievementLogic";

describe("achievement criteria", () => {
  it("awards the first learning milestone without requiring social comparison", () => {
    expect(getEarnedAchievementDefinitions({ totalSessions: 1, totalReviews: 0, totalXp: 0, currentStreak: 1 }).map(item => item.code)).toEqual(["first-step"]);
  });

  it("unlocks review, XP and streak milestones only when their criteria are met", () => {
    const codes = getEarnedAchievementDefinitions({ totalSessions: 25, totalReviews: 20, totalXp: 120, currentStreak: 7 }).map(item => item.code);
    expect(codes).toContain("review-rhythm");
    expect(codes).toContain("hundred-xp");
    expect(codes).toContain("three-day-flow");
    expect(codes).toContain("seven-day-steadiness");
  });
});
