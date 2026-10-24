import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/ui/MotionProvider";
import "./globals.css";

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
  title: { default: "To Be Seen — 2BD Studios", template: "%s | To Be Seen" },
  description:
    "A little lost. Never alone. A cozy, narrative-driven puzzle adventure about memory, family, and finding your way home. From 2BD Studios.",
  icons: { icon: "/favicon.svg" },
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
