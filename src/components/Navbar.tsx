"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";

// ✅ Secciones actualizadas (sin "team", con "territory")
type SectionId =
  | "home"
  | "agenda"
  | "doctrine"
  | "territory"
  | "join"
  | "donate"
  | "social";

const navItems: { id: SectionId; label: string }[] = [
  { id: "home", label: "Inicio" },
  { id: "agenda", label: "Agenda" },
  { id: "doctrine", label: "Doctrina" },
  { id: "territory", label: "Territorio" },
  { id: "join", label: "Únete" },
  { id: "donate", label: "Donar" },
  { id: "social", label: "Redes" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // 🧭 Detección automática de sección visible
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current: SectionId = "home";

      for (const { id } of navItems) {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🪶 Scroll suave
  const handleClick = (id: SectionId) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-blue-600 dark:bg-blue-900 border-b border-blue-900 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white select-none">
          Santiago Circ #2 🇩🇴
        </h1>

        {/* 🖥️ Desktop */}
        <div className="hidden lg:flex items-center space-x-1 bg-blue-700/30 rounded-xl p-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.id
                  ? "bg-white text-blue-700 shadow-md"
                  : "text-white hover:bg-blue-600"
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Controles */}
          <div className="flex items-center gap-3 pl-2 border-l border-blue-500/40 ml-2">
            <ThemeToggle />
            <LangToggle />
          </div>
        </div>

        {/* 📱 Móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white hover:text-gray-200 transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📲 Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-blue-700 dark:bg-blue-900 border-t border-blue-600 flex flex-col items-center py-4 space-y-3"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`w-3/4 px-4 py-2 rounded-lg text-base font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-white text-blue-700 shadow-md"
                    : "text-white hover:bg-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="flex items-center justify-center gap-4 pt-2">
              <ThemeToggle />
              <LangToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
