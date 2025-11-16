"use client";
import { motion } from "framer-motion";

export default function Social() {
  return (
    <section
      id="social"
      className="min-h-screen flex items-center justify-center bg-blue-700 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Redes Sociales</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Síguenos y comparte nuestras ideas para construir un mejor país.
        </p>
      </motion.div>
    </section>
  );
}
