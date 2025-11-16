import { Moon, Sun } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/20 dark:bg-gray-800/60 text-white hover:scale-110 transition-transform"
      title={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
    >
      {/* 🌙🌞 --- Versión principal (colorida y animada) --- */}
      {
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {theme === "light" ? (
              <Moon
                size={22}
                className="text-gray-300 transition-colors duration-300"
              />
            ) : (
              <Sun
                size={22}
                className="text-yellow-400 transition-colors duration-300"
              />
            )}
          </motion.div>
        </AnimatePresence>
      }
      {/*
        //⚪️⚪️ --- Versión alternativa (blanca clásica, minimalista) ---
        //Para usar esta versión, comenta el bloque anterior y descomenta este.
        //Incluye la misma animación de rotación y fade.
        
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {theme === "light" ? (
              <Moon size={22} className="text-white transition-colors duration-300" />
            ) : (
              <Sun size={22} className="text-white transition-colors duration-300" />
            )}
          </motion.div>
        </AnimatePresence>
      */}
    </button>
  );
}
