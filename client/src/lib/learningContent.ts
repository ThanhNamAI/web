export const roadmapStages = [
  { id: "foundation", range: "0–350", label: "Nền tảng", detail: "Từ loại, câu cơ bản, 500 từ cốt lõi", percentage: 88, color: "clay" },
  { id: "builder", range: "350–550", label: "Xây kỹ năng", detail: "Thì, mệnh đề, nghe hội thoại ngắn", percentage: 58, color: "gold" },
  { id: "accelerate", range: "550–700", label: "Tăng tốc", detail: "Từ vựng công sở, Part 3–6", percentage: 26, color: "teal" },
  { id: "mastery", range: "700–800+", label: "Về đích", detail: "Đọc nhanh, suy luận, đề mô phỏng", percentage: 4, color: "violet" },
];

export const grammarLessons = [
  { title: "Thì hiện tại hoàn thành", stage: "Nền tảng", summary: "Nhận biết have/has + V3 trong ngữ cảnh công việc.", question: "The manager _____ the report already.", choices: ["has reviewed", "review", "was reviewing", "will reviewed"], answer: 0, explanation: "Từ already thường đi với hiện tại hoàn thành: has + reviewed." },
  { title: "Mệnh đề quan hệ", stage: "Xây kỹ năng", summary: "Dùng who/which/that để nối thông tin trong email.", question: "The client _____ called yesterday confirmed the order.", choices: ["who", "where", "whose", "when"], answer: 0, explanation: "Who thay cho người làm chủ ngữ của mệnh đề quan hệ." },
  { title: "Từ loại trong Part 5", stage: "Tăng tốc", summary: "Nhìn vị trí để chọn danh từ, động từ, tính từ hay trạng từ.", question: "The proposal was _____ prepared for the board meeting.", choices: ["careful", "carefully", "care", "carefulness"], answer: 1, explanation: "Cần trạng từ carefully để bổ nghĩa cho động từ prepared." },
];

export const listeningItems = [
  { audio: "Please send the revised invoice before the end of the day.", prompt: "Người nói muốn gì?", choices: ["Gửi hóa đơn đã chỉnh sửa hôm nay", "Hủy hóa đơn", "Họp về ngân sách", "Thanh toán ngay"], answer: 0, explanation: "Revised invoice = hóa đơn đã chỉnh sửa; before the end of the day = trước cuối ngày." },
  { audio: "The train to Central Station will depart from platform four.", prompt: "Tàu sẽ khởi hành từ đâu?", choices: ["Nhà ga Trung tâm", "Sân bay", "Sân ga số bốn", "Phòng chờ"], answer: 2, explanation: "Platform four là sân ga số bốn, còn Central Station là điểm đến." },
];

export const readingItems = [
  { text: "Dear Ms. Tran,\n\nThank you for registering for the customer service workshop. The session will be held in Room B on Thursday, June 18, from 9:00 a.m. to noon. Please bring your employee badge for check-in.\n\nRegards,\nTraining Department", question: "Người tham dự cần mang theo gì?", choices: ["Máy tính cá nhân", "Thẻ nhân viên", "Hóa đơn", "Bản trình bày"], answer: 1, explanation: "Email nêu rõ: Please bring your employee badge for check-in." },
];

grammarLessons.push(
  { title: "Quá khứ đơn trong thông báo", stage: "Nền tảng", summary: "Dùng V2/ed cho sự việc đã xảy ra và hoàn tất.", question: "The flight _____ due to heavy rain yesterday.", choices: ["delays", "was delayed", "is delaying", "has delay"], answer: 1, explanation: "Yesterday là dấu hiệu quá khứ; bị động dùng was + V3: was delayed." },
  { title: "Tương lai với will", stage: "Nền tảng", summary: "Diễn tả quyết định hoặc dự báo về tương lai.", question: "We _____ the results by email tomorrow.", choices: ["send", "sent", "will send", "have sent"], answer: 2, explanation: "Tomorrow yêu cầu cấu trúc tương lai: will + động từ nguyên mẫu." },
  { title: "So sánh hơn", stage: "Xây kỹ năng", summary: "So sánh hai lựa chọn trong báo cáo và chào giá.", question: "This supplier offers a _____ delivery time.", choices: ["short", "shorter", "shortest", "more short"], answer: 1, explanation: "Khi so sánh hai lựa chọn, dùng comparative: shorter." },
  { title: "Bị động trong quy trình", stage: "Xây kỹ năng", summary: "Nhấn vào đối tượng được xử lý thay vì người thực hiện.", question: "All applications _____ by Friday.", choices: ["must submit", "must be submitted", "must submitting", "must have submit"], answer: 1, explanation: "Sau modal must, câu bị động là must be + V3." },
  { title: "Liên từ nhượng bộ", stage: "Tăng tốc", summary: "Phân biệt although, because và therefore trong email.", question: "_____ the weather was poor, the event attracted many visitors.", choices: ["Although", "Because", "Therefore", "Unless"], answer: 0, explanation: "Although mở đầu ý nhượng bộ: dù thời tiết xấu, sự kiện vẫn thu hút khách." },
  { title: "Giới từ thời gian", stage: "Xây kỹ năng", summary: "Dùng by để chỉ hạn chót.", question: "Please complete the form _____ June 15.", choices: ["at", "by", "for", "since"], answer: 1, explanation: "By + mốc thời gian biểu thị hoàn thành không muộn hơn hạn đó." },
  { title: "Danh từ đếm được", stage: "Nền tảng", summary: "Dùng many với danh từ số nhiều đếm được.", question: "How _____ applicants attended the interview?", choices: ["much", "many", "long", "often"], answer: 1, explanation: "Applicants là danh từ số nhiều đếm được, nên dùng many." },
  { title: "Động từ theo sau to V", stage: "Tăng tốc", summary: "Nhận biết các động từ thường đi với to-infinitive.", question: "The company plans _____ a new branch in Da Nang.", choices: ["open", "opening", "to open", "opened"], answer: 2, explanation: "Plan đi với to-infinitive: plans to open." },
  { title: "Đại từ sở hữu", stage: "Nền tảng", summary: "Phân biệt its và it's trong ngữ cảnh công ty.", question: "The company updated _____ privacy policy.", choices: ["it's", "its", "it", "itself"], answer: 1, explanation: "Its là tính từ sở hữu; it's là viết tắt của it is." },
);

listeningItems.push(
  { audio: "Our new marketing campaign will launch on the first of September.", prompt: "Khi nào chiến dịch sẽ bắt đầu?", choices: ["Ngày 1 tháng 9", "Cuối tháng 9", "Ngày mai", "Đầu năm sau"], answer: 0, explanation: "The first of September tương ứng ngày 1 tháng 9." },
  { audio: "Could you reserve a table for six at seven thirty?", prompt: "Người nói muốn làm gì?", choices: ["Gọi sáu người", "Đặt bàn cho sáu người", "Đổi giờ bay", "Mua sáu vé"], answer: 1, explanation: "Reserve a table là đặt bàn; for six là cho sáu người." },
  { audio: "The printer is out of paper, so I will order more supplies.", prompt: "Vấn đề của máy in là gì?", choices: ["Hết giấy", "Bị mất điện", "In quá chậm", "Không kết nối mạng"], answer: 0, explanation: "Out of paper nghĩa là đã hết giấy." },
  { audio: "Ms. Lee will be working remotely on Friday.", prompt: "Thứ Sáu, Ms. Lee sẽ làm việc ở đâu?", choices: ["Tại văn phòng", "Tại nhà hoặc từ xa", "Ở sân bay", "Trong phòng họp"], answer: 1, explanation: "Working remotely là làm việc từ xa." },
  { audio: "The package should arrive no later than Wednesday afternoon.", prompt: "Gói hàng dự kiến đến muộn nhất khi nào?", choices: ["Thứ Hai", "Sáng thứ Tư", "Chiều thứ Tư", "Thứ Năm"], answer: 2, explanation: "No later than Wednesday afternoon nghĩa là không muộn hơn chiều thứ Tư." },
  { audio: "Please forward the attachment to everyone on the sales team.", prompt: "Người nghe cần làm gì?", choices: ["Xóa tệp đính kèm", "In bản sao", "Chuyển tiếp tệp đính kèm", "Ký hợp đồng"], answer: 2, explanation: "Forward the attachment là chuyển tiếp tệp đính kèm." },
  { audio: "The seminar has been moved to the main auditorium.", prompt: "Điều gì thay đổi về hội thảo?", choices: ["Nó đã bị hủy", "Địa điểm đã đổi", "Thời gian đã đổi", "Người nói không tham gia"], answer: 1, explanation: "Has been moved to chỉ sự thay đổi địa điểm." },
  { audio: "Your reimbursement request has been approved.", prompt: "Yêu cầu của người nghe có kết quả thế nào?", choices: ["Bị từ chối", "Cần thêm hồ sơ", "Đã được phê duyệt", "Đã được thanh toán"], answer: 2, explanation: "Approved là đã được phê duyệt; chưa nhất thiết là đã thanh toán." },
);

readingItems.push(
  { text: "Notice: The east parking lot will be closed from 6 p.m. Friday until 7 a.m. Monday for resurfacing. Employees may use the visitor lot during this period.", question: "Nhân viên nên đỗ xe ở đâu vào cuối tuần?", choices: ["Bãi phía đông", "Bãi khách", "Trên đường", "Bãi phía nam"], answer: 1, explanation: "Thông báo cho phép dùng visitor lot trong thời gian bãi phía đông đóng cửa." },
  { text: "Order confirmation #9821: Your order of 20 office chairs has been processed. Delivery is scheduled for March 12 between 10 a.m. and 2 p.m.", question: "Đơn hàng bao gồm gì?", choices: ["20 ghế văn phòng", "12 bàn làm việc", "20 máy in", "2 ghế văn phòng"], answer: 0, explanation: "Order confirmation ghi rõ 20 office chairs." },
  { text: "To: All employees\nSubject: Security update\nPlease change your network password by the end of this week. Passwords must contain at least eight characters.", question: "Yêu cầu nào được nêu trong email?", choices: ["Đổi mật khẩu trong tuần", "Tắt máy tính", "Gửi mật khẩu cho IT", "Mua phần mềm mới"], answer: 0, explanation: "Email yêu cầu đổi network password trước khi hết tuần." },
  { text: "The annual staff picnic has been postponed because rain is expected on Saturday. A new date will be announced next week.", question: "Vì sao buổi dã ngoại bị hoãn?", choices: ["Thiếu nhân viên", "Dự báo mưa", "Địa điểm đóng cửa", "Thiếu ngân sách"], answer: 1, explanation: "Because rain is expected on Saturday là lý do trực tiếp." },
  { text: "Customer survey results show that 86 percent of respondents are satisfied with delivery speed, but many requested a wider range of payment methods.", question: "Khách hàng muốn cải thiện điều gì?", choices: ["Tốc độ giao hàng", "Chất lượng sản phẩm", "Phương thức thanh toán", "Giá cả"], answer: 2, explanation: "Many requested a wider range of payment methods." },
  { text: "The accounting department will conduct an inventory audit next Tuesday. Department managers should make sure all equipment records are current.", question: "Ai cần cập nhật hồ sơ thiết bị?", choices: ["Khách hàng", "Quản lý bộ phận", "Nhân viên bán hàng", "Nhà cung cấp"], answer: 1, explanation: "Department managers should make sure all equipment records are current." },
  { text: "For immediate assistance with technical issues, contact the help desk at extension 315. The help desk operates from 8 a.m. to 6 p.m. on weekdays.", question: "Khi nào có thể gọi help desk?", choices: ["Cả cuối tuần", "Từ 8 giờ đến 18 giờ ngày thường", "Chỉ buổi tối", "24 giờ mỗi ngày"], answer: 1, explanation: "Help desk operates from 8 a.m. to 6 p.m. on weekdays." },
  { text: "Applicants for the regional sales position should submit a resume and two professional references through the company website by April 3.", question: "Ứng viên cần nộp bao nhiêu người tham khảo chuyên môn?", choices: ["Một", "Hai", "Ba", "Không cần"], answer: 1, explanation: "Thông báo yêu cầu two professional references." },
);
