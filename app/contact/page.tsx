import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
export const metadata: Metadata = { title: "Say Hello" };
export default function ContactPage() {
  return (
    <main id="main-content" className="dedicated-page">
      <h1 className="sr-only">Say Hello</h1>
      <ContactSection />
    </main>
  );
}
