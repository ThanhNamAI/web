import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = fs.readFileSync(path.join(root, "shared", "vocabulary.generated.ts"), "utf8");
const marker = "export const vocabulary: VocabularyItem[] = ";
const start = source.indexOf(marker);
const end = source.indexOf(";\n\nexport const vocabularyExtractionReport", start);
if (start < 0 || end < 0) throw new Error("Vocabulary export not found");

const vocabulary = JSON.parse(source.slice(start + marker.length, end));
const normalized = new Map();
for (const item of vocabulary) {
  const key = item.term.trim().toLowerCase().replace(/\s+/g, " ");
  normalized.set(key, [...(normalized.get(key) ?? []), item]);
}

const duplicates = [...normalized.entries()]
  .filter(([, items]) => items.length > 1)
  .map(([term, items]) => ({ term, ids: items.map(item => item.id), meanings: [...new Set(items.map(item => item.meaning))] }));
const topics = Object.entries(vocabulary.reduce((acc, item) => {
  acc[item.topic] = (acc[item.topic] ?? 0) + 1;
  return acc;
}, {})).sort((a, b) => b[1] - a[1]);
const quality = {
  withoutIpa: vocabulary.filter(item => !item.ipa || item.ipa === "Nghe mẫu").length,
  missingIpaTerms: vocabulary.filter(item => !item.ipa || item.ipa === "Nghe mẫu").map(item => item.term),
  withoutExample: vocabulary.filter(item => !item.example).length,
  totalExampleVariants: vocabulary.reduce((sum, item) => sum + (item.examples?.length ?? 1), 0),
  exactDuplicateExamples: (() => {
    const examples = vocabulary.flatMap(item => item.examples ?? [item.example]).map(example => example.trim().toLowerCase());
    return examples.length - new Set(examples).size;
  })(),
  multiWordTerms: vocabulary.filter(item => item.term.includes(" ")).length,
};
const report = { totalItems: vocabulary.length, uniqueTerms: normalized.size, duplicateTerms: duplicates.length, duplicates, topics, quality };
fs.writeFileSync(path.join(root, "reports", "vocabulary-audit.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
