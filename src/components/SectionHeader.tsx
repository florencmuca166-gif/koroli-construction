"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <p
        className="text-[#D97706] text-xs font-bold tracking-[0.3em] uppercase mb-3"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {eyebrow}
      </p>
      <h2
        className="text-3xl sm:text-4xl font-black text-[#1C1C1E]"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#6B7280] mt-4 max-w-xl mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      {/* Gold accent line */}
      <motion.div
        className="h-px w-16 bg-gradient-to-r from-[#C9A84C] to-[#D97706] mx-auto mt-5"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ transformOrigin: "center" }}
      />
    </motion.div>
  );
}
