# QA — tRPC Learn HTML fallback

| Hạng mục | Bằng chứng | Kết quả |
| --- | --- | --- |
| Tái hiện và khoanh vùng | Error report tại `/learn?from_webdev=1`; `trpcFetch.integration.test.ts` | Runtime sau lỗi cho thấy request hợp lệ vẫn trả JSON 200. Integration tái hiện chính xác sequence gây exception: `learning.dashboard` nhận `text/html` bắt đầu `<!doctype`, sau đó response JSON hợp lệ. |
| Nguyên nhân có bằng chứng | Client nhận SPA document ở endpoint tRPC | Stack trace chỉ xác nhận HTML, không lưu status/path server gốc; do đó không khẳng định một proxy/HMR cụ thể. Nhưng client trước đây chuyển thẳng HTML sang parser tRPC, nên phát sinh `Unexpected token '<'`. |
| Bản sửa | `server/_core/apiFallback.ts`, `client/src/lib/trpcFetch.ts` | API miss trả JSON 404 trước SPA fallback. Với read tRPC GET hợp lệ nhưng gặp HTML transient, client clone body để nhận diện HTML shell và retry **một lần**; POST/mutation không retry để tránh double write. |
| Regression HTTP | `apiFallback.test.ts`, `trpcFetch.integration.test.ts` | Bảo toàn tRPC route đã xử lý; miss tRPC/API trả JSON; Learn page trả HTML. Failure mode dashboard HTML→JSON được recovery; mutation HTML chỉ gọi fetch một lần. |
| Runtime | Curl localhost + screenshot Learn | `/api/trpc/unknown.procedure` trả `application/json` 404; `/learn?from_webdev=1` trả HTML 200 và render flashcard bình thường. |
| Hồi quy | `pnpm check && pnpm test && pnpm build` | TypeScript đạt; 28 test files/57 tests đạt; production build đạt. |

> Với API lệch route, client giờ nhận JSON 404 thay vì HTML. Với transient HTML ở **read query** như Learn dashboard, client retry một lần; nếu retry vẫn HTML, tRPC vẫn surface lỗi thay vì che giấu trạng thái hệ thống. Mutation không bao giờ tự retry.
