"use client";

import { ElementType, useState } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Home,
  User,
  Code,
  Languages,
  MoreVertical,
  X
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/context/LanguageContext";

// --- Sub-componente DockItem (CORRIGIDO) ---
const DockItem = ({
  href,
  tooltip,
  Icon,
  target,
  onClick,
  className = ""
}: {
  href?: string;
  tooltip: string;
  Icon: ElementType;
  target?: string;
  onClick?: () => void;
  className?: string;
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
      <span className="hidden md:group-hover:block absolute bottom-full mb-3 px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-800 rounded-lg shadow-xl whitespace-nowrap border border-neutral-700 dark:border-neutral-700 pointer-events-none">
        {tooltip}
      </span>
    </>
  );

  const baseClass = `group relative flex justify-center p-2 ${className}`;

  // LÓGICA CORRIGIDA:
  // 1. Se tiver href, É UM LINK (mesmo que tenha onClick)
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={baseClass}
        onClick={onClick} // Agora o link também executa o clique (fecha o menu)
      >
        {content}
      </a>
    );
  }

  // 2. Se não tiver href, mas tiver onClick, É UM BOTÃO
  if (onClick) {
    return (
      <button onClick={onClick} className={baseClass}>
        {content}
      </button>
    );
  }

  // Fallback (apenas visual)
  return <div className={baseClass}>{content}</div>;
};

// --- Componente Principal (Sem alterações na lógica, apenas no uso) ---
const Dock = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { href: "#hero", tooltip: t.nav.home, Icon: Home },
    { href: "#about", tooltip: t.nav.about, Icon: User },
    { href: "#projects", tooltip: t.nav.projects, Icon: Code },
    { href: "#contact", tooltip: t.nav.contact, Icon: Mail },
  ];

  const socialLinks = [
    { href: "https://github.com/Leydilson-Silva", tooltip: t.nav.github, Icon: Github },
    { href: "https://www.linkedin.com/in/leydilson", tooltip: "LinkedIn", Icon: Linkedin }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto px-4 max-w-full">
      
      {/* --- MENU MOBILE --- */}
      {isMenuOpen && (
        <div className="absolute bottom-full mb-4 right-0 flex flex-col gap-2 p-2 bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 z-50">
           
           {/* Redes Sociais no Mobile: Agora funcionam como Link E fecham o menu */}
           {socialLinks.map((link) => (
             <DockItem 
                key={link.tooltip} 
                {...link} 
                target="_blank" 
                onClick={() => setIsMenuOpen(false)} 
             />
           ))}

           <div className="h-px w-full bg-neutral-800 my-1"></div>

           <DockItem 
              onClick={() => { toggleLang(); setIsMenuOpen(false); }}
              tooltip={t.nav.lang}
              Icon={Languages}
            />
            <button
              onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
              className="group relative flex justify-center p-2"
            >
              {theme === "dark" ? (
                <Moon className="h-7 w-7 text-neutral-400 group-hover:text-[#00FF00]" />
              ) : (
                <Sun className="h-7 w-7 text-neutral-400 group-hover:text-emerald-600" />
              )}
            </button>
        </div>
      )}

      {/* --- BARRA PRINCIPAL --- */}
      <div className="flex items-center gap-1 md:gap-2 bg-neutral-950/80 dark:bg-neutral-950/90 backdrop-blur-xl border border-neutral-800/60 dark:border-neutral-800 rounded-full px-4 py-3 md:px-6 shadow-2xl transition-all duration-500 overflow-x-auto md:overflow-visible no-scrollbar">
        
        {navItems.map((item) => (
          <DockItem key={item.tooltip} {...item} />
        ))}
        
        <div className="w-px h-6 bg-neutral-700/40 mx-1 md:mx-2"></div>
        
        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-1">
            {socialLinks.map((link) => (
                <DockItem key={link.tooltip} {...link} target="_blank" />
            ))}
            <div className="w-px h-4 bg-neutral-700/40 mx-1"></div>
            <DockItem onClick={toggleLang} tooltip={t.nav.lang} Icon={Languages} />
            <button
              onClick={toggleTheme}
              className="group relative flex justify-center p-2"
            >
              {theme === "dark" ? (
                <Moon className="h-7 w-7 text-neutral-400 transition-all duration-300 group-hover:scale-110 group-hover:text-[#00FF00] group-hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]" />
              ) : (
                <Sun className="h-7 w-7 text-neutral-400 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-600" />
              )}
              <span className="absolute bottom-full mb-3 hidden group-hover:block px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-800 rounded-lg shadow-xl whitespace-nowrap border border-neutral-700 pointer-events-none">
                {theme === "light" ? "Modo Escuro" : "Modo Claro"}
              </span>
            </button>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="flex md:hidden relative ml-1">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-neutral-400 hover:text-white transition-colors"
            >
                {isMenuOpen ? <X className="h-6 w-6" /> : <MoreVertical className="h-6 w-6" />}
            </button>
        </div>

      </div>
    </div>
  );
};

export default Dock;