import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return <button type="button" onClick={toggleTheme} className="theme-toggle" aria-label={isDark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"}>
    {isDark ? <Sun /> : <Moon />}
    <span>{isDark ? "Chế độ sáng" : "Chế độ tối"}</span>
  </button>;
}
