// Definição do Tipo (Type Safety)
export type ProjectType = {
  id: string;
  folder:string; // Nome da pasta dentro de /public/projects
  tags: string[];
  links: {
    github?: string;
    deploy?: string;
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
  images?: string[];
};

// --- SUA LISTA DE PROJETOS FICA AQUI ---
// Para adicionar um novo, basta copiar um bloco, colar e mudar os textos.
// O site vai criar o card automaticamente.

export const projectsData: ProjectType[] = [
  {
  id: "personal-portfolio",
  folder: "personal-portfolio",
  tags: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
  links: {
    github: "https://github.com/Leydilson-Silva/portfolio-leydilson",
  },
  content: {
    pt: {
      title: "Portfólio Profissional",
      description: "Plataforma pessoal com arquitetura escalável e carregamento automatizado de assets via File System.",
    },
    en: {
      title: "Professional Portfolio",
      description: "Personal platform with scalable architecture and automated asset loading via File System.",
    },
  },
},
  {
    id: "estudo-natal",
    folder: "estudo-natal",
    tags: ["Svelte", "Python", "Django", "WordPress", "Twilio"],
    links: {
      deploy: "https://estudonatal.com.br/",
    },
    content: {
      pt: {
        title: "Estudo Natal - UFRN",
        description: "Plataforma de pesquisa sobre saúde cardiovascular em idosos. Atuei no Full Stack refatorando o sistema de notificações (Twilio), implementando testes automatizados e desenvolvendo interfaces com Svelte.",
      },
      en: {
        title: "Natal Study - UFRN",
        description: "Research platform on cardiovascular health in the elderly. Worked as Full Stack refactoring the notification system (Twilio), implementing automated tests, and building interfaces with Svelte.",
      },
    },
  },
  {
    id: "gfinder",
    folder: "gfinder",
    tags: ["WordPress", "JavaScript", "PHP", "CSS"],
    links: {
      // github: "#", Coloque o link do repositório do tema (se tiver) ou deixe vazio
      //deploy: "https://gfinder.com",  Coloque o link real se estiver online
    },
    content: {
      pt: {
        title: "GFinder - Blog Tech",
        description: "Portal de notícias e análises sobre tecnologia e games. Desenvolvido com WordPress, implementando funcionalidades interativas personalizadas via JavaScript.",
      },
      en: {
        title: "GFinder - Tech Blog",
        description: "News and reviews portal about technology and games. Developed with WordPress, implementing custom interactive functionalities via JavaScript.",
      },
    },
  },
];