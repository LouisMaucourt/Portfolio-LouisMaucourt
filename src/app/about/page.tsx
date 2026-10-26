import Link from "next/link";
import { ViewTransition } from "react";
import { Button } from "@/components/assets/Button";
import { type ItemTechno, Techno } from "@/components/Techno";
import { TextAnimation } from "@/components/TextAnimation";
import { TitleAnimation } from "@/components/TitleAnimation";

export default function AboutPage() {
  return (
    <ViewTransition
      enter={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        "nav-down": "nav-down",
        default: "none",
      }}
      exit={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        "nav-down": "nav-up",
        default: "none",
      }}
      default="none"
    >
      <div className="flex flex-col gap-52">
        <div className="h-[80vh]">
          <TitleAnimation text="À propos de moi" />
          <TextAnimation
            text={[
              "Développeur Web / full-stack. Après un Bachelor Chef de Projet Digital et un Master Développement Web, je fais aussi bien du frontend que du backend : intégration d'interfaces, APIs, bases de données, authentification, espaces admin. J'utilise principalement une base React et TypeScript.",
              "Ma valeur ajoutée, c'est cette double casquette produit/technique : je ne me contente pas d'exécuter un cahier des charges, je comprends les enjeux techniques derrière et je peux échanger directement avec les équipes design ou les clients sans perdre de temps en traduction. C'est aussi mon autonomie et cette volonté de toujours bien faire les choses, jusque dans les détails.",
            ]}
          />
        </div>
        <div>
          <TitleAnimation text="Mes technologies" />
          <Techno items={skillCategories} />
          <Button
            target="_blank"
            className="mt-6 !pl-0 hover:underline"
            href="/CV-LOUIS_MAUCOURT.pdf"
          >
            Voir mon CV en détail
          </Button>
        </div>
        <Link
          href="mailto:louis.maucourt@outlook.fr"
          className="h-screen w-full flex justify-center items-center"
        >
          <h2 className="underline lg:text-8xl text-5xl">@Bonjour</h2>
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
      "JavaScript",
      "React",
      "Next.js",
      "TanStack Library",
      "Astro",
      "Svelte",
    ],
  },
  {
    title: "Animations & UI",
    skills: ["Tailwind CSS", "Gsap", "Three.js / R3F", "Shadcn"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Hono",
      "Bun",
      "REST API",
      "JWT",
      "Java",
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
      "Dockploy",
      "Ubuntu",
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
