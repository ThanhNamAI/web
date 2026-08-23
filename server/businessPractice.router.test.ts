import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./db", async importOriginal => {
  const actual = await importOriginal<typeof import("./db")>();
  return { ...actual, recordMockTestAttempt: vi.fn(), recordMistake: vi.fn() };
});

import { recordMistake, recordMockTestAttempt } from "./db";
import { appRouter } from "./routers";
import { businessPracticeSets } from "../shared/businessPracticeContent";

const oauthContext = (id: number) => ({
  user: { id, openId: `oauth-${id}`, name: "QA learner", email: null, loginMethod: null, role: "user" },
  req: {},
  res: {},
}) as never;

describe("Business practice tRPC", () => {
  beforeEach(() => vi.clearAllMocks());

  it("does not expose answer keys when an authenticated learner opens a set", async () => {
    const set = await appRouter.createCaller(oauthContext(55)).learning.businessPracticeSet({ setId: "project-launch-vendor" });
    expect(set.questions).toHaveLength(12);
    expect(set.questions.every(question => !("answer" in question) && !("explanation" in question))).toBe(true);
  });

  it("uses the OAuth user ID to save one completed set and its incorrect answers", async () => {
    const source = businessPracticeSets[0]!;
    const answers = source.questions.map((question, index) => ({ questionId: question.id, selected: index === 0 ? (question.answer + 1) % 4 : question.answer }));
    const result = await appRouter.createCaller(oauthContext(55)).learning.submitBusinessPractice({ setId: source.id, answers, elapsedSeconds: 600 });
    expect(result).toMatchObject({ correctAnswers: 11, totalQuestions: 12, score: 92 });
    expect(recordMockTestAttempt).toHaveBeenCalledWith(expect.objectContaining({ userId: 55, totalQuestions: 12, correctAnswers: 11 }));
    expect(recordMistake).toHaveBeenCalledWith(expect.objectContaining({ userId: 55, source: "mock", sourceRef: expect.stringContaining(source.id) }));
  });
});
