import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import AwardsSection from "@/components/AwardsSection";
import ServicesSection from "@/components/ServicesSection";
import LocationsSection from "@/components/LocationsSection";
import CinematicJourneySection from "@/components/CinematicJourneySection";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-clip">
      <HeroSection />
      <LogoCarousel />
      <AwardsSection />
      <ServicesSection />
      <LocationsSection />
      <CinematicJourneySection />

      <AboutSection />
      <ContactSection />
    </main>
  );
}
