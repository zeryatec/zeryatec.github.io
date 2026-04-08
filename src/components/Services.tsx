"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Check, Calendar, Settings, Laptop, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Pack Básico",
    price: "1.200€",
    priceSuffix: " - 1.500€",
    description: "Ideal para iniciar tu presencia digital con una plataforma funcional y automatizada.",
    icon: <Laptop className="w-8 h-8 text-primary" />,
    features: ["Desarrollo Web completo", "Sistema de Citas y Reservas", "Diseño Responsivo", "SEO Básico"],
  },
  {
    title: "Pack Ecosistema",
    price: "2.000€",
    priceSuffix: " - 3.000€",
    description: "La solución completa integral para digitalizar todas las operaciones de tu negocio.",
    icon: <Settings className="w-8 h-8 text-white" />,
    features: [
      "Todo lo del Pack Básico",
      "Software de Gestión Interna",
      "Automatización de Avisos (WhatsApp/Email)",
      "Panel de Analíticas",
    ],
    featured: true,
  },
  {
    title: "Mantenimiento",
    price: "60€",
    priceSuffix: " - 120€/mes",
    description: "Soporte continuado para que tu ecosistema siempre esté actualizado y operativo.",
    icon: <Calendar className="w-8 h-8 text-primary" />,
    features: ["Soporte técnico dedicado", "Hosting y Dominio", "Evolución del producto", "Copias de seguridad"],
  },
];

function InteractiveCard({ service, index }: { service: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightColor = service.featured ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 101, 147, 0.08)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col p-8 md:p-10 rounded-3xl border transition-all duration-300 overflow-hidden ${
        service.featured
          ? "bg-gradient-to-b from-[#005278] to-[#003852] border-transparent text-white shadow-2xl shadow-primary/40 scale-105 z-10"
          : "bg-white border-gray-100 text-gray-900 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10"
      }`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />

      {service.featured && (
        <div className="absolute top-0 right-0 bg-accent text-white font-bold text-xs px-4 py-2 rounded-bl-2xl rounded-tr-2xl shadow-md">
          LO MÁS VENDIDO
        </div>
      )}

      <div
        className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
          service.featured ? "bg-white/10 backdrop-blur-md border border-white/20" : "bg-blue-50 border border-blue-100"
        }`}
      >
        {service.icon}
      </div>
      
      <h3 className="text-3xl font-extrabold mb-3">{service.title}</h3>
      <div className="mb-6 flex items-baseline">
        <span className="text-4xl font-extrabold">{service.price}</span>
        <span className={`ml-2 text-lg font-medium ${service.featured ? "text-blue-100" : "text-gray-500"}`}>{service.priceSuffix}</span>
      </div>
      
      <p className={`mb-10 text-lg leading-relaxed ${service.featured ? "text-blue-50/80" : "text-gray-600"}`}>
        {service.description}
      </p>

      <div className="flex-grow space-y-5 mb-10">
        {service.features.map((feature: string, fIndex: number) => (
          <div key={fIndex} className="flex items-start gap-4">
            <div className={`mt-1 p-1 rounded-full ${service.featured ? "bg-accent/20" : "bg-primary/10"}`}>
              <Check className={`w-4 h-4 shrink-0 ${service.featured ? "text-accent" : "text-primary"}`} />
            </div>
            <span className={`font-medium ${service.featured ? "text-white" : "text-gray-700"}`}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group/btn ${
          service.featured
            ? "bg-white text-[#003852] hover:bg-gray-50 shadow-lg"
            : "bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
        }`}
      >
        Empezar ahora
        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-[#fafcff] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Planes diseñados para <br className="hidden md:block"/> <span className="text-primary">escalar operaciones</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed font-medium"
          >
            Escala tu negocio con soluciones a medida. Desde una web inteligente hasta un ecosistema completamente automatizado con IA.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto pb-10">
          {services.map((service, index) => (
            <InteractiveCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
