export function getMistakeReviewUpdate(input: { correct: boolean; previousCorrect: number; now?: Date }) {
  const now = input.now ?? new Date();
  const timesCorrect = input.correct ? input.previousCorrect + 1 : 0;
  const mastered = timesCorrect >= 2;
  return {
    status: mastered ? "mastered" as const : "active" as const,
    timesCorrect,
    mastered,
    dueAt: new Date(now.getTime() + (input.correct ? 86_400_000 : 15 * 60_000)),
  };
}
