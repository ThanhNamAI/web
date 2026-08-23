# QA — Bộ đề doanh nghiệp Part 3 & Part 7

| Hạng mục | Bằng chứng | Kết quả |
| --- | --- | --- |
| Nội dung gốc | `businessPracticeLogic.test.ts` | Có 3 bộ đề; mỗi bộ 12 câu, cân bằng 6 Part 3 và 6 Part 7. Tất cả câu Part 3 có transcript, Part 7 có văn bản, ID không trùng và đáp án hợp lệ. |
| Bảo vệ đáp án | `businessPractice.router.test.ts` | Endpoint đọc đề loại bỏ `answer` và `explanation`. Server chỉ nhận nộp câu trả lời đầy đủ, chấm tại server và không dựa vào điểm do client gửi. |
| Phân quyền và dữ liệu cá nhân | Router test | Lưu kết quả và Mistake Lab sử dụng `ctx.user.id` từ OAuth context; client không thể truyền `userId`. |
| Tiến độ học | Router/service | Kết quả được lưu vào mock analytics hiện có theo Part 3/7; câu sai có `source='mock'` và `sourceRef` riêng theo bộ đề. |
| Hồi quy | `pnpm check && pnpm test` | TypeScript đạt; 20 test files và 39 tests đạt. |
| Giao diện | Screenshot `/business-practice` | Catalog desktop và 375×812 hiển thị đúng hierarchy, card, CTA và responsive; không có runtime/browser-console error mới. |

Các bộ đề là nội dung gốc, không sao chép câu hỏi ETS. Chúng dùng bối cảnh workplace và dạng Part 3/Part 7 phù hợp với mô tả format chính thức trong tài liệu thiết kế.[1] [2]

## Tham khảo

[1]: https://www.ets.org/toeic/about/listening-reading.html "ETS — About the TOEIC Listening and Reading Test"
[2]: https://www.iibc-global.org/english/toeic/test/lr/about/format.html "IIBC — Test Format and Content"
