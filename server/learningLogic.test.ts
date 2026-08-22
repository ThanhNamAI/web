import { describe, expect, it } from "vitest";
import { calculateSrsUpdate, calculateXp, getNextSessionRecommendation } from "./learningLogic";

describe("learning logic", () => {
  it("resets an unsuccessful card to a one-day review", () => {
    expect(calculateSrsUpdate({ repetitions: 4, easeFactor: 2.5, intervalDays: 16 }, 0)).toMatchObject({ repetitions: 0, intervalDays: 1, easeFactor: 2.3 });
  });

  it("grows review intervals after successive successful recalls", () => {
    const first = calculateSrsUpdate({ repetitions: 0, easeFactor: 2.5, intervalDays: 0 }, 3);
    const second = calculateSrsUpdate(first, 3);
    expect(first.intervalDays).toBe(1);
    expect(second.intervalDays).toBe(3);
    expect(second.easeFactor).toBeGreaterThan(first.easeFactor);
  });

  it("prioritizes due cards before a weaker skill", () => {
    const recommendation = getNextSessionRecommendation({ dueCards: 9, grammarScore: 40, listeningScore: 30, readingScore: 50 });
    expect(recommendation.mode).toBe("SRS");
    expect(calculateXp(100, 600)).toBeGreaterThan(calculateXp(50, 60));
  });
});
