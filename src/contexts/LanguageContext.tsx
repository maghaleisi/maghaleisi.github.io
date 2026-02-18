import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "fa" | "en";

interface LanguageContextType {
  lang: Lang;
  dir: "rtl" | "ltr";
  toggleLang: () => void;
  t: (fa: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "fa" ? "en" : "fa"));
  }, []);

  const dir = lang === "fa" ? "rtl" : "ltr";

  const t = useCallback(
    (fa: string, en: string) => (lang === "fa" ? fa : en),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLang, t }}>
      <div dir={dir} className="font-vazir">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
