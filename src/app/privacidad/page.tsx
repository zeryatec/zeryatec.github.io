"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Eye, Lock, Database, UserCheck, Globe, Bell, Trash2 } from "lucide-react";

export default function Privacidad() {
  const sections = [
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "1. Responsable del Tratamiento",
      content: `El responsable del tratamiento de sus datos personales es ZeryaTec Consultoría Tecnológica, con domicilio en Sevilla, España. Para cualquier consulta relacionada con la protección de sus datos personales, puede dirigirse a nosotros a través del correo electrónico: proyectos@zeryatec.es.`,
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "2. Datos Recogidos",
      content: `A través de nuestro sitio web y formularios de contacto, podemos recopilar los siguientes datos personales: nombre completo o razón social, dirección de correo electrónico, número de teléfono, nombre de la empresa, cargo profesional, y cualquier información adicional que el usuario proporcione voluntariamente en el campo de mensaje. No recogemos datos especialmente protegidos ni información financiera a través de este sitio web.`,
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "3. Finalidad del Tratamiento",
      content: `Los datos personales recabados serán tratados con las siguientes finalidades: gestionar y responder a las consultas y solicitudes de información realizadas a través del formulario de contacto, elaborar y remitir presupuestos y propuestas técnicas personalizadas, mantener la comunicación necesaria durante la prestación de nuestros servicios, y enviar comunicaciones comerciales sobre nuestros servicios cuando el usuario haya otorgado su consentimiento expreso.`,
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "4. Base Legal del Tratamiento",
      content: `El tratamiento de sus datos personales se fundamenta en: el consentimiento expreso del interesado, otorgado al completar y enviar nuestros formularios; la ejecución de un contrato o la adopción de medidas precontractuales a solicitud del interesado; y el interés legítimo de ZeryaTec en mantener relaciones comerciales con sus clientes y prospects. En todo momento, el usuario puede retirar su consentimiento sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.`,
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "5. Cookies y Tecnologías de Seguimiento",
      content: `Este sitio web utiliza cookies técnicas necesarias para su correcto funcionamiento. Estas cookies no recogen información personal identificable y son estrictamente necesarias para la navegación. No utilizamos cookies de terceros con fines publicitarios. Para más información sobre las cookies que utilizamos, puede consultar nuestra Política de Cookies, disponible en la parte inferior de cada página del sitio web.`,
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "6. Medidas de Seguridad",
      content: `ZeryaTec implementa medidas técnicas y organizativas apropiadas para garantizar la seguridad de sus datos personales, incluyendo: cifrado de comunicaciones mediante protocolo HTTPS/TLS, control de acceso restringido a los datos personales, copias de seguridad periódicas, monitorización continua de la infraestructura, y formación del personal en materia de protección de datos. Nos comprometemos a tratar sus datos con la máxima confidencialidad y seguridad.`,
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "7. Derechos del Interesado",
      content: `De conformidad con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales, usted tiene derecho a: acceder a sus datos personales, rectificar datos inexactos o incompletos, solicitar la supresión de sus datos ("derecho al olvido"), oponerse al tratamiento de sus datos, solicitar la limitación del tratamiento, y solicitar la portabilidad de sus datos. Para ejercer cualquiera de estos derechos, envíe un correo electrónico a proyectos@zeryatec.es acompañado de una copia de su documento de identidad.`,
    },
    {
      icon: <Trash2 className="w-5 h-5" />,
      title: "8. Conservación de Datos",
      content: `Sus datos personales serán conservados durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados. Una vez finalizada la relación contractual, los datos serán bloqueados durante los plazos de prescripción legal aplicables y, una vez transcurridos, serán suprimidos de forma definitiva. Los datos recogidos a través del formulario de contacto, en ausencia de relación contractual, serán conservados durante un máximo de 12 meses.`,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-36">
      {/* Hero */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-8">
              <Shield className="w-4 h-4 text-primary-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-900">Protección de Datos</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 mb-6 tracking-tight">
              Política de <span className="text-primary-600">Privacidad</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
              En ZeryaTec nos tomamos muy en serio la protección de tus datos personales. Esta política explica cómo los recopilamos, usamos y protegemos.
            </p>
            <p className="text-sm text-slate-400 mt-4">
              Última actualización: Abril 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed font-medium text-[15px]">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rights CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
            <Lock className="w-12 h-12 mx-auto mb-6 opacity-60 relative z-10" />
            <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">Tus datos, tu control</h3>
            <p className="text-primary-100 mb-8 font-medium max-w-lg mx-auto relative z-10">
              Si deseas ejercer cualquiera de tus derechos ARCO o tienes preguntas sobre cómo tratamos tu información, contáctanos directamente.
            </p>
            <Link
              href="/contacto"
              className="inline-flex px-10 py-4 bg-white text-primary-700 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl hover:shadow-white/20 transition-all hover:scale-105 relative z-10"
            >
              Ejercer mis derechos
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
