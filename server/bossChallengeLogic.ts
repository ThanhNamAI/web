import type { BossQuestion } from "./bossChallengeContent";

export function getIsoWeekKey(date = new Date()) {
  const current = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const weekday = current.getUTCDay() || 7;
  current.setUTCDate(current.getUTCDate() + 4 - weekday);
  const yearStart = new Date(Date.UTC(current.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((current.getTime() - yearStart.getTime()) / 86_400_000) + 1) / 7);
  return `${current.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

export function scoreBossChallenge(questions: BossQuestion[], answers: Array<{ questionId: string; selected: number }>) {
  const answerMap = new Map(answers.map(answer => [answer.questionId, answer.selected]));
  if (answerMap.size !== questions.length || questions.some(question => !answerMap.has(question.id))) throw new Error("All Boss Challenge questions must be answered");
  const results = questions.map(question => ({ question, selected: answerMap.get(question.id)!, correct: answerMap.get(question.id) === question.answer }));
  const correctAnswers = results.filter(result => result.correct).length;
  return { results, correctAnswers, score: Math.round((correctAnswers / questions.length) * 100) };
}
