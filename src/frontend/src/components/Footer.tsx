import { Linkedin, MessageCircle, Twitter } from "lucide-react";

const footerLinks: Record<string, string[]> = {
  Product: ["Features", "Pricing", "Dashboard"],
  Company: ["About", "Blog", "Careers"],
  Support: ["Help Center", "Contact", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookies"],
};

const socialLinks = [
  { Icon: Twitter, label: "Twitter / X", href: "https://twitter.com" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: MessageCircle, label: "Discord", href: "https://discord.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-card/20 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="text-primary text-xs font-black">FX</span>
              </div>
              <span className="font-bold text-lg text-foreground tracking-tight">
                Trade<span className="text-primary">FX</span>Book
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-5 max-w-[180px]">
              The premium trading journal for serious forex traders worldwide.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-border/40 bg-muted/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  data-ocid={`social-${label.toLowerCase().replace(/\s+\/\s+|\s+/g, "-")}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-foreground mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                      data-ocid={`footer-link-${link.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} TradeFXBook. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
