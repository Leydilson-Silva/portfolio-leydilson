"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// --- DICIONÁRIO DE TRADUÇÕES ---
const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      github: "GitHub",
      theme: "Alternar Tema",
      lang: "Mudar para Inglês"
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
      lang: "Switch to Portuguese"
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

// Tipagem básica para facilitar o uso no TypeScript
type LanguageContextType = {
  lang: "pt" | "en";
  toggleLang: () => void;
  t: typeof translations["pt"];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
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

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};