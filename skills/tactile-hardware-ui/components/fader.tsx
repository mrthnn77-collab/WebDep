import * as React from "react";
import { cn } from "../lib/cn";

export interface FaderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label: string;
  /** Track length in px. */
  length?: number;
  orientation?: "vertical" | "horizontal";
  format?: (v: number) => string;
  className?: string;
}

/** Mixing-desk style linear fader with a ribbed cap. Click the track to jump, drag the cap, or use keys. */
export function Fader({ value, onChange, min = 0, max = 100, step = 1, label, length = 180, orientation = "vertical", format = (v) => String(Math.round(v)), className }: FaderProps) {
  const track = React.useRef<HTMLDivElement>(null);
  const vertical = orientation === "vertical";
  const pct = (value - min) / (max - min);
  const clamp = (v: number) => Math.min(max, Math.max(min, Math.round(v / step) * step));

  const fromPointer = (e: React.PointerEvent) => {
    const r = track.current!.getBoundingClientRect();
    const p = vertical ? 1 - (e.clientY - r.top) / r.height : (e.clientX - r.left) / r.width;
    onChange(clamp(min + Math.min(1, Math.max(0, p)) * (max - min)));
  };

  return (
    <div className={cn(className)} style={{ display: "inline-flex", alignItems: "center", gap: 12, flexDirection: vertical ? "column" : "row" }}>
      <div
        ref={track}
        role="slider"
        tabIndex={0}
        aria-label={label}
        aria-orientation={orientation}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={format(value)}
        className="hw-focus"
        style={{ position: "relative", cursor: "pointer", touchAction: "none", ...(vertical ? { width: 44, height: length } : { width: length, height: 44 }) }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          fromPointer(e);
        }}
        onPointerMove={(e) => e.buttons === 1 && fromPointer(e)}
        onKeyDown={(e) => {
          const inc = ["ArrowUp", "ArrowRight"].includes(e.key) ? step : ["ArrowDown", "ArrowLeft"].includes(e.key) ? -step : 0;
          if (inc) {
            e.preventDefault();
            onChange(clamp(value + inc * (e.shiftKey ? 10 : 1)));
          }
          if (e.key === "Home") onChange(min);
          if (e.key === "End") onChange(max);
        }}
      >
        <span aria-hidden style={{ position: "absolute", borderRadius: 3, background: "rgba(0,0,0,.7)", boxShadow: "inset 0 1px 2px rgba(0,0,0,.8)", ...(vertical ? { left: "50%", top: 0, height: "100%", width: 6, transform: "translateX(-50%)" } : { top: "50%", left: 0, width: "100%", height: 6, transform: "translateY(-50%)" }) }} />
        <span
          aria-hidden
          className="hw-metal"
          style={{
            position: "absolute",
            borderRadius: 4,
            width: vertical ? 40 : 22,
            height: vertical ? 22 : 40,
            left: vertical ? "50%" : `calc(${pct * 100}% - 11px)`,
            bottom: vertical ? `calc(${pct * 100}% - 11px)` : undefined,
            top: vertical ? undefined : "50%",
            transform: vertical ? "translateX(-50%)" : "translateY(-50%)",
            boxShadow: "0 4px 8px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.7)",
            backgroundImage: vertical
              ? "repeating-linear-gradient(0deg,rgba(0,0,0,.25) 0 1px,transparent 1px 4px), conic-gradient(from var(--light-angle),#f4f4f4,#9a9ea4,#e2e3e5,#80848a,#f4f4f4)"
              : "repeating-linear-gradient(90deg,rgba(0,0,0,.25) 0 1px,transparent 1px 4px), conic-gradient(from var(--light-angle),#f4f4f4,#9a9ea4,#e2e3e5,#80848a,#f4f4f4)",
          }}
        />
      </div>
      <div className="hw-label">{label}</div>
      <div style={{ font: "12px ui-monospace,monospace", fontVariantNumeric: "tabular-nums", opacity: 0.8 }}>{format(value)}</div>
    </div>
  );
}
