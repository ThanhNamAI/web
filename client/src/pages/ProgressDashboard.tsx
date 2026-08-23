import { useMemo, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Activity, BarChart3, CalendarDays, Clock3, FileCheck2, LineChart as LineChartIcon, LogIn, Sparkles, Target, Trophy } from "lucide-react";
import { StudyShell } from "@/components/StudyShell";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { trpc } from "@/lib/trpc";
import "./progress-dashboard.css";

const activityLabel = (value: string) => ({
  "mock-listening": "Thi thử · Listening",
  "mock-reading": "Thi thử · Reading",
  "weekly-boss": "Boss Challenge",
  "guided-lesson": "Bài học dẫn dắt",
  "srs-card": "Thẻ ôn SRS",
  "mistake-lab-repair": "Mistake Lab",
  "listening-practice": "Luyện nghe",
  "reading-practice": "Luyện đọc",
  "grammar-practice": "Luyện ngữ pháp",
}[value] ?? value.replaceAll("-", " "));

type Tab = "attempts" | "sessions";

export default function ProgressDashboard() {
  const { isAuthenticated } = useAuth();
  const dashboard = trpc.learning.progressDashboard.useQuery(undefined, { enabled: isAuthenticated });
  const [tab, setTab] = useState<Tab>("attempts");
  const trend = dashboard.data?.assessmentTrend ?? [];
  const daily = dashboard.data?.daily ?? [];
  const history = dashboard.data?.assessmentHistory ?? [];
  const sessions = dashboard.data?.sessions ?? [];
  const summary = dashboard.data?.summary;
  const profile = dashboard.data?.profile;
  const formatDuration = (seconds: number) => seconds < 60 ? `${seconds}s` : `${Math.round(seconds / 60)} phút`;
  const scoreMessage = useMemo(() => {
    if (!summary?.completedAssessments) return "Hoàn thành một đề thi thử, Boss hoặc bộ đề doanh nghiệp để bắt đầu theo dõi xu hướng.";
    if (summary.scoreDelta === null) return "Đây là mốc đầu tiên của bạn. Hãy làm thêm một bộ đề để so sánh xu hướng.";
    if (summary.scoreDelta > 0) return `Điểm lần gần nhất tăng ${summary.scoreDelta} điểm so với lần trước.`;
    if (summary.scoreDelta < 0) return `Điểm lần gần nhất thấp hơn ${Math.abs(summary.scoreDelta)} điểm; hãy xem Mistake Lab để khép khoảng trống.`;
    return "Điểm hai lần gần nhất ổn định; hãy tăng độ khó hoặc rút ngắn thời gian làm bài.";
  }, [summary]);

  if (!isAuthenticated) return <StudyShell><main className="page-wrap progress-dashboard"><section className="progress-gate"><BarChart3 /><span className="eyebrow">DASHBOARD CÁ NHÂN</span><h1>Nhìn thấy tiến bộ,<br /><i>học có định hướng.</i></h1><p>Đăng nhập để xem lịch sử làm bài, nhịp học và biểu đồ tiến bộ chỉ của riêng bạn.</p><button className="primary-cta" onClick={() => startLogin()}><LogIn /> Đăng nhập để xem dashboard</button></section></main></StudyShell>;
  if (dashboard.isLoading) return <StudyShell><main className="page-wrap progress-dashboard"><p className="progress-loading">Đang tổng hợp lịch sử học tập…</p></main></StudyShell>;
  if (dashboard.error) return <StudyShell><main className="page-wrap progress-dashboard"><section className="progress-error"><b>Chưa thể tải dashboard.</b><p>{dashboard.error.message}</p><button onClick={() => dashboard.refetch()}>Thử lại</button></section></main></StudyShell>;

  return <StudyShell><main className="page-wrap progress-dashboard"><header className="progress-hero"><div><span className="eyebrow">DASHBOARD TIẾN BỘ · DỮ LIỆU CÁ NHÂN</span><h1>Học gì, mạnh ở đâu,<br /><i>cần cải thiện điều gì.</i></h1><p>Lịch sử này tổng hợp các phiên thi thử, Boss Challenge, bộ đề doanh nghiệp và hoạt động học đã được lưu cho tài khoản của bạn.</p></div><div className="progress-target"><Target /><span>Mục tiêu</span><b>{profile?.targetScore ?? 800}+</b><small>TOEIC score</small></div></header>
  <section className="progress-kpis" aria-label="Chỉ số tiến bộ"><article><Trophy /><span>Điểm đánh giá TB</span><b>{summary?.completedAssessments ? `${summary.averageScore}%` : "—"}</b><small>{summary?.completedAssessments ?? 0} lần làm bài</small></article><article><FileCheck2 /><span>Điểm mới nhất</span><b>{summary?.latestScore === null || summary?.latestScore === undefined ? "—" : `${summary.latestScore}%`}</b><small>{summary?.scoreDelta === null || summary?.scoreDelta === undefined ? "Chưa có mốc so sánh" : `${summary.scoreDelta > 0 ? "+" : ""}${summary.scoreDelta} so với lần trước`}</small></article><article><Clock3 /><span>Thời gian đã học</span><b>{summary?.totalMinutes ?? 0}<em> phút</em></b><small>{summary?.totalSessions ?? 0} phiên đã ghi nhận</small></article><article><Sparkles /><span>Nhịp hiện tại</span><b>{profile?.currentStreak ?? 0}<em> ngày</em></b><small>Chuỗi học liên tiếp</small></article></section>
  <section className="progress-summary"><Activity /><p>{scoreMessage}</p><a href="/mistake-lab">Mở Mistake Lab</a></section>
  <section className="progress-charts"><article className="progress-chart-card assessment-chart"><div className="progress-chart-title"><div><span className="eyebrow">ĐƯỜNG XU HƯỚNG</span><h2>Độ chính xác theo lần làm bài</h2></div><LineChartIcon /></div>{trend.length ? <ResponsiveContainer width="100%" height={270}><LineChart data={trend} margin={{ top: 12, right: 16, left: -18, bottom: 3 }}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--chart-grid, #e7e7df)" /><XAxis dataKey="attempt" tickFormatter={value => `L${value}`} tick={{ fontSize: 11 }} tickLine={false} axisLine={false} /><YAxis domain={[0, 100]} tick={{ fontSize: 11 }} tickLine={false} axisLine={false} unit="%" /><Tooltip formatter={(value: number, key: string) => [key === "score" ? `${value}%` : `${value} phút`, key === "score" ? "Độ chính xác" : "Thời gian"]} labelFormatter={(_, payload) => { const row = payload[0]?.payload; return row ? `${row.type} · ${row.date}` : ""; }} contentStyle={{ borderRadius: 12, border: "1px solid var(--line, #d8d8cf)", fontSize: 12 }} /><Line type="monotone" dataKey="score" stroke="#c9623f" strokeWidth={3} dot={{ r: 4, fill: "#c9623f" }} activeDot={{ r: 6 }} /></LineChart></ResponsiveContainer> : <EmptyChart label="Chưa có lần làm bài được chấm." detail="Làm thi thử 7 Part, Boss tuần hoặc bộ đề doanh nghiệp để hiện đường xu hướng." />}</article>
  <article className="progress-chart-card activity-chart"><div className="progress-chart-title"><div><span className="eyebrow">14 NGÀY GẦN ĐÂY</span><h2>Nhịp học theo ngày</h2></div><CalendarDays /></div>{daily.some(day => day.minutes > 0) ? <ResponsiveContainer width="100%" height={270}><AreaChart data={daily} margin={{ top: 15, right: 10, left: -20, bottom: 3 }}><defs><linearGradient id="studyMinutes" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3c806b" stopOpacity={.4} /><stop offset="100%" stopColor="#3c806b" stopOpacity={.03} /></linearGradient></defs><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--chart-grid, #e7e7df)" /><XAxis dataKey="date" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} /><YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} unit="p" /><Tooltip formatter={(value: number) => [`${value} phút`, "Thời gian học"]} contentStyle={{ borderRadius: 12, border: "1px solid var(--line, #d8d8cf)", fontSize: 12 }} /><Area type="monotone" dataKey="minutes" stroke="#3c806b" strokeWidth={2.5} fill="url(#studyMinutes)" /></AreaChart></ResponsiveContainer> : <EmptyChart label="Chưa có thời gian học được ghi nhận." detail="Hoàn thành một hoạt động để biểu đồ nhịp học bắt đầu có dữ liệu." />}</article></section>
  <section className="progress-history"><div className="progress-history-head"><div><span className="eyebrow">LỊCH SỬ CHI TIẾT</span><h2>Dấu vết học tập của bạn</h2></div><div className="progress-tabs" role="tablist"><button className={tab === "attempts" ? "active" : ""} onClick={() => setTab("attempts")} role="tab" aria-selected={tab === "attempts"}>Lần làm bài</button><button className={tab === "sessions" ? "active" : ""} onClick={() => setTab("sessions")} role="tab" aria-selected={tab === "sessions"}>Phiên học</button></div></div>{tab === "attempts" ? history.length ? <div className="history-table-wrap"><table><thead><tr><th>Loại bài</th><th>Kết quả</th><th>Điểm</th><th>Thời gian</th><th>Hoàn thành</th></tr></thead><tbody>{history.map(attempt => <tr key={attempt.id}><td><b>{attempt.type}</b></td><td>{attempt.correctAnswers}/{attempt.totalQuestions} câu</td><td><span className="score-pill">{attempt.score}%</span></td><td>{formatDuration(attempt.durationSeconds)}</td><td>{new Date(attempt.completedAt).toLocaleDateString("vi-VN")}</td></tr>)}</tbody></table></div> : <HistoryEmpty title="Chưa có lịch sử làm bài." detail="Các lần làm thi thử, Boss tuần và bộ đề doanh nghiệp sẽ xuất hiện tại đây." /> : sessions.length ? <div className="history-table-wrap"><table><thead><tr><th>Hoạt động</th><th>Kỹ năng</th><th>Độ chính xác</th><th>XP</th><th>Thời gian</th><th>Hoàn thành</th></tr></thead><tbody>{sessions.map(session => <tr key={session.id}><td><b>{activityLabel(session.activityType)}</b></td><td>{session.skill}</td><td>{session.score}%</td><td>+{session.xp}</td><td>{formatDuration(session.durationSeconds)}</td><td>{new Date(session.completedAt).toLocaleDateString("vi-VN")}</td></tr>)}</tbody></table></div> : <HistoryEmpty title="Chưa có phiên học được lưu." detail="Khi bạn học SRS, hoàn thành bài dẫn dắt hoặc luyện kỹ năng, dữ liệu sẽ xuất hiện ở đây." />}</section>
  <section className="progress-time-card"><div><span className="eyebrow">PHÂN BỔ THỜI GIAN</span><h2>Phút học và XP theo ngày</h2></div>{daily.some(day => day.minutes > 0 || day.xp > 0) ? <ResponsiveContainer width="100%" height={210}><BarChart data={daily} margin={{ top: 16, right: 12, left: -20, bottom: 2 }}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--chart-grid, #e7e7df)" /><XAxis dataKey="date" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} /><YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} /><Tooltip formatter={(value: number, key: string) => [key === "minutes" ? `${value} phút` : `${value} XP`, key === "minutes" ? "Thời gian học" : "XP"]} contentStyle={{ borderRadius: 12, border: "1px solid var(--line, #d8d8cf)", fontSize: 12 }} /><Legend wrapperStyle={{ fontSize: 12 }} /><Bar dataKey="minutes" name="Phút học" fill="#7b9f8a" radius={[5, 5, 0, 0]} /><Bar dataKey="xp" name="XP" fill="#c9623f" radius={[5, 5, 0, 0]} /></BarChart></ResponsiveContainer> : <EmptyChart label="Chưa có phút học hoặc XP trong 14 ngày gần đây." detail="Dữ liệu sẽ được vẽ ngay khi một hoạt động học được hoàn thành." />}</section></main></StudyShell>;
}

function EmptyChart({ label, detail }: { label: string; detail: string }) {
  return <div className="progress-empty-chart"><BarChart3 /><b>{label}</b><span>{detail}</span></div>;
}

function HistoryEmpty({ title, detail }: { title: string; detail: string }) {
  return <div className="progress-history-empty"><FileCheck2 /><b>{title}</b><span>{detail}</span></div>;
}
