import { describe, expect, it } from "vitest";
import { getWeeklyBossQuestions } from "./bossChallengeContent";
import { getIsoWeekKey, scoreBossChallenge } from "./bossChallengeLogic";

describe("Boss Challenge", () => {
  it("builds a deterministic weekly mix of four Part 2, three Part 3 and three Part 7 questions", () => {
    const questions = getWeeklyBossQuestions("2026-W34");
    expect(questions).toHaveLength(10);
    expect(questions.filter(question => question.part === 2)).toHaveLength(4);
    expect(questions.filter(question => question.part === 3)).toHaveLength(3);
    expect(questions.filter(question => question.part === 7)).toHaveLength(3);
    expect(getWeeklyBossQuestions("2026-W34").map(question => question.id)).toEqual(questions.map(question => question.id));
  });

  it("uses ISO week boundaries and scores only complete unique answer sets", () => {
    expect(getIsoWeekKey(new Date("2026-01-01T12:00:00Z"))).toBe("2026-W01");
    const questions = getWeeklyBossQuestions("2026-W34");
    const answers = questions.map(question => ({ questionId: question.id, selected: question.answer }));
    expect(scoreBossChallenge(questions, answers)).toMatchObject({ correctAnswers: 10, score: 100 });
    expect(() => scoreBossChallenge(questions, answers.slice(1))).toThrow("All Boss");
  });
});
