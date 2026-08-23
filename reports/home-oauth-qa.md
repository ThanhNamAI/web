# QA — Skeleton trang chủ & OAuth callback e2e

| Hạng mục | Bằng chứng | Kết quả |
| --- | --- | --- |
| Skeleton xác thực | `homeLoading.test.ts` | Skeleton hiển thị khi OAuth identity đang phân giải hoặc người học đã xác thực nhưng dashboard còn tải; guest/đã tải xong không bị chặn. |
| Khả năng tiếp cận | `HomeLoadingSkeleton` | Có `aria-busy`, `aria-live` và nhãn tiếng Việt; animation tự tắt khi `prefers-reduced-motion`. |
| Responsive | Screenshot `/` 1280×720 và 375×812 | Giao diện dữ liệu thật vẫn giữ hierarchy desktop/mobile; skeleton dùng cùng grid và breakpoint nên không gây layout shift cấu trúc. |
| OAuth e2e | `oauth.login-init.e2e.test.ts`, `oauth.callback.e2e.test.ts`, `pnpm test:e2e` | Client initiation kiểm tra contract URL/state và side effect thật của `startLogin` với browser globals: nonce cookie, `redirectUri` và điều hướng OAuth portal. HTTP callback kiểm tra thiếu `code/state` trả 400, nonce lệch trả 403, nonce đúng tạo session và redirect `/`. |
| Hồi quy | `pnpm check && pnpm test && pnpm test:e2e && pnpm build` | TypeScript đạt; 26 test files/52 tests đạt, gồm 5 e2e OAuth ở client initiation và Express callback; production build đạt. |

> Không dùng đăng nhập provider thật trong CI/e2e, vì điều đó cần tài khoản và browser session riêng. Test vẫn bao phủ hai boundary quan trọng: khởi tạo browser-bound nonce/state ở client và callback HTTP với cookie nonce, provider exchange đã mock, session cookie và redirect cố định.
