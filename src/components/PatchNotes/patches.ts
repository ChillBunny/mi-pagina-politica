export const PATCHES: Record<string, { title: string; notes: string[] }> = {
  "0.4.1": {
    title: "Patch 0.4.1",
    notes: [
      "Finalmente se logró que el botón de *ThemeToggle* inicie correctamente en el estado deseado (light u dark).",
      "¡DURE casi 4 MALDITAS HORAS solo arreglando un FUCKING BOTON!",
      "El problema no estaba en Tailwind, CSS, React, Vite ni en la IA; estaba tomando la preferencia de tema directamente del WINDOWS. Sí, DEL MALDITO WINDOWS.",
      "Se removió toda lógica conflictiva de `useDarkMode` para que el botón refleje el estado real desde `ThemeContext` y funcione desde el primer click.",
      "Se corrigieron los parpadeos iniciales y el estado incorrecto al renderizar, evitando doble click o comportamiento confuso.",
      "Commit motivado únicamente por la ira, frustración y obsesión de casi 4 horas buscando esa maldita línea de código que causaba que el tema siempre iniciara en dark.",
      "Para distraerme durante el proceso, decidí hacer pesas y pechadas, levantarme varias veces a beber agua, mirar por la ventana y respirar hondo, intentando calmar la frustración acumulada.",
      "Lo increíble de todo fue la nostalgia de enojarme y frustrarme tanto como en los momentos previos a la IA, recordando lo que era buscar soluciones sin que una asistencia inteligente te repita siempre lo mismo.",
      "Advertencia: No se agregaron nuevas funciones ni cambios visuales, solo pura supervivencia mental y determinación para que el ThemeToggle funcione como debía desde el primer instante.",
    ],
  },
  "0.4.0": {
    title: "Patch 0.4.0",
    notes: [
      "Se rediseñó por completo la sección *Social*, incluyendo tarjetas con imágenes, colores dinámicos por red social y animaciones con Framer Motion.",
      "Se añadieron estilos responsivos mejorados para evitar problemas en tablets y laptops, especialmente en la cuadrícula de tarjetas.",
      "Los subtítulos de cada sección ahora cuentan con bordes, transparencia, blur y un diseño más consistente con el estilo general.",
      "Se ajustaron los colores globales de varias secciones (Agenda, Doctrine, Territory, Social) para lograr coherencia cromática en todo el sitio.",
      "Se implementaron nuevos colores personalizados en tonos azul marino, ámbar y rojo oscuro para modo claro y oscuro.",
      "Mejora general del layout, corrigiendo comportamientos en pantallas pequeñas (320px) y reorganizando breakpoints.",
      "La sección Social ahora utiliza imágenes importadas desde Vite con compatibilidad total.",
    ],
  },
  "0.3.0": {
    title: "Patch 0.3.0",
    notes: [
      "Se completó la sección *Únete* con su diseño final.",
      "Se implementaron correctamente los dos formularios de Google Forms (Votantes y Comité Político).",
      "Se reorganizó el sistema de Patch Notes para hacerlo más modular y mantener el código limpio.",
      "La sección *Equipo* fue reemplazada por *Territorio* para reflejar los sectores de la circunscripción #2 de Santiago.",
    ],
  },
  "0.2.0": {
    title: "Patch 0.2.0",
    notes: [
      "Se agregó el selector de idioma (ES/EN) con animaciones fluidas.",
      "Se aplicaron mejoras visuales generales en toda la interfaz.",
      "Se estructuró el Navbar y el layout principal.",
      "Ajustes iniciales del modo claro/oscuro (light/dark mode).",
      "Se diseñó la sección principal del Home.",
    ],
  },
  "0.1.0": {
    title: "Patch 0.1.0",
    notes: [
      "Creación inicial del repositorio del proyecto.",
      "Configuración base de React + TailwindCSS + Vite.",
      "Instalación de dependencias principales y estructura inicial del proyecto.",
    ],
  },
};
