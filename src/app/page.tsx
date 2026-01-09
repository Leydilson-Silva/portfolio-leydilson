import { LanguageProvider } from "@/context/LanguageContext";
import Dock from "@/components/layout/Dock";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

// Importações para a automação
import { projectsData } from "@/data/projects";
import { getProjectImages } from "@/lib/getImages";

export default function HomePage() {
  
  // --- AUTOMAÇÃO DE IMAGENS ---
  // Mapeamos os projetos e injetamos as imagens automaticamente
  const projectsWithImages = projectsData.map((project) => ({
    ...project,
    images: getProjectImages(project.folder), // Chama nossa função mágica
  }));

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-neutral-950 selection:bg-emerald-500 selection:text-white dark:selection:bg-[#00FF00] dark:selection:text-black">
        <main className="relative z-0">
          <Hero />
          <About />
          
          {/* Passamos os dados processados para o componente */}
          <Projects data={projectsWithImages} />
          
          <Contact />
          <Footer />
        </main>
        <Dock />
      </div>
    </LanguageProvider>
  );
}