# Hướng dẫn cấp quyền ghi để đẩy TOEIC Quest lên GitHub

## Tình trạng hiện tại

Repository đích là **`ThanhNamAI/web`**. Commit cục bộ đã được tạo là **`460b8af`** với thông điệp `docs: add engagement feature research`, nhưng máy chủ GitHub trả về lỗi **403** khi đẩy mã nguồn. Điều này cho thấy kết nối GitHub hiện tại chưa được cấp quyền **ghi nội dung repository**.

> Bạn không cần tạo repository mới và không cần gửi mật khẩu hay token vào khung chat. Chỉ cần cấp lại quyền cho kết nối GitHub trong giao diện Manus/GitHub, sau đó nhắn lại “đã cấp quyền”.

## Cách 1 — Khuyến nghị: kết nối lại GitHub trong Manus

| Bước | Thao tác |
| --- | --- |
| 1 | Mở **Settings** của Manus, đi đến **Integrations** hoặc **Connectors**. |
| 2 | Tìm kết nối **GitHub** đang dùng và chọn **Reconnect**, **Manage**, hoặc **Edit permissions**. |
| 3 | Đăng nhập đúng tài khoản **ThanhNamAI** khi GitHub hỏi xác thực. |
| 4 | Nếu GitHub hiển thị phần chọn repository, chọn **Only select repositories** rồi tích **`ThanhNamAI/web`**; hoặc chọn **All repositories** nếu bạn thực sự muốn cấp cho tất cả repository. |
| 5 | Xác nhận quyền đọc/ghi nội dung repository. Với GitHub App, quyền cần có là **Contents: Read and write**. Nếu có mục metadata thì để **Read-only** là đủ. |
| 6 | Nhấn **Install**, **Authorize**, **Save**, hoặc nút xác nhận tương đương để hoàn tất. |
| 7 | Quay lại cuộc trò chuyện này và trả lời chính xác: **đã cấp quyền**. |

Sau đó tôi sẽ kiểm tra lại quyền, dùng commit `460b8af` đã có sẵn và đẩy lên nhánh `main` — không phát sinh commit trùng lặp.

## Cách 2 — Kiểm tra quyền cài đặt GitHub App trên GitHub

Nếu bạn đã kết nối GitHub nhưng vẫn gặp lỗi, hãy rà soát quyền cài đặt của ứng dụng GitHub.

| Bước | Thao tác |
| --- | --- |
| 1 | Truy cập [GitHub Settings → Applications](https://github.com/settings/installations) khi đang đăng nhập tài khoản **ThanhNamAI**. |
| 2 | Tìm ứng dụng/kết nối GitHub đang liên kết với Manus, sau đó chọn **Configure**. |
| 3 | Trong **Repository access**, chọn **Only select repositories** và thêm **`web`**, hoặc chọn **All repositories** nếu phù hợp. |
| 4 | Rà soát phần quyền. Ứng dụng phải có quyền ghi nội dung (**Contents: Read and write**). |
| 5 | Lưu thay đổi, quay lại đây và nhắn **đã cấp quyền**. |

## Kiểm tra nhanh sau khi hoàn tất

Repository sẽ có nhánh `main` với toàn bộ lịch sử mã nguồn TOEIC Quest. Bạn có thể mở:

<https://github.com/ThanhNamAI/web>

để xác nhận các thư mục như `client/`, `server/`, `shared/`, `drizzle/`, `reports/` và tệp cấu hình dự án xuất hiện. Các tệp `.env` không được đẩy lên vì đã nằm trong `.gitignore`.

## Nếu không thấy nút Reconnect hoặc Configure

Hãy chụp ảnh phần **Settings → Integrations → GitHub** (không cần và không được chụp token) và gửi lại. Tôi sẽ chỉ đúng vị trí cần thao tác theo giao diện bạn nhìn thấy.
