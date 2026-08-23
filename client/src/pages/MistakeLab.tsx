import { useMemo, useState } from "react";
import { ArrowRight, BrainCircuit, CheckCircle2, FlaskConical, Lightbulb, LockKeyhole, RotateCcw, Sparkles, Target, XCircle } from "lucide-react";
import { Link } from "wouter";
import { StudyShell } from "@/components/StudyShell";
import { startLogin } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";

type Feedback = { correct: boolean; mastered: boolean; explanation: string; remainingRepairs: number };
const skillLabel: Record<string, string> = { grammar: "Ngữ pháp", listening: "Luyện nghe", reading: "Đọc hiểu", speaking: "Phát âm", mixed: "Tổng hợp" };

export default function MistakeLab() {
  const { isAuthenticated } = useAuth();
  const utils = trpc.useUtils();
  const lab = trpc.mistakeLab.dashboard.useQuery(undefined, { enabled: isAuthenticated });
  const check = trpc.mistakeLab.checkAnswer.useMutation();
  const [resolvedIds, setResolvedIds] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const queue = useMemo(() => (lab.data?.items ?? []).filter(item => !resolvedIds.includes(item.id)), [lab.data?.items, resolvedIds]);
  const current = queue[0];
  const answer = () => {
    if (!current || selected === null) return;
    check.mutate({ mistakeId: current.id, selected }, { onSuccess: result => setFeedback(result) });
  };
  const next = async () => {
    if (!current) return;
    setResolvedIds(previous => [...previous, current.id]);
    setSelected(null);
    setFeedback(null);
    await utils.mistakeLab.dashboard.invalidate();
  };
  if (!isAuthenticated) return <StudyShell><div className="mistake-gate"><LockKeyhole /><span className="eyebrow">MISTAKE LAB</span><h1>Biến lỗi sai thành<br /><i>điểm tựa.</i></h1><p>Đăng nhập để lưu lại câu bạn nhầm ở bài học và thi thử, rồi ôn lại đúng thời điểm.</p><button onClick={() => startLogin()}>Đăng nhập để mở Lab <ArrowRight /></button></div></StudyShell>;
  if (lab.isLoading) return <StudyShell><div className="lesson-loading">Đang chuẩn bị lỗi cần khắc phục…</div></StudyShell>;
  return <StudyShell><div className="page-wrap mistake-page">
    <header className="mistake-hero"><div><span className="eyebrow">MISTAKE LAB · ÔN BẰNG LỖI THẬT</span><h1>Không né lỗi sai.<br /><i>Biến chúng thành phản xạ.</i></h1><p>Lab chỉ lấy những câu bạn từng chọn sai. Mỗi câu đúng hai lần ở các lượt khác nhau sẽ được đưa ra khỏi hàng chờ.</p></div><div className="mistake-scoreboard"><div><Target /><strong>{lab.data?.summary.active ?? 0}</strong><span>lỗi đang mở</span></div><div><CheckCircle2 /><strong>{lab.data?.summary.mastered ?? 0}</strong><span>đã khắc phục</span></div></div></header>
    {!current ? <section className="mistake-empty"><div className="empty-orbit"><Sparkles /><BrainCircuit /></div><span className="eyebrow">PHÒNG LAB ĐANG GỌN GÀNG</span><h2>{(lab.data?.summary.active ?? 0) ? "Bạn đã hoàn thành lượt ôn này." : "Bạn chưa có lỗi nào cần ôn."}</h2><p>{(lab.data?.summary.active ?? 0) ? "Các lỗi còn lại sẽ trở lại theo nhịp ôn. Bạn vừa thực hiện phần khó nhất: đối diện và tự sửa." : "Hãy làm một bài học hoặc thi thử. Khi có một đáp án chưa đúng, Lab sẽ lưu riêng cho bạn — không phán xét, chỉ giúp bạn sửa."}</p><div><Link href="/lessons">Làm bài học mẫu <ArrowRight /></Link><Link href="/mock-test">Thử 7 Part <ArrowRight /></Link></div></section> : <section className="mistake-workbench"><aside className="lab-rail"><span>HÀNG ĐỢI HÔM NAY</span><b>{queue.length} câu</b><div className="rail-progress"><i style={{ width: `${Math.max(8, (resolvedIds.length / Math.max(1, (lab.data?.items.length ?? 1))) * 100)}%` }} /></div><p>Đúng lần đầu: ôn lại sau 1 ngày.<br />Đúng lần hai: khắc phục xong.</p></aside><main className="mistake-card"><div className="mistake-card-top"><span>{skillLabel[current.skill] ?? current.skill}</span><span>{current.source === "mock" ? "Từ thi thử" : "Từ bài học"}</span></div><h2>Thử lại, không cần vội.</h2><p className="mistake-prompt">{current.prompt}</p><div className="mistake-options">{current.options.map((option, index) => <button key={`${option}-${index}`} disabled={Boolean(feedback)} onClick={() => setSelected(index)} className={selected === index ? "selected" : ""}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div>{feedback ? <div className={`mistake-feedback ${feedback.correct ? "good" : "try-again"}`}><div>{feedback.correct ? <CheckCircle2 /> : <XCircle />}<b>{feedback.mastered ? "Đã khắc phục trọn vẹn." : feedback.correct ? "Đúng rồi. Hãy gặp lại sau một ngày." : "Sai cũng là dữ liệu tốt."}</b></div><p>{feedback.explanation}</p>{feedback.correct && !feedback.mastered && <small>Còn {feedback.remainingRepairs} lần khắc phục để đưa lỗi này ra khỏi Lab.</small>}</div> : <div className="lab-hint"><Lightbulb />Đừng chọn theo cảm giác quen. Hãy nói thầm lý do trước khi chọn.</div>}<div className="mistake-actions">{feedback ? <button onClick={next}>{queue.length > 1 ? "Câu tiếp theo" : "Kết thúc lượt ôn"}<ArrowRight /></button> : <button disabled={selected === null || check.isPending} onClick={answer}>Kiểm tra lựa chọn <FlaskConical /></button>}<button className="reset-selection" onClick={() => { setSelected(null); setFeedback(null); }} disabled={!selected || Boolean(feedback)}><RotateCcw />Chọn lại</button></div></main></section>}
  </div></StudyShell>;
}
