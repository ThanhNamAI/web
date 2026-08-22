// Tự động tạo từ tài liệu người dùng cung cấp và danh sách TOEIC bổ sung. Không chỉnh sửa trực tiếp.

export type VocabularyItem = {
  id: string;
  term: string;
  meaning: string;
  partOfSpeech: string;
  ipa: string;
  example: string;
  topic: string;
  source: string;
};

export const coreVocabulary: VocabularyItem[] = [
  {
    "id": "core-1",
    "term": "ability",
    "meaning": "năng lực, khả năng",
    "partOfSpeech": "n",
    "ipa": "/əˈbɪl.ə.t̬i/",
    "example": "The manager discussed the ability at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-2",
    "term": "abroad",
    "meaning": "ở nước ngoài",
    "partOfSpeech": "adv",
    "ipa": "/əˈbrɑːd/",
    "example": "The team will abroad the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-3",
    "term": "accept",
    "meaning": "chấp nhận, chấp thuận",
    "partOfSpeech": "v",
    "ipa": "/əkˈsept/",
    "example": "The team will accept the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-4",
    "term": "access",
    "meaning": "quyền truy cập, sự tiếp cận; truy cập",
    "partOfSpeech": "n, v",
    "ipa": "/ˈæk.ses/",
    "example": "The team will access the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-5",
    "term": "accessible",
    "meaning": "khả năng tiếp cận được",
    "partOfSpeech": "adj",
    "ipa": "/əkˈses.ə.bəl/",
    "example": "The company selected an accessible option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-6",
    "term": "accident",
    "meaning": "tai nạn, sự tình cờ",
    "partOfSpeech": "n",
    "ipa": "/ˈæk.sə.dənt/",
    "example": "The manager discussed the accident before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-7",
    "term": "accommodate",
    "meaning": "dàn xếp, hỗ trợ",
    "partOfSpeech": "v",
    "ipa": "/əˈkɑː.mə.deɪt/",
    "example": "The team will accommodate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-8",
    "term": "accommodation",
    "meaning": "chỗ ở, nơi ở; sự điều tiết, hòa giải",
    "partOfSpeech": "n",
    "ipa": "/əˌkɑː.məˈdeɪ.ʃən/",
    "example": "The manager discussed the accommodation before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-9",
    "term": "accomplish",
    "meaning": "hoàn thành, thực hiện",
    "partOfSpeech": "v",
    "ipa": "/əˈkɑːm.plɪʃ/",
    "example": "The team will accomplish the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-10",
    "term": "according (to)",
    "meaning": "theo như, dựa vào",
    "partOfSpeech": "prep",
    "ipa": "/əˈkɔːr.dɪŋ ˌtuː/",
    "example": "The report was prepared according (to) the company policy.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-11",
    "term": "accordingly",
    "meaning": "theo đó, vì vậy",
    "partOfSpeech": "adv",
    "ipa": "/əˈkɔːr.dɪŋ.li/",
    "example": "The team will accordingly the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-12",
    "term": "accounting",
    "meaning": "sự tính toán, thanh toán",
    "partOfSpeech": "n",
    "ipa": "/əˈkaʊn.t̬ɪŋ/",
    "example": "The manager discussed the accounting in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-13",
    "term": "accurate",
    "meaning": "đúng đắn, chính xác",
    "partOfSpeech": "adj",
    "ipa": "/ˈæk.jɚ.ət/",
    "example": "The company selected an accurate option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-14",
    "term": "achieve",
    "meaning": "đạt được, giành được",
    "partOfSpeech": "v",
    "ipa": "/əˈtʃiːv/",
    "example": "The team will achieve the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-15",
    "term": "acquire",
    "meaning": "thu nạp được, giành được",
    "partOfSpeech": "v",
    "ipa": "/əˈkwaɪɚ/",
    "example": "The team will acquire the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-16",
    "term": "act",
    "meaning": "hành động; thực hiện",
    "partOfSpeech": "n, v",
    "ipa": "/ækt/",
    "example": "The team will act the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-17",
    "term": "actually",
    "meaning": "thực sự, trên thực tế",
    "partOfSpeech": "adv",
    "ipa": "/ˈæk.tʃu.ə.li/",
    "example": "The team will actually the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-18",
    "term": "adapt",
    "meaning": "thích nghi, thích ứng",
    "partOfSpeech": "v",
    "ipa": "/əˈdæpt/",
    "example": "The team will adapt the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-19",
    "term": "adapter",
    "meaning": "thiết bị chuyển đổi, người điều chỉnh tác phẩm (để phù hợp hơn)",
    "partOfSpeech": "n",
    "ipa": "/əˈdæp.tɚ/",
    "example": "The manager discussed the adapter at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-20",
    "term": "additional",
    "meaning": "thêm vào, phụ thêm",
    "partOfSpeech": "adj",
    "ipa": "/əˈdɪʃ.ən.əl/",
    "example": "The company selected an additional option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-21",
    "term": "adjust",
    "meaning": "điều chỉnh",
    "partOfSpeech": "v",
    "ipa": "/əˈdʒʌst/",
    "example": "The team will adjust the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-22",
    "term": "adjustment",
    "meaning": "sự điều chỉnh, sự thay đổi",
    "partOfSpeech": "n",
    "ipa": "/əˈdʒʌst.mənt/",
    "example": "The manager discussed the adjustment before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-23",
    "term": "administration",
    "meaning": "sự quản lý, quản trị",
    "partOfSpeech": "n",
    "ipa": "/ədˌmɪn.əˈstreɪ.ʃən/",
    "example": "The manager discussed the administration at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-24",
    "term": "admire",
    "meaning": "ngưỡng mộ, thán phục",
    "partOfSpeech": "v",
    "ipa": "/ədˈmaɪr/",
    "example": "The team will admire the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-25",
    "term": "admit",
    "meaning": "thừa nhận; tiếp nhận",
    "partOfSpeech": "v",
    "ipa": "/ədˈmɪt/",
    "example": "The team will admit the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-26",
    "term": "admittance",
    "meaning": "sự thu nạp, đón nhận",
    "partOfSpeech": "n",
    "ipa": "/ədˈmɪt̬.əns/",
    "example": "The manager discussed the admittance before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-27",
    "term": "adopt",
    "meaning": "nhân nuôi làm theo, áp dụng",
    "partOfSpeech": "v",
    "ipa": "/əˈdɑːpt/",
    "example": "The team will adopt the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-28",
    "term": "advance",
    "meaning": "sự tiến lên; tiến lên phía trước",
    "partOfSpeech": "n, v",
    "ipa": "/ədˈvæns/",
    "example": "The team will advance the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-29",
    "term": "advanced",
    "meaning": "tiến bộ, cấp tiến",
    "partOfSpeech": "adj",
    "ipa": "/ədˈvænst/",
    "example": "The company selected an advanced option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-30",
    "term": "advantage",
    "meaning": "lợi thế",
    "partOfSpeech": "n",
    "ipa": "/ədˈvæn.t̬ɪdʒ/",
    "example": "The manager discussed the advantage in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-31",
    "term": "advantageous",
    "meaning": "có lợi, thuận lợi",
    "partOfSpeech": "adj",
    "ipa": "/ˌæd.vænˈteɪ.dʒəs/",
    "example": "The company selected an advantageous option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-32",
    "term": "advertise",
    "meaning": "quảng cáo, thông báo",
    "partOfSpeech": "v",
    "ipa": "/ˈæd.vɚ.taɪz/",
    "example": "The team will advertise the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-33",
    "term": "advertisement",
    "meaning": "bản tin quảng cáo",
    "partOfSpeech": "n",
    "ipa": "/æd.vɝːˈtaɪz.mənt/",
    "example": "The manager discussed the advertisement before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-34",
    "term": "advice",
    "meaning": "lời khuyên, lời chỉ bảo",
    "partOfSpeech": "n",
    "ipa": "/ədˈvaɪs/",
    "example": "The manager discussed the advice at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-35",
    "term": "advise",
    "meaning": "đưa ra lời khuyên",
    "partOfSpeech": "v",
    "ipa": "/ədˈvaɪz/",
    "example": "The team will advise the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-36",
    "term": "affect",
    "meaning": "ảnh hưởng, tác động",
    "partOfSpeech": "v",
    "ipa": "/əˈfekt/",
    "example": "The team will affect the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-37",
    "term": "afford",
    "meaning": "có khả năng, đủ điều kiện; ban phát, cấp phát",
    "partOfSpeech": "v",
    "ipa": "/əˈfɔːrd/",
    "example": "The team will afford the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-38",
    "term": "affordable",
    "meaning": "có khả năng chi trả, vừa túi tiền",
    "partOfSpeech": "adj",
    "ipa": "/əˈfɔːr.də.bəl/",
    "example": "The company selected an affordable option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-39",
    "term": "agency",
    "meaning": "đại lý, bên môi giới trung gian",
    "partOfSpeech": "n",
    "ipa": "/ˈeɪ.dʒən.si/",
    "example": "The manager discussed the agency at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-40",
    "term": "agenda",
    "meaning": "chương trình nghị sự, kế hoạch chương trình",
    "partOfSpeech": "n",
    "ipa": "/əˈdʒen.də/",
    "example": "The manager discussed the agenda before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-41",
    "term": "agree",
    "meaning": "đồng ý, tán thành",
    "partOfSpeech": "v",
    "ipa": "/əˈɡriː/",
    "example": "The team will agree the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-42",
    "term": "agreeable",
    "meaning": "dễ chịu; thích hợp với",
    "partOfSpeech": "adj",
    "ipa": "/əˈɡriː.ə.bəl/",
    "example": "The company selected an agreeable option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-43",
    "term": "agreement",
    "meaning": "hợp đồng, giao kèo",
    "partOfSpeech": "n",
    "ipa": "/əˈɡriː.mənt/",
    "example": "The manager discussed the agreement in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-44",
    "term": "agricultural",
    "meaning": "(thuộc) nông nghiệp",
    "partOfSpeech": "adj",
    "ipa": "/ˌæɡ.rəˈkʌl.tʃɚ.əl/",
    "example": "The company selected an agricultural option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-45",
    "term": "aid",
    "meaning": "sự giúp đỡ; cứu trợ, viện trợ",
    "partOfSpeech": "n, v",
    "ipa": "/eɪd/",
    "example": "The team will aid the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-46",
    "term": "aim",
    "meaning": "mục tiêu; nhắm đến, hướng đến",
    "partOfSpeech": "n, v",
    "ipa": "/eɪm/",
    "example": "The team will aim the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-47",
    "term": "airline",
    "meaning": "công ty hàng không",
    "partOfSpeech": "n",
    "ipa": "/ˈer.laɪn/",
    "example": "The manager discussed the airline before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-48",
    "term": "aisle",
    "meaning": "gian hàng, lối đi giữa các dãy ghế",
    "partOfSpeech": "n",
    "ipa": "/aɪl/",
    "example": "The manager discussed the aisle before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-49",
    "term": "alarm",
    "meaning": "sự báo động; báo động",
    "partOfSpeech": "n",
    "ipa": "/əˈlɑːrm/",
    "example": "The manager discussed the alarm before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-50",
    "term": "allow",
    "meaning": "cho phép, để cho",
    "partOfSpeech": "v",
    "ipa": "/əˈlaʊ/",
    "example": "The team will allow the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-51",
    "term": "alternative",
    "meaning": "xen kẽ, luân phiên",
    "partOfSpeech": "adj",
    "ipa": "/ɑːlˈtɝː.nə.t̬ɪv/",
    "example": "The company selected an alternative option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-52",
    "term": "ambitious",
    "meaning": "tham vọng",
    "partOfSpeech": "adj",
    "ipa": "/æmˈbɪʃ.əs/",
    "example": "The company selected an ambitious option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-53",
    "term": "amend",
    "meaning": "sửa chữa, cải tạo",
    "partOfSpeech": "v",
    "ipa": "/əˈmend/",
    "example": "The team will amend the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-54",
    "term": "amount",
    "meaning": "số lượng; cộng dồn lên tới",
    "partOfSpeech": "n, v",
    "ipa": "/əˈmaʊnt/",
    "example": "The team will amount the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-55",
    "term": "amusing",
    "meaning": "vui, có tính hài hước",
    "partOfSpeech": "adj",
    "ipa": "/əˈmjuː.zɪŋ/",
    "example": "The company selected an amusing option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-56",
    "term": "analysis",
    "meaning": "sự phân tích, bản phân tích",
    "partOfSpeech": "n",
    "ipa": "/əˈnæl.ə.sɪs/",
    "example": "The manager discussed the analysis before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-57",
    "term": "analyze",
    "meaning": "phân tích",
    "partOfSpeech": "v",
    "ipa": "/ˈæn.əl.aɪz/",
    "example": "The team will analyze the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-58",
    "term": "annual",
    "meaning": "hằng năm",
    "partOfSpeech": "adj",
    "ipa": "/ˈæn.ju.əl/",
    "example": "The company selected an annual option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-59",
    "term": "anticipate",
    "meaning": "phỏng đoán, dự đoán",
    "partOfSpeech": "v",
    "ipa": "/ænˈtɪs.ə.peɪt/",
    "example": "The team will anticipate the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-60",
    "term": "anxious",
    "meaning": "bồn chồn, lo lắng",
    "partOfSpeech": "adj",
    "ipa": "/ˈæŋk.ʃəs/",
    "example": "The company selected an anxious option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-61",
    "term": "apologize",
    "meaning": "xin lỗi",
    "partOfSpeech": "v",
    "ipa": "/əˈpɑː.lə.dʒaɪz/",
    "example": "The team will apologize the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-62",
    "term": "appeal",
    "meaning": "lời thỉnh cầu, sức lôi cuốn; kêu gọi, hấp dẫn",
    "partOfSpeech": "n, v",
    "ipa": "/əˈpiːl/",
    "example": "The team will appeal the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-63",
    "term": "appetizer",
    "meaning": "món khai vị",
    "partOfSpeech": "n",
    "ipa": "/ˈæp.ə.taɪ.zɚ/",
    "example": "The manager discussed the appetizer in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-64",
    "term": "appliance",
    "meaning": "thiết bị, dụng cụ",
    "partOfSpeech": "n",
    "ipa": "/əˈplaɪ.əns/",
    "example": "The manager discussed the appliance in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-65",
    "term": "applicant",
    "meaning": "người ứng tuyển, nguyên cáo",
    "partOfSpeech": "n",
    "ipa": "/ˈæp.lə.kənt/",
    "example": "The manager discussed the applicant with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-66",
    "term": "application",
    "meaning": "ứng dụng, sự áp dụng",
    "partOfSpeech": "n",
    "ipa": "/ˌæp.ləˈkeɪ.ʃən/",
    "example": "The manager discussed the application with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-67",
    "term": "apply",
    "meaning": "áp dụng, ứng tuyển",
    "partOfSpeech": "v",
    "ipa": "/əˈplaɪ/",
    "example": "The team will apply the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-68",
    "term": "appoint",
    "meaning": "bổ nhiệm, chỉ định",
    "partOfSpeech": "v",
    "ipa": "/əˈpɔɪnt/",
    "example": "The team will appoint the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-69",
    "term": "appointment",
    "meaning": "sự bổ nhiệm, cuộc hẹn gặp",
    "partOfSpeech": "n",
    "ipa": "/əˈpɔɪnt.mənt/",
    "example": "The manager discussed the appointment before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-70",
    "term": "appreciable",
    "meaning": "đáng kể",
    "partOfSpeech": "adj",
    "ipa": "/əˈpriː.ʃə.bəl/",
    "example": "The company selected an appreciable option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-71",
    "term": "appreciate",
    "meaning": "đánh giá cao, cảm kích",
    "partOfSpeech": "v",
    "ipa": "/əˈpriː.ʃi.eɪt/",
    "example": "The team will appreciate the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-72",
    "term": "appreciation",
    "meaning": "sự đánh giá cao, sự cảm kích",
    "partOfSpeech": "n",
    "ipa": "/əˌpriː.ʃiˈeɪ.ʃən/",
    "example": "The manager discussed the appreciation during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-73",
    "term": "appreciative of",
    "meaning": "đánh giá cao, ghi nhận",
    "partOfSpeech": "adj",
    "ipa": "/əˈpriː.ʃə.t̬ɪv/",
    "example": "The company selected an appreciative of option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-74",
    "term": "apprentice",
    "meaning": "người học việc",
    "partOfSpeech": "n",
    "ipa": "/əˈpren.t̬ɪs/",
    "example": "The manager discussed the apprentice before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-75",
    "term": "approve",
    "meaning": "tán thành, phê chuẩn",
    "partOfSpeech": "v",
    "ipa": "/əˈpruːv/",
    "example": "The team will approve the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-76",
    "term": "approximate",
    "meaning": "xấp xỉ, gần đúng",
    "partOfSpeech": "adj",
    "ipa": "/əˈprɑːk.sə.mət/",
    "example": "The company selected an approximate option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-77",
    "term": "arbitrate",
    "meaning": "phân xử, làm trọng tài",
    "partOfSpeech": "v",
    "ipa": "/ˈɑːr.bə.treɪt/",
    "example": "The team will arbitrate the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-78",
    "term": "area",
    "meaning": "khu vực, lĩnh vực, diện tích",
    "partOfSpeech": "n",
    "ipa": "/ˈer.i.ə/",
    "example": "The manager discussed the area during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-79",
    "term": "argue",
    "meaning": "tranh cãi, tranh luận",
    "partOfSpeech": "v",
    "ipa": "/ˈɑːrɡ.juː/",
    "example": "The team will argue the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-80",
    "term": "argument",
    "meaning": "cuộc tranh luận",
    "partOfSpeech": "n",
    "ipa": "/ˈɑːrɡ.jə.mənt/",
    "example": "The manager discussed the argument before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-81",
    "term": "arrange",
    "meaning": "dàn xếp, sắp đặt",
    "partOfSpeech": "v",
    "ipa": "/əˈreɪndʒ/",
    "example": "The team will arrange the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-82",
    "term": "arrangement",
    "meaning": "sự sắp đặt",
    "partOfSpeech": "n",
    "ipa": "/əˈreɪndʒ.mənt/",
    "example": "The manager discussed the arrangement with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-83",
    "term": "assemble",
    "meaning": "lắp ráp, thu thập",
    "partOfSpeech": "v",
    "ipa": "/əˈsem.bəl/",
    "example": "The team will assemble the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-84",
    "term": "assess",
    "meaning": "đánh giá, định giá",
    "partOfSpeech": "v",
    "ipa": "/əˈses/",
    "example": "The team will assess the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-85",
    "term": "asset",
    "meaning": "của cải, tài sản, vốn quý",
    "partOfSpeech": "n",
    "ipa": "/ˈæs.et/",
    "example": "The manager discussed the asset before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-86",
    "term": "assign",
    "meaning": "phân công, chia việc",
    "partOfSpeech": "v",
    "ipa": "/əˈsaɪn/",
    "example": "The team will assign the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-87",
    "term": "assignment",
    "meaning": "sự phân việc, bài tập tiểu luận",
    "partOfSpeech": "n",
    "ipa": "/əˈsaɪn.mənt/",
    "example": "The manager discussed the assignment before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-88",
    "term": "assist",
    "meaning": "hỗ trợ, giúp đỡ",
    "partOfSpeech": "v",
    "ipa": "/əˈsɪst/",
    "example": "The team will assist the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-89",
    "term": "assistance",
    "meaning": "sự giúp đỡ, hỗ trợ",
    "partOfSpeech": "n",
    "ipa": "/əˈsɪs.təns/",
    "example": "The manager discussed the assistance before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-90",
    "term": "assume",
    "meaning": "cho rằng, làm ra vẻ",
    "partOfSpeech": "v",
    "ipa": "/əˈsuːm/",
    "example": "The team will assume the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-91",
    "term": "attach",
    "meaning": "gán thêm, kèm thêm",
    "partOfSpeech": "v",
    "ipa": "/əˈtætʃ/",
    "example": "The team will attach the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-92",
    "term": "attachment",
    "meaning": "sự gắn thêm; phần kèm thêm",
    "partOfSpeech": "n",
    "ipa": "/əˈtætʃ.mənt/",
    "example": "The manager discussed the attachment before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-93",
    "term": "attend",
    "meaning": "tham dự",
    "partOfSpeech": "v",
    "ipa": "/əˈtend/",
    "example": "The team will attend the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-94",
    "term": "attendance",
    "meaning": "sự tham gia, có mặt",
    "partOfSpeech": "n",
    "ipa": "/əˈten.dəns/",
    "example": "The manager discussed the attendance before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-95",
    "term": "attract",
    "meaning": "thu hút, hấp dẫn",
    "partOfSpeech": "v",
    "ipa": "/əˈtrækt/",
    "example": "The team will attract the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-96",
    "term": "audience",
    "meaning": "khán thính giả",
    "partOfSpeech": "n",
    "ipa": "/ˈɑː.di.əns/",
    "example": "The manager discussed the audience before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-97",
    "term": "audit",
    "meaning": "kiểm toán",
    "partOfSpeech": "n, v",
    "ipa": "/ˈɑː.dɪt/",
    "example": "The team will audit the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-98",
    "term": "authority",
    "meaning": "quyền thế, nhà chức trách, chính quyền",
    "partOfSpeech": "n",
    "ipa": "/əˈθɔːr.ə.t̬i/",
    "example": "The manager discussed the authority in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-99",
    "term": "authorize",
    "meaning": "ủy quyền, cấp quyền",
    "partOfSpeech": "v",
    "ipa": "/ˈɑː.θɚ.aɪz/",
    "example": "The team will authorize the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-100",
    "term": "availability",
    "meaning": "tính sẵn có",
    "partOfSpeech": "n",
    "ipa": "/əˌveɪ.ləˈbɪl.ə.t̬i/",
    "example": "The manager discussed the availability during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-101",
    "term": "available",
    "meaning": "có sẵn để dùng",
    "partOfSpeech": "adj",
    "ipa": "/əˈveɪ.lə.bəl/",
    "example": "The company selected an available option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-102",
    "term": "avoid",
    "meaning": "tránh xa, ngăn ngừa",
    "partOfSpeech": "v",
    "ipa": "/əˈvɔɪd/",
    "example": "The team will avoid the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-103",
    "term": "avid",
    "meaning": "khao khát, thèm khát",
    "partOfSpeech": "adj",
    "ipa": "/ˈæv.ɪd/",
    "example": "The company selected an avid option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-104",
    "term": "awareness",
    "meaning": "sự nhận thức, ý thức",
    "partOfSpeech": "n",
    "ipa": "/əˈwer.nəs/",
    "example": "The manager discussed the awareness in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-105",
    "term": "awkward",
    "meaning": "ngại ngùng, khó xử",
    "partOfSpeech": "adj",
    "ipa": "/ˈɑː.kwɚd/",
    "example": "The company selected an awkward option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-106",
    "term": "background",
    "meaning": "phông nền, gia cảnh, quá trình học tập",
    "partOfSpeech": "n",
    "ipa": "/ˈbæk.ɡraʊnd/",
    "example": "The manager discussed the background with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-107",
    "term": "backpack",
    "meaning": "ba lô đeo sau lưng",
    "partOfSpeech": "n",
    "ipa": "/ˈbæk.pæk/",
    "example": "The manager discussed the backpack in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-108",
    "term": "baggage claim",
    "meaning": "chỗ nhận hành lý",
    "partOfSpeech": "n",
    "ipa": "/ˈbæɡ.ɪdʒ kleɪm/",
    "example": "The manager discussed the baggage claim before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-109",
    "term": "balance",
    "meaning": "sự cân bằng, trạng thái cân bằng",
    "partOfSpeech": "n",
    "ipa": "/ˈbæl.əns/",
    "example": "The manager discussed the balance before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-110",
    "term": "bank",
    "meaning": "ngân hàng, bãi sông",
    "partOfSpeech": "n",
    "ipa": "/bæŋk/",
    "example": "The manager discussed the bank in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-111",
    "term": "bankrupt",
    "meaning": "người phá sản; vỡ nợ, phá sản",
    "partOfSpeech": "n, adj",
    "ipa": "/ˈbæŋ.krʌpt/",
    "example": "The company selected an bankrupt option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-112",
    "term": "bar code",
    "meaning": "mã vạch",
    "partOfSpeech": "n",
    "ipa": "/ˈbɑːr ˌkoʊd/",
    "example": "The manager discussed the bar code in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-113",
    "term": "bargain",
    "meaning": "sự mặc cả, món hời; mặc cả, thương lượng",
    "partOfSpeech": "n, v",
    "ipa": "/ˈbɑːr.ɡɪn/",
    "example": "The team will bargain the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-114",
    "term": "beautiful",
    "meaning": "xinh đẹp, tốt đẹp",
    "partOfSpeech": "adj",
    "ipa": "/ˈbjuː.t̬ə.fəl/",
    "example": "The company selected an beautiful option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-115",
    "term": "behave",
    "meaning": "hành xử, cư xử",
    "partOfSpeech": "v",
    "ipa": "/bɪˈheɪv/",
    "example": "The team will behave the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-116",
    "term": "belongings",
    "meaning": "tài sản, đồ dùng cá nhân",
    "partOfSpeech": "n",
    "ipa": "/bɪˈlɑːŋ.ɪŋz/",
    "example": "The manager discussed the belongings with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-117",
    "term": "beneficial",
    "meaning": "có ích, có lợi",
    "partOfSpeech": "adj",
    "ipa": "/ˌben.əˈfɪʃ.əl/",
    "example": "The company selected an beneficial option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-118",
    "term": "benefit",
    "meaning": "ích lợi",
    "partOfSpeech": "n",
    "ipa": "/ˈben.ə.fɪt/",
    "example": "The manager discussed the benefit before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-119",
    "term": "beverage",
    "meaning": "đồ uống, đồ giải khát",
    "partOfSpeech": "n",
    "ipa": "/ˈbev.ɚ.ɪdʒ/",
    "example": "The manager discussed the beverage in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-120",
    "term": "bill",
    "meaning": "hóa đơn",
    "partOfSpeech": "n",
    "ipa": "/bɪl/",
    "example": "The manager discussed the bill before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-121",
    "term": "binder",
    "meaning": "bìa ôm, bìa rời",
    "partOfSpeech": "n",
    "ipa": "/ˈbaɪn.dɚ/",
    "example": "The manager discussed the binder at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-122",
    "term": "blanket",
    "meaning": "chăn, mền",
    "partOfSpeech": "n",
    "ipa": "/ˈblæŋ.kɪt/",
    "example": "The manager discussed the blanket before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-123",
    "term": "block",
    "meaning": "khối, tảng, trướng ngại vật; làm cản trở, phong tỏa",
    "partOfSpeech": "n, v",
    "ipa": "/blɑːk/",
    "example": "The team will block the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-124",
    "term": "board",
    "meaning": "tấm ván, bảng, mạn thuyền 125 boardroom n phòng họp ban giám đốc",
    "partOfSpeech": "n",
    "ipa": "/bɔːrd/",
    "example": "The manager discussed the board at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-125",
    "term": "boardroom",
    "partOfSpeech": "n",
    "ipa": "/ˈbɔːrd.ruːm/",
    "meaning": "phòng họp ban giám đốc",
    "example": "The manager discussed the boardroom before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-126",
    "term": "boast",
    "meaning": "sự khoe khoang; khoác lác",
    "partOfSpeech": "n, v",
    "ipa": "/boʊst/",
    "example": "The team will boast the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-127",
    "term": "book",
    "meaning": "cuốn sách; đặt phòng, đặt vé",
    "partOfSpeech": "n, v",
    "ipa": "/bʊk/",
    "example": "The team will book the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-128",
    "term": "boost",
    "meaning": "đẩy mạnh, kích thích; sự tăng lên",
    "partOfSpeech": "v, n",
    "ipa": "/buːst/",
    "example": "The team will boost the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-129",
    "term": "bored",
    "meaning": "buồn chán, tẻ nhạt",
    "partOfSpeech": "adj",
    "ipa": "/bɔːrd/",
    "example": "The company selected an bored option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-130",
    "term": "bother",
    "meaning": "điều gây khó chịu; làm phiền, bận tâm",
    "partOfSpeech": "n, v",
    "ipa": "/ˈbɑː.ðɚ/",
    "example": "The team will bother the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-131",
    "term": "bottom line",
    "meaning": "điểm mấu chốt, cốt yếu",
    "partOfSpeech": "n",
    "ipa": "/ˌbɑː.t̬əm ˈlaɪn/",
    "example": "The manager discussed the bottom line during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-132",
    "term": "branch",
    "meaning": "cành cây, chi nhánh",
    "partOfSpeech": "n",
    "ipa": "/bræntʃ/",
    "example": "The manager discussed the branch at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-133",
    "term": "brand",
    "meaning": "nhãn hàng, thương hiệu",
    "partOfSpeech": "n",
    "ipa": "/brænd/",
    "example": "The manager discussed the brand at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-134",
    "term": "briefcase",
    "meaning": "cặp tài liệu",
    "partOfSpeech": "n",
    "ipa": "/ˈbriːf.keɪs/",
    "example": "The manager discussed the briefcase before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-135",
    "term": "briefing",
    "meaning": "sự chỉ dẫn, hướng dẫn",
    "partOfSpeech": "n",
    "ipa": "/ˈbriː.fɪŋ/",
    "example": "The manager discussed the briefing before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-136",
    "term": "broadcast",
    "meaning": "chương trình phát thanh; truyền bá, phát thanh",
    "partOfSpeech": "n, v",
    "ipa": "/ˈbrɑːd.kæst/",
    "example": "The team will broadcast the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-137",
    "term": "broaden",
    "meaning": "mở rộng, nới rộng",
    "partOfSpeech": "v",
    "ipa": "/ˈbrɑː.dən/",
    "example": "The team will broaden the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-138",
    "term": "browser",
    "meaning": "trình duyệt",
    "partOfSpeech": "n",
    "ipa": "/ˈbraʊ.zɚ/",
    "example": "The manager discussed the browser during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-139",
    "term": "brush",
    "meaning": "lược, bàn chải; chải, quét",
    "partOfSpeech": "n, v",
    "ipa": "/brʌʃ/",
    "example": "The team will brush the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-140",
    "term": "budget",
    "meaning": "ngân sách; dự thảo ngân sách",
    "partOfSpeech": "n, v",
    "ipa": "/ˈbʌdʒ.ɪt/",
    "example": "The team will budget the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-141",
    "term": "bulletin",
    "meaning": "bảng thông báo, tập san",
    "partOfSpeech": "n",
    "ipa": "/ˈbʊl.ə.t̬ɪn/",
    "example": "The manager discussed the bulletin in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-142",
    "term": "cabin crew",
    "meaning": "đội bay, tiếp viên hàng không",
    "partOfSpeech": "n",
    "ipa": "/ˈkæb.ɪn ˌkruː/",
    "example": "The manager discussed the cabin crew before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-143",
    "term": "cafeteria",
    "meaning": "quán ăn tự phục vụ, phòng cà phê",
    "partOfSpeech": "n",
    "ipa": "/ˌkæf.əˈtɪr.i.ə/",
    "example": "The manager discussed the cafeteria with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-144",
    "term": "calculate",
    "meaning": "tính toán, suy tính",
    "partOfSpeech": "v",
    "ipa": "/ˈkæl.kjə.leɪt/",
    "example": "The team will calculate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-145",
    "term": "calculation",
    "meaning": "sự tính toán",
    "partOfSpeech": "n",
    "ipa": "/ˌkæl.kjəˈleɪ.ʃən/",
    "example": "The manager discussed the calculation before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-146",
    "term": "calculator",
    "meaning": "máy tính bỏ túi",
    "partOfSpeech": "n",
    "ipa": "/ˈkæl.kjə.leɪ.t̬ɚ/",
    "example": "The manager discussed the calculator during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-147",
    "term": "campaign",
    "meaning": "chiến dịch, cuộc vận động",
    "partOfSpeech": "n",
    "ipa": "/kæmˈpeɪn/",
    "example": "The manager discussed the campaign before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-148",
    "term": "cancel",
    "meaning": "hủy bỏ, xóa",
    "partOfSpeech": "v",
    "ipa": "/ˈkæn.səl/",
    "example": "The team will cancel the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-149",
    "term": "cancellation",
    "meaning": "sự xóa bỏ, bãi bỏ",
    "partOfSpeech": "n",
    "ipa": "/ˌkæn.səlˈeɪ.ʃən/",
    "example": "The manager discussed the cancellation at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-150",
    "term": "candidacy",
    "meaning": "sự ứng cử 151 candidate n ứng cử viên",
    "partOfSpeech": "n",
    "ipa": "/ˈkæn.dɪ.də.si/",
    "example": "The manager discussed the candidacy with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-151",
    "term": "candidate",
    "partOfSpeech": "n",
    "ipa": "/ˈkæn.dɪ.dət/",
    "meaning": "ứng cử viên, ứng viên",
    "example": "The manager discussed the candidate with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-152",
    "term": "capacity",
    "meaning": "năng lực, sức chứa",
    "partOfSpeech": "n",
    "ipa": "/kəˈpæs.ə.t̬i/",
    "example": "The manager discussed the capacity before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-153",
    "term": "capital",
    "meaning": "thủ đô, nguồn vốn, chữ viết hoa",
    "partOfSpeech": "n",
    "ipa": "/ˈkæp.ə.t̬əl/",
    "example": "The manager discussed the capital in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-154",
    "term": "career",
    "meaning": "sự nghiệp",
    "partOfSpeech": "n",
    "ipa": "/kəˈrɪr/",
    "example": "The manager discussed the career with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-155",
    "term": "careless",
    "meaning": "bất cẩn, cẩu thả",
    "partOfSpeech": "adj",
    "ipa": "/ˈker.ləs/",
    "example": "The company selected an careless option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-156",
    "term": "cash",
    "meaning": "tiền mặt",
    "partOfSpeech": "n",
    "ipa": "/kæʃ/",
    "example": "The manager discussed the cash in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-157",
    "term": "cashier",
    "meaning": "nhân viên thu ngân",
    "partOfSpeech": "n",
    "ipa": "/kæʃˈɪr/",
    "example": "The manager discussed the cashier in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-158",
    "term": "cause",
    "meaning": "nguyên nhân, lý do; gây ra",
    "partOfSpeech": "n, v",
    "ipa": "/kɑːz/",
    "example": "The team will cause the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-159",
    "term": "cautious",
    "meaning": "thận trọng, cẩn thận",
    "partOfSpeech": "adj",
    "ipa": "/ˈkɑː.ʃəs/",
    "example": "The company selected an cautious option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-160",
    "term": "celebrate",
    "meaning": "kỉ niệm, tán dương",
    "partOfSpeech": "v",
    "ipa": "/ˈsel.ə.breɪt/",
    "example": "The team will celebrate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-161",
    "term": "celebration",
    "meaning": "lễ kỉ niệm",
    "partOfSpeech": "n",
    "ipa": "/ˌsel.əˈbreɪ.ʃən/",
    "example": "The manager discussed the celebration before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-162",
    "term": "certificate",
    "meaning": "giấy chứng nhận 163 certification n /ˌsɜ˞ ː.t̬ə.fɪˈkeɪ.ʃən/ sự cấp giấy chứng nhận",
    "partOfSpeech": "n",
    "ipa": "/sɚˈtɪf.ə.kət/",
    "example": "The manager discussed the certificate before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-163",
    "term": "certification",
    "partOfSpeech": "n",
    "ipa": "/ˌsɜːr.t̬ə.fɪˈkeɪ.ʃən/",
    "meaning": "sự cấp giấy chứng nhận",
    "example": "The manager discussed the certification at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-164",
    "term": "chain",
    "meaning": "dây xích, chuỗi",
    "partOfSpeech": "n",
    "ipa": "/tʃeɪn/",
    "example": "The manager discussed the chain at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-165",
    "term": "chain store",
    "meaning": "cửa hàng theo chuỗi, hệ thống cửa hàng",
    "partOfSpeech": "n",
    "ipa": "/ˈtʃeɪn ˌstɔːr/",
    "example": "The manager discussed the chain store before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-166",
    "term": "chair",
    "meaning": "ghế ngồi",
    "partOfSpeech": "n",
    "ipa": "/tʃer/",
    "example": "The manager discussed the chair at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-167",
    "term": "chairperson",
    "meaning": "chủ tịch",
    "partOfSpeech": "n",
    "ipa": "/ˈtʃerˌpɝː.sən/",
    "example": "The manager discussed the chairperson before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-168",
    "term": "characteristic",
    "meaning": "đặc điểm, tính cách",
    "partOfSpeech": "n",
    "ipa": "/ˌker.ək.təˈrɪs.tɪk/",
    "example": "The manager discussed the characteristic before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-169",
    "term": "characterize",
    "meaning": "biểu thị đặc điểm, mô tả đặc điểm",
    "partOfSpeech": "v",
    "ipa": "/ˈker.ək.tɚ.aɪz/",
    "example": "The team will characterize the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-170",
    "term": "charge",
    "meaning": "chi phí, tiền công; tính giá, đòi trả",
    "partOfSpeech": "n, v",
    "ipa": "/tʃɑːrdʒ/",
    "example": "The team will charge the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-171",
    "term": "charity",
    "meaning": "lòng từ bi, tổ chức từ thiện",
    "partOfSpeech": "n",
    "ipa": "/ˈtʃer.ə.t̬i/",
    "example": "The manager discussed the charity in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-172",
    "term": "cheap",
    "meaning": "rẻ tiền, xấu",
    "partOfSpeech": "adj",
    "ipa": "/tʃiːp/",
    "example": "The company selected an cheap option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-173",
    "term": "check in",
    "meaning": "đăng ký phòng, vé máy bay...",
    "partOfSpeech": "v",
    "ipa": "/tʃek ɪn/",
    "example": "The team will check in the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-174",
    "term": "check out",
    "meaning": "trả phòng, thanh toán",
    "partOfSpeech": "v",
    "ipa": "/tʃek aʊt/",
    "example": "The team will check out the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-175",
    "term": "chef",
    "meaning": "đầu bếp",
    "partOfSpeech": "n",
    "ipa": "/ʃef/",
    "example": "The manager discussed the chef at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-176",
    "term": "circumstances",
    "meaning": "hoàn cảnh, tình huống",
    "partOfSpeech": "n",
    "ipa": "/ˈsɝː.kəm.stæns/",
    "example": "The manager discussed the circumstances at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-177",
    "term": "claim",
    "meaning": "quyền đòi sở hữu; đòi hỏi, nhận",
    "partOfSpeech": "n, v",
    "ipa": "/kleɪm/",
    "example": "The team will claim the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-178",
    "term": "claimant",
    "meaning": "người thỉnh cầu, người đòi hỏi",
    "partOfSpeech": "n",
    "ipa": "/ˈkleɪ.mənt/",
    "example": "The manager discussed the claimant before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-179",
    "term": "classify",
    "meaning": "phân loại",
    "partOfSpeech": "v",
    "ipa": "/ˈklæs.ə.faɪ/",
    "example": "The team will classify the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-180",
    "term": "client",
    "meaning": "khách hàng (của luật sư, cửa hàng...)",
    "partOfSpeech": "n",
    "ipa": "/ˈklaɪ.ənt/",
    "example": "The manager discussed the client at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-181",
    "term": "climate",
    "meaning": "khí hậu, thời tiết",
    "partOfSpeech": "n",
    "ipa": "/ˈklaɪ.mət/",
    "example": "The manager discussed the climate in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-182",
    "term": "commence",
    "meaning": "bắt đầu, mở đầu, khởi đầu",
    "partOfSpeech": "v",
    "ipa": "/kəˈmens/",
    "example": "The team will commence the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-183",
    "term": "commission",
    "meaning": "hội đồng, ủy ban, tiền hoa hồng",
    "partOfSpeech": "n",
    "ipa": "/kəˈmɪʃ.ən/",
    "example": "The manager discussed the commission during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-184",
    "term": "committee",
    "meaning": "ủy ban",
    "partOfSpeech": "n",
    "ipa": "/kəˈmɪt̬.i/",
    "example": "The manager discussed the committee with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-185",
    "term": "commonly",
    "meaning": "thông thường, bình thường",
    "partOfSpeech": "adv",
    "ipa": "/ˈkɑː.mən.li/",
    "example": "The team will commonly the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-186",
    "term": "commute",
    "meaning": "thay đổi cho nhau, di chuyển đều đặn bằng tàu, xe...",
    "partOfSpeech": "v",
    "ipa": "/kəˈmjuːt/",
    "example": "The team will commute the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-187",
    "term": "commuter",
    "meaning": "người đi lại bằng vé tháng trên tàu, xe...",
    "partOfSpeech": "n",
    "ipa": "/kəˈmjuː.t̬ɚ/",
    "example": "The manager discussed the commuter before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-188",
    "term": "company",
    "meaning": "công ty, bạn bè, bằng hữu",
    "partOfSpeech": "n",
    "ipa": "/ˈkʌm.pə.ni/",
    "example": "The manager discussed the company in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-189",
    "term": "compare",
    "meaning": "so sánh, đối chiếu",
    "partOfSpeech": "v",
    "ipa": "/kəmˈper/",
    "example": "The team will compare the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-190",
    "term": "compatible",
    "meaning": "tương thích, phù hợp",
    "partOfSpeech": "adj",
    "ipa": "/kəmˈpæt̬.ə.bəl/",
    "example": "The company selected an compatible option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-191",
    "term": "compensate",
    "meaning": "đền bù, bồi thường",
    "partOfSpeech": "v",
    "ipa": "/ˈkɑːm.pən.seɪt/",
    "example": "The team will compensate the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-192",
    "term": "compensation",
    "meaning": "sự đền bù, vật bồi thường",
    "partOfSpeech": "n",
    "ipa": "/ˌkɑːm.penˈseɪ.ʃən/",
    "example": "The manager discussed the compensation at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-193",
    "term": "competent",
    "meaning": "có khả năng, đủ trình độ",
    "partOfSpeech": "adj",
    "ipa": "/ˈkɑːm.pə.t̬ənt/",
    "example": "The company selected an competent option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-194",
    "term": "competitive",
    "meaning": "có tính cạnh tranh, ganh đua",
    "partOfSpeech": "adj",
    "ipa": "/kəmˈpet̬.ə.t̬ɪv/",
    "example": "The company selected an competitive option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-195",
    "term": "competitor",
    "meaning": "người cạnh tranh, đối thủ",
    "partOfSpeech": "n",
    "ipa": "/kəmˈpet̬.ə.t̬ɚ/",
    "example": "The manager discussed the competitor during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-196",
    "term": "complain",
    "meaning": "kêu ca, phàn nàn, oán trách",
    "partOfSpeech": "v",
    "ipa": "/kəmˈpleɪn/",
    "example": "The team will complain the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-197",
    "term": "complaint",
    "meaning": "lời than phiền, lời phàn nàn",
    "partOfSpeech": "n",
    "ipa": "/kəmˈpleɪnt/",
    "example": "The manager discussed the complaint at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-198",
    "term": "complete",
    "meaning": "đầy đủ, hoàn thiện 199 complex n, adj khu phức hợp; phức tạp",
    "partOfSpeech": "adj",
    "ipa": "/kəmˈpliːt/",
    "example": "The company selected an complete option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-199",
    "term": "complex",
    "partOfSpeech": "n, adj",
    "ipa": "/ˈkɑːm.pleks/",
    "meaning": "khu phức hợp; phức tạp",
    "example": "The company selected an complex option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-200",
    "term": "complexity",
    "meaning": "sự phức tạp",
    "partOfSpeech": "n",
    "ipa": "/kəmˈplek.sə.t̬i/",
    "example": "The manager discussed the complexity during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-201",
    "term": "compliment",
    "meaning": "lời khen, sự ca tụng",
    "partOfSpeech": "n",
    "ipa": "/ˈkɑːm.plə.mənt/",
    "example": "The manager discussed the compliment during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-202",
    "term": "complimentary",
    "meaning": "ngợi khen, đánh giá cao",
    "partOfSpeech": "adj",
    "ipa": "/ˌkɑːm.pləˈmen.t̬ɚ.i/",
    "example": "The company selected an complimentary option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-203",
    "term": "comply",
    "meaning": "tuân theo, làm theo",
    "partOfSpeech": "v",
    "ipa": "/kəmˈplaɪ/",
    "example": "The team will comply the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-204",
    "term": "comprehensive",
    "meaning": "toàn diện, thông minh",
    "partOfSpeech": "adj",
    "ipa": "/ˌkɑːm.prəˈhen.sɪv/",
    "example": "The company selected an comprehensive option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-205",
    "term": "compromise",
    "meaning": "sự thỏa hiệp; dàn xếp, thỏa hiệp",
    "partOfSpeech": "n, v",
    "ipa": "/ˈkɑːm.prə.maɪz/",
    "example": "The team will compromise the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-206",
    "term": "compulsory",
    "meaning": "bắt buộc, ép buộc",
    "partOfSpeech": "adj",
    "ipa": "/kəmˈpʌl.sɚ.i/",
    "example": "The company selected an compulsory option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-207",
    "term": "concede",
    "meaning": "thừa nhận",
    "partOfSpeech": "v",
    "ipa": "/kənˈsiːd/",
    "example": "The team will concede the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-208",
    "term": "concern",
    "meaning": "mối bận tâm, chuyện đáng lo; liên quan, dính líu tới",
    "partOfSpeech": "n, v",
    "ipa": "/kənˈsɝːn/",
    "example": "The team will concern the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-209",
    "term": "conclude",
    "meaning": "kết thúc, chấm dứt, kết luận",
    "partOfSpeech": "v",
    "ipa": "/kənˈkluːd/",
    "example": "The team will conclude the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-210",
    "term": "conclusion",
    "meaning": "kết luận",
    "partOfSpeech": "n",
    "ipa": "/kənˈkluː.ʒən/",
    "example": "The manager discussed the conclusion during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-211",
    "term": "concourse",
    "meaning": "đám đông, sự tụ họp",
    "partOfSpeech": "n",
    "ipa": "/ˈkɑːn.kɔːrs/",
    "example": "The manager discussed the concourse with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-212",
    "term": "condition",
    "meaning": "điều kiện, tình cảnh, tình trạng; là điều kiện của, tùy thuộc vào 213 conduct n, v hạnh kiểm, đạo đức; tiến hành, chỉ đạo",
    "partOfSpeech": "n, v",
    "ipa": "/kənˈdɪʃ.ən/",
    "example": "The team will condition the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-213",
    "term": "conduct",
    "partOfSpeech": "n, v",
    "ipa": "/kənˈdʌkt/",
    "meaning": "hạnh kiểm, đạo đức; tiến hành, chỉ đạo",
    "example": "The team will conduct the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-214",
    "term": "confirmation",
    "meaning": "sự xác nhận, chứng thực",
    "partOfSpeech": "n",
    "ipa": "/ˌkɑːn.fɚˈmeɪ.ʃən/",
    "example": "The manager discussed the confirmation at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-215",
    "term": "confusion",
    "meaning": "sự bối rối, khó hiểu",
    "partOfSpeech": "n",
    "ipa": "/kənˈfjuː.ʒən/",
    "example": "The manager discussed the confusion with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-216",
    "term": "connect",
    "meaning": "nối lại, kết nối",
    "partOfSpeech": "v",
    "ipa": "/kəˈnekt/",
    "example": "The team will connect the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-217",
    "term": "consequence",
    "meaning": "hậu quả, kết quả",
    "partOfSpeech": "n",
    "ipa": "/ˈkɑːn.sə.kwəns/",
    "example": "The manager discussed the consequence before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-218",
    "term": "considerable",
    "meaning": "đáng kể, lớn lao",
    "partOfSpeech": "adj",
    "ipa": "/kənˈsɪd.ɚ.ə.bəl/",
    "example": "The company selected an considerable option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-219",
    "term": "consignment",
    "meaning": "hoạt động gửi hàng để bán",
    "partOfSpeech": "n",
    "ipa": "/kənˈsaɪn.mənt/",
    "example": "The manager discussed the consignment before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-220",
    "term": "consistently",
    "meaning": "kiên định, trước sau như một, đồng nhất",
    "partOfSpeech": "adv",
    "ipa": "/kənˈsɪs.tənt.li/",
    "example": "The team will consistently the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-221",
    "term": "constant",
    "meaning": "liên tục, liên tiếp, kiên trì",
    "partOfSpeech": "adj",
    "ipa": "/ˈkɑːn.stənt/",
    "example": "The company selected an constant option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-222",
    "term": "consultant",
    "meaning": "tư vấn viên, cố vấn",
    "partOfSpeech": "n",
    "ipa": "/kənˈsʌl.tənt/",
    "example": "The manager discussed the consultant during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-223",
    "term": "consume",
    "meaning": "sử dụng, tiêu dùng, tiêu thụ",
    "partOfSpeech": "v",
    "ipa": "/kənˈsuːm/",
    "example": "The team will consume the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-224",
    "term": "consumer",
    "meaning": "người tiêu dùng",
    "partOfSpeech": "n",
    "ipa": "/kənˈsuː.mɚ/",
    "example": "The manager discussed the consumer before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-225",
    "term": "continual",
    "meaning": "liên tục, liên miên",
    "partOfSpeech": "adj",
    "ipa": "/kənˈtɪn.ju.əl/",
    "example": "The company selected an continual option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-226",
    "term": "continue",
    "meaning": "tiếp tục, duy trì",
    "partOfSpeech": "v",
    "ipa": "/kənˈtɪn.juː/",
    "example": "The team will continue the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-227",
    "term": "contribute",
    "meaning": "đóng góp, góp phần",
    "partOfSpeech": "v",
    "ipa": "/kənˈtrɪb.juːt/",
    "example": "The team will contribute the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-228",
    "term": "control",
    "meaning": "sự điều khiển, cầm lái; điều khiển, chỉ huy, kiểm soát",
    "partOfSpeech": "n, v",
    "ipa": "/kənˈtroʊl/",
    "example": "The team will control the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-229",
    "term": "control panel",
    "meaning": "bảng điều khiển",
    "partOfSpeech": "n",
    "ipa": "/kənˈtroʊl ˌpæn.əl/",
    "example": "The manager discussed the control panel at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-230",
    "term": "conveniently",
    "meaning": "thuận tiện, tiện lợi",
    "partOfSpeech": "adv",
    "ipa": "/kənˈviː.ni.ənt.li/",
    "example": "The team will conveniently the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-231",
    "term": "convince",
    "meaning": "thuyết phục",
    "partOfSpeech": "v",
    "ipa": "/kənˈvɪns/",
    "example": "The team will convince the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-232",
    "term": "corporate",
    "meaning": "công ty, tập đoàn; (thuộc) đoàn thể 233 corporation n corporation đoàn thể, tập đoàn",
    "partOfSpeech": "n, v",
    "ipa": "/ˈkɔːr.pɚ.ət/",
    "example": "The team will corporate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-233",
    "term": "corporation",
    "partOfSpeech": "n",
    "ipa": "/ˌkɔːr.pəˈreɪ.ʃən/",
    "meaning": "đoàn thể, tập đoàn",
    "example": "The manager discussed the corporation before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-234",
    "term": "cost",
    "meaning": "giá, chi phí; định giá, trả giá",
    "partOfSpeech": "n, v",
    "ipa": "/kɑːst/",
    "example": "The team will cost the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-235",
    "term": "counter",
    "meaning": "quầy hàng, quầy thu ngân; phản đối, chống lại",
    "partOfSpeech": "n, v",
    "ipa": "/ˈkaʊn.t̬ɚ/",
    "example": "The team will counter the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-236",
    "term": "courier",
    "meaning": "người đưa thư, đưa tin",
    "partOfSpeech": "n",
    "ipa": "/ˈkʊr.i.ɚ/",
    "example": "The manager discussed the courier in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-237",
    "term": "cover letter",
    "meaning": "thư trình bày thông tin, nguyện vọng",
    "partOfSpeech": "n",
    "ipa": "/ˈkʌv.ə ˌlet.ər/",
    "example": "The manager discussed the cover letter at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-238",
    "term": "coverage",
    "meaning": "mức độ bao phủ, che phủ bản tin sự kiện",
    "partOfSpeech": "n",
    "ipa": "/ˈkʌv.ɚ.ɪdʒ/",
    "example": "The manager discussed the coverage before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-239",
    "term": "coworker",
    "meaning": "đồng nghiệp",
    "partOfSpeech": "n",
    "ipa": "/ˌkoʊˈwɝː.kɚ/",
    "example": "The manager discussed the coworker before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-240",
    "term": "crash",
    "meaning": "sự va đập, sụp đổ; rơi vỡ, va đập",
    "partOfSpeech": "n, v",
    "ipa": "/kræʃ/",
    "example": "The team will crash the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-241",
    "term": "credentials",
    "meaning": "giấy ủy nhiệm, chứng chỉ",
    "partOfSpeech": "n",
    "ipa": "/krɪˈden·ʃəlz/",
    "example": "The manager discussed the credentials before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-242",
    "term": "credit",
    "meaning": "danh tiếng, tín dụng, tín chỉ",
    "partOfSpeech": "n",
    "ipa": "/ˈkred.ɪt/",
    "example": "The manager discussed the credit in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-243",
    "term": "criterion",
    "meaning": "tiêu chí đánh giá",
    "partOfSpeech": "n",
    "ipa": "/kraɪˈtɪr.i.ən/",
    "example": "The manager discussed the criterion with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-244",
    "term": "critical",
    "meaning": "phê bình, phê phán nguy kịch",
    "partOfSpeech": "adj",
    "ipa": "/ˈkrɪt̬.ɪ.kəl/",
    "example": "The company selected an critical option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-245",
    "term": "criticize",
    "meaning": "phê bình, chỉ trích",
    "partOfSpeech": "v",
    "ipa": "/ˈkrɪt̬.ɪ.saɪz/",
    "example": "The team will criticize the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-246",
    "term": "crowd",
    "meaning": "đám đông, đống; xúm lại, tụ tập",
    "partOfSpeech": "n, v",
    "ipa": "/kraʊd/",
    "example": "The team will crowd the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-247",
    "term": "crowded",
    "meaning": "đông đúc nhiều, đầy",
    "partOfSpeech": "adj",
    "ipa": "/ˈkraʊ.dɪd/",
    "example": "The company selected an crowded option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-248",
    "term": "crucial",
    "meaning": "có tính quyết định, trọng yếu",
    "partOfSpeech": "adj",
    "ipa": "/ˈkruː.ʃəl/",
    "example": "The company selected an crucial option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-249",
    "term": "cruise",
    "meaning": "chuyến du lịch, đi chơi trên biển; đi chơi bằng tàu thủy",
    "partOfSpeech": "n, v",
    "ipa": "/kruːz/",
    "example": "The team will cruise the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-250",
    "term": "currency",
    "meaning": "tiền tệ",
    "partOfSpeech": "n",
    "ipa": "/ˈkɝː.ən.si/",
    "example": "The manager discussed the currency before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-251",
    "term": "current",
    "meaning": "dòng, luồng; hiện tại, hiện thời",
    "partOfSpeech": "n, adj",
    "ipa": "/ˈkɝː.ənt/",
    "example": "The company selected an current option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-252",
    "term": "custom",
    "meaning": "phong tục, tục lệ",
    "partOfSpeech": "n",
    "ipa": "/ˈkʌs.təm/",
    "example": "The manager discussed the custom before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-253",
    "term": "customer",
    "meaning": "khách hàng",
    "partOfSpeech": "n",
    "ipa": "/ˈkʌs.tə.mɚ/",
    "example": "The manager discussed the customer at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-254",
    "term": "cutting edge",
    "meaning": "đột phá, vượt trội",
    "partOfSpeech": "adj",
    "ipa": "/ˌkʌt̬.ɪŋ ˈedʒ/",
    "example": "The company selected an cutting edge option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-255",
    "term": "cycle",
    "meaning": "chu kỳ, chu trình",
    "partOfSpeech": "n",
    "ipa": "/ˈsaɪ.kəl/",
    "example": "The manager discussed the cycle at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-256",
    "term": "daily",
    "meaning": "hằng ngày",
    "partOfSpeech": "adj",
    "ipa": "/ˈdeɪ.li/",
    "example": "The company selected an daily option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-257",
    "term": "damage",
    "meaning": "mối gây hại; làm hại, hư hỏng",
    "partOfSpeech": "n",
    "ipa": "/ˈdæm.ɪdʒ/",
    "example": "The manager discussed the damage in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-258",
    "term": "deadline",
    "meaning": "hạn cuối, hạn hoàn thành",
    "partOfSpeech": "n",
    "ipa": "/ˈded.laɪn/",
    "example": "The manager discussed the deadline with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-259",
    "term": "deal",
    "meaning": "thỏa thuận mua bán; giải quyết, đối phó",
    "partOfSpeech": "n, v",
    "ipa": "/diːl/",
    "example": "The team will deal the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-260",
    "term": "debit",
    "meaning": "món nợ; ghi nợ",
    "partOfSpeech": "n",
    "ipa": "/ˈdeb.ɪt/",
    "example": "The manager discussed the debit before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-261",
    "term": "debt",
    "meaning": "khoản nợ",
    "partOfSpeech": "n",
    "ipa": "/det/",
    "example": "The manager discussed the debt at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-262",
    "term": "decision",
    "meaning": "quyết định",
    "partOfSpeech": "n",
    "ipa": "/dɪˈsɪʒ.ən/",
    "example": "The manager discussed the decision with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-263",
    "term": "decorate",
    "meaning": "trang trí, trang hoàng",
    "partOfSpeech": "v",
    "ipa": "/ˈdek.ər.eɪt/",
    "example": "The team will decorate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-264",
    "term": "decrease",
    "meaning": "sự sụt giảm; làm giảm đi",
    "partOfSpeech": "n",
    "ipa": "/ˈdiː.kriːs/",
    "example": "The manager discussed the decrease with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-265",
    "term": "dedicate",
    "meaning": "cống hiến, tận hiến",
    "partOfSpeech": "v",
    "ipa": "/ˈded.ə.keɪt/",
    "example": "The team will dedicate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-266",
    "term": "deduct",
    "meaning": "khấu trừ, trừ đi",
    "partOfSpeech": "v",
    "ipa": "/dɪˈdʌkt/",
    "example": "The team will deduct the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-267",
    "term": "definite",
    "meaning": "xác định rõ, rõ ràng",
    "partOfSpeech": "adj",
    "ipa": "/ˈdef.ən.ət/",
    "example": "The company selected an definite option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-268",
    "term": "definitely",
    "meaning": "rõ ràng, dứt khoát, chắc chắn",
    "partOfSpeech": "adv",
    "ipa": "/ˈdef.ən.ət.li/",
    "example": "The team will definitely the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-269",
    "term": "degree",
    "meaning": "mức độ, trình độ, cấp bậc độ, nhiệt độ",
    "partOfSpeech": "n",
    "ipa": "/dɪˈɡriː/",
    "example": "The manager discussed the degree in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-270",
    "term": "delay",
    "meaning": "sự chậm trễ, trì hoãn; làm chậm, hoãn lại",
    "partOfSpeech": "n, v",
    "ipa": "/dɪˈleɪ/",
    "example": "The team will delay the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-271",
    "term": "delighted",
    "meaning": "hài lòng, vui mừng",
    "partOfSpeech": "adj",
    "ipa": "/dɪˈlaɪ.t̬ɪd/",
    "example": "The company selected an delighted option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-272",
    "term": "deliver",
    "meaning": "phân phối, giao hàng, đem tới phát biểu",
    "partOfSpeech": "v",
    "ipa": "/dɪˈlɪv.ɚ/",
    "example": "The team will deliver the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-273",
    "term": "delivery",
    "meaning": "sự phân phát, giao hàng sự phát biểu",
    "partOfSpeech": "n",
    "ipa": "/dɪˈlɪv.ɚ.i/",
    "example": "The manager discussed the delivery with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-274",
    "term": "demand",
    "meaning": "sự đòi hỏi; yêu cầu",
    "partOfSpeech": "n, v",
    "ipa": "/dɪˈmænd/",
    "example": "The team will demand the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-275",
    "term": "demanding",
    "meaning": "yêu cầu cao, đòi hỏi khắt khe",
    "partOfSpeech": "adj",
    "ipa": "/dɪˈmæn.dɪŋ/",
    "example": "The company selected an demanding option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-276",
    "term": "demonstrate",
    "meaning": "làm mẫu, giải thích biểu tình",
    "partOfSpeech": "v",
    "ipa": "/ˈdem.ən.streɪt/",
    "example": "The team will demonstrate the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-277",
    "term": "depart",
    "meaning": "rời đi từ giã",
    "partOfSpeech": "v",
    "ipa": "/dɪˈpɑːrt/",
    "example": "The team will depart the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-278",
    "term": "department",
    "meaning": "khoa, bộ",
    "partOfSpeech": "n",
    "ipa": "/dɪˈpɑːrt.mənt/",
    "example": "The manager discussed the department before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-279",
    "term": "depend",
    "meaning": "phụ thuộc, lệ thuộc",
    "partOfSpeech": "v",
    "ipa": "/dɪˈpend/",
    "example": "The team will depend the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-280",
    "term": "dependence",
    "meaning": "sự phụ thuộc",
    "partOfSpeech": "n",
    "ipa": "/dɪˈpen.dəns/",
    "example": "The manager discussed the dependence before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-281",
    "term": "deposit",
    "meaning": "tiền cọc; đặt cọc",
    "partOfSpeech": "n, v",
    "ipa": "/dɪˈpɑː.zɪt/",
    "example": "The team will deposit the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-282",
    "term": "description",
    "meaning": "bản mô tả, sự mô tả",
    "partOfSpeech": "n",
    "ipa": "/dɪˈskrɪp.ʃən/",
    "example": "The manager discussed the description at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-283",
    "term": "designate",
    "meaning": "chỉ định, bổ nhiệm",
    "partOfSpeech": "v",
    "ipa": "/ˈdez.ɪɡ.neɪt/",
    "example": "The team will designate the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-284",
    "term": "dessert",
    "meaning": "món tráng miệng",
    "partOfSpeech": "n",
    "ipa": "/dɪˈzɝːt/",
    "example": "The manager discussed the dessert before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-285",
    "term": "destination",
    "meaning": "đích đến, điểm đến dự định",
    "partOfSpeech": "n",
    "ipa": "/ˌdes.təˈneɪ.ʃən/",
    "example": "The manager discussed the destination at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-286",
    "term": "detail",
    "meaning": "chi tiết, tiểu tiết; trình bày chi tiết, làm rõ",
    "partOfSpeech": "n, v",
    "ipa": "/ˈdiː.teɪl/",
    "example": "The team will detail the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-287",
    "term": "detailed",
    "meaning": "chi tiết, cụ thể",
    "partOfSpeech": "adj",
    "ipa": "/ˈdiː.teɪld/",
    "example": "The company selected an detailed option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-288",
    "term": "detect",
    "meaning": "dò ra, tìm ra, phát hiện",
    "partOfSpeech": "v",
    "ipa": "/dɪˈtekt/",
    "example": "The team will detect the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-289",
    "term": "deterioration",
    "meaning": "sự hư hại, xuống cấp, sa đọa",
    "partOfSpeech": "n",
    "ipa": "/dɪˌtɪr.i.əˈreɪ.ʃən/",
    "example": "The manager discussed the deterioration before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-290",
    "term": "determine",
    "meaning": "xác định rõ, định rõ quyết định, quyết tâm",
    "partOfSpeech": "v",
    "ipa": "/dɪˈtɝː.mɪn/",
    "example": "The team will determine the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-291",
    "term": "determined",
    "meaning": "quyết tâm, kiên quyết",
    "partOfSpeech": "adj",
    "ipa": "/dɪˈtɝː.mɪnd/",
    "example": "The company selected an determined option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-292",
    "term": "develop",
    "meaning": "phát triển, tiến triển",
    "partOfSpeech": "v",
    "ipa": "/dɪˈvel.əp/",
    "example": "The team will develop the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-293",
    "term": "developer",
    "meaning": "người phát triển, lập trình viên",
    "partOfSpeech": "n",
    "ipa": "/dɪˈvel.ə.pɚ/",
    "example": "The manager discussed the developer during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-294",
    "term": "development",
    "meaning": "sự phát triển",
    "partOfSpeech": "n",
    "ipa": "/dɪˈvel.əp.mənt/",
    "example": "The manager discussed the development at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-295",
    "term": "device",
    "meaning": "thiết bị, máy móc phương sách",
    "partOfSpeech": "n",
    "ipa": "/dɪˈvaɪs/",
    "example": "The manager discussed the device during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-296",
    "term": "diagnose",
    "meaning": "chẩn đoán",
    "partOfSpeech": "v",
    "ipa": "/ˌdaɪ.əɡˈnoʊz/",
    "example": "The team will diagnose the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-297",
    "term": "differential",
    "meaning": "khác biệt, chênh lệch",
    "partOfSpeech": "adj",
    "ipa": "/ˌdɪf.əˈren.ʃəl/",
    "example": "The company selected an differential option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-298",
    "term": "diligent",
    "meaning": "chăm chỉ, cần cù 299 director n giám đốc, người điều hành, đạo diễn",
    "partOfSpeech": "adj",
    "ipa": "/ˈdɪl.ə.dʒənt/",
    "example": "The company selected an diligent option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-299",
    "term": "director",
    "partOfSpeech": "n",
    "ipa": "/dəˈrek.tɚ/",
    "meaning": "giám đốc, người điều hành, đạo diễn",
    "example": "The manager discussed the director with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-300",
    "term": "disagree",
    "meaning": "bất đồng, không khớp với nhau",
    "partOfSpeech": "v",
    "ipa": "/ˌdɪs.əˈɡriː/",
    "example": "The team will disagree the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-301",
    "term": "disagreement",
    "meaning": "sự bất đồng, mối bất hòa, mâu thuẫn",
    "partOfSpeech": "n",
    "ipa": "/ˌdɪs.əˈɡriː.mənt/",
    "example": "The manager discussed the disagreement at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-302",
    "term": "disappointing",
    "meaning": "đáng thất vọng",
    "partOfSpeech": "adj",
    "ipa": "/ˌdɪs.əˈpɔɪn.t̬ɪŋ/",
    "example": "The company selected an disappointing option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-303",
    "term": "disconnect",
    "meaning": "ngắt kết nối",
    "partOfSpeech": "v",
    "ipa": "/ˌdɪs.kəˈnekt/",
    "example": "The team will disconnect the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-304",
    "term": "discount",
    "meaning": "sự giảm giá, chiết khấu; giảm giá, bớt giá",
    "partOfSpeech": "n, v",
    "ipa": "/ˈdɪs.kaʊnt/",
    "example": "The team will discount the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-305",
    "term": "discrepancy",
    "meaning": "khác biệt, chênh lệch, điểm không đồng nhất",
    "partOfSpeech": "n",
    "ipa": "/dɪˈskrep.ən.si/",
    "example": "The manager discussed the discrepancy at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-306",
    "term": "discrimination",
    "meaning": "sự phân biệt đối xử",
    "partOfSpeech": "n",
    "ipa": "/dɪˌskrɪm.əˈneɪ.ʃən/",
    "example": "The manager discussed the discrimination in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-307",
    "term": "discuss",
    "meaning": "thảo luận, tranh luận",
    "partOfSpeech": "v",
    "ipa": "/dɪˈskʌs/",
    "example": "The team will discuss the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-308",
    "term": "discussion",
    "meaning": "cuộc tranh luận, thảo luận",
    "partOfSpeech": "n",
    "ipa": "/dɪˈskʌʃ.ən/",
    "example": "The manager discussed the discussion before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-309",
    "term": "dish",
    "meaning": "đĩa đựng thức ăn, món ăn",
    "partOfSpeech": "n",
    "ipa": "/dɪʃ/",
    "example": "The manager discussed the dish at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-310",
    "term": "dismiss",
    "meaning": "giải tán, thải hồi",
    "partOfSpeech": "v",
    "ipa": "/dɪˈsmɪs/",
    "example": "The team will dismiss the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-311",
    "term": "dismissive",
    "meaning": "thô bạo, tùy tiện",
    "partOfSpeech": "adj",
    "ipa": "/dɪˈsmɪs.ɪv/",
    "example": "The company selected an dismissive option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-312",
    "term": "display",
    "meaning": "sự bày biện; trưng bày, phô diễn",
    "partOfSpeech": "n, v",
    "ipa": "/dɪˈspleɪ/",
    "example": "The team will display the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-313",
    "term": "disposable",
    "meaning": "dùng một lần, sẵn có để dùng",
    "partOfSpeech": "adj",
    "ipa": "/dɪˈspoʊ.zə.bəl/",
    "example": "The company selected an disposable option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-314",
    "term": "dispose",
    "meaning": "vứt bỏ, giải quyết 315 dispute n, v cuộc bàn cãi, cuộc tranh luận; tranh luận",
    "partOfSpeech": "v",
    "ipa": "/dɪˈspoʊz/",
    "example": "The team will dispose the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-315",
    "term": "dispute",
    "partOfSpeech": "n, v",
    "ipa": "/dɪˈspjuːt/",
    "meaning": "cuộc bàn cãi, cuộc tranh luận; tranh luận",
    "example": "The team will dispute the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-316",
    "term": "disruption",
    "meaning": "sự phá vỡ, đập gãy",
    "partOfSpeech": "n",
    "ipa": "/dɪsˈrʌp.ʃən/",
    "example": "The manager discussed the disruption before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-317",
    "term": "distinctive",
    "meaning": "đặc biệt, độc đáo",
    "partOfSpeech": "adj",
    "ipa": "/dɪˈstɪŋk.tɪv/",
    "example": "The company selected an distinctive option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-318",
    "term": "distinguish",
    "meaning": "phân biệt, nhận ra",
    "partOfSpeech": "v",
    "ipa": "/dɪˈstɪŋ.ɡwɪʃ/",
    "example": "The team will distinguish the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-319",
    "term": "distribute",
    "meaning": "phân phát, phân bổ",
    "partOfSpeech": "v",
    "ipa": "/dɪˈstrɪb.juːt/",
    "example": "The team will distribute the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-320",
    "term": "distribution",
    "meaning": "sự phân phát 321 dividend n số bị chia",
    "partOfSpeech": "n",
    "ipa": "/ˌdɪs.trɪˈbjuː.ʃən/",
    "example": "The manager discussed the distribution at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-321",
    "term": "dividend",
    "partOfSpeech": "n",
    "ipa": "/ˈdɪv.ə.dend/",
    "meaning": "cổ tức; số bị chia",
    "example": "The manager discussed the dividend with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-322",
    "term": "document",
    "meaning": "văn kiện, tài liệu; dẫn chứng tư liệu",
    "partOfSpeech": "n",
    "ipa": "/ˈdɑː.kjə.mənt/",
    "example": "The manager discussed the document before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-323",
    "term": "donate",
    "meaning": "quyên góp, đóng góp",
    "partOfSpeech": "v",
    "ipa": "/ˈdoʊ.neɪt/",
    "example": "The team will donate the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-324",
    "term": "donation",
    "meaning": "sự quyên góp, sự hiến tặng",
    "partOfSpeech": "n",
    "ipa": "/doʊˈneɪ.ʃən/",
    "example": "The manager discussed the donation with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-325",
    "term": "double",
    "meaning": "nhân đôi, gấp dôi",
    "partOfSpeech": "n, adj, adv",
    "ipa": "/ˈdʌb.əl/",
    "example": "The team will double the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-326",
    "term": "download",
    "meaning": "tải xuống",
    "partOfSpeech": "v",
    "ipa": "/ˈdaʊn.loʊd/",
    "example": "The team will download the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-327",
    "term": "downsize",
    "meaning": "cắt giảm",
    "partOfSpeech": "v",
    "ipa": "/ˈdaʊn.saɪz/",
    "example": "The team will downsize the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-328",
    "term": "downturn",
    "meaning": "sự suy sụp",
    "partOfSpeech": "n",
    "ipa": "/ˈdaʊn.tɝːn/",
    "example": "The manager discussed the downturn with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-329",
    "term": "downward",
    "meaning": "trở xuống, trở về sau",
    "partOfSpeech": "adv",
    "ipa": "/ˈdaʊn.wɚd/",
    "example": "The team will downward the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-330",
    "term": "drastically",
    "meaning": "mạnh mẽ, quyết liệt",
    "partOfSpeech": "adv",
    "ipa": "/ˈdræs.tɪ.kəl.i/",
    "example": "The team will drastically the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-331",
    "term": "draw",
    "meaning": "kéo, lôi, thu hút vẽ",
    "partOfSpeech": "v",
    "ipa": "/drɑː/",
    "example": "The team will draw the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-332",
    "term": "drawer",
    "meaning": "ngăn kéo",
    "partOfSpeech": "n",
    "ipa": "/drɑː/",
    "example": "The manager discussed the drawer in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-333",
    "term": "drive",
    "meaning": "cuộc đua; lái xe",
    "partOfSpeech": "n, v",
    "ipa": "/draɪv/",
    "example": "The team will drive the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-334",
    "term": "dull",
    "meaning": "chậm hiểu, đần độn cùn",
    "partOfSpeech": "adj",
    "ipa": "/dʌl/",
    "example": "The company selected an dull option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-335",
    "term": "duration",
    "meaning": "khoảng thời gian, thời hạn",
    "partOfSpeech": "n",
    "ipa": "/djʊəˈreɪ.ʃən/",
    "example": "The manager discussed the duration with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-336",
    "term": "duty-free",
    "meaning": "miễn thuế",
    "partOfSpeech": "adj, adv",
    "ipa": "/ˌduː.t̬iˈfriː/",
    "example": "The team will duty-free the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-337",
    "term": "earn",
    "meaning": "kiếm được, giành được",
    "partOfSpeech": "v",
    "ipa": "/ɝːn/",
    "example": "The team will earn the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-338",
    "term": "earnings",
    "meaning": "số tiền kiếm được 339 economical adj tiết kiệm, kinh tế",
    "partOfSpeech": "n",
    "ipa": "/ˈɝː.nɪŋz/",
    "example": "The manager discussed the earnings during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-339",
    "term": "economical",
    "partOfSpeech": "adj",
    "ipa": "/ˌiː.kəˈnɑː.mɪ.kəl/",
    "meaning": "tiết kiệm, kinh tế",
    "example": "The company selected an economical option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-340",
    "term": "economize",
    "meaning": "tiết kiệm",
    "partOfSpeech": "v",
    "ipa": "/iˈkɑː.nə.maɪz/",
    "example": "The team will economize the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-341",
    "term": "economy",
    "meaning": "nền kinh tế",
    "partOfSpeech": "n",
    "ipa": "/iˈkɑː.nə.mi/",
    "example": "The manager discussed the economy with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-342",
    "term": "effective",
    "meaning": "hiệu quả, có hiệu lực",
    "partOfSpeech": "adj",
    "ipa": "/əˈfek.tɪv/",
    "example": "The company selected an effective option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-343",
    "term": "effectively",
    "meaning": "có hiệu quả",
    "partOfSpeech": "adv",
    "ipa": "/əˈfek.tɪv.li/",
    "example": "The team will effectively the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-344",
    "term": "effectiveness",
    "meaning": "sự hiệu quả",
    "partOfSpeech": "n",
    "ipa": "/əˈfek.tɪv.nəs/",
    "example": "The manager discussed the effectiveness in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-345",
    "term": "efficiency",
    "meaning": "năng lực, hiệu suất, năng suất",
    "partOfSpeech": "n",
    "ipa": "/ɪˈfɪʃ.ən.si/",
    "example": "The manager discussed the efficiency at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-346",
    "term": "efficient",
    "meaning": "năng suất cao, hiệu suất tốt",
    "partOfSpeech": "adj",
    "ipa": "/ɪˈfɪʃ.ənt/",
    "example": "The company selected an efficient option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-347",
    "term": "efficiently",
    "meaning": "có hiệu nghiệm",
    "partOfSpeech": "adv",
    "ipa": "/ɪˈfɪʃ.ənt.li/",
    "example": "The team will efficiently the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-348",
    "term": "elderly",
    "meaning": "có tuổi, lớn tuổi",
    "partOfSpeech": "adj",
    "ipa": "/ˈel.dɚ.li/",
    "example": "The company selected an elderly option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-349",
    "term": "elevator",
    "meaning": "thang máy, máy nâng",
    "partOfSpeech": "n",
    "ipa": "/ˈel.ə.veɪ.t̬ɚ/",
    "example": "The manager discussed the elevator during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-350",
    "term": "embark",
    "meaning": "bắt đầu, lên đường, dấn thân vào",
    "partOfSpeech": "v",
    "ipa": "/ɪmˈbɑːrk/",
    "example": "The team will embark the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-351",
    "term": "emergency",
    "meaning": "trường hợp khẩn cấp",
    "partOfSpeech": "n",
    "ipa": "/ɪˈmɝː.dʒən.si/",
    "example": "The manager discussed the emergency before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-352",
    "term": "emphasize",
    "meaning": "nhấn mạnh",
    "partOfSpeech": "v",
    "ipa": "/ˈem.fə.saɪz/",
    "example": "The team will emphasize the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-353",
    "term": "employer",
    "meaning": "người làm chủ, người sử dụng lao động",
    "partOfSpeech": "n",
    "ipa": "/ɪmˈplɔɪ.ɚ/",
    "example": "The manager discussed the employer with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-354",
    "term": "employment",
    "meaning": "việc làm, sự thuê người làm",
    "partOfSpeech": "n",
    "ipa": "/ɪmˈplɔɪ.mənt/",
    "example": "The manager discussed the employment with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-355",
    "term": "enable",
    "meaning": "cho phép, làm cho có khả năng làm gì đó",
    "partOfSpeech": "v",
    "ipa": "/ɪˈneɪ.bəl/",
    "example": "The team will enable the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-356",
    "term": "enclose",
    "meaning": "vây quanh, rào quanh, gửi kèm",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈkloʊz/",
    "example": "The team will enclose the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-357",
    "term": "encourage",
    "meaning": "động viên, cổ vũ",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈkɝː.ɪdʒ/",
    "example": "The team will encourage the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-358",
    "term": "endure",
    "meaning": "chịu đựng, cam chịu",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈdʊr/",
    "example": "The team will endure the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-359",
    "term": "engineer",
    "meaning": "kỹ sư",
    "partOfSpeech": "n",
    "ipa": "/ˌen.dʒɪˈnɪr/",
    "example": "The manager discussed the engineer during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-360",
    "term": "engineering",
    "meaning": "công việc kỹ sư",
    "partOfSpeech": "n",
    "ipa": "/ˌen.dʒɪˈnɪr.ɪŋ/",
    "example": "The manager discussed the engineering at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-361",
    "term": "enhance",
    "meaning": "làm tăng thêm, đề cao, đẩy mạnh",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈhæns/",
    "example": "The team will enhance the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-362",
    "term": "enlighten",
    "meaning": "làm sáng tỏ, khai sáng",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈlaɪ.t̬ən/",
    "example": "The team will enlighten the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-363",
    "term": "enroll",
    "meaning": "đăng ký, ghi tên",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈrəʊl/",
    "example": "The team will enroll the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-364",
    "term": "ensure",
    "meaning": "bảo đảm, chắc chắn",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈʃʊr/",
    "example": "The team will ensure the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-365",
    "term": "enterprise",
    "meaning": "xí nghiệp, doanh nghiệp",
    "partOfSpeech": "n",
    "ipa": "/ˈen.t̬ɚ.praɪz/",
    "example": "The manager discussed the enterprise at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-366",
    "term": "enthusiastic",
    "meaning": "nhiệt tình, hứng khởi",
    "partOfSpeech": "adj",
    "ipa": "/ɪnˌθuː.ziˈæs.tɪk/",
    "example": "The company selected an enthusiastic option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-367",
    "term": "enthusiastically",
    "meaning": "hăng say, nhiệt tình",
    "partOfSpeech": "adv",
    "ipa": "/ɪnˌθuː.ziˈæs.tɪ.kəl.i/",
    "example": "The team will enthusiastically the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-368",
    "term": "entitlement",
    "meaning": "quyền hạn, sự được phép làm",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈtaɪ.t̬əl.mənt/",
    "example": "The manager discussed the entitlement at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-369",
    "term": "entrée",
    "meaning": "món chính sự gia nhập, thâm nhập, tiến vào",
    "partOfSpeech": "n",
    "ipa": "/ˈɑːn.treɪ/",
    "example": "The manager discussed the entrée before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-370",
    "term": "environment",
    "meaning": "môi trường",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈvaɪ.rən.mənt/",
    "example": "The manager discussed the environment at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-371",
    "term": "environmental",
    "meaning": "(thuộc) môi trường",
    "partOfSpeech": "adj",
    "ipa": "/ɪnˌvaɪ.rənˈmen.t̬əl/",
    "example": "The company selected an environmental option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-372",
    "term": "equivalent",
    "meaning": "tương đương; vật tương đương",
    "partOfSpeech": "adj, n",
    "ipa": "/ɪˈkwɪv.əl.ənt/",
    "example": "The company selected an equivalent option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-373",
    "term": "essential",
    "meaning": "(thuộc) bản chất, cốt lõi",
    "partOfSpeech": "adj",
    "ipa": "/ɪˈsen.ʃəl/",
    "example": "The company selected an essential option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-374",
    "term": "estimate",
    "meaning": "ước tính, dự đoán",
    "partOfSpeech": "v",
    "ipa": "/ˈes.tə.meɪt/",
    "example": "The team will estimate the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-375",
    "term": "evaluate",
    "meaning": "ước lượng, đánh giá",
    "partOfSpeech": "v",
    "ipa": "/ɪˈvæl.ju.eɪt/",
    "example": "The team will evaluate the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-376",
    "term": "evolve",
    "meaning": "tiến hóa",
    "partOfSpeech": "v",
    "ipa": "/ɪˈvɑːlv/",
    "example": "The team will evolve the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-377",
    "term": "event",
    "meaning": "sự kiện, sự việc",
    "partOfSpeech": "n",
    "ipa": "/ɪˈvent/",
    "example": "The manager discussed the event in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-378",
    "term": "evidence",
    "meaning": "bằng chứng, chứng cớ",
    "partOfSpeech": "n",
    "ipa": "/ˈev.ə.dəns/",
    "example": "The manager discussed the evidence during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-379",
    "term": "exact",
    "meaning": "chính xác, đúng",
    "partOfSpeech": "adj",
    "ipa": "/ɪɡˈzækt/",
    "example": "The company selected an exact option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-380",
    "term": "examination",
    "meaning": "sự khám xét, kỳ thi",
    "partOfSpeech": "n",
    "ipa": "/ɪɡˌzæm.əˈneɪ.ʃən/",
    "example": "The manager discussed the examination at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-381",
    "term": "examine",
    "meaning": "khảo sát, kiểm tra",
    "partOfSpeech": "v",
    "ipa": "/ɪɡˈzæm.ɪn/",
    "example": "The team will examine the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-382",
    "term": "excel",
    "meaning": "hơn, vượt trội",
    "partOfSpeech": "v",
    "ipa": "/ɪkˈsel/",
    "example": "The team will excel the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-383",
    "term": "excellent",
    "meaning": "xuất sắc, ưu tú",
    "partOfSpeech": "adj",
    "ipa": "/ˈek.səl.ənt/",
    "example": "The company selected an excellent option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-384",
    "term": "executive",
    "meaning": "(thuộc) chấp hành, sự thi hành; tổ chức hành pháp",
    "partOfSpeech": "adj, n",
    "ipa": "/ɪɡˈzek.jə.t̬ɪv/",
    "example": "The company selected an executive option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-385",
    "term": "exhibit",
    "meaning": "trưng bày, triển lãm",
    "partOfSpeech": "v",
    "ipa": "/ɪɡˈzɪb.ɪt/",
    "example": "The team will exhibit the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-386",
    "term": "expand",
    "meaning": "mở rộng, nở phồng",
    "partOfSpeech": "v",
    "ipa": "/ɪkˈspænd/",
    "example": "The team will expand the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-387",
    "term": "expansion",
    "meaning": "sử mở rộng, giãn nở",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈspæn.ʃən/",
    "example": "The manager discussed the expansion before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-388",
    "term": "expect",
    "meaning": "chờ đợi, trông chờ",
    "partOfSpeech": "v",
    "ipa": "/ɪkˈspekt/",
    "example": "The team will expect the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-389",
    "term": "expectation",
    "meaning": "sự mong chờ, ngóng đợi",
    "partOfSpeech": "n",
    "ipa": "/ˌek.spekˈteɪ.ʃən/",
    "example": "The manager discussed the expectation at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-390",
    "term": "expenditure",
    "meaning": "sự tiêu dùng, phí tổn",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈspen.də.tʃɚ/",
    "example": "The manager discussed the expenditure at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-391",
    "term": "expense",
    "meaning": "chi phí, sự tiêu dùng",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈspens/",
    "example": "The manager discussed the expense with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-392",
    "term": "expensive",
    "meaning": "đắt tiền, đắt đỏ",
    "partOfSpeech": "adj",
    "ipa": "/ɪkˈspen.sɪv/",
    "example": "The company selected an expensive option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-393",
    "term": "experience",
    "meaning": "trải nghiệm, kinh nghiệm",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈspɪr.i.əns/",
    "example": "The manager discussed the experience at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-394",
    "term": "experienced",
    "meaning": "người từng trải, người có kinh nghiệm",
    "partOfSpeech": "adj",
    "ipa": "/ɪkˈspɪə.ri.ənst/",
    "example": "The company selected an experienced option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-395",
    "term": "experiment",
    "meaning": "thí nghiệm, thử nghiệm",
    "partOfSpeech": "n, v",
    "ipa": "/ɪkˈsper.ə.mənt/",
    "example": "The team will experiment the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-396",
    "term": "exploration",
    "meaning": "cuộc thăm dò, thám hiểm",
    "partOfSpeech": "n",
    "ipa": "/ˌek.spləˈreɪ.ʃən/",
    "example": "The manager discussed the exploration at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-397",
    "term": "express",
    "meaning": "công văn hỏa tốc; trình bày, diễn đạt",
    "partOfSpeech": "n, v",
    "ipa": "/ɪkˈspres/",
    "example": "The team will express the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-398",
    "term": "extend",
    "meaning": "duỗi thẳng, nới rộng, gia hạn",
    "partOfSpeech": "v",
    "ipa": "/ɪkˈstend/",
    "example": "The team will extend the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-399",
    "term": "extension",
    "meaning": "sự mở rộng, gia hạn",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈsten.ʃən/",
    "example": "The manager discussed the extension before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-400",
    "term": "external",
    "meaning": "bên ngoài, đối ngoại",
    "partOfSpeech": "adj",
    "ipa": "/ɪkˈstɝː.nəl/",
    "example": "The company selected an external option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-401",
    "term": "facility",
    "meaning": "điều kiện thuận lợi, sự dễ dàng, thuận lợi",
    "partOfSpeech": "n",
    "ipa": "/fəˈsɪl.ə.t̬i/",
    "example": "The manager discussed the facility before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-402",
    "term": "factor",
    "meaning": "nhân tố",
    "partOfSpeech": "n",
    "ipa": "/ˈfæk.tɚ/",
    "example": "The manager discussed the factor with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-403",
    "term": "factory",
    "meaning": "nhà máy, xí nghiệp",
    "partOfSpeech": "n",
    "ipa": "/ˈfæk.tɚ.i/",
    "example": "The manager discussed the factory before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-404",
    "term": "fail",
    "meaning": "thất bại, trượt (kì thi)",
    "partOfSpeech": "v",
    "ipa": "/feɪl/",
    "example": "The team will fail the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-405",
    "term": "failure",
    "meaning": "sự thất bại",
    "partOfSpeech": "n",
    "ipa": "/ˈfeɪ.ljɚ/",
    "example": "The manager discussed the failure during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-406",
    "term": "fair",
    "meaning": "hội chợ, phiên chợ; công bằng, không thiên vị",
    "partOfSpeech": "n, adj",
    "ipa": "/fer/",
    "example": "The company selected an fair option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-407",
    "term": "famed",
    "meaning": "nổi tiếng, lừng danh",
    "partOfSpeech": "adj",
    "ipa": "/feɪmd/",
    "example": "The company selected an famed option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-408",
    "term": "fare",
    "meaning": "tiền xe, tiền vé đi đường, đi du lịch",
    "partOfSpeech": "n, v",
    "ipa": "/fer/",
    "example": "The team will fare the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-409",
    "term": "fault",
    "meaning": "lỗi, sai lầm",
    "partOfSpeech": "n",
    "ipa": "/fɑːlt/",
    "example": "The manager discussed the fault before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-410",
    "term": "faulty",
    "meaning": "có thiếu sót, mắc khuyết điểm",
    "partOfSpeech": "adj",
    "ipa": "/ˈfɑːl.t̬i/",
    "example": "The company selected an faulty option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-411",
    "term": "favor",
    "meaning": "thiện ý, sự yêu mến; ưu đãi, thiên vị",
    "partOfSpeech": "n, v",
    "ipa": "/ˈfeɪ.vɚ/",
    "example": "The team will favor the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-412",
    "term": "fax",
    "meaning": "bản fax",
    "partOfSpeech": "n",
    "ipa": "/fæks/",
    "example": "The manager discussed the fax before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-413",
    "term": "feature",
    "meaning": "nét, đặc điểm",
    "partOfSpeech": "n",
    "ipa": "/ˈfiː.tʃɚ/",
    "example": "The manager discussed the feature during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-414",
    "term": "fee",
    "meaning": "lệ phí, tiền thù lao",
    "partOfSpeech": "n",
    "ipa": "/fiː/",
    "example": "The manager discussed the fee before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-415",
    "term": "feedback",
    "meaning": "phản hồi, góp ý",
    "partOfSpeech": "n, v",
    "ipa": "/ˈfiːd.bæk/",
    "example": "The team will feedback the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-416",
    "term": "figure",
    "meaning": "hình dáng, nhân vật; đánh giá, tính toán",
    "partOfSpeech": "n, v",
    "ipa": "/ˈfɪɡ.jɚ/",
    "example": "The team will figure the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-417",
    "term": "file",
    "meaning": "hồ sơ, túi đựng tài liệu",
    "partOfSpeech": "n",
    "ipa": "/faɪl/",
    "example": "The manager discussed the file in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-418",
    "term": "fill",
    "meaning": "làm đầy, nhồi nhét",
    "partOfSpeech": "v",
    "ipa": "/fɪl/",
    "example": "The team will fill the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-419",
    "term": "final",
    "meaning": "cuối cùng",
    "partOfSpeech": "adj",
    "ipa": "/ˈfaɪ.nəl/",
    "example": "The company selected an final option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-420",
    "term": "finance",
    "meaning": "tài chính; hỗ trợ tài chính 421 financial adj (thuộc) tài chính",
    "partOfSpeech": "n, v",
    "ipa": "/ˈfaɪ.næns/",
    "example": "The team will finance the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-421",
    "term": "financial",
    "partOfSpeech": "adj",
    "ipa": "/faɪˈnæn.ʃəl/",
    "meaning": "(thuộc) tài chính",
    "example": "The company selected an financial option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-422",
    "term": "fix",
    "meaning": "sửa chữa gắn chặt, cố định",
    "partOfSpeech": "n, v",
    "ipa": "/fɪks/",
    "example": "The team will fix the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-423",
    "term": "flexible",
    "meaning": "linh hoạt, không cố định",
    "partOfSpeech": "adj",
    "ipa": "/ˈflek.sə.bəl/",
    "example": "The company selected an flexible option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-424",
    "term": "flight",
    "meaning": "chuyến bay, sự rút chạy",
    "partOfSpeech": "n",
    "ipa": "/flaɪt/",
    "example": "The manager discussed the flight before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-425",
    "term": "flight attendant",
    "meaning": "tiếp viên hàng không",
    "partOfSpeech": "n",
    "ipa": "/ˈflaɪt əˌten.dənt/",
    "example": "The manager discussed the flight attendant before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-426",
    "term": "fluctuate",
    "meaning": "dao động, lên xuống",
    "partOfSpeech": "v",
    "ipa": "/ˈflʌk.tʃu.eɪt/",
    "example": "The team will fluctuate the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-427",
    "term": "fluctuation",
    "meaning": "sự dao động",
    "partOfSpeech": "n",
    "ipa": "/ˌflʌk.tʃuˈeɪ.ʃən/",
    "example": "The manager discussed the fluctuation before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-428",
    "term": "focus",
    "meaning": "tập trung",
    "partOfSpeech": "v, n",
    "ipa": "/ˈfoʊ.kəs/",
    "example": "The team will focus the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-429",
    "term": "focused",
    "meaning": "tập trung, chú ý",
    "partOfSpeech": "adj",
    "ipa": "/ˈfoʊ.kəst/",
    "example": "The company selected an focused option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-430",
    "term": "fold",
    "meaning": "gấp, vén; nếp gấp",
    "partOfSpeech": "v, n",
    "ipa": "/foʊld/",
    "example": "The team will fold the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-431",
    "term": "folder",
    "meaning": "bìa cứng, xấp tài liệu",
    "partOfSpeech": "n",
    "ipa": "/ˈfoʊl.dɚ/",
    "example": "The manager discussed the folder with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-432",
    "term": "force",
    "meaning": "sức mạnh, quyền lực",
    "partOfSpeech": "n",
    "ipa": "/fɔːrs/",
    "example": "The manager discussed the force before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-433",
    "term": "forecast",
    "meaning": "dự đoán, tiên đoán",
    "partOfSpeech": "n, v",
    "ipa": "/ˈfɔːr.kæst/",
    "example": "The team will forecast the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-434",
    "term": "foreign",
    "meaning": "nước ngoài, ngoại quốc",
    "partOfSpeech": "adj",
    "ipa": "/ˈfɔːr.ən/",
    "example": "The company selected an foreign option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-435",
    "term": "forget",
    "meaning": "quên",
    "partOfSpeech": "v",
    "ipa": "/fɚˈɡet/",
    "example": "The team will forget the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-436",
    "term": "forgetful",
    "meaning": "tính hay quên, có trí nhớ tồi",
    "partOfSpeech": "adj",
    "ipa": "/fɚˈɡet.fəl/",
    "example": "The company selected an forgetful option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-437",
    "term": "form",
    "meaning": "dáng hình; tạo hình",
    "partOfSpeech": "n",
    "ipa": "/fɔːrm/",
    "example": "The manager discussed the form in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-438",
    "term": "forward",
    "meaning": "về phía trước, tiến lên",
    "partOfSpeech": "adv",
    "ipa": "/ˈfɔːr.wɚd/",
    "example": "The team will forward the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-439",
    "term": "frank",
    "meaning": "ngay thẳng, bộc trực",
    "partOfSpeech": "adj",
    "ipa": "/fræŋk/",
    "example": "The company selected an frank option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-440",
    "term": "frankly",
    "meaning": "thẳng thắn",
    "partOfSpeech": "adv",
    "ipa": "/ˈfræŋ.kli/",
    "example": "The team will frankly the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-441",
    "term": "fuel",
    "meaning": "chất đốt, nhiên liệu",
    "partOfSpeech": "n",
    "ipa": "/ˈfjuː.əl/",
    "example": "The manager discussed the fuel in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-442",
    "term": "fulfill",
    "meaning": "làm đầy",
    "partOfSpeech": "v",
    "ipa": "/fʊlˈfɪl/",
    "example": "The team will fulfill the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-443",
    "term": "function",
    "meaning": "hoạt động; chức năng",
    "partOfSpeech": "v, n",
    "ipa": "/ˈfʌŋk.ʃən/",
    "example": "The team will function the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-444",
    "term": "functional",
    "meaning": "(thuộc) chức năng",
    "partOfSpeech": "adj",
    "ipa": "/ˈfʌŋk.ʃən.əl/",
    "example": "The company selected an functional option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-445",
    "term": "fundraising",
    "meaning": "sự huy động vốn",
    "partOfSpeech": "n",
    "ipa": "/ˈfʌndˌreɪ.zɪŋ/",
    "example": "The manager discussed the fundraising in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-446",
    "term": "furniture",
    "meaning": "đồ đạc",
    "partOfSpeech": "n",
    "ipa": "/ˈfɝː.nɪ.tʃɚ/",
    "example": "The manager discussed the furniture at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-447",
    "term": "further",
    "meaning": "xa hơn, kỹ hơn",
    "partOfSpeech": "adj, adv",
    "ipa": "/ˈfɝː.ðɚ/",
    "example": "The team will further the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-448",
    "term": "gesture",
    "meaning": "điệu bộ, cử chỉ",
    "partOfSpeech": "n",
    "ipa": "/ˈdʒes.tʃɚ/",
    "example": "The manager discussed the gesture before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-449",
    "term": "goal",
    "meaning": "khung thành, cầu môn mục tiêu",
    "partOfSpeech": "n",
    "ipa": "/ɡoʊl/",
    "example": "The manager discussed the goal before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-450",
    "term": "goods",
    "meaning": "của cải, hàng hóa",
    "partOfSpeech": "n",
    "ipa": "/ɡʊdz/",
    "example": "The manager discussed the goods with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-451",
    "term": "gradually",
    "meaning": "dần dần, từ từ",
    "partOfSpeech": "adv",
    "ipa": "/ˈɡrædʒ.u.ə.li/",
    "example": "The team will gradually the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-452",
    "term": "grievance",
    "meaning": "lời than trách",
    "partOfSpeech": "n",
    "ipa": "/ˈɡriː.vəns/",
    "example": "The manager discussed the grievance at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-453",
    "term": "grill",
    "meaning": "chả nướng; nướng, thiêu đốt",
    "partOfSpeech": "n, v",
    "ipa": "/ɡrɪl/",
    "example": "The team will grill the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-454",
    "term": "growth",
    "meaning": "sự tăng trưởng, mức độ tăng trưởng",
    "partOfSpeech": "n",
    "ipa": "/ɡroʊθ/",
    "example": "The manager discussed the growth during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-455",
    "term": "guarantee",
    "meaning": "sự đảm bảo; cam kết",
    "partOfSpeech": "n, v",
    "ipa": "/ˌɡer.ənˈtiː/",
    "example": "The team will guarantee the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-456",
    "term": "guideline",
    "meaning": "quy tắc, nguyên tắc",
    "partOfSpeech": "n",
    "ipa": "/ˈɡaɪd.laɪn/",
    "example": "The manager discussed the guideline at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-457",
    "term": "haggle",
    "meaning": "sự mặc cả; tranh cãi",
    "partOfSpeech": "n, v",
    "ipa": "/ˈhæɡ.əl/",
    "example": "The team will haggle the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-458",
    "term": "handle",
    "meaning": "cán cầm, tay cầm; xử lý",
    "partOfSpeech": "n, v",
    "ipa": "/ˈhæn.dəl/",
    "example": "The team will handle the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-459",
    "term": "handy",
    "meaning": "thuận tiện, sẵn tiện",
    "partOfSpeech": "adj",
    "ipa": "/ˈhæn.di/",
    "example": "The company selected an handy option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-460",
    "term": "harbor",
    "meaning": "bến cảng; che giấu nuôi dưỡng",
    "partOfSpeech": "n, v",
    "ipa": "/ˈhɑː.bər/",
    "example": "The team will harbor the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-461",
    "term": "harmful",
    "meaning": "gây tai hại, có hại",
    "partOfSpeech": "adj",
    "ipa": "/ˈhɑːrm.fəl/",
    "example": "The company selected an harmful option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-462",
    "term": "hazardous",
    "meaning": "mạo hiểm, nguy hiểm",
    "partOfSpeech": "adj",
    "ipa": "/ˈhæz.ɚ.dəs/",
    "example": "The company selected an hazardous option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-463",
    "term": "head office",
    "meaning": "cơ quan đầu não, tổng công ty",
    "partOfSpeech": "n",
    "ipa": "/ˌhed ˈɑː.fɪs/",
    "example": "The manager discussed the head office before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-464",
    "term": "headquarters",
    "meaning": "sở chỉ huy, bộ chỉ huy",
    "partOfSpeech": "n",
    "ipa": "/ˈhedˌkwɔːr.t̬ɚz/",
    "example": "The manager discussed the headquarters with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-465",
    "term": "hesitate",
    "meaning": "do dự, ngập ngừng",
    "partOfSpeech": "v",
    "ipa": "/ˈhez.ə.teɪt/",
    "example": "The team will hesitate the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-466",
    "term": "hesitation",
    "meaning": "sự ngập ngừng, do dự",
    "partOfSpeech": "n",
    "ipa": "/ˌhez.əˈteɪ.ʃən/",
    "example": "The manager discussed the hesitation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-467",
    "term": "hide",
    "meaning": "che giấu, che đậy",
    "partOfSpeech": "n, v",
    "ipa": "/haɪd/",
    "example": "The team will hide the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-468",
    "term": "highlight",
    "meaning": "điểm nổi bật; làm nổi bật",
    "partOfSpeech": "n, v",
    "ipa": "/ˈhaɪ.laɪt/",
    "example": "The team will highlight the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-469",
    "term": "highly",
    "meaning": "rất, lắm, tốt",
    "partOfSpeech": "adv",
    "ipa": "/ˈhaɪ.li/",
    "example": "The team will highly the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-470",
    "term": "hike",
    "meaning": "cuộc đi bộ, cuộc hành quân; đi bộ đường dài",
    "partOfSpeech": "n",
    "ipa": "/haɪk/",
    "example": "The manager discussed the hike with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-471",
    "term": "hire",
    "meaning": "sự thuê; thuê, mướn",
    "partOfSpeech": "n, v",
    "ipa": "/haɪr/",
    "example": "The team will hire the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-472",
    "term": "hold",
    "meaning": "sự cầm, nắm; cầm, giữ",
    "partOfSpeech": "n, v",
    "ipa": "/hoʊld/",
    "example": "The team will hold the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-473",
    "term": "host",
    "meaning": "chủ nhà, người chủ trì; tổ chức, đăng cai",
    "partOfSpeech": "n, v",
    "ipa": "/hoʊst/",
    "example": "The team will host the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-474",
    "term": "identification",
    "meaning": "sự phát hiện, nhận diện",
    "partOfSpeech": "n",
    "ipa": "/aɪˌden.t̬ə.fəˈkeɪ.ʃən/",
    "example": "The manager discussed the identification at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-475",
    "term": "identify",
    "meaning": "nhận diện, nhận biết",
    "partOfSpeech": "v",
    "ipa": "/aɪˈden.t̬ə.faɪ/",
    "example": "The team will identify the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-476",
    "term": "imaginative",
    "meaning": "tưởng tượng, không có thực",
    "partOfSpeech": "adj",
    "ipa": "/ɪˈmædʒ.ə.nə.t̬ɪv/",
    "example": "The company selected an imaginative option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-477",
    "term": "immediate",
    "meaning": "ngay lập tức, trực tiếp",
    "partOfSpeech": "adj",
    "ipa": "/ɪˈmiː.di.ət/",
    "example": "The company selected an immediate option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-478",
    "term": "immediately",
    "meaning": "ngay lập tức, tức thì",
    "partOfSpeech": "adv",
    "ipa": "/ɪˈmiː.di.ət.li/",
    "example": "The team will immediately the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-479",
    "term": "impact",
    "meaning": "tác động, ảnh hưởng",
    "partOfSpeech": "n, v",
    "ipa": "/ˈɪm.pækt/",
    "example": "The team will impact the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-480",
    "term": "impatient",
    "meaning": "thiếu kiên nhẫn",
    "partOfSpeech": "adj",
    "ipa": "/ɪmˈpeɪ.ʃənt/",
    "example": "The company selected an impatient option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-481",
    "term": "impersonate",
    "meaning": "mạo danh, đóng vai, nhại lại",
    "partOfSpeech": "v",
    "ipa": "/ɪmˈpɝː.sən.eɪt/",
    "example": "The team will impersonate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-482",
    "term": "implement",
    "meaning": "dụng cụ, phương tiện; thi hành, thực hiện, áp dụng",
    "partOfSpeech": "n, v",
    "ipa": "/ˈɪm.plə.ment/",
    "example": "The team will implement the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-483",
    "term": "imply",
    "meaning": "ngụ ý, ý nói",
    "partOfSpeech": "v",
    "ipa": "/ɪmˈplaɪ/",
    "example": "The team will imply the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-484",
    "term": "impression",
    "meaning": "ấn tượng dấu vết",
    "partOfSpeech": "n",
    "ipa": "/ɪmˈpreʃ.ən/",
    "example": "The manager discussed the impression before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-485",
    "term": "improper",
    "meaning": "không thích hợp, không phù hợp",
    "partOfSpeech": "adj",
    "ipa": "/ɪmˈprɑː.pɚ/",
    "example": "The company selected an improper option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-486",
    "term": "improve",
    "meaning": "cải thiện",
    "partOfSpeech": "v",
    "ipa": "/ɪmˈpruːv/",
    "example": "The team will improve the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-487",
    "term": "improvement",
    "meaning": "sự cải thiện, cải tiến",
    "partOfSpeech": "n",
    "ipa": "/ɪmˈpruːv.mənt/",
    "example": "The manager discussed the improvement with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-488",
    "term": "incentive",
    "meaning": "khuyến khích; sự khích lệ, thúc đẩy",
    "partOfSpeech": "adj, n",
    "ipa": "/ɪnˈsen.t̬ɪv/",
    "example": "The company selected an incentive option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-489",
    "term": "inclined",
    "meaning": "có thiên hướng, khuynh hướng",
    "partOfSpeech": "adj",
    "ipa": "/ɪnˈklaɪnd/",
    "example": "The company selected an inclined option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-490",
    "term": "include",
    "meaning": "bao gồm, gồm có",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈkluːd/",
    "example": "The team will include the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-491",
    "term": "inclusion",
    "meaning": "sự bao gồm, tính vào",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈkluː.ʒən/",
    "example": "The manager discussed the inclusion in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-492",
    "term": "income",
    "meaning": "thu nhập, lợi tức",
    "partOfSpeech": "n",
    "ipa": "/ˈɪn.kʌm/",
    "example": "The manager discussed the income in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-493",
    "term": "inconvenience",
    "meaning": "sự bất tiện, phiền hà",
    "partOfSpeech": "n",
    "ipa": "/ˌɪn.kənˈviːn.jəns/",
    "example": "The manager discussed the inconvenience before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-494",
    "term": "increase",
    "meaning": "sự tăng lên; tăng thêm",
    "partOfSpeech": "v, n",
    "ipa": "/ɪnˈkriːs/",
    "example": "The team will increase the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-495",
    "term": "indicate",
    "meaning": "chỉ ra, chứng tỏ, biểu thị",
    "partOfSpeech": "v",
    "ipa": "/ˈɪn.də.keɪt/",
    "example": "The team will indicate the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-496",
    "term": "indication",
    "meaning": "sự biểu thị, biểu lộ",
    "partOfSpeech": "n",
    "ipa": "/ˌɪn.dəˈkeɪ.ʃən/",
    "example": "The manager discussed the indication before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-497",
    "term": "individual",
    "meaning": "cá nhân; riêng lẻ, tách biệt",
    "partOfSpeech": "n, v",
    "ipa": "/ˌɪn.dəˈvɪdʒ.u.əl/",
    "example": "The team will individual the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-498",
    "term": "individually",
    "meaning": "riêng lẻ",
    "partOfSpeech": "adv",
    "ipa": "/ˌɪn.dəˈvɪdʒ.u.ə.li/",
    "example": "The team will individually the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-499",
    "term": "inexperienced",
    "meaning": "thiếu kinh nghiệm",
    "partOfSpeech": "adj",
    "ipa": "/ˌɪn.ɪkˈspɪr.i.ənst/",
    "example": "The company selected an inexperienced option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-500",
    "term": "infer",
    "meaning": "suy ra, kết luận",
    "partOfSpeech": "v",
    "ipa": "/-ˈfɝː/",
    "example": "The team will infer the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-501",
    "term": "inflate",
    "meaning": "bơm phồng, thổi phồng",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈfleɪt/",
    "example": "The team will inflate the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-502",
    "term": "inflation",
    "meaning": "sự bơm phồng, lạm phát",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈfleɪ.ʃən/",
    "example": "The manager discussed the inflation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-503",
    "term": "influence",
    "meaning": "ảnh hưởng, uy lực; chi phối, tác động",
    "partOfSpeech": "v",
    "ipa": "/ˈɪn.flu.əns/",
    "example": "The team will influence the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-504",
    "term": "influential",
    "meaning": "có ảnh hưởng, có tác dụng",
    "partOfSpeech": "adj",
    "ipa": "/ˌɪn.fluˈen.ʃəl/",
    "example": "The company selected an influential option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-505",
    "term": "information",
    "meaning": "thông tin",
    "partOfSpeech": "n",
    "ipa": "/ˌɪn.fɚˈmeɪ.ʃən/",
    "example": "The manager discussed the information with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-506",
    "term": "input",
    "meaning": "dữ liệu đầu vào",
    "partOfSpeech": "n",
    "ipa": "/ˈɪn.pʊt/",
    "example": "The manager discussed the input before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-507",
    "term": "inquiry",
    "meaning": "sự điều tra, thẩm vấn",
    "partOfSpeech": "n",
    "ipa": "/ˈɪŋ.kwɚ.i/",
    "example": "The manager discussed the inquiry at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-508",
    "term": "install",
    "meaning": "cài đặt, tải xuống",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈstɑːl/",
    "example": "The team will install the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-509",
    "term": "installation",
    "meaning": "sự cài đặt",
    "partOfSpeech": "n",
    "ipa": "/ˌɪn.stəˈleɪ.ʃən/",
    "example": "The manager discussed the installation during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-510",
    "term": "insurance",
    "meaning": "sự bảo hiểm, hợp đồng bảo hiểm",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈʃɜ.r.əns/",
    "example": "The manager discussed the insurance in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-511",
    "term": "insure",
    "meaning": "bảo hiểm, đảm bảo",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈʃʊr/",
    "example": "The team will insure the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-512",
    "term": "intend",
    "meaning": "định, có ý định",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈtend/",
    "example": "The team will intend the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-513",
    "term": "intention",
    "meaning": "dự định, ý định",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈten.ʃən/",
    "example": "The manager discussed the intention in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-514",
    "term": "intently",
    "meaning": "chăm chú, chú ý",
    "partOfSpeech": "adv",
    "ipa": "/ɪnˈtent.li/",
    "example": "The team will intently the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-515",
    "term": "intern",
    "meaning": "thực tập sinh",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈtɝːn/",
    "example": "The manager discussed the intern at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-516",
    "term": "internal",
    "meaning": "bên trong, nội bộ",
    "partOfSpeech": "adj",
    "ipa": "/ɪnˈtɝː.nəl/",
    "example": "The company selected an internal option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-517",
    "term": "international",
    "meaning": "quốc tế, đa quốc gia",
    "partOfSpeech": "adj",
    "ipa": "/ˌɪn.t̬ɚˈnæʃ.ən.əl/",
    "example": "The company selected an international option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-518",
    "term": "internship",
    "meaning": "kỳ thực tập",
    "partOfSpeech": "n",
    "ipa": "/ˈɪn.tɝːn.ʃɪp/",
    "example": "The manager discussed the internship before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-519",
    "term": "interrupt",
    "meaning": "làm gián đoạn, ngắt quãng",
    "partOfSpeech": "v",
    "ipa": "/ˌɪn.t̬əˈrʌpt/",
    "example": "The team will interrupt the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-520",
    "term": "interview",
    "meaning": "phỏng vấn",
    "partOfSpeech": "n, v",
    "ipa": "/ˈɪn.t̬ɚ.vjuː/",
    "example": "The team will interview the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-521",
    "term": "invaluable",
    "meaning": "vô giá",
    "partOfSpeech": "adj",
    "ipa": "/ɪnˈvæl.jə.bəl/",
    "example": "The company selected an invaluable option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-522",
    "term": "invent",
    "meaning": "phát minh, sáng chế",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈvent/",
    "example": "The team will invent the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-523",
    "term": "invention",
    "meaning": "sự phát minh, sáng kiến, sáng chế",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈven.ʃən/",
    "example": "The manager discussed the invention in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-524",
    "term": "inventory",
    "meaning": "sự kiểm kê, bản kiểm kê",
    "partOfSpeech": "n",
    "ipa": "/ˈɪn.vən.tɔːr.i/",
    "example": "The manager discussed the inventory in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-525",
    "term": "invest",
    "meaning": "đầu tư",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈvest/",
    "example": "The team will invest the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-526",
    "term": "investigation",
    "meaning": "sự điều tra, nghiên cứu",
    "partOfSpeech": "n",
    "ipa": "/ɪnˌves.təˈɡeɪ.ʃən/",
    "example": "The manager discussed the investigation before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-527",
    "term": "investment",
    "meaning": "sự đầu tư, vốn đầu tư",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈvest.mənt/",
    "example": "The manager discussed the investment before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-528",
    "term": "invite",
    "meaning": "mời, rủ lôi cuốn, hấp dẫn",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈvaɪt/",
    "example": "The team will invite the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-529",
    "term": "invoice",
    "meaning": "hóa đơn",
    "partOfSpeech": "n",
    "ipa": "/ˈɪn.vɔɪs/",
    "example": "The manager discussed the invoice in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-530",
    "term": "isolate",
    "meaning": "cô lập, cách ly",
    "partOfSpeech": "v",
    "ipa": "/ˈaɪ.sə.leɪt/",
    "example": "The team will isolate the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-531",
    "term": "item",
    "meaning": "món đồ tin tức",
    "partOfSpeech": "n",
    "ipa": "/ˈaɪ.t̬əm/",
    "example": "The manager discussed the item during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-532",
    "term": "itemize",
    "meaning": "trình bày thành từng khoản, từng món",
    "partOfSpeech": "v",
    "ipa": "/ˈaɪ.t̬ə.maɪz/",
    "example": "The team will itemize the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-533",
    "term": "itinerary",
    "meaning": "hành trình, lịch trình",
    "partOfSpeech": "n",
    "ipa": "/aɪˈtɪn.ə.rer.i/",
    "example": "The manager discussed the itinerary in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-534",
    "term": "jealous",
    "meaning": "ghen ghét, đố kỵ",
    "partOfSpeech": "adj",
    "ipa": "/ˈdʒel.əs/",
    "example": "The company selected an jealous option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-535",
    "term": "jeopardize",
    "meaning": "gây nguy hại, đe dọa",
    "partOfSpeech": "v",
    "ipa": "/ˈdʒep.ɚ.daɪz/",
    "example": "The team will jeopardize the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-536",
    "term": "jeopardy",
    "meaning": "nguy cơ, sự nguy hiểm",
    "partOfSpeech": "n",
    "ipa": "/ˈdʒep.ɚ.di/",
    "example": "The manager discussed the jeopardy in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-537",
    "term": "jobless",
    "meaning": "thất nghiệp, không có việc làm",
    "partOfSpeech": "adj",
    "ipa": "/ˈdʒɑːb.ləs/",
    "example": "The company selected an jobless option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-538",
    "term": "join",
    "meaning": "nối, ghép tham gia",
    "partOfSpeech": "v",
    "ipa": "/dʒɔɪn/",
    "example": "The team will join the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-539",
    "term": "joint",
    "meaning": "mối nối, khớp; chung",
    "partOfSpeech": "n, adj",
    "ipa": "/dʒɔɪnt/",
    "example": "The company selected an joint option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-540",
    "term": "journal",
    "meaning": "báo, tạp chí",
    "partOfSpeech": "n",
    "ipa": "/ˈdʒɝː.nəl/",
    "example": "The manager discussed the journal before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-541",
    "term": "journey",
    "meaning": "cuộc hành trình",
    "partOfSpeech": "n",
    "ipa": "/ˈdʒɝː.ni/",
    "example": "The manager discussed the journey before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-542",
    "term": "judge",
    "meaning": "quan toàn, thẩm phán, người phán xử; xét xử, phân xử",
    "partOfSpeech": "n, v",
    "ipa": "/dʒʌdʒ/",
    "example": "The team will judge the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-543",
    "term": "justice",
    "meaning": "sự công bằng, luật pháp",
    "partOfSpeech": "n",
    "ipa": "/ˈdʒʌs.tɪs/",
    "example": "The manager discussed the justice before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-544",
    "term": "justification",
    "meaning": "sự bào chữa, biện hộ",
    "partOfSpeech": "n",
    "ipa": "/ˌdʒʌs.tə.fəˈkeɪ.ʃən/",
    "example": "The manager discussed the justification at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-545",
    "term": "justify",
    "meaning": "bào chữa, phân bua, biện hộ",
    "partOfSpeech": "v",
    "ipa": "/ˈdʒʌs.tə.faɪ/",
    "example": "The team will justify the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-546",
    "term": "keen",
    "meaning": "say mê, ham thích",
    "partOfSpeech": "adj",
    "ipa": "/kiːn/",
    "example": "The company selected an keen option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-547",
    "term": "keep",
    "meaning": "giữ lại, giam giữ",
    "partOfSpeech": "v",
    "ipa": "/kiːp/",
    "example": "The team will keep the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-548",
    "term": "knowledge",
    "meaning": "kiến thức, sự hiểu biết",
    "partOfSpeech": "n",
    "ipa": "/ˈnɑː.lɪdʒ/",
    "example": "The manager discussed the knowledge with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-549",
    "term": "knowledgeable",
    "meaning": "thông thạo, thành thạo, am tường",
    "partOfSpeech": "adj",
    "ipa": "/´nɔlidʒəbl/",
    "example": "The company selected an knowledgeable option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-550",
    "term": "label",
    "meaning": "nhãn, nhãn hiệu",
    "partOfSpeech": "n",
    "ipa": "/'leɪbl/",
    "example": "The manager discussed the label before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-551",
    "term": "labor",
    "meaning": "lao động, công việc chân tay",
    "partOfSpeech": "n",
    "ipa": "/'leibə/",
    "example": "The manager discussed the labor before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-552",
    "term": "lack",
    "meaning": "sự thiếu, thiếu sót",
    "partOfSpeech": "n, v",
    "ipa": "/læk/",
    "example": "The team will lack the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-553",
    "term": "landlord",
    "meaning": "chủ nhà (nhà cho thuê)",
    "partOfSpeech": "n",
    "ipa": "/'lændlɔ:d/",
    "example": "The manager discussed the landlord with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-554",
    "term": "laptop",
    "meaning": "máy tính",
    "partOfSpeech": "n",
    "ipa": "/´læp¸tɔp/",
    "example": "The manager discussed the laptop in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-555",
    "term": "launch",
    "meaning": "Xuồng lớn",
    "partOfSpeech": "n",
    "ipa": "/lɔ:ntʃ/",
    "example": "The manager discussed the launch in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-556",
    "term": "law",
    "meaning": "luật, nội quy, quy định",
    "partOfSpeech": "n",
    "ipa": "/lɑː/",
    "example": "The manager discussed the law at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-557",
    "term": "lay",
    "meaning": "bài thơ ngắn, bài vè ngắn",
    "partOfSpeech": "n",
    "ipa": "/lei/",
    "example": "The manager discussed the lay at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-558",
    "term": "leak",
    "meaning": "lỗ thủng, lỗ rò, khe hở",
    "partOfSpeech": "n",
    "ipa": "/li:k/",
    "example": "The manager discussed the leak at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-559",
    "term": "lean",
    "meaning": "độ nghiêng, độ dốc",
    "partOfSpeech": "n",
    "ipa": "/li:n/",
    "example": "The manager discussed the lean at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-560",
    "term": "lease",
    "meaning": "hợp đồng cho thuê (bất động sản)",
    "partOfSpeech": "n",
    "ipa": "/li:s/",
    "example": "The manager discussed the lease before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-561",
    "term": "leisure",
    "meaning": "thì giờ rỗi rãi, lúc thư nhàn",
    "partOfSpeech": "n",
    "ipa": "/ˈliʒər , ˈlɛʒər/",
    "example": "The manager discussed the leisure before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-562",
    "term": "lend",
    "meaning": "cho vay, cho mượn",
    "partOfSpeech": "v",
    "ipa": "/lend/",
    "example": "The team will lend the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-563",
    "term": "liability",
    "meaning": "trách nhiệm pháp lý, nghĩa vụ pháp lý",
    "partOfSpeech": "n",
    "ipa": "/,laiə'biliti/",
    "example": "The manager discussed the liability during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-564",
    "term": "license",
    "meaning": "bản quyền",
    "partOfSpeech": "n",
    "ipa": "/lái:sn/",
    "example": "The manager discussed the license before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-565",
    "term": "licensing",
    "meaning": "sự cấp giấy phép",
    "partOfSpeech": "n",
    "ipa": "/ˈlaɪ.sən.sɪŋ/",
    "example": "The manager discussed the licensing during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-566",
    "term": "lie",
    "meaning": "sự nói dối, sự nói láo, sự nói điêu, sự dối trá",
    "partOfSpeech": "n",
    "ipa": "/lai/",
    "example": "The manager discussed the lie at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-567",
    "term": "limited",
    "meaning": "hạn chế, có giới hạn",
    "partOfSpeech": "adj",
    "ipa": "/ˈlɪmɪtɪd/",
    "example": "The company selected an limited option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-568",
    "term": "limousine",
    "meaning": "xe hơi",
    "partOfSpeech": "n",
    "ipa": "/´limə¸zi:n/",
    "example": "The manager discussed the limousine during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-569",
    "term": "list",
    "meaning": "danh sách, sổ, bản kê khai",
    "partOfSpeech": "n",
    "ipa": "/list/",
    "example": "The manager discussed the list at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-570",
    "term": "livestock",
    "meaning": "vật nuôi, thú nuôi",
    "partOfSpeech": "n",
    "ipa": "/´laiv¸stɔk/",
    "example": "The manager discussed the livestock during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-571",
    "term": "loan",
    "meaning": "sự vay nợ",
    "partOfSpeech": "n",
    "ipa": "/ləʊn/",
    "example": "The manager discussed the loan at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-572",
    "term": "lobby",
    "meaning": "hành lang",
    "partOfSpeech": "n",
    "ipa": "/lɒb.i/",
    "example": "The manager discussed the lobby before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-573",
    "term": "local",
    "meaning": "địa phương",
    "partOfSpeech": "adj",
    "ipa": "/'ləʊk(ə)l/",
    "example": "The company selected an local option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-574",
    "term": "locate",
    "meaning": "trụ sở ở, nằm ở",
    "partOfSpeech": "v",
    "ipa": "/loʊˈkeɪt/",
    "example": "The team will locate the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-575",
    "term": "log on",
    "meaning": "kết nối với hệ thống",
    "partOfSpeech": "v",
    "ipa": "/lɔg/",
    "example": "The team will log on the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-576",
    "term": "log",
    "meaning": "khúc gỗ mới đốn hạ",
    "partOfSpeech": "n",
    "ipa": "/lɔg/",
    "example": "The manager discussed the log at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-577",
    "term": "loyal",
    "meaning": "trung thành, trung nghĩa, trung kiên",
    "partOfSpeech": "adj",
    "ipa": "/'lɔiəl/",
    "example": "The company selected an loyal option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-578",
    "term": "luggage",
    "meaning": "hành lý",
    "partOfSpeech": "n",
    "ipa": "/'lʌgiʤ/",
    "example": "The manager discussed the luggage before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-579",
    "term": "luxurious",
    "meaning": "sang trọng, lộng lẫy; xa hoa",
    "partOfSpeech": "adj",
    "ipa": "/lʌg´zjuəriəs/",
    "example": "The company selected an luxurious option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-580",
    "term": "luxury",
    "meaning": "sự xa xỉ, sự xa hoa",
    "partOfSpeech": "n",
    "ipa": "/lʌk.ʃər.i/",
    "example": "The manager discussed the luxury in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-581",
    "term": "maintain",
    "meaning": "giữ gìn, duy trì; bảo vệ",
    "partOfSpeech": "v",
    "ipa": "/mein´tein/",
    "example": "The team will maintain the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-582",
    "term": "maintenance",
    "meaning": "sự giữ gìn, sự duy trì; sự bảo vệ",
    "partOfSpeech": "n",
    "ipa": "/´meintənəns/",
    "example": "The manager discussed the maintenance at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-583",
    "term": "major",
    "meaning": "chuyên đề",
    "partOfSpeech": "n",
    "ipa": "/ˈmeɪdʒər/",
    "example": "The manager discussed the major in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-584",
    "term": "manage",
    "meaning": "quản lý",
    "partOfSpeech": "v",
    "ipa": "/'mænɪʤ/",
    "example": "The team will manage the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-585",
    "term": "managerial",
    "meaning": "(thuộc) người quản lý, (thuộc) giám đốc",
    "partOfSpeech": "adj",
    "ipa": "/¸mæni´dʒiəriəl/",
    "example": "The company selected an managerial option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-586",
    "term": "mandatory",
    "meaning": "có tính cách bắt buộc",
    "partOfSpeech": "adj",
    "ipa": "/'mændətəri/",
    "example": "The company selected an mandatory option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-587",
    "term": "manufacture",
    "meaning": "sự chế tạo, sự sản xuất",
    "partOfSpeech": "n",
    "ipa": "/,mænju'fæktʃə/",
    "example": "The manager discussed the manufacture before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-588",
    "term": "manufacturing",
    "meaning": "sự sản xuất; sự chế tạo; sự gia công",
    "partOfSpeech": "n",
    "ipa": "/¸mænju´fæktʃəriη/",
    "example": "The manager discussed the manufacturing before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-589",
    "term": "marketing",
    "meaning": "tiếp thị",
    "partOfSpeech": "n",
    "ipa": "/'mɑ:kitiɳ/",
    "example": "The manager discussed the marketing before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-590",
    "term": "mechanic",
    "meaning": "thợ máy, công nhân cơ khí",
    "partOfSpeech": "n",
    "ipa": "/məˈkænɪk/",
    "example": "The manager discussed the mechanic during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-591",
    "term": "medical",
    "meaning": "(thuộc) y học",
    "partOfSpeech": "adj",
    "ipa": "/'medikə/",
    "example": "The company selected an medical option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-592",
    "term": "medication",
    "meaning": "sự bốc thuốc, sự cho thuốc",
    "partOfSpeech": "n",
    "ipa": "/ˌmɛdɪˈkeɪʃən/",
    "example": "The manager discussed the medication at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-593",
    "term": "medicine",
    "meaning": "y học",
    "partOfSpeech": "n",
    "ipa": "/'medisn/",
    "example": "The manager discussed the medicine during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-594",
    "term": "meeting",
    "meaning": "(chính trị) cuộc mít tinh, cuộc biểu tình",
    "partOfSpeech": "n",
    "ipa": "/'mi:tiɳ/",
    "example": "The manager discussed the meeting before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-595",
    "term": "membership",
    "meaning": "tư cách hội viên, địa vị hội viên",
    "partOfSpeech": "n",
    "ipa": "/'membəʃip/",
    "example": "The manager discussed the membership before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-596",
    "term": "memorandum",
    "meaning": "bản ghi nhớ",
    "partOfSpeech": "n",
    "ipa": "/¸memə´rændəm/",
    "example": "The manager discussed the memorandum before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-597",
    "term": "mention",
    "meaning": "sự kể ra, sự nói đến, sự đề cập",
    "partOfSpeech": "n",
    "ipa": "/'menʃn/",
    "example": "The manager discussed the mention with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-598",
    "term": "merchandise",
    "meaning": "hàng hóa",
    "partOfSpeech": "n",
    "ipa": "/´mə:tʃən¸daiz/",
    "example": "The manager discussed the merchandise at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-599",
    "term": "mere",
    "meaning": "ao hồ",
    "partOfSpeech": "n",
    "ipa": "/miə/",
    "example": "The manager discussed the mere before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-600",
    "term": "merge",
    "meaning": "hoà vào; kết hợp; hợp nhất",
    "partOfSpeech": "v",
    "ipa": "/mə:dʤ/",
    "example": "The team will merge the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-601",
    "term": "merger",
    "meaning": "sự liên doanh liên kết",
    "partOfSpeech": "n",
    "ipa": "/´mə:dʒə/",
    "example": "The manager discussed the merger before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-602",
    "term": "mileage",
    "meaning": "tổng số dặm đã đi được",
    "partOfSpeech": "n",
    "ipa": "/´mailidʒ/",
    "example": "The manager discussed the mileage with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-603",
    "term": "million",
    "meaning": "một triệu",
    "partOfSpeech": "n",
    "ipa": "/´miljən/",
    "example": "The manager discussed the million with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-604",
    "term": "mimic",
    "meaning": "giả; bắt chước",
    "partOfSpeech": "adj",
    "ipa": "/´mimik/",
    "example": "The company selected an mimic option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-605",
    "term": "mishear",
    "meaning": "nghe lầm",
    "partOfSpeech": "v",
    "ipa": "/¸mis´hiə/",
    "example": "The team will mishear the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-606",
    "term": "misleading",
    "meaning": "làm cho lạc đường, làm cho lạc lối",
    "partOfSpeech": "adj",
    "ipa": "/mis´li:diη/",
    "example": "The company selected an misleading option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-607",
    "term": "misrepresent",
    "meaning": "trình bày sai, miêu tả sai",
    "partOfSpeech": "v",
    "ipa": "/¸misrepri´zent/",
    "example": "The team will misrepresent the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-608",
    "term": "monitor",
    "meaning": "lớp trưởng, cán bộ lớp (ở trường học)",
    "partOfSpeech": "n",
    "ipa": "/'mɔnitə/",
    "example": "The manager discussed the monitor with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-609",
    "term": "monument",
    "meaning": "vật kỷ niệm, đài kỷ niệm, bia kỷ niệm",
    "partOfSpeech": "n",
    "ipa": "/'mɔnjumənt/",
    "example": "The manager discussed the monument during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-610",
    "term": "moral",
    "meaning": "(thuộc) đạo đức, phẩm hạnh tinh thần bài học, lời răn dạy",
    "partOfSpeech": "adj",
    "ipa": "/ˈmɔːr.əl/",
    "example": "The company selected an moral option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-611",
    "term": "mortgage",
    "meaning": "cầm cố, thế chấp",
    "partOfSpeech": "n",
    "ipa": "/'mɔ:gidʤ/",
    "example": "The manager discussed the mortgage during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-612",
    "term": "motivate",
    "meaning": "thúc đẩy, làm động cơ thúc đẩy",
    "partOfSpeech": "v",
    "ipa": "/´mouti¸veit/",
    "example": "The team will motivate the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-613",
    "term": "motivation",
    "meaning": "sự thúc đẩy, động cơ thúc đẩy",
    "partOfSpeech": "n",
    "ipa": "/,mouti'veiʃn/",
    "example": "The manager discussed the motivation at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-614",
    "term": "napkin",
    "meaning": "khăn ăn",
    "partOfSpeech": "n",
    "ipa": "/'næpkin/",
    "example": "The manager discussed the napkin with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-615",
    "term": "narrow",
    "meaning": "hẹp, chật hẹp, eo hẹp",
    "partOfSpeech": "adj",
    "ipa": "/'nærou/",
    "example": "The company selected an narrow option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-616",
    "term": "narrowing",
    "meaning": "sự thu hẹp, sự co hẹp",
    "partOfSpeech": "n",
    "ipa": "/'nærouwiŋ/",
    "example": "The manager discussed the narrowing at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-617",
    "term": "neighborhood",
    "meaning": "hàng xóm",
    "partOfSpeech": "n",
    "ipa": "/ˈneɪbərˌhʊd/",
    "example": "The manager discussed the neighborhood in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-618",
    "term": "network",
    "meaning": "lưới, đồ dùng kiểu lưới",
    "partOfSpeech": "n",
    "ipa": "/'netwə:k/",
    "example": "The manager discussed the network during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-619",
    "term": "nominate",
    "meaning": "chỉ định, chọn, bổ nhiệm",
    "partOfSpeech": "v",
    "ipa": "/'nɔmineit/",
    "example": "The team will nominate the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-620",
    "term": "nomination",
    "meaning": "sự chỉ định, sự bổ nhiệm",
    "partOfSpeech": "n",
    "ipa": "/,nɔmi'neiʃn/",
    "example": "The manager discussed the nomination at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-621",
    "term": "notice",
    "meaning": "thông tri, yết thị, thông báo",
    "partOfSpeech": "n",
    "ipa": "/'nəƱtis/",
    "example": "The manager discussed the notice with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-622",
    "term": "notify",
    "meaning": "báo, khai báo; thông báo",
    "partOfSpeech": "v",
    "ipa": "/nəʊ.tɪ.faɪ/",
    "example": "The team will notify the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-623",
    "term": "objection",
    "meaning": "sự phản đối, sự chống đối",
    "partOfSpeech": "n",
    "ipa": "/əb'ʤekʃn/",
    "example": "The manager discussed the objection at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-624",
    "term": "objective",
    "meaning": "khách quan",
    "partOfSpeech": "adj",
    "ipa": "/əb´dʒektiv/",
    "example": "The company selected an objective option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-625",
    "term": "obligation",
    "meaning": "nghĩa vụ; bổn phận",
    "partOfSpeech": "n",
    "ipa": "/,ɔbli'geiʃn/",
    "example": "The manager discussed the obligation before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-626",
    "term": "oblige",
    "meaning": "bắt buộc, cưỡng bách; đặt nghĩa vụ cho",
    "partOfSpeech": "v",
    "ipa": "/ə'blaiʤ/",
    "example": "The team will oblige the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-627",
    "term": "obtain",
    "meaning": "đạt được, giành được, thu được",
    "partOfSpeech": "v",
    "ipa": "/əb'teɪn/",
    "example": "The team will obtain the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-628",
    "term": "obviously",
    "meaning": "một cách rõ ràng; có thể thấy được",
    "partOfSpeech": "adv",
    "ipa": "/'ɔbviəsli/",
    "example": "The team will obviously the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-629",
    "term": "occupation",
    "meaning": "sự chiếm giữ, sự chiếm đóng",
    "partOfSpeech": "n",
    "ipa": "/,ɔkju'peiʃn/",
    "example": "The manager discussed the occupation before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-630",
    "term": "occur",
    "meaning": "xảy ra, xảy đến, xuất hiện, tìm thấy",
    "partOfSpeech": "v",
    "ipa": "/ə'kə:/",
    "example": "The team will occur the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-631",
    "term": "officer",
    "meaning": "sĩ quan",
    "partOfSpeech": "n",
    "ipa": "/´ɔfisə/",
    "example": "The manager discussed the officer before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-632",
    "term": "official",
    "meaning": "(thuộc) chính quyền; (thuộc) văn phòng",
    "partOfSpeech": "adj",
    "ipa": "/ə'fiʃəl/",
    "example": "The company selected an official option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-633",
    "term": "onward",
    "meaning": "về phía trước, tiến lên, hướng tới",
    "partOfSpeech": "adj",
    "ipa": "/'ɔnwəd/",
    "example": "The company selected an onward option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-634",
    "term": "operate",
    "meaning": "hoạt động; đang làm việc, thi hành (máy...)",
    "partOfSpeech": "v",
    "ipa": "/'ɔpəreit/",
    "example": "The team will operate the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-635",
    "term": "operation",
    "meaning": "sự hoạt động; quá trình hoạt động",
    "partOfSpeech": "n",
    "ipa": "/,ɔpə'reiʃn/",
    "example": "The manager discussed the operation at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-636",
    "term": "opinion",
    "meaning": "ý kiến, quan điểm",
    "partOfSpeech": "n",
    "ipa": "/ə'pinjən/",
    "example": "The manager discussed the opinion before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-637",
    "term": "opportunity",
    "meaning": "cơ hội, thời cơ, dịp may",
    "partOfSpeech": "n",
    "ipa": "/ɒpərˈtyunɪti/",
    "example": "The manager discussed the opportunity in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-638",
    "term": "optimistic",
    "meaning": "lạc quan, yêu đời",
    "partOfSpeech": "adj",
    "ipa": "/¸ɔpti´mistik/",
    "example": "The company selected an optimistic option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-639",
    "term": "order",
    "meaning": "thứ, bậc, ngôi, hàng, cấp, loại, giai cấp",
    "partOfSpeech": "n",
    "ipa": "/'ɔ:də/",
    "example": "The manager discussed the order with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-640",
    "term": "organization",
    "meaning": "sự tổ chức, sự cấu tạo",
    "partOfSpeech": "n",
    "ipa": "/,ɔ:gənai'zeiʃn/",
    "example": "The manager discussed the organization before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-641",
    "term": "organize",
    "meaning": "tổ chức, cấu tạo, thiết lập",
    "partOfSpeech": "v",
    "ipa": "/´ɔ:gə¸naiz/",
    "example": "The team will organize the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-642",
    "term": "organized",
    "meaning": "có trật tự, ngăn nắp, hữu hiệu",
    "partOfSpeech": "adj",
    "ipa": "/ˈɔːr.ɡən.aɪzd/",
    "example": "The company selected an organized option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-643",
    "term": "outline",
    "meaning": "nét phác thảo, đề cương; sự vạch ra những nét chính",
    "partOfSpeech": "n",
    "ipa": "/´aut¸lain/",
    "example": "The manager discussed the outline before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-644",
    "term": "outlook",
    "meaning": "quang cảnh, viễn cảnh",
    "partOfSpeech": "n",
    "ipa": "/´aut¸luk/",
    "example": "The manager discussed the outlook before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-645",
    "term": "outstanding",
    "meaning": "nổi bật, đáng chú ý; nổi tiếng, vượt trội",
    "partOfSpeech": "adj",
    "ipa": "/¸aut´stændiη/",
    "example": "The company selected an outstanding option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-646",
    "term": "overall",
    "meaning": "toàn bộ, toàn thể, bao gồm mọi thứ",
    "partOfSpeech": "adj",
    "ipa": "/ˈoʊvərˌɔl/",
    "example": "The company selected an overall option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-647",
    "term": "overdraft",
    "meaning": "số tiền chi trội; số tiền rút quá số tiền gửi",
    "partOfSpeech": "n",
    "ipa": "/´ouvə¸dra:ft/",
    "example": "The manager discussed the overdraft at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-648",
    "term": "overtime",
    "meaning": "quá giờ, ngoài giờ (quy định)",
    "partOfSpeech": "adj",
    "ipa": "/´ouvətaim/",
    "example": "The company selected an overtime option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-649",
    "term": "overview",
    "meaning": "sự khái quát; miêu tả chung, ngắn gọn",
    "partOfSpeech": "n",
    "ipa": "/´ouvə¸vju:/",
    "example": "The manager discussed the overview at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-650",
    "term": "owe",
    "meaning": "nợ, hàm ơn",
    "partOfSpeech": "v",
    "ipa": "/ou/",
    "example": "The team will owe the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-651",
    "term": "package",
    "meaning": "đóng gói, đóng kiện, xếp vào bao bì",
    "partOfSpeech": "v",
    "ipa": "/pæk.ɪdʒ/",
    "example": "The team will package the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-652",
    "term": "package",
    "meaning": "gói đồ, bưu kiện; hộp để đóng hàng, thùng hàng",
    "partOfSpeech": "n",
    "ipa": "/pæk.ɪdʒ/",
    "example": "The manager discussed the package at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-653",
    "term": "parcel",
    "meaning": "gói; bưu kiện",
    "partOfSpeech": "n",
    "ipa": "/'pɑ:s(ə)l/",
    "example": "The manager discussed the parcel before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-654",
    "term": "parking",
    "meaning": "bãi đỗ xe",
    "partOfSpeech": "n",
    "ipa": "/ˈpɑːr.kɪŋ/",
    "example": "The manager discussed the parking at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-655",
    "term": "participant",
    "meaning": "người tham gia, người tham dự",
    "partOfSpeech": "n",
    "ipa": "/pa:´tisipənt/",
    "example": "The manager discussed the participant before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-656",
    "term": "particularly",
    "meaning": "đặc biệt, đặc thù; cá biệt, riêng biệt",
    "partOfSpeech": "adv",
    "ipa": "/pə´tikjuləli/",
    "example": "The team will particularly the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-657",
    "term": "passenger",
    "meaning": "hành khách (đi tàu xe...)",
    "partOfSpeech": "n",
    "ipa": "/'pæsindʤə/",
    "example": "The manager discussed the passenger before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-658",
    "term": "patent",
    "meaning": "tài tình, khéo léo, tinh xảo",
    "partOfSpeech": "adj",
    "ipa": "/'peitənt/",
    "example": "The company selected an patent option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-659",
    "term": "patented",
    "meaning": "đã có bằng sáng chế, môn bài",
    "partOfSpeech": "adj",
    "ipa": "/ˈpeɪtəntɪd, ˈpætəntɪd/",
    "example": "The company selected an patented option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-660",
    "term": "patience",
    "meaning": "tính kiên nhẫn, tính nhẫn nại; sự bền chí",
    "partOfSpeech": "n",
    "ipa": "/´peiʃəns/",
    "example": "The manager discussed the patience at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-661",
    "term": "payment",
    "meaning": "sự trả tiền, số tiền trả; sự bồi thường, tiền bồi thường",
    "partOfSpeech": "n",
    "ipa": "/'peim(ə)nt/",
    "example": "The manager discussed the payment in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-662",
    "term": "perform",
    "meaning": "biểu diễn, trình diễn (kịch, điệu nhảy...); đóng",
    "partOfSpeech": "v",
    "ipa": "/pə´fɔ:m/",
    "example": "The team will perform the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-663",
    "term": "performance",
    "meaning": "sự biểu diễn, việc đóng (phim, kịch...); cuộc biểu diễn",
    "partOfSpeech": "n",
    "ipa": "/pə'fɔ:məns/",
    "example": "The manager discussed the performance before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-664",
    "term": "permanent",
    "meaning": "lâu dài, vĩnh cửu; thường xuyên",
    "partOfSpeech": "adj",
    "ipa": "/'pə:mənənt/",
    "example": "The company selected an permanent option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-665",
    "term": "permission",
    "meaning": "sự cho phép, sự chấp nhận; giấy phép",
    "partOfSpeech": "n",
    "ipa": "/pə'miʃn/",
    "example": "The manager discussed the permission in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-666",
    "term": "permit",
    "meaning": "cho phép, cho cơ hội; thừa nhận",
    "partOfSpeech": "v",
    "ipa": "/'pər'mɪt/",
    "example": "The team will permit the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-667",
    "term": "personal",
    "meaning": "cá nhân, tư, riêng",
    "partOfSpeech": "adj",
    "ipa": "/'pə:snl/",
    "example": "The company selected an personal option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-668",
    "term": "personalized",
    "meaning": "cá nhân hoá",
    "partOfSpeech": "v",
    "ipa": "/´pə:sənə¸laiz/",
    "example": "The team will personalized the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-669",
    "term": "personnel",
    "meaning": "nhân viên, công chức (cơ quan, nhà máy...)",
    "partOfSpeech": "n",
    "ipa": "/¸pə:sə´nel/",
    "example": "The manager discussed the personnel with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-670",
    "term": "persuade",
    "meaning": "thuyết phục",
    "partOfSpeech": "v",
    "ipa": "/pə'sweid/",
    "example": "The team will persuade the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-671",
    "term": "pessimistic",
    "meaning": "bi quan, yếm thế",
    "partOfSpeech": "adj",
    "ipa": "/¸pesi´mistik/",
    "example": "The company selected an pessimistic option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-672",
    "term": "plant",
    "meaning": "thực vật",
    "partOfSpeech": "n",
    "ipa": "/plænt , plɑnt/",
    "example": "The manager discussed the plant during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-673",
    "term": "platform",
    "meaning": "nền, bục, bệ",
    "partOfSpeech": "n",
    "ipa": "/'plætfɔ:m/",
    "example": "The manager discussed the platform at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-674",
    "term": "pleasant",
    "meaning": "vui vẻ, dễ thương (người...)",
    "partOfSpeech": "adj",
    "ipa": "/'plezənt/",
    "example": "The company selected an pleasant option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-675",
    "term": "plow",
    "meaning": "cái cày; công cụ giống như cái cày",
    "partOfSpeech": "n",
    "ipa": "/plau/",
    "example": "The manager discussed the plow with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-676",
    "term": "plug",
    "meaning": "phích cắm; ổ cắm điện",
    "partOfSpeech": "n",
    "ipa": "/plʌg/",
    "example": "The manager discussed the plug with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-677",
    "term": "plumber",
    "meaning": "thợ hàn chì, thợ ống nước",
    "partOfSpeech": "n",
    "ipa": "/´plʌmə/",
    "example": "The manager discussed the plumber at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-678",
    "term": "point",
    "meaning": "điểm",
    "partOfSpeech": "n",
    "ipa": "/pɔint/",
    "example": "The manager discussed the point during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-679",
    "term": "pointless",
    "meaning": "vô nghĩa, không ý vị, lạc lõng",
    "partOfSpeech": "adj",
    "ipa": "/´pɔintlis/",
    "example": "The company selected an pointless option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-680",
    "term": "policy",
    "meaning": "chính sách (của chính phủ, đảng...)",
    "partOfSpeech": "n",
    "ipa": "/pɔlisi/",
    "example": "The manager discussed the policy before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-681",
    "term": "polite",
    "meaning": "lễ phép, có lễ độ; lịch sự, lịch thiệp",
    "partOfSpeech": "adj",
    "ipa": "/pəˈlaɪt/",
    "example": "The company selected an polite option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-682",
    "term": "politician",
    "meaning": "nhà chính trị; chính khách",
    "partOfSpeech": "n",
    "ipa": "/,pɒlə'tɪʃn/",
    "example": "The manager discussed the politician in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-683",
    "term": "politics",
    "meaning": "hoạt động chính trị, công việc chính trị",
    "partOfSpeech": "n",
    "ipa": "/'pɔlitiks/",
    "example": "The manager discussed the politics at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-684",
    "term": "poll",
    "meaning": "sự bầu cử; số phiếu bầu",
    "partOfSpeech": "n",
    "ipa": "/poul/",
    "example": "The manager discussed the poll with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-685",
    "term": "pollute",
    "meaning": "làm ô nhiễm, làm nhơ bẩn (nước...)",
    "partOfSpeech": "v",
    "ipa": "/pəˈlut/",
    "example": "The team will pollute the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-686",
    "term": "popular",
    "meaning": "được nhiều người ưa chuộng, được nhiều người ngưỡng mộ",
    "partOfSpeech": "adj",
    "ipa": "/ˈpɑːpjələr/",
    "example": "The company selected an popular option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-687",
    "term": "popularity",
    "meaning": "tính đại chúng; tính phổ biến",
    "partOfSpeech": "n",
    "ipa": "/ˌpɒpyəˈlærɪti/",
    "example": "The manager discussed the popularity in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-688",
    "term": "position",
    "meaning": "vị trí, chỗ (của một vật gì)",
    "partOfSpeech": "n",
    "ipa": "/pəˈzɪʃən/",
    "example": "The manager discussed the position at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-689",
    "term": "postpone",
    "meaning": "hoãn lại, trì hoãn",
    "partOfSpeech": "v",
    "ipa": "/pəʊst pəʊn/",
    "example": "The team will postpone the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-690",
    "term": "postponement",
    "meaning": "sự trì hoãn; trường hợp bị trì hoãn",
    "partOfSpeech": "n",
    "ipa": "/poust´pounmənt/",
    "example": "The manager discussed the postponement with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-691",
    "term": "potential",
    "meaning": "tiềm năng; tiềm tàng",
    "partOfSpeech": "adj",
    "ipa": "/pəˈtenʃl/",
    "example": "The company selected an potential option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-692",
    "term": "power",
    "meaning": "khả năng; tài năng, năng lực",
    "partOfSpeech": "n",
    "ipa": "/ˈpauə(r)/",
    "example": "The manager discussed the power during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-693",
    "term": "practical",
    "meaning": "thực hành (đối với lý thuyết)",
    "partOfSpeech": "adj",
    "ipa": "/ˈpræktɪkəl/",
    "example": "The company selected an practical option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-694",
    "term": "practically",
    "meaning": "về mặt thực hành (đối với lý thuyết)",
    "partOfSpeech": "adv",
    "ipa": "/´præktikəli/",
    "example": "The team will practically the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-695",
    "term": "predict",
    "meaning": "nói trước, tiên đoán, dự đoán",
    "partOfSpeech": "v",
    "ipa": "/pri'dikt/",
    "example": "The team will predict the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-696",
    "term": "predictable",
    "meaning": "có thể đoán trước, có thể dự đoán, dự báo",
    "partOfSpeech": "adj",
    "ipa": "/pri'diktəbl/",
    "example": "The company selected an predictable option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-697",
    "term": "prefer",
    "meaning": "thích hơn, ưa hơn",
    "partOfSpeech": "v",
    "ipa": "/pri'fə:/",
    "example": "The team will prefer the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-698",
    "term": "preference",
    "meaning": "sở thích; sự thích hơn, sự ưa hơn",
    "partOfSpeech": "n",
    "ipa": "/'prefərəns/",
    "example": "The manager discussed the preference in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-699",
    "term": "premises",
    "meaning": "biệt thự 700 present n prezənt hiện tại, hiện thời, hiện giờ, hiện nay",
    "partOfSpeech": "n",
    "ipa": "/'premis/",
    "example": "The manager discussed the premises at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-700",
    "term": "present",
    "partOfSpeech": "n",
    "ipa": "/ˈprez.ənt/",
    "meaning": "hiện tại; quà tặng",
    "example": "The manager discussed the present at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-701",
    "term": "press",
    "meaning": "sự ép, sự nén, sự bóp, sự ấn",
    "partOfSpeech": "n",
    "ipa": "/pres/",
    "example": "The manager discussed the press during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-702",
    "term": "prevent",
    "meaning": "ngăn cản; ngăn chặn, ngăn ngừa",
    "partOfSpeech": "v",
    "ipa": "/pri'vent/",
    "example": "The team will prevent the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-703",
    "term": "prevention",
    "meaning": "sự ngăn cản, sự ngăn trở",
    "partOfSpeech": "n",
    "ipa": "/pri'ven∫n/",
    "example": "The manager discussed the prevention in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-704",
    "term": "priceless",
    "meaning": "vô giá; không định giá được",
    "partOfSpeech": "adj",
    "ipa": "/ˈpraɪslɪs/",
    "example": "The company selected an priceless option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-705",
    "term": "principle",
    "meaning": "gốc, nguồn gốc, yếu tố cơ bản",
    "partOfSpeech": "n",
    "ipa": "/ˈprɪntsɪpl/",
    "example": "The manager discussed the principle before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-706",
    "term": "priority",
    "meaning": "sự ưu thế (về cấp bậc); quyền ưu tiên",
    "partOfSpeech": "n",
    "ipa": "/prai´ɔriti/",
    "example": "The manager discussed the priority at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-707",
    "term": "private",
    "meaning": "riêng, tư, cá nhân",
    "partOfSpeech": "adj",
    "ipa": "/ˈpraɪvɪt/",
    "example": "The company selected an private option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-708",
    "term": "probability",
    "meaning": "sự có thể có, khả năng có thể xảy ra",
    "partOfSpeech": "n",
    "ipa": "/ˌprɒbəˈbɪlɪti/",
    "example": "The manager discussed the probability before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-709",
    "term": "probably",
    "meaning": "có khả năng, có lẽ, có thể",
    "partOfSpeech": "adv",
    "ipa": "/´prɔbəbli/",
    "example": "The team will probably the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-710",
    "term": "probationary",
    "meaning": "đang trong thời gian thử thách",
    "partOfSpeech": "adj",
    "ipa": "/prə´beiʃənəri/",
    "example": "The company selected an probationary option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-711",
    "term": "process",
    "meaning": "quá trình, sự tiến triển",
    "partOfSpeech": "n",
    "ipa": "/'prouses/",
    "example": "The manager discussed the process at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-712",
    "term": "profession",
    "meaning": "nghề, nghề nghiệp",
    "partOfSpeech": "n",
    "ipa": "/prə´feʃ(ə)n/",
    "example": "The manager discussed the profession in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-713",
    "term": "professional",
    "meaning": "(thuộc) nghề, (thuộc) nghề nghiệp; có tay nghề",
    "partOfSpeech": "adj",
    "ipa": "/prə'feʃənl/",
    "example": "The company selected an professional option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-714",
    "term": "profile",
    "meaning": "tiểu sử sơ lược; mô tả sơ lược",
    "partOfSpeech": "n",
    "ipa": "/´proufail/",
    "example": "The manager discussed the profile at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-715",
    "term": "profit",
    "meaning": "thuận lợi; lợi ích, bổ ích",
    "partOfSpeech": "n",
    "ipa": "/ˈprɒfɪt/",
    "example": "The manager discussed the profit in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-716",
    "term": "profitability",
    "meaning": "sự có lợi, sự có ích; sự thuận lợi",
    "partOfSpeech": "n",
    "ipa": "/'prɔfitə'biləti/",
    "example": "The manager discussed the profitability in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-717",
    "term": "profitable",
    "meaning": "có lợi, có ích; thuận lợi",
    "partOfSpeech": "adj",
    "ipa": "/´prɑ:fɪtəbl/",
    "example": "The company selected an profitable option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-718",
    "term": "progressive",
    "meaning": "tiến lên, tiến tới",
    "partOfSpeech": "adj",
    "ipa": "/prəˈgrɛsɪv/",
    "example": "The company selected an progressive option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-719",
    "term": "prohibit",
    "meaning": "cấm, ngăn cấm",
    "partOfSpeech": "v",
    "ipa": "/proʊ'hɪbɪt/",
    "example": "The team will prohibit the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-720",
    "term": "project",
    "meaning": "đề án, dự án; kế hoạch",
    "partOfSpeech": "n",
    "ipa": "/ˈprɒdʒɛkt/",
    "example": "The manager discussed the project at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-721",
    "term": "promote",
    "meaning": "thăng chức, thăng cấp; đề bạt",
    "partOfSpeech": "v",
    "ipa": "/prəˈmoʊt/",
    "example": "The team will promote the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-722",
    "term": "promotion",
    "meaning": "sự thăng chức, sự đề bạt",
    "partOfSpeech": "n",
    "ipa": "/prə'mou∫n/",
    "example": "The manager discussed the promotion before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-723",
    "term": "promptly",
    "meaning": "mau lẹ, nhanh chóng; ngay lập tức",
    "partOfSpeech": "adv",
    "ipa": "/´prɔmptli/",
    "example": "The team will promptly the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-724",
    "term": "properly",
    "meaning": "đúng đắn, hợp thức, hợp lệ",
    "partOfSpeech": "adv",
    "ipa": "/´prɔpəli/",
    "example": "The team will properly the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-725",
    "term": "property",
    "meaning": "tài sản, của cải, vật sở hữu, người giàu có",
    "partOfSpeech": "n",
    "ipa": "/'prɔpəti/",
    "example": "The manager discussed the property at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-726",
    "term": "protect",
    "meaning": "bảo vệ, bảo hộ, che chở",
    "partOfSpeech": "v",
    "ipa": "/prə'tekt/",
    "example": "The team will protect the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-727",
    "term": "protection",
    "meaning": "sự bảo vệ, sự bảo hộ, sự che chở",
    "partOfSpeech": "n",
    "ipa": "/prə'tek∫n/",
    "example": "The manager discussed the protection in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-728",
    "term": "publicity",
    "meaning": "sự công khai",
    "partOfSpeech": "n",
    "ipa": "/pʌb'lɪsətɪ /",
    "example": "The manager discussed the publicity before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-729",
    "term": "publicize",
    "meaning": "đưa ra công khai; làm cho thiên hạ biết đến",
    "partOfSpeech": "v",
    "ipa": "/´pʌbli¸saiz/",
    "example": "The team will publicize the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-730",
    "term": "purchase",
    "meaning": "sự mua, tậu; vật mua được, vật tậu được",
    "partOfSpeech": "n",
    "ipa": "/'pə:t∫əs/",
    "example": "The manager discussed the purchase at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-731",
    "term": "purpose",
    "meaning": "mục đích, ý định",
    "partOfSpeech": "n",
    "ipa": "/'pɜ:pəs/",
    "example": "The manager discussed the purpose at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-732",
    "term": "pursue",
    "meaning": "đuổi theo, đuổi bắt, truy nã, truy kích",
    "partOfSpeech": "v",
    "ipa": "/pə'sju:/",
    "example": "The team will pursue the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-733",
    "term": "qualification",
    "meaning": "phẩm chất, năng lực",
    "partOfSpeech": "n",
    "ipa": "/,kwalifi'keiSn/",
    "example": "The manager discussed the qualification before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-734",
    "term": "qualified",
    "meaning": "đủ tư cách, khả năng, điều kiện",
    "partOfSpeech": "adj",
    "ipa": "/ˈkwɒləˌfaɪd/",
    "example": "The company selected an qualified option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-735",
    "term": "qualify",
    "meaning": "đủ tư cách, khả năng, điều kiện",
    "partOfSpeech": "v",
    "ipa": "/'´kwɔli¸fai/",
    "example": "The team will qualify the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-736",
    "term": "questionnaire",
    "meaning": "bản câu hỏi (để điều tra, để thăm dò ý kiến)",
    "partOfSpeech": "n",
    "ipa": "/ˌkwɛstʃəˈnɛər/",
    "example": "The manager discussed the questionnaire before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-737",
    "term": "quotation",
    "meaning": "sự trích dẫn, sự được trích dẫn",
    "partOfSpeech": "n",
    "ipa": "/kwou'teiʃn/",
    "example": "The manager discussed the quotation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-738",
    "term": "quote",
    "meaning": "lời trích dẫn; đoạn trích dẫn",
    "partOfSpeech": "n",
    "ipa": "/kwout/",
    "example": "The manager discussed the quote before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-739",
    "term": "range",
    "meaning": "dãy, hàng",
    "partOfSpeech": "n",
    "ipa": "/reɪndʒ/",
    "example": "The manager discussed the range at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-740",
    "term": "rare",
    "meaning": "hiếm, hiếm có, ít có",
    "partOfSpeech": "adj",
    "ipa": "/reə/",
    "example": "The company selected an rare option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-741",
    "term": "rate",
    "meaning": "tỷ lệ",
    "partOfSpeech": "n",
    "ipa": "/reit/",
    "example": "The manager discussed the rate before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-742",
    "term": "rational",
    "meaning": "có lý trí, dựa trên lý trí",
    "partOfSpeech": "adj",
    "ipa": "/´ræʃənəl/",
    "example": "The company selected an rational option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-743",
    "term": "raw",
    "meaning": "sống, thô",
    "partOfSpeech": "adj",
    "ipa": "/rɔ:/",
    "example": "The company selected an raw option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-744",
    "term": "reach",
    "meaning": "sự chìa ra, sự trải ra",
    "partOfSpeech": "n",
    "ipa": "/ri:tʃ/",
    "example": "The manager discussed the reach at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-745",
    "term": "realize",
    "meaning": "thấy rõ, hiểu rõ, nhận thức rõ (việc gì...)",
    "partOfSpeech": "v",
    "ipa": "/'riəlaiz/",
    "example": "The team will realize the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-746",
    "term": "rearrange",
    "meaning": "sắp xếp lại, bố trí lại, sắp đặt lại",
    "partOfSpeech": "v",
    "ipa": "/'ri:ə'reindʤ/",
    "example": "The team will rearrange the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-747",
    "term": "reasonable",
    "meaning": "có lý, hợp lý",
    "partOfSpeech": "adj",
    "ipa": "/´ri:zənəbl/",
    "example": "The company selected an reasonable option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-748",
    "term": "reasonably",
    "meaning": "hợp lý",
    "partOfSpeech": "adv",
    "ipa": "/ˈriː.zən.ə.bli/",
    "example": "The team will reasonably the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-749",
    "term": "receipt",
    "meaning": "công thức (làm bánh, nấu món ăn...)",
    "partOfSpeech": "n",
    "ipa": "/ri´si:t/",
    "example": "The manager discussed the receipt before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-750",
    "term": "receive",
    "meaning": "nhận, lĩnh, thu",
    "partOfSpeech": "v",
    "ipa": "/ri'si:v/",
    "example": "The team will receive the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-751",
    "term": "recent",
    "meaning": "gần đây, xảy ra gần đây, mới đây",
    "partOfSpeech": "adj",
    "ipa": "/´ri:sənt/",
    "example": "The company selected an recent option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-752",
    "term": "reception",
    "meaning": "sự nhận, sự thu nhận, sự lĩnh",
    "partOfSpeech": "n",
    "ipa": "/ri'sep∫n/",
    "example": "The manager discussed the reception before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-753",
    "term": "receptive",
    "meaning": "dễ tiếp thu, dễ lĩnh hội",
    "partOfSpeech": "adj",
    "ipa": "/ri'septiv/",
    "example": "The company selected an receptive option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-754",
    "term": "recipe",
    "meaning": "công thức làm món ăn",
    "partOfSpeech": "n",
    "ipa": "/´resəpi/",
    "example": "The manager discussed the recipe at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-755",
    "term": "recognize",
    "meaning": "công nhận, thừa nhận, chấp nhận",
    "partOfSpeech": "v",
    "ipa": "/'rekəgnaiz/",
    "example": "The team will recognize the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-756",
    "term": "recommend",
    "meaning": "giới thiệu, tiến cử (người, vật...)",
    "partOfSpeech": "v",
    "ipa": "/rekə'mend/",
    "example": "The team will recommend the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-757",
    "term": "recommendation",
    "meaning": "sự giới thiệu, sự tiến cử",
    "partOfSpeech": "n",
    "ipa": "/¸rekəmen´deiʃən/",
    "example": "The manager discussed the recommendation at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-758",
    "term": "recruit",
    "meaning": "tuyển, chiêu mộ (lính mới); tìm thêm",
    "partOfSpeech": "v",
    "ipa": "/ri'kru:t/",
    "example": "The team will recruit the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-759",
    "term": "recruitment",
    "meaning": "sự tuyển mộ (lính), sự lấy thêm",
    "partOfSpeech": "n",
    "ipa": "/ ri'kru;tm(ə)nt/",
    "example": "The manager discussed the recruitment with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-760",
    "term": "reduce",
    "meaning": "thu nhỏ, làm giảm bớt",
    "partOfSpeech": "v",
    "ipa": "/ri'dju:s/",
    "example": "The team will reduce the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-761",
    "term": "reduction",
    "meaning": "sự thu nhỏ, sự giảm bớt",
    "partOfSpeech": "n",
    "ipa": "/ri´dʌkʃən/",
    "example": "The manager discussed the reduction before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-762",
    "term": "redundant",
    "meaning": "thừa, dư",
    "partOfSpeech": "adj",
    "ipa": "/ri'dʌndənt/",
    "example": "The company selected an redundant option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-763",
    "term": "refrigerator",
    "meaning": "tủ lạnh",
    "partOfSpeech": "n",
    "ipa": "/rɪˈfrɪdʒ.ər.eɪ.tər/",
    "example": "The manager discussed the refrigerator before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-764",
    "term": "refund",
    "meaning": "trả lại, sự trả lại",
    "partOfSpeech": "n, v",
    "ipa": "/ˈrifʌnd/",
    "example": "The team will refund the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-765",
    "term": "refundable",
    "meaning": "có thể được trả lại tiền 766 refusal n ri´fju:zl/ sự từ chối, sự khước từ; sự bị từ chối",
    "partOfSpeech": "adj",
    "ipa": "/ri´fʌndəbl/",
    "example": "The company selected an refundable option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-766",
    "term": "refusal",
    "partOfSpeech": "n",
    "ipa": "/rɪˈfjuː.zəl/",
    "meaning": "sự từ chối, sự khước từ",
    "example": "The manager discussed the refusal before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-767",
    "term": "refuse",
    "meaning": "từ chối, khước từ, cự tuyệt",
    "partOfSpeech": "v",
    "ipa": "/rɪˈfyuz/",
    "example": "The team will refuse the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-768",
    "term": "regarding",
    "meaning": "về ( ai/cái gì), về việc, đối với (vấn đề...)",
    "partOfSpeech": "n",
    "ipa": "/ri´ga:diη/",
    "example": "The manager discussed the regarding before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-769",
    "term": "regardless",
    "meaning": "bất chấp, không đếm xỉa tới, không chú ý tới",
    "partOfSpeech": "adv",
    "ipa": "/ri´ga:dlis/",
    "example": "The team will regardless the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-770",
    "term": "regional",
    "meaning": "(thuộc) vùng; địa phương",
    "partOfSpeech": "adj",
    "ipa": "/ˈridʒənl/",
    "example": "The company selected an regional option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-771",
    "term": "registration",
    "meaning": "sự đăng ký, sự ghi vào sổ",
    "partOfSpeech": "n",
    "ipa": "/,redʤis'treiʃn/",
    "example": "The manager discussed the registration before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-772",
    "term": "regret",
    "meaning": "hối tiếc; sự ân hận",
    "partOfSpeech": "n, v",
    "ipa": "/ri'gret/",
    "example": "The team will regret the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-773",
    "term": "regular",
    "meaning": "đều đặn, thường xuyên",
    "partOfSpeech": "adj",
    "ipa": "/ˈreɡ.jə.lɚ/",
    "example": "The company selected an regular option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-774",
    "term": "regularly",
    "meaning": "đều đặn, thường xuyên",
    "partOfSpeech": "adv",
    "ipa": "/´regjuləli/",
    "example": "The team will regularly the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-775",
    "term": "regulate",
    "meaning": "điều khiển",
    "partOfSpeech": "v",
    "ipa": "/ˈreɡ.jə.leɪt/",
    "example": "The team will regulate the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-776",
    "term": "reject",
    "meaning": "vật bị loại, vật bỏ đi, vật không được chọn",
    "partOfSpeech": "n, v",
    "ipa": "/'ri:ʤekt/",
    "example": "The team will reject the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-777",
    "term": "relax",
    "meaning": "thư giãn, nghỉ ngơi",
    "partOfSpeech": "v",
    "ipa": "/rɪˈlæks/",
    "example": "The team will relax the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-778",
    "term": "relaxation",
    "meaning": "sự dịu đi, sự bớt căng thẳng",
    "partOfSpeech": "n",
    "ipa": "/¸ri:læk´seiʃən/",
    "example": "The manager discussed the relaxation with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-779",
    "term": "release",
    "meaning": "thả ra, trả lại tự do",
    "partOfSpeech": "v",
    "ipa": "/rɪˈliːs/",
    "example": "The team will release the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-780",
    "term": "relevant",
    "meaning": "thích đáng, thích hợp; xác đáng",
    "partOfSpeech": "adj",
    "ipa": "/´reləvənt/",
    "example": "The company selected an relevant option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-781",
    "term": "remain",
    "meaning": "duy trì",
    "partOfSpeech": "v",
    "ipa": "/rɪˈmeɪn/",
    "example": "The team will remain the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-782",
    "term": "remarkable",
    "meaning": "đáng chú ý, đáng để ý",
    "partOfSpeech": "adj",
    "ipa": "/ri'ma:kəb(ə)l/",
    "example": "The company selected an remarkable option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-783",
    "term": "remind",
    "meaning": "nhắc lại, nhớ lại",
    "partOfSpeech": "v",
    "ipa": "/rɪˈmaɪnd/",
    "example": "The team will remind the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-784",
    "term": "reminder",
    "meaning": "vật làm nhớ lại, cái làm nhớ lại",
    "partOfSpeech": "n",
    "ipa": "/ri´maində/",
    "example": "The manager discussed the reminder in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-785",
    "term": "remittance",
    "meaning": "sự gửi tiền, sự gửi hàng",
    "partOfSpeech": "n",
    "ipa": "/ri´mitəns/",
    "example": "The manager discussed the remittance with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-786",
    "term": "remove",
    "meaning": "dời đi, di chuyển, dọn, cất dọn",
    "partOfSpeech": "v",
    "ipa": "/ri'mu:v/",
    "example": "The team will remove the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-787",
    "term": "remuneration",
    "meaning": "tiền thù lao, tiền trả công",
    "partOfSpeech": "n",
    "ipa": "/rɪˌmjuː.nəˈreɪ.ʃən/",
    "example": "The manager discussed the remuneration before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-788",
    "term": "renovate",
    "meaning": "nâng cấp, cải tiến, đổi mới, sửa chữa lại",
    "partOfSpeech": "v",
    "ipa": "/ˈrɛnəˌveɪt/",
    "example": "The team will renovate the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-789",
    "term": "renovation",
    "meaning": "sự nâng cấp, sự cải tiến",
    "partOfSpeech": "n",
    "ipa": "/ˌren.əˈveɪ.ʃən/",
    "example": "The manager discussed the renovation with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-790",
    "term": "rent",
    "meaning": "sự thuê mướn",
    "partOfSpeech": "n",
    "ipa": "/rent/",
    "example": "The manager discussed the rent before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-791",
    "term": "repair",
    "meaning": "sửa chữa, sửa đổi",
    "partOfSpeech": "v",
    "ipa": "/rɪˈper/",
    "example": "The team will repair the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-792",
    "term": "repayment",
    "meaning": "sự trả lại",
    "partOfSpeech": "n",
    "ipa": "/ri:´peimənt/",
    "example": "The manager discussed the repayment in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-793",
    "term": "repetitive",
    "meaning": "có đặc trưng lặp đi lặp lại",
    "partOfSpeech": "adj",
    "ipa": "/rɪˈpet̬.ə.t̬ɪv/",
    "example": "The company selected an repetitive option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-794",
    "term": "replace",
    "meaning": "thay thế, thay chỗ ai/cái gì",
    "partOfSpeech": "v",
    "ipa": "/rɪpleɪs/",
    "example": "The team will replace the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-795",
    "term": "replacement",
    "meaning": "sự thay thế, vật thay thế",
    "partOfSpeech": "n",
    "ipa": "/rɪˈpleɪs.mənt/",
    "example": "The manager discussed the replacement during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-796",
    "term": "report",
    "meaning": "bản báo cáo, bản tường thuật; biên bản",
    "partOfSpeech": "n",
    "ipa": "/ri'pɔ:t/",
    "example": "The manager discussed the report at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-797",
    "term": "represent",
    "meaning": "miêu tả, hình dung",
    "partOfSpeech": "v",
    "ipa": "/ˌrep.rɪˈzent/",
    "example": "The team will represent the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-798",
    "term": "representative",
    "meaning": "miêu tả, biểu hiện",
    "partOfSpeech": "adj",
    "ipa": "/,repri'zentətiv/",
    "example": "The company selected an representative option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-799",
    "term": "request",
    "meaning": "yêu cầu",
    "partOfSpeech": "n",
    "ipa": "/rɪˈkwest/",
    "example": "The manager discussed the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-800",
    "term": "require",
    "meaning": "đòi hỏi, yêu cầu; quy định",
    "partOfSpeech": "v",
    "ipa": "/ri'kwaiə(r)/",
    "example": "The team will require the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-801",
    "term": "requirement",
    "meaning": "yêu cầu, cần thiết",
    "partOfSpeech": "n",
    "ipa": "/rɪˈkwaɪr.mənt/",
    "example": "The manager discussed the requirement during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-802",
    "term": "reschedule",
    "meaning": "lên lịch, sắp xếp lịch",
    "partOfSpeech": "v",
    "ipa": "/ˌriːˈskedʒ.uːl/",
    "example": "The team will reschedule the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-803",
    "term": "rescue",
    "meaning": "cứu ai đó khỏi nguy hiểm",
    "partOfSpeech": "v",
    "ipa": "/ˈres.kjuː/",
    "example": "The team will rescue the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-804",
    "term": "resemble",
    "meaning": "giống nhau, giống ai đó",
    "partOfSpeech": "v",
    "ipa": "/rɪˈzem.bəl/",
    "example": "The team will resemble the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-805",
    "term": "reservation",
    "meaning": "dự phòng",
    "partOfSpeech": "n",
    "ipa": "/ˌrez.ɚˈveɪ.ʃən/",
    "example": "The manager discussed the reservation during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-806",
    "term": "resign",
    "meaning": "bỏ việc, từ chức",
    "partOfSpeech": "v",
    "ipa": "/rɪˈzaɪn/",
    "example": "The team will resign the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-807",
    "term": "resist",
    "meaning": "chống lại 808 resolve n, v /rɪ'zɑ:lv Quyết tâm, ý kiên quyết",
    "partOfSpeech": "v",
    "ipa": "/rɪˈzɪst/",
    "example": "The team will resist the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-808",
    "term": "resolve",
    "partOfSpeech": "n, v",
    "ipa": "/rɪˈzɑːlv/",
    "meaning": "quyết tâm; giải quyết",
    "example": "The team will resolve the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-809",
    "term": "respect",
    "meaning": "sự kính trọng; sự ngưỡng mộ",
    "partOfSpeech": "n",
    "ipa": "/riˈspekt/",
    "example": "The manager discussed the respect before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-810",
    "term": "respectable",
    "meaning": "đáng trọng; đáng kính",
    "partOfSpeech": "adj",
    "ipa": "/ris´pektəbl/",
    "example": "The company selected an respectable option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-811",
    "term": "respond",
    "meaning": "hưởng ứng",
    "partOfSpeech": "v",
    "ipa": "/ri'spond/",
    "example": "The team will respond the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-812",
    "term": "responsibility",
    "meaning": "trách nhiệm; sự chịu trách nhiệm; bổn phận; nghĩa vụ",
    "partOfSpeech": "n",
    "ipa": "/rɪˌspɑːn.səˈbɪl.ə.t̬i/",
    "example": "The manager discussed the responsibility at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-813",
    "term": "responsible",
    "meaning": "chịu trách nhiệm",
    "partOfSpeech": "adj",
    "ipa": "/ri'spɔnsəbl/",
    "example": "The company selected an responsible option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-814",
    "term": "restructure",
    "meaning": "cơ cấu lại; tổ chức lại; sắp xếp lại",
    "partOfSpeech": "v",
    "ipa": "/ri:´strʌktʃə/",
    "example": "The team will restructure the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-815",
    "term": "resume",
    "meaning": "lấy lại, chiếm lại, giành lại; hồi phục lại",
    "partOfSpeech": "v",
    "ipa": "/ri´zju:m/",
    "example": "The team will resume the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-816",
    "term": "retail",
    "meaning": "sự bán lẻ, việc bán lẻ",
    "partOfSpeech": "n, adv",
    "ipa": "/ˈriteɪl , rɪˈteɪl/",
    "example": "The team will retail the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-817",
    "term": "retire",
    "meaning": "rời bỏ, đi ra, rút về, lui về (một nơi nào kín đáo...)",
    "partOfSpeech": "v",
    "ipa": "/ri´taiə /",
    "example": "The team will retire the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-818",
    "term": "retirement",
    "meaning": "sự ẩn dật, sự về hưu",
    "partOfSpeech": "n",
    "ipa": "/rɪˈtaɪərmənt/",
    "example": "The manager discussed the retirement with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-819",
    "term": "revamp",
    "meaning": "tân trang, sửa chữa",
    "partOfSpeech": "v",
    "ipa": "/ˌriːˈvæmp/",
    "example": "The team will revamp the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-820",
    "term": "revise",
    "meaning": "đọc lại, xem lại, duyệt lại, xét lại",
    "partOfSpeech": "v, n",
    "ipa": "/ri'vaiz/",
    "example": "The team will revise the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-821",
    "term": "revised",
    "meaning": "đọc lại, xem lại, duyệt lại, xét lại",
    "partOfSpeech": "v, n",
    "ipa": "/ri'vaiz/",
    "example": "The team will revised the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-822",
    "term": "right",
    "meaning": "điều tốt, điều phải, điều đứng đắn",
    "partOfSpeech": "n",
    "ipa": "/rait/",
    "example": "The manager discussed the right at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-823",
    "term": "rival",
    "meaning": "đối thủ, địch thủ, đối địch, kình địch",
    "partOfSpeech": "n,adj",
    "ipa": "/raivl/",
    "example": "The company selected an rival option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-824",
    "term": "roadside",
    "meaning": "bờ đường, lề đường",
    "partOfSpeech": "n,adj",
    "ipa": "/´roud¸said/",
    "example": "The company selected an roadside option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-825",
    "term": "roughly",
    "meaning": "ráp, xù xì, gồ ghề, không bằng phẳng",
    "partOfSpeech": "adv",
    "ipa": "/'rʌfli/",
    "example": "The team will roughly the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-826",
    "term": "route",
    "meaning": "tuyến đường; lộ trình; đường đi",
    "partOfSpeech": "n",
    "ipa": "/raʊt/",
    "example": "The manager discussed the route at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-827",
    "term": "runway",
    "meaning": "đường băng",
    "partOfSpeech": "n",
    "ipa": "/´rʌn¸wei/",
    "example": "The manager discussed the runway at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-828",
    "term": "salary",
    "meaning": "tiền lương",
    "partOfSpeech": "n",
    "ipa": "/ˈsæləri/",
    "example": "The manager discussed the salary in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-829",
    "term": "sale",
    "meaning": "sự bán, việc bán",
    "partOfSpeech": "n",
    "ipa": "/seil/",
    "example": "The manager discussed the sale at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-830",
    "term": "salvage",
    "meaning": "sự cứu hộ; sự cứu chạy (khỏi đám cháy, mưa lũ..)",
    "partOfSpeech": "n",
    "ipa": "/´sælvidʒ/",
    "example": "The manager discussed the salvage in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-831",
    "term": "sample",
    "meaning": "mẫu; vật mẫu, hàng mẫu",
    "partOfSpeech": "n",
    "ipa": "/´sa:mpl/",
    "example": "The manager discussed the sample before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-832",
    "term": "satisfactory",
    "meaning": "vừa lòng, vừa ý; thoả mãn (tuy không xuất sắc lắm)",
    "partOfSpeech": "adj",
    "ipa": "/,sætis'fæktəri/",
    "example": "The company selected an satisfactory option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-833",
    "term": "satisfied",
    "meaning": "cảm thấy hài lòng, cảm thấy vừa ý; thoả mãn",
    "partOfSpeech": "adj",
    "ipa": "/'sætisfaid/",
    "example": "The company selected an satisfied option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-834",
    "term": "satisfy",
    "meaning": "làm thoả mãn, làm hài lòng",
    "partOfSpeech": "v",
    "ipa": "/'sætisfai/",
    "example": "The team will satisfy the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-835",
    "term": "save",
    "meaning": "cứu nguy, cứu vãn",
    "partOfSpeech": "n",
    "ipa": "/seiv/",
    "example": "The manager discussed the save at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-836",
    "term": "savvy",
    "meaning": "sự hiểu biết, nắm rõ",
    "partOfSpeech": "n",
    "ipa": "/ˈsæv.i/",
    "example": "The manager discussed the savvy at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-837",
    "term": "scene",
    "meaning": "quang cảnh",
    "partOfSpeech": "n",
    "ipa": "/si:n/",
    "example": "The manager discussed the scene at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-838",
    "term": "scenery",
    "meaning": "phong cảnh, cảnh vật",
    "partOfSpeech": "n",
    "ipa": "/'si:nəri/",
    "example": "The manager discussed the scenery in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-839",
    "term": "schedule",
    "meaning": "kế hoạch làm việc, tiến độ thi công",
    "partOfSpeech": "n",
    "ipa": "/'skedʒu:l/",
    "example": "The manager discussed the schedule before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-840",
    "term": "scrutinize",
    "meaning": "chăm chú, nhìn kỹ; xem xét kỹ lưỡng",
    "partOfSpeech": "v",
    "ipa": "/´skru:ti¸naiz/",
    "example": "The team will scrutinize the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-841",
    "term": "search",
    "meaning": "sự nhìn để tìm, nhìn để tìm, thăm dò",
    "partOfSpeech": "n,v",
    "ipa": "/sə:t∫/",
    "example": "The team will search the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-842",
    "term": "secluded",
    "meaning": "hẻo lánh; không có nhiều người trông thấy",
    "partOfSpeech": "adj",
    "ipa": "/si´klu:did/",
    "example": "The company selected an secluded option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-843",
    "term": "secretarial",
    "meaning": "(thuộc) thư ký",
    "partOfSpeech": "adj",
    "ipa": "/¸sekri´tɛəriəl/",
    "example": "The company selected an secretarial option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-844",
    "term": "secretary",
    "meaning": "thư ký",
    "partOfSpeech": "n",
    "ipa": "/'sekrətri/",
    "example": "The manager discussed the secretary with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-845",
    "term": "select",
    "meaning": "lựa chọn, chọn lọc, tuyển chọn",
    "partOfSpeech": "v",
    "ipa": "/si´lekt/",
    "example": "The team will select the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-846",
    "term": "selection",
    "meaning": "sự lựa chọn, sự chọn lọc, sự tuyển lựa",
    "partOfSpeech": "n",
    "ipa": "/si'lekʃn/",
    "example": "The manager discussed the selection with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-847",
    "term": "selective",
    "meaning": "có tuyển chọn; dựa trên sự tuyển chọn",
    "partOfSpeech": "adj",
    "ipa": "/si'lektiv/",
    "example": "The company selected an selective option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-848",
    "term": "seminar",
    "meaning": "hội nghị chuyên đề",
    "partOfSpeech": "n",
    "ipa": "/¸semi´na:/",
    "example": "The manager discussed the seminar in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-849",
    "term": "senior",
    "meaning": "nhiều tuổi hơn; cao hơn về cấp bậc (chức quyền..); lâu năm hơn",
    "partOfSpeech": "adj",
    "ipa": "/'si:niə/",
    "example": "The company selected an senior option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-850",
    "term": "sequel",
    "meaning": "sự tiếp tục, nối tiếp, kết quả",
    "partOfSpeech": "n",
    "ipa": "/ˈsiː.kwəl/",
    "example": "The manager discussed the sequel before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-851",
    "term": "serious",
    "meaning": "đứng đắn, nghiêm trang, nghiêm nghị",
    "partOfSpeech": "adj",
    "ipa": "/'siəriəs/",
    "example": "The company selected an serious option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-852",
    "term": "service",
    "meaning": "sự phục vụ, sự hầu hạ",
    "partOfSpeech": "n",
    "ipa": "/'sə:vis/",
    "example": "The manager discussed the service at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-853",
    "term": "several",
    "meaning": "vài, riêng, cá nhân; khác nhau",
    "partOfSpeech": "adj",
    "ipa": "/'sevrəl/",
    "example": "The company selected an several option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-854",
    "term": "shape",
    "meaning": "hình, hình dạng, hình thù",
    "partOfSpeech": "n",
    "ipa": "/ʃeip/",
    "example": "The manager discussed the shape at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-855",
    "term": "sharp",
    "meaning": "sắc, nhọn, bén",
    "partOfSpeech": "adj",
    "ipa": "/ʃɑrp/",
    "example": "The company selected an sharp option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-856",
    "term": "shift",
    "meaning": "sự thay đổi (về vị trí, bản chất, hình dáng..)",
    "partOfSpeech": "n",
    "ipa": "/ʃift/",
    "example": "The manager discussed the shift at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-857",
    "term": "shine",
    "meaning": "ánh sáng; ánh nắng; sự chói sáng, độ sáng",
    "partOfSpeech": "n",
    "ipa": "/ʃain/",
    "example": "The manager discussed the shine at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-858",
    "term": "shipment",
    "meaning": "việc gửi hàng; việc chất hàng lên tàu",
    "partOfSpeech": "n",
    "ipa": "/´ʃipmənt/",
    "example": "The manager discussed the shipment before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-859",
    "term": "shipping",
    "meaning": "đang chuyển hàng",
    "partOfSpeech": "n",
    "ipa": "/ˈʃɪp.ɪŋ/",
    "example": "The manager discussed the shipping before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-860",
    "term": "shortage",
    "meaning": "sự thiếu sót",
    "partOfSpeech": "n",
    "ipa": "/ˈʃɔːr.t̬ɪdʒ/",
    "example": "The manager discussed the shortage before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-861",
    "term": "shuttle",
    "meaning": "xe đưa đón",
    "partOfSpeech": "n",
    "ipa": "/ˈʃʌt̬.əl/",
    "example": "The manager discussed the shuttle in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-862",
    "term": "sightseeing",
    "meaning": "tham quan",
    "partOfSpeech": "n",
    "ipa": "/ˈsaɪtˌsiː.ɪŋ/",
    "example": "The manager discussed the sightseeing before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-863",
    "term": "significant",
    "meaning": "quan trọng",
    "partOfSpeech": "adj",
    "ipa": "/sɪɡˈnɪf.ə.kənt/",
    "example": "The company selected an significant option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-864",
    "term": "simplify",
    "meaning": "đơn giản hóa",
    "partOfSpeech": "v",
    "ipa": "/ˈsɪm.plə.faɪ/",
    "example": "The team will simplify the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-865",
    "term": "situation",
    "meaning": "tình hình",
    "partOfSpeech": "n",
    "ipa": "/ˌsɪtʃ.uˈeɪ.ʃən/",
    "example": "The manager discussed the situation with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-866",
    "term": "slump",
    "meaning": "sự sụt giảm",
    "partOfSpeech": "v",
    "ipa": "/slʌmp/",
    "example": "The team will slump the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-867",
    "term": "software",
    "meaning": "phần mềm",
    "partOfSpeech": "n",
    "ipa": "/ˈsɑːft.wer/",
    "example": "The manager discussed the software during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-868",
    "term": "solar",
    "meaning": "hệ mặt trời",
    "partOfSpeech": "adj",
    "ipa": "/ˈsoʊ.lɚ/",
    "example": "The company selected an solar option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-869",
    "term": "spacious",
    "meaning": "rộng rãi",
    "partOfSpeech": "adj",
    "ipa": "/ˈspeɪ.ʃəs/",
    "example": "The company selected an spacious option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-870",
    "term": "spare part",
    "meaning": "phụ tùng",
    "partOfSpeech": "n",
    "ipa": "/ˈspeər ˈpɑrt/",
    "example": "The manager discussed the spare part during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-871",
    "term": "spare time",
    "meaning": "thời gian rảnh",
    "partOfSpeech": "n",
    "ipa": "/ˈspeər ˈtɑɪm/",
    "example": "The manager discussed the spare time during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-872",
    "term": "specialize",
    "meaning": "chuyên môn hóa",
    "partOfSpeech": "v",
    "ipa": "/ˈspeʃ.ə.laɪz/",
    "example": "The team will specialize the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-873",
    "term": "specialty",
    "meaning": "chuyên môn",
    "partOfSpeech": "n",
    "ipa": "/ˈspeʃ.əl.ti/",
    "example": "The manager discussed the specialty with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-874",
    "term": "specification",
    "meaning": "chi tiết, đặc điểm",
    "partOfSpeech": "n",
    "ipa": "/ˌspes.ə.fəˈkeɪ.ʃən/",
    "example": "The manager discussed the specification at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-875",
    "term": "specify",
    "meaning": "giải thích, miêu tả",
    "partOfSpeech": "v",
    "ipa": "/ˈspes.ə.faɪ/",
    "example": "The team will specify the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-876",
    "term": "spectator",
    "meaning": "khán giả",
    "partOfSpeech": "n",
    "ipa": "/spekˈteɪ.t̬ɚ/",
    "example": "The manager discussed the spectator with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-877",
    "term": "stable",
    "meaning": "ổn định",
    "partOfSpeech": "adj",
    "ipa": "/ˈsteɪ.bəl/",
    "example": "The company selected an stable option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-878",
    "term": "stadium",
    "meaning": "sân vận động",
    "partOfSpeech": "n",
    "ipa": "/ˈsteɪ.di.əm/",
    "example": "The manager discussed the stadium in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-879",
    "term": "staff",
    "meaning": "nhân viên",
    "partOfSpeech": "n",
    "ipa": "/stæf/",
    "example": "The manager discussed the staff with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-880",
    "term": "stapler",
    "meaning": "người phân loại",
    "partOfSpeech": "n",
    "ipa": "/ˈsteɪ.plɚ/",
    "example": "The manager discussed the stapler in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-881",
    "term": "stare",
    "meaning": "nhìn chằm chằm",
    "partOfSpeech": "v",
    "ipa": "/ster/",
    "example": "The team will stare the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-882",
    "term": "starter",
    "meaning": "người ra lệnh xuất phát, món khai vị",
    "partOfSpeech": "n",
    "ipa": "/ˈstɑːr.t̬ɚ/",
    "example": "The manager discussed the starter in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-883",
    "term": "stationery",
    "meaning": "đồ dùng văn phòng",
    "partOfSpeech": "n",
    "ipa": "/ˈsteɪ.ʃə.ner.i/",
    "example": "The manager discussed the stationery during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-884",
    "term": "steep",
    "meaning": "quá quắt, không biết điều",
    "partOfSpeech": "adj",
    "ipa": "/stiːp/",
    "example": "The company selected an steep option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-885",
    "term": "stock",
    "meaning": "kho hàng, kho dự trữ",
    "partOfSpeech": "n",
    "ipa": "/stɑːk/",
    "example": "The manager discussed the stock at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-886",
    "term": "strategic",
    "meaning": "mang tính chiến lược",
    "partOfSpeech": "adj",
    "ipa": "/strəˈtiː.dʒɪk/",
    "example": "The company selected an strategic option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-887",
    "term": "strategy",
    "meaning": "chiến lược",
    "partOfSpeech": "v",
    "ipa": "/'strætəʤɪ/",
    "example": "The team will strategy the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-888",
    "term": "streamline",
    "meaning": "dòng nước, luồng không khí",
    "partOfSpeech": "v",
    "ipa": "/ˈstriːm.laɪn/",
    "example": "The team will streamline the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-889",
    "term": "strike",
    "meaning": "đánh đập",
    "partOfSpeech": "v",
    "ipa": "/straɪk/",
    "example": "The team will strike the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-890",
    "term": "studio",
    "meaning": "phòng thu âm",
    "partOfSpeech": "n",
    "ipa": "/ˈstuː.di.oʊ/",
    "example": "The manager discussed the studio before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-891",
    "term": "stunning",
    "meaning": "tuyệt vời, lộng lẫy",
    "partOfSpeech": "adj",
    "ipa": "/ˈstʌn.ɪŋ/",
    "example": "The company selected an stunning option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-892",
    "term": "submit",
    "meaning": "xác nhận, gửi đi",
    "partOfSpeech": "v",
    "ipa": "/səbˈmɪt/",
    "example": "The team will submit the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-893",
    "term": "subscribe",
    "meaning": "đăng ký",
    "partOfSpeech": "v",
    "ipa": "/səbˈskraɪb/",
    "example": "The team will subscribe the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-894",
    "term": "subscription",
    "meaning": "sự đăng ký",
    "partOfSpeech": "n",
    "ipa": "/səbˈskrɪp.ʃən/",
    "example": "The manager discussed the subscription at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-895",
    "term": "subsidiary",
    "meaning": "sự lệ thuộc",
    "partOfSpeech": "adj",
    "ipa": "/səbˈsɪd.i.er.i/",
    "example": "The company selected an subsidiary option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-896",
    "term": "suffocate",
    "meaning": "làm ngạt, bóp nghẹt",
    "partOfSpeech": "v",
    "ipa": "/ˈsʌf.ə.keɪt/",
    "example": "The team will suffocate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-897",
    "term": "suggest",
    "meaning": "đề xuất",
    "partOfSpeech": "v",
    "ipa": "/səˈdʒest/",
    "example": "The team will suggest the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-898",
    "term": "suggestion",
    "meaning": "sự đề xuất",
    "partOfSpeech": "n",
    "ipa": "/səˈdʒes.tʃən/",
    "example": "The manager discussed the suggestion during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-899",
    "term": "suit",
    "meaning": "bộ vest",
    "partOfSpeech": "n",
    "ipa": "/suːt/",
    "example": "The manager discussed the suit at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-900",
    "term": "suitability",
    "meaning": "sự thích hợp",
    "partOfSpeech": "n",
    "ipa": "/ˌsuː.t̬əˈbɪl.ə.t̬i/",
    "example": "The manager discussed the suitability before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-901",
    "term": "suitable",
    "meaning": "phù hợp , thích hợp",
    "partOfSpeech": "adj",
    "ipa": "/ˈsuː.t̬ə.bəl/",
    "example": "The company selected an suitable option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-902",
    "term": "supervise",
    "meaning": "giám sát",
    "partOfSpeech": "v",
    "ipa": "/ˈsuː.pɚ.vaɪz/",
    "example": "The team will supervise the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-903",
    "term": "supervision",
    "meaning": "sự giám sát",
    "partOfSpeech": "n",
    "ipa": "/ˌsuː.pɚˈvɪʒ.ən/",
    "example": "The manager discussed the supervision before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-904",
    "term": "supplier",
    "meaning": "nhà cung cấp",
    "partOfSpeech": "n",
    "ipa": "/səˈplaɪ.ɚ/",
    "example": "The manager discussed the supplier before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-905",
    "term": "supply",
    "meaning": "cung cấp",
    "partOfSpeech": "v",
    "ipa": "/səˈplaɪ/",
    "example": "The team will supply the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-906",
    "term": "support",
    "meaning": "trợ giúp",
    "partOfSpeech": "v",
    "ipa": "/səˈpɔːrt/",
    "example": "The team will support the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-907",
    "term": "supporter",
    "meaning": "người trợ giúp",
    "partOfSpeech": "n",
    "ipa": "/səˈpɔːr.t̬ɚ/",
    "example": "The manager discussed the supporter at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-908",
    "term": "surrounding",
    "meaning": "bao quanh",
    "partOfSpeech": "adj",
    "ipa": "/səˈraʊn.dɪŋ/",
    "example": "The company selected an surrounding option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-909",
    "term": "suspicious",
    "meaning": "khả nghi",
    "partOfSpeech": "adj",
    "ipa": "/səˈspɪʃ.əs/",
    "example": "The company selected an suspicious option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-910",
    "term": "switchboard",
    "meaning": "tổng đài",
    "partOfSpeech": "n",
    "ipa": "/ˈswɪtʃ.bɔːrd/",
    "example": "The manager discussed the switchboard before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-911",
    "term": "systematic",
    "meaning": "có hệ thống",
    "partOfSpeech": "adj",
    "ipa": "/ˌsɪs.təˈmæt̬.ɪk/",
    "example": "The company selected an systematic option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-912",
    "term": "takeover",
    "meaning": "tiếp quản",
    "partOfSpeech": "n",
    "ipa": "/ˈteɪkˌoʊ.vɚ/",
    "example": "The manager discussed the takeover with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-913",
    "term": "tax",
    "meaning": "thuế",
    "partOfSpeech": "n",
    "ipa": "/tæks/",
    "example": "The manager discussed the tax in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-914",
    "term": "technical",
    "meaning": "có tính kỹ thuật",
    "partOfSpeech": "adj",
    "ipa": "/ˈtek.nɪ.kəl/",
    "example": "The company selected an technical option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-915",
    "term": "technician",
    "meaning": "kỹ thuật viên",
    "partOfSpeech": "n",
    "ipa": "/tekˈnɪʃ.ən/",
    "example": "The manager discussed the technician before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-916",
    "term": "temporary",
    "meaning": "tạm thời",
    "partOfSpeech": "adj",
    "ipa": "/ˈtem.pə.rer.i/",
    "example": "The company selected an temporary option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-917",
    "term": "tenant",
    "meaning": "người thuê nhà",
    "partOfSpeech": "n",
    "ipa": "/ˈten.ənt/",
    "example": "The manager discussed the tenant in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-918",
    "term": "terminate",
    "meaning": "chấm dứt",
    "partOfSpeech": "v",
    "ipa": "/ˈtɝː.mə.neɪt/",
    "example": "The team will terminate the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-919",
    "term": "terrible",
    "meaning": "kinh khủng",
    "partOfSpeech": "adj",
    "ipa": "/ˈter.ə.bəl/",
    "example": "The company selected an terrible option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-920",
    "term": "terrific",
    "meaning": "khủng khiếp",
    "partOfSpeech": "adj",
    "ipa": "/təˈrɪf.ɪk/",
    "example": "The company selected an terrific option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-921",
    "term": "theoretical",
    "meaning": "mang tính lý thuyết",
    "partOfSpeech": "adj",
    "ipa": "/ˌθiː.əˈret̬.kəl/",
    "example": "The company selected an theoretical option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-922",
    "term": "theory",
    "meaning": "học thuyết",
    "partOfSpeech": "n",
    "ipa": "/ˈθɪr.i/",
    "example": "The manager discussed the theory in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-923",
    "term": "thorough",
    "meaning": "triệt để",
    "partOfSpeech": "adj",
    "ipa": "/ˈθɝː.ə/",
    "example": "The company selected an thorough option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-924",
    "term": "tidy",
    "meaning": "ngăn nắp",
    "partOfSpeech": "adj",
    "ipa": "/ˈtaɪ.di/",
    "example": "The company selected an tidy option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-925",
    "term": "tip",
    "meaning": "tiền boa",
    "partOfSpeech": "n",
    "ipa": "/tɪp/",
    "example": "The manager discussed the tip at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-926",
    "term": "tour",
    "meaning": "chuyến du lịch",
    "partOfSpeech": "n",
    "ipa": "/tʊr/",
    "example": "The manager discussed the tour before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-927",
    "term": "tourism",
    "meaning": "du lịch",
    "partOfSpeech": "n",
    "ipa": "/ˈtʊr.ɪ.zəm/",
    "example": "The manager discussed the tourism before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-928",
    "term": "tourist",
    "meaning": "du khách",
    "partOfSpeech": "n",
    "ipa": "/ˈtʊr.ɪst/",
    "example": "The manager discussed the tourist before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-929",
    "term": "towel",
    "meaning": "cái khăn lau",
    "partOfSpeech": "n",
    "ipa": "/taʊəl/",
    "example": "The manager discussed the towel before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-930",
    "term": "tower",
    "meaning": "tòa nhà, tháp",
    "partOfSpeech": "n",
    "ipa": "/ˈtaʊ.ɚ/",
    "example": "The manager discussed the tower before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-931",
    "term": "track",
    "meaning": "con đường",
    "partOfSpeech": "n",
    "ipa": "/træk/",
    "example": "The manager discussed the track before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-932",
    "term": "trade",
    "meaning": "sự trao đổi (hàng hóa, vật phẩm)",
    "partOfSpeech": "n",
    "ipa": "/treɪd/",
    "example": "The manager discussed the trade before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-933",
    "term": "tradition",
    "meaning": "sự truyền thống",
    "partOfSpeech": "n",
    "ipa": "/trəˈdɪʃ.ən/",
    "example": "The manager discussed the tradition during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-934",
    "term": "traffic",
    "meaning": "giao thông",
    "partOfSpeech": "n",
    "ipa": "/ˈtræf.ɪk/",
    "example": "The manager discussed the traffic before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-935",
    "term": "training",
    "meaning": "sự huấn luyện, sự đào tạo",
    "partOfSpeech": "n",
    "ipa": "/ˈtreɪ.nɪŋ/",
    "example": "The manager discussed the training with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-936",
    "term": "transfer",
    "meaning": "chuyển khoản",
    "partOfSpeech": "v",
    "ipa": "/ˈtræns.fɝː/",
    "example": "The team will transfer the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-937",
    "term": "transform",
    "meaning": "biến đổi",
    "partOfSpeech": "v",
    "ipa": "/trænsˈfɔːrm/",
    "example": "The team will transform the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-938",
    "term": "transformation",
    "meaning": "sự biến đổi",
    "partOfSpeech": "n",
    "ipa": "/ˌtræns.fɚˈmeɪ.ʃən/",
    "example": "The manager discussed the transformation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-939",
    "term": "transit",
    "meaning": "vận chuyển",
    "partOfSpeech": "n",
    "ipa": "/ˈtræn.zɪt/",
    "example": "The manager discussed the transit before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-940",
    "term": "transportation",
    "meaning": "sự vận chuyển",
    "partOfSpeech": "n",
    "ipa": "/ˌtræn.spɚˈteɪ.ʃən/",
    "example": "The manager discussed the transportation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-941",
    "term": "trend",
    "meaning": "xu hướng",
    "partOfSpeech": "n",
    "ipa": "/trend/",
    "example": "The manager discussed the trend before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-942",
    "term": "trial",
    "meaning": "thử nghiệm",
    "partOfSpeech": "n",
    "ipa": "/traɪəl/",
    "example": "The manager discussed the trial before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-943",
    "term": "triumph",
    "meaning": "chiến thắng",
    "partOfSpeech": "n",
    "ipa": "/ˈtraɪ.əmf/",
    "example": "The manager discussed the triumph before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-944",
    "term": "trust",
    "meaning": "tin, tin tưởng",
    "partOfSpeech": "v",
    "ipa": "/trʌst/",
    "example": "The team will trust the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-945",
    "term": "turnover",
    "meaning": "doanh số, doanh thu",
    "partOfSpeech": "n",
    "ipa": "/ˈtɝːnˌoʊ.vɚ/",
    "example": "The manager discussed the turnover with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-946",
    "term": "unconditional",
    "meaning": "vô điều kiện",
    "partOfSpeech": "adj",
    "ipa": "/ˌʌn.kənˈdɪʃ.ən.əl/",
    "example": "The company selected an unconditional option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-947",
    "term": "understand",
    "meaning": "hiểu, nắm bắt được",
    "partOfSpeech": "v",
    "ipa": "/ˌʌn.dɚˈstænd/",
    "example": "The team will understand the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-948",
    "term": "unfavorable",
    "meaning": "không thuận lợi",
    "partOfSpeech": "adj",
    "ipa": "/ʌnˈfeɪ.vər.ə.bəl/",
    "example": "The company selected an unfavorable option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-949",
    "term": "unfortunately",
    "meaning": "không may mắn",
    "partOfSpeech": "adj",
    "ipa": "/ʌnˈfɔːr.tʃən.ət.li/",
    "example": "The company selected an unfortunately option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-950",
    "term": "uniform",
    "meaning": "đồng phục",
    "partOfSpeech": "n",
    "ipa": "/ˈjuː.nə.fɔːrm/",
    "example": "The manager discussed the uniform with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-951",
    "term": "unspoiled",
    "meaning": "hoang sơ",
    "partOfSpeech": "adj",
    "ipa": "/ʌnˈspɔɪld/",
    "example": "The company selected an unspoiled option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-952",
    "term": "unwrap",
    "meaning": "bóc, mở",
    "partOfSpeech": "v",
    "ipa": "/ʌnˈræp/",
    "example": "The team will unwrap the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-953",
    "term": "upcoming",
    "meaning": "sắp xảy ra",
    "partOfSpeech": "adj",
    "ipa": "/ˈʌpˌkʌm.ɪŋ/",
    "example": "The company selected an upcoming option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-954",
    "term": "update",
    "meaning": "nâng cấp",
    "partOfSpeech": "v",
    "ipa": "/ʌpˈdeɪt/",
    "example": "The team will update the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-955",
    "term": "upgrade",
    "meaning": "nâng cấp",
    "partOfSpeech": "v",
    "ipa": "/ʌpˈɡreɪd/",
    "example": "The team will upgrade the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-956",
    "term": "upset",
    "meaning": "buồn bã, lo lắng",
    "partOfSpeech": "v, adj",
    "ipa": "/ʌpˈset/",
    "example": "The team will upset the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-957",
    "term": "upstairs",
    "meaning": "tầng trên",
    "partOfSpeech": "n",
    "ipa": "/ʌpˈsterz/",
    "example": "The manager discussed the upstairs during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-958",
    "term": "utility bill",
    "meaning": "/bɪl/ hóa đơn điện nước",
    "partOfSpeech": "n",
    "ipa": "/juːˈtɪl.ə.t̬i/",
    "example": "The manager discussed the utility bill before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-959",
    "term": "vacancy",
    "meaning": "vị trí bỏ trống",
    "partOfSpeech": "n",
    "ipa": "/ˈveɪ.kən.si/",
    "example": "The manager discussed the vacancy during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-960",
    "term": "vacant",
    "meaning": "bỏ trống",
    "partOfSpeech": "v",
    "ipa": "/ˈveɪ.kənt/",
    "example": "The team will vacant the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-961",
    "term": "vacation",
    "meaning": "kì nghỉ",
    "partOfSpeech": "n",
    "ipa": "/veɪˈkeɪ.ʃən/",
    "example": "The manager discussed the vacation before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-962",
    "term": "vaccination",
    "meaning": "tiêm chủng",
    "partOfSpeech": "n",
    "ipa": "/ˌvæk.səˈneɪ.ʃən/",
    "example": "The manager discussed the vaccination before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-963",
    "term": "valuables",
    "meaning": "vật có giá trị",
    "partOfSpeech": "n",
    "ipa": "/ˈvæl.jə.bəlz/",
    "example": "The manager discussed the valuables at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-964",
    "term": "varied",
    "meaning": "đa dạng",
    "partOfSpeech": "adj",
    "ipa": "/ˈver.ɪd/",
    "example": "The company selected an varied option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-965",
    "term": "variety",
    "meaning": "sự đa dạng",
    "partOfSpeech": "n",
    "ipa": "/vəˈraɪ.ə.t̬i/",
    "example": "The manager discussed the variety during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-966",
    "term": "various",
    "meaning": "đa dạng",
    "partOfSpeech": "adj",
    "ipa": "/ˈver.i.əs/",
    "example": "The company selected an various option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-967",
    "term": "vendor",
    "meaning": "người bán",
    "partOfSpeech": "n",
    "ipa": "/ˈven.dɚ/",
    "example": "The manager discussed the vendor with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-968",
    "term": "venture",
    "meaning": "liên doanh",
    "partOfSpeech": "n",
    "ipa": "/ˈven.tʃɚ/",
    "example": "The manager discussed the venture during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-969",
    "term": "venue",
    "meaning": "địa điểm",
    "partOfSpeech": "n",
    "ipa": "/ˈven.juː/",
    "example": "The manager discussed the venue before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-970",
    "term": "virus",
    "meaning": "virus",
    "partOfSpeech": "n",
    "ipa": "/ˈvaɪ.rəs/",
    "example": "The manager discussed the virus before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-971",
    "term": "vital",
    "meaning": "thiết yếu",
    "partOfSpeech": "adj",
    "ipa": "/ˈvaɪ.t̬əl/",
    "example": "The company selected an vital option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-972",
    "term": "vivid",
    "meaning": "chói sáng, rực rỡ, sống động",
    "partOfSpeech": "adj",
    "ipa": "/ˈvɪv.ɪd/",
    "example": "The company selected an vivid option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-973",
    "term": "wage",
    "meaning": "tiền công",
    "partOfSpeech": "n",
    "ipa": "/weɪdʒ/",
    "example": "The manager discussed the wage before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-974",
    "term": "walkway",
    "meaning": "lối đi",
    "partOfSpeech": "n",
    "ipa": "/ˈwɑː.kweɪ/",
    "example": "The manager discussed the walkway before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-975",
    "term": "warehouse",
    "meaning": "kho hàng",
    "partOfSpeech": "n",
    "ipa": "/ˈwer.haʊs/",
    "example": "The manager discussed the warehouse at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-976",
    "term": "warn",
    "meaning": "cảnh báo",
    "partOfSpeech": "v",
    "ipa": "/wɔːrn/",
    "example": "The team will warn the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-977",
    "term": "warning",
    "meaning": "sự cảnh báo",
    "partOfSpeech": "n",
    "ipa": "/ˈwɔːr.nɪŋ/",
    "example": "The manager discussed the warning before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-978",
    "term": "warrant",
    "meaning": "bảo đảm",
    "partOfSpeech": "v",
    "ipa": "/ˈwɔːr.ənt/",
    "example": "The team will warrant the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-979",
    "term": "warranty",
    "meaning": "sự bảo đảm",
    "partOfSpeech": "n",
    "ipa": "/ˈwɔːr.ən.t̬i/",
    "example": "The manager discussed the warranty before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-980",
    "term": "wastage",
    "meaning": "lãng phí",
    "partOfSpeech": "adj",
    "ipa": "/ˈweɪ.stɪdʒ/",
    "example": "The company selected an wastage option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-981",
    "term": "waterproof",
    "meaning": "chống nước",
    "partOfSpeech": "adj",
    "ipa": "/ˈwɑː.t̬ɚ.pruːf/",
    "example": "The company selected an waterproof option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-982",
    "term": "wealth",
    "meaning": "giàu có",
    "partOfSpeech": "adj",
    "ipa": "/welθ/",
    "example": "The company selected an wealth option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-983",
    "term": "website",
    "meaning": "trang web",
    "partOfSpeech": "n",
    "ipa": "/ˈweb.saɪt/",
    "example": "The manager discussed the website during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-984",
    "term": "weight",
    "meaning": "cân nặng",
    "partOfSpeech": "n",
    "ipa": "/weɪt/",
    "example": "The manager discussed the weight during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-985",
    "term": "welfare",
    "meaning": "phúc lợi",
    "partOfSpeech": "n",
    "ipa": "/ˈwel.fer/",
    "example": "The manager discussed the welfare before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-986",
    "term": "wholesale",
    "meaning": "bán sỉ, bán buôn",
    "partOfSpeech": "v",
    "ipa": "/ˈhoʊl.seɪl/",
    "example": "The team will wholesale the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-987",
    "term": "win",
    "meaning": "thắng, chiến thắng",
    "partOfSpeech": "v",
    "ipa": "/wɪn/",
    "example": "The team will win the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-988",
    "term": "withdraw",
    "meaning": "rút",
    "partOfSpeech": "v",
    "ipa": "/wɪðˈdrɑː/",
    "example": "The team will withdraw the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-989",
    "term": "withdrawal",
    "meaning": "sự rút ra (tiền)",
    "partOfSpeech": "n",
    "ipa": "/wɪðˈdrɑː.əl/",
    "example": "The manager discussed the withdrawal before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-990",
    "term": "workplace",
    "meaning": "nơi làm việc",
    "partOfSpeech": "n",
    "ipa": "/ˈwɝːk.pleɪs/",
    "example": "The manager discussed the workplace with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-991",
    "term": "workshop",
    "meaning": "hội thảo",
    "partOfSpeech": "n",
    "ipa": "/ˈwɝːk.ʃɑːp/",
    "example": "The manager discussed the workshop at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-992",
    "term": "worth",
    "meaning": "giá trị",
    "partOfSpeech": "adj",
    "ipa": "/wɝːθ/",
    "example": "The company selected an worth option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-993",
    "term": "worthless",
    "meaning": "không có giá trị, vô giá trị",
    "partOfSpeech": "adj",
    "ipa": "/ˈwɝːθ.ləs/",
    "example": "The company selected an worthless option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-994",
    "term": "wrap",
    "meaning": "gói, bọc lại",
    "partOfSpeech": "v",
    "ipa": "/ræp/",
    "example": "The team will wrap the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-995",
    "term": "write",
    "meaning": "viết, sáng tác",
    "partOfSpeech": "v",
    "ipa": "/raɪt/",
    "example": "The team will write the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-996",
    "term": "yearly",
    "meaning": "hằng năm",
    "partOfSpeech": "adv",
    "ipa": "/ˈjɪr.li/",
    "example": "The team will yearly the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-997",
    "term": "yield",
    "meaning": "sản xuất, cung cấp",
    "partOfSpeech": "v",
    "ipa": "/jiːld/",
    "example": "The team will yield the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-998",
    "term": "youth",
    "meaning": "tuổi trẻ, thời thanh xuân",
    "partOfSpeech": "n",
    "ipa": "/juːθ/",
    "example": "The manager discussed the youth before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-999",
    "term": "zero",
    "meaning": "số 0",
    "partOfSpeech": "n",
    "ipa": "/ˈzɪr.oʊ/",
    "example": "The manager discussed the zero before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-1000",
    "term": "zone",
    "meaning": "vùng, khu vực n: danh từ (noun) adv: trạng từ (adverb) pron: đại từ (pronoun) v: động từ (verb) prep: giới từ (preposition) conj: liên từ (conjunction)",
    "partOfSpeech": "n",
    "ipa": "/zoʊn/",
    "example": "The manager discussed the zone before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  }
];

export const supplementalVocabulary: VocabularyItem[] = [
  {
    "id": "plus-1",
    "term": "accrual",
    "meaning": "dồn tích",
    "partOfSpeech": "n",
    "ipa": "/əˈkruəl/",
    "example": "The manager discussed the accrual in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-2",
    "term": "allocation",
    "meaning": "phân bổ",
    "partOfSpeech": "n",
    "ipa": "/ˌæləˈkeɪʃən/",
    "example": "The manager discussed the allocation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-3",
    "term": "amortization",
    "meaning": "khấu hao dần",
    "partOfSpeech": "n",
    "ipa": "/ˌæmərtɪˈzeɪʃən/",
    "example": "The manager discussed the amortization in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-4",
    "term": "appraisal",
    "meaning": "đánh giá",
    "partOfSpeech": "n",
    "ipa": "/əˈpreɪzəl/",
    "example": "The manager discussed the appraisal with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-5",
    "term": "asset management",
    "meaning": "quản lý tài sản",
    "partOfSpeech": "n",
    "ipa": "/ˈæˌsɛt ˈmænɪʤmənt/",
    "example": "The manager discussed the asset management in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-6",
    "term": "benchmark",
    "meaning": "mốc so sánh",
    "partOfSpeech": "n",
    "ipa": "/ˈbɛnʧˌmɑrk/",
    "example": "The manager discussed the benchmark at the office.",
    "topic": "Kinh doanh",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-7",
    "term": "billing",
    "meaning": "việc lập hóa đơn",
    "partOfSpeech": "n",
    "ipa": "/ˈbɪlɪŋ/",
    "example": "The manager discussed the billing in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-8",
    "term": "bond",
    "meaning": "trái phiếu",
    "partOfSpeech": "n",
    "ipa": "/bɑnd/",
    "example": "The manager discussed the bond in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-9",
    "term": "borrow",
    "meaning": "vay",
    "partOfSpeech": "v",
    "ipa": "/ˈbɑˌroʊ/",
    "example": "The team will borrow the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-10",
    "term": "capital",
    "meaning": "vốn",
    "partOfSpeech": "n",
    "ipa": "/ˈkæpɪtəl/",
    "example": "The manager discussed the capital in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-11",
    "term": "cash flow",
    "meaning": "dòng tiền",
    "partOfSpeech": "n",
    "ipa": "/kæʃ floʊ/",
    "example": "The manager discussed the cash flow in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-12",
    "term": "collateral",
    "meaning": "tài sản thế chấp",
    "partOfSpeech": "n",
    "ipa": "/kəˈlætərəl/",
    "example": "The manager discussed the collateral in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-13",
    "term": "commission",
    "meaning": "tiền hoa hồng",
    "partOfSpeech": "n",
    "ipa": "/kəˈmɪʃən/",
    "example": "The manager discussed the commission in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-14",
    "term": "compensation",
    "meaning": "khoản bồi thường; tiền lương",
    "partOfSpeech": "n",
    "ipa": "/ˌkɑmpənˈseɪʃən/",
    "example": "The manager discussed the compensation with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-15",
    "term": "creditor",
    "meaning": "chủ nợ",
    "partOfSpeech": "n",
    "ipa": "/ˈkrɛdɪtər/",
    "example": "The manager discussed the creditor in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-16",
    "term": "currency",
    "meaning": "tiền tệ",
    "partOfSpeech": "n",
    "ipa": "/ˈkərənsi/",
    "example": "The manager discussed the currency in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-17",
    "term": "debit",
    "meaning": "khoản ghi nợ",
    "partOfSpeech": "n",
    "ipa": "/ˈdɛbɪt/",
    "example": "The manager discussed the debit in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-18",
    "term": "depreciation",
    "meaning": "khấu hao",
    "partOfSpeech": "n",
    "ipa": "/dɪˌpriʃiˈeɪʃən/",
    "example": "The manager discussed the depreciation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-19",
    "term": "disbursement",
    "meaning": "khoản chi trả",
    "partOfSpeech": "n",
    "ipa": "/dɪsˈbərsmənt/",
    "example": "The manager discussed the disbursement in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-20",
    "term": "earnings report",
    "meaning": "báo cáo thu nhập",
    "partOfSpeech": "n",
    "ipa": "/ˈərnɪŋz rɪˈpɔrt/",
    "example": "The manager discussed the earnings report in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-21",
    "term": "equity",
    "meaning": "vốn chủ sở hữu",
    "partOfSpeech": "n",
    "ipa": "/ˈɛkwəti/",
    "example": "The manager discussed the equity in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-22",
    "term": "expenditure",
    "meaning": "chi tiêu",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈspɛndɪʧər/",
    "example": "The manager discussed the expenditure in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-23",
    "term": "fiscal",
    "meaning": "thuộc tài chính",
    "partOfSpeech": "n",
    "ipa": "/ˈfɪskəl/",
    "example": "The manager discussed the fiscal in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-24",
    "term": "forecast",
    "meaning": "dự báo",
    "partOfSpeech": "n",
    "ipa": "/ˈfɔrˌkæst/",
    "example": "The manager discussed the forecast in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-25",
    "term": "installment",
    "meaning": "khoản trả góp",
    "partOfSpeech": "n",
    "ipa": "/ˌɪnˈstɔlmənt/",
    "example": "The manager discussed the installment in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-26",
    "term": "interest rate",
    "meaning": "lãi suất",
    "partOfSpeech": "n",
    "ipa": "/ˈɪntəˌrɛst reɪt/",
    "example": "The manager discussed the interest rate in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-27",
    "term": "levy",
    "meaning": "khoản thu; thuế",
    "partOfSpeech": "n",
    "ipa": "/ˈlɛvi/",
    "example": "The manager discussed the levy in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-28",
    "term": "liquidity",
    "meaning": "tính thanh khoản",
    "partOfSpeech": "n",
    "ipa": "/lɪkˈwɪdɪti/",
    "example": "The manager discussed the liquidity in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-29",
    "term": "loan",
    "meaning": "khoản vay",
    "partOfSpeech": "n",
    "ipa": "/loʊn/",
    "example": "The manager discussed the loan in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-30",
    "term": "margin",
    "meaning": "biên lợi nhuận",
    "partOfSpeech": "n",
    "ipa": "/ˈmɑrʤən/",
    "example": "The manager discussed the margin in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-31",
    "term": "mortgage",
    "meaning": "khoản thế chấp",
    "partOfSpeech": "n",
    "ipa": "/ˈmɔrgɪʤ/",
    "example": "The manager discussed the mortgage in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-32",
    "term": "payroll",
    "meaning": "bảng lương",
    "partOfSpeech": "n",
    "ipa": "/ˈpeɪˌroʊl/",
    "example": "The manager discussed the payroll in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-33",
    "term": "portfolio",
    "meaning": "danh mục đầu tư",
    "partOfSpeech": "n",
    "ipa": "/pɔrtˈfoʊliˌoʊ/",
    "example": "The manager discussed the portfolio in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-34",
    "term": "premium",
    "meaning": "phí bảo hiểm",
    "partOfSpeech": "n",
    "ipa": "/ˈprimiəm/",
    "example": "The manager discussed the premium in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-35",
    "term": "principal",
    "meaning": "khoản tiền gốc",
    "partOfSpeech": "n",
    "ipa": "/ˈprɪnsəpəl/",
    "example": "The manager discussed the principal in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-36",
    "term": "procurement",
    "meaning": "mua sắm",
    "partOfSpeech": "n",
    "ipa": "/proʊˈkjʊrmənt/",
    "example": "The manager discussed the procurement in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-37",
    "term": "reimbursement",
    "meaning": "khoản hoàn trả",
    "partOfSpeech": "n",
    "ipa": "/ˌriɪmˈbərsmənt/",
    "example": "The manager discussed the reimbursement in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-38",
    "term": "reserve",
    "meaning": "khoản dự phòng",
    "partOfSpeech": "n",
    "ipa": "/rɪˈzərv/",
    "example": "The manager discussed the reserve in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-39",
    "term": "return on investment",
    "meaning": "lợi nhuận đầu tư",
    "partOfSpeech": "n",
    "ipa": "/rɪˈtərn ɔn ˌɪnˈvɛstmənt/",
    "example": "The manager discussed the return on investment in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-40",
    "term": "securities",
    "meaning": "chứng khoán",
    "partOfSpeech": "n",
    "ipa": "/sɪˈkjʊrətiz/",
    "example": "The manager discussed the securities in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-41",
    "term": "subsidy",
    "meaning": "trợ cấp",
    "partOfSpeech": "n",
    "ipa": "/ˈsəbsɪdi/",
    "example": "The manager discussed the subsidy in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-42",
    "term": "tariff",
    "meaning": "thuế quan",
    "partOfSpeech": "n",
    "ipa": "/ˈtɛrəf/",
    "example": "The manager discussed the tariff in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-43",
    "term": "valuation",
    "meaning": "việc định giá",
    "partOfSpeech": "n",
    "ipa": "/væljuˈeɪʃən/",
    "example": "The manager discussed the valuation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-44",
    "term": "withholding",
    "meaning": "khoản khấu trừ",
    "partOfSpeech": "n",
    "ipa": "/wɪθˈhoʊldɪŋ/",
    "example": "The manager discussed the withholding in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-45",
    "term": "absenteeism",
    "meaning": "sự vắng mặt",
    "partOfSpeech": "n",
    "ipa": "/ˌæbsənˈtiɪzəm/",
    "example": "The manager discussed the absenteeism with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-46",
    "term": "affiliation",
    "meaning": "sự liên kết",
    "partOfSpeech": "n",
    "ipa": "/əˌfɪliˈeɪʃən/",
    "example": "The manager discussed the affiliation with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-47",
    "term": "apprenticeship",
    "meaning": "chương trình học việc",
    "partOfSpeech": "n",
    "ipa": "/əˈprɛntəsˌʃɪp/",
    "example": "The manager discussed the apprenticeship with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-48",
    "term": "aptitude",
    "meaning": "năng khiếu",
    "partOfSpeech": "n",
    "ipa": "/ˈæptəˌtud/",
    "example": "The manager discussed the aptitude with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-49",
    "term": "bonus",
    "meaning": "thưởng",
    "partOfSpeech": "n",
    "ipa": "/ˈboʊnəs/",
    "example": "The manager discussed the bonus with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-50",
    "term": "career path",
    "meaning": "lộ trình nghề nghiệp",
    "partOfSpeech": "n",
    "ipa": "/kərɪr pæθ/",
    "example": "The manager discussed the career path with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-51",
    "term": "consultant",
    "meaning": "chuyên gia tư vấn",
    "partOfSpeech": "n",
    "ipa": "/kənˈsəltənt/",
    "example": "The manager discussed the consultant with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-52",
    "term": "delegation",
    "meaning": "sự ủy quyền",
    "partOfSpeech": "n",
    "ipa": "/ˌdɛləˈgeɪʃən/",
    "example": "The manager discussed the delegation with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-53",
    "term": "disciplinary",
    "meaning": "thuộc kỷ luật",
    "partOfSpeech": "adj",
    "ipa": "/ˈdɪsəpləˌnɛri/",
    "example": "The company selected an disciplinary option with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-54",
    "term": "diversity",
    "meaning": "sự đa dạng",
    "partOfSpeech": "n",
    "ipa": "/dɪˈvərsɪti/",
    "example": "The manager discussed the diversity with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-55",
    "term": "eligibility",
    "meaning": "tính đủ điều kiện",
    "partOfSpeech": "n",
    "ipa": "/ˌɛlɪʤəˈbɪlɪti/",
    "example": "The manager discussed the eligibility with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-56",
    "term": "employment contract",
    "meaning": "hợp đồng lao động",
    "partOfSpeech": "n",
    "ipa": "/ɪmˈplɔɪmənt ˈkɑnˌtrækt/",
    "example": "The manager discussed the employment contract with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-57",
    "term": "freelance",
    "meaning": "làm việc tự do",
    "partOfSpeech": "adj",
    "ipa": "/ˈfriˌlæns/",
    "example": "The company selected an freelance option with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-58",
    "term": "headcount",
    "meaning": "tổng số nhân viên",
    "partOfSpeech": "n",
    "ipa": "/ˈhɛdˌkaʊnt/",
    "example": "The manager discussed the headcount with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-59",
    "term": "incentive",
    "meaning": "khoản khích lệ",
    "partOfSpeech": "n",
    "ipa": "/ˌɪnˈsɛnɪv/",
    "example": "The manager discussed the incentive with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-60",
    "term": "internship",
    "meaning": "kỳ thực tập",
    "partOfSpeech": "n",
    "ipa": "/ˈɪntərnˌʃɪp/",
    "example": "The manager discussed the internship with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-61",
    "term": "job description",
    "meaning": "mô tả công việc",
    "partOfSpeech": "n",
    "ipa": "/ʤɑb dɪˈskrɪpʃən/",
    "example": "The manager discussed the job description with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-62",
    "term": "labor union",
    "meaning": "công đoàn",
    "partOfSpeech": "n",
    "ipa": "/ˈleɪbər ˈjunjən/",
    "example": "The manager discussed the labor union with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-63",
    "term": "layoff",
    "meaning": "việc cắt giảm nhân sự",
    "partOfSpeech": "n",
    "ipa": "/leɪɔf/",
    "example": "The manager discussed the layoff with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-64",
    "term": "leadership",
    "meaning": "khả năng lãnh đạo",
    "partOfSpeech": "n",
    "ipa": "/ˈlidərˌʃɪp/",
    "example": "The manager discussed the leadership with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-65",
    "term": "mentorship",
    "meaning": "việc cố vấn",
    "partOfSpeech": "n",
    "ipa": "Nghe mẫu",
    "example": "The manager discussed the mentorship with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-66",
    "term": "onboarding",
    "meaning": "quy trình hội nhập nhân viên mới",
    "partOfSpeech": "n",
    "ipa": "Nghe mẫu",
    "example": "The manager discussed the onboarding with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-67",
    "term": "orientation",
    "meaning": "buổi định hướng",
    "partOfSpeech": "n",
    "ipa": "/ˌɔriɛnˈteɪʃən/",
    "example": "The manager discussed the orientation with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-68",
    "term": "outsource",
    "meaning": "thuê ngoài",
    "partOfSpeech": "v",
    "ipa": "/ˌaʊtˈsɔrs/",
    "example": "The team will outsource the request with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-69",
    "term": "performance review",
    "meaning": "đánh giá hiệu suất",
    "partOfSpeech": "n",
    "ipa": "/pərˈfɔrməns ˌrivˈju/",
    "example": "The manager discussed the performance review with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-70",
    "term": "probation",
    "meaning": "thời gian thử việc",
    "partOfSpeech": "n",
    "ipa": "/proʊˈbeɪʃən/",
    "example": "The manager discussed the probation with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-71",
    "term": "professional development",
    "meaning": "phát triển chuyên môn",
    "partOfSpeech": "n",
    "ipa": "/prəˈfɛʃənəl dɪˈvɛləpmənt/",
    "example": "The manager discussed the professional development with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-72",
    "term": "promotion opportunity",
    "meaning": "cơ hội thăng tiến",
    "partOfSpeech": "n",
    "ipa": "/pərˈmoʊʃən ˌɑpərˈtunəti/",
    "example": "The manager discussed the promotion opportunity with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-73",
    "term": "qualification",
    "meaning": "trình độ chuyên môn",
    "partOfSpeech": "n",
    "ipa": "/kˌwɑləfəˈkeɪʃən/",
    "example": "The manager discussed the qualification with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-74",
    "term": "recruitment",
    "meaning": "tuyển dụng",
    "partOfSpeech": "n",
    "ipa": "/rɪˈkrutmənt/",
    "example": "The manager discussed the recruitment with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-75",
    "term": "relocation",
    "meaning": "việc chuyển địa điểm",
    "partOfSpeech": "n",
    "ipa": "/ˌriˈloʊˈkeɪʃən/",
    "example": "The manager discussed the relocation with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-76",
    "term": "retention",
    "meaning": "giữ chân nhân sự",
    "partOfSpeech": "n",
    "ipa": "/riˈtɛnʃən/",
    "example": "The manager discussed the retention with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-77",
    "term": "severance",
    "meaning": "trợ cấp thôi việc",
    "partOfSpeech": "n",
    "ipa": "/ˈsɛˌvərəns/",
    "example": "The manager discussed the severance with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-78",
    "term": "shift",
    "meaning": "ca làm việc",
    "partOfSpeech": "n",
    "ipa": "/ʃɪft/",
    "example": "The manager discussed the shift with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-79",
    "term": "staffing",
    "meaning": "việc bố trí nhân sự",
    "partOfSpeech": "n",
    "ipa": "/ˈstæfɪŋ/",
    "example": "The manager discussed the staffing with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-80",
    "term": "succession",
    "meaning": "kế nhiệm",
    "partOfSpeech": "n",
    "ipa": "/səkˈsɛʃən/",
    "example": "The manager discussed the succession with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-81",
    "term": "telecommute",
    "meaning": "làm việc từ xa",
    "partOfSpeech": "v",
    "ipa": "/ˈtɛləkəmˌjut/",
    "example": "The team will telecommute the request with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-82",
    "term": "vacancy",
    "meaning": "vị trí còn trống",
    "partOfSpeech": "n",
    "ipa": "/ˈveɪkənsi/",
    "example": "The manager discussed the vacancy with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-83",
    "term": "workforce",
    "meaning": "lực lượng lao động",
    "partOfSpeech": "n",
    "ipa": "/ˈwərkˌfɔrs/",
    "example": "The manager discussed the workforce with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-84",
    "term": "affiliate",
    "meaning": "đơn vị liên kết",
    "partOfSpeech": "n",
    "ipa": "/əˈfɪliˌeɪt/",
    "example": "The manager discussed the affiliate for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-85",
    "term": "awareness",
    "meaning": "sự nhận biết",
    "partOfSpeech": "n",
    "ipa": "/əˈwɛrnəs/",
    "example": "The manager discussed the awareness for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-86",
    "term": "brochure",
    "meaning": "tờ giới thiệu",
    "partOfSpeech": "n",
    "ipa": "/broʊˈʃʊr/",
    "example": "The manager discussed the brochure for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-87",
    "term": "catalog",
    "meaning": "ca-ta-lô",
    "partOfSpeech": "n",
    "ipa": "/ˈkætəlɔg/",
    "example": "The manager discussed the catalog for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-88",
    "term": "channel",
    "meaning": "kênh phân phối",
    "partOfSpeech": "n",
    "ipa": "/ˈʧænəl/",
    "example": "The manager discussed the channel for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-89",
    "term": "consumer behavior",
    "meaning": "hành vi người tiêu dùng",
    "partOfSpeech": "n",
    "ipa": "/kənˈsumər bɪˈheɪvjər/",
    "example": "The manager discussed the consumer behavior for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-90",
    "term": "coupon",
    "meaning": "phiếu giảm giá",
    "partOfSpeech": "n",
    "ipa": "/ˈkuˌpɔn/",
    "example": "The manager discussed the coupon for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-91",
    "term": "demographic",
    "meaning": "nhân khẩu học",
    "partOfSpeech": "n",
    "ipa": "/ˌdɛməˈgræfɪk/",
    "example": "The manager discussed the demographic for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-92",
    "term": "endorsement",
    "meaning": "sự chứng thực",
    "partOfSpeech": "n",
    "ipa": "/ɛnˈdɔrsmənt/",
    "example": "The manager discussed the endorsement for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-93",
    "term": "exposure",
    "meaning": "mức độ tiếp cận",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈspoʊʒər/",
    "example": "The manager discussed the exposure for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-94",
    "term": "feedback",
    "meaning": "phản hồi",
    "partOfSpeech": "n",
    "ipa": "/ˈfidˌbæk/",
    "example": "The manager discussed the feedback for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-95",
    "term": "market research",
    "meaning": "nghiên cứu thị trường",
    "partOfSpeech": "n",
    "ipa": "/ˈmɑrkɪt ˈrisərʧ/",
    "example": "The manager discussed the market research for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-96",
    "term": "merchandise",
    "meaning": "hàng hóa",
    "partOfSpeech": "n",
    "ipa": "/ˈmərʧənˌdaɪz/",
    "example": "The manager discussed the merchandise for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-97",
    "term": "niche",
    "meaning": "thị trường ngách",
    "partOfSpeech": "n",
    "ipa": "/nɪʧ/",
    "example": "The manager discussed the niche for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-98",
    "term": "outreach",
    "meaning": "hoạt động tiếp cận",
    "partOfSpeech": "n",
    "ipa": "/ˈaʊˌtriʧ/",
    "example": "The manager discussed the outreach for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-99",
    "term": "placement",
    "meaning": "việc đặt quảng cáo",
    "partOfSpeech": "n",
    "ipa": "/ˈpleɪsmənt/",
    "example": "The manager discussed the placement for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-100",
    "term": "positioning",
    "meaning": "định vị thương hiệu",
    "partOfSpeech": "n",
    "ipa": "/pəˈzɪʃənɪŋ/",
    "example": "The manager discussed the positioning for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-101",
    "term": "promotion code",
    "meaning": "mã khuyến mãi",
    "partOfSpeech": "n",
    "ipa": "/pərˈmoʊʃən koʊd/",
    "example": "The manager discussed the promotion code for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-102",
    "term": "publicity",
    "meaning": "sự quảng bá",
    "partOfSpeech": "n",
    "ipa": "/pəˈblɪsɪti/",
    "example": "The manager discussed the publicity for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-103",
    "term": "retailer",
    "meaning": "nhà bán lẻ",
    "partOfSpeech": "n",
    "ipa": "/ˈriˌteɪlər/",
    "example": "The manager discussed the retailer for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-104",
    "term": "sales pitch",
    "meaning": "bài chào bán",
    "partOfSpeech": "n",
    "ipa": "/seɪlz pɪʧ/",
    "example": "The manager discussed the sales pitch for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-105",
    "term": "segmentation",
    "meaning": "phân khúc",
    "partOfSpeech": "n",
    "ipa": "/ˌsɛgmənˈteɪʃən/",
    "example": "The manager discussed the segmentation for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-106",
    "term": "sponsorship",
    "meaning": "tài trợ",
    "partOfSpeech": "n",
    "ipa": "/ˈspɑnsərˌʃɪp/",
    "example": "The manager discussed the sponsorship for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-107",
    "term": "survey response",
    "meaning": "phản hồi khảo sát",
    "partOfSpeech": "n",
    "ipa": "/ˈsərˌveɪ rɪˈspɑns/",
    "example": "The manager discussed the survey response for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-108",
    "term": "target market",
    "meaning": "thị trường mục tiêu",
    "partOfSpeech": "n",
    "ipa": "/ˈtərgət ˈmɑrkɪt/",
    "example": "The manager discussed the target market for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-109",
    "term": "trademark",
    "meaning": "nhãn hiệu đã đăng ký",
    "partOfSpeech": "n",
    "ipa": "/ˈtreɪdˌmɑrk/",
    "example": "The manager discussed the trademark for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-110",
    "term": "upsell",
    "meaning": "bán thêm",
    "partOfSpeech": "v",
    "ipa": "Nghe mẫu",
    "example": "The team will upsell the request for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-111",
    "term": "viral",
    "meaning": "lan truyền nhanh",
    "partOfSpeech": "adj",
    "ipa": "/ˈvaɪrəl/",
    "example": "The company selected an viral option for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-112",
    "term": "wholesale price",
    "meaning": "giá bán buôn",
    "partOfSpeech": "n",
    "ipa": "/ˈhoʊlˌseɪl praɪs/",
    "example": "The manager discussed the wholesale price for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-113",
    "term": "word-of-mouth",
    "meaning": "truyền miệng",
    "partOfSpeech": "n",
    "ipa": "Nghe mẫu",
    "example": "The manager discussed the word-of-mouth for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-114",
    "term": "arrival",
    "meaning": "sự đến nơi",
    "partOfSpeech": "n",
    "ipa": "/ərˈaɪvəl/",
    "example": "The manager discussed the arrival before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-115",
    "term": "boarding pass",
    "meaning": "thẻ lên máy bay",
    "partOfSpeech": "n",
    "ipa": "/ˈbɔrdɪŋ pæs/",
    "example": "The manager discussed the boarding pass before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-116",
    "term": "carrier",
    "meaning": "hãng vận chuyển",
    "partOfSpeech": "n",
    "ipa": "/ˈkɛriər/",
    "example": "The manager discussed the carrier before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-117",
    "term": "check-in",
    "meaning": "thủ tục nhận phòng/lên chuyến",
    "partOfSpeech": "n",
    "ipa": "Nghe mẫu",
    "example": "The manager discussed the check-in before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-118",
    "term": "customs declaration",
    "meaning": "khai báo hải quan",
    "partOfSpeech": "n",
    "ipa": "/ˈkəstəmz ˌdɛklərˈeɪʃən/",
    "example": "The manager discussed the customs declaration before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-119",
    "term": "departure gate",
    "meaning": "cổng khởi hành",
    "partOfSpeech": "n",
    "ipa": "/dɪˈpɑrʧər geɪt/",
    "example": "The manager discussed the departure gate before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-120",
    "term": "destination",
    "meaning": "điểm đến",
    "partOfSpeech": "n",
    "ipa": "/ˌdɛstɪˈneɪʃən/",
    "example": "The manager discussed the destination before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-121",
    "term": "direct flight",
    "meaning": "chuyến bay thẳng",
    "partOfSpeech": "n",
    "ipa": "/dɪˈrɛkt flaɪt/",
    "example": "The manager discussed the direct flight before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-122",
    "term": "embark",
    "meaning": "lên tàu; bắt đầu",
    "partOfSpeech": "v",
    "ipa": "/ɪmˈbɑrk/",
    "example": "The team will embark the request before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-123",
    "term": "excursion",
    "meaning": "chuyến tham quan ngắn",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈskərʒən/",
    "example": "The manager discussed the excursion before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-124",
    "term": "fare",
    "meaning": "giá vé",
    "partOfSpeech": "n",
    "ipa": "/fɛr/",
    "example": "The manager discussed the fare before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-125",
    "term": "freight",
    "meaning": "hàng hóa vận chuyển",
    "partOfSpeech": "n",
    "ipa": "/freɪt/",
    "example": "The manager discussed the freight before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-126",
    "term": "itinerary",
    "meaning": "lịch trình",
    "partOfSpeech": "n",
    "ipa": "/aɪˈtɪnərˌɛri/",
    "example": "The manager discussed the itinerary before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-127",
    "term": "layover",
    "meaning": "điểm dừng nối chuyến",
    "partOfSpeech": "n",
    "ipa": "/ˈleɪˌoʊvər/",
    "example": "The manager discussed the layover before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-128",
    "term": "lodge",
    "meaning": "đăng ký lưu trú",
    "partOfSpeech": "v",
    "ipa": "/lɑʤ/",
    "example": "The team will lodge the request before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-129",
    "term": "lost property",
    "meaning": "đồ thất lạc",
    "partOfSpeech": "n",
    "ipa": "/lɔst ˈprɑpərti/",
    "example": "The manager discussed the lost property before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-130",
    "term": "passenger",
    "meaning": "hành khách",
    "partOfSpeech": "n",
    "ipa": "/ˈpæsənʤər/",
    "example": "The manager discussed the passenger before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-131",
    "term": "platform",
    "meaning": "sân ga",
    "partOfSpeech": "n",
    "ipa": "/ˈplætˌfɔrm/",
    "example": "The manager discussed the platform before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-132",
    "term": "porter",
    "meaning": "nhân viên khuân hành lý",
    "partOfSpeech": "n",
    "ipa": "/ˈpɔrtər/",
    "example": "The manager discussed the porter before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-133",
    "term": "railway",
    "meaning": "đường sắt",
    "partOfSpeech": "n",
    "ipa": "/ˈreɪlˌweɪ/",
    "example": "The manager discussed the railway before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-134",
    "term": "reservation number",
    "meaning": "mã đặt chỗ",
    "partOfSpeech": "n",
    "ipa": "/ˌrɛzərˈveɪʃən ˈnəmbər/",
    "example": "The manager discussed the reservation number before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-135",
    "term": "route",
    "meaning": "tuyến đường",
    "partOfSpeech": "n",
    "ipa": "/rut/",
    "example": "The manager discussed the route before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-136",
    "term": "shuttle",
    "meaning": "xe đưa đón",
    "partOfSpeech": "n",
    "ipa": "/ˈʃətəl/",
    "example": "The manager discussed the shuttle before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-137",
    "term": "terminal",
    "meaning": "nhà ga; nhà ga sân bay",
    "partOfSpeech": "n",
    "ipa": "/ˈtərmənəl/",
    "example": "The manager discussed the terminal before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-138",
    "term": "transit",
    "meaning": "quá cảnh",
    "partOfSpeech": "n",
    "ipa": "/ˈtrænzɪt/",
    "example": "The manager discussed the transit before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-139",
    "term": "travel insurance",
    "meaning": "bảo hiểm du lịch",
    "partOfSpeech": "n",
    "ipa": "/ˈtrævəl ˌɪnˈʃʊrəns/",
    "example": "The manager discussed the travel insurance before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-140",
    "term": "vacant",
    "meaning": "còn trống",
    "partOfSpeech": "adj",
    "ipa": "/ˈveɪkənt/",
    "example": "The company selected an vacant option before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-141",
    "term": "vehicle",
    "meaning": "phương tiện",
    "partOfSpeech": "n",
    "ipa": "/ˈviɪkəl/",
    "example": "The manager discussed the vehicle before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-142",
    "term": "visa application",
    "meaning": "đơn xin thị thực",
    "partOfSpeech": "n",
    "ipa": "/ˈvizə ˌæpləˈkeɪʃən/",
    "example": "The manager discussed the visa application before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-143",
    "term": "warehouse receipt",
    "meaning": "biên nhận kho",
    "partOfSpeech": "n",
    "ipa": "/ˈwɛˌrhaʊs rɪˈsit/",
    "example": "The manager discussed the warehouse receipt before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-144",
    "term": "assembly line",
    "meaning": "dây chuyền lắp ráp",
    "partOfSpeech": "n",
    "ipa": "/əˈsɛmbli laɪn/",
    "example": "The manager discussed the assembly line before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-145",
    "term": "batch",
    "meaning": "lô hàng; mẻ sản xuất",
    "partOfSpeech": "n",
    "ipa": "/bæʧ/",
    "example": "The manager discussed the batch before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-146",
    "term": "capacity",
    "meaning": "công suất",
    "partOfSpeech": "n",
    "ipa": "/kəˈpæsɪti/",
    "example": "The manager discussed the capacity before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-147",
    "term": "component",
    "meaning": "linh kiện",
    "partOfSpeech": "n",
    "ipa": "/kəmˈpoʊnənt/",
    "example": "The manager discussed the component before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-148",
    "term": "consignment",
    "meaning": "lô hàng gửi",
    "partOfSpeech": "n",
    "ipa": "/kənˈsaɪnmənt/",
    "example": "The manager discussed the consignment before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-149",
    "term": "defect",
    "meaning": "khiếm khuyết",
    "partOfSpeech": "n",
    "ipa": "/ˈdifɛkt/",
    "example": "The manager discussed the defect before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-150",
    "term": "distribution center",
    "meaning": "trung tâm phân phối",
    "partOfSpeech": "n",
    "ipa": "/ˌdɪstrəˈbjuʃən ˈsɛnər/",
    "example": "The manager discussed the distribution center before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-151",
    "term": "durable",
    "meaning": "bền",
    "partOfSpeech": "adj",
    "ipa": "/ˈdʊrəbəl/",
    "example": "The company selected an durable option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-152",
    "term": "equipment",
    "meaning": "thiết bị",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈwɪpmənt/",
    "example": "The manager discussed the equipment before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-153",
    "term": "facility",
    "meaning": "cơ sở vật chất",
    "partOfSpeech": "n",
    "ipa": "/fəˈsɪlɪti/",
    "example": "The manager discussed the facility before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-154",
    "term": "inspection",
    "meaning": "kiểm tra",
    "partOfSpeech": "n",
    "ipa": "/ˌɪnˈspɛkʃən/",
    "example": "The manager discussed the inspection before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-155",
    "term": "inventory control",
    "meaning": "kiểm soát tồn kho",
    "partOfSpeech": "n",
    "ipa": "/ˌɪnvənˈtɔri kənˈtroʊl/",
    "example": "The manager discussed the inventory control before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-156",
    "term": "maintenance schedule",
    "meaning": "lịch bảo trì",
    "partOfSpeech": "n",
    "ipa": "/ˈmeɪntənəns ˈskɛʤʊl/",
    "example": "The manager discussed the maintenance schedule before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-157",
    "term": "manufacturer",
    "meaning": "nhà sản xuất",
    "partOfSpeech": "n",
    "ipa": "/ˌmænjəˈfækʧərər/",
    "example": "The manager discussed the manufacturer before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-158",
    "term": "output",
    "meaning": "sản lượng",
    "partOfSpeech": "n",
    "ipa": "/ˈaʊtˌpʊt/",
    "example": "The manager discussed the output before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-159",
    "term": "packaging",
    "meaning": "bao bì",
    "partOfSpeech": "n",
    "ipa": "/ˈpækɪʤɪŋ/",
    "example": "The manager discussed the packaging before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-160",
    "term": "plant",
    "meaning": "nhà máy",
    "partOfSpeech": "n",
    "ipa": "/plænt/",
    "example": "The manager discussed the plant before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-161",
    "term": "prototype",
    "meaning": "mẫu thử",
    "partOfSpeech": "n",
    "ipa": "/ˈproʊtoʊˌtaɪp/",
    "example": "The manager discussed the prototype before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-162",
    "term": "quality assurance",
    "meaning": "đảm bảo chất lượng",
    "partOfSpeech": "n",
    "ipa": "/kˈwɑləti əˈʃʊrəns/",
    "example": "The manager discussed the quality assurance before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-163",
    "term": "recall",
    "meaning": "việc thu hồi sản phẩm",
    "partOfSpeech": "n",
    "ipa": "/ˈriˌkɔl/",
    "example": "The manager discussed the recall before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-164",
    "term": "raw material",
    "meaning": "nguyên liệu thô",
    "partOfSpeech": "n",
    "ipa": "/rɑ məˈtɪriəl/",
    "example": "The manager discussed the raw material before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-165",
    "term": "specification",
    "meaning": "quy cách kỹ thuật",
    "partOfSpeech": "n",
    "ipa": "/ˌspɛsɪfɪˈkeɪʃən/",
    "example": "The manager discussed the specification before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-166",
    "term": "stockroom",
    "meaning": "phòng/kho chứa hàng",
    "partOfSpeech": "n",
    "ipa": "/ˈstɑˌkrum/",
    "example": "The manager discussed the stockroom before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-167",
    "term": "supplier",
    "meaning": "nhà cung cấp",
    "partOfSpeech": "n",
    "ipa": "/səˈplaɪər/",
    "example": "The manager discussed the supplier before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-168",
    "term": "turnaround",
    "meaning": "thời gian hoàn thành",
    "partOfSpeech": "n",
    "ipa": "/ˈtərnərˌaʊnd/",
    "example": "The manager discussed the turnaround before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-169",
    "term": "unit cost",
    "meaning": "chi phí đơn vị",
    "partOfSpeech": "n",
    "ipa": "/ˈjunɪt kɔst/",
    "example": "The manager discussed the unit cost before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-170",
    "term": "vendor",
    "meaning": "nhà bán hàng",
    "partOfSpeech": "n",
    "ipa": "/ˈvɛndər/",
    "example": "The manager discussed the vendor before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-171",
    "term": "workflow",
    "meaning": "quy trình công việc",
    "partOfSpeech": "n",
    "ipa": "/ˈwərkˌfloʊ/",
    "example": "The manager discussed the workflow before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-172",
    "term": "algorithm",
    "meaning": "thuật toán",
    "partOfSpeech": "n",
    "ipa": "/ˈælgərˌɪðəm/",
    "example": "The manager discussed the algorithm during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-173",
    "term": "bandwidth",
    "meaning": "băng thông",
    "partOfSpeech": "n",
    "ipa": "/ˈbændwɪdθ/",
    "example": "The manager discussed the bandwidth during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-174",
    "term": "backup",
    "meaning": "bản sao lưu",
    "partOfSpeech": "n",
    "ipa": "/ˈbæˌkəp/",
    "example": "The manager discussed the backup during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-175",
    "term": "cloud computing",
    "meaning": "điện toán đám mây",
    "partOfSpeech": "n",
    "ipa": "/klaʊd kəmˈpjutɪŋ/",
    "example": "The manager discussed the cloud computing during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-176",
    "term": "cybersecurity",
    "meaning": "an ninh mạng",
    "partOfSpeech": "n",
    "ipa": "Nghe mẫu",
    "example": "The manager discussed the cybersecurity during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-177",
    "term": "data breach",
    "meaning": "rò rỉ dữ liệu",
    "partOfSpeech": "n",
    "ipa": "/ˈdætə briʧ/",
    "example": "The manager discussed the data breach during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-178",
    "term": "deployment",
    "meaning": "việc triển khai",
    "partOfSpeech": "n",
    "ipa": "/dɪˈplɔɪmənt/",
    "example": "The manager discussed the deployment during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-179",
    "term": "encryption",
    "meaning": "mã hóa",
    "partOfSpeech": "n",
    "ipa": "/ɛnˈkrɪpʃən/",
    "example": "The manager discussed the encryption during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-180",
    "term": "firewall",
    "meaning": "tường lửa",
    "partOfSpeech": "n",
    "ipa": "/ˈfaɪrwɑl/",
    "example": "The manager discussed the firewall during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-181",
    "term": "hardware",
    "meaning": "phần cứng",
    "partOfSpeech": "n",
    "ipa": "/ˈhɑrdˌwɛr/",
    "example": "The manager discussed the hardware during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-182",
    "term": "interface",
    "meaning": "giao diện",
    "partOfSpeech": "n",
    "ipa": "/ˈɪnərˌfeɪs/",
    "example": "The manager discussed the interface during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-183",
    "term": "malware",
    "meaning": "phần mềm độc hại",
    "partOfSpeech": "n",
    "ipa": "/ˈmælˌwɛr/",
    "example": "The manager discussed the malware during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-184",
    "term": "network outage",
    "meaning": "sự cố mạng",
    "partOfSpeech": "n",
    "ipa": "/ˈnɛtˌwərk ˈaʊtɪʤ/",
    "example": "The manager discussed the network outage during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-185",
    "term": "operating system",
    "meaning": "hệ điều hành",
    "partOfSpeech": "n",
    "ipa": "/ˈɔpərˌeɪtɪŋ ˈsɪstəm/",
    "example": "The manager discussed the operating system during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-186",
    "term": "password reset",
    "meaning": "đặt lại mật khẩu",
    "partOfSpeech": "n",
    "ipa": "/ˈpæsˌwərd ˈrisɛt/",
    "example": "The manager discussed the password reset during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-187",
    "term": "phishing",
    "meaning": "lừa đảo giả mạo",
    "partOfSpeech": "n",
    "ipa": "/ˈfɪʃɪŋ/",
    "example": "The manager discussed the phishing during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-188",
    "term": "platform update",
    "meaning": "cập nhật nền tảng",
    "partOfSpeech": "n",
    "ipa": "/ˈplætˌfɔrm ˈəpˌdeɪt/",
    "example": "The manager discussed the platform update during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-189",
    "term": "router",
    "meaning": "bộ định tuyến",
    "partOfSpeech": "n",
    "ipa": "/ˈrutər/",
    "example": "The manager discussed the router during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-190",
    "term": "server maintenance",
    "meaning": "bảo trì máy chủ",
    "partOfSpeech": "n",
    "ipa": "/ˈsərvər ˈmeɪntənəns/",
    "example": "The manager discussed the server maintenance during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-191",
    "term": "software license",
    "meaning": "giấy phép phần mềm",
    "partOfSpeech": "n",
    "ipa": "/ˈsɔfˌwɛr ˈlaɪsəns/",
    "example": "The manager discussed the software license during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-192",
    "term": "spreadsheet",
    "meaning": "bảng tính",
    "partOfSpeech": "n",
    "ipa": "/ˈsprɛdˌʃit/",
    "example": "The manager discussed the spreadsheet during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-193",
    "term": "troubleshoot",
    "meaning": "khắc phục sự cố",
    "partOfSpeech": "v",
    "ipa": "Nghe mẫu",
    "example": "The team will troubleshoot the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-194",
    "term": "upload",
    "meaning": "tải lên",
    "partOfSpeech": "v",
    "ipa": "/ˈəˌploʊd/",
    "example": "The team will upload the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-195",
    "term": "user interface",
    "meaning": "giao diện người dùng",
    "partOfSpeech": "n",
    "ipa": "/ˈjuzər ˈɪnərˌfeɪs/",
    "example": "The manager discussed the user interface during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-196",
    "term": "virtual meeting",
    "meaning": "cuộc họp trực tuyến",
    "partOfSpeech": "n",
    "ipa": "/ˈvərʧuəl ˈmitɪŋ/",
    "example": "The manager discussed the virtual meeting during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-197",
    "term": "wireless",
    "meaning": "không dây",
    "partOfSpeech": "adj",
    "ipa": "/ˈwaɪrlɪs/",
    "example": "The company selected an wireless option during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-198",
    "term": "agenda item",
    "meaning": "mục chương trình họp",
    "partOfSpeech": "n",
    "ipa": "/əˈʤɛndə ˈaɪtəm/",
    "example": "The manager discussed the agenda item before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-199",
    "term": "briefing note",
    "meaning": "bản ghi chú tóm tắt",
    "partOfSpeech": "n",
    "ipa": "/ˈbrifɪŋ noʊt/",
    "example": "The manager discussed the briefing note before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-200",
    "term": "conference call",
    "meaning": "cuộc gọi hội nghị",
    "partOfSpeech": "n",
    "ipa": "/ˈkɑnfərəns kɔl/",
    "example": "The manager discussed the conference call before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-201",
    "term": "correspondence",
    "meaning": "thư từ trao đổi",
    "partOfSpeech": "n",
    "ipa": "/ˌkɔrəˈspɑndəns/",
    "example": "The manager discussed the correspondence before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-202",
    "term": "deadline extension",
    "meaning": "gia hạn thời hạn",
    "partOfSpeech": "n",
    "ipa": "/ˈdɛˌdlaɪn ɪkˈstɛnʃən/",
    "example": "The manager discussed the deadline extension before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-203",
    "term": "documentary evidence",
    "meaning": "bằng chứng tài liệu",
    "partOfSpeech": "n",
    "ipa": "/ˌdɑkjəˈmɛnəri ˈɛvədəns/",
    "example": "The manager discussed the documentary evidence before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-204",
    "term": "filing system",
    "meaning": "hệ thống lưu trữ hồ sơ",
    "partOfSpeech": "n",
    "ipa": "/ˈfaɪlɪŋ ˈsɪstəm/",
    "example": "The manager discussed the filing system before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-205",
    "term": "follow-up",
    "meaning": "việc theo dõi tiếp",
    "partOfSpeech": "n",
    "ipa": "/ˈfɑloʊˌəp/",
    "example": "The manager discussed the follow-up before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-206",
    "term": "front desk",
    "meaning": "quầy lễ tân",
    "partOfSpeech": "n",
    "ipa": "/frənt dɛsk/",
    "example": "The manager discussed the front desk before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-207",
    "term": "inquiry",
    "meaning": "yêu cầu hỏi thông tin",
    "partOfSpeech": "n",
    "ipa": "/ˌɪnkˈwaɪˌri/",
    "example": "The manager discussed the inquiry before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-208",
    "term": "minutes",
    "meaning": "biên bản cuộc họp",
    "partOfSpeech": "n",
    "ipa": "/ˈmɪnəts/",
    "example": "The manager discussed the minutes before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-209",
    "term": "notice board",
    "meaning": "bảng thông báo",
    "partOfSpeech": "n",
    "ipa": "/ˈnoʊtɪs bɔrd/",
    "example": "The manager discussed the notice board before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-210",
    "term": "office supplies",
    "meaning": "văn phòng phẩm",
    "partOfSpeech": "n",
    "ipa": "/ˈɔfəs səˈplaɪz/",
    "example": "The manager discussed the office supplies before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-211",
    "term": "project brief",
    "meaning": "bản tóm tắt dự án",
    "partOfSpeech": "n",
    "ipa": "/ˈprɑʤɛkt brif/",
    "example": "The manager discussed the project brief before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-212",
    "term": "proposal",
    "meaning": "đề xuất",
    "partOfSpeech": "n",
    "ipa": "/prəˈpoʊzəl/",
    "example": "The manager discussed the proposal before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-213",
    "term": "record keeping",
    "meaning": "việc lưu trữ hồ sơ",
    "partOfSpeech": "n",
    "ipa": "/ˈrɛkərd ˈkipɪŋ/",
    "example": "The manager discussed the record keeping before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-214",
    "term": "reminder",
    "meaning": "lời nhắc",
    "partOfSpeech": "n",
    "ipa": "/riˈmaɪndər/",
    "example": "The manager discussed the reminder before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-215",
    "term": "reporting line",
    "meaning": "cấp báo cáo",
    "partOfSpeech": "n",
    "ipa": "/rɪˈpɔrtɪŋ laɪn/",
    "example": "The manager discussed the reporting line before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-216",
    "term": "receptionist",
    "meaning": "nhân viên lễ tân",
    "partOfSpeech": "n",
    "ipa": "/rɪˈsɛpʃənɪst/",
    "example": "The manager discussed the receptionist before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-217",
    "term": "room booking",
    "meaning": "đặt phòng họp",
    "partOfSpeech": "n",
    "ipa": "/rum ˈbʊkɪŋ/",
    "example": "The manager discussed the room booking before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-218",
    "term": "status update",
    "meaning": "cập nhật trạng thái",
    "partOfSpeech": "n",
    "ipa": "/ˈstætəs ˈəpˌdeɪt/",
    "example": "The manager discussed the status update before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-219",
    "term": "task list",
    "meaning": "danh sách công việc",
    "partOfSpeech": "n",
    "ipa": "/tæsk lɪst/",
    "example": "The manager discussed the task list before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-220",
    "term": "team meeting",
    "meaning": "cuộc họp nhóm",
    "partOfSpeech": "n",
    "ipa": "/tim ˈmitɪŋ/",
    "example": "The manager discussed the team meeting before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-221",
    "term": "timeline",
    "meaning": "dòng thời gian",
    "partOfSpeech": "n",
    "ipa": "/ˈtaɪmlaɪn/",
    "example": "The manager discussed the timeline before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-222",
    "term": "videoconference",
    "meaning": "hội nghị truyền hình",
    "partOfSpeech": "n",
    "ipa": "/ˈvidioʊˌkɑnfrəns/",
    "example": "The manager discussed the videoconference before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-223",
    "term": "workstation",
    "meaning": "trạm làm việc",
    "partOfSpeech": "n",
    "ipa": "/ˈwərkˌsteɪʃən/",
    "example": "The manager discussed the workstation before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-224",
    "term": "carry out",
    "meaning": "thực hiện",
    "partOfSpeech": "v",
    "ipa": "/ˈkɛri aʊt/",
    "example": "The team will carry out the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-225",
    "term": "call off",
    "meaning": "hủy; hủy bỏ",
    "partOfSpeech": "v",
    "ipa": "/kɔl ɔf/",
    "example": "The team will call off the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-226",
    "term": "come across",
    "meaning": "bắt gặp; tình cờ gặp",
    "partOfSpeech": "v",
    "ipa": "/kəm əˈkrɔs/",
    "example": "The team will come across the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-227",
    "term": "draw up",
    "meaning": "soạn thảo",
    "partOfSpeech": "v",
    "ipa": "/drɔ əp/",
    "example": "The team will draw up the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-228",
    "term": "figure out",
    "meaning": "tìm ra; hiểu ra",
    "partOfSpeech": "v",
    "ipa": "/ˈfɪgjər aʊt/",
    "example": "The team will figure out the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-229",
    "term": "fill in",
    "meaning": "điền vào",
    "partOfSpeech": "v",
    "ipa": "/fɪl ɪn/",
    "example": "The team will fill in the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-230",
    "term": "follow up",
    "meaning": "theo dõi tiếp",
    "partOfSpeech": "v",
    "ipa": "/ˈfɑloʊ əp/",
    "example": "The team will follow up the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-231",
    "term": "hand in",
    "meaning": "nộp",
    "partOfSpeech": "v",
    "ipa": "/hænd ɪn/",
    "example": "The team will hand in the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-232",
    "term": "look into",
    "meaning": "điều tra; xem xét",
    "partOfSpeech": "v",
    "ipa": "/lʊk ˈɪntu/",
    "example": "The team will look into the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-233",
    "term": "make up",
    "meaning": "bù đắp; cấu thành",
    "partOfSpeech": "v",
    "ipa": "/meɪk əp/",
    "example": "The team will make up the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-234",
    "term": "put off",
    "meaning": "hoãn lại",
    "partOfSpeech": "v",
    "ipa": "/pʊt ɔf/",
    "example": "The team will put off the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-235",
    "term": "run out of",
    "meaning": "hết",
    "partOfSpeech": "v",
    "ipa": "/rən aʊt əv/",
    "example": "The team will run out of the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-236",
    "term": "set up",
    "meaning": "thiết lập",
    "partOfSpeech": "v",
    "ipa": "/sɛt əp/",
    "example": "The team will set up the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-237",
    "term": "take over",
    "meaning": "tiếp quản",
    "partOfSpeech": "v",
    "ipa": "/teɪk ˈoʊvər/",
    "example": "The team will take over the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-238",
    "term": "turn down",
    "meaning": "từ chối",
    "partOfSpeech": "v",
    "ipa": "/tərn daʊn/",
    "example": "The team will turn down the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-239",
    "term": "be responsible for",
    "meaning": "chịu trách nhiệm về",
    "partOfSpeech": "adj",
    "ipa": "/bi riˈspɑnsəbəl fər/",
    "example": "The company selected an be responsible for option in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-240",
    "term": "be scheduled to",
    "meaning": "được lên lịch để",
    "partOfSpeech": "adj",
    "ipa": "/bi ˈskɛʤʊld tɪ/",
    "example": "The company selected an be scheduled to option in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-241",
    "term": "be subject to",
    "meaning": "phụ thuộc vào; chịu sự",
    "partOfSpeech": "adj",
    "ipa": "/bi ˈsəbʤɪkt tɪ/",
    "example": "The company selected an be subject to option in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-242",
    "term": "in advance",
    "meaning": "trước; trước thời hạn",
    "partOfSpeech": "adv",
    "ipa": "/ɪn ədˈvæns/",
    "example": "Please complete the task in advance.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-243",
    "term": "in charge of",
    "meaning": "phụ trách",
    "partOfSpeech": "adj",
    "ipa": "/ɪn ʧɑrʤ əv/",
    "example": "The company selected an in charge of option in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-244",
    "term": "in accordance with",
    "meaning": "phù hợp với",
    "partOfSpeech": "prep",
    "ipa": "/ɪn əˈkɔrdəns wɪθ/",
    "example": "The manager discussed the in accordance with in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-245",
    "term": "on behalf of",
    "meaning": "thay mặt cho",
    "partOfSpeech": "prep",
    "ipa": "/ɔn bɪˈhæf əv/",
    "example": "The manager discussed the on behalf of in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-246",
    "term": "on time",
    "meaning": "đúng giờ",
    "partOfSpeech": "adv",
    "ipa": "/ɔn taɪm/",
    "example": "Please complete the task on time.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-247",
    "term": "prior to",
    "meaning": "trước khi",
    "partOfSpeech": "prep",
    "ipa": "/praɪər tɪ/",
    "example": "The manager discussed the prior to in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-248",
    "term": "regardless of",
    "meaning": "bất kể",
    "partOfSpeech": "prep",
    "ipa": "/rəˈgɑrdləs əv/",
    "example": "The manager discussed the regardless of in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-249",
    "term": "sign a contract",
    "meaning": "ký hợp đồng",
    "partOfSpeech": "v",
    "ipa": "/saɪn ə ˈkɑnˌtrækt/",
    "example": "The team will sign a contract the request in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-250",
    "term": "meet a deadline",
    "meaning": "đáp ứng thời hạn",
    "partOfSpeech": "v",
    "ipa": "/mit ə ˈdɛˌdlaɪn/",
    "example": "The team will meet a deadline the request in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  }
];

export const vocabulary: VocabularyItem[] = [
  {
    "id": "core-1",
    "term": "ability",
    "meaning": "năng lực, khả năng",
    "partOfSpeech": "n",
    "ipa": "/əˈbɪl.ə.t̬i/",
    "example": "The manager discussed the ability at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-2",
    "term": "abroad",
    "meaning": "ở nước ngoài",
    "partOfSpeech": "adv",
    "ipa": "/əˈbrɑːd/",
    "example": "The team will abroad the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-3",
    "term": "accept",
    "meaning": "chấp nhận, chấp thuận",
    "partOfSpeech": "v",
    "ipa": "/əkˈsept/",
    "example": "The team will accept the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-4",
    "term": "access",
    "meaning": "quyền truy cập, sự tiếp cận; truy cập",
    "partOfSpeech": "n, v",
    "ipa": "/ˈæk.ses/",
    "example": "The team will access the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-5",
    "term": "accessible",
    "meaning": "khả năng tiếp cận được",
    "partOfSpeech": "adj",
    "ipa": "/əkˈses.ə.bəl/",
    "example": "The company selected an accessible option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-6",
    "term": "accident",
    "meaning": "tai nạn, sự tình cờ",
    "partOfSpeech": "n",
    "ipa": "/ˈæk.sə.dənt/",
    "example": "The manager discussed the accident before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-7",
    "term": "accommodate",
    "meaning": "dàn xếp, hỗ trợ",
    "partOfSpeech": "v",
    "ipa": "/əˈkɑː.mə.deɪt/",
    "example": "The team will accommodate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-8",
    "term": "accommodation",
    "meaning": "chỗ ở, nơi ở; sự điều tiết, hòa giải",
    "partOfSpeech": "n",
    "ipa": "/əˌkɑː.məˈdeɪ.ʃən/",
    "example": "The manager discussed the accommodation before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-9",
    "term": "accomplish",
    "meaning": "hoàn thành, thực hiện",
    "partOfSpeech": "v",
    "ipa": "/əˈkɑːm.plɪʃ/",
    "example": "The team will accomplish the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-10",
    "term": "according (to)",
    "meaning": "theo như, dựa vào",
    "partOfSpeech": "prep",
    "ipa": "/əˈkɔːr.dɪŋ ˌtuː/",
    "example": "The report was prepared according (to) the company policy.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-11",
    "term": "accordingly",
    "meaning": "theo đó, vì vậy",
    "partOfSpeech": "adv",
    "ipa": "/əˈkɔːr.dɪŋ.li/",
    "example": "The team will accordingly the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-12",
    "term": "accounting",
    "meaning": "sự tính toán, thanh toán",
    "partOfSpeech": "n",
    "ipa": "/əˈkaʊn.t̬ɪŋ/",
    "example": "The manager discussed the accounting in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-13",
    "term": "accurate",
    "meaning": "đúng đắn, chính xác",
    "partOfSpeech": "adj",
    "ipa": "/ˈæk.jɚ.ət/",
    "example": "The company selected an accurate option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-14",
    "term": "achieve",
    "meaning": "đạt được, giành được",
    "partOfSpeech": "v",
    "ipa": "/əˈtʃiːv/",
    "example": "The team will achieve the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-15",
    "term": "acquire",
    "meaning": "thu nạp được, giành được",
    "partOfSpeech": "v",
    "ipa": "/əˈkwaɪɚ/",
    "example": "The team will acquire the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-16",
    "term": "act",
    "meaning": "hành động; thực hiện",
    "partOfSpeech": "n, v",
    "ipa": "/ækt/",
    "example": "The team will act the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-17",
    "term": "actually",
    "meaning": "thực sự, trên thực tế",
    "partOfSpeech": "adv",
    "ipa": "/ˈæk.tʃu.ə.li/",
    "example": "The team will actually the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-18",
    "term": "adapt",
    "meaning": "thích nghi, thích ứng",
    "partOfSpeech": "v",
    "ipa": "/əˈdæpt/",
    "example": "The team will adapt the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-19",
    "term": "adapter",
    "meaning": "thiết bị chuyển đổi, người điều chỉnh tác phẩm (để phù hợp hơn)",
    "partOfSpeech": "n",
    "ipa": "/əˈdæp.tɚ/",
    "example": "The manager discussed the adapter at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-20",
    "term": "additional",
    "meaning": "thêm vào, phụ thêm",
    "partOfSpeech": "adj",
    "ipa": "/əˈdɪʃ.ən.əl/",
    "example": "The company selected an additional option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-21",
    "term": "adjust",
    "meaning": "điều chỉnh",
    "partOfSpeech": "v",
    "ipa": "/əˈdʒʌst/",
    "example": "The team will adjust the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-22",
    "term": "adjustment",
    "meaning": "sự điều chỉnh, sự thay đổi",
    "partOfSpeech": "n",
    "ipa": "/əˈdʒʌst.mənt/",
    "example": "The manager discussed the adjustment before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-23",
    "term": "administration",
    "meaning": "sự quản lý, quản trị",
    "partOfSpeech": "n",
    "ipa": "/ədˌmɪn.əˈstreɪ.ʃən/",
    "example": "The manager discussed the administration at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-24",
    "term": "admire",
    "meaning": "ngưỡng mộ, thán phục",
    "partOfSpeech": "v",
    "ipa": "/ədˈmaɪr/",
    "example": "The team will admire the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-25",
    "term": "admit",
    "meaning": "thừa nhận; tiếp nhận",
    "partOfSpeech": "v",
    "ipa": "/ədˈmɪt/",
    "example": "The team will admit the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-26",
    "term": "admittance",
    "meaning": "sự thu nạp, đón nhận",
    "partOfSpeech": "n",
    "ipa": "/ədˈmɪt̬.əns/",
    "example": "The manager discussed the admittance before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-27",
    "term": "adopt",
    "meaning": "nhân nuôi làm theo, áp dụng",
    "partOfSpeech": "v",
    "ipa": "/əˈdɑːpt/",
    "example": "The team will adopt the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-28",
    "term": "advance",
    "meaning": "sự tiến lên; tiến lên phía trước",
    "partOfSpeech": "n, v",
    "ipa": "/ədˈvæns/",
    "example": "The team will advance the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-29",
    "term": "advanced",
    "meaning": "tiến bộ, cấp tiến",
    "partOfSpeech": "adj",
    "ipa": "/ədˈvænst/",
    "example": "The company selected an advanced option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-30",
    "term": "advantage",
    "meaning": "lợi thế",
    "partOfSpeech": "n",
    "ipa": "/ədˈvæn.t̬ɪdʒ/",
    "example": "The manager discussed the advantage in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-31",
    "term": "advantageous",
    "meaning": "có lợi, thuận lợi",
    "partOfSpeech": "adj",
    "ipa": "/ˌæd.vænˈteɪ.dʒəs/",
    "example": "The company selected an advantageous option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-32",
    "term": "advertise",
    "meaning": "quảng cáo, thông báo",
    "partOfSpeech": "v",
    "ipa": "/ˈæd.vɚ.taɪz/",
    "example": "The team will advertise the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-33",
    "term": "advertisement",
    "meaning": "bản tin quảng cáo",
    "partOfSpeech": "n",
    "ipa": "/æd.vɝːˈtaɪz.mənt/",
    "example": "The manager discussed the advertisement before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-34",
    "term": "advice",
    "meaning": "lời khuyên, lời chỉ bảo",
    "partOfSpeech": "n",
    "ipa": "/ədˈvaɪs/",
    "example": "The manager discussed the advice at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-35",
    "term": "advise",
    "meaning": "đưa ra lời khuyên",
    "partOfSpeech": "v",
    "ipa": "/ədˈvaɪz/",
    "example": "The team will advise the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-36",
    "term": "affect",
    "meaning": "ảnh hưởng, tác động",
    "partOfSpeech": "v",
    "ipa": "/əˈfekt/",
    "example": "The team will affect the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-37",
    "term": "afford",
    "meaning": "có khả năng, đủ điều kiện; ban phát, cấp phát",
    "partOfSpeech": "v",
    "ipa": "/əˈfɔːrd/",
    "example": "The team will afford the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-38",
    "term": "affordable",
    "meaning": "có khả năng chi trả, vừa túi tiền",
    "partOfSpeech": "adj",
    "ipa": "/əˈfɔːr.də.bəl/",
    "example": "The company selected an affordable option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-39",
    "term": "agency",
    "meaning": "đại lý, bên môi giới trung gian",
    "partOfSpeech": "n",
    "ipa": "/ˈeɪ.dʒən.si/",
    "example": "The manager discussed the agency at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-40",
    "term": "agenda",
    "meaning": "chương trình nghị sự, kế hoạch chương trình",
    "partOfSpeech": "n",
    "ipa": "/əˈdʒen.də/",
    "example": "The manager discussed the agenda before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-41",
    "term": "agree",
    "meaning": "đồng ý, tán thành",
    "partOfSpeech": "v",
    "ipa": "/əˈɡriː/",
    "example": "The team will agree the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-42",
    "term": "agreeable",
    "meaning": "dễ chịu; thích hợp với",
    "partOfSpeech": "adj",
    "ipa": "/əˈɡriː.ə.bəl/",
    "example": "The company selected an agreeable option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-43",
    "term": "agreement",
    "meaning": "hợp đồng, giao kèo",
    "partOfSpeech": "n",
    "ipa": "/əˈɡriː.mənt/",
    "example": "The manager discussed the agreement in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-44",
    "term": "agricultural",
    "meaning": "(thuộc) nông nghiệp",
    "partOfSpeech": "adj",
    "ipa": "/ˌæɡ.rəˈkʌl.tʃɚ.əl/",
    "example": "The company selected an agricultural option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-45",
    "term": "aid",
    "meaning": "sự giúp đỡ; cứu trợ, viện trợ",
    "partOfSpeech": "n, v",
    "ipa": "/eɪd/",
    "example": "The team will aid the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-46",
    "term": "aim",
    "meaning": "mục tiêu; nhắm đến, hướng đến",
    "partOfSpeech": "n, v",
    "ipa": "/eɪm/",
    "example": "The team will aim the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-47",
    "term": "airline",
    "meaning": "công ty hàng không",
    "partOfSpeech": "n",
    "ipa": "/ˈer.laɪn/",
    "example": "The manager discussed the airline before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-48",
    "term": "aisle",
    "meaning": "gian hàng, lối đi giữa các dãy ghế",
    "partOfSpeech": "n",
    "ipa": "/aɪl/",
    "example": "The manager discussed the aisle before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-49",
    "term": "alarm",
    "meaning": "sự báo động; báo động",
    "partOfSpeech": "n",
    "ipa": "/əˈlɑːrm/",
    "example": "The manager discussed the alarm before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-50",
    "term": "allow",
    "meaning": "cho phép, để cho",
    "partOfSpeech": "v",
    "ipa": "/əˈlaʊ/",
    "example": "The team will allow the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-51",
    "term": "alternative",
    "meaning": "xen kẽ, luân phiên",
    "partOfSpeech": "adj",
    "ipa": "/ɑːlˈtɝː.nə.t̬ɪv/",
    "example": "The company selected an alternative option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-52",
    "term": "ambitious",
    "meaning": "tham vọng",
    "partOfSpeech": "adj",
    "ipa": "/æmˈbɪʃ.əs/",
    "example": "The company selected an ambitious option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-53",
    "term": "amend",
    "meaning": "sửa chữa, cải tạo",
    "partOfSpeech": "v",
    "ipa": "/əˈmend/",
    "example": "The team will amend the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-54",
    "term": "amount",
    "meaning": "số lượng; cộng dồn lên tới",
    "partOfSpeech": "n, v",
    "ipa": "/əˈmaʊnt/",
    "example": "The team will amount the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-55",
    "term": "amusing",
    "meaning": "vui, có tính hài hước",
    "partOfSpeech": "adj",
    "ipa": "/əˈmjuː.zɪŋ/",
    "example": "The company selected an amusing option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-56",
    "term": "analysis",
    "meaning": "sự phân tích, bản phân tích",
    "partOfSpeech": "n",
    "ipa": "/əˈnæl.ə.sɪs/",
    "example": "The manager discussed the analysis before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-57",
    "term": "analyze",
    "meaning": "phân tích",
    "partOfSpeech": "v",
    "ipa": "/ˈæn.əl.aɪz/",
    "example": "The team will analyze the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-58",
    "term": "annual",
    "meaning": "hằng năm",
    "partOfSpeech": "adj",
    "ipa": "/ˈæn.ju.əl/",
    "example": "The company selected an annual option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-59",
    "term": "anticipate",
    "meaning": "phỏng đoán, dự đoán",
    "partOfSpeech": "v",
    "ipa": "/ænˈtɪs.ə.peɪt/",
    "example": "The team will anticipate the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-60",
    "term": "anxious",
    "meaning": "bồn chồn, lo lắng",
    "partOfSpeech": "adj",
    "ipa": "/ˈæŋk.ʃəs/",
    "example": "The company selected an anxious option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-61",
    "term": "apologize",
    "meaning": "xin lỗi",
    "partOfSpeech": "v",
    "ipa": "/əˈpɑː.lə.dʒaɪz/",
    "example": "The team will apologize the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-62",
    "term": "appeal",
    "meaning": "lời thỉnh cầu, sức lôi cuốn; kêu gọi, hấp dẫn",
    "partOfSpeech": "n, v",
    "ipa": "/əˈpiːl/",
    "example": "The team will appeal the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-63",
    "term": "appetizer",
    "meaning": "món khai vị",
    "partOfSpeech": "n",
    "ipa": "/ˈæp.ə.taɪ.zɚ/",
    "example": "The manager discussed the appetizer in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-64",
    "term": "appliance",
    "meaning": "thiết bị, dụng cụ",
    "partOfSpeech": "n",
    "ipa": "/əˈplaɪ.əns/",
    "example": "The manager discussed the appliance in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-65",
    "term": "applicant",
    "meaning": "người ứng tuyển, nguyên cáo",
    "partOfSpeech": "n",
    "ipa": "/ˈæp.lə.kənt/",
    "example": "The manager discussed the applicant with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-66",
    "term": "application",
    "meaning": "ứng dụng, sự áp dụng",
    "partOfSpeech": "n",
    "ipa": "/ˌæp.ləˈkeɪ.ʃən/",
    "example": "The manager discussed the application with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-67",
    "term": "apply",
    "meaning": "áp dụng, ứng tuyển",
    "partOfSpeech": "v",
    "ipa": "/əˈplaɪ/",
    "example": "The team will apply the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-68",
    "term": "appoint",
    "meaning": "bổ nhiệm, chỉ định",
    "partOfSpeech": "v",
    "ipa": "/əˈpɔɪnt/",
    "example": "The team will appoint the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-69",
    "term": "appointment",
    "meaning": "sự bổ nhiệm, cuộc hẹn gặp",
    "partOfSpeech": "n",
    "ipa": "/əˈpɔɪnt.mənt/",
    "example": "The manager discussed the appointment before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-70",
    "term": "appreciable",
    "meaning": "đáng kể",
    "partOfSpeech": "adj",
    "ipa": "/əˈpriː.ʃə.bəl/",
    "example": "The company selected an appreciable option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-71",
    "term": "appreciate",
    "meaning": "đánh giá cao, cảm kích",
    "partOfSpeech": "v",
    "ipa": "/əˈpriː.ʃi.eɪt/",
    "example": "The team will appreciate the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-72",
    "term": "appreciation",
    "meaning": "sự đánh giá cao, sự cảm kích",
    "partOfSpeech": "n",
    "ipa": "/əˌpriː.ʃiˈeɪ.ʃən/",
    "example": "The manager discussed the appreciation during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-73",
    "term": "appreciative of",
    "meaning": "đánh giá cao, ghi nhận",
    "partOfSpeech": "adj",
    "ipa": "/əˈpriː.ʃə.t̬ɪv/",
    "example": "The company selected an appreciative of option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-74",
    "term": "apprentice",
    "meaning": "người học việc",
    "partOfSpeech": "n",
    "ipa": "/əˈpren.t̬ɪs/",
    "example": "The manager discussed the apprentice before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-75",
    "term": "approve",
    "meaning": "tán thành, phê chuẩn",
    "partOfSpeech": "v",
    "ipa": "/əˈpruːv/",
    "example": "The team will approve the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-76",
    "term": "approximate",
    "meaning": "xấp xỉ, gần đúng",
    "partOfSpeech": "adj",
    "ipa": "/əˈprɑːk.sə.mət/",
    "example": "The company selected an approximate option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-77",
    "term": "arbitrate",
    "meaning": "phân xử, làm trọng tài",
    "partOfSpeech": "v",
    "ipa": "/ˈɑːr.bə.treɪt/",
    "example": "The team will arbitrate the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-78",
    "term": "area",
    "meaning": "khu vực, lĩnh vực, diện tích",
    "partOfSpeech": "n",
    "ipa": "/ˈer.i.ə/",
    "example": "The manager discussed the area during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-79",
    "term": "argue",
    "meaning": "tranh cãi, tranh luận",
    "partOfSpeech": "v",
    "ipa": "/ˈɑːrɡ.juː/",
    "example": "The team will argue the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-80",
    "term": "argument",
    "meaning": "cuộc tranh luận",
    "partOfSpeech": "n",
    "ipa": "/ˈɑːrɡ.jə.mənt/",
    "example": "The manager discussed the argument before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-81",
    "term": "arrange",
    "meaning": "dàn xếp, sắp đặt",
    "partOfSpeech": "v",
    "ipa": "/əˈreɪndʒ/",
    "example": "The team will arrange the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-82",
    "term": "arrangement",
    "meaning": "sự sắp đặt",
    "partOfSpeech": "n",
    "ipa": "/əˈreɪndʒ.mənt/",
    "example": "The manager discussed the arrangement with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-83",
    "term": "assemble",
    "meaning": "lắp ráp, thu thập",
    "partOfSpeech": "v",
    "ipa": "/əˈsem.bəl/",
    "example": "The team will assemble the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-84",
    "term": "assess",
    "meaning": "đánh giá, định giá",
    "partOfSpeech": "v",
    "ipa": "/əˈses/",
    "example": "The team will assess the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-85",
    "term": "asset",
    "meaning": "của cải, tài sản, vốn quý",
    "partOfSpeech": "n",
    "ipa": "/ˈæs.et/",
    "example": "The manager discussed the asset before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-86",
    "term": "assign",
    "meaning": "phân công, chia việc",
    "partOfSpeech": "v",
    "ipa": "/əˈsaɪn/",
    "example": "The team will assign the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-87",
    "term": "assignment",
    "meaning": "sự phân việc, bài tập tiểu luận",
    "partOfSpeech": "n",
    "ipa": "/əˈsaɪn.mənt/",
    "example": "The manager discussed the assignment before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-88",
    "term": "assist",
    "meaning": "hỗ trợ, giúp đỡ",
    "partOfSpeech": "v",
    "ipa": "/əˈsɪst/",
    "example": "The team will assist the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-89",
    "term": "assistance",
    "meaning": "sự giúp đỡ, hỗ trợ",
    "partOfSpeech": "n",
    "ipa": "/əˈsɪs.təns/",
    "example": "The manager discussed the assistance before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-90",
    "term": "assume",
    "meaning": "cho rằng, làm ra vẻ",
    "partOfSpeech": "v",
    "ipa": "/əˈsuːm/",
    "example": "The team will assume the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-91",
    "term": "attach",
    "meaning": "gán thêm, kèm thêm",
    "partOfSpeech": "v",
    "ipa": "/əˈtætʃ/",
    "example": "The team will attach the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-92",
    "term": "attachment",
    "meaning": "sự gắn thêm; phần kèm thêm",
    "partOfSpeech": "n",
    "ipa": "/əˈtætʃ.mənt/",
    "example": "The manager discussed the attachment before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-93",
    "term": "attend",
    "meaning": "tham dự",
    "partOfSpeech": "v",
    "ipa": "/əˈtend/",
    "example": "The team will attend the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-94",
    "term": "attendance",
    "meaning": "sự tham gia, có mặt",
    "partOfSpeech": "n",
    "ipa": "/əˈten.dəns/",
    "example": "The manager discussed the attendance before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-95",
    "term": "attract",
    "meaning": "thu hút, hấp dẫn",
    "partOfSpeech": "v",
    "ipa": "/əˈtrækt/",
    "example": "The team will attract the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-96",
    "term": "audience",
    "meaning": "khán thính giả",
    "partOfSpeech": "n",
    "ipa": "/ˈɑː.di.əns/",
    "example": "The manager discussed the audience before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-97",
    "term": "audit",
    "meaning": "kiểm toán",
    "partOfSpeech": "n, v",
    "ipa": "/ˈɑː.dɪt/",
    "example": "The team will audit the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-98",
    "term": "authority",
    "meaning": "quyền thế, nhà chức trách, chính quyền",
    "partOfSpeech": "n",
    "ipa": "/əˈθɔːr.ə.t̬i/",
    "example": "The manager discussed the authority in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-99",
    "term": "authorize",
    "meaning": "ủy quyền, cấp quyền",
    "partOfSpeech": "v",
    "ipa": "/ˈɑː.θɚ.aɪz/",
    "example": "The team will authorize the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-100",
    "term": "availability",
    "meaning": "tính sẵn có",
    "partOfSpeech": "n",
    "ipa": "/əˌveɪ.ləˈbɪl.ə.t̬i/",
    "example": "The manager discussed the availability during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-101",
    "term": "available",
    "meaning": "có sẵn để dùng",
    "partOfSpeech": "adj",
    "ipa": "/əˈveɪ.lə.bəl/",
    "example": "The company selected an available option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-102",
    "term": "avoid",
    "meaning": "tránh xa, ngăn ngừa",
    "partOfSpeech": "v",
    "ipa": "/əˈvɔɪd/",
    "example": "The team will avoid the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-103",
    "term": "avid",
    "meaning": "khao khát, thèm khát",
    "partOfSpeech": "adj",
    "ipa": "/ˈæv.ɪd/",
    "example": "The company selected an avid option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-104",
    "term": "awareness",
    "meaning": "sự nhận thức, ý thức",
    "partOfSpeech": "n",
    "ipa": "/əˈwer.nəs/",
    "example": "The manager discussed the awareness in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-105",
    "term": "awkward",
    "meaning": "ngại ngùng, khó xử",
    "partOfSpeech": "adj",
    "ipa": "/ˈɑː.kwɚd/",
    "example": "The company selected an awkward option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-106",
    "term": "background",
    "meaning": "phông nền, gia cảnh, quá trình học tập",
    "partOfSpeech": "n",
    "ipa": "/ˈbæk.ɡraʊnd/",
    "example": "The manager discussed the background with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-107",
    "term": "backpack",
    "meaning": "ba lô đeo sau lưng",
    "partOfSpeech": "n",
    "ipa": "/ˈbæk.pæk/",
    "example": "The manager discussed the backpack in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-108",
    "term": "baggage claim",
    "meaning": "chỗ nhận hành lý",
    "partOfSpeech": "n",
    "ipa": "/ˈbæɡ.ɪdʒ kleɪm/",
    "example": "The manager discussed the baggage claim before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-109",
    "term": "balance",
    "meaning": "sự cân bằng, trạng thái cân bằng",
    "partOfSpeech": "n",
    "ipa": "/ˈbæl.əns/",
    "example": "The manager discussed the balance before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-110",
    "term": "bank",
    "meaning": "ngân hàng, bãi sông",
    "partOfSpeech": "n",
    "ipa": "/bæŋk/",
    "example": "The manager discussed the bank in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-111",
    "term": "bankrupt",
    "meaning": "người phá sản; vỡ nợ, phá sản",
    "partOfSpeech": "n, adj",
    "ipa": "/ˈbæŋ.krʌpt/",
    "example": "The company selected an bankrupt option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-112",
    "term": "bar code",
    "meaning": "mã vạch",
    "partOfSpeech": "n",
    "ipa": "/ˈbɑːr ˌkoʊd/",
    "example": "The manager discussed the bar code in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-113",
    "term": "bargain",
    "meaning": "sự mặc cả, món hời; mặc cả, thương lượng",
    "partOfSpeech": "n, v",
    "ipa": "/ˈbɑːr.ɡɪn/",
    "example": "The team will bargain the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-114",
    "term": "beautiful",
    "meaning": "xinh đẹp, tốt đẹp",
    "partOfSpeech": "adj",
    "ipa": "/ˈbjuː.t̬ə.fəl/",
    "example": "The company selected an beautiful option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-115",
    "term": "behave",
    "meaning": "hành xử, cư xử",
    "partOfSpeech": "v",
    "ipa": "/bɪˈheɪv/",
    "example": "The team will behave the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-116",
    "term": "belongings",
    "meaning": "tài sản, đồ dùng cá nhân",
    "partOfSpeech": "n",
    "ipa": "/bɪˈlɑːŋ.ɪŋz/",
    "example": "The manager discussed the belongings with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-117",
    "term": "beneficial",
    "meaning": "có ích, có lợi",
    "partOfSpeech": "adj",
    "ipa": "/ˌben.əˈfɪʃ.əl/",
    "example": "The company selected an beneficial option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-118",
    "term": "benefit",
    "meaning": "ích lợi",
    "partOfSpeech": "n",
    "ipa": "/ˈben.ə.fɪt/",
    "example": "The manager discussed the benefit before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-119",
    "term": "beverage",
    "meaning": "đồ uống, đồ giải khát",
    "partOfSpeech": "n",
    "ipa": "/ˈbev.ɚ.ɪdʒ/",
    "example": "The manager discussed the beverage in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-120",
    "term": "bill",
    "meaning": "hóa đơn",
    "partOfSpeech": "n",
    "ipa": "/bɪl/",
    "example": "The manager discussed the bill before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-121",
    "term": "binder",
    "meaning": "bìa ôm, bìa rời",
    "partOfSpeech": "n",
    "ipa": "/ˈbaɪn.dɚ/",
    "example": "The manager discussed the binder at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-122",
    "term": "blanket",
    "meaning": "chăn, mền",
    "partOfSpeech": "n",
    "ipa": "/ˈblæŋ.kɪt/",
    "example": "The manager discussed the blanket before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-123",
    "term": "block",
    "meaning": "khối, tảng, trướng ngại vật; làm cản trở, phong tỏa",
    "partOfSpeech": "n, v",
    "ipa": "/blɑːk/",
    "example": "The team will block the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-124",
    "term": "board",
    "meaning": "tấm ván, bảng, mạn thuyền 125 boardroom n phòng họp ban giám đốc",
    "partOfSpeech": "n",
    "ipa": "/bɔːrd/",
    "example": "The manager discussed the board at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-125",
    "term": "boardroom",
    "partOfSpeech": "n",
    "ipa": "/ˈbɔːrd.ruːm/",
    "meaning": "phòng họp ban giám đốc",
    "example": "The manager discussed the boardroom before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-126",
    "term": "boast",
    "meaning": "sự khoe khoang; khoác lác",
    "partOfSpeech": "n, v",
    "ipa": "/boʊst/",
    "example": "The team will boast the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-127",
    "term": "book",
    "meaning": "cuốn sách; đặt phòng, đặt vé",
    "partOfSpeech": "n, v",
    "ipa": "/bʊk/",
    "example": "The team will book the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-128",
    "term": "boost",
    "meaning": "đẩy mạnh, kích thích; sự tăng lên",
    "partOfSpeech": "v, n",
    "ipa": "/buːst/",
    "example": "The team will boost the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-129",
    "term": "bored",
    "meaning": "buồn chán, tẻ nhạt",
    "partOfSpeech": "adj",
    "ipa": "/bɔːrd/",
    "example": "The company selected an bored option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-130",
    "term": "bother",
    "meaning": "điều gây khó chịu; làm phiền, bận tâm",
    "partOfSpeech": "n, v",
    "ipa": "/ˈbɑː.ðɚ/",
    "example": "The team will bother the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-131",
    "term": "bottom line",
    "meaning": "điểm mấu chốt, cốt yếu",
    "partOfSpeech": "n",
    "ipa": "/ˌbɑː.t̬əm ˈlaɪn/",
    "example": "The manager discussed the bottom line during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-132",
    "term": "branch",
    "meaning": "cành cây, chi nhánh",
    "partOfSpeech": "n",
    "ipa": "/bræntʃ/",
    "example": "The manager discussed the branch at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-133",
    "term": "brand",
    "meaning": "nhãn hàng, thương hiệu",
    "partOfSpeech": "n",
    "ipa": "/brænd/",
    "example": "The manager discussed the brand at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-134",
    "term": "briefcase",
    "meaning": "cặp tài liệu",
    "partOfSpeech": "n",
    "ipa": "/ˈbriːf.keɪs/",
    "example": "The manager discussed the briefcase before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-135",
    "term": "briefing",
    "meaning": "sự chỉ dẫn, hướng dẫn",
    "partOfSpeech": "n",
    "ipa": "/ˈbriː.fɪŋ/",
    "example": "The manager discussed the briefing before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-136",
    "term": "broadcast",
    "meaning": "chương trình phát thanh; truyền bá, phát thanh",
    "partOfSpeech": "n, v",
    "ipa": "/ˈbrɑːd.kæst/",
    "example": "The team will broadcast the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-137",
    "term": "broaden",
    "meaning": "mở rộng, nới rộng",
    "partOfSpeech": "v",
    "ipa": "/ˈbrɑː.dən/",
    "example": "The team will broaden the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-138",
    "term": "browser",
    "meaning": "trình duyệt",
    "partOfSpeech": "n",
    "ipa": "/ˈbraʊ.zɚ/",
    "example": "The manager discussed the browser during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-139",
    "term": "brush",
    "meaning": "lược, bàn chải; chải, quét",
    "partOfSpeech": "n, v",
    "ipa": "/brʌʃ/",
    "example": "The team will brush the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-140",
    "term": "budget",
    "meaning": "ngân sách; dự thảo ngân sách",
    "partOfSpeech": "n, v",
    "ipa": "/ˈbʌdʒ.ɪt/",
    "example": "The team will budget the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-141",
    "term": "bulletin",
    "meaning": "bảng thông báo, tập san",
    "partOfSpeech": "n",
    "ipa": "/ˈbʊl.ə.t̬ɪn/",
    "example": "The manager discussed the bulletin in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-142",
    "term": "cabin crew",
    "meaning": "đội bay, tiếp viên hàng không",
    "partOfSpeech": "n",
    "ipa": "/ˈkæb.ɪn ˌkruː/",
    "example": "The manager discussed the cabin crew before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-143",
    "term": "cafeteria",
    "meaning": "quán ăn tự phục vụ, phòng cà phê",
    "partOfSpeech": "n",
    "ipa": "/ˌkæf.əˈtɪr.i.ə/",
    "example": "The manager discussed the cafeteria with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-144",
    "term": "calculate",
    "meaning": "tính toán, suy tính",
    "partOfSpeech": "v",
    "ipa": "/ˈkæl.kjə.leɪt/",
    "example": "The team will calculate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-145",
    "term": "calculation",
    "meaning": "sự tính toán",
    "partOfSpeech": "n",
    "ipa": "/ˌkæl.kjəˈleɪ.ʃən/",
    "example": "The manager discussed the calculation before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-146",
    "term": "calculator",
    "meaning": "máy tính bỏ túi",
    "partOfSpeech": "n",
    "ipa": "/ˈkæl.kjə.leɪ.t̬ɚ/",
    "example": "The manager discussed the calculator during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-147",
    "term": "campaign",
    "meaning": "chiến dịch, cuộc vận động",
    "partOfSpeech": "n",
    "ipa": "/kæmˈpeɪn/",
    "example": "The manager discussed the campaign before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-148",
    "term": "cancel",
    "meaning": "hủy bỏ, xóa",
    "partOfSpeech": "v",
    "ipa": "/ˈkæn.səl/",
    "example": "The team will cancel the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-149",
    "term": "cancellation",
    "meaning": "sự xóa bỏ, bãi bỏ",
    "partOfSpeech": "n",
    "ipa": "/ˌkæn.səlˈeɪ.ʃən/",
    "example": "The manager discussed the cancellation at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-150",
    "term": "candidacy",
    "meaning": "sự ứng cử 151 candidate n ứng cử viên",
    "partOfSpeech": "n",
    "ipa": "/ˈkæn.dɪ.də.si/",
    "example": "The manager discussed the candidacy with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-151",
    "term": "candidate",
    "partOfSpeech": "n",
    "ipa": "/ˈkæn.dɪ.dət/",
    "meaning": "ứng cử viên, ứng viên",
    "example": "The manager discussed the candidate with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-152",
    "term": "capacity",
    "meaning": "năng lực, sức chứa",
    "partOfSpeech": "n",
    "ipa": "/kəˈpæs.ə.t̬i/",
    "example": "The manager discussed the capacity before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-153",
    "term": "capital",
    "meaning": "thủ đô, nguồn vốn, chữ viết hoa",
    "partOfSpeech": "n",
    "ipa": "/ˈkæp.ə.t̬əl/",
    "example": "The manager discussed the capital in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-154",
    "term": "career",
    "meaning": "sự nghiệp",
    "partOfSpeech": "n",
    "ipa": "/kəˈrɪr/",
    "example": "The manager discussed the career with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-155",
    "term": "careless",
    "meaning": "bất cẩn, cẩu thả",
    "partOfSpeech": "adj",
    "ipa": "/ˈker.ləs/",
    "example": "The company selected an careless option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-156",
    "term": "cash",
    "meaning": "tiền mặt",
    "partOfSpeech": "n",
    "ipa": "/kæʃ/",
    "example": "The manager discussed the cash in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-157",
    "term": "cashier",
    "meaning": "nhân viên thu ngân",
    "partOfSpeech": "n",
    "ipa": "/kæʃˈɪr/",
    "example": "The manager discussed the cashier in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-158",
    "term": "cause",
    "meaning": "nguyên nhân, lý do; gây ra",
    "partOfSpeech": "n, v",
    "ipa": "/kɑːz/",
    "example": "The team will cause the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-159",
    "term": "cautious",
    "meaning": "thận trọng, cẩn thận",
    "partOfSpeech": "adj",
    "ipa": "/ˈkɑː.ʃəs/",
    "example": "The company selected an cautious option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-160",
    "term": "celebrate",
    "meaning": "kỉ niệm, tán dương",
    "partOfSpeech": "v",
    "ipa": "/ˈsel.ə.breɪt/",
    "example": "The team will celebrate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-161",
    "term": "celebration",
    "meaning": "lễ kỉ niệm",
    "partOfSpeech": "n",
    "ipa": "/ˌsel.əˈbreɪ.ʃən/",
    "example": "The manager discussed the celebration before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-162",
    "term": "certificate",
    "meaning": "giấy chứng nhận 163 certification n /ˌsɜ˞ ː.t̬ə.fɪˈkeɪ.ʃən/ sự cấp giấy chứng nhận",
    "partOfSpeech": "n",
    "ipa": "/sɚˈtɪf.ə.kət/",
    "example": "The manager discussed the certificate before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-163",
    "term": "certification",
    "partOfSpeech": "n",
    "ipa": "/ˌsɜːr.t̬ə.fɪˈkeɪ.ʃən/",
    "meaning": "sự cấp giấy chứng nhận",
    "example": "The manager discussed the certification at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-164",
    "term": "chain",
    "meaning": "dây xích, chuỗi",
    "partOfSpeech": "n",
    "ipa": "/tʃeɪn/",
    "example": "The manager discussed the chain at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-165",
    "term": "chain store",
    "meaning": "cửa hàng theo chuỗi, hệ thống cửa hàng",
    "partOfSpeech": "n",
    "ipa": "/ˈtʃeɪn ˌstɔːr/",
    "example": "The manager discussed the chain store before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-166",
    "term": "chair",
    "meaning": "ghế ngồi",
    "partOfSpeech": "n",
    "ipa": "/tʃer/",
    "example": "The manager discussed the chair at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-167",
    "term": "chairperson",
    "meaning": "chủ tịch",
    "partOfSpeech": "n",
    "ipa": "/ˈtʃerˌpɝː.sən/",
    "example": "The manager discussed the chairperson before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-168",
    "term": "characteristic",
    "meaning": "đặc điểm, tính cách",
    "partOfSpeech": "n",
    "ipa": "/ˌker.ək.təˈrɪs.tɪk/",
    "example": "The manager discussed the characteristic before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-169",
    "term": "characterize",
    "meaning": "biểu thị đặc điểm, mô tả đặc điểm",
    "partOfSpeech": "v",
    "ipa": "/ˈker.ək.tɚ.aɪz/",
    "example": "The team will characterize the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-170",
    "term": "charge",
    "meaning": "chi phí, tiền công; tính giá, đòi trả",
    "partOfSpeech": "n, v",
    "ipa": "/tʃɑːrdʒ/",
    "example": "The team will charge the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-171",
    "term": "charity",
    "meaning": "lòng từ bi, tổ chức từ thiện",
    "partOfSpeech": "n",
    "ipa": "/ˈtʃer.ə.t̬i/",
    "example": "The manager discussed the charity in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-172",
    "term": "cheap",
    "meaning": "rẻ tiền, xấu",
    "partOfSpeech": "adj",
    "ipa": "/tʃiːp/",
    "example": "The company selected an cheap option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-173",
    "term": "check in",
    "meaning": "đăng ký phòng, vé máy bay...",
    "partOfSpeech": "v",
    "ipa": "/tʃek ɪn/",
    "example": "The team will check in the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-174",
    "term": "check out",
    "meaning": "trả phòng, thanh toán",
    "partOfSpeech": "v",
    "ipa": "/tʃek aʊt/",
    "example": "The team will check out the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-175",
    "term": "chef",
    "meaning": "đầu bếp",
    "partOfSpeech": "n",
    "ipa": "/ʃef/",
    "example": "The manager discussed the chef at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-176",
    "term": "circumstances",
    "meaning": "hoàn cảnh, tình huống",
    "partOfSpeech": "n",
    "ipa": "/ˈsɝː.kəm.stæns/",
    "example": "The manager discussed the circumstances at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-177",
    "term": "claim",
    "meaning": "quyền đòi sở hữu; đòi hỏi, nhận",
    "partOfSpeech": "n, v",
    "ipa": "/kleɪm/",
    "example": "The team will claim the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-178",
    "term": "claimant",
    "meaning": "người thỉnh cầu, người đòi hỏi",
    "partOfSpeech": "n",
    "ipa": "/ˈkleɪ.mənt/",
    "example": "The manager discussed the claimant before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-179",
    "term": "classify",
    "meaning": "phân loại",
    "partOfSpeech": "v",
    "ipa": "/ˈklæs.ə.faɪ/",
    "example": "The team will classify the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-180",
    "term": "client",
    "meaning": "khách hàng (của luật sư, cửa hàng...)",
    "partOfSpeech": "n",
    "ipa": "/ˈklaɪ.ənt/",
    "example": "The manager discussed the client at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-181",
    "term": "climate",
    "meaning": "khí hậu, thời tiết",
    "partOfSpeech": "n",
    "ipa": "/ˈklaɪ.mət/",
    "example": "The manager discussed the climate in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-182",
    "term": "commence",
    "meaning": "bắt đầu, mở đầu, khởi đầu",
    "partOfSpeech": "v",
    "ipa": "/kəˈmens/",
    "example": "The team will commence the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-183",
    "term": "commission",
    "meaning": "hội đồng, ủy ban, tiền hoa hồng",
    "partOfSpeech": "n",
    "ipa": "/kəˈmɪʃ.ən/",
    "example": "The manager discussed the commission during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-184",
    "term": "committee",
    "meaning": "ủy ban",
    "partOfSpeech": "n",
    "ipa": "/kəˈmɪt̬.i/",
    "example": "The manager discussed the committee with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-185",
    "term": "commonly",
    "meaning": "thông thường, bình thường",
    "partOfSpeech": "adv",
    "ipa": "/ˈkɑː.mən.li/",
    "example": "The team will commonly the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-186",
    "term": "commute",
    "meaning": "thay đổi cho nhau, di chuyển đều đặn bằng tàu, xe...",
    "partOfSpeech": "v",
    "ipa": "/kəˈmjuːt/",
    "example": "The team will commute the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-187",
    "term": "commuter",
    "meaning": "người đi lại bằng vé tháng trên tàu, xe...",
    "partOfSpeech": "n",
    "ipa": "/kəˈmjuː.t̬ɚ/",
    "example": "The manager discussed the commuter before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-188",
    "term": "company",
    "meaning": "công ty, bạn bè, bằng hữu",
    "partOfSpeech": "n",
    "ipa": "/ˈkʌm.pə.ni/",
    "example": "The manager discussed the company in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-189",
    "term": "compare",
    "meaning": "so sánh, đối chiếu",
    "partOfSpeech": "v",
    "ipa": "/kəmˈper/",
    "example": "The team will compare the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-190",
    "term": "compatible",
    "meaning": "tương thích, phù hợp",
    "partOfSpeech": "adj",
    "ipa": "/kəmˈpæt̬.ə.bəl/",
    "example": "The company selected an compatible option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-191",
    "term": "compensate",
    "meaning": "đền bù, bồi thường",
    "partOfSpeech": "v",
    "ipa": "/ˈkɑːm.pən.seɪt/",
    "example": "The team will compensate the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-192",
    "term": "compensation",
    "meaning": "sự đền bù, vật bồi thường",
    "partOfSpeech": "n",
    "ipa": "/ˌkɑːm.penˈseɪ.ʃən/",
    "example": "The manager discussed the compensation at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-193",
    "term": "competent",
    "meaning": "có khả năng, đủ trình độ",
    "partOfSpeech": "adj",
    "ipa": "/ˈkɑːm.pə.t̬ənt/",
    "example": "The company selected an competent option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-194",
    "term": "competitive",
    "meaning": "có tính cạnh tranh, ganh đua",
    "partOfSpeech": "adj",
    "ipa": "/kəmˈpet̬.ə.t̬ɪv/",
    "example": "The company selected an competitive option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-195",
    "term": "competitor",
    "meaning": "người cạnh tranh, đối thủ",
    "partOfSpeech": "n",
    "ipa": "/kəmˈpet̬.ə.t̬ɚ/",
    "example": "The manager discussed the competitor during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-196",
    "term": "complain",
    "meaning": "kêu ca, phàn nàn, oán trách",
    "partOfSpeech": "v",
    "ipa": "/kəmˈpleɪn/",
    "example": "The team will complain the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-197",
    "term": "complaint",
    "meaning": "lời than phiền, lời phàn nàn",
    "partOfSpeech": "n",
    "ipa": "/kəmˈpleɪnt/",
    "example": "The manager discussed the complaint at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-198",
    "term": "complete",
    "meaning": "đầy đủ, hoàn thiện 199 complex n, adj khu phức hợp; phức tạp",
    "partOfSpeech": "adj",
    "ipa": "/kəmˈpliːt/",
    "example": "The company selected an complete option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-199",
    "term": "complex",
    "partOfSpeech": "n, adj",
    "ipa": "/ˈkɑːm.pleks/",
    "meaning": "khu phức hợp; phức tạp",
    "example": "The company selected an complex option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-200",
    "term": "complexity",
    "meaning": "sự phức tạp",
    "partOfSpeech": "n",
    "ipa": "/kəmˈplek.sə.t̬i/",
    "example": "The manager discussed the complexity during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-201",
    "term": "compliment",
    "meaning": "lời khen, sự ca tụng",
    "partOfSpeech": "n",
    "ipa": "/ˈkɑːm.plə.mənt/",
    "example": "The manager discussed the compliment during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-202",
    "term": "complimentary",
    "meaning": "ngợi khen, đánh giá cao",
    "partOfSpeech": "adj",
    "ipa": "/ˌkɑːm.pləˈmen.t̬ɚ.i/",
    "example": "The company selected an complimentary option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-203",
    "term": "comply",
    "meaning": "tuân theo, làm theo",
    "partOfSpeech": "v",
    "ipa": "/kəmˈplaɪ/",
    "example": "The team will comply the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-204",
    "term": "comprehensive",
    "meaning": "toàn diện, thông minh",
    "partOfSpeech": "adj",
    "ipa": "/ˌkɑːm.prəˈhen.sɪv/",
    "example": "The company selected an comprehensive option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-205",
    "term": "compromise",
    "meaning": "sự thỏa hiệp; dàn xếp, thỏa hiệp",
    "partOfSpeech": "n, v",
    "ipa": "/ˈkɑːm.prə.maɪz/",
    "example": "The team will compromise the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-206",
    "term": "compulsory",
    "meaning": "bắt buộc, ép buộc",
    "partOfSpeech": "adj",
    "ipa": "/kəmˈpʌl.sɚ.i/",
    "example": "The company selected an compulsory option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-207",
    "term": "concede",
    "meaning": "thừa nhận",
    "partOfSpeech": "v",
    "ipa": "/kənˈsiːd/",
    "example": "The team will concede the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-208",
    "term": "concern",
    "meaning": "mối bận tâm, chuyện đáng lo; liên quan, dính líu tới",
    "partOfSpeech": "n, v",
    "ipa": "/kənˈsɝːn/",
    "example": "The team will concern the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-209",
    "term": "conclude",
    "meaning": "kết thúc, chấm dứt, kết luận",
    "partOfSpeech": "v",
    "ipa": "/kənˈkluːd/",
    "example": "The team will conclude the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-210",
    "term": "conclusion",
    "meaning": "kết luận",
    "partOfSpeech": "n",
    "ipa": "/kənˈkluː.ʒən/",
    "example": "The manager discussed the conclusion during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-211",
    "term": "concourse",
    "meaning": "đám đông, sự tụ họp",
    "partOfSpeech": "n",
    "ipa": "/ˈkɑːn.kɔːrs/",
    "example": "The manager discussed the concourse with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-212",
    "term": "condition",
    "meaning": "điều kiện, tình cảnh, tình trạng; là điều kiện của, tùy thuộc vào 213 conduct n, v hạnh kiểm, đạo đức; tiến hành, chỉ đạo",
    "partOfSpeech": "n, v",
    "ipa": "/kənˈdɪʃ.ən/",
    "example": "The team will condition the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-213",
    "term": "conduct",
    "partOfSpeech": "n, v",
    "ipa": "/kənˈdʌkt/",
    "meaning": "hạnh kiểm, đạo đức; tiến hành, chỉ đạo",
    "example": "The team will conduct the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-214",
    "term": "confirmation",
    "meaning": "sự xác nhận, chứng thực",
    "partOfSpeech": "n",
    "ipa": "/ˌkɑːn.fɚˈmeɪ.ʃən/",
    "example": "The manager discussed the confirmation at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-215",
    "term": "confusion",
    "meaning": "sự bối rối, khó hiểu",
    "partOfSpeech": "n",
    "ipa": "/kənˈfjuː.ʒən/",
    "example": "The manager discussed the confusion with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-216",
    "term": "connect",
    "meaning": "nối lại, kết nối",
    "partOfSpeech": "v",
    "ipa": "/kəˈnekt/",
    "example": "The team will connect the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-217",
    "term": "consequence",
    "meaning": "hậu quả, kết quả",
    "partOfSpeech": "n",
    "ipa": "/ˈkɑːn.sə.kwəns/",
    "example": "The manager discussed the consequence before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-218",
    "term": "considerable",
    "meaning": "đáng kể, lớn lao",
    "partOfSpeech": "adj",
    "ipa": "/kənˈsɪd.ɚ.ə.bəl/",
    "example": "The company selected an considerable option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-219",
    "term": "consignment",
    "meaning": "hoạt động gửi hàng để bán",
    "partOfSpeech": "n",
    "ipa": "/kənˈsaɪn.mənt/",
    "example": "The manager discussed the consignment before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-220",
    "term": "consistently",
    "meaning": "kiên định, trước sau như một, đồng nhất",
    "partOfSpeech": "adv",
    "ipa": "/kənˈsɪs.tənt.li/",
    "example": "The team will consistently the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-221",
    "term": "constant",
    "meaning": "liên tục, liên tiếp, kiên trì",
    "partOfSpeech": "adj",
    "ipa": "/ˈkɑːn.stənt/",
    "example": "The company selected an constant option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-222",
    "term": "consultant",
    "meaning": "tư vấn viên, cố vấn",
    "partOfSpeech": "n",
    "ipa": "/kənˈsʌl.tənt/",
    "example": "The manager discussed the consultant during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-223",
    "term": "consume",
    "meaning": "sử dụng, tiêu dùng, tiêu thụ",
    "partOfSpeech": "v",
    "ipa": "/kənˈsuːm/",
    "example": "The team will consume the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-224",
    "term": "consumer",
    "meaning": "người tiêu dùng",
    "partOfSpeech": "n",
    "ipa": "/kənˈsuː.mɚ/",
    "example": "The manager discussed the consumer before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-225",
    "term": "continual",
    "meaning": "liên tục, liên miên",
    "partOfSpeech": "adj",
    "ipa": "/kənˈtɪn.ju.əl/",
    "example": "The company selected an continual option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-226",
    "term": "continue",
    "meaning": "tiếp tục, duy trì",
    "partOfSpeech": "v",
    "ipa": "/kənˈtɪn.juː/",
    "example": "The team will continue the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-227",
    "term": "contribute",
    "meaning": "đóng góp, góp phần",
    "partOfSpeech": "v",
    "ipa": "/kənˈtrɪb.juːt/",
    "example": "The team will contribute the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-228",
    "term": "control",
    "meaning": "sự điều khiển, cầm lái; điều khiển, chỉ huy, kiểm soát",
    "partOfSpeech": "n, v",
    "ipa": "/kənˈtroʊl/",
    "example": "The team will control the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-229",
    "term": "control panel",
    "meaning": "bảng điều khiển",
    "partOfSpeech": "n",
    "ipa": "/kənˈtroʊl ˌpæn.əl/",
    "example": "The manager discussed the control panel at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-230",
    "term": "conveniently",
    "meaning": "thuận tiện, tiện lợi",
    "partOfSpeech": "adv",
    "ipa": "/kənˈviː.ni.ənt.li/",
    "example": "The team will conveniently the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-231",
    "term": "convince",
    "meaning": "thuyết phục",
    "partOfSpeech": "v",
    "ipa": "/kənˈvɪns/",
    "example": "The team will convince the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-232",
    "term": "corporate",
    "meaning": "công ty, tập đoàn; (thuộc) đoàn thể 233 corporation n corporation đoàn thể, tập đoàn",
    "partOfSpeech": "n, v",
    "ipa": "/ˈkɔːr.pɚ.ət/",
    "example": "The team will corporate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-233",
    "term": "corporation",
    "partOfSpeech": "n",
    "ipa": "/ˌkɔːr.pəˈreɪ.ʃən/",
    "meaning": "đoàn thể, tập đoàn",
    "example": "The manager discussed the corporation before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-234",
    "term": "cost",
    "meaning": "giá, chi phí; định giá, trả giá",
    "partOfSpeech": "n, v",
    "ipa": "/kɑːst/",
    "example": "The team will cost the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-235",
    "term": "counter",
    "meaning": "quầy hàng, quầy thu ngân; phản đối, chống lại",
    "partOfSpeech": "n, v",
    "ipa": "/ˈkaʊn.t̬ɚ/",
    "example": "The team will counter the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-236",
    "term": "courier",
    "meaning": "người đưa thư, đưa tin",
    "partOfSpeech": "n",
    "ipa": "/ˈkʊr.i.ɚ/",
    "example": "The manager discussed the courier in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-237",
    "term": "cover letter",
    "meaning": "thư trình bày thông tin, nguyện vọng",
    "partOfSpeech": "n",
    "ipa": "/ˈkʌv.ə ˌlet.ər/",
    "example": "The manager discussed the cover letter at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-238",
    "term": "coverage",
    "meaning": "mức độ bao phủ, che phủ bản tin sự kiện",
    "partOfSpeech": "n",
    "ipa": "/ˈkʌv.ɚ.ɪdʒ/",
    "example": "The manager discussed the coverage before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-239",
    "term": "coworker",
    "meaning": "đồng nghiệp",
    "partOfSpeech": "n",
    "ipa": "/ˌkoʊˈwɝː.kɚ/",
    "example": "The manager discussed the coworker before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-240",
    "term": "crash",
    "meaning": "sự va đập, sụp đổ; rơi vỡ, va đập",
    "partOfSpeech": "n, v",
    "ipa": "/kræʃ/",
    "example": "The team will crash the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-241",
    "term": "credentials",
    "meaning": "giấy ủy nhiệm, chứng chỉ",
    "partOfSpeech": "n",
    "ipa": "/krɪˈden·ʃəlz/",
    "example": "The manager discussed the credentials before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-242",
    "term": "credit",
    "meaning": "danh tiếng, tín dụng, tín chỉ",
    "partOfSpeech": "n",
    "ipa": "/ˈkred.ɪt/",
    "example": "The manager discussed the credit in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-243",
    "term": "criterion",
    "meaning": "tiêu chí đánh giá",
    "partOfSpeech": "n",
    "ipa": "/kraɪˈtɪr.i.ən/",
    "example": "The manager discussed the criterion with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-244",
    "term": "critical",
    "meaning": "phê bình, phê phán nguy kịch",
    "partOfSpeech": "adj",
    "ipa": "/ˈkrɪt̬.ɪ.kəl/",
    "example": "The company selected an critical option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-245",
    "term": "criticize",
    "meaning": "phê bình, chỉ trích",
    "partOfSpeech": "v",
    "ipa": "/ˈkrɪt̬.ɪ.saɪz/",
    "example": "The team will criticize the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-246",
    "term": "crowd",
    "meaning": "đám đông, đống; xúm lại, tụ tập",
    "partOfSpeech": "n, v",
    "ipa": "/kraʊd/",
    "example": "The team will crowd the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-247",
    "term": "crowded",
    "meaning": "đông đúc nhiều, đầy",
    "partOfSpeech": "adj",
    "ipa": "/ˈkraʊ.dɪd/",
    "example": "The company selected an crowded option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-248",
    "term": "crucial",
    "meaning": "có tính quyết định, trọng yếu",
    "partOfSpeech": "adj",
    "ipa": "/ˈkruː.ʃəl/",
    "example": "The company selected an crucial option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-249",
    "term": "cruise",
    "meaning": "chuyến du lịch, đi chơi trên biển; đi chơi bằng tàu thủy",
    "partOfSpeech": "n, v",
    "ipa": "/kruːz/",
    "example": "The team will cruise the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-250",
    "term": "currency",
    "meaning": "tiền tệ",
    "partOfSpeech": "n",
    "ipa": "/ˈkɝː.ən.si/",
    "example": "The manager discussed the currency before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-251",
    "term": "current",
    "meaning": "dòng, luồng; hiện tại, hiện thời",
    "partOfSpeech": "n, adj",
    "ipa": "/ˈkɝː.ənt/",
    "example": "The company selected an current option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-252",
    "term": "custom",
    "meaning": "phong tục, tục lệ",
    "partOfSpeech": "n",
    "ipa": "/ˈkʌs.təm/",
    "example": "The manager discussed the custom before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-253",
    "term": "customer",
    "meaning": "khách hàng",
    "partOfSpeech": "n",
    "ipa": "/ˈkʌs.tə.mɚ/",
    "example": "The manager discussed the customer at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-254",
    "term": "cutting edge",
    "meaning": "đột phá, vượt trội",
    "partOfSpeech": "adj",
    "ipa": "/ˌkʌt̬.ɪŋ ˈedʒ/",
    "example": "The company selected an cutting edge option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-255",
    "term": "cycle",
    "meaning": "chu kỳ, chu trình",
    "partOfSpeech": "n",
    "ipa": "/ˈsaɪ.kəl/",
    "example": "The manager discussed the cycle at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-256",
    "term": "daily",
    "meaning": "hằng ngày",
    "partOfSpeech": "adj",
    "ipa": "/ˈdeɪ.li/",
    "example": "The company selected an daily option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-257",
    "term": "damage",
    "meaning": "mối gây hại; làm hại, hư hỏng",
    "partOfSpeech": "n",
    "ipa": "/ˈdæm.ɪdʒ/",
    "example": "The manager discussed the damage in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-258",
    "term": "deadline",
    "meaning": "hạn cuối, hạn hoàn thành",
    "partOfSpeech": "n",
    "ipa": "/ˈded.laɪn/",
    "example": "The manager discussed the deadline with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-259",
    "term": "deal",
    "meaning": "thỏa thuận mua bán; giải quyết, đối phó",
    "partOfSpeech": "n, v",
    "ipa": "/diːl/",
    "example": "The team will deal the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-260",
    "term": "debit",
    "meaning": "món nợ; ghi nợ",
    "partOfSpeech": "n",
    "ipa": "/ˈdeb.ɪt/",
    "example": "The manager discussed the debit before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-261",
    "term": "debt",
    "meaning": "khoản nợ",
    "partOfSpeech": "n",
    "ipa": "/det/",
    "example": "The manager discussed the debt at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-262",
    "term": "decision",
    "meaning": "quyết định",
    "partOfSpeech": "n",
    "ipa": "/dɪˈsɪʒ.ən/",
    "example": "The manager discussed the decision with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-263",
    "term": "decorate",
    "meaning": "trang trí, trang hoàng",
    "partOfSpeech": "v",
    "ipa": "/ˈdek.ər.eɪt/",
    "example": "The team will decorate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-264",
    "term": "decrease",
    "meaning": "sự sụt giảm; làm giảm đi",
    "partOfSpeech": "n",
    "ipa": "/ˈdiː.kriːs/",
    "example": "The manager discussed the decrease with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-265",
    "term": "dedicate",
    "meaning": "cống hiến, tận hiến",
    "partOfSpeech": "v",
    "ipa": "/ˈded.ə.keɪt/",
    "example": "The team will dedicate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-266",
    "term": "deduct",
    "meaning": "khấu trừ, trừ đi",
    "partOfSpeech": "v",
    "ipa": "/dɪˈdʌkt/",
    "example": "The team will deduct the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-267",
    "term": "definite",
    "meaning": "xác định rõ, rõ ràng",
    "partOfSpeech": "adj",
    "ipa": "/ˈdef.ən.ət/",
    "example": "The company selected an definite option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-268",
    "term": "definitely",
    "meaning": "rõ ràng, dứt khoát, chắc chắn",
    "partOfSpeech": "adv",
    "ipa": "/ˈdef.ən.ət.li/",
    "example": "The team will definitely the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-269",
    "term": "degree",
    "meaning": "mức độ, trình độ, cấp bậc độ, nhiệt độ",
    "partOfSpeech": "n",
    "ipa": "/dɪˈɡriː/",
    "example": "The manager discussed the degree in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-270",
    "term": "delay",
    "meaning": "sự chậm trễ, trì hoãn; làm chậm, hoãn lại",
    "partOfSpeech": "n, v",
    "ipa": "/dɪˈleɪ/",
    "example": "The team will delay the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-271",
    "term": "delighted",
    "meaning": "hài lòng, vui mừng",
    "partOfSpeech": "adj",
    "ipa": "/dɪˈlaɪ.t̬ɪd/",
    "example": "The company selected an delighted option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-272",
    "term": "deliver",
    "meaning": "phân phối, giao hàng, đem tới phát biểu",
    "partOfSpeech": "v",
    "ipa": "/dɪˈlɪv.ɚ/",
    "example": "The team will deliver the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-273",
    "term": "delivery",
    "meaning": "sự phân phát, giao hàng sự phát biểu",
    "partOfSpeech": "n",
    "ipa": "/dɪˈlɪv.ɚ.i/",
    "example": "The manager discussed the delivery with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-274",
    "term": "demand",
    "meaning": "sự đòi hỏi; yêu cầu",
    "partOfSpeech": "n, v",
    "ipa": "/dɪˈmænd/",
    "example": "The team will demand the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-275",
    "term": "demanding",
    "meaning": "yêu cầu cao, đòi hỏi khắt khe",
    "partOfSpeech": "adj",
    "ipa": "/dɪˈmæn.dɪŋ/",
    "example": "The company selected an demanding option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-276",
    "term": "demonstrate",
    "meaning": "làm mẫu, giải thích biểu tình",
    "partOfSpeech": "v",
    "ipa": "/ˈdem.ən.streɪt/",
    "example": "The team will demonstrate the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-277",
    "term": "depart",
    "meaning": "rời đi từ giã",
    "partOfSpeech": "v",
    "ipa": "/dɪˈpɑːrt/",
    "example": "The team will depart the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-278",
    "term": "department",
    "meaning": "khoa, bộ",
    "partOfSpeech": "n",
    "ipa": "/dɪˈpɑːrt.mənt/",
    "example": "The manager discussed the department before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-279",
    "term": "depend",
    "meaning": "phụ thuộc, lệ thuộc",
    "partOfSpeech": "v",
    "ipa": "/dɪˈpend/",
    "example": "The team will depend the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-280",
    "term": "dependence",
    "meaning": "sự phụ thuộc",
    "partOfSpeech": "n",
    "ipa": "/dɪˈpen.dəns/",
    "example": "The manager discussed the dependence before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-281",
    "term": "deposit",
    "meaning": "tiền cọc; đặt cọc",
    "partOfSpeech": "n, v",
    "ipa": "/dɪˈpɑː.zɪt/",
    "example": "The team will deposit the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-282",
    "term": "description",
    "meaning": "bản mô tả, sự mô tả",
    "partOfSpeech": "n",
    "ipa": "/dɪˈskrɪp.ʃən/",
    "example": "The manager discussed the description at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-283",
    "term": "designate",
    "meaning": "chỉ định, bổ nhiệm",
    "partOfSpeech": "v",
    "ipa": "/ˈdez.ɪɡ.neɪt/",
    "example": "The team will designate the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-284",
    "term": "dessert",
    "meaning": "món tráng miệng",
    "partOfSpeech": "n",
    "ipa": "/dɪˈzɝːt/",
    "example": "The manager discussed the dessert before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-285",
    "term": "destination",
    "meaning": "đích đến, điểm đến dự định",
    "partOfSpeech": "n",
    "ipa": "/ˌdes.təˈneɪ.ʃən/",
    "example": "The manager discussed the destination at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-286",
    "term": "detail",
    "meaning": "chi tiết, tiểu tiết; trình bày chi tiết, làm rõ",
    "partOfSpeech": "n, v",
    "ipa": "/ˈdiː.teɪl/",
    "example": "The team will detail the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-287",
    "term": "detailed",
    "meaning": "chi tiết, cụ thể",
    "partOfSpeech": "adj",
    "ipa": "/ˈdiː.teɪld/",
    "example": "The company selected an detailed option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-288",
    "term": "detect",
    "meaning": "dò ra, tìm ra, phát hiện",
    "partOfSpeech": "v",
    "ipa": "/dɪˈtekt/",
    "example": "The team will detect the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-289",
    "term": "deterioration",
    "meaning": "sự hư hại, xuống cấp, sa đọa",
    "partOfSpeech": "n",
    "ipa": "/dɪˌtɪr.i.əˈreɪ.ʃən/",
    "example": "The manager discussed the deterioration before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-290",
    "term": "determine",
    "meaning": "xác định rõ, định rõ quyết định, quyết tâm",
    "partOfSpeech": "v",
    "ipa": "/dɪˈtɝː.mɪn/",
    "example": "The team will determine the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-291",
    "term": "determined",
    "meaning": "quyết tâm, kiên quyết",
    "partOfSpeech": "adj",
    "ipa": "/dɪˈtɝː.mɪnd/",
    "example": "The company selected an determined option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-292",
    "term": "develop",
    "meaning": "phát triển, tiến triển",
    "partOfSpeech": "v",
    "ipa": "/dɪˈvel.əp/",
    "example": "The team will develop the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-293",
    "term": "developer",
    "meaning": "người phát triển, lập trình viên",
    "partOfSpeech": "n",
    "ipa": "/dɪˈvel.ə.pɚ/",
    "example": "The manager discussed the developer during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-294",
    "term": "development",
    "meaning": "sự phát triển",
    "partOfSpeech": "n",
    "ipa": "/dɪˈvel.əp.mənt/",
    "example": "The manager discussed the development at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-295",
    "term": "device",
    "meaning": "thiết bị, máy móc phương sách",
    "partOfSpeech": "n",
    "ipa": "/dɪˈvaɪs/",
    "example": "The manager discussed the device during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-296",
    "term": "diagnose",
    "meaning": "chẩn đoán",
    "partOfSpeech": "v",
    "ipa": "/ˌdaɪ.əɡˈnoʊz/",
    "example": "The team will diagnose the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-297",
    "term": "differential",
    "meaning": "khác biệt, chênh lệch",
    "partOfSpeech": "adj",
    "ipa": "/ˌdɪf.əˈren.ʃəl/",
    "example": "The company selected an differential option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-298",
    "term": "diligent",
    "meaning": "chăm chỉ, cần cù 299 director n giám đốc, người điều hành, đạo diễn",
    "partOfSpeech": "adj",
    "ipa": "/ˈdɪl.ə.dʒənt/",
    "example": "The company selected an diligent option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-299",
    "term": "director",
    "partOfSpeech": "n",
    "ipa": "/dəˈrek.tɚ/",
    "meaning": "giám đốc, người điều hành, đạo diễn",
    "example": "The manager discussed the director with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-300",
    "term": "disagree",
    "meaning": "bất đồng, không khớp với nhau",
    "partOfSpeech": "v",
    "ipa": "/ˌdɪs.əˈɡriː/",
    "example": "The team will disagree the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-301",
    "term": "disagreement",
    "meaning": "sự bất đồng, mối bất hòa, mâu thuẫn",
    "partOfSpeech": "n",
    "ipa": "/ˌdɪs.əˈɡriː.mənt/",
    "example": "The manager discussed the disagreement at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-302",
    "term": "disappointing",
    "meaning": "đáng thất vọng",
    "partOfSpeech": "adj",
    "ipa": "/ˌdɪs.əˈpɔɪn.t̬ɪŋ/",
    "example": "The company selected an disappointing option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-303",
    "term": "disconnect",
    "meaning": "ngắt kết nối",
    "partOfSpeech": "v",
    "ipa": "/ˌdɪs.kəˈnekt/",
    "example": "The team will disconnect the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-304",
    "term": "discount",
    "meaning": "sự giảm giá, chiết khấu; giảm giá, bớt giá",
    "partOfSpeech": "n, v",
    "ipa": "/ˈdɪs.kaʊnt/",
    "example": "The team will discount the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-305",
    "term": "discrepancy",
    "meaning": "khác biệt, chênh lệch, điểm không đồng nhất",
    "partOfSpeech": "n",
    "ipa": "/dɪˈskrep.ən.si/",
    "example": "The manager discussed the discrepancy at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-306",
    "term": "discrimination",
    "meaning": "sự phân biệt đối xử",
    "partOfSpeech": "n",
    "ipa": "/dɪˌskrɪm.əˈneɪ.ʃən/",
    "example": "The manager discussed the discrimination in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-307",
    "term": "discuss",
    "meaning": "thảo luận, tranh luận",
    "partOfSpeech": "v",
    "ipa": "/dɪˈskʌs/",
    "example": "The team will discuss the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-308",
    "term": "discussion",
    "meaning": "cuộc tranh luận, thảo luận",
    "partOfSpeech": "n",
    "ipa": "/dɪˈskʌʃ.ən/",
    "example": "The manager discussed the discussion before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-309",
    "term": "dish",
    "meaning": "đĩa đựng thức ăn, món ăn",
    "partOfSpeech": "n",
    "ipa": "/dɪʃ/",
    "example": "The manager discussed the dish at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-310",
    "term": "dismiss",
    "meaning": "giải tán, thải hồi",
    "partOfSpeech": "v",
    "ipa": "/dɪˈsmɪs/",
    "example": "The team will dismiss the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-311",
    "term": "dismissive",
    "meaning": "thô bạo, tùy tiện",
    "partOfSpeech": "adj",
    "ipa": "/dɪˈsmɪs.ɪv/",
    "example": "The company selected an dismissive option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-312",
    "term": "display",
    "meaning": "sự bày biện; trưng bày, phô diễn",
    "partOfSpeech": "n, v",
    "ipa": "/dɪˈspleɪ/",
    "example": "The team will display the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-313",
    "term": "disposable",
    "meaning": "dùng một lần, sẵn có để dùng",
    "partOfSpeech": "adj",
    "ipa": "/dɪˈspoʊ.zə.bəl/",
    "example": "The company selected an disposable option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-314",
    "term": "dispose",
    "meaning": "vứt bỏ, giải quyết 315 dispute n, v cuộc bàn cãi, cuộc tranh luận; tranh luận",
    "partOfSpeech": "v",
    "ipa": "/dɪˈspoʊz/",
    "example": "The team will dispose the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-315",
    "term": "dispute",
    "partOfSpeech": "n, v",
    "ipa": "/dɪˈspjuːt/",
    "meaning": "cuộc bàn cãi, cuộc tranh luận; tranh luận",
    "example": "The team will dispute the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-316",
    "term": "disruption",
    "meaning": "sự phá vỡ, đập gãy",
    "partOfSpeech": "n",
    "ipa": "/dɪsˈrʌp.ʃən/",
    "example": "The manager discussed the disruption before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-317",
    "term": "distinctive",
    "meaning": "đặc biệt, độc đáo",
    "partOfSpeech": "adj",
    "ipa": "/dɪˈstɪŋk.tɪv/",
    "example": "The company selected an distinctive option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-318",
    "term": "distinguish",
    "meaning": "phân biệt, nhận ra",
    "partOfSpeech": "v",
    "ipa": "/dɪˈstɪŋ.ɡwɪʃ/",
    "example": "The team will distinguish the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-319",
    "term": "distribute",
    "meaning": "phân phát, phân bổ",
    "partOfSpeech": "v",
    "ipa": "/dɪˈstrɪb.juːt/",
    "example": "The team will distribute the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-320",
    "term": "distribution",
    "meaning": "sự phân phát 321 dividend n số bị chia",
    "partOfSpeech": "n",
    "ipa": "/ˌdɪs.trɪˈbjuː.ʃən/",
    "example": "The manager discussed the distribution at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-321",
    "term": "dividend",
    "partOfSpeech": "n",
    "ipa": "/ˈdɪv.ə.dend/",
    "meaning": "cổ tức; số bị chia",
    "example": "The manager discussed the dividend with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-322",
    "term": "document",
    "meaning": "văn kiện, tài liệu; dẫn chứng tư liệu",
    "partOfSpeech": "n",
    "ipa": "/ˈdɑː.kjə.mənt/",
    "example": "The manager discussed the document before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-323",
    "term": "donate",
    "meaning": "quyên góp, đóng góp",
    "partOfSpeech": "v",
    "ipa": "/ˈdoʊ.neɪt/",
    "example": "The team will donate the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-324",
    "term": "donation",
    "meaning": "sự quyên góp, sự hiến tặng",
    "partOfSpeech": "n",
    "ipa": "/doʊˈneɪ.ʃən/",
    "example": "The manager discussed the donation with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-325",
    "term": "double",
    "meaning": "nhân đôi, gấp dôi",
    "partOfSpeech": "n, adj, adv",
    "ipa": "/ˈdʌb.əl/",
    "example": "The team will double the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-326",
    "term": "download",
    "meaning": "tải xuống",
    "partOfSpeech": "v",
    "ipa": "/ˈdaʊn.loʊd/",
    "example": "The team will download the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-327",
    "term": "downsize",
    "meaning": "cắt giảm",
    "partOfSpeech": "v",
    "ipa": "/ˈdaʊn.saɪz/",
    "example": "The team will downsize the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-328",
    "term": "downturn",
    "meaning": "sự suy sụp",
    "partOfSpeech": "n",
    "ipa": "/ˈdaʊn.tɝːn/",
    "example": "The manager discussed the downturn with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-329",
    "term": "downward",
    "meaning": "trở xuống, trở về sau",
    "partOfSpeech": "adv",
    "ipa": "/ˈdaʊn.wɚd/",
    "example": "The team will downward the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-330",
    "term": "drastically",
    "meaning": "mạnh mẽ, quyết liệt",
    "partOfSpeech": "adv",
    "ipa": "/ˈdræs.tɪ.kəl.i/",
    "example": "The team will drastically the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-331",
    "term": "draw",
    "meaning": "kéo, lôi, thu hút vẽ",
    "partOfSpeech": "v",
    "ipa": "/drɑː/",
    "example": "The team will draw the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-332",
    "term": "drawer",
    "meaning": "ngăn kéo",
    "partOfSpeech": "n",
    "ipa": "/drɑː/",
    "example": "The manager discussed the drawer in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-333",
    "term": "drive",
    "meaning": "cuộc đua; lái xe",
    "partOfSpeech": "n, v",
    "ipa": "/draɪv/",
    "example": "The team will drive the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-334",
    "term": "dull",
    "meaning": "chậm hiểu, đần độn cùn",
    "partOfSpeech": "adj",
    "ipa": "/dʌl/",
    "example": "The company selected an dull option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-335",
    "term": "duration",
    "meaning": "khoảng thời gian, thời hạn",
    "partOfSpeech": "n",
    "ipa": "/djʊəˈreɪ.ʃən/",
    "example": "The manager discussed the duration with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-336",
    "term": "duty-free",
    "meaning": "miễn thuế",
    "partOfSpeech": "adj, adv",
    "ipa": "/ˌduː.t̬iˈfriː/",
    "example": "The team will duty-free the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-337",
    "term": "earn",
    "meaning": "kiếm được, giành được",
    "partOfSpeech": "v",
    "ipa": "/ɝːn/",
    "example": "The team will earn the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-338",
    "term": "earnings",
    "meaning": "số tiền kiếm được 339 economical adj tiết kiệm, kinh tế",
    "partOfSpeech": "n",
    "ipa": "/ˈɝː.nɪŋz/",
    "example": "The manager discussed the earnings during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-339",
    "term": "economical",
    "partOfSpeech": "adj",
    "ipa": "/ˌiː.kəˈnɑː.mɪ.kəl/",
    "meaning": "tiết kiệm, kinh tế",
    "example": "The company selected an economical option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-340",
    "term": "economize",
    "meaning": "tiết kiệm",
    "partOfSpeech": "v",
    "ipa": "/iˈkɑː.nə.maɪz/",
    "example": "The team will economize the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-341",
    "term": "economy",
    "meaning": "nền kinh tế",
    "partOfSpeech": "n",
    "ipa": "/iˈkɑː.nə.mi/",
    "example": "The manager discussed the economy with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-342",
    "term": "effective",
    "meaning": "hiệu quả, có hiệu lực",
    "partOfSpeech": "adj",
    "ipa": "/əˈfek.tɪv/",
    "example": "The company selected an effective option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-343",
    "term": "effectively",
    "meaning": "có hiệu quả",
    "partOfSpeech": "adv",
    "ipa": "/əˈfek.tɪv.li/",
    "example": "The team will effectively the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-344",
    "term": "effectiveness",
    "meaning": "sự hiệu quả",
    "partOfSpeech": "n",
    "ipa": "/əˈfek.tɪv.nəs/",
    "example": "The manager discussed the effectiveness in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-345",
    "term": "efficiency",
    "meaning": "năng lực, hiệu suất, năng suất",
    "partOfSpeech": "n",
    "ipa": "/ɪˈfɪʃ.ən.si/",
    "example": "The manager discussed the efficiency at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-346",
    "term": "efficient",
    "meaning": "năng suất cao, hiệu suất tốt",
    "partOfSpeech": "adj",
    "ipa": "/ɪˈfɪʃ.ənt/",
    "example": "The company selected an efficient option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-347",
    "term": "efficiently",
    "meaning": "có hiệu nghiệm",
    "partOfSpeech": "adv",
    "ipa": "/ɪˈfɪʃ.ənt.li/",
    "example": "The team will efficiently the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-348",
    "term": "elderly",
    "meaning": "có tuổi, lớn tuổi",
    "partOfSpeech": "adj",
    "ipa": "/ˈel.dɚ.li/",
    "example": "The company selected an elderly option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-349",
    "term": "elevator",
    "meaning": "thang máy, máy nâng",
    "partOfSpeech": "n",
    "ipa": "/ˈel.ə.veɪ.t̬ɚ/",
    "example": "The manager discussed the elevator during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-350",
    "term": "embark",
    "meaning": "bắt đầu, lên đường, dấn thân vào",
    "partOfSpeech": "v",
    "ipa": "/ɪmˈbɑːrk/",
    "example": "The team will embark the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-351",
    "term": "emergency",
    "meaning": "trường hợp khẩn cấp",
    "partOfSpeech": "n",
    "ipa": "/ɪˈmɝː.dʒən.si/",
    "example": "The manager discussed the emergency before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-352",
    "term": "emphasize",
    "meaning": "nhấn mạnh",
    "partOfSpeech": "v",
    "ipa": "/ˈem.fə.saɪz/",
    "example": "The team will emphasize the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-353",
    "term": "employer",
    "meaning": "người làm chủ, người sử dụng lao động",
    "partOfSpeech": "n",
    "ipa": "/ɪmˈplɔɪ.ɚ/",
    "example": "The manager discussed the employer with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-354",
    "term": "employment",
    "meaning": "việc làm, sự thuê người làm",
    "partOfSpeech": "n",
    "ipa": "/ɪmˈplɔɪ.mənt/",
    "example": "The manager discussed the employment with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-355",
    "term": "enable",
    "meaning": "cho phép, làm cho có khả năng làm gì đó",
    "partOfSpeech": "v",
    "ipa": "/ɪˈneɪ.bəl/",
    "example": "The team will enable the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-356",
    "term": "enclose",
    "meaning": "vây quanh, rào quanh, gửi kèm",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈkloʊz/",
    "example": "The team will enclose the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-357",
    "term": "encourage",
    "meaning": "động viên, cổ vũ",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈkɝː.ɪdʒ/",
    "example": "The team will encourage the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-358",
    "term": "endure",
    "meaning": "chịu đựng, cam chịu",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈdʊr/",
    "example": "The team will endure the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-359",
    "term": "engineer",
    "meaning": "kỹ sư",
    "partOfSpeech": "n",
    "ipa": "/ˌen.dʒɪˈnɪr/",
    "example": "The manager discussed the engineer during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-360",
    "term": "engineering",
    "meaning": "công việc kỹ sư",
    "partOfSpeech": "n",
    "ipa": "/ˌen.dʒɪˈnɪr.ɪŋ/",
    "example": "The manager discussed the engineering at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-361",
    "term": "enhance",
    "meaning": "làm tăng thêm, đề cao, đẩy mạnh",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈhæns/",
    "example": "The team will enhance the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-362",
    "term": "enlighten",
    "meaning": "làm sáng tỏ, khai sáng",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈlaɪ.t̬ən/",
    "example": "The team will enlighten the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-363",
    "term": "enroll",
    "meaning": "đăng ký, ghi tên",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈrəʊl/",
    "example": "The team will enroll the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-364",
    "term": "ensure",
    "meaning": "bảo đảm, chắc chắn",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈʃʊr/",
    "example": "The team will ensure the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-365",
    "term": "enterprise",
    "meaning": "xí nghiệp, doanh nghiệp",
    "partOfSpeech": "n",
    "ipa": "/ˈen.t̬ɚ.praɪz/",
    "example": "The manager discussed the enterprise at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-366",
    "term": "enthusiastic",
    "meaning": "nhiệt tình, hứng khởi",
    "partOfSpeech": "adj",
    "ipa": "/ɪnˌθuː.ziˈæs.tɪk/",
    "example": "The company selected an enthusiastic option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-367",
    "term": "enthusiastically",
    "meaning": "hăng say, nhiệt tình",
    "partOfSpeech": "adv",
    "ipa": "/ɪnˌθuː.ziˈæs.tɪ.kəl.i/",
    "example": "The team will enthusiastically the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-368",
    "term": "entitlement",
    "meaning": "quyền hạn, sự được phép làm",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈtaɪ.t̬əl.mənt/",
    "example": "The manager discussed the entitlement at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-369",
    "term": "entrée",
    "meaning": "món chính sự gia nhập, thâm nhập, tiến vào",
    "partOfSpeech": "n",
    "ipa": "/ˈɑːn.treɪ/",
    "example": "The manager discussed the entrée before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-370",
    "term": "environment",
    "meaning": "môi trường",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈvaɪ.rən.mənt/",
    "example": "The manager discussed the environment at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-371",
    "term": "environmental",
    "meaning": "(thuộc) môi trường",
    "partOfSpeech": "adj",
    "ipa": "/ɪnˌvaɪ.rənˈmen.t̬əl/",
    "example": "The company selected an environmental option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-372",
    "term": "equivalent",
    "meaning": "tương đương; vật tương đương",
    "partOfSpeech": "adj, n",
    "ipa": "/ɪˈkwɪv.əl.ənt/",
    "example": "The company selected an equivalent option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-373",
    "term": "essential",
    "meaning": "(thuộc) bản chất, cốt lõi",
    "partOfSpeech": "adj",
    "ipa": "/ɪˈsen.ʃəl/",
    "example": "The company selected an essential option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-374",
    "term": "estimate",
    "meaning": "ước tính, dự đoán",
    "partOfSpeech": "v",
    "ipa": "/ˈes.tə.meɪt/",
    "example": "The team will estimate the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-375",
    "term": "evaluate",
    "meaning": "ước lượng, đánh giá",
    "partOfSpeech": "v",
    "ipa": "/ɪˈvæl.ju.eɪt/",
    "example": "The team will evaluate the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-376",
    "term": "evolve",
    "meaning": "tiến hóa",
    "partOfSpeech": "v",
    "ipa": "/ɪˈvɑːlv/",
    "example": "The team will evolve the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-377",
    "term": "event",
    "meaning": "sự kiện, sự việc",
    "partOfSpeech": "n",
    "ipa": "/ɪˈvent/",
    "example": "The manager discussed the event in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-378",
    "term": "evidence",
    "meaning": "bằng chứng, chứng cớ",
    "partOfSpeech": "n",
    "ipa": "/ˈev.ə.dəns/",
    "example": "The manager discussed the evidence during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-379",
    "term": "exact",
    "meaning": "chính xác, đúng",
    "partOfSpeech": "adj",
    "ipa": "/ɪɡˈzækt/",
    "example": "The company selected an exact option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-380",
    "term": "examination",
    "meaning": "sự khám xét, kỳ thi",
    "partOfSpeech": "n",
    "ipa": "/ɪɡˌzæm.əˈneɪ.ʃən/",
    "example": "The manager discussed the examination at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-381",
    "term": "examine",
    "meaning": "khảo sát, kiểm tra",
    "partOfSpeech": "v",
    "ipa": "/ɪɡˈzæm.ɪn/",
    "example": "The team will examine the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-382",
    "term": "excel",
    "meaning": "hơn, vượt trội",
    "partOfSpeech": "v",
    "ipa": "/ɪkˈsel/",
    "example": "The team will excel the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-383",
    "term": "excellent",
    "meaning": "xuất sắc, ưu tú",
    "partOfSpeech": "adj",
    "ipa": "/ˈek.səl.ənt/",
    "example": "The company selected an excellent option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-384",
    "term": "executive",
    "meaning": "(thuộc) chấp hành, sự thi hành; tổ chức hành pháp",
    "partOfSpeech": "adj, n",
    "ipa": "/ɪɡˈzek.jə.t̬ɪv/",
    "example": "The company selected an executive option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-385",
    "term": "exhibit",
    "meaning": "trưng bày, triển lãm",
    "partOfSpeech": "v",
    "ipa": "/ɪɡˈzɪb.ɪt/",
    "example": "The team will exhibit the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-386",
    "term": "expand",
    "meaning": "mở rộng, nở phồng",
    "partOfSpeech": "v",
    "ipa": "/ɪkˈspænd/",
    "example": "The team will expand the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-387",
    "term": "expansion",
    "meaning": "sử mở rộng, giãn nở",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈspæn.ʃən/",
    "example": "The manager discussed the expansion before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-388",
    "term": "expect",
    "meaning": "chờ đợi, trông chờ",
    "partOfSpeech": "v",
    "ipa": "/ɪkˈspekt/",
    "example": "The team will expect the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-389",
    "term": "expectation",
    "meaning": "sự mong chờ, ngóng đợi",
    "partOfSpeech": "n",
    "ipa": "/ˌek.spekˈteɪ.ʃən/",
    "example": "The manager discussed the expectation at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-390",
    "term": "expenditure",
    "meaning": "sự tiêu dùng, phí tổn",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈspen.də.tʃɚ/",
    "example": "The manager discussed the expenditure at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-391",
    "term": "expense",
    "meaning": "chi phí, sự tiêu dùng",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈspens/",
    "example": "The manager discussed the expense with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-392",
    "term": "expensive",
    "meaning": "đắt tiền, đắt đỏ",
    "partOfSpeech": "adj",
    "ipa": "/ɪkˈspen.sɪv/",
    "example": "The company selected an expensive option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-393",
    "term": "experience",
    "meaning": "trải nghiệm, kinh nghiệm",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈspɪr.i.əns/",
    "example": "The manager discussed the experience at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-394",
    "term": "experienced",
    "meaning": "người từng trải, người có kinh nghiệm",
    "partOfSpeech": "adj",
    "ipa": "/ɪkˈspɪə.ri.ənst/",
    "example": "The company selected an experienced option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-395",
    "term": "experiment",
    "meaning": "thí nghiệm, thử nghiệm",
    "partOfSpeech": "n, v",
    "ipa": "/ɪkˈsper.ə.mənt/",
    "example": "The team will experiment the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-396",
    "term": "exploration",
    "meaning": "cuộc thăm dò, thám hiểm",
    "partOfSpeech": "n",
    "ipa": "/ˌek.spləˈreɪ.ʃən/",
    "example": "The manager discussed the exploration at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-397",
    "term": "express",
    "meaning": "công văn hỏa tốc; trình bày, diễn đạt",
    "partOfSpeech": "n, v",
    "ipa": "/ɪkˈspres/",
    "example": "The team will express the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-398",
    "term": "extend",
    "meaning": "duỗi thẳng, nới rộng, gia hạn",
    "partOfSpeech": "v",
    "ipa": "/ɪkˈstend/",
    "example": "The team will extend the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-399",
    "term": "extension",
    "meaning": "sự mở rộng, gia hạn",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈsten.ʃən/",
    "example": "The manager discussed the extension before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-400",
    "term": "external",
    "meaning": "bên ngoài, đối ngoại",
    "partOfSpeech": "adj",
    "ipa": "/ɪkˈstɝː.nəl/",
    "example": "The company selected an external option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-401",
    "term": "facility",
    "meaning": "điều kiện thuận lợi, sự dễ dàng, thuận lợi",
    "partOfSpeech": "n",
    "ipa": "/fəˈsɪl.ə.t̬i/",
    "example": "The manager discussed the facility before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-402",
    "term": "factor",
    "meaning": "nhân tố",
    "partOfSpeech": "n",
    "ipa": "/ˈfæk.tɚ/",
    "example": "The manager discussed the factor with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-403",
    "term": "factory",
    "meaning": "nhà máy, xí nghiệp",
    "partOfSpeech": "n",
    "ipa": "/ˈfæk.tɚ.i/",
    "example": "The manager discussed the factory before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-404",
    "term": "fail",
    "meaning": "thất bại, trượt (kì thi)",
    "partOfSpeech": "v",
    "ipa": "/feɪl/",
    "example": "The team will fail the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-405",
    "term": "failure",
    "meaning": "sự thất bại",
    "partOfSpeech": "n",
    "ipa": "/ˈfeɪ.ljɚ/",
    "example": "The manager discussed the failure during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-406",
    "term": "fair",
    "meaning": "hội chợ, phiên chợ; công bằng, không thiên vị",
    "partOfSpeech": "n, adj",
    "ipa": "/fer/",
    "example": "The company selected an fair option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-407",
    "term": "famed",
    "meaning": "nổi tiếng, lừng danh",
    "partOfSpeech": "adj",
    "ipa": "/feɪmd/",
    "example": "The company selected an famed option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-408",
    "term": "fare",
    "meaning": "tiền xe, tiền vé đi đường, đi du lịch",
    "partOfSpeech": "n, v",
    "ipa": "/fer/",
    "example": "The team will fare the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-409",
    "term": "fault",
    "meaning": "lỗi, sai lầm",
    "partOfSpeech": "n",
    "ipa": "/fɑːlt/",
    "example": "The manager discussed the fault before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-410",
    "term": "faulty",
    "meaning": "có thiếu sót, mắc khuyết điểm",
    "partOfSpeech": "adj",
    "ipa": "/ˈfɑːl.t̬i/",
    "example": "The company selected an faulty option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-411",
    "term": "favor",
    "meaning": "thiện ý, sự yêu mến; ưu đãi, thiên vị",
    "partOfSpeech": "n, v",
    "ipa": "/ˈfeɪ.vɚ/",
    "example": "The team will favor the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-412",
    "term": "fax",
    "meaning": "bản fax",
    "partOfSpeech": "n",
    "ipa": "/fæks/",
    "example": "The manager discussed the fax before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-413",
    "term": "feature",
    "meaning": "nét, đặc điểm",
    "partOfSpeech": "n",
    "ipa": "/ˈfiː.tʃɚ/",
    "example": "The manager discussed the feature during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-414",
    "term": "fee",
    "meaning": "lệ phí, tiền thù lao",
    "partOfSpeech": "n",
    "ipa": "/fiː/",
    "example": "The manager discussed the fee before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-415",
    "term": "feedback",
    "meaning": "phản hồi, góp ý",
    "partOfSpeech": "n, v",
    "ipa": "/ˈfiːd.bæk/",
    "example": "The team will feedback the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-416",
    "term": "figure",
    "meaning": "hình dáng, nhân vật; đánh giá, tính toán",
    "partOfSpeech": "n, v",
    "ipa": "/ˈfɪɡ.jɚ/",
    "example": "The team will figure the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-417",
    "term": "file",
    "meaning": "hồ sơ, túi đựng tài liệu",
    "partOfSpeech": "n",
    "ipa": "/faɪl/",
    "example": "The manager discussed the file in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-418",
    "term": "fill",
    "meaning": "làm đầy, nhồi nhét",
    "partOfSpeech": "v",
    "ipa": "/fɪl/",
    "example": "The team will fill the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-419",
    "term": "final",
    "meaning": "cuối cùng",
    "partOfSpeech": "adj",
    "ipa": "/ˈfaɪ.nəl/",
    "example": "The company selected an final option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-420",
    "term": "finance",
    "meaning": "tài chính; hỗ trợ tài chính 421 financial adj (thuộc) tài chính",
    "partOfSpeech": "n, v",
    "ipa": "/ˈfaɪ.næns/",
    "example": "The team will finance the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-421",
    "term": "financial",
    "partOfSpeech": "adj",
    "ipa": "/faɪˈnæn.ʃəl/",
    "meaning": "(thuộc) tài chính",
    "example": "The company selected an financial option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-422",
    "term": "fix",
    "meaning": "sửa chữa gắn chặt, cố định",
    "partOfSpeech": "n, v",
    "ipa": "/fɪks/",
    "example": "The team will fix the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-423",
    "term": "flexible",
    "meaning": "linh hoạt, không cố định",
    "partOfSpeech": "adj",
    "ipa": "/ˈflek.sə.bəl/",
    "example": "The company selected an flexible option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-424",
    "term": "flight",
    "meaning": "chuyến bay, sự rút chạy",
    "partOfSpeech": "n",
    "ipa": "/flaɪt/",
    "example": "The manager discussed the flight before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-425",
    "term": "flight attendant",
    "meaning": "tiếp viên hàng không",
    "partOfSpeech": "n",
    "ipa": "/ˈflaɪt əˌten.dənt/",
    "example": "The manager discussed the flight attendant before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-426",
    "term": "fluctuate",
    "meaning": "dao động, lên xuống",
    "partOfSpeech": "v",
    "ipa": "/ˈflʌk.tʃu.eɪt/",
    "example": "The team will fluctuate the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-427",
    "term": "fluctuation",
    "meaning": "sự dao động",
    "partOfSpeech": "n",
    "ipa": "/ˌflʌk.tʃuˈeɪ.ʃən/",
    "example": "The manager discussed the fluctuation before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-428",
    "term": "focus",
    "meaning": "tập trung",
    "partOfSpeech": "v, n",
    "ipa": "/ˈfoʊ.kəs/",
    "example": "The team will focus the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-429",
    "term": "focused",
    "meaning": "tập trung, chú ý",
    "partOfSpeech": "adj",
    "ipa": "/ˈfoʊ.kəst/",
    "example": "The company selected an focused option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-430",
    "term": "fold",
    "meaning": "gấp, vén; nếp gấp",
    "partOfSpeech": "v, n",
    "ipa": "/foʊld/",
    "example": "The team will fold the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-431",
    "term": "folder",
    "meaning": "bìa cứng, xấp tài liệu",
    "partOfSpeech": "n",
    "ipa": "/ˈfoʊl.dɚ/",
    "example": "The manager discussed the folder with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-432",
    "term": "force",
    "meaning": "sức mạnh, quyền lực",
    "partOfSpeech": "n",
    "ipa": "/fɔːrs/",
    "example": "The manager discussed the force before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-433",
    "term": "forecast",
    "meaning": "dự đoán, tiên đoán",
    "partOfSpeech": "n, v",
    "ipa": "/ˈfɔːr.kæst/",
    "example": "The team will forecast the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-434",
    "term": "foreign",
    "meaning": "nước ngoài, ngoại quốc",
    "partOfSpeech": "adj",
    "ipa": "/ˈfɔːr.ən/",
    "example": "The company selected an foreign option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-435",
    "term": "forget",
    "meaning": "quên",
    "partOfSpeech": "v",
    "ipa": "/fɚˈɡet/",
    "example": "The team will forget the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-436",
    "term": "forgetful",
    "meaning": "tính hay quên, có trí nhớ tồi",
    "partOfSpeech": "adj",
    "ipa": "/fɚˈɡet.fəl/",
    "example": "The company selected an forgetful option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-437",
    "term": "form",
    "meaning": "dáng hình; tạo hình",
    "partOfSpeech": "n",
    "ipa": "/fɔːrm/",
    "example": "The manager discussed the form in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-438",
    "term": "forward",
    "meaning": "về phía trước, tiến lên",
    "partOfSpeech": "adv",
    "ipa": "/ˈfɔːr.wɚd/",
    "example": "The team will forward the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-439",
    "term": "frank",
    "meaning": "ngay thẳng, bộc trực",
    "partOfSpeech": "adj",
    "ipa": "/fræŋk/",
    "example": "The company selected an frank option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-440",
    "term": "frankly",
    "meaning": "thẳng thắn",
    "partOfSpeech": "adv",
    "ipa": "/ˈfræŋ.kli/",
    "example": "The team will frankly the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-441",
    "term": "fuel",
    "meaning": "chất đốt, nhiên liệu",
    "partOfSpeech": "n",
    "ipa": "/ˈfjuː.əl/",
    "example": "The manager discussed the fuel in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-442",
    "term": "fulfill",
    "meaning": "làm đầy",
    "partOfSpeech": "v",
    "ipa": "/fʊlˈfɪl/",
    "example": "The team will fulfill the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-443",
    "term": "function",
    "meaning": "hoạt động; chức năng",
    "partOfSpeech": "v, n",
    "ipa": "/ˈfʌŋk.ʃən/",
    "example": "The team will function the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-444",
    "term": "functional",
    "meaning": "(thuộc) chức năng",
    "partOfSpeech": "adj",
    "ipa": "/ˈfʌŋk.ʃən.əl/",
    "example": "The company selected an functional option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-445",
    "term": "fundraising",
    "meaning": "sự huy động vốn",
    "partOfSpeech": "n",
    "ipa": "/ˈfʌndˌreɪ.zɪŋ/",
    "example": "The manager discussed the fundraising in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-446",
    "term": "furniture",
    "meaning": "đồ đạc",
    "partOfSpeech": "n",
    "ipa": "/ˈfɝː.nɪ.tʃɚ/",
    "example": "The manager discussed the furniture at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-447",
    "term": "further",
    "meaning": "xa hơn, kỹ hơn",
    "partOfSpeech": "adj, adv",
    "ipa": "/ˈfɝː.ðɚ/",
    "example": "The team will further the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-448",
    "term": "gesture",
    "meaning": "điệu bộ, cử chỉ",
    "partOfSpeech": "n",
    "ipa": "/ˈdʒes.tʃɚ/",
    "example": "The manager discussed the gesture before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-449",
    "term": "goal",
    "meaning": "khung thành, cầu môn mục tiêu",
    "partOfSpeech": "n",
    "ipa": "/ɡoʊl/",
    "example": "The manager discussed the goal before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-450",
    "term": "goods",
    "meaning": "của cải, hàng hóa",
    "partOfSpeech": "n",
    "ipa": "/ɡʊdz/",
    "example": "The manager discussed the goods with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-451",
    "term": "gradually",
    "meaning": "dần dần, từ từ",
    "partOfSpeech": "adv",
    "ipa": "/ˈɡrædʒ.u.ə.li/",
    "example": "The team will gradually the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-452",
    "term": "grievance",
    "meaning": "lời than trách",
    "partOfSpeech": "n",
    "ipa": "/ˈɡriː.vəns/",
    "example": "The manager discussed the grievance at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-453",
    "term": "grill",
    "meaning": "chả nướng; nướng, thiêu đốt",
    "partOfSpeech": "n, v",
    "ipa": "/ɡrɪl/",
    "example": "The team will grill the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-454",
    "term": "growth",
    "meaning": "sự tăng trưởng, mức độ tăng trưởng",
    "partOfSpeech": "n",
    "ipa": "/ɡroʊθ/",
    "example": "The manager discussed the growth during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-455",
    "term": "guarantee",
    "meaning": "sự đảm bảo; cam kết",
    "partOfSpeech": "n, v",
    "ipa": "/ˌɡer.ənˈtiː/",
    "example": "The team will guarantee the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-456",
    "term": "guideline",
    "meaning": "quy tắc, nguyên tắc",
    "partOfSpeech": "n",
    "ipa": "/ˈɡaɪd.laɪn/",
    "example": "The manager discussed the guideline at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-457",
    "term": "haggle",
    "meaning": "sự mặc cả; tranh cãi",
    "partOfSpeech": "n, v",
    "ipa": "/ˈhæɡ.əl/",
    "example": "The team will haggle the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-458",
    "term": "handle",
    "meaning": "cán cầm, tay cầm; xử lý",
    "partOfSpeech": "n, v",
    "ipa": "/ˈhæn.dəl/",
    "example": "The team will handle the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-459",
    "term": "handy",
    "meaning": "thuận tiện, sẵn tiện",
    "partOfSpeech": "adj",
    "ipa": "/ˈhæn.di/",
    "example": "The company selected an handy option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-460",
    "term": "harbor",
    "meaning": "bến cảng; che giấu nuôi dưỡng",
    "partOfSpeech": "n, v",
    "ipa": "/ˈhɑː.bər/",
    "example": "The team will harbor the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-461",
    "term": "harmful",
    "meaning": "gây tai hại, có hại",
    "partOfSpeech": "adj",
    "ipa": "/ˈhɑːrm.fəl/",
    "example": "The company selected an harmful option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-462",
    "term": "hazardous",
    "meaning": "mạo hiểm, nguy hiểm",
    "partOfSpeech": "adj",
    "ipa": "/ˈhæz.ɚ.dəs/",
    "example": "The company selected an hazardous option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-463",
    "term": "head office",
    "meaning": "cơ quan đầu não, tổng công ty",
    "partOfSpeech": "n",
    "ipa": "/ˌhed ˈɑː.fɪs/",
    "example": "The manager discussed the head office before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-464",
    "term": "headquarters",
    "meaning": "sở chỉ huy, bộ chỉ huy",
    "partOfSpeech": "n",
    "ipa": "/ˈhedˌkwɔːr.t̬ɚz/",
    "example": "The manager discussed the headquarters with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-465",
    "term": "hesitate",
    "meaning": "do dự, ngập ngừng",
    "partOfSpeech": "v",
    "ipa": "/ˈhez.ə.teɪt/",
    "example": "The team will hesitate the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-466",
    "term": "hesitation",
    "meaning": "sự ngập ngừng, do dự",
    "partOfSpeech": "n",
    "ipa": "/ˌhez.əˈteɪ.ʃən/",
    "example": "The manager discussed the hesitation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-467",
    "term": "hide",
    "meaning": "che giấu, che đậy",
    "partOfSpeech": "n, v",
    "ipa": "/haɪd/",
    "example": "The team will hide the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-468",
    "term": "highlight",
    "meaning": "điểm nổi bật; làm nổi bật",
    "partOfSpeech": "n, v",
    "ipa": "/ˈhaɪ.laɪt/",
    "example": "The team will highlight the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-469",
    "term": "highly",
    "meaning": "rất, lắm, tốt",
    "partOfSpeech": "adv",
    "ipa": "/ˈhaɪ.li/",
    "example": "The team will highly the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-470",
    "term": "hike",
    "meaning": "cuộc đi bộ, cuộc hành quân; đi bộ đường dài",
    "partOfSpeech": "n",
    "ipa": "/haɪk/",
    "example": "The manager discussed the hike with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-471",
    "term": "hire",
    "meaning": "sự thuê; thuê, mướn",
    "partOfSpeech": "n, v",
    "ipa": "/haɪr/",
    "example": "The team will hire the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-472",
    "term": "hold",
    "meaning": "sự cầm, nắm; cầm, giữ",
    "partOfSpeech": "n, v",
    "ipa": "/hoʊld/",
    "example": "The team will hold the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-473",
    "term": "host",
    "meaning": "chủ nhà, người chủ trì; tổ chức, đăng cai",
    "partOfSpeech": "n, v",
    "ipa": "/hoʊst/",
    "example": "The team will host the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-474",
    "term": "identification",
    "meaning": "sự phát hiện, nhận diện",
    "partOfSpeech": "n",
    "ipa": "/aɪˌden.t̬ə.fəˈkeɪ.ʃən/",
    "example": "The manager discussed the identification at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-475",
    "term": "identify",
    "meaning": "nhận diện, nhận biết",
    "partOfSpeech": "v",
    "ipa": "/aɪˈden.t̬ə.faɪ/",
    "example": "The team will identify the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-476",
    "term": "imaginative",
    "meaning": "tưởng tượng, không có thực",
    "partOfSpeech": "adj",
    "ipa": "/ɪˈmædʒ.ə.nə.t̬ɪv/",
    "example": "The company selected an imaginative option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-477",
    "term": "immediate",
    "meaning": "ngay lập tức, trực tiếp",
    "partOfSpeech": "adj",
    "ipa": "/ɪˈmiː.di.ət/",
    "example": "The company selected an immediate option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-478",
    "term": "immediately",
    "meaning": "ngay lập tức, tức thì",
    "partOfSpeech": "adv",
    "ipa": "/ɪˈmiː.di.ət.li/",
    "example": "The team will immediately the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-479",
    "term": "impact",
    "meaning": "tác động, ảnh hưởng",
    "partOfSpeech": "n, v",
    "ipa": "/ˈɪm.pækt/",
    "example": "The team will impact the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-480",
    "term": "impatient",
    "meaning": "thiếu kiên nhẫn",
    "partOfSpeech": "adj",
    "ipa": "/ɪmˈpeɪ.ʃənt/",
    "example": "The company selected an impatient option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-481",
    "term": "impersonate",
    "meaning": "mạo danh, đóng vai, nhại lại",
    "partOfSpeech": "v",
    "ipa": "/ɪmˈpɝː.sən.eɪt/",
    "example": "The team will impersonate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-482",
    "term": "implement",
    "meaning": "dụng cụ, phương tiện; thi hành, thực hiện, áp dụng",
    "partOfSpeech": "n, v",
    "ipa": "/ˈɪm.plə.ment/",
    "example": "The team will implement the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-483",
    "term": "imply",
    "meaning": "ngụ ý, ý nói",
    "partOfSpeech": "v",
    "ipa": "/ɪmˈplaɪ/",
    "example": "The team will imply the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-484",
    "term": "impression",
    "meaning": "ấn tượng dấu vết",
    "partOfSpeech": "n",
    "ipa": "/ɪmˈpreʃ.ən/",
    "example": "The manager discussed the impression before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-485",
    "term": "improper",
    "meaning": "không thích hợp, không phù hợp",
    "partOfSpeech": "adj",
    "ipa": "/ɪmˈprɑː.pɚ/",
    "example": "The company selected an improper option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-486",
    "term": "improve",
    "meaning": "cải thiện",
    "partOfSpeech": "v",
    "ipa": "/ɪmˈpruːv/",
    "example": "The team will improve the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-487",
    "term": "improvement",
    "meaning": "sự cải thiện, cải tiến",
    "partOfSpeech": "n",
    "ipa": "/ɪmˈpruːv.mənt/",
    "example": "The manager discussed the improvement with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-488",
    "term": "incentive",
    "meaning": "khuyến khích; sự khích lệ, thúc đẩy",
    "partOfSpeech": "adj, n",
    "ipa": "/ɪnˈsen.t̬ɪv/",
    "example": "The company selected an incentive option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-489",
    "term": "inclined",
    "meaning": "có thiên hướng, khuynh hướng",
    "partOfSpeech": "adj",
    "ipa": "/ɪnˈklaɪnd/",
    "example": "The company selected an inclined option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-490",
    "term": "include",
    "meaning": "bao gồm, gồm có",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈkluːd/",
    "example": "The team will include the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-491",
    "term": "inclusion",
    "meaning": "sự bao gồm, tính vào",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈkluː.ʒən/",
    "example": "The manager discussed the inclusion in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-492",
    "term": "income",
    "meaning": "thu nhập, lợi tức",
    "partOfSpeech": "n",
    "ipa": "/ˈɪn.kʌm/",
    "example": "The manager discussed the income in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-493",
    "term": "inconvenience",
    "meaning": "sự bất tiện, phiền hà",
    "partOfSpeech": "n",
    "ipa": "/ˌɪn.kənˈviːn.jəns/",
    "example": "The manager discussed the inconvenience before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-494",
    "term": "increase",
    "meaning": "sự tăng lên; tăng thêm",
    "partOfSpeech": "v, n",
    "ipa": "/ɪnˈkriːs/",
    "example": "The team will increase the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-495",
    "term": "indicate",
    "meaning": "chỉ ra, chứng tỏ, biểu thị",
    "partOfSpeech": "v",
    "ipa": "/ˈɪn.də.keɪt/",
    "example": "The team will indicate the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-496",
    "term": "indication",
    "meaning": "sự biểu thị, biểu lộ",
    "partOfSpeech": "n",
    "ipa": "/ˌɪn.dəˈkeɪ.ʃən/",
    "example": "The manager discussed the indication before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-497",
    "term": "individual",
    "meaning": "cá nhân; riêng lẻ, tách biệt",
    "partOfSpeech": "n, v",
    "ipa": "/ˌɪn.dəˈvɪdʒ.u.əl/",
    "example": "The team will individual the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-498",
    "term": "individually",
    "meaning": "riêng lẻ",
    "partOfSpeech": "adv",
    "ipa": "/ˌɪn.dəˈvɪdʒ.u.ə.li/",
    "example": "The team will individually the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-499",
    "term": "inexperienced",
    "meaning": "thiếu kinh nghiệm",
    "partOfSpeech": "adj",
    "ipa": "/ˌɪn.ɪkˈspɪr.i.ənst/",
    "example": "The company selected an inexperienced option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-500",
    "term": "infer",
    "meaning": "suy ra, kết luận",
    "partOfSpeech": "v",
    "ipa": "/-ˈfɝː/",
    "example": "The team will infer the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-501",
    "term": "inflate",
    "meaning": "bơm phồng, thổi phồng",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈfleɪt/",
    "example": "The team will inflate the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-502",
    "term": "inflation",
    "meaning": "sự bơm phồng, lạm phát",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈfleɪ.ʃən/",
    "example": "The manager discussed the inflation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-503",
    "term": "influence",
    "meaning": "ảnh hưởng, uy lực; chi phối, tác động",
    "partOfSpeech": "v",
    "ipa": "/ˈɪn.flu.əns/",
    "example": "The team will influence the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-504",
    "term": "influential",
    "meaning": "có ảnh hưởng, có tác dụng",
    "partOfSpeech": "adj",
    "ipa": "/ˌɪn.fluˈen.ʃəl/",
    "example": "The company selected an influential option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-505",
    "term": "information",
    "meaning": "thông tin",
    "partOfSpeech": "n",
    "ipa": "/ˌɪn.fɚˈmeɪ.ʃən/",
    "example": "The manager discussed the information with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-506",
    "term": "input",
    "meaning": "dữ liệu đầu vào",
    "partOfSpeech": "n",
    "ipa": "/ˈɪn.pʊt/",
    "example": "The manager discussed the input before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-507",
    "term": "inquiry",
    "meaning": "sự điều tra, thẩm vấn",
    "partOfSpeech": "n",
    "ipa": "/ˈɪŋ.kwɚ.i/",
    "example": "The manager discussed the inquiry at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-508",
    "term": "install",
    "meaning": "cài đặt, tải xuống",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈstɑːl/",
    "example": "The team will install the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-509",
    "term": "installation",
    "meaning": "sự cài đặt",
    "partOfSpeech": "n",
    "ipa": "/ˌɪn.stəˈleɪ.ʃən/",
    "example": "The manager discussed the installation during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-510",
    "term": "insurance",
    "meaning": "sự bảo hiểm, hợp đồng bảo hiểm",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈʃɜ.r.əns/",
    "example": "The manager discussed the insurance in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-511",
    "term": "insure",
    "meaning": "bảo hiểm, đảm bảo",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈʃʊr/",
    "example": "The team will insure the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-512",
    "term": "intend",
    "meaning": "định, có ý định",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈtend/",
    "example": "The team will intend the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-513",
    "term": "intention",
    "meaning": "dự định, ý định",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈten.ʃən/",
    "example": "The manager discussed the intention in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-514",
    "term": "intently",
    "meaning": "chăm chú, chú ý",
    "partOfSpeech": "adv",
    "ipa": "/ɪnˈtent.li/",
    "example": "The team will intently the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-515",
    "term": "intern",
    "meaning": "thực tập sinh",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈtɝːn/",
    "example": "The manager discussed the intern at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-516",
    "term": "internal",
    "meaning": "bên trong, nội bộ",
    "partOfSpeech": "adj",
    "ipa": "/ɪnˈtɝː.nəl/",
    "example": "The company selected an internal option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-517",
    "term": "international",
    "meaning": "quốc tế, đa quốc gia",
    "partOfSpeech": "adj",
    "ipa": "/ˌɪn.t̬ɚˈnæʃ.ən.əl/",
    "example": "The company selected an international option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-518",
    "term": "internship",
    "meaning": "kỳ thực tập",
    "partOfSpeech": "n",
    "ipa": "/ˈɪn.tɝːn.ʃɪp/",
    "example": "The manager discussed the internship before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-519",
    "term": "interrupt",
    "meaning": "làm gián đoạn, ngắt quãng",
    "partOfSpeech": "v",
    "ipa": "/ˌɪn.t̬əˈrʌpt/",
    "example": "The team will interrupt the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-520",
    "term": "interview",
    "meaning": "phỏng vấn",
    "partOfSpeech": "n, v",
    "ipa": "/ˈɪn.t̬ɚ.vjuː/",
    "example": "The team will interview the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-521",
    "term": "invaluable",
    "meaning": "vô giá",
    "partOfSpeech": "adj",
    "ipa": "/ɪnˈvæl.jə.bəl/",
    "example": "The company selected an invaluable option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-522",
    "term": "invent",
    "meaning": "phát minh, sáng chế",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈvent/",
    "example": "The team will invent the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-523",
    "term": "invention",
    "meaning": "sự phát minh, sáng kiến, sáng chế",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈven.ʃən/",
    "example": "The manager discussed the invention in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-524",
    "term": "inventory",
    "meaning": "sự kiểm kê, bản kiểm kê",
    "partOfSpeech": "n",
    "ipa": "/ˈɪn.vən.tɔːr.i/",
    "example": "The manager discussed the inventory in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-525",
    "term": "invest",
    "meaning": "đầu tư",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈvest/",
    "example": "The team will invest the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-526",
    "term": "investigation",
    "meaning": "sự điều tra, nghiên cứu",
    "partOfSpeech": "n",
    "ipa": "/ɪnˌves.təˈɡeɪ.ʃən/",
    "example": "The manager discussed the investigation before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-527",
    "term": "investment",
    "meaning": "sự đầu tư, vốn đầu tư",
    "partOfSpeech": "n",
    "ipa": "/ɪnˈvest.mənt/",
    "example": "The manager discussed the investment before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-528",
    "term": "invite",
    "meaning": "mời, rủ lôi cuốn, hấp dẫn",
    "partOfSpeech": "v",
    "ipa": "/ɪnˈvaɪt/",
    "example": "The team will invite the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-529",
    "term": "invoice",
    "meaning": "hóa đơn",
    "partOfSpeech": "n",
    "ipa": "/ˈɪn.vɔɪs/",
    "example": "The manager discussed the invoice in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-530",
    "term": "isolate",
    "meaning": "cô lập, cách ly",
    "partOfSpeech": "v",
    "ipa": "/ˈaɪ.sə.leɪt/",
    "example": "The team will isolate the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-531",
    "term": "item",
    "meaning": "món đồ tin tức",
    "partOfSpeech": "n",
    "ipa": "/ˈaɪ.t̬əm/",
    "example": "The manager discussed the item during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-532",
    "term": "itemize",
    "meaning": "trình bày thành từng khoản, từng món",
    "partOfSpeech": "v",
    "ipa": "/ˈaɪ.t̬ə.maɪz/",
    "example": "The team will itemize the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-533",
    "term": "itinerary",
    "meaning": "hành trình, lịch trình",
    "partOfSpeech": "n",
    "ipa": "/aɪˈtɪn.ə.rer.i/",
    "example": "The manager discussed the itinerary in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-534",
    "term": "jealous",
    "meaning": "ghen ghét, đố kỵ",
    "partOfSpeech": "adj",
    "ipa": "/ˈdʒel.əs/",
    "example": "The company selected an jealous option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-535",
    "term": "jeopardize",
    "meaning": "gây nguy hại, đe dọa",
    "partOfSpeech": "v",
    "ipa": "/ˈdʒep.ɚ.daɪz/",
    "example": "The team will jeopardize the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-536",
    "term": "jeopardy",
    "meaning": "nguy cơ, sự nguy hiểm",
    "partOfSpeech": "n",
    "ipa": "/ˈdʒep.ɚ.di/",
    "example": "The manager discussed the jeopardy in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-537",
    "term": "jobless",
    "meaning": "thất nghiệp, không có việc làm",
    "partOfSpeech": "adj",
    "ipa": "/ˈdʒɑːb.ləs/",
    "example": "The company selected an jobless option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-538",
    "term": "join",
    "meaning": "nối, ghép tham gia",
    "partOfSpeech": "v",
    "ipa": "/dʒɔɪn/",
    "example": "The team will join the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-539",
    "term": "joint",
    "meaning": "mối nối, khớp; chung",
    "partOfSpeech": "n, adj",
    "ipa": "/dʒɔɪnt/",
    "example": "The company selected an joint option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-540",
    "term": "journal",
    "meaning": "báo, tạp chí",
    "partOfSpeech": "n",
    "ipa": "/ˈdʒɝː.nəl/",
    "example": "The manager discussed the journal before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-541",
    "term": "journey",
    "meaning": "cuộc hành trình",
    "partOfSpeech": "n",
    "ipa": "/ˈdʒɝː.ni/",
    "example": "The manager discussed the journey before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-542",
    "term": "judge",
    "meaning": "quan toàn, thẩm phán, người phán xử; xét xử, phân xử",
    "partOfSpeech": "n, v",
    "ipa": "/dʒʌdʒ/",
    "example": "The team will judge the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-543",
    "term": "justice",
    "meaning": "sự công bằng, luật pháp",
    "partOfSpeech": "n",
    "ipa": "/ˈdʒʌs.tɪs/",
    "example": "The manager discussed the justice before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-544",
    "term": "justification",
    "meaning": "sự bào chữa, biện hộ",
    "partOfSpeech": "n",
    "ipa": "/ˌdʒʌs.tə.fəˈkeɪ.ʃən/",
    "example": "The manager discussed the justification at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-545",
    "term": "justify",
    "meaning": "bào chữa, phân bua, biện hộ",
    "partOfSpeech": "v",
    "ipa": "/ˈdʒʌs.tə.faɪ/",
    "example": "The team will justify the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-546",
    "term": "keen",
    "meaning": "say mê, ham thích",
    "partOfSpeech": "adj",
    "ipa": "/kiːn/",
    "example": "The company selected an keen option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-547",
    "term": "keep",
    "meaning": "giữ lại, giam giữ",
    "partOfSpeech": "v",
    "ipa": "/kiːp/",
    "example": "The team will keep the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-548",
    "term": "knowledge",
    "meaning": "kiến thức, sự hiểu biết",
    "partOfSpeech": "n",
    "ipa": "/ˈnɑː.lɪdʒ/",
    "example": "The manager discussed the knowledge with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-549",
    "term": "knowledgeable",
    "meaning": "thông thạo, thành thạo, am tường",
    "partOfSpeech": "adj",
    "ipa": "/´nɔlidʒəbl/",
    "example": "The company selected an knowledgeable option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-550",
    "term": "label",
    "meaning": "nhãn, nhãn hiệu",
    "partOfSpeech": "n",
    "ipa": "/'leɪbl/",
    "example": "The manager discussed the label before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-551",
    "term": "labor",
    "meaning": "lao động, công việc chân tay",
    "partOfSpeech": "n",
    "ipa": "/'leibə/",
    "example": "The manager discussed the labor before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-552",
    "term": "lack",
    "meaning": "sự thiếu, thiếu sót",
    "partOfSpeech": "n, v",
    "ipa": "/læk/",
    "example": "The team will lack the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-553",
    "term": "landlord",
    "meaning": "chủ nhà (nhà cho thuê)",
    "partOfSpeech": "n",
    "ipa": "/'lændlɔ:d/",
    "example": "The manager discussed the landlord with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-554",
    "term": "laptop",
    "meaning": "máy tính",
    "partOfSpeech": "n",
    "ipa": "/´læp¸tɔp/",
    "example": "The manager discussed the laptop in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-555",
    "term": "launch",
    "meaning": "Xuồng lớn",
    "partOfSpeech": "n",
    "ipa": "/lɔ:ntʃ/",
    "example": "The manager discussed the launch in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-556",
    "term": "law",
    "meaning": "luật, nội quy, quy định",
    "partOfSpeech": "n",
    "ipa": "/lɑː/",
    "example": "The manager discussed the law at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-557",
    "term": "lay",
    "meaning": "bài thơ ngắn, bài vè ngắn",
    "partOfSpeech": "n",
    "ipa": "/lei/",
    "example": "The manager discussed the lay at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-558",
    "term": "leak",
    "meaning": "lỗ thủng, lỗ rò, khe hở",
    "partOfSpeech": "n",
    "ipa": "/li:k/",
    "example": "The manager discussed the leak at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-559",
    "term": "lean",
    "meaning": "độ nghiêng, độ dốc",
    "partOfSpeech": "n",
    "ipa": "/li:n/",
    "example": "The manager discussed the lean at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-560",
    "term": "lease",
    "meaning": "hợp đồng cho thuê (bất động sản)",
    "partOfSpeech": "n",
    "ipa": "/li:s/",
    "example": "The manager discussed the lease before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-561",
    "term": "leisure",
    "meaning": "thì giờ rỗi rãi, lúc thư nhàn",
    "partOfSpeech": "n",
    "ipa": "/ˈliʒər , ˈlɛʒər/",
    "example": "The manager discussed the leisure before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-562",
    "term": "lend",
    "meaning": "cho vay, cho mượn",
    "partOfSpeech": "v",
    "ipa": "/lend/",
    "example": "The team will lend the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-563",
    "term": "liability",
    "meaning": "trách nhiệm pháp lý, nghĩa vụ pháp lý",
    "partOfSpeech": "n",
    "ipa": "/,laiə'biliti/",
    "example": "The manager discussed the liability during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-564",
    "term": "license",
    "meaning": "bản quyền",
    "partOfSpeech": "n",
    "ipa": "/lái:sn/",
    "example": "The manager discussed the license before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-565",
    "term": "licensing",
    "meaning": "sự cấp giấy phép",
    "partOfSpeech": "n",
    "ipa": "/ˈlaɪ.sən.sɪŋ/",
    "example": "The manager discussed the licensing during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-566",
    "term": "lie",
    "meaning": "sự nói dối, sự nói láo, sự nói điêu, sự dối trá",
    "partOfSpeech": "n",
    "ipa": "/lai/",
    "example": "The manager discussed the lie at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-567",
    "term": "limited",
    "meaning": "hạn chế, có giới hạn",
    "partOfSpeech": "adj",
    "ipa": "/ˈlɪmɪtɪd/",
    "example": "The company selected an limited option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-568",
    "term": "limousine",
    "meaning": "xe hơi",
    "partOfSpeech": "n",
    "ipa": "/´limə¸zi:n/",
    "example": "The manager discussed the limousine during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-569",
    "term": "list",
    "meaning": "danh sách, sổ, bản kê khai",
    "partOfSpeech": "n",
    "ipa": "/list/",
    "example": "The manager discussed the list at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-570",
    "term": "livestock",
    "meaning": "vật nuôi, thú nuôi",
    "partOfSpeech": "n",
    "ipa": "/´laiv¸stɔk/",
    "example": "The manager discussed the livestock during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-571",
    "term": "loan",
    "meaning": "sự vay nợ",
    "partOfSpeech": "n",
    "ipa": "/ləʊn/",
    "example": "The manager discussed the loan at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-572",
    "term": "lobby",
    "meaning": "hành lang",
    "partOfSpeech": "n",
    "ipa": "/lɒb.i/",
    "example": "The manager discussed the lobby before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-573",
    "term": "local",
    "meaning": "địa phương",
    "partOfSpeech": "adj",
    "ipa": "/'ləʊk(ə)l/",
    "example": "The company selected an local option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-574",
    "term": "locate",
    "meaning": "trụ sở ở, nằm ở",
    "partOfSpeech": "v",
    "ipa": "/loʊˈkeɪt/",
    "example": "The team will locate the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-575",
    "term": "log on",
    "meaning": "kết nối với hệ thống",
    "partOfSpeech": "v",
    "ipa": "/lɔg/",
    "example": "The team will log on the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-576",
    "term": "log",
    "meaning": "khúc gỗ mới đốn hạ",
    "partOfSpeech": "n",
    "ipa": "/lɔg/",
    "example": "The manager discussed the log at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-577",
    "term": "loyal",
    "meaning": "trung thành, trung nghĩa, trung kiên",
    "partOfSpeech": "adj",
    "ipa": "/'lɔiəl/",
    "example": "The company selected an loyal option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-578",
    "term": "luggage",
    "meaning": "hành lý",
    "partOfSpeech": "n",
    "ipa": "/'lʌgiʤ/",
    "example": "The manager discussed the luggage before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-579",
    "term": "luxurious",
    "meaning": "sang trọng, lộng lẫy; xa hoa",
    "partOfSpeech": "adj",
    "ipa": "/lʌg´zjuəriəs/",
    "example": "The company selected an luxurious option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-580",
    "term": "luxury",
    "meaning": "sự xa xỉ, sự xa hoa",
    "partOfSpeech": "n",
    "ipa": "/lʌk.ʃər.i/",
    "example": "The manager discussed the luxury in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-581",
    "term": "maintain",
    "meaning": "giữ gìn, duy trì; bảo vệ",
    "partOfSpeech": "v",
    "ipa": "/mein´tein/",
    "example": "The team will maintain the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-582",
    "term": "maintenance",
    "meaning": "sự giữ gìn, sự duy trì; sự bảo vệ",
    "partOfSpeech": "n",
    "ipa": "/´meintənəns/",
    "example": "The manager discussed the maintenance at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-583",
    "term": "major",
    "meaning": "chuyên đề",
    "partOfSpeech": "n",
    "ipa": "/ˈmeɪdʒər/",
    "example": "The manager discussed the major in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-584",
    "term": "manage",
    "meaning": "quản lý",
    "partOfSpeech": "v",
    "ipa": "/'mænɪʤ/",
    "example": "The team will manage the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-585",
    "term": "managerial",
    "meaning": "(thuộc) người quản lý, (thuộc) giám đốc",
    "partOfSpeech": "adj",
    "ipa": "/¸mæni´dʒiəriəl/",
    "example": "The company selected an managerial option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-586",
    "term": "mandatory",
    "meaning": "có tính cách bắt buộc",
    "partOfSpeech": "adj",
    "ipa": "/'mændətəri/",
    "example": "The company selected an mandatory option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-587",
    "term": "manufacture",
    "meaning": "sự chế tạo, sự sản xuất",
    "partOfSpeech": "n",
    "ipa": "/,mænju'fæktʃə/",
    "example": "The manager discussed the manufacture before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-588",
    "term": "manufacturing",
    "meaning": "sự sản xuất; sự chế tạo; sự gia công",
    "partOfSpeech": "n",
    "ipa": "/¸mænju´fæktʃəriη/",
    "example": "The manager discussed the manufacturing before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-589",
    "term": "marketing",
    "meaning": "tiếp thị",
    "partOfSpeech": "n",
    "ipa": "/'mɑ:kitiɳ/",
    "example": "The manager discussed the marketing before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-590",
    "term": "mechanic",
    "meaning": "thợ máy, công nhân cơ khí",
    "partOfSpeech": "n",
    "ipa": "/məˈkænɪk/",
    "example": "The manager discussed the mechanic during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-591",
    "term": "medical",
    "meaning": "(thuộc) y học",
    "partOfSpeech": "adj",
    "ipa": "/'medikə/",
    "example": "The company selected an medical option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-592",
    "term": "medication",
    "meaning": "sự bốc thuốc, sự cho thuốc",
    "partOfSpeech": "n",
    "ipa": "/ˌmɛdɪˈkeɪʃən/",
    "example": "The manager discussed the medication at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-593",
    "term": "medicine",
    "meaning": "y học",
    "partOfSpeech": "n",
    "ipa": "/'medisn/",
    "example": "The manager discussed the medicine during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-594",
    "term": "meeting",
    "meaning": "(chính trị) cuộc mít tinh, cuộc biểu tình",
    "partOfSpeech": "n",
    "ipa": "/'mi:tiɳ/",
    "example": "The manager discussed the meeting before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-595",
    "term": "membership",
    "meaning": "tư cách hội viên, địa vị hội viên",
    "partOfSpeech": "n",
    "ipa": "/'membəʃip/",
    "example": "The manager discussed the membership before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-596",
    "term": "memorandum",
    "meaning": "bản ghi nhớ",
    "partOfSpeech": "n",
    "ipa": "/¸memə´rændəm/",
    "example": "The manager discussed the memorandum before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-597",
    "term": "mention",
    "meaning": "sự kể ra, sự nói đến, sự đề cập",
    "partOfSpeech": "n",
    "ipa": "/'menʃn/",
    "example": "The manager discussed the mention with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-598",
    "term": "merchandise",
    "meaning": "hàng hóa",
    "partOfSpeech": "n",
    "ipa": "/´mə:tʃən¸daiz/",
    "example": "The manager discussed the merchandise at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-599",
    "term": "mere",
    "meaning": "ao hồ",
    "partOfSpeech": "n",
    "ipa": "/miə/",
    "example": "The manager discussed the mere before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-600",
    "term": "merge",
    "meaning": "hoà vào; kết hợp; hợp nhất",
    "partOfSpeech": "v",
    "ipa": "/mə:dʤ/",
    "example": "The team will merge the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-601",
    "term": "merger",
    "meaning": "sự liên doanh liên kết",
    "partOfSpeech": "n",
    "ipa": "/´mə:dʒə/",
    "example": "The manager discussed the merger before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-602",
    "term": "mileage",
    "meaning": "tổng số dặm đã đi được",
    "partOfSpeech": "n",
    "ipa": "/´mailidʒ/",
    "example": "The manager discussed the mileage with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-603",
    "term": "million",
    "meaning": "một triệu",
    "partOfSpeech": "n",
    "ipa": "/´miljən/",
    "example": "The manager discussed the million with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-604",
    "term": "mimic",
    "meaning": "giả; bắt chước",
    "partOfSpeech": "adj",
    "ipa": "/´mimik/",
    "example": "The company selected an mimic option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-605",
    "term": "mishear",
    "meaning": "nghe lầm",
    "partOfSpeech": "v",
    "ipa": "/¸mis´hiə/",
    "example": "The team will mishear the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-606",
    "term": "misleading",
    "meaning": "làm cho lạc đường, làm cho lạc lối",
    "partOfSpeech": "adj",
    "ipa": "/mis´li:diη/",
    "example": "The company selected an misleading option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-607",
    "term": "misrepresent",
    "meaning": "trình bày sai, miêu tả sai",
    "partOfSpeech": "v",
    "ipa": "/¸misrepri´zent/",
    "example": "The team will misrepresent the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-608",
    "term": "monitor",
    "meaning": "lớp trưởng, cán bộ lớp (ở trường học)",
    "partOfSpeech": "n",
    "ipa": "/'mɔnitə/",
    "example": "The manager discussed the monitor with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-609",
    "term": "monument",
    "meaning": "vật kỷ niệm, đài kỷ niệm, bia kỷ niệm",
    "partOfSpeech": "n",
    "ipa": "/'mɔnjumənt/",
    "example": "The manager discussed the monument during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-610",
    "term": "moral",
    "meaning": "(thuộc) đạo đức, phẩm hạnh tinh thần bài học, lời răn dạy",
    "partOfSpeech": "adj",
    "ipa": "/ˈmɔːr.əl/",
    "example": "The company selected an moral option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-611",
    "term": "mortgage",
    "meaning": "cầm cố, thế chấp",
    "partOfSpeech": "n",
    "ipa": "/'mɔ:gidʤ/",
    "example": "The manager discussed the mortgage during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-612",
    "term": "motivate",
    "meaning": "thúc đẩy, làm động cơ thúc đẩy",
    "partOfSpeech": "v",
    "ipa": "/´mouti¸veit/",
    "example": "The team will motivate the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-613",
    "term": "motivation",
    "meaning": "sự thúc đẩy, động cơ thúc đẩy",
    "partOfSpeech": "n",
    "ipa": "/,mouti'veiʃn/",
    "example": "The manager discussed the motivation at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-614",
    "term": "napkin",
    "meaning": "khăn ăn",
    "partOfSpeech": "n",
    "ipa": "/'næpkin/",
    "example": "The manager discussed the napkin with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-615",
    "term": "narrow",
    "meaning": "hẹp, chật hẹp, eo hẹp",
    "partOfSpeech": "adj",
    "ipa": "/'nærou/",
    "example": "The company selected an narrow option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-616",
    "term": "narrowing",
    "meaning": "sự thu hẹp, sự co hẹp",
    "partOfSpeech": "n",
    "ipa": "/'nærouwiŋ/",
    "example": "The manager discussed the narrowing at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-617",
    "term": "neighborhood",
    "meaning": "hàng xóm",
    "partOfSpeech": "n",
    "ipa": "/ˈneɪbərˌhʊd/",
    "example": "The manager discussed the neighborhood in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-618",
    "term": "network",
    "meaning": "lưới, đồ dùng kiểu lưới",
    "partOfSpeech": "n",
    "ipa": "/'netwə:k/",
    "example": "The manager discussed the network during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-619",
    "term": "nominate",
    "meaning": "chỉ định, chọn, bổ nhiệm",
    "partOfSpeech": "v",
    "ipa": "/'nɔmineit/",
    "example": "The team will nominate the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-620",
    "term": "nomination",
    "meaning": "sự chỉ định, sự bổ nhiệm",
    "partOfSpeech": "n",
    "ipa": "/,nɔmi'neiʃn/",
    "example": "The manager discussed the nomination at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-621",
    "term": "notice",
    "meaning": "thông tri, yết thị, thông báo",
    "partOfSpeech": "n",
    "ipa": "/'nəƱtis/",
    "example": "The manager discussed the notice with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-622",
    "term": "notify",
    "meaning": "báo, khai báo; thông báo",
    "partOfSpeech": "v",
    "ipa": "/nəʊ.tɪ.faɪ/",
    "example": "The team will notify the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-623",
    "term": "objection",
    "meaning": "sự phản đối, sự chống đối",
    "partOfSpeech": "n",
    "ipa": "/əb'ʤekʃn/",
    "example": "The manager discussed the objection at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-624",
    "term": "objective",
    "meaning": "khách quan",
    "partOfSpeech": "adj",
    "ipa": "/əb´dʒektiv/",
    "example": "The company selected an objective option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-625",
    "term": "obligation",
    "meaning": "nghĩa vụ; bổn phận",
    "partOfSpeech": "n",
    "ipa": "/,ɔbli'geiʃn/",
    "example": "The manager discussed the obligation before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-626",
    "term": "oblige",
    "meaning": "bắt buộc, cưỡng bách; đặt nghĩa vụ cho",
    "partOfSpeech": "v",
    "ipa": "/ə'blaiʤ/",
    "example": "The team will oblige the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-627",
    "term": "obtain",
    "meaning": "đạt được, giành được, thu được",
    "partOfSpeech": "v",
    "ipa": "/əb'teɪn/",
    "example": "The team will obtain the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-628",
    "term": "obviously",
    "meaning": "một cách rõ ràng; có thể thấy được",
    "partOfSpeech": "adv",
    "ipa": "/'ɔbviəsli/",
    "example": "The team will obviously the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-629",
    "term": "occupation",
    "meaning": "sự chiếm giữ, sự chiếm đóng",
    "partOfSpeech": "n",
    "ipa": "/,ɔkju'peiʃn/",
    "example": "The manager discussed the occupation before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-630",
    "term": "occur",
    "meaning": "xảy ra, xảy đến, xuất hiện, tìm thấy",
    "partOfSpeech": "v",
    "ipa": "/ə'kə:/",
    "example": "The team will occur the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-631",
    "term": "officer",
    "meaning": "sĩ quan",
    "partOfSpeech": "n",
    "ipa": "/´ɔfisə/",
    "example": "The manager discussed the officer before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-632",
    "term": "official",
    "meaning": "(thuộc) chính quyền; (thuộc) văn phòng",
    "partOfSpeech": "adj",
    "ipa": "/ə'fiʃəl/",
    "example": "The company selected an official option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-633",
    "term": "onward",
    "meaning": "về phía trước, tiến lên, hướng tới",
    "partOfSpeech": "adj",
    "ipa": "/'ɔnwəd/",
    "example": "The company selected an onward option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-634",
    "term": "operate",
    "meaning": "hoạt động; đang làm việc, thi hành (máy...)",
    "partOfSpeech": "v",
    "ipa": "/'ɔpəreit/",
    "example": "The team will operate the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-635",
    "term": "operation",
    "meaning": "sự hoạt động; quá trình hoạt động",
    "partOfSpeech": "n",
    "ipa": "/,ɔpə'reiʃn/",
    "example": "The manager discussed the operation at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-636",
    "term": "opinion",
    "meaning": "ý kiến, quan điểm",
    "partOfSpeech": "n",
    "ipa": "/ə'pinjən/",
    "example": "The manager discussed the opinion before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-637",
    "term": "opportunity",
    "meaning": "cơ hội, thời cơ, dịp may",
    "partOfSpeech": "n",
    "ipa": "/ɒpərˈtyunɪti/",
    "example": "The manager discussed the opportunity in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-638",
    "term": "optimistic",
    "meaning": "lạc quan, yêu đời",
    "partOfSpeech": "adj",
    "ipa": "/¸ɔpti´mistik/",
    "example": "The company selected an optimistic option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-639",
    "term": "order",
    "meaning": "thứ, bậc, ngôi, hàng, cấp, loại, giai cấp",
    "partOfSpeech": "n",
    "ipa": "/'ɔ:də/",
    "example": "The manager discussed the order with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-640",
    "term": "organization",
    "meaning": "sự tổ chức, sự cấu tạo",
    "partOfSpeech": "n",
    "ipa": "/,ɔ:gənai'zeiʃn/",
    "example": "The manager discussed the organization before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-641",
    "term": "organize",
    "meaning": "tổ chức, cấu tạo, thiết lập",
    "partOfSpeech": "v",
    "ipa": "/´ɔ:gə¸naiz/",
    "example": "The team will organize the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-642",
    "term": "organized",
    "meaning": "có trật tự, ngăn nắp, hữu hiệu",
    "partOfSpeech": "adj",
    "ipa": "/ˈɔːr.ɡən.aɪzd/",
    "example": "The company selected an organized option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-643",
    "term": "outline",
    "meaning": "nét phác thảo, đề cương; sự vạch ra những nét chính",
    "partOfSpeech": "n",
    "ipa": "/´aut¸lain/",
    "example": "The manager discussed the outline before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-644",
    "term": "outlook",
    "meaning": "quang cảnh, viễn cảnh",
    "partOfSpeech": "n",
    "ipa": "/´aut¸luk/",
    "example": "The manager discussed the outlook before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-645",
    "term": "outstanding",
    "meaning": "nổi bật, đáng chú ý; nổi tiếng, vượt trội",
    "partOfSpeech": "adj",
    "ipa": "/¸aut´stændiη/",
    "example": "The company selected an outstanding option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-646",
    "term": "overall",
    "meaning": "toàn bộ, toàn thể, bao gồm mọi thứ",
    "partOfSpeech": "adj",
    "ipa": "/ˈoʊvərˌɔl/",
    "example": "The company selected an overall option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-647",
    "term": "overdraft",
    "meaning": "số tiền chi trội; số tiền rút quá số tiền gửi",
    "partOfSpeech": "n",
    "ipa": "/´ouvə¸dra:ft/",
    "example": "The manager discussed the overdraft at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-648",
    "term": "overtime",
    "meaning": "quá giờ, ngoài giờ (quy định)",
    "partOfSpeech": "adj",
    "ipa": "/´ouvətaim/",
    "example": "The company selected an overtime option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-649",
    "term": "overview",
    "meaning": "sự khái quát; miêu tả chung, ngắn gọn",
    "partOfSpeech": "n",
    "ipa": "/´ouvə¸vju:/",
    "example": "The manager discussed the overview at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-650",
    "term": "owe",
    "meaning": "nợ, hàm ơn",
    "partOfSpeech": "v",
    "ipa": "/ou/",
    "example": "The team will owe the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-651",
    "term": "package",
    "meaning": "đóng gói, đóng kiện, xếp vào bao bì",
    "partOfSpeech": "v",
    "ipa": "/pæk.ɪdʒ/",
    "example": "The team will package the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-652",
    "term": "package",
    "meaning": "gói đồ, bưu kiện; hộp để đóng hàng, thùng hàng",
    "partOfSpeech": "n",
    "ipa": "/pæk.ɪdʒ/",
    "example": "The manager discussed the package at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-653",
    "term": "parcel",
    "meaning": "gói; bưu kiện",
    "partOfSpeech": "n",
    "ipa": "/'pɑ:s(ə)l/",
    "example": "The manager discussed the parcel before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-654",
    "term": "parking",
    "meaning": "bãi đỗ xe",
    "partOfSpeech": "n",
    "ipa": "/ˈpɑːr.kɪŋ/",
    "example": "The manager discussed the parking at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-655",
    "term": "participant",
    "meaning": "người tham gia, người tham dự",
    "partOfSpeech": "n",
    "ipa": "/pa:´tisipənt/",
    "example": "The manager discussed the participant before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-656",
    "term": "particularly",
    "meaning": "đặc biệt, đặc thù; cá biệt, riêng biệt",
    "partOfSpeech": "adv",
    "ipa": "/pə´tikjuləli/",
    "example": "The team will particularly the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-657",
    "term": "passenger",
    "meaning": "hành khách (đi tàu xe...)",
    "partOfSpeech": "n",
    "ipa": "/'pæsindʤə/",
    "example": "The manager discussed the passenger before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-658",
    "term": "patent",
    "meaning": "tài tình, khéo léo, tinh xảo",
    "partOfSpeech": "adj",
    "ipa": "/'peitənt/",
    "example": "The company selected an patent option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-659",
    "term": "patented",
    "meaning": "đã có bằng sáng chế, môn bài",
    "partOfSpeech": "adj",
    "ipa": "/ˈpeɪtəntɪd, ˈpætəntɪd/",
    "example": "The company selected an patented option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-660",
    "term": "patience",
    "meaning": "tính kiên nhẫn, tính nhẫn nại; sự bền chí",
    "partOfSpeech": "n",
    "ipa": "/´peiʃəns/",
    "example": "The manager discussed the patience at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-661",
    "term": "payment",
    "meaning": "sự trả tiền, số tiền trả; sự bồi thường, tiền bồi thường",
    "partOfSpeech": "n",
    "ipa": "/'peim(ə)nt/",
    "example": "The manager discussed the payment in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-662",
    "term": "perform",
    "meaning": "biểu diễn, trình diễn (kịch, điệu nhảy...); đóng",
    "partOfSpeech": "v",
    "ipa": "/pə´fɔ:m/",
    "example": "The team will perform the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-663",
    "term": "performance",
    "meaning": "sự biểu diễn, việc đóng (phim, kịch...); cuộc biểu diễn",
    "partOfSpeech": "n",
    "ipa": "/pə'fɔ:məns/",
    "example": "The manager discussed the performance before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-664",
    "term": "permanent",
    "meaning": "lâu dài, vĩnh cửu; thường xuyên",
    "partOfSpeech": "adj",
    "ipa": "/'pə:mənənt/",
    "example": "The company selected an permanent option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-665",
    "term": "permission",
    "meaning": "sự cho phép, sự chấp nhận; giấy phép",
    "partOfSpeech": "n",
    "ipa": "/pə'miʃn/",
    "example": "The manager discussed the permission in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-666",
    "term": "permit",
    "meaning": "cho phép, cho cơ hội; thừa nhận",
    "partOfSpeech": "v",
    "ipa": "/'pər'mɪt/",
    "example": "The team will permit the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-667",
    "term": "personal",
    "meaning": "cá nhân, tư, riêng",
    "partOfSpeech": "adj",
    "ipa": "/'pə:snl/",
    "example": "The company selected an personal option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-668",
    "term": "personalized",
    "meaning": "cá nhân hoá",
    "partOfSpeech": "v",
    "ipa": "/´pə:sənə¸laiz/",
    "example": "The team will personalized the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-669",
    "term": "personnel",
    "meaning": "nhân viên, công chức (cơ quan, nhà máy...)",
    "partOfSpeech": "n",
    "ipa": "/¸pə:sə´nel/",
    "example": "The manager discussed the personnel with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-670",
    "term": "persuade",
    "meaning": "thuyết phục",
    "partOfSpeech": "v",
    "ipa": "/pə'sweid/",
    "example": "The team will persuade the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-671",
    "term": "pessimistic",
    "meaning": "bi quan, yếm thế",
    "partOfSpeech": "adj",
    "ipa": "/¸pesi´mistik/",
    "example": "The company selected an pessimistic option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-672",
    "term": "plant",
    "meaning": "thực vật",
    "partOfSpeech": "n",
    "ipa": "/plænt , plɑnt/",
    "example": "The manager discussed the plant during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-673",
    "term": "platform",
    "meaning": "nền, bục, bệ",
    "partOfSpeech": "n",
    "ipa": "/'plætfɔ:m/",
    "example": "The manager discussed the platform at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-674",
    "term": "pleasant",
    "meaning": "vui vẻ, dễ thương (người...)",
    "partOfSpeech": "adj",
    "ipa": "/'plezənt/",
    "example": "The company selected an pleasant option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-675",
    "term": "plow",
    "meaning": "cái cày; công cụ giống như cái cày",
    "partOfSpeech": "n",
    "ipa": "/plau/",
    "example": "The manager discussed the plow with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-676",
    "term": "plug",
    "meaning": "phích cắm; ổ cắm điện",
    "partOfSpeech": "n",
    "ipa": "/plʌg/",
    "example": "The manager discussed the plug with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-677",
    "term": "plumber",
    "meaning": "thợ hàn chì, thợ ống nước",
    "partOfSpeech": "n",
    "ipa": "/´plʌmə/",
    "example": "The manager discussed the plumber at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-678",
    "term": "point",
    "meaning": "điểm",
    "partOfSpeech": "n",
    "ipa": "/pɔint/",
    "example": "The manager discussed the point during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-679",
    "term": "pointless",
    "meaning": "vô nghĩa, không ý vị, lạc lõng",
    "partOfSpeech": "adj",
    "ipa": "/´pɔintlis/",
    "example": "The company selected an pointless option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-680",
    "term": "policy",
    "meaning": "chính sách (của chính phủ, đảng...)",
    "partOfSpeech": "n",
    "ipa": "/pɔlisi/",
    "example": "The manager discussed the policy before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-681",
    "term": "polite",
    "meaning": "lễ phép, có lễ độ; lịch sự, lịch thiệp",
    "partOfSpeech": "adj",
    "ipa": "/pəˈlaɪt/",
    "example": "The company selected an polite option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-682",
    "term": "politician",
    "meaning": "nhà chính trị; chính khách",
    "partOfSpeech": "n",
    "ipa": "/,pɒlə'tɪʃn/",
    "example": "The manager discussed the politician in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-683",
    "term": "politics",
    "meaning": "hoạt động chính trị, công việc chính trị",
    "partOfSpeech": "n",
    "ipa": "/'pɔlitiks/",
    "example": "The manager discussed the politics at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-684",
    "term": "poll",
    "meaning": "sự bầu cử; số phiếu bầu",
    "partOfSpeech": "n",
    "ipa": "/poul/",
    "example": "The manager discussed the poll with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-685",
    "term": "pollute",
    "meaning": "làm ô nhiễm, làm nhơ bẩn (nước...)",
    "partOfSpeech": "v",
    "ipa": "/pəˈlut/",
    "example": "The team will pollute the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-686",
    "term": "popular",
    "meaning": "được nhiều người ưa chuộng, được nhiều người ngưỡng mộ",
    "partOfSpeech": "adj",
    "ipa": "/ˈpɑːpjələr/",
    "example": "The company selected an popular option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-687",
    "term": "popularity",
    "meaning": "tính đại chúng; tính phổ biến",
    "partOfSpeech": "n",
    "ipa": "/ˌpɒpyəˈlærɪti/",
    "example": "The manager discussed the popularity in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-688",
    "term": "position",
    "meaning": "vị trí, chỗ (của một vật gì)",
    "partOfSpeech": "n",
    "ipa": "/pəˈzɪʃən/",
    "example": "The manager discussed the position at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-689",
    "term": "postpone",
    "meaning": "hoãn lại, trì hoãn",
    "partOfSpeech": "v",
    "ipa": "/pəʊst pəʊn/",
    "example": "The team will postpone the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-690",
    "term": "postponement",
    "meaning": "sự trì hoãn; trường hợp bị trì hoãn",
    "partOfSpeech": "n",
    "ipa": "/poust´pounmənt/",
    "example": "The manager discussed the postponement with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-691",
    "term": "potential",
    "meaning": "tiềm năng; tiềm tàng",
    "partOfSpeech": "adj",
    "ipa": "/pəˈtenʃl/",
    "example": "The company selected an potential option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-692",
    "term": "power",
    "meaning": "khả năng; tài năng, năng lực",
    "partOfSpeech": "n",
    "ipa": "/ˈpauə(r)/",
    "example": "The manager discussed the power during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-693",
    "term": "practical",
    "meaning": "thực hành (đối với lý thuyết)",
    "partOfSpeech": "adj",
    "ipa": "/ˈpræktɪkəl/",
    "example": "The company selected an practical option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-694",
    "term": "practically",
    "meaning": "về mặt thực hành (đối với lý thuyết)",
    "partOfSpeech": "adv",
    "ipa": "/´præktikəli/",
    "example": "The team will practically the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-695",
    "term": "predict",
    "meaning": "nói trước, tiên đoán, dự đoán",
    "partOfSpeech": "v",
    "ipa": "/pri'dikt/",
    "example": "The team will predict the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-696",
    "term": "predictable",
    "meaning": "có thể đoán trước, có thể dự đoán, dự báo",
    "partOfSpeech": "adj",
    "ipa": "/pri'diktəbl/",
    "example": "The company selected an predictable option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-697",
    "term": "prefer",
    "meaning": "thích hơn, ưa hơn",
    "partOfSpeech": "v",
    "ipa": "/pri'fə:/",
    "example": "The team will prefer the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-698",
    "term": "preference",
    "meaning": "sở thích; sự thích hơn, sự ưa hơn",
    "partOfSpeech": "n",
    "ipa": "/'prefərəns/",
    "example": "The manager discussed the preference in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-699",
    "term": "premises",
    "meaning": "biệt thự 700 present n prezənt hiện tại, hiện thời, hiện giờ, hiện nay",
    "partOfSpeech": "n",
    "ipa": "/'premis/",
    "example": "The manager discussed the premises at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-700",
    "term": "present",
    "partOfSpeech": "n",
    "ipa": "/ˈprez.ənt/",
    "meaning": "hiện tại; quà tặng",
    "example": "The manager discussed the present at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-701",
    "term": "press",
    "meaning": "sự ép, sự nén, sự bóp, sự ấn",
    "partOfSpeech": "n",
    "ipa": "/pres/",
    "example": "The manager discussed the press during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-702",
    "term": "prevent",
    "meaning": "ngăn cản; ngăn chặn, ngăn ngừa",
    "partOfSpeech": "v",
    "ipa": "/pri'vent/",
    "example": "The team will prevent the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-703",
    "term": "prevention",
    "meaning": "sự ngăn cản, sự ngăn trở",
    "partOfSpeech": "n",
    "ipa": "/pri'ven∫n/",
    "example": "The manager discussed the prevention in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-704",
    "term": "priceless",
    "meaning": "vô giá; không định giá được",
    "partOfSpeech": "adj",
    "ipa": "/ˈpraɪslɪs/",
    "example": "The company selected an priceless option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-705",
    "term": "principle",
    "meaning": "gốc, nguồn gốc, yếu tố cơ bản",
    "partOfSpeech": "n",
    "ipa": "/ˈprɪntsɪpl/",
    "example": "The manager discussed the principle before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-706",
    "term": "priority",
    "meaning": "sự ưu thế (về cấp bậc); quyền ưu tiên",
    "partOfSpeech": "n",
    "ipa": "/prai´ɔriti/",
    "example": "The manager discussed the priority at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-707",
    "term": "private",
    "meaning": "riêng, tư, cá nhân",
    "partOfSpeech": "adj",
    "ipa": "/ˈpraɪvɪt/",
    "example": "The company selected an private option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-708",
    "term": "probability",
    "meaning": "sự có thể có, khả năng có thể xảy ra",
    "partOfSpeech": "n",
    "ipa": "/ˌprɒbəˈbɪlɪti/",
    "example": "The manager discussed the probability before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-709",
    "term": "probably",
    "meaning": "có khả năng, có lẽ, có thể",
    "partOfSpeech": "adv",
    "ipa": "/´prɔbəbli/",
    "example": "The team will probably the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-710",
    "term": "probationary",
    "meaning": "đang trong thời gian thử thách",
    "partOfSpeech": "adj",
    "ipa": "/prə´beiʃənəri/",
    "example": "The company selected an probationary option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-711",
    "term": "process",
    "meaning": "quá trình, sự tiến triển",
    "partOfSpeech": "n",
    "ipa": "/'prouses/",
    "example": "The manager discussed the process at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-712",
    "term": "profession",
    "meaning": "nghề, nghề nghiệp",
    "partOfSpeech": "n",
    "ipa": "/prə´feʃ(ə)n/",
    "example": "The manager discussed the profession in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-713",
    "term": "professional",
    "meaning": "(thuộc) nghề, (thuộc) nghề nghiệp; có tay nghề",
    "partOfSpeech": "adj",
    "ipa": "/prə'feʃənl/",
    "example": "The company selected an professional option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-714",
    "term": "profile",
    "meaning": "tiểu sử sơ lược; mô tả sơ lược",
    "partOfSpeech": "n",
    "ipa": "/´proufail/",
    "example": "The manager discussed the profile at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-715",
    "term": "profit",
    "meaning": "thuận lợi; lợi ích, bổ ích",
    "partOfSpeech": "n",
    "ipa": "/ˈprɒfɪt/",
    "example": "The manager discussed the profit in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-716",
    "term": "profitability",
    "meaning": "sự có lợi, sự có ích; sự thuận lợi",
    "partOfSpeech": "n",
    "ipa": "/'prɔfitə'biləti/",
    "example": "The manager discussed the profitability in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-717",
    "term": "profitable",
    "meaning": "có lợi, có ích; thuận lợi",
    "partOfSpeech": "adj",
    "ipa": "/´prɑ:fɪtəbl/",
    "example": "The company selected an profitable option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-718",
    "term": "progressive",
    "meaning": "tiến lên, tiến tới",
    "partOfSpeech": "adj",
    "ipa": "/prəˈgrɛsɪv/",
    "example": "The company selected an progressive option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-719",
    "term": "prohibit",
    "meaning": "cấm, ngăn cấm",
    "partOfSpeech": "v",
    "ipa": "/proʊ'hɪbɪt/",
    "example": "The team will prohibit the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-720",
    "term": "project",
    "meaning": "đề án, dự án; kế hoạch",
    "partOfSpeech": "n",
    "ipa": "/ˈprɒdʒɛkt/",
    "example": "The manager discussed the project at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-721",
    "term": "promote",
    "meaning": "thăng chức, thăng cấp; đề bạt",
    "partOfSpeech": "v",
    "ipa": "/prəˈmoʊt/",
    "example": "The team will promote the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-722",
    "term": "promotion",
    "meaning": "sự thăng chức, sự đề bạt",
    "partOfSpeech": "n",
    "ipa": "/prə'mou∫n/",
    "example": "The manager discussed the promotion before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-723",
    "term": "promptly",
    "meaning": "mau lẹ, nhanh chóng; ngay lập tức",
    "partOfSpeech": "adv",
    "ipa": "/´prɔmptli/",
    "example": "The team will promptly the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-724",
    "term": "properly",
    "meaning": "đúng đắn, hợp thức, hợp lệ",
    "partOfSpeech": "adv",
    "ipa": "/´prɔpəli/",
    "example": "The team will properly the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-725",
    "term": "property",
    "meaning": "tài sản, của cải, vật sở hữu, người giàu có",
    "partOfSpeech": "n",
    "ipa": "/'prɔpəti/",
    "example": "The manager discussed the property at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-726",
    "term": "protect",
    "meaning": "bảo vệ, bảo hộ, che chở",
    "partOfSpeech": "v",
    "ipa": "/prə'tekt/",
    "example": "The team will protect the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-727",
    "term": "protection",
    "meaning": "sự bảo vệ, sự bảo hộ, sự che chở",
    "partOfSpeech": "n",
    "ipa": "/prə'tek∫n/",
    "example": "The manager discussed the protection in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-728",
    "term": "publicity",
    "meaning": "sự công khai",
    "partOfSpeech": "n",
    "ipa": "/pʌb'lɪsətɪ /",
    "example": "The manager discussed the publicity before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-729",
    "term": "publicize",
    "meaning": "đưa ra công khai; làm cho thiên hạ biết đến",
    "partOfSpeech": "v",
    "ipa": "/´pʌbli¸saiz/",
    "example": "The team will publicize the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-730",
    "term": "purchase",
    "meaning": "sự mua, tậu; vật mua được, vật tậu được",
    "partOfSpeech": "n",
    "ipa": "/'pə:t∫əs/",
    "example": "The manager discussed the purchase at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-731",
    "term": "purpose",
    "meaning": "mục đích, ý định",
    "partOfSpeech": "n",
    "ipa": "/'pɜ:pəs/",
    "example": "The manager discussed the purpose at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-732",
    "term": "pursue",
    "meaning": "đuổi theo, đuổi bắt, truy nã, truy kích",
    "partOfSpeech": "v",
    "ipa": "/pə'sju:/",
    "example": "The team will pursue the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-733",
    "term": "qualification",
    "meaning": "phẩm chất, năng lực",
    "partOfSpeech": "n",
    "ipa": "/,kwalifi'keiSn/",
    "example": "The manager discussed the qualification before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-734",
    "term": "qualified",
    "meaning": "đủ tư cách, khả năng, điều kiện",
    "partOfSpeech": "adj",
    "ipa": "/ˈkwɒləˌfaɪd/",
    "example": "The company selected an qualified option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-735",
    "term": "qualify",
    "meaning": "đủ tư cách, khả năng, điều kiện",
    "partOfSpeech": "v",
    "ipa": "/'´kwɔli¸fai/",
    "example": "The team will qualify the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-736",
    "term": "questionnaire",
    "meaning": "bản câu hỏi (để điều tra, để thăm dò ý kiến)",
    "partOfSpeech": "n",
    "ipa": "/ˌkwɛstʃəˈnɛər/",
    "example": "The manager discussed the questionnaire before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-737",
    "term": "quotation",
    "meaning": "sự trích dẫn, sự được trích dẫn",
    "partOfSpeech": "n",
    "ipa": "/kwou'teiʃn/",
    "example": "The manager discussed the quotation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-738",
    "term": "quote",
    "meaning": "lời trích dẫn; đoạn trích dẫn",
    "partOfSpeech": "n",
    "ipa": "/kwout/",
    "example": "The manager discussed the quote before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-739",
    "term": "range",
    "meaning": "dãy, hàng",
    "partOfSpeech": "n",
    "ipa": "/reɪndʒ/",
    "example": "The manager discussed the range at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-740",
    "term": "rare",
    "meaning": "hiếm, hiếm có, ít có",
    "partOfSpeech": "adj",
    "ipa": "/reə/",
    "example": "The company selected an rare option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-741",
    "term": "rate",
    "meaning": "tỷ lệ",
    "partOfSpeech": "n",
    "ipa": "/reit/",
    "example": "The manager discussed the rate before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-742",
    "term": "rational",
    "meaning": "có lý trí, dựa trên lý trí",
    "partOfSpeech": "adj",
    "ipa": "/´ræʃənəl/",
    "example": "The company selected an rational option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-743",
    "term": "raw",
    "meaning": "sống, thô",
    "partOfSpeech": "adj",
    "ipa": "/rɔ:/",
    "example": "The company selected an raw option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-744",
    "term": "reach",
    "meaning": "sự chìa ra, sự trải ra",
    "partOfSpeech": "n",
    "ipa": "/ri:tʃ/",
    "example": "The manager discussed the reach at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-745",
    "term": "realize",
    "meaning": "thấy rõ, hiểu rõ, nhận thức rõ (việc gì...)",
    "partOfSpeech": "v",
    "ipa": "/'riəlaiz/",
    "example": "The team will realize the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-746",
    "term": "rearrange",
    "meaning": "sắp xếp lại, bố trí lại, sắp đặt lại",
    "partOfSpeech": "v",
    "ipa": "/'ri:ə'reindʤ/",
    "example": "The team will rearrange the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-747",
    "term": "reasonable",
    "meaning": "có lý, hợp lý",
    "partOfSpeech": "adj",
    "ipa": "/´ri:zənəbl/",
    "example": "The company selected an reasonable option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-748",
    "term": "reasonably",
    "meaning": "hợp lý",
    "partOfSpeech": "adv",
    "ipa": "/ˈriː.zən.ə.bli/",
    "example": "The team will reasonably the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-749",
    "term": "receipt",
    "meaning": "công thức (làm bánh, nấu món ăn...)",
    "partOfSpeech": "n",
    "ipa": "/ri´si:t/",
    "example": "The manager discussed the receipt before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-750",
    "term": "receive",
    "meaning": "nhận, lĩnh, thu",
    "partOfSpeech": "v",
    "ipa": "/ri'si:v/",
    "example": "The team will receive the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-751",
    "term": "recent",
    "meaning": "gần đây, xảy ra gần đây, mới đây",
    "partOfSpeech": "adj",
    "ipa": "/´ri:sənt/",
    "example": "The company selected an recent option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-752",
    "term": "reception",
    "meaning": "sự nhận, sự thu nhận, sự lĩnh",
    "partOfSpeech": "n",
    "ipa": "/ri'sep∫n/",
    "example": "The manager discussed the reception before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-753",
    "term": "receptive",
    "meaning": "dễ tiếp thu, dễ lĩnh hội",
    "partOfSpeech": "adj",
    "ipa": "/ri'septiv/",
    "example": "The company selected an receptive option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-754",
    "term": "recipe",
    "meaning": "công thức làm món ăn",
    "partOfSpeech": "n",
    "ipa": "/´resəpi/",
    "example": "The manager discussed the recipe at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-755",
    "term": "recognize",
    "meaning": "công nhận, thừa nhận, chấp nhận",
    "partOfSpeech": "v",
    "ipa": "/'rekəgnaiz/",
    "example": "The team will recognize the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-756",
    "term": "recommend",
    "meaning": "giới thiệu, tiến cử (người, vật...)",
    "partOfSpeech": "v",
    "ipa": "/rekə'mend/",
    "example": "The team will recommend the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-757",
    "term": "recommendation",
    "meaning": "sự giới thiệu, sự tiến cử",
    "partOfSpeech": "n",
    "ipa": "/¸rekəmen´deiʃən/",
    "example": "The manager discussed the recommendation at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-758",
    "term": "recruit",
    "meaning": "tuyển, chiêu mộ (lính mới); tìm thêm",
    "partOfSpeech": "v",
    "ipa": "/ri'kru:t/",
    "example": "The team will recruit the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-759",
    "term": "recruitment",
    "meaning": "sự tuyển mộ (lính), sự lấy thêm",
    "partOfSpeech": "n",
    "ipa": "/ ri'kru;tm(ə)nt/",
    "example": "The manager discussed the recruitment with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-760",
    "term": "reduce",
    "meaning": "thu nhỏ, làm giảm bớt",
    "partOfSpeech": "v",
    "ipa": "/ri'dju:s/",
    "example": "The team will reduce the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-761",
    "term": "reduction",
    "meaning": "sự thu nhỏ, sự giảm bớt",
    "partOfSpeech": "n",
    "ipa": "/ri´dʌkʃən/",
    "example": "The manager discussed the reduction before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-762",
    "term": "redundant",
    "meaning": "thừa, dư",
    "partOfSpeech": "adj",
    "ipa": "/ri'dʌndənt/",
    "example": "The company selected an redundant option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-763",
    "term": "refrigerator",
    "meaning": "tủ lạnh",
    "partOfSpeech": "n",
    "ipa": "/rɪˈfrɪdʒ.ər.eɪ.tər/",
    "example": "The manager discussed the refrigerator before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-764",
    "term": "refund",
    "meaning": "trả lại, sự trả lại",
    "partOfSpeech": "n, v",
    "ipa": "/ˈrifʌnd/",
    "example": "The team will refund the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-765",
    "term": "refundable",
    "meaning": "có thể được trả lại tiền 766 refusal n ri´fju:zl/ sự từ chối, sự khước từ; sự bị từ chối",
    "partOfSpeech": "adj",
    "ipa": "/ri´fʌndəbl/",
    "example": "The company selected an refundable option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-766",
    "term": "refusal",
    "partOfSpeech": "n",
    "ipa": "/rɪˈfjuː.zəl/",
    "meaning": "sự từ chối, sự khước từ",
    "example": "The manager discussed the refusal before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-767",
    "term": "refuse",
    "meaning": "từ chối, khước từ, cự tuyệt",
    "partOfSpeech": "v",
    "ipa": "/rɪˈfyuz/",
    "example": "The team will refuse the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-768",
    "term": "regarding",
    "meaning": "về ( ai/cái gì), về việc, đối với (vấn đề...)",
    "partOfSpeech": "n",
    "ipa": "/ri´ga:diη/",
    "example": "The manager discussed the regarding before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-769",
    "term": "regardless",
    "meaning": "bất chấp, không đếm xỉa tới, không chú ý tới",
    "partOfSpeech": "adv",
    "ipa": "/ri´ga:dlis/",
    "example": "The team will regardless the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-770",
    "term": "regional",
    "meaning": "(thuộc) vùng; địa phương",
    "partOfSpeech": "adj",
    "ipa": "/ˈridʒənl/",
    "example": "The company selected an regional option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-771",
    "term": "registration",
    "meaning": "sự đăng ký, sự ghi vào sổ",
    "partOfSpeech": "n",
    "ipa": "/,redʤis'treiʃn/",
    "example": "The manager discussed the registration before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-772",
    "term": "regret",
    "meaning": "hối tiếc; sự ân hận",
    "partOfSpeech": "n, v",
    "ipa": "/ri'gret/",
    "example": "The team will regret the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-773",
    "term": "regular",
    "meaning": "đều đặn, thường xuyên",
    "partOfSpeech": "adj",
    "ipa": "/ˈreɡ.jə.lɚ/",
    "example": "The company selected an regular option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-774",
    "term": "regularly",
    "meaning": "đều đặn, thường xuyên",
    "partOfSpeech": "adv",
    "ipa": "/´regjuləli/",
    "example": "The team will regularly the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-775",
    "term": "regulate",
    "meaning": "điều khiển",
    "partOfSpeech": "v",
    "ipa": "/ˈreɡ.jə.leɪt/",
    "example": "The team will regulate the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-776",
    "term": "reject",
    "meaning": "vật bị loại, vật bỏ đi, vật không được chọn",
    "partOfSpeech": "n, v",
    "ipa": "/'ri:ʤekt/",
    "example": "The team will reject the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-777",
    "term": "relax",
    "meaning": "thư giãn, nghỉ ngơi",
    "partOfSpeech": "v",
    "ipa": "/rɪˈlæks/",
    "example": "The team will relax the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-778",
    "term": "relaxation",
    "meaning": "sự dịu đi, sự bớt căng thẳng",
    "partOfSpeech": "n",
    "ipa": "/¸ri:læk´seiʃən/",
    "example": "The manager discussed the relaxation with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-779",
    "term": "release",
    "meaning": "thả ra, trả lại tự do",
    "partOfSpeech": "v",
    "ipa": "/rɪˈliːs/",
    "example": "The team will release the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-780",
    "term": "relevant",
    "meaning": "thích đáng, thích hợp; xác đáng",
    "partOfSpeech": "adj",
    "ipa": "/´reləvənt/",
    "example": "The company selected an relevant option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-781",
    "term": "remain",
    "meaning": "duy trì",
    "partOfSpeech": "v",
    "ipa": "/rɪˈmeɪn/",
    "example": "The team will remain the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-782",
    "term": "remarkable",
    "meaning": "đáng chú ý, đáng để ý",
    "partOfSpeech": "adj",
    "ipa": "/ri'ma:kəb(ə)l/",
    "example": "The company selected an remarkable option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-783",
    "term": "remind",
    "meaning": "nhắc lại, nhớ lại",
    "partOfSpeech": "v",
    "ipa": "/rɪˈmaɪnd/",
    "example": "The team will remind the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-784",
    "term": "reminder",
    "meaning": "vật làm nhớ lại, cái làm nhớ lại",
    "partOfSpeech": "n",
    "ipa": "/ri´maində/",
    "example": "The manager discussed the reminder in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-785",
    "term": "remittance",
    "meaning": "sự gửi tiền, sự gửi hàng",
    "partOfSpeech": "n",
    "ipa": "/ri´mitəns/",
    "example": "The manager discussed the remittance with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-786",
    "term": "remove",
    "meaning": "dời đi, di chuyển, dọn, cất dọn",
    "partOfSpeech": "v",
    "ipa": "/ri'mu:v/",
    "example": "The team will remove the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-787",
    "term": "remuneration",
    "meaning": "tiền thù lao, tiền trả công",
    "partOfSpeech": "n",
    "ipa": "/rɪˌmjuː.nəˈreɪ.ʃən/",
    "example": "The manager discussed the remuneration before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-788",
    "term": "renovate",
    "meaning": "nâng cấp, cải tiến, đổi mới, sửa chữa lại",
    "partOfSpeech": "v",
    "ipa": "/ˈrɛnəˌveɪt/",
    "example": "The team will renovate the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-789",
    "term": "renovation",
    "meaning": "sự nâng cấp, sự cải tiến",
    "partOfSpeech": "n",
    "ipa": "/ˌren.əˈveɪ.ʃən/",
    "example": "The manager discussed the renovation with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-790",
    "term": "rent",
    "meaning": "sự thuê mướn",
    "partOfSpeech": "n",
    "ipa": "/rent/",
    "example": "The manager discussed the rent before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-791",
    "term": "repair",
    "meaning": "sửa chữa, sửa đổi",
    "partOfSpeech": "v",
    "ipa": "/rɪˈper/",
    "example": "The team will repair the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-792",
    "term": "repayment",
    "meaning": "sự trả lại",
    "partOfSpeech": "n",
    "ipa": "/ri:´peimənt/",
    "example": "The manager discussed the repayment in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-793",
    "term": "repetitive",
    "meaning": "có đặc trưng lặp đi lặp lại",
    "partOfSpeech": "adj",
    "ipa": "/rɪˈpet̬.ə.t̬ɪv/",
    "example": "The company selected an repetitive option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-794",
    "term": "replace",
    "meaning": "thay thế, thay chỗ ai/cái gì",
    "partOfSpeech": "v",
    "ipa": "/rɪpleɪs/",
    "example": "The team will replace the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-795",
    "term": "replacement",
    "meaning": "sự thay thế, vật thay thế",
    "partOfSpeech": "n",
    "ipa": "/rɪˈpleɪs.mənt/",
    "example": "The manager discussed the replacement during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-796",
    "term": "report",
    "meaning": "bản báo cáo, bản tường thuật; biên bản",
    "partOfSpeech": "n",
    "ipa": "/ri'pɔ:t/",
    "example": "The manager discussed the report at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-797",
    "term": "represent",
    "meaning": "miêu tả, hình dung",
    "partOfSpeech": "v",
    "ipa": "/ˌrep.rɪˈzent/",
    "example": "The team will represent the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-798",
    "term": "representative",
    "meaning": "miêu tả, biểu hiện",
    "partOfSpeech": "adj",
    "ipa": "/,repri'zentətiv/",
    "example": "The company selected an representative option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-799",
    "term": "request",
    "meaning": "yêu cầu",
    "partOfSpeech": "n",
    "ipa": "/rɪˈkwest/",
    "example": "The manager discussed the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-800",
    "term": "require",
    "meaning": "đòi hỏi, yêu cầu; quy định",
    "partOfSpeech": "v",
    "ipa": "/ri'kwaiə(r)/",
    "example": "The team will require the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-801",
    "term": "requirement",
    "meaning": "yêu cầu, cần thiết",
    "partOfSpeech": "n",
    "ipa": "/rɪˈkwaɪr.mənt/",
    "example": "The manager discussed the requirement during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-802",
    "term": "reschedule",
    "meaning": "lên lịch, sắp xếp lịch",
    "partOfSpeech": "v",
    "ipa": "/ˌriːˈskedʒ.uːl/",
    "example": "The team will reschedule the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-803",
    "term": "rescue",
    "meaning": "cứu ai đó khỏi nguy hiểm",
    "partOfSpeech": "v",
    "ipa": "/ˈres.kjuː/",
    "example": "The team will rescue the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-804",
    "term": "resemble",
    "meaning": "giống nhau, giống ai đó",
    "partOfSpeech": "v",
    "ipa": "/rɪˈzem.bəl/",
    "example": "The team will resemble the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-805",
    "term": "reservation",
    "meaning": "dự phòng",
    "partOfSpeech": "n",
    "ipa": "/ˌrez.ɚˈveɪ.ʃən/",
    "example": "The manager discussed the reservation during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-806",
    "term": "resign",
    "meaning": "bỏ việc, từ chức",
    "partOfSpeech": "v",
    "ipa": "/rɪˈzaɪn/",
    "example": "The team will resign the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-807",
    "term": "resist",
    "meaning": "chống lại 808 resolve n, v /rɪ'zɑ:lv Quyết tâm, ý kiên quyết",
    "partOfSpeech": "v",
    "ipa": "/rɪˈzɪst/",
    "example": "The team will resist the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-808",
    "term": "resolve",
    "partOfSpeech": "n, v",
    "ipa": "/rɪˈzɑːlv/",
    "meaning": "quyết tâm; giải quyết",
    "example": "The team will resolve the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-809",
    "term": "respect",
    "meaning": "sự kính trọng; sự ngưỡng mộ",
    "partOfSpeech": "n",
    "ipa": "/riˈspekt/",
    "example": "The manager discussed the respect before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-810",
    "term": "respectable",
    "meaning": "đáng trọng; đáng kính",
    "partOfSpeech": "adj",
    "ipa": "/ris´pektəbl/",
    "example": "The company selected an respectable option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-811",
    "term": "respond",
    "meaning": "hưởng ứng",
    "partOfSpeech": "v",
    "ipa": "/ri'spond/",
    "example": "The team will respond the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-812",
    "term": "responsibility",
    "meaning": "trách nhiệm; sự chịu trách nhiệm; bổn phận; nghĩa vụ",
    "partOfSpeech": "n",
    "ipa": "/rɪˌspɑːn.səˈbɪl.ə.t̬i/",
    "example": "The manager discussed the responsibility at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-813",
    "term": "responsible",
    "meaning": "chịu trách nhiệm",
    "partOfSpeech": "adj",
    "ipa": "/ri'spɔnsəbl/",
    "example": "The company selected an responsible option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-814",
    "term": "restructure",
    "meaning": "cơ cấu lại; tổ chức lại; sắp xếp lại",
    "partOfSpeech": "v",
    "ipa": "/ri:´strʌktʃə/",
    "example": "The team will restructure the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-815",
    "term": "resume",
    "meaning": "lấy lại, chiếm lại, giành lại; hồi phục lại",
    "partOfSpeech": "v",
    "ipa": "/ri´zju:m/",
    "example": "The team will resume the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-816",
    "term": "retail",
    "meaning": "sự bán lẻ, việc bán lẻ",
    "partOfSpeech": "n, adv",
    "ipa": "/ˈriteɪl , rɪˈteɪl/",
    "example": "The team will retail the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-817",
    "term": "retire",
    "meaning": "rời bỏ, đi ra, rút về, lui về (một nơi nào kín đáo...)",
    "partOfSpeech": "v",
    "ipa": "/ri´taiə /",
    "example": "The team will retire the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-818",
    "term": "retirement",
    "meaning": "sự ẩn dật, sự về hưu",
    "partOfSpeech": "n",
    "ipa": "/rɪˈtaɪərmənt/",
    "example": "The manager discussed the retirement with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-819",
    "term": "revamp",
    "meaning": "tân trang, sửa chữa",
    "partOfSpeech": "v",
    "ipa": "/ˌriːˈvæmp/",
    "example": "The team will revamp the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-820",
    "term": "revise",
    "meaning": "đọc lại, xem lại, duyệt lại, xét lại",
    "partOfSpeech": "v, n",
    "ipa": "/ri'vaiz/",
    "example": "The team will revise the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-821",
    "term": "revised",
    "meaning": "đọc lại, xem lại, duyệt lại, xét lại",
    "partOfSpeech": "v, n",
    "ipa": "/ri'vaiz/",
    "example": "The team will revised the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-822",
    "term": "right",
    "meaning": "điều tốt, điều phải, điều đứng đắn",
    "partOfSpeech": "n",
    "ipa": "/rait/",
    "example": "The manager discussed the right at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-823",
    "term": "rival",
    "meaning": "đối thủ, địch thủ, đối địch, kình địch",
    "partOfSpeech": "n,adj",
    "ipa": "/raivl/",
    "example": "The company selected an rival option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-824",
    "term": "roadside",
    "meaning": "bờ đường, lề đường",
    "partOfSpeech": "n,adj",
    "ipa": "/´roud¸said/",
    "example": "The company selected an roadside option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-825",
    "term": "roughly",
    "meaning": "ráp, xù xì, gồ ghề, không bằng phẳng",
    "partOfSpeech": "adv",
    "ipa": "/'rʌfli/",
    "example": "The team will roughly the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-826",
    "term": "route",
    "meaning": "tuyến đường; lộ trình; đường đi",
    "partOfSpeech": "n",
    "ipa": "/raʊt/",
    "example": "The manager discussed the route at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-827",
    "term": "runway",
    "meaning": "đường băng",
    "partOfSpeech": "n",
    "ipa": "/´rʌn¸wei/",
    "example": "The manager discussed the runway at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-828",
    "term": "salary",
    "meaning": "tiền lương",
    "partOfSpeech": "n",
    "ipa": "/ˈsæləri/",
    "example": "The manager discussed the salary in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-829",
    "term": "sale",
    "meaning": "sự bán, việc bán",
    "partOfSpeech": "n",
    "ipa": "/seil/",
    "example": "The manager discussed the sale at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-830",
    "term": "salvage",
    "meaning": "sự cứu hộ; sự cứu chạy (khỏi đám cháy, mưa lũ..)",
    "partOfSpeech": "n",
    "ipa": "/´sælvidʒ/",
    "example": "The manager discussed the salvage in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-831",
    "term": "sample",
    "meaning": "mẫu; vật mẫu, hàng mẫu",
    "partOfSpeech": "n",
    "ipa": "/´sa:mpl/",
    "example": "The manager discussed the sample before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-832",
    "term": "satisfactory",
    "meaning": "vừa lòng, vừa ý; thoả mãn (tuy không xuất sắc lắm)",
    "partOfSpeech": "adj",
    "ipa": "/,sætis'fæktəri/",
    "example": "The company selected an satisfactory option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-833",
    "term": "satisfied",
    "meaning": "cảm thấy hài lòng, cảm thấy vừa ý; thoả mãn",
    "partOfSpeech": "adj",
    "ipa": "/'sætisfaid/",
    "example": "The company selected an satisfied option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-834",
    "term": "satisfy",
    "meaning": "làm thoả mãn, làm hài lòng",
    "partOfSpeech": "v",
    "ipa": "/'sætisfai/",
    "example": "The team will satisfy the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-835",
    "term": "save",
    "meaning": "cứu nguy, cứu vãn",
    "partOfSpeech": "n",
    "ipa": "/seiv/",
    "example": "The manager discussed the save at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-836",
    "term": "savvy",
    "meaning": "sự hiểu biết, nắm rõ",
    "partOfSpeech": "n",
    "ipa": "/ˈsæv.i/",
    "example": "The manager discussed the savvy at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-837",
    "term": "scene",
    "meaning": "quang cảnh",
    "partOfSpeech": "n",
    "ipa": "/si:n/",
    "example": "The manager discussed the scene at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-838",
    "term": "scenery",
    "meaning": "phong cảnh, cảnh vật",
    "partOfSpeech": "n",
    "ipa": "/'si:nəri/",
    "example": "The manager discussed the scenery in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-839",
    "term": "schedule",
    "meaning": "kế hoạch làm việc, tiến độ thi công",
    "partOfSpeech": "n",
    "ipa": "/'skedʒu:l/",
    "example": "The manager discussed the schedule before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-840",
    "term": "scrutinize",
    "meaning": "chăm chú, nhìn kỹ; xem xét kỹ lưỡng",
    "partOfSpeech": "v",
    "ipa": "/´skru:ti¸naiz/",
    "example": "The team will scrutinize the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-841",
    "term": "search",
    "meaning": "sự nhìn để tìm, nhìn để tìm, thăm dò",
    "partOfSpeech": "n,v",
    "ipa": "/sə:t∫/",
    "example": "The team will search the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-842",
    "term": "secluded",
    "meaning": "hẻo lánh; không có nhiều người trông thấy",
    "partOfSpeech": "adj",
    "ipa": "/si´klu:did/",
    "example": "The company selected an secluded option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-843",
    "term": "secretarial",
    "meaning": "(thuộc) thư ký",
    "partOfSpeech": "adj",
    "ipa": "/¸sekri´tɛəriəl/",
    "example": "The company selected an secretarial option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-844",
    "term": "secretary",
    "meaning": "thư ký",
    "partOfSpeech": "n",
    "ipa": "/'sekrətri/",
    "example": "The manager discussed the secretary with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-845",
    "term": "select",
    "meaning": "lựa chọn, chọn lọc, tuyển chọn",
    "partOfSpeech": "v",
    "ipa": "/si´lekt/",
    "example": "The team will select the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-846",
    "term": "selection",
    "meaning": "sự lựa chọn, sự chọn lọc, sự tuyển lựa",
    "partOfSpeech": "n",
    "ipa": "/si'lekʃn/",
    "example": "The manager discussed the selection with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-847",
    "term": "selective",
    "meaning": "có tuyển chọn; dựa trên sự tuyển chọn",
    "partOfSpeech": "adj",
    "ipa": "/si'lektiv/",
    "example": "The company selected an selective option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-848",
    "term": "seminar",
    "meaning": "hội nghị chuyên đề",
    "partOfSpeech": "n",
    "ipa": "/¸semi´na:/",
    "example": "The manager discussed the seminar in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-849",
    "term": "senior",
    "meaning": "nhiều tuổi hơn; cao hơn về cấp bậc (chức quyền..); lâu năm hơn",
    "partOfSpeech": "adj",
    "ipa": "/'si:niə/",
    "example": "The company selected an senior option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-850",
    "term": "sequel",
    "meaning": "sự tiếp tục, nối tiếp, kết quả",
    "partOfSpeech": "n",
    "ipa": "/ˈsiː.kwəl/",
    "example": "The manager discussed the sequel before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-851",
    "term": "serious",
    "meaning": "đứng đắn, nghiêm trang, nghiêm nghị",
    "partOfSpeech": "adj",
    "ipa": "/'siəriəs/",
    "example": "The company selected an serious option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-852",
    "term": "service",
    "meaning": "sự phục vụ, sự hầu hạ",
    "partOfSpeech": "n",
    "ipa": "/'sə:vis/",
    "example": "The manager discussed the service at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-853",
    "term": "several",
    "meaning": "vài, riêng, cá nhân; khác nhau",
    "partOfSpeech": "adj",
    "ipa": "/'sevrəl/",
    "example": "The company selected an several option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-854",
    "term": "shape",
    "meaning": "hình, hình dạng, hình thù",
    "partOfSpeech": "n",
    "ipa": "/ʃeip/",
    "example": "The manager discussed the shape at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-855",
    "term": "sharp",
    "meaning": "sắc, nhọn, bén",
    "partOfSpeech": "adj",
    "ipa": "/ʃɑrp/",
    "example": "The company selected an sharp option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-856",
    "term": "shift",
    "meaning": "sự thay đổi (về vị trí, bản chất, hình dáng..)",
    "partOfSpeech": "n",
    "ipa": "/ʃift/",
    "example": "The manager discussed the shift at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-857",
    "term": "shine",
    "meaning": "ánh sáng; ánh nắng; sự chói sáng, độ sáng",
    "partOfSpeech": "n",
    "ipa": "/ʃain/",
    "example": "The manager discussed the shine at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-858",
    "term": "shipment",
    "meaning": "việc gửi hàng; việc chất hàng lên tàu",
    "partOfSpeech": "n",
    "ipa": "/´ʃipmənt/",
    "example": "The manager discussed the shipment before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-859",
    "term": "shipping",
    "meaning": "đang chuyển hàng",
    "partOfSpeech": "n",
    "ipa": "/ˈʃɪp.ɪŋ/",
    "example": "The manager discussed the shipping before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-860",
    "term": "shortage",
    "meaning": "sự thiếu sót",
    "partOfSpeech": "n",
    "ipa": "/ˈʃɔːr.t̬ɪdʒ/",
    "example": "The manager discussed the shortage before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-861",
    "term": "shuttle",
    "meaning": "xe đưa đón",
    "partOfSpeech": "n",
    "ipa": "/ˈʃʌt̬.əl/",
    "example": "The manager discussed the shuttle in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-862",
    "term": "sightseeing",
    "meaning": "tham quan",
    "partOfSpeech": "n",
    "ipa": "/ˈsaɪtˌsiː.ɪŋ/",
    "example": "The manager discussed the sightseeing before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-863",
    "term": "significant",
    "meaning": "quan trọng",
    "partOfSpeech": "adj",
    "ipa": "/sɪɡˈnɪf.ə.kənt/",
    "example": "The company selected an significant option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-864",
    "term": "simplify",
    "meaning": "đơn giản hóa",
    "partOfSpeech": "v",
    "ipa": "/ˈsɪm.plə.faɪ/",
    "example": "The team will simplify the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-865",
    "term": "situation",
    "meaning": "tình hình",
    "partOfSpeech": "n",
    "ipa": "/ˌsɪtʃ.uˈeɪ.ʃən/",
    "example": "The manager discussed the situation with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-866",
    "term": "slump",
    "meaning": "sự sụt giảm",
    "partOfSpeech": "v",
    "ipa": "/slʌmp/",
    "example": "The team will slump the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-867",
    "term": "software",
    "meaning": "phần mềm",
    "partOfSpeech": "n",
    "ipa": "/ˈsɑːft.wer/",
    "example": "The manager discussed the software during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-868",
    "term": "solar",
    "meaning": "hệ mặt trời",
    "partOfSpeech": "adj",
    "ipa": "/ˈsoʊ.lɚ/",
    "example": "The company selected an solar option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-869",
    "term": "spacious",
    "meaning": "rộng rãi",
    "partOfSpeech": "adj",
    "ipa": "/ˈspeɪ.ʃəs/",
    "example": "The company selected an spacious option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-870",
    "term": "spare part",
    "meaning": "phụ tùng",
    "partOfSpeech": "n",
    "ipa": "/ˈspeər ˈpɑrt/",
    "example": "The manager discussed the spare part during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-871",
    "term": "spare time",
    "meaning": "thời gian rảnh",
    "partOfSpeech": "n",
    "ipa": "/ˈspeər ˈtɑɪm/",
    "example": "The manager discussed the spare time during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-872",
    "term": "specialize",
    "meaning": "chuyên môn hóa",
    "partOfSpeech": "v",
    "ipa": "/ˈspeʃ.ə.laɪz/",
    "example": "The team will specialize the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-873",
    "term": "specialty",
    "meaning": "chuyên môn",
    "partOfSpeech": "n",
    "ipa": "/ˈspeʃ.əl.ti/",
    "example": "The manager discussed the specialty with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-874",
    "term": "specification",
    "meaning": "chi tiết, đặc điểm",
    "partOfSpeech": "n",
    "ipa": "/ˌspes.ə.fəˈkeɪ.ʃən/",
    "example": "The manager discussed the specification at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-875",
    "term": "specify",
    "meaning": "giải thích, miêu tả",
    "partOfSpeech": "v",
    "ipa": "/ˈspes.ə.faɪ/",
    "example": "The team will specify the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-876",
    "term": "spectator",
    "meaning": "khán giả",
    "partOfSpeech": "n",
    "ipa": "/spekˈteɪ.t̬ɚ/",
    "example": "The manager discussed the spectator with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-877",
    "term": "stable",
    "meaning": "ổn định",
    "partOfSpeech": "adj",
    "ipa": "/ˈsteɪ.bəl/",
    "example": "The company selected an stable option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-878",
    "term": "stadium",
    "meaning": "sân vận động",
    "partOfSpeech": "n",
    "ipa": "/ˈsteɪ.di.əm/",
    "example": "The manager discussed the stadium in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-879",
    "term": "staff",
    "meaning": "nhân viên",
    "partOfSpeech": "n",
    "ipa": "/stæf/",
    "example": "The manager discussed the staff with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-880",
    "term": "stapler",
    "meaning": "người phân loại",
    "partOfSpeech": "n",
    "ipa": "/ˈsteɪ.plɚ/",
    "example": "The manager discussed the stapler in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-881",
    "term": "stare",
    "meaning": "nhìn chằm chằm",
    "partOfSpeech": "v",
    "ipa": "/ster/",
    "example": "The team will stare the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-882",
    "term": "starter",
    "meaning": "người ra lệnh xuất phát, món khai vị",
    "partOfSpeech": "n",
    "ipa": "/ˈstɑːr.t̬ɚ/",
    "example": "The manager discussed the starter in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-883",
    "term": "stationery",
    "meaning": "đồ dùng văn phòng",
    "partOfSpeech": "n",
    "ipa": "/ˈsteɪ.ʃə.ner.i/",
    "example": "The manager discussed the stationery during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-884",
    "term": "steep",
    "meaning": "quá quắt, không biết điều",
    "partOfSpeech": "adj",
    "ipa": "/stiːp/",
    "example": "The company selected an steep option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-885",
    "term": "stock",
    "meaning": "kho hàng, kho dự trữ",
    "partOfSpeech": "n",
    "ipa": "/stɑːk/",
    "example": "The manager discussed the stock at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-886",
    "term": "strategic",
    "meaning": "mang tính chiến lược",
    "partOfSpeech": "adj",
    "ipa": "/strəˈtiː.dʒɪk/",
    "example": "The company selected an strategic option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-887",
    "term": "strategy",
    "meaning": "chiến lược",
    "partOfSpeech": "v",
    "ipa": "/'strætəʤɪ/",
    "example": "The team will strategy the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-888",
    "term": "streamline",
    "meaning": "dòng nước, luồng không khí",
    "partOfSpeech": "v",
    "ipa": "/ˈstriːm.laɪn/",
    "example": "The team will streamline the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-889",
    "term": "strike",
    "meaning": "đánh đập",
    "partOfSpeech": "v",
    "ipa": "/straɪk/",
    "example": "The team will strike the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-890",
    "term": "studio",
    "meaning": "phòng thu âm",
    "partOfSpeech": "n",
    "ipa": "/ˈstuː.di.oʊ/",
    "example": "The manager discussed the studio before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-891",
    "term": "stunning",
    "meaning": "tuyệt vời, lộng lẫy",
    "partOfSpeech": "adj",
    "ipa": "/ˈstʌn.ɪŋ/",
    "example": "The company selected an stunning option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-892",
    "term": "submit",
    "meaning": "xác nhận, gửi đi",
    "partOfSpeech": "v",
    "ipa": "/səbˈmɪt/",
    "example": "The team will submit the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-893",
    "term": "subscribe",
    "meaning": "đăng ký",
    "partOfSpeech": "v",
    "ipa": "/səbˈskraɪb/",
    "example": "The team will subscribe the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-894",
    "term": "subscription",
    "meaning": "sự đăng ký",
    "partOfSpeech": "n",
    "ipa": "/səbˈskrɪp.ʃən/",
    "example": "The manager discussed the subscription at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-895",
    "term": "subsidiary",
    "meaning": "sự lệ thuộc",
    "partOfSpeech": "adj",
    "ipa": "/səbˈsɪd.i.er.i/",
    "example": "The company selected an subsidiary option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-896",
    "term": "suffocate",
    "meaning": "làm ngạt, bóp nghẹt",
    "partOfSpeech": "v",
    "ipa": "/ˈsʌf.ə.keɪt/",
    "example": "The team will suffocate the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-897",
    "term": "suggest",
    "meaning": "đề xuất",
    "partOfSpeech": "v",
    "ipa": "/səˈdʒest/",
    "example": "The team will suggest the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-898",
    "term": "suggestion",
    "meaning": "sự đề xuất",
    "partOfSpeech": "n",
    "ipa": "/səˈdʒes.tʃən/",
    "example": "The manager discussed the suggestion during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-899",
    "term": "suit",
    "meaning": "bộ vest",
    "partOfSpeech": "n",
    "ipa": "/suːt/",
    "example": "The manager discussed the suit at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-900",
    "term": "suitability",
    "meaning": "sự thích hợp",
    "partOfSpeech": "n",
    "ipa": "/ˌsuː.t̬əˈbɪl.ə.t̬i/",
    "example": "The manager discussed the suitability before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-901",
    "term": "suitable",
    "meaning": "phù hợp , thích hợp",
    "partOfSpeech": "adj",
    "ipa": "/ˈsuː.t̬ə.bəl/",
    "example": "The company selected an suitable option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-902",
    "term": "supervise",
    "meaning": "giám sát",
    "partOfSpeech": "v",
    "ipa": "/ˈsuː.pɚ.vaɪz/",
    "example": "The team will supervise the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-903",
    "term": "supervision",
    "meaning": "sự giám sát",
    "partOfSpeech": "n",
    "ipa": "/ˌsuː.pɚˈvɪʒ.ən/",
    "example": "The manager discussed the supervision before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-904",
    "term": "supplier",
    "meaning": "nhà cung cấp",
    "partOfSpeech": "n",
    "ipa": "/səˈplaɪ.ɚ/",
    "example": "The manager discussed the supplier before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-905",
    "term": "supply",
    "meaning": "cung cấp",
    "partOfSpeech": "v",
    "ipa": "/səˈplaɪ/",
    "example": "The team will supply the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-906",
    "term": "support",
    "meaning": "trợ giúp",
    "partOfSpeech": "v",
    "ipa": "/səˈpɔːrt/",
    "example": "The team will support the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-907",
    "term": "supporter",
    "meaning": "người trợ giúp",
    "partOfSpeech": "n",
    "ipa": "/səˈpɔːr.t̬ɚ/",
    "example": "The manager discussed the supporter at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-908",
    "term": "surrounding",
    "meaning": "bao quanh",
    "partOfSpeech": "adj",
    "ipa": "/səˈraʊn.dɪŋ/",
    "example": "The company selected an surrounding option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-909",
    "term": "suspicious",
    "meaning": "khả nghi",
    "partOfSpeech": "adj",
    "ipa": "/səˈspɪʃ.əs/",
    "example": "The company selected an suspicious option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-910",
    "term": "switchboard",
    "meaning": "tổng đài",
    "partOfSpeech": "n",
    "ipa": "/ˈswɪtʃ.bɔːrd/",
    "example": "The manager discussed the switchboard before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-911",
    "term": "systematic",
    "meaning": "có hệ thống",
    "partOfSpeech": "adj",
    "ipa": "/ˌsɪs.təˈmæt̬.ɪk/",
    "example": "The company selected an systematic option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-912",
    "term": "takeover",
    "meaning": "tiếp quản",
    "partOfSpeech": "n",
    "ipa": "/ˈteɪkˌoʊ.vɚ/",
    "example": "The manager discussed the takeover with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-913",
    "term": "tax",
    "meaning": "thuế",
    "partOfSpeech": "n",
    "ipa": "/tæks/",
    "example": "The manager discussed the tax in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-914",
    "term": "technical",
    "meaning": "có tính kỹ thuật",
    "partOfSpeech": "adj",
    "ipa": "/ˈtek.nɪ.kəl/",
    "example": "The company selected an technical option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-915",
    "term": "technician",
    "meaning": "kỹ thuật viên",
    "partOfSpeech": "n",
    "ipa": "/tekˈnɪʃ.ən/",
    "example": "The manager discussed the technician before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-916",
    "term": "temporary",
    "meaning": "tạm thời",
    "partOfSpeech": "adj",
    "ipa": "/ˈtem.pə.rer.i/",
    "example": "The company selected an temporary option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-917",
    "term": "tenant",
    "meaning": "người thuê nhà",
    "partOfSpeech": "n",
    "ipa": "/ˈten.ənt/",
    "example": "The manager discussed the tenant in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-918",
    "term": "terminate",
    "meaning": "chấm dứt",
    "partOfSpeech": "v",
    "ipa": "/ˈtɝː.mə.neɪt/",
    "example": "The team will terminate the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-919",
    "term": "terrible",
    "meaning": "kinh khủng",
    "partOfSpeech": "adj",
    "ipa": "/ˈter.ə.bəl/",
    "example": "The company selected an terrible option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-920",
    "term": "terrific",
    "meaning": "khủng khiếp",
    "partOfSpeech": "adj",
    "ipa": "/təˈrɪf.ɪk/",
    "example": "The company selected an terrific option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-921",
    "term": "theoretical",
    "meaning": "mang tính lý thuyết",
    "partOfSpeech": "adj",
    "ipa": "/ˌθiː.əˈret̬.kəl/",
    "example": "The company selected an theoretical option at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-922",
    "term": "theory",
    "meaning": "học thuyết",
    "partOfSpeech": "n",
    "ipa": "/ˈθɪr.i/",
    "example": "The manager discussed the theory in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-923",
    "term": "thorough",
    "meaning": "triệt để",
    "partOfSpeech": "adj",
    "ipa": "/ˈθɝː.ə/",
    "example": "The company selected an thorough option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-924",
    "term": "tidy",
    "meaning": "ngăn nắp",
    "partOfSpeech": "adj",
    "ipa": "/ˈtaɪ.di/",
    "example": "The company selected an tidy option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-925",
    "term": "tip",
    "meaning": "tiền boa",
    "partOfSpeech": "n",
    "ipa": "/tɪp/",
    "example": "The manager discussed the tip at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-926",
    "term": "tour",
    "meaning": "chuyến du lịch",
    "partOfSpeech": "n",
    "ipa": "/tʊr/",
    "example": "The manager discussed the tour before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-927",
    "term": "tourism",
    "meaning": "du lịch",
    "partOfSpeech": "n",
    "ipa": "/ˈtʊr.ɪ.zəm/",
    "example": "The manager discussed the tourism before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-928",
    "term": "tourist",
    "meaning": "du khách",
    "partOfSpeech": "n",
    "ipa": "/ˈtʊr.ɪst/",
    "example": "The manager discussed the tourist before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-929",
    "term": "towel",
    "meaning": "cái khăn lau",
    "partOfSpeech": "n",
    "ipa": "/taʊəl/",
    "example": "The manager discussed the towel before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-930",
    "term": "tower",
    "meaning": "tòa nhà, tháp",
    "partOfSpeech": "n",
    "ipa": "/ˈtaʊ.ɚ/",
    "example": "The manager discussed the tower before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-931",
    "term": "track",
    "meaning": "con đường",
    "partOfSpeech": "n",
    "ipa": "/træk/",
    "example": "The manager discussed the track before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-932",
    "term": "trade",
    "meaning": "sự trao đổi (hàng hóa, vật phẩm)",
    "partOfSpeech": "n",
    "ipa": "/treɪd/",
    "example": "The manager discussed the trade before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-933",
    "term": "tradition",
    "meaning": "sự truyền thống",
    "partOfSpeech": "n",
    "ipa": "/trəˈdɪʃ.ən/",
    "example": "The manager discussed the tradition during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-934",
    "term": "traffic",
    "meaning": "giao thông",
    "partOfSpeech": "n",
    "ipa": "/ˈtræf.ɪk/",
    "example": "The manager discussed the traffic before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-935",
    "term": "training",
    "meaning": "sự huấn luyện, sự đào tạo",
    "partOfSpeech": "n",
    "ipa": "/ˈtreɪ.nɪŋ/",
    "example": "The manager discussed the training with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-936",
    "term": "transfer",
    "meaning": "chuyển khoản",
    "partOfSpeech": "v",
    "ipa": "/ˈtræns.fɝː/",
    "example": "The team will transfer the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-937",
    "term": "transform",
    "meaning": "biến đổi",
    "partOfSpeech": "v",
    "ipa": "/trænsˈfɔːrm/",
    "example": "The team will transform the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-938",
    "term": "transformation",
    "meaning": "sự biến đổi",
    "partOfSpeech": "n",
    "ipa": "/ˌtræns.fɚˈmeɪ.ʃən/",
    "example": "The manager discussed the transformation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-939",
    "term": "transit",
    "meaning": "vận chuyển",
    "partOfSpeech": "n",
    "ipa": "/ˈtræn.zɪt/",
    "example": "The manager discussed the transit before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-940",
    "term": "transportation",
    "meaning": "sự vận chuyển",
    "partOfSpeech": "n",
    "ipa": "/ˌtræn.spɚˈteɪ.ʃən/",
    "example": "The manager discussed the transportation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-941",
    "term": "trend",
    "meaning": "xu hướng",
    "partOfSpeech": "n",
    "ipa": "/trend/",
    "example": "The manager discussed the trend before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-942",
    "term": "trial",
    "meaning": "thử nghiệm",
    "partOfSpeech": "n",
    "ipa": "/traɪəl/",
    "example": "The manager discussed the trial before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-943",
    "term": "triumph",
    "meaning": "chiến thắng",
    "partOfSpeech": "n",
    "ipa": "/ˈtraɪ.əmf/",
    "example": "The manager discussed the triumph before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-944",
    "term": "trust",
    "meaning": "tin, tin tưởng",
    "partOfSpeech": "v",
    "ipa": "/trʌst/",
    "example": "The team will trust the request before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-945",
    "term": "turnover",
    "meaning": "doanh số, doanh thu",
    "partOfSpeech": "n",
    "ipa": "/ˈtɝːnˌoʊ.vɚ/",
    "example": "The manager discussed the turnover with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-946",
    "term": "unconditional",
    "meaning": "vô điều kiện",
    "partOfSpeech": "adj",
    "ipa": "/ˌʌn.kənˈdɪʃ.ən.əl/",
    "example": "The company selected an unconditional option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-947",
    "term": "understand",
    "meaning": "hiểu, nắm bắt được",
    "partOfSpeech": "v",
    "ipa": "/ˌʌn.dɚˈstænd/",
    "example": "The team will understand the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-948",
    "term": "unfavorable",
    "meaning": "không thuận lợi",
    "partOfSpeech": "adj",
    "ipa": "/ʌnˈfeɪ.vər.ə.bəl/",
    "example": "The company selected an unfavorable option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-949",
    "term": "unfortunately",
    "meaning": "không may mắn",
    "partOfSpeech": "adj",
    "ipa": "/ʌnˈfɔːr.tʃən.ət.li/",
    "example": "The company selected an unfortunately option in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-950",
    "term": "uniform",
    "meaning": "đồng phục",
    "partOfSpeech": "n",
    "ipa": "/ˈjuː.nə.fɔːrm/",
    "example": "The manager discussed the uniform with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-951",
    "term": "unspoiled",
    "meaning": "hoang sơ",
    "partOfSpeech": "adj",
    "ipa": "/ʌnˈspɔɪld/",
    "example": "The company selected an unspoiled option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-952",
    "term": "unwrap",
    "meaning": "bóc, mở",
    "partOfSpeech": "v",
    "ipa": "/ʌnˈræp/",
    "example": "The team will unwrap the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-953",
    "term": "upcoming",
    "meaning": "sắp xảy ra",
    "partOfSpeech": "adj",
    "ipa": "/ˈʌpˌkʌm.ɪŋ/",
    "example": "The company selected an upcoming option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-954",
    "term": "update",
    "meaning": "nâng cấp",
    "partOfSpeech": "v",
    "ipa": "/ʌpˈdeɪt/",
    "example": "The team will update the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-955",
    "term": "upgrade",
    "meaning": "nâng cấp",
    "partOfSpeech": "v",
    "ipa": "/ʌpˈɡreɪd/",
    "example": "The team will upgrade the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-956",
    "term": "upset",
    "meaning": "buồn bã, lo lắng",
    "partOfSpeech": "v, adj",
    "ipa": "/ʌpˈset/",
    "example": "The team will upset the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-957",
    "term": "upstairs",
    "meaning": "tầng trên",
    "partOfSpeech": "n",
    "ipa": "/ʌpˈsterz/",
    "example": "The manager discussed the upstairs during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-958",
    "term": "utility bill",
    "meaning": "/bɪl/ hóa đơn điện nước",
    "partOfSpeech": "n",
    "ipa": "/juːˈtɪl.ə.t̬i/",
    "example": "The manager discussed the utility bill before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-959",
    "term": "vacancy",
    "meaning": "vị trí bỏ trống",
    "partOfSpeech": "n",
    "ipa": "/ˈveɪ.kən.si/",
    "example": "The manager discussed the vacancy during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-960",
    "term": "vacant",
    "meaning": "bỏ trống",
    "partOfSpeech": "v",
    "ipa": "/ˈveɪ.kənt/",
    "example": "The team will vacant the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-961",
    "term": "vacation",
    "meaning": "kì nghỉ",
    "partOfSpeech": "n",
    "ipa": "/veɪˈkeɪ.ʃən/",
    "example": "The manager discussed the vacation before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-962",
    "term": "vaccination",
    "meaning": "tiêm chủng",
    "partOfSpeech": "n",
    "ipa": "/ˌvæk.səˈneɪ.ʃən/",
    "example": "The manager discussed the vaccination before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-963",
    "term": "valuables",
    "meaning": "vật có giá trị",
    "partOfSpeech": "n",
    "ipa": "/ˈvæl.jə.bəlz/",
    "example": "The manager discussed the valuables at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-964",
    "term": "varied",
    "meaning": "đa dạng",
    "partOfSpeech": "adj",
    "ipa": "/ˈver.ɪd/",
    "example": "The company selected an varied option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-965",
    "term": "variety",
    "meaning": "sự đa dạng",
    "partOfSpeech": "n",
    "ipa": "/vəˈraɪ.ə.t̬i/",
    "example": "The manager discussed the variety during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-966",
    "term": "various",
    "meaning": "đa dạng",
    "partOfSpeech": "adj",
    "ipa": "/ˈver.i.əs/",
    "example": "The company selected an various option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-967",
    "term": "vendor",
    "meaning": "người bán",
    "partOfSpeech": "n",
    "ipa": "/ˈven.dɚ/",
    "example": "The manager discussed the vendor with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-968",
    "term": "venture",
    "meaning": "liên doanh",
    "partOfSpeech": "n",
    "ipa": "/ˈven.tʃɚ/",
    "example": "The manager discussed the venture during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-969",
    "term": "venue",
    "meaning": "địa điểm",
    "partOfSpeech": "n",
    "ipa": "/ˈven.juː/",
    "example": "The manager discussed the venue before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-970",
    "term": "virus",
    "meaning": "virus",
    "partOfSpeech": "n",
    "ipa": "/ˈvaɪ.rəs/",
    "example": "The manager discussed the virus before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-971",
    "term": "vital",
    "meaning": "thiết yếu",
    "partOfSpeech": "adj",
    "ipa": "/ˈvaɪ.t̬əl/",
    "example": "The company selected an vital option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-972",
    "term": "vivid",
    "meaning": "chói sáng, rực rỡ, sống động",
    "partOfSpeech": "adj",
    "ipa": "/ˈvɪv.ɪd/",
    "example": "The company selected an vivid option before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-973",
    "term": "wage",
    "meaning": "tiền công",
    "partOfSpeech": "n",
    "ipa": "/weɪdʒ/",
    "example": "The manager discussed the wage before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-974",
    "term": "walkway",
    "meaning": "lối đi",
    "partOfSpeech": "n",
    "ipa": "/ˈwɑː.kweɪ/",
    "example": "The manager discussed the walkway before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-975",
    "term": "warehouse",
    "meaning": "kho hàng",
    "partOfSpeech": "n",
    "ipa": "/ˈwer.haʊs/",
    "example": "The manager discussed the warehouse at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-976",
    "term": "warn",
    "meaning": "cảnh báo",
    "partOfSpeech": "v",
    "ipa": "/wɔːrn/",
    "example": "The team will warn the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-977",
    "term": "warning",
    "meaning": "sự cảnh báo",
    "partOfSpeech": "n",
    "ipa": "/ˈwɔːr.nɪŋ/",
    "example": "The manager discussed the warning before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-978",
    "term": "warrant",
    "meaning": "bảo đảm",
    "partOfSpeech": "v",
    "ipa": "/ˈwɔːr.ənt/",
    "example": "The team will warrant the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-979",
    "term": "warranty",
    "meaning": "sự bảo đảm",
    "partOfSpeech": "n",
    "ipa": "/ˈwɔːr.ən.t̬i/",
    "example": "The manager discussed the warranty before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-980",
    "term": "wastage",
    "meaning": "lãng phí",
    "partOfSpeech": "adj",
    "ipa": "/ˈweɪ.stɪdʒ/",
    "example": "The company selected an wastage option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-981",
    "term": "waterproof",
    "meaning": "chống nước",
    "partOfSpeech": "adj",
    "ipa": "/ˈwɑː.t̬ɚ.pruːf/",
    "example": "The company selected an waterproof option before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-982",
    "term": "wealth",
    "meaning": "giàu có",
    "partOfSpeech": "adj",
    "ipa": "/welθ/",
    "example": "The company selected an wealth option during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-983",
    "term": "website",
    "meaning": "trang web",
    "partOfSpeech": "n",
    "ipa": "/ˈweb.saɪt/",
    "example": "The manager discussed the website during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-984",
    "term": "weight",
    "meaning": "cân nặng",
    "partOfSpeech": "n",
    "ipa": "/weɪt/",
    "example": "The manager discussed the weight during system maintenance.",
    "topic": "Công nghệ",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-985",
    "term": "welfare",
    "meaning": "phúc lợi",
    "partOfSpeech": "n",
    "ipa": "/ˈwel.fer/",
    "example": "The manager discussed the welfare before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-986",
    "term": "wholesale",
    "meaning": "bán sỉ, bán buôn",
    "partOfSpeech": "v",
    "ipa": "/ˈhoʊl.seɪl/",
    "example": "The team will wholesale the request at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-987",
    "term": "win",
    "meaning": "thắng, chiến thắng",
    "partOfSpeech": "v",
    "ipa": "/wɪn/",
    "example": "The team will win the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-988",
    "term": "withdraw",
    "meaning": "rút",
    "partOfSpeech": "v",
    "ipa": "/wɪðˈdrɑː/",
    "example": "The team will withdraw the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-989",
    "term": "withdrawal",
    "meaning": "sự rút ra (tiền)",
    "partOfSpeech": "n",
    "ipa": "/wɪðˈdrɑː.əl/",
    "example": "The manager discussed the withdrawal before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-990",
    "term": "workplace",
    "meaning": "nơi làm việc",
    "partOfSpeech": "n",
    "ipa": "/ˈwɝːk.pleɪs/",
    "example": "The manager discussed the workplace with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-991",
    "term": "workshop",
    "meaning": "hội thảo",
    "partOfSpeech": "n",
    "ipa": "/ˈwɝːk.ʃɑːp/",
    "example": "The manager discussed the workshop at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-992",
    "term": "worth",
    "meaning": "giá trị",
    "partOfSpeech": "adj",
    "ipa": "/wɝːθ/",
    "example": "The company selected an worth option with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-993",
    "term": "worthless",
    "meaning": "không có giá trị, vô giá trị",
    "partOfSpeech": "adj",
    "ipa": "/ˈwɝːθ.ləs/",
    "example": "The company selected an worthless option at the quarterly strategy meeting.",
    "topic": "Kinh doanh",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-994",
    "term": "wrap",
    "meaning": "gói, bọc lại",
    "partOfSpeech": "v",
    "ipa": "/ræp/",
    "example": "The team will wrap the request before the business trip.",
    "topic": "Du lịch",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-995",
    "term": "write",
    "meaning": "viết, sáng tác",
    "partOfSpeech": "v",
    "ipa": "/raɪt/",
    "example": "The team will write the request with the HR department.",
    "topic": "Nhân sự",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-996",
    "term": "yearly",
    "meaning": "hằng năm",
    "partOfSpeech": "adv",
    "ipa": "/ˈjɪr.li/",
    "example": "The team will yearly the request at the customer service desk.",
    "topic": "Dịch vụ khách hàng",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-997",
    "term": "yield",
    "meaning": "sản xuất, cung cấp",
    "partOfSpeech": "v",
    "ipa": "/jiːld/",
    "example": "The team will yield the request before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-998",
    "term": "youth",
    "meaning": "tuổi trẻ, thời thanh xuân",
    "partOfSpeech": "n",
    "ipa": "/juːθ/",
    "example": "The manager discussed the youth before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-999",
    "term": "zero",
    "meaning": "số 0",
    "partOfSpeech": "n",
    "ipa": "/ˈzɪr.oʊ/",
    "example": "The manager discussed the zero before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "core-1000",
    "term": "zone",
    "meaning": "vùng, khu vực n: danh từ (noun) adv: trạng từ (adverb) pron: đại từ (pronoun) v: động từ (verb) prep: giới từ (preposition) conj: liên từ (conjunction)",
    "partOfSpeech": "n",
    "ipa": "/zoʊn/",
    "example": "The manager discussed the zone before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "PDF đính kèm"
  },
  {
    "id": "plus-1",
    "term": "accrual",
    "meaning": "dồn tích",
    "partOfSpeech": "n",
    "ipa": "/əˈkruəl/",
    "example": "The manager discussed the accrual in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-2",
    "term": "allocation",
    "meaning": "phân bổ",
    "partOfSpeech": "n",
    "ipa": "/ˌæləˈkeɪʃən/",
    "example": "The manager discussed the allocation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-3",
    "term": "amortization",
    "meaning": "khấu hao dần",
    "partOfSpeech": "n",
    "ipa": "/ˌæmərtɪˈzeɪʃən/",
    "example": "The manager discussed the amortization in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-4",
    "term": "appraisal",
    "meaning": "đánh giá",
    "partOfSpeech": "n",
    "ipa": "/əˈpreɪzəl/",
    "example": "The manager discussed the appraisal with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-5",
    "term": "asset management",
    "meaning": "quản lý tài sản",
    "partOfSpeech": "n",
    "ipa": "/ˈæˌsɛt ˈmænɪʤmənt/",
    "example": "The manager discussed the asset management in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-6",
    "term": "benchmark",
    "meaning": "mốc so sánh",
    "partOfSpeech": "n",
    "ipa": "/ˈbɛnʧˌmɑrk/",
    "example": "The manager discussed the benchmark at the office.",
    "topic": "Kinh doanh",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-7",
    "term": "billing",
    "meaning": "việc lập hóa đơn",
    "partOfSpeech": "n",
    "ipa": "/ˈbɪlɪŋ/",
    "example": "The manager discussed the billing in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-8",
    "term": "bond",
    "meaning": "trái phiếu",
    "partOfSpeech": "n",
    "ipa": "/bɑnd/",
    "example": "The manager discussed the bond in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-9",
    "term": "borrow",
    "meaning": "vay",
    "partOfSpeech": "v",
    "ipa": "/ˈbɑˌroʊ/",
    "example": "The team will borrow the request in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-10",
    "term": "capital",
    "meaning": "vốn",
    "partOfSpeech": "n",
    "ipa": "/ˈkæpɪtəl/",
    "example": "The manager discussed the capital in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-11",
    "term": "cash flow",
    "meaning": "dòng tiền",
    "partOfSpeech": "n",
    "ipa": "/kæʃ floʊ/",
    "example": "The manager discussed the cash flow in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-12",
    "term": "collateral",
    "meaning": "tài sản thế chấp",
    "partOfSpeech": "n",
    "ipa": "/kəˈlætərəl/",
    "example": "The manager discussed the collateral in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-13",
    "term": "commission",
    "meaning": "tiền hoa hồng",
    "partOfSpeech": "n",
    "ipa": "/kəˈmɪʃən/",
    "example": "The manager discussed the commission in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-14",
    "term": "compensation",
    "meaning": "khoản bồi thường; tiền lương",
    "partOfSpeech": "n",
    "ipa": "/ˌkɑmpənˈseɪʃən/",
    "example": "The manager discussed the compensation with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-15",
    "term": "creditor",
    "meaning": "chủ nợ",
    "partOfSpeech": "n",
    "ipa": "/ˈkrɛdɪtər/",
    "example": "The manager discussed the creditor in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-16",
    "term": "currency",
    "meaning": "tiền tệ",
    "partOfSpeech": "n",
    "ipa": "/ˈkərənsi/",
    "example": "The manager discussed the currency in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-17",
    "term": "debit",
    "meaning": "khoản ghi nợ",
    "partOfSpeech": "n",
    "ipa": "/ˈdɛbɪt/",
    "example": "The manager discussed the debit in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-18",
    "term": "depreciation",
    "meaning": "khấu hao",
    "partOfSpeech": "n",
    "ipa": "/dɪˌpriʃiˈeɪʃən/",
    "example": "The manager discussed the depreciation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-19",
    "term": "disbursement",
    "meaning": "khoản chi trả",
    "partOfSpeech": "n",
    "ipa": "/dɪsˈbərsmənt/",
    "example": "The manager discussed the disbursement in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-20",
    "term": "earnings report",
    "meaning": "báo cáo thu nhập",
    "partOfSpeech": "n",
    "ipa": "/ˈərnɪŋz rɪˈpɔrt/",
    "example": "The manager discussed the earnings report in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-21",
    "term": "equity",
    "meaning": "vốn chủ sở hữu",
    "partOfSpeech": "n",
    "ipa": "/ˈɛkwəti/",
    "example": "The manager discussed the equity in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-22",
    "term": "expenditure",
    "meaning": "chi tiêu",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈspɛndɪʧər/",
    "example": "The manager discussed the expenditure in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-23",
    "term": "fiscal",
    "meaning": "thuộc tài chính",
    "partOfSpeech": "n",
    "ipa": "/ˈfɪskəl/",
    "example": "The manager discussed the fiscal in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-24",
    "term": "forecast",
    "meaning": "dự báo",
    "partOfSpeech": "n",
    "ipa": "/ˈfɔrˌkæst/",
    "example": "The manager discussed the forecast in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-25",
    "term": "installment",
    "meaning": "khoản trả góp",
    "partOfSpeech": "n",
    "ipa": "/ˌɪnˈstɔlmənt/",
    "example": "The manager discussed the installment in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-26",
    "term": "interest rate",
    "meaning": "lãi suất",
    "partOfSpeech": "n",
    "ipa": "/ˈɪntəˌrɛst reɪt/",
    "example": "The manager discussed the interest rate in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-27",
    "term": "levy",
    "meaning": "khoản thu; thuế",
    "partOfSpeech": "n",
    "ipa": "/ˈlɛvi/",
    "example": "The manager discussed the levy in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-28",
    "term": "liquidity",
    "meaning": "tính thanh khoản",
    "partOfSpeech": "n",
    "ipa": "/lɪkˈwɪdɪti/",
    "example": "The manager discussed the liquidity in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-29",
    "term": "loan",
    "meaning": "khoản vay",
    "partOfSpeech": "n",
    "ipa": "/loʊn/",
    "example": "The manager discussed the loan in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-30",
    "term": "margin",
    "meaning": "biên lợi nhuận",
    "partOfSpeech": "n",
    "ipa": "/ˈmɑrʤən/",
    "example": "The manager discussed the margin in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-31",
    "term": "mortgage",
    "meaning": "khoản thế chấp",
    "partOfSpeech": "n",
    "ipa": "/ˈmɔrgɪʤ/",
    "example": "The manager discussed the mortgage in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-32",
    "term": "payroll",
    "meaning": "bảng lương",
    "partOfSpeech": "n",
    "ipa": "/ˈpeɪˌroʊl/",
    "example": "The manager discussed the payroll in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-33",
    "term": "portfolio",
    "meaning": "danh mục đầu tư",
    "partOfSpeech": "n",
    "ipa": "/pɔrtˈfoʊliˌoʊ/",
    "example": "The manager discussed the portfolio in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-34",
    "term": "premium",
    "meaning": "phí bảo hiểm",
    "partOfSpeech": "n",
    "ipa": "/ˈprimiəm/",
    "example": "The manager discussed the premium in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-35",
    "term": "principal",
    "meaning": "khoản tiền gốc",
    "partOfSpeech": "n",
    "ipa": "/ˈprɪnsəpəl/",
    "example": "The manager discussed the principal in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-36",
    "term": "procurement",
    "meaning": "mua sắm",
    "partOfSpeech": "n",
    "ipa": "/proʊˈkjʊrmənt/",
    "example": "The manager discussed the procurement in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-37",
    "term": "reimbursement",
    "meaning": "khoản hoàn trả",
    "partOfSpeech": "n",
    "ipa": "/ˌriɪmˈbərsmənt/",
    "example": "The manager discussed the reimbursement in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-38",
    "term": "reserve",
    "meaning": "khoản dự phòng",
    "partOfSpeech": "n",
    "ipa": "/rɪˈzərv/",
    "example": "The manager discussed the reserve in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-39",
    "term": "return on investment",
    "meaning": "lợi nhuận đầu tư",
    "partOfSpeech": "n",
    "ipa": "/rɪˈtərn ɔn ˌɪnˈvɛstmənt/",
    "example": "The manager discussed the return on investment in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-40",
    "term": "securities",
    "meaning": "chứng khoán",
    "partOfSpeech": "n",
    "ipa": "/sɪˈkjʊrətiz/",
    "example": "The manager discussed the securities in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-41",
    "term": "subsidy",
    "meaning": "trợ cấp",
    "partOfSpeech": "n",
    "ipa": "/ˈsəbsɪdi/",
    "example": "The manager discussed the subsidy in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-42",
    "term": "tariff",
    "meaning": "thuế quan",
    "partOfSpeech": "n",
    "ipa": "/ˈtɛrəf/",
    "example": "The manager discussed the tariff in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-43",
    "term": "valuation",
    "meaning": "việc định giá",
    "partOfSpeech": "n",
    "ipa": "/væljuˈeɪʃən/",
    "example": "The manager discussed the valuation in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-44",
    "term": "withholding",
    "meaning": "khoản khấu trừ",
    "partOfSpeech": "n",
    "ipa": "/wɪθˈhoʊldɪŋ/",
    "example": "The manager discussed the withholding in the quarterly financial report.",
    "topic": "Tài chính",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-45",
    "term": "absenteeism",
    "meaning": "sự vắng mặt",
    "partOfSpeech": "n",
    "ipa": "/ˌæbsənˈtiɪzəm/",
    "example": "The manager discussed the absenteeism with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-46",
    "term": "affiliation",
    "meaning": "sự liên kết",
    "partOfSpeech": "n",
    "ipa": "/əˌfɪliˈeɪʃən/",
    "example": "The manager discussed the affiliation with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-47",
    "term": "apprenticeship",
    "meaning": "chương trình học việc",
    "partOfSpeech": "n",
    "ipa": "/əˈprɛntəsˌʃɪp/",
    "example": "The manager discussed the apprenticeship with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-48",
    "term": "aptitude",
    "meaning": "năng khiếu",
    "partOfSpeech": "n",
    "ipa": "/ˈæptəˌtud/",
    "example": "The manager discussed the aptitude with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-49",
    "term": "bonus",
    "meaning": "thưởng",
    "partOfSpeech": "n",
    "ipa": "/ˈboʊnəs/",
    "example": "The manager discussed the bonus with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-50",
    "term": "career path",
    "meaning": "lộ trình nghề nghiệp",
    "partOfSpeech": "n",
    "ipa": "/kərɪr pæθ/",
    "example": "The manager discussed the career path with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-51",
    "term": "consultant",
    "meaning": "chuyên gia tư vấn",
    "partOfSpeech": "n",
    "ipa": "/kənˈsəltənt/",
    "example": "The manager discussed the consultant with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-52",
    "term": "delegation",
    "meaning": "sự ủy quyền",
    "partOfSpeech": "n",
    "ipa": "/ˌdɛləˈgeɪʃən/",
    "example": "The manager discussed the delegation with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-53",
    "term": "disciplinary",
    "meaning": "thuộc kỷ luật",
    "partOfSpeech": "adj",
    "ipa": "/ˈdɪsəpləˌnɛri/",
    "example": "The company selected an disciplinary option with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-54",
    "term": "diversity",
    "meaning": "sự đa dạng",
    "partOfSpeech": "n",
    "ipa": "/dɪˈvərsɪti/",
    "example": "The manager discussed the diversity with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-55",
    "term": "eligibility",
    "meaning": "tính đủ điều kiện",
    "partOfSpeech": "n",
    "ipa": "/ˌɛlɪʤəˈbɪlɪti/",
    "example": "The manager discussed the eligibility with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-56",
    "term": "employment contract",
    "meaning": "hợp đồng lao động",
    "partOfSpeech": "n",
    "ipa": "/ɪmˈplɔɪmənt ˈkɑnˌtrækt/",
    "example": "The manager discussed the employment contract with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-57",
    "term": "freelance",
    "meaning": "làm việc tự do",
    "partOfSpeech": "adj",
    "ipa": "/ˈfriˌlæns/",
    "example": "The company selected an freelance option with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-58",
    "term": "headcount",
    "meaning": "tổng số nhân viên",
    "partOfSpeech": "n",
    "ipa": "/ˈhɛdˌkaʊnt/",
    "example": "The manager discussed the headcount with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-59",
    "term": "incentive",
    "meaning": "khoản khích lệ",
    "partOfSpeech": "n",
    "ipa": "/ˌɪnˈsɛnɪv/",
    "example": "The manager discussed the incentive with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-60",
    "term": "internship",
    "meaning": "kỳ thực tập",
    "partOfSpeech": "n",
    "ipa": "/ˈɪntərnˌʃɪp/",
    "example": "The manager discussed the internship with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-61",
    "term": "job description",
    "meaning": "mô tả công việc",
    "partOfSpeech": "n",
    "ipa": "/ʤɑb dɪˈskrɪpʃən/",
    "example": "The manager discussed the job description with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-62",
    "term": "labor union",
    "meaning": "công đoàn",
    "partOfSpeech": "n",
    "ipa": "/ˈleɪbər ˈjunjən/",
    "example": "The manager discussed the labor union with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-63",
    "term": "layoff",
    "meaning": "việc cắt giảm nhân sự",
    "partOfSpeech": "n",
    "ipa": "/leɪɔf/",
    "example": "The manager discussed the layoff with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-64",
    "term": "leadership",
    "meaning": "khả năng lãnh đạo",
    "partOfSpeech": "n",
    "ipa": "/ˈlidərˌʃɪp/",
    "example": "The manager discussed the leadership with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-65",
    "term": "mentorship",
    "meaning": "việc cố vấn",
    "partOfSpeech": "n",
    "ipa": "Nghe mẫu",
    "example": "The manager discussed the mentorship with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-66",
    "term": "onboarding",
    "meaning": "quy trình hội nhập nhân viên mới",
    "partOfSpeech": "n",
    "ipa": "Nghe mẫu",
    "example": "The manager discussed the onboarding with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-67",
    "term": "orientation",
    "meaning": "buổi định hướng",
    "partOfSpeech": "n",
    "ipa": "/ˌɔriɛnˈteɪʃən/",
    "example": "The manager discussed the orientation with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-68",
    "term": "outsource",
    "meaning": "thuê ngoài",
    "partOfSpeech": "v",
    "ipa": "/ˌaʊtˈsɔrs/",
    "example": "The team will outsource the request with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-69",
    "term": "performance review",
    "meaning": "đánh giá hiệu suất",
    "partOfSpeech": "n",
    "ipa": "/pərˈfɔrməns ˌrivˈju/",
    "example": "The manager discussed the performance review with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-70",
    "term": "probation",
    "meaning": "thời gian thử việc",
    "partOfSpeech": "n",
    "ipa": "/proʊˈbeɪʃən/",
    "example": "The manager discussed the probation with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-71",
    "term": "professional development",
    "meaning": "phát triển chuyên môn",
    "partOfSpeech": "n",
    "ipa": "/prəˈfɛʃənəl dɪˈvɛləpmənt/",
    "example": "The manager discussed the professional development with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-72",
    "term": "promotion opportunity",
    "meaning": "cơ hội thăng tiến",
    "partOfSpeech": "n",
    "ipa": "/pərˈmoʊʃən ˌɑpərˈtunəti/",
    "example": "The manager discussed the promotion opportunity with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-73",
    "term": "qualification",
    "meaning": "trình độ chuyên môn",
    "partOfSpeech": "n",
    "ipa": "/kˌwɑləfəˈkeɪʃən/",
    "example": "The manager discussed the qualification with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-74",
    "term": "recruitment",
    "meaning": "tuyển dụng",
    "partOfSpeech": "n",
    "ipa": "/rɪˈkrutmənt/",
    "example": "The manager discussed the recruitment with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-75",
    "term": "relocation",
    "meaning": "việc chuyển địa điểm",
    "partOfSpeech": "n",
    "ipa": "/ˌriˈloʊˈkeɪʃən/",
    "example": "The manager discussed the relocation with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-76",
    "term": "retention",
    "meaning": "giữ chân nhân sự",
    "partOfSpeech": "n",
    "ipa": "/riˈtɛnʃən/",
    "example": "The manager discussed the retention with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-77",
    "term": "severance",
    "meaning": "trợ cấp thôi việc",
    "partOfSpeech": "n",
    "ipa": "/ˈsɛˌvərəns/",
    "example": "The manager discussed the severance with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-78",
    "term": "shift",
    "meaning": "ca làm việc",
    "partOfSpeech": "n",
    "ipa": "/ʃɪft/",
    "example": "The manager discussed the shift with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-79",
    "term": "staffing",
    "meaning": "việc bố trí nhân sự",
    "partOfSpeech": "n",
    "ipa": "/ˈstæfɪŋ/",
    "example": "The manager discussed the staffing with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-80",
    "term": "succession",
    "meaning": "kế nhiệm",
    "partOfSpeech": "n",
    "ipa": "/səkˈsɛʃən/",
    "example": "The manager discussed the succession with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-81",
    "term": "telecommute",
    "meaning": "làm việc từ xa",
    "partOfSpeech": "v",
    "ipa": "/ˈtɛləkəmˌjut/",
    "example": "The team will telecommute the request with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-82",
    "term": "vacancy",
    "meaning": "vị trí còn trống",
    "partOfSpeech": "n",
    "ipa": "/ˈveɪkənsi/",
    "example": "The manager discussed the vacancy with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-83",
    "term": "workforce",
    "meaning": "lực lượng lao động",
    "partOfSpeech": "n",
    "ipa": "/ˈwərkˌfɔrs/",
    "example": "The manager discussed the workforce with the HR department.",
    "topic": "Nhân sự",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-84",
    "term": "affiliate",
    "meaning": "đơn vị liên kết",
    "partOfSpeech": "n",
    "ipa": "/əˈfɪliˌeɪt/",
    "example": "The manager discussed the affiliate for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-85",
    "term": "awareness",
    "meaning": "sự nhận biết",
    "partOfSpeech": "n",
    "ipa": "/əˈwɛrnəs/",
    "example": "The manager discussed the awareness for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-86",
    "term": "brochure",
    "meaning": "tờ giới thiệu",
    "partOfSpeech": "n",
    "ipa": "/broʊˈʃʊr/",
    "example": "The manager discussed the brochure for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-87",
    "term": "catalog",
    "meaning": "ca-ta-lô",
    "partOfSpeech": "n",
    "ipa": "/ˈkætəlɔg/",
    "example": "The manager discussed the catalog for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-88",
    "term": "channel",
    "meaning": "kênh phân phối",
    "partOfSpeech": "n",
    "ipa": "/ˈʧænəl/",
    "example": "The manager discussed the channel for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-89",
    "term": "consumer behavior",
    "meaning": "hành vi người tiêu dùng",
    "partOfSpeech": "n",
    "ipa": "/kənˈsumər bɪˈheɪvjər/",
    "example": "The manager discussed the consumer behavior for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-90",
    "term": "coupon",
    "meaning": "phiếu giảm giá",
    "partOfSpeech": "n",
    "ipa": "/ˈkuˌpɔn/",
    "example": "The manager discussed the coupon for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-91",
    "term": "demographic",
    "meaning": "nhân khẩu học",
    "partOfSpeech": "n",
    "ipa": "/ˌdɛməˈgræfɪk/",
    "example": "The manager discussed the demographic for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-92",
    "term": "endorsement",
    "meaning": "sự chứng thực",
    "partOfSpeech": "n",
    "ipa": "/ɛnˈdɔrsmənt/",
    "example": "The manager discussed the endorsement for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-93",
    "term": "exposure",
    "meaning": "mức độ tiếp cận",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈspoʊʒər/",
    "example": "The manager discussed the exposure for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-94",
    "term": "feedback",
    "meaning": "phản hồi",
    "partOfSpeech": "n",
    "ipa": "/ˈfidˌbæk/",
    "example": "The manager discussed the feedback for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-95",
    "term": "market research",
    "meaning": "nghiên cứu thị trường",
    "partOfSpeech": "n",
    "ipa": "/ˈmɑrkɪt ˈrisərʧ/",
    "example": "The manager discussed the market research for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-96",
    "term": "merchandise",
    "meaning": "hàng hóa",
    "partOfSpeech": "n",
    "ipa": "/ˈmərʧənˌdaɪz/",
    "example": "The manager discussed the merchandise for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-97",
    "term": "niche",
    "meaning": "thị trường ngách",
    "partOfSpeech": "n",
    "ipa": "/nɪʧ/",
    "example": "The manager discussed the niche for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-98",
    "term": "outreach",
    "meaning": "hoạt động tiếp cận",
    "partOfSpeech": "n",
    "ipa": "/ˈaʊˌtriʧ/",
    "example": "The manager discussed the outreach for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-99",
    "term": "placement",
    "meaning": "việc đặt quảng cáo",
    "partOfSpeech": "n",
    "ipa": "/ˈpleɪsmənt/",
    "example": "The manager discussed the placement for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-100",
    "term": "positioning",
    "meaning": "định vị thương hiệu",
    "partOfSpeech": "n",
    "ipa": "/pəˈzɪʃənɪŋ/",
    "example": "The manager discussed the positioning for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-101",
    "term": "promotion code",
    "meaning": "mã khuyến mãi",
    "partOfSpeech": "n",
    "ipa": "/pərˈmoʊʃən koʊd/",
    "example": "The manager discussed the promotion code for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-102",
    "term": "publicity",
    "meaning": "sự quảng bá",
    "partOfSpeech": "n",
    "ipa": "/pəˈblɪsɪti/",
    "example": "The manager discussed the publicity for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-103",
    "term": "retailer",
    "meaning": "nhà bán lẻ",
    "partOfSpeech": "n",
    "ipa": "/ˈriˌteɪlər/",
    "example": "The manager discussed the retailer for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-104",
    "term": "sales pitch",
    "meaning": "bài chào bán",
    "partOfSpeech": "n",
    "ipa": "/seɪlz pɪʧ/",
    "example": "The manager discussed the sales pitch for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-105",
    "term": "segmentation",
    "meaning": "phân khúc",
    "partOfSpeech": "n",
    "ipa": "/ˌsɛgmənˈteɪʃən/",
    "example": "The manager discussed the segmentation for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-106",
    "term": "sponsorship",
    "meaning": "tài trợ",
    "partOfSpeech": "n",
    "ipa": "/ˈspɑnsərˌʃɪp/",
    "example": "The manager discussed the sponsorship for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-107",
    "term": "survey response",
    "meaning": "phản hồi khảo sát",
    "partOfSpeech": "n",
    "ipa": "/ˈsərˌveɪ rɪˈspɑns/",
    "example": "The manager discussed the survey response for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-108",
    "term": "target market",
    "meaning": "thị trường mục tiêu",
    "partOfSpeech": "n",
    "ipa": "/ˈtərgət ˈmɑrkɪt/",
    "example": "The manager discussed the target market for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-109",
    "term": "trademark",
    "meaning": "nhãn hiệu đã đăng ký",
    "partOfSpeech": "n",
    "ipa": "/ˈtreɪdˌmɑrk/",
    "example": "The manager discussed the trademark for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-110",
    "term": "upsell",
    "meaning": "bán thêm",
    "partOfSpeech": "v",
    "ipa": "Nghe mẫu",
    "example": "The team will upsell the request for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-111",
    "term": "viral",
    "meaning": "lan truyền nhanh",
    "partOfSpeech": "adj",
    "ipa": "/ˈvaɪrəl/",
    "example": "The company selected an viral option for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-112",
    "term": "wholesale price",
    "meaning": "giá bán buôn",
    "partOfSpeech": "n",
    "ipa": "/ˈhoʊlˌseɪl praɪs/",
    "example": "The manager discussed the wholesale price for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-113",
    "term": "word-of-mouth",
    "meaning": "truyền miệng",
    "partOfSpeech": "n",
    "ipa": "Nghe mẫu",
    "example": "The manager discussed the word-of-mouth for the product campaign.",
    "topic": "Tiếp thị",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-114",
    "term": "arrival",
    "meaning": "sự đến nơi",
    "partOfSpeech": "n",
    "ipa": "/ərˈaɪvəl/",
    "example": "The manager discussed the arrival before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-115",
    "term": "boarding pass",
    "meaning": "thẻ lên máy bay",
    "partOfSpeech": "n",
    "ipa": "/ˈbɔrdɪŋ pæs/",
    "example": "The manager discussed the boarding pass before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-116",
    "term": "carrier",
    "meaning": "hãng vận chuyển",
    "partOfSpeech": "n",
    "ipa": "/ˈkɛriər/",
    "example": "The manager discussed the carrier before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-117",
    "term": "check-in",
    "meaning": "thủ tục nhận phòng/lên chuyến",
    "partOfSpeech": "n",
    "ipa": "Nghe mẫu",
    "example": "The manager discussed the check-in before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-118",
    "term": "customs declaration",
    "meaning": "khai báo hải quan",
    "partOfSpeech": "n",
    "ipa": "/ˈkəstəmz ˌdɛklərˈeɪʃən/",
    "example": "The manager discussed the customs declaration before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-119",
    "term": "departure gate",
    "meaning": "cổng khởi hành",
    "partOfSpeech": "n",
    "ipa": "/dɪˈpɑrʧər geɪt/",
    "example": "The manager discussed the departure gate before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-120",
    "term": "destination",
    "meaning": "điểm đến",
    "partOfSpeech": "n",
    "ipa": "/ˌdɛstɪˈneɪʃən/",
    "example": "The manager discussed the destination before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-121",
    "term": "direct flight",
    "meaning": "chuyến bay thẳng",
    "partOfSpeech": "n",
    "ipa": "/dɪˈrɛkt flaɪt/",
    "example": "The manager discussed the direct flight before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-122",
    "term": "embark",
    "meaning": "lên tàu; bắt đầu",
    "partOfSpeech": "v",
    "ipa": "/ɪmˈbɑrk/",
    "example": "The team will embark the request before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-123",
    "term": "excursion",
    "meaning": "chuyến tham quan ngắn",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈskərʒən/",
    "example": "The manager discussed the excursion before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-124",
    "term": "fare",
    "meaning": "giá vé",
    "partOfSpeech": "n",
    "ipa": "/fɛr/",
    "example": "The manager discussed the fare before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-125",
    "term": "freight",
    "meaning": "hàng hóa vận chuyển",
    "partOfSpeech": "n",
    "ipa": "/freɪt/",
    "example": "The manager discussed the freight before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-126",
    "term": "itinerary",
    "meaning": "lịch trình",
    "partOfSpeech": "n",
    "ipa": "/aɪˈtɪnərˌɛri/",
    "example": "The manager discussed the itinerary before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-127",
    "term": "layover",
    "meaning": "điểm dừng nối chuyến",
    "partOfSpeech": "n",
    "ipa": "/ˈleɪˌoʊvər/",
    "example": "The manager discussed the layover before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-128",
    "term": "lodge",
    "meaning": "đăng ký lưu trú",
    "partOfSpeech": "v",
    "ipa": "/lɑʤ/",
    "example": "The team will lodge the request before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-129",
    "term": "lost property",
    "meaning": "đồ thất lạc",
    "partOfSpeech": "n",
    "ipa": "/lɔst ˈprɑpərti/",
    "example": "The manager discussed the lost property before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-130",
    "term": "passenger",
    "meaning": "hành khách",
    "partOfSpeech": "n",
    "ipa": "/ˈpæsənʤər/",
    "example": "The manager discussed the passenger before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-131",
    "term": "platform",
    "meaning": "sân ga",
    "partOfSpeech": "n",
    "ipa": "/ˈplætˌfɔrm/",
    "example": "The manager discussed the platform before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-132",
    "term": "porter",
    "meaning": "nhân viên khuân hành lý",
    "partOfSpeech": "n",
    "ipa": "/ˈpɔrtər/",
    "example": "The manager discussed the porter before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-133",
    "term": "railway",
    "meaning": "đường sắt",
    "partOfSpeech": "n",
    "ipa": "/ˈreɪlˌweɪ/",
    "example": "The manager discussed the railway before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-134",
    "term": "reservation number",
    "meaning": "mã đặt chỗ",
    "partOfSpeech": "n",
    "ipa": "/ˌrɛzərˈveɪʃən ˈnəmbər/",
    "example": "The manager discussed the reservation number before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-135",
    "term": "route",
    "meaning": "tuyến đường",
    "partOfSpeech": "n",
    "ipa": "/rut/",
    "example": "The manager discussed the route before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-136",
    "term": "shuttle",
    "meaning": "xe đưa đón",
    "partOfSpeech": "n",
    "ipa": "/ˈʃətəl/",
    "example": "The manager discussed the shuttle before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-137",
    "term": "terminal",
    "meaning": "nhà ga; nhà ga sân bay",
    "partOfSpeech": "n",
    "ipa": "/ˈtərmənəl/",
    "example": "The manager discussed the terminal before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-138",
    "term": "transit",
    "meaning": "quá cảnh",
    "partOfSpeech": "n",
    "ipa": "/ˈtrænzɪt/",
    "example": "The manager discussed the transit before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-139",
    "term": "travel insurance",
    "meaning": "bảo hiểm du lịch",
    "partOfSpeech": "n",
    "ipa": "/ˈtrævəl ˌɪnˈʃʊrəns/",
    "example": "The manager discussed the travel insurance before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-140",
    "term": "vacant",
    "meaning": "còn trống",
    "partOfSpeech": "adj",
    "ipa": "/ˈveɪkənt/",
    "example": "The company selected an vacant option before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-141",
    "term": "vehicle",
    "meaning": "phương tiện",
    "partOfSpeech": "n",
    "ipa": "/ˈviɪkəl/",
    "example": "The manager discussed the vehicle before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-142",
    "term": "visa application",
    "meaning": "đơn xin thị thực",
    "partOfSpeech": "n",
    "ipa": "/ˈvizə ˌæpləˈkeɪʃən/",
    "example": "The manager discussed the visa application before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-143",
    "term": "warehouse receipt",
    "meaning": "biên nhận kho",
    "partOfSpeech": "n",
    "ipa": "/ˈwɛˌrhaʊs rɪˈsit/",
    "example": "The manager discussed the warehouse receipt before the business trip.",
    "topic": "Du lịch",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-144",
    "term": "assembly line",
    "meaning": "dây chuyền lắp ráp",
    "partOfSpeech": "n",
    "ipa": "/əˈsɛmbli laɪn/",
    "example": "The manager discussed the assembly line before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-145",
    "term": "batch",
    "meaning": "lô hàng; mẻ sản xuất",
    "partOfSpeech": "n",
    "ipa": "/bæʧ/",
    "example": "The manager discussed the batch before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-146",
    "term": "capacity",
    "meaning": "công suất",
    "partOfSpeech": "n",
    "ipa": "/kəˈpæsɪti/",
    "example": "The manager discussed the capacity before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-147",
    "term": "component",
    "meaning": "linh kiện",
    "partOfSpeech": "n",
    "ipa": "/kəmˈpoʊnənt/",
    "example": "The manager discussed the component before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-148",
    "term": "consignment",
    "meaning": "lô hàng gửi",
    "partOfSpeech": "n",
    "ipa": "/kənˈsaɪnmənt/",
    "example": "The manager discussed the consignment before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-149",
    "term": "defect",
    "meaning": "khiếm khuyết",
    "partOfSpeech": "n",
    "ipa": "/ˈdifɛkt/",
    "example": "The manager discussed the defect before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-150",
    "term": "distribution center",
    "meaning": "trung tâm phân phối",
    "partOfSpeech": "n",
    "ipa": "/ˌdɪstrəˈbjuʃən ˈsɛnər/",
    "example": "The manager discussed the distribution center before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-151",
    "term": "durable",
    "meaning": "bền",
    "partOfSpeech": "adj",
    "ipa": "/ˈdʊrəbəl/",
    "example": "The company selected an durable option before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-152",
    "term": "equipment",
    "meaning": "thiết bị",
    "partOfSpeech": "n",
    "ipa": "/ɪkˈwɪpmənt/",
    "example": "The manager discussed the equipment before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-153",
    "term": "facility",
    "meaning": "cơ sở vật chất",
    "partOfSpeech": "n",
    "ipa": "/fəˈsɪlɪti/",
    "example": "The manager discussed the facility before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-154",
    "term": "inspection",
    "meaning": "kiểm tra",
    "partOfSpeech": "n",
    "ipa": "/ˌɪnˈspɛkʃən/",
    "example": "The manager discussed the inspection before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-155",
    "term": "inventory control",
    "meaning": "kiểm soát tồn kho",
    "partOfSpeech": "n",
    "ipa": "/ˌɪnvənˈtɔri kənˈtroʊl/",
    "example": "The manager discussed the inventory control before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-156",
    "term": "maintenance schedule",
    "meaning": "lịch bảo trì",
    "partOfSpeech": "n",
    "ipa": "/ˈmeɪntənəns ˈskɛʤʊl/",
    "example": "The manager discussed the maintenance schedule before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-157",
    "term": "manufacturer",
    "meaning": "nhà sản xuất",
    "partOfSpeech": "n",
    "ipa": "/ˌmænjəˈfækʧərər/",
    "example": "The manager discussed the manufacturer before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-158",
    "term": "output",
    "meaning": "sản lượng",
    "partOfSpeech": "n",
    "ipa": "/ˈaʊtˌpʊt/",
    "example": "The manager discussed the output before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-159",
    "term": "packaging",
    "meaning": "bao bì",
    "partOfSpeech": "n",
    "ipa": "/ˈpækɪʤɪŋ/",
    "example": "The manager discussed the packaging before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-160",
    "term": "plant",
    "meaning": "nhà máy",
    "partOfSpeech": "n",
    "ipa": "/plænt/",
    "example": "The manager discussed the plant before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-161",
    "term": "prototype",
    "meaning": "mẫu thử",
    "partOfSpeech": "n",
    "ipa": "/ˈproʊtoʊˌtaɪp/",
    "example": "The manager discussed the prototype before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-162",
    "term": "quality assurance",
    "meaning": "đảm bảo chất lượng",
    "partOfSpeech": "n",
    "ipa": "/kˈwɑləti əˈʃʊrəns/",
    "example": "The manager discussed the quality assurance before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-163",
    "term": "recall",
    "meaning": "việc thu hồi sản phẩm",
    "partOfSpeech": "n",
    "ipa": "/ˈriˌkɔl/",
    "example": "The manager discussed the recall before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-164",
    "term": "raw material",
    "meaning": "nguyên liệu thô",
    "partOfSpeech": "n",
    "ipa": "/rɑ məˈtɪriəl/",
    "example": "The manager discussed the raw material before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-165",
    "term": "specification",
    "meaning": "quy cách kỹ thuật",
    "partOfSpeech": "n",
    "ipa": "/ˌspɛsɪfɪˈkeɪʃən/",
    "example": "The manager discussed the specification before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-166",
    "term": "stockroom",
    "meaning": "phòng/kho chứa hàng",
    "partOfSpeech": "n",
    "ipa": "/ˈstɑˌkrum/",
    "example": "The manager discussed the stockroom before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-167",
    "term": "supplier",
    "meaning": "nhà cung cấp",
    "partOfSpeech": "n",
    "ipa": "/səˈplaɪər/",
    "example": "The manager discussed the supplier before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-168",
    "term": "turnaround",
    "meaning": "thời gian hoàn thành",
    "partOfSpeech": "n",
    "ipa": "/ˈtərnərˌaʊnd/",
    "example": "The manager discussed the turnaround before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-169",
    "term": "unit cost",
    "meaning": "chi phí đơn vị",
    "partOfSpeech": "n",
    "ipa": "/ˈjunɪt kɔst/",
    "example": "The manager discussed the unit cost before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-170",
    "term": "vendor",
    "meaning": "nhà bán hàng",
    "partOfSpeech": "n",
    "ipa": "/ˈvɛndər/",
    "example": "The manager discussed the vendor before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-171",
    "term": "workflow",
    "meaning": "quy trình công việc",
    "partOfSpeech": "n",
    "ipa": "/ˈwərkˌfloʊ/",
    "example": "The manager discussed the workflow before the shipment leaves the factory.",
    "topic": "Sản xuất",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-172",
    "term": "algorithm",
    "meaning": "thuật toán",
    "partOfSpeech": "n",
    "ipa": "/ˈælgərˌɪðəm/",
    "example": "The manager discussed the algorithm during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-173",
    "term": "bandwidth",
    "meaning": "băng thông",
    "partOfSpeech": "n",
    "ipa": "/ˈbændwɪdθ/",
    "example": "The manager discussed the bandwidth during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-174",
    "term": "backup",
    "meaning": "bản sao lưu",
    "partOfSpeech": "n",
    "ipa": "/ˈbæˌkəp/",
    "example": "The manager discussed the backup during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-175",
    "term": "cloud computing",
    "meaning": "điện toán đám mây",
    "partOfSpeech": "n",
    "ipa": "/klaʊd kəmˈpjutɪŋ/",
    "example": "The manager discussed the cloud computing during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-176",
    "term": "cybersecurity",
    "meaning": "an ninh mạng",
    "partOfSpeech": "n",
    "ipa": "Nghe mẫu",
    "example": "The manager discussed the cybersecurity during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-177",
    "term": "data breach",
    "meaning": "rò rỉ dữ liệu",
    "partOfSpeech": "n",
    "ipa": "/ˈdætə briʧ/",
    "example": "The manager discussed the data breach during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-178",
    "term": "deployment",
    "meaning": "việc triển khai",
    "partOfSpeech": "n",
    "ipa": "/dɪˈplɔɪmənt/",
    "example": "The manager discussed the deployment during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-179",
    "term": "encryption",
    "meaning": "mã hóa",
    "partOfSpeech": "n",
    "ipa": "/ɛnˈkrɪpʃən/",
    "example": "The manager discussed the encryption during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-180",
    "term": "firewall",
    "meaning": "tường lửa",
    "partOfSpeech": "n",
    "ipa": "/ˈfaɪrwɑl/",
    "example": "The manager discussed the firewall during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-181",
    "term": "hardware",
    "meaning": "phần cứng",
    "partOfSpeech": "n",
    "ipa": "/ˈhɑrdˌwɛr/",
    "example": "The manager discussed the hardware during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-182",
    "term": "interface",
    "meaning": "giao diện",
    "partOfSpeech": "n",
    "ipa": "/ˈɪnərˌfeɪs/",
    "example": "The manager discussed the interface during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-183",
    "term": "malware",
    "meaning": "phần mềm độc hại",
    "partOfSpeech": "n",
    "ipa": "/ˈmælˌwɛr/",
    "example": "The manager discussed the malware during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-184",
    "term": "network outage",
    "meaning": "sự cố mạng",
    "partOfSpeech": "n",
    "ipa": "/ˈnɛtˌwərk ˈaʊtɪʤ/",
    "example": "The manager discussed the network outage during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-185",
    "term": "operating system",
    "meaning": "hệ điều hành",
    "partOfSpeech": "n",
    "ipa": "/ˈɔpərˌeɪtɪŋ ˈsɪstəm/",
    "example": "The manager discussed the operating system during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-186",
    "term": "password reset",
    "meaning": "đặt lại mật khẩu",
    "partOfSpeech": "n",
    "ipa": "/ˈpæsˌwərd ˈrisɛt/",
    "example": "The manager discussed the password reset during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-187",
    "term": "phishing",
    "meaning": "lừa đảo giả mạo",
    "partOfSpeech": "n",
    "ipa": "/ˈfɪʃɪŋ/",
    "example": "The manager discussed the phishing during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-188",
    "term": "platform update",
    "meaning": "cập nhật nền tảng",
    "partOfSpeech": "n",
    "ipa": "/ˈplætˌfɔrm ˈəpˌdeɪt/",
    "example": "The manager discussed the platform update during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-189",
    "term": "router",
    "meaning": "bộ định tuyến",
    "partOfSpeech": "n",
    "ipa": "/ˈrutər/",
    "example": "The manager discussed the router during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-190",
    "term": "server maintenance",
    "meaning": "bảo trì máy chủ",
    "partOfSpeech": "n",
    "ipa": "/ˈsərvər ˈmeɪntənəns/",
    "example": "The manager discussed the server maintenance during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-191",
    "term": "software license",
    "meaning": "giấy phép phần mềm",
    "partOfSpeech": "n",
    "ipa": "/ˈsɔfˌwɛr ˈlaɪsəns/",
    "example": "The manager discussed the software license during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-192",
    "term": "spreadsheet",
    "meaning": "bảng tính",
    "partOfSpeech": "n",
    "ipa": "/ˈsprɛdˌʃit/",
    "example": "The manager discussed the spreadsheet during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-193",
    "term": "troubleshoot",
    "meaning": "khắc phục sự cố",
    "partOfSpeech": "v",
    "ipa": "Nghe mẫu",
    "example": "The team will troubleshoot the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-194",
    "term": "upload",
    "meaning": "tải lên",
    "partOfSpeech": "v",
    "ipa": "/ˈəˌploʊd/",
    "example": "The team will upload the request during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-195",
    "term": "user interface",
    "meaning": "giao diện người dùng",
    "partOfSpeech": "n",
    "ipa": "/ˈjuzər ˈɪnərˌfeɪs/",
    "example": "The manager discussed the user interface during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-196",
    "term": "virtual meeting",
    "meaning": "cuộc họp trực tuyến",
    "partOfSpeech": "n",
    "ipa": "/ˈvərʧuəl ˈmitɪŋ/",
    "example": "The manager discussed the virtual meeting during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-197",
    "term": "wireless",
    "meaning": "không dây",
    "partOfSpeech": "adj",
    "ipa": "/ˈwaɪrlɪs/",
    "example": "The company selected an wireless option during system maintenance.",
    "topic": "Công nghệ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-198",
    "term": "agenda item",
    "meaning": "mục chương trình họp",
    "partOfSpeech": "n",
    "ipa": "/əˈʤɛndə ˈaɪtəm/",
    "example": "The manager discussed the agenda item before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-199",
    "term": "briefing note",
    "meaning": "bản ghi chú tóm tắt",
    "partOfSpeech": "n",
    "ipa": "/ˈbrifɪŋ noʊt/",
    "example": "The manager discussed the briefing note before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-200",
    "term": "conference call",
    "meaning": "cuộc gọi hội nghị",
    "partOfSpeech": "n",
    "ipa": "/ˈkɑnfərəns kɔl/",
    "example": "The manager discussed the conference call before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-201",
    "term": "correspondence",
    "meaning": "thư từ trao đổi",
    "partOfSpeech": "n",
    "ipa": "/ˌkɔrəˈspɑndəns/",
    "example": "The manager discussed the correspondence before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-202",
    "term": "deadline extension",
    "meaning": "gia hạn thời hạn",
    "partOfSpeech": "n",
    "ipa": "/ˈdɛˌdlaɪn ɪkˈstɛnʃən/",
    "example": "The manager discussed the deadline extension before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-203",
    "term": "documentary evidence",
    "meaning": "bằng chứng tài liệu",
    "partOfSpeech": "n",
    "ipa": "/ˌdɑkjəˈmɛnəri ˈɛvədəns/",
    "example": "The manager discussed the documentary evidence before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-204",
    "term": "filing system",
    "meaning": "hệ thống lưu trữ hồ sơ",
    "partOfSpeech": "n",
    "ipa": "/ˈfaɪlɪŋ ˈsɪstəm/",
    "example": "The manager discussed the filing system before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-205",
    "term": "follow-up",
    "meaning": "việc theo dõi tiếp",
    "partOfSpeech": "n",
    "ipa": "/ˈfɑloʊˌəp/",
    "example": "The manager discussed the follow-up before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-206",
    "term": "front desk",
    "meaning": "quầy lễ tân",
    "partOfSpeech": "n",
    "ipa": "/frənt dɛsk/",
    "example": "The manager discussed the front desk before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-207",
    "term": "inquiry",
    "meaning": "yêu cầu hỏi thông tin",
    "partOfSpeech": "n",
    "ipa": "/ˌɪnkˈwaɪˌri/",
    "example": "The manager discussed the inquiry before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-208",
    "term": "minutes",
    "meaning": "biên bản cuộc họp",
    "partOfSpeech": "n",
    "ipa": "/ˈmɪnəts/",
    "example": "The manager discussed the minutes before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-209",
    "term": "notice board",
    "meaning": "bảng thông báo",
    "partOfSpeech": "n",
    "ipa": "/ˈnoʊtɪs bɔrd/",
    "example": "The manager discussed the notice board before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-210",
    "term": "office supplies",
    "meaning": "văn phòng phẩm",
    "partOfSpeech": "n",
    "ipa": "/ˈɔfəs səˈplaɪz/",
    "example": "The manager discussed the office supplies before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-211",
    "term": "project brief",
    "meaning": "bản tóm tắt dự án",
    "partOfSpeech": "n",
    "ipa": "/ˈprɑʤɛkt brif/",
    "example": "The manager discussed the project brief before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-212",
    "term": "proposal",
    "meaning": "đề xuất",
    "partOfSpeech": "n",
    "ipa": "/prəˈpoʊzəl/",
    "example": "The manager discussed the proposal before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-213",
    "term": "record keeping",
    "meaning": "việc lưu trữ hồ sơ",
    "partOfSpeech": "n",
    "ipa": "/ˈrɛkərd ˈkipɪŋ/",
    "example": "The manager discussed the record keeping before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-214",
    "term": "reminder",
    "meaning": "lời nhắc",
    "partOfSpeech": "n",
    "ipa": "/riˈmaɪndər/",
    "example": "The manager discussed the reminder before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-215",
    "term": "reporting line",
    "meaning": "cấp báo cáo",
    "partOfSpeech": "n",
    "ipa": "/rɪˈpɔrtɪŋ laɪn/",
    "example": "The manager discussed the reporting line before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-216",
    "term": "receptionist",
    "meaning": "nhân viên lễ tân",
    "partOfSpeech": "n",
    "ipa": "/rɪˈsɛpʃənɪst/",
    "example": "The manager discussed the receptionist before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-217",
    "term": "room booking",
    "meaning": "đặt phòng họp",
    "partOfSpeech": "n",
    "ipa": "/rum ˈbʊkɪŋ/",
    "example": "The manager discussed the room booking before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-218",
    "term": "status update",
    "meaning": "cập nhật trạng thái",
    "partOfSpeech": "n",
    "ipa": "/ˈstætəs ˈəpˌdeɪt/",
    "example": "The manager discussed the status update before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-219",
    "term": "task list",
    "meaning": "danh sách công việc",
    "partOfSpeech": "n",
    "ipa": "/tæsk lɪst/",
    "example": "The manager discussed the task list before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-220",
    "term": "team meeting",
    "meaning": "cuộc họp nhóm",
    "partOfSpeech": "n",
    "ipa": "/tim ˈmitɪŋ/",
    "example": "The manager discussed the team meeting before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-221",
    "term": "timeline",
    "meaning": "dòng thời gian",
    "partOfSpeech": "n",
    "ipa": "/ˈtaɪmlaɪn/",
    "example": "The manager discussed the timeline before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-222",
    "term": "videoconference",
    "meaning": "hội nghị truyền hình",
    "partOfSpeech": "n",
    "ipa": "/ˈvidioʊˌkɑnfrəns/",
    "example": "The manager discussed the videoconference before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-223",
    "term": "workstation",
    "meaning": "trạm làm việc",
    "partOfSpeech": "n",
    "ipa": "/ˈwərkˌsteɪʃən/",
    "example": "The manager discussed the workstation before the Monday meeting.",
    "topic": "Văn phòng",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-224",
    "term": "carry out",
    "meaning": "thực hiện",
    "partOfSpeech": "v",
    "ipa": "/ˈkɛri aʊt/",
    "example": "The team will carry out the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-225",
    "term": "call off",
    "meaning": "hủy; hủy bỏ",
    "partOfSpeech": "v",
    "ipa": "/kɔl ɔf/",
    "example": "The team will call off the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-226",
    "term": "come across",
    "meaning": "bắt gặp; tình cờ gặp",
    "partOfSpeech": "v",
    "ipa": "/kəm əˈkrɔs/",
    "example": "The team will come across the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-227",
    "term": "draw up",
    "meaning": "soạn thảo",
    "partOfSpeech": "v",
    "ipa": "/drɔ əp/",
    "example": "The team will draw up the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-228",
    "term": "figure out",
    "meaning": "tìm ra; hiểu ra",
    "partOfSpeech": "v",
    "ipa": "/ˈfɪgjər aʊt/",
    "example": "The team will figure out the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-229",
    "term": "fill in",
    "meaning": "điền vào",
    "partOfSpeech": "v",
    "ipa": "/fɪl ɪn/",
    "example": "The team will fill in the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-230",
    "term": "follow up",
    "meaning": "theo dõi tiếp",
    "partOfSpeech": "v",
    "ipa": "/ˈfɑloʊ əp/",
    "example": "The team will follow up the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-231",
    "term": "hand in",
    "meaning": "nộp",
    "partOfSpeech": "v",
    "ipa": "/hænd ɪn/",
    "example": "The team will hand in the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-232",
    "term": "look into",
    "meaning": "điều tra; xem xét",
    "partOfSpeech": "v",
    "ipa": "/lʊk ˈɪntu/",
    "example": "The team will look into the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-233",
    "term": "make up",
    "meaning": "bù đắp; cấu thành",
    "partOfSpeech": "v",
    "ipa": "/meɪk əp/",
    "example": "The team will make up the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-234",
    "term": "put off",
    "meaning": "hoãn lại",
    "partOfSpeech": "v",
    "ipa": "/pʊt ɔf/",
    "example": "The team will put off the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-235",
    "term": "run out of",
    "meaning": "hết",
    "partOfSpeech": "v",
    "ipa": "/rən aʊt əv/",
    "example": "The team will run out of the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-236",
    "term": "set up",
    "meaning": "thiết lập",
    "partOfSpeech": "v",
    "ipa": "/sɛt əp/",
    "example": "The team will set up the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-237",
    "term": "take over",
    "meaning": "tiếp quản",
    "partOfSpeech": "v",
    "ipa": "/teɪk ˈoʊvər/",
    "example": "The team will take over the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-238",
    "term": "turn down",
    "meaning": "từ chối",
    "partOfSpeech": "v",
    "ipa": "/tərn daʊn/",
    "example": "The team will turn down the request before Friday.",
    "topic": "Cụm động từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-239",
    "term": "be responsible for",
    "meaning": "chịu trách nhiệm về",
    "partOfSpeech": "adj",
    "ipa": "/bi riˈspɑnsəbəl fər/",
    "example": "The company selected an be responsible for option in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-240",
    "term": "be scheduled to",
    "meaning": "được lên lịch để",
    "partOfSpeech": "adj",
    "ipa": "/bi ˈskɛʤʊld tɪ/",
    "example": "The company selected an be scheduled to option in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-241",
    "term": "be subject to",
    "meaning": "phụ thuộc vào; chịu sự",
    "partOfSpeech": "adj",
    "ipa": "/bi ˈsəbʤɪkt tɪ/",
    "example": "The company selected an be subject to option in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-242",
    "term": "in advance",
    "meaning": "trước; trước thời hạn",
    "partOfSpeech": "adv",
    "ipa": "/ɪn ədˈvæns/",
    "example": "Please complete the task in advance.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-243",
    "term": "in charge of",
    "meaning": "phụ trách",
    "partOfSpeech": "adj",
    "ipa": "/ɪn ʧɑrʤ əv/",
    "example": "The company selected an in charge of option in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-244",
    "term": "in accordance with",
    "meaning": "phù hợp với",
    "partOfSpeech": "prep",
    "ipa": "/ɪn əˈkɔrdəns wɪθ/",
    "example": "The manager discussed the in accordance with in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-245",
    "term": "on behalf of",
    "meaning": "thay mặt cho",
    "partOfSpeech": "prep",
    "ipa": "/ɔn bɪˈhæf əv/",
    "example": "The manager discussed the on behalf of in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-246",
    "term": "on time",
    "meaning": "đúng giờ",
    "partOfSpeech": "adv",
    "ipa": "/ɔn taɪm/",
    "example": "Please complete the task on time.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-247",
    "term": "prior to",
    "meaning": "trước khi",
    "partOfSpeech": "prep",
    "ipa": "/praɪər tɪ/",
    "example": "The manager discussed the prior to in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-248",
    "term": "regardless of",
    "meaning": "bất kể",
    "partOfSpeech": "prep",
    "ipa": "/rəˈgɑrdləs əv/",
    "example": "The manager discussed the regardless of in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-249",
    "term": "sign a contract",
    "meaning": "ký hợp đồng",
    "partOfSpeech": "v",
    "ipa": "/saɪn ə ˈkɑnˌtrækt/",
    "example": "The team will sign a contract the request in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  },
  {
    "id": "plus-250",
    "term": "meet a deadline",
    "meaning": "đáp ứng thời hạn",
    "partOfSpeech": "v",
    "ipa": "/mit ə ˈdɛˌdlaɪn/",
    "example": "The team will meet a deadline the request in the client email.",
    "topic": "Cụm từ",
    "source": "Bổ sung theo chủ đề TOEIC"
  }
];

export const vocabularyExtractionReport = {
  "coreRows": 1000,
  "supplementalRows": 250,
  "totalRows": 1250,
  "missingNumberedRows": []
} as const;
