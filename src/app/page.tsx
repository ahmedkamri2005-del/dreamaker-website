import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import AwardsSection from "@/components/AwardsSection";
import ServicesSection from "@/components/ServicesSection";
import LocationsSection from "@/components/LocationsSection";
import CinematicJourneySection from "@/components/CinematicJourneySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <LogoCarousel />
      <AwardsSection />
      <ServicesSection />
      <LocationsSection />
      <CinematicJourneySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
