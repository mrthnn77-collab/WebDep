import * as React from "react";

export interface Stat { value: number; suffix?: string; prefix?: string; label: string; decimals?: number }

function CountUp({ to, decimals = 0, prefix = "", suffix = "" }: { to: number; decimals?: number; prefix?: string; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return setV(to);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / 1400, 1);
        setV(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {v.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

/** Row of big numbers that count up when scrolled into view. Use real, verifiable numbers only. */
export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <section className="sb-body py-20" style={{ background: "var(--sb-bg)", color: "var(--sb-fg)" }}>
      <dl className="sb-container grid grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse gap-2" style={{ borderTop: "1px solid var(--sb-border)", paddingTop: 16 }}>
            <dt className="text-sm" style={{ color: "var(--sb-muted)" }}>{s.label}</dt>
            <dd className="sb-display text-[clamp(2.2rem,5vw,3.6rem)]">
              <CountUp to={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
