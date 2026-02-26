"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (es: string, en: string) => string;
}

// 1. Creamos un valor por defecto para que NUNCA sea undefined
const defaultContext: LanguageContextType = {
  language: "en",
  toggleLanguage: () => {},
  t: (es: string, en: string) => en,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-language") as Language;
    if (savedLang) setLanguage(savedLang);
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "es" : "en";
      localStorage.setItem("preferred-language", newLang);
      return newLang;
    });
  };

  const t = (es: string, en: string) => (language === "es" ? es : en);

  // useMemo para evitar re-renders innecesarios
  const value = useMemo(() => ({ language, toggleLanguage, t }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {/* Solo mostramos el contenido cuando el cliente está listo */}
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
