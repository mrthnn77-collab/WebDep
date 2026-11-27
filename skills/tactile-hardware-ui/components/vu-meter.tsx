import * as React from "react";
import { cn } from "../lib/cn";

export interface VuMeterProps {
  /** Input level 0–1. Feed it live audio RMS or any metric. */
  level: number;
  label?: string;
  width?: number;
  className?: string;
}

/**
 * Analog needle meter with VU-style ballistics: the needle rises and falls with inertia
 * instead of jumping, and the red zone starts at 80%. Decorative for screen readers except the label/value.
 */
export function VuMeter({ level, label = "VU", width = 220, className }: VuMeterProps) {
  const [shown, setShown] = React.useState(level);
  const target = React.useRef(level);
  target.current = Math.min(1, Math.max(0, level));

  React.useEffect(() => {
    let raf = 0;
    let v = 0;
    let vel = 0;
    const tick = () => {
      // damped spring toward target ≈ 300 ms integration like a real VU
      const force = (target.current - v) * 0.08;
      vel = (vel + force) * 0.78;
      v += vel;
      setShown(v);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const h = width * 0.62;
  const cx = width / 2;
  const cy = h * 0.95;
  const r = width * 0.42;
  const ang = (-50 + Math.min(1.05, Math.max(-0.02, shown)) * 100) * (Math.PI / 180);
  const arc = (from: number, to: number) => {
    const a1 = ((-50 + from * 100) * Math.PI) / 180;
    const a2 = ((-50 + to * 100) * Math.PI) / 180;
    return `M${cx + r * Math.sin(a1)},${cy - r * Math.cos(a1)} A${r},${r} 0 0 1 ${cx + r * Math.sin(a2)},${cy - r * Math.cos(a2)}`;
  };

  return (
    <figure className={cn("inline-block rounded-lg p-2", className)} style={{ background: "linear-gradient(#2a2b2e,#141518)", boxShadow: "inset 0 2px 6px rgba(0,0,0,.8)" }}>
      <svg width={width} height={h} viewBox={`0 0 ${width} ${h}`} role="img" aria-label={`${label} level ${Math.round(level * 100)} percent`}>
        <defs>
          <radialGradient id="vu-face" cx="50%" cy="100%" r="100%">
            <stop offset="0" stopColor="#fff6d8" />
            <stop offset="1" stopColor="#e8d9a8" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width={width} height={h} rx="6" fill="url(#vu-face)" />
        <path d={arc(0, 0.8)} stroke="#222" strokeWidth="2" fill="none" />
        <path d={arc(0.8, 1)} stroke="#c8261d" strokeWidth="5" fill="none" />
        {Array.from({ length: 11 }, (_, i) => {
          const a = ((-50 + i * 10) * Math.PI) / 180;
          const len = i % 5 === 0 ? 10 : 6;
          return <line key={i} x1={cx + r * Math.sin(a)} y1={cy - r * Math.cos(a)} x2={cx + (r - len) * Math.sin(a)} y2={cy - (r - len) * Math.cos(a)} stroke={i >= 8 ? "#c8261d" : "#222"} strokeWidth="1.5" />;
        })}
        <text x={cx} y={h * 0.62} textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="12" fontWeight="700" fill="#222">
          {label}
        </text>
        <line x1={cx} y1={cy} x2={cx + (r + 4) * Math.sin(ang)} y2={cy - (r + 4) * Math.cos(ang)} stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="7" fill="#111" />
      </svg>
    </figure>
  );
}
