"use client";

import { Code, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image"; // <--- 1. Confirme se esta linha existe

type ProjectCardProps = {
    project: {
        title: string;
        description: string;
        image?: string; 
        tags: string[];
        githubUrl: string;
        deployUrl?: string;
    }; 
    btnRepo: string;
    btnDeploy: string;
};

const ProjectCard = ({ project, btnRepo, btnDeploy }: ProjectCardProps) => (
  <div className="group bg-white dark:bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-2xl dark:hover:shadow-[#00FF00]/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
    
    {/* Área da Imagem */}
    <div className="relative h-48 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
        
        {/* 2. A LÓGICA MÁGICA: */}
        {/* Se 'project.image' existir, mostra a FOTO. Senão, mostra o ÍCONE. */}
        {project.image ? (
            <Image 
                src={project.image}
                alt={project.title}
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        ) : (
            // O ícone "CSV" (Código) que aparece quando não tem foto
            <Code className="text-neutral-300 dark:text-neutral-700 w-16 h-16 group-hover:scale-110 group-hover:text-emerald-500 dark:group-hover:text-[#00FF00] transition-all duration-500" />
        )}
        
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-[#00FF00] transition-colors">
        {project.title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
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

export default ProjectCard;