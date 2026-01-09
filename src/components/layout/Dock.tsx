"use client";

import { ElementType } from "react";
import {
  Moon,
  Sun,
  Github,
  Mail,
  Home,
  User,
  Code,
  Languages
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme"; // Importando o hook que criamos
import { useLanguage } from "@/context/LanguageContext"; // Importando o contexto

// Sub-componente interno (pode ficar no mesmo arquivo pois só a Dock usa)
const DockItem = ({
  href,
  tooltip,
  Icon,
  target,
  onClick
}: {
  href?: string;
  tooltip: string;
  Icon: ElementType;
  target?: string;
  onClick?: () => void;
}) => {
  const content = (
    <>
      <Icon 
        className="h-7 w-7 transition-all duration-300 ease-in-out 
        text-neutral-400 
        group-hover:scale-125 
        group-hover:text-emerald-600 
        dark:text-neutral-500
        dark:group-hover:text-[#00FF00] dark:group-hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]" 
      />
      <span className="absolute bottom-full mb-3 hidden group-hover:block px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-800 rounded-lg shadow-xl whitespace-nowrap border border-neutral-700 dark:border-neutral-700">
        {tooltip}
      </span>
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="group relative flex justify-center p-2">
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="group relative flex justify-center p-2"
    >
      {content}
    </a>
  );
};

// Componente Principal
const Dock = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  
  const navItems = [
    { href: "#hero", tooltip: t.nav.home, Icon: Home },
    { href: "#about", tooltip: t.nav.about, Icon: User },
    { href: "#projects", tooltip: t.nav.projects, Icon: Code },
    { href: "#contact", tooltip: t.nav.contact, Icon: Mail },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto">
      <div className="flex items-center gap-2 bg-neutral-950/80 dark:bg-neutral-950/90 backdrop-blur-xl border border-neutral-800/60 dark:border-neutral-800 rounded-full px-6 py-3 shadow-2xl transition-all duration-500">
        
        {navItems.map((item) => (
          <DockItem key={item.tooltip} {...item} />
        ))}
        
        {/* Divisória Vertical */}
        <div className="w-px h-6 bg-neutral-700/40 mx-2"></div>
        
        {/* GitHub */}
        <DockItem
          href="https://github.com/Leydilson-Silva/portfolio-leydilson"
          target="_blank"
          tooltip={t.nav.github}
          Icon={Github}
        />
        
        {/* Botão de Idioma */}
        <DockItem 
          onClick={toggleLang}
          tooltip={t.nav.lang}
          Icon={Languages}
        />

        {/* Botão de Tema */}
        <button
          onClick={toggleTheme}
          aria-label={t.nav.theme}
          className="group relative flex justify-center p-2"
        >
          {theme === "dark" ? (
            <Moon className="h-7 w-7 text-neutral-400 transition-all duration-300 group-hover:scale-110 group-hover:text-[#00FF00] group-hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]" />
          ) : (
            <Sun className="h-7 w-7 text-neutral-400 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-600" />
          )}
          
          <span className="absolute bottom-full mb-3 hidden group-hover:block px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-800 rounded-lg shadow-xl whitespace-nowrap border border-neutral-700">
            {theme === "light" ? "Modo Escuro" : "Modo Claro"}
          </span>
        </button>

      </div>
    </div>
  );
};

export default Dock;