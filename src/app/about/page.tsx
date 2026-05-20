import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Koroli Construction — Toronto's trusted general contractor with 20+ years of experience building residential and commercial projects across the GTA.",
  alternates: { canonical: "https://koroliconstruction.ca/about" },
};

const values = [
  {
    title: "Quality First",
    description:
      "Every project is built to exceed Ontario Building Code standards. We never cut corners.",
  },
  {
    title: "Transparent Communication",
    description:
      "Regular updates, clear timelines, and honest budgeting from day one through handover.",
  },
  {
    title: "On-Time Delivery",
    description:
      "We respect your schedule. Our project management system keeps every milestone on track.",
  },
  {
    title: "Community Focus",
    description:
      "Toronto-based, Toronto-proud. We invest in local trades and suppliers wherever possible.",
  },
];

const certifications = [
  "Ontario General Contractor License",
  "WSIB Certified (Ontario)",
  "$5M Commercial Liability Insurance",
  "Tarion Warranty Corporation Member",
  "BOMA Member (Building Owners & Managers)",
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#1C1C1E] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Who We Are
          </p>
          <h1
            className="text-4xl sm:text-6xl font-black text-white"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            About Koroli
          </h1>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div
              className="h-80 lg:h-full min-h-[400px] rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg, #1C1C1E 0%, #3a3a3c 60%, #C9A84C22 100%)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[#C9A84C] text-6xl">🏗️</span>
              </div>
            </div>

            <div>
              <h2
                className="text-3xl sm:text-4xl font-black text-[#1C1C1E] mb-6"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Building Toronto for Over 20 Years
              </h2>
              <p
                className="text-[#6B7280] text-lg leading-relaxed mb-6"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                }}
              >
                &ldquo;Our mission is simple: deliver extraordinary construction
                that stands the test of time, on schedule and on budget.&rdquo;
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Founded in Toronto, Koroli Construction has grown from a small
                residential contractor into one of the GTA&apos;s most respected
                general contracting firms. We&apos;ve completed hundreds of
                projects across the city — from custom homes in Rosedale to
                commercial towers on King Street.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Every project benefits from our in-house project management
                team, our network of trusted Toronto tradespeople, and our
                obsessive commitment to quality and client communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-[#1C1C1E]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="border-l-4 border-[#C9A84C] pl-6 py-2"
              >
                <h3
                  className="text-lg font-black text-[#1C1C1E] mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {v.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-black text-[#1C1C1E] mb-10"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Licences & Certifications
          </h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {certifications.map((c) => (
              <li
                key={c}
                className="bg-white border border-gray-200 rounded-full px-6 py-3 text-sm font-semibold text-[#1C1C1E] shadow-sm"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                ✓ {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1E] py-16 text-center px-4">
        <h2
          className="text-3xl font-black text-white mb-6"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Let&apos;s Build Together
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 rounded font-bold text-sm tracking-wide bg-[#D97706] text-white hover:bg-[#b45309] transition-colors"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Contact Our Team
        </Link>
      </section>
    </>
  );
}
