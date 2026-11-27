import * as React from "react";

export interface FaqItem { q: string; a: React.ReactNode }

/** FAQ built on native <details> (works without JS, keyboard and screen-reader friendly). Emits FAQPage JSON-LD for SEO. */
export function Faq({ title = "Questions", items }: { title?: string; items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.filter((i) => typeof i.a === "string").map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
  return (
    <section id="faq" className="sb-body py-24" style={{ background: "var(--sb-bg)", color: "var(--sb-fg)" }}>
      <div className="sb-container grid gap-10 md:grid-cols-[1fr_2fr]">
        <h2 className="sb-display text-[clamp(2rem,4.5vw,3.4rem)]">{title}</h2>
        <div>
          {items.map((it) => (
            <details key={it.q} className="group py-5" style={{ borderBottom: "1px solid var(--sb-border)" }}>
              <summary className="sb-focus flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                {it.q}
                <span aria-hidden className="text-2xl transition-transform duration-300 group-open:rotate-45" style={{ color: "var(--sb-muted)" }}>+</span>
              </summary>
              <div className="pt-3 leading-relaxed" style={{ color: "var(--sb-muted)" }}>{it.a}</div>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
