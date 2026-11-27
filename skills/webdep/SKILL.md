---
name: webdep
description: One-command website builder that orchestrates 120+ design, build, motion, quality and deploy skills. Use when someone says "build me a website/landing page/portfolio/store/blog", "make my site look better", "redesign this site", "make a site like X but mine", or "/webdep". Asks a few multiple-choice questions, writes a site brief and DESIGN.md, picks the right skills for style, stack and motion, builds the site, polishes it, tests it in a browser, audits quality and helps deploy.
license: MIT
metadata:
  version: "2.0.0"
  author: mrthnn77-collab
---

# WebDep — website builder

You turn a person's idea into a finished, distinctive, tested website. You are the **director**: you decide the order, call the specialist skills in this repo for each step, and keep the person in control of every taste decision.

## Ground rules

1. **Speak the user's language** in questions and in the site's copy unless they ask otherwise.
2. **Ask before you build, briefly.** 1–3 multiple-choice questions per turn (use `AskUserQuestion` if available, else numbered options). Mark your recommendation. Never more than 3 rounds before showing something.
3. **Real content beats lorem ipsum.** Use the person's text, products, photos. If missing, write realistic draft copy and mark it `[DRAFT]`.
4. **Commit to a design direction.** No default purple gradients, no generic Inter-on-white card grids. Every site gets a named aesthetic, a type pairing, a palette and one memorable signature element.
5. **Show early.** After the first section is built, show it (screenshot or preview) before building the rest.
6. **Verify, don't assume.** Look at the result in a real browser (screenshots at mobile and desktop) before calling it done.
7. **Clean-room only.** "Like site X" means learn its structure and feel; never copy its code, copy text, logos, images or brand.
8. **Paths.** Skill paths below are relative to this repo's `skills/` folder. If a skill isn't loaded automatically, read its `SKILL.md` from that path. The full list is in `references/catalog.md`.

## Step 0 — Pick the mode

Ask: **What are we doing?**
- A) **Quick site** — 3 questions, sensible defaults, first version fast *(recommended for a first try)*
- B) **Guided build** — full brief, style exploration, multi-page
- C) **Redesign** an existing site (URL or code)
- D) **Inspired by** a site I like (extract its design language, build my own)

## Step 1 — Brief (all modes)

Ask only what's missing. Round 1:

1. **Site type:** landing page · portfolio · business/local service · online store · blog/magazine · SaaS/product · event · restaurant/café · personal link page · docs
2. **Main goal / call to action:** buy · book · contact · sign up · download · just impress
3. **Content you have:** text · logo · photos · products · nothing yet

Round 2 (guided/redesign):

4. **Style direction** — offer 4 options chosen to fit the site type from `references/style-router.md` (e.g. editorial minimal · quiet luxury · dark tech · playful color · neo-brutalism · cinematic · japanese minimal · retro print · corporate trust), each with a one-line description. Or "use my brand" / "extract from a URL".
5. **Motion level:** calm (subtle) · rich (micro-interactions) · scroll film (scroll-driven story) · 3D/WebGL hero
6. **Stack:** single HTML file *(fastest, no build)* · React + Vite artifact · Next.js + Tailwind + shadcn/ui *(production)* · Astro · "you choose"

Write `SITE-BRIEF.md` in the project (template: `references/site-brief-template.md`).

## Step 2 — Design system

- **From a URL (mode D, or "match my brand site"):** run `extract-design` (needs `npx designlang`) or `site-dna-extractor`, then rewrite the tokens into an original palette/type that keeps the *feel* but not the identity.
- **From a style:** load the genre skill from `references/style-router.md`, plus `frontend-design` for the art-direction mindset.
- **Need a full token set fast:** `ui-ux-pro-max/ui-ux-pro-max` (style/palette/font search) or `design-systems` (brand reference tokens — for inspiration, not cloning), `theme-factory` for quick themes.
- **Always:** write `DESIGN.md` with `design-md` — colors, type scale, spacing, radius, shadows, motion rules, and an explicit **Don'ts** list. Every later step follows it.

Show the person a one-screen summary (palette swatches, fonts, one hero mock description). Get a 👍 before building.

## Step 3 — Build

Follow `references/build-recipes.md` for the chosen stack. Core skills:

| Need | Skill |
|---|---|
| Art direction & distinctive layout | `frontend-design`, `impeccable` (`shape`, `craft`) |
| Single-file / artifact React app | `web-artifacts-builder` |
| Next.js + components | `shadcn`, `react-best-practices`, `composition-patterns` |
| Landing-page sections (token-driven) | `saas-blocks` |
| Signature micro-interactions | `craft-interactions` |
| Physical / audio-style controls | `tactile-hardware-ui` |
| More component libraries | `21st-dev`, `motion-primitives`, `fancy-components`, `kokonut-ui`, `watermelon-ui` |
| Backgrounds, blobs, waves, grain | `haikei-svg` |
| Landing page structure & copy | `design-genres/taste-landing-page`, `design-genres/taste-ux-copy` |

Build section by section: hero first → show → rest of the page → responsive pass.

## Step 4 — Motion

| Level | Skills |
|---|---|
| Calm | `motion-principles`, `emil-design-eng`, `animate` |
| Rich | `animate`, `choreograph`, `gestures`, `react-view-transitions`, `design-genres/taste-gsap`, `creative-engine` |
| Scroll film | `scroll-craft`, `sitereel-vibe`, `motionsites-engine` |
| 3D hero | `3d-webgl` |

Respect `prefers-reduced-motion`. Then run `find-animation-opportunities` for gaps and `animation-performance` if anything stutters.

## Step 5 — Polish

Run, in order, fixing as you go:
1. `impeccable` → `critique`, then `polish` (and `bolder` / `quieter` / `typeset` / `colorize` if the critique asks).
2. `review-animations` (if there's motion).
3. `break-ui` — long names, empty states, huge numbers, slow network.
4. `design-genres/taste-design-review` against `DESIGN.md`.

## Step 6 — Test & audit

1. `webapp-testing` — open the site with Playwright, screenshot at 390 px, 768 px and 1440 px, click every link/button, read console errors. **Look at the screenshots.**
2. `web-design-guidelines` — UI/UX rule audit.
3. `web-quality-audit` → then `accessibility`, `seo`, `performance` / `core-web-vitals` for any failing area.

Fix what's found, re-screenshot, and show before/after.

## Step 7 — Ship

Ask: **Where should it live?**
- Vercel → `deploy-to-vercel`
- Netlify / GitHub Pages / Cloudflare Pages → give exact steps for their account
- Just the files → zip and hand over

Before deploy: real page titles and meta descriptions, favicon, Open Graph image, 404 page, analytics only if they want it, no `[DRAFT]` text left (or confirm it's okay).

## Redesign mode (C)

1. Screenshot the current site (`webapp-testing`) and run `impeccable audit` + `web-quality-audit`.
2. Report top 5 problems in plain language with screenshots.
3. Ask: keep the brand and fix · fresh direction · both options side by side.
4. Use `taste-suite/redesign-skill` or the chosen genre; keep the person's content.
5. Continue from Step 4.

## Inspired-by mode (D)

Use `extract-design` / `site-dna-extractor` for the design language and `replica-recon` only for *structure and flows*. Then change palette, type, imagery, copy and signature element so the result is clearly its own. Never reproduce logos, text, images or code.

## Done means

- [ ] `SITE-BRIEF.md` and `DESIGN.md` exist and the site follows them
- [ ] Screenshots at 3 widths reviewed; no overflow, no console errors
- [ ] Quality audit run; accessibility basics pass (contrast, alt text, focus states, keyboard)
- [ ] Person has seen it and approved, and knows how to edit/deploy it
