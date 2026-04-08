"use client";

import { motion } from "framer-motion";
import { Server, ShieldCheck, Database, CloudCog, Smartphone, Bot } from "lucide-react";

export default function TechStack() {
  const stack = [
    {
      title: "Ciberseguridad Abierta",
      description: "Blindamos arquitecturas usando herramientas líderes como Wazuh SIEM y Microsoft Sentinel.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "from-emerald-400 to-emerald-600",
      bgBlur: "bg-emerald-500/20"
    },
    {
      title: "Despliegues Cloud",
      description: "Nodos autoescalables en AWS y GCP con pipelines CI/CD automatizados al extremo.",
      icon: <CloudCog className="w-8 h-8" />,
      color: "from-primary-400 to-primary-600",
      bgBlur: "bg-primary-500/20"
    },
    {
      title: "Data Pipelines",
      description: "Construimos tuberías ETL de alta velocidad usando Pentaho y análisis profundo en Power BI.",
      icon: <Database className="w-8 h-8" />,
      color: "from-secondary-400 to-secondary-600",
      bgBlur: "bg-secondary-500/20"
    },
    {
      title: "Arquitecturas Backend",
      description: "Desarrollamos motores robustos en Spring Boot, Laravel y Node.js con tolerancia a fallos.",
      icon: <Server className="w-8 h-8" />,
      color: "from-indigo-400 to-indigo-600",
      bgBlur: "bg-indigo-500/20"
    },
    {
      title: "Desarrollo Móvil",
      description: "Apps nativas hiper-optimizadas desarrolladas en Kotlin y Swift.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-fuchsia-400 to-fuchsia-600",
      bgBlur: "bg-fuchsia-500/20"
    },
    {
      title: "IA & Automatización",
      description: "Scripting radical en Python para aniquilar tareas repetitivas y procesos burocráticos.",
      icon: <Bot className="w-8 h-8" />,
      color: "from-amber-400 to-orange-600",
      bgBlur: "bg-orange-500/20"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-slate-950 text-white">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px] animate-blob"></div>
        <div className="absolute top-[40%] -right-[20%] w-[800px] h-[800px] bg-secondary-500/10 rounded-full blur-[150px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center space-x-2 bg-white/5 border border-white/10 shadow-sm rounded-full px-5 py-2 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse"></div>
            <span className="text-xs font-black text-secondary-400 uppercase tracking-widest">
              Nuestro Arsenal Tecnológico
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter"
          >
            No hablamos, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 italic">ejecutamos.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 font-medium leading-relaxed"
          >
            Trabajamos con el stack tecnológico de las grandes empresas para ofrecerte sistemas impenetrables, rendimiento absurdo y control total.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Hover Glow background */}
              <div className={`absolute -right-20 -bottom-20 w-40 h-40 ${item.bgBlur} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

              <div>
                <motion.div 
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg shadow-black/20 text-white`}
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="w-full h-[1px] bg-white/10 mt-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
