"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse tracking logic for interactive flashlight background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const flashlightMask = useMotionTemplate`radial-gradient(circle 600px at ${smoothMouseX}px ${smoothMouseY}px, black 10%, transparent 100%)`;

  return (
    <section 
      ref={ref} 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen overflow-hidden bg-[#fafcff] flex items-center pt-28 pb-20 group"
    >
      {/* Background Grid - Darker base */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06] bg-[linear-gradient(to_right,#006593_1px,transparent_1px),linear-gradient(to_bottom,#006593_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Background that moves and illuminates with pointer */}
      <motion.div
        style={{ y: backgroundY, WebkitMaskImage: flashlightMask, maskImage: flashlightMask }}
        className="absolute inset-x-0 inset-y-[-20%] z-0 pointer-events-none"
      >
        {/* The highlighted thicker grid inside the flashlight */}
        <div className="absolute inset-0 bg-[#00cbf1] opacity-10 bg-[linear-gradient(to_right,#006593_2px,transparent_2px),linear-gradient(to_bottom,#006593_2px,transparent_2px)] bg-[size:4rem_4rem]"></div>
        
        {/* Soft glowing aura under cursor */}
        <motion.div 
          style={{ x: smoothMouseX, y: smoothMouseY, translateX: "-50%", translateY: "-50%" }}
          className="absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full bg-primary/20 blur-[120px]"
        ></motion.div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-8 inline-flex items-center gap-2 bg-white border border-gray-200 shadow-md shadow-primary/5 rounded-full px-5 py-2 hover:scale-105 transition-transform cursor-default">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#009bc2] uppercase tracking-widest">
              Consultoría Tecnológica B2B
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Digitalizamos tu negocio <br className="hidden md:block" />
            <span className="text-gradient drop-shadow-sm">para que tú solo crezcas.</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Soluciones de software, automatización e IA construidas a medida de las empresas más exigentes.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contacto"
              className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold text-xl transition-all shadow-[0_10px_40px_-10px_rgba(0,203,241,0.5)] hover:shadow-[0_15px_50px_-15px_rgba(0,101,147,0.7)] hover:scale-[1.03] active:scale-95"
            >
              Comienza tu evolución
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <div className="mt-16 md:mt-24 flex flex-col items-center opacity-60">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-xs md:text-sm font-bold text-gray-500 mb-3 tracking-widest uppercase">Descubre Más</span>
            <div className="w-7 h-12 border-2 border-gray-400 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-gray-400 rounded-full opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
