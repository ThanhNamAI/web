# QA & Improvement Audit — TOEIC Quest

**Phạm vi rà soát.** Bản audit này tách rõ những gì đã được xác minh trong môi trường phát triển, các giới hạn cần kiểm thử thêm bằng tài khoản OAuth thật và các nợ kỹ thuật có thể gây chi phí bảo trì về sau.

## Kết quả đã xác minh

| Hạng mục | Cách kiểm tra | Kết quả |
| --- | --- | --- |
| Kiểu TypeScript | `pnpm check` | Đạt. |
| Logic lõi | `pnpm test` | Đạt: 8 test files, 15 tests. |
| Log runtime mới nhất | Quét `devserver.log` và `browserConsole.log` | Không phát hiện error/uncaught/failed mới. |
| Giao diện | Rà soát các route chính ở light/dark, desktop và 375×812 | Không thấy hồi quy dark-mode bề mặt sáng ở các trạng thái public/guest đã kiểm tra. |
| ZIP mã nguồn | Kiểm tra nội dung archive | 218 tệp mã nguồn/cấu hình, không chứa `.env`, khóa hay token. |

## Không có lỗi production đã tái hiện, nhưng cần xử lý theo ưu tiên

| Ưu tiên | Phát hiện hoặc giới hạn | Phạm vi ảnh hưởng | Hành động đề xuất |
| --- | --- | --- | --- |
| P0 | Chưa có E2E test cho luồng UI (chọn đáp án, SRS, audio rate, timer mock test, đổi theme). 15 test hiện tại tập trung vào logic server. | Một lỗi thao tác giao diện có thể lọt qua dù TypeScript và unit test đều xanh. | Bổ sung Playwright/Vitest browser tests cho guest flow và OAuth-mocked flow; chạy trong CI trước mỗi release. |
| P0 | Trạng thái đã đăng nhập thực tế chưa được kiểm chứng bằng OAuth session trong đợt audit này. | Lưu SRS, streak, lịch sử mock và biểu đồ tiến bộ chỉ được xác nhận qua mã/guest gates, chưa phải dữ liệu tài khoản thật. | Dùng một tài khoản OAuth thử nghiệm để kiểm tra ghi–đọc DB, phân quyền theo user và các state biểu đồ rỗng/có dữ liệu. |
| P1 | Dark mode vẫn có ba lớp CSS kế thừa (`dark-mode.css`, `dark-mode-fixes.css`, `dark-mode-unified.css`). Lớp unified đã khắc phục hiển thị, nhưng cấu trúc này tăng nguy cơ xung đột selector khi thêm trang. | Khả năng hồi quy giao diện trong các lần phát triển tiếp theo. | Gom dần về một bảng token semantic và xoá rule trùng lặp sau mỗi route được chuyển đổi; thêm visual regression snapshot cho light/dark. |
| P1 | Audio tạm dùng Web Speech/fallback tổng hợp; giọng, tốc độ và hỗ trợ thay đổi theo trình duyệt/thiết bị. Chưa có file ghi âm người thật. | Chất lượng luyện nghe và phát âm chưa đồng nhất giữa thiết bị. | Phát hành dần audio người thật theo chủ đề ưu tiên, lưu URL trong metadata sẵn có; hiển thị fallback rõ ràng khi trình duyệt không hỗ trợ voice. |
| P1 | Màn thi thử có trạng thái khởi tạo ngắn trên mobile trước guest gate/nội dung. Không phải lỗi logic đã tái hiện, nhưng có thể tạo cảm giác chờ. | Ấn tượng ban đầu trên kết nối chậm. | Dùng skeleton có cấu trúc cho Part cards và giải thích đang tải, thay vì chỉ nhãn chờ. |
| P2 | `pnpm` cảnh báo các thiết lập trong `package.json` không còn được đọc theo phiên bản CLI hiện hành. | Rủi ro build không áp dụng patch/override theo kỳ vọng. | Chuyển `patchedDependencies`/`overrides` sang vị trí cấu hình được PNPM hiện hành hỗ trợ, rồi xác minh lại lockfile và build CI. |
| P2 | Chưa có kiểm thử accessibility tự động toàn tuyến. | Có thể còn lỗi focus, thứ tự tab, label/select hoặc contrast ở state ít gặp. | Chạy axe-core trên các route chính và kiểm tra bàn phím cho flashcard, game, quiz, mock navigation và modal. |

## Lộ trình sản phẩm đề xuất

Khi hoàn thành hai hạng mục P0 về độ tin cậy, ưu tiên triển khai ba tính năng có tác động học tập và gắn kết cao nhất: **Nhiệm vụ hằng ngày theo điểm yếu**, **Career Quest theo bối cảnh công sở** và **Mistake Lab** giải thích–ôn lại lỗi sai. Chúng tái sử dụng SRS, quiz, analytics và nội dung hiện hữu, nên có tỷ lệ giá trị/rủi ro cao hơn việc thêm cơ chế mạng xã hội hoặc AI đắt tiền ngay lập tức.

Tiếp theo, thêm **Shadowing Sprint 60 giây** và **Boss cuối tuần 10 phút** để tạo nhịp nghe–nói và tự kiểm tra; chỉ sau khi có telemetry, mới thử nghiệm nhóm đồng hành tùy chọn và phản hồi viết email. Chi tiết thiết kế, đo lường và cơ sở nghiên cứu nằm trong `reports/engagement-feature-research.md`.

> Không có lỗi thấy được trong audit không đồng nghĩa mọi trạng thái đều đã được chứng minh không lỗi. Các luồng có dữ liệu OAuth thật được nêu rõ là phạm vi cần kiểm thử tiếp theo, thay vì được đánh dấu là đã qua.
