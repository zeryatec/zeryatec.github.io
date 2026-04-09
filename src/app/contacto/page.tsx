"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Send, MessageSquare, Sparkles, CheckCircle2, Globe, ArrowRight, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "TU_ACCESS_KEY_DE_WEB3FORMS",
          subject: `[Web ZeryaTec] Nueva solicitud de ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        console.error("Error de Web3Forms:", data);
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (name: string) => `
    w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 outline-none font-medium bg-slate-50 text-slate-900 placeholder-slate-400
    ${focusedField === name
      ? 'border-primary-400 bg-white shadow-[0_0_20px_rgba(0,101,147,0.1)]'
      : 'border-transparent hover:border-slate-200'
    }
  `;

  return (
    <div className="min-h-screen pt-24 bg-white selection:bg-primary-900 selection:text-white">

      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary-50 rounded-full blur-[150px] opacity-60 animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-secondary-50 rounded-full blur-[120px] opacity-40 animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-32">

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 lg:max-w-[45%]"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-900">Contacto Directo</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-[900] text-slate-900 mb-8 tracking-tighter leading-[0.9]">
              ¿Conectamos con el <br />
              <span className="text-secondary-400 italic">futuro?</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed mb-12 font-medium">
              No somos solo una agencia; somos tu socio en ingeniería. Escribe y hablemos de escalabilidad, seguridad y alto rendimiento.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: <Mail />, label: "Email Corporativo", val: "zeryatec@gmail.com", color: "text-primary-600" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 group cursor-default"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 ${item.color} bg-white border border-slate-100 group-hover:bg-slate-900 group-hover:text-white`}>
                    {item.icon}
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</h4>
                  <p className="text-slate-900 font-bold tracking-tight">{item.val}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl -mr-10 -mt-10 animate-pulse" />
              <div className="flex items-center mb-4 text-secondary-400">
                <Shield className="w-5 h-5 mr-3" />
                <span className="text-xs font-black uppercase tracking-widest">Compromiso ZeryaTec</span>
              </div>
              <p className="text-slate-300 font-medium leading-relaxed">
                Cada mensaje es analizado internamente por el equipo para garantizar una respuesta técnica precisa en menos de 24 horas.
              </p>
            </div>
          </motion.div>

          {/* Form Area - Glassmorphism Light */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex-1 lg:max-w-[55%]"
          >
            {/* Animated glow background */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-200 via-secondary-100 to-primary-200 rounded-[3.5rem] blur-2xl opacity-60 animate-pulse" />

            <div className="relative bg-white/70 p-8 md:p-14 rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,101,147,0.15)] border border-white backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent" />

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center"
                  >
                    <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mb-8 mx-auto border border-primary-100">
                      <CheckCircle2 className="w-12 h-12 text-primary-500" />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mb-4 italic tracking-tight">Transmisión Completa</h2>
                    <p className="text-slate-600 text-lg max-w-sm mx-auto font-medium">Hemos recibido tu reporte. Un especialista se pondrá en contacto contigo brevemente.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic">Nueva Solicitud</h2>
                      <div className="flex space-x-1.5 font-mono text-[900]">
                        <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                        <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                        <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="relative group">
                        <label className={`text-[10px] font-black uppercase tracking-widest mb-2 block transition-colors duration-300 ${focusedField === 'name' ? 'text-primary-400' : 'text-slate-500'}`}>
                          Identificación
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Nombre o empresa..."
                          className={inputClasses('name')}
                        />
                      </div>

                      <div className="relative group">
                        <label className={`text-[10px] font-black uppercase tracking-widest mb-2 block transition-colors duration-300 ${focusedField === 'email' ? 'text-primary-400' : 'text-slate-500'}`}>
                          Protocolo de contacto
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email profesional..."
                          className={inputClasses('email')}
                        />
                      </div>

                      <div className="relative group">
                        <label className={`text-[10px] font-black uppercase tracking-widest mb-2 block transition-colors duration-300 ${focusedField === 'message' ? 'text-primary-400' : 'text-slate-500'}`}>
                          Descripción del desafío
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="¿En qué podemos ayudarte? Describe brevemente tu proyecto aquí..."
                          className={`${inputClasses('message')} resize-none`}
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative w-full py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden group active:scale-95 ${isSubmitting ? 'bg-slate-800 text-slate-500' : 'bg-primary-600 text-white hover:bg-primary-500'
                        }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                      {/* Scanning effect on hover */}
                      <div className="absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? 'Encriptando mensaje...' : (
                          <>
                            Iniciar Transmisión
                            <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>


                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
