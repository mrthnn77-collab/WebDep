---
name: kokonut-ui
description: Tactile hardware micro-interactions, mechanical buttons, pull cords, tearable tickets, detent dials, and physical controls for React, Tailwind CSS, and Motion. Use when adding physical machine interactions (pull cords, tactile switches, detent dials, tear buttons, hold-to-confirm latches) to modern web applications.
---

# Kokonut UI: Tactile Hardware & Mechanical Micro-Interactions

Kokonut UI (`kokonutui.com`) is a collection of physical, mechanical, and tactile micro-components built for React, Tailwind CSS, and Framer Motion / Motion. It transforms passive clicks into tangible physical actions that mimic hardware, cords, mechanical levers, and tactile paper.

## Core Mechanical Components

| Component | Physical Behavior | Real-world Inspiration |
| :--- | :--- | :--- |
| **`PullCord`** | Draggable dangling cord with spring-damper physics, tension stretch, and snap-back release | Ceiling fan pull chains, vintage desk lamp switch cords |
| **`SwitchButton`** | Tactile toggle lever with physical rocker travel, click resistance, and status LED | Heavy-duty electrical toggle switches |
| **`DetentDial`** | Rotary knob with magnetic/mechanical detent steps and ratchet resistance | Precision audio potentiometers, microscope focus dials |
| **`TearButton`** | Perforated ticket with drag-to-tear physics, rip angle, and detachment confetti | Perforated boarding passes, raffle tickets |
| **`HoldButton`** | Press-and-hold spring compression with mechanical latch confirmation | Industrial safety triggers, missile arming latches |
| **`ReceiptPrinter`** | Animated paper feed mechanism with ink head simulation and tear line | Thermal receipt printers, POS hardware |
| **`WheelPicker`** | Rolling drum tumbler with 3D cylindrical perspective and friction snap | Mechanical slot machine tumblers, date dials |
| **`LiquidSlider` & `LiquidGauge`** | Viscous fluid dynamics reacting to drag acceleration | Mercury thermometers, hydraulic level indicators |
| **`CardFlip` & `CardStack`** | Tactile card dealing, magnetic snap-to-stack, and 3D card tilt | Physical card decks, tactile bento layouts |
| **`PluckedText` & `CradleText`** | Kinetic typography vibrating like plucked guitar strings or Newton's cradle | Physical strings, elastic bands |

---

## Usage Examples

### 1. Mechanical Pull Cord (`PullCord`)

```tsx
import PullCord from './components/pull-cord';

export function NightModeSwitch() {
  const handleToggle = (isActive: boolean) => {
    console.log("Light state:", isActive);
    document.documentElement.classList.toggle('dark', isActive);
  };

  return (
    <div className="relative h-64 flex justify-center">
      <PullCord onToggle={handleToggle} />
    </div>
  );
}
```

### 2. Tactile Toggle Switch (`SwitchButton`)

```tsx
import SwitchButton from './components/switch-button';

export function HardwareSettings() {
  return (
    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-between">
      <span className="text-zinc-200 font-mono text-sm">ANALOG ENGINE</span>
      <SwitchButton
        onCheckedChange={(checked) => console.log('State:', checked)}
      />
    </div>
  );
}
```

### 3. Hold-to-Confirm Mechanical Latch (`HoldButton`)

```tsx
import HoldButton from './components/hold-button';

export function ArmingTrigger() {
  return (
    <HoldButton
      onComplete={() => alert("System Armed")}
      duration={1500}
      label="HOLD TO ENGAGE"
    />
  );
}
```

---

## File Structure

- `components/`: 20 React + Motion components including `pull-cord.tsx`, `switch-button.tsx`, `detent-dial.tsx`, `tear-button.tsx`, `hold-button.tsx`, `receipt-printer.tsx`, `wheel-picker.tsx`, `liquid-slider.tsx`, etc.
