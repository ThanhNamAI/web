# Mistake Lab — QA Evidence

## Luồng đã xác minh

| Hạng mục | Bằng chứng | Kết quả |
| --- | --- | --- |
| Tạo lỗi thực | Phiên OAuth owner: chọn sai một quiz của bài “Nói về nhịp làm việc hằng ngày”. | API `lessons.checkAnswer` trả lời sai và ghi một item user-scoped. |
| Workbench | Mở `/mistake-lab` trong cùng phiên OAuth. | Hiển thị 1 lỗi, kỹ năng, nguồn bài học, bốn lựa chọn; không lộ đáp án trước khi chấm. |
| Phản hồi | Chọn đúng rồi chấm. | Hiển thị lời giải, còn 1 lần khắc phục và hẹn lỗi sau 1 ngày. |
| Nhịp ôn | Làm mới Lab sau lượt đúng đầu tiên. | Workbench trống cho lượt hôm nay nhưng vẫn cho biết còn 1 lỗi đang mở; tránh xuất hiện lỗi trước hạn. |
| Cách ly dữ liệu | Query DB luôn có `userId`; `getOwnedActiveMistake` dùng như phòng thủ thứ hai. | 24 Vitest đạt, gồm test owner/non-owner và item không còn active. |
| Nội dung mẫu | Truy vấn thư viện sau seed. | Có 10 bài published, mỗi bài 4 chặng; test source xác nhận slug duy nhất và quiz/listen có lựa chọn. |
| Mobile workbench | Screenshot 375×812 với item thuộc owner được tạo qua helper ứng dụng. | Workbench có hàng đợi thật hiển thị một cột, lựa chọn dễ chạm và action xếp dọc; dark mode không có bề mặt sáng sai. |
| Cross-user answer | `checkMistakeAnswerWithStore` chạy với repository giả trả item của user A cho user B. | Service từ chối trước khi gọi `saveReview`; query production vẫn lọc `id + userId` như lớp phòng thủ đầu tiên. |
| OAuth API boundary | tRPC caller với hai context OAuth khác nhau. | Router truyền đúng `ctx.user.id` vào dashboard/checkAnswer; tình huống item không thuộc user bị từ chối và không có cập nhật review. |

## Kiểm tra giao diện

Workbench đầy đủ được xác minh trong My Browser ở desktop, trong light/dark có typography, lựa chọn, phản hồi và empty state. Screenshot automation ở 375×812 xác nhận workbench authenticated có hàng đợi lỗi thật chuyển sang một cột, giữ các vùng chạm dễ thao tác và không gây hồi quy dark mode. CSS workbench có breakpoint 800px chuyển `grid` sang một cột và breakpoint 560px xếp nút hành động theo chiều dọc.

> Cần chạy một lượt smoke test 375px/Android hoặc iPhone trong release checklist khi có thiết bị thật. Không có lỗi runtime mới trong log sau luồng OAuth này; 15 Vitest files với 30 tests đều đạt.
