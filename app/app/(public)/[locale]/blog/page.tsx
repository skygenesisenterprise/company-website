import { Locale, isValidLocale, defaultLocale } from "@/lib/locale";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { ArticleCard } from "@/components/media/article-card";
import { SectionTitle } from "@/components/media/section-title";
import { articlesApi } from "@/lib/api/client";
import type { HomepageArticlesResponse } from "@/lib/api/types";

const isDev = process.env.NODE_ENV !== "production";

async function getHomepageArticles(locale: string) {
  if (isDev) {
    return null;
  }
  try {
    const response = (await articlesApi.getHomepage(locale)) as HomepageArticlesResponse;
    if (response.success && response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Failed to fetch homepage articles:", error);
  }
  return null;
}

function articleToCardProps(article: {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  categoryId?: string;
  viewCount?: number;
  readTime?: number;
  imageUrl?: string;
}) {
  return {
    title: article.title,
    excerpt: article.excerpt,
    category: article.categoryId
      ? article.categoryId.charAt(0).toUpperCase() + article.categoryId.slice(1).replace(/-/g, " ")
      : "Actualité",
    image:
      article.imageUrl ||
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop",
    date: "Il y a 1 heure",
    href: `/article/${article.slug}`,
  };
}

function mergeWithMock<T extends { title: string }>(
  realArticles: T[] | undefined,
  mockArticles: T[],
  maxCount?: number
): T[] {
  const targetCount = maxCount || mockArticles.length;

  if (!realArticles || realArticles.length === 0) {
    return mockArticles.slice(0, targetCount);
  }

  const realCount = Math.min(realArticles.length, targetCount);
  const mockNeeded = targetCount - realCount;

  return [...realArticles.slice(0, realCount), ...mockArticles.slice(0, mockNeeded)];
}

const mockFeaturedArticle = {
  title: "Construire une infrastructure numérique européenne : où en est Sky Genesis Enterprise ?",
  excerpt:
    "Identité, cloud, données, sécurité et applications métier : point d'étape sur la construction de la plateforme Sky Genesis Enterprise.",
  category: "À la une",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop",
  date: "Il y a 2 heures",
  href: "/blog/construire-infrastructure-numerique-europeenne",
};

const mockTopArticles: {
  title: string;
  category: string;
  image: string;
  date: string;
  href: string;
}[] = [
  {
    title: "Pourquoi l'identité devient le socle de nos services",
    category: "Identité",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    date: "Il y a 3 heures",
    href: "/blog/identite-socle-services-sge",
  },
  {
    title: "Aether Office : vers une suite workplace souveraine",
    category: "Produits",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=250&fit=crop",
    date: "Il y a 4 heures",
    href: "/blog/aether-office-workplace-souverain",
  },
  {
    title: "Open-source : ouvrir progressivement sans perdre la cohérence",
    category: "Open Source",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop",
    date: "Il y a 5 heures",
    href: "/blog/open-source-ouverture-progressive",
  },
];

const mockPoliticsArticles = [
  {
    title: "Sky Genesis Enterprise Journal : notre ligne éditoriale pour suivre la construction",
    excerpt: "Actualités produit, notes techniques, décisions d'architecture et coulisses de l'entreprise.",
    category: "Actualités Sky Genesis Enterprise",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=250&fit=crop",
    date: "Il y a 1 heure",
    href: "/blog/ligne-editoriale-sge-journal",
  },
  {
    title: "La plateforme Sky Genesis Enterprise expliquée en cinq couches",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
    date: "Il y a 6 heures",
    href: "/blog/plateforme-sge-cinq-couches",
  },
  {
    title: "Ce que nous construisons avant l'ouverture publique",
    category: "Actualités Sky Genesis Enterprise",
    date: "Il y a 8 heures",
    href: "/blog/construire-avant-ouverture-publique",
  },
  {
    title: "Pourquoi nous documentons nos choix techniques",
    category: "Coulisses",
    date: "Hier",
    href: "/blog/documenter-choix-techniques",
  },
];

const mockInternationalArticles = [
  {
    title: "Ce que signifie vraiment la souveraineté numérique",
    excerpt: "Maîtriser l'hébergement ne suffit pas : il faut aussi penser dépendances, gouvernance et compétences.",
    category: "Souveraineté",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=250&fit=crop",
    date: "Il y a 2 heures",
    href: "/blog/signifie-vraiment-souverainete-numerique",
  },
  {
    title: "Europe numérique : construire des plateformes sans enfermer les utilisateurs",
    category: "Europe numérique",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop",
    date: "Il y a 4 heures",
    href: "/blog/europe-numerique-plateformes-ouvertes",
  },
  {
    title: "Pourquoi les entreprises européennes ont besoin d'une couche d'identité commune",
    category: "Europe numérique",
    date: "Il y a 7 heures",
    href: "/blog/entreprises-europeennes-identite-commune",
  },
];

const mockSportsArticles = [
  {
    title: "SkyDB : consolider la couche data de l'écosystème",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
    date: "Il y a 1 heure",
    href: "/blog/skydb-couche-data-ecosysteme",
  },
  {
    title: "Vers une plateforme cloud plus souveraine",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    date: "Il y a 3 heures",
    href: "/blog/plateforme-cloud-plus-souveraine",
  },
  {
    title: "Aether Edge : rapprocher les services critiques des usages",
    category: "Infrastructure",
    date: "Il y a 5 heures",
    href: "/blog/aether-edge-services-critiques",
  },
  {
    title: "Observabilité : garder le signal quand la plateforme grandit",
    category: "Infrastructure",
    date: "Hier",
    href: "/blog/observabilite-plateforme-sge",
  },
];

const mockCultureArticles = [
  {
    title: "Sécurité par défaut : notre approche produit",
    category: "Sécurité",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
    date: "Il y a 2 heures",
    href: "/blog/securite-par-defaut-approche-produit",
  },
  {
    title: "Gestion des accès : réduire les erreurs sans ralentir les équipes",
    category: "Sécurité",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
    date: "Il y a 6 heures",
    href: "/blog/gestion-acces-reduire-erreurs",
  },
  {
    title: "Chiffrement, sauvegardes et reprise : les fondations de confiance",
    category: "Sécurité",
    date: "Hier",
    href: "/blog/chiffrement-sauvegardes-reprise",
  },
];

const mockStudentArticles = [
  {
    title: "Open-source européen : ouvrir utile, documenter clairement",
    excerpt: "Notre stratégie d'ouverture progressive pour des briques maintenables et réellement réutilisables.",
    category: "Open Source",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop",
    date: "Il y a 1 heure",
    href: "/blog/open-source-europeen-ouvrir-utile",
  },
  {
    title: "Ce que nous voulons publier en premier",
    category: "Open Source",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
    date: "Il y a 4 heures",
    href: "/blog/publier-open-source-premier",
  },
  {
    title: "Licences, gouvernance et contribution : nos critères d'ouverture",
    category: "Open Source",
    date: "Il y a 6 heures",
    href: "/blog/licences-gouvernance-contribution",
  },
  {
    title: "Pourquoi un projet ouvert doit aussi rester cohérent",
    category: "Open Source",
    date: "Hier",
    href: "/blog/projet-ouvert-coherent",
  },
];

const mockEspaceArticles = [
  {
    title: "IA européenne : construire utile avant de promettre trop",
    excerpt: "Des assistants sobres, vérifiables et intégrés aux flux de travail plutôt que des démonstrations isolées.",
    category: "IA & Recherche",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    date: "Il y a 1 heure",
    href: "/blog/ia-europeenne-construire-utile",
  },
  {
    title: "SGE Research : comment nous choisissons les sujets à explorer",
    category: "IA & Recherche",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=250&fit=crop",
    date: "Il y a 3 heures",
    href: "/blog/sge-research-choisir-sujets",
  },
  {
    title: "Mesurer la valeur réelle d'une automatisation produit",
    category: "IA & Recherche",
    date: "Il y a 5 heures",
    href: "/blog/mesurer-valeur-automatisation-produit",
  },
  {
    title: "IA, conformité et données sensibles : notre cadre interne",
    category: "IA & Recherche",
    date: "Hier",
    href: "/blog/ia-conformite-donnees-sensibles",
  },
];

const mockGamingArticles = [
  {
    title: "Développeurs : préparer les API publiques de l'écosystème SGE",
    excerpt: "Conventions, documentation et exemples pour rendre les intégrations plus prévisibles.",
    category: "Développeurs",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    date: "Il y a 2 heures",
    href: "/blog/api-publiques-ecosysteme-sge",
  },
  {
    title: "SDK et CLI : les outils qui accompagneront les premiers usages",
    category: "Développeurs",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    date: "Il y a 5 heures",
    href: "/blog/sdk-cli-premiers-usages",
  },
  {
    title: "Pourquoi nos exemples doivent ressembler à des cas réels",
    category: "Développeurs",
    date: "Il y a 8 heures",
    href: "/blog/exemples-developpeurs-cas-reels",
  },
  {
    title: "Documenter les erreurs autant que les chemins heureux",
    category: "Développeurs",
    date: "Hier",
    href: "/blog/documenter-erreurs-api",
  },
];

const mockInformaticaArticles = [
  {
    title: "Aether Identity : organiser les accès, les rôles et les politiques",
    excerpt: "Une base commune pour connecter les produits SGE et les environnements clients.",
    category: "Aether",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    date: "Il y a 1 heure",
    href: "/blog/aether-identity-acces-roles-politiques",
  },
  {
    title: "Aether Mail : messagerie, confiance et continuité d'activité",
    category: "Aether",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
    date: "Il y a 3 heures",
    href: "/blog/aether-mail-confiance-continuite",
  },
  {
    title: "Aether Vault : penser le coffre-fort comme une couche plateforme",
    category: "Aether",
    date: "Il y a 6 heures",
    href: "/blog/aether-vault-couche-plateforme",
  },
  {
    title: "Aether Meet : collaboration temps réel et maîtrise des données",
    category: "Aether",
    date: "Hier",
    href: "/blog/aether-meet-collaboration-donnees",
  },
];

const mockSocieteArticles = [
  {
    title: "Coulisses : comment une décision produit devient une note d'architecture",
    excerpt: "De l'intuition initiale à la documentation partagée, notre méthode pour éviter les décisions invisibles.",
    category: "Coulisses",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop",
    date: "Il y a 1 heure",
    href: "/blog/decision-produit-note-architecture",
  },
  {
    title: "Construire une marque technique sans surpromettre",
    category: "Coulisses",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=250&fit=crop",
    date: "Il y a 3 heures",
    href: "/blog/marque-technique-sans-surpromettre",
  },
  {
    title: "Ce que nous testons avant de parler de disponibilité",
    category: "Coulisses",
    date: "Il y a 5 heures",
    href: "/blog/tests-avant-disponibilite",
  },
  {
    title: "Roadmap : arbitrer entre vitesse, cohérence et fiabilité",
    category: "Coulisses",
    date: "Hier",
    href: "/blog/roadmap-vitesse-coherence-fiabilite",
  },
];

const mockEnvironnementArticles = [
  {
    title: "Sobriété numérique : concevoir une plateforme qui évite le gaspillage",
    excerpt: "Performance, mutualisation et choix d'architecture au service d'une infrastructure plus durable.",
    category: "Responsabilité",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop",
    date: "Il y a 2 heures",
    href: "/blog/sobriete-numerique-plateforme",
  },
  {
    title: "Mesurer l'empreinte technique d'un service cloud",
    category: "Responsabilité",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop",
    date: "Il y a 4 heures",
    href: "/blog/mesurer-empreinte-service-cloud",
  },
  {
    title: "Durabilité logicielle : moins de dette, moins de gaspillage",
    category: "Responsabilité",
    date: "Il y a 6 heures",
    href: "/blog/durabilite-logicielle-dette-gaspillage",
  },
  {
    title: "Pourquoi la performance est aussi un sujet environnemental",
    category: "Responsabilité",
    date: "Hier",
    href: "/blog/performance-sujet-environnemental",
  },
];

const opinionArticles = [
  {
    title: "Analyse : la souveraineté numérique commence par les choix d'architecture",
    author: "SGE Research",
    date: "Il y a 3 heures",
    href: "/blog/analyse-souverainete-choix-architecture",
  },
  {
    title: "Opinion : l'Europe n'a pas seulement besoin d'alternatives, mais de plateformes cohérentes",
    author: "Équipe SGE",
    date: "Il y a 8 heures",
    href: "/blog/opinion-europe-plateformes-coherentes",
  },
  {
    title: "Note stratégique : pourquoi construire utile doit précéder l'effet d'annonce",
    author: "Équipe SGE",
    date: "Hier",
    href: "/blog/construire-utile-avant-annonce",
  },
];

const mockMostReadArticles = [
  {
    title: "Construire une infrastructure numérique européenne : où en est SGE ?",
    date: "Il y a 2 heures",
    href: "/blog/construire-infrastructure-numerique-europeenne",
  },
  {
    title: "Ce que signifie vraiment la souveraineté numérique",
    date: "Il y a 6 heures",
    href: "/blog/signifie-vraiment-souverainete-numerique",
  },
  {
    title: "Aether Office : vers une suite workplace souveraine",
    date: "Il y a 1 heure",
    href: "/blog/aether-office-workplace-souverain",
  },
  {
    title: "Sécurité par défaut : notre approche produit",
    date: "Il y a 2 heures",
    href: "/blog/securite-par-defaut-approche-produit",
  },
  {
    title: "Open-source : ouvrir progressivement sans perdre la cohérence",
    date: "Il y a 2 heures",
    href: "/blog/open-source-ouverture-progressive",
  },
];

export default async function LocaleHomePage({ params }: { params: Promise<{ locale?: string }> }) {
  const { locale: paramLocale } = await params;
  const locale: Locale = paramLocale && isValidLocale(paramLocale) ? paramLocale : defaultLocale;

  const homepageData = await getHomepageArticles(locale);

  const featured = homepageData?.featured
    ? articleToCardProps(homepageData.featured)
    : mockFeaturedArticle;
  const top = mergeWithMock(homepageData?.topArticles?.map(articleToCardProps), mockTopArticles, 3);
  const mostRead = mergeWithMock(
    homepageData?.mostRead?.map((a) => ({
      title: a.title,
      date: "Il y a 1 heure",
      href: `/article/${a.slug}`,
    })),
    mockMostReadArticles,
    5
  );

  const politicsArticles = mergeWithMock(
    homepageData?.sections?.politique?.map(articleToCardProps),
    mockPoliticsArticles
  );
  const internationalArticles = mergeWithMock(
    homepageData?.sections?.international?.map(articleToCardProps),
    mockInternationalArticles
  );
  const sportsArticles = mergeWithMock(
    homepageData?.sections?.sport?.map(articleToCardProps),
    mockSportsArticles
  );
  const cultureArticles = mergeWithMock(
    homepageData?.sections?.culture?.map(articleToCardProps),
    mockCultureArticles
  );
  const studentArticles = mergeWithMock(
    homepageData?.sections?.etudiant?.map(articleToCardProps),
    mockStudentArticles
  );
  const gamingArticles = mergeWithMock(
    homepageData?.sections?.["jeu-video"]?.map(articleToCardProps),
    mockGamingArticles
  );
  const espaceArticles = mergeWithMock(
    homepageData?.sections?.espace?.map(articleToCardProps),
    mockEspaceArticles
  );
  const informaticaArticles = mergeWithMock(
    homepageData?.sections?.informatique?.map(articleToCardProps),
    mockInformaticaArticles
  );
  const societeArticles = mergeWithMock(
    homepageData?.sections?.societe?.map(articleToCardProps),
    mockSocieteArticles
  );
  const environnementArticles = mergeWithMock(
    homepageData?.sections?.environnement?.map(articleToCardProps),
    mockEnvironnementArticles
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ArticleCard {...featured} variant="featured" categoryColor="bg-primary" />
            </div>
            <div className="space-y-4">
              {top.map((article, i) => (
                <ArticleCard key={i} {...article} variant="horizontal" />
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <SectionTitle title="Actualités Sky Genesis Enterprise" href={`/${locale}/blog/category/sge`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ArticleCard {...politicsArticles[0]} variant="vertical" />
                  <ArticleCard {...politicsArticles[1]} variant="vertical" />
                </div>
                <div className="mt-4 divide-y divide-border border-t border-border">
                  {politicsArticles.slice(2).map((a, i) => (
                    <div key={i} className="py-3">
                      <ArticleCard {...a} variant="compact" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionTitle title="Souveraineté numérique" href={`/${locale}/blog/category/souverainete-numerique`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ArticleCard {...internationalArticles[0]} variant="vertical" />
                  <div className="space-y-4">
                    <ArticleCard {...internationalArticles[1]} variant="horizontal" />
                    <ArticleCard {...internationalArticles[2]} variant="compact" />
                  </div>
                </div>
              </div>
              <div>
                <SectionTitle title="Infrastructure" href={`/${locale}/blog/category/infrastructure`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sportsArticles.slice(0, 2).map((a, i) => (
                    <ArticleCard key={i} {...a} variant="vertical" />
                  ))}
                </div>
                <div className="mt-4 divide-y divide-border border-t border-border">
                  {sportsArticles.slice(2).map((a, i) => (
                    <div key={i} className="py-3">
                      <ArticleCard {...a} variant="compact" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionTitle title="Sécurité" href={`/${locale}/blog/category/securite`} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cultureArticles.map((a, i) => (
                    <ArticleCard key={i} {...a} variant={i === 2 ? "compact" : "vertical"} />
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle title="Open Source" href={`/${locale}/blog/category/open-source`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ArticleCard {...studentArticles[0]} variant="vertical" />
                  <ArticleCard {...studentArticles[1]} variant="vertical" />
                </div>
                <div className="mt-4 divide-y divide-border border-t border-border">
                  {studentArticles.slice(2).map((a, i) => (
                    <div key={i} className="py-3">
                      <ArticleCard {...a} variant="compact" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle title="IA & Recherche" href={`/${locale}/blog/category/ia-recherche`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ArticleCard {...espaceArticles[0]} variant="vertical" />
                  <ArticleCard {...espaceArticles[1]} variant="vertical" />
                </div>
                <div className="mt-4 divide-y divide-border border-t border-border">
                  {espaceArticles.slice(2).map((a, i) => (
                    <div key={i} className="py-3">
                      <ArticleCard {...a} variant="compact" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle title="Développeurs" href={`/${locale}/blog/category/developpeurs`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ArticleCard {...gamingArticles[0]} variant="vertical" />
                  <div className="space-y-4">
                    <ArticleCard {...gamingArticles[1]} variant="horizontal" />
                    <ArticleCard {...gamingArticles[2]} variant="compact" />
                  </div>
                </div>
                <div className="mt-4 divide-y divide-border border-t border-border">
                  {gamingArticles.slice(3).map((a, i) => (
                    <div key={i} className="py-3">
                      <ArticleCard {...a} variant="compact" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle title="Produits Aether" href={`/${locale}/blog/category/produits-aether`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ArticleCard {...informaticaArticles[0]} variant="vertical" />
                  <ArticleCard {...informaticaArticles[1]} variant="vertical" />
                </div>
                <div className="mt-4 divide-y divide-border border-t border-border">
                  {informaticaArticles.slice(2).map((a, i) => (
                    <div key={i} className="py-3">
                      <ArticleCard {...a} variant="compact" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle title="Coulisses" href={`/${locale}/blog/category/coulisses`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ArticleCard {...societeArticles[0]} variant="vertical" />
                  <ArticleCard {...societeArticles[1]} variant="vertical" />
                </div>
                <div className="mt-4 divide-y divide-border border-t border-border">
                  {societeArticles.slice(2).map((a, i) => (
                    <div key={i} className="py-3">
                      <ArticleCard {...a} variant="compact" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle title="Sobriété numérique" href={`/${locale}/blog/category/sobriete-numerique`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ArticleCard {...environnementArticles[0]} variant="vertical" />
                  <ArticleCard {...environnementArticles[1]} variant="vertical" />
                </div>
                <div className="mt-4 divide-y divide-border border-t border-border">
                  {environnementArticles.slice(2).map((a, i) => (
                    <div key={i} className="py-3">
                      <ArticleCard {...a} variant="compact" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-muted p-4 rounded-sm">
                <SectionTitle title="Les plus lus" />
                <div className="space-y-0">
                  {mostRead.map((a, i) => (
                    <div key={i} className="flex gap-3 py-3 border-b border-border last:border-b-0">
                      <span className="font-serif text-2xl font-bold text-primary/30">{i + 1}</span>
                      <ArticleCard {...a} variant="compact" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionTitle title="Analyses & opinions" href={`/${locale}/blog/category/opinions`} />
                <div className="space-y-4">
                  {opinionArticles.map((a, i) => (
                    <div key={i} className="border-b border-border pb-4 last:border-b-0">
                      <ArticleCard {...a} variant="compact" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-sm">
                <h3 className="font-serif text-lg font-bold mb-2">Suivre Sky Genesis Enterprise Journal</h3>
                <p className="text-sm opacity-90 mb-4">
                  Recevez nos articles, notes techniques et annonces majeures.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Adresse email professionnelle"
                    className="w-full px-3 py-2 text-sm bg-background text-foreground rounded-sm placeholder:text-muted-foreground"
                  />
                  <button
                    type="submit"
                    className="w-full px-3 py-2 text-sm font-medium bg-background text-foreground rounded-sm hover:bg-background/90 transition-colors"
                  >
                    S'abonner à Sky Genesis Enterprise Journal
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
