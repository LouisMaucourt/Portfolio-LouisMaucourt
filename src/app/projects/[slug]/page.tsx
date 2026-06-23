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
      <div className="flex gap-11 h-screen justify-center p-8 w-full">
        <div className="w-1/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed">
            {project.description}
          </p>
        </div>

        <ViewTransition name={`photo-${project.idx}`}>
          <Image
            src={project.mainImage}
            alt={project.title}
            width={1200}
            height={800}
            className="max-h-[80vh] object-cover rounded-2xl shadow-lg w-2/3"
            priority={true}
          />
        </ViewTransition>
      </div>
      <div className="flex gap-4">
        {project.imgs &&
          <>
            {project.imgs.map((img, index) => (
              <div key={`${project.slug}-${index}`} className="">
                <Image
                  src={img}
                  alt={`${project.title} image ${index + 1}`}
                  width={1500}
                  height={600}
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
            className="flex flex-col justify-center gap-2 px-8 py-6 border-r border-gray-200 last:border-r-0 bg-black/3 hover:bg-gray-100 transition-colors"
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
        <div className="flex justify-between items-center">
          <TitleAnimation text={`Comment marche ${project.title} ?`} />
          {project.websiteLink && (
            <Button href={project.websiteLink} className="h-min">
              Voir plus
            </Button>
          )}
        </div>
        <TextAnimation text={project.howItWork} className="" />
      </div>
      <NextProject currentProject={project} />
    </div>
  );
}