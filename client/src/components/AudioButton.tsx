import { useState } from "react";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type AudioButtonProps = {
  text: string;
  accent?: "en-US" | "en-GB";
  compact?: boolean;
};

export function speakText(text: string, accent: "en-US" | "en-GB" = "en-US") {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const availableVoice = window.speechSynthesis.getVoices().find(voice => voice.lang.startsWith(accent));
  utterance.lang = accent;
  utterance.voice = availableVoice ?? null;
  utterance.rate = 0.88;
  utterance.pitch = 1.02;
  window.speechSynthesis.speak(utterance);
  return true;
}

export function AudioButton({ text, accent = "en-US", compact = false }: AudioButtonProps) {
  const [speaking, setSpeaking] = useState(false);
  const play = () => {
    const worked = speakText(text, accent);
    if (!worked) return;
    setSpeaking(true);
    window.setTimeout(() => setSpeaking(false), Math.max(1000, text.length * 80));
  };
  return (
    <Button type="button" variant="outline" size={compact ? "icon" : "sm"} onClick={play} className="audio-button" aria-label={`Nghe phát âm: ${text}`}>
      <Volume2 className={speaking ? "speaker-active" : ""} />
      {!compact && <span>{speaking ? "Đang đọc" : "Nghe"}</span>}
    </Button>
  );
}
