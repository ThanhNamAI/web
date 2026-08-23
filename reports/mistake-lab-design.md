# Mistake Lab — Thiết kế học bằng lỗi sai

## Mục tiêu

Mistake Lab không tạo câu hỏi giả. Hệ thống chỉ ghi lại đáp án người học đã chọn sai ở **bài học đa chặng** và **thi thử**, sau đó đưa chúng quay lại thành lượt ôn ngắn. Mỗi lỗi cần được trả lời đúng hai lần ở các lượt khác nhau mới chuyển sang trạng thái `mastered`. Cách làm này kết hợp phản hồi sửa lỗi cụ thể, cơ hội tự sửa và ôn lại bằng truy xuất giãn cách.[1] [2]

| Thành phần | Quyết định triển khai | Lý do |
| --- | --- | --- |
| Nguồn dữ liệu | Lesson quiz/listen và câu thi thử bị chọn sai | Chỉ ôn lỗi thật, tránh tạo backlog không liên quan. |
| Phản hồi | Hiển thị đúng/sai cùng lời giải sau lần trả lời | Phản hồi sửa lỗi giúp người học chú ý đến cấu trúc sai và mô hình đúng.[2] |
| Nhịp lặp | Đúng lần đầu: hẹn lại sau 1 ngày; đúng lần hai: `mastered`; sai: quay lại sau 15 phút | Tạo lượt truy xuất lặp lại, có giãn cách nhưng không biến lỗi vừa xảy ra thành áp lực. |
| Giới hạn bảo mật | Đáp án đúng lưu server-side; API dashboard loại `correctIndex`; check luôn ràng buộc `userId` OAuth | Không lộ đáp án qua endpoint đọc và không thể đọc/chấm lỗi của người khác. |
| Giọng điệu | “Dữ liệu tốt”, “điểm tựa”, “tự sửa” | Khuyến khích nỗ lực sửa lỗi thay vì gắn nhãn thất bại. |

## Luồng người học

Sau khi một lựa chọn sai được ghi nhận, lỗi xuất hiện trong Lab với kỹ năng, nguồn và lựa chọn gốc. Người học suy nghĩ lại trước khi chọn. Phản hồi hiển thị lời giải; khi đúng, lỗi được hẹn gặp lại ngày hôm sau. Khi đúng thêm một lần, lỗi được đưa ra khỏi hàng chờ. Nếu vẫn sai, bộ đếm khắc phục được đặt lại và câu hỏi quay lại sau mười lăm phút.

> Đây là cơ chế hỗ trợ luyện tập, không phải thước đo chẩn đoán năng lực hay mô hình dự báo điểm TOEIC.

## Nội dung mẫu

Mười bài học mẫu trải từ Foundation đến 800+ với các chủ đề: nhịp làm việc, kiểm kho, email lịch sự, Part 2, số/ngày/giờ, đọc email và notice, shadowing cuộc gọi, tự sửa báo cáo, cùng suy luận Part 7. Mỗi bài giữ nhịp bốn chặng: khởi động, giải thích, áp dụng và tổng kết.

## References

[1] [Carpenter, Pan & Butler (2022), *The science of effective learning with spacing and retrieval practice*](https://www.nature.com/articles/s44159-022-00089-1)

[2] [Liao & Zhang (2022), *Corrective feedback, individual differences in working memory, and L2 development*](https://pmc.ncbi.nlm.nih.gov/articles/PMC9800285/)
