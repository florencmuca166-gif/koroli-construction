"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  year: string;
  color: string;
  index?: number;
}

export default function ProjectCard({ title, category, location, year, color, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      className="group overflow-hidden rounded-lg cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{
        y: -6,
        boxShadow: "0 32px 80px rgba(0,0,0,0.28)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <div className="h-56 w-full relative overflow-hidden">
        {/* Background zooms on hover via CSS group */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ background: color }}
        />

        {/* Gradient overlay deepens on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 group-hover:from-black/80 transition-all duration-500" />

        {/* Amber tint + "View Project" on hover */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(217,119,6,0.12)" }}
        >
          <span
            className="text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/50 px-5 py-2.5 rounded translate-y-4 group-hover:translate-y-0 transition-transform duration-400 ease-out"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            View Project →
          </span>
        </div>

        {/* Category + title */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
          <span className="text-xs font-bold tracking-widest text-[#C9A84C] uppercase">
            {category}
          </span>
          <h3
            className="text-white text-lg font-black leading-snug mt-1"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {title}
          </h3>
        </div>
      </div>

      <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-100 group-hover:bg-[#FFFDF9] transition-colors duration-300">
        <span className="text-sm text-[#6B7280]">{location}</span>
        <span className="text-sm font-semibold text-[#1C1C1E]">{year}</span>
      </div>
    </motion.div>
  );
}
