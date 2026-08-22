import { useEffect, useMemo, useState } from "react";
import { Check, ChevronRight, Mic, RotateCcw, Sparkles, Volume2 } from "lucide-react";
import { vocabulary } from "@shared/vocabulary.generated";
import { AudioButton, speakText } from "@/components/AudioButton";
import { StudyShell } from "@/components/StudyShell";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { toast } from "sonner";

type RecognitionResultEventLike = { results: ArrayLike<ArrayLike<{ transcript: string }>> };
type RecognitionLike = { lang: string; continuous: boolean; interimResults: boolean; start: () => void; stop: () => void; onresult: ((event: RecognitionResultEventLike) => void) | null; onerror: (() => void) | null };
type RecognitionConstructor = new () => RecognitionLike;

export default function Learn() {
  const { isAuthenticated } = useAuth();
  const dashboard = trpc.learning.dashboard.useQuery(undefined, { enabled: isAuthenticated });
  const reviewMutation = trpc.learning.review.useMutation();
  const cards = useMemo(() => dashboard.data?.cards?.length ? dashboard.data.cards : vocabulary.slice(0, 20), [dashboard.data?.cards]);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [heard, setHeard] = useState("");
  const card = cards[index % cards.length] ?? vocabulary[0];
  useEffect(() => { setRevealed(false); setHeard(""); }, [index]);
  const review = (quality: 0 | 1 | 2 | 3) => {
    if (isAuthenticated) reviewMutation.mutate({ vocabularyId: card.id, quality });
    setIndex(value => value + 1);
    toast.success(quality >= 2 ? "Đã lên lịch ôn xa hơn." : "Không sao — thẻ sẽ quay lại sớm hơn.");
  };
  const practiceSpeaking = () => {
    const Recognition = (window as unknown as { SpeechRecognition?: RecognitionConstructor; webkitSpeechRecognition?: RecognitionConstructor }).SpeechRecognition ?? (window as unknown as { webkitSpeechRecognition?: RecognitionConstructor }).webkitSpeechRecognition;
    if (!Recognition) { toast.message("Trình duyệt này chưa có nhận dạng giọng nói. Hãy dùng Chrome hoặc Edge và cho phép micro."); return; }
    const recognition = new Recognition(); recognition.lang = "en-US"; recognition.continuous = false; recognition.interimResults = false;
    recognition.onresult = event => { const result = event.results[0]?.[0]?.transcript ?? ""; setHeard(result); toast.success(result.toLowerCase().includes(card.term.toLowerCase()) ? "Tốt lắm, bạn đã nói đúng từ trọng tâm!" : "Đã nhận lời nói. Hãy thử nghe mẫu và lặp lại chậm hơn."); };
    recognition.onerror = () => toast.error("Không thể nhận giọng nói. Hãy kiểm tra quyền micro và thử lại.");
    recognition.start(); toast.message("Đang lắng nghe — hãy đọc từ thật rõ.");
  };
  return <StudyShell><div className="page-wrap learn-page"><header className="learn-header"><div><span className="eyebrow">SRS · ÔN ĐÚNG THỜI ĐIỂM</span><h1>12 thẻ đang chờ bạn</h1><p>Mỗi phản hồi quyết định khoảng cách lần gặp tiếp theo của từ.</p></div><div className="session-progress"><span>THẺ {Math.min(index + 1, cards.length)}/{cards.length}</span><div><i style={{ width: `${((index % cards.length) + 1) / cards.length * 100}%` }} /></div></div></header><section className="flashcard-wrap"><article className={`flashcard ${revealed ? "is-revealed" : ""}`}><div className="flashcard-front"><span className="eyebrow">GỢI NHỚ NGHĨA TIẾNG ANH</span><h2>{revealed ? card.term : "Bạn còn nhớ từ này không?"}</h2>{revealed ? <><p className="ipa">{card.ipa}</p><AudioButton text={card.term} /><div className="card-divider" /><p className="card-definition">{card.meaning}</p><p className="card-example">“{card.example}”</p><div className="speak-line"><button onClick={practiceSpeaking}><Mic /> Luyện nói với micro</button>{heard && <span>Bạn nói: “{heard}”</span>}</div></> : <><p>Hãy nhẩm nghĩa, phát âm và một ngữ cảnh bạn có thể dùng từ này.</p><button className="reveal-button" onClick={() => { setRevealed(true); speakText(card.term); }}><Volume2 /> Lật thẻ & nghe mẫu</button></>}</div></article>{revealed && <div className="review-actions"><p>Bạn nhớ từ này ở mức nào?</p><div><button onClick={() => review(0)} className="again-btn"><RotateCcw /> Chưa nhớ <small>1 ngày</small></button><button onClick={() => review(1)} className="hard-btn">Khó <small>3 ngày</small></button><button onClick={() => review(2)} className="good-btn"><Check /> Tốt <small>7 ngày</small></button><button onClick={() => review(3)} className="easy-btn"><Sparkles /> Rất dễ <small>14 ngày</small></button></div></div>}</section><section className="srs-explainer"><div><span>01</span><p><b>Nghe mẫu</b><small>Khởi động trí nhớ âm thanh.</small></p></div><ChevronRight /><div><span>02</span><p><b>Tự nhớ lại</b><small>Không nhìn đáp án quá sớm.</small></p></div><ChevronRight /><div><span>03</span><p><b>Chọn mức nhớ</b><small>Hệ thống sắp lịch ôn vừa đủ.</small></p></div></section></div></StudyShell>;
}
