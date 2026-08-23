# Part 2–3–7 Content & Weekly Boss Challenge Design

## Cơ sở thiết kế

TOEIC Listening & Reading gồm hai phần 100 câu, với Listening khoảng 45 phút và Reading 75 phút.[1] Part 2 là dạng Question–Response gồm 25 câu; Part 3 gồm 39 câu hội thoại, mỗi hội thoại có ba câu hỏi; Part 7 gồm 29 câu đoạn đơn và 25 câu đoạn nhiều văn bản.[2] Vì vậy, 20 bài mới tập trung vào **ý định câu hỏi/đáp lời** cho Part 2, **đối thoại–chi tiết–suy luận** cho Part 3, và **mục đích–scan–liên kết thông tin** cho Part 7.

| Cụm nội dung | Số bài | Cấu trúc mỗi bài | Mục tiêu chuyển hóa thành phản xạ |
| --- | ---: | --- | --- |
| Part 2 | 7 | Khởi động, chiến lược nghe ý định, lượt nghe–chọn đáp án, recap | Phân loại Wh-/Yes–No/request và tránh bẫy từ khóa. |
| Part 3 | 7 | Dự đoán vai trò, nghe hội thoại, một nhiệm vụ chi tiết/suy luận, recap | Theo dõi người nói, hành động, thời điểm và chi tiết biểu đồ/ngữ cảnh. |
| Part 7 | 6 | Khung đọc, chiến lược scan, quiz email/notice/multiple passage, recap | Tìm mục đích, chi tiết và hành động tiếp theo có bằng chứng. |

## Boss Challenge 10 phút

Boss được xác định **theo tuần tại thời điểm người học mở trang**, không dùng cron hoặc timer nền. Cách này phù hợp autoscale: mỗi request tính ISO week hiện tại, chọn một set 10 câu gốc theo vòng quay xác định và chỉ chấm ở server.

| Thành phần | Quy tắc |
| --- | --- |
| Nhịp tuần | `weekKey` ISO UTC; một lượt chấm chính thức mỗi user/tuần. |
| Đề | 10 câu nguyên gốc: 4 Part 2, 3 Part 3, 3 Part 7; giữ answer key ở server. |
| Giới hạn | UI đếm 10 phút; server chỉ nhận thời lượng từ 1 đến 600 giây. |
| Tiến độ | Lưu `weekly_boss_attempts` user-scoped, unique `(userId, weekKey)`; hiển thị kết quả đã chốt khi mở lại. |
| Kết nối học | Sai câu nào được đưa qua Mistake Lab bằng cùng cấu trúc source `boss`; lượt hoàn tất tạo study session và XP đúng một lần. |

## Bảo mật và phạm vi

`boss.dashboard` và `boss.submit` đều là protected procedures. Backend tự chọn đề dựa vào tuần hiện tại, tự chấm đáp án, loại input trùng ID, kiểm tra giới hạn thời gian, và lookup attempt theo `ctx.user.id`. Không tạo tài khoản cục bộ, không dùng task nền, không đưa answer key vào endpoint đọc. Các câu là nội dung luyện tập gốc, không phải đề ETS.

## References

[1]: https://www.ets.org/toeic/about/listening-reading.html "ETS — About the TOEIC Listening and Reading Test"
[2]: https://www.iibc-global.org/english/toeic/test/lr/about/format.html "IIBC — TOEIC Listening & Reading Test Format and Content"
