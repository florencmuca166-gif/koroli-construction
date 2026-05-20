interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  year: string;
  color: string;
}

export default function ProjectCard({ title, category, location, year, color }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
      {/* Image placeholder — replace with next/image when real assets are ready */}
      <div
        className="h-56 w-full flex items-end p-6 relative"
        style={{ background: color }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10">
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
      <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-100">
        <span className="text-sm text-[#6B7280]">{location}</span>
        <span className="text-sm font-semibold text-[#1C1C1E]">{year}</span>
      </div>
    </div>
  );
}
