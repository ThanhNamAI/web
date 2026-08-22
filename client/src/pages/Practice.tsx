import { useState } from "react";
import { BookOpen, CheckCircle2, Headphones, Languages, Play, RotateCcw } from "lucide-react";
import { StudyShell } from "@/components/StudyShell";
import { speakText } from "@/components/AudioButton";
import { grammarLessons, listeningItems, readingItems } from "@/lib/learningContent";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";

type Mode = "grammar" | "listening" | "reading";
export default function Practice() {
  const [mode, setMode] = useState<Mode>("grammar"); const [itemIndex, setItemIndex] = useState(0); const [choice, setChoice] = useState<number | null>(null); const { isAuthenticated } = useAuth(); const record = trpc.learning.recordActivity.useMutation();
  const content = mode === "grammar" ? grammarLessons[itemIndex % grammarLessons.length] : mode === "listening" ? listeningItems[itemIndex % listeningItems.length] : readingItems[itemIndex % readingItems.length];
  const question = mode === "grammar"
    ? (content as typeof grammarLessons[number]).question
    : mode === "listening"
      ? (content as typeof listeningItems[number]).prompt
      : (content as typeof readingItems[number]).question;
  const submit = (value: number) => { setChoice(value); if (isAuthenticated) record.mutate({ activityType: `${mode}-practice`, skill: mode, score: value === content.answer ? 100 : 0, durationSeconds: 90 }); };
  const next = () => { setItemIndex(value => value + 1); setChoice(null); };
  return <StudyShell><div className="page-wrap practice-page"><header className="page-header narrow"><div><span className="eyebrow">LUYỆN CÓ GIẢI THÍCH</span><h1>Biến mỗi câu thành <i>một điểm tựa.</i></h1><p>Không chỉ chấm đúng–sai: TOEIC Quest luôn cho bạn biết vì sao đáp án đúng.</p></div></header><div className="mode-tabs">{([{ id: "grammar", label: "Ngữ pháp", icon: Languages }, { id: "listening", label: "Luyện nghe", icon: Headphones }, { id: "reading", label: "Đọc hiểu", icon: BookOpen }] as const).map(tab => { const Icon = tab.icon; return <button onClick={() => { setMode(tab.id); setChoice(null); setItemIndex(0); }} className={mode === tab.id ? "mode-active" : ""} key={tab.id}><Icon />{tab.label}</button>; })}</div><section className="practice-card"><div className="practice-meta"><span>{mode === "grammar" ? (content as typeof grammarLessons[number]).stage : mode === "listening" ? "Part 2 · Hội thoại ngắn" : "Part 7 · Email"}</span><span>Câu {itemIndex + 1}</span></div>{mode === "listening" && <button className="listen-prompt" onClick={() => speakText((content as typeof listeningItems[number]).audio)}><Play fill="currentColor" /> Nghe đoạn thoại <small>có thể phát lại</small></button>}{mode === "reading" && <pre className="reading-passage">{(content as typeof readingItems[number]).text}</pre>}{mode === "grammar" && <><h2>{(content as typeof grammarLessons[number]).title}</h2><p className="lesson-summary">{(content as typeof grammarLessons[number]).summary}</p></>}<h3>{question}</h3><div className="answer-list">{content.choices.map((answer, index) => <button key={answer} disabled={choice !== null} onClick={() => submit(index)} className={choice === null ? "" : index === content.answer ? "answer-correct" : choice === index ? "answer-wrong" : ""}><span>{String.fromCharCode(65 + index)}</span>{answer}{choice !== null && index === content.answer && <CheckCircle2 />}</button>)}</div>{choice !== null && <div className="answer-explanation"><div><CheckCircle2 /><p><b>{choice === content.answer ? "Chính xác!" : "Bạn vừa tìm được điểm cần sửa."}</b><span>{content.explanation}</span></p></div><button onClick={next}>Câu tiếp theo <RotateCcw /></button></div>}</section></div></StudyShell>;
}
