import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Clock3, Headphones, Play, RotateCcw, TimerReset } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { StudyShell } from "@/components/StudyShell";
import { speakText } from "@/components/AudioButton";
import { trpc } from "@/lib/trpc";
import "./plan-test.css";

const simulationSeconds = 120 * 60;
const partLabels = ["Photographs", "Question–Response", "Conversations", "Talks", "Incomplete Sentences", "Text Completion", "Reading Comprehension"];
type MockResult = { rawScore: number; correct: number; total: number; elapsedSeconds: number; xp: number; focusPart: number | null; recommendation: string; partStats: Array<{ part: number; correct: number; total: number; accuracy: number }> };

export default function MockTest() {
  const { isAuthenticated } = useAuth();
  const { data: questions = [], isLoading } = trpc.learning.mockTest.useQuery(undefined, { enabled: isAuthenticated });
  const submit = trpc.learning.submitMockTest.useMutation();
  const [started, setStarted] = useState(false);
  const [remaining, setRemaining] = useState(simulationSeconds);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<MockResult | null>(null);
  const [activePart, setActivePart] = useState(1);
  const [listeningRate, setListeningRate] = useState(0.75);
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
  const partCounts = useMemo(() => Array.from({ length: 7 }, (_, index) => questions.filter(item => item.part === index + 1).length), [questions]);
  const currentQuestions = useMemo(() => questions.filter(item => item.part === activePart), [questions, activePart]);
  const reset = () => { setStarted(false); setAnswers({}); setRemaining(simulationSeconds); setResult(null); setActivePart(1); };
  if (!isAuthenticated) return <StudyShell><div className="page-wrap mock-page"><section className="mock-gate"><TimerReset /><span className="eyebrow">THI THỬ 7 PHẦN · 200 CÂU</span><h1>Đăng nhập để bắt đầu <i>phiên mô phỏng.</i></h1><p>Kết quả theo Part, thời gian và gợi ý cải thiện sẽ được lưu riêng cho bạn.</p></section></div></StudyShell>;
  if (isLoading) return <StudyShell><div className="page-wrap"><p>Đang chuẩn bị phiên thi thử…</p></div></StudyShell>;
  if (!started) return <StudyShell><div className="page-wrap mock-page"><header className="page-header"><div><span className="eyebrow">TOEIC LISTENING & READING · 7 PARTS</span><h1>Thi thử 200 câu,<br /><i>biết rõ mình yếu ở đâu.</i></h1><p>Ngân hàng thực hành gốc gồm 100 câu Listening và 100 câu Reading, giới hạn 120 phút. Đây là mô phỏng luyện tập, không phải điểm ETS chính thức.</p></div><div className="plan-total"><Clock3 /><b>120:00</b><span>200 câu · 7 Part</span></div></header><section className="mock-blueprint">{partLabels.map((label, index) => <article key={label}><span>PART {index + 1}</span><b>{index < 4 ? "Listening" : "Reading"}</b><small>{partCounts[index] ?? 0} câu · {label}</small></article>)}</section><button className="primary-cta mock-start" onClick={() => setStarted(true)}><Play fill="currentColor" /> Bắt đầu thi thử</button></div></StudyShell>;
  if (result) return <StudyShell><div className="page-wrap mock-page"><section className="mock-result"><CheckCircle2 /><span className="eyebrow">KẾT QUẢ PHIÊN MÔ PHỎNG</span><h1>{result.rawScore}%</h1><p>{result.correct}/{result.total} câu đúng · {Math.floor(result.elapsedSeconds / 60)} phút {result.elapsedSeconds % 60} giây · +{result.xp} XP</p><div className="mock-score-grid">{result.partStats.map(part => <article key={part.part}><span>Part {part.part}</span><b>{part.accuracy}%</b><small>{part.correct}/{part.total} đúng</small></article>)}</div><div className="mock-recommendation"><span className="eyebrow">ƯU TIÊN CẢI THIỆN</span><p>{result.recommendation}</p><a href={result.focusPart && result.focusPart <= 4 ? "/practice" : "/modes"}>Luyện ngay</a></div><button className="primary-cta" onClick={reset}><RotateCcw /> Làm phiên mới</button></section></div></StudyShell>;
  return <StudyShell><div className="page-wrap mock-page"><header className="mock-toolbar"><div><span className="eyebrow">PHIÊN MÔ PHỎNG · {Object.keys(answers).length}/200 CÂU</span><h1>Thi thử TOEIC</h1></div><div className={remaining < 300 ? "mock-timer mock-timer-alert" : "mock-timer"}><Clock3 /> {minuteClock}</div><button onClick={() => void finish()} disabled={submit.isPending}>{submit.isPending ? "Đang chấm…" : "Nộp bài"}</button></header><nav className="mock-part-nav" aria-label="Chọn phần thi">{partLabels.map((label, index) => { const part = index + 1; const completed = questions.filter(question => question.part === part && answers[question.id] !== undefined).length; return <button key={label} onClick={() => setActivePart(part)} className={activePart === part ? "active" : ""}><span>Part {part}</span><b>{completed}/{partCounts[index] ?? 0}</b></button>; })}</nav><section className="mock-session-note"><span>Đang làm Part {activePart}: {partLabels[activePart - 1]}</span>{activePart <= 4 && <label>Tốc độ nghe<select value={listeningRate} onChange={event => setListeningRate(Number(event.target.value))}><option value={0.5}>0,5×</option><option value={0.75}>0,75×</option><option value={1}>1×</option></select></label>}</section><section className="mock-questions">{currentQuestions.map((question, index) => <article key={question.id} className="mock-question"><span className="eyebrow">{question.contextLabel} · CÂU {index + 1}/{currentQuestions.length}</span>{question.passage && <pre>{question.passage}</pre>}<h2>{question.prompt}</h2>{question.skill === "listening" && <button className="listen-prompt" onClick={() => question.transcript && speakText(question.transcript, "en-US", listeningRate)}><Headphones /> Nghe audio · {String(listeningRate).replace(".", ",")}×</button>}<div className="answer-list">{question.choices.map((choice, choiceIndex) => <button key={choice} onClick={() => setAnswers(current => ({ ...current, [question.id]: choiceIndex }))} className={answers[question.id] === choiceIndex ? "selected" : ""}><span>{String.fromCharCode(65 + choiceIndex)}</span>{choice}</button>)}</div><p className="mock-transcript-lock">Transcript được giữ kín trong phiên thi để đảm bảo trải nghiệm luyện tập công bằng.</p></article>)}</section></div></StudyShell>;
}
