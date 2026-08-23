import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createContext(role: "user" | "admin" | null): TrpcContext {
  return {
    user: role ? {
      id: 17,
      openId: `lesson-${role}`,
      email: `${role}@example.com`,
      name: role,
      loginMethod: "manus",
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    } : null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("admin.lessons authorization", () => {
  it("rejects a signed-in learner before any content query runs", async () => {
    const caller = appRouter.createCaller(createContext("user"));
    await expect(caller.admin.lessons.list()).rejects.toMatchObject({ code: "FORBIDDEN" });
  });

  it("rejects an unauthenticated caller before any content query runs", async () => {
    const caller = appRouter.createCaller(createContext(null));
    await expect(caller.admin.lessons.list()).rejects.toMatchObject({ code: "FORBIDDEN" });
  });
});
