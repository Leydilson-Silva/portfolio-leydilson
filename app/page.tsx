"use client";

import { useState, useEffect, ElementType } from "react";
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
} from "lucide-react";

// Hook para gerenciamento de tema
const useTheme = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);
  return { theme, toggleTheme };
};

// --- COMPONENTES DA UI ---

const DockItem = ({
  href,
  tooltip,
  Icon,
  target,
}: {
  href: string;
  tooltip: string;
  Icon: ElementType;
  target?: string;
}) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    className="group relative flex justify-center"
  >
    <Icon className="text-slate-300 h-8 w-8 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:text-emerald-500" />
    <span className="absolute bottom-full mb-2 hidden group-hover:block px-3 py-1.5 text-xs font-medium text-white bg-slate-800 rounded-md shadow-lg">
      {tooltip}
    </span>
  </a>
);

const DockNavigation = () => {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { href: "#hero", tooltip: "Início", Icon: Home },
    { href: "#about", tooltip: "Sobre", Icon: User },
    { href: "#projects", tooltip: "Projetos", Icon: Code },
    { href: "#contact", tooltip: "Contato", Icon: Mail },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-slate-950/70 backdrop-blur-lg border border-slate-800/50 rounded-2xl px-4 py-3 shadow-2xl">
        {navItems.map((item) => (
          <DockItem key={item.tooltip} {...item} />
        ))}
        <div className="w-px h-6 bg-slate-700/50 mx-2"></div>
        <DockItem
          href="https://github.com/Leydilson-Silva/portfolio-leydilson"
          target="_blank"
          tooltip="GitHub"
          Icon={Github}
        />
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="group relative flex justify-center"
        >
          {theme === "light" ? (
            <Moon className="text-slate-300 h-7 w-7 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:text-emerald-500" />
          ) : (
            <Sun className="text-slate-300 h-7 w-7 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:text-emerald-500" />
          )}
          <span className="absolute bottom-full mb-2 hidden group-hover:block px-3 py-1.5 text-xs font-medium text-white bg-slate-800 rounded-md shadow-lg">
            {theme === "light" ? "Modo Escuro" : "Modo Claro"}
          </span>
        </button>
      </div>
    </div>
  );
};

// --- SEÇÕES DA PÁGINA ---

const HeroSection = () => (
  <section
    id="hero"
    className="relative bg-slate-950 text-white min-h-screen flex items-center overflow-hidden"
  >
    <div className="container mx-auto px-6 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 flex flex-col items-center md:items-start z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Olá, sou J. Leydilson.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-xl">
            Desenvolvedor Full Stack & Estudante de Ciência de Dados.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/profile.png"
              alt="Foto de José Leydilson"
              width={384}
              height={384}
              className="rounded-full object-cover border-4 border-slate-700 shadow-[0_0_30px_rgba(100,116,139,0.2)]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    <div
      className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0]"
      style={{ transform: "rotate(180deg)" }}
    >
      <svg
        className="relative block w-full h-[100px] sm:h-[150px] fill-slate-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-slate-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Sobre Mim
      </h2>

      <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
        Minha jornada não começou no navegador, mas na lógica estruturada com{" "}
        <strong className="text-emerald-600 dark:text-emerald-400 font-medium">
          C
        </strong>
        . Essa base me ensinou a pensar em eficiência antes mesmo de escrever
        minha primeira linha de CSS.
      </p>

      <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
        Hoje, trago essa disciplina para o Full Stack. Tenho experiência prática
        construindo aplicações reais sob{" "}
        <span className="text-slate-900 dark:text-slate-200 font-medium">
          mentoria direta de engenheiros seniores
        </span>
        , o que acelerou meu domínio sobre arquitetura e boas práticas.
      </p>

      <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
        Como estudante de{" "}
        <strong className="text-emerald-600 dark:text-emerald-400 font-medium">
          Ciência de Dados
        </strong>
        , meu objetivo é ir além do código funcional: quero criar interfaces
        inteligentes que conectem dados complexos a uma experiência de usuário
        fluida.
      </p>
    </div>
  </section>
);

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  deployUrl?: string;
  tags: string[];
};
const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 overflow-hidden flex flex-col">
    <div className="relative h-48">
      <Image
        src={project.imageUrl}
        alt={project.title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="font-bold text-xl text-slate-900">{project.title}</h3>
      <div className="flex-grow">
        <p className="mt-2 text-slate-600 text-sm">{project.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-600 hover:text-emerald-500 transition-colors font-medium"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
        {project.deployUrl && (
          <a
            href={project.deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 hover:text-emerald-500 transition-colors font-medium"
          >
            <ArrowUpRight size={18} />
            <span>Deploy</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Projeto de E-commerce",
      description:
        "Plataforma completa de vendas online com carrinho, checkout e painel de admin.",
      imageUrl: "/placeholder-ecommerce.svg",
      githubUrl: "#",
      deployUrl: "#",
      tags: ["Next.js", "TypeScript", "Stripe"],
    },
    {
      title: "Dashboard de Análise de Dados",
      description:
        "Visualização de dados interativa com gráficos e métricas em tempo real.",
      imageUrl: "/placeholder-dashboard.svg",
      githubUrl: "#",
      tags: ["React", "D3.js", "Python"],
    },
    {
      title: "Landing Page Responsiva",
      description:
        "Página de captura de leads com design moderno e foco em conversão.",
      imageUrl: "/placeholder-landing.svg",
      githubUrl: "#",
      deployUrl: "#",
      tags: ["HTML", "Tailwind CSS", "Vercel"],
    },
  ];
  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          Meus Projetos
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="bg-slate-50 text-center pt-20 pb-28">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-slate-900">Vamos Conversar?</h2>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
        Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à
        vontade para entrar em contato.
      </p>
      <a
        href="mailto:seu-email@example.com"
        className="mt-8 inline-flex items-center gap-3 bg-emerald-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-emerald-600 hover:scale-105 shadow-lg shadow-emerald-500/30"
      >
        <Mail size={20} /> Enviar um E-mail
      </a>
    </div>

    <div
      className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0]"
      style={{ transform: "rotate(180deg)" }}
    >
      <svg
        className="relative block w-full h-[100px] sm:h-[150px] fill-slate-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
    </div>
  </section>
);

const Footer = () => (
  <footer className="relative bg-slate-950 text-slate-400 pt-40 pb-10 overflow-hidden">
    {/* Onda de transição no topo do footer */}
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
      <svg
        className="relative block w-full h-25 sm:h-37.5 fill-slate-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
    </div>

    {/* Textos de Copyright */}
    <div className="absolute bottom-8 left-8 text-slate-500 text-sm hidden md:block">
      <p>&copy; 2026 José Leydilson.</p>
    </div>
    <div className="absolute bottom-8 right-8 text-slate-500 text-sm hidden md:block">
      <p>Todos os direitos reservados.</p>
    </div>
    <div className="absolute bottom-24 w-full text-center text-slate-500 text-sm block md:hidden">
      <p>&copy; 2026 José Leydilson. Todos os direitos reservados.</p>
    </div>
  </footer>
);

// --- MAIN PAGE ---

export default function HomePage() {
  return (
    <div className="bg-slate-950">
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
      <DockNavigation />
    </div>
  );
}
