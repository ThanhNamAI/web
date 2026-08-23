import type { StarterLesson } from "./starterLessons";

const recap = (body: string) => ({ stepType: "recap" as const, title: "Chốt phản xạ trước khi rời bài", body, prompt: "Nhắc lại một tín hiệu bạn sẽ tìm ở câu TOEIC tiếp theo." });

export const partLessons: StarterLesson[] = [
  {
    slug: "part2-where-questions", title: "Part 2: nghe câu hỏi Where", summary: "Nhận diện câu hỏi địa điểm và chọn phản hồi trả lời đúng nơi chốn, không bị kéo theo từ khóa quen.", skill: "listening", level: "Foundation · Part 2", estimatedMinutes: 10, status: "published",
    steps: [
      { stepType: "warmup", title: "Bắt từ để hỏi đầu tiên", body: "Where thường muốn một địa điểm hoặc điểm đến. Hãy nghe ý định trước khi nghe từng từ." },
      { stepType: "explain", title: "Đừng chọn câu có từ giống", body: "Một đáp án có thể lặp lại delivery hoặc report nhưng vẫn không nói nơi chốn. Hãy dự đoán loại câu trả lời: in, at, on the second floor, to the office." },
      { stepType: "listen", title: "Điểm đến của hồ sơ", body: "Nghe câu hỏi rồi chọn phản hồi trực tiếp.", audioText: "Where should I leave the signed forms?", prompt: "Where should I leave the signed forms?", options: ["Before lunch.", "On Ms. Kim's desk.", "Because they are urgent.", "I signed them yesterday."], answerIndex: 1, explanation: "Where cần nơi chốn. On Ms. Kim's desk trả lời đúng điểm đặt hồ sơ." },
      recap("Nghe Where, hãy chờ một cụm nơi chốn thay vì săn từ giống trong câu hỏi.")
    ]
  },
  {
    slug: "part2-when-schedules", title: "Part 2: lịch hẹn và When", summary: "Chọn phản hồi về thời gian, ngày và mốc hạn trong câu hỏi Part 2 công sở.", skill: "listening", level: "Foundation · Part 2", estimatedMinutes: 10, status: "published",
    steps: [
      { stepType: "warmup", title: "Neo thời gian", body: "When thường dẫn đến một giờ, ngày, hoặc mốc như after the briefing." },
      { stepType: "explain", title: "Thời gian có thể gián tiếp", body: "Not until Friday và right after lunch đều trả lời When, dù không nhắc lại từ thời gian trong câu hỏi." },
      { stepType: "listen", title: "Mốc gửi báo cáo", body: "Chọn phản hồi nói đúng thời điểm.", audioText: "When will the updated sales report be ready?", prompt: "When will the updated sales report be ready?", options: ["At the regional office.", "By tomorrow morning.", "Ms. Rivera prepared it.", "For the sales team."], answerIndex: 1, explanation: "By tomorrow morning là mốc hoàn thành, nên trả lời trực tiếp câu When." },
      recap("Với When, chấp nhận cả mốc cụ thể lẫn cụm thời gian gián tiếp.")
    ]
  },
  {
    slug: "part2-who-roles", title: "Part 2: ai phụ trách việc này?", summary: "Luyện Who questions và các phản hồi về người, bộ phận hoặc vai trò.", skill: "listening", level: "350–550 · Part 2", estimatedMinutes: 11, status: "published",
    steps: [
      { stepType: "warmup", title: "Nghe vai trò", body: "Who không nhất thiết trả lời bằng tên riêng. A member of the HR team cũng là một câu trả lời đúng." },
      { stepType: "explain", title: "Tên, chức danh, nhóm", body: "Đáp án phù hợp thường là một người hoặc đơn vị chịu trách nhiệm; thời gian và địa điểm là bẫy phổ biến." },
      { stepType: "listen", title: "Người liên hệ", body: "Chọn người phụ trách.", audioText: "Who is in charge of the visitor badges?", prompt: "Who is in charge of the visitor badges?", options: ["At the reception desk.", "The security coordinator.", "For tomorrow's tour.", "They were printed."], answerIndex: 1, explanation: "The security coordinator là người/role phụ trách visitor badges." },
      recap("Khi nghe Who, chọn người hoặc nhóm có thể thực hiện hành động đó.")
    ]
  },
  {
    slug: "part2-yes-no-indirect", title: "Part 2: đáp lời Yes/No không nói Yes/No", summary: "Nhận diện phản hồi gián tiếp và tránh bẫy trả lời lặp từ trong câu hỏi.", skill: "listening", level: "350–550 · Part 2", estimatedMinutes: 12, status: "published",
    steps: [
      { stepType: "warmup", title: "Không phải Yes mới là đồng ý", body: "Sure, I can handle that. hoặc Not yet, I’m waiting for approval đều trả lời câu Yes/No." },
      { stepType: "explain", title: "Đọc thái độ trong hành động", body: "Hãy hỏi: phản hồi này có xác nhận, từ chối hoặc giải thích khả năng làm việc không?" },
      { stepType: "listen", title: "Đã đặt phòng chưa?", body: "Chọn phản hồi phù hợp nhất.", audioText: "Have you reserved the conference room yet?", prompt: "Have you reserved the conference room yet?", options: ["No, I'll do it after this call.", "In the large conference room.", "The reservation form.", "About an hour."], answerIndex: 0, explanation: "No, I'll do it after this call trả lời trực tiếp trạng thái chưa đặt phòng." },
      recap("Yes/No question thường kiểm tra ý nghĩa hành động, không chỉ từ yes hoặc no.")
    ]
  },
  {
    slug: "part2-requests-offers", title: "Part 2: request, offer và lời đề nghị", summary: "Phân biệt yêu cầu, đề nghị giúp đỡ và phản hồi hợp tác trong Part 2.", skill: "listening", level: "350–550 · Part 2", estimatedMinutes: 11, status: "published",
    steps: [
      { stepType: "warmup", title: "Could you và Would you like", body: "Could you yêu cầu hành động; Would you like thường là lời mời hoặc đề nghị." },
      { stepType: "explain", title: "Trả lời bằng cam kết", body: "I’d be happy to, Certainly, hoặc I’m afraid I can’t là phản hồi hợp logic với request/offer." },
      { stepType: "listen", title: "Giúp chuẩn bị phòng", body: "Chọn phản hồi hợp tác.", audioText: "Could you set up the projector before the workshop?", prompt: "Could you set up the projector before the workshop?", options: ["Certainly, I'll take care of it.", "It was a useful workshop.", "The projector is expensive.", "At nine o'clock yesterday."], answerIndex: 0, explanation: "Certainly, I'll take care of it chấp nhận yêu cầu và cam kết hành động." },
      recap("Với request, hãy chọn câu thể hiện nhận lời, từ chối hoặc làm rõ khả năng thực hiện.")
    ]
  },
  {
    slug: "part2-negative-questions", title: "Part 2: câu hỏi phủ định không đánh lừa", summary: "Giải mã câu hỏi Why don't / Haven't / Didn't trong bối cảnh họp và dự án.", skill: "listening", level: "550–700 · Part 2", estimatedMinutes: 12, status: "published",
    steps: [
      { stepType: "warmup", title: "Phủ định thường gợi lý do", body: "Why hasn't the shipment arrived? đang hỏi nguyên nhân, không chỉ hỏi có đến hay chưa." },
      { stepType: "explain", title: "Bỏ lớp phủ định", body: "Đổi câu về ý định cốt lõi: What caused the delay? Sau đó tìm lý do hoặc bước tiếp theo." },
      { stepType: "listen", title: "Lý do chậm giao", body: "Chọn lý do phù hợp.", audioText: "Why hasn't the shipment arrived yet?", prompt: "Why hasn't the shipment arrived yet?", options: ["It was delayed by bad weather.", "At the loading dock.", "The shipment was large.", "Yes, it has."], answerIndex: 0, explanation: "It was delayed by bad weather giải thích lý do shipment chưa đến." },
      recap("Câu phủ định không đổi loại thông tin cần tìm: Why vẫn cần một lý do.")
    ]
  },
  {
    slug: "part2-statements-suggestions", title: "Part 2: phản hồi statement và suggestion", summary: "Xử lý lời nhận xét, thông báo và lời gợi ý không có từ để hỏi.", skill: "listening", level: "550–700 · Part 2", estimatedMinutes: 12, status: "published",
    steps: [
      { stepType: "warmup", title: "Không có Wh-word vẫn có ý định", body: "The printer is out of paper. thường cần phản hồi hành động hoặc giải pháp." },
      { stepType: "explain", title: "Nối statement với bước tiếp", body: "Một phản hồi tốt bổ sung thông tin, đồng ý, hoặc đề xuất giải pháp thay vì lặp lại danh từ." },
      { stepType: "listen", title: "Giải pháp ngay", body: "Chọn phản hồi tự nhiên.", audioText: "The printer is out of paper again.", prompt: "The printer is out of paper again.", options: ["I'll refill the tray.", "The paper is white.", "On the second floor.", "It prints quickly."], answerIndex: 0, explanation: "I'll refill the tray là hành động giải quyết đúng vấn đề vừa được nêu." },
      recap("Statement Part 2 thường cần câu trả lời tiếp nối hành động, không phải sự lặp lại.")
    ]
  },
  {
    slug: "part3-speaker-roles", title: "Part 3: xác định vai trò người nói", summary: "Dự đoán quan hệ công việc và theo dõi ai chịu trách nhiệm trong hội thoại hai người.", skill: "listening", level: "350–550 · Part 3", estimatedMinutes: 14, status: "published",
    steps: [
      { stepType: "warmup", title: "Ai đang làm gì?", body: "Trước khi nghe, hãy chú ý từ role: client, technician, manager, coordinator." },
      { stepType: "explain", title: "Dấu vết vai trò", body: "Người hỏi lịch giao hàng có thể là khách; người kiểm tra inventory thường thuộc warehouse hoặc supplier." },
      { stepType: "listen", title: "Cuộc gọi về đơn hàng", body: "Nghe và chọn vai trò của người đàn ông.", audioText: "Woman: Our order still hasn't arrived. Man: I can check the tracking number and call the warehouse. Woman: Thank you. We need the supplies before Friday.", prompt: "What is the man most likely?", options: ["A customer-service representative", "A restaurant manager", "A job applicant", "A building visitor"], answerIndex: 0, explanation: "Anh ấy kiểm tra tracking và gọi warehouse để hỗ trợ đơn hàng, phù hợp customer service." },
      recap("Vai trò thường lộ qua hành động họ cam kết làm, không chỉ qua chức danh được nói trực tiếp.")
    ]
  },
  {
    slug: "part3-next-action", title: "Part 3: truy dấu hành động tiếp theo", summary: "Luyện câu hỏi What will X most likely do next? qua hội thoại họp và dự án.", skill: "listening", level: "350–550 · Part 3", estimatedMinutes: 14, status: "published",
    steps: [
      { stepType: "warmup", title: "Mũi tên next step", body: "Tìm lời hứa, quyết định hoặc việc chưa hoàn tất ở cuối hội thoại." },
      { stepType: "explain", title: "Đừng chọn việc đã xong", body: "Câu hỏi next action thường bẫy bằng chi tiết vừa hoàn thành. Tập trung vào will, I'll, need to hoặc after this." },
      { stepType: "listen", title: "Tài liệu họp", body: "Chọn việc người phụ nữ sẽ làm tiếp.", audioText: "Man: Did you send the agenda to the design team? Woman: Not yet. I was waiting for the manager's comments. Man: She approved it this morning. Woman: Great, I'll forward it right away.", prompt: "What will the woman most likely do next?", options: ["Send the agenda to the design team", "Write the manager's comments", "Cancel the meeting", "Meet the manager"], answerIndex: 0, explanation: "I'll forward it right away cho biết hành động kế tiếp là gửi agenda." },
      recap("Để tìm next action, nghe câu chốt của hội thoại và biến nó thành động từ hành động.")
    ]
  },
  {
    slug: "part3-detail-numbers", title: "Part 3: giữ chi tiết số và giá", summary: "Theo dõi giá, số lượng và thay đổi trong hội thoại mua hàng.", skill: "listening", level: "550–700 · Part 3", estimatedMinutes: 15, status: "published",
    steps: [
      { stepType: "warmup", title: "Đừng ghi số đơn lẻ", body: "Gắn số với đơn vị: dollars, boxes, Tuesday, room. Điều đó ngăn nhầm số lượng với giá." },
      { stepType: "explain", title: "Bẫy sửa đổi", body: "Khi nghe from ... to ... hoặc not 50, but 15, thông tin sau thường là đáp án cuối." },
      { stepType: "listen", title: "Báo giá mới", body: "Chọn mức giá cuối cùng.", audioText: "Woman: I thought the service fee was fifty dollars. Man: It used to be, but the new rate is forty-five for orders placed this month. Woman: Then let's place the order today.", prompt: "What fee will the woman most likely pay?", options: ["$50", "$45", "$40", "$15"], answerIndex: 1, explanation: "The new rate is forty-five ... this month, và cô ấy sẽ đặt hôm nay." },
      recap("Số đúng là số gắn với quyết định cuối của người nói, không nhất thiết là số nghe đầu tiên.")
    ]
  },
  {
    slug: "part3-visual-context", title: "Part 3: đối chiếu lịch và ngữ cảnh", summary: "Kết hợp hội thoại với thông tin lịch biểu in sẵn theo phong cách Part 3.", skill: "listening", level: "550–700 · Part 3", estimatedMinutes: 15, status: "published",
    steps: [
      { stepType: "warmup", title: "Nghe để tìm ô đúng", body: "Biểu đồ/lịch không phải thông tin phụ. Hãy nghe tên, giờ và địa điểm để ghép với một ô." },
      { stepType: "explain", title: "Ba mỏ neo", body: "Nghe ngày, hoạt động, người phụ trách. Khi có hai trong ba, bạn thường định vị được chi tiết cần hỏi." },
      { stepType: "listen", title: "Đổi lịch đào tạo", body: "Chọn lịch mới của buổi training.", audioText: "Man: The safety training was scheduled for Tuesday at 2:00, right? Woman: Yes, but the instructor is unavailable then. We moved it to Wednesday morning in Room 204.", prompt: "When will the safety training take place?", options: ["Tuesday at 2:00", "Wednesday morning", "Wednesday at 2:00", "Thursday morning"], answerIndex: 1, explanation: "We moved it to Wednesday morning là lịch cập nhật cuối cùng." },
      recap("Khi Part 3 nhắc lịch, hãy ghi cả ngày và thời điểm trước khi xem lựa chọn.")
    ]
  },
  {
    slug: "part3-problem-solution", title: "Part 3: vấn đề, nguyên nhân và giải pháp", summary: "Nghe chuỗi problem–solution để chọn chi tiết suy luận trong hội thoại công việc.", skill: "listening", level: "550–700 · Part 3", estimatedMinutes: 15, status: "published",
    steps: [
      { stepType: "warmup", title: "Nghe điểm gãy", body: "Problem thường xuất hiện với can't, missing, delayed, unavailable. Sau đó sẽ có một giải pháp." },
      { stepType: "explain", title: "Đừng nhầm nguyên nhân với giải pháp", body: "Câu hỏi may ask what will be done, nên chọn hành động sau but/so/then thay vì lý do ban đầu." },
      { stepType: "listen", title: "Máy quét bị lỗi", body: "Chọn giải pháp được đề xuất.", audioText: "Woman: The scanner in the mail room isn't working. Man: I checked the cable, but it still won't turn on. Woman: Should we call the repair company? Man: Yes, I'll submit a service request now.", prompt: "What will the man do?", options: ["Submit a repair request", "Buy a new scanner", "Move the scanner", "Check the mail"], answerIndex: 0, explanation: "I'll submit a service request now nêu rõ giải pháp tiếp theo." },
      recap("Với problem–solution, hãy nghe câu bắt đầu bằng I'll / let's / should we để bắt giải pháp.")
    ]
  },
  {
    slug: "part3-inference-tone", title: "Part 3: suy luận từ thái độ và ngữ cảnh", summary: "Luyện câu suy luận vừa sức bằng chi tiết về ưu tiên, lo lắng và xác nhận.", skill: "listening", level: "700–800+ · Part 3", estimatedMinutes: 16, status: "published",
    steps: [
      { stepType: "warmup", title: "Suy luận có bằng chứng", body: "Không đoán cảm xúc mơ hồ. Hãy ghép câu nói với deadline, lời cảm ơn hoặc mức độ khẩn." },
      { stepType: "explain", title: "Từ tín hiệu đến kết luận", body: "If we can finish today, we can avoid the rush delivery fee cho thấy phí giao nhanh là điều họ muốn tránh." },
      { stepType: "listen", title: "Ưu tiên hôm nay", body: "Chọn điều có thể suy ra.", audioText: "Man: Can the proposal be finalized today? Woman: I think so, if we receive the pricing sheet by noon. Man: I'll ask accounting to send it immediately.", prompt: "What can be inferred about the proposal?", options: ["It depends on receiving pricing information", "It has already been approved", "It was sent last week", "It is for accounting only"], answerIndex: 0, explanation: "If we receive the pricing sheet by noon đặt pricing sheet là điều kiện hoàn tất proposal." },
      recap("Suy luận tốt luôn có một điều kiện hoặc hành động trong audio để làm bằng chứng.")
    ]
  },
  {
    slug: "part3-three-speakers", title: "Part 3: hội thoại ba người", summary: "Theo dõi ai nói gì khi ba người cùng trao đổi về sự kiện công ty.", skill: "listening", level: "700–800+ · Part 3", estimatedMinutes: 16, status: "published",
    steps: [
      { stepType: "warmup", title: "Gắn nhãn người nói", body: "Hãy đặt nhãn nhanh: organizer, vendor, attendee. Đừng để ba giọng hòa vào một câu chuyện." },
      { stepType: "explain", title: "Ai cam kết hành động?", body: "Câu hỏi often ask Who will ...? Câu trả lời nằm ở người nói câu I'll hoặc We can." },
      { stepType: "listen", title: "Chuẩn bị booth", body: "Chọn người sẽ gửi sơ đồ booth.", audioText: "Woman: The exhibit hall opens at eight. Man: Our booth layout is not confirmed yet. Second woman: I have the final diagram. I'll email it to both of you before lunch.", prompt: "Who will send the booth layout?", options: ["The second woman", "The man", "The first woman", "The exhibit manager"], answerIndex: 0, explanation: "Second woman nói rõ I'll email it to both of you before lunch." },
      recap("Trong hội thoại ba người, hành động gắn với đúng người nói, không gắn với chủ đề được nhắc nhiều nhất.")
    ]
  },
  {
    slug: "part7-email-purpose", title: "Part 7: mục đích email ngay từ câu đầu", summary: "Đọc email công sở để tìm mục đích, đối tượng và hành động yêu cầu.", skill: "reading", level: "350–550 · Part 7", estimatedMinutes: 13, status: "published",
    steps: [
      { stepType: "warmup", title: "Đọc như người nhận", body: "Hỏi ngay: người viết muốn tôi biết gì hoặc làm gì?" },
      { stepType: "explain", title: "Ba vị trí giàu tín hiệu", body: "Subject, câu mở đầu và lời kêu gọi hành động cuối email thường chứa mục đích chính." },
      { stepType: "quiz", title: "Mục đích của email", body: "Đọc một câu email và chọn mục đích.", prompt: "Subject: Parking update\nPlease use the north entrance on Friday while the main lot is resurfaced.", options: ["Thông báo thay đổi lối vào", "Mời tham dự buổi họp", "Yêu cầu đặt chỗ đậu xe", "Phàn nàn về bãi xe"], answerIndex: 0, explanation: "Please use the north entrance ... while ... is resurfaced thông báo thay đổi cách vào bãi xe." },
      recap("Mục đích email thường là động từ hành động người viết mong người nhận thực hiện.")
    ]
  },
  {
    slug: "part7-notice-details", title: "Part 7: scan notice để tìm chi tiết", summary: "Tìm nhanh đối tượng, mốc hiệu lực và yêu cầu trong thông báo nội bộ.", skill: "reading", level: "350–550 · Part 7", estimatedMinutes: 13, status: "published",
    steps: [
      { stepType: "warmup", title: "Tìm neo trước", body: "Notice thường trả lời ai, khi nào và phải làm gì. Đừng đọc tuần tự nếu câu hỏi chỉ hỏi một chi tiết." },
      { stepType: "explain", title: "Effective, all, must", body: "Ba từ này hay dẫn đến thời điểm, đối tượng và nghĩa vụ — ba dạng câu hỏi phổ biến." },
      { stepType: "quiz", title: "Quy định khách đến", body: "Chọn kết luận đúng.", prompt: "Effective July 1, all visitors must check in at the reception desk and wear a temporary badge.", options: ["Khách phải check in từ ngày 1 tháng 7", "Nhân viên phải đổi bàn làm việc", "Khách chỉ cần badge vào cuối tuần", "Reception desk sẽ đóng"], answerIndex: 0, explanation: "Effective July 1 và all visitors must check in nêu rõ quy định và ngày áp dụng." },
      recap("Scan hiệu quả là tìm mỏ neo đúng với câu hỏi, không phải đọc lướt không mục tiêu.")
    ]
  },
  {
    slug: "part7-inference-action", title: "Part 7: suy luận hành động tiếp theo", summary: "Luyện ghép điều kiện và hành động để trả lời câu suy luận Part 7.", skill: "reading", level: "550–700 · Part 7", estimatedMinutes: 15, status: "published",
    steps: [
      { stepType: "warmup", title: "Suy luận từ mũi tên", body: "Biến câu thành chuỗi: điều kiện → hành động → kết quả. Đáp án phải nằm trên chuỗi đó." },
      { stepType: "explain", title: "Once, after và before", body: "Những từ nối này rất quan trọng vì chúng cho biết việc nào cần hoàn thành trước." },
      { stepType: "quiz", title: "Điều kiện giao hàng", body: "Chọn hành động cần có trước.", prompt: "Once we receive the revised purchase order, we can schedule delivery for next week.", options: ["Khách cần gửi purchase order đã chỉnh sửa", "Giao hàng đã hoàn tất", "Đơn hàng bị hủy", "Công ty sẽ ngừng nhận đơn"], answerIndex: 0, explanation: "Once we receive ... là điều kiện trước khi schedule delivery." },
      recap("Suy luận Part 7 cần một điều kiện thật trong văn bản, không dựa vào kiến thức ngoài bài.")
    ]
  },
  {
    slug: "part7-vocabulary-context", title: "Part 7: đoán nghĩa theo ngữ cảnh", summary: "Suy ra nghĩa của từ/cụm từ qua chức năng trong email và thông báo.", skill: "reading", level: "550–700 · Part 7", estimatedMinutes: 14, status: "published",
    steps: [
      { stepType: "warmup", title: "Đừng dịch một từ cô lập", body: "Nhìn động từ, đối tượng và kết quả quanh từ lạ để suy ra vai trò của nó." },
      { stepType: "explain", title: "Thay từ bằng ý", body: "If a shipment is delayed, nó không đến theo lịch. Ý nghĩa bám vào hậu quả, không cần từ điển." },
      { stepType: "quiz", title: "Delayed nghĩa là gì?", body: "Chọn nghĩa phù hợp trong ngữ cảnh.", prompt: "Due to heavy rain, the shipment has been delayed until Monday.", options: ["Bị hoãn lại", "Được giảm giá", "Đã được kiểm tra", "Được giao sớm"], answerIndex: 0, explanation: "Until Monday sau heavy rain cho thấy shipment bị hoãn, không đến đúng lịch." },
      recap("Từ vựng Part 7 trở nên dễ hơn khi bạn đọc hậu quả và mốc thời gian quanh nó.")
    ]
  },
  {
    slug: "part7-double-passage", title: "Part 7: nối hai văn bản", summary: "So sánh email và lịch/schedule để trả lời câu hỏi multiple passages.", skill: "reading", level: "700–800+ · Part 7", estimatedMinutes: 16, status: "published",
    steps: [
      { stepType: "warmup", title: "Mỗi văn bản làm một việc", body: "Email thường cho lý do; lịch hoặc notice thường cho chi tiết thực hiện. Đừng ép một văn bản trả lời tất cả." },
      { stepType: "explain", title: "Nối bằng danh từ chung", body: "Tên sự kiện, ngày hoặc địa điểm là cầu nối. Tìm điểm giao trước rồi mới đọc lựa chọn." },
      { stepType: "quiz", title: "Email và lịch training", body: "Chọn chi tiết có thể rút ra từ cả hai văn bản.", prompt: "Email: The July 8 training has been moved to July 10 because the presenter is traveling.\nSchedule: July 10, 9:00 A.M. — Customer-care training, Room B.", options: ["Training diễn ra ngày 10 tháng 7", "Presenter đã hủy training", "Training ở Room A", "Training chỉ dành cho khách hàng"], answerIndex: 0, explanation: "Email đổi training sang July 10, còn schedule xác nhận customer-care training ngày July 10." },
      recap("Multiple passage: xác nhận đáp án bằng ít nhất một chi tiết từ mỗi văn bản khi câu hỏi yêu cầu liên kết.")
    ]
  },
  {
    slug: "part7-triple-passage", title: "Part 7: điều phối ba văn bản", summary: "Quản lý email, form và thông báo để tìm quyết định cuối trong triple passage.", skill: "reading", level: "700–800+ · Part 7", estimatedMinutes: 17, status: "published",
    steps: [
      { stepType: "warmup", title: "Không đọc ba văn bản cùng mức", body: "Xác định văn bản nào là request, văn bản nào là bằng chứng và văn bản nào là cập nhật cuối." },
      { stepType: "explain", title: "Theo dòng thời gian", body: "Với triple passage, hãy đánh dấu thứ tự thời gian. Thông báo mới nhất thường sửa hoặc chốt thông tin trước đó." },
      { stepType: "quiz", title: "Quyết định cuối", body: "Chọn kết luận đúng từ chuỗi văn bản.", prompt: "Email: Please submit catering choices by Monday.\nForm: Vegetarian lunch selected for 12 attendees.\nNotice: The deadline has been extended to Tuesday noon.", options: ["Hạn gửi lựa chọn là trưa thứ Ba", "Không có ai chọn món chay", "Catering đã bị hủy", "Hạn vẫn là thứ Hai"], answerIndex: 0, explanation: "Notice là cập nhật mới nhất và nói deadline extended to Tuesday noon." },
      recap("Triple passage không cần ghi nhớ mọi câu; cần biết văn bản nào cập nhật hoặc xác nhận văn bản nào.")
    ]
  },
];
