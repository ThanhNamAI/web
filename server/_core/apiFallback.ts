import type { Express, Request, Response } from "express";

function trpcNotFoundResponse(req: Request, res: Response) {
  res.status(404).json([{
    error: {
      json: {
        message: `tRPC endpoint not found: ${req.method} ${req.originalUrl}`,
        code: -32601,
        data: { code: "NOT_FOUND", httpStatus: 404 },
      },
    },
  }]);
}

/**
 * API requests must never reach the SPA fallback. Returning index.html here
 * makes a transient or mistyped tRPC route fail as a misleading JSON parse error.
 */
export function registerApiFallback(app: Express) {
  app.use("/api/trpc", trpcNotFoundResponse);
  app.use("/api", (req, res) => {
    res.status(404).json({ error: { code: "NOT_FOUND", message: `API route not found: ${req.method} ${req.originalUrl}` } });
  });
}
