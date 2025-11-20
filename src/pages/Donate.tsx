"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// --------------------------------------------------
//  ToggleGroup PERSONALIZADO (local en este archivo)
// --------------------------------------------------

type ToggleGroupProps = {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
};

function ToggleGroup({ value, onChange, children }: ToggleGroupProps) {
  return (
    <div className="flex gap-2 justify-center">
      {children &&
        // Clonar los hijos para pasarles props automáticamente
        Array.isArray(children) &&
        children.map((child) =>
          // @ts-ignore → permitir clonación
          child.type === ToggleGroupItem
            ? // @ts-ignore
              { ...child, props: { ...child.props, selected: value, onChange } }
            : child
        )}
    </div>
  );
}

type ToggleGroupItemProps = {
  value: string;
  selected?: string;
  onChange?: (v: string) => void;
  children: React.ReactNode;
};

function ToggleGroupItem({
  value,
  selected,
  onChange,
  children,
}: ToggleGroupItemProps) {
  const active = value === selected;

  return (
    <button
      onClick={() => onChange && onChange(value)}
      className={`px-4 py-2 rounded-xl border transition-all
        ${active
          ? "bg-blue-600 text-white border-blue-600 shadow-md"
          : "bg-white dark:bg-black/30 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700"}
      `}
    >
      {children}
    </button>
  );
}

// --------------------------------------------------
//  COMPONENTE DONATE PRINCIPAL
// --------------------------------------------------

export default function Donate() {
  const [method, setMethod] = useState("paypal");

  return (
    <section
      id="donate"
      className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-blue-950 px-4"
    >
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

        {/* ----------------------------- */}
        {/*           TOGGLE GROUP        */}
        {/* ----------------------------- */}
        <ToggleGroup value={method} onChange={setMethod}>
          <ToggleGroupItem value="paypal">PayPal</ToggleGroupItem>
          <ToggleGroupItem value="bhd">BHD</ToggleGroupItem>
          <ToggleGroupItem value="popular">Popular</ToggleGroupItem>
        </ToggleGroup>

        {/* ----------------------------- */}
        {/*  CONTENIDO SEGÚN EL MÉTODO   */}
        {/* ----------------------------- */}
        <div className="bg-white/40 dark:bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-black/30 shadow-md min-h-[150px] mt-8 flex items-center justify-center text-gray-700 dark:text-gray-300">
          {method === "paypal" && <p>Próximamente: enlace PayPal.</p>}
          {method === "bhd" && <p>Próximamente: datos bancarios BHD.</p>}
          {method === "popular" && <p>Próximamente: datos bancarios Popular.</p>}
        </div>
      </motion.div>
    </section>
  );
}
