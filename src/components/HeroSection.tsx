"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [revealed, setRevealed] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(async () => {
      await controls.start({
        clipPath: "inset(0 100% 0 0)",
        transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] },
      });
      setRevealed(true);
    }, 600);
    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center">
      {/* Build layer — charcoal background with gold accents */}
      <div className="absolute inset-0 bg-[#1C1C1E]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 50%, #C9A84C 0%, transparent 60%)",
          }}
        />
        {/* Decorative construction lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="100%" x2="50%" y2="0" stroke="#C9A84C" strokeWidth="1" />
          <line x1="100%" y1="100%" x2="50%" y2="0" stroke="#C9A84C" strokeWidth="1" />
          <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#C9A84C" strokeWidth="0.5" />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#C9A84C" strokeWidth="0.5" />
          <rect x="25%" y="20%" width="50%" height="60%" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Blueprint overlay — slides away on load */}
      <motion.div
        className="absolute inset-0 blueprint-grid z-10"
        initial={{ clipPath: "inset(0 0% 0 0)" }}
        animate={controls}
      >
        {/* Blueprint annotation lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#64a0ff" strokeWidth="1" strokeDasharray="8 4" />
          <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#64a0ff" strokeWidth="1" strokeDasharray="8 4" />
          <rect x="20%" y="20%" width="60%" height="60%" fill="none" stroke="#64a0ff" strokeWidth="1" />
          <circle cx="50%" cy="50%" r="120" fill="none" stroke="#64a0ff" strokeWidth="0.5" />
          <text x="22%" y="18%" fill="#64a0ff" fontSize="10" fontFamily="monospace">ELEVATION A-01</text>
          <text x="72%" y="82%" fill="#64a0ff" fontSize="10" fontFamily="monospace">SCALE 1:100</text>
        </svg>
        {/* Blueprint label */}
        <div className="absolute bottom-8 left-8 text-blue-200 opacity-60 font-mono text-xs tracking-widest">
          KOROLI CONSTRUCTION · TORONTO, ON · REV 01
        </div>
      </motion.div>

      {/* Content — fades in after blueprint slides away */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p
            className="text-[#C9A84C] text-sm font-bold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Toronto&apos;s Premier General Contractor
          </p>
          <h1
            className="text-4xl sm:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            We Build
            <span className="block" style={{ color: "#C9A84C" }}>
              Toronto&apos;s
            </span>
            Future
          </h1>
          <p
            className="text-gray-300 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            From blueprint to completion — residential & commercial construction
            delivered on time, on budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded font-bold text-sm tracking-wide bg-[#D97706] text-white hover:bg-[#b45309] transition-colors duration-200"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Get a Free Quote
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded font-bold text-sm tracking-wide border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#1C1C1E] transition-colors duration-200"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        <span className="text-gray-500 text-xs tracking-widest font-mono uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[#C9A84C] to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
