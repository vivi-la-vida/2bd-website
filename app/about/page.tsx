import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
export const metadata: Metadata = { title: "Our Story" };
export default function AboutPage() {
  return (
    <main id="main-content" className="dedicated-page">
      <h1 className="sr-only">Our Story</h1>
      <AboutSection />
    </main>
  );
}
