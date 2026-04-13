import {
  BarChart2,
  BookOpen,
  Brain,
  Check,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useRef } from "react";
import { useScrollRevealGroup } from "../hooks/useScrollReveal";

const features = [
  {
    icon: BarChart2,
    title: "Strategy Backtesting",
    description:
      "Test strategies on real historical data. Pick symbol, timeframe, replay candle by candle.",
    bullets: [
      "Multi-timeframe support",
      "Real historical data",
      "Performance metrics",
    ],
  },
  {
    icon: BookOpen,
    title: "Trade Journaling",
    description:
      "Add notes, tag strategy, attach screenshots, track emotions. Every trade tells a story.",
    bullets: ["Screenshot attachments", "Emotion tracking", "Strategy tagging"],
  },
  {
    icon: TrendingUp,
    title: "Powerful Analytics",
    description:
      "Equity curves, calendar heatmaps, session breakdowns, profit factor, risk/reward — auto-calculated.",
    bullets: ["Equity curve charts", "Win rate by session", "Profit factor"],
  },
  {
    icon: Zap,
    title: "MT5 Real-Time Sync",
    description:
      "Link MT4/MT5 account, trades appear automatically. No copy-paste. Supports multiple accounts.",
    bullets: ["Auto-sync trades", "Multiple accounts", "No manual entry"],
  },
  {
    icon: Brain,
    title: "AI-Powered Reports",
    description:
      "AI reads your trades, gives full breakdown — what's working, what's not, what to focus on.",
    bullets: ["Pattern recognition", "Personalized insights", "Weekly reports"],
  },
  {
    icon: Users,
    title: "Community & Leaderboard",
    description:
      "Real-time chat, trade sharing, weekly/monthly leaderboards, Traders Lounge for mentoring.",
    bullets: ["Weekly leaderboards", "Trade sharing", "Mentoring access"],
  },
];

const DELAY_CLASSES = [
  "delay-100",
  "delay-200",
  "delay-300",
  "delay-400",
  "delay-500",
  "delay-600",
] as const;

export default function FeaturesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useScrollRevealGroup(features.length);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Subtle background accent */}
      <div className="orb orb-green w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="scroll-reveal text-center mb-16"
          data-ocid="features-header"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Platform Features
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
            Everything You Need to{" "}
            <span className="gradient-text">Master Your Trading</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Built for serious traders. Every tool designed to give you the edge
            that separates professionals from the rest.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`scroll-reveal ${DELAY_CLASSES[i]} card-glass group p-6 flex flex-col gap-4`}
                data-ocid={`feature-card-${i}`}
              >
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/25 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bullet points */}
                <ul className="mt-auto space-y-2 pt-2 border-t border-border/30">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2.5 text-sm"
                    >
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check
                          className="w-2.5 h-2.5 text-primary"
                          strokeWidth={3}
                        />
                      </span>
                      <span className="text-foreground/75">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
