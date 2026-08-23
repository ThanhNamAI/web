import { describe, expect, it } from "vitest";
import { getFriendlyApiError } from "../client/src/lib/apiErrorPresentation";

describe("friendly API error presentation", () => {
  it("surfaces a server trace ID without exposing raw backend error text", () => {
    const error = {
      message: "internal implementation details",
      meta: { response: new Response("", { headers: { "x-trace-id": "trace-learn-42" } }) },
    };
    expect(getFriendlyApiError(error)).toEqual({
      title: "Chưa thể tải dữ liệu",
      message: "Kết nối đang gặp sự cố tạm thời. Bạn có thể thử lại ngay bây giờ.",
      traceId: "trace-learn-42",
    });
  });

  it("creates one stable client trace per error object when no server header exists", () => {
    const error = new Error("network offline");
    const first = getFriendlyApiError(error);
    const second = getFriendlyApiError(error);
    expect(first.traceId).toMatch(/^client-/);
    expect(second.traceId).toBe(first.traceId);
  });
});
