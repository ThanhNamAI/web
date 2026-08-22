import json
import re
from pathlib import Path
import eng_to_ipa as ipa

root = Path(__file__).resolve().parent.parent
ipa_overrides = {
  "mentorship": "ˈmen.tɚ.ʃɪp",
  "onboarding": "ˈɑːnˌbɔːr.dɪŋ",
  "upsell": "ˈʌp.sel",
  "word-of-mouth": "ˌwɝːd.əvˈmaʊθ",
  "check-in": "ˈtʃek.ɪn",
  "cybersecurity": "ˌsaɪ.bɚ.sɪˈkjʊr.ə.t̬i",
  "troubleshoot": "ˈtrʌb.əl.ʃuːt",
  "break-even": "ˌbreɪkˈiː.vən",
}
entries = []
for filename in ["supplemental-vocabulary.tsv", "supplemental-replacements.tsv", "advanced-toeic.tsv"]:
  for line in (root / "scripts" / filename).read_text(encoding="utf-8").splitlines():
    term, part_of_speech, meaning, topic = line.split("\t")
    if term in ipa_overrides:
        pronunciation = ipa_overrides[term]
    else:
        pieces = re.split(r"([\s-]+)", term)
        pronunciation = "".join(piece if re.fullmatch(r"[\s-]+", piece) else ipa.convert(piece) for piece in pieces)
    if "*" in pronunciation or not pronunciation.strip():
        pronunciation = "Nghe mẫu"
    context = {
      "Tài chính": "in the quarterly financial report",
      "Du lịch": "before the business trip",
      "Nhân sự": "with the HR department",
      "Công nghệ": "during system maintenance",
      "Sản xuất": "before the shipment leaves the factory",
      "Tiếp thị": "for the product campaign",
      "Văn phòng": "before the Monday meeting",
      "Cụm động từ": "before Friday",
      "Cụm từ": "in the client email",
    }.get(topic, "at the office")
    if part_of_speech == "v":
      example = f"The team will {term} the request {context}."
    elif part_of_speech == "adj":
      example = f"The company selected an {term} option {context}."
    elif part_of_speech == "adv":
      example = f"Please complete the task {term}."
    else:
      example = f"The manager discussed the {term} {context}."
    entries.append({
      "id": f"plus-{len(entries) + 1}",
      "term": term,
      "meaning": meaning,
      "partOfSpeech": part_of_speech,
      "ipa": f"/{pronunciation}/" if pronunciation != "Nghe mẫu" else pronunciation,
      "example": example,
      "topic": topic,
      "source": "Bổ sung theo chủ đề TOEIC",
    })

(root / "shared" / "supplemental-vocabulary.generated.json").write_text(json.dumps(entries, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"supplementalRows": len(entries)}, ensure_ascii=False))
