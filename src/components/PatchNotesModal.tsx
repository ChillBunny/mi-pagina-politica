import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface PatchNotesModalProps {
  open: boolean;
  onClose: () => void;
}

const PATCHES = [
  {
    version: "1.0.0",
    content: `
- Sistema de navegación inicial
- Theme toggle funcional
- Language toggle agregado
- Estructura base de páginas
- Diseño inicial responsive
    `,
  },
  {
    version: "1.1.0",
    content: `
- Mejoras visuales del toggle de idioma
- Animaciones de transición agregadas
- Limpieza del código y organización de componentes
    `,
  },
  {
    version: "1.2.0",
    content: `
- Modal de patch notes con sidebar agregado
- Scroll interno optimizado
- Preparación para internacionalización
    `,
  },
];

export default function PatchNotesModal({ open, onClose }: PatchNotesModalProps) {
  const [activePatch, setActivePatch] = useState(PATCHES[0]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-50 top-1/2 left-1/2 w-[95%] max-w-2xl 
                       max-h-[85vh] bg-white dark:bg-gray-900 
                       border border-gray-300 dark:border-gray-700
                       rounded-lg shadow-xl p-4 grid grid-cols-[120px_1fr] gap-3 
                       overflow-hidden -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25 }}
          >
            {/* Sidebar izquierda */}
            <div
              className="overflow-y-auto border-r border-gray-300 dark:border-gray-700 pr-2"
            >
              {PATCHES.map((p) => (
                <button
                  key={p.version}
                  onClick={() => setActivePatch(p)}
                  className={`w-full text-left px-2 py-1 rounded-md mb-1 text-sm
                              transition-colors ${
                                activePatch.version === p.version
                                  ? "bg-blue-600 text-white"
                                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
                              }`}
                >
                  {p.version}
                </button>
              ))}
            </div>

            {/* Contenido con scroll vertical */}
            <div className="overflow-y-auto px-2">
              <h2 className="text-xl font-bold mb-2">{activePatch.version}</h2>
              <pre className="whitespace-pre-wrap text-sm">
                {activePatch.content}
              </pre>
            </div>

            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 
                         hover:text-black dark:hover:text-white"
            >
              ✕
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
