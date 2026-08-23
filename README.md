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

Lần khởi tạo thư viện sẽ xuất bản sẵn **10 bài học mẫu** để kiểm tra trải nghiệm, bao phủ ngữ pháp công sở, nghe Part 2, số/ngày/giờ, đọc email–notice, shadowing, tự sửa báo cáo và suy luận Part 7. Các bài mẫu có thể được chỉnh sửa, ẩn hoặc xóa từ Studio như mọi bài học khác.

## Mistake Lab

`/mistake-lab` chỉ nhận lỗi thật của chính học viên từ quiz bài học và thi thử. Một lỗi được ôn lại theo hai lượt khắc phục: trả lời đúng lần đầu sẽ được hẹn lại sau một ngày; trả lời đúng lần hai chuyển lỗi sang `mastered`. API danh sách không trả `correctIndex`; việc chấm và truy vấn lỗi đều ràng buộc bằng `ctx.user.id` ở server. Vì vậy người học không thể xem đáp án trước hoặc đọc dữ liệu lỗi của người khác.

Thiết kế và cơ sở học tập của cơ chế này được ghi tại [`reports/mistake-lab-design.md`](reports/mistake-lab-design.md).

## Quy tắc an toàn trước khi sửa hệ thống

Mọi thay đổi dữ liệu phải đi theo quy trình schema-first: sửa `drizzle/schema.ts`, sinh SQL, đọc SQL, rồi mới áp dụng migration. Mọi endpoint thay đổi dữ liệu phải dùng Zod để kiểm tra input; endpoint quản trị phải dùng `adminProcedure`; endpoint tiến độ học phải lấy người dùng từ OAuth context.

Tài liệu thiết kế chi tiết nằm ở [`reports/admin-lesson-design.md`](reports/admin-lesson-design.md); audit chất lượng và roadmap sản phẩm nằm trong thư mục `reports/`.
