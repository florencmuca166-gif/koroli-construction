interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="text-4xl mb-5">{icon}</div>
      <h3
        className="text-lg font-bold text-[#1C1C1E] mb-3 group-hover:text-[#D97706] transition-colors"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {title}
      </h3>
      <p className="text-[#6B7280] text-sm leading-relaxed">{description}</p>
    </div>
  );
}
