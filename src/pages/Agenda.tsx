"use client";
import { motion } from "framer-motion";

//https://youtu.be/7P6aYbUo19U?si=vITozpQidy4LmW-u
//https://youtu.be/7P6aYbUo19U?si=oMrsusP6P5i8sRt7

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
          Agenda
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Conoce nuestras propuestas y planes para transformar el futuro del país.
        </p>
      </motion.div>
    </section>
  );
}
