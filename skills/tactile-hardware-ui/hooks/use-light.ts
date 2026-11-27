import * as React from "react";

export interface LightOptions {
  /** Follow the mouse (desk lamp) or stay fixed (studio light). */
  mode?: "pointer" | "fixed";
  /** Fixed light angle in degrees, 0 = from the right, 90 = from below, 270 = from above. */
  angle?: number;
}

/**
 * Returns CSS variables describing where the light comes from, so every control on a
 * panel shades consistently: `--light-x`, `--light-y` (−1…1) and `--light-angle` (deg).
 * Put the returned style on the panel root; controls read the vars in their gradients/shadows.
 */
export function useLight({ mode = "fixed", angle = 250 }: LightOptions = {}): React.CSSProperties {
  const [a, setA] = React.useState(angle);

  React.useEffect(() => {
    if (mode !== "pointer") return setA(angle);
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      const dx = e.clientX - window.innerWidth / 2;
      const dy = e.clientY - window.innerHeight / 2;
      setA((Math.atan2(dy, dx) * 180) / Math.PI);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mode, angle]);

  const rad = (a * Math.PI) / 180;
  return {
    ["--light-x" as string]: Math.cos(rad).toFixed(3),
    ["--light-y" as string]: Math.sin(rad).toFixed(3),
    ["--light-angle" as string]: `${a.toFixed(1)}deg`,
  } as React.CSSProperties;
}
