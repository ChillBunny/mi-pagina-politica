export const PATCHES: Record<string, { title: string; notes: string[] }> = {
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
