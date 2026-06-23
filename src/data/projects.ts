export interface Project {
    idx: number;
    mainImage: string;
    title: string;
    description: string;
    slug: string;
    imgs?: string[];
    howItWork: string;
    technologie: string[];
    websiteLink?: string;
}

export const projectData: Project[] = [
    {
        idx: 1,
        mainImage: "/projects/studio-lab.png",
        title: "Studio Lab",
        description:
            "Une agence web cherchait à refondre son site pour moderniser son identité et offrir à ses clients un accès autonome à leurs documents, factures et abonnements. Le projet couvre trois espaces distincts : un site public, un dashboard administrateur et un espace client sécurisé.",
        slug: "studio-lab",
        websiteLink: "https://studio-lab.fr/",
        imgs: [
            "/projects/studio-lab_4.webp",
            "/projects/studio-lab_2.webp",
            "/projects/studio-lab_3.webp",
        ],
        technologie: ["TypeScript", "Next.js", "Supabase", "Sanity", "Tailwind", "Mailchimp"],
        howItWork:
            "Next.js structure les trois espaces avec un système de rôles géré par Supabase, qui assure aussi l'authentification et la base de données. Sanity permet à l'agence de gérer ses contenus en autonomie. Mailchimp prend en charge les emails automatisés côté clients.",
    },
    {
        idx: 2,
        mainImage: "/projects/hitoko-mockup.webp",
        title: "Hitoko",
        description:
            "Projet de fin d'études né d'un constat simple : les établissements scolaires jonglent avec trop d'outils dispersés. Notes, absences, emplois du temps et notifications sont regroupés dans une seule plateforme, avec des dashboards dédiés aux étudiants, aux enseignants et aux administrateurs.",
        slug: "hitoko",
        imgs: [
            "/projects/hitoko.webp",
            "/projects/hitoko-2.webp",
            "/projects/hitoko-3.webp",
        ],
        technologie: ["React", "TanStack Query", "Elysia", "Swagger", "Tailwind", "PostgreSQL", "Neon"],
        howItWork:
            "TanStack Query gère la synchronisation et le cache des données entre le frontend React et l'API. Le backend Elysia expose une API REST typée et documentée via Swagger. Les données sont persistées dans une base PostgreSQL hébergée sur Neon.",
    },
    {
        idx: 3,
        mainImage: "/projects/livret-mockup.webp",
        title: "HostFlow",
        description:
            "Le projet est né d'un problème que j'observais autour de moi : les propriétaires de logements perdent un temps considérable à répondre aux mêmes questions de leurs voyageurs. HostFlow centralise toutes les informations d'un hébergement — accès, règles, recommandations — dans une interface partageable, avec une séparation claire entre l'espace propriétaire et la vue voyageur.",
        slug: "hostflow",
        imgs: [
            "/projects/livret-1.webp",
            "/projects/livret-2.webp",
            "/projects/livret-3.webp",
        ],
        technologie: ["React", "TypeScript", "Bun", "REST API", "PostgreSQL", "Tailwind"],
        howItWork:
            "Le frontend React + TypeScript consomme une API REST construite avec Bun. Chaque logement dispose de ses propres sections configurables et interchangeables, stockées en PostgreSQL, avec une séparation stricte entre la vue propriétaire et la vue voyageur.",
    },
    {
        idx: 4,
        mainImage: "/projects/timer-mockup.webp",
        title: "Time Tracker",
        description:
            "En cherchant un tracker de temps simple, je tombais soit sur des outils trop limités, soit sur des usines à gaz payantes. J’avais besoin de gérer plusieurs timers en parallèle — musique, travail, projets perso — alors j’ai fini par construire le mien, exactement comme je le voulais !",
        slug: "timetracker",
        websiteLink: "https://reee",
        technologie: ["Bun", "TypeScript", "React", "Tailwind"],
        howItWork:
            "L'application permet de créer et gérer plusieurs timers simultanément, chacun associé à une tâche. L'état est persisté dans le localStorage pour retrouver ses sessions d'une visite à l'autre.",
    },
    {
        idx: 5,
        mainImage: "/projects/quizz-mockup.webp",
        title: "Quizz",
        description:
            "L'idée est venue d'une envie de tester mes connaissances de façon ludique, sans passer par des plateformes trop rigides. Un format simple : des questions, des réponses, un score — rien de plus, rien de moins.",
        slug: "quizz",
        websiteLink: "https://reee",
        imgs: [
            "/projects/quizz-1.webp",
            "/projects/quizz-2.webp",
            "/projects/quizz-3.webp",
        ],
        technologie: ["Bun", "TypeScript", "React", "Tailwind"],
        howItWork:
            "L'application charge des questions depuis un fichier de données, gère la progression et le score côté client, et affiche un récapitulatif en fin de session.",
    },
    {
        idx: 6,
        mainImage: "/projects/voiture-mockup.webp",
        title: "Course Voiture",
        description:
            "Une expérimentation 3D d’une envie de jouer avec le scroll : plus on avance, plus l'univers se dégrade. La saturation de la lumière augmente, la musique se distord, les vagues s'amplifient. Une façon de questionner ce qu'on fait avancer sans vraiment savoir pourquoi.",
        slug: "vroumvroum",
        websiteLink: "https://reee",
        imgs: [
            "/projects/voiture-1.webp",
            "/projects/voiture-2.webp",
            "/projects/voiture-3.webp",
        ],
        technologie: ["Three.js", "TypeScript", "GSAP", "Vite"],
        howItWork:
"Construit avec Three.js, le projet repose sur une architecture orientée objet, particulièrement adaptée à ce type d’expérimentation 3D. J'ai importé un modèle 3D de voiture et fait progresser la scène au fil du scroll via GSAP. Des shaders personnalisés (vertex et fragment) font évoluer les paramètres visuels et sonores à chaque niveau : lumière, vagues, dégradation audio.",
    },
];