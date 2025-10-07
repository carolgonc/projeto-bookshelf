"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: "light", label: "Claro", icon: <Sun size={18} /> },
    { value: "dark", label: "Escuro", icon: <Moon size={18} /> },
    { value: "system", label: "Sistema", icon: <Monitor size={18} /> },
  ];

  return (
    <div className="relative">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="bg-transparent text-gray-700 dark:text-gray-200 border rounded-lg p-2 focus:outline-none cursor-pointer"
      >
        {themes.map((t) => (
          <option
            key={t.value}
            value={t.value}
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            {t.label}
          </option>
        ))}
      </select>
    </div>
  );
}
