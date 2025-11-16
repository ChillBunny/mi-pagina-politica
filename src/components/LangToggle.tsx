import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

export default function LangToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <div className="flex flex-col items-center">
      {/* 🔄 Switch principal */}
      <div
        onClick={toggleLang}
        className="relative w-20 h-9 flex items-center bg-blue-800 dark:bg-blue-700 
                   rounded-md border border-blue-500/50 cursor-pointer 
                   shadow-inner hover:shadow-md transition-all"
      >
        {/* ⚙️ Indicador animado DETRÁS de las banderas */}
        <motion.div
          className="absolute top-[3px] bottom-[3px] w-[45%]
                     bg-blue-400/70 dark:bg-blue-300/60
                     rounded-md shadow-md z-0"
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            left: lang === "es" ? "4px" : "calc(100% - 38px)",
          }}
        />

        {/* 🇪🇸 🇺🇸 Banderas encima del indicador */}
        <div className="flex justify-between w-full px-2 text-lg select-none relative z-10">
          <ReactCountryFlag
            countryCode="ES"
            svg
            className="w-5 h-5 drop-shadow-[0_0_2px_rgba(0,0,0,0.6)]"
            title="Español"
          />
          <ReactCountryFlag
            countryCode="US"
            svg
            className="w-5 h-5 drop-shadow-[0_0_2px_rgba(0,0,0,0.6)]"
            title="English"
          />
        </div>
      </div>

      {/* 🔤 Texto inferior opcional */}
      { 
      <div className="mt-1 text-xs font-semibold text-white dark:text-gray-200 select-none">
        {lang === "es" ? "ES" : "EN"}
      </div>
      }
    </div>
  );
}
