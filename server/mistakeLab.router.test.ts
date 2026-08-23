import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./db", async importOriginal => {
  const actual = await importOriginal<typeof import("./db")>();
  return {
    ...actual,
    getMistakeLab: vi.fn(),
    checkMistakeAnswer: vi.fn(),
    recordStudySession: vi.fn(),
  };
});

import { checkMistakeAnswer, getMistakeLab } from "./db";
import { appRouter } from "./routers";

const oauthContext = (id: number) => ({
  user: { id, openId: `oauth-${id}`, name: "QA learner", email: null, loginMethod: null, role: "user" },
  req: {},
  res: {},
}) as never;

describe("Mistake Lab tRPC isolation", () => {
  beforeEach(() => vi.clearAllMocks());

  it("passes the authenticated OAuth user id to dashboard", async () => {
    vi.mocked(getMistakeLab).mockImplementation(async userId => ({ items: [{ id: userId, prompt: `item-${userId}` }], summary: { active: 1, due: 1, mastered: 0 } }) as never);

    const dashboard = await appRouter.createCaller(oauthContext(42)).mistakeLab.dashboard();

    expect(getMistakeLab).toHaveBeenCalledWith(42);
    expect(dashboard.items).toEqual([{ id: 42, prompt: "item-42" }]);
  });

  it("passes the authenticated OAuth user id to answer checking and preserves a cross-user rejection", async () => {
    vi.mocked(checkMistakeAnswer).mockImplementation(async input => {
      if (input.userId !== 42) throw new Error("Mistake item is unavailable");
      return { correct: true, mastered: false, explanation: "ok", remainingRepairs: 1 };
    });

    await expect(appRouter.createCaller(oauthContext(8)).mistakeLab.checkAnswer({ mistakeId: 91, selected: 1 })).rejects.toThrow("unavailable");
    expect(checkMistakeAnswer).toHaveBeenCalledWith({ userId: 8, mistakeId: 91, selected: 1 });
  });
});
