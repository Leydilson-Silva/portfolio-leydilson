"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Dock from "@/components/layout/Dock";
import Footer from "@/components/layout/Footer";

// Seções
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-neutral-950 selection:bg-emerald-500 selection:text-white dark:selection:bg-[#00FF00] dark:selection:text-black">
        <main className="relative z-0">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
        
        {/* Dock de Navegação (Flutuante) */}
        <Dock />
      </div>
    </LanguageProvider>
  );
}