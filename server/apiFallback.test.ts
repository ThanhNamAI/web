import express from "express";
import type { AddressInfo } from "node:net";
import type { Server } from "node:http";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { registerApiFallback } from "./_core/apiFallback";

let server: Server;
let baseUrl: string;

beforeEach(async () => {
  const app = express();
  app.get("/api/trpc/known", (_req, res) => res.json([{ result: { data: { json: { ok: true } } } }]));
  registerApiFallback(app);
  app.use((_req, res) => res.type("html").send("<!doctype html><html><body>SPA</body></html>"));
  server = await new Promise<Server>(resolve => {
    const instance = app.listen(0, "127.0.0.1", () => resolve(instance));
  });
  baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});

afterEach(async () => {
  await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
});

describe("API fallback", () => {
  it("preserves handled tRPC JSON responses", async () => {
    const response = await fetch(`${baseUrl}/api/trpc/known`);
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual([{ result: { data: { json: { ok: true } } } }]);
  });

  it("returns tRPC-shaped JSON instead of SPA HTML for a missed tRPC route", async () => {
    const response = await fetch(`${baseUrl}/api/trpc/missing`);
    expect(response.status).toBe(404);
    expect(response.headers.get("content-type")).toContain("application/json");
    await expect(response.json()).resolves.toMatchObject([{ error: { json: { data: { code: "NOT_FOUND", httpStatus: 404 } } } }]);
  });

  it("returns JSON for other missed API routes while retaining the SPA fallback for pages", async () => {
    const apiResponse = await fetch(`${baseUrl}/api/missing`);
    expect(apiResponse.status).toBe(404);
    expect(apiResponse.headers.get("content-type")).toContain("application/json");
    const pageResponse = await fetch(`${baseUrl}/learn?from_webdev=1`);
    expect(pageResponse.status).toBe(200);
    expect(pageResponse.headers.get("content-type")).toContain("text/html");
  });
});
