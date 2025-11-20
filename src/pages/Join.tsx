"use client";
import { motion } from "framer-motion";

// Formulario Votantes
// https://forms.gle/jCt2ADhApmNCJ22e7

// Formulario Políticos
// https://forms.gle/fmJRsiEcTvTun9Bs5

export default function Join() {
  return (
    <section
      id="join"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#4273B8] via-blue-700 to-blue-900 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-2xl px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[--font-heading]">
          Únete y ayúdanos a transformar toda la República
        </h2>

        <p className="text-lg mb-10 opacity-90 leading-relaxed">
          Forma parte del movimiento y elige tu forma de participar:  
          apoyándonos como votante o integrándote activamente al comité político.
        </p>

        {/* === BOTONES GRUPO === */}
        <div className="flex flex-col items-center justify-center gap-6">

          {/* 🔵 Botón principal: Votantes (más grande) */}
          <a
            href="https://forms.gle/jCt2ADhApmNCJ22e7"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block bg-white text-blue-700 
              font-semibold px-10 py-4 text-lg
              rounded-full shadow-lg 
              hover:scale-105 hover:bg-gray-100 
              transition-transform
            "
          >
            Unirse como Votante
          </a>

          {/* 🔵 Botón secundario: Políticos (más pequeño) */}
          <a
            href="https://forms.gle/fmJRsiEcTvTun9Bs5"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block bg-white/90 text-blue-800 
              font-medium px-5 py-3 text-base
              rounded-full shadow 
              hover:scale-105 hover:bg-white 
              transition-transform
            "
          >
            Unirse al Comité Político
          </a>
        </div>
      </motion.div>
    </section>
  );
}
