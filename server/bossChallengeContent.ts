export type BossQuestion = {
  id: string;
  part: 2 | 3 | 7;
  skill: "listening" | "reading";
  contextLabel: string;
  prompt: string;
  audioText?: string;
  choices: string[];
  answer: number;
  explanation: string;
};

export const bossQuestionBank: BossQuestion[] = [
  { id: "b2-location", part: 2, skill: "listening", contextLabel: "Part 2 · Location", audioText: "Where can I pick up the visitor passes?", prompt: "Where can I pick up the visitor passes?", choices: ["At the front desk.", "Before the tour.", "For several visitors.", "I picked them."], answer: 0, explanation: "Where cần địa điểm. At the front desk trả lời trực tiếp." },
  { id: "b2-time", part: 2, skill: "listening", contextLabel: "Part 2 · Schedule", audioText: "When is the budget meeting scheduled?", prompt: "When is the budget meeting scheduled?", choices: ["In Conference Room C.", "With the finance team.", "At three this afternoon.", "For the new budget."], answer: 2, explanation: "At three this afternoon là mốc thời gian phù hợp với When." },
  { id: "b2-request", part: 2, skill: "listening", contextLabel: "Part 2 · Request", audioText: "Could you print an extra copy of the contract?", prompt: "Could you print an extra copy of the contract?", choices: ["Yes, it's a contract.", "Sure, I'll do that now.", "On the printer table.", "The copy was clear."], answer: 1, explanation: "Sure, I'll do that now chấp nhận yêu cầu và nêu hành động." },
  { id: "b2-reason", part: 2, skill: "listening", contextLabel: "Part 2 · Reason", audioText: "Why was the presentation postponed?", prompt: "Why was the presentation postponed?", choices: ["The speaker was ill.", "At the presentation room.", "It was very informative.", "Tomorrow morning."], answer: 0, explanation: "Why hỏi lý do; The speaker was ill giải thích việc hoãn." },
  { id: "b2-who", part: 2, skill: "listening", contextLabel: "Part 2 · Role", audioText: "Who approved the new travel policy?", prompt: "Who approved the new travel policy?", choices: ["The operations director.", "Last Friday afternoon.", "For international trips.", "The new version."], answer: 0, explanation: "Who cần một người hoặc chức danh: The operations director." },
  { id: "b2-statement", part: 2, skill: "listening", contextLabel: "Part 2 · Statement", audioText: "The delivery truck is running late.", prompt: "The delivery truck is running late.", choices: ["I'll notify the warehouse manager.", "It has four wheels.", "At the loading bay.", "The truck ran quickly."], answer: 0, explanation: "Đây là statement về sự cố; phản hồi tự nhiên là một hành động giải quyết." },
  { id: "b3-agenda", part: 3, skill: "listening", contextLabel: "Part 3 · Next action", audioText: "Woman: Have the revised agenda been distributed? Man: I finished editing it, but I haven't sent it yet. Woman: The meeting starts in an hour. Man: I'll send it to everyone now.", prompt: "What will the man most likely do next?", choices: ["Edit the agenda", "Send the agenda", "Start the meeting", "Ask for revisions"], answer: 1, explanation: "I'll send it to everyone now nêu trực tiếp hành động tiếp theo." },
  { id: "b3-reservation", part: 3, skill: "listening", contextLabel: "Part 3 · Detail", audioText: "Man: The client lunch is on Thursday, correct? Woman: It was, but the restaurant is closed that day. I changed the reservation to Friday at noon. Man: Good, I'll update the calendar.", prompt: "When is the client lunch now?", choices: ["Thursday at noon", "Thursday evening", "Friday at noon", "Friday evening"], answer: 2, explanation: "I changed the reservation to Friday at noon là thông tin cuối." },
  { id: "b3-inference", part: 3, skill: "listening", contextLabel: "Part 3 · Inference", audioText: "Woman: Can we publish the product page today? Man: We can, once the legal team reviews the warranty wording. Woman: I'll send them the draft immediately.", prompt: "What can be inferred?", choices: ["The product page is already public", "Legal review is needed before publication", "The warranty has been removed", "The draft was rejected"], answer: 1, explanation: "Once the legal team reviews ... là điều kiện để publish." },
  { id: "b3-role", part: 3, skill: "listening", contextLabel: "Part 3 · Role", audioText: "Man: The copier has been jamming all morning. Woman: I'll contact the maintenance vendor. Man: Thanks. I'll move today's printing to the second floor.", prompt: "What will the woman do?", choices: ["Contact a vendor", "Move the copier", "Print on the second floor", "Repair the copier herself"], answer: 0, explanation: "I'll contact the maintenance vendor nêu rõ hành động của woman." },
  { id: "b3-number", part: 3, skill: "listening", contextLabel: "Part 3 · Number", audioText: "Woman: I ordered twenty name tags, but we have twenty-four attendees. Man: I can print four more before registration begins. Woman: That would be helpful.", prompt: "How many additional name tags will be printed?", choices: ["4", "20", "24", "44"], answer: 0, explanation: "Twenty-four attendees trừ twenty name tags, và man xác nhận print four more." },
  { id: "b3-three-speakers", part: 3, skill: "listening", contextLabel: "Part 3 · Three speakers", audioText: "Woman: The webinar begins at ten. Man: Do we have enough handouts? Second woman: I printed fifty, and I'll bring them to the lobby. Woman: Perfect.", prompt: "Who will bring the handouts?", choices: ["The first woman", "The man", "The second woman", "The webinar host"], answer: 2, explanation: "Second woman nói I'll bring them to the lobby." },
  { id: "b7-email-purpose", part: 7, skill: "reading", contextLabel: "Part 7 · Email purpose", prompt: "Subject: Building access\nStarting Monday, employees must use the east entrance while the main lobby is renovated.", choices: ["Announce a temporary entrance change", "Invite employees to a renovation meeting", "Request new ID cards", "Close the east entrance"], answer: 0, explanation: "Starting Monday ... use the east entrance thông báo thay đổi lối vào tạm thời." },
  { id: "b7-notice-detail", part: 7, skill: "reading", contextLabel: "Part 7 · Notice detail", prompt: "All expense reports for June must be submitted by July 5 to be included in the next reimbursement cycle.", choices: ["June reports are due July 5", "Reimbursements end in June", "Only managers may submit reports", "Reports should be mailed"], answer: 0, explanation: "Must be submitted by July 5 nêu deadline rõ ràng." },
  { id: "b7-inference", part: 7, skill: "reading", contextLabel: "Part 7 · Inference", prompt: "After the supplier confirms the final quantities, we will issue the purchase order. Delivery can then be arranged for the following week.", choices: ["Final quantities are still needed", "Delivery has already been arranged", "The supplier rejected the order", "The purchase order was canceled"], answer: 0, explanation: "After the supplier confirms ... là điều kiện trước khi issue purchase order." },
  { id: "b7-double", part: 7, skill: "reading", contextLabel: "Part 7 · Double passage", prompt: "Email: The volunteer orientation has moved from May 12 to May 14.\nSchedule: May 14, 4:00 P.M. — Volunteer orientation, Hall A.", choices: ["Orientation is on May 14", "Orientation is canceled", "Orientation is in Hall B", "Orientation starts at noon"], answer: 0, explanation: "Cả email và schedule cùng xác nhận May 14." },
  { id: "b7-vocabulary", part: 7, skill: "reading", contextLabel: "Part 7 · Context vocabulary", prompt: "The maintenance work is expected to be completed by Friday, so normal elevator service should resume next week.", choices: ["Begin again", "Be reduced", "Be inspected", "Be charged"], answer: 0, explanation: "Resume next week nghĩa là dịch vụ bình thường bắt đầu lại." },
  { id: "b7-triple", part: 7, skill: "reading", contextLabel: "Part 7 · Triple passage", prompt: "Memo: Submit workshop preferences by Wednesday.\nForm: Ms. Lee selected the leadership workshop.\nUpdate: The deadline is extended to Friday at 5:00 P.M.", choices: ["The preference deadline is Friday at 5:00", "Ms. Lee canceled her selection", "The leadership workshop is full", "The form was due Monday"], answer: 0, explanation: "Update là văn bản mới nhất, thay deadline sang Friday at 5:00 P.M." },
];

function hashWeek(weekKey: string) {
  return Array.from(weekKey).reduce((value, char) => ((value * 31) + char.charCodeAt(0)) >>> 0, 17);
}

function rotate<T>(items: T[], offset: number) {
  const index = offset % items.length;
  return [...items.slice(index), ...items.slice(0, index)];
}

export function getWeeklyBossQuestions(weekKey: string) {
  const seed = hashWeek(weekKey);
  const part2 = rotate(bossQuestionBank.filter(question => question.part === 2), seed).slice(0, 4);
  const part3 = rotate(bossQuestionBank.filter(question => question.part === 3), seed >>> 3).slice(0, 3);
  const part7 = rotate(bossQuestionBank.filter(question => question.part === 7), seed >>> 5).slice(0, 3);
  return [...part2, ...part3, ...part7];
}
