"use client";

import { useState, useEffect, ElementType, createContext, useContext } from "react";
import Image from "next/image";
import {
  Moon,
  Sun,
  Github,
  ArrowUpRight,
  Mail,
  Home,
  User,
  Code,
  FileText,
  Languages // Ícone de tradução
} from "lucide-react";

// --- 1. DICIONÁRIO DE TRADUÇÕES ---
const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      github: "GitHub",
      theme: "Alternar Tema",
      lang: "Mudar para Inglês" // Tooltip
    },
    hero: {
      greeting: "Olá, sou",
      role: "Desenvolvedor Full Stack & Estudante de Ciência de Dados.",
      btnProjects: "Ver Projetos",
      btnCv: "Baixar CV"
    },
    about: {
      title: "Sobre Mim",
      p1_start: "Minha jornada não começou no navegador, mas na lógica estruturada com",
      p1_end: ". Essa base me ensinou a pensar em eficiência antes mesmo de escrever minha primeira linha de CSS.",
      p2_start: "Hoje, trago essa disciplina para o Full Stack. Tenho experiência prática construindo aplicações reais sob",
      p2_highlight: "mentoria direta de engenheiros seniores",
      p2_end: ", o que acelerou meu domínio sobre arquitetura e boas práticas.",
      p3_start: "Como estudante de",
      p3_highlight: "Ciência de Dados",
      p3_end: ", meu objetivo é ir além do código funcional: quero criar interfaces inteligentes que conectem dados complexos a uma experiência de usuário fluida."
    },
    projects: {
      title: "Meus Projetos",
      ecommerce: {
        title: "E-commerce Completo",
        desc: "Plataforma de vendas online com carrinho, checkout seguro via Stripe e painel administrativo."
      },
      dashboard: {
        title: "Dashboard Analítico",
        desc: "Visualização de dados interativa para análise de métricas em tempo real usando D3 e Python."
      },
      landing: {
        title: "Landing Page Otimizada",
        desc: "Página de alta conversão com animações suaves e SEO técnico avançado."
      },
      btnRepo: "Repositório",
      btnDeploy: "Deploy"
    },
    contact: {
      title: "Vamos Conversar?",
      text: "Estou disponível para novos projetos e oportunidades. Que tal marcarmos uma conversa?",
      btn: "Enviar E-mail"
    },
    footer: {
      rights: "Todos os direitos reservados."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      github: "GitHub",
      theme: "Toggle Theme",
      lang: "Switch to Portuguese" // Tooltip
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Full Stack Developer & Data Science Student.",
      btnProjects: "View Projects",
      btnCv: "Download CV"
    },
    about: {
      title: "About Me",
      p1_start: "My journey didn't start in the browser, but with structured logic in",
      p1_end: ". This foundation taught me to think about efficiency even before writing my first line of CSS.",
      p2_start: "Today, I bring this discipline to Full Stack. I have practical experience building real applications under",
      p2_highlight: "direct mentorship of senior engineers",
      p2_end: ", which accelerated my mastery of architecture and best practices.",
      p3_start: "As a",
      p3_highlight: "Data Science",
      p3_end: "student, my goal goes beyond functional code: I want to create intelligent interfaces that connect complex data to a fluid user experience."
    },
    projects: {
      title: "My Projects",
      ecommerce: {
        title: "Full E-commerce",
        desc: "Online sales platform with cart, secure checkout via Stripe, and admin panel."
      },
      dashboard: {
        title: "Analytical Dashboard",
        desc: "Interactive data visualization for real-time metrics analysis using D3 and Python."
      },
      landing: {
        title: "Optimized Landing Page",
        desc: "High-conversion page with smooth animations and advanced technical SEO."
      },
      btnRepo: "Repository",
      btnDeploy: "Live Demo"
    },
    contact: {
      title: "Let's Talk?",
      text: "I'm available for new projects and opportunities. How about we schedule a chat?",
      btn: "Send E-mail"
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};

// --- 2. CONTEXTO DE IDIOMA ---
const LanguageContext = createContext<any>(null);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  const toggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);


// --- HOOK DE TEMA (MANTIDO) ---
const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return { theme, toggleTheme };
};

// --- COMPONENTES DA UI ---

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

const DockNavigation = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage(); // Usando o hook de tradução
  
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
        
        {/* --- NOVO: Botão de Idioma --- */}
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

// --- SEÇÕES DA PÁGINA (Atualizadas com {t.xyz}) ---

const HeroSection = () => {
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
                  href="/curriculo-jose-leydilson.pdf" 
                  download 
                  className="flex items-center justify-center gap-2 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-emerald-500 dark:hover:border-[#00FF00] hover:text-emerald-600 dark:hover:text-[#00FF00] font-bold py-3 px-8 rounded-full transition-all hover:-translate-y-1"
              >
                  <FileText size={20} />
                  {t.hero.btnCv}
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-emerald-500/10 dark:bg-[#00FF00]/10 rounded-full blur-3xl animate-pulse transition-colors duration-500"></div>
              <div className="relative w-full h-full block dark:hidden">
                  <Image
                    src="/profile.png"
                    alt="Foto de José Leydilson (Light)"
                    width={400}
                    height={400}
                    className="rounded-full object-cover border-4 border-neutral-200 shadow-2xl"
                    priority
                  />
              </div>
              <div className="relative w-full h-full hidden dark:block">
                  <Image
                    src="/dark-profile.png"
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

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500 ease-in-out">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-10">
          {t.about.title}
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          <p>
            {t.about.p1_start}{" "}
            <strong className="text-emerald-600 dark:text-[#00FF00] font-bold dark:drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">C</strong>
            {t.about.p1_end}
          </p>

          <p>
            {t.about.p2_start}{" "}
            <span className="text-neutral-900 dark:text-neutral-200 font-semibold border-b-2 border-emerald-500/30 dark:border-[#00FF00]/30">
              {t.about.p2_highlight}
            </span>
            {t.about.p2_end}
          </p>

          <p>
            {t.about.p3_start}{" "}
            <strong className="text-emerald-600 dark:text-[#00FF00] font-bold dark:drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">
              {t.about.p3_highlight}
            </strong>
            {t.about.p3_end}
          </p>
        </div>
      </div>
    </section>
  );
};

type Project = {
  title: string;
  description: string;
  tags: string[];
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  
  // Como os dados dos projetos mudam com o idioma, eles devem estar dentro do componente
  const projects = [
    {
      title: t.projects.ecommerce.title,
      description: t.projects.ecommerce.desc,
      githubUrl: "#",
      deployUrl: "#",
      tags: ["Next.js", "TypeScript", "Stripe"],
    },
    {
      title: t.projects.dashboard.title,
      description: t.projects.dashboard.desc,
      githubUrl: "#",
      tags: ["React", "Python", "Data Viz"],
    },
    {
      title: t.projects.landing.title,
      description: t.projects.landing.desc,
      githubUrl: "#",
      deployUrl: "#",
      tags: ["Tailwind", "SEO", "Performance"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500 ease-in-out">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-white mb-16">
          {t.projects.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} btnRepo={t.projects.btnRepo} btnDeploy={t.projects.btnDeploy} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Card separado para receber props de texto
const ProjectCard = ({ project, btnRepo, btnDeploy }: { project: any, btnRepo: string, btnDeploy: string }) => (
  <div className="group bg-white dark:bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-2xl dark:hover:shadow-[#00FF00]/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
    <div className="relative h-48 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
        <Code className="text-neutral-300 dark:text-neutral-700 w-16 h-16 group-hover:scale-110 group-hover:text-emerald-500 dark:group-hover:text-[#00FF00] transition-all duration-500" />
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-[#00FF00] transition-colors">
        {project.title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 border border-transparent dark:border-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#00FF00] font-medium transition-colors">
          <Github size={18} /> {btnRepo}
        </a>
        {project.deployUrl && (
          <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#00FF00] font-medium transition-colors">
            <ArrowUpRight size={18} /> {btnDeploy}
          </a>
        )}
      </div>
    </div>
  </div>
);

const ContactSection = () => {
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

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
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

// --- MAIN PAGE ---

export default function HomePage() {
  // Envolvemos tudo no LanguageProvider
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-neutral-950 selection:bg-emerald-500 selection:text-white dark:selection:bg-[#00FF00] dark:selection:text-black">
        <main className="relative z-0">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </main>
        <DockNavigation />
      </div>
    </LanguageProvider>
  );
}