import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow_Condensed, Cutive_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cutiveMono = Cutive_Mono({
  variable: "--font-cutive-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pulkit Bathwal | Portfolio",
  description: "Portfolio of Pulkit Bathwal - B.Tech in ECM, ML & CP Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable} ${cutiveMono.variable} antialiased text-white`}
      >

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
