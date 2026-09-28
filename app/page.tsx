import CategoriesSection from "./components/categories-section";
import CallToActionSection from "./components/call-to-action-section";
import HeroSection from "./components/hero-section";
import PopularToolsSection from "./components/popular-tools-section";
import SiteFooter from "./components/site-footer";
import StatsSection from "./components/stats-section";
import WhySection from "./components/why-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#030164]">
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <PopularToolsSection />
      <WhySection />
      <CallToActionSection />
      <SiteFooter />
    </main>
  );
}