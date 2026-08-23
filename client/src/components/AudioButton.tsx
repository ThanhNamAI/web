import { useEffect, useRef, useState } from "react";
import { Captions, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type AudioButtonProps = {
  text: string;
  accent?: "en-US" | "en-GB";
  compact?: boolean;
  audioUrl?: string;
  transcript?: string;
  rate?: number;
};

export function speakText(text: string, accent: "en-US" | "en-GB" = "en-US", rate = 0.88) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(voice => voice.lang.startsWith(accent) && /(Google|Microsoft|Samantha|Daniel|Ava|Aria|Jenny)/i.test(voice.name));
  const availableVoice = preferredVoice ?? voices.find(voice => voice.lang.startsWith(accent));
  utterance.lang = accent;
  utterance.voice = availableVoice ?? null;
  utterance.rate = rate;
  utterance.pitch = 1.02;
  window.speechSynthesis.speak(utterance);
  return true;
}

export function AudioButton({ text, accent = "en-US", compact = false, audioUrl, transcript, rate = 0.88 }: AudioButtonProps) {
  const [speaking, setSpeaking] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(1);
  const audio = useRef<HTMLAudioElement | null>(null);
  const playbackRate = [rate, 0.75, 0.5][speedIndex] ?? rate;
  useEffect(() => () => { audio.current?.pause(); window.speechSynthesis?.cancel(); }, []);
  const play = () => {
    if (audioUrl) {
      audio.current?.pause();
      audio.current = new Audio(audioUrl);
      audio.current.playbackRate = playbackRate;
      audio.current.onended = () => setSpeaking(false);
      void audio.current.play().catch(() => setSpeaking(false));
    } else if (!speakText(text, accent, playbackRate)) return;
    setSpeaking(true);
    if (!audioUrl) window.setTimeout(() => setSpeaking(false), Math.max(1000, text.length * 85 / playbackRate));
  };
  return (
    <span className="audio-control"><Button type="button" variant="outline" size={compact ? "icon" : "sm"} onClick={play} className="audio-button" aria-label={`Nghe phát âm: ${text}`}><Volume2 className={speaking ? "speaker-active" : ""} />{!compact && <span>{speaking ? "Đang đọc" : audioUrl ? "Nghe bản ghi" : "Nghe giọng tổng hợp"}</span>}</Button>{!compact && <Button type="button" variant="ghost" size="sm" onClick={() => setSpeedIndex(value => (value + 1) % 3)} className="audio-speed" aria-label="Đổi tốc độ phát">{playbackRate}×</Button>}{transcript && <><Button type="button" variant="ghost" size="icon" onClick={() => setShowTranscript(value => !value)} className="transcript-toggle" aria-label="Hiển thị transcript"><Captions /></Button>{showTranscript && <span className="audio-transcript">{transcript}</span>}</>}</span>
  );
}
