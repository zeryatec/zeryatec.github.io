"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Globe, Smartphone, ShieldCheck, Check, ArrowRight, Sparkles, Star, Zap, ChevronDown } from 'lucide-react';

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const plans = [
    {
      name: "Esencial",
      tagline: "Presencia digital profesional",
      price: "1.199",
      priceNote: "proyecto completo",
      description: "Diseño y desarrollo de tu sitio web corporativo con tecnología moderna, optimizado para SEO y rendimiento.",
      icon: <Globe className="w-8 h-8" />,
      featured: false,
      features: [
        "Diseño UI/UX personalizado",
        "Desarrollo Frontend React",
        "Responsive & Mobile-first",
        "Optimización SEO",
        "Formulario de contacto funcional",
        "Hosting y dominio asesorado",
      ],
    },
    {
      name: "Profesional",
      tagline: "Ecosistema digital completo",
      price: "1990",
      priceNote: "proyecto completo",
      description: "Tu web corporativa más una aplicación móvil nativa que extiende tu alcance a todos los dispositivos de tus clientes.",
      icon: <Smartphone className="w-8 h-8" />,
      featured: true,
      features: [
        "Todo lo incluido en Esencial",
        "App nativa Android / iOS",
        "Arquitectura MVVM",
        "API REST dedicada",
        "Push Notifications",
        "Panel de administración",
        "Sincronización en tiempo real",
      ],
    },
    {
      name: "Mantenimiento",
      tagline: "Tu tecnología siempre al día",
      price: "119",
      priceNote: "al mes",
      description: "Nos encargamos del mantenimiento continuo de tu web y app: actualizaciones, correcciones, soporte técnico y mejoras evolutivas.",
      icon: <ShieldCheck className="w-8 h-8" />,
      featured: false,
      features: [
        "Actualizaciones de seguridad",
        "Corrección de errores prioritaria",
        "Soporte técnico dedicado",
        "Mejoras evolutivas mensuales",
        "Monitorización de rendimiento",
        "Backups automáticos",
        "Informes mensuales de estado",
      ],
    },
  ];

  const toggleCard = (idx: number) => {
    setExpandedCard(expandedCard === idx ? null : idx);
  };

  return (
    <div className="min-h-screen pt-24 bg-white selection:bg-primary-100 selection:text-primary-900">

      {/* Hero Section */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-100 rounded-full blur-[120px] opacity-50 pointer-events-none animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary-100 rounded-full blur-[100px] opacity-40 pointer-events-none animate-blob" style={{ animationDelay: '3s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-8 shadow-lg shadow-primary-500/5"
            >
              <Sparkles className="w-4 h-4 text-primary-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-900">Nuestros Servicios</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-[900] text-slate-900 mb-8 tracking-tighter leading-[1.1]"
            >
              Soluciones a la <span className="text-secondary-400 italic">medida de tu ambición</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto"
            >
              Tres niveles de servicio diseñados para cubrir desde la presencia digital básica hasta el mantenimiento continuo de tu ecosistema.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24 relative overflow-hidden bg-slate-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-primary-50 rounded-full blur-[150px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl overflow-hidden flex flex-col group transition-all duration-500 ${plan.featured
                    ? 'bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white shadow-2xl shadow-primary-900/30 lg:scale-105 z-10'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-2xl'
                  }`}
              >
                {/* Featured badge */}
                {plan.featured && (
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center space-x-1 px-3 py-1.5 bg-secondary-500 rounded-full shadow-lg shadow-secondary-500/30">
                      <Star className="w-3 h-3 text-slate-900 fill-slate-900" />
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-900">Popular</span>
                    </div>
                  </div>
                )}

                {/* Floating orbs for featured */}
                {plan.featured && (
                  <div className="absolute top-10 right-10 w-32 h-32 bg-secondary-500/10 rounded-full blur-2xl animate-blob pointer-events-none" />
                )}

                <div className="p-10 flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${plan.featured
                        ? 'bg-white/10 text-secondary-400 border border-white/10'
                        : 'bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white'
                      }`}
                  >
                    {plan.icon}
                  </motion.div>

                  {/* Name & Tagline */}
                  <h3 className={`font-display text-2xl font-[900] mb-1 tracking-tight ${plan.featured ? 'text-white' : 'text-slate-900'
                    }`}>
                    {plan.name}
                  </h3>

                  <p className={`text-sm font-bold mb-5 ${plan.featured ? 'text-secondary-400' : 'text-primary-600'
                    }`}>
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-5">
                    <div className="flex items-baseline">
                      <span className={`text-4xl font-[900] font-display tracking-tighter ${plan.featured ? 'text-white' : 'text-slate-900'
                        }`}>
                        {plan.price}€
                      </span>
                      <span className={`ml-2 text-sm font-medium ${plan.featured ? 'text-white/50' : 'text-slate-400'
                        }`}>
                        / {plan.priceNote}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm mb-6 leading-relaxed ${plan.featured ? 'text-white/60' : 'text-slate-500'
                    }`}>
                    {plan.description}
                  </p>

                  {/* Toggle Features Button */}
                  <button
                    onClick={() => toggleCard(idx)}
                    className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center mb-5 transition-all duration-300 cursor-pointer ${plan.featured
                        ? 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/10'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'
                      }`}
                  >
                    {expandedCard === idx ? 'Ocultar detalles' : 'Ver detalles'}
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedCard === idx ? 'rotate-180' : ''
                      }`} />
                  </button>

                  {/* Expandable Features */}
                  <AnimatePresence>
                    {expandedCard === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className={`space-y-3 pb-6 pt-2 border-t ${plan.featured ? 'border-white/10' : 'border-slate-100'
                          }`}>
                          <p className={`text-[10px] font-black uppercase tracking-widest pt-4 mb-3 ${plan.featured ? 'text-white/40' : 'text-slate-400'
                            }`}>
                            Incluye
                          </p>
                          {plan.features.map((feature, fIdx) => (
                            <motion.div
                              key={fIdx}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: fIdx * 0.05 }}
                            >
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 mr-3 ${plan.featured ? 'bg-secondary-500/20' : 'bg-primary-100'
                                }`}>
                                <Check className={`w-3 h-3 ${plan.featured ? 'text-secondary-400' : 'text-primary-700'
                                  }`} />
                              </div>
                              <span className={`text-sm font-medium ${plan.featured ? 'text-white/80' : 'text-slate-700'
                                }`}>
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA */}
                  <Link
                    href="/contacto"
                    className={`relative overflow-hidden w-full py-4 rounded-2xl font-bold text-center transition-all duration-300 flex items-center justify-center group/btn active:scale-[0.97] ${plan.featured
                        ? 'bg-secondary-500 text-slate-900 hover:bg-secondary-400 shadow-lg shadow-secondary-500/30'
                        : 'bg-slate-900 text-white hover:bg-primary-700 shadow-lg shadow-slate-900/20'
                      }`}
                  >
                    <span className="relative z-10 flex items-center">
                      ¡Me interesa!
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="py-16 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-6 h-6 text-secondary-500" />, label: "Tiempo de respuesta", value: "< 24 horas" },
              { icon: <Check className="w-6 h-6 text-green-500" />, label: "Satisfacción", value: "100% garantizado" },
              { icon: <ShieldCheck className="w-6 h-6 text-primary-500" />, label: "Seguridad", value: "Auditoría incluida" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="flex items-center space-x-5 p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300 cursor-default group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:border-primary-100 group-hover:shadow-md transition-all duration-300">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-slate-900 font-extrabold text-lg">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-50/20 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full blur-[120px] opacity-30 pointer-events-none animate-blob" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-[900] text-slate-900 mb-6 tracking-tight">
              ¿No encaja ninguno al 100%?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Cada proyecto es único. Contáctanos y diseñaremos un plan totalmente adaptado a tus necesidades técnicas y presupuesto.
            </p>
            <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link href="/contacto" className="inline-flex items-center px-12 py-6 bg-primary-700 text-white font-bold rounded-2xl hover:bg-primary-600 transition-all duration-300 shadow-2xl shadow-primary-700/20 active:scale-95 group text-lg">
                Hablar con el equipo
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1.5 group-hover:-rotate-45 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
