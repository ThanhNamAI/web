# Kiểm toán Production-focused — 23/08/2026

## Phạm vi và kết quả

| Hạng mục | Phát hiện | Xử lý và xác minh |
| --- | --- | --- |
| Dữ liệu trang chủ | Lời chào, XP, thẻ đến hạn, tiến độ kỹ năng và từ đề xuất từng có giá trị cứng, có thể không phản ánh người học. | Trang chủ dùng `learning.dashboard` theo OAuth user; khi chưa có dữ liệu, hiển thị state trung thực thay vì số liệu giả. |
| Hiệu năng tải ban đầu | Các trang nặng được import đồng bộ, đồng thời trang chủ kéo toàn bộ ngân hàng 1.324 từ vào entry bundle. | Lazy-load các route không phải trang chủ; từ đề xuất lấy từ dashboard server-side; CSS Business/Dashboard chỉ tải cùng route tương ứng. JavaScript entry giảm từ 2.787,98 kB xuống 693,84 kB (**75,1%** raw; **59,2% gzip**) và CSS entry giảm **18,5%**. |
| Thư viện bài học | `lessons.list` kiểm tra lần lượt mọi slug seed dù toàn bộ bài đã tồn tại. | Batch-query slug hiện có trước, chỉ insert bài thiếu. Endpoint tiếp tục trả 30 bài; lần gọi warm đo được 0,743 giây. |
| Phân quyền và XSS | Kiểm tra static không thấy `userId` do client gửi, `eval` hoặc `innerHTML` tự do. Điểm `dangerouslySetInnerHTML` duy nhất là ChartStyle nội bộ, nhận cấu hình style tĩnh trong component UI. | Dashboard/Boss/Mistake Lab/bộ đề tiếp tục dùng `protectedProcedure` và `ctx.user.id`; admin vẫn dùng `adminProcedure`. |
| Runtime và giao diện | Không có error mới trong console sau restart; thông báo thiếu session cookie là expected ở guest route. Desktop/mobile được rà soát cho tổng quan, Lessons, bộ đề doanh nghiệp, Boss, mock và Dashboard. | `pnpm check`, `pnpm test` và `pnpm build` đều đạt; server restart sạch. Các ảnh chụp lazy route có loading ngắn do snapshot không chờ fetch, không có network/console error mới. |

## Hồi quy

| Kiểm tra | Kết quả |
| --- | --- |
| TypeScript | Đạt (`pnpm check`) |
| Unit/router tests | Đạt, gồm test seed batch mới |
| Production build | Đạt, các route được tách chunk |
| API Lessons | HTTP 200, 30 slug trả về |
| Runtime sau restart | OAuth khởi tạo và server chạy ổn định; không có console error mới |

> Cảnh báo chunk còn lại thuộc ngân hàng từ vựng và biểu đồ, nhưng đã là chunk theo nhu cầu thay vì tải ở entry. Không dùng mock data để che lấp trạng thái rỗng hoặc sai lệch tiến độ.
