import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const sourcePath = path.join(root, "vocabulary_source_raw.txt");
const supplementalPath = path.join(root, "shared", "supplemental-vocabulary.generated.json");
const outputPath = path.join(root, "shared", "vocabulary.generated.ts");

const raw = fs.readFileSync(sourcePath, "utf8").replace(/\r/g, "");
const lines = raw.split("\n");

const categories = [
  "Kinh doanh", "Văn phòng", "Tài chính", "Du lịch", "Nhân sự", "Công nghệ", "Sản xuất", "Dịch vụ khách hàng",
];

function inferTopic(term) {
  const lower = term.toLowerCase();
  if (/(flight|airline|airport|baggage|boarding|cabin|hotel|tour|travel|passport|luggage|ship|freight)/.test(lower)) return "Du lịch";
  if (/(account|audit|bank|budget|cash|cost|credit|finance|fund|income|invoice|payment|price|profit|salary|tax)/.test(lower)) return "Tài chính";
  if (/(applicant|career|employee|employ|hire|interview|manager|personnel|recruit|staff|training|workplace)/.test(lower)) return "Nhân sự";
  if (/(computer|browser|database|device|internet|network|online|software|website)/.test(lower)) return "Công nghệ";
  if (/(factory|manufact|material|product|quality|repair|supply|warranty)/.test(lower)) return "Sản xuất";
  if (/(customer|client|complaint|service|support)/.test(lower)) return "Dịch vụ khách hàng";
  if (/(office|agenda|appointment|boardroom|brief|conference|document|meeting|memo|schedule)/.test(lower)) return "Văn phòng";
  return categories[(term.length + lower.charCodeAt(0)) % categories.length];
}

function makeExample(term, partOfSpeech, topic = inferTopic(term)) {
  const lower = term.toLowerCase();
  const context = {
    "Tài chính": "in the quarterly financial report",
    "Du lịch": "before the business trip",
    "Nhân sự": "with the HR department",
    "Công nghệ": "during system maintenance",
    "Sản xuất": "before the shipment leaves the factory",
    "Dịch vụ khách hàng": "at the customer service desk",
    "Văn phòng": "before the Monday meeting",
    "Kinh doanh": "at the quarterly strategy meeting",
  }[topic] ?? "at the office";
  if (partOfSpeech.includes("v")) return `The team will ${lower} the request ${context}.`;
  if (partOfSpeech.includes("adj")) return `The company selected an ${lower} option ${context}.`;
  if (partOfSpeech.includes("adv")) return `The staff responded ${lower} to the client request.`;
  if (partOfSpeech.includes("prep")) return `The report was prepared ${lower} the company policy.`;
  return `The manager discussed the ${lower} ${context}.`;
}

const startPattern = /^(\d+)\s+(.+?)\s+((?:adj|adv|n|v|prep|conj|det|pron)(?:,\s?(?:adj|adv|n|v|prep|conj|det|pron))*)\s+(\/[^/]+\/)(?:\s+(.*))?$/;
const blocks = [];
let current = null;

for (const line of lines) {
  const clean = line.trim();
  const match = clean.match(startPattern);
  if (match) {
    if (current) blocks.push(current);
    current = { match, overflow: [] };
    continue;
  }

  if (!current || !clean) continue;
  if (/^(1000 từ vựng|mochidemy\.com|STT |Giải thích loại từ)/i.test(clean)) continue;
  current.overflow.push(clean);
}
if (current) blocks.push(current);

const rows = blocks
  .filter(({ match }) => Number(match[1]) <= 1000)
  .map(({ match, overflow }) => {
    const [, number, term, partOfSpeech, ipa, lineMeaning = ""] = match;
    const normalizedTerm = term.trim().replace(/\s+/g, " ");
    const meaningfulOverflow = overflow
      .map(text => text.replace(/\/[^/]+\//g, "").trim())
      .filter(Boolean);
    const meaning = [lineMeaning, ...meaningfulOverflow]
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    const topic = inferTopic(normalizedTerm);
    return {
      id: `core-${number}`,
      term: normalizedTerm,
      meaning: meaning || "Xem nghĩa trong ngữ cảnh TOEIC.",
      partOfSpeech: partOfSpeech.trim(),
      ipa: ipa.trim(),
      example: makeExample(normalizedTerm, partOfSpeech, topic),
      topic,
      source: "PDF đính kèm",
    };
  });

const specialRows = [
  [125, "boardroom", "n", "/ˈbɔːrd.ruːm/", "phòng họp ban giám đốc"],
  [151, "candidate", "n", "/ˈkæn.dɪ.dət/", "ứng cử viên, ứng viên"],
  [163, "certification", "n", "/ˌsɜːr.t̬ə.fɪˈkeɪ.ʃən/", "sự cấp giấy chứng nhận"],
  [199, "complex", "n, adj", "/ˈkɑːm.pleks/", "khu phức hợp; phức tạp"],
  [213, "conduct", "n, v", "/kənˈdʌkt/", "hạnh kiểm, đạo đức; tiến hành, chỉ đạo"],
  [233, "corporation", "n", "/ˌkɔːr.pəˈreɪ.ʃən/", "đoàn thể, tập đoàn"],
  [299, "director", "n", "/dəˈrek.tɚ/", "giám đốc, người điều hành, đạo diễn"],
  [315, "dispute", "n, v", "/dɪˈspjuːt/", "cuộc bàn cãi, cuộc tranh luận; tranh luận"],
  [321, "dividend", "n", "/ˈdɪv.ə.dend/", "cổ tức; số bị chia"],
  [339, "economical", "adj", "/ˌiː.kəˈnɑː.mɪ.kəl/", "tiết kiệm, kinh tế"],
  [421, "financial", "adj", "/faɪˈnæn.ʃəl/", "(thuộc) tài chính"],
  [700, "present", "n", "/ˈprez.ənt/", "hiện tại; quà tặng"],
  [766, "refusal", "n", "/rɪˈfjuː.zəl/", "sự từ chối, sự khước từ"],
  [808, "resolve", "n, v", "/rɪˈzɑːlv/", "quyết tâm; giải quyết"],
].map(([number, term, partOfSpeech, ipa, meaning]) => ({
  id: `core-${number}`,
  term,
  partOfSpeech,
  ipa,
  meaning,
  example: makeExample(term, partOfSpeech, inferTopic(term)),
  topic: inferTopic(term),
  source: "PDF đính kèm",
}));

rows.push(...specialRows);

const supplementalVocabulary = fs.existsSync(supplementalPath)
  ? JSON.parse(fs.readFileSync(supplementalPath, "utf8"))
  : [];
const allVocabulary = [...rows.sort((a, b) => Number(a.id.replace("core-", "")) - Number(b.id.replace("core-", ""))), ...supplementalVocabulary];

const missing = [];
for (let id = 1; id <= 1000; id += 1) {
  const key = `core-${id}`;
  if (!rows.some(row => row.id === key)) missing.push(id);
}

const generated = `// Tự động tạo từ tài liệu người dùng cung cấp và danh sách TOEIC bổ sung. Không chỉnh sửa trực tiếp.\n\nexport type VocabularyItem = {\n  id: string;\n  term: string;\n  meaning: string;\n  partOfSpeech: string;\n  ipa: string;\n  example: string;\n  topic: string;\n  source: string;\n};\n\nexport const coreVocabulary: VocabularyItem[] = ${JSON.stringify(rows, null, 2)};\n\nexport const supplementalVocabulary: VocabularyItem[] = ${JSON.stringify(supplementalVocabulary, null, 2)};\n\nexport const vocabulary: VocabularyItem[] = ${JSON.stringify(allVocabulary, null, 2)};\n\nexport const vocabularyExtractionReport = ${JSON.stringify({ coreRows: rows.length, supplementalRows: supplementalVocabulary.length, totalRows: allVocabulary.length, missingNumberedRows: missing }, null, 2)} as const;\n`;

fs.writeFileSync(outputPath, generated, "utf8");
console.log(JSON.stringify({ coreRows: rows.length, supplementalRows: supplementalVocabulary.length, totalRows: allVocabulary.length, missingNumberedRows: missing }, null, 2));
