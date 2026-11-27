import * as React from "react";
import { cn } from "../lib/cn";

export interface AnimatedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * `draw`  — underline grows from the left on hover, leaves to the right.
   * `swap`  — text slides up and an identical copy slides in from below.
   * `arrow` — a small arrow nudges in after the text.
   */
  variant?: "draw" | "swap" | "arrow";
}

const css = `
.craft-link{position:relative;display:inline-flex;align-items:center;gap:.35em;text-decoration:none;color:inherit}
.craft-link:focus-visible{outline:2px solid currentColor;outline-offset:3px;border-radius:2px}
.craft-link--draw::after{content:"";position:absolute;left:0;right:0;bottom:-.12em;height:1px;background:currentColor;transform:scaleX(0);transform-origin:right;transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.craft-link--draw:hover::after,.craft-link--draw:focus-visible::after{transform:scaleX(1);transform-origin:left}
.craft-link--swap{overflow:hidden;height:1.25em;line-height:1.25em;flex-direction:column;align-items:flex-start}
.craft-link--swap span{transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.craft-link--swap:hover span,.craft-link--swap:focus-visible span{transform:translateY(-100%)}
.craft-link--arrow svg{transition:transform .25s cubic-bezier(.2,.8,.2,1),opacity .25s;opacity:.6}
.craft-link--arrow:hover svg,.craft-link--arrow:focus-visible svg{transform:translateX(3px);opacity:1}
@media (prefers-reduced-motion:reduce){.craft-link *, .craft-link::after{transition:none!important}}
`;

/** Link with a tasteful hover/focus state. Keyboard focus shows the same effect as hover. */
export function AnimatedLink({ variant = "draw", className, children, ...rest }: AnimatedLinkProps) {
  return (
    <>
      <style>{css}</style>
      <a className={cn("craft-link", `craft-link--${variant}`, className)} {...rest}>
        {variant === "swap" ? (
          <>
            <span>{children}</span>
            <span aria-hidden>{children}</span>
          </>
        ) : (
          children
        )}
        {variant === "arrow" && (
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 6h8M6.5 2.5 10 6l-3.5 3.5" />
          </svg>
        )}
      </a>
    </>
  );
}
