"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Cpu, BarChart3, Code2, Globe, Laptop, Terminal } from 'lucide-react';
import AboutUs from "@/components/AboutUs";

const About = () => {
  const valueProps = [
    { icon: <Database className="w-6 h-6" />, title: "Integridad de Datos", desc: "Arquitecturas backend sólidas y procesos ETL que garantizan la veracidad de la información." },
    { icon: <Shield className="w-6 h-6" />, title: "Seguridad Real", desc: "Protección proactiva y monitorización continua para blindar activos digitales." },
    { icon: <Cpu className="w-6 h-6" />, title: "Eficiencia Operativa", desc: "Automatización de procesos complejos para reducir costes y eliminar errores manuales." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-36 selection:bg-primary-900 selection:text-white">
      
      {/* Hero Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl font-black text-slate-950 mb-8 tracking-wide">
              Tres trayectorias, <br />
              <span className="text-primary-600">una visión técnica.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              ZeryaTec nace de la unión de tres perfiles especializados en Datos, Seguridad y Automatización. Nuestra misión es simple: aplicar ingeniería real para solucionar problemas reales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Profiles */}
      <AboutUs />

      {/* Integration Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-[100px] rounded-full -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Sinergia Tecnológica</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto italic">
            "La intersección de nuestras especialidades permite abordar proyectos desde un enfoque holístico: datos íntegros, entorno seguro y procesos optimizados."
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-primary-500 flex items-center justify-center mb-8 text-white shadow-lg group-hover:scale-110 transition-transform">
                  {prop.icon}
                </div>
                <h4 className="text-2xl font-black mb-4">{prop.title}</h4>
                <p className="text-slate-400 leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 mb-8">¿Listo para trabajar con nosotros?</h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-primary-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:shadow-primary-500/40 transition-all"
          >
            Configurar Reunión Técnica
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default About;
