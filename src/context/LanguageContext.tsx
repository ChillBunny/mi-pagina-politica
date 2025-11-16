"use client";
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

import en from "../locales/en.json";
import es from "../locales/es.json";


type Lang = "es" | "en";
type Translations = typeof en;

interface LanguageContextProps {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");

  // 🔄 Cargar idioma guardado en localStorage si existe
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedLang) setLang(savedLang);
  }, []);

  // 💾 Guardar idioma cuando cambia
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = lang === "es" ? es : en;

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
