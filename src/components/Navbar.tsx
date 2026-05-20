"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#1C1C1E] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="text-xl font-black tracking-widest text-white uppercase"
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
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#C9A84C]"
                    : "text-gray-300 hover:text-[#C9A84C]"
                }`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 rounded text-sm font-bold tracking-wide bg-[#D97706] text-white hover:bg-[#b45309] transition-colors duration-200"
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
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111111] border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-base font-semibold tracking-wide py-2 transition-colors ${
                pathname === link.href ? "text-[#C9A84C]" : "text-gray-300"
              }`}
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 rounded text-sm font-bold text-center bg-[#D97706] text-white"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
