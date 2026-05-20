import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service construction in Toronto: commercial, residential, renovations, office fit-outs, and project management across the GTA. Licensed and WSIB certified.",
  alternates: { canonical: "https://koroliconstruction.ca/services" },
};

const services = [
  {
    icon: "🏗️",
    title: "Commercial Construction",
    description:
      "We deliver ground-up commercial builds for offices, retail centres, warehouses, and industrial facilities across Toronto and the GTA. Our team manages every phase from permit acquisition to final occupancy.",
    features: [
      "Office towers & mixed-use developments",
      "Retail & restaurant build-outs",
      "Industrial & warehouse facilities",
      "Institutional & healthcare projects",
    ],
  },
  {
    icon: "🏠",
    title: "Residential Construction",
    description:
      "Custom homes built exactly to your vision. From architectural plans through final inspection, we partner with you to deliver a home that reflects your lifestyle and stands for generations.",
    features: [
      "Custom single-family homes",
      "Semi-detached & townhomes",
      "Multi-unit residential (low & mid-rise)",
      "Secondary suites & laneway houses",
    ],
  },
  {
    icon: "🔨",
    title: "Renovations",
    description:
      "Breathe new life into your existing space. Our renovation teams tackle everything from kitchen and bathroom remodels to full whole-home transformations.",
    features: [
      "Kitchen & bathroom renovations",
      "Basement finishing & waterproofing",
      "Home additions & second-storey builds",
      "Heritage & character restoration",
    ],
  },
  {
    icon: "🏢",
    title: "Office Fit-Outs",
    description:
      "Turnkey office environments that reflect your brand and support your team. We work around your schedule to minimise disruption.",
    features: [
      "Open-plan & private office layouts",
      "Boardrooms & collaborative spaces",
      "Reception & client-facing areas",
      "IT infrastructure coordination",
    ],
  },
  {
    icon: "📐",
    title: "Project Management",
    description:
      "Need an experienced PM to oversee your existing build team? Our standalone project management service brings rigour, accountability, and reporting to any construction project.",
    features: [
      "Budget tracking & cost control",
      "Subcontractor coordination",
      "Schedule management & reporting",
      "Permit & inspection management",
    ],
  },
  {
    icon: "⚡",
    title: "Fast-Track Delivery",
    description:
      "When your timeline is non-negotiable, our accelerated delivery programme applies additional resources, extended hours, and real-time scheduling to hit your deadline.",
    features: [
      "Phased occupancy planning",
      "Extended-hours site management",
      "Parallel-path construction",
      "Weekly milestone reporting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1C1C1E] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            What We Offer
          </p>
          <h1
            className="text-4xl sm:text-6xl font-black text-white"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Our Services
          </h1>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
            Comprehensive construction services for Toronto&apos;s residential
            and commercial clients.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-white rounded-lg shadow-sm p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2
                  className="text-2xl font-black text-[#1C1C1E] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {service.title}
                </h2>
                <p className="text-[#6B7280] leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="bg-[#F5F3EF] rounded-lg p-6">
                <h3
                  className="text-xs font-bold tracking-widest text-[#D97706] uppercase mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Includes
                </h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-[#1C1C1E]"
                    >
                      <span className="text-[#C9A84C] font-bold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1E] py-16 text-center px-4">
        <h2
          className="text-3xl font-black text-white mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Get a free consultation and detailed estimate.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 rounded font-bold text-sm tracking-wide bg-[#D97706] text-white hover:bg-[#b45309] transition-colors"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Request a Free Quote
        </Link>
      </section>
    </>
  );
}
