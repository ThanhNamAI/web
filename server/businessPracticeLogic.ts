import type { BusinessPracticeQuestion, BusinessPracticeSet } from "../shared/businessPracticeContent";

export type BusinessPracticeAnswer = { questionId: string; selected: number };

export function scoreBusinessPractice(set: BusinessPracticeSet, answers: BusinessPracticeAnswer[]) {
  if (answers.length !== set.questions.length) throw new Error("Cần trả lời đầy đủ tất cả câu hỏi trong bộ đề.");
  const answerMap = new Map(answers.map(answer => [answer.questionId, answer]));
  if (answerMap.size !== set.questions.length) throw new Error("Mỗi câu hỏi chỉ được nộp một lựa chọn.");
  const questionMap = new Map(set.questions.map(question => [question.id, question]));
  if (Array.from(answerMap.keys()).some(id => !questionMap.has(id))) throw new Error("Bộ câu trả lời không hợp lệ.");

  const results = set.questions.map(question => {
    const selected = answerMap.get(question.id)!.selected;
    return { question, selected, correct: question.answer === selected };
  });
  const correctAnswers = results.filter(result => result.correct).length;
  const byPart = ([3, 7] as const).map(part => {
    const items = results.filter(result => result.question.part === part);
    const correct = items.filter(result => result.correct).length;
    return { part, correct, total: items.length, accuracy: Math.round((correct / items.length) * 100) };
  });
  return { correctAnswers, totalQuestions: set.questions.length, score: Math.round((correctAnswers / set.questions.length) * 100), byPart, results };
}
