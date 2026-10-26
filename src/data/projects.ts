import { string } from "three/tsl";

export interface Project {
    idx: number;
    mainImage: string;
    title: string;
    type: string;
    description: string;
    slug: string;
    imgs?: string[];
    howItWork: string;
    technologie: string[];
    websiteLink?: string;
    githubLink?: string,
}

export const projectData: Project[] = [

    {
        idx: 1,
        mainImage: "/projects/hitoko-mockup.webp",
        type: "Application web",
        title: "Hitoko",
        description:
            "Hitoko est mon projet de fin d’études de mastère en développement web, réalisé en équipe. Le constat de départ était simple : dans beaucoup d’établissements scolaires, la gestion des notes, absences, emplois du temps et communications passe par plusieurs outils séparés, ce qui complique le suivi au quotidien. L’objectif était donc de centraliser ces usages dans une seule plateforme avec différents espaces selon les rôles : étudiants, enseignants et administrateurs. Ce projet nous a permis de travailler dans un cadre proche d’un environnement professionnel, avec une organisation agile, des revues de code régulières et des choix techniques réfléchis collectivement.",
        slug: "hitoko",
        imgs: [
            "/projects/hitoko.webp",
            "/projects/hitoko-2.webp",
            "/projects/hitoko-3.webp",
        ],
        technologie: ["React", "TanStack Query", "Elysia", "Swagger", "Tailwind", "PostgreSQL", "Neon"],
        howItWork:
            "L’application repose sur une architecture frontend/backend séparée. Le frontend est développé avec React pour construire les différents dashboards et interfaces selon les rôles. TanStack Query est utilisé pour gérer les appels API, le cache des données et la synchronisation des états entre l’interface et le serveur. Le backend est construit avec Elysia, qui expose une API REST typée pour centraliser la logique métier comme la gestion des notes, absences ou utilisateurs. La documentation de l’API est générée avec Swagger pour faciliter les tests et le travail en équipe. Toutes les données sont stockées dans PostgreSQL via Neon, avec une structure pensée pour gérer les relations entre utilisateurs, classes et ressources pédagogiques.",
    },
    {
        idx: 2,
        mainImage: "/projects/task-manager.webp",
        title: "Task Manager",
        type: "Application Web",
        description:
            "Application fullstack en cours de développement, conçue pour organiser mes projets web et structurer leur réalisation en tâches et sous-tâches : design, développement, tests et recettage. Ce projet me permet d'explorer une architecture modulaire, une API REST typée et la synchronisation des données entre le front et le back, avec l'objectif de proposer un outil adaptable aux besoins de chaque utilisateur.",
        slug: "task-manager",
        websiteLink: "",
        technologie: [
            "TypeScript",
            "React",
            "React Router",
            "Bun",
            "Elysia",
            "PostgreSQL",
            "TanStack Query",
            "Better Auth",
            "Tailwind CSS",
            "Shadcn",
            "Docker",
        ],
        howItWork:
            "Le frontend repose sur React et TanStack Query pour gérer les requêtes, le cache des données et leur synchronisation avec le serveur. La gestion du cache est un axe d'exploration central du projet, notamment pour optimiser les mises à jour des données et limiter les requêtes inutiles. ! Le backend utilise Bun et Elysia pour exposer une API REST typée, avec PostgreSQL pour la persistance des données et Better Auth pour l'authentification. L'architecture modulaire sépare les routes, la logique métier, les modèles et les fonctions d'accès à l'API.",
    },
    {
        idx: 3,
        mainImage: "/projects/livret-mockup.webp",
        type: "Application web",
        title: "Livret d'accueil digital",
        description:
            "Ce projet est parti d’un constat simple : les propriétaires de logements passent beaucoup de temps à répondre aux mêmes questions de leurs voyageurs, ou finissent parfois par ne plus accueillir directement faute de disponibilité. Après une courte veille et des retours de mon entourage, j’ai voulu proposer une solution adaptée à ces usages concrets. Le livret d’accueil centralise les informations d’un hébergement dans une interface partagée entre deux vues distinctes : une pour le propriétaire et une pour le voyageur.",
        slug: "livretaccueil",
        imgs: [
            "/projects/livret-1.webp",
            "/projects/livret-2.webp",
            "/projects/livret-3.webp",
        ],
        websiteLink: "https://carnetvoyageur.fr/",
        githubLink: "https://github.com/LouisMaucourt/Livret-saas",
        technologie: ["React", "TypeScript", "Bun", "REST API", "PostgreSQL", "Tailwind"],
        howItWork:
            "Le frontend est développé avec React et TypeScript. Il consomme une API REST construite avec Bun qui gère les données des logements et leur configuration. Chaque logement est composé de sections modulaires (accès, règles, recommandations) enregistrées en base de données PostgreSQL. L’application sépare clairement deux usages : l’espace propriétaire, utilisé pour créer et organiser le contenu, et la vue voyageur, optimisée pour la consultation et le partage.",
    },
        {
        idx: 4,
        mainImage: "/projects/studio-lab.png",
        title: "Studio Lab",
        type: "Site Web / Application",
        description:
            "Studio Lab est un projet réalisé dans le cadre de mon ancienne agence web. L’objectif était de refondre leur site principal et de structurer un espace client permettant aux utilisateurs de retrouver leurs factures, gérer leurs abonnements et accéder à leurs documents. Le travail s’est fait en collaboration avec le pôle design pour la partie interface et avec l’équipe produit pour définir les fonctionnalités de l’espace client. Le projet se compose de trois parties : un site public, un dashboard administrateur et un espace client sécurisé.",
        slug: "studio-lab",
        websiteLink: "https://studio-lab.fr/",
        imgs: [
            "/projects/studio-lab_4.webp",
            "/projects/studio-lab_2.webp",
            "/projects/studio-lab_3.webp",
        ],
        technologie: ["TypeScript", "Next.js", "GSAP", "Supabase", "Sanity", "Tailwind", "Mailchimp"],
        howItWork:
            "Avant le développement, j’ai mené une veille technique pour identifier les outils les plus adaptés aux besoins du projet et aux contraintes de l’équipe pour y faire les choix techniques. Le projet utilise Next.js pour gérer l’ensemble des interfaces avec un gros point sur Gsap car l'animation prend une place importante. Supabase est utilisé pour l’authentification, la gestion des rôles et le stockage des données liées aux utilisateurs. Sanity sert à gérer le contenu du site de manière indépendante du code ! ",
    },
    // {
    //     idx: 4,
    //     mainImage: "/projects/timer-mockup.webp",
    //     type: "Mini application web",
    //     title: "Time Tracker",
    //     description:
    //         "En cherchant un tracker de temps simple, je tombais soit sur des outils trop limités, soit sur des usines à gaz payantes. J’avais besoin de gérer plusieurs timers en parallèle, pour mes différentes activités musique, travail, projets perso, alors j’ai fini par construire le mien, exactement comme je le voulais !",
    //     slug: "timetracker",
    //     websiteLink: "https://timetracker.louismaucourt.fun/",
    //     githubLink: "https://github.com/LouisMaucourt/TimeTracker",
    //     technologie: ["Bun", "TypeScript", "React", "Tailwind"],
    //     howItWork:
    //         "La mini application permet de créer et gérer plusieurs timers simultanément, chacun associé à une tâche. L'état est persisté dans le localStorage pour retrouver ses sessions d'une visite à l'autre.",
    // },
    {
        idx: 5,
        mainImage: "/projects/quizz-mockup.webp",
        type: "Application web",
        title: "Quizz scientifique",
        description:
            "À la base, j'ai créé ce quiz comme une simple blague autour de sujets complètement absurdes. Puis je me suis rendu compte que je pouvais en faire évoluer le concept. J'ai donc ajouté une base de données afin que chacun puisse créer, modifier ou supprimer librement ses propres quiz et partager ses idées. Chaque quiz propose une série de questions basées sur des critères prédéfinis, avec des réponses associées et un score final.",
        slug: "quizz",
        imgs: [
            "/projects/quizz-1.webp",
            "/projects/quizz-2.webp",
            "/projects/quizz-3.webp",
        ],
        technologie: ["Bun", "Postgres", "Hono", "API REST", "React", "Tailwind", "TypeScript",],
        websiteLink: "https://contryquizz.louismaucourt.fun/",
        githubLink: "https://github.com/LouisMaucourt/Country-Quizz",
        howItWork:
            "Comme le reste de mes créations web, l'application est hébergée sur mon propre VPS. Chaque service est conteneurisé, du front-end au back-end, avec une base de données PostgreSQL. J'utilise notamment le type JSONB, particulièrement adapté ici pour stocker les différents critères, questions et réponses. L'application dispose également d'une API REST développée avec Hono pour le back-end, tandis que le front-end est développé avec React et TypeScript.",
    },
    {
        idx: 6,
        mainImage: "/projects/voiture-mockup.webp",
        title: "Course Voiture",
        type: "Expériementation",
        description:
            "Expérimentation 3D basée sur le scroll. Le projet explore une progression visuelle et sonore : plus l’utilisateur avance, plus l’environnement se dégrade, avec une évolution de la lumière, du son et des effets visuels.",
        slug: "vroumvroum",
        websiteLink: "https://vroummm.louismaucourt.fun/",
        imgs: [
            "/projects/voiture-1.webp",
            "/projects/voiture-2.webp",
            "/projects/voiture-3.webp",
        ],
        technologie: ["Three.js", "TypeScript", "GSAP", "Vite"],
        howItWork:
            "Le projet est construit avec Three.js autour d’une architecture orientée objet pour gérer la scène 3D. Un modèle de voiture est intégré et animé en fonction du scroll via GSAP. Les paramètres de rendu évoluent progressivement (lumière, couleurs, ambiance) à travers des shaders personnalisés (vertex et fragment), synchronisés avec la progression de l’utilisateur.",
    },
]; 