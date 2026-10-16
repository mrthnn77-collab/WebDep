---
name: haikei-svg
description: Generative vector geometry, organic SVG blobs, layered wave dividers, procedural grain filters, and blurry gradient mesh backgrounds inspired by Haikei (haikei.app) and Blobmaker. Use when designing procedural organic backgrounds, fluid SVG section dividers, mathematical vector shapes, and noise textures.
---

# Haikei SVG: Procedural Vector Geometry & Organic Wave Generators

Haikei SVG is a generative mathematical toolkit inspired by `haikei.app` and `blobmaker.app`. It eliminates low-resolution pixelated bitmaps by programmatically synthesizing **infinite-resolution, vector-crisp SVG shapes, cubic Bézier organic blobs, harmonic wave dividers, and fractal grain filters**.

## Mathematical Foundations

1. **Polar Coordinate Vertex Distribution (`generators/blob.ts`):**
   - Vertices distributed evenly at angular steps $\theta_i = \frac{2\pi i}{N}$.
   - Radii perturbed with controlled pseudorandom noise: $r_i = R + \Delta r_i$.
   - Converted to Cartesian $(x_i, y_i) = (cx + r_i \cos\theta_i, cy + r_i \sin\theta_i)$.
   - Cubic Bézier tangents calculated using Catmull-Rom interpolation for smooth $C^1$ continuity around the closed loop.
2. **Harmonic Layered Waves (`generators/waves.ts`):**
   - Superposition of multiple sine and cosine waves: $y(x) = y_0 + A \cdot [\sin(\omega_1 x + \phi) + \cos(\omega_2 x)]$.
   - Closed bottom polygon paths with progressive alpha blending and gradients.
3. **SVG Turbulence Grain Masks (`generators/grain.ts`):**
   - Hardware-accelerated SVG `<feTurbulence>` fractal noise combined with `<feColorMatrix>` to create tactile editorial film grain.

---

## Generator API & Usage

### 1. Generating a Random Organic Blob in Code

```typescript
import { generateBlobPath, generateBlobSvg } from './generators/blob';

// Get raw SVG path string
const pathD = generateBlobPath({
  size: 500,
  complexity: 6, // 3 to 12 control points
  contrast: 0.45, // 0.1 to 0.9 irregularity
  seed: 1337,
});

// Or get full standalone SVG string
const svgXml = generateBlobSvg({
  size: 500,
  complexity: 7,
  contrast: 0.5,
  fill: '#ec4899',
});
```

### 2. Generating Multi-Layered Wave Dividers

```typescript
import { generateLayeredWaves } from './generators/waves';

const layers = generateLayeredWaves({
  width: 1440,
  height: 400,
  layers: 4,
  amplitude: 90,
  frequency: 1.8,
  seed: 99,
});

// Returns array of { path: string, fillOpacity: number }
```

### 3. Using the React Component (`HaikeiBackground`)

```tsx
import { HaikeiBackground } from './components/HaikeiBackground';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-zinc-950 flex flex-col justify-between">
      <div className="pt-24 px-8 text-center">
        <h1 className="text-6xl font-bold text-white tracking-tight">
          Tactile Mechanical Elegance
        </h1>
      </div>

      {/* Floating Procedural Blob */}
      <HaikeiBackground
        variant="blob"
        primaryColor="#6366f1"
        secondaryColor="#ec4899"
        className="h-96"
        seed={42}
      />

      {/* Stacked Wave Footer Divider */}
      <HaikeiBackground
        variant="waves"
        primaryColor="#1e1b4b"
        secondaryColor="#312e81"
        seed={101}
      />
    </section>
  );
}
```

---

## File Structure

- `generators/`: Pure TypeScript vector geometry engines (`blob.ts`, `waves.ts`, `grain.ts`)
- `components/`: `HaikeiBackground.tsx` ready-to-drop React component.
