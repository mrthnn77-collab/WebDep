import * as React from "react";
import { cn } from "../lib/cn";

export interface LedMeterProps {
  /** 0–1 */
  level: number;
  segments?: number;
  orientation?: "vertical" | "horizontal";
  /** Keep the highest recent segment lit briefly, like studio meters. */
  peakHold?: boolean;
  label?: string;
  className?: string;
}

/** Segmented LED bar meter: green → amber → red, with optional peak hold. */
export function LedMeter({ level, segments = 16, orientation = "vertical", peakHold = true, label = "Level", className }: LedMeterProps) {
  const lit = Math.round(Math.min(1, Math.max(0, level)) * segments);
  const [peak, setPeak] = React.useState(0);

  React.useEffect(() => {
    if (!peakHold) return;
    if (lit > peak) setPeak(lit);
    const t = window.setTimeout(() => setPeak((p) => Math.max(lit, p - 1)), 600);
    return () => window.clearTimeout(t);
  }, [lit, peak, peakHold]);

  const color = (i: number) => (i >= segments * 0.85 ? "#ff3b30" : i >= segments * 0.65 ? "#ffb020" : "#30d158");
  const vertical = orientation === "vertical";

  return (
    <div
      role="meter"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(level * 100)}
      className={cn(className)}
      style={{ display: "inline-flex", gap: 3, borderRadius: 6, background: "#000", padding: 6, boxShadow: "inset 0 2px 4px rgba(0,0,0,.9)", flexDirection: vertical ? "column-reverse" : "row" }}
    >
      {Array.from({ length: segments }, (_, i) => {
        const on = i < lit || (peakHold && i === peak - 1);
        const c = color(i);
        return (
          <span
            key={i}
            aria-hidden
            style={{
              borderRadius: 2,
              width: vertical ? 18 : 8,
              height: vertical ? 8 : 18,
              background: on ? c : `${c}22`,
              boxShadow: on ? `0 0 6px ${c}, inset 0 1px 0 rgba(255,255,255,.4)` : "none",
              transition: "background 60ms, box-shadow 60ms",
            }}
          />
        );
      })}
    </div>
  );
}
