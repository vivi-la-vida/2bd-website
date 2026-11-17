import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/ui/MotionProvider";
import "./globals.css";
import "./navigation.css";

const sans = localFont({
  src: "../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "100 1000",
});
const serif = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-italic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
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
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
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
