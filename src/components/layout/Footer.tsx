"use client";

import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative bg-neutral-950 pt-20 pb-10 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 h-full min-h-[60px]">
          <div className="hidden md:flex justify-between items-end h-full text-neutral-500 dark:text-neutral-600 text-sm font-medium">
              <p>&copy; 2026 José Leydilson.</p>
              <p>{t.footer.rights}</p>
          </div>
          <div className="md:hidden text-center text-neutral-600 text-xs mt-8">
              <p>&copy; 2026 José Leydilson.</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;