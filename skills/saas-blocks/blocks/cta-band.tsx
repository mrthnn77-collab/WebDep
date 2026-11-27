import * as React from "react";

export interface CtaBandProps {
  title: string;
  subtitle?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/** Closing call to action on an accent surface. Repeat the hero's primary action, word for word. */
export function CtaBand({ title, subtitle, primary, secondary }: CtaBandProps) {
  return (
    <section className="sb-body py-16" style={{ background: "var(--sb-bg)" }}>
      <div className="sb-container">
        <div className="flex flex-col items-center gap-6 px-6 py-16 text-center" style={{ background: "var(--sb-fg)", color: "var(--sb-bg)", borderRadius: "calc(var(--sb-radius) * 2)" }}>
          <h2 className="sb-display max-w-3xl text-[clamp(2rem,5vw,4rem)]">{title}</h2>
          {subtitle && <p className="max-w-xl opacity-70">{subtitle}</p>}
          <div className="flex flex-wrap justify-center gap-3">
            <a href={primary.href} className="sb-btn sb-btn--primary">{primary.label}</a>
            {secondary && (
              <a href={secondary.href} className="sb-btn" style={{ border: "1px solid color-mix(in srgb, var(--sb-bg) 30%, transparent)", color: "var(--sb-bg)" }}>
                {secondary.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
