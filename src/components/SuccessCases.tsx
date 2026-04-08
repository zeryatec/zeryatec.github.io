"use client";

import { motion } from "framer-motion";
import { HeartPulse, Truck, ShoppingCart, UtensilsCrossed, GraduationCap, Briefcase } from "lucide-react";

export default function SuccessCases() {
  const sectors = [
    {
      title: "Salud y Medicina",
      niche: "Clínicas y Veterinarias",
      description: "Sistemas avanzados para una atención integral y automatizada.",
      points: [
        "Gestión inteligente de agenda y citas.",
        "Seguimiento automático de pacientes.",
        "Historiales digitalizados y seguros.",
      ],
      icon: <HeartPulse className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-primary",
    },
    {
      title: "Logística y Stock",
      niche: "Talleres y Almacenes",
      description: "Optimización de procesos manuales y flujos de trabajo.",
      points: [
        "Automatización de albaranes.",
        "Control de stock a tiempo real.",
        "Alertas automatizadas vía SMS/WhatsApp.",
      ],
      icon: <Truck className="w-8 h-8 text-white" />,
      color: "from-accent to-blue-500",
    },
    {
      title: "Retail y Comercio",
      niche: "E-commerce y Tiendas",
      description: "Escalabilidad total para multiplicar las ventas y la fidelización.",
      points: [
        "Gestión de inventario unificado.",
        "Programas de lealtad automatizados.",
        "Integración con ERPs y pasarelas.",
      ],
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Hostelería",
      niche: "Restaurantes y Hoteles",
      description: "Mejora de la experiencia del cliente y la eficiencia interna.",
      points: [
        "Sistemas de reserva sincronizados.",
        "Menús digitales interactivos.",
        "Gestión central de proveedores.",
      ],
      icon: <UtensilsCrossed className="w-8 h-8 text-white" />,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Educación",
      niche: "Academias y E-learning",
      description: "Plataformas estructuradas para el aprendizaje del futuro.",
      points: [
        "Aulas virtuales personalizadas.",
        "Seguimiento analítico de alumnos.",
        "Cobros y suscripciones recurrentes.",
      ],
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      color: "from-[#00cbf1] to-blue-400",
    },
    {
      title: "Servicios B2B",
      niche: "Consultorías y Agencias",
      description: "Digitalización de trámites para maximizar las horas facturables.",
      points: [
        "Portales privados de cliente.",
        "Firma electrónica de documentos.",
        "Automatización de facturación.",
      ],
      icon: <Briefcase className="w-8 h-8 text-white" />,
      color: "from-primary to-[#003852]",
    },
  ];

  return (
    <section id="sectores" className="py-32 bg-[#fafcff] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-1"
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Adaptabilidad Total
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Sectores de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-sm">Aplicación</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 font-medium leading-relaxed"
          >
            Nuestra arquitectura base no se limita a un único negocio. Diseñamos ecosistemas polivalentes con capacidad de revolucionar cualquier flujo operativo.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/40 group border border-gray-50 flex flex-col items-start transition-all"
            >
              <div className={`w-full p-8 bg-gradient-to-br ${item.color} flex justify-between items-start`}>
                <div className="text-white">
                  <span className="text-white/90 font-bold text-xs uppercase tracking-widest mb-2 block">
                    {item.niche}
                  </span>
                  <h3 className="text-2xl font-extrabold leading-tight">{item.title}</h3>
                </div>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
                  {item.icon}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow w-full">
                <p className="text-gray-600 text-[1.1rem] mb-6 font-medium tracking-tight">{item.description}</p>
                <ul className="space-y-4 mt-auto">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0 shadow-sm" />
                      <span className="text-[0.95rem] font-medium leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
