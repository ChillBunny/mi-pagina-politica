export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[--bg] text-[--text] fade-in"
    >
      <div className="container-max text-center py-24">
        <h1 className="text-5xl sm:text-6xl font-bold font-[--font-heading] mb-6 text-[--color-bandera-azul]">
          Santiago por la Juventud 🇩🇴
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Un movimiento joven con visión de nación. <br /> ¡Construyamos el futuro juntos!
        </p>
        <button className="bg-[--color-bandera-azul] hover:bg-[--color-bandera-rojo] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
          Conoce nuestra Agenda
        </button>
      </div>
    </section>
  )
}
