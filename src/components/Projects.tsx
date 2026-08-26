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

    const mq = window.matchMedia("(min-width: 1024px)");

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    const setup = () => {
      el.removeEventListener("wheel", handleWheel);
      if (mq.matches) {
        el.addEventListener("wheel", handleWheel, { passive: false });
      }
    };

    setup();
    mq.addEventListener("change", setup);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      mq.removeEventListener("change", setup);
    };
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;

    const veils = containerRef.current.querySelectorAll(".project-veil");
    const items = containerRef.current.querySelectorAll(".project-item");
    gsap.set(items, { opacity: 0, y: 16 });
    gsap.set(veils, { scaleX: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
      delay: 0.4,
    });

    tl.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
    }).to(
      veils,
      {
        scaleX: 0,
        duration: 0.8,
        ease: "power3.inOut",
        transformOrigin: "right center",
        stagger: 0.15,
      },
      "<" 
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="no-scrollbar lg:overflow-x-auto lg:overflow-y-hidden overflow-visible"
      style={{ cursor: "grab" }}
    >
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:py-12 py-7 pb-25">
        {projects.map((project) => (
          <ViewTransition key={project.idx} name={`photo-${project.idx}`} share="morph">
            <Link
              href={`/projects/${project.slug}`}
              className="project-item block lg:flex-shrink-0 group relative opacity-0"
            >
              <div
                className="project-veil absolute inset-0 bg-[var(--background)] z-10 rounded-lg"
                style={{ transformOrigin: "right center" }}
              />
              <Image
                src={project.mainImage}
                alt={project.title}
                width={1900}
                height={1080}
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="rounded-lg lg:h-[70vh] h-full w-full transition duration-300 group-hover:invert object-contain"
              />
              <div className="flex justify-between items-center gap-4 mt-3">
                <h2 className="lg:text-xl text-base font-semibold leading-tight text-gray-900 capitalize">
                  {project.title}
                </h2>
                <span className="mt-0.5 shrink-0 rounded-full bg-gray-100 dark:bg-white/10 px-2.5 py-0.5 lg:text-xs text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
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