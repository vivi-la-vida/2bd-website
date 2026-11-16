import type { Metadata } from "next";
import TeamSection from "@/components/sections/TeamSection";
export const metadata: Metadata = { title: "About" };
export default function AboutPage() {
  return (
    <main id="main-content" className="dedicated-page">
      <h1 className="sr-only">About 2BD Studios</h1>
      <TeamSection />
    </main>
  );
}
