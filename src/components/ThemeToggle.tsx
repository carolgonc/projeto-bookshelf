"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as "light" | "dark" | "system");
  };

  return (
    <select
      value={theme}
      onChange={handleChange}
      className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-1 rounded"
    >
      <option value="light">🌞 Light</option>
      <option value="dark">🌙 Dark</option>
      <option value="system">🖥 System</option>
    </select>
  );
}
