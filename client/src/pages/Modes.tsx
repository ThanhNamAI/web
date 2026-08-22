import { useState } from "react";
import { AudioLines, BrainCircuit, Check, Mic, Shuffle, Sparkles } from "lucide-react";
import { vocabulary } from "@shared/vocabulary.generated";
import { StudyShell } from "@/components/StudyShell";
import { speakText } from "@/components/AudioButton";
import { grammarLessons, listeningItems } from "@/lib/learningContent";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import "./modes.css";

type Mode = "rapid" | "shadow" | "context" | "mix";
const modes = [
  { id: "rapid" as const, icon: BrainCircuit, title: "Nhớ nhanh", detail: "Gọi nghĩa trong 5 giây" },
  { id: "shadow" as const, icon: Mic, title: "Nghe & nhại", detail: "Bắt nhịp phát âm" },
  { id: "context" as const, icon: Sparkles, title: "Đoán theo ngữ cảnh", detail: "Từ trong câu thật" },
  { id: "mix" as const, icon: Shuffle, title: "Ôn xen kẽ", detail: "Từ + ngữ pháp + nghe" },
];

export default function Modes() {
  const [mode, setMode] = useState<Mode>("rapid"); const [answer, setAnswer] = useState(""); const [step, setStep] = useState(0); const { isAuthenticated } = useAuth(); const record = trpc.learning.recordActivity.useMutation();
  const word = vocabulary[(220 + step) % vocabulary.length]; const listener = listeningItems[step % listeningItems.length]; const grammar = grammarLessons[step % grammarLessons.length];
  const complete = (correct: boolean, activityType: string, skill: "vocabulary" | "grammar" | "listening" | "speaking") => { if (isAuthenticated) record.mutate({ activityType, skill, score: correct ? 100 : 35, durationSeconds: 75 }); toast[correct ? "success" : "message"](correct ? "Đã ghi nhận tiến bộ. Tiếp tục nhịp học!" : "Đã ghi nhận lượt luyện. Hãy xem lại gợi ý rồi tiếp tục."); setAnswer(""); setStep(value => value + 1); };
  return <StudyShell><div className="page-wrap modes-page"><header className="page-header"><div><span className="eyebrow">PHÒNG HỌC LINH HOẠT</span><h1>Một mục tiêu, <i>nhiều con đường.</i></h1><p>Thay đổi cách truy hồi để não luôn phải tham gia: gọi nghĩa, nghe–nhại, đoán ngữ cảnh và ôn xen kẽ.</p></div></header><section className="modes-grid">{modes.map(item => { const Icon = item.icon; return <button onClick={() => { setMode(item.id); setAnswer(""); }} className={mode === item.id ? "mode-card-active" : ""} key={item.id}><Icon /><b>{item.title}</b><span>{item.detail}</span></button>; })}</section><section className="mode-stage">{mode === "rapid" && <div className="mode-content"><span className="eyebrow">5 GIÂY · GỌI NGHĨA</span><h2>{word.term}</h2><p className="ipa">{word.ipa}</p><button className="listen-prompt" onClick={() => speakText(word.term)}><AudioLines /> Nghe một lần</button><input value={answer} onChange={event => setAnswer(event.target.value)} placeholder="Gõ nghĩa tiếng Việt bạn nhớ…" /><p className="mode-hint">Đáp án chuẩn: <b>{word.meaning}</b></p><button onClick={() => complete(answer.trim().length > 1, "rapid-recall", "vocabulary")} className="primary-game">Xác nhận & qua từ tiếp <Check /></button></div>}{mode === "shadow" && <div className="mode-content"><span className="eyebrow">NGHE & NHẠI · PHÁT ÂM</span><h2>{word.term}</h2><p className="mode-quote">“{word.example}”</p><button className="large-listen" onClick={() => speakText(`${word.term}. ${word.example}`)}><AudioLines /> Nghe từ và câu <small>phát lại tùy ý</small></button><p className="mode-hint">Nghe 2 lần: lần đầu bắt nhịp, lần hai nhại theo. Sau đó dùng nút micro ở thẻ SRS để xem trình duyệt nhận diện câu nói.</p><button onClick={() => complete(true, "shadow-practice", "speaking")} className="primary-game">Đã nhại xong <Check /></button></div>}{mode === "context" && <div className="mode-content"><span className="eyebrow">ĐOÁN TỪ TRONG NGỮ CẢNH</span><h2>{word.example.replace(new RegExp(word.term, "gi"), "_____ ")}</h2><p>Chọn từ phù hợp nhất với chỗ trống.</p><div className="context-options">{[word.term, vocabulary[(221 + step) % vocabulary.length].term, vocabulary[(222 + step) % vocabulary.length].term].map(option => <button onClick={() => complete(option === word.term, "context-cloze", "vocabulary")} key={option}>{option}</button>)}</div></div>}{mode === "mix" && <div className="mode-content"><span className="eyebrow">ÔN XEN KẼ · 3 KỸ NĂNG</span><h2>{grammar.question}</h2><div className="context-options">{grammar.choices.map((option, index) => <button onClick={() => { if (index === grammar.answer) { speakText(listener.audio); complete(true, "interleaved-practice", "grammar"); } else complete(false, "interleaved-practice", "grammar"); }} key={option}>{option}</button>)}</div><p className="mode-hint">Sau khi trả lời, hệ thống phát một câu nghe ở lượt kế tiếp để tránh học theo một khuôn duy nhất.</p></div>}</section></div></StudyShell>;
}
