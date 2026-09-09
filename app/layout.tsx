import type { Metadata } from "next";
import { Manrope, Prata, IBM_Plex_Mono, Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const prata = Prata({
  subsets: ["latin"],
  variable: "--font-prata",
  weight: ["400"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Higher Frequency — Get paid for every sale you drive",
  description:
    "Server-side tracking that records every penny the instant it happens — no cookies, no gaps, no edits.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${prata.variable} ${ibmPlexMono.variable} ${spaceGrotesk.variable} ${fraunces.variable} bg-cream text-text font-body w-full overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
