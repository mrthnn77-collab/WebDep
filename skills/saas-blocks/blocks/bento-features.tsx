import * as React from "react";
import { useReveal } from "../lib/use-reveal";

export interface BentoItem {
  title: string;
  body: string;
  /** Visual: screenshot, mini demo, icon. */
  visual?: React.ReactNode;
  /** Grid span on desktop. Mix sizes so the grid has rhythm. */
  size?: "sm" | "md" | "lg" | "wide" | "tall";
}

const span: Record<NonNullable<BentoItem["size"]>, string> = {
  sm: "md:col-span-2",
  md: "md:col-span-3",
  lg: "md:col-span-4 md:row-span-2",
  wide: "md:col-span-6",
  tall: "md:col-span-2 md:row-span-2",
};

export interface BentoFeaturesProps {
  eyebrow?: string;
  title: string;
  items: BentoItem[];
}

/** 6-column bento grid of features. Use 4–6 items with at least one large tile as the anchor. */
export function BentoFeatures({ eyebrow, title, items }: BentoFeaturesProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="features" className="sb-body py-24" style={{ background: "var(--sb-bg)", color: "var(--sb-fg)" }}>
      <div className="sb-container">
        {eyebrow && <p className="sb-reveal mb-3 text-sm font-medium" style={{ color: "var(--sb-accent)" }}>{eyebrow}</p>}
        <h2 className="sb-display sb-reveal mb-12 max-w-3xl text-[clamp(2rem,4.5vw,3.4rem)]">{title}</h2>
        <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-6">
          {items.map((it) => (
            <article key={it.title} className={`sb-card sb-reveal flex flex-col justify-between gap-6 overflow-hidden p-6 ${span[it.size ?? "md"]}`}>
              {it.visual && <div className="min-h-0 flex-1">{it.visual}</div>}
              <div>
                <h3 className="mb-1 text-lg font-semibold">{it.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--sb-muted)" }}>
                  {it.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
