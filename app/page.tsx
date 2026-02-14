"use client";

import { useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ScrollyCanvas } from "@/components/ui/ScrollyCanvas";
import { Overlay } from "@/components/ui/Overlay";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />

      {/* Scrollytelling Section - 500vh height */}
      <div ref={containerRef} className="relative h-[500vh]">
        <ScrollyCanvas containerRef={containerRef} />
        <Overlay containerRef={containerRef} />
      </div>

      {/* Content after scroll */}
      <div className="relative z-10 bg-[#121212]">
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
