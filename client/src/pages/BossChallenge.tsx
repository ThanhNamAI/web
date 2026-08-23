import { useEffect, useMemo, useState } from "react";
import { ArrowRight, AudioLines, Clock3, Crown, Flame, LockKeyhole, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { Link } from "wouter";
import { StudyShell } from "@/components/StudyShell";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { trpc } from "@/lib/trpc";

const formatTime = (seconds: number) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

export default function BossChallenge() {
  const { isAuthenticated } = useAuth();
  const utils = trpc.useUtils();
  const boss = trpc.boss.dashboard.useQuery(undefined, { enabled: isAuthenticated });
  const submit = trpc.boss.submit.useMutation({ onSuccess: () => utils.boss.dashboard.invalidate() });
  const [started, setStarted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(600);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const questions = boss.data?.questions ?? [];
  const complete = questions.length > 0 && Object.keys(answers).length === questions.length;
  const elapsedSeconds = 600 - secondsLeft;
  const active = started && !boss.data?.attempt && !submit.isSuccess;

  useEffect(() => {
    setStarted(false);
    setSecondsLeft(boss.data?.durationLimitSeconds ?? 600);
    setAnswers({});
  }, [boss.data?.weekKey]);

  useEffect(() => {
    if (!active || secondsLeft <= 0) return;
    const timer = window.setInterval(() => setSecondsLeft(value => Math.max(0, value - 1)), 1_000);
    return () => window.clearInterval(timer);
  }, [active, secondsLeft]);

  const playAudio = (text?: string) => {
    if (!text || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const submitChallenge = () => {
    if (!complete || submit.isPending) return;
    submit.mutate({ answers: questions.map(question => ({ questionId: question.id, selected: answers[question.id] })), elapsedSeconds: Math.max(1, elapsedSeconds) });
  };

  if (!isAuthenticated) return <StudyShell><section className="boss-gate"><LockKeyhole /><span className="eyebrow">WEEKLY BOSS · 10 PHÚT</span><h1>Đối đầu tuần này.<br /><i>Không cần hoàn hảo.</i></h1><p>Đăng nhập để nhận Boss Challenge, giữ kết quả riêng tư và đưa câu sai vào Mistake Lab.</p><button onClick={() => startLogin()}>Đăng nhập để mở Boss <ArrowRight /></button></section></StudyShell>;
  if (boss.isLoading) return <StudyShell><div className="lesson-loading">Đang triệu hồi Boss của tuần…</div></StudyShell>;
  if (!boss.data) return <StudyShell><div className="lesson-loading">Boss tạm thời chưa sẵn sàng. Hãy thử lại sau.</div></StudyShell>;

  const result = submit.data ?? boss.data.attempt;
  if (result) return <StudyShell><main className="page-wrap boss-page"><section className="boss-result"><Trophy /><span className="eyebrow">WEEK {boss.data.weekKey} · KẾT QUẢ ĐÃ KHÓA</span><h1>{result.score >= 80 ? "Bạn đã hạ Boss." : "Boss đã để lại dấu vết."}</h1><p>{result.score >= 80 ? "Bạn giữ nhịp tốt giữa nghe, suy luận và đọc nhanh. Hãy dùng Mistake Lab để giữ đà." : "Kết quả này là bản đồ cho lượt ôn tiếp theo, không phải phán xét. Các câu sai đã vào Mistake Lab."}</p><div className="boss-result-stats"><div><strong>{result.score}%</strong><span>độ chính xác</span></div><div><strong>{result.correctAnswers}/{result.totalQuestions}</strong><span>câu đúng</span></div><div><strong>{formatTime(result.durationSeconds)}</strong><span>thời gian dùng</span></div></div>{"xp" in result && <div className="boss-xp"><Sparkles /> +{result.xp} XP cho hành trình tuần này</div>}<div className="boss-result-actions"><Link href="/mistake-lab">Vào Mistake Lab <ArrowRight /></Link><Link href="/lessons">Luyện thêm Part 2–3–7</Link></div></section></main></StudyShell>;

  return <StudyShell><main className="page-wrap boss-page">
    <header className="boss-hero"><div><span className="eyebrow">WEEKLY BOSS · 10 PHÚT</span><h1>10 phút để biết<br /><i>bạn đã thật sự sẵn sàng?</i></h1><p>4 câu Part 2, 3 câu Part 3 và 3 câu Part 7. Đề thay đổi theo tuần; câu sai tự vào Mistake Lab.</p></div><div className="boss-emblem"><Crown /><b>WEEKLY<br />BOSS</b><small>{boss.data.weekKey}</small></div></header>
    {!started ? <section className="boss-briefing"><div className="boss-brief-icon"><Flame /></div><div><span className="eyebrow">LUẬT ĐẤU</span><h2>Một lượt chính thức. Một bản đồ rõ hơn.</h2><p>Timer chỉ chạy sau khi bạn bắt đầu. Hãy chọn đủ 10 đáp án trước khi nộp; server sẽ chấm điểm và bảo vệ đáp án.</p></div><div className="boss-rules"><span><Clock3 /> 10 phút</span><span><AudioLines /> Part 2 & 3</span><span><ShieldCheck /> Chấm ở server</span></div><button onClick={() => setStarted(true)}>Bắt đầu Boss Challenge <ArrowRight /></button></section> : <section className="boss-arena">
      <aside className="boss-side"><div className="boss-clock"><Clock3 /><strong>{formatTime(secondsLeft)}</strong><span>{secondsLeft ? "còn lại" : "hết giờ"}</span></div><div className="boss-progress"><b>{Object.keys(answers).length}/10</b><span>đã chọn</span><i><em style={{ width: `${Object.keys(answers).length * 10}%` }} /></i></div><p>Đừng mắc kẹt ở một câu. Đánh dấu lựa chọn tốt nhất, rồi dùng Mistake Lab để quay lại phần cần sửa.</p></aside>
      <div className="boss-questions">{questions.map((question, index) => <article className="boss-question" key={question.id}><div className="boss-question-top"><span>#{String(index + 1).padStart(2, "0")} · Part {question.part}</span><small>{question.contextLabel}</small></div>{question.audioText && <button className="boss-audio" onClick={() => playAudio(question.audioText)}><AudioLines /> Nghe câu hỏi</button>}<p>{question.prompt}</p><div className="boss-options">{question.choices.map((choice, choiceIndex) => <button key={`${question.id}-${choiceIndex}`} className={answers[question.id] === choiceIndex ? "selected" : ""} onClick={() => setAnswers(previous => ({ ...previous, [question.id]: choiceIndex }))}><span>{String.fromCharCode(65 + choiceIndex)}</span>{choice}</button>)}</div></article>)}<footer className="boss-submit"><div><b>{complete ? "Đủ 10 câu — sẵn sàng nộp." : `Còn ${questions.length - Object.keys(answers).length} câu chưa chọn.`}</b><span>{secondsLeft ? "Bạn có thể thay đổi lựa chọn trước khi nộp." : "Timer đã hết; hãy nộp các lựa chọn hoàn chỉnh."}</span></div><button disabled={!complete || submit.isPending} onClick={submitChallenge}>{submit.isPending ? "Đang chấm…" : "Chấm Boss Challenge"}<Crown /></button></footer></div>
    </section>}
  </main></StudyShell>;
}
