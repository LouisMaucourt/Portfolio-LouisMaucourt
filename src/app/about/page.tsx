import { ItemTechno, Techno } from "@/components/Techno";
import { TextAnimation } from "@/components/TextAnimation";
import { TitleAnimation } from "@/components/TitleAnimation";
import Link from "next/link"
import { ViewTransition } from 'react'

export default function AboutPage() {
  return (
         <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", "nav-down": "nav-down", default: "none" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", "nav-down": "nav-up", default: "none" }}
      default="none"
    >
    <div className="flex flex-col gap-52">
      <div className="h-[60vh]">
        <TitleAnimation text="À propos de moi" />
          <TextAnimation text="Développeur full-stack de 24 ans, diplômé d'un Bachelor Chef de Projet Digital puis d'un Master Développement Web. Cette double formation me permet de collaborer efficacement avec les équipes design, produit et technique — je comprends leurs contraintes et je parle leur langage. J'attache autant d'importance à la qualité du code qu'au produit finale" />
        </div>
        <div className="h-[60vh]">
          <TitleAnimation text="Se que je fais" />
          <TextAnimation text="Je développe des sites web et des applications en prenant en charge aussi bien le frontend que le backend. Je travaille sur l’intégration d’interfaces, la création d’APIs, la gestion de bases de données, l’authentification et la mise en place d’espaces d’administration ou clients. J’utilise principalement une base React et TypeScript pour construire des projets structurés, adaptés aux besoins et faciles à faire évoluer." />
        </div>
      <div>
        <TitleAnimation text="Mes technologies" />
        <Techno items={skillCategories} />
      </div>
      <Link
        href="mailto:louis.maucourt@outlook.fr"
        className="h-screen w-full flex justify-center items-center"
      >
        <h2 className="underline text-8xl">@Bonjour</h2>
      </Link>
      </div>
    </ViewTransition>
  );
}
const skillCategories: ItemTechno[] = [
  {
    title: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "TanStack Library",
      "Next.js",
      "Astro",
      "Svelte",
    ],
  },
  {
    title: "Animations & UI",
    skills: [
      "Tailwind CSS",
      "Gsap",
      "Three.js / R3F",
      "Shadcn"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Bun",
      "REST API",
      "JWT",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "DevOps & Outils",
    skills: [
      "Git / GitHub",
      "Docker",
      "PaaS",
      "CI/CD",
      "Linux / WSL",
    ],
  },
  {
    title: "Méthodologie",
    skills: [
      "Méthode Agile",
      "Clean Code",
      "Code Review",
      "Architecture Web",
      "Gestion de projet",
    ],
  },
];
