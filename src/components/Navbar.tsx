"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Control del scroll para efectos visuales
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Sobre Nosotros", href: "/nosotros" },
  ];

  return (
    <nav 
      // fixed top-0 y z-[100] lo mantienen siempre arriba de todo
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md py-3' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HE AÑADIDO 'items-center' AQUÍ PARA CENTRAR EL LOGO Y EL BOTÓN MÓVIL */}
        <div className="flex justify-between items-center">
          
          {/* SECCIÓN DEL LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/logohorizontal.png" 
                alt="ZeryaTec Logo" 
                // Tamaños dinámicos: más pequeño al hacer scroll
                className={`w-auto transition-all duration-500 ease-in-out origin-left
                  ${isScrolled ? "h-8 md:h-10" : "h-12 md:h-16"}
                `} 
              />
            </Link>
          </div>
          
          {/* NAVEGACIÓN DESKTOP */}
          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors font-bold text-sm uppercase tracking-widest ${
                  isScrolled ? "text-slate-700 hover:text-primary-600" : "text-slate-900 hover:text-primary-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="bg-slate-900 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-primary-600/20 hover:scale-105 text-xs uppercase tracking-widest"
            >
              Contacto
            </Link>
          </div>

          {/* BOTÓN MENÚ MÓVIL - AÑADIDO 'flex items-center' PARA EL CENTRADO VERTICAL */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 focus:outline-none p-2 flex items-center justify-center"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-b border-slate-100 md:hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-2xl font-black text-slate-900 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contacto"
                  className="block w-full bg-slate-900 text-white text-center py-4 rounded-2xl font-black uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}