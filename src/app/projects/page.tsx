import { projectData } from "@/data/projects";
import { Projects } from "@/components/Projects";
import { TitleAnimation } from "@/components/TitleAnimation";
import { ViewTransition } from 'react'

export default function ProjectsPage() {
  return (
     <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", "nav-down": "nav-down", default: "none" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", "nav-down": "nav-up", default: "none" }}
      default="none"
    >
      <TitleAnimation text="Une sélection de mes derniers travaux"/>
      <Projects projects={projectData} />
    </ViewTransition>
  );
}
