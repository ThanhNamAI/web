import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./db", async importOriginal => {
  const actual = await importOriginal<typeof import("./db")>();
  return { ...actual, getBossChallenge: vi.fn(), submitBossChallenge: vi.fn() };
});

import { getBossChallenge, submitBossChallenge } from "./db";
import { appRouter } from "./routers";

const oauthContext = (id: number) => ({
  user: { id, openId: `oauth-${id}`, name: "QA learner", email: null, loginMethod: null, role: "user" },
  req: {},
  res: {},
}) as never;

describe("Boss Challenge tRPC", () => {
  beforeEach(() => vi.clearAllMocks());

  it("derives the dashboard from the authenticated OAuth user", async () => {
    vi.mocked(getBossChallenge).mockResolvedValue({ weekKey: "2026-W34", durationLimitSeconds: 600, questions: [], attempt: undefined } as never);
    await appRouter.createCaller(oauthContext(55)).boss.dashboard();
    expect(getBossChallenge).toHaveBeenCalledWith(55);
  });

  it("submits only valid 10-answer challenges under the authenticated OAuth user", async () => {
    vi.mocked(submitBossChallenge).mockResolvedValue({ alreadySubmitted: false, correctAnswers: 8, totalQuestions: 10, score: 80, durationSeconds: 420, xp: 70 } as never);
    const answers = Array.from({ length: 10 }, (_, index) => ({ questionId: `question-${index}`, selected: index % 4 }));
    await appRouter.createCaller(oauthContext(55)).boss.submit({ answers, elapsedSeconds: 420 });
    expect(submitBossChallenge).toHaveBeenCalledWith({ userId: 55, answers, elapsedSeconds: 420 });
    await expect(appRouter.createCaller(oauthContext(55)).boss.submit({ answers: answers.slice(1), elapsedSeconds: 420 })).rejects.toBeTruthy();
  });
});
