export type MockAnswer = { part: number; correct: boolean };

export function getMockScore(answers: MockAnswer[], elapsedSeconds: number) {
  const partStats = Array.from({ length: 7 }, (_, index) => {
    const part = index + 1;
    const items = answers.filter(answer => answer.part === part);
    const correct = items.filter(item => item.correct).length;
    return { part, correct, total: items.length, accuracy: items.length ? Math.round((correct / items.length) * 100) : 0 };
  });
  const correct = answers.filter(answer => answer.correct).length;
  const rawScore = answers.length ? Math.round((correct / answers.length) * 100) : 0;
  const assessed = partStats.filter(item => item.total > 0);
  const focus = assessed.length ? [...assessed].sort((a, b) => a.accuracy - b.accuracy || a.total - b.total)[0] : undefined;
  const labels: Record<number, string> = { 1: "mô tả tranh", 2: "hỏi–đáp", 3: "hội thoại", 4: "bài nói", 5: "câu chưa hoàn chỉnh", 6: "hoàn thành văn bản", 7: "đọc hiểu" };
  const recommendation = focus ? `Ưu tiên Part ${focus.part} (${labels[focus.part]}): bạn đúng ${focus.correct}/${focus.total}. Hãy luyện một lượt ngắn có phản hồi trước phiên thi sau.` : "Hoàn thành thêm câu hỏi để nhận gợi ý theo Part.";
  return { rawScore, correct, total: answers.length, elapsedSeconds: Math.max(0, elapsedSeconds), partStats, focusPart: focus?.part ?? null, recommendation };
}
