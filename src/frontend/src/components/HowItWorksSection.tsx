import { BookMarked, Link2, Sparkles } from "lucide-react";
import { useRef } from "react";
import {
  useScrollReveal,
  useScrollRevealGroup,
} from "../hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect",
    headline: "Link Your Broker",
    description:
      "Link your MT4/MT5 broker account with read-only investor password. Zero risk.",
    color: "from-primary/20 to-primary/5",
    glow: "rgba(0,255,136,0.15)",
  },
  {
    number: "02",
    icon: BookMarked,
    title: "Track",
    headline: "Auto-Sync Trades",
    description:
      "Your trades sync automatically every minute. Add journal notes and strategy tags.",
    color: "from-blue-500/20 to-blue-500/5",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Improve",
    headline: "AI-Driven Insights",
    description:
      "AI analyzes your performance patterns and gives actionable recommendations.",
    color: "from-purple-500/20 to-purple-500/5",
    glow: "rgba(168,85,247,0.15)",
  },
] as const;

const DELAY_CLASSES = ["delay-100", "delay-200", "delay-300"] as const;

export default function HowItWorksSection() {
  const headerRef = useScrollReveal();
  const stepRefs = useScrollRevealGroup(steps.length);
  const connectorRef = useRef<HTMLDivElement>(null);

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-section-gradient pointer-events-none" />
      <div className="orb orb-green w-[600px] h-[400px] bottom-0 right-0 translate-x-1/2 opacity-6 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="scroll-reveal text-center mb-20"
          data-ocid="how-it-works-header"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Simple Onboarding
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
            Get Started in <span className="gradient-text">Minutes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            No complex setup. No IT knowledge required. From broker connection
            to your first AI insight in under 5 minutes.
          </p>
        </div>

        {/* Steps layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop connector line */}
          <div
            ref={connectorRef}
            className="hidden lg:block absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px"
            aria-hidden="true"
          >
            <div className="w-full h-full bg-gradient-to-r from-primary/60 via-blue-500/40 to-purple-500/60" />
            {/* Animated dots on the line */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
            <div
              className="absolute top-1/2 left-3/4 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500/60 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className={`scroll-reveal ${DELAY_CLASSES[i]} relative flex flex-col items-center text-center group`}
                  data-ocid={`step-${i + 1}`}
                >
                  {/* Mobile connector arrow */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 text-primary/40 text-xl font-bold z-10">
                      ↓
                    </div>
                  )}

                  {/* Step number badge + icon container */}
                  <div className="relative mb-6">
                    {/* Outer glow ring */}
                    <div
                      className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                      style={{ background: step.glow }}
                    />
                    {/* Icon circle */}
                    <div
                      className={`relative w-[104px] h-[104px] rounded-full bg-gradient-to-br ${step.color} border border-border/40 group-hover:border-primary/30 flex items-center justify-center transition-all duration-300 group-hover:scale-105`}
                    >
                      <Icon
                        className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </div>
                    {/* Step number chip */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_12px_rgba(0,255,136,0.4)]">
                      <span className="text-primary font-black text-[11px] leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col gap-2 max-w-[280px]">
                    <div className="text-xs font-bold text-primary tracking-[0.15em] uppercase">
                      Step {step.number} — {step.title}
                    </div>
                    <h3 className="text-xl font-black text-foreground leading-tight">
                      {step.headline}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Card background (subtle) */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 border border-primary/10 bg-primary/3" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA row */}
        <div className="scroll-reveal delay-400 text-center mt-16">
          <button
            type="button"
            data-ocid="how-it-works-cta"
            onClick={() => {
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-neon px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 shadow-[0_0_30px_rgba(0,255,136,0.25)]"
          >
            Start for Free
            <span className="text-lg">→</span>
          </button>
          <p className="text-xs text-muted-foreground mt-3 font-medium">
            No credit card required · 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
}
