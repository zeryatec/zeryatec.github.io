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
    const nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const sector = formData.get("sector") as string;
    const mensaje = formData.get("mensaje") as string;

    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "api-key": "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",
        },
        body: JSON.stringify({
          sender: { name: "ZeryaTec Web", email: "zeryatec@gmail.com" },
          to: [{ email: "zeryatec@gmail.com", name: "ZeryaTec" }],
          replyTo: { email: email, name: nombre },
          subject: `[Web ZeryaTec] Nueva solicitud de ${nombre}`,
          htmlContent: `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">
              <div style="background: linear-gradient(135deg, #006593, #003852); padding: 32px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 800;">Nueva Solicitud de Contacto</h1>
              </div>
              <div style="padding: 32px;">
                <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 16px; border-left: 4px solid #006593;">
                  <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Nombre</p>
                  <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1e293b;">${nombre}</p>
                </div>
                <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 16px; border-left: 4px solid #006593;">
                  <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Email</p>
                  <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1e293b;">${email}</p>
                </div>
                <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 16px; border-left: 4px solid #006593;">
                  <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Sector</p>
                  <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1e293b;">${sector}</p>
                </div>
                <div style="background: white; border-radius: 12px; padding: 24px; border-left: 4px solid #006593;">
                  <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Mensaje</p>
                  <p style="margin: 0; font-size: 16px; color: #1e293b; white-space: pre-wrap;">${mensaje}</p>
                </div>
              </div>
              <div style="background: #f1f5f9; padding: 16px; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #94a3b8;">Puedes responder directamente a este email para contactar con ${nombre}.</p>
              </div>
            </div>
          `,
        }),
      });

      if (res.ok) {
        alert("¡Mensaje enviado con éxito!");
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Error de Brevo:", await res.json());
        alert("Hubo un problema al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error enviando formulario:", error);
      alert("Error de conexión. Inténtalo de nuevo.");
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