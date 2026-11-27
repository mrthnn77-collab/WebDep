import * as React from "react";
import { useReveal } from "../lib/use-reveal";

export interface HeroProps {
  /** Small line above the headline, e.g. "New · AI summaries". */
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** Proof under the CTAs: "Trusted by 2,000 teams", ratings, etc. */
  proof?: React.ReactNode;
  /** Product shot, video or illustration. */
  media?: React.ReactNode;
  align?: "center" | "left";
}

/** Headline-first hero: promise, one primary action, proof, then the product. Reveals on load. */
export function Hero({ eyebrow, title, subtitle, primary, secondary, proof, media, align = "center" }: HeroProps) {
  const ref = useReveal<HTMLElement>();
  const center = align === "center";
  return (
    <section ref={ref} className="sb-body pb-16 pt-20 md:pt-28" style={{ background: "var(--sb-bg)", color: "var(--sb-fg)" }}>
      <div className={`sb-container flex flex-col gap-6 ${center ? "items-center text-center" : "items-start"}`}>
        {eyebrow && (
          <span className="sb-reveal rounded-full px-3 py-1 text-xs font-medium" style={{ border: "1px solid var(--sb-border)", color: "var(--sb-muted)" }}>
            {eyebrow}
          </span>
        )}
        <h1 className="sb-display sb-reveal max-w-4xl text-[clamp(2.6rem,7vw,5.6rem)]">{title}</h1>
        <p className="sb-reveal max-w-2xl text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed" style={{ color: "var(--sb-muted)" }}>
          {subtitle}
        </p>
        <div className={`sb-reveal flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
          <a href={primary.href} className="sb-btn sb-btn--primary">
            {primary.label}
          </a>
          {secondary && (
            <a href={secondary.href} className="sb-btn sb-btn--ghost">
              {secondary.label}
            </a>
          )}
        </div>
        {proof && (
          <div className="sb-reveal text-sm" style={{ color: "var(--sb-muted)" }}>
            {proof}
          </div>
        )}
        {media && <div className="sb-reveal sb-card mt-10 w-full overflow-hidden shadow-2xl">{media}</div>}
      </div>
    </section>
  );
}
