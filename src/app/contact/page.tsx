import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Koroli Construction for a free quote on your Toronto residential or commercial construction project. We respond within one business day.",
  alternates: { canonical: "https://koroliconstruction.ca/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1C1C1E] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Get In Touch
          </p>
          <h1
            className="text-4xl sm:text-6xl font-black text-white"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2
                className="text-2xl font-black text-[#1C1C1E] mb-6"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Let&apos;s Talk About Your Project
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-10">
                Whether you have a detailed brief or just an idea, our team is
                ready to help. We offer free initial consultations and estimates
                for all projects in Toronto and the GTA.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "📍",
                    label: "Address",
                    value: "Toronto, Ontario, Canada",
                    href: undefined,
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "(416) 000-0000",
                    href: "tel:+14160000000",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "info@koroliconstruction.ca",
                    href: "mailto:info@koroliconstruction.ca",
                  },
                  {
                    icon: "🕐",
                    label: "Office Hours",
                    value: "Mon – Fri: 8:00 AM – 6:00 PM",
                    href: undefined,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C1C1E] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C9A84C]">{item.icon}</span>
                    </div>
                    <div>
                      <p
                        className="font-bold text-[#1C1C1E] text-sm"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#D97706] text-sm mt-1 hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#6B7280] text-sm mt-1">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
