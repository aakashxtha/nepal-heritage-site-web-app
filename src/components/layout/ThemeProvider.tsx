"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeAttribute(nextTheme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", nextTheme);
}

function detectSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  // Initialize from localStorage or system preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      const initial = stored ?? detectSystemTheme();
      setThemeState(initial);
      applyThemeAttribute(initial);
    } catch {
      const fallback = detectSystemTheme();
      setThemeState(fallback);
      applyThemeAttribute(fallback);
    }
  }, []);

  // Persist and apply on change
  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch {}
    applyThemeAttribute(theme);
  }, [theme]);

  const value = useMemo<ThemeContextValue>(() => ({
    theme,
    toggle: () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    setTheme: (t: Theme) => setThemeState(t),
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}


