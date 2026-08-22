import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Clock3, Headphones, Play, RotateCcw, TimerReset } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { StudyShell } from "@/components/StudyShell";
import { speakText } from "@/components/AudioButton";
import { trpc } from "@/lib/trpc";
import "./plan-test.css";

const simulationSeconds = 35 * 60;
type MockResult = { rawScore: number; correct: number; total: number; elapsedSeconds: number; xp: number; focusPart: number | null; recommendation: string; partStats: Array<{ part: number; correct: number; total: number; accuracy: number }> };

export default function MockTest() {
  const { isAuthenticated } = useAuth();
  const { data: questions = [], isLoading } = trpc.learning.mockTest.useQuery(undefined, { enabled: isAuthenticated });
  const submit = trpc.learning.submitMockTest.useMutation();
  const [started, setStarted] = useState(false);
  const [remaining, setRemaining] = useState(simulationSeconds);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<MockResult | null>(null);
  useEffect(() => {
    if (!started || result || remaining <= 0) return;
    const timer = window.setInterval(() => setRemaining(value => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [started, result, remaining]);
  const finish = async () => {
    if (!questions.length || result || submit.isPending) return;
    const value = await submit.mutateAsync({ answers: Object.entries(answers).map(([questionId, selected]) => ({ questionId, selected })), elapsedSeconds: simulationSeconds - remaining });
    setResult(value);
  };
  useEffect(() => { if (started && remaining === 0) void finish(); }, [remaining, started]);
  const minuteClock = `${String(Math.floor(remaining / 60)).padStart(2, "0")}:${String(remaining % 60).padStart(2, "0")}`;
  const parts = useMemo(() => Array.from({ length: 7 }, (_, index) => index + 1), []);
  if (!isAuthenticated) return <StudyShell><div className="page-wrap mock-page"><section className="mock-gate"><TimerReset /><span className="eyebrow">THI THỬ 7 PHẦN</span><h1>Đăng nhập để bắt đầu <i>phiên mô phỏng.</i></h1><p>Kết quả theo Part, thời gian và gợi ý cải thiện sẽ được lưu riêng cho bạn.</p></section></div></StudyShell>;
  if (isLoading) return <StudyShell><div className="page-wrap"><p>Đang chuẩn bị phiên thi thử…</p></div></StudyShell>;
  if (!started) return <StudyShell><div className="page-wrap mock-page"><header className="page-header"><div><span className="eyebrow">TOEIC LISTENING & READING · 7 PARTS</span><h1>Thi thử, biết rõ <i>mình yếu ở đâu.</i></h1><p>Phiên mô phỏng có 21 câu đại diện đủ Part 1–7, giới hạn 35 phút. Đây là bài luyện có giờ, không phải điểm ETS chính thức.</p></div><div className="plan-total"><Clock3 /><b>35:00</b><span>21 câu · 7 Part</span></div></header><section className="mock-blueprint">{parts.map(part => <article key={part}><span>PART {part}</span><b>{part <= 4 ? "Listening" : "Reading"}</b><small>{part === 1 ? "Photographs" : part === 2 ? "Q–Response" : part === 3 ? "Conversations" : part === 4 ? "Talks" : part === 5 ? "Sentences" : part === 6 ? "Text" : "Passages"}</small></article>)}</section><button className="primary-cta mock-start" onClick={() => setStarted(true)}><Play fill="currentColor" /> Bắt đầu thi thử</button></div></StudyShell>;
  if (result) return <StudyShell><div className="page-wrap mock-page"><section className="mock-result"><CheckCircle2 /><span className="eyebrow">KẾT QUẢ PHIÊN MÔ PHỎNG</span><h1>{result.rawScore}%</h1><p>{result.correct}/{result.total} câu đúng · {Math.floor(result.elapsedSeconds / 60)} phút {result.elapsedSeconds % 60} giây · +{result.xp} XP</p><div className="mock-score-grid">{result.partStats.map(part => <article key={part.part}><span>Part {part.part}</span><b>{part.accuracy}%</b><small>{part.correct}/{part.total} đúng</small></article>)}</div><div className="mock-recommendation"><span className="eyebrow">ƯU TIÊN CẢI THIỆN</span><p>{result.recommendation}</p><a href={result.focusPart && result.focusPart <= 4 ? "/practice" : "/modes"}>Luyện ngay</a></div><button className="primary-cta" onClick={() => { setStarted(false); setAnswers({}); setRemaining(simulationSeconds); setResult(null); }}><RotateCcw /> Làm phiên mới</button></section></div></StudyShell>;
  return <StudyShell><div className="page-wrap mock-page"><header className="mock-toolbar"><div><span className="eyebrow">PHIÊN MÔ PHỎNG · {Object.keys(answers).length}/{questions.length} CÂU</span><h1>Thi thử TOEIC</h1></div><div className={remaining < 300 ? "mock-timer mock-timer-alert" : "mock-timer"}><Clock3 /> {minuteClock}</div><button onClick={() => void finish()} disabled={submit.isPending}>{submit.isPending ? "Đang chấm…" : "Nộp bài"}</button></header><section className="mock-questions">{questions.map((question, index) => <article key={question.id} className="mock-question"><span className="eyebrow">{question.contextLabel} · CÂU {index + 1}</span>{question.passage && <pre>{question.passage}</pre>}<h2>{question.prompt}</h2>{question.skill === "listening" && <button className="listen-prompt" onClick={() => question.transcript && speakText(question.transcript)}><Headphones /> Nghe audio tổng hợp</button>}<div className="answer-list">{question.choices.map((choice, choiceIndex) => <button key={choice} onClick={() => setAnswers(current => ({ ...current, [question.id]: choiceIndex }))} className={answers[question.id] === choiceIndex ? "selected" : ""}><span>{String.fromCharCode(65 + choiceIndex)}</span>{choice}</button>)}</div><details className="mock-transcript"><summary>Transcript sẽ mở sau khi nộp bài</summary><p>{question.transcript ?? question.passage}</p></details></article>)}</section></div></StudyShell>;
}
