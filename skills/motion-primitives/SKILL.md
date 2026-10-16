---
name: motion-primitives
description: Polished motion components and micro-interactions by Julien Thibeaut (motion-primitives.com). Morphing dialogs, popovers, dynamic docks, sliding odometer numbers, SVG text morphing, magnetic cursor attractors, border trails, progressive blur, spotlights, and spring transition panels for React, Tailwind CSS, and Motion.
---

# Motion Primitives: Advanced Layout Morphing & Micro-Interactions

Motion Primitives (`motion-primitives.com`) by Julien Thibeaut (`@ibelick`) is a library of copy-paste React components that elevate UI with smooth, spring-physics motion, Apple-style layout morphs, and micro-interactions built on top of Tailwind CSS and Motion (Framer Motion).

## Component Catalog (33 Core Primitives)

| Component | Description | Physics & Interaction Pattern |
|:---|:---|:---|
| **`MorphingDialog`** | Card-to-modal FLIP morphing | Fluid layoutId morphing, seamless shared-element expansion, backdrop blur |
| **`MorphingPopover`** | Dynamic expandable popover/action menu | Morphing container dimensions with smooth child crossfade |
| **`SlidingNumber` & `AnimatedNumber`** | Precision odometer digit roller | Mechanical sliding digit strip with spring velocity and overshoot damping |
| **`TextMorph`** | SVG character path interpolation | Smoothly morphs letter shapes between strings using vector geometry |
| **`TextScramble` & `TextRoll`** | Cipher descramble & 3D character roll | Staggered character substitution with high-tech terminal feel |
| **`Dock`** | macOS fluid dock | Magnification curve, mouse distance scaling, spring bounce on click |
| **`ToolbarDynamic` & `ToolbarExpandable`** | Island toolbar morphs | Collapses into pill, expands to full action palette with layout spring |
| **`Magnetic`** | Physics cursor attractor | Damped spring pull towards cursor within a defined proximity threshold |
| **`BorderTrail`** | Light beam racing along borders | CSS/SVG offset-path light pulse running around cards or buttons |
| **`Spotlight`** | Radial flashlight card hover | Smooth mouse coordinate tracking with dynamic alpha illumination |
| **`Tilt`** | 3D perspective card parallax | Real-time 3D rotation based on mouse coordinates over card surface |
| **`ProgressiveBlur`** | Gradient multi-stop backdrop blur | Optical progressive blur eliminating harsh cutoff lines |
| **`TransitionPanel`** | Multi-step wizard/tab slide panel | Direction-aware sliding transitions with auto-height adjustment |
| **`Accordion` & `Disclosure`** | Spring height expanding containers | Fluid height animation with natural spring ease |
| **`InfiniteSlider` & `Carousel`** | 60fps marquee and tactile carousels | Drag, scrub, momentum, and continuous marquee motion |
| **`InView`** | Viewport trigger primitive | Trigger complex animations only when entering viewport |

---

## Code Examples

### 1. Apple-Style Morphing Dialog (`MorphingDialog`)

```tsx
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from './components/morphing-dialog';

export function ProjectCard() {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.35,
      }}
    >
      <MorphingDialogTrigger className="flex max-w-[280px] flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 p-2">
        <MorphingDialogImage
          src="/preview.jpg"
          alt="Project"
          className="h-48 w-full rounded-xl object-cover"
        />
        <div className="flex grow flex-row items-end justify-between px-2 pt-2">
          <div>
            <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50 font-medium">
              Aero Chrono
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-500 text-sm">
              Mechanical Watch
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative flex h-full max-h-[90vh] w-full max-w-[500px] flex-col overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6">
          <MorphingDialogImage
            src="/preview.jpg"
            alt="Project"
            className="h-72 w-full rounded-2xl object-cover mb-4"
          />
          <MorphingDialogTitle className="text-2xl font-bold text-zinc-900 dark:text-white">
            Aero Chrono Mechanical Craft
          </MorphingDialogTitle>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Precision mechanical chronometer with sapphire crystal casing.
          </p>
          <MorphingDialogClose className="absolute top-4 right-4 text-zinc-500" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
```

### 2. Kinetic Dynamic Island Toolbar (`ToolbarDynamic`)

```tsx
import { ToolbarDynamic } from './components/toolbar-dynamic';

export function ActionIsland() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <ToolbarDynamic />
    </div>
  );
}
```

### 3. Magnetic Hover Physics (`Magnetic`)

```tsx
import { Magnetic } from './components/magnetic';

export function MagneticCTA() {
  return (
    <Magnetic springOptions={{ bounce: 0.2 }} intensity={0.4}>
      <button className="px-6 py-3 rounded-full bg-white text-black font-semibold shadow-xl hover:shadow-2xl transition-shadow">
        Explore Craft
      </button>
    </Magnetic>
  );
}
```

---

## File Structure

- `components/`: 33 Production-ready TypeScript React components (`morphing-dialog.tsx`, `dock.tsx`, `sliding-number.tsx`, `text-morph.tsx`, `border-trail.tsx`, `toolbar-dynamic.tsx`, etc.).
