export type StarterLesson = {
  slug: string;
  title: string;
  summary: string;
  skill: "grammar" | "listening" | "reading" | "speaking" | "mixed";
  level: string;
  estimatedMinutes: number;
  status: "published";
  steps: Array<{
    stepType: "warmup" | "explain" | "quiz" | "listen" | "recap";
    title: string;
    body: string;
    prompt?: string;
    options?: string[];
    answerIndex?: number;
    explanation?: string;
    audioText?: string;
  }>;
};

const recap = (body: string) => ({ stepType: "recap" as const, title: "Chốt một điều để dùng ngay", body, prompt: "Hãy tự nói lại quy tắc bằng một câu thật ngắn trước khi rời bài." });

export const starterLessons: StarterLesson[] = [
  {
    slug: "office-routine-present-simple", title: "Nói về nhịp làm việc hằng ngày", summary: "Dùng Present Simple để mô tả công việc, lịch họp và thói quen văn phòng một cách tự nhiên.", skill: "grammar", level: "Foundation", estimatedMinutes: 12, status: "published",
    steps: [
      { stepType: "warmup", title: "Một ngày ở văn phòng", body: "Bạn làm gì vào đầu ngày? Hãy nghĩ bằng tiếng Anh: check email, join a meeting, review a report.", prompt: "Hoàn thành: I usually ___ my email before 9 a.m." },
      { stepType: "explain", title: "Khi nào dùng Present Simple?", body: "Dùng Present Simple cho thói quen, lịch cố định và sự thật thường xuyên. Với he / she / it, động từ thường thêm -s hoặc -es: The manager reviews the report.", prompt: "Dấu hiệu hay gặp: usually, every day, on Mondays, often." },
      { stepType: "quiz", title: "Chọn câu đúng", body: "Chọn câu mô tả đúng một thói quen công việc.", prompt: "The finance team ___ the budget every Friday.", options: ["review", "reviews", "reviewing", "to review"], answerIndex: 1, explanation: "The finance team được xem là một nhóm số ít trong ngữ cảnh này, nên dùng reviews." },
      recap("Present Simple giúp bạn kể nhịp công việc rõ ràng. Hãy ưu tiên động từ hành động quen thuộc: check, review, join, send.")
    ]
  },
  {
    slug: "warehouse-there-is-there-are", title: "Mô tả kho hàng không bị lúng túng", summary: "Phân biệt there is / there are trong kiểm kê, chỉ dẫn vị trí và mô tả thiết bị.", skill: "grammar", level: "Foundation", estimatedMinutes: 10, status: "published",
    steps: [
      { stepType: "warmup", title: "Nhìn quanh kho hàng", body: "Tưởng tượng bạn đang kiểm kho: một máy in, ba thùng carton và hai kệ trống.", prompt: "Bạn sẽ bắt đầu bằng There is hay There are?" },
      { stepType: "explain", title: "Một hay nhiều?", body: "Dùng there is với danh từ số ít hoặc không đếm được; dùng there are với danh từ số nhiều. Trong hội thoại, There’s có thể xuất hiện trước số nhiều nhưng khi viết TOEIC, hãy dùng cấu trúc chuẩn.", prompt: "There is a printer. There are three cartons." },
      { stepType: "quiz", title: "Kiểm kho chính xác", body: "Chọn cấu trúc phù hợp cho thông báo kho hàng.", prompt: "___ two empty shelves near the loading area.", options: ["There is", "There are", "It is", "They are"], answerIndex: 1, explanation: "Two empty shelves là danh từ số nhiều, vì vậy dùng There are." },
      recap("Đừng dịch từng chữ từ tiếng Việt. Hãy nhìn số lượng danh từ trước, rồi chọn is hoặc are.")
    ]
  },
  {
    slug: "polite-email-requests", title: "Yêu cầu lịch sự trong email", summary: "Viết yêu cầu rõ ràng với could, would và please mà vẫn chuyên nghiệp.", skill: "grammar", level: "350–550", estimatedMinutes: 14, status: "published",
    steps: [
      { stepType: "warmup", title: "Đổi mệnh lệnh thành yêu cầu", body: "So sánh: Send the file today. và Could you send the file today? Câu thứ hai tạo không gian hợp tác hơn.", prompt: "Bạn sẽ dùng mẫu nào khi viết cho khách hàng?" },
      { stepType: "explain", title: "Ba khung câu dùng được ngay", body: "Could you + verb...? dùng cho yêu cầu trực tiếp nhưng lịch sự. Would you mind + V-ing...? mềm hơn. Please có thể đứng cuối câu để tăng tính rõ ràng, không thay thế toàn bộ cấu trúc lịch sự.", prompt: "Could you confirm the delivery date, please?" },
      { stepType: "quiz", title: "Email không gây áp lực", body: "Chọn câu phù hợp nhất khi hỏi khách hàng xác nhận lịch hẹn.", prompt: "___ confirm whether Tuesday afternoon works for you?", options: ["Can you to", "Could you", "Would you to", "Please you"], answerIndex: 1, explanation: "Could you + động từ nguyên mẫu là mẫu yêu cầu lịch sự và tự nhiên." },
      recap("Trong email, một yêu cầu tốt cần: động từ rõ, thời hạn cụ thể và giọng lịch sự.")
    ]
  },
  {
    slug: "part2-question-intentions", title: "Nghe ý định trong Part 2", summary: "Nhận diện dạng câu hỏi Wh-, Yes/No và lựa chọn câu trả lời phù hợp thay vì chỉ bắt từ khóa.", skill: "listening", level: "Foundation", estimatedMinutes: 14, status: "published",
    steps: [
      { stepType: "warmup", title: "Đừng săn từng từ", body: "Trong Part 2, điều cần nghe đầu tiên là người nói đang hỏi về người, nơi, thời điểm hay lý do.", prompt: "Where thường cần nơi chốn; When thường cần thời gian." },
      { stepType: "explain", title: "Tìm loại phản hồi, không chỉ tìm từ giống nhau", body: "Bẫy quen thuộc là đáp án lặp lại một từ trong câu hỏi nhưng không trả lời ý định. Hãy dự đoán loại thông tin trước khi nghe các lựa chọn.", prompt: "Where should I send it? → dự đoán một địa điểm." },
      { stepType: "listen", title: "Bắt tín hiệu nơi chốn", body: "Nghe câu hỏi, sau đó chọn phản hồi đáp ứng đúng ý định.", audioText: "Where should I send the revised contract?", options: ["Before the morning meeting.", "To the legal department.", "Because it needs approval.", "The revised version."], answerIndex: 1, explanation: "Where hỏi địa điểm/đích đến. To the legal department trả lời trực tiếp." },
      recap("Ở Part 2, hãy dành nửa giây đầu để phân loại câu hỏi. Điều đó làm ba lựa chọn còn lại dễ loại hơn.")
    ]
  },
  {
    slug: "listening-numbers-dates", title: "Bắt số, ngày và giờ không hoảng", summary: "Luyện nghe các chi tiết dễ mất điểm trong lịch họp, giá tiền và thời hạn công việc.", skill: "listening", level: "350–550", estimatedMinutes: 13, status: "published",
    steps: [
      { stepType: "warmup", title: "Chi tiết nào hay đánh lừa?", body: "Người nói có thể nêu một con số rồi sửa lại. Đừng chốt vội trước khi câu hoàn tất.", prompt: "Nghe cả cụm: on the fifteenth, not the fiftieth." },
      { stepType: "explain", title: "Neo vào đơn vị", body: "Khi nghe số, hãy gắn nó với đơn vị: dollars, minutes, room number, date. Điều này giúp bạn không nhầm 14 với 40 hoặc Tuesday với Thursday.", prompt: "Viết nhanh ký hiệu $, min, Rm, date khi luyện nháp." },
      { stepType: "listen", title: "Lịch họp đã đổi", body: "Chọn chi tiết chính xác sau khi nghe thông báo.", audioText: "The training session has been moved from Thursday the fourteenth to Friday the fifteenth at 10:30.", options: ["Thursday the 14th at 10:30", "Friday the 15th at 10:30", "Friday the 14th at 11:30", "Thursday the 15th at 11:30"], answerIndex: 1, explanation: "Thông báo nói rõ moved from Thursday the fourteenth to Friday the fifteenth at 10:30." },
      recap("Khi có sửa đổi, thông tin sau from ... to ... thường là đáp án cần giữ lại.")
    ]
  },
  {
    slug: "reading-email-purpose", title: "Đọc email: tìm mục đích trước", summary: "Đọc nhanh email công sở bằng cách xác định người viết muốn người nhận làm gì.", skill: "reading", level: "Foundation", estimatedMinutes: 12, status: "published",
    steps: [
      { stepType: "warmup", title: "Đọc email như một nhiệm vụ", body: "Một email TOEIC thường có mục đích hành động: xác nhận, yêu cầu, thông báo hoặc cảm ơn.", prompt: "Đừng cố hiểu từng từ trước khi biết người viết muốn gì." },
      { stepType: "explain", title: "Ba vị trí có nhiều đáp án", body: "Mục đích thường nằm ở subject line, câu mở đầu hoặc lời kêu gọi hành động cuối email. Hãy gạch mental các động từ: confirm, submit, notify, reserve.", prompt: "Please reply by noon thường báo hiệu yêu cầu phản hồi." },
      { stepType: "quiz", title: "Đọc một câu, hiểu nhiệm vụ", body: "Chọn mục đích của câu email sau.", prompt: "Please let us know by noon if you will attend the supplier briefing.", options: ["Mời tham dự không cần phản hồi", "Yêu cầu xác nhận tham dự", "Thông báo hủy họp", "Gửi biên bản cuộc họp"], answerIndex: 1, explanation: "Please let us know by noon là yêu cầu xác nhận, và nội dung xác nhận là việc tham dự briefing." },
      recap("Khi đọc email, hãy trả lời trước: ai cần làm gì, trước khi nào? Đó là khung tìm đáp án nhanh.")
    ]
  },
  {
    slug: "reading-notice-scan", title: "Quét thông báo để tìm chi tiết", summary: "Dùng kỹ thuật scan để tìm người áp dụng, thời điểm và hành động cần thực hiện trong notice.", skill: "reading", level: "350–550", estimatedMinutes: 12, status: "published",
    steps: [
      { stepType: "warmup", title: "Thông báo không cần đọc từ đầu đến cuối", body: "Với notice, câu hỏi thường hỏi đối tượng nào, quy định bắt đầu khi nào hoặc cần làm gì.", prompt: "Tìm danh từ riêng, ngày tháng và động từ mệnh lệnh trước." },
      { stepType: "explain", title: "Ba mỏ neo khi scan", body: "1) All employees / visitors / members. 2) Effective from / beginning on. 3) Must / should / please. Ba mỏ neo này thường dẫn thẳng đến đáp án.", prompt: "Từ in đậm trong đề thường là tín hiệu câu hỏi sẽ paraphrase chúng." },
      { stepType: "quiz", title: "Thông báo phòng họp", body: "Đọc chi tiết then chốt và chọn kết luận đúng.", prompt: "Effective Monday, all meeting rooms must be reserved through the online calendar.", options: ["Chỉ quản lý mới được đặt phòng", "Quy định bắt đầu từ thứ Hai", "Phòng họp sẽ đóng thứ Hai", "Có thể đặt qua điện thoại"], answerIndex: 1, explanation: "Effective Monday nói rõ thời điểm quy định bắt đầu." },
      recap("Scan không phải đọc cẩu thả. Đó là đọc có mục tiêu, theo đúng loại thông tin câu hỏi cần.")
    ]
  },
  {
    slug: "phone-update-shadowing", title: "Shadowing: cập nhật qua điện thoại", summary: "Luyện nhịp nói ngắn, rõ và tự tin khi báo tiến độ công việc qua điện thoại.", skill: "speaking", level: "350–550", estimatedMinutes: 10, status: "published",
    steps: [
      { stepType: "warmup", title: "Nói ngắn để người nghe theo kịp", body: "Một cuộc gọi cập nhật tốt có ba mảnh: tình trạng hiện tại, nguyên nhân ngắn gọn và bước tiếp theo.", prompt: "Status → reason → next step." },
      { stepType: "explain", title: "Nhịp câu công sở", body: "Dùng cụm cố định để giảm áp lực: I’m calling to update you on… / We’re on track to… / I’ll send the revised file by…", prompt: "Không cần nói dài; cần nói đủ thông tin và mốc thời gian." },
      { stepType: "listen", title: "Nghe rồi nhại theo", body: "Nghe câu ngắn hai lần. Lần đầu bắt nhịp; lần hai nói theo cùng trọng âm.", audioText: "I’m calling to update you on the delivery schedule. We’re on track to ship the order by Friday.", options: ["The order will ship next month.", "The delivery is proceeding as planned.", "The speaker wants to cancel the order.", "The schedule has not been created."], answerIndex: 1, explanation: "On track to ship by Friday nghĩa là tiến độ đang theo kế hoạch." },
      recap("Shadowing hiệu quả khi bạn bắt nhịp từng cụm nghĩa, không cố nói hoàn hảo từng âm ngay từ lần đầu.")
    ]
  },
  {
    slug: "work-report-error-repair", title: "Sửa lỗi trong báo cáo công việc", summary: "Phát hiện các lỗi ngữ pháp phổ biến trong báo cáo ngắn và tự sửa trước khi xem đáp án.", skill: "mixed", level: "550–700", estimatedMinutes: 15, status: "published",
    steps: [
      { stepType: "warmup", title: "Lỗi nào làm câu thiếu chuyên nghiệp?", body: "Một báo cáo ngắn không cần hoa mỹ, nhưng chủ ngữ–động từ, thì và mạo từ phải ổn định.", prompt: "Đọc lại mỗi câu một lần, chỉ để kiểm tra động từ." },
      { stepType: "explain", title: "Tự sửa theo ba lượt", body: "Lượt 1: chủ ngữ có khớp động từ? Lượt 2: thời gian đã xong hay đang diễn ra? Lượt 3: danh từ đếm được số ít có cần a/an/the?", prompt: "Chỉ sửa một loại lỗi mỗi lượt để não không quá tải." },
      { stepType: "quiz", title: "Bản cập nhật chuẩn", body: "Chọn câu phù hợp nhất cho báo cáo tình trạng dự án.", prompt: "The marketing team ___ the final draft yesterday.", options: ["complete", "completes", "completed", "has completing"], answerIndex: 2, explanation: "Yesterday là mốc quá khứ đã kết thúc, vì vậy dùng completed." },
      recap("Mistake Lab sẽ đưa dạng lỗi bạn hay gặp quay lại theo nhịp ôn, để việc tự sửa trở thành phản xạ.")
    ]
  },
  {
    slug: "part7-reply-decision", title: "Part 7: quyết định phản hồi email", summary: "Kết hợp đọc email và suy luận hành động tiếp theo trong tình huống khách hàng thực tế.", skill: "mixed", level: "700–800+", estimatedMinutes: 16, status: "published",
    steps: [
      { stepType: "warmup", title: "Câu hỏi suy luận không hề bí ẩn", body: "Trong Part 7, suy luận tốt thường đến từ ghép hai chi tiết rõ ràng trong văn bản, không phải đoán mò.", prompt: "Tìm bằng chứng cho từng phần của đáp án trước khi chọn." },
      { stepType: "explain", title: "Đọc chuỗi hành động", body: "Theo dõi ai đã làm gì và ai phải làm gì tiếp theo. Từ nối như therefore, once, after và before thường mở đường cho câu hỏi suy luận.", prompt: "Hãy biến email thành mũi tên: request → condition → next action." },
      { stepType: "quiz", title: "Khách hàng cần gì tiếp?", body: "Đọc câu email và chọn hành động hợp lý nhất.", prompt: "Once we receive the signed agreement, we can reserve the installation team for next week.", options: ["Khách hàng phải ký thỏa thuận trước", "Đội lắp đặt đã hoàn thành", "Cuộc hẹn đã bị hủy", "Khách hàng phải trả tiền sau khi lắp đặt"], answerIndex: 0, explanation: "Once we receive the signed agreement là điều kiện để công ty đặt đội lắp đặt, nên chữ ký là hành động tiếp theo." },
      recap("Với suy luận Part 7, đáp án đúng luôn phải có ít nhất hai mẩu bằng chứng trong văn bản.")
    ]
  }
];
