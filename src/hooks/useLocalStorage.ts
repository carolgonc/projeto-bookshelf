import { useState, useEffect } from "react";

export function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    if (value) localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
