"use client";
import { motion } from "framer-motion";

export default function Territory() {
  return (
    <section
      id="territory"
      className="min-h-screen flex items-center justify-center bg-slate-200 dark:bg-slate-950
"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-3xl"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
          Territorio – Circunscripción 2, Santiago
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Representamos los diferentes sectores, comunidades y barrios que
          conforman nuestra circunscripción. Este espacio ofrece una visión
          clara del territorio donde trabajamos y desarrollamos nuestras
          propuestas.
        </p>

        {/* 🔷 Placeholder para una futura sección con mapa, zonas o tarjetas */}
        <div className="p-6 border border-blue-300/40 dark:border-blue-700/40 rounded-xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Próximamente: mapa interactivo, listado de barrios, información
            demográfica y más.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
