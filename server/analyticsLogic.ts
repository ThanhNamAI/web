export type LearningSessionMetric = {
  skill: string;
  score: number;
  completedAt: Date;
};

const skills = ["vocabulary", "grammar", "listening", "reading", "speaking"] as const;
const labels: Record<(typeof skills)[number], string> = {
  vocabulary: "Từ vựng",
  grammar: "Ngữ pháp",
  listening: "Nghe",
  reading: "Đọc",
  speaking: "Phát âm",
};

export function getSkillAnalytics(sessions: LearningSessionMetric[]) {
  const details = skills.map(skill => {
    const items = sessions.filter(session => session.skill === skill).sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime());
    const accuracy = items.length ? Math.round(items.reduce((sum, item) => sum + item.score, 0) / items.length) : 0;
    const latest = items.slice(0, 5);
    const previous = items.slice(5, 10);
    const latestAverage = latest.length ? latest.reduce((sum, item) => sum + item.score, 0) / latest.length : 0;
    const previousAverage = previous.length ? previous.reduce((sum, item) => sum + item.score, 0) / previous.length : latestAverage;
    return { skill, label: labels[skill], attempts: items.length, accuracy, trend: Math.round(latestAverage - previousAverage), confidence: Math.min(100, items.length * 12) };
  });
  const measured = details.filter(item => item.attempts > 0);
  const focus = measured.length ? [...measured].sort((a, b) => a.accuracy - b.accuracy || a.attempts - b.attempts)[0] : details[0];
  const strength = measured.length ? [...measured].sort((a, b) => b.accuracy - a.accuracy)[0] : undefined;
  const recommendation = focus.attempts
    ? `Ưu tiên ${focus.label.toLowerCase()}: độ chính xác hiện tại ${focus.accuracy}%. Hãy hoàn thành một lượt luyện ngắn có phản hồi ngay.`
    : `Chưa có dữ liệu ${focus.label.toLowerCase()}. Hãy hoàn thành một bài ngắn để hệ thống bắt đầu đo lường.`;
  return { skills: details, focusSkill: focus.skill, focusLabel: focus.label, strengthSkill: strength?.skill, recommendation };
}
