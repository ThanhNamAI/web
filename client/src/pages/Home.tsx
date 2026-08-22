import { ArrowRight, BarChart3, BookOpenCheck, ChevronRight, Clock3, Flame, Headphones, Play, Sparkles, Target } from "lucide-react";
import { Link } from "wouter";
import { vocabulary } from "@shared/vocabulary.generated";
import { StudyShell } from "@/components/StudyShell";
import { AudioButton } from "@/components/AudioButton";
import { roadmapStages } from "@/lib/learningContent";
import "./home-extra.css";

const progressRings = [
  { label: "Từ vựng", value: 34, tone: "ring-clay" },
  { label: "Ngữ pháp", value: 18, tone: "ring-gold" },
  { label: "Nghe", value: 12, tone: "ring-teal" },
  { label: "Đọc", value: 9, tone: "ring-violet" },
];

export default function Home() {
  const word = vocabulary.find(item => item.term === "appointment") ?? vocabulary[0];
  return <StudyShell>
    <div className="page-wrap overview-page">
      <header className="topline"><div><span className="eyebrow">THỨ HAI, 23 THÁNG 8</span><h1>Chào buổi tối, Minh.</h1><p>Hôm nay mình cùng học đủ sâu, nhưng không học quá sức.</p></div><div className="topline-actions"><button className="round-action" aria-label="Xem tiến độ"><BarChart3 /></button><div className="level-chip"><Sparkles /><span>Level 04</span></div></div></header>
      <section className="hero-panel">
        <div className="hero-copy"><span className="hero-kicker">BUỔI HỌC ĐƯỢC ĐỀ XUẤT</span><h2>Chạm đích <i>800+</i><br />bằng nhịp học của bạn.</h2><p>Kế hoạch 15 phút tự ưu tiên thẻ đến hạn và kỹ năng cần cải thiện, giúp bạn chỉ việc bắt đầu.</p><div className="hero-meta"><span><Clock3 /> 15 phút</span><span><Target /> 42 XP</span></div><div className="hero-actions"><Link href="/daily-plan" className="primary-cta"><Play fill="currentColor" /> Bắt đầu 15 phút <ArrowRight /></Link><Link href="/mock-test" className="secondary-cta">Thi thử 7 Part</Link></div></div>
        <div className="hero-visual" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-score"><small>MỤC TIÊU</small><strong>800<span>+</span></strong><p>TOEIC score</p></div><div className="floating-card card-a"><span>✓</span><p><b>12 thẻ</b><small>đến hạn hôm nay</small></p></div><div className="floating-card card-b"><Headphones /><p><b>Part 3</b><small>luyện nghe</small></p></div></div>
      </section>
      <section className="section-heading"><div><span className="eyebrow">BẢN ĐỒ HỌC TẬP</span><h2>Lộ trình đến 800+</h2></div><Link href="/practice" className="text-link">Xem chi tiết <ChevronRight /></Link></section>
      <section className="roadmap-grid">{roadmapStages.map((stage, index) => <article className="roadmap-card" key={stage.id}><div className="roadmap-step"><span>{String(index + 1).padStart(2, "0")}</span><b>{stage.range}</b></div><div><h3>{stage.label}</h3><p>{stage.detail}</p></div><div className="track"><i className={stage.color} style={{ width: `${stage.percentage}%` }} /></div><small>{stage.percentage}% hoàn thành</small></article>)}</section>
      <section className="dashboard-grid">
        <article className="skill-card panel"><div className="panel-title"><div><span className="eyebrow">NHỊP ĐỘ TUẦN NÀY</span><h2>Chỉ số kỹ năng</h2></div><span className="soft-tag">Tuần 01</span></div><div className="skill-rings">{progressRings.map(item => <div className="skill-ring-item" key={item.label}><div className={`skill-ring ${item.tone}`} style={{ "--value": `${item.value * 3.6}deg` } as React.CSSProperties}><b>{item.value}%</b></div><span>{item.label}</span></div>)}</div><div className="skill-note"><Flame /><p><b>Giữ nhịp 3 ngày/tuần</b><span>để mở khóa bài tăng tốc vào Chủ nhật.</span></p></div></article>
        <article className="word-card panel"><div className="panel-title"><div><span className="eyebrow">TỪ CỦA NGÀY</span><h2>{word.term}</h2></div><AudioButton text={word.term} compact /></div><p className="ipa">{word.ipa}</p><p className="word-meaning">{word.meaning}</p><blockquote>“{word.example}”</blockquote><Link href="/vocabulary" className="text-link">Khám phá {vocabulary.length.toLocaleString("vi-VN")} từ <BookOpenCheck /></Link></article>
      </section>
    </div>
  </StudyShell>;
}
