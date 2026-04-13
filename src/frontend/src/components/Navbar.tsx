import { Menu, Moon, Sun, TrendingUp, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  return (
    <nav
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "navbar-scrolled bg-background/80 border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
            aria-label="TradeFXBook home"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:shadow-glow-sm transition-all duration-300">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              Trade<span className="text-primary">FX</span>Book
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50"
                data-ocid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              data-ocid="theme-toggle"
              className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              data-ocid="nav-login"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Login
            </button>

            <button
              type="button"
              data-ocid="nav-get-started"
              onClick={() => scrollToSection("#pricing")}
              className="btn-neon dark:btn-neon btn-accent-light px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              data-ocid="theme-toggle-mobile"
              className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              data-ocid="mobile-menu-toggle"
              className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          data-ocid="mobile-menu"
          className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-md animate-fade-in-down"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 mt-2 border-t border-border/30 flex flex-col gap-2">
              <button
                type="button"
                className="w-full px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground border border-border/50 hover:text-foreground transition-colors duration-200"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("#pricing")}
                data-ocid="mobile-get-started"
                className="w-full btn-neon dark:btn-neon btn-accent-light px-4 py-2.5 rounded-lg text-sm font-bold"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
