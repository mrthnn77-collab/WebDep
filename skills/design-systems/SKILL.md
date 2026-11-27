---
name: professional-web-design
description: |
  Professional, world-class web design skill using the awesome-design-md library.
  Contains exact design tokens (colors, typography, spacing, components, animations)
  extracted from 80+ world-famous brands: Stripe, Vercel, Apple, Tesla, SpaceX,
  Nike, Spotify, Notion, Linear, Framer, Supabase, and more.
  Use this skill EVERY TIME you build a website or UI to ensure professional,
  non-AI-looking results with proper animations and premium aesthetics.
---

# Professional Web Design Skill

## 🎯 Purpose

This skill gives you access to the exact design language of 80+ world-class brands.
Use it to build websites that look like they were made by a senior design team, not an AI.

**Never build a site without consulting this skill first.**

## 📁 Available Design Systems

The `design-md/` folder contains DESIGN.md files for these brands:

| Category | Brands |
|---|---|
| **Tech Platforms** | vercel, stripe, supabase, linear.app, notion, framer, figma, cursor, raycast |
| **AI Companies** | claude, mistral.ai, elevenlabs, replicate, cohere, x.ai, minimax, ollama, opencode.ai |
| **Consumer Tech** | apple, spotify, nike, airbnb, pinterest, slack, zoom |
| **Automotive** | tesla, bmw, ferrari, lamborghini, bugatti, renault |
| **Fintech** | revolut, coinbase, binance, kraken, mastercard, wise, mercury |
| **Enterprise** | ibm, oracle, sap, mongodb, hashicorp, nvidia |
| **Media** | theverge, wired, aljazeera |
| **Retro/Gaming** | nintendo-2001, dell-1996, playstation |

## 🔧 How to Use Design Tokens

Each `DESIGN.md` file contains YAML frontmatter with:
- `colors` — exact hex values for primary, text, surface, accent colors
- `typography` — font families, sizes, weights, line heights, letter spacing
- `rounded` — border radius scale
- `spacing` — spacing tokens
- `components` — exact CSS properties for buttons, cards, nav, footer, etc.

### Step 1: Choose a design style
Ask the user which vibe they want, or pick the closest brand match:
- **Minimal/developer**: Vercel, Linear, Notion, Supabase
- **Premium/luxury**: Apple, Tesla, Ferrari
- **Startup/colorful**: Stripe, Framer, Raycast
- **Finance**: Revolut, Mercury, Stripe
- **AI/tech**: Claude, Mistral, ElevenLabs

### Step 2: Read the DESIGN.md
Always read the relevant DESIGN.md before generating any code:
```
design-md/{brand}/DESIGN.md   (relative to this skill folder)
```

### Step 3: Apply tokens faithfully
- Use the EXACT hex colors from the tokens
- Use the EXACT font sizes, weights, and letter-spacing values
- Follow the component specs (padding, border-radius, shadow)

## 🎨 Design Principles from World-Class Brands

### Typography (Critical)
- **Negative letter-spacing on headlines** — Vercel uses `-2.4px` at 48px, Stripe uses `-1.4px` at 56px
- **Thin weights for display** — Stripe uses weight 300 for all display text
- **Sentence case, never ALL CAPS** — Vercel ends headlines with a period (e.g., "Build and deploy.")
- **Font hierarchy matters** — Use display fonts for headlines, mono for code/technical content

### Color System
- **One primary CTA color** — Never more than one filled button color per section
- **Surface hierarchy** — canvas → canvas-soft → canvas-soft-2 (3-step gray ladder)
- **Dark mode flip** — Use `primary` (ink/black) for polarity-flipped dark sections

### Shadows & Elevation (Never use generic box-shadow)
- **Stacked shadows** — Layer multiple small offsets: `0px 1px 1px rgba(0,0,0,0.03), 0px 2px 2px rgba(0,0,0,0.06)`
- **Inset hairline** — Always add `0 0 0 1px rgba(0,0,0,0.08)` inset ring on cards
- **Never single heavy drop shadows** — They look amateur

### Animations & Interactions
```css
/* Standard entrance animation */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Vercel-style card hover */
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 16px -4px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.08);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Stripe-style button press */
.btn:active {
  transform: scale(0.97);
  transition: transform 0.1s ease;
}

/* Smooth scroll behavior */
html { scroll-behavior: smooth; }

/* Premium transition default */
* { transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease; }
```

### Gradient Mesh (Signature of premium brands)
Stripe and Vercel both use organic gradient meshes:
```css
/* Stripe-inspired mesh hero */
.hero-mesh {
  background:
    radial-gradient(ellipse 80% 60% at 20% 40%, rgba(83,58,253,0.15) 0%, transparent 60%),
    radial-gradient(ellipse 60% 80% at 80% 20%, rgba(234,34,97,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 100% 100% at 50% 80%, rgba(249,107,238,0.08) 0%, transparent 70%),
    #ffffff;
}

/* Vercel-inspired mesh */
.hero-mesh-vercel {
  background:
    radial-gradient(ellipse 80% 60% at 30% 50%, rgba(0,124,240,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 60% 80% at 80% 30%, rgba(121,40,202,0.10) 0%, transparent 60%),
    radial-gradient(ellipse 100% 100% at 70% 80%, rgba(255,0,128,0.08) 0%, transparent 70%),
    #fafafa;
}
```

## 🚫 Anti-Patterns (AI-Looking Sites to Avoid)

1. **Generic blue** (`#3b82f6`) as primary — Use brand-specific colors
2. **Single heavy drop-shadow** — Use stacked small shadows
3. **Rounded corners everywhere at same radius** — Use a proper radius scale
4. **Default font-weight** — Headlines should be 300-600, not 400
5. **Zero letter-spacing on large text** — Always use negative tracking on display sizes
6. **Uniform section padding** — Use 48px on mobile, 96-192px on marketing pages
7. **Flat backgrounds** — Use surface hierarchy (canvas/canvas-soft/canvas-soft-2)
8. **Instant transitions** — Use `cubic-bezier(0.4, 0, 0.2, 1)` easing
9. **All-caps headers** — Sentence case only (except mono technical labels)
10. **No whitespace** — Generous padding signals premium

## 🏗️ HTML/CSS Template Structure

```html
<!-- Base structure for a premium marketing site -->
<!DOCTYPE html>
<html lang="tr">
<head>
  <!-- Google Fonts: Inter (Geist substitute), JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
  <style>
    :root {
      /* Paste brand tokens here */
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: var(--canvas-soft);
      color: var(--ink);
    }
  </style>
</head>
<body>
  <nav><!-- sticky nav --></nav>
  <main>
    <section class="hero"><!-- mesh gradient hero --></section>
    <section class="features"><!-- 3-up feature cards --></section>
    <section class="showcase dark-band"><!-- polarity-flipped dark section --></section>
    <section class="pricing"><!-- pricing cards --></section>
    <section class="cta"><!-- final CTA band --></section>
  </main>
  <footer><!-- 4-column footer --></footer>
</body>
</html>
```

## 📋 Checklist Before Generating Any Site

- [ ] Read relevant DESIGN.md from design-md folder
- [ ] Extract color tokens → CSS custom properties
- [ ] Extract typography tokens → CSS font rules
- [ ] Use negative letter-spacing on display text
- [ ] Use stacked shadows (not single shadow)
- [ ] Add entrance animations (fadeInUp with Intersection Observer)
- [ ] Add hover transitions (cubic-bezier easing)
- [ ] Use gradient mesh on hero section
- [ ] Surface hierarchy: canvas-soft page bg, white cards
- [ ] One primary CTA color per section
- [ ] Inter or specified font from Google Fonts
- [ ] Responsive: mobile-first, breakpoints at 600/960/1200px
- [ ] Dark polarity-flip section for visual rhythm

## 🌐 Additional Resources

When asked about specific design patterns, also check:
- Awwwards.com — Award-winning web design
- Dribbble.com — UI inspiration
- Mobbin.com — Real app screenshots
- godly.website — Premium web design gallery
