# Build recipes

## A) Single HTML file (fastest, no build step)

- One `index.html` with inline `<style>` and `<script>`. CSS custom properties from `DESIGN.md`.
- Fonts from Google Fonts or Bunny Fonts with `display=swap`; at most 2 families.
- Motion: CSS + small vanilla JS (IntersectionObserver for reveals). GSAP from a CDN only if motion level is "rich" or "scroll film".
- Images: person's own, or neutral placeholders with correct aspect ratios and `alt`.
- Good for: landing pages, portfolios, link pages, events. Preview by opening the file.

## B) React artifact / Vite app

- Use `web-artifacts-builder` (React + TypeScript + Tailwind + shadcn/ui, bundled to one HTML file).
- Good for: interactive pages, calculators, small apps, prototypes to share.

## C) Next.js + Tailwind + shadcn/ui (production)

1. `npx create-next-app@latest <name> --ts --tailwind --app --eslint`
2. `npx shadcn@latest init`, then add only needed components (`shadcn` skill).
3. Map `DESIGN.md` tokens into the Tailwind theme / CSS variables.
4. Follow `react-best-practices` (server components by default, images via `next/image`, no waterfalls) and `composition-patterns`.
5. Pages: `app/page.tsx`, `app/<route>/page.tsx`; shared `components/sections/*`.
6. Metadata: `export const metadata` per page; `app/opengraph-image` optional.
7. Deploy: `deploy-to-vercel`.

## D) Astro (content sites, blogs)

1. `npm create astro@latest`
2. Content collections for posts; Tailwind integration; islands only where interactive.
3. Static output → any host.

## Section order for a landing page

Hero (promise + CTA + proof) → social proof → problem → how it works (3 steps) → features/benefits → showcase → testimonials → pricing/offer → FAQ → final CTA → footer. Cut what the brief doesn't need.

## Responsive checklist

Mobile-first; test 390 / 768 / 1440 px; tap targets ≥ 44 px; no horizontal scroll; images `max-width: 100%`; type scales with `clamp()`.
