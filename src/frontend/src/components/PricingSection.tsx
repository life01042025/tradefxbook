import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    annualBilled: 0,
    description: "Get started with the basics",
    features: [
      "Up to 15 trades/month",
      "Manual trade entry",
      "Basic analytics & charts",
    ],
    cta: "Get Started Free",
    featured: false,
    ctaStyle: "outline",
  },
  {
    name: "Pro",
    monthly: 29,
    annual: 24,
    annualBilled: 288,
    description: "For serious active traders",
    features: [
      "Everything in Free",
      "3 MT4/MT5 accounts",
      "Real-time sync",
      "AI-powered reports",
      "Full analytics suite",
      "Community chat",
      "Economic calendar",
    ],
    cta: "Get Started",
    featured: true,
    ctaStyle: "neon",
  },
  {
    name: "Elite",
    monthly: 59,
    annual: 49,
    annualBilled: 588,
    description: "For professional traders",
    features: [
      "Everything in Pro",
      "Unlimited MT4/MT5 accounts",
      "Backtesting engine",
      "AI news analysis",
      "Traders Lounge access",
    ],
    cta: "Get Started",
    featured: false,
    ctaStyle: "outline",
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="orb orb-green w-[600px] h-[600px] -bottom-60 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Plans for <span className="gradient-text">Every Trader</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start free, scale as you grow. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div
            className="inline-flex items-center gap-1 p-1.5 rounded-full border border-border/50 bg-muted/30"
            data-ocid="billing-toggle"
          >
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isAnnual
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-ocid="toggle-monthly"
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                isAnnual
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-ocid="toggle-yearly"
            >
              Yearly
              <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 scroll-reveal delay-${i * 100} transition-all duration-300 ${
                plan.featured
                  ? "border border-primary/40 bg-card md:scale-105 md:py-8"
                  : "border border-border/40 bg-card/60 hover:border-primary/30"
              }`}
              data-ocid={`pricing-${plan.name.toLowerCase()}`}
              style={
                plan.featured
                  ? {
                      boxShadow:
                        "0 0 0 1px rgba(0,255,136,0.3), 0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(0,255,136,0.1)",
                    }
                  : {}
              }
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold text-foreground mb-0.5">
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-black price-transition ${
                      plan.featured ? "gradient-text" : "text-foreground"
                    }`}
                  >
                    ${isAnnual ? plan.annual : plan.monthly}
                  </span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                {isAnnual && plan.annualBilled > 0 && (
                  <p className="text-xs text-primary mt-1 font-medium">
                    Billed ${plan.annualBilled}/yr
                  </p>
                )}
                {!isAnnual && plan.monthly === 0 && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Free forever
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                type="button"
                data-ocid={`pricing-cta-${plan.name.toLowerCase()}`}
                className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  plan.ctaStyle === "neon" ? "btn-neon" : "btn-neon-outline"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
