"use client";

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const PARTICLES = [
  { size: 3, x: "14%",  y: "22%", cls: "float-a", opacity: 0.55 },
  { size: 2, x: "76%",  y: "16%", cls: "float-b", opacity: 0.38 },
  { size: 4, x: "86%",  y: "66%", cls: "float-c", opacity: 0.48 },
  { size: 2, x: "31%",  y: "77%", cls: "float-d", opacity: 0.30 },
  { size: 3, x: "60%",  y: "42%", cls: "float-e", opacity: 0.42 },
  { size: 2, x: "91%",  y: "34%", cls: "float-b", opacity: 0.50 },
  { size: 3, x:  "8%",  y: "56%", cls: "float-c", opacity: 0.36 },
  { size: 2, x: "46%",  y: "87%", cls: "float-a", opacity: 0.26 },
  { size: 2, x: "52%",  y: "12%", cls: "float-d", opacity: 0.33 },
];

const STATS = [
  { value: 500, suffix: "+",  label: "Projects" },
  { value: 20,  suffix: "yr", label: "Experience" },
  { value: 98,  suffix: "%",  label: "Satisfaction" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 80;
    const tick = () => {
      frame++;
      setCount(Math.min(Math.round((frame / total) * target), target));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target]);
  return <>{count}{suffix}</>;
}

export default function HeroSection() {
  const [revealed, setRevealed] = useState(false);
  const controls = useAnimation();

  const { scrollY } = useScroll();
  const bgY      = useTransform(scrollY, [0, 700], ["0%", "25%"]);
  const contentY = useTransform(scrollY, [0, 700], ["0%", "12%"]);

  useEffect(() => {
    const t = setTimeout(async () => {
      await controls.start({
        clipPath: "inset(0 100% 0 0)",
        transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] },
      });
      setRevealed(true);
    }, 600);
    return () => clearTimeout(t);
  }, [controls]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center">

      {/* ── Parallax background layer ── */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[#1C1C1E]">

          {/* Dual radial gold glow */}
          <div className="absolute inset-0" style={{
            background:
              "radial-gradient(ellipse at 68% 48%, rgba(201,168,76,0.22) 0%, transparent 55%), " +
              "radial-gradient(ellipse at 20% 82%, rgba(217,119,6,0.10) 0%, transparent 40%)",
          }} />

          {/* Construction lines that draw in on reveal */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="100%" x2="50%" y2="0"
              stroke="#C9A84C" strokeWidth="0.8" strokeDasharray="2000"
              style={{ strokeDashoffset: revealed ? 0 : 2000, transition: "stroke-dashoffset 3s ease-in-out 0.3s", opacity: 0.14 }} />
            <line x1="100%" y1="100%" x2="50%" y2="0"
              stroke="#C9A84C" strokeWidth="0.8" strokeDasharray="2000"
              style={{ strokeDashoffset: revealed ? 0 : 2000, transition: "stroke-dashoffset 3s ease-in-out 0.6s", opacity: 0.14 }} />
            <line x1="0" y1="62%" x2="100%" y2="62%"
              stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2000"
              style={{ strokeDashoffset: revealed ? 0 : 2000, transition: "stroke-dashoffset 2.5s ease-in-out 1.1s", opacity: 0.07 }} />
            <rect x="24%" y="18%" width="52%" height="64%"
              fill="none" stroke="#C9A84C" strokeWidth="0.4"
              strokeDasharray="2000"
              style={{ strokeDashoffset: revealed ? 0 : 2000, transition: "stroke-dashoffset 3.5s ease-in-out 0.8s", opacity: 0.06 }} />
          </svg>

          {/* Floating gold particles */}
          {PARTICLES.map((p, i) => (
            <div key={i} className={`absolute rounded-full bg-[#C9A84C] ${p.cls}`}
              style={{ width: p.size, height: p.size, left: p.x, top: p.y, opacity: p.opacity }} />
          ))}
        </div>
      </motion.div>

      {/* ── Blueprint overlay — slides away ── */}
      <motion.div
        className="absolute inset-0 blueprint-grid z-10"
        initial={{ clipPath: "inset(0 0% 0 0)" }}
        animate={controls}
      >
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#64a0ff" strokeWidth="1" strokeDasharray="8 4" />
          <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#64a0ff" strokeWidth="1" strokeDasharray="8 4" />
          <rect x="20%" y="20%" width="60%" height="60%" fill="none" stroke="#64a0ff" strokeWidth="1" />
          <circle cx="50%" cy="50%" r="120" fill="none" stroke="#64a0ff" strokeWidth="0.5" />
          <text x="22%" y="18%" fill="#64a0ff" fontSize="10" fontFamily="monospace">ELEVATION A-01</text>
          <text x="72%" y="82%" fill="#64a0ff" fontSize="10" fontFamily="monospace">SCALE 1:100</text>
        </svg>
        <div className="absolute bottom-8 left-8 text-blue-200 opacity-60 font-mono text-xs tracking-widest">
          KOROLI CONSTRUCTION · TORONTO, ON · REV 01
        </div>
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full will-change-transform"
        style={{ y: contentY }}
      >
        {/* Eyebrow + animated underline */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={revealed ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#C9A84C] text-sm font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            Toronto&apos;s Premier General Contractor
          </p>
          <motion.div
            className="h-px bg-gradient-to-r from-[#C9A84C] to-transparent mt-2"
            initial={{ scaleX: 0 }}
            animate={revealed ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.25 }}
            style={{ transformOrigin: "left", maxWidth: "300px" }}
          />
        </motion.div>

        {/* Headline — word-by-word stagger with skew */}
        <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-7"
          style={{ fontFamily: "var(--font-montserrat)" }}>
          {(["We", "Build"] as const).map((word, i) => (
            <motion.span key={word} className="inline-block mr-4"
              initial={{ opacity: 0, y: 65, skewX: -8 }}
              animate={revealed ? { opacity: 1, y: 0, skewX: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}>
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span className="inline-block shimmer-gold"
            initial={{ opacity: 0, y: 65, skewX: -8 }}
            animate={revealed ? { opacity: 1, y: 0, skewX: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.33, 1, 0.68, 1] }}>
            Toronto&apos;s
          </motion.span>
          {" "}
          <motion.span className="inline-block"
            initial={{ opacity: 0, y: 65, skewX: -8 }}
            animate={revealed ? { opacity: 1, y: 0, skewX: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.34, ease: [0.33, 1, 0.68, 1] }}>
            Future
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-300 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}>
          From blueprint to completion — residential & commercial construction
          delivered on time, on budget.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.70 }}>
          <Link href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded font-bold text-sm tracking-wide bg-[#D97706] text-white hover:bg-[#b45309] transition-all duration-300 pulse-glow"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            Get a Free Quote
          </Link>
          <Link href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 rounded font-bold text-sm tracking-wide border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#1C1C1E] transition-all duration-300"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            View Our Work
          </Link>
        </motion.div>

        {/* Live count-up stats */}
        <motion.div
          className="flex gap-8 sm:gap-12 border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          animate={revealed ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.95 }}>
          {STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={revealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + i * 0.12 }}>
              <p className="text-2xl sm:text-3xl font-black text-white tabular-nums"
                style={{ fontFamily: "var(--font-montserrat)" }}>
                <CountUp target={s.value} suffix={s.suffix} active={revealed} />
              </p>
              <p className="text-gray-500 text-xs tracking-wider mt-0.5 uppercase">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : {}}
        transition={{ delay: 1.3 }}>
        <span className="text-gray-500 text-xs tracking-widest font-mono uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[#C9A84C] to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }} />
      </motion.div>
    </section>
  );
}
