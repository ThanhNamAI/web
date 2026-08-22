export type ReviewQuality = 0 | 1 | 2 | 3;

export type SrsState = {
  repetitions: number;
  easeFactor: number;
  intervalDays: number;
};

export function calculateSrsUpdate(previous: SrsState, quality: ReviewQuality): SrsState {
  const safeEase = Math.max(1.3, previous.easeFactor || 2.5);
  if (quality === 0) {
    return { repetitions: 0, easeFactor: Math.max(1.3, safeEase - 0.2), intervalDays: 1 };
  }

  const repetitions = previous.repetitions + 1;
  const intervalDays = repetitions === 1 ? 1 : repetitions === 2 ? 3 : Math.max(4, Math.round(previous.intervalDays * safeEase));
  const easeDelta = quality === 3 ? 0.12 : quality === 2 ? 0.03 : -0.08;
  return { repetitions, easeFactor: Math.max(1.3, Math.min(3.2, safeEase + easeDelta)), intervalDays };
}

export function calculateXp(score: number, durationSeconds: number, bonus = 0): number {
  const accuracy = Math.max(0, Math.min(100, score));
  const durationReward = Math.min(12, Math.floor(Math.max(0, durationSeconds) / 60));
  return Math.max(5, Math.round(8 + accuracy * 0.32 + durationReward + bonus));
}

export function getNextSessionRecommendation(input: { dueCards: number; grammarScore: number; listeningScore: number; readingScore: number }) {
  if (input.dueCards >= 8) return { mode: "SRS", title: "Ôn thẻ đến hạn", detail: `Có ${input.dueCards} thẻ cần được củng cố hôm nay.` };
  const weakest = [
    ["Nghe", input.listeningScore],
    ["Đọc", input.readingScore],
    ["Ngữ pháp", input.grammarScore],
  ].sort((a, b) => Number(a[1]) - Number(b[1]))[0]?.[0] ?? "Từ vựng";
  return { mode: "Skill", title: `Tăng tốc kỹ năng ${weakest}`, detail: "Hoàn thành một bài ngắn 10–12 phút để giữ nhịp học đều." };
}
