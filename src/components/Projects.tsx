"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { useEffect, useRef } from "react";
import { ViewTransition } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
    if (!containerRef.current) return;

    const veils = containerRef.current.querySelectorAll(".project-veil");

    gsap.to(veils, {
      scaleX: 0,
      duration: 0.8,
      ease: "power3.inOut",
      transformOrigin: "right center",
      stagger: 0.15,
      delay: 0.4,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden" style={{ cursor: "grab" }}>
      <div className="flex h-full gap-8 py-12">
        {projects.map((project) => (
          <ViewTransition key={project.idx} name={`photo-${project.idx}`} share="morph">
            <Link href={`/projects/${project.slug}`} className="block flex-shrink-0 group relative">
              <div
                className="project-veil absolute inset-0  bg-[var(--background)] z-10 rounded-lg"
                style={{ transformOrigin: "right center" }}
              />
              <Image
                src={project.mainImage}
                alt={project.title}
                width={800}
                height={1000}
                className="rounded-lg h-[60vh] w-full transition duration-300 group-hover:invert object-contain"
              />
              <div className="flex justify-between items-start gap-4 mt-3">
                <h2 className="text-xl font-semibold leading-tight text-gray-900">
                  {project.title}
                </h2>
                <span className="mt-0.5 shrink-0 rounded-full bg-gray-100 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {project.type}
                </span>
              </div>
            </Link>
          </ViewTransition>
        ))}
      </div>
    </div>
  );
};