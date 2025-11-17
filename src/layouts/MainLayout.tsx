import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [open, setOpen] = useState(false);

  // 🔥 LISTA CENTRALIZADA DE PARCHES (mantener en orden: más reciente primero)
  const patches: Record<string, { title: string; notes: string[] }> = {
    "1.0.0": {
      title: "Patch 1.0.0",
      notes: [
        "Se agregó el selector de idioma ES/EN con animación.",
        "Mejoras visuales generales en la interfaz.",
        "Navbar y layout base estructurados.",
        "Ajustes iniciales del modo claro/oscuro.",
      ],
    },
    "0.9.0": {
      title: "Patch 0.9.0",
      notes: [
        "Implementación inicial de la estructura SPA.",
        "Diseño base del layout general.",
        "Primer prototipo del footer.",
      ],
    },
    "0.8.0": {
      title: "Patch 0.8.0",
      notes: [
        "Se creó el repositorio del proyecto.",
        "Configuración inicial de React + TailwindCSS + Vite.",
        "Instalación de Tailwind y dependencias básicas.",
      ],
    },
  };

  const patchKeys = Object.keys(patches);
  const latestPatch = patchKeys[0]; // <-- asumiendo que patches está ordenado con la versión más reciente primero

  // estado para la selección dentro del modal (inicializado con la versión más reciente)
  const [selectedPatch, setSelectedPatch] = useState<string>(latestPatch);

  return (
    <div className="min-h-screen bg-white dark:bg-blue-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      <Navbar />

      <main className="pt-20">{children}</main>

      <footer className="mt-12 py-6 text-center border-t border-gray-300 dark:border-gray-700 relative">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Aglis Tamayo. Todos los derechos reservados.
        </p>

        {/* Mostrar SIEMPRE la versión más reciente en el footer (latestPatch) */}
        <button
          onClick={() => setOpen(true)}
          className="text-xs mt-1 opacity-40 hover:opacity-80 transition-opacity cursor-pointer select-none"
        >
          Versión {latestPatch}
        </button>
      </footer>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-xl p-0 overflow-hidden"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex">
                {/* Sidebar izquierda */}
                <div className="w-28 bg-gray-100 dark:bg-gray-800 border-r dark:border-gray-700 overflow-y-auto h-72">
                  {patchKeys.map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedPatch(key)}
                      className={`block w-full text-left px-3 py-2 text-xs border-b dark:border-gray-700 transition
                        ${selectedPatch === key
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>

                {/* Contenido scrollable */}
                <div className="flex-1 p-4 overflow-y-auto h-72">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-semibold">
                      {patches[selectedPatch].title}
                    </h3>

                    <button
                      onClick={() => setOpen(false)}
                      className="text-gray-800 dark:text-gray-300 hover:text-red-400 transition"
                    >
                      ✕
                    </button>
                  </div>

                  <ul className="text-xs leading-relaxed opacity-90 list-disc ml-4">
                    {patches[selectedPatch].notes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
