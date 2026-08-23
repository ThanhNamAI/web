import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { LearnErrorState } from "../client/src/pages/LearnErrorState";

describe("Learn error state", () => {
  it("renders an accessible friendly error, trace ID and retry action", () => {
    const html = renderToStaticMarkup(createElement(LearnErrorState, { error: { title: "Chưa thể tải dữ liệu", message: "Bạn có thể thử lại ngay bây giờ.", traceId: "trace-learn-42" }, isRetrying: false, onRetry: () => undefined }));
    expect(html).toContain('role="alert"');
    expect(html).toContain('aria-live="assertive"');
    expect(html).toContain("Mã hỗ trợ");
    expect(html).toContain("trace-learn-42");
    expect(html).toContain("Thử lại");
  });

  it("disables the retry action while the query is refetching", () => {
    const html = renderToStaticMarkup(createElement(LearnErrorState, { error: { title: "Tải lại", message: "Đang tải.", traceId: "trace-retry" }, isRetrying: true, onRetry: () => undefined }));
    expect(html).toContain("disabled");
    expect(html).toContain("Đang thử lại…");
  });
});
