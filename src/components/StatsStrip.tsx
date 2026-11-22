import { BadgeCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Managed prime assets", note: "High-yield Colombo residential & commercial estates" },
  { value: 100, suffix: "%", label: "Clear deeds guarantee", note: "Dual-verified Land Registry & Bim Saviya titles", verified: true },
  { value: 12, suffix: "+ Years", label: "Institutional trust", note: "Colombo–Toronto diaspora representation" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;
    let frameId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
          setCount(value);
          return;
        }

        const duration = 1400;
        let startTime: number | undefined;

        const animate = (time: number) => {
          if (startTime === undefined) startTime = time;
          const progress = Math.min((time - startTime) / duration, 1);
          const easedProgress = 1 - (1 - progress) ** 3;
          setCount(Math.round(easedProgress * value));

          if (progress < 1) frameId = requestAnimationFrame(animate);
        };
        frameId = requestAnimationFrame(animate);
        frameId = requestAnimationFrame(animate);
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <span ref={counterRef} aria-label={`${value}${suffix}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="border-b border-[#dce5dc] bg-[#f7f8f5] py-10 sm:py-12">
      <div className="mx-auto grid max-w-[1180px] divide-y divide-[#dce5dc] px-5 md:grid-cols-3 md:divide-x md:divide-y-0 sm:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="px-5 py-6 text-center md:py-1">
            <div className="flex items-center justify-center gap-1.5 font-display text-[36px] font-normal leading-none text-navy sm:text-[42px]">
              <CountUp value={stat.value} suffix={stat.suffix} />
              {stat.verified && <BadgeCheck size={18} className="text-terracotta" />}
            </div>
            <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.18em] text-terracotta">{stat.label}</p>
            <p className="mx-auto mt-2 max-w-[260px] text-xs leading-5 text-muted">{stat.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
