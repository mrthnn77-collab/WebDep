---
name: craft-interactions
description: Original micro-interaction components for React + Tailwind with zero animation-library dependencies — progressive blur, smooth caret input, 3D coverflow carousel, squircle, animated links, swipe card stack, edge-aware scroll fade, magnetic hover, text scramble. Use when a page needs "detail" moments that make it feel crafted, when the user asks for premium/Apple-like polish, or when WebDep's build step picks a signature interaction.
license: MIT
metadata:
  author: mrthnn77-collab
  version: "1.0.0"
---

# Craft Interactions

Small, deliberate interactions that make a site feel made by people who care. Every component here is original, typed, accessible, respects `prefers-reduced-motion`, and needs only **React 18+** (Tailwind optional — classes are used but nothing breaks without it).

## Install into a project

Copy what you need:

```
components/craft/<component>.tsx   ← from components/
lib/cn.ts                          ← from lib/ (or point imports to your shadcn `@/lib/utils`)
```

Fix the `../lib/cn` import path to match where you put `cn.ts`. Next.js App Router: add `"use client";` at the top of any file you use in a server component tree.

## The components

| File | What it does | Use it for |
|---|---|---|
| `progressive-blur.tsx` | Blur that ramps up toward one edge (stacked masked `backdrop-filter` layers) | Sticky headers over content, image captions, bottom of scroll areas |
| `smooth-caret-input.tsx` | Input whose caret glides between positions | Hero search, waitlist email, AI prompt box |
| `coverflow-carousel.tsx` | 3D perspective carousel — keys, drag, wheel, click; announces slide changes | Portfolios, product shots, album/case-study galleries |
| `squircle.tsx` | `Squircle` box + `squirclePath()` superellipse generator | App icons, avatars, cards that should feel "Apple" |
| `animated-link.tsx` | Links with `draw`, `swap` or `arrow` hover; same on keyboard focus | Nav, footers, inline links |
| `swipe-card-stack.tsx` | Drag-to-dismiss stack with spring-back; ←/→ keys | Testimonials, onboarding tips, "pick one" choices |
| `scroll-fade.tsx` | Fades scroll edges only when more content exists that way | Horizontal tag rows, sidebars, chat lists |
| `magnetic.tsx` | Element leans toward the mouse, springs back; off for touch | Primary CTA, social icons |
| `text-scramble.tsx` | Letters resolve from random glyphs; real text for screen readers | Nav labels, section titles in tech/brutalist styles |

## Restraint levels (choose before adding anything)

| Level | Site feel | Use at most |
|---|---|---|
| 1 — Functional | Stores, dashboards, docs | `animated-link` (draw), `scroll-fade`, `progressive-blur` on the header |
| 2 — Polished | SaaS, agencies, personal brands | Level 1 + `smooth-caret-input` in the hero + `magnetic` on one CTA |
| 3 — Showcase | Portfolios, launches, award-style pages | Level 2 + `coverflow-carousel` or `swipe-card-stack` as the signature + `text-scramble` on a few labels |

Rules:
- **One signature interaction per page.** Two showpieces fight each other.
- Interactions must serve content (navigate, reveal, choose), never just decorate.
- Every pointer interaction has a keyboard path (already built in — don't remove it).
- Test with reduced motion on: the page must still work and look complete.
- Pair with the page's `DESIGN.md`: use its colors, radius and easing instead of the defaults when they differ.

## Quick examples

```tsx
<header className="sticky top-0 relative">
  <ProgressiveBlur edge="top" className="absolute inset-x-0 top-0 h-20" />
  <nav className="relative z-10">…</nav>
</header>

<SmoothCaretInput placeholder="Ask anything…" className="h-12 rounded-xl border px-4 text-lg" caretClassName="bg-blue-600" />

<CoverflowCarousel items={projects.map(p => ({ id: p.slug, label: p.title, content: <img src={p.cover} alt="" className="aspect-[3/4] w-full object-cover" /> }))} />

<Magnetic><a href="/start" className="rounded-full bg-black px-6 py-3 text-white">Start free</a></Magnetic>
```
