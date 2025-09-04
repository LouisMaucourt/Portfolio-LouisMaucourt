import { projectData } from "@/data/projects";
import { Projects } from "@/components/Projects";
import { TitleAnimation } from "@/components/TitleAnimation";

export default function ProjectsPage() {
  return (
    <div>
      <TitleAnimation text="A selection of my recent works" className="!py-10"/>
      <Projects projects={projectData} />
    </div>
  );
}
