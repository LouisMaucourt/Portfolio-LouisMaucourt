import { projectData } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/assets/Button";
import { TextAnimation } from "@/components/TextAnimation";
import { NextProject } from "@/components/NextProject";
import { TitleAnimation } from "@/components/TitleAnimation";

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
      <div className="flex gap-11 h-screen justify-center p-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed">
            {project.description}
          </p>
        </div>
        <Image
          src={project.mainImage}
          alt={project.title}
          width={1200}
          height={800}
          className="max-h-[60vh] object-cover rounded-lg shadow-lg w-1/2"
          style={{
            viewTransitionName: `project-image-${project.idx}`,
          }}
          priority={true}
        />
      </div>
      <div className="flex gap-4">
        {project.imgs.map((img, index) => (
          <div key={`${project.slug}-${index}`} className="">
            <Image
              src={img}
              alt={`${project.title} image ${index + 1}`}
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-lg shadow-mdx"
              style={{
                viewTransitionName: `project-image-${project.slug}-${index}`,
              }}
            />
          </div>
        ))}
      </div>
      <TextAnimation text={project.howItWork} className="my-30" />
      {project.video && (
        <div className="h-screen w-full bg-black">
          <video src={project.video} className="w-full rounded-lg" controls>
            <track
              kind="captions"
              src=""
              srcLang="en"
              label="English captions"
              default
            />
          </video>
        </div>
      )}
      <div className="flex justify-between items-center">
        <TitleAnimation text={project.title} />
        <Button href={project.websiteLink} className="h-min">
          View Website
        </Button>
      </div>
      <NextProject currentProject={project} />
    </div>
  );
}