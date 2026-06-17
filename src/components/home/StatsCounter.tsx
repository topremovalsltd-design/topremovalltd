"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  target: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "Happy Clients", target: 12500, suffix: "+" },
  { label: "Completed Projects", target: 18750, suffix: "+" },
  { label: "Miles Covered", target: 980000, suffix: "+" },
  { label: "KM Bubble Wrap Used", target: 4200, suffix: "+" },
];

function formatNumber(n: number) {
  return n.toLocaleString("en-GB");
}

function CountUp({ target, suffix }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            if (reduceMotion) {
              setValue(target);
              return;
            }
            const duration = 2000;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {formatNumber(value)}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-brand-navy py-16 text-white">
      <div className="mx-auto max-w-[88rem] px-4">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dd className="text-3xl font-extrabold tracking-tight text-brand-orange sm:text-4xl md:text-5xl">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 text-sm font-medium uppercase tracking-wide text-white/80 sm:text-base">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
