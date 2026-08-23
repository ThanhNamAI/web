import { ArrowRight, BarChart3, BookOpenCheck, ChevronRight, Clock3, Flame, Headphones, Play, Sparkles, Target } from "lucide-react";
import { Link } from "wouter";
import { StudyShell } from "@/components/StudyShell";
import { AudioButton } from "@/components/AudioButton";
import { roadmapStages } from "@/lib/learningContent";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import "./home-extra.css";

const skillDisplay = [
  { skill: "vocabulary", label: "Từ vựng", tone: "ring-clay" },
  { skill: "grammar", label: "Ngữ pháp", tone: "ring-gold" },
  { skill: "listening", label: "Nghe", tone: "ring-teal" },
  { skill: "reading", label: "Đọc", tone: "ring-violet" },
] as const;

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const dashboard = trpc.learning.dashboard.useQuery(undefined, { enabled: isAuthenticated });
  const word = dashboard.data?.cards[0];
  const skills = skillDisplay.map(item => ({ ...item, value: dashboard.data?.analytics.skills.find(skill => skill.skill === item.skill)?.accuracy ?? 0 }));
  const displayName = user?.name?.split(" ")[0];
  const studyNote = isAuthenticated
    ? (dashboard.data?.analytics.recommendation ?? "Hoàn thành hoạt động đầu tiên để TOEIC Quest nhận diện điểm cần ưu tiên.")
    : "Đăng nhập để TOEIC Quest sắp xếp thẻ đến hạn và kỹ năng cần cải thiện cho riêng bạn.";
  return <StudyShell>
    <div className="page-wrap overview-page">
      <header className="topline"><div><span className="eyebrow">HÀNH TRÌNH TOEIC CÁ NHÂN</span><h1>{displayName ? `Chào ${displayName}.` : "Chào mừng bạn đến TOEIC Quest."}</h1><p>{isAuthenticated ? "Hôm nay mình cùng học đủ sâu, nhưng không học quá sức." : "Đăng nhập để lưu nhịp học và nhận gợi ý phù hợp với mục tiêu của bạn."}</p></div><div className="topline-actions"><Link href="/progress-dashboard" className="round-action" aria-label="Xem tiến độ"><BarChart3 /></Link><div className="level-chip"><Sparkles /><span>{isAuthenticated ? `${dashboard.data?.profile.currentStage ?? "Foundation"}` : "0 → 800+"}</span></div></div></header>
      <section className="hero-panel">
        <div className="hero-copy"><span className="hero-kicker">BUỔI HỌC ĐƯỢC ĐỀ XUẤT</span><h2>Chạm đích <i>{dashboard.data?.profile.targetScore ?? 800}+</i><br />bằng nhịp học của bạn.</h2><p>Kế hoạch 15 phút tự ưu tiên thẻ đến hạn và kỹ năng cần cải thiện, giúp bạn chỉ việc bắt đầu.</p><div className="hero-meta"><span><Clock3 /> 15 phút</span><span><Target /> {isAuthenticated ? "Theo dữ liệu học" : "Theo mục tiêu của bạn"}</span></div><div className="hero-actions"><Link href="/daily-plan" className="primary-cta"><Play fill="currentColor" /> Bắt đầu 15 phút <ArrowRight /></Link><Link href="/mock-test" className="secondary-cta">Thi thử 7 Part</Link></div></div>
        <div className="hero-visual" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-score"><small>MỤC TIÊU</small><strong>{dashboard.data?.profile.targetScore ?? 800}<span>+</span></strong><p>TOEIC score</p></div><div className="floating-card card-a"><span>✓</span><p><b>{isAuthenticated ? `${dashboard.data?.dueCards.length ?? 0} thẻ` : "Lộ trình riêng"}</b><small>{isAuthenticated ? "đến hạn hôm nay" : "khi bạn đăng nhập"}</small></p></div><div className="floating-card card-b"><Headphones /><p><b>{dashboard.data?.analytics.focusLabel ?? "Luyện kỹ năng"}</b><small>ưu tiên tiếp theo</small></p></div></div>
      </section>
      <section className="section-heading"><div><span className="eyebrow">BẢN ĐỒ HỌC TẬP</span><h2>Lộ trình đến 800+</h2></div><Link href="/practice" className="text-link">Xem chi tiết <ChevronRight /></Link></section>
      <section className="roadmap-grid">{roadmapStages.map((stage, index) => <article className="roadmap-card" key={stage.id}><div className="roadmap-step"><span>{String(index + 1).padStart(2, "0")}</span><b>{stage.range}</b></div><div><h3>{stage.label}</h3><p>{stage.detail}</p></div><div className="track"><i className={stage.color} style={{ width: `${stage.percentage}%` }} /></div><small>Trọng tâm của chặng</small></article>)}</section>
      <section className="dashboard-grid">
        <article className="skill-card panel"><div className="panel-title"><div><span className="eyebrow">NHỊP ĐỘ CÁ NHÂN</span><h2>Chỉ số kỹ năng</h2></div><span className="soft-tag">{isAuthenticated ? "Dữ liệu gần đây" : "Đăng nhập để theo dõi"}</span></div><div className="skill-rings">{skills.map(item => <div className="skill-ring-item" key={item.label}><div className={`skill-ring ${item.tone}`} style={{ "--value": `${item.value * 3.6}deg` } as React.CSSProperties}><b>{item.value}%</b></div><span>{item.label}</span></div>)}</div><div className="skill-note"><Flame /><p><b>{dashboard.data?.analytics.focusLabel ? `Ưu tiên ${dashboard.data.analytics.focusLabel.toLowerCase()}` : "Bắt đầu bằng một phiên ngắn"}</b><span>{studyNote}</span></p></div></article>
        <article className="word-card panel">{word ? <><div className="panel-title"><div><span className="eyebrow">TỪ ĐỀ XUẤT</span><h2>{word.term}</h2></div><AudioButton text={word.term} compact /></div><p className="ipa">{word.ipa}</p><p className="word-meaning">{word.meaning}</p><blockquote>“{word.example}”</blockquote><Link href="/vocabulary" className="text-link">Mở ngân hàng từ vựng <BookOpenCheck /></Link></> : <div className="word-card-empty"><span className="eyebrow">NGÂN HÀNG TỪ</span><h2>Từ đầu tiên đang chờ bạn.</h2><p>Đăng nhập để nhận thẻ ôn và từ được đề xuất dựa trên lịch học thực tế.</p><Link href="/vocabulary" className="text-link">Khám phá ngân hàng từ <BookOpenCheck /></Link></div>}</article>
      </section>
    </div>
  </StudyShell>;
}
