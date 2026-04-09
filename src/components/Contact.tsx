"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Globe } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    // Tu API Key de Web3Forms para que llegue a zeryatec@gmail.com
    formData.append("access_key", "f3ffaf69-ef75-4031-a0df-7bd6fddc36bc");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        alert("¡Mensaje enviado con éxito!");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Hubo un problema al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error enviando formulario:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Impulsa el futuro de tu <span className="text-primary">negocio hoy</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-medium">
              "Operamos 100% en la nube. Somos ágiles, directos y eficientes."
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-600">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Operativa Descentralizada</p>
                  <p>100% en la nube</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Correo Electrónico</p>
                  <p>contacto@zeryatec.es</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Ej: Laura García"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo corporativo</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="hola@empresa.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sector de tu empresa</label>
                <input
                  type="text"
                  name="sector"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Ej: Clínica Dental, Taller..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">¿Cómo podemos ayudarte?</label>
                <textarea
                  name="mensaje"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Cuéntanos sobre los procesos que quieres mejorar..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {loading ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}