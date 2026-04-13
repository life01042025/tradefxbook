import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../hooks/useCountUp";

function StatBox({
  label,
  value,
  target,
  isDecimal,
  prefix,
  suffix,
  enabled,
}: {
  label: string;
  value?: string;
  target: number;
  isDecimal?: boolean;
  prefix?: string;
  suffix?: string;
  enabled: boolean;
}) {
  const count = useCountUp(target, 2200, enabled);
  const display = isDecimal
    ? `${prefix ?? ""}${count.toFixed(1)}${suffix ?? ""}`
    : `${prefix ?? ""}${count.toLocaleString()}${suffix ?? ""}`;

  return (
    <div
      className="text-center px-4 py-3 rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm"
      data-ocid={`hero-stat-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="stat-number text-2xl md:text-3xl text-primary mb-0.5">
        {value ?? display}
      </div>
      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

const AVATARS = [
  { initials: "AK", color: "#00ff88" },
  { initials: "MR", color: "#00d4ff" },
  { initials: "JS", color: "#7c3aed" },
  { initials: "TL", color: "#f59e0b" },
  { initials: "PN", color: "#ef4444" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [tradersCount] = useState(12400);
  const [tradesCount] = useState(847000);
  const [pnlCount] = useState(2.4);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const tradersVal = useCountUp(tradersCount, 2200, inView);
  const tradesVal = useCountUp(tradesCount, 2400, inView);
  const pnlVal = useCountUp(pnlCount * 10, 2000, inView);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Animated background orbs */}
      <div
        className="orb orb-green w-[700px] h-[700px] animate-float-slow"
        style={{ top: "-180px", left: "-100px", opacity: 0.25 }}
      />
      <div
        className="orb orb-blue w-[500px] h-[500px] animate-float-reverse"
        style={{ bottom: "-80px", right: "-120px", opacity: 0.2 }}
      />
      <div
        className="orb orb-purple w-[400px] h-[400px] animate-float"
        style={{
          top: "50%",
          left: "55%",
          transform: "translate(-50%,-50%)",
          opacity: 0.12,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="scroll-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6"
            data-ocid="hero-badge"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Forex Trading Journal SaaS
          </div>

          {/* Headline */}
          <h1
            className="scroll-reveal delay-100 font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            <span className="text-foreground">The Trading Journal</span>
            <br />
            <span className="gradient-text">That Works For You</span>
          </h1>

          {/* Subheadline */}
          <p className="scroll-reveal delay-200 text-xl md:text-2xl font-semibold text-muted-foreground mb-4 tracking-tight">
            Track Trades. <span className="text-foreground">Analyze PnL.</span>{" "}
            Master Markets.
          </p>

          {/* Description */}
          <p className="scroll-reveal delay-300 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Sync your trades, journal every setup, backtest ideas, and let AI do
            the analysis — all in one powerful command center.
          </p>

          {/* CTA Buttons */}
          <div
            className="scroll-reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            data-ocid="hero-cta-group"
          >
            <button
              type="button"
              data-ocid="hero-cta-primary"
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-neon px-8 py-4 rounded-xl text-base font-bold animate-pulse-glow"
            >
              Get Started Free
            </button>
            <button
              type="button"
              data-ocid="hero-cta-secondary"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-neon-outline px-8 py-4 rounded-xl text-base font-semibold"
            >
              View Demo →
            </button>
          </div>

          {/* Social proof row */}
          <div className="scroll-reveal delay-400 flex items-center justify-center gap-3 mb-12">
            <div className="flex -space-x-2">
              {AVATARS.map((a) => (
                <div
                  key={a.initials}
                  className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold"
                  style={{
                    background: `${a.color}22`,
                    color: a.color,
                    borderColor: `${a.color}40`,
                  }}
                  aria-label={`User ${a.initials}`}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">
                Join 12,400+
              </span>{" "}
              top traders
            </span>
          </div>

          {/* Animated Stats Row */}
          <div
            className="scroll-reveal delay-400 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
            data-ocid="hero-stats"
          >
            <StatBox
              label="Traders"
              target={tradersCount}
              prefix="+"
              enabled={inView}
              value={inView ? `+${tradersVal.toLocaleString()}` : "+0"}
            />
            <StatBox
              label="Trades Logged"
              target={tradesCount}
              prefix="+"
              enabled={inView}
              value={inView ? `+${tradesVal.toLocaleString()}` : "+0"}
            />
            <StatBox
              label="PnL Tracked"
              target={pnlCount * 10}
              isDecimal
              prefix="+$"
              suffix="M"
              enabled={inView}
              value={inView ? `+$${(pnlVal / 10).toFixed(1)}M` : "+$0.0M"}
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--bg-primary))",
        }}
      />
    </section>
  );
}
