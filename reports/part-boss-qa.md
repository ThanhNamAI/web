# Part 2–3–7 & Boss Challenge — QA Evidence

| Hạng mục | Cách xác minh | Kết quả |
| --- | --- | --- |
| Nội dung bài học | `partLessons.test.ts` và `starterLessons.test.ts` | Có 30 bài published: 10 bài nền tảng, 7 Part 2, 7 Part 3, 6 Part 7; mỗi bài đúng bốn chặng và có bài áp dụng bốn lựa chọn kèm lời giải. |
| Seed database | SQL count sau gọi thư viện | `lessons` có 30 bản ghi published. Endpoint public `lessons.list` trả đúng 30 slug. |
| Đề Boss | `bossChallengeLogic.test.ts` | Đề mỗi tuần xác định theo ISO week, có 4 Part 2, 3 Part 3, 3 Part 7 và không trùng trong một lượt. |
| Chấm và phân quyền | `bossChallenge.router.test.ts` | tRPC lấy `userId` từ OAuth context cho dashboard/nộp bài; chỉ chấp nhận đúng 10 lựa chọn và giới hạn thời lượng 1–600 giây. |
| Hồi quy | `pnpm check && pnpm test` | TypeScript đạt; 18 test files, 35 tests đạt. |
| Giao diện | Screenshot desktop dark và rà soát CSS breakpoint | Boss briefing, điều hướng Boss tuần và Mistake Lab hiển thị đúng theme; CSS chuyển arena sang một cột dưới 900px và tối ưu các nút/nội dung dưới 560px. |

Boss dashboard chỉ trả prompt, choices và audio text; answer key nằm trong server-side question bank. Bảng `weekly_boss_attempts` có unique `(userId, weekKey)`, trong khi lỗi từ Boss được ghi vào Mistake Lab với `source='boss'` và user scope ở DB/service/router.

> My Browser không phản hồi sau khi thao tác kiểm tra trước đó, nên xác nhận browser live cuối được thay bằng tRPC API direct, unit/router tests và screenshot webdev. Đây là giới hạn công cụ kiểm thử, không phải lỗi ứng dụng đã tái hiện.
