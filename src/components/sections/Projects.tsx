"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "@/components/ui/ProjectCard";
import { ProjectType } from "@/data/projects";

const Projects = ({ data }: { data: ProjectType[] }) => {
  const { t, lang } = useLanguage();

  // Limitamos a exibição aos primeiros 6 projetos
  const displayedProjects = data.slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500 ease-in-out">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-white mb-16">
          {t.projects.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => {
            
            const content = project.content[lang]; 

            const cardData = {
                title: content.title,
                description: content.description,
                images: project.images || [],
                tags: project.tags,
                githubUrl: project.links.github,
                deployUrl: project.links.deploy
            };

            return (
                <ProjectCard 
                    key={project.id} 
                    project={cardData} 
                    btnRepo={t.projects.btnRepo} 
                    btnDeploy={t.projects.btnDeploy} 
                />
            );
          })}
        </div>

        {/* Botão "Ver Mais" (Opcional - só aparece se tiver mais de 6 projetos) */}
        {data.length > 6 && (
            <div className="mt-12 flex justify-center">
                <a 
                    href="https://github.com/Leydilson-Silva?tab=repositories" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-emerald-500 hover:text-white dark:hover:bg-[#00FF00] dark:hover:text-black transition-all"
                >
                    Ver todos no GitHub
                </a>
            </div>
        )}

      </div>
    </section>
  );
};

export default Projects;