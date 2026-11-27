import * as React from "react";
import { cn } from "../lib/cn";

type Edge = "top" | "bottom" | "left" | "right";

export interface ProgressiveBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which edge is the sharpest-to-blurriest direction pointing to. */
  edge?: Edge;
  /** Number of stacked blur layers. More = smoother ramp, more GPU cost. 4–8 is plenty. */
  layers?: number;
  /** Blur of the strongest layer in px. */
  maxBlur?: number;
}

const toward: Record<Edge, string> = { top: "to top", bottom: "to bottom", left: "to left", right: "to right" };

/**
 * A blur that gets stronger toward one edge, like iOS navigation bars.
 * Place it absolutely over scrolling content (e.g. `className="absolute inset-x-0 bottom-0 h-24"`).
 * Each layer blurs a little more and is masked to a narrower band, so the ramp has no visible steps.
 */
export function ProgressiveBlur({ edge = "bottom", layers = 6, maxBlur = 16, className, style, ...rest }: ProgressiveBlurProps) {
  const dir = toward[edge];
  return (
    <div aria-hidden className={cn("pointer-events-none", className)} style={{ position: "absolute", ...style }} {...rest}>
      {Array.from({ length: layers }, (_, i) => {
        const start = (i / layers) * 100;
        const mid = ((i + 1) / layers) * 100;
        const end = Math.min(((i + 2) / layers) * 100, 100);
        const mask = `linear-gradient(${dir}, transparent ${start}%, black ${mid}%, black ${end}%, transparent ${Math.min(end + 100 / layers, 100)}%)`;
        const blur = (maxBlur / 2 ** (layers - 1 - i)).toFixed(2);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: i + 1,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
    </div>
  );
}
