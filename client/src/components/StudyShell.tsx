import { useState } from "react";
import { BookOpen, BrainCircuit, ClipboardCheck, Crown, FilePenLine, FlaskConical, Gamepad2, House, Layers3, LogIn, Menu, Sparkles, TimerReset, UserRound, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/", label: "Tổng quan", icon: House },
  { href: "/learn", label: "Thẻ ôn SRS", icon: BrainCircuit },
  { href: "/vocabulary", label: "Ngân hàng từ", icon: BookOpen },
  { href: "/practice", label: "Luyện kỹ năng", icon: Sparkles },
  { href: "/lessons", label: "Bài học dẫn dắt", icon: BookOpen },
  { href: "/mistake-lab", label: "Mistake Lab", icon: FlaskConical },
  { href: "/boss-challenge", label: "Boss tuần", icon: Crown },
  { href: "/modes", label: "Phòng học", icon: Layers3 },
  { href: "/daily-plan", label: "Kế hoạch 15 phút", icon: TimerReset },
  { href: "/mock-test", label: "Thi thử 7 Part", icon: ClipboardCheck },
  { href: "/games", label: "Đấu trường", icon: Gamepad2 },
  { href: "/profile", label: "Hồ sơ", icon: UserRound },
];

export function StudyShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { user, isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="app-shell">
      <aside className="study-sidebar">
        <Link href="/" className="brand-mark" aria-label="TOEIC Quest trang chủ">
          <span className="brand-icon">TQ</span>
          <span><strong>TOEIC</strong><em>Quest</em></span>
        </Link>
        <p className="sidebar-caption">Hành trình 0 → 800+</p>
        <nav className="main-nav" aria-label="Điều hướng học tập">
          {nav.map(item => {
            const Icon = item.icon;
            const active = location === item.href;
            return <Link href={item.href} key={item.href} className={cn("nav-link", active && "nav-link-active")}><Icon /><span>{item.label}</span>{item.href === "/learn" && <b>12</b>}</Link>;
          })}
        </nav>
        <div className="sidebar-bottom">
          {user?.role === "admin" && <Link href="/admin/lessons" className="nav-link admin-nav-link"><FilePenLine /><span>Studio bài học</span></Link>}
          <ThemeToggle />
          <div className="daily-dot"><span>07</span><p><strong>Chuỗi ngày</strong><small>Mỗi ngày một bước</small></p></div>
          {isAuthenticated ? <div className="user-summary"><span>{user?.name?.slice(0, 1).toUpperCase() ?? "U"}</span><p><strong>{user?.name ?? "Học viên"}</strong><small>Đồng bộ tiến độ</small></p></div> : <button onClick={() => startLogin()} className="login-quiet"><LogIn /> Đăng nhập để lưu tiến độ</button>}
        </div>
      </aside>
      <main className="study-main">{children}</main>
      <nav className="mobile-nav" aria-label="Điều hướng di động">
        {nav.slice(0, 4).map(item => {
          const Icon = item.icon;
          return <Link href={item.href} key={item.href} className={cn("mobile-nav-link", location === item.href && "mobile-nav-active")}><Icon /><span>{item.label.split(" ")[0]}</span></Link>;
        })}
        <button className="mobile-more-trigger" onClick={() => setMobileMenuOpen(value => !value)} aria-expanded={mobileMenuOpen} aria-controls="mobile-more-menu"><Menu /><span>Thêm</span></button>
      </nav>
      {mobileMenuOpen && <div id="mobile-more-menu" className="mobile-more-menu"><div className="mobile-more-head"><b>Khám phá TOEIC Quest</b><button onClick={() => setMobileMenuOpen(false)} aria-label="Đóng menu"><X /></button></div>{nav.slice(4).map(item => { const Icon = item.icon; return <Link href={item.href} onClick={() => setMobileMenuOpen(false)} key={item.href}><Icon />{item.label}</Link>; })}<ThemeToggle /></div>}
    </div>
  );
}
