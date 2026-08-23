import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpenCheck, CheckCircle2, Headphones, Lightbulb, LockKeyhole, RotateCcw, Sparkles } from "lucide-react";
import { Link, useRoute } from "wouter";
import { AudioButton } from "@/components/AudioButton";
import { StudyShell } from "@/components/StudyShell";
import { startLogin } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

type AnswerState = { selected: number; correct: boolean; explanation: string };
function parseOptions(raw: string | null) { try { const value = JSON.parse(raw ?? "[]"); return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : []; } catch { return []; } }

export default function LessonPlayer() {
  const [, params] = useRoute("/lessons/:slug");
  const { isAuthenticated } = useAuth();
  const lessonQuery = trpc.lessons.bySlug.useQuery({ slug: params?.slug ?? "" }, { enabled: Boolean(params?.slug) });
  const grade = trpc.lessons.checkAnswer.useMutation();
  const saveProgress = trpc.lessons.saveProgress.useMutation();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
  const steps = lessonQuery.data?.steps ?? [];
  const current = steps[stepIndex];
  const quizCount = useMemo(() => steps.filter(step => step.stepType === "quiz" || step.stepType === "listen").length, [steps]);
  const correctCount = useMemo(() => Object.values(answers).filter(answer => answer.correct).length, [answers]);
  useEffect(() => { if (lessonQuery.data?.progress) setStepIndex(Math.min(lessonQuery.data.progress.currentStep, Math.max(0, steps.length - 1))); }, [lessonQuery.data?.progress, steps.length]);
  const chooseAnswer = (selected: number) => {
    if (!current || answers[current.id]) return;
    if (!isAuthenticated) { toast.message("Đăng nhập để nhận phản hồi và lưu tiến độ."); startLogin(); return; }
    grade.mutate({ stepId: current.id, selected }, { onSuccess: result => setAnswers(previous => ({ ...previous, [current.id]: { selected, correct: result.correct, explanation: result.explanation } })), onError: () => toast.error("Không thể chấm câu này. Hãy thử lại.") });
  };
  const move = (direction: 1 | -1) => {
    if (!current) return;
    if (direction === 1 && (current.stepType === "quiz" || current.stepType === "listen") && !answers[current.id]) { toast.message("Hãy chọn một đáp án để tiếp tục."); return; }
    const nextIndex = stepIndex + direction;
    if (nextIndex >= steps.length) {
      const score = quizCount ? Math.round(correctCount / quizCount * 100) : 100;
      if (isAuthenticated) saveProgress.mutate({ lessonId: lessonQuery.data!.lesson.id, currentStep: steps.length, score, completed: true });
      setStepIndex(steps.length);
      return;
    }
    if (nextIndex >= 0) {
      setStepIndex(nextIndex);
      if (isAuthenticated) saveProgress.mutate({ lessonId: lessonQuery.data!.lesson.id, currentStep: nextIndex, score: quizCount ? Math.round(correctCount / quizCount * 100) : 0, completed: false });
    }
  };
  if (lessonQuery.isLoading) return <StudyShell><div className="lesson-loading">Đang chuẩn bị bài học…</div></StudyShell>;
  if (!lessonQuery.data) return <StudyShell><div className="lesson-loading"><LockKeyhole />Bài học chưa được xuất bản hoặc không còn tồn tại.<Link href="/lessons">Về thư viện bài học</Link></div></StudyShell>;
  if (stepIndex >= steps.length) return <StudyShell><div className="page-wrap lesson-complete"><span className="eyebrow">HOÀN THÀNH BÀI HỌC</span><Sparkles /><h1>Bạn đã chốt thêm<br /><i>một điểm tựa.</i></h1><p>{quizCount ? `Bạn trả lời đúng ${correctCount}/${quizCount} câu áp dụng. Điều quan trọng hơn: hãy gặp lại ý này trong ngữ cảnh mới.` : "Bạn đã hoàn thành toàn bộ các bước của bài học."}</p><div><Link href="/lessons" className="primary-link">Chọn bài tiếp theo <ArrowRight /></Link><button onClick={() => { setStepIndex(0); setAnswers({}); }}><RotateCcw /> Học lại</button></div></div></StudyShell>;
  const options = parseOptions(current.optionsJson);
  const answer = answers[current.id];
  return <StudyShell><div className="page-wrap lesson-player"><header className="player-header"><Link href="/lessons" className="back-link"><ArrowLeft />Thư viện bài học</Link><div><span>{lessonQuery.data.lesson.skill.toUpperCase()} · {lessonQuery.data.lesson.level}</span><h1>{lessonQuery.data.lesson.title}</h1></div><div className="step-meter"><small>BƯỚC {stepIndex + 1}/{steps.length}</small><div><i style={{ width: `${(stepIndex + 1) / steps.length * 100}%` }} /></div></div></header>
    <main className="lesson-stage"><div className="stage-type">{current.stepType === "warmup" ? "KHỞI ĐỘNG" : current.stepType === "explain" ? "GIẢI THÍCH" : current.stepType === "listen" ? "LẮNG NGHE" : current.stepType === "quiz" ? "ÁP DỤNG" : "TỔNG KẾT"}</div><h2>{current.title}</h2><p className="stage-body">{current.body}</p>{current.audioText && <div className="audio-stage"><Headphones /><div><b>Nghe chủ động</b><span>{current.audioText}</span></div><AudioButton text={current.audioText} /></div>}{current.prompt && <div className="stage-prompt"><Lightbulb /><p>{current.prompt}</p></div>}{options.length > 0 && <div className="lesson-options">{options.map((option, index) => <button key={`${option}-${index}`} onClick={() => chooseAnswer(index)} disabled={Boolean(answer) || grade.isPending} className={answer ? (index === answer.selected ? answer.correct ? "is-correct" : "is-wrong" : "is-muted") : ""}><span>{String.fromCharCode(65 + index)}</span>{option}{answer?.correct && index === answer.selected && <CheckCircle2 />}</button>)}</div>}{answer && <div className={`lesson-feedback ${answer.correct ? "positive" : "retry"}`}><b>{answer.correct ? "Chính xác — hãy giữ nhịp này." : "Đây là điểm cần sửa, không phải điểm trừ."}</b><p>{answer.explanation}</p></div>}</main>
    <footer className="player-controls"><button disabled={stepIndex === 0} onClick={() => move(-1)}><ArrowLeft />Quay lại</button>{!isAuthenticated && <button className="login-to-save" onClick={() => startLogin()}>Đăng nhập để lưu tiến độ</button>}<button className="next-step" onClick={() => move(1)}>{stepIndex === steps.length - 1 ? "Hoàn thành bài" : "Bước tiếp theo"}<ArrowRight /></button></footer>
  </div></StudyShell>;
}
