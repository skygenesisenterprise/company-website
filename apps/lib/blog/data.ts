import type { BlogAuthor, BlogCategory, EditorialArticle, EditorialCollection } from "@/lib/blog/types";

const authors: BlogAuthor[] = [
  { slug: "editorial-desk", name: "SGE Editorial Desk", role: "Official newsroom" },
  { slug: "platform-team", name: "Aether Platform Team", role: "Platform engineering" },
  { slug: "security-office", name: "SGE Security Office", role: "Security engineering" },
  { slug: "research-lab", name: "SGE Research", role: "Research and strategy" },
  { slug: "developer-relations", name: "SGE Developer Relations", role: "Developer experience" },
];

export const editorialCategories: BlogCategory[] = [
  {
    slug: "company",
    label: "Company",
    description: "Corporate notes, ecosystem updates and official newsroom communication.",
    aliases: ["sge", "actualites-sky-genesis-enterprise"],
  },
  {
    slug: "vision",
    label: "Vision",
    description: "Editorial positions on product direction, execution principles and long-term strategy.",
    aliases: ["coulisses", "opinions"],
  },
  {
    slug: "engineering",
    label: "Engineering",
    description: "Architecture decisions, implementation notes and platform engineering choices.",
    aliases: ["identite", "architecture"],
  },
  {
    slug: "infrastructure",
    label: "Infrastructure",
    description: "Cloud, edge, observability and data-plane engineering across the SGE stack.",
  },
  {
    slug: "security",
    label: "Security",
    description: "Security-by-design, trust foundations, IAM and operational hardening.",
    aliases: ["securite"],
  },
  {
    slug: "open-source",
    label: "Open Source",
    description: "How SGE opens parts of the stack, documents them and sustains maintainability.",
  },
  {
    slug: "product-updates",
    label: "Product Updates",
    description: "Launch notes, roadmap updates and product packaging across the Aether ecosystem.",
    aliases: ["produits-aether", "produits"],
  },
  {
    slug: "research",
    label: "Research",
    description: "Applied research, AI positioning and decision frameworks for enterprise software.",
    aliases: ["ia-recherche"],
  },
  {
    slug: "europe-sovereignty",
    label: "Europe & Sovereignty",
    description: "Digital sovereignty, European infrastructure and resilient governance models.",
    aliases: ["souverainete-numerique", "sobriete-numerique"],
  },
  {
    slug: "developer-experience",
    label: "Developer Experience",
    description: "APIs, tooling, SDKs and the ergonomics of building on the SGE platform.",
    aliases: ["developpeurs"],
  },
];

function author(slug: BlogAuthor["slug"]) {
  return authors.find((item) => item.slug === slug)!;
}

export const editorialArticles: EditorialArticle[] = [
  {
    slug: "construire-infrastructure-numerique-europeenne",
    title: "Construire une infrastructure numerique europeenne, sans sacrifier la lisibilite",
    excerpt:
      "Pourquoi Sky Genesis Enterprise construit une plateforme complete, claire et exploitable pour les organisations qui veulent reprendre la main sur leur environnement numerique.",
    category: "Company",
    categorySlug: "company",
    publishedAt: "2026-05-12",
    readingTime: 9,
    author: author("editorial-desk"),
    featured: true,
    tags: ["Aether Platform", "Corporate", "Sovereignty"],
    collectionSlugs: ["building-aether-platform", "sovereign-infrastructure"],
    aliases: [
      "ligne-editoriale-sge-journal",
      "plateforme-sge-cinq-couches",
      "construire-avant-ouverture-publique",
    ],
    summary: [
      "SGE veut construire une plateforme complete plutot qu'une collection de services deconnectes.",
      "La clarte produit et la lisibilite operationnelle sont traitees comme des priorites de conception.",
      "La souverainete est pensee comme une capacite d'exploitation, pas comme un slogan marketing.",
    ],
    relatedSlugs: [
      "identite-socle-services-sge",
      "plateforme-cloud-plus-souveraine",
      "signifie-vraiment-souverainete-numerique",
    ],
    sections: [
      {
        id: "why-now",
        title: "Pourquoi construire maintenant",
        paragraphs: [
          "Beaucoup d'organisations disposent deja d'une constellation de services cloud, de briques identite et d'outils collaboratifs. Le probleme n'est plus uniquement l'absence d'outils. Le probleme est la fragmentation, l'opacite operationnelle et la dependance a des couches critiques que peu d'equipes maitrisent vraiment.",
          "Sky Genesis Enterprise part de ce constat. Nous ne cherchons pas a empiler une interface de plus. Nous cherchons a construire une base numerique coherentе, avec des choix d'architecture lisibles, une gouvernance explicite et des interfaces qui restent exploitables par des equipes reelles.",
        ],
        callout:
          "Notre ambition n'est pas de promettre l'independance totale. Elle est de rendre la maitrise numerique plus concrete, plus progressive et plus credible.",
      },
      {
        id: "editorial-scope",
        title: "Un blog comme espace editorial officiel",
        paragraphs: [
          "Le blog officiel n'est pas un appendice marketing. Il doit pouvoir accueillir des annonces produit, des notes d'infrastructure, des reflexions de souverainete, des retours d'engineering et des mises a jour plus institutionnelles sur l'ecosysteme SGE.",
          "Cette exigence editoriale impose le meme niveau de clarte que pour le produit lui-meme. Chaque article doit aider a comprendre ce que nous construisons, pourquoi nous le construisons et comment cela s'insere dans la plateforme.",
        ],
      },
      {
        id: "platform-shape",
        title: "Une plateforme composee, mais lisible",
        paragraphs: [
          "Aether Identity, Aether Edge, Aether Cloud, Vault, Mail, Meet ou les futures API publiques ne doivent pas vivre comme des silos de communication. Le blog officialise leur articulation. Il montre comment chaque brique contribue a une architecture plus large.",
          "Cette articulation est essentielle pour des lecteurs corporate comme pour des lecteurs plus techniques. Les premiers cherchent une direction. Les seconds veulent comprendre les compromis, les interfaces et les responsabilites entre couches.",
        ],
      },
    ],
  },
  {
    slug: "identite-socle-services-sge",
    title: "Pourquoi l'identite devient le socle des services SGE",
    excerpt:
      "Aether Identity est pense comme une couche d'orchestration des acces, des roles et des politiques pour l'ensemble de la plateforme.",
    category: "Engineering",
    categorySlug: "engineering",
    publishedAt: "2026-05-09",
    readingTime: 8,
    author: author("platform-team"),
    tags: ["Identity", "IAM", "Architecture"],
    collectionSlugs: ["building-aether-platform", "engineering-notes"],
    aliases: ["aether-identity-acces-roles-politiques"],
    summary: [
      "L'identite n'est pas un simple composant de connexion mais une couche de politique produit.",
      "Les roles, les sessions et les permissions doivent etre coherents entre services.",
      "Une couche IAM lisible reduit la dette de securite et la dette d'integration.",
    ],
    relatedSlugs: [
      "aether-edge-services-critiques",
      "securite-par-defaut-approche-produit",
      "api-publiques-ecosysteme-sge",
    ],
    sections: [
      {
        id: "identity-layer",
        title: "Une couche de politique, pas seulement d'authentification",
        paragraphs: [
          "Dans beaucoup de stacks, l'identite est traitee comme une frontiere: on se connecte, puis le reste du systeme s'organise de maniere plus ou moins autonome. Nous faisons le choix inverse. L'identite devient la couche qui relie organisation, acces, roles, contextes et traces d'administration.",
          "Cette approche permet d'eviter des politiques contradictoires entre produits. Elle rend aussi les decisions de securite et d'ergonomie plus previsibles pour les equipes qui operent plusieurs services simultanement.",
        ],
      },
      {
        id: "shared-contracts",
        title: "Des contrats partages entre produits",
        paragraphs: [
          "Aether Identity doit fournir des contrats simples aux autres briques: comment decrire un principal, comment exprimer un role, comment isoler une organisation, comment tracer une elevation de privilege. La valeur ne vient pas de la sophistication des concepts. Elle vient de leur stabilite.",
          "Quand ces contrats sont stables, Aether Edge, Vault, Mail ou les futures API publiques peuvent avancer plus vite sans re-inventer leurs propres conventions d'acces.",
        ],
        bullets: [
          "Modele d'organisation et d'espaces de travail coherent",
          "Politiques reutilisables entre produits",
          "Journaux d'audit relies a des identites explicites",
        ],
      },
      {
        id: "operational-trust",
        title: "La confiance passe par l'exploitation",
        paragraphs: [
          "Une bonne couche identite ne se juge pas seulement a la qualite du flux de connexion. Elle se juge a sa capacite a rester comprehensible lors d'un incident, d'un changement d'organisation ou d'un audit. C'est pourquoi nous traitons l'operabilite comme une contrainte de conception, au meme niveau que la securite ou l'UX.",
        ],
        codeSample: {
          language: "json",
          filename: "policy.json",
          content:
            '{\n  "resource": "vault.secret",\n  "action": "read",\n  "subject": "workspace:platform-team",\n  "conditions": ["mfa", "managed-device"]\n}',
        },
      },
    ],
  },
  {
    slug: "aether-edge-services-critiques",
    title: "Concevoir Aether Edge pour une infrastructure moderne et souveraine",
    excerpt:
      "Aether Edge rapproche les controles, le routage et l'observabilite des usages critiques sans complexifier inutilement la plateforme.",
    category: "Infrastructure",
    categorySlug: "infrastructure",
    publishedAt: "2026-05-06",
    readingTime: 7,
    author: author("platform-team"),
    tags: ["Edge", "Routing", "Operations"],
    collectionSlugs: ["building-aether-platform", "sovereign-infrastructure"],
    aliases: ["skydb-couche-data-ecosysteme", "observabilite-plateforme-sge"],
    summary: [
      "Aether Edge rapproche le controle du trafic, les politiques et les signaux d'observabilite.",
      "La plateforme doit rester modulaire et lisible meme lorsque les couches critiques se multiplient.",
      "La proximite operationnelle n'a de valeur que si elle reste administrable.",
    ],
    relatedSlugs: [
      "plateforme-cloud-plus-souveraine",
      "securite-par-defaut-approche-produit",
      "identite-socle-services-sge",
    ],
    sections: [
      {
        id: "why-edge",
        title: "Pourquoi une couche edge",
        paragraphs: [
          "Les usages modernes imposent une latence mieux maitrisee, des points d'application de politique plus proches des flux et une collecte de signaux plus fine. Une couche edge bien dessinee peut aider, a condition de ne pas devenir une source additionnelle d'opacite.",
          "Nous concevons Aether Edge comme une couche d'orchestration de trafic et de politique qui doit rester comprehensible par des equipes plateforme, securite et SRE, sans exiger une expertise cachee pour chaque changement de configuration.",
        ],
      },
      {
        id: "observability",
        title: "Le signal avant la sophistication",
        paragraphs: [
          "Une erreur classique consiste a surcharger l'edge de fonctionnalites jusqu'a rendre les incidents difficiles a comprendre. Notre priorite est differente: garder du signal. Chaque decision de routage ou de protection doit laisser une trace exploitable.",
        ],
        bullets: [
          "Evenements relies a des identites et des espaces de travail",
          "Politique de routage versionnee",
          "Mesures de sante et de latence exposees sans ambiguite",
        ],
      },
      {
        id: "operating-model",
        title: "Une exploitation compatible avec la realite",
        paragraphs: [
          "Le niveau de sophistication n'a de valeur que s'il reste soutenable. Nous preferons un edge plus explicite, moins magique, mais plus facile a operer, a diagnostiquer et a documenter.",
        ],
      },
    ],
  },
  {
    slug: "open-source-ouverture-progressive",
    title: "Notre approche de l'open source infrastructure",
    excerpt:
      "Ouvrir progressivement certaines briques SGE exige de penser la documentation, la gouvernance et les surfaces de maintenance avant l'effet d'annonce.",
    category: "Open Source",
    categorySlug: "open-source",
    publishedAt: "2026-05-03",
    readingTime: 6,
    author: author("research-lab"),
    tags: ["Open Source", "Governance", "Documentation"],
    collectionSlugs: ["open-source-at-sge"],
    aliases: [
      "open-source-europeen-ouvrir-utile",
      "publier-open-source-premier",
      "licences-gouvernance-contribution",
      "projet-ouvert-coherent",
    ],
    summary: [
      "Publier du code ne suffit pas a creer un projet ouvert utile.",
      "La documentation, la gouvernance et le perimetre de maintenance doivent etre explicites.",
      "Nous privilegions l'ouverture progressive de briques reelles et soutenables.",
    ],
    relatedSlugs: [
      "api-publiques-ecosysteme-sge",
      "ia-europeenne-construire-utile",
      "construire-infrastructure-numerique-europeenne",
    ],
    sections: [
      {
        id: "scope",
        title: "Choisir ce qui doit etre ouvert",
        paragraphs: [
          "Ouvrir tout trop tot produit souvent une illusion d'ouverture. Les dependances sont floues, les frontieres du projet ne sont pas stabilisees et la maintenance finit par devenir plus couteuse que productive.",
          "Nous preferons identifier des briques avec un perimetre clair, une documentation soutenable et une utilite reelle pour d'autres equipes. Ce choix est moins spectaculaire, mais il produit de meilleurs projets dans la duree.",
        ],
      },
      {
        id: "governance",
        title: "La gouvernance avant la communication",
        paragraphs: [
          "Chaque publication open source engage un rythme de maintenance, une politique de contribution et une responsabilite de clarte. Sans cela, la promesse d'ouverture se transforme rapidement en dette pour tout le monde.",
        ],
        bullets: [
          "Mainteneurs identifies",
          "Regles de versionnement et de support",
          "Documentation produit et technique alignee",
        ],
      },
    ],
  },
  {
    slug: "securite-par-defaut-approche-produit",
    title: "Security by design dans l'ecosysteme SGE",
    excerpt:
      "La securite n'est pas un mode expert. Elle doit se retrouver dans les chemins standards, les parametres initiaux et les interfaces d'administration.",
    category: "Security",
    categorySlug: "security",
    publishedAt: "2026-04-29",
    readingTime: 8,
    author: author("security-office"),
    tags: ["Security", "Trust", "Operations"],
    collectionSlugs: ["security-by-design"],
    aliases: ["gestion-acces-reduire-erreurs", "chiffrement-sauvegardes-reprise", "tests-avant-disponibilite"],
    summary: [
      "Les configurations sures doivent etre les plus simples a activer et a maintenir.",
      "Les politiques de securite doivent rester lisibles pour les equipes produit et operations.",
      "La securite de plateforme depend autant des choix par defaut que des controles avances.",
    ],
    relatedSlugs: [
      "identite-socle-services-sge",
      "aether-edge-services-critiques",
      "plateforme-cloud-plus-souveraine",
    ],
    sections: [
      {
        id: "defaults",
        title: "Des chemins standards qui restent defensifs",
        paragraphs: [
          "Beaucoup de produits proposent des protections puissantes mais les laissent hors du parcours principal. Cela cree un ecart structurel entre ce qui est possible et ce qui est reellement deploie. Nous voulons reduire cet ecart.",
          "Dans l'ecosysteme SGE, cela concerne les sessions, les permissions, les politiques de chiffrement, les journaux d'administration et les gardes-fous sur les integrations.",
        ],
      },
      {
        id: "clarity",
        title: "La lisibilite est une exigence de securite",
        paragraphs: [
          "Une politique incomprehensible est une politique fragile. La securite doit pouvoir etre revue, expliquee, auditee et modifiee sans demander une archeologie d'implementation.",
        ],
        callout:
          "Nous considerons qu'un bon controle de securite doit etre a la fois robuste techniquement et explicable a une equipe qui n'a pas participe a sa conception initiale.",
      },
      {
        id: "ops",
        title: "De la protection a l'exploitation",
        paragraphs: [
          "La securite by design n'est complete que si l'exploitation suit: journaux exploitables, traces coherentes, policies versionnees, modes de reprise testables. C'est cette continuitе qui construit la confiance.",
        ],
      },
    ],
  },
  {
    slug: "plateforme-cloud-plus-souveraine",
    title: "Product update: Aether Cloud et la plateforme d'hebergement souveraine",
    excerpt:
      "Aether Cloud avance comme couche d'hebergement et d'exploitation pour des services critiques qui demandent plus de maitrise, plus de transparence et moins de fragmentation.",
    category: "Product Updates",
    categorySlug: "product-updates",
    publishedAt: "2026-04-24",
    readingTime: 5,
    author: author("editorial-desk"),
    tags: ["Aether Cloud", "Launch", "Infrastructure"],
    collectionSlugs: ["sovereign-infrastructure"],
    aliases: ["aether-mail-confiance-continuite", "aether-vault-couche-plateforme"],
    summary: [
      "Aether Cloud vise une couche d'hebergement et d'exploitation plus lisible.",
      "Le produit avance avec une attention particuliere sur l'observabilite, la fiabilite et les dependances critiques.",
      "La feuille de route privilegie la coherence de plateforme plutot que la multiplication d'annonces.",
    ],
    relatedSlugs: [
      "aether-edge-services-critiques",
      "construire-infrastructure-numerique-europeenne",
      "signifie-vraiment-souverainete-numerique",
    ],
    sections: [
      {
        id: "hosting-layer",
        title: "Une couche d'hebergement qui expose mieux ses garanties",
        paragraphs: [
          "L'hebergement n'est pas seulement un sujet de capacite. C'est aussi un sujet de visibilite sur les flux, les dependances, les politiques d'acces et les options de reprise. Aether Cloud est pense autour de cette exigence de transparence operationnelle.",
        ],
      },
      {
        id: "release-discipline",
        title: "Des mises a jour produit plus disciplinées",
        paragraphs: [
          "Nous preferons publier moins, mais publier avec des frontieres produit plus claires. Une mise a jour utile doit expliquer ce qui devient possible, ce qui reste en construction et ce qui doit encore etre stabilise.",
        ],
      },
    ],
  },
  {
    slug: "api-publiques-ecosysteme-sge",
    title: "Engineering notes: preparer les API publiques de l'ecosysteme SGE",
    excerpt:
      "Une bonne DX commence avant la documentation finale: conventions stables, erreurs lisibles, auth previsible et exemples qui reflètent le vrai produit.",
    category: "Developer Experience",
    categorySlug: "developer-experience",
    publishedAt: "2026-04-20",
    readingTime: 7,
    author: author("developer-relations"),
    tags: ["API", "DX", "SDK"],
    collectionSlugs: ["engineering-notes"],
    aliases: ["sdk-cli-premiers-usages", "exemples-developpeurs-cas-reels", "documenter-erreurs-api"],
    summary: [
      "Les conventions d'API doivent etre stables avant de devenir publiques.",
      "L'authentification, les erreurs et les exemples sont des surfaces produit, pas seulement de la documentation.",
      "Une bonne DX reduit le cout cognitif de l'integration.",
    ],
    relatedSlugs: [
      "identite-socle-services-sge",
      "open-source-ouverture-progressive",
      "ia-europeenne-construire-utile",
    ],
    sections: [
      {
        id: "contracts",
        title: "Les conventions sont le produit",
        paragraphs: [
          "Avant d'ecrire une reference API complete, il faut stabiliser les conventions: nommage, pagination, erreurs, semantique des statuts, modeles d'authentification et strategies d'evolution. Sans cela, la documentation devient une couche de peinture sur un contrat instable.",
        ],
      },
      {
        id: "examples",
        title: "Des exemples qui correspondent a la realite",
        paragraphs: [
          "Les exemples d'integration doivent etre relies aux cas d'usage dominants et aux erreurs reelles. Des snippets parfaits mais artificiels donnent une impression de simplicite trompeuse et font perdre du temps des la premiere integration serieuse.",
        ],
        codeSample: {
          language: "bash",
          filename: "curl-example.sh",
          content:
            "curl -X POST https://api.skygenesisenterprise.com/v1/workspaces \\\n  -H 'Authorization: Bearer <token>' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"name\":\"platform-lab\",\"region\":\"eu-west\"}'",
        },
      },
    ],
  },
  {
    slug: "ia-europeenne-construire-utile",
    title: "Research note: construire une IA europeenne utile avant d'en faire un slogan",
    excerpt:
      "Notre travail de recherche cherche des cas d'usage credibles, compatibles avec les contraintes de confiance, de cout et de gouvernance de l'entreprise.",
    category: "Research",
    categorySlug: "research",
    publishedAt: "2026-04-15",
    readingTime: 6,
    author: author("research-lab"),
    tags: ["Research", "AI", "Governance"],
    collectionSlugs: ["engineering-notes"],
    aliases: [
      "sge-research-choisir-sujets",
      "mesurer-valeur-automatisation-produit",
      "ia-conformite-donnees-sensibles",
      "construire-utile-avant-annonce",
    ],
    summary: [
      "Une recherche utile part de cas d'usage explicites et de contraintes reelles.",
      "Le positionnement europeen n'a de valeur que s'il s'accompagne d'une gouvernance lisible.",
      "Les outils d'IA doivent s'inserer dans une plateforme fiable et documentee.",
    ],
    relatedSlugs: [
      "open-source-ouverture-progressive",
      "api-publiques-ecosysteme-sge",
      "signifie-vraiment-souverainete-numerique",
    ],
    sections: [
      {
        id: "useful-research",
        title: "Une recherche dirigee par les usages",
        paragraphs: [
          "Nous cherchons des sujets qui aident vraiment les equipes produit, plateforme et operations. Cela implique de resister a la tentation de commenter tous les effets de mode. Une note de recherche utile doit eclairer une decision, pas seulement occuper l'espace.",
        ],
      },
      {
        id: "governance",
        title: "La gouvernance comme precondition",
        paragraphs: [
          "Dans un contexte enterprise, les sujets d'IA touchent rapidement aux donnees sensibles, a la conformite, aux responsabilites produit et au cout d'exploitation. Le cadrage n'est donc pas annexe. Il fait partie du coeur du sujet.",
        ],
      },
    ],
  },
  {
    slug: "signifie-vraiment-souverainete-numerique",
    title: "Ce que signifie vraiment la souverainete numerique",
    excerpt:
      "La souverainete ne se limite pas a l'hebergement. Elle concerne la maitrise produit, les dependances, les competences et la capacite d'exploitation.",
    category: "Europe & Sovereignty",
    categorySlug: "europe-sovereignty",
    publishedAt: "2026-04-10",
    readingTime: 8,
    author: author("research-lab"),
    tags: ["Europe", "Sovereignty", "Strategy"],
    collectionSlugs: ["sovereign-infrastructure"],
    aliases: [
      "europe-numerique-plateformes-ouvertes",
      "entreprises-europeennes-identite-commune",
      "sobriete-numerique-plateforme",
      "mesurer-empreinte-service-cloud",
      "durabilite-logicielle-dette-gaspillage",
      "performance-sujet-environnemental",
      "analyse-souverainete-choix-architecture",
      "opinion-europe-plateformes-coherentes",
    ],
    summary: [
      "La souverainete est une capacite operationnelle avant d'etre un message.",
      "Les dependances invisibles doivent etre rendues explicites et gerables.",
      "Une plateforme souveraine doit rester exploitable, lisible et economiquement defendable.",
    ],
    relatedSlugs: [
      "construire-infrastructure-numerique-europeenne",
      "plateforme-cloud-plus-souveraine",
      "ia-europeenne-construire-utile",
    ],
    sections: [
      {
        id: "beyond-hosting",
        title: "Au-dela de l'hebergement",
        paragraphs: [
          "Heberger localement un service ne suffit pas si ses composants critiques, ses interfaces d'administration ou sa trajectoire produit restent hors de portee. Une souverainete utile doit couvrir la comprehension du systeme, sa gouvernance et sa capacite d'evolution.",
        ],
      },
      {
        id: "operational-capacity",
        title: "Une capacite d'exploitation",
        paragraphs: [
          "Nous definissons la souverainete comme une capacite d'exploitation renforcee: savoir de quoi depend un service, qui peut le modifier, comment il evolue, comment il se supervise et comment il se reprend en cas d'incident.",
        ],
        bullets: [
          "Cartographie des dependances critiques",
          "Interfaces et responsabilites lisibles",
          "Documentation exploitable par des equipes internes",
        ],
      },
    ],
  },
  {
    slug: "aether-office-workplace-souverain",
    title: "Product update: vers un workplace souverain avec Aether Office",
    excerpt:
      "Aether Office vise une suite de collaboration plus coherente pour les organisations qui veulent mieux controler leurs outils, leurs donnees et leurs flux de travail.",
    category: "Product Updates",
    categorySlug: "product-updates",
    publishedAt: "2026-04-05",
    readingTime: 5,
    author: author("editorial-desk"),
    tags: ["Aether Office", "Workplace", "Collaboration"],
    collectionSlugs: ["building-aether-platform"],
    aliases: ["aether-meet-collaboration-donnees"],
    summary: [
      "Aether Office avance comme couche workplace integree a la plateforme.",
      "Les flux de collaboration doivent rester compatibles avec les contraintes de confiance et de gouvernance.",
      "Le produit privilegie l'integration avec les briques d'identite et de securite existantes.",
    ],
    relatedSlugs: [
      "identite-socle-services-sge",
      "plateforme-cloud-plus-souveraine",
      "construire-infrastructure-numerique-europeenne",
    ],
    sections: [
      {
        id: "workplace-needs",
        title: "Le workplace comme composant de plateforme",
        paragraphs: [
          "Le workplace n'est pas un monde separe de l'infrastructure. Il depend directement de l'identite, des politiques de partage, de la conformite et des garanties d'exploitation. C'est pourquoi nous l'integrons au meme raisonnement d'ensemble que les autres briques Aether.",
        ],
      },
      {
        id: "integration",
        title: "L'integration avant l'accumulation de fonctionnalites",
        paragraphs: [
          "Notre priorite n'est pas de reproduire indiscriminement tous les outils de collaboration existants. Elle est de proposer une experience plus coherente, mieux gouvernee et plus exploitable pour les organisations qui ont besoin de clarte.",
        ],
      },
    ],
  },
];

export const editorialCollections: EditorialCollection[] = [
  {
    slug: "building-aether-platform",
    title: "Building the Aether Platform",
    description: "Architecture notes and product essays about the platform shape, identity layer and service composition.",
    articleSlugs: [
      "construire-infrastructure-numerique-europeenne",
      "identite-socle-services-sge",
      "aether-edge-services-critiques",
      "aether-office-workplace-souverain",
    ],
  },
  {
    slug: "sovereign-infrastructure",
    title: "Sovereign Infrastructure",
    description: "Cloud, edge and operational control across infrastructure layers designed for European organisations.",
    articleSlugs: [
      "construire-infrastructure-numerique-europeenne",
      "aether-edge-services-critiques",
      "plateforme-cloud-plus-souveraine",
      "signifie-vraiment-souverainete-numerique",
    ],
  },
  {
    slug: "engineering-notes",
    title: "Engineering Notes",
    description: "Implementation-oriented posts for teams working on APIs, platform contracts and applied research.",
    articleSlugs: [
      "identite-socle-services-sge",
      "api-publiques-ecosysteme-sge",
      "ia-europeenne-construire-utile",
    ],
  },
  {
    slug: "open-source-at-sge",
    title: "Open Source at SGE",
    description: "How SGE approaches code publication, governance and sustainable documentation.",
    articleSlugs: ["open-source-ouverture-progressive", "api-publiques-ecosysteme-sge"],
  },
  {
    slug: "security-by-design",
    title: "Security by Design",
    description: "Notes on defensive defaults, trust boundaries and operational resilience across the ecosystem.",
    articleSlugs: ["securite-par-defaut-approche-produit", "identite-socle-services-sge"],
  },
];

const articleAliasMap = new Map<string, string>();
for (const article of editorialArticles) {
  articleAliasMap.set(article.slug, article.slug);
  for (const alias of article.aliases ?? []) {
    articleAliasMap.set(alias, article.slug);
  }
}

const categoryAliasMap = new Map<string, string>();
for (const category of editorialCategories) {
  categoryAliasMap.set(category.slug, category.slug);
  for (const alias of category.aliases ?? []) {
    categoryAliasMap.set(alias, category.slug);
  }
}

export function getAllEditorialArticles() {
  return [...editorialArticles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getFeaturedEditorialArticle() {
  return getAllEditorialArticles().find((article) => article.featured) ?? getAllEditorialArticles()[0];
}

export function getEditorialArticle(slugOrAlias: string) {
  const resolvedSlug = articleAliasMap.get(slugOrAlias);
  if (!resolvedSlug) {
    return null;
  }

  return editorialArticles.find((article) => article.slug === resolvedSlug) ?? null;
}

export function getEditorialCategory(slugOrAlias: string) {
  const resolvedSlug = categoryAliasMap.get(slugOrAlias);
  if (!resolvedSlug) {
    return null;
  }

  return editorialCategories.find((category) => category.slug === resolvedSlug) ?? null;
}

export function getArticlesByCategory(slugOrAlias: string) {
  const category = getEditorialCategory(slugOrAlias);
  if (!category) {
    return [];
  }

  return getAllEditorialArticles().filter((article) => article.categorySlug === category.slug);
}

export function getCollection(slug: string) {
  return editorialCollections.find((collection) => collection.slug === slug) ?? null;
}

export function getCollectionArticles(slug: string) {
  const collection = getCollection(slug);
  if (!collection) {
    return [];
  }

  return collection.articleSlugs
    .map((articleSlug) => getEditorialArticle(articleSlug))
    .filter((article): article is EditorialArticle => article !== null);
}

export function getRelatedArticles(article: EditorialArticle) {
  return article.relatedSlugs
    .map((slug) => getEditorialArticle(slug))
    .filter((entry): entry is EditorialArticle => entry !== null);
}

export function getAdjacentArticles(slugOrAlias: string) {
  const current = getEditorialArticle(slugOrAlias);
  if (!current) {
    return { previous: null, next: null };
  }

  const all = getAllEditorialArticles();
  const index = all.findIndex((article) => article.slug === current.slug);

  return {
    previous: index < all.length - 1 ? all[index + 1] : null,
    next: index > 0 ? all[index - 1] : null,
  };
}
