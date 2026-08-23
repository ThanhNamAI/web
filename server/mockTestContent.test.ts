import { describe, expect, it } from "vitest";
import { mockQuestions, mockTestBlueprint } from "../shared/mockTestContent";

describe("full mock-test content", () => {
  it("matches the authored 200-question Part 1–7 blueprint", () => {
    expect(mockQuestions).toHaveLength(200);
    expect(mockQuestions.filter(question => question.skill === "listening")).toHaveLength(100);
    expect(mockQuestions.filter(question => question.skill === "reading")).toHaveLength(100);
    Object.entries(mockTestBlueprint.partCounts).forEach(([part, count]) => {
      expect(mockQuestions.filter(question => question.part === Number(part))).toHaveLength(count);
    });
  });

  it("keeps stable IDs and an answer index for every authored practice item", () => {
    expect(new Set(mockQuestions.map(question => question.id)).size).toBe(mockQuestions.length);
    expect(mockQuestions.every(question => question.answer >= 0 && question.answer < question.choices.length)).toBe(true);
  });
});
