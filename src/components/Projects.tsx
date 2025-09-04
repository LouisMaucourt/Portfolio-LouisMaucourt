"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { Project } from "@/data/projects";
import { useRef, useEffect } from "react";

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={containerRef}
      className="n overflow-hidden"
      style={{ cursor: "grab" }}
    >
      <div className="flex h-full gap-8  py-12">
        {projects.map((project) => (
          <Link
            key={project.idx}
            href={`/projects/${project.slug}`}
            className="block flex-shrink-0 group "
          >
            <Image
              src={project.mainImage}
              alt={project.title}
              width={800}
              height={1000}
              className="rounded-lg h-[60vh] w-full transition duration-300 group-hover:invert object-contain"
              style={{
                viewTransitionName: `project-image-${project.idx}`,
              }}
            />
            <h2 className="mt-3 text-xl font-semibold">{project.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
