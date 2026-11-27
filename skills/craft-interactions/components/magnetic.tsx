import * as React from "react";
import { prefersReducedMotion } from "../lib/cn";

export interface MagneticProps {
  children: React.ReactElement<{ style?: React.CSSProperties }>;
  /** 0–1: how far the element follows the pointer. 0.3 feels right for buttons. */
  strength?: number;
  /** Activation radius around the element in px. */
  radius?: number;
}

/**
 * Wraps one element so it leans toward the cursor when the cursor is near, then springs back.
 * Disabled for touch input and reduced-motion users.
 */
export function Magnetic({ children, strength = 0.3, radius = 80 }: MagneticProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const reduced = React.useMemo(prefersReducedMotion, []);

  React.useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const reach = Math.max(r.width, r.height) / 2 + radius;
      setOffset(Math.hypot(dx, dy) < reach ? { x: dx * strength, y: dy * strength } : { x: 0, y: 0 });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced, radius, strength]);

  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      {React.cloneElement(children, {
        style: {
          ...children.props.style,
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 250ms cubic-bezier(.2,.8,.2,1)",
        },
      })}
    </span>
  );
}
