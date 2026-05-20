import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Koroli Construction | Toronto General Contractor",
  description:
    "Koroli Construction builds Toronto's finest residential and commercial spaces. Licensed, insured, WSIB certified. Get your free quote today.",
  alternates: { canonical: "https://koroliconstruction.ca" },
};

const services = [
  {
    icon: "🏗️",
    title: "Commercial Construction",
    description:
      "From ground-up office towers to large-scale retail and industrial facilities across the GTA.",
  },
  {
    icon: "🏠",
    title: "Residential Construction",
    description:
      "Custom homes, additions, and multi-unit residential projects built to the highest Ontario standards.",
  },
  {
    icon: "🔨",
    title: "Renovations & Fit-Outs",
    description:
      "Complete interior transformations for homes, offices, and commercial spaces in Toronto.",
  },
  {
    icon: "📐",
    title: "Project Management",
    description:
      "End-to-end oversight from permit acquisition through final inspection and handover.",
  },
  {
    icon: "🏢",
    title: "Office Build-Outs",
    description:
      "Turnkey office environments designed for productivity and built to your timeline.",
  },
  {
    icon: "⚡",
    title: "Fast-Track Delivery",
    description:
      "Accelerated scheduling for time-sensitive commercial and institutional projects.",
  },
];

const featuredProjects = [
  {
    title: "King Street Condos",
    category: "Residential",
    location: "King West, Toronto",
    year: "2024",
    color: "linear-gradient(135deg, #1C1C1E 0%, #3a3a3c 100%)",
  },
  {
    title: "Harbour Office Complex",
    category: "Commercial",
    location: "Harbourfront, Toronto",
    year: "2023",
    color: "linear-gradient(135deg, #0a1628 0%, #0f2040 100%)",
  },
  {
    title: "Rosedale Heritage Reno",
    category: "Renovation",
    location: "Rosedale, Toronto",
    year: "2024",
    color: "linear-gradient(135deg, #2d1a0a 0%, #5c3a1a 100%)",
  },
];

const trustBadges = [
  { label: "Licensed", sub: "Ontario Builder" },
  { label: "Insured", sub: "$5M+ Liability" },
  { label: "WSIB", sub: "Certified" },
  { label: "20+ Years", sub: "Experience" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Trust badges */}
      <section className="bg-[#1C1C1E] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="text-center">
                <p
                  className="text-[#C9A84C] text-xl font-black tracking-wide"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {badge.label}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-[#D97706] text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#1C1C1E]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Full-Service Construction
            </h2>
            <p className="text-[#6B7280] mt-4 max-w-xl mx-auto text-base leading-relaxed">
              From concept to completion, Koroli Construction delivers
              exceptional results for Toronto&apos;s most demanding projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#D97706] hover:text-[#b45309] transition-colors"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-[#D97706] text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Work
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#1C1C1E]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded font-bold text-sm tracking-wide bg-[#1C1C1E] text-white hover:bg-[#3a3a3c] transition-colors"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              See All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1C1C1E] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Ready to Build Something{" "}
            <span style={{ color: "#C9A84C" }}>Exceptional?</span>
          </h2>
          <p
            className="text-gray-400 text-lg mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Contact our team today for a free consultation and project estimate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded font-bold text-base tracking-wide bg-[#D97706] text-white hover:bg-[#b45309] transition-colors duration-200"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
