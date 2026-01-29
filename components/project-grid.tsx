'use client';

import { useState, useEffect, useCallback } from "react";
import type { Project } from "@/lib/projects";
import { projects as projectData } from "@/lib/projects";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface ProjectGridProps {
  items?: Project[];
  standalone?: boolean;
}

export default function ProjectGrid({ items, standalone = false }: ProjectGridProps) {
  const projects = items ?? projectData;
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleProjectSelect = (project: Project) => {
    setActiveProject(project);
  };

  const handleClose = () => {
    setActiveProject(null);
  };

  const handleNext = useCallback(() => {
    if (!activeProject) return;
    const currentIndex = projects.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setActiveProject(projects[nextIndex]);
  }, [activeProject, projects]);

  const handlePrevious = useCallback(() => {
    if (!activeProject) return;
    const currentIndex = projects.findIndex((p) => p.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setActiveProject(projects[prevIndex]);
  }, [activeProject, projects]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrevious();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, handleNext, handlePrevious]);

  return (
    <section className={standalone ? "" : "pt-[80px] pb-12 border-b border-black"}>
      {!standalone && (
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-black">
            Projects
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectSelect(project)}
          />
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={handleClose}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  const imageMedia = project.media.filter((item) => item.type === "image");
  const previewSrc = project.thumbnail ?? imageMedia[0]?.src ?? "";

  return (
    <div
      className="flex flex-col gap-3 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {previewSrc ? (
          <img
            src={previewSrc}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-black text-sm">No Image</span>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-regular text-sm text-black leading-tight">
          {project.title}
        </h3>
        <p className="text-xs text-black">
          {project.year}
        </p>
      </div>
    </div>
  );
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

function ProjectModal({ project, onClose, onNext, onPrevious }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl max-h-[85vh] bg-white overflow-hidden flex flex-col md:flex-row">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1 text-black hover:opacity-50"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full md:w-[65%] overflow-y-auto max-h-[40vh] md:max-h-full">
          <div className="p-4 md:p-8">
            {project.media.map((media, idx) => (
              <div key={idx} className="overflow-hidden">
                {media.type === 'image' && (
                  <img src={media.src} alt={project.title} className="w-full h-auto" />
                )}
                {media.type === 'video' && (
                  <video src={media.src} controls className="w-full h-auto" />
                )}
                {media.type === 'youtube' && (
                  <div className="aspect-video">
                    <iframe src={media.src} className="w-full h-full" allowFullScreen />
                  </div>
                )}
              </div>
            ))}
            {project.media.length === 0 && (
              <div className="aspect-square flex flex-col items-center justify-center text-black gap-4">
                <p>No media preview</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-[35%] flex flex-col bg-white">
          <div className="p-6 md:p-8 flex-1 overflow-y-auto">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-normal text-black mb-2 leading-tight">{project.title}</h2>
                <div className="text-sm font-normal text-black">
                  <span>{project.year}</span>
                </div>
              </div>

              <div>
                <p className="text-black leading-relaxed">
                  {project.description || "No description available."}
                </p>
              </div>

              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-black underline hover:no-underline"
                >
                  <span className="flex items-center gap-1 text-sm">
                    Visit Project
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              )}
            </div>
          </div>

          <div className="p-4 flex justify-between items-center">
            <button
              onClick={onPrevious}
              className="text-black hover:opacity-50 text-sm"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="text-black hover:opacity-50 text-sm"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
