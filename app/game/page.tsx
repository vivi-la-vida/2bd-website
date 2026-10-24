import type { Metadata } from "next";
import GameSection from "@/components/sections/GameSection";
export const metadata: Metadata = { title: "The Game" };
export default function GamePage() {
  return (
    <main id="main-content" className="dedicated-page">
      <h1 className="sr-only">The Game</h1>
      <GameSection />
    </main>
  );
}
