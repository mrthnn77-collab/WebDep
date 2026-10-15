---
name: fancy-components
description: Physics-based micro-interactions, spring gravity, magnetic cursor attractors, elastic lines, kinetic text scramblers, and momentum dragging for React and Motion. Use when adding tactile physical feedback, gravity, collision bodies, magnetic cursor snapping, elastic springs, and mechanical rolling digits to web apps.
---

# Fancy Components: Physics-Driven Micro-Interactions & Kinetic Mechanics

Fancy Components (`fancycomponents.dev`) by Daniel Petho is a library of physics-driven animations, tactile micro-interactions, and kinetic UI built with React, Tailwind CSS, and Framer Motion / Matter.js.

## Core Physics & Kinetic Features

| Category | Component | Physics Model |
| :--- | :--- | :--- |
| **Physics** | `Gravity` | Matter.js 2D rigid body physics, collision boundaries, bounce & friction |
| **Physics** | `CursorAttractor` | Magnetic cursor pull, inverse-square force fields, kinetic snap |
| **Physics** | `ElasticLine` | Pluckable guitar-string vector line with damped spring harmonic oscillation |
| **Mechanics** | `BasicNumberTicker` | Mechanical odometer / tumbler rolling digit wheel with momentum |
| **Mechanics** | `ScrambleHover` / `ScrambleIn` | Cipher-style mechanical character descrambler with variable frequency |
| **Mechanics** | `Letter3DSwap` | 3D mechanical split-flap display letter rotations |
| **Blocks** | `Float` & `DragElements` | Continuous momentum drag, zero-g floating drift, throw velocity |
| **Blocks** | `StackingCards` | Physical card friction stack with scroll-driven depth peeling |

---

## Code Examples

### 1. 2D Rigid Body Gravity (`Gravity`)

```tsx
import { Gravity, MatterBody } from './physics/gravity';

export function PhysicsSandbox() {
  return (
    <div className="w-full h-96 relative bg-zinc-950 overflow-hidden border border-zinc-800 rounded-2xl">
      <Gravity gravity={{ x: 0, y: 1 }}>
        <MatterBody x={100} y={50} isDraggable>
          <div className="p-4 bg-amber-500 text-black font-bold rounded-lg shadow-lg cursor-grab">
            METALLIC BLOCK
          </div>
        </MatterBody>
        <MatterBody x={250} y={20} isDraggable>
          <div className="p-4 bg-blue-500 text-white font-bold rounded-full shadow-lg cursor-grab">
            PHYSICAL SPHERE
          </div>
        </MatterBody>
      </Gravity>
    </div>
  );
}
```

### 2. Mechanical Odometer Rolling Digits (`BasicNumberTicker`)

```tsx
import NumberTicker from './text/basic-number-ticker';

export function PrecisionTelemetry() {
  return (
    <div className="font-mono text-4xl font-bold tracking-tight text-white flex items-center gap-1">
      <span>RPM:</span>
      <NumberTicker value={8450} decimalPlaces={0} />
    </div>
  );
}
```

### 3. Elastic Line Harmonic Spring (`ElasticLine`)

```tsx
import ElasticLine from './physics/elastic-line';

export function PluckableDivider() {
  return (
    <div className="py-8">
      <ElasticLine
        release={true}
        stroke="rgba(255, 255, 255, 0.4)"
        strokeWidth={1.5}
      />
    </div>
  );
}
```

---

## File Structure

- `physics/`: Rigid body gravity, cursor attractors, elastic string oscillators
- `text/`: Mechanical number tickers, letter 3D swaps, hover scramblers, vertical cut reveals
- `blocks/`: Stacking cards, floating elements, momentum drag, SVG path element followers
- `hooks/`: Mouse position ref tracking, dimensions calculation, elastic line events
