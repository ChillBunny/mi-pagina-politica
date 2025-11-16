"use client";
import { motion } from "framer-motion";

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
          Únete a Juventud por el Cambio 🇩🇴
        </h2>
        <p className="text-lg mb-8 opacity-90 leading-relaxed">
          Sé parte de una nueva generación de liderazgo.  
          Rellena nuestro formulario y forma parte del movimiento que construye el futuro de la República Dominicana.
        </p>
        <a
          href="https://forms.gle/TU_LINK_DE_GOOGLE_FORM"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition-transform"
        >
          Ir al Formulario
        </a>
      </motion.div>
    </section>
  );
}
