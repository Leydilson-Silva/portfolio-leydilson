import { StaticImageData } from "next/image";

// Definição do Tipo (Type Safety)
export type ProjectType = {
  id: string;
  image: string; // Caminho da imagem em /public
  tags: string[];
  links: {
    github: string;
    deploy?: string; // Opcional
  };
  content: {
    pt: {
      title: string;
      description: string;
    };
    en: {
      title: string;
      description: string;
    };
  };
};

// --- SUA LISTA DE PROJETOS FICA AQUI ---
// Para adicionar um novo, basta copiar um bloco, colar e mudar os textos.
// O site vai criar o card automaticamente.

export const projectsData: ProjectType[] = [
  {
    id: "ecommerce",
    image: "/placeholder-ecommerce.svg", // Coloque suas imagens na pasta public
    tags: ["Next.js", "TypeScript", "Stripe"],
    links: {
      github: "https://github.com/seu-user/repo",
      deploy: "https://seu-projeto.vercel.app",
    },
    content: {
      pt: {
        title: "E-commerce Completo",
        description: "Plataforma de vendas online com carrinho, checkout seguro via Stripe e painel administrativo.",
      },
      en: {
        title: "Full E-commerce",
        description: "Online sales platform with cart, secure checkout via Stripe, and admin panel.",
      },
    },
  },
  {
    id: "dashboard",
    image: "/placeholder-dashboard.svg",
    tags: ["React", "Python", "D3.js"],
    links: {
      github: "https://github.com/seu-user/repo-dash",
    },
    content: {
      pt: {
        title: "Dashboard Analítico",
        description: "Visualização de dados interativa para análise de métricas em tempo real usando D3 e Python.",
      },
      en: {
        title: "Analytical Dashboard",
        description: "Interactive data visualization for real-time metrics analysis using D3 and Python.",
      },
    },
  },
  {
    id: "landing-page",
    image: "/placeholder-landing.svg",
    tags: ["Tailwind", "SEO", "Vercel"],
    links: {
      github: "https://github.com/seu-user/repo-lp",
      deploy: "https://landing.vercel.app",
    },
    content: {
      pt: {
        title: "Landing Page Otimizada",
        description: "Página de alta conversão com animações suaves e SEO técnico avançado.",
      },
      en: {
        title: "Optimized Landing Page",
        description: "High-conversion page with smooth animations and advanced technical SEO.",
      },
    },
  },
  {
    id: "landing-page1",
    image: "/placeholder-landing.svg",
    tags: ["Tailwind", "SEO", "Vercel", "Next.js"],
    links: {
      github: "https://github.com/seu-user/repo-lp",
    },
    content: {
      pt: {
        title: "Landing Page Otimizada teste 1",
        description: "Página de alta conversão com animações suaves e SEO técnico avançado.",
      },
      en: {
        title: "Optimized Landing Page test 1",
        description: "High-conversion page with smooth animations and advanced technical SEO.",
      },
    },
  },
];