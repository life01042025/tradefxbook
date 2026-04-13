import { useEffect, useRef, useState } from "react";

const TRADE_LOG = [
  {
    id: 1,
    symbol: "EUR/USD",
    direction: "LONG",
    entry: "1.08420",
    exit: "1.08730",
    pnl: "+$312.00",
  },
  {
    id: 2,
    symbol: "GBP/JPY",
    direction: "SHORT",
    entry: "185.640",
    exit: "185.120",
    pnl: "+$520.00",
  },
  {
    id: 3,
    symbol: "USD/CAD",
    direction: "LONG",
    entry: "1.35810",
    exit: "1.35490",
    pnl: "-$160.00",
  },
  {
    id: 4,
    symbol: "XAU/USD",
    direction: "LONG",
    entry: "2018.50",
    exit: "2021.80",
    pnl: "+$330.00",
  },
];

// SVG equity curve path (rising trend with realistic dips)
const EQUITY_POINTS = [
  [0, 100],
  [30, 88],
  [60, 72],
  [90, 80],
  [120, 65],
  [150, 50],
  [180, 60],
  [210, 42],
  [240, 55],
  [270, 38],
  [300, 22],
  [330, 30],
  [360, 15],
  [390, 8],
  [420, 18],
  [450, 5],
];

function EquityCurve() {
  const width = 450;
  const height = 100;
  const pts = EQUITY_POINTS.map(([x, y]) => `${x},${y}`).join(" ");
  const fillPts = `0,${height} ${pts} ${width},${height}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className="w-full h-20"
      role="img"
      aria-label="Equity curve chart showing upward trend"
    >
      <defs>
        <linearGradient id="curve-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00ff88" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={fillPts} fill="url(#curve-fill)" />
      <polyline
        points={pts}
        fill="none"
        stroke="#00ff88"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* End dot */}
      <circle
        cx={EQUITY_POINTS[EQUITY_POINTS.length - 1][0]}
        cy={EQUITY_POINTS[EQUITY_POINTS.length - 1][1]}
        r="4"
        fill="#00ff88"
      />
    </svg>
  );
}

export default function DashboardPreviewSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="dashboard-preview"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Divider top */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background orb */}
      <div
        className="orb orb-green w-[600px] h-[600px] pointer-events-none"
        style={{
          bottom: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.07,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-14 scroll-reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Live Dashboard
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Your Trading <span className="gradient-text">Command Center</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every metric you need to evaluate performance, spot patterns, and
            improve your edge.
          </p>
        </div>

        {/* Mock Dashboard Card */}
        <div
          ref={cardRef}
          className={`card-glass glow-accent max-w-4xl mx-auto scroll-reveal-scale transition-all duration-700 ${visible ? "visible" : ""}`}
          style={{
            boxShadow:
              "0 0 60px rgba(0,255,136,0.12), 0 0 120px rgba(0,255,136,0.05), 0 30px 60px rgba(0,0,0,0.4)",
          }}
          data-ocid="dashboard-card"
        >
          {/* Dashboard header row */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-border/30">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="text-primary text-xs font-bold">FX</span>
              </div>
              <span className="font-bold text-foreground text-sm">
                TradeFXBook Dashboard
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">
                Apr 13, 2026
              </span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-primary font-medium">Live</span>
            </div>
          </div>

          <div className="p-6">
            {/* Top metric cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {/* PnL Card */}
              <div
                className="rounded-xl border border-border/30 bg-background/50 p-4"
                data-ocid="dashboard-pnl"
              >
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">
                  Today's PnL
                </p>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-2xl font-black text-emerald-400">
                    +$2,847.50
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400">
                  ▲ +12.4%
                </span>
              </div>

              {/* Win Rate Card */}
              <div
                className="rounded-xl border border-border/30 bg-background/50 p-4"
                data-ocid="dashboard-winrate"
              >
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">
                  Win Rate
                </p>
                <div className="text-2xl font-black text-foreground mb-1">
                  67.8%
                </div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
                {/* Mini progress bar */}
                <div className="mt-2 h-1.5 rounded-full bg-border/30 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: visible ? "67.8%" : "0%",
                      background: "linear-gradient(90deg, #00ff88, #00d4ff)",
                    }}
                  />
                </div>
              </div>

              {/* Mini stats */}
              <div
                className="rounded-xl border border-border/30 bg-background/50 p-4"
                data-ocid="dashboard-trades"
              >
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3">
                  Trade Summary
                </p>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Trades</span>
                    <span className="font-bold text-foreground">48</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Winning</span>
                    <span className="font-bold text-emerald-400">33</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Losing</span>
                    <span className="font-bold text-red-400">15</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Equity Curve */}
            <div
              className="rounded-xl border border-border/30 bg-background/50 p-4 mb-6"
              data-ocid="dashboard-chart"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Equity Curve
                </p>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400">
                  30D
                </span>
              </div>
              <EquityCurve />
            </div>

            {/* Trade Log */}
            <div
              className="rounded-xl border border-border/30 bg-background/50 overflow-hidden"
              data-ocid="dashboard-trade-log"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/20">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Recent Trades
                </p>
                <button
                  type="button"
                  className="text-xs text-primary hover:underline font-medium"
                >
                  View All →
                </button>
              </div>
              <div className="divide-y divide-border/20">
                {TRADE_LOG.map((trade) => {
                  const isWin = trade.pnl.startsWith("+");
                  return (
                    <div
                      key={trade.id}
                      className="flex items-center justify-between px-4 py-3 hover:bg-primary/5 transition-colors duration-200"
                      data-ocid={`trade-row-${trade.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded ${
                            trade.direction === "LONG"
                              ? "bg-emerald-400/10 text-emerald-400"
                              : "bg-red-400/10 text-red-400"
                          }`}
                        >
                          {trade.direction}
                        </span>
                        <span className="text-sm font-semibold text-foreground">
                          {trade.symbol}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-xs text-muted-foreground">
                        <span>
                          {trade.entry} → {trade.exit}
                        </span>
                        <span
                          className={`font-bold text-sm min-w-[80px] text-right ${
                            isWin ? "text-emerald-400" : "text-red-400"
                          }`}
                        >
                          {trade.pnl}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
