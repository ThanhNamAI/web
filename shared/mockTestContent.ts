// Original workplace-English practice items. Do not treat as ETS materials.
export type MockQuestion = { id: string; part: 1 | 2 | 3 | 4 | 5 | 6 | 7; skill: "listening" | "reading"; prompt: string; choices: string[]; answer: number; transcript?: string; passage?: string; contextLabel: string; };

export const mockQuestions: MockQuestion[] = [
  {
    "id": "full-p1-01",
    "part": 1,
    "skill": "listening",
    "contextLabel": "Part 1 · Photographs",
    "prompt": "Chọn câu mô tả đúng hình minh họa bối cảnh công việc.",
    "choices": [
      "A vendor is leaving the warehouse.",
      "The delivery schedule is being delivered outdoors.",
      "A vendor is reviewing a delivery schedule in the warehouse.",
      "Several visitors are waiting near the warehouse."
    ],
    "answer": 2,
    "transcript": "A vendor is reviewing a delivery schedule in the warehouse."
  },
  {
    "id": "full-p1-02",
    "part": 1,
    "skill": "listening",
    "contextLabel": "Part 1 · Photographs",
    "prompt": "Chọn câu mô tả đúng hình minh họa bối cảnh công việc.",
    "choices": [
      "A client is reviewing a contract revision in the legal department.",
      "The contract revision is being delivered outdoors.",
      "Several visitors are waiting near the legal department.",
      "A client is leaving the legal department."
    ],
    "answer": 0,
    "transcript": "A client is reviewing a contract revision in the legal department."
  },
  {
    "id": "full-p1-03",
    "part": 1,
    "skill": "listening",
    "contextLabel": "Part 1 · Photographs",
    "prompt": "Chọn câu mô tả đúng hình minh họa bối cảnh công việc.",
    "choices": [
      "A manager is leaving the finance office.",
      "A manager is reviewing a budget report in the finance office.",
      "Several visitors are waiting near the finance office.",
      "The budget report is being delivered outdoors."
    ],
    "answer": 1,
    "transcript": "A manager is reviewing a budget report in the finance office."
  },
  {
    "id": "full-p1-04",
    "part": 1,
    "skill": "listening",
    "contextLabel": "Part 1 · Photographs",
    "prompt": "Chọn câu mô tả đúng hình minh họa bối cảnh công việc.",
    "choices": [
      "A assistant is leaving the conference room.",
      "The meeting agenda is being delivered outdoors.",
      "A assistant is reviewing a meeting agenda in the conference room.",
      "Several visitors are waiting near the conference room."
    ],
    "answer": 2,
    "transcript": "A assistant is reviewing a meeting agenda in the conference room."
  },
  {
    "id": "full-p1-05",
    "part": 1,
    "skill": "listening",
    "contextLabel": "Part 1 · Photographs",
    "prompt": "Chọn câu mô tả đúng hình minh họa bối cảnh công việc.",
    "choices": [
      "A engineer is reviewing a software update in the support desk.",
      "A engineer is leaving the support desk.",
      "Several visitors are waiting near the support desk.",
      "The software update is being delivered outdoors."
    ],
    "answer": 0,
    "transcript": "A engineer is reviewing a software update in the support desk."
  },
  {
    "id": "full-p1-06",
    "part": 1,
    "skill": "listening",
    "contextLabel": "Part 1 · Photographs",
    "prompt": "Chọn câu mô tả đúng hình minh họa bối cảnh công việc.",
    "choices": [
      "The interview timetable is being delivered outdoors.",
      "A recruiter is reviewing a interview timetable in the human resources office.",
      "Several visitors are waiting near the human resources office.",
      "A recruiter is leaving the human resources office."
    ],
    "answer": 1,
    "transcript": "A recruiter is reviewing a interview timetable in the human resources office."
  },
  {
    "id": "full-p2-01",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "It was delivered yesterday.",
      "For the monthly report.",
      "To the warehouse.",
      "At the front entrance."
    ],
    "answer": 2,
    "transcript": "Where should I send the delivery schedule?"
  },
  {
    "id": "full-p2-02",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "It was delivered yesterday.",
      "For the monthly report.",
      "Before the afternoon meeting.",
      "At the front entrance."
    ],
    "answer": 2,
    "transcript": "When will the client review the contract revision?"
  },
  {
    "id": "full-p2-03",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "At the front entrance.",
      "The manager is.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 1,
    "transcript": "Who is handling the budget report?"
  },
  {
    "id": "full-p2-04",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "At the front entrance.",
      "To the conference room.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 1,
    "transcript": "Where should I send the meeting agenda?"
  },
  {
    "id": "full-p2-05",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "It was delivered yesterday.",
      "For the monthly report.",
      "Before the afternoon meeting.",
      "At the front entrance."
    ],
    "answer": 2,
    "transcript": "When will the engineer review the software update?"
  },
  {
    "id": "full-p2-06",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "It was delivered yesterday.",
      "For the monthly report.",
      "The recruiter is.",
      "At the front entrance."
    ],
    "answer": 2,
    "transcript": "Who is handling the interview timetable?"
  },
  {
    "id": "full-p2-07",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "To the production floor.",
      "At the front entrance.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 0,
    "transcript": "Where should I send the safety inspection?"
  },
  {
    "id": "full-p2-08",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "It was delivered yesterday.",
      "For the monthly report.",
      "Before the afternoon meeting.",
      "At the front entrance."
    ],
    "answer": 2,
    "transcript": "When will the coordinator review the travel itinerary?"
  },
  {
    "id": "full-p2-09",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "The accountant is.",
      "At the front entrance.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 0,
    "transcript": "Who is handling the expense claim?"
  },
  {
    "id": "full-p2-10",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "To the service center.",
      "At the front entrance.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 0,
    "transcript": "Where should I send the maintenance request?"
  },
  {
    "id": "full-p2-11",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "It was delivered yesterday.",
      "For the monthly report.",
      "Before the afternoon meeting.",
      "At the front entrance."
    ],
    "answer": 2,
    "transcript": "When will the director review the sales proposal?"
  },
  {
    "id": "full-p2-12",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "The designer is.",
      "At the front entrance.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 0,
    "transcript": "Who is handling the marketing campaign?"
  },
  {
    "id": "full-p2-13",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "At the front entrance.",
      "To the call center.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 1,
    "transcript": "Where should I send the customer inquiry?"
  },
  {
    "id": "full-p2-14",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "It was delivered yesterday.",
      "For the monthly report.",
      "Before the afternoon meeting.",
      "At the front entrance."
    ],
    "answer": 2,
    "transcript": "When will the driver review the freight shipment?"
  },
  {
    "id": "full-p2-15",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "At the front entrance.",
      "The trainer is.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 1,
    "transcript": "Who is handling the orientation session?"
  },
  {
    "id": "full-p2-16",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "At the front entrance.",
      "To the planning office.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 1,
    "transcript": "Where should I send the quarterly forecast?"
  },
  {
    "id": "full-p2-17",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "It was delivered yesterday.",
      "For the monthly report.",
      "Before the afternoon meeting.",
      "At the front entrance."
    ],
    "answer": 2,
    "transcript": "When will the editor review the company newsletter?"
  },
  {
    "id": "full-p2-18",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "It was delivered yesterday.",
      "For the monthly report.",
      "The buyer is.",
      "At the front entrance."
    ],
    "answer": 2,
    "transcript": "Who is handling the purchase order?"
  },
  {
    "id": "full-p2-19",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "At the front entrance.",
      "To the client site.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 1,
    "transcript": "Where should I send the project milestone?"
  },
  {
    "id": "full-p2-20",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "It was delivered yesterday.",
      "For the monthly report.",
      "Before the afternoon meeting.",
      "At the front entrance."
    ],
    "answer": 2,
    "transcript": "When will the auditor review the compliance review?"
  },
  {
    "id": "full-p2-21",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "The vendor is.",
      "At the front entrance.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 0,
    "transcript": "Who is handling the delivery schedule?"
  },
  {
    "id": "full-p2-22",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "To the legal department.",
      "At the front entrance.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 0,
    "transcript": "Where should I send the contract revision?"
  },
  {
    "id": "full-p2-23",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "It was delivered yesterday.",
      "For the monthly report.",
      "Before the afternoon meeting.",
      "At the front entrance."
    ],
    "answer": 2,
    "transcript": "When will the manager review the budget report?"
  },
  {
    "id": "full-p2-24",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "It was delivered yesterday.",
      "For the monthly report.",
      "The assistant is.",
      "At the front entrance."
    ],
    "answer": 2,
    "transcript": "Who is handling the meeting agenda?"
  },
  {
    "id": "full-p2-25",
    "part": 2,
    "skill": "listening",
    "contextLabel": "Part 2 · Question–Response",
    "prompt": "Nghe câu hỏi và chọn phản hồi phù hợp.",
    "choices": [
      "To the support desk.",
      "At the front entrance.",
      "It was delivered yesterday.",
      "For the monthly report."
    ],
    "answer": 0,
    "transcript": "Where should I send the software update?"
  },
  {
    "id": "full-p3-01",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "delivery schedule cần được hoàn tất.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The delivery schedule needs to be finalized before Friday. Man: I will ask the vendor at the warehouse to review it this morning."
  },
  {
    "id": "full-p3-02",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Liên hệ client để xem xét.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The contract revision needs to be finalized before Friday. Man: I will ask the client at the legal department to review it this morning."
  },
  {
    "id": "full-p3-03",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The budget report needs to be finalized before Friday. Man: I will ask the manager at the finance office to review it this morning."
  },
  {
    "id": "full-p3-04",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác.",
      "meeting agenda cần được hoàn tất.",
      "Chuyển văn phòng ngay hôm nay."
    ],
    "answer": 2,
    "transcript": "Woman: The meeting agenda needs to be finalized before Friday. Man: I will ask the assistant at the conference room to review it this morning."
  },
  {
    "id": "full-p3-05",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Liên hệ engineer để xem xét.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The software update needs to be finalized before Friday. Man: I will ask the engineer at the support desk to review it this morning."
  },
  {
    "id": "full-p3-06",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The interview timetable needs to be finalized before Friday. Man: I will ask the recruiter at the human resources office to review it this morning."
  },
  {
    "id": "full-p3-07",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "safety inspection cần được hoàn tất.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The safety inspection needs to be finalized before Friday. Man: I will ask the supervisor at the production floor to review it this morning."
  },
  {
    "id": "full-p3-08",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Chuyển văn phòng ngay hôm nay.",
      "Liên hệ coordinator để xem xét.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 1,
    "transcript": "Woman: The travel itinerary needs to be finalized before Friday. Man: I will ask the coordinator at the airport terminal to review it this morning."
  },
  {
    "id": "full-p3-09",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The expense claim needs to be finalized before Friday. Man: I will ask the accountant at the accounts payable to review it this morning."
  },
  {
    "id": "full-p3-10",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "maintenance request cần được hoàn tất.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The maintenance request needs to be finalized before Friday. Man: I will ask the technician at the service center to review it this morning."
  },
  {
    "id": "full-p3-11",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Liên hệ director để xem xét.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The sales proposal needs to be finalized before Friday. Man: I will ask the director at the boardroom to review it this morning."
  },
  {
    "id": "full-p3-12",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The marketing campaign needs to be finalized before Friday. Man: I will ask the designer at the creative studio to review it this morning."
  },
  {
    "id": "full-p3-13",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "Chuyển văn phòng ngay hôm nay.",
      "customer inquiry cần được hoàn tất.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 1,
    "transcript": "Woman: The customer inquiry needs to be finalized before Friday. Man: I will ask the agent at the call center to review it this morning."
  },
  {
    "id": "full-p3-14",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Liên hệ driver để xem xét.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The freight shipment needs to be finalized before Friday. Man: I will ask the driver at the loading dock to review it this morning."
  },
  {
    "id": "full-p3-15",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The orientation session needs to be finalized before Friday. Man: I will ask the trainer at the training room to review it this morning."
  },
  {
    "id": "full-p3-16",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác.",
      "quarterly forecast cần được hoàn tất.",
      "Chuyển văn phòng ngay hôm nay."
    ],
    "answer": 2,
    "transcript": "Woman: The quarterly forecast needs to be finalized before Friday. Man: I will ask the analyst at the planning office to review it this morning."
  },
  {
    "id": "full-p3-17",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Liên hệ editor để xem xét.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The company newsletter needs to be finalized before Friday. Man: I will ask the editor at the communications team to review it this morning."
  },
  {
    "id": "full-p3-18",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The purchase order needs to be finalized before Friday. Man: I will ask the buyer at the procurement office to review it this morning."
  },
  {
    "id": "full-p3-19",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "project milestone cần được hoàn tất.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The project milestone needs to be finalized before Friday. Man: I will ask the consultant at the client site to review it this morning."
  },
  {
    "id": "full-p3-20",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Chuyển văn phòng ngay hôm nay.",
      "Liên hệ auditor để xem xét.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 1,
    "transcript": "Woman: The compliance review needs to be finalized before Friday. Man: I will ask the auditor at the regional office to review it this morning."
  },
  {
    "id": "full-p3-21",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The delivery schedule needs to be finalized before Friday. Man: I will ask the vendor at the warehouse to review it this morning."
  },
  {
    "id": "full-p3-22",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "contract revision cần được hoàn tất.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The contract revision needs to be finalized before Friday. Man: I will ask the client at the legal department to review it this morning."
  },
  {
    "id": "full-p3-23",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Chuyển văn phòng ngay hôm nay.",
      "Liên hệ manager để xem xét.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 1,
    "transcript": "Woman: The budget report needs to be finalized before Friday. Man: I will ask the manager at the finance office to review it this morning."
  },
  {
    "id": "full-p3-24",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The meeting agenda needs to be finalized before Friday. Man: I will ask the assistant at the conference room to review it this morning."
  },
  {
    "id": "full-p3-25",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "software update cần được hoàn tất.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The software update needs to be finalized before Friday. Man: I will ask the engineer at the support desk to review it this morning."
  },
  {
    "id": "full-p3-26",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác.",
      "Liên hệ recruiter để xem xét.",
      "Chuyển văn phòng ngay hôm nay."
    ],
    "answer": 2,
    "transcript": "Woman: The interview timetable needs to be finalized before Friday. Man: I will ask the recruiter at the human resources office to review it this morning."
  },
  {
    "id": "full-p3-27",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The safety inspection needs to be finalized before Friday. Man: I will ask the supervisor at the production floor to review it this morning."
  },
  {
    "id": "full-p3-28",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "Chuyển văn phòng ngay hôm nay.",
      "travel itinerary cần được hoàn tất.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 1,
    "transcript": "Woman: The travel itinerary needs to be finalized before Friday. Man: I will ask the coordinator at the airport terminal to review it this morning."
  },
  {
    "id": "full-p3-29",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Liên hệ accountant để xem xét.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The expense claim needs to be finalized before Friday. Man: I will ask the accountant at the accounts payable to review it this morning."
  },
  {
    "id": "full-p3-30",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The maintenance request needs to be finalized before Friday. Man: I will ask the technician at the service center to review it this morning."
  },
  {
    "id": "full-p3-31",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác.",
      "sales proposal cần được hoàn tất.",
      "Chuyển văn phòng ngay hôm nay."
    ],
    "answer": 2,
    "transcript": "Woman: The sales proposal needs to be finalized before Friday. Man: I will ask the director at the boardroom to review it this morning."
  },
  {
    "id": "full-p3-32",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Liên hệ designer để xem xét.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The marketing campaign needs to be finalized before Friday. Man: I will ask the designer at the creative studio to review it this morning."
  },
  {
    "id": "full-p3-33",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The customer inquiry needs to be finalized before Friday. Man: I will ask the agent at the call center to review it this morning."
  },
  {
    "id": "full-p3-34",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "Chuyển văn phòng ngay hôm nay.",
      "freight shipment cần được hoàn tất.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 1,
    "transcript": "Woman: The freight shipment needs to be finalized before Friday. Man: I will ask the driver at the loading dock to review it this morning."
  },
  {
    "id": "full-p3-35",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Chuyển văn phòng ngay hôm nay.",
      "Liên hệ trainer để xem xét.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 1,
    "transcript": "Woman: The orientation session needs to be finalized before Friday. Man: I will ask the trainer at the training room to review it this morning."
  },
  {
    "id": "full-p3-36",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The quarterly forecast needs to be finalized before Friday. Man: I will ask the analyst at the planning office to review it this morning."
  },
  {
    "id": "full-p3-37",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Vấn đề chính trong hội thoại là gì?",
    "choices": [
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác.",
      "company newsletter cần được hoàn tất.",
      "Chuyển văn phòng ngay hôm nay."
    ],
    "answer": 2,
    "transcript": "Woman: The company newsletter needs to be finalized before Friday. Man: I will ask the editor at the communications team to review it this morning."
  },
  {
    "id": "full-p3-38",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Người nam sẽ làm gì?",
    "choices": [
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác.",
      "Liên hệ buyer để xem xét.",
      "Chuyển văn phòng ngay hôm nay."
    ],
    "answer": 2,
    "transcript": "Woman: The purchase order needs to be finalized before Friday. Man: I will ask the buyer at the procurement office to review it this morning."
  },
  {
    "id": "full-p3-39",
    "part": 3,
    "skill": "listening",
    "contextLabel": "Part 3 · Conversations",
    "prompt": "Khi nào việc cần được hoàn tất?",
    "choices": [
      "Trước thứ Sáu.",
      "Chuyển văn phòng ngay hôm nay.",
      "Buổi họp đã bị hủy.",
      "Đặt vé cho chuyến công tác."
    ],
    "answer": 0,
    "transcript": "Woman: The project milestone needs to be finalized before Friday. Man: I will ask the consultant at the client site to review it this morning."
  },
  {
    "id": "full-p4-01",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Thông báo này dành cho ai?",
    "choices": [
      "Nhân viên liên quan đến delivery schedule.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 0,
    "transcript": "Attention employees: The delivery schedule workshop will take place in the warehouse at 10 a.m. Please notify the vendor if you cannot attend."
  },
  {
    "id": "full-p4-02",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Sự kiện diễn ra ở đâu?",
    "choices": [
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Tại legal department.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 2,
    "transcript": "Attention employees: The contract revision workshop will take place in the legal department at 10 a.m. Please notify the client if you cannot attend."
  },
  {
    "id": "full-p4-03",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Người nghe cần làm gì nếu vắng mặt?",
    "choices": [
      "Đến sân bay lúc mười giờ.",
      "Báo cho manager nếu không tham dự được.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng."
    ],
    "answer": 1,
    "transcript": "Attention employees: The budget report workshop will take place in the finance office at 10 a.m. Please notify the manager if you cannot attend."
  },
  {
    "id": "full-p4-04",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Thông báo này dành cho ai?",
    "choices": [
      "Đến sân bay lúc mười giờ.",
      "Nhân viên liên quan đến meeting agenda.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng."
    ],
    "answer": 1,
    "transcript": "Attention employees: The meeting agenda workshop will take place in the conference room at 10 a.m. Please notify the assistant if you cannot attend."
  },
  {
    "id": "full-p4-05",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Sự kiện diễn ra ở đâu?",
    "choices": [
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Tại support desk.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 2,
    "transcript": "Attention employees: The software update workshop will take place in the support desk at 10 a.m. Please notify the engineer if you cannot attend."
  },
  {
    "id": "full-p4-06",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Người nghe cần làm gì nếu vắng mặt?",
    "choices": [
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Báo cho recruiter nếu không tham dự được.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 2,
    "transcript": "Attention employees: The interview timetable workshop will take place in the human resources office at 10 a.m. Please notify the recruiter if you cannot attend."
  },
  {
    "id": "full-p4-07",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Thông báo này dành cho ai?",
    "choices": [
      "Nhân viên liên quan đến safety inspection.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 0,
    "transcript": "Attention employees: The safety inspection workshop will take place in the production floor at 10 a.m. Please notify the supervisor if you cannot attend."
  },
  {
    "id": "full-p4-08",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Sự kiện diễn ra ở đâu?",
    "choices": [
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Tại airport terminal.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 2,
    "transcript": "Attention employees: The travel itinerary workshop will take place in the airport terminal at 10 a.m. Please notify the coordinator if you cannot attend."
  },
  {
    "id": "full-p4-09",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Người nghe cần làm gì nếu vắng mặt?",
    "choices": [
      "Báo cho accountant nếu không tham dự được.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 0,
    "transcript": "Attention employees: The expense claim workshop will take place in the accounts payable at 10 a.m. Please notify the accountant if you cannot attend."
  },
  {
    "id": "full-p4-10",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Thông báo này dành cho ai?",
    "choices": [
      "Nhân viên liên quan đến maintenance request.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ.",
      "Nộp hóa đơn vào cuối tháng."
    ],
    "answer": 0,
    "transcript": "Attention employees: The maintenance request workshop will take place in the service center at 10 a.m. Please notify the technician if you cannot attend."
  },
  {
    "id": "full-p4-11",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Sự kiện diễn ra ở đâu?",
    "choices": [
      "Tại boardroom.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 0,
    "transcript": "Attention employees: The sales proposal workshop will take place in the boardroom at 10 a.m. Please notify the director if you cannot attend."
  },
  {
    "id": "full-p4-12",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Người nghe cần làm gì nếu vắng mặt?",
    "choices": [
      "Báo cho designer nếu không tham dự được.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ.",
      "Nộp hóa đơn vào cuối tháng."
    ],
    "answer": 0,
    "transcript": "Attention employees: The marketing campaign workshop will take place in the creative studio at 10 a.m. Please notify the designer if you cannot attend."
  },
  {
    "id": "full-p4-13",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Thông báo này dành cho ai?",
    "choices": [
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Nhân viên liên quan đến customer inquiry.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 2,
    "transcript": "Attention employees: The customer inquiry workshop will take place in the call center at 10 a.m. Please notify the agent if you cannot attend."
  },
  {
    "id": "full-p4-14",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Sự kiện diễn ra ở đâu?",
    "choices": [
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Tại loading dock.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 2,
    "transcript": "Attention employees: The freight shipment workshop will take place in the loading dock at 10 a.m. Please notify the driver if you cannot attend."
  },
  {
    "id": "full-p4-15",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Người nghe cần làm gì nếu vắng mặt?",
    "choices": [
      "Đến sân bay lúc mười giờ.",
      "Báo cho trainer nếu không tham dự được.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng."
    ],
    "answer": 1,
    "transcript": "Attention employees: The orientation session workshop will take place in the training room at 10 a.m. Please notify the trainer if you cannot attend."
  },
  {
    "id": "full-p4-16",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Thông báo này dành cho ai?",
    "choices": [
      "Đến sân bay lúc mười giờ.",
      "Nhân viên liên quan đến quarterly forecast.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng."
    ],
    "answer": 1,
    "transcript": "Attention employees: The quarterly forecast workshop will take place in the planning office at 10 a.m. Please notify the analyst if you cannot attend."
  },
  {
    "id": "full-p4-17",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Sự kiện diễn ra ở đâu?",
    "choices": [
      "Tại communications team.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ.",
      "Nộp hóa đơn vào cuối tháng."
    ],
    "answer": 0,
    "transcript": "Attention employees: The company newsletter workshop will take place in the communications team at 10 a.m. Please notify the editor if you cannot attend."
  },
  {
    "id": "full-p4-18",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Người nghe cần làm gì nếu vắng mặt?",
    "choices": [
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Báo cho buyer nếu không tham dự được.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 2,
    "transcript": "Attention employees: The purchase order workshop will take place in the procurement office at 10 a.m. Please notify the buyer if you cannot attend."
  },
  {
    "id": "full-p4-19",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Thông báo này dành cho ai?",
    "choices": [
      "Nhân viên liên quan đến project milestone.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 0,
    "transcript": "Attention employees: The project milestone workshop will take place in the client site at 10 a.m. Please notify the consultant if you cannot attend."
  },
  {
    "id": "full-p4-20",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Sự kiện diễn ra ở đâu?",
    "choices": [
      "Tại regional office.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ.",
      "Nộp hóa đơn vào cuối tháng."
    ],
    "answer": 0,
    "transcript": "Attention employees: The compliance review workshop will take place in the regional office at 10 a.m. Please notify the auditor if you cannot attend."
  },
  {
    "id": "full-p4-21",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Người nghe cần làm gì nếu vắng mặt?",
    "choices": [
      "Báo cho vendor nếu không tham dự được.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 0,
    "transcript": "Attention employees: The delivery schedule workshop will take place in the warehouse at 10 a.m. Please notify the vendor if you cannot attend."
  },
  {
    "id": "full-p4-22",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Thông báo này dành cho ai?",
    "choices": [
      "Nhân viên liên quan đến contract revision.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 0,
    "transcript": "Attention employees: The contract revision workshop will take place in the legal department at 10 a.m. Please notify the client if you cannot attend."
  },
  {
    "id": "full-p4-23",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Sự kiện diễn ra ở đâu?",
    "choices": [
      "Đến sân bay lúc mười giờ.",
      "Tại finance office.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng."
    ],
    "answer": 1,
    "transcript": "Attention employees: The budget report workshop will take place in the finance office at 10 a.m. Please notify the manager if you cannot attend."
  },
  {
    "id": "full-p4-24",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Người nghe cần làm gì nếu vắng mặt?",
    "choices": [
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Báo cho assistant nếu không tham dự được.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 2,
    "transcript": "Attention employees: The meeting agenda workshop will take place in the conference room at 10 a.m. Please notify the assistant if you cannot attend."
  },
  {
    "id": "full-p4-25",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Thông báo này dành cho ai?",
    "choices": [
      "Nhân viên liên quan đến software update.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ.",
      "Nộp hóa đơn vào cuối tháng."
    ],
    "answer": 0,
    "transcript": "Attention employees: The software update workshop will take place in the support desk at 10 a.m. Please notify the engineer if you cannot attend."
  },
  {
    "id": "full-p4-26",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Sự kiện diễn ra ở đâu?",
    "choices": [
      "Đến sân bay lúc mười giờ.",
      "Tại human resources office.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng."
    ],
    "answer": 1,
    "transcript": "Attention employees: The interview timetable workshop will take place in the human resources office at 10 a.m. Please notify the recruiter if you cannot attend."
  },
  {
    "id": "full-p4-27",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Người nghe cần làm gì nếu vắng mặt?",
    "choices": [
      "Báo cho supervisor nếu không tham dự được.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 0,
    "transcript": "Attention employees: The safety inspection workshop will take place in the production floor at 10 a.m. Please notify the supervisor if you cannot attend."
  },
  {
    "id": "full-p4-28",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Thông báo này dành cho ai?",
    "choices": [
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Nhân viên liên quan đến travel itinerary.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 2,
    "transcript": "Attention employees: The travel itinerary workshop will take place in the airport terminal at 10 a.m. Please notify the coordinator if you cannot attend."
  },
  {
    "id": "full-p4-29",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Sự kiện diễn ra ở đâu?",
    "choices": [
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Tại accounts payable.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 2,
    "transcript": "Attention employees: The expense claim workshop will take place in the accounts payable at 10 a.m. Please notify the accountant if you cannot attend."
  },
  {
    "id": "full-p4-30",
    "part": 4,
    "skill": "listening",
    "contextLabel": "Part 4 · Talks",
    "prompt": "Người nghe cần làm gì nếu vắng mặt?",
    "choices": [
      "Báo cho technician nếu không tham dự được.",
      "Nộp hóa đơn vào cuối tháng.",
      "Gửi tài liệu cho khách hàng.",
      "Đến sân bay lúc mười giờ."
    ],
    "answer": 0,
    "transcript": "Attention employees: The maintenance request workshop will take place in the service center at 10 a.m. Please notify the technician if you cannot attend."
  },
  {
    "id": "full-p5-01",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The delivery schedule _____ by the vendor yesterday.",
    "choices": [
      "was approved",
      "has approving",
      "will approval",
      "approve"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-02",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "Please submit the contract revision _____ Friday afternoon.",
    "choices": [
      "by",
      "at",
      "during",
      "from"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-03",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The manager responded _____ to the request.",
    "choices": [
      "promptly",
      "prompt",
      "promptness",
      "more prompt"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-04",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The meeting agenda _____ by the assistant yesterday.",
    "choices": [
      "was approved",
      "has approving",
      "will approval",
      "approve"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-05",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "Please submit the software update _____ Friday afternoon.",
    "choices": [
      "by",
      "at",
      "during",
      "from"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-06",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The recruiter responded _____ to the request.",
    "choices": [
      "promptly",
      "prompt",
      "promptness",
      "more prompt"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-07",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The safety inspection _____ by the supervisor yesterday.",
    "choices": [
      "was approved",
      "has approving",
      "will approval",
      "approve"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-08",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "Please submit the travel itinerary _____ Friday afternoon.",
    "choices": [
      "by",
      "at",
      "during",
      "from"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-09",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The accountant responded _____ to the request.",
    "choices": [
      "promptly",
      "prompt",
      "promptness",
      "more prompt"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-10",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The maintenance request _____ by the technician yesterday.",
    "choices": [
      "was approved",
      "has approving",
      "will approval",
      "approve"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-11",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "Please submit the sales proposal _____ Friday afternoon.",
    "choices": [
      "by",
      "at",
      "during",
      "from"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-12",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The designer responded _____ to the request.",
    "choices": [
      "promptly",
      "prompt",
      "promptness",
      "more prompt"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-13",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The customer inquiry _____ by the agent yesterday.",
    "choices": [
      "was approved",
      "has approving",
      "will approval",
      "approve"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-14",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "Please submit the freight shipment _____ Friday afternoon.",
    "choices": [
      "by",
      "at",
      "during",
      "from"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-15",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The trainer responded _____ to the request.",
    "choices": [
      "promptly",
      "prompt",
      "promptness",
      "more prompt"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-16",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The quarterly forecast _____ by the analyst yesterday.",
    "choices": [
      "was approved",
      "has approving",
      "will approval",
      "approve"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-17",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "Please submit the company newsletter _____ Friday afternoon.",
    "choices": [
      "by",
      "at",
      "during",
      "from"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-18",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The buyer responded _____ to the request.",
    "choices": [
      "promptly",
      "prompt",
      "promptness",
      "more prompt"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-19",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The project milestone _____ by the consultant yesterday.",
    "choices": [
      "was approved",
      "has approving",
      "will approval",
      "approve"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-20",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "Please submit the compliance review _____ Friday afternoon.",
    "choices": [
      "by",
      "at",
      "during",
      "from"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-21",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The vendor responded _____ to the request.",
    "choices": [
      "promptly",
      "prompt",
      "promptness",
      "more prompt"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-22",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The contract revision _____ by the client yesterday.",
    "choices": [
      "was approved",
      "has approving",
      "will approval",
      "approve"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-23",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "Please submit the budget report _____ Friday afternoon.",
    "choices": [
      "by",
      "at",
      "during",
      "from"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-24",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The assistant responded _____ to the request.",
    "choices": [
      "promptly",
      "prompt",
      "promptness",
      "more prompt"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-25",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The software update _____ by the engineer yesterday.",
    "choices": [
      "was approved",
      "has approving",
      "will approval",
      "approve"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-26",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "Please submit the interview timetable _____ Friday afternoon.",
    "choices": [
      "by",
      "at",
      "during",
      "from"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-27",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The supervisor responded _____ to the request.",
    "choices": [
      "promptly",
      "prompt",
      "promptness",
      "more prompt"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-28",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The travel itinerary _____ by the coordinator yesterday.",
    "choices": [
      "was approved",
      "has approving",
      "will approval",
      "approve"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-29",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "Please submit the expense claim _____ Friday afternoon.",
    "choices": [
      "by",
      "at",
      "during",
      "from"
    ],
    "answer": 0
  },
  {
    "id": "full-p5-30",
    "part": 5,
    "skill": "reading",
    "contextLabel": "Part 5 · Incomplete Sentences",
    "prompt": "The technician responded _____ to the request.",
    "choices": [
      "promptly",
      "prompt",
      "promptness",
      "more prompt"
    ],
    "answer": 0
  },
  {
    "id": "full-p6-01",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Từ nào phù hợp để hoàn thành: The review has been _____.",
    "choices": [
      "scheduled",
      "cancelled permanently",
      "after the weekend",
      "a new customer"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: delivery schedule\n\nThe vendor has scheduled a review at the warehouse on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-02",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Cuộc xem xét diễn ra ở đâu?",
    "choices": [
      "cancelled permanently",
      "after the weekend",
      "a new customer",
      "at the legal department"
    ],
    "answer": 3,
    "passage": "To: All staff\nSubject: contract revision\n\nThe client has scheduled a review at the legal department on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-03",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Người tham gia cần mang gì?",
    "choices": [
      "required documents",
      "a new customer",
      "cancelled permanently",
      "after the weekend"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: budget report\n\nThe manager has scheduled a review at the finance office on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-04",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Người tham gia nên đến khi nào?",
    "choices": [
      "arrive ten minutes early",
      "cancelled permanently",
      "after the weekend",
      "a new customer"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: meeting agenda\n\nThe assistant has scheduled a review at the conference room on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-05",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Từ nào phù hợp để hoàn thành: The review has been _____.",
    "choices": [
      "scheduled",
      "cancelled permanently",
      "after the weekend",
      "a new customer"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: software update\n\nThe engineer has scheduled a review at the support desk on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-06",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Cuộc xem xét diễn ra ở đâu?",
    "choices": [
      "at the human resources office",
      "cancelled permanently",
      "after the weekend",
      "a new customer"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: interview timetable\n\nThe recruiter has scheduled a review at the human resources office on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-07",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Người tham gia cần mang gì?",
    "choices": [
      "required documents",
      "a new customer",
      "cancelled permanently",
      "after the weekend"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: safety inspection\n\nThe supervisor has scheduled a review at the production floor on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-08",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Người tham gia nên đến khi nào?",
    "choices": [
      "arrive ten minutes early",
      "cancelled permanently",
      "after the weekend",
      "a new customer"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: travel itinerary\n\nThe coordinator has scheduled a review at the airport terminal on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-09",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Từ nào phù hợp để hoàn thành: The review has been _____.",
    "choices": [
      "scheduled",
      "cancelled permanently",
      "after the weekend",
      "a new customer"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: expense claim\n\nThe accountant has scheduled a review at the accounts payable on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-10",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Cuộc xem xét diễn ra ở đâu?",
    "choices": [
      "at the service center",
      "cancelled permanently",
      "after the weekend",
      "a new customer"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: maintenance request\n\nThe technician has scheduled a review at the service center on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-11",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Người tham gia cần mang gì?",
    "choices": [
      "required documents",
      "a new customer",
      "cancelled permanently",
      "after the weekend"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: sales proposal\n\nThe director has scheduled a review at the boardroom on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-12",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Người tham gia nên đến khi nào?",
    "choices": [
      "arrive ten minutes early",
      "cancelled permanently",
      "after the weekend",
      "a new customer"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: marketing campaign\n\nThe designer has scheduled a review at the creative studio on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-13",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Từ nào phù hợp để hoàn thành: The review has been _____.",
    "choices": [
      "scheduled",
      "cancelled permanently",
      "after the weekend",
      "a new customer"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: customer inquiry\n\nThe agent has scheduled a review at the call center on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-14",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Cuộc xem xét diễn ra ở đâu?",
    "choices": [
      "cancelled permanently",
      "after the weekend",
      "a new customer",
      "at the loading dock"
    ],
    "answer": 3,
    "passage": "To: All staff\nSubject: freight shipment\n\nThe driver has scheduled a review at the loading dock on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-15",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Người tham gia cần mang gì?",
    "choices": [
      "required documents",
      "a new customer",
      "cancelled permanently",
      "after the weekend"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: orientation session\n\nThe trainer has scheduled a review at the training room on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p6-16",
    "part": 6,
    "skill": "reading",
    "contextLabel": "Part 6 · Text Completion",
    "prompt": "Người tham gia nên đến khi nào?",
    "choices": [
      "arrive ten minutes early",
      "cancelled permanently",
      "after the weekend",
      "a new customer"
    ],
    "answer": 0,
    "passage": "To: All staff\nSubject: quarterly forecast\n\nThe analyst has scheduled a review at the planning office on Thursday. Please bring the required documents and arrive ten minutes early."
  },
  {
    "id": "full-p7-01",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "delivery schedule sẽ có vào thứ Hai.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe vendor has confirmed that the delivery schedule will be available at the warehouse on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-02",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe client has confirmed that the contract revision will be available at the legal department on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-03",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Tại finance office.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 2,
    "passage": "Dear Team,\n\nThe manager has confirmed that the budget report will be available at the finance office on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-04",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "meeting agenda sẽ có vào thứ Hai.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe assistant has confirmed that the meeting agenda will be available at the conference room on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-05",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe engineer has confirmed that the software update will be available at the support desk on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-06",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Tại human resources office.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 2,
    "passage": "Dear Team,\n\nThe recruiter has confirmed that the interview timetable will be available at the human resources office on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-07",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "safety inspection sẽ có vào thứ Hai.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe supervisor has confirmed that the safety inspection will be available at the production floor on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-08",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe coordinator has confirmed that the travel itinerary will be available at the airport terminal on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-09",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Tại accounts payable.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe accountant has confirmed that the expense claim will be available at the accounts payable on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-10",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "maintenance request sẽ có vào thứ Hai.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp.",
      "Cuộc họp bị hoãn vô thời hạn."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe technician has confirmed that the maintenance request will be available at the service center on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-11",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe director has confirmed that the sales proposal will be available at the boardroom on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-12",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Tại creative studio.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe designer has confirmed that the marketing campaign will be available at the creative studio on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-13",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "customer inquiry sẽ có vào thứ Hai.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 2,
    "passage": "Dear Team,\n\nThe agent has confirmed that the customer inquiry will be available at the call center on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-14",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe driver has confirmed that the freight shipment will be available at the loading dock on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-15",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Tại training room.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp.",
      "Cuộc họp bị hoãn vô thời hạn."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe trainer has confirmed that the orientation session will be available at the training room on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-16",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "quarterly forecast sẽ có vào thứ Hai.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe analyst has confirmed that the quarterly forecast will be available at the planning office on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-17",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe editor has confirmed that the company newsletter will be available at the communications team on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-18",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Tại procurement office.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 2,
    "passage": "Dear Team,\n\nThe buyer has confirmed that the purchase order will be available at the procurement office on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-19",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "project milestone sẽ có vào thứ Hai.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe consultant has confirmed that the project milestone will be available at the client site on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-20",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe auditor has confirmed that the compliance review will be available at the regional office on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-21",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Tại warehouse.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp.",
      "Cuộc họp bị hoãn vô thời hạn."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe vendor has confirmed that the delivery schedule will be available at the warehouse on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-22",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "contract revision sẽ có vào thứ Hai.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe client has confirmed that the contract revision will be available at the legal department on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-23",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe manager has confirmed that the budget report will be available at the finance office on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-24",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Tại conference room.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe assistant has confirmed that the meeting agenda will be available at the conference room on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-25",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "software update sẽ có vào thứ Hai.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp.",
      "Cuộc họp bị hoãn vô thời hạn."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe engineer has confirmed that the software update will be available at the support desk on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-26",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe recruiter has confirmed that the interview timetable will be available at the human resources office on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-27",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Tại production floor.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe supervisor has confirmed that the safety inspection will be available at the production floor on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-28",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "travel itinerary sẽ có vào thứ Hai.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 2,
    "passage": "Dear Team,\n\nThe coordinator has confirmed that the travel itinerary will be available at the airport terminal on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-29",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe accountant has confirmed that the expense claim will be available at the accounts payable on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-30",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Tại service center.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 2,
    "passage": "Dear Team,\n\nThe technician has confirmed that the maintenance request will be available at the service center on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-31",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "sales proposal sẽ có vào thứ Hai.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe director has confirmed that the sales proposal will be available at the boardroom on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-32",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe designer has confirmed that the marketing campaign will be available at the creative studio on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-33",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Tại call center.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe agent has confirmed that the customer inquiry will be available at the call center on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-34",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "freight shipment sẽ có vào thứ Hai.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 2,
    "passage": "Dear Team,\n\nThe driver has confirmed that the freight shipment will be available at the loading dock on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-35",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe trainer has confirmed that the orientation session will be available at the training room on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-36",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Tại planning office.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe analyst has confirmed that the quarterly forecast will be available at the planning office on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-37",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "company newsletter sẽ có vào thứ Hai.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe editor has confirmed that the company newsletter will be available at the communications team on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-38",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe buyer has confirmed that the purchase order will be available at the procurement office on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-39",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Tại client site.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe consultant has confirmed that the project milestone will be available at the client site on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-40",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "compliance review sẽ có vào thứ Hai.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe auditor has confirmed that the compliance review will be available at the regional office on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-41",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe vendor has confirmed that the delivery schedule will be available at the warehouse on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-42",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Tại legal department.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe client has confirmed that the contract revision will be available at the legal department on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-43",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "budget report sẽ có vào thứ Hai.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe manager has confirmed that the budget report will be available at the finance office on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-44",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe assistant has confirmed that the meeting agenda will be available at the conference room on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-45",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Tại support desk.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe engineer has confirmed that the software update will be available at the support desk on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-46",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "interview timetable sẽ có vào thứ Hai.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp.",
      "Cuộc họp bị hoãn vô thời hạn."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe recruiter has confirmed that the interview timetable will be available at the human resources office on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-47",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe supervisor has confirmed that the safety inspection will be available at the production floor on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-48",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Tại airport terminal.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe coordinator has confirmed that the travel itinerary will be available at the airport terminal on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-49",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "expense claim sẽ có vào thứ Hai.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe accountant has confirmed that the expense claim will be available at the accounts payable on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-50",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe technician has confirmed that the maintenance request will be available at the service center on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-51",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Tại boardroom.",
      "Tất cả nhân viên phải đi công tác.",
      "Sản phẩm đã ngừng cung cấp.",
      "Cuộc họp bị hoãn vô thời hạn."
    ],
    "answer": 0,
    "passage": "Dear Team,\n\nThe director has confirmed that the sales proposal will be available at the boardroom on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-52",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Thông tin nào được xác nhận trong email?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "marketing campaign sẽ có vào thứ Hai.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe designer has confirmed that the marketing campaign will be available at the creative studio on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-53",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Khi nào bộ phận cần liên hệ nếu có yêu cầu khác?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Liên hệ project office trước thứ Sáu.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe agent has confirmed that the customer inquiry will be available at the call center on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  },
  {
    "id": "full-p7-54",
    "part": 7,
    "skill": "reading",
    "contextLabel": "Part 7 · Reading Comprehension",
    "prompt": "Nội dung sẽ có ở đâu?",
    "choices": [
      "Sản phẩm đã ngừng cung cấp.",
      "Tại loading dock.",
      "Cuộc họp bị hoãn vô thời hạn.",
      "Tất cả nhân viên phải đi công tác."
    ],
    "answer": 1,
    "passage": "Dear Team,\n\nThe driver has confirmed that the freight shipment will be available at the loading dock on Monday. Please contact the project office before Friday if your department needs a different arrangement.\n\nRegards,\nOperations"
  }
];

export const mockPartNames = ["Photographs","Question–Response","Conversations","Talks","Incomplete Sentences","Text Completion","Reading Comprehension"] as const;
export const mockTestBlueprint = { totalQuestions: 200, listeningQuestions: 100, readingQuestions: 100, partCounts: { 1: 6, 2: 25, 3: 39, 4: 30, 5: 30, 6: 16, 7: 54 } } as const;
