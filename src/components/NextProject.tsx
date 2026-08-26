"use client";

import React from "react";
import Image from "next/image";
import { projectData, Project } from "@/data/projects";
import Link from "next/link";
import { ViewTransition } from 'react'
import { useRouter } from "next/navigation";

interface NextProjectProps {
  currentProject: Project;
}

export const NextProject: React.FC<NextProjectProps> = ({ currentProject }) => {
  const router = useRouter();
  const currentIndex = projectData.findIndex(
    (p) => p.idx === currentProject.idx,
  );
  const nextIndex = (currentIndex + 1) % projectData.length;
  const nextProject = projectData[nextIndex];
  const scrollContent = Array.from({ length: 40 }).map((_, i) => (
    <p
      key={i}
      className="lg:text-9xl text-4xl font-extrabold uppercase tracking-widest text-gray-600 opacity-50 whitespace-nowrap"
    >
      NextProjects
    </p>
  ));

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="animate-scroll-up flex flex-col gap-5">
          {scrollContent}
          {scrollContent}
          {scrollContent}
        </div>
      </div>

      <Link
        href={`/projects/${nextProject.slug}`}                     
        onMouseEnter={() => router.prefetch(`/projects/${nextProject.slug}`)}  
        className="relative z-10 flex flex-col items-center gap-4 group"
      >
      <ViewTransition name={`photo-${nextProject.idx}`}>
          <div className="relative shadow-2xl project-image-">
            <Image
              src={nextProject.mainImage}
              alt={`Next project: ${nextProject.title}`}
              width={500}
              height={500}
              className="rounded-lg cursor-pointer group-hover:invert transition duration-500 shadow-2xl"
            />
          </div>
      </ViewTransition>
        </Link>
    </div>
  );
};