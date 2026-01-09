"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/projects"; // <--- 1. IMPORTANDO SEU "BANCO DE DADOS"

const Projects = () => {
  const { t, lang } = useLanguage(); // <--- 2. Precisamos do 'lang' para saber se pegamos pt ou en

  return (
    <section id="projects" className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500 ease-in-out">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-white mb-16">
          {t.projects.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 3. Mapeando a lista do arquivo projects.ts */}
          {projectsData.map((project) => {
            
            // Seleciona o conteúdo (título/descrição) com base no idioma atual do site
            const content = project.content[lang]; 

            // Montamos um objeto limpo para passar pro Card
            const projectCardData = {
                title: content.title,
                description: content.description,
                image: project.image,       // Agora a imagem vai funcionar!
                tags: project.tags,
                githubUrl: project.links.github,
                deployUrl: project.links.deploy
            };

            return (
                <ProjectCard 
                    key={project.id} 
                    project={projectCardData} 
                    btnRepo={t.projects.btnRepo} 
                    btnDeploy={t.projects.btnDeploy} 
                />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;