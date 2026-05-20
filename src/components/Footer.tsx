import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1E] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p
              className="text-white text-lg font-black tracking-widest uppercase mb-3"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Koroli{" "}
              <span style={{ color: "#C9A84C" }}>Construction</span>
            </p>
            <p className="text-sm leading-relaxed max-w-xs">
              Toronto&apos;s trusted general contractor for residential and
              commercial projects. Licensed, insured, and WSIB certified.
            </p>
            <p className="mt-4 text-sm">
              <span className="text-[#C9A84C] font-semibold">Toronto, ON</span>
              {" · "}
              <a
                href="tel:+14160000000"
                className="hover:text-white transition-colors"
              >
                (416) 000-0000
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h3
              className="text-white text-xs font-bold tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-white text-xs font-bold tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Residential Construction",
                "Commercial Construction",
                "Home Renovations",
                "Office Fit-Outs",
                "Project Management",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {year} Koroli Construction. All rights reserved.</p>
          <p>Toronto, Ontario, Canada</p>
        </div>
      </div>
    </footer>
  );
}
