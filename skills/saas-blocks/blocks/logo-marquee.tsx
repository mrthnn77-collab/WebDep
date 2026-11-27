import * as React from "react";

export interface LogoMarqueeProps {
  heading?: string;
  /** Logos as nodes (inline SVG or <img alt="Company">). Use the customer's real logos with permission. */
  logos: React.ReactNode[];
  /** Seconds per full loop. */
  speed?: number;
}

/** Infinite, edge-faded logo strip. Pauses on hover; static for reduced-motion users. */
export function LogoMarquee({ heading = "Trusted by teams at", logos, speed = 30 }: LogoMarqueeProps) {
  const mask = "linear-gradient(to right, transparent, black 12%, black 88%, transparent)";
  return (
    <section className="sb-body py-12" style={{ background: "var(--sb-bg)" }} aria-label={heading}>
      <p className="sb-container mb-6 text-center text-sm" style={{ color: "var(--sb-muted)" }}>
        {heading}
      </p>
      <div className="group overflow-hidden" style={{ maskImage: mask, WebkitMaskImage: mask }}>
        <ul
          className="sb-marquee-track flex w-max items-center gap-14 group-hover:[animation-play-state:paused]"
          style={{ animation: `sb-marquee ${speed}s linear infinite`, opacity: 0.7 }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <li key={i} aria-hidden={i >= logos.length} className="shrink-0 grayscale">
              {logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
