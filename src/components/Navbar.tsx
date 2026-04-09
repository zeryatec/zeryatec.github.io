"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md' 
          : 'bg-transparent'
      }`}
    >
      {/* CLAVE: El padding vertical (py) es el mismo arriba y abajo. 
          'flex items-center' obliga a que todo lo de adentro esté centrado.
      */}
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6 md:py-8'}`}>
        <div className="flex justify-between items-center w-full">
          
          {/* LOGO - Centrado verticalmente por el padre */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/logohorizontal.png" 
                alt="ZeryaTec Logo" 
                className={`w-auto transition-all duration-300 ease-in-out ${
                  isScrolled ? "h-8 md:h-9" : "h-10 md:h-12"
                }`} 
              />
            </Link>
          </div>
          
          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-primary-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="bg-slate-900 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full font-bold transition-all text-xs uppercase tracking-widest"
            >
              Contacto
            </Link>
          </div>

          {/* BURGER - Ahora con flex e items-center para asegurar el centrado */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 focus:outline-none flex items-center justify-center p-1"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-50 md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-xl font-bold text-slate-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold uppercase"
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