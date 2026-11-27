import * as React from "react";
import { cn } from "../lib/cn";

/**
 * Builds an SVG path for a superellipse ("squircle") — the smooth, continuous-curvature
 * corner used by app icons. `n` around 4–5 looks like iOS; higher is boxier.
 */
export function squirclePath(width: number, height: number, n = 4.5, steps = 96): string {
  const a = width / 2;
  const b = height / 2;
  const pts: string[] = [];
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const c = Math.cos(t);
    const s = Math.sin(t);
    const x = a + a * Math.sign(c) * Math.abs(c) ** (2 / n);
    const y = b + b * Math.sign(s) * Math.abs(s) ** (2 / n);
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return pts.join(" ") + " Z";
}

export interface SquircleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Smoothness exponent. 4.5 ≈ iOS icon. */
  n?: number;
}

/** A box clipped to a squircle that follows its own size (ResizeObserver). */
export function Squircle({ n = 4.5, className, style, children, ...rest }: SquircleProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [path, setPath] = React.useState<string | null>(null);

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setPath(squirclePath(el.offsetWidth, el.offsetHeight, n));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [n]);

  return (
    <div ref={ref} className={cn(className)} style={{ clipPath: path ? `path('${path}')` : undefined, ...style }} {...rest}>
      {children}
    </div>
  );
}
