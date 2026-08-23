import { afterEach, describe, expect, it, vi } from "vitest";
import { createLoginInitiation, startLogin } from "../client/src/const";
import { decodeOAuthState, OAUTH_STATE_COOKIE } from "../shared/const";

describe("OAuth login initiation e2e", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it("creates a browser-bound nonce cookie and sends it with the correct origin callback", () => {
    const initiation = createLoginInitiation({
      oauthPortalUrl: "https://oauth.example.test/",
      appId: "toeic-quest-test-app",
      origin: "https://learn.example.test",
      nonce: "deterministic-browser-nonce",
    });
    const url = new URL(initiation.url);

    expect(initiation.cookie).toBe(`${OAUTH_STATE_COOKIE}=deterministic-browser-nonce; Path=/; Max-Age=600; SameSite=None; Secure`);
    expect(url.origin).toBe("https://oauth.example.test");
    expect(url.pathname).toBe("/app-auth");
    expect(url.searchParams.get("appId")).toBe("toeic-quest-test-app");
    expect(url.searchParams.get("redirectUri")).toBe("https://learn.example.test/api/oauth/callback");
    expect(url.searchParams.get("type")).toBe("signIn");
    expect(decodeOAuthState(url.searchParams.get("state") ?? "")).toEqual({
      redirectUri: "https://learn.example.test/api/oauth/callback",
      nonce: "deterministic-browser-nonce",
    });
  });

  it("applies the nonce cookie and redirects the browser when the real login action runs", () => {
    const browser = { location: { origin: "https://learn.example.test", href: "" } };
    const document = { cookie: "" };
    vi.stubGlobal("window", browser);
    vi.stubGlobal("document", document);
    vi.stubGlobal("crypto", { randomUUID: () => "cta-click-nonce" });
    vi.stubEnv("VITE_OAUTH_PORTAL_URL", "https://oauth.example.test");
    vi.stubEnv("VITE_APP_ID", "toeic-quest-test-app");

    startLogin();

    expect(document.cookie).toBe(`${OAUTH_STATE_COOKIE}=cta-click-nonce; Path=/; Max-Age=600; SameSite=None; Secure`);
    const destination = new URL(browser.location.href);
    expect(destination.origin).toBe("https://oauth.example.test");
    expect(destination.searchParams.get("redirectUri")).toBe("https://learn.example.test/api/oauth/callback");
    expect(decodeOAuthState(destination.searchParams.get("state") ?? "").nonce).toBe("cta-click-nonce");
  });
});
