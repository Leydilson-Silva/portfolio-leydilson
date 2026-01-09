"use client";

import { Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="relative bg-neutral-50 dark:bg-neutral-900 pt-20 pb-40 text-center transition-colors duration-500 ease-in-out">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
          {t.contact.title}
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
          {t.contact.text}
        </p>
        
        <a
          href="mailto:Leydilson@gmail.com"
          className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 hover:-translate-y-1 dark:bg-[#00FF00] dark:text-black dark:shadow-[0_0_15px_rgba(0,255,0,0.4)] dark:hover:bg-[#33ff33] dark:hover:shadow-[0_0_30px_rgba(0,255,0,0.6)]"
        >
          <Mail size={20} /> {t.contact.btn}
        </a>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 -mt-[2px]">
         <svg
          className="relative block w-full h-[100px] sm:h-[150px] fill-neutral-950 transition-colors duration-500"
          style={{ transform: "rotate(180deg)" }} 
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

export default Contact;
