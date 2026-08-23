import { describe, expect, it } from "vitest";
import { businessPracticeSets } from "../shared/businessPracticeContent";
import { scoreBusinessPractice } from "./businessPracticeLogic";

describe("business practice content and scoring", () => {
  it("provides three original business sets with balanced Part 3 and Part 7 coverage", () => {
    expect(businessPracticeSets).toHaveLength(3);
    businessPracticeSets.forEach(set => {
      expect(set.questions).toHaveLength(12);
      expect(set.questions.filter(question => question.part === 3)).toHaveLength(6);
      expect(set.questions.filter(question => question.part === 7)).toHaveLength(6);
      expect(new Set(set.questions.map(question => question.id)).size).toBe(12);
      expect(set.questions.every(question => question.answer >= 0 && question.answer < question.choices.length)).toBe(true);
      expect(set.questions.filter(question => question.part === 3).every(question => Boolean(question.transcript))).toBe(true);
      expect(set.questions.filter(question => question.part === 7).every(question => Boolean(question.passage))).toBe(true);
    });
  });

  it("scores a complete set and rejects duplicate or incomplete answer payloads", () => {
    const set = businessPracticeSets[0]!;
    const correctAnswers = set.questions.map(question => ({ questionId: question.id, selected: question.answer }));
    const result = scoreBusinessPractice(set, correctAnswers);
    expect(result).toMatchObject({ correctAnswers: 12, totalQuestions: 12, score: 100 });
    expect(result.byPart).toEqual([{ part: 3, correct: 6, total: 6, accuracy: 100 }, { part: 7, correct: 6, total: 6, accuracy: 100 }]);
    expect(() => scoreBusinessPractice(set, correctAnswers.slice(1))).toThrow("đầy đủ");
    expect(() => scoreBusinessPractice(set, [...correctAnswers.slice(0, 11), correctAnswers[0]!])).toThrow("chỉ được nộp một lựa chọn");
  });
});
