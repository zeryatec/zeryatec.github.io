"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-white dark:bg-slate-900 py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO - Centrado verticalmente */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/logohorizontal.png" 
                alt="ZeryaTec Logo" 
                className={`w-auto transition-all duration-500 ease-in-out origin-left dark:hidden
                  ${isScrolled ? "h-8 md:h-10" : "h-16 md:h-20"}
                `} 
              />
              <img 
                src="/logohorizontal1.png" 
                alt="ZeryaTec Logo" 
                className={`w-auto transition-all duration-500 ease-in-out origin-left hidden dark:block
                  ${isScrolled ? "h-8 md:h-10" : "h-16 md:h-20"}
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
                className="transition-colors font-bold text-sm uppercase tracking-widest text-gray-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md hover:scale-105 text-xs uppercase tracking-widest"
            >
              Contacto
            </Link>
            <ThemeToggle />
          </div>

          {/* BOTÓN HAMBURGUESA - Centrado verticalmente con el logo */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white focus:outline-none p-2 flex items-center justify-center"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE - Siempre fondo blanco para evitar el efecto 'negro' */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl md:hidden overflow-hidden border-t border-gray-100 dark:border-slate-800"
          >
            <div className="px-6 py-8 space-y-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-xl font-bold text-gray-900 dark:text-slate-100 hover:text-cyan-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="block w-full bg-cyan-600 text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}