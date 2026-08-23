type ErrorWithMeta = {
  message?: unknown;
  data?: { code?: unknown; httpStatus?: unknown };
  meta?: { response?: unknown };
};

const fallbackTraceIds = new WeakMap<object, string>();
let fallbackTraceSequence = 0;

function getResponseTraceId(error: ErrorWithMeta) {
  const response = error.meta?.response as { headers?: { get?: (name: string) => string | null } } | undefined;
  return response?.headers?.get?.("x-trace-id")?.trim() || null;
}

function fallbackTraceId(error: unknown) {
  if (typeof error === "object" && error !== null) {
    const existing = fallbackTraceIds.get(error);
    if (existing) return existing;
    const traceId = `client-${(++fallbackTraceSequence).toString(36).padStart(4, "0")}`;
    fallbackTraceIds.set(error, traceId);
    return traceId;
  }
  return "client-unknown";
}

export type FriendlyApiError = {
  title: string;
  message: string;
  traceId: string;
};

export function getFriendlyApiError(error: unknown): FriendlyApiError {
  const apiError = (typeof error === "object" && error !== null ? error : {}) as ErrorWithMeta;
  const traceId = getResponseTraceId(apiError) ?? fallbackTraceId(error);
  const code = apiError.data?.code;
  const status = apiError.data?.httpStatus;

  if (code === "UNAUTHORIZED" || status === 401) {
    return { title: "Phiên đăng nhập cần được làm mới", message: "Hãy đăng nhập lại để tiếp tục học và đồng bộ tiến độ của bạn.", traceId };
  }
  if (code === "FORBIDDEN" || status === 403) {
    return { title: "Bạn chưa có quyền truy cập", message: "Dữ liệu này không khả dụng với quyền hiện tại của bạn.", traceId };
  }
  return { title: "Chưa thể tải dữ liệu", message: "Kết nối đang gặp sự cố tạm thời. Bạn có thể thử lại ngay bây giờ.", traceId };
}
