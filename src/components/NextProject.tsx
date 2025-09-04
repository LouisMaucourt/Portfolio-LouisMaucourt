"use client";

import React from "react";
import Image from "next/image";
import { projectData, Project } from "@/data/projects";
import { Link } from "next-view-transitions";

interface NextProjectProps {
  currentProject: Project;
}

export const NextProject: React.FC<NextProjectProps> = ({ currentProject }) => {
  // Trouver l'index du projet courant
  const currentIndex = projectData.findIndex(
    (p) => p.idx === currentProject.idx,
  );

  // Calculer l'index du projet suivant (boucle)
  const nextIndex = (currentIndex + 1) % projectData.length;
  const nextProject = projectData[nextIndex];

  // Créer le contenu répétitif pour l'animation
  const scrollContent = Array.from({ length: 4 }).map((_, i) => (
    <p
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      key={i}
      className="text-[8rem] font-extrabold uppercase tracking-widest text-gray-600 opacity-50 whitespace-nowrap"
    >
      NextProjects
    </p>
  ));

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="animate-scroll-up flex flex-col">
          {scrollContent}
          {scrollContent}
        </div>
      </div>

      <Link
        href={`/projects/${nextProject.slug}`}
        className="relative z-10 flex flex-col items-center gap-4 group"
      >


        <div className="relative">
          <Image
            src={nextProject.mainImage}
            alt={`Next project: ${nextProject.title}`}
            width={500}
            height={500}
            className="rounded-lg cursor-pointer group-hover:invert transition duration-500 shadow-2xl"
            style={{
              viewTransitionName: `project-image-${nextProject.idx}`,
            }}
          />
        </div>
      </Link>
    </div>
  );
};