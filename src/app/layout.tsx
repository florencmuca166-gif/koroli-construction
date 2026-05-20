import type { Metadata } from "next";
import { Montserrat, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Koroli Construction",
  url: "https://koroliconstruction.ca",
  telephone: "+1-416-000-0000",
  image: "https://koroliconstruction.ca/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6532,
    longitude: -79.3832,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://koroliconstruction.ca"),
  title: {
    default: "Koroli Construction | Toronto General Contractor",
    template: "%s | Koroli Construction",
  },
  description:
    "Koroli Construction — Toronto's trusted general contractor for residential & commercial projects. Licensed, insured, WSIB certified. Get a free quote today.",
  keywords: [
    "Toronto construction company",
    "general contractor Toronto",
    "commercial construction Toronto",
    "residential construction Toronto",
    "custom home builder Toronto",
    "home renovation contractor Toronto",
    "licensed general contractor GTA",
  ],
  openGraph: {
    siteName: "Koroli Construction",
    locale: "en_CA",
    type: "website",
    url: "https://koroliconstruction.ca",
    title: "Koroli Construction | Toronto General Contractor",
    description:
      "Toronto's trusted general contractor for residential & commercial projects. Licensed, insured, WSIB certified.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Koroli Construction — Toronto General Contractor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koroli Construction | Toronto General Contractor",
    description:
      "Toronto's trusted general contractor for residential & commercial projects.",
  },
  alternates: {
    canonical: "https://koroliconstruction.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${montserrat.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
