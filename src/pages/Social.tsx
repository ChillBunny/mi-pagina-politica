"use client";

import { motion } from "framer-motion";

// Importación correcta en Vite
import memesImg from "../../public/images/social/Memes.png";
import KickImg from "../../public/images/social/Kick.jpg";
import WSImg from "../../public/images/social/Whatsapp.jpg";
import YTImg from "../../public/images/social/Youtube.jpg";
import kkWiki from "../../public/images/social/kkWiki.jpg";
//import mrRD from "../../public/images/social/mr.rd.jpg";

export default function Social() {
  // 🎨 Mapa dinámico de colores por red social
  const colorMap: Record<string, string> = {
    Facebook: "text-blue-700",
    WhatsApp: "text-green-500",
    Kick: "text-green-800",
    YouTube: "text-red-600",
    Instagram:
      "bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-transparent bg-clip-text",
    TikTok: "text-black",
  };

  const sections = [
    {
      title: "Página Personal (Punto.Medio)",
      cards: [
        {
          name: "Facebook",
          text: "Humor, Memes y Sátira Política",
          img: memesImg,
          url: "https://www.facebook.com/profile.php?id=61579658867703",
        },
        {
          name: "WhatsApp",
          text: "Grupo de Avisos para los Streams",
          img: WSImg,
          url: "https://whatsapp.com/channel/0029Vaz4hWa2kNFxsNiGzA15",
        },
        {
          name: "Kick",
          text: "Streams y debates en directo. Sabados 8PM",
          img: KickImg,
          url: "https://kick.com/puntomedio",
        },
        {
          name: "YouTube",
          text: "Resúmenes de los directos",
          img: YTImg,
          url: "https://www.youtube.com/@PuntoMedioRD",
        },
      ],
    },
    {
      title: "Grupo Abierto (kkWiki)",
      cards: [
        {
          name: "Facebook",
          text: "Grupo Principal de Dominicanos en Ciencias Políticas",
          img: kkWiki,
          url: "https://www.facebook.com/share/g/193qzM78ai/",
        },
        //{ name: "Instagram", text: "Grupo Secundario", img: mrRD, url: "#" },
        //{ name: "TikTok", text: "Debates breves y análisis rápidos", img: emptyImg, url: "#" },
      ],
    },
    /*
    {
      title: "PodCast",
      cards: [
        { name: "YouTube", text: "Episodios completos en video", img: emptyImg, url: "#" },
        { name: "TikTok", text: "Cortos y Clips", img: emptyImg, url: "#" },
      ],
    },*/
  ];

  return (
    <section
      id="social"
      className="min-h-screen py-24 bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700
"
    >
      <h2 className="text-5xl font-extrabold mb-12 text-center drop-shadow-md tracking-wide">
        Redes Sociales
      </h2>

      <div className="w-full max-w-7xl space-y-20 mx-auto">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <h3
              className="
                  text-3xl font-semibold mb-10 text-blue-100 tracking-wide
                  border border-white/30 bg-white/10 backdrop-blur-sm
                  shadow-lg px-6 py-2 rounded-xl inline-block
                  max-w-[90%] mx-auto
              "
            >
              {section.title}
            </h3>

            <div
              className="
                  grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  lg:grid-cols-3 
                  xl:grid-cols-4
                  auto-rows-fr
                  gap-10
                  justify-items-center
                  w-full
                  "
            >
              {section.cards.map((card, index) => (
                <motion.a
                  key={index}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 140 }}
                  className="
                    w-72 h-[430px] rounded-2xl shadow-xl overflow-hidden 
                    bg-white text-black flex flex-col hover:shadow-2xl cursor-pointer
                  "
                >
                  <div className="relative w-full h-[260px] overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between h-full">
                    {/* TÍTULO CON COLOR DINÁMICO */}
                    <p
                      className={`text-2xl font-extrabold tracking-wide ${
                        colorMap[card.name] || "text-blue-900"
                      }`}
                    >
                      {card.name}
                    </p>

                    <p className="mt-2 text-lg text-gray-700">{card.text}</p>

                    <div className="mt-4 font-semibold text-blue-700">
                      Visitar →
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
