import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./db", async importOriginal => {
  const actual = await importOriginal<typeof import("./db")>();
  return { ...actual, getProgressDashboard: vi.fn() };
});

import { getProgressDashboard } from "./db";
import { appRouter } from "./routers";

const oauthContext = (id: number) => ({
  user: { id, openId: `oauth-${id}`, name: "QA learner", email: null, loginMethod: null, role: "user" },
  req: {},
  res: {},
}) as never;

describe("progress dashboard tRPC", () => {
  beforeEach(() => vi.clearAllMocks());

  it("derives all history from the authenticated OAuth user", async () => {
    vi.mocked(getProgressDashboard).mockResolvedValue({ profile: {}, summary: {}, daily: [], assessmentTrend: [], assessmentHistory: [], sessions: [] } as never);
    await appRouter.createCaller(oauthContext(78)).learning.progressDashboard();
    expect(getProgressDashboard).toHaveBeenCalledWith(78);
  });
});
