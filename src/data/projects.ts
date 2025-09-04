export interface Project {
    idx:number;
    mainImage: string;
    title: string;
    description: string;
    slug: string;
    imgs:string[],
    howItWork:string,
    technologie:string[],
    video?:string
    websiteLink?:string;
}

export const projectData: Project[] = [
    {
        idx: 1,
        mainImage: "/projects/studio-lab.png",
        title: "Studio Lab",
        description: "Complete redesign of a modern, interactive showcase website with a client portal and an admin dashboard for the agency.",
        slug: "studio-lab",
        websiteLink: "https://studio-lab.fr/",
        imgs: [
            "/projects/studio-lab_4.webp",
            "/projects/studio-lab_2.webp",
            "/projects/studio-lab_3.webp"
        ],
        technologie: [
            "ts", "Next", "Sanity", "Gsap", "Tailwind", "Postgresql"
        ],
        howItWork:
            "Studio Lab is a full redesign aimed at modernizing the agency’s identity and delivering a sleek, seamless user experience. \
We integrated Sanity as a headless CMS, enabling full content management autonomy, and built an admin dashboard to manage client data efficiently. \
Clients also have their own private space where they can access invoices, subscription details, and personal information. \
Automated email workflows and MailChimp integration were added to streamline client communication and improve engagement."
    },
    {
        idx: 2,
        mainImage: "/projects/hitoko-mockup.webp",
        title: "Hitoko",
        description: "A complete web application that centralizes grades, attendance, schedules, and management for students, teachers, and administrators.",
        slug: "hitoko",
        imgs: [
            "/projects/hitoko.webp",
            "/projects/hitoko-2.webp",
            "/projects/hitoko-3.webp"
        ],
        technologie: [
            "TanStack", "React", "Elysia", "Tailwind", "Postgresql", "ApiRest"
        ],
        howItWork:
            "Hitoko is a final-year project designed to rethink academic management tools, inspired by EduSign but built to be more powerful, intuitive, and centralized. \
The app brings together everything in one place: grade tracking, attendance management, schedules, notifications, and dedicated dashboards for students, teachers, and administrators. \
The API is fully auto-generated and strongly typed via Swagger, while leveraging Neon for cloud hosting to ensure scalability and top-tier performance."
    },
    {
        idx: 3,
        mainImage: "/projects/v7lvet-mockup.webp",
        title: "V7lvet",
        description: "Custom website redesign with Sanity as a headless CMS for seamless and modern content management.",
        slug: "v7lvet",
        websiteLink: "https://v7lvet.com/",
        imgs: [
            "/projects/v7lvet.webp",
            "/projects/v7lvet-2.webp",
            "/projects/v7lvet-3.webp"
        ],
        technologie: [
            "ts", "Next", "Sanity", "Gsap", "Tailwind"
        ],
        howItWork:
            "V7lvet is a custom website redesign focused on creating a fresh, modern, and elegant experience while making content and accounting management simple and intuitive. \
Sanity was integrated as a headless CMS, allowing quick and effortless updates, while GSAP animations bring smooth interactions that make the experience dynamic and engaging. \
The result is a sleek, future-proof platform that combines usability with a refined visual identity."
    },
];
