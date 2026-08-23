# QA — Dashboard lịch sử làm bài & tiến bộ

| Hạng mục | Bằng chứng | Kết quả |
| --- | --- | --- |
| Nguồn dữ liệu | `getProgressDashboard(userId)` | Truy vấn study sessions, mock attempts và Boss attempts chỉ qua `userId` lấy từ OAuth context; không nhận `userId` từ client. |
| Bảo vệ API | `progressDashboard.router.test.ts` | Procedure `learning.progressDashboard` gọi helper với chính `ctx.user.id`. |
| Tổng hợp số liệu | `progressDashboardLogic.test.ts` | KPI, 14 ngày học, xu hướng điểm và lịch sử được tạo từ các dòng dữ liệu cung cấp; state rỗng giữ giá trị 0/empty, không tự tạo dữ liệu giả. |
| Desktop | Screenshot `/progress-dashboard` ở 1280×720 | KPI, hai vùng biểu đồ và bảng lịch sử giữ hierarchy rõ ràng; state chưa có dữ liệu được giải thích bằng CTA học tiếp. |
| Mobile | Screenshot `/progress-dashboard` ở 375×812 | KPI chuyển lưới 2 cột, biểu đồ và tab lịch sử xếp dọc, không tràn chiều ngang. |

> Dashboard hiển thị dữ liệu tài khoản hiện tại. Khi chưa có attempt/session thực, biểu đồ không có đường/cột thay thế; thay vào đó là empty state có hướng dẫn hành động tiếp theo.
