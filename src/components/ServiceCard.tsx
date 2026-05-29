"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm relative overflow-hidden group cursor-default"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{
        y: -8,
        boxShadow: "0 24px 60px rgba(201,168,76,0.16), 0 8px 20px rgba(0,0,0,0.08)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Hover background tint */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 65%)" }}
      />

      {/* Gold left accent bar — scales down from top on hover */}
      <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-gradient-to-b from-[#C9A84C] to-[#D97706] rounded-r scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

      {/* Icon — pops up on hover */}
      <div className="text-4xl mb-5 inline-block transition-transform duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-1">
        {icon}
      </div>

      <h3
        className="text-lg font-bold text-[#1C1C1E] mb-3 group-hover:text-[#D97706] transition-colors duration-300"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {title}
      </h3>
      <p className="text-[#6B7280] text-sm leading-relaxed">{description}</p>

      {/* Bottom gold line reveal */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#C9A84C] to-[#D97706] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}
