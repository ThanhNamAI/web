function requestUrl(input: RequestInfo | URL) {
  if (typeof input === "string") return input;
  if (input instanceof URL) return input.toString();
  return input.url;
}

function isReadTrpcRequest(input: RequestInfo | URL, init?: RequestInit) {
  const method = (init?.method ?? "GET").toUpperCase();
  return method === "GET" && requestUrl(input).includes("/api/trpc/");
}

/**
 * A Vite/static fallback can briefly answer an in-flight read request with
 * index.html during a server transition. Retry only idempotent tRPC reads;
 * mutations must never be replayed automatically.
 */
export async function fetchTrpc(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const requestInit = { ...(init ?? {}), credentials: "include" as const };
  const response = await globalThis.fetch(input, requestInit);
  const contentType = response.headers.get("content-type") ?? "";
  if (!isReadTrpcRequest(input, init) || !contentType.includes("text/html")) return response;

  const bodyStart = (await response.clone().text()).trimStart().slice(0, 32).toLowerCase();
  if (!bodyStart.startsWith("<!doctype") && !bodyStart.startsWith("<html")) return response;

  return globalThis.fetch(input, requestInit);
}
