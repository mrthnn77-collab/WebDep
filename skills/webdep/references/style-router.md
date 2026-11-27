# Style router

Pick 4 options that fit the site type, then load the chosen genre. Genre packs say "stack on design-taste": always load `design-genres/design-taste` together with the genre.

## Genres (load `design-genres/<name>/SKILL.md` + `design-genres/design-taste/SKILL.md`)

| Genre | Looks like | Best for |
|---|---|---|
| `editorial-minimal` | Warm paper, ink-black type, one vermillion accent, big serif, hairline grids | Studios, writers, consultants, calm premium brands |
| `quiet-luxury` | Ivory and deep ink, metal/oxblood accent, serif with italics, lots of space | Fashion, premium products, private services, personal brands |
| `dark-tech` | Near-black, one restrained accent, hairline borders, compact type | Developer tools, AI/SaaS, technical products |
| `corporate-trust` | White, one deep blue, system type, precise tables | Finance, health, B2B, government |
| `playful-color` | Giant type, thick outlines, flat bright colors, chunky buttons | D2C brands, consumer apps, events, education |
| `neo-brutalism` | Bright paper, 2.5 px ink borders, hard offset shadows, stickers | Agencies, consumer apps, bold personalities |
| `brutalist-industrial` | Swiss grid + terminal, extreme type contrast, one signal color | Data platforms, dev tools, portfolios |
| `cinematic-motion` | Paper canvas, ink type, electric blue, scroll-driven scenes | Portfolios, launches, agencies (needs `design-genres/taste-gsap`) |
| `japanese-minimal` | Rice paper, sumi ink, seal red, mincho serif, negative space | Wellness, tea/food, studios, personal sites |
| `retro-print` | Risograph inks, halftone, misregistration, poster type | Zines, events, food/drink, music |

## Other style sources

| Want | Load |
|---|---|
| Soft, friendly, rounded | `taste-suite/soft-skill` |
| Ultra-minimal | `taste-suite/minimalist-skill` |
| Raw brutalist | `taste-suite/brutalist-skill` |
| A brand kit first | `taste-suite/brandkit`, `design-genres/taste-brand-identity` |
| Two-brand remix ("Stripe × A24") or aesthetic families | `claude-design` |
| Search 60+ styles, palettes and font pairings by keyword | `ui-ux-pro-max/ui-ux-pro-max` |
| Tokens inspired by a known brand (inspiration only) | `design-systems` |
| Quick theme presets | `theme-factory` |
| Match a reference URL's feel | `extract-design`, `site-dna-extractor` |
| From a screenshot or mockup | `taste-suite/image-to-code-skill` |

## Site type → suggested 4 options

| Site type | Offer |
|---|---|
| Landing page / SaaS | dark-tech · editorial-minimal · playful-color · cinematic-motion |
| Portfolio | editorial-minimal · brutalist-industrial · cinematic-motion · japanese-minimal |
| Business / local service | corporate-trust · editorial-minimal · soft · playful-color |
| Online store | quiet-luxury · playful-color · editorial-minimal · neo-brutalism |
| Blog / magazine | editorial-minimal · retro-print · japanese-minimal · dark-tech |
| Restaurant / café | japanese-minimal · retro-print · quiet-luxury · playful-color |
| Event | retro-print · neo-brutalism · cinematic-motion · playful-color |
| Personal link page | soft · neo-brutalism · japanese-minimal · dark-tech |
