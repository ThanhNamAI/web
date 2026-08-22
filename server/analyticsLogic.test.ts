import { describe, expect, it } from "vitest";
import { getSkillAnalytics } from "./analyticsLogic";

describe("skill analytics", () => {
  it("identifies the lowest measured skill as a focus area", () => {
    const now = new Date();
    const analytics = getSkillAnalytics([
      { skill: "grammar", score: 90, completedAt: now },
      { skill: "listening", score: 42, completedAt: now },
      { skill: "listening", score: 50, completedAt: now },
    ]);
    expect(analytics.focusSkill).toBe("listening");
    expect(analytics.recommendation).toContain("nghe");
  });

  it("does not invent a strength when no activities exist", () => {
    const analytics = getSkillAnalytics([]);
    expect(analytics.strengthSkill).toBeUndefined();
    expect(analytics.focusSkill).toBe("vocabulary");
  });
});
