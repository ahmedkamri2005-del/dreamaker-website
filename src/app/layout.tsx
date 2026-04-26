import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import GlobalUIWrapper from "@/components/layout/GlobalUIWrapper";

const neueKabel = localFont({
  src: [
    { path: "../../public/fonts/myfont.woff2/NeueKabel.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/myfont.woff2/NeueKabel-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/myfont.woff2/NeueKabel-ExtraBold.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-custom",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dreamaker Productions",
  description: "A premium cinematic production company.",
  icons: {
    icon: "/favicon.svg",
  },
};

import Navbar from "@/components/layout/Navbar";
import FloatingChatbot from "@/components/FloatingChatbot";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${neueKabel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAFA]">
        <SmoothScroll>
          <GlobalUIWrapper />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
