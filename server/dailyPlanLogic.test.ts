import { describe, expect, it } from "vitest";
import { buildDailyPlan } from "./dailyPlanLogic";

describe("buildDailyPlan", () => {
  it("allocates exactly fifteen minutes and emphasizes the measured weak skill", () => {
    const plan = buildDailyPlan({ focusSkill: "listening", focusAccuracy: 42, dueCards: 6 });
    expect(plan.totalSeconds).toBe(900);
    expect(plan.blocks.reduce((sum, block) => sum + block.seconds, 0)).toBe(900);
    expect(plan.blocks[1]).toMatchObject({ skill: "listening", seconds: 420 });
    expect(plan.rationale).toContain("42%");
  });

  it("uses a safe vocabulary default for learners without history", () => {
    const plan = buildDailyPlan({ dueCards: 0 });
    expect(plan.focusSkill).toBe("vocabulary");
    expect(plan.blocks[0]?.seconds).toBe(180);
  });
});
