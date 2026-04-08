"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Terminos() {
  const sections = [
    {
      title: "1. Objeto y Ámbito de Aplicación",
      content: `Los presentes Términos y Condiciones regulan el acceso y uso del sitio web de ZeryaTec Consultoría Tecnológica (en adelante, "ZeryaTec"), así como la contratación de los servicios ofrecidos a través del mismo. Al acceder o utilizar este sitio web, el usuario acepta quedar vinculado por estos términos en su totalidad. Si no está de acuerdo con alguna de estas condiciones, le rogamos que no utilice nuestros servicios.`,
    },
    {
      title: "2. Identificación del Titular",
      content: `El presente sitio web es propiedad y está operado por ZeryaTec Consultoría Tecnológica. Puede contactarnos a través del correo electrónico proyectos@zeryatec.es o mediante el formulario de contacto disponible en nuestra web.`,
    },
    {
      title: "3. Servicios Ofrecidos",
      content: `ZeryaTec ofrece servicios profesionales de consultoría tecnológica B2B que incluyen, entre otros: desarrollo de software a medida, automatización de procesos empresariales, diseño e implementación de arquitecturas backend, ciberseguridad y auditoría, análisis de datos y Business Intelligence, y despliegue de infraestructuras cloud. La descripción detallada de cada servicio se encuentra disponible en la sección correspondiente de este sitio web.`,
    },
    {
      title: "4. Propiedad Intelectual e Industrial",
      content: `Todos los contenidos del sitio web, incluyendo textos, gráficos, imágenes, logotipos, iconos, software, código fuente, diseño y estructura de navegación, son propiedad exclusiva de ZeryaTec o de sus licenciantes, y están protegidos por las leyes españolas e internacionales de propiedad intelectual e industrial. Queda terminantemente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación, total o parcial, de los contenidos de este sitio web sin la autorización expresa y por escrito de ZeryaTec.`,
    },
    {
      title: "5. Condiciones de Contratación",
      content: `La contratación de los servicios de ZeryaTec se formalizará mediante la aceptación de un presupuesto o propuesta técnica individualizada. Cada proyecto será objeto de un acuerdo específico que detallará el alcance, plazos, entregables y condiciones económicas. ZeryaTec se reserva el derecho de modificar sus tarifas, notificando previamente a los clientes afectados con un mínimo de 30 días de antelación.`,
    },
    {
      title: "6. Responsabilidad y Garantías",
      content: `ZeryaTec se compromete a prestar sus servicios con la máxima diligencia profesional y conforme a los estándares de calidad del sector. No obstante, ZeryaTec no será responsable de los daños o perjuicios que puedan derivarse de interrupciones del servicio, fallos técnicos ajenos a su control, ataques informáticos de terceros, o del uso indebido de los servicios por parte del cliente. La responsabilidad total de ZeryaTec en ningún caso excederá el importe total facturado por el servicio en cuestión.`,
    },
    {
      title: "7. Confidencialidad",
      content: `Ambas partes se comprometen a mantener la más estricta confidencialidad sobre toda la información técnica, comercial o de cualquier otra naturaleza a la que tengan acceso durante la relación profesional. Esta obligación de confidencialidad se mantendrá vigente durante la relación contractual y durante un periodo de 2 años tras su finalización.`,
    },
    {
      title: "8. Resolución de Conflictos",
      content: `Para cualquier controversia o conflicto que pudiera surgir en relación con la interpretación o ejecución de estos Términos y Condiciones, las partes se someten a la jurisdicción de los Juzgados y Tribunales de la ciudad de Sevilla, España, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.`,
    },
    {
      title: "9. Modificaciones",
      content: `ZeryaTec se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web. El uso continuado de los servicios tras la publicación de los cambios implicará la aceptación de los mismos.`,
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Documento Legal</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 mb-6 tracking-tight">
              Términos y <span className="text-primary-600">Condiciones</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium">
              Última actualización: Abril 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tight">
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed font-medium text-[15px]">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] -mr-20 -mt-20" />
            <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">¿Tienes alguna duda legal?</h3>
            <p className="text-slate-400 mb-8 font-medium max-w-lg mx-auto relative z-10">
              Si necesitas aclaraciones sobre nuestros términos y condiciones, no dudes en contactarnos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex px-10 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl hover:shadow-primary-500/30 transition-all hover:scale-105 relative z-10"
            >
              Contactar
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
