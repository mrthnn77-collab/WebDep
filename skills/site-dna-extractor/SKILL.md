---
name: site-dna-extractor
description: |
  Web Design Reverse-Engineering & Motion DNA Extractor.
  Use this skill to inspect, reverse-engineer, and extract the complete design DNA from any high-end
  website (like MotionSites.ai, Awwwards winners, Apple, Linear, Stripe).
  Extracts exact typography, color ramps, gradient meshes, noise masks, 3D hero patterns,
  and micro-interactions, then translates them into reusable DESIGN.md contracts and production code.
---

# 🧬 Site DNA Extractor & Reverse-Engineering Engine

Transform any live website into an actionable design system, production tokens, and ready-to-run code.

## 🎯 Purpose & Methodology

When analyzing or "stealing" inspiration from world-class websites (MotionSites.ai, Awwwards, Stripe, Linear):
1. **Never guess**: Extract the exact CSS variables, font families, tracking values, and gradient angles.
2. **Deconstruct layers**:
   - **Base canvas layer**: Background color ladder, surface depth.
   - **Atmospheric layer**: Noise overlays, radial lighting, blur halos (`filter: blur(10px); mix-blend-mode: screen`).
   - **Hero focus layer**: 3D canvas (Three.js/WebGL), video background, or generative particles.
   - **Typography layer**: Display serif/sans, letter-spacing clamp, gradient text fills.
   - **Micro-detail layer**: 1px gradient borders via CSS `mask-composite: exclude`, spring buttons, badge pills.

---

## 💎 MotionSites.ai Reverse-Engineered DNA

The exact signature formulas extracted directly from `motionsites.ai`:

### 1. Signature Atmospheric Gradient Pill
```css
/* MotionSites signature iridescent pill border */
.motionsites-badge-border {
  background: radial-gradient(
    80.17% 109.2% at 44.37% 35.15%,
    rgb(208, 178, 255) 0%,
    rgb(255, 238, 216) 42.83%,
    rgb(232, 64, 13) 88.38%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  padding: 1px;
  border-radius: 9999px;
}
```

### 2. Dual-Layer Glowing Gradient Text
```css
.glow-headline {
  position: relative;
  display: inline-block;
}
.glow-headline-text {
  background-image: radial-gradient(
    80.17% 109.2% at 44.37% 35.15%,
    rgb(208, 178, 255) 0%,
    rgb(255, 238, 216) 42.83%,
    rgb(232, 64, 13) 88.38%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
/* Blurred screen halo behind the text */
.glow-headline-halo {
  position: absolute;
  inset: 0;
  background-image: inherit;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: blur(10px);
  mix-blend-mode: screen;
  opacity: 0.8;
  pointer-events: none;
}
```

### 3. Noise Texture Texture Mask
```css
.noise-texture {
  background-image: url("https://cdn.prod.website-files.com/6350808bc45bd0c902af10e6/670d473fabc467c06f44417d_am-new-noise.avif");
  background-size: 60%;
  mix-blend-mode: overlay;
  position: absolute;
  inset: 0;
  pointer-events: none;
}
```

### 4. Card Elevation & Hover Shimmer
```css
.prompt-card {
  border-radius: 24px;
  background: #0d0d0f;
  border: 1px solid #303030;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.prompt-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
}
```

---

## 🛠️ Reverse-Engineering Workflow

When the user asks to analyze or steal a design from a target URL:
1. Run `python scripts/extract.py <url>` or use web inspection to pull:
   - All Google Fonts and local font declarations
   - All CSS `:root` variables
   - All inline gradients, box-shadows, and border-radii
   - Any Three.js, Canvas, or WebGL context scripts
2. Output a structured **Design DNA Report**:
   - Palette breakdown (canvas, surfaces, accents, glows)
   - Font hierarchy with exact line-heights and tracking
   - Interactive recipe card (HTML + CSS drop-in snippet)
3. Synthesize the findings into the project's `DESIGN.md`.
