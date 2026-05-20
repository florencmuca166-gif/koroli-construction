import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Past Projects",
  description:
    "Browse Koroli Construction's portfolio of completed residential and commercial projects across Toronto and the GTA.",
  alternates: { canonical: "https://koroliconstruction.ca/projects" },
};

const projects = [
  {
    title: "King Street West Condominiums",
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
    title: "Rosedale Heritage Renovation",
    category: "Renovation",
    location: "Rosedale, Toronto",
    year: "2024",
    color: "linear-gradient(135deg, #2d1a0a 0%, #5c3a1a 100%)",
  },
  {
    title: "Yorkville Luxury Penthouse",
    category: "Residential",
    location: "Yorkville, Toronto",
    year: "2023",
    color: "linear-gradient(135deg, #1a1a2e 0%, #C9A84C33 100%)",
  },
  {
    title: "North York Medical Centre",
    category: "Commercial",
    location: "North York, Toronto",
    year: "2022",
    color: "linear-gradient(135deg, #0d2418 0%, #1a4a30 100%)",
  },
  {
    title: "Leslieville Loft Conversion",
    category: "Renovation",
    location: "Leslieville, Toronto",
    year: "2023",
    color: "linear-gradient(135deg, #2a1a2e 0%, #4a2a5e 100%)",
  },
  {
    title: "Mississauga Corporate Campus",
    category: "Commercial",
    location: "Mississauga, ON",
    year: "2022",
    color: "linear-gradient(135deg, #14181a 0%, #2a3a42 100%)",
  },
  {
    title: "Forest Hill Custom Home",
    category: "Residential",
    location: "Forest Hill, Toronto",
    year: "2024",
    color: "linear-gradient(135deg, #1C1C1E 0%, #C9A84C44 100%)",
  },
  {
    title: "Distillery District Retail",
    category: "Commercial",
    location: "Distillery District, Toronto",
    year: "2023",
    color: "linear-gradient(135deg, #1a0d0a 0%, #3a1a10 100%)",
  },
];

const categories = ["All", "Residential", "Commercial", "Renovation"];

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1C1C1E] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Our Portfolio
          </p>
          <h1
            className="text-4xl sm:text-6xl font-black text-white"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Past Projects
          </h1>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
            Over 200 completed projects across Toronto and the GTA.
          </p>
        </div>
      </section>

      {/* Filter tabs (visual only — filter logic can be added later) */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-4">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`text-sm font-bold tracking-wide whitespace-nowrap pb-1 transition-colors border-b-2 ${
                  i === 0
                    ? "border-[#D97706] text-[#D97706]"
                    : "border-transparent text-[#6B7280] hover:text-[#1C1C1E]"
                }`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1E] py-16 text-center px-4">
        <h2
          className="text-3xl font-black text-white mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Your Project Could Be Next
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 rounded font-bold text-sm tracking-wide bg-[#D97706] text-white hover:bg-[#b45309] transition-colors"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Start a Conversation
        </Link>
      </section>
    </>
  );
}
