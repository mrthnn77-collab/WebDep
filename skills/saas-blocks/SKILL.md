---
name: saas-blocks
description: Original, token-driven landing-page sections for React + Tailwind — navbar, hero, logo marquee, bento features, count-up stats, testimonial wall, monthly/yearly pricing, FAQ with SEO schema, CTA band and footer. Every block reads one set of CSS variables, so a single DESIGN.md restyles the whole page. Use to assemble SaaS, product, startup, app or agency landing pages fast, or when WebDep's build step needs ready sections.
license: MIT
metadata:
  author: mrthnn77-collab
  version: "1.0.0"
---

# SaaS Blocks

Ten production sections that snap together into a complete landing page. Original code, React 18+ only (no animation libraries), accessible, SEO-aware, responsive, reduced-motion safe.

## How theming works

All blocks read **only** these variables from `lib/tokens.css`:

`--sb-bg` `--sb-surface` `--sb-fg` `--sb-muted` `--sb-border` `--sb-accent` `--sb-accent-fg` `--sb-radius` `--sb-font-display` `--sb-font-body` `--sb-max` `--sb-ease`

So the workflow is: write `DESIGN.md` (skill `design-md`) → copy its colors, fonts and radius into `:root` in `tokens.css` → every block matches. `[data-theme="dark"]` on `<html>` switches to the dark set.

**Never ship the default tokens.** They're a neutral starting point; the chosen genre/brand must replace them, or every site looks the same.

## Blocks

| File | Section | Notes |
|---|---|---|
| `blocks/navbar.tsx` | Sticky translucent nav | Border appears on scroll; accessible mobile menu |
| `blocks/hero.tsx` | Hero | Eyebrow, headline, subtitle, 1–2 CTAs, proof line, product media; center or left |
| `blocks/logo-marquee.tsx` | Customer logos | Infinite, edge-faded, pauses on hover |
| `blocks/bento-features.tsx` | Features | 6-col bento with `sm / md / lg / wide / tall` tiles |
| `blocks/stats.tsx` | Numbers | Count-up on scroll; real numbers only |
| `blocks/testimonials.tsx` | Social proof | Masonry wall, first quote featured |
| `blocks/pricing.tsx` | Pricing | Monthly/yearly radio toggle, featured plan |
| `blocks/faq.tsx` | FAQ | Native `<details>`, emits `FAQPage` JSON-LD |
| `blocks/cta-band.tsx` | Final CTA | Inverted accent band |
| `blocks/footer.tsx` | Footer | Brand, columns, socials, legal |
| `lib/use-reveal.ts` | Helper | Scroll reveal for `.sb-reveal` elements, staggered |

## Install

1. Copy `blocks/` and `lib/` into e.g. `components/sections/`.
2. Import `lib/tokens.css` once (Next.js: in `app/layout.tsx`; Vite: in `main.tsx`).
3. Load the two fonts named in the tokens (or change them).
4. Next.js App Router: add `"use client";` to `navbar`, `hero`, `bento-features`, `stats`, `testimonials`, `pricing` (they use hooks).

## Page recipe

```tsx
<Navbar brand="Acme" links={[{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }]} cta={{ label: "Start free", href: "/signup" }} />
<main>
  <Hero eyebrow="New · Weekly reports" title={<>Know your numbers<br />before Monday.</>} subtitle="Acme turns your sales data into a one-page brief every Friday." primary={{ label: "Start free", href: "/signup" }} secondary={{ label: "See a sample", href: "#demo" }} proof="No credit card · Cancel anytime" media={<img src="/product.png" alt="Acme weekly report" />} />
  <LogoMarquee logos={customerLogos} />
  <BentoFeatures eyebrow="Features" title="Everything you check on Monday, done on Friday." items={features} />
  <Stats stats={[{ value: 12000, suffix: "+", label: "Reports sent" }, { value: 4.9, decimals: 1, label: "Average rating" }]} />
  <Testimonials items={quotes} />
  <Pricing plans={plans} yearlyNote="2 months free" />
  <Faq items={faqs} />
  <CtaBand title="Your first report is free." primary={{ label: "Start free", href: "/signup" }} />
</main>
<Footer brand="Acme" columns={footerColumns} legal="© 2026 Acme Inc." />
```

## Rules

- **Copy before layout:** write the real headline, subtitle and CTA first (`design-genres/taste-ux-copy`). One primary action, repeated in hero, pricing and CTA band.
- **Cut what the brief doesn't need.** A 5-section page that's sharp beats 10 generic ones.
- **Proof must be real:** logos, numbers and quotes only from the client, with permission. No invented testimonials or stats.
- **Give it a signature:** pair the blocks with one element from `craft-interactions`, `scroll-craft` or the chosen genre so the page isn't a template.
- After assembling, run WebDep's polish and test steps (`impeccable`, `webapp-testing`, `web-quality-audit`).
