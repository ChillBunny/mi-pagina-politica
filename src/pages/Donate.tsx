"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineDocumentDuplicate } from "react-icons/hi";

export default function Donate() {
  const [method, setMethod] = useState("paypal");
  const [showInfo, setShowInfo] = useState(false);

  const infoMap: Record<string, { label: string; number: string }> = {
    paypal: { label: "PayPal", number: "Lonelinessloveless@gmail.com" },
    popular: { label: "Cuenta Corriente", number: "851317222" },
    bhd: { label: "Cuenta de Ahorros", number: "24646220055" },
  };

  const methods = [
    { value: "paypal", label: "PayPal" },
    { value: "bhd", label: "BHD" },
    { value: "popular", label: "Popular" },
  ];

  const handleMethodChange = (value: string) => {
    setMethod(value);
    setShowInfo(false); // Oculta info al cambiar de método
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("¡Copiado al portapapeles!");
  };

  return (
    <section id="donate" className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-blue-950 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center w-full max-w-xl"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">
          Donaciones
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Ayúdanos a financiar actividades sociales, culturales y comunitarias.
        </p>

        {/* ToggleGroup simplificado */}
        <div className="flex gap-2 justify-center mb-8">
          {methods.map((m) => (
            <button
              key={m.value}
              onClick={() => handleMethodChange(m.value)}
              className={`px-4 py-2 rounded-xl border transition-all
                ${method === m.value
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white dark:bg-black/30 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700"
                }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Contenedor de información */}
        <div className="bg-white/40 dark:bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-black/30 shadow-md min-h-[150px] flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-2 text-lg font-mono">
            <div className="flex items-center gap-3">
              <span>
                {showInfo
                  ? method === "paypal"
                    ? infoMap[method].number
                    : `${infoMap[method].label}: ${infoMap[method].number}`
                  : "******"}
              </span>

              <button
                onClick={() => setShowInfo(!showInfo)}
                className="p-2 rounded-full bg-white/30 dark:bg-black/30 hover:bg-white/50 dark:hover:bg-black/50 transition"
                aria-label={showInfo ? "Ocultar información" : "Mostrar información"}
              >
                {showInfo ? <HiOutlineEyeOff className="w-6 h-6" /> : <HiOutlineEye className="w-6 h-6" />}
              </button>

              {showInfo && (
                <button
                  onClick={() => copyToClipboard(infoMap[method].number)}
                  className="p-2 rounded-full bg-white/30 dark:bg-black/30 hover:bg-white/50 dark:hover:bg-black/50 transition"
                  aria-label="Copiar al portapapeles"
                >
                  <HiOutlineDocumentDuplicate className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
