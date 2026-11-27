import * as React from "react";
import { prefersReducedMotion } from "../lib/cn";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=?";

export interface TextScrambleProps {
  text: string;
  /** Start on mount, or only on hover/focus. */
  trigger?: "mount" | "hover";
  /** Total duration in ms. */
  duration?: number;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p" | "a";
}

/** Letters resolve from random glyphs to the real text, left to right. Screen readers get the real text. */
export function TextScramble({ text, trigger = "hover", duration = 700, className, as: Tag = "span" }: TextScrambleProps) {
  const [shown, setShown] = React.useState(text);
  const frame = React.useRef<number>(0);
  const reduced = React.useMemo(prefersReducedMotion, []);

  const run = React.useCallback(() => {
    if (reduced) return;
    cancelAnimationFrame(frame.current);
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const settled = Math.floor(p * text.length);
      setShown(
        text
          .split("")
          .map((ch, i) => (i < settled || ch === " " ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join(""),
      );
      if (p < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  }, [duration, reduced, text]);

  React.useEffect(() => {
    if (trigger === "mount") run();
    return () => cancelAnimationFrame(frame.current);
  }, [run, trigger]);

  const handlers = trigger === "hover" ? { onMouseEnter: run, onFocus: run } : {};
  return (
    <Tag className={className} aria-label={text} {...handlers}>
      <span aria-hidden style={{ fontVariantNumeric: "tabular-nums" }}>
        {shown}
      </span>
    </Tag>
  );
}
