export type MockPartScore = { part: number; correct: number; total: number; accuracy: number };
export type MockProgressAttempt = { id: number; rawScore: number; durationSeconds: number; completedAt: Date; partScoresJson: string };

function weightedAccuracy(parts: MockPartScore[], start: number, end: number) {
  const selected = parts.filter(part => part.part >= start && part.part <= end);
  const correct = selected.reduce((sum, part) => sum + part.correct, 0);
  const total = selected.reduce((sum, part) => sum + part.total, 0);
  return total ? Math.round((correct / total) * 100) : 0;
}

export function buildMockProgressData(attempts: MockProgressAttempt[]) {
  return [...attempts].reverse().slice(-10).map((attempt, index) => {
    let parts: MockPartScore[] = [];
    try { parts = JSON.parse(attempt.partScoresJson) as MockPartScore[]; } catch { parts = []; }
    return { attempt: `Lần ${index + 1}`, score: attempt.rawScore, listening: weightedAccuracy(parts, 1, 4), reading: weightedAccuracy(parts, 5, 7), minutes: Math.max(1, Math.round(attempt.durationSeconds / 60)), date: new Date(attempt.completedAt).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" }) };
  });
}
