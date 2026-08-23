# TOEIC Quest

TOEIC Quest là nền tảng học TOEIC tiếng Việt từ nền tảng đến mục tiêu 800+, kết hợp từ vựng SRS, luyện kỹ năng, game, kế hoạch 15 phút, mock test 7 Part và bài học có dẫn dắt.

## Chạy dự án

| Lệnh | Mục đích |
| --- | --- |
| `pnpm install` | Cài dependencies. |
| `pnpm dev` | Chạy môi trường phát triển. |
| `pnpm check` | Kiểm tra TypeScript. |
| `pnpm test` | Chạy Vitest. |
| `pnpm drizzle-kit generate` | Sinh migration sau khi thay đổi `drizzle/schema.ts`. |

Môi trường production dùng Manus OAuth, MySQL/TiDB và tRPC. Không tạo `.env` trong repository; biến môi trường đã được nền tảng cung cấp.

## Vai trò và tài khoản

> **Không có username/password cục bộ, tài khoản mẫu hay mật khẩu trong README.** Mọi người dùng đăng nhập bằng Manus OAuth; điều này tránh thêm một bề mặt xác thực và không làm lộ bí mật trong repository.

| Vai trò | Cách nhận quyền | Quyền được cấp | Không được cấp |
| --- | --- | --- | --- |
| `user` — học viên | Tự động sau lần đăng nhập Manus OAuth đầu tiên. | Học bài đã xuất bản, lưu tiến độ của chính mình, SRS, kế hoạch, mock test và hồ sơ. | Xem nháp; thêm/sửa/xóa bài học; gọi API quản trị. |
| `admin` — quản trị nội dung | Chủ sở hữu ứng dụng được gán tự động khi `openId` trùng `OWNER_OPEN_ID`. Một người khác chỉ được thăng quyền có chủ đích qua DB bởi chủ sở hữu. | Vào `/admin/lessons`, tạo/sửa/xóa bài học và xuất bản nội dung. | Quản lý mật khẩu hoặc tạo tài khoản cục bộ (hai chức năng này không tồn tại). |

### Cấp quyền admin an toàn

Người cần quản trị phải đăng nhập OAuth ít nhất một lần để hệ thống tạo bản ghi `users`. Sau đó chủ sở hữu xác định đúng `openId` trong DB và thực hiện thay đổi quyền có kiểm soát trong công cụ Database/SQL nội bộ. Không chấp nhận `openId`, email hay role từ form phía client.

```sql
-- Chỉ chủ sở hữu hệ thống thực hiện sau khi đối chiếu chính xác người dùng.
UPDATE users SET role = 'admin' WHERE openId = '<oauth-open-id-da-xac-minh>';
```

Mọi admin API đều được chặn ở phía server bằng `adminProcedure`; việc ẩn nút Studio trên giao diện chỉ là một lớp trải nghiệm, không phải cơ chế bảo mật.

## Chế độ bài học có dẫn dắt

Thư viện `/lessons` hiển thị **chỉ các bài đã xuất bản**. Mỗi bài có các bước `warmup`, `explain`, `quiz`, `listen` và `recap`. Quiz/listening được chấm ở server để đáp án không bị trả về từ endpoint công khai. Tiến độ luôn được ghi theo `ctx.user.id`, do đó một học viên không thể gửi `userId` để ghi đè tiến độ của người khác.

Quản trị viên tạo nội dung tại `/admin/lessons`. Nội dung bài học được lưu dạng plain text, không render HTML trực tiếp. Điều này giúp giảm rủi ro XSS khi nhiều admin cùng biên soạn.

Lần khởi tạo thư viện sẽ xuất bản sẵn **30 bài học mẫu**. Ngoài 10 bài nền tảng, có 7 bài Part 2 về ý định câu hỏi–đáp lời, 7 bài Part 3 về hội thoại–chi tiết–suy luận và 6 bài Part 7 về email, notice và multiple passages. Mỗi bài có bốn chặng: gợi nhớ, hiểu nhanh, áp dụng và chốt lại. Các bài mẫu có thể được chỉnh sửa, ẩn hoặc xóa từ Studio như mọi bài học khác.

## Mistake Lab

`/mistake-lab` chỉ nhận lỗi thật của chính học viên từ quiz bài học, thi thử và Boss Challenge. Một lỗi được ôn lại theo hai lượt khắc phục: trả lời đúng lần đầu sẽ được hẹn lại sau một ngày; trả lời đúng lần hai chuyển lỗi sang `mastered`. API danh sách không trả `correctIndex`; việc chấm và truy vấn lỗi đều ràng buộc bằng `ctx.user.id` ở server. Vì vậy người học không thể xem đáp án trước hoặc đọc dữ liệu lỗi của người khác.

Thiết kế và cơ sở học tập của cơ chế này được ghi tại [`reports/mistake-lab-design.md`](reports/mistake-lab-design.md).

## Boss Challenge 10 phút mỗi tuần

`/boss-challenge` tạo một đề luyện gốc theo ISO week gồm 10 câu: 4 Part 2, 3 Part 3 và 3 Part 7. Timer chỉ bắt đầu khi học viên chủ động mở thử thách. Backend tự chọn đề theo tuần, nhận đúng 10 lựa chọn, kiểm tra thời lượng tối đa 600 giây và chấm đáp án phía server; do đó answer key không có trong dashboard API. Mỗi user có đúng một lượt được chấm mỗi tuần, lưu trong `weekly_boss_attempts` với unique `(userId, weekKey)`. Câu sai đi vào Mistake Lab và lượt hoàn tất tạo XP/study session một lần.

Boss tuần được tính khi người học mở trang, không dùng `setInterval` phía server, cron hoặc tác vụ nền. Đây là lựa chọn phù hợp với autoscale và giữ thử thách nhất quán dù instance ngủ/thức.

## Business Context Lab — Part 3 & Part 7

`/business-practice` có ba bộ đề gốc, mỗi bộ 12 câu: 6 Part 3 và 6 Part 7. Nội dung mô phỏng các tài liệu và cuộc trao đổi công việc như khởi động dự án–nhà cung cấp, quản lý tài khoản–dịch vụ khách hàng, nhân sự–vận hành. Part 3 có audio tổng hợp Web Speech tạm thời; Part 7 dùng email, memo, notice và timetable có nhiều chi tiết để đối chiếu.

Danh mục và đề chỉ truy cập sau Manus OAuth. API đọc không trả `answer` hoặc `explanation`; `submitBusinessPractice` kiểm tra đủ câu, chặn trùng/ID lạ, chấm tại server và ghi kết quả theo `ctx.user.id`. Câu sai được chuyển vào Mistake Lab với nguồn thi thử, trong khi kết quả Listening/Reading dùng lại analytics mock test hiện có.

Nghiên cứu format và ràng buộc thiết kế được lưu trong [`reports/part37-business-design.md`](reports/part37-business-design.md).

## Dashboard lịch sử & tiến bộ

`/progress-dashboard` là dashboard chi tiết theo từng tài khoản OAuth. Trang hiển thị KPI về điểm đánh giá, lần làm bài, thời gian học và streak; biểu đồ độ chính xác theo lần làm đề; nhịp học và XP trong 14 ngày; cùng bảng lịch sử cho thi thử 7 Part, Boss tuần, bộ đề doanh nghiệp và từng phiên học.

Toàn bộ dữ liệu được lấy server-side từ các bản ghi đã lưu theo `ctx.user.id`. Không có dữ liệu mẫu hoặc dữ liệu học của tài khoản khác trong dashboard. Endpoint protected không nhận `userId` từ client; khi người học chưa có lịch sử, UI hiển thị empty state có hướng dẫn thay vì biểu đồ giả. Bằng chứng QA nằm tại [`reports/progress-dashboard-qa.md`](reports/progress-dashboard-qa.md).

## Trạng thái tải OAuth và kiểm thử callback

Trang chủ hiển thị **skeleton có aria-live** trong khi nhận diện OAuth hoặc `learning.dashboard` đang tải. Khi xác thực đã ổn định, người học thấy dữ liệu thật; khi là guest, UI chuyển thẳng sang lời mời đăng nhập, không nhấp nháy số liệu mặc định.

Chạy `pnpm test:e2e` để kiểm thử luồng OAuth tại hai boundary không cần tài khoản/mật khẩu thật: khởi tạo ở client tạo cookie nonce, `state` và `redirectUri` theo `window.location.origin`; callback Express kiểm tra thiếu tham số (400), nonce/cookie không khớp (403), hoặc tạo session cookie rồi redirect `/` khi hợp lệ. Provider ngoài chỉ được mock trong test; cookie, HTTP route, redirect và state encoding đều chạy bằng implementation thực.

## Quy tắc an toàn trước khi sửa hệ thống

Mọi thay đổi dữ liệu phải đi theo quy trình schema-first: sửa `drizzle/schema.ts`, sinh SQL, đọc SQL, rồi mới áp dụng migration. Mọi endpoint thay đổi dữ liệu phải dùng Zod để kiểm tra input; endpoint quản trị phải dùng `adminProcedure`; endpoint tiến độ học phải lấy người dùng từ OAuth context.

Tài liệu thiết kế chi tiết nằm ở [`reports/admin-lesson-design.md`](reports/admin-lesson-design.md); audit chất lượng và roadmap sản phẩm nằm trong thư mục `reports/`.
