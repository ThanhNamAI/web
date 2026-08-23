type SessionRow = { id: number; activityType: string; skill: string; score: number; xp: number; durationSeconds: number; completedAt: Date };
type MockAttemptRow = { id: number; mode: string; totalQuestions: number; correctAnswers: number; rawScore: number; durationSeconds: number; partScoresJson: string; completedAt: Date };
type BossAttemptRow = { id: number; weekKey: string; totalQuestions: number; correctAnswers: number; score: number; durationSeconds: number; completedAt: Date };

const dateKey = (date: Date) => date.toISOString().slice(0, 10);
const dateLabel = (date: Date) => new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit" }).format(date);
const modeLabel = (mode: string) => mode === "business" ? "Bộ đề doanh nghiệp" : "Thi thử 7 Part";

export function buildProgressDashboardData(input: { sessions: SessionRow[]; mockAttempts: MockAttemptRow[]; bossAttempts: BossAttemptRow[]; now?: Date }) {
  const now = input.now ?? new Date();
  const daily = Array.from({ length: 14 }, (_, index) => {
    const date = new Date(now);
    date.setUTCDate(date.getUTCDate() - (13 - index));
    const key = dateKey(date);
    const sessions = input.sessions.filter(session => dateKey(session.completedAt) === key);
    return {
      date: dateLabel(date),
      minutes: Math.round(sessions.reduce((sum, session) => sum + session.durationSeconds, 0) / 60),
      xp: sessions.reduce((sum, session) => sum + session.xp, 0),
      sessions: sessions.length,
    };
  });
  const attempts = [
    ...input.mockAttempts.map(attempt => ({ id: `mock-${attempt.id}`, type: modeLabel(attempt.mode), score: attempt.rawScore, correctAnswers: attempt.correctAnswers, totalQuestions: attempt.totalQuestions, durationSeconds: attempt.durationSeconds, completedAt: attempt.completedAt })),
    ...input.bossAttempts.map(attempt => ({ id: `boss-${attempt.id}`, type: "Boss tuần", score: attempt.score, correctAnswers: attempt.correctAnswers, totalQuestions: attempt.totalQuestions, durationSeconds: attempt.durationSeconds, completedAt: attempt.completedAt })),
  ].sort((a, b) => a.completedAt.getTime() - b.completedAt.getTime());
  const assessmentTrend = attempts.map((attempt, index) => ({
    attempt: index + 1,
    score: attempt.score,
    minutes: Math.round(attempt.durationSeconds / 60),
    type: attempt.type,
    date: new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" }).format(attempt.completedAt),
  }));
  const totalMinutes = Math.round(input.sessions.reduce((sum, session) => sum + session.durationSeconds, 0) / 60);
  const averageScore = attempts.length ? Math.round(attempts.reduce((sum, attempt) => sum + attempt.score, 0) / attempts.length) : 0;
  const latestScore = attempts.at(-1)?.score ?? null;
  const scoreDelta = attempts.length >= 2 ? attempts.at(-1)!.score - attempts.at(-2)!.score : null;
  return {
    summary: { totalMinutes, totalSessions: input.sessions.length, completedAssessments: attempts.length, averageScore, latestScore, scoreDelta },
    daily,
    assessmentTrend,
    assessmentHistory: [...attempts].reverse(),
    sessions: [...input.sessions].sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime()),
  };
}
