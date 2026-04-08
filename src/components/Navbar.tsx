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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Sobre Nosotros", href: "/nosotros" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ease-in-out ${isScrolled ? "h-16" : "h-40"}`}>
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/logohorizontal.png" 
                alt="ZeryaTec Logo" 
                className={`w-auto drop-shadow-sm transition-all duration-500 hover:scale-105 origin-left 
                  ${isScrolled ? "h-10 md:h-12" : "h-28 md:h-32"}
                `} 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors font-medium text-[16px] ${
                  isScrolled ? "text-gray-700 hover:text-primary" : "text-gray-900 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:scale-105 text-[15px]"
            >
              Contacto
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl border-b border-gray-100 overflow-hidden absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-4 text-lg font-medium text-gray-800 hover:text-primary hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
