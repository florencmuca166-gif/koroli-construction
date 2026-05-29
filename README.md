# Koroli Construction — Marketing Website

A professional, SEO-optimised marketing site for a Toronto-based general contractor. Built to rank locally and convert visitors into leads.

## Live Pages

| Route | Content |
|---|---|
| `/` | Hero, services overview, trust indicators |
| `/services` | Full service catalogue with project cards |
| `/projects` | Portfolio gallery |
| `/about` | Company story and team |
| `/contact` | Enquiry form with client-side validation |

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Forms | React Hook Form |
| UI | Headless UI |
| Fonts | Montserrat · Inter · Playfair Display |

## SEO Features

- Per-page `metadata` exports with Open Graph tags
- JSON-LD `GeneralContractor` schema injected in root layout
- Canonical URL: `https://koroliconstruction.ca`
- Semantic HTML throughout

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home
│   ├── about/
│   ├── contact/
│   ├── projects/
│   └── services/
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── HeroSection.tsx
    ├── AnimatedTrustBadges.tsx
    ├── ProjectCard.tsx
    ├── ServiceCard.tsx
    └── SectionHeader.tsx
```

## Getting Started

```bash
git clone https://github.com/florencmuca166-gif/koroli-construction
cd koroli-construction
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What This Demonstrates

- Next.js App Router with full TypeScript
- Local SEO implementation (structured data, metadata API)
- Scroll-triggered animations with Framer Motion
- Accessible UI components via Headless UI
- Clean multi-page marketing site architecture

## Author

**Florenc Muca** — Full-Stack Developer
- GitHub: [@florencmuca166-gif](https://github.com/florencmuca166-gif)
- Email: florencmuca166@gmail.com
