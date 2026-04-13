import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is TradeFXBook?",
    a: "TradeFXBook is a professional trading journal and analytics platform. It helps traders track trades, analyze performance, and improve their strategy with AI-powered insights.",
  },
  {
    q: "How does MT5 sync work?",
    a: "You connect your broker account using a read-only investor password. We cannot place or modify trades — we only read your trade history for analysis.",
  },
  {
    q: "What do AI reports tell me?",
    a: "AI analyzes your trades to identify patterns, best trading times, winning/losing setups, psychological biases, and gives you prioritized recommendations to improve your edge.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use AES-256 encryption for all stored data. Your broker credentials are encrypted at rest and we only accept read-only investor passwords — we can never touch your funds.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes! Our free plan allows up to 15 trades per month with manual entry and basic analytics. No credit card required to get started.",
  },
  {
    q: "What markets are supported?",
    a: "We support Forex (all major, minor, and exotic pairs), Indices, Commodities, Crypto, and Stocks — any instrument available on MT4/MT5.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about TradeFXBook.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className={`scroll-reveal delay-${(i % 4) * 100} rounded-xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-primary/40 bg-card"
                    : "border-border/40 bg-card/40 hover:border-border/70"
                }`}
                data-ocid={`faq-item-${i}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground text-sm md:text-base leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>

                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                    opacity: isOpen ? 1 : 0,
                    transition:
                      "max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
                  }}
                >
                  <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
