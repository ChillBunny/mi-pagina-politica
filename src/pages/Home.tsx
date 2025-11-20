import { useEffect, useState } from "react";

export default function Home() {
  // Constante para tipografía de títulos principales
  const mainTitleClass = `
    font-bold
    leading-[1]
    text-center

    /* MOBILE */
    text-6xl

    /* TABLET */
    md:text-7xl

    /* LAPTOP */
    lg:text-8xl

    /* LAPTOP L */
    xl:text-[10rem]

    /* 4K / ultra-wide */
    2xl:text-[15rem]

    md:text-left
  `;

  // Tipos para tamaños por breakpoint
  type BreakpointValues = {
    mobile?: number;
    tablet?: number;
    laptop?: number;
    laptopL?: number;
    ultra?: number; // 4K
  };

  // Función para elegir el valor según el ancho de pantalla
  const useResponsiveValue = (values: BreakpointValues, defaultValue: number) => {
    const [current, setCurrent] = useState<number>(defaultValue);

    useEffect(() => {
      const update = () => {
        const width = window.innerWidth;
        if (width >= 2560 && values.ultra) setCurrent(values.ultra);
        else if (width >= 1440 && values.laptopL) setCurrent(values.laptopL);
        else if (width >= 1024 && values.laptop) setCurrent(values.laptop);
        else if (width >= 768 && values.tablet) setCurrent(values.tablet);
        else setCurrent(values.mobile || defaultValue);
      };
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }, [values, defaultValue]);

    return current;
  };

  // Función para renderizar la imagen con anillo, ahora responsiva
  const ProfileRing = ({
    src,
    size = { mobile: 300, tablet: 300, laptop: 300, laptopL: 300, ultra: 300 },
    ringWidth = { mobile: 35, tablet: 35, laptop: 35, laptopL: 35, ultra: 35 },
    ringColor = "#450a0a",
    scale = { mobile: 1, tablet: 1, laptop: 1, laptopL: 1, ultra: 1 },
    marginTop = { mobile: 0, tablet: 0, laptop: 0, laptopL: 0, ultra: 0 },
  }: {
    src: string;
    size?: BreakpointValues;
    ringWidth?: BreakpointValues;
    ringColor?: string;
    scale?: BreakpointValues;
    marginTop?: BreakpointValues;
  }) => {
    const currentSize = useResponsiveValue(size, 300);
    const currentRingWidth = useResponsiveValue(ringWidth, 35);
    const currentMarginTop = useResponsiveValue(marginTop, 0);
    const currentScale = useResponsiveValue(scale, 1);

    return (
      <div
        className="rounded-full flex items-center justify-center overflow-visible relative"
        style={{
          width: `${currentSize - currentRingWidth}px`,
          height: `${currentSize - currentRingWidth}px`,
          border: `${currentRingWidth}px solid ${ringColor}`,
        }}
      >
        <img
          src={src}
          alt="Foto Perfil"
          className="rounded-full object-cover relative z-20"
          style={{
            width: `${currentSize}px`,
            height: `${currentSize}px`,
            scale: currentScale,
            marginTop: `${currentMarginTop}px`,
          }}
        />
      </div>
    );
  };

  return (
    <section
      id="home"
      style={{ backgroundColor: "var(--color-bandera-azul)" }}
      className="min-h-screen flex flex-col justify-around items-center py-20 text-white transition-colors duration-300 relative z-20 overflow-hidden"
    >
      <div className="w-full max-w-[1400px] px-4 flex flex-col gap-20 lg:gap-32">
        {/* === BLOQUE SUPERIOR === */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full">
          <div className="flex items-center justify-center">
            <ProfileRing
              src="/images/profile/profile_test.png"
              size={{ mobile: 280, tablet: 300, laptop: 300, laptopL: 320, ultra: 600 }}
              ringWidth={{ mobile: 28, tablet: 30, laptop: 32, laptopL: 35, ultra: 50 }}
              scale={{ mobile: 1.05, tablet: 1.12, laptop: 1.12, laptopL: 1.15, ultra: 1.2 }}
              marginTop={{ mobile: -40, tablet: -70, laptop: -70, laptopL: -85, ultra: -180 }}
            />
          </div>

          <h1 className={mainTitleClass}>DIPUTADO</h1>
        </div>

        {/* === BLOQUE INFERIOR === */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 w-full">
          <h1 className={mainTitleClass}>REGIDOR</h1>

          <div className="flex items-center justify-center">
            <ProfileRing
              src="/images/profile/diego_test_02.png"
              size={{ mobile: 300, tablet: 310, laptop: 310, laptopL: 330, ultra: 600 }}
              ringWidth={{ mobile: 28, tablet: 30, laptop: 32, laptopL: 35, ultra: 50 }}
              scale={{ mobile: 1.2, tablet: 1.3, laptop: 1.3, laptopL: 1.35, ultra: 1.4 }}
              marginTop={{ mobile: -90, tablet: -130, laptop: -130, laptopL: -155, ultra: -320 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
