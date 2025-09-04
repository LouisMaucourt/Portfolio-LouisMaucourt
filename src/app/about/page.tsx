import { ItemTechno, Techno } from "@/components/Techno";
import { TextAnimation } from "@/components/TextAnimation";
import { TitleAnimation } from "@/components/TitleAnimation";
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-52">
      <div className="h-[60vh]">
        <TitleAnimation text="About me" />
        <TextAnimation text="I'm a 24-year-old French front-end developer who treats every project like a baker crafting the perfect bread. I carefully choose the best ingredients — design, clean code, and smooth interactions — to create interfaces that are both beautiful and meaningful. After starting my journey blending design and development, I completed a Master's in Web Development, always striving to do things right and deliver high-quality digital experiences." />
      </div>

      <div>
        <TitleAnimation text="What I do" />
        <TextAnimation
          text="I primarily work with TypeScript and JavaScript, building custom, scalable, and maintainable front-end architectures. 
I focus on crafting smooth, interactive experiences that can surprise users and convey a message through animations, micro-interactions, and even 3D experiences with Three.js. 
I enjoy the challenge and complexity of building web applications that are both powerful and enjoyable to use, while integrating headless solutions like Sanity to give clients full control over their content. 
And, just like a baker experimenting with new ingredients, I like to explore new tools like Astro and dive into the TanStack ecosystem — especially their advanced caching strategies — always looking for ways to push creativity further.
I believe that a well-crafted website is like a perfectly baked loaf of bread: it requires the right ingredients, careful preparation, and a touch of artistry to create something truly special."
        />
      </div>
      <div>
        <TitleAnimation text="My Technologies" />
        <Techno items={skillCategories} />
      </div>
      <Link
        href="mailto:louis.maucourt@outlook.fr"
        className="h-screen w-full flex justify-center items-center"
      >
        <h2 className="underline text-8xl">Say Hello</h2>
      </Link>
    </div>
  );
}

const skillCategories: ItemTechno[] = [
  {
    title: "Frameworks & Librairies",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Svelte",
      "Astro",
      "TanStack Lib",
    ],
  },
  {
    title: "Backend",
    skills: ["MySQL", "PostgreSQL", "Supabase", "Neon", "API REST"],
  },
  {
    title: "CMS & Headless CMS",
    skills: ["WordPress", "Sanity"],
  },
  {
    title: "Outils & DevOps",
    skills: ["Docker", "GitHub"],
  },
  {
    title: "Animations & UI",
    skills: ["GSAP", "Three.js", "Tailwind CSS"],
  },
  {
    title: "Organisation",
    skills: ["Architecture Web", "Gestion de projet", "Méthode Agile"],
  },
];
