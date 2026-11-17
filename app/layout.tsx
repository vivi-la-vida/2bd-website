import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/ui/MotionProvider";
import "./globals.css";
import "./navigation.css";
import "./design-system.css";

const sans = localFont({
  src: "../node_modules/@fontsource-variable/fredoka/files/fredoka-latin-wght-normal.woff2",
  variable: "--font-fredoka",
  display: "swap",
  weight: "300 700",
});
const headline = localFont({
  src: "../node_modules/@fontsource/mansalva/files/mansalva-latin-400-normal.woff2",
  variable: "--font-mansalva",
  display: "swap",
  weight: "400",
});
export const metadata: Metadata = {
  title: { default: "2BD Studios", template: "%s | 2BD Studios" },
  description:
    "Discover 2BD Studios, the team behind To Be Seen, a cozy narrative puzzle game between life and death.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${headline.variable}`}>
      <body>
        <MotionProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
