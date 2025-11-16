"use client";
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <section
      id="donate"
      className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-blue-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">
          Donaciones
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Ayúdanos a financiar actividades sociales, culturales y comunitarias.
        </p>
      </motion.div>
    </section>
  );
}
