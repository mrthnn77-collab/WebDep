import * as React from "react";

export interface FooterColumn { title: string; links: { label: string; href: string }[] }

export interface FooterProps {
  brand: React.ReactNode;
  tagline?: string;
  columns: FooterColumn[];
  legal?: string;
  socials?: { label: string; href: string; icon: React.ReactNode }[];
}

/** Multi-column footer with brand, link groups, socials and legal line. */
export function Footer({ brand, tagline, columns, legal, socials = [] }: FooterProps) {
  return (
    <footer className="sb-body pb-10 pt-20" style={{ background: "var(--sb-bg)", color: "var(--sb-fg)", borderTop: "1px solid var(--sb-border)" }}>
      <div className="sb-container grid gap-10 md:grid-cols-[2fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-3">
          <span className="text-lg font-semibold">{brand}</span>
          {tagline && <p className="max-w-xs text-sm" style={{ color: "var(--sb-muted)" }}>{tagline}</p>}
          {socials.length > 0 && (
            <ul className="mt-2 flex gap-3">
              {socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} aria-label={s.label} className="sb-focus block opacity-70 hover:opacity-100">{s.icon}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h3 className="mb-3 text-sm font-semibold">{c.title}</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {c.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="sb-focus" style={{ color: "var(--sb-muted)" }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      {legal && <p className="sb-container mt-16 text-xs" style={{ color: "var(--sb-muted)" }}>{legal}</p>}
    </footer>
  );
}
