import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Verifica localStorage o preferencia del sistema
    if (localStorage.theme === "dark") return "dark";
    if (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return { theme, toggleTheme };
}
