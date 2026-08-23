import { useEffect, useMemo, useState } from "react";
import { BriefcaseBusiness, CheckCircle2, ChevronLeft, ChevronRight, Clock3, Headphones, Play, RotateCcw, ShieldCheck } from "lucide-react";
import { StudyShell } from "@/components/StudyShell";
import { speakText } from "@/components/AudioButton";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { trpc } from "@/lib/trpc";
import "./business-practice.css";

const targetSeconds = 15 * 60;

type PracticeResult = {
  setId: string;
  setTitle: string;
  correctAnswers: number;
  totalQuestions: number;
  score: number;
  xp: number;
  byPart: Array<{ part: 3 | 7; correct: number; total: number; accuracy: number }>;
  results: Array<{ questionId: string; selected: number; correct: boolean; correctChoice: string; explanation: string }>;
};

export default function BusinessPractice() {
  const { isAuthenticated } = useAuth();
  const catalog = trpc.learning.businessPracticeCatalog.useQuery(undefined, { enabled: isAuthenticated });
  const [selectedSetId, setSelectedSetId] = useState<string | null>(null);
  const setQuery = trpc.learning.businessPracticeSet.useQuery({ setId: selectedSetId ?? "project-launch-vendor" }, { enabled: isAuthenticated && Boolean(selectedSetId) });
  const submit = trpc.learning.submitBusinessPractice.useMutation();
  const [started, setStarted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [remaining, setRemaining] = useState(targetSeconds);
  const [result, setResult] = useState<PracticeResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const set = setQuery.data;
  const questions = set?.questions ?? [];
  const current = questions[activeIndex];
  const answeredCount = Object.keys(answers).length;

  useEffect(() => {
    if (!started || result || remaining <= 0) return;
    const timer = window.setInterval(() => setRemaining(value => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [remaining, result, started]);

  const clock = `${String(Math.floor(remaining / 60)).padStart(2, "0")}:${String(remaining % 60).padStart(2, "0")}`;
  const partCounts = useMemo(() => ({ part3: questions.filter(question => question.part === 3).length, part7: questions.filter(question => question.part === 7).length }), [questions]);

  const chooseSet = (setId: string) => {
    setSelectedSetId(setId);
    setStarted(false);
    setActiveIndex(0);
    setAnswers({});
    setRemaining(targetSeconds);
    setResult(null);
    setError(null);
  };
  const start = () => { setStarted(true); setError(null); };
  const finish = async () => {
    if (!set || submit.isPending || result || answeredCount !== questions.length) return;
    setError(null);
    try {
      const value = await submit.mutateAsync({
        setId: set.id,
        answers: questions.map(question => ({ questionId: question.id, selected: answers[question.id]! })),
        elapsedSeconds: Math.max(1, targetSeconds - remaining),
      });
      setResult(value);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Không thể chấm bộ đề. Hãy thử lại.");
    }
  };
  const reset = () => {
    setStarted(false);
    setActiveIndex(0);
    setAnswers({});
    setRemaining(targetSeconds);
    setResult(null);
    setError(null);
  };

  if (!isAuthenticated) return <StudyShell><main className="page-wrap business-page"><section className="business-gate"><ShieldCheck /><span className="eyebrow">PART 3 & PART 7 · BUSINESS ENGLISH</span><h1>Đăng nhập để luyện <i>tình huống doanh nghiệp.</i></h1><p>Mỗi bộ đề lưu kết quả Listening/Reading riêng, đưa lỗi sai vào Mistake Lab và không chia sẻ dữ liệu học của bạn.</p><button className="primary-cta" onClick={() => startLogin()}><Play fill="currentColor" /> Đăng nhập để bắt đầu</button></section></main></StudyShell>;

  if (catalog.isLoading) return <StudyShell><main className="page-wrap business-page"><p className="business-loading">Đang chuẩn bị các bộ đề doanh nghiệp…</p></main></StudyShell>;

  if (!selectedSetId) return <StudyShell><main className="page-wrap business-page"><header className="business-hero"><div><span className="eyebrow">BUSINESS CONTEXT LAB · PART 3 & 7</span><h1>Từ cuộc họp đến email:<br /><i>nghe, đọc như ở nơi làm việc.</i></h1><p>Các tình huống gốc bám ngữ cảnh doanh nghiệp: dự án, nhà cung cấp, khách hàng, nhân sự và vận hành. Mỗi bộ gồm 6 câu Part 3 và 6 câu Part 7.</p></div><div className="business-hero-mark"><BriefcaseBusiness /><b>03</b><span>bộ đề chuyên sâu</span></div></header><section className="business-catalog" aria-label="Chọn bộ đề doanh nghiệp">{(catalog.data ?? []).map((item, index) => <article key={item.id} className="business-set-card"><span className="business-set-number">0{index + 1}</span><div><p className="eyebrow">{item.tags.join(" · ")}</p><h2>{item.title}</h2><p>{item.summary}</p><div className="business-set-meta"><span><Headphones /> {item.partCounts.part3} Part 3</span><span><BriefcaseBusiness /> {item.partCounts.part7} Part 7</span><span><Clock3 /> {item.estimatedMinutes} phút</span></div></div><button onClick={() => chooseSet(item.id)} aria-label={`Mở ${item.title}`}><ChevronRight /></button></article>)}</section></main></StudyShell>;

  if (setQuery.isLoading || !set) return <StudyShell><main className="page-wrap business-page"><p className="business-loading">Đang mở bộ đề…</p></main></StudyShell>;

  if (!started) return <StudyShell><main className="page-wrap business-page"><button className="business-back" onClick={() => setSelectedSetId(null)}><ChevronLeft /> Chọn bộ đề khác</button><header className="business-brief"><span className="eyebrow">BỘ ĐỀ THỰC HÀNH · 12 CÂU</span><h1>{set.title}</h1><p>{set.summary}</p><div className="business-blueprint"><span><Headphones /> {partCounts.part3} câu Part 3</span><span><BriefcaseBusiness /> {partCounts.part7} câu Part 7</span><span><Clock3 /> Mục tiêu {set.estimatedMinutes} phút</span></div></header><section className="business-rules"><CheckCircle2 /><div><b>Học như một phiên thi nhỏ.</b><p>Part 3 dùng audio tổng hợp tạm thời, transcript được giữ kín đến khi chấm. Với Part 7, hãy tìm bằng chứng trong email, memo và lịch biểu trước khi chọn đáp án.</p></div></section><button className="primary-cta business-start" onClick={start}><Play fill="currentColor" /> Bắt đầu bộ đề</button></main></StudyShell>;

  if (result) return <StudyShell><main className="page-wrap business-page"><section className="business-result"><CheckCircle2 /><span className="eyebrow">HOÀN TẤT BỘ ĐỀ</span><h1>{result.score}%</h1><p>{result.correctAnswers}/{result.totalQuestions} câu đúng · +{result.xp} XP</p><div className="business-score-grid">{result.byPart.map(part => <article key={part.part}><span>PART {part.part}</span><b>{part.accuracy}%</b><small>{part.correct}/{part.total} chính xác</small></article>)}</div><div className="business-review"><h2>Phản hồi theo từng câu</h2>{result.results.map((item, index) => <article key={item.questionId} className={item.correct ? "is-correct" : "is-wrong"}><span>{item.correct ? "Đúng" : "Cần ôn"} · Câu {index + 1}</span><p>{item.correct ? "Bạn đã chọn đúng đáp án theo ngữ cảnh." : `Đáp án đúng: ${item.correctChoice}. ${item.explanation}`}</p></article>)}</div><div className="business-result-actions"><button className="primary-cta" onClick={reset}><RotateCcw /> Làm lại bộ này</button><button onClick={() => setSelectedSetId(null)}>Khám phá bộ khác</button></div></section></main></StudyShell>;

  return <StudyShell><main className="page-wrap business-page"><header className="business-toolbar"><div><button className="business-back" onClick={() => setSelectedSetId(null)}><ChevronLeft /> Danh mục</button><span className="eyebrow">{set.title} · {answeredCount}/12 CÂU</span></div><div className={remaining < 120 ? "business-timer is-alert" : "business-timer"}><Clock3 /> {clock}</div><button onClick={() => void finish()} disabled={answeredCount !== questions.length || submit.isPending}>{submit.isPending ? "Đang chấm…" : "Nộp bài"}</button></header><nav className="business-progress" aria-label="Tiến độ câu hỏi">{questions.map((question, index) => <button key={question.id} onClick={() => setActiveIndex(index)} className={`${activeIndex === index ? "is-active" : ""} ${answers[question.id] !== undefined ? "is-answered" : ""}`} aria-label={`Câu ${index + 1}, Part ${question.part}`}>{index + 1}</button>)}</nav>{current && <section className="business-question"><div className="business-question-head"><span>PART {current.part} · {current.contextLabel.replace(/^Part [37] · /, "")}</span><b>Câu {activeIndex + 1}/12</b></div>{current.part === 7 && <pre className="business-passage">{current.passage}</pre>}<h2>{current.prompt}</h2>{current.part === 3 && <button className="listen-prompt" onClick={() => current.transcript && speakText(current.transcript, "en-US", 0.85)}><Headphones /> Nghe hội thoại <small>0,85×</small></button>}<div className="answer-list business-answers">{current.choices.map((choice, index) => <button key={choice} onClick={() => setAnswers(previous => ({ ...previous, [current.id]: index }))} className={answers[current.id] === index ? "selected" : ""}><span>{String.fromCharCode(65 + index)}</span>{choice}</button>)}</div><div className="business-question-actions"><button onClick={() => setActiveIndex(index => Math.max(0, index - 1))} disabled={activeIndex === 0}><ChevronLeft /> Trước</button><span>{current.part === 3 ? "Transcript sẽ hiện sau khi chấm." : "Tìm chi tiết và ý suy luận trong văn bản."}</span><button onClick={() => setActiveIndex(index => Math.min(questions.length - 1, index + 1))} disabled={activeIndex === questions.length - 1}>Tiếp <ChevronRight /></button></div>{error && <p className="business-error" role="alert">{error}</p>}</section>}</main></StudyShell>;
}
