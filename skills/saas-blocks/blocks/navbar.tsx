import * as React from "react";

export interface NavLink { label: string; href: string }

export interface NavbarProps {
  brand: React.ReactNode;
  links: NavLink[];
  cta?: NavLink;
}

/** Sticky, translucent navbar that gains a border after scrolling; accessible mobile menu. */
export function Navbar({ brand, links, cta }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sb-body sticky top-0 z-50"
      style={{
        background: "color-mix(in srgb, var(--sb-bg) 80%, transparent)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "var(--sb-border)" : "transparent"}`,
        transition: "border-color .3s",
      }}
    >
      <nav className="sb-container flex h-16 items-center justify-between" aria-label="Main">
        <a href="/" className="sb-focus text-lg font-semibold" style={{ color: "var(--sb-fg)" }}>
          {brand}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="sb-focus text-sm" style={{ color: "var(--sb-muted)" }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {cta && (
            <a href={cta.href} className="sb-btn sb-btn--primary hidden text-sm md:inline-flex">
              {cta.label}
            </a>
          )}
          <button type="button" className="sb-focus p-2 md:hidden" aria-expanded={open} aria-controls="sb-mobile-menu" aria-label="Menu" onClick={() => setOpen(!open)}>
            <svg width="22" height="22" viewBox="0 0 22 22" stroke="currentColor" strokeWidth="1.6" fill="none" aria-hidden>
              {open ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 7h16M3 15h16" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div id="sb-mobile-menu" className="sb-container pb-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {[...links, ...(cta ? [cta] : [])].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="sb-focus text-lg" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
