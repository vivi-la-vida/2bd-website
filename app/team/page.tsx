import type { Metadata } from "next";
import TeamSection from "@/components/sections/TeamSection";
export const metadata: Metadata = { title: "The Team" };
export default function TeamPage() {
  return (
    <main id="main-content" className="dedicated-page">
      <h1 className="sr-only">The Team</h1>
      <TeamSection />
    </main>
  );
}
