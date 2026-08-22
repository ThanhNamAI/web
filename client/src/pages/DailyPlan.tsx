import { CheckCircle2, Clock3, Play, Sparkles } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { StudyShell } from "@/components/StudyShell";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import "./plan-test.css";

const fallback = { totalSeconds: 900, focusSkill: "vocabulary", rationale: "Bắt đầu với từ vựng để hệ thống có dữ liệu cá nhân hóa.", blocks: [{ id: "srs", skill: "vocabulary", seconds: 180, title: "Khởi động từ vựng" }, { id: "focus", skill: "vocabulary", seconds: 480, title: "Tăng lực từ vựng" }, { id: "apply", skill: "listening", seconds: 240, title: "Áp dụng nhanh: nghe" }] };

export default function DailyPlan() {
  const { isAuthenticated } = useAuth();
  const planQuery = trpc.learning.dailyPlan.useQuery(undefined, { enabled: isAuthenticated });
  const plan = planQuery.data ?? fallback;
  const destination = (block: typeof plan.blocks[number]) => block.id === "srs" ? "/learn" : block.id === "focus" ? "/practice" : "/modes";
  const format = (seconds: number) => `${Math.round(seconds / 60)} phút`;
  const cards: Array<{ id: string; term: string; meaning: string; topic: string }> = planQuery.data?.plannedCards ?? [];
  return <StudyShell><div className="page-wrap plan-page"><header className="page-header"><div><span className="eyebrow">KẾ HOẠCH HÔM NAY · 15 PHÚT</span><h1>Học ít, nhưng <i>đúng chỗ.</i></h1><p>{plan.rationale} Ba chặng ngắn giúp bạn ôn, tăng lực và áp dụng mà không cần tự chọn quá nhiều.</p></div><div className="plan-total"><Clock3 /><b>15:00</b><span>một buổi học</span></div></header><section className="plan-hero"><div><span className="eyebrow">TRỌNG TÂM HÔM NAY</span><h2>{plan.focusSkill === "vocabulary" ? "Từ vựng" : plan.focusSkill === "grammar" ? "Ngữ pháp" : plan.focusSkill === "listening" ? "Luyện nghe" : "Đọc hiểu"}</h2><p>Hệ thống dùng lịch ôn SRS và kết quả kỹ năng đã ghi nhận để chọn trọng tâm. Mỗi nút mở đúng bài học thật cho chặng đó.</p></div><Sparkles /></section>{cards.length > 0 && <section className="plan-card-preview"><span className="eyebrow">THẺ ĐƯỢC CHỌN HÔM NAY</span><div>{cards.slice(0, 4).map(card => <span key={card.id}><b>{card.term}</b><small>{card.meaning}</small></span>)}</div></section>}<section className="plan-blocks">{plan.blocks.map((block, index) => <article className="plan-block" key={block.id}><span className="plan-index">0{index + 1}</span><div><span className="eyebrow">{format(block.seconds)} · {block.skill}</span><h2>{block.title}</h2><p>{index === 0 ? "Củng cố trí nhớ bằng thẻ đến hạn." : index === 1 ? "Làm một lượt luyện có phản hồi ngay." : "Đổi kỹ năng để tạo ghi nhớ bền vững."}</p></div><Link href={destination(block)} className="plan-start"><Play fill="currentColor" /> Bắt đầu</Link></article>)}</section><section className="plan-note"><CheckCircle2 /><p><b>Tiến trình rõ ràng:</b> hoàn thành từng bài sẽ tự ghi vào lịch sử học. {isAuthenticated ? "Kết quả sẽ được dùng để điều chỉnh kế hoạch buổi sau." : "Đăng nhập để lưu kết quả và cá nhân hóa kế hoạch ngày mai."}</p></section></div></StudyShell>;
}
