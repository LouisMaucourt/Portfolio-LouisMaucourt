import { projectData } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/assets/Button";
import { TextAnimation } from "@/components/TextAnimation";
import { NextProject } from "@/components/NextProject";
import { TitleAnimation } from "@/components/TitleAnimation";
import { ViewTransition } from 'react'
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await projectData.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="">
      <div className="flex flex-col-reverse lg:flex-row gap-11 lg:h-screen lg:justify-center justify-end lg:p-8 p-2 w-full">
        <div className="w-full lg:w-1/3">
          <h1 className="text-4xl md:text-5xl font-bold capitalize">
            {project.title}
          </h1>
          <span className="mb-6 bg-gray-100 dark:bg-white/10 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            {project.type}
          </span>
            <TextAnimation text={project.description}/>
        </div>

        <ViewTransition name={`photo-${project.idx}`}>
          <Image
            src={project.mainImage}
            alt={project.title}
            width={1900}
            height={1080}
            className="w-full lg:w-2/3 h-auto max-h-[80vh] object-cover rounded-2xl shadow-lg"
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
          />
        </ViewTransition>
      </div>
      <div className="flex lg:flex-row flex-col  gap-4">
        {project.imgs &&
          <>
          {project.imgs.map((img, index) => (
            <div key={`${project.slug}-${index}`}>
              <Image
                src={img}
                alt={`${project.title} image ${index + 1}`}
                width={1500}
                height={600}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover rounded-lg shadow-mdx"
                style={{
                  viewTransitionName: `project-image-${project.slug}-${index}`,
                }}
              />
            </div>
          ))}
          </>
        }

      </div>
      <div className="min-h-80 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] w-full mt-30 border-t border-gray-200">
        {project.technologie.map((techno, index) => (
          <div
            key={techno}
            className="flex flex-col justify-center gap-2 lg:px-8 lg:py-6 p-3 border-r border-gray-200 last:border-r-0 bg-black/3 hover:bg-gray-100 transition-colors"
          >
            <span className="text-[10px] text-gray-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium uppercase tracking-widest text-gray-800">
              {techno}
            </span>
          </div>
        ))}
      </div>
      <div className="mb-30">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center mt-20">
          <TitleAnimation text={`Comment marche ${project.title} ?`} />
          <div className="flex flex-row lg:justify-baseline justify-between">
            {project.websiteLink && (
              <Button href={project.websiteLink} target="_blank" className="h-min">
                Voir {project.title}
              </Button>
            )}
            {project.githubLink && (
              <Button href={project.githubLink} target="_blank" className="h-min">
                Voir le Git
              </Button>
            )}
          </div>
        </div>
        <TextAnimation text={project.howItWork} className="" />
      </div>
      <NextProject currentProject={project} />
    </div>
  );
}