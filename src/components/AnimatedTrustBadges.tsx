"use client";

import { motion } from "framer-motion";

interface Badge {
  label: string;
  sub: string;
}

export default function AnimatedTrustBadges({ badges }: { badges: Badge[] }) {
  return (
    <section className="bg-[#1C1C1E] py-6 relative overflow-hidden">
      {/* Subtle gold shimmer strip top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4) 40%, rgba(201,168,76,0.4) 60%, transparent)"
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className="text-center group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p
                className="text-[#C9A84C] text-xl font-black tracking-wide group-hover:scale-110 transition-transform duration-300 inline-block"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {badge.label}
              </p>
              <p className="text-gray-400 text-xs mt-0.5">{badge.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
