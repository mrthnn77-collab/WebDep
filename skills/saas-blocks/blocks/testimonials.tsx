import * as React from "react";
import { useReveal } from "../lib/use-reveal";

export interface Testimonial { quote: string; name: string; role: string; avatar?: string }

/**
 * Masonry wall of quotes. Use only real testimonials from real customers, with their permission.
 * The first one is featured larger.
 */
export function Testimonials({ title = "What customers say", items }: { title?: string; items: Testimonial[] }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="sb-body py-24" style={{ background: "var(--sb-bg)", color: "var(--sb-fg)" }}>
      <div className="sb-container">
        <h2 className="sb-display sb-reveal mb-12 text-center text-[clamp(2rem,4.5vw,3.4rem)]">{title}</h2>
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {items.map((t, i) => (
            <figure key={t.name + i} className="sb-card sb-reveal mb-4 break-inside-avoid p-6">
              <blockquote className={i === 0 ? "sb-display text-2xl leading-snug" : "text-[15px] leading-relaxed"}>“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-sm">
                {t.avatar ? (
                  <img src={t.avatar} alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
                ) : (
                  <span aria-hidden className="flex h-9 w-9 items-center justify-center rounded-full font-semibold" style={{ background: "var(--sb-border)" }}>
                    {t.name.charAt(0)}
                  </span>
                )}
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  <span style={{ color: "var(--sb-muted)" }}>{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
