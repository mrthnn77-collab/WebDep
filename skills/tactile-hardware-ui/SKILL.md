---
name: tactile-hardware-ui
description: Original skeuomorphic "studio hardware" controls for React — machined rotary knobs with detents, mixing-desk faders, analog VU needle meters with real ballistics, segmented LED meters with peak hold, rocker switches and brushed-metal rack panels, all sharing one light source. Use for audio/music apps, synth or DAW-style tools, IoT dashboards, retro-tech landing pages, or any brief asking for tactile, physical, skeuomorphic UI.
license: MIT
metadata:
  author: mrthnn77-collab
  version: "1.0.0"
---

# Tactile Hardware UI

Controls that look and feel like real equipment, but behave like proper web controls: keyboard-operable, screen-reader labelled (`role="slider" | "switch" | "meter"`), touch-friendly and motion-safe. Only dependency: **React 18+**. Tailwind classes are used for layout; materials are plain CSS.

## Pieces

| File | What it is |
|---|---|
| `components/rack-panel.tsx` | `RackPanel` faceplate (aluminium or black) with screws; injects materials and the light source. Also exports `HardwareStyles`. |
| `hooks/use-light.ts` | `useLight({ mode: "fixed" \| "pointer", angle })` → CSS vars so every control shades from the same light |
| `lib/materials.ts` | Brushed metal, conic machined metal, screws, labels, focus ring |
| `components/knob.tsx` | Rotary knob — 270° sweep, optional detents, drag/wheel/keys, Shift for fine control |
| `components/fader.tsx` | Linear fader (vertical/horizontal), ribbed cap, click-to-jump |
| `components/vu-meter.tsx` | Analog needle meter with spring ballistics and red zone |
| `components/led-meter.tsx` | Green→amber→red segmented meter with peak hold |
| `components/rocker-switch.tsx` | I/O rocker with pivot animation and LED |

## Install

Copy `components/`, `hooks/`, `lib/` into e.g. `components/hardware/` and keep the relative imports. Next.js: add `"use client";` to the components.

## Example

```tsx
const [gain, setGain] = useState(40);
const [cutoff, setCutoff] = useState(8);
const [on, setOn] = useState(true);

<RackPanel title="Channel 1" light={{ mode: "pointer" }} className="flex items-end gap-8">
  <Knob label="Gain" value={gain} onChange={setGain} format={(v) => `${Math.round(v)} dB`} />
  <Knob label="Cutoff" value={cutoff} onChange={setCutoff} min={0} max={10} step={1} detents />
  <Fader label="Volume" value={gain} onChange={setGain} />
  <LedMeter level={gain / 100} />
  <VuMeter level={gain / 100} />
  <RockerSwitch label="Power" checked={on} onCheckedChange={setOn} />
</RackPanel>
```

Feed meters real audio with the Web Audio API: an `AnalyserNode`, compute RMS each frame, pass it as `level`.

## Design rules

- **One light source per page.** Use a single `RackPanel` (or `useLight`) per visual group so highlights agree.
- **Real proportions.** Knobs 48–96 px, faders 140–240 px long, labels small, uppercase, monospaced.
- **Color is signal, not decoration:** orange = pointer/focus, green/amber/red = level, red LED = on/armed.
- **Don't overdo it on content pages.** Hardware UI is a signature for audio/tool products or a single hero moment on a landing page — not for forms and body text.
- **Accessibility stays on:** never remove `aria-*`, keyboard handlers or the focus ring; keep text contrast ≥ 4.5:1 on panels.
- Pair with `design-genres/brutalist-industrial` or `dark-tech` for surrounding pages.
