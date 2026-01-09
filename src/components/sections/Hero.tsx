"use client";

import Image from "next/image";
import { FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="relative bg-neutral-950 text-white min-h-screen flex items-center overflow-hidden pt-20 pb-32"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white mb-6">
              {t.hero.greeting} <br className="hidden md:block" />
              <span className="text-white">J. Leydilson</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed mb-8">
              {t.hero.role}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                  href="/download/curriculo-jose-leydilson.pdf" 
                  download 
                  className="flex items-center justify-center gap-2 border-2 border-neutral-700 dark:border-neutral-700 text-neutral-300 dark:text-neutral-300 hover:border-emerald-500 dark:hover:border-[#00FF00] hover:text-emerald-600 dark:hover:text-[#00FF00] font-bold py-3 px-8 rounded-full transition-all hover:-translate-y-1"
              >
                  <FileText size={20} />
                  {t.hero.btnCv}
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-emerald-500/10 dark:bg-[#00FF00]/10 rounded-full blur-3xl animate-pulse transition-colors duration-500"></div>
              {/* Imagem Light */}
              <div className="relative w-full h-full block dark:hidden">
                  <Image
                    src="/profile/profile.png"
                    alt="Foto de José Leydilson (Light)"
                    width={400}
                    height={400}
                    className="rounded-full object-cover border-4 border-neutral-200 shadow-2xl"
                    priority
                  />
              </div>
              {/* Imagem Dark */}
              <div className="relative w-full h-full hidden dark:block">
                  <Image
                    src="/profile/dark-profile.png"
                    alt="Foto de José Leydilson (Dark)"
                    width={400}
                    height={400}
                    className="rounded-full object-cover border-4 border-neutral-800 shadow-[0_0_30px_rgba(0,255,0,0.2)]"
                    priority
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Onda Invertida (Bottom) */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-20 rotate-180">
        <svg
          className="relative block w-full h-[120px] md:h-[180px] fill-neutral-50 dark:fill-neutral-900 transition-colors duration-500 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;