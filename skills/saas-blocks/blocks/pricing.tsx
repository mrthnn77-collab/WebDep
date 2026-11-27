import * as React from "react";

export interface Plan {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

export interface PricingProps {
  title?: string;
  plans: Plan[];
  currency?: string;
  /** Label for the yearly saving, e.g. "2 months free". Must match the real prices. */
  yearlyNote?: string;
}

/** Pricing table with an accessible monthly/yearly toggle (radio group). The featured plan is emphasised, not shouted. */
export function Pricing({ title = "Simple pricing", plans, currency = "$", yearlyNote }: PricingProps) {
  const [yearly, setYearly] = React.useState(false);
  return (
    <section id="pricing" className="sb-body py-24" style={{ background: "var(--sb-bg)", color: "var(--sb-fg)" }}>
      <div className="sb-container">
        <h2 className="sb-display mb-8 text-center text-[clamp(2rem,4.5vw,3.4rem)]">{title}</h2>
        <div role="radiogroup" aria-label="Billing period" className="mx-auto mb-12 flex w-fit rounded-full p-1" style={{ border: "1px solid var(--sb-border)" }}>
          {[false, true].map((y) => (
            <button
              key={String(y)}
              type="button"
              role="radio"
              aria-checked={yearly === y}
              onClick={() => setYearly(y)}
              className="sb-focus rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ background: yearly === y ? "var(--sb-fg)" : "transparent", color: yearly === y ? "var(--sb-bg)" : "var(--sb-muted)", transition: "background .2s, color .2s" }}
            >
              {y ? "Yearly" : "Monthly"}
              {y && yearlyNote && <span className="ml-2 text-xs" style={{ color: yearly ? "var(--sb-bg)" : "var(--sb-accent)" }}>{yearlyNote}</span>}
            </button>
          ))}
        </div>
        <div className={`grid gap-4 ${plans.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"} mx-auto max-w-5xl`}>
          {plans.map((p) => {
            const price = yearly ? p.yearly : p.monthly;
            return (
              <article key={p.name} className="sb-card flex flex-col gap-6 p-7" style={p.featured ? { borderColor: "var(--sb-accent)", boxShadow: "0 20px 50px -20px color-mix(in srgb, var(--sb-accent) 45%, transparent)" } : undefined}>
                <header>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--sb-muted)" }}>{p.description}</p>
                </header>
                <p>
                  <span className="sb-display text-5xl tabular-nums">{currency}{price}</span>
                  <span className="text-sm" style={{ color: "var(--sb-muted)" }}> / {yearly ? "year" : "month"}</span>
                </p>
                <a href={p.cta.href} className={`sb-btn ${p.featured ? "sb-btn--primary" : "sb-btn--ghost"} justify-center`}>
                  {p.cta.label}
                </a>
                <ul className="flex flex-col gap-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden fill="none" stroke="var(--sb-accent)" strokeWidth="2" className="mt-0.5 shrink-0"><path d="M3 8.5l3 3 7-7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
