import * as React from "react";
import { cn } from "../lib/cn";

export interface KnobProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  /** Snap step. With `detents`, the knob clicks into these positions. */
  step?: number;
  detents?: boolean;
  label: string;
  size?: number;
  /** Format the value for the readout and screen readers. */
  format?: (v: number) => string;
  className?: string;
}

const SWEEP = 270; // degrees from min to max

/**
 * Machined rotary knob. Drag up/down (or left/right), scroll, or use arrow / PageUp / Home / End keys.
 * Exposes role="slider" with proper aria values. Shift = fine control.
 */
export function Knob({ value, onChange, min = 0, max = 100, step = 1, detents = false, label, size = 72, format = (v) => String(Math.round(v)), className }: KnobProps) {
  const start = React.useRef<{ y: number; x: number; v: number } | null>(null);
  const range = max - min;
  const clamp = (v: number) => Math.min(max, Math.max(min, v));
  const snap = (v: number) => (detents ? Math.round((v - min) / step) * step + min : v);
  const set = (v: number) => onChange(clamp(snap(v)));
  const angle = -SWEEP / 2 + ((value - min) / range) * SWEEP;
  const ticks = detents ? Math.round(range / step) + 1 : 11;

  return (
    <div className={cn(className)} style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div style={{ position: "relative", width: size + 28, height: size + 28 }}>
        {Array.from({ length: ticks }, (_, i) => {
          const a = -SWEEP / 2 + (i / (ticks - 1)) * SWEEP;
          return <span key={i} aria-hidden style={{ position: "absolute", left: "50%", top: "50%", width: 1, height: 6, background: "currentColor", opacity: 0.5, transform: `translate(-50%,-50%) rotate(${a}deg) translateY(${-(size / 2 + 9)}px)` }} />;
        })}
        <div
          role="slider"
          tabIndex={0}
          aria-label={label}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={format(value)}
          className="hw-focus hw-metal"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            borderRadius: "50%",
            cursor: "ns-resize",
            touchAction: "none",
            width: size,
            height: size,
            transform: `translate(-50%,-50%) rotate(${angle}deg)`,
            boxShadow: "0 6px 12px rgba(0,0,0,.35), inset 0 0 0 2px rgba(0,0,0,.25), inset 0 2px 2px rgba(255,255,255,.6)",
          }}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            start.current = { y: e.clientY, x: e.clientX, v: value };
          }}
          onPointerMove={(e) => {
            if (!start.current) return;
            const delta = start.current.y - e.clientY + (e.clientX - start.current.x);
            const speed = e.shiftKey ? 0.1 : 0.5;
            set(start.current.v + (delta * speed * range) / 100);
          }}
          onPointerUp={() => (start.current = null)}
          onWheel={(e) => set(value - Math.sign(e.deltaY) * step * (e.shiftKey ? 1 : 2))}
          onKeyDown={(e) => {
            const big = range / 10;
            const map: Record<string, number> = { ArrowUp: step, ArrowRight: step, ArrowDown: -step, ArrowLeft: -step, PageUp: big, PageDown: -big };
            if (e.key in map) {
              e.preventDefault();
              set(value + map[e.key]);
            } else if (e.key === "Home") set(min);
            else if (e.key === "End") set(max);
          }}
        >
          <span aria-hidden style={{ position: "absolute", left: "50%", top: "8%", height: "28%", width: 3, transform: "translateX(-50%)", borderRadius: 2, background: "#ff7a1a", boxShadow: "0 0 6px #ff7a1a" }} />
        </div>
      </div>
      <div className="hw-label">{label}</div>
      <div style={{ font: "12px ui-monospace,monospace", fontVariantNumeric: "tabular-nums", opacity: 0.8 }}>{format(value)}</div>
    </div>
  );
}
