import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import type { FriendlyApiError } from "@/lib/apiErrorPresentation";
import "./learn-error.css";

type LearnErrorStateProps = {
  error: FriendlyApiError;
  isRetrying: boolean;
  onRetry: () => void;
};

export function LearnErrorState({ error, isRetrying, onRetry }: LearnErrorStateProps) {
  return <div className="page-wrap learn-page learn-error-state"><section className="learn-error-card" role="alert" aria-live="assertive"><div className="learn-error-icon"><AlertTriangle aria-hidden="true" /></div><span className="eyebrow">PHIÊN HỌC TẠM DỪNG</span><h1>{error.title}</h1><p>{error.message}</p><p className="learn-trace">Mã hỗ trợ <code>{error.traceId}</code></p><div><button className="learn-retry-button" type="button" disabled={isRetrying} onClick={onRetry}><RefreshCw className={isRetrying ? "learn-retry-spin" : ""} aria-hidden="true" />{isRetrying ? "Đang thử lại…" : "Thử lại"}</button></div></section></div>;
}
