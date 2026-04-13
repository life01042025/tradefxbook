import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../hooks/useCountUp";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface StatConfig {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  decimals?: number;
}

const stats: StatConfig[] = [
  { value: 12400, suffix: "+", prefix: "", label: "Active Traders" },
  { value: 847, suffix: "K+", prefix: "", label: "Trades Analyzed" },
  { value: 678, suffix: "%", prefix: "", label: "Avg Win Rate", decimals: 1 },
  { value: 49, suffix: "★", prefix: "", label: "Rating", decimals: 1 },
];

function StatItem({ stat, enabled }: { stat: StatConfig; enabled: boolean }) {
  const raw = useCountUp(stat.value, 2200, enabled);

  const formatted =
    stat.decimals === 1 ? (raw / 10).toFixed(1) : raw.toLocaleString();

  return (
    <div
      className="flex flex-col items-center gap-1 group"
      data-ocid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div
        className="stat-number text-5xl md:text-6xl gradient-text select-none transition-all duration-300 group-hover:scale-105"
        aria-label={`${formatted}${stat.suffix} ${stat.label}`}
      >
        {stat.prefix}
        {formatted}
        {stat.suffix}
      </div>
      <div className="text-sm md:text-base font-semibold text-foreground/80 tracking-wide mt-1">
        {stat.label}
      </div>
      <div className="w-8 h-0.5 bg-primary/40 rounded-full mt-1 transition-all duration-300 group-hover:w-16 group-hover:bg-primary/80" />
    </div>
  );
}

export default function StatsBar() {
  const sectionRef = useScrollReveal({ threshold: 0.3 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const innerRef = useScrollReveal({ threshold: 0.3 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="scroll-reveal relative py-20 overflow-hidden"
      data-ocid="stats-bar"
    >
      {/* Dark gradient band */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      {/* Decorative orbs */}
      <div className="orb orb-green w-[400px] h-[200px] top-1/2 left-1/4 -translate-y-1/2 opacity-8 pointer-events-none" />
      <div className="orb orb-blue w-[300px] h-[200px] top-1/2 right-1/4 -translate-y-1/2 opacity-6 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Trigger element — becomes visible when stats should count */}
        <div ref={triggerRef} className="sr-only" aria-hidden="true" />

        <div
          ref={innerRef as React.RefObject<HTMLDivElement>}
          className="scroll-reveal grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} enabled={isVisible} />
          ))}
        </div>

        {/* Bottom label */}
        <p className="text-center text-xs text-muted-foreground/60 mt-10 font-medium tracking-widest uppercase">
          Trusted by professional traders worldwide
        </p>
      </div>
    </section>
  );
}
