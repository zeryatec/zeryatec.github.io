"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />;
  }

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
      aria-label="Toggle Dark Mode"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          <Sun className="w-5 h-5" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          <Moon className="w-5 h-5" />
        </motion.div>
      </div>
    </button>
  );
}
