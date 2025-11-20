"use client";
import { motion } from "framer-motion";

export default function Doctrine() {
  return (
    <section
      id="doctrine"
      className="min-h-screen flex items-center justify-center bg-amber-50 text-gray-900
dark:bg-red-950 dark:text-amber-100
"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl text-center px-6"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
          Doctrina y Filosofía Política
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Nuestra visión parte del equilibrio entre libertad económica, justicia
          social y responsabilidad nacional. Creemos en una sociedad basada en
          el mérito, la solidaridad, la ética pública y el fortalecimiento de la
          República Dominicana como Estado soberano.
        </p>
        <p className="mt-6 text-gray-700 dark:text-gray-400">
          Defendemos un modelo ordonacionalista: un Estado que garantiza la
          libre competencia, protege a los vulnerables y fomenta la prosperidad
          común sin sacrificar la soberanía ni el orden institucional.
        </p>
      </motion.div>
    </section>
  );
}
