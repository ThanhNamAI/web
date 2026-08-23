import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const output = path.join(root, "shared", "mockTestContent.ts");
const labels = ["Photographs", "Question–Response", "Conversations", "Talks", "Incomplete Sentences", "Text Completion", "Reading Comprehension"];
const workplace = [
  ["vendor", "delivery schedule", "warehouse"], ["client", "contract revision", "legal department"], ["manager", "budget report", "finance office"], ["assistant", "meeting agenda", "conference room"], ["engineer", "software update", "support desk"], ["recruiter", "interview timetable", "human resources office"], ["supervisor", "safety inspection", "production floor"], ["coordinator", "travel itinerary", "airport terminal"], ["accountant", "expense claim", "accounts payable"], ["technician", "maintenance request", "service center"], ["director", "sales proposal", "boardroom"], ["designer", "marketing campaign", "creative studio"], ["agent", "customer inquiry", "call center"], ["driver", "freight shipment", "loading dock"], ["trainer", "orientation session", "training room"], ["analyst", "quarterly forecast", "planning office"], ["editor", "company newsletter", "communications team"], ["buyer", "purchase order", "procurement office"], ["consultant", "project milestone", "client site"], ["auditor", "compliance review", "regional office"],
];
const options = (correct, distractors) => [correct, ...distractors].sort((a, b) => (a.length + correct.length) % 4 - (b.length + correct.length) % 4);
const answerIndex = (choices, correct) => choices.indexOf(correct);
const questions = [];
const add = (part, skill, prompt, choices, correct, extras = {}) => questions.push({ id: `full-p${part}-${String(questions.filter(q => q.part === part).length + 1).padStart(2, "0")}`, part, skill, contextLabel: `Part ${part} · ${labels[part - 1]}`, prompt, choices, answer: answerIndex(choices, correct), ...extras });

for (let i = 0; i < 6; i++) {
  const [role, item, place] = workplace[i]; const correct = `A ${role} is reviewing a ${item} in the ${place}.`;
  add(1, "listening", "Chọn câu mô tả đúng hình minh họa bối cảnh công việc.", options(correct, [`A ${role} is leaving the ${place}.`, `Several visitors are waiting near the ${place}.`, `The ${item} is being delivered outdoors.`]), correct, { transcript: correct });
}
for (let i = 0; i < 25; i++) {
  const [role, item, place] = workplace[i % workplace.length]; const question = i % 3 === 0 ? `Where should I send the ${item}?` : i % 3 === 1 ? `When will the ${role} review the ${item}?` : `Who is handling the ${item}?`;
  const correct = i % 3 === 0 ? `To the ${place}.` : i % 3 === 1 ? "Before the afternoon meeting." : `The ${role} is.`;
  add(2, "listening", "Nghe câu hỏi và chọn phản hồi phù hợp.", options(correct, ["It was delivered yesterday.", "For the monthly report.", "At the front entrance."]), correct, { transcript: question });
}
for (let i = 0; i < 39; i++) {
  const [role, item, place] = workplace[i % workplace.length]; const transcript = `Woman: The ${item} needs to be finalized before Friday. Man: I will ask the ${role} at the ${place} to review it this morning.`;
  const prompts = ["Vấn đề chính trong hội thoại là gì?", "Người nam sẽ làm gì?", "Khi nào việc cần được hoàn tất?"];
  const corrects = [`${item} cần được hoàn tất.`, `Liên hệ ${role} để xem xét.`, "Trước thứ Sáu."];
  const correct = corrects[i % 3];
  add(3, "listening", prompts[i % 3], options(correct, ["Buổi họp đã bị hủy.", "Chuyển văn phòng ngay hôm nay.", "Đặt vé cho chuyến công tác."]), correct, { transcript });
}
for (let i = 0; i < 30; i++) {
  const [role, item, place] = workplace[i % workplace.length]; const transcript = `Attention employees: The ${item} workshop will take place in the ${place} at 10 a.m. Please notify the ${role} if you cannot attend.`;
  const correct = i % 3 === 0 ? `Nhân viên liên quan đến ${item}.` : i % 3 === 1 ? `Tại ${place}.` : `Báo cho ${role} nếu không tham dự được.`;
  const prompt = i % 3 === 0 ? "Thông báo này dành cho ai?" : i % 3 === 1 ? "Sự kiện diễn ra ở đâu?" : "Người nghe cần làm gì nếu vắng mặt?";
  add(4, "listening", prompt, options(correct, ["Nộp hóa đơn vào cuối tháng.", "Đến sân bay lúc mười giờ.", "Gửi tài liệu cho khách hàng."]), correct, { transcript });
}
for (let i = 0; i < 30; i++) {
  const [role, item] = workplace[i % workplace.length]; const patterns = [
    [`The ${item} _____ by the ${role} yesterday.`, "was approved", ["approve", "has approving", "will approval"]],
    [`Please submit the ${item} _____ Friday afternoon.`, "by", ["at", "from", "during"]],
    [`The ${role} responded _____ to the request.`, "promptly", ["prompt", "promptness", "more prompt"]],
  ]; const [prompt, correct, wrong] = patterns[i % 3]; add(5, "reading", prompt, options(correct, wrong), correct);
}
for (let i = 0; i < 16; i++) {
  const [role, item, place] = workplace[i % workplace.length]; const passage = `To: All staff\nSubject: ${item}\n\nThe ${role} has scheduled a review at the ${place} on Thursday. Please bring the required documents and arrive ten minutes early.`;
  const correct = i % 4 === 0 ? "scheduled" : i % 4 === 1 ? `at the ${place}` : i % 4 === 2 ? "required documents" : "arrive ten minutes early";
  const prompt = i % 4 === 0 ? "Từ nào phù hợp để hoàn thành: The review has been _____." : i % 4 === 1 ? "Cuộc xem xét diễn ra ở đâu?" : i % 4 === 2 ? "Người tham gia cần mang gì?" : "Người tham gia nên đến khi nào?";
  add(6, "reading", prompt, options(correct, ["cancelled permanently", "after the weekend", "a new customer"]), correct, { passage });
}
for (let i = 0; i < 54; i++) {
  const [role, item, place] = workplace[i % workplace.length]; const passage = `Dear Team,\n\nThe ${role} has confirmed that the ${item} will be available at the ${place} on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations`;
  const correct = i % 3 === 0 ? `${item} sẽ có vào thứ Hai.` : i % 3 === 1 ? `Liên hệ project office trước thứ Sáu.` : `Tại ${place}.`;
  const prompt = i % 3 === 0 ? "Thông tin nào được xác nhận trong email?" : i % 3 === 1 ? "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?" : "Nội dung sẽ có ở đâu?";
  add(7, "reading", prompt, options(correct, ["Cuộc họp bị hoãn vô thời hạn.", "Tất cả nhân viên phải đi công tác.", "Sản phẩm đã ngừng cung cấp."]), correct, { passage });
}

if (questions.length !== 200) throw new Error(`Expected 200 questions, received ${questions.length}`);
const content = `// Original workplace-English practice items. Do not treat as ETS materials.\nexport type MockQuestion = { id: string; part: 1 | 2 | 3 | 4 | 5 | 6 | 7; skill: "listening" | "reading"; prompt: string; choices: string[]; answer: number; transcript?: string; passage?: string; contextLabel: string; };\n\nexport const mockQuestions: MockQuestion[] = ${JSON.stringify(questions, null, 2)};\n\nexport const mockPartNames = ${JSON.stringify(labels)} as const;\nexport const mockTestBlueprint = { totalQuestions: 200, listeningQuestions: 100, readingQuestions: 100, partCounts: { 1: 6, 2: 25, 3: 39, 4: 30, 5: 30, 6: 16, 7: 54 } } as const;\n`;
fs.writeFileSync(output, content);
console.log(JSON.stringify({ total: questions.length, parts: Object.fromEntries([1,2,3,4,5,6,7].map(part => [part, questions.filter(q => q.part === part).length])) }, null, 2));
