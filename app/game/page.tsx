import type { Metadata } from "next";
import GameSection from "@/components/sections/GameSection";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
export const metadata: Metadata = { title: "The Game" };
export default function GamePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <GameSection />
      <AboutSection />
    </main>
  );
}
