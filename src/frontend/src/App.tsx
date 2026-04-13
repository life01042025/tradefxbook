import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import LandingPage from "./pages/LandingPage";

function ScrollRevealManager() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const revealElements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale",
    );
    for (const el of revealElements) {
      revealObserver.observe(el);
    }

    return () => revealObserver.disconnect();
  }, []);

  return null;
}

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      storageKey="tradefxbook-theme"
      enableSystem={false}
    >
      <ScrollRevealManager />
      <LandingPage />
    </ThemeProvider>
  );
}
