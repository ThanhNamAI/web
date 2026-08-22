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

function makeExamples(term, partOfSpeech, topic = inferTopic(term)) {
  const lower = term.toLowerCase().replace(" (to)", " to");
  const tags = partOfSpeech.split(",").map(tag => tag.trim());
  const context = {
    "Tài chính": ["the quarterly financial report", "the client invoice", "the budget review"],
    "Du lịch": ["the business trip", "the airport transfer", "the travel itinerary"],
    "Nhân sự": ["the HR meeting", "the onboarding process", "the staff evaluation"],
    "Công nghệ": ["system maintenance", "the software update", "the support request"],
    "Sản xuất": ["the factory shipment", "the quality inspection", "the supply schedule"],
    "Dịch vụ khách hàng": ["the customer follow-up", "the service desk", "the client request"],
    "Văn phòng": ["the Monday meeting", "the internal memo", "the project agenda"],
    "Kinh doanh": ["the strategy meeting", "the sales proposal", "the contract review"],
  }[topic] ?? ["the office meeting", "the project update", "the client email"];
  const article = /^[aeiou]/.test(lower) ? "an" : "a";
  const templates = tags.includes("adv")
    ? [`The staff responded ${lower} to the client email.`, `The task was completed ${lower}.`, `The team worked ${lower} during ${context[0]}.`]
    : tags.includes("prep")
      ? [`The report was prepared ${lower} company policy.`, `The request was handled ${lower} the procedure.`, `The team acted ${lower} the contract terms.`]
      : tags.includes("adj")
        ? [`The client chose ${article} ${lower} option for ${context[0]}.`, `We need ${article} ${lower} response before ${context[1]}.`, `The report explains why the ${lower} approach matters.`]
        : tags.includes("v")
          ? [`The team will ${lower} the request before the deadline.`, `Could you ${lower} this item after the review?`, `We need to ${lower} the document for ${context[0]}.`]
          : [`The team discussed the ${lower} during ${context[0]}.`, `Please attach the ${lower} to the follow-up email.`, `The manager asked for an update on the ${lower}.`];
  const offset = [...lower].reduce((sum, char) => sum + char.charCodeAt(0), 0) % templates.length;
  return templates.map((_, index) => templates[(index + offset) % templates.length]);
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
    let normalizedTerm = term.trim().replace(/\s+/g, " ");
    // The PDF contains "package" as both a verb and a noun. Keep both legitimate senses distinct for learners.
    if (normalizedTerm.toLowerCase() === "package" && partOfSpeech.trim().includes("v")) normalizedTerm = "to package";
    const meaningfulOverflow = overflow
      .map(text => text.replace(/\/[^/]+\//g, "").trim())
      .filter(Boolean);
    const meaning = [lineMeaning, ...meaningfulOverflow]
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    const topic = inferTopic(normalizedTerm);
    const examples = makeExamples(normalizedTerm, partOfSpeech, topic);
    return {
      id: `core-${number}`,
      term: normalizedTerm,
      meaning: meaning || "Xem nghĩa trong ngữ cảnh TOEIC.",
      partOfSpeech: partOfSpeech.trim(),
      ipa: ipa.trim(),
      example: examples[0],
      examples,
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
].map(([number, term, partOfSpeech, ipa, meaning]) => {
  const topic = inferTopic(term);
  const examples = makeExamples(term, partOfSpeech, topic);
  return { id: `core-${number}`, term, partOfSpeech, ipa, meaning, example: examples[0], examples, topic, source: "PDF đính kèm" };
});

rows.push(...specialRows);

const supplementalVocabulary = fs.existsSync(supplementalPath)
  ? JSON.parse(fs.readFileSync(supplementalPath, "utf8"))
  : [];
const normalizedTerm = value => value.trim().toLowerCase().replace(/\s+/g, " ");
const coreTerms = new Set(rows.map(item => normalizedTerm(item.term)));
const uniqueSupplemental = supplementalVocabulary.filter(item => {
  const term = normalizedTerm(item.term);
  if (coreTerms.has(term)) return false;
  coreTerms.add(term);
  return true;
});
const finalizedSupplemental = uniqueSupplemental.map((item, index) => {
  const examples = makeExamples(item.term, item.partOfSpeech, item.topic);
  return { ...item, id: `plus-${index + 1}`, example: examples[0], examples };
});
const withAudioMetadata = item => ({
  ...item,
  audio: {
    word: { audioUrl: null, transcript: item.term, source: "device-synthetic", defaultRate: 0.88 },
    examples: item.examples.map((transcript, index) => ({ id: `${item.id}-example-${index + 1}`, audioUrl: null, transcript, source: "device-synthetic", defaultRate: 0.88 })),
  },
});
const allVocabulary = [...rows.sort((a, b) => Number(a.id.replace("core-", "")) - Number(b.id.replace("core-", ""))), ...finalizedSupplemental].map(withAudioMetadata);

const missing = [];
for (let id = 1; id <= 1000; id += 1) {
  const key = `core-${id}`;
  if (!rows.some(row => row.id === key)) missing.push(id);
}

const generated = `// Tự động tạo từ tài liệu người dùng cung cấp và danh sách TOEIC bổ sung. Không chỉnh sửa trực tiếp.\n\nexport type VocabularyItem = {\n  id: string;\n  term: string;\n  meaning: string;\n  partOfSpeech: string;\n  ipa: string;\n  example: string;\n  examples: string[];\n  topic: string;\n  source: string;\n};\n\nexport const coreVocabulary: VocabularyItem[] = ${JSON.stringify(rows, null, 2)};\n\nexport const supplementalVocabulary: VocabularyItem[] = ${JSON.stringify(finalizedSupplemental, null, 2)};\n\nexport const vocabulary: VocabularyItem[] = ${JSON.stringify(allVocabulary, null, 2)};\n\nexport const vocabularyExtractionReport = ${JSON.stringify({ coreRows: rows.length, supplementalRows: finalizedSupplemental.length, totalRows: allVocabulary.length, missingNumberedRows: missing }, null, 2)} as const;\n`;

const generatedWithAudioType = generated.replace(/  source: string;\n};/, "  source: string;\n  audio?: {\n    word: { audioUrl: string | null; transcript: string; source: string; defaultRate: number };\n    examples: Array<{ id: string; audioUrl: string | null; transcript: string; source: string; defaultRate: number }>;\n  };\n};");
fs.writeFileSync(outputPath, generatedWithAudioType, "utf8");
console.log(JSON.stringify({ coreRows: rows.length, supplementalRows: finalizedSupplemental.length, totalRows: allVocabulary.length, missingNumberedRows: missing }, null, 2));
