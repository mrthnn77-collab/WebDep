import * as React from "react";
import { cn, prefersReducedMotion } from "../lib/cn";

export interface SmoothCaretInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  caretClassName?: string;
}

/**
 * A text input whose caret glides between positions instead of jumping.
 * The native caret is hidden; a mirror span measures the text before the cursor
 * and a 2px bar animates to that x position. Works with typing, arrows, clicks and selection.
 */
export const SmoothCaretInput = React.forwardRef<HTMLInputElement, SmoothCaretInputProps>(function SmoothCaretInput(
  { className, caretClassName, onFocus, onBlur, ...props },
  forwardedRef,
) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const mirrorRef = React.useRef<HTMLSpanElement | null>(null);
  const [x, setX] = React.useState(0);
  const [focused, setFocused] = React.useState(false);
  const [hasSelection, setHasSelection] = React.useState(false);
  const reduced = React.useMemo(prefersReducedMotion, []);

  const setRefs = (el: HTMLInputElement | null) => {
    inputRef.current = el;
    if (typeof forwardedRef === "function") forwardedRef(el);
    else if (forwardedRef) forwardedRef.current = el;
  };

  const measure = React.useCallback(() => {
    const input = inputRef.current;
    const mirror = mirrorRef.current;
    if (!input || !mirror) return;
    const pos = input.selectionStart ?? input.value.length;
    setHasSelection(input.selectionStart !== input.selectionEnd);
    mirror.textContent = input.value.slice(0, pos).replace(/ /g, " ");
    const style = getComputedStyle(input);
    const padLeft = parseFloat(style.paddingLeft) || 0;
    setX(padLeft + mirror.offsetWidth - input.scrollLeft);
  }, []);

  React.useEffect(() => {
    document.addEventListener("selectionchange", measure);
    return () => document.removeEventListener("selectionchange", measure);
  }, [measure]);

  return (
    <div className="relative">
      <input
        ref={setRefs}
        className={cn("w-full caret-transparent", className)}
        onInput={measure}
        onKeyUp={measure}
        onClick={measure}
        onScroll={measure}
        onFocus={(e) => {
          setFocused(true);
          requestAnimationFrame(measure);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        {...props}
      />
      <span ref={mirrorRef} aria-hidden className={cn("pointer-events-none invisible absolute whitespace-pre", className)} style={{ padding: 0, border: 0, width: "auto" }} />
      {focused && !hasSelection && (
        <span
          aria-hidden
          className={cn("pointer-events-none absolute top-1/2 h-[1.2em] w-[2px] -translate-y-1/2 rounded-full bg-current", caretClassName)}
          style={{
            left: 0,
            transform: `translate(${x}px, -50%)`,
            transition: reduced ? "none" : "transform 120ms cubic-bezier(.2,.8,.2,1)",
            animation: "craft-caret-blink 1.1s steps(1) infinite",
          }}
        />
      )}
      <style>{`@keyframes craft-caret-blink{0%,55%{opacity:1}56%,100%{opacity:0}}`}</style>
    </div>
  );
});
