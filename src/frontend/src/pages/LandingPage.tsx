import ContactSection from "../components/ContactSection";
import DashboardPreviewSection from "../components/DashboardPreviewSection";
import FAQSection from "../components/FAQSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import StatsBar from "../components/StatsBar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DashboardPreviewSection />
      <FeaturesSection />
      <StatsBar />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
