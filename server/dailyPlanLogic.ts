export type PlanSkill = "vocabulary" | "grammar" | "listening" | "reading";

export type DailyPlan = {
  totalSeconds: 900;
  focusSkill: PlanSkill;
  rationale: string;
  blocks: Array<{ id: "srs" | "focus" | "apply"; skill: PlanSkill; seconds: number; title: string }>;
};

const labels: Record<PlanSkill, string> = {
  vocabulary: "từ vựng",
  grammar: "ngữ pháp",
  listening: "nghe",
  reading: "đọc",
};

export function buildDailyPlan(input: { focusSkill?: string; focusAccuracy?: number; dueCards: number }): DailyPlan {
  const focusSkill: PlanSkill = ["vocabulary", "grammar", "listening", "reading"].includes(input.focusSkill ?? "")
    ? input.focusSkill as PlanSkill
    : "vocabulary";
  const reviewSeconds = input.dueCards > 0 ? 300 : 180;
  const focusSeconds = input.dueCards > 0 ? 420 : 480;
  const applySkill: PlanSkill = focusSkill === "listening" ? "reading" : "listening";
  const rationale = input.focusAccuracy && input.focusAccuracy > 0
    ? `Ưu tiên ${labels[focusSkill]} vì độ chính xác gần đây là ${input.focusAccuracy}%.`
    : `Bắt đầu với ${labels[focusSkill]} để hệ thống có dữ liệu cá nhân hóa.`;

  return {
    totalSeconds: 900,
    focusSkill,
    rationale,
    blocks: [
      { id: "srs", skill: "vocabulary", seconds: reviewSeconds, title: input.dueCards > 0 ? `Ôn ${Math.min(input.dueCards, 8)} thẻ đến hạn` : "Khởi động từ vựng" },
      { id: "focus", skill: focusSkill, seconds: focusSeconds, title: `Tăng lực ${labels[focusSkill]}` },
      { id: "apply", skill: applySkill, seconds: 900 - reviewSeconds - focusSeconds, title: `Áp dụng nhanh: ${labels[applySkill]}` },
    ],
  };
}
