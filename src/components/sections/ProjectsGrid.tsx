import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

import { forwardRef } from "react";

interface ProjectsGridProps {
  onProjectClick?: (project: Project) => void;
}

const ProjectsGrid = forwardRef<HTMLDivElement, ProjectsGridProps>(({
  onProjectClick = () => {},
}, ref) => {
  const { t } = useTranslation();

    const projects = [
    {
      id: "1",
      title: t('projects.items.quantum.title'),
      description: t('projects.items.quantum.description'),
      imageUrl: "assests/images/quantum.png",
      technologies: ["HTML", "CSS", "JavaScript", "Pollinations AI"],
      liveUrl: "https://quntum-ai.vercel.app/",
      githubUrl: "https://github.com/its3li/Quntum-AI",
    },
    {
      id: "2",
      title: t('projects.items.minbar.title'),
      description: t('projects.items.minbar.description'),
      imageUrl: "assests/images/minbar.png",
      technologies: ["React", "Vite", "Supabase"],
      liveUrl: "https://minbar-aljumua.vercel.app/",
      githubUrl: "https://github.com/its3li/minbar-aljumua",
    },
    {
      id: "3",
      title: t('projects.items.dreamator.title'),
      description: t('projects.items.dreamator.description'),
      imageUrl: "assests/images/dreamator.png",
      technologies: ["React", "Vite", "Pollinations AI"],
      liveUrl: "https://dreamator-ai.vercel.app/",
      githubUrl: "https://github.com/its3li/Dreamtor-AI-V4",
    },
    {
      id: "4",
      title: t('projects.items.tokenManager.title'),
      description: t('projects.items.tokenManager.description'),
      imageUrl: "assests/images/token.png",
      technologies: ["Node.js", "Discord.js", "JavaScript"],
      liveUrl: "",
      githubUrl: "https://github.com/its3li/Token-Manger-Bot",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>
        <motion.div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                onClick={() => onProjectClick(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

export default ProjectsGrid;
