import express from "express";
import type { AddressInfo } from "node:net";
import type { Server } from "node:http";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { COOKIE_NAME, encodeOAuthState, OAUTH_STATE_COOKIE } from "../shared/const";

vi.mock("./db", () => ({ upsertUser: vi.fn() }));
vi.mock("./_core/sdk", () => ({
  sdk: {
    exchangeCodeForToken: vi.fn(),
    getUserInfo: vi.fn(),
    createSessionToken: vi.fn(),
  },
}));

import * as db from "./db";
import { registerOAuthRoutes } from "./_core/oauth";
import { sdk } from "./_core/sdk";

let server: Server;
let baseUrl: string;

beforeEach(async () => {
  vi.clearAllMocks();
  const app = express();
  registerOAuthRoutes(app);
  server = await new Promise<Server>(resolve => {
    const instance = app.listen(0, "127.0.0.1", () => resolve(instance));
  });
  baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});

afterEach(async () => {
  await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
});

describe("OAuth callback HTTP e2e", () => {
  it("fails closed when a callback omits required parameters", async () => {
    const response = await fetch(`${baseUrl}/api/oauth/callback`, { redirect: "manual" });
    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({ error: "code and state are required" });
    expect(sdk.exchangeCodeForToken).not.toHaveBeenCalled();
  });

  it("fails closed when the state nonce does not match the browser cookie", async () => {
    const state = encodeOAuthState({ redirectUri: "https://example.test/api/oauth/callback", nonce: "expected-in-state" });
    const response = await fetch(`${baseUrl}/api/oauth/callback?code=code-123&state=${encodeURIComponent(state)}`, {
      headers: { cookie: `${OAUTH_STATE_COOKIE}=different-cookie-nonce` },
      redirect: "manual",
    });
    expect(response.status).toBe(403);
    await expect(response.json()).resolves.toEqual({ error: "invalid oauth state" });
    expect(sdk.exchangeCodeForToken).not.toHaveBeenCalled();
  });

  it("creates a user session and redirects only after a valid one-time state check", async () => {
    const nonce = "browser-owned-nonce";
    const state = encodeOAuthState({ redirectUri: "https://example.test/api/oauth/callback", nonce });
    vi.mocked(sdk.exchangeCodeForToken).mockResolvedValue({ accessToken: "provider-token" } as never);
    vi.mocked(sdk.getUserInfo).mockResolvedValue({ openId: "oauth-e2e-user", name: "E2E Learner", email: "learner@example.test", loginMethod: "manus" } as never);
    vi.mocked(sdk.createSessionToken).mockResolvedValue("signed-session" as never);

    const response = await fetch(`${baseUrl}/api/oauth/callback?code=code-123&state=${encodeURIComponent(state)}`, {
      headers: { cookie: `${OAUTH_STATE_COOKIE}=${nonce}` },
      redirect: "manual",
    });

    expect(response.status).toBe(302);
    expect(response.headers.get("location")).toBe("/");
    expect(response.headers.get("set-cookie")).toContain(COOKIE_NAME);
    expect(response.headers.get("set-cookie")).toContain(OAUTH_STATE_COOKIE);
    expect(db.upsertUser).toHaveBeenCalledWith(expect.objectContaining({ openId: "oauth-e2e-user", name: "E2E Learner" }));
    expect(sdk.exchangeCodeForToken).toHaveBeenCalledWith("code-123", state);
  });
});
