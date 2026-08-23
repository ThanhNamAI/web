import { describe, expect, it } from "vitest";
import { buildProgressDashboardData } from "./progressDashboardLogic";

describe("progress dashboard aggregation", () => {
  it("builds history and charts only from supplied attempts and study sessions", () => {
    const result = buildProgressDashboardData({
      now: new Date("2026-08-23T12:00:00.000Z"),
      sessions: [
        { id: 1, activityType: "mock-listening", skill: "listening", score: 70, xp: 12, durationSeconds: 600, completedAt: new Date("2026-08-22T10:00:00.000Z") },
        { id: 2, activityType: "srs-card", skill: "vocabulary", score: 100, xp: 4, durationSeconds: 120, completedAt: new Date("2026-08-23T10:00:00.000Z") },
      ],
      mockAttempts: [{ id: 1, mode: "business", totalQuestions: 12, correctAnswers: 9, rawScore: 75, durationSeconds: 720, partScoresJson: "[]", completedAt: new Date("2026-08-22T10:00:00.000Z") }],
      bossAttempts: [{ id: 1, weekKey: "2026-W34", totalQuestions: 10, correctAnswers: 8, score: 80, durationSeconds: 500, completedAt: new Date("2026-08-23T10:00:00.000Z") }],
    });
    expect(result.summary).toMatchObject({ totalMinutes: 12, totalSessions: 2, completedAssessments: 2, averageScore: 78, latestScore: 80, scoreDelta: 5 });
    expect(result.assessmentHistory.map(item => item.type)).toEqual(["Boss tuần", "Bộ đề doanh nghiệp"]);
    expect(result.daily.at(-1)).toMatchObject({ minutes: 2, xp: 4, sessions: 1 });
  });

  it("returns neutral empty states rather than invented activity", () => {
    const result = buildProgressDashboardData({ sessions: [], mockAttempts: [], bossAttempts: [], now: new Date("2026-08-23T12:00:00.000Z") });
    expect(result.summary).toMatchObject({ totalMinutes: 0, totalSessions: 0, completedAssessments: 0, averageScore: 0, latestScore: null, scoreDelta: null });
    expect(result.assessmentTrend).toEqual([]);
    expect(result.daily.every(day => day.minutes === 0 && day.sessions === 0)).toBe(true);
  });
});
