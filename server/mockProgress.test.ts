import { describe, expect, it } from "vitest";
import { buildMockProgressData } from "../shared/mockProgress";

describe("mock progress analytics", () => {
  it("derives score, duration and weighted Listening/Reading accuracy from an owned attempt", () => {
    const rows = buildMockProgressData([{ id: 1, rawScore: 72, durationSeconds: 4_230, completedAt: new Date("2026-08-23T00:00:00.000Z"), partScoresJson: JSON.stringify([{ part: 1, correct: 4, total: 6, accuracy: 67 }, { part: 2, correct: 20, total: 25, accuracy: 80 }, { part: 5, correct: 22, total: 30, accuracy: 73 }, { part: 7, correct: 39, total: 54, accuracy: 72 }]) }]);
    expect(rows).toEqual([expect.objectContaining({ attempt: "Lần 1", score: 72, minutes: 71, listening: 77, reading: 73 })]);
  });

  it("falls back safely when stored part scores are malformed", () => {
    expect(buildMockProgressData([{ id: 2, rawScore: 0, durationSeconds: 1, completedAt: new Date(), partScoresJson: "invalid" }])[0]).toEqual(expect.objectContaining({ listening: 0, reading: 0, minutes: 1 }));
  });
});
