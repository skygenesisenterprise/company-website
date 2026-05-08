/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/articles/*
 * Layer: Dashboard Page
 * Purpose: Shared editorial mock data and taxonomy for the SGE articles module.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */

export type ArticleStatus = "draft" | "writing" | "review" | "scheduled" | "published" | "archived";
export type ArticleType = "Article" | "Annonce" | "Note technique" | "Dossier" | "Communiqué" | "Analyse";
export type ArticleCategory =
  | "Actualités SGE"
  | "Infrastructure"
  | "Sécurité"
  | "Open Source"
  | "IA & Recherche"
  | "Développeurs"
  | "Partenaires"
  | "Souveraineté numérique"
  | "Notes techniques";
export type ArticleTeam =
  | "Équipe SGE"
  | "Équipe Web Platform"
  | "Équipe Security"
  | "Équipe Platform"
  | "Équipe Editorial"
  | "SGE Research"
  | "SGE Open Source";

export interface EditorialArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  type: ArticleType;
  category: ArticleCategory;
  team: ArticleTeam;
  status: ArticleStatus;
  updatedAt: string;
  publishedAt?: string;
  scheduledAt?: string;
  tags: string[];
  performance: {
    views: number;
    averageReadTime: string;
    shares: number;
    newsletterClicks: number;
  };
  checklist: {
    titleClear: boolean;
    excerptReady: boolean;
    categorySet: boolean;
    seoReady: boolean;
    reviewed: boolean;
  };
  priority?: "Normale" | "Haute";
  submittedAt?: string;
  channel?: "SGE Journal" | "Newsletter" | "Page publique" | "Social" | "Documentation";
}

export const articleCategories: ArticleCategory[] = [
  "Actualités SGE",
  "Infrastructure",
  "Sécurité",
  "Open Source",
  "IA & Recherche",
  "Développeurs",
  "Partenaires",
  "Souveraineté numérique",
  "Notes techniques",
];

export const articleTypes: ArticleType[] = [
  "Article",
  "Annonce",
  "Note technique",
  "Dossier",
  "Communiqué",
  "Analyse",
];

export const articleTeams: ArticleTeam[] = [
  "Équipe SGE",
  "Équipe Web Platform",
  "Équipe Security",
  "Équipe Platform",
  "Équipe Editorial",
  "SGE Research",
  "SGE Open Source",
];

export const statusLabels: Record<ArticleStatus, string> = {
  draft: "Brouillon",
  writing: "En rédaction",
  review: "En révision",
  scheduled: "Planifié",
  published: "Publié",
  archived: "Archivé",
};

export const editorialArticles: EditorialArticle[] = [
  {
    id: "infrastructure-numerique-europeenne",
    title: "Construire une infrastructure numérique européenne",
    slug: "construire-une-infrastructure-numerique-europeenne",
    excerpt:
      "Une lecture produit et plateforme de notre trajectoire pour des services numériques maîtrisés, opérables et auditables en Europe.",
    content:
      "SGE structure son socle autour de services publics, d'observabilité, de sécurité opérationnelle et d'une gouvernance technique lisible. L'objectif est de rendre chaque publication exploitable par les équipes produit, partenaires et clients institutionnels.",
    type: "Dossier",
    category: "Souveraineté numérique",
    team: "Équipe SGE",
    status: "published",
    updatedAt: "2026-05-06",
    publishedAt: "2026-05-06",
    tags: ["souveraineté", "infrastructure", "Europe"],
    performance: { views: 12840, averageReadTime: "4 min 20", shares: 86, newsletterClicks: 412 },
    checklist: { titleClear: true, excerptReady: true, categorySet: true, seoReady: true, reviewed: true },
    channel: "SGE Journal",
  },
  {
    id: "aether-office-etat-avancement",
    title: "Aether Office : état d'avancement",
    slug: "aether-office-etat-avancement",
    excerpt:
      "Point d'étape sur les briques collaboratives, les priorités d'intégration et les jalons de disponibilité.",
    content:
      "La feuille de route Aether Office progresse sur la synchronisation documentaire, les contrôles d'accès et la cohérence entre espaces de travail.",
    type: "Annonce",
    category: "Actualités SGE",
    team: "Équipe Platform",
    status: "scheduled",
    updatedAt: "2026-05-07",
    scheduledAt: "2026-05-09T09:30:00",
    tags: ["aether", "office", "roadmap"],
    performance: { views: 0, averageReadTime: "-", shares: 0, newsletterClicks: 0 },
    checklist: { titleClear: true, excerptReady: true, categorySet: true, seoReady: true, reviewed: true },
    channel: "Newsletter",
  },
  {
    id: "trust-center-pgp",
    title: "Trust Center PGP : vérifier les communications SGE",
    slug: "trust-center-pgp-verifier-les-communications-sge",
    excerpt:
      "Guide pratique pour contrôler les signatures, les empreintes et les canaux officiels de communication SGE.",
    content:
      "Le Trust Center documente les clés publiques, les procédures de rotation et les bonnes pratiques de vérification avant toute interaction sensible.",
    type: "Note technique",
    category: "Sécurité",
    team: "Équipe Security",
    status: "review",
    updatedAt: "2026-05-07",
    submittedAt: "2026-05-07",
    tags: ["pgp", "trust-center", "sécurité"],
    performance: { views: 0, averageReadTime: "-", shares: 0, newsletterClicks: 0 },
    checklist: { titleClear: true, excerptReady: true, categorySet: true, seoReady: true, reviewed: false },
    priority: "Haute",
    channel: "Documentation",
  },
  {
    id: "sge-platform-refonte-pages-publiques",
    title: "SGE Platform : refonte des pages publiques",
    slug: "sge-platform-refonte-des-pages-publiques",
    excerpt:
      "Synthèse éditoriale de la refonte des pages plateforme, avec une attention portée à la clarté produit.",
    content:
      "La refonte vise à rendre les capacités de la plateforme plus lisibles, de l'identité aux services d'orchestration.",
    type: "Article",
    category: "Infrastructure",
    team: "Équipe Web Platform",
    status: "writing",
    updatedAt: "2026-05-05",
    tags: ["platform", "website", "produit"],
    performance: { views: 0, averageReadTime: "-", shares: 0, newsletterClicks: 0 },
    checklist: { titleClear: true, excerptReady: true, categorySet: true, seoReady: false, reviewed: false },
  },
  {
    id: "programme-partenaires-nouvelle-structure",
    title: "Programme partenaires : nouvelle structure",
    slug: "programme-partenaires-nouvelle-structure",
    excerpt:
      "Présentation du nouveau cadre de collaboration pour les intégrateurs, éditeurs et partenaires institutionnels.",
    content:
      "Le programme partenaires clarifie les niveaux de collaboration, les attentes de conformité et les modalités de publication commune.",
    type: "Communiqué",
    category: "Partenaires",
    team: "Équipe Editorial",
    status: "draft",
    updatedAt: "2026-05-03",
    tags: ["partenaires", "programme", "go-to-market"],
    performance: { views: 0, averageReadTime: "-", shares: 0, newsletterClicks: 0 },
    checklist: { titleClear: true, excerptReady: true, categorySet: true, seoReady: false, reviewed: false },
  },
  {
    id: "skydb-consolidation-couche-data",
    title: "SkyDB : consolidation de la couche data",
    slug: "skydb-consolidation-de-la-couche-data",
    excerpt:
      "Note sur la consolidation des schémas, des migrations et des garanties de continuité pour les services SGE.",
    content:
      "SkyDB devient un socle plus explicite pour les produits internes, avec une priorité donnée aux contrats de données et aux audits.",
    type: "Note technique",
    category: "Notes techniques",
    team: "Équipe Platform",
    status: "review",
    updatedAt: "2026-05-04",
    submittedAt: "2026-05-04",
    tags: ["skydb", "data", "architecture"],
    performance: { views: 0, averageReadTime: "-", shares: 0, newsletterClicks: 0 },
    checklist: { titleClear: true, excerptReady: true, categorySet: true, seoReady: false, reviewed: false },
    priority: "Normale",
  },
  {
    id: "open-source-ouverture-progressive",
    title: "Open-source : ouverture progressive de l'écosystème",
    slug: "open-source-ouverture-progressive-de-l-ecosysteme",
    excerpt:
      "Cadre de publication des composants open-source SGE, de la documentation aux critères de maintenance.",
    content:
      "L'ouverture progressive s'appuie sur des dépôts documentés, des règles de contribution et une gouvernance maintenable.",
    type: "Analyse",
    category: "Open Source",
    team: "SGE Open Source",
    status: "scheduled",
    updatedAt: "2026-05-06",
    scheduledAt: "2026-05-13T14:00:00",
    tags: ["open-source", "communauté", "gouvernance"],
    performance: { views: 0, averageReadTime: "-", shares: 0, newsletterClicks: 0 },
    checklist: { titleClear: true, excerptReady: true, categorySet: true, seoReady: true, reviewed: true },
    channel: "SGE Journal",
  },
  {
    id: "developer-platform-apis-sdks-documentation",
    title: "Developer Platform : APIs, SDKs et documentation",
    slug: "developer-platform-apis-sdks-et-documentation",
    excerpt:
      "État des lieux des parcours développeurs, des SDKs en préparation et de la documentation technique.",
    content:
      "La Developer Platform s'organise autour de références API stables, d'exemples intégrables et d'un support plus direct aux équipes techniques.",
    type: "Article",
    category: "Développeurs",
    team: "Équipe Platform",
    status: "draft",
    updatedAt: "2026-04-30",
    tags: ["api", "sdk", "documentation"],
    performance: { views: 0, averageReadTime: "-", shares: 0, newsletterClicks: 0 },
    checklist: { titleClear: true, excerptReady: true, categorySet: true, seoReady: false, reviewed: false },
  },
  {
    id: "souverainete-numerique-approche-produit",
    title: "Souveraineté numérique : notre approche produit",
    slug: "souverainete-numerique-notre-approche-produit",
    excerpt:
      "Comment les choix produit, l'exploitation et la documentation contribuent à une souveraineté concrète.",
    content:
      "La souveraineté numérique est traitée comme une exigence produit vérifiable : architecture, dépendances, localisation, support et gouvernance.",
    type: "Analyse",
    category: "Souveraineté numérique",
    team: "SGE Research",
    status: "published",
    updatedAt: "2026-04-28",
    publishedAt: "2026-04-28",
    tags: ["souveraineté", "produit", "stratégie"],
    performance: { views: 9340, averageReadTime: "3 min 45", shares: 54, newsletterClicks: 266 },
    checklist: { titleClear: true, excerptReady: true, categorySet: true, seoReady: true, reviewed: true },
  },
  {
    id: "identity-confiance-centrale",
    title: "Identity : pourquoi la confiance devient centrale",
    slug: "identity-pourquoi-la-confiance-devient-centrale",
    excerpt:
      "Analyse des besoins d'identité, de preuve et de traçabilité dans les services numériques SGE.",
    content:
      "Les fonctions d'identité deviennent centrales dès que les services doivent prouver l'origine d'une action, d'un message ou d'une délégation.",
    type: "Dossier",
    category: "IA & Recherche",
    team: "SGE Research",
    status: "archived",
    updatedAt: "2026-04-16",
    publishedAt: "2026-04-10",
    tags: ["identity", "confiance", "recherche"],
    performance: { views: 6120, averageReadTime: "5 min 05", shares: 39, newsletterClicks: 148 },
    checklist: { titleClear: true, excerptReady: true, categorySet: true, seoReady: true, reviewed: true },
  },
];

export function getArticleById(id: string) {
  return editorialArticles.find((article) => article.id === id) ?? editorialArticles[0];
}

export function getChecklistCompletion(article: EditorialArticle) {
  const values = Object.values(article.checklist);
  return Math.round((values.filter(Boolean).length / values.length) * 100);
}

export function formatDate(value?: string) {
  if (!value) return "Non défini";

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function formatDateTime(value?: string) {
  if (!value) return "Non défini";

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}
