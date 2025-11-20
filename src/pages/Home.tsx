export default function Home() {
  return (
    <section
      id="home"
      style={{ backgroundColor: "var(--color-bandera-azul)" }}
      className="min-h-screen flex flex-col justify-around items-center py-20 text-white transition-colors duration-300 relative z-20 overflow-hidden"
    >
      {/* === CONTENEDOR PRINCIPAL CENTRADO === */}
      <div className="w-full max-w-[1400px] px-4 flex flex-col gap-20 lg:gap-32">
        {/* === BLOQUE SUPERIOR === */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full">
          {/* Imagen + anillo */}
          <div className="flex items-center justify-center">
            <div
              className="rounded-full flex items-center justify-center overflow-visible relative"
              style={{
                width: "260px",
                height: "240px",
                border: "28px solid #450a0a",
              }}
            >
              <img
                src="/images/profile/profile_test.png"
                alt="Foto Perfil"
                className="rounded-full w-[300px] h-[300px] object-cover scale-[1.12] relative z-20"
                style={{ marginTop: "-85px" }}
              />
            </div>
          </div>

          {/* Texto DIPUTADO */}
          <h1
            className="font-bold 
            leading-[0.95] 
            text-center md:text-left 
            text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]
            tablet-text-fix"
          >
            DIPUTADO
          </h1>
        </div>

        {/* === BLOQUE INFERIOR === */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 w-full">
          {/* Texto REGIDOR */}
          <h1
            className="    font-bold 
            leading-[0.95] 
            text-center md:text-left 
            text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]
            tablet-text-fix"
          >
            REGIDOR
          </h1>

          {/* Imagen + anillo */}
          <div className="flex items-center justify-center">
            <div
              className="rounded-full flex items-center justify-center overflow-visible relative"
              style={{
                width: "300px",
                height: "280px",
                border: "28px solid #450a0a",
              }}
            >
              <img
                src="/images/profile/diego_test_02.png"
                alt="Foto Perfil"
                className="rounded-full w-[310px] h-[310px] object-cover scale-[1.45] relative z-20"
                style={{ marginTop: "-170px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
