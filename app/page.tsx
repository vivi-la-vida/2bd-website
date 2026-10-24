import HeroSection from "@/components/sections/HeroSection";
import GameSection from "@/components/sections/GameSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <GameSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
