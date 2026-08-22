import { useState } from "react";
import { CheckCircle2, Headphones, Play, Target } from "lucide-react";
import { StudyShell } from "@/components/StudyShell";
import { speakText } from "@/components/AudioButton";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import "./diagnostic.css";

const questions = [
  { skill: "grammar", prompt: "The sales team _____ the campaign next month.", choices: ["launch", "will launch", "launched", "launching"], answer: 1 },
  { skill: "vocabulary", prompt: "Choose the closest meaning of “invoice”.", choices: ["hóa đơn", "hành lý", "cuộc họp", "thư xin việc"], answer: 0 },
  { skill: "listening", audio: "The conference room is available after two o'clock.", prompt: "What does the speaker say?", choices: ["The room is booked all day", "The room opens after 2 p.m.", "The conference starts at 2 p.m.", "The room is on the second floor"], answer: 1 },
  { skill: "reading", prompt: "The memo says: “Employees must submit receipts by Friday.” What must employees submit?", choices: ["Applications", "Receipts", "Schedules", "Badges"], answer: 1 },
  { skill: "grammar", prompt: "Ms. Kim, _____ works in the finance department, will lead the meeting.", choices: ["who", "which", "where", "when"], answer: 0 },
];

export default function Diagnostic() {
  const { isAuthenticated } = useAuth(); const record = trpc.learning.recordActivity.useMutation(); const update = trpc.learning.updateSettings.useMutation(); const [answers, setAnswers] = useState<Record<number, number>>({}); const [submitted, setSubmitted] = useState(false);
  const score = Math.round((Object.entries(answers).filter(([key, answer]) => questions[Number(key)]?.answer === answer).length / questions.length) * 100);
  const level = score >= 80 ? "Tăng tốc 550–700" : score >= 50 ? "Xây kỹ năng 350–550" : "Nền tảng 0–350";
  const submit = () => { setSubmitted(true); if (isAuthenticated) { record.mutate({ activityType: "diagnostic", skill: "grammar", score, durationSeconds: 600 }); update.mutate({ diagnosticScore: score }); } };
  return <StudyShell><div className="page-wrap diagnostic-page"><header className="page-header"><div><span className="eyebrow">KIỂM TRA ĐẦU VÀO · 5 CÂU</span><h1>Biết điểm bắt đầu,<br /><i>đi đúng đường.</i></h1><p>Bài kiểm tra ngắn xem nhanh nền tảng từ vựng, ngữ pháp, nghe và đọc để đề xuất chặng học phù hợp.</p></div><div className="diagnostic-badge"><Target /><b>10 phút</b><span>Không tính áp lực</span></div></header>{!submitted ? <section className="diagnostic-list">{questions.map((question, index) => <article key={question.prompt}><div className="diagnostic-number">{String(index + 1).padStart(2, "0")}</div><div className="diagnostic-body">{question.audio && <button className="listen-prompt" onClick={() => speakText(question.audio!)}><Play fill="currentColor" /> Nghe một lần nữa</button>}<span className="eyebrow">{question.skill}</span><h2>{question.prompt}</h2><div className="diagnostic-options">{question.choices.map((option, optionIndex) => <button onClick={() => setAnswers(current => ({ ...current, [index]: optionIndex }))} className={answers[index] === optionIndex ? "selected" : ""} key={option}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</button>)}</div></div></article>)}</section> : <section className="diagnostic-result"><CheckCircle2 /><span className="eyebrow">HỒ SƠ BAN ĐẦU ĐÃ SẴN SÀNG</span><h2>{score}%</h2><p>Điểm khởi đầu gợi ý của bạn là chặng <b>{level}</b>.</p><div><p>Từ đây, hãy ôn 12 thẻ/ngày, hoàn thành một bài ngữ pháp và một tình huống nghe mỗi tuần.</p><a href="/learn">Bắt đầu buổi học đầu tiên</a></div></section>} {!submitted && <button disabled={Object.keys(answers).length !== questions.length} onClick={submit} className="primary-cta diagnostic-submit">Xem lộ trình đề xuất <CheckCircle2 /></button>}</div></StudyShell>;
}
