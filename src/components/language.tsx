"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "fa" | "en";

type LanguageValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dark: boolean;
  setDark: (dark: boolean) => void;
};

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fa");
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedLang = window.localStorage.getItem("ph-lang");
    const storedTheme = window.localStorage.getItem("ph-theme");
    // Server HTML is always Persian and light. Preferences are applied after mount
    // so the first render matches and hydration does not break.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is not available during SSR
    setLang(storedLang === "en" ? "en" : "fa");
    setDark(storedTheme === "dark");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = lang === "fa" ? "fa" : "en";
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("ph-lang", lang);
    window.localStorage.setItem("ph-theme", dark ? "dark" : "light");
  }, [lang, dark, ready]);

  return <LanguageContext.Provider value={{ lang, setLang, dark, setDark }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageValue {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return value;
}

export function tx(lang: Lang, fa: string, en: string): string {
  return lang === "fa" ? fa : en;
}
