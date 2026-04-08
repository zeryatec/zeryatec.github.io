"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  const team = [
    {
      name: "Emilio",
      role: "Data Architecture & Backend",
      points: [
        "Diseño de arquitecturas Backend robustas y escalables.",
        "Optimización de Bases de Datos complejas.",
        "Creación de tuberías ETL para procesamiento masivo de datos.",
        "Transformación de datos para inteligencia de negocio.",
      ],
      image: "/emilio.png",
      github: "https://github.com/Revalyx",
    },
    {
      name: "Ramón",
      role: "Frontend Architecture & UX",
      points: [
        "Diseño estratégico de interfaces de usuario (UI/UX).",
        "Desarrollo de arquitecturas web dinámicas y fluidas.",
        "Optimización de accesibilidad y tiempos de carga.",
        "Creación de experiencias centradas en la conversión.",
      ],
      image: "/ramon.png",
      github: "https://github.com/ramrom39",
    },
    {
      name: "Álvaro",
      role: "Cloud Infrastructure & Automation",
      points: [
        "Automatización avanzada y scripting con Python.",
        "Despliegue de infraestructuras nativas en la nube.",
        "Auditoría y fortificación de ciberseguridad.",
        "Diseño de ecosistemas resilientes y auto-escalables.",
      ],
      image: "/alvaro.png",
      github: "https://github.com/AlvaroPavon",
    },
  ];

  return (
    <section id="equipo" className="py-32 bg-gray-50/50 border-y border-gray-100 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 -right-64 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block bg-white border border-gray-200 shadow-sm rounded-full px-5 py-1.5"
          >
            <span className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent uppercase tracking-widest">
              El Motor del Cambio
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Arquitectos de tu <span className="text-primary font-black">Evolución</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 font-medium leading-relaxed"
          >
            Somos un hub de innovación digital. Fusionamos bases del dato sólidas, infraestructuras escalables en la nube y experiencias de usuario de altísima calidad.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white hover:bg-[#fcfdff] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-primary/20 transition-all duration-500 flex flex-col items-center md:items-start overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Avatar Container */}
              <div className="w-40 h-40 md:w-44 md:h-44 mb-8 relative rounded-full overflow-hidden shadow-xl shadow-gray-200/60 transition-all duration-500 mx-auto md:mx-0 bg-gradient-to-b from-blue-50/80 to-blue-100/30 border-4 border-white flex items-end justify-center group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20 z-10">
                <img
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  className="object-contain object-bottom w-[88%] h-[88%] origin-bottom transition-all duration-500 group-hover:scale-[1.12] drop-shadow-sm group-hover:drop-shadow-md"
                />
              </div>

              {/* Text Content */}
              <div className="text-center md:text-left z-10 w-full flex-grow flex flex-col">
                <h3 className="text-3xl font-black text-gray-900 mb-2 mt-2">{member.name}</h3>
                <p className="text-primary font-bold text-xs mb-8 tracking-[0.2em] uppercase">{member.role}</p>

                {/* Custom Divider */}
                <div className="w-full flex justify-center md:justify-start mb-8">
                  <div className="w-16 h-1.5 bg-gray-100 group-hover:bg-primary/20 rounded-full transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500 ease-out"></div>
                  </div>
                </div>

                <ul className="mb-10 space-y-4 w-full">
                  {member.points.map((point, i) => (
                    <li key={i} className="flex items-start text-left gap-3 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 group-hover:bg-primary/10 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></span>
                      </span>
                      <span className="text-[1.05rem] font-medium leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="mt-auto pt-4 relative z-10 w-full">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-gray-600 bg-gray-50 border border-gray-100 hover:text-white hover:bg-[#24292e] hover:border-[#24292e] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 group/btn"
                  >
                    <svg className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>Ver perfil de GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
