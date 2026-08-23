import { BookOpenCheck, Clock3, GraduationCap, LockKeyhole, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { StudyShell } from "@/components/StudyShell";
import { trpc } from "@/lib/trpc";

const skillLabel: Record<string, string> = { grammar: "Ngữ pháp", listening: "Luyện nghe", reading: "Đọc hiểu", speaking: "Phát âm", mixed: "Tổng hợp" };

export default function Lessons() {
  const lessons = trpc.lessons.list.useQuery();
  return <StudyShell><div className="page-wrap lessons-page">
    <header className="lesson-hero">
      <div><span className="eyebrow">BÀI HỌC CÓ DẪN DẮT</span><h1>Học theo <i>một câu chuyện</i>,<br />không chỉ theo từng câu hỏi.</h1><p>Mỗi bài gồm khởi động, giải thích ngắn, luyện áp dụng và tổng kết. Khi bạn đăng nhập, tiến độ sẽ được lưu để quay lại đúng bước.</p></div>
      <div className="lesson-hero-stat"><GraduationCap /><strong>4 bước</strong><span>một nhịp học vừa đủ</span></div>
    </header>
    <section className="lesson-principles" aria-label="Cấu trúc bài học">
      <div><span>01</span><b>Gợi nhớ</b><small>Khởi động bằng điều bạn đã biết</small></div><div><span>02</span><b>Hiểu nhanh</b><small>Giải thích ngắn, có ngữ cảnh</small></div><div><span>03</span><b>Áp dụng</b><small>Quiz hoặc nghe chủ động</small></div><div><span>04</span><b>Chốt lại</b><small>Một điều để mang sang lần sau</small></div>
    </section>
    <section className="lesson-catalog"><div className="section-heading"><div><span className="eyebrow">THƯ VIỆN CỦA BẠN</span><h2>Chọn bài học tiếp theo</h2></div><span className="catalog-count">{lessons.data?.length ?? 0} bài đã xuất bản</span></div>
      {lessons.isLoading ? <div className="lesson-empty"><Sparkles />Đang tải thư viện bài học…</div> : lessons.data?.length ? <div className="lesson-grid">{lessons.data.map(lesson => <Link href={`/lessons/${lesson.slug}`} className="lesson-tile" key={lesson.id}><div className="lesson-tile-top"><span>{skillLabel[lesson.skill]}</span><span>{lesson.level}</span></div><h3>{lesson.title}</h3><p>{lesson.summary}</p><div className="lesson-tile-bottom"><span><Clock3 />{lesson.estimatedMinutes} phút</span><b>Bắt đầu <BookOpenCheck /></b></div></Link>)}</div> : <div className="lesson-empty"><LockKeyhole /><div><strong>Thư viện đang chờ bài học đầu tiên.</strong><p>Quản trị viên có thể tạo nháp, thêm các bước và xuất bản từ Studio nội dung.</p></div></div>}
    </section>
  </div></StudyShell>;
}
