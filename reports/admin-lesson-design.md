# Thiết kế quản trị bài học — TOEIC Quest

## Phân tích vấn đề & nguyên nhân

TOEIC Quest hiện có một nền tảng học vững: SRS, thư viện 1.324 mục, luyện kỹ năng, phòng học, kế hoạch 15 phút, game và mock test. Tuy nhiên, bài luyện ngữ pháp/nghe/đọc hiện được nạp từ dữ liệu TypeScript tĩnh. Vì vậy, chủ sở hữu không thể thêm hoặc xuất bản một bài giảng mới qua giao diện, và nội dung chưa có vòng đời **nháp → xuất bản** độc lập.

Hệ thống đã có OAuth và trường `users.role` (`user`/`admin`); đồng thời `adminProcedure` đã chặn ở phía máy chủ. Điều này là nền tảng phù hợp để thêm quản trị nội dung mà không sinh ra tên đăng nhập, mật khẩu hay luồng xác thực song song. Một kiểm tra UI đơn thuần là không đủ, bởi quyền phải được xác thực trên **mọi yêu cầu** ở phía máy chủ theo nguyên tắc deny-by-default và least privilege của OWASP.[1]

## Giải pháp đề xuất & lý do

Tính năng được xây theo ba phần tách biệt, tránh can thiệp vào SRS và mock test hiện có.

| Thành phần | Thiết kế | Lý do an toàn và sản phẩm |
| --- | --- | --- |
| `lessons` | Bài học có `slug`, kỹ năng, cấp độ, mục tiêu, thời lượng, trạng thái `draft/published`, tác giả OAuth. | Có vòng đời xuất bản rõ ràng, slug là duy nhất để route ổn định. |
| `lesson_steps` | Mỗi bài gồm các bước có thứ tự: `warmup`, `explain`, `quiz`, `listen`, `recap`. Dữ liệu quiz lưu JSON có kiểm tra Zod. | Tạo bài học đa chặng, tránh bài giảng dài/chán; có thể thêm loại bước mới mà không đổi bảng chính. |
| `lesson_progress` | Tiến độ theo `userId + lessonId`: bước hiện tại, điểm, trạng thái, thời gian hoàn thành. | Bảo toàn dữ liệu người học, hỗ trợ resume và analytics sau này. |
| `admin` router | CRUD nội dung, chỉ qua `adminProcedure`; input bị giới hạn độ dài, option JSON được parse/validate trước khi lưu. | Client không thể tự nâng quyền hoặc bypass bằng gọi API trực tiếp. |
| Learner routes | `/lessons` cho thư viện học; `/lessons/:slug` cho player; `/admin/lessons` cho quản trị. | Tách điều hướng công khai, học tập và quản trị; không làm đổi route SRS/mock hiện có. |

Khóa ngoại, unique index và giá trị `NOT NULL` được khai báo trong Drizzle để giữ toàn vẹn dữ liệu thay vì chỉ tin vào client.[2]

## Mô hình quyền OAuth

| Vai trò | Cách có vai trò | Có thể làm | Không thể làm |
| --- | --- | --- | --- |
| Learner (`user`) | Đăng nhập Manus OAuth lần đầu. | Học bài đã xuất bản, lưu tiến độ của chính mình. | Xem nháp, tạo/sửa/xóa nội dung, xem tiến độ người khác. |
| Content admin (`admin`) | Chủ sở hữu OAuth được tự gán admin qua `OWNER_OPEN_ID`; tài khoản khác chỉ được thăng quyền có chủ đích trong DB. | Tạo, sửa, xuất bản, gỡ xuất bản, xóa bài học và các bước. | Thay đổi OAuth callback, tự quản lý thông tin xác thực, xem mật khẩu (không tồn tại). |

Không có tài khoản cục bộ, mật khẩu mẫu, API key trong README hoặc cơ chế tự đăng ký admin. Đây là chủ đích an toàn.

## Bảo mật & tác động

Mọi mutating admin endpoint phải dùng `adminProcedure`; mọi learner mutation phải lấy `userId` từ `ctx.user`, không nhận `userId` từ client. Nội dung được render như plain text, không dùng `dangerouslySetInnerHTML`, giảm rủi ro XSS. Xóa bài học chỉ xảy ra sau khi xác nhận trong giao diện và nên cascade có chủ đích sang steps/progress.

Tác động bị giới hạn trong các bảng, router và route mới. SRS, từ vựng, game, daily plan và mock test tiếp tục dùng dữ liệu/logic hiện hữu. Trước phát hành cần có test cho 403 khi learner gọi admin API, 401 khi chưa đăng nhập, CRUD của admin, progress theo đúng `userId`, và kiểm tra mobile/light/dark.

## Cải tiến ưu tiên sau phiên bản đầu

Sau khi admin lesson player hoạt động đáng tin cậy, ưu tiên thêm Quest theo điểm yếu, Career Quest, Mistake Lab, Shadowing Sprint và Boss cuối tuần theo roadmap nghiên cứu đã có. Những cơ chế này biến nội dung do admin xuất bản thành nhịp học cá nhân hóa, thay vì chỉ tăng số lượng trang.

## References

[1]: https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html "OWASP Authorization Cheat Sheet"
[2]: https://orm.drizzle.team/docs/indexes-constraints "Drizzle ORM — Indexes & Constraints"
