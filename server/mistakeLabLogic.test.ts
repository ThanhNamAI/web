import { describe, expect, it } from "vitest";
import { getMistakeReviewUpdate } from "./mistakeLabLogic";

describe("Mistake Lab review cadence", () => {
  const now = new Date("2026-08-23T00:00:00.000Z");

  it("schedules a correct first repair for the following day", () => {
    const result = getMistakeReviewUpdate({ correct: true, previousCorrect: 0, now });
    expect(result).toMatchObject({ status: "active", timesCorrect: 1, mastered: false });
    expect(result.dueAt.toISOString()).toBe("2026-08-24T00:00:00.000Z");
  });

  it("masters an item only after a second correct repair", () => {
    const result = getMistakeReviewUpdate({ correct: true, previousCorrect: 1, now });
    expect(result).toMatchObject({ status: "mastered", timesCorrect: 2, mastered: true });
  });

  it("resets the repair count and schedules a short retry after another mistake", () => {
    const result = getMistakeReviewUpdate({ correct: false, previousCorrect: 1, now });
    expect(result).toMatchObject({ status: "active", timesCorrect: 0, mastered: false });
    expect(result.dueAt.toISOString()).toBe("2026-08-23T00:15:00.000Z");
  });
});
