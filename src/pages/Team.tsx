"use client";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <section
      id="team"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
          Nuestro Equipo
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Conoce a los jóvenes líderes que impulsan nuestras iniciativas y proyectos.
        </p>
      </motion.div>
    </section>
  );
}
