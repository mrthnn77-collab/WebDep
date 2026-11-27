import * as React from "react";
import { cn, prefersReducedMotion } from "../lib/cn";

export interface CoverflowItem {
  id: string;
  /** Any node: an <img>, a card, a video poster. Keep a consistent aspect ratio. */
  content: React.ReactNode;
  label: string;
}

export interface CoverflowCarouselProps {
  items: CoverflowItem[];
  /** Width of a card in px. */
  cardWidth?: number;
  /** Degrees each side card is rotated. */
  tilt?: number;
  className?: string;
  onChange?: (index: number) => void;
  /** Height of the stage in px. */
  height?: number;
}

/**
 * 3D perspective carousel: the active card faces the viewer, neighbours rotate away.
 * Arrow keys, click, swipe/drag and mouse wheel all move it. Announces the current item to screen readers.
 */
export function CoverflowCarousel({ items, cardWidth = 260, tilt = 45, height = 380, className, onChange }: CoverflowCarouselProps) {
  const [active, setActive] = React.useState(0);
  const dragStart = React.useRef<number | null>(null);
  const reduced = React.useMemo(prefersReducedMotion, []);

  const go = React.useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(items.length - 1, i));
      setActive(next);
      onChange?.(next);
    },
    [items.length, onChange],
  );

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(active + 1);
    if (e.key === "ArrowLeft") go(active - 1);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Gallery"
      tabIndex={0}
      onKeyDown={onKey}
      onWheel={(e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) go(active + Math.sign(e.deltaX));
      }}
      onPointerDown={(e) => (dragStart.current = e.clientX)}
      onPointerUp={(e) => {
        if (dragStart.current === null) return;
        const dx = e.clientX - dragStart.current;
        if (Math.abs(dx) > 40) go(active - Math.sign(dx));
        dragStart.current = null;
      }}
      className={cn(className)}
      style={{ position: "relative", height, width: "100%", touchAction: "pan-y", userSelect: "none", overflow: "hidden", outline: "none", perspective: 1200 }}
    >
      <div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d" }}>
        {items.map((item, i) => {
          const offset = i - active;
          const abs = Math.abs(offset);
          const x = offset === 0 ? 0 : Math.sign(offset) * (cardWidth * 0.6 + (abs - 1) * cardWidth * 0.35);
          const rot = offset === 0 ? 0 : -Math.sign(offset) * tilt;
          const z = offset === 0 ? 80 : -abs * 60;
          return (
            <button
              key={item.id}
              type="button"
              aria-label={item.label}
              aria-current={offset === 0}
              tabIndex={-1}
              onClick={() => go(i)}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                padding: 0,
                border: 0,
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 16,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,.4)",
                width: cardWidth,
                transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${rot}deg)`,
                zIndex: 100 - abs,
                opacity: abs > 3 ? 0 : 1,
                filter: offset === 0 ? "none" : `brightness(${1 - abs * 0.12})`,
                transition: reduced ? "none" : "transform 500ms cubic-bezier(.2,.8,.2,1), filter 500ms, opacity 300ms",
              }}
            >
              {item.content}
            </button>
          );
        })}
      </div>
      <p aria-live="polite" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" }}>
        {items[active]?.label} ({active + 1} / {items.length})
      </p>
    </div>
  );
}
