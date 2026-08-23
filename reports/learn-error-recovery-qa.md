# QA — Toast lỗi, trace ID & Learn retry

| Hạng mục | Bằng chứng | Kết quả |
| --- | --- | --- |
| Trace ID hỗ trợ | `apiErrorPresentation.test.ts` | Đọc `x-trace-id` từ `TRPCClientError.meta.response.headers` khi server trả response; không hiển thị nguyên văn lỗi backend cho người học. |
| Fallback client | `apiErrorPresentation.test.ts` | Nếu chưa có response server, mỗi error object nhận một client trace ID ổn định để người học có thể gửi kèm khi báo lỗi. |
| Toast toàn cục | `client/src/main.tsx` | Query và mutation lỗi hiển thị toast thân thiện một lần cho mỗi error object; vẫn giữ redirect OAuth với lỗi unauthenticated. |
| Empty state Learn | `LearnErrorState.tsx`, `learnErrorState.test.ts` | Query dashboard lỗi ở user đã xác thực hiển thị `role="alert"`, thông điệp hành động, mã hỗ trợ và nút **Thử lại**; render test xác nhận trace ID, action và `disabled` trong lúc refetch. |
| Accessibility & motion | `learn-error.css` | Nhãn live/alert, focusable native button, trạng thái disabled và reduced-motion cho spinner đều có mặt. |
| Hồi quy | `pnpm check && pnpm test && pnpm build` | TypeScript đạt; 30 test files/61 tests đạt; production build đạt. |

> Chỉ query đọc được refetch từ nút Learn. Mutation không được tự động phát lại, nên một lỗi mạng không thể biến thành thao tác ghi trùng.
