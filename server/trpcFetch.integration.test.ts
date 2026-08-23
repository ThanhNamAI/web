import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchTrpc } from "../client/src/lib/trpcFetch";

afterEach(() => vi.unstubAllGlobals());

describe("tRPC fetch HTML recovery", () => {
  it("retries an idempotent Learn dashboard query when a transient SPA document is returned", async () => {
    const fetch = vi.fn()
      .mockResolvedValueOnce(new Response("<!doctype html><html><body>SPA</body></html>", { headers: { "content-type": "text/html" } }))
      .mockResolvedValueOnce(new Response('[{"result":{"data":{"json":{"cards":[]}}}}]', { headers: { "content-type": "application/json" } }));
    vi.stubGlobal("fetch", fetch);

    const response = await fetchTrpc("/api/trpc/learning.dashboard?batch=1");

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenNthCalledWith(1, "/api/trpc/learning.dashboard?batch=1", expect.objectContaining({ credentials: "include" }));
    expect(response.headers.get("content-type")).toContain("application/json");
    await expect(response.json()).resolves.toEqual([{ result: { data: { json: { cards: [] } } } }]);
  });

  it("does not replay tRPC mutations when an intermediary returns HTML", async () => {
    const fetch = vi.fn().mockResolvedValue(new Response("<!doctype html><html><body>SPA</body></html>", { headers: { "content-type": "text/html" } }));
    vi.stubGlobal("fetch", fetch);

    const response = await fetchTrpc("/api/trpc/learning.review", { method: "POST", body: "{}" });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(response.headers.get("content-type")).toContain("text/html");
  });
});
