import * as React from "react";
import { cn } from "../lib/cn";

export interface ScrollFadeProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal";
  /** Fade length in px. */
  size?: number;
}

/**
 * A scroll container whose edges fade out only when there is more content in that direction.
 * At the very top there is no top fade; at the very bottom no bottom fade.
 */
export function ScrollFade({ orientation = "vertical", size = 40, className, style, children, ...rest }: ScrollFadeProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [edges, setEdges] = React.useState({ start: false, end: false });

  const update = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const pos = orientation === "vertical" ? el.scrollTop : el.scrollLeft;
    const max = orientation === "vertical" ? el.scrollHeight - el.clientHeight : el.scrollWidth - el.clientWidth;
    setEdges({ start: pos > 1, end: pos < max - 1 });
  }, [orientation]);

  React.useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update]);

  const dir = orientation === "vertical" ? "to bottom" : "to right";
  const mask = `linear-gradient(${dir}, ${edges.start ? "transparent" : "black"} 0, black ${size}px, black calc(100% - ${size}px), ${edges.end ? "transparent" : "black"} 100%)`;

  return (
    <div
      ref={ref}
      onScroll={update}
      className={cn(orientation === "vertical" ? "overflow-y-auto" : "overflow-x-auto", className)}
      style={{ maskImage: mask, WebkitMaskImage: mask, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
