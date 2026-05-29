"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-[#1C1C1E]/80 backdrop-blur-xl shadow-2xl"
        : "bg-[#1C1C1E] shadow-lg"
    }`}>
      {/* Gold shimmer line at bottom, fades in when scrolled */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5) 40%, rgba(201,168,76,0.5) 60%, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="text-xl font-black tracking-widest text-white uppercase group-hover:text-gray-200 transition-colors duration-200"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Koroli
            </span>
            <span
              className="text-xl font-black tracking-widest uppercase"
              style={{ color: "#C9A84C", fontFamily: "var(--font-montserrat)" }}
            >
              Construction
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative group/link pb-0.5 ${
                  pathname === link.href
                    ? "text-[#C9A84C]"
                    : "text-gray-300 hover:text-[#C9A84C]"
                }`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute -bottom-0.5 left-0 h-px bg-[#C9A84C] transition-all duration-300 w-0 group-hover/link:w-full" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 rounded text-sm font-bold tracking-wide bg-[#D97706] text-white hover:bg-[#b45309] transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/30"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-[#111111]/95 backdrop-blur-xl border-t border-gray-800 px-4 py-4 flex flex-col gap-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-semibold tracking-wide py-3 border-b border-gray-800 transition-colors ${
                    pathname === link.href ? "text-[#C9A84C]" : "text-gray-300"
                  }`}
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 px-5 py-3 rounded text-sm font-bold text-center bg-[#D97706] text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
