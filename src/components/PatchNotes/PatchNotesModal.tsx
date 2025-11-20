import { motion, AnimatePresence } from "framer-motion";
import { PATCHES } from "./patches";
import { useState } from "react";

interface PatchNotesModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PatchNotesModal({ open, onClose }: PatchNotesModalProps) {
  const keys = Object.keys(PATCHES);
  const [selected, setSelected] = useState(keys[0]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
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
              {/* Sidebar */}
              <div className="w-28 bg-gray-100 dark:bg-gray-800 border-r dark:border-gray-700 overflow-y-auto h-72">
                {keys.map((k) => (
                  <button
                    key={k}
                    onClick={() => setSelected(k)}
                    className={`block w-full text-left px-3 py-2 text-xs border-b dark:border-gray-700 transition
                      ${selected === k
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                  >
                    {k}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 p-4 overflow-y-auto h-72">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-semibold">{PATCHES[selected].title}</h3>

                  <button
                    onClick={onClose}
                    className="text-gray-800 dark:text-gray-300 hover:text-red-400 transition"
                  >
                    ✕
                  </button>
                </div>

                <ul className="text-xs leading-relaxed opacity-90 list-disc ml-4">
                  {PATCHES[selected].notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
