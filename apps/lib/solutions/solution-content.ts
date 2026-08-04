import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Banknote,
  Bell,
  BookOpen,
  Brain,
  Building2,
  Code2,
  Database,
  Fingerprint,
  GitBranch,
  Globe2,
  GraduationCap,
  HeartPulse,
  KeyRound,
  Layers3,
  LockKeyhole,
  Mail,
  Megaphone,
  MessageSquare,
  Network,
  RadioTower,
  Search,
  ShieldCheck,
  ShoppingCart,
  Table2,
  Users,
  Video,
  Workflow,
} from "lucide-react";

export type SolutionCategory = "useCase" | "industry";

export interface SolutionCta {
  href: string;
  variant?: "primary" | "secondary";
}

export interface SolutionIconItem {
  icon?: LucideIcon;
}

export interface RelatedStackItem {
  key: string;
  href: string;
  icon?: LucideIcon;
}

export interface SolutionContent {
  slug: SolutionSlug;
  category: SolutionCategory;
  heroNodeKeys: string[];
  challengeIcons: SolutionIconItem[];
  workflowIcons: SolutionIconItem[];
  relatedPlatform: RelatedStackItem[];
  relatedProducts: RelatedStackItem[];
  ctas: [SolutionCta, SolutionCta];
}

export const solutionSlugs = [
  "b2c",
  "b2b",
  "infrastructure",
  "workplace",
  "financial",
  "healthcare",
  "retail",
  "government",
] as const;

export type SolutionSlug = (typeof solutionSlugs)[number];

const corePlatform = {
  identity: { key: "identity", href: "/platform/identity", icon: Fingerprint },
  vault: { key: "vault", href: "/platform/vault", icon: KeyRound },
  edge: { key: "edge", href: "/platform/edge", icon: RadioTower },
  status: { key: "status", href: "/platform/status", icon: Activity },
  search: { key: "search", href: "/platform/search", icon: Search },
  mailer: { key: "mailer", href: "/platform/mailer", icon: Mail },
  bank: { key: "bank", href: "/platform/bank", icon: Banknote },
};

const coreProducts = {
  shield: { key: "shield", href: "/products/shield", icon: ShieldCheck },
  vpn: { key: "vpn", href: "/products/vpn", icon: Network },
  giteria: { key: "giteria", href: "/products/giteria", icon: GitBranch },
  schematik: { key: "schematik", href: "/products/schematik", icon: Workflow },
  mail: { key: "mail", href: "/products/mail", icon: Mail },
  chat: { key: "chat", href: "/products/chat", icon: MessageSquare },
  meet: { key: "meet", href: "/products/meet", icon: Video },
  sheets: { key: "sheets", href: "/products/sheets", icon: Table2 },
};

export const solutions: Record<SolutionSlug, SolutionContent> = {
  b2c: {
    slug: "b2c",
    category: "useCase",
    heroNodeKeys: ["users", "identity", "mailer", "search", "status", "shield"],
    challengeIcons: [{ icon: Users }, { icon: Activity }, { icon: ShieldCheck }],
    workflowIcons: [{ icon: Fingerprint }, { icon: Bell }, { icon: Search }],
    relatedPlatform: [corePlatform.identity, corePlatform.mailer, corePlatform.search, corePlatform.status],
    relatedProducts: [coreProducts.shield, coreProducts.mail, coreProducts.chat],
    ctas: [
      { href: "/company/contact", variant: "primary" },
      { href: "/products", variant: "secondary" },
    ],
  },
  b2b: {
    slug: "b2b",
    category: "useCase",
    heroNodeKeys: ["partners", "identity", "apis", "vault", "status", "giteria"],
    challengeIcons: [{ icon: Building2 }, { icon: Code2 }, { icon: Search }],
    workflowIcons: [{ icon: Building2 }, { icon: Code2 }, { icon: Activity }],
    relatedPlatform: [corePlatform.identity, corePlatform.vault, corePlatform.status, corePlatform.search],
    relatedProducts: [coreProducts.giteria, coreProducts.schematik, coreProducts.shield],
    ctas: [
      { href: "/company/contact", variant: "primary" },
      { href: "/developers", variant: "secondary" },
    ],
  },
  infrastructure: {
    slug: "infrastructure",
    category: "useCase",
    heroNodeKeys: ["cloud", "edge", "vault", "status", "giteria", "shield"],
    challengeIcons: [{ icon: Layers3 }, { icon: Activity }, { icon: Network }],
    workflowIcons: [{ icon: GitBranch }, { icon: Activity }, { icon: KeyRound }],
    relatedPlatform: [corePlatform.edge, corePlatform.vault, corePlatform.status, corePlatform.search, corePlatform.identity],
    relatedProducts: [coreProducts.shield, coreProducts.vpn, coreProducts.giteria, coreProducts.schematik],
    ctas: [
      { href: "/platform", variant: "primary" },
      { href: "/company/contact", variant: "secondary" },
    ],
  },
  workplace: {
    slug: "workplace",
    category: "useCase",
    heroNodeKeys: ["identity", "mail", "chat", "meet", "sheets", "vault"],
    challengeIcons: [{ icon: MessageSquare }, { icon: Fingerprint }, { icon: Users }],
    workflowIcons: [{ icon: Users }, { icon: ShieldCheck }, { icon: Search }],
    relatedPlatform: [corePlatform.identity, corePlatform.vault, corePlatform.mailer, corePlatform.search, corePlatform.status],
    relatedProducts: [coreProducts.mail, coreProducts.chat, coreProducts.meet, coreProducts.sheets],
    ctas: [
      { href: "/office", variant: "primary" },
      { href: "/company/contact", variant: "secondary" },
    ],
  },
  financial: {
    slug: "financial",
    category: "industry",
    heroNodeKeys: ["bank", "identity", "vault", "status", "shield", "sheets"],
    challengeIcons: [{ icon: Banknote }, { icon: Search }, { icon: LockKeyhole }],
    workflowIcons: [{ icon: Banknote }, { icon: Users }, { icon: Table2 }],
    relatedPlatform: [corePlatform.bank, corePlatform.identity, corePlatform.vault, corePlatform.status],
    relatedProducts: [coreProducts.shield, coreProducts.vpn, coreProducts.sheets],
    ctas: [
      { href: "/company/contact", variant: "primary" },
      { href: "/platform/finance", variant: "secondary" },
    ],
  },
  healthcare: {
    slug: "healthcare",
    category: "industry",
    heroNodeKeys: ["identity", "vault", "meet", "mail", "status", "shield"],
    challengeIcons: [{ icon: HeartPulse }, { icon: Users }, { icon: Activity }],
    workflowIcons: [{ icon: HeartPulse }, { icon: LockKeyhole }, { icon: Bell }],
    relatedPlatform: [corePlatform.identity, corePlatform.vault, corePlatform.status, corePlatform.mailer],
    relatedProducts: [coreProducts.shield, coreProducts.mail, coreProducts.meet, coreProducts.sheets],
    ctas: [
      { href: "/company/contact", variant: "primary" },
      { href: "/products", variant: "secondary" },
    ],
  },
  retail: {
    slug: "retail",
    category: "industry",
    heroNodeKeys: ["stores", "users", "mailer", "search", "chat", "status"],
    challengeIcons: [{ icon: ShoppingCart }, { icon: Megaphone }, { icon: Users }],
    workflowIcons: [{ icon: Building2 }, { icon: Bell }, { icon: Activity }],
    relatedPlatform: [corePlatform.identity, corePlatform.search, corePlatform.mailer, corePlatform.status],
    relatedProducts: [coreProducts.mail, coreProducts.chat, coreProducts.sheets],
    ctas: [
      { href: "/company/contact", variant: "primary" },
      { href: "/products", variant: "secondary" },
    ],
  },
  government: {
    slug: "government",
    category: "industry",
    heroNodeKeys: ["identity", "edge", "status", "vault", "search", "shield"],
    challengeIcons: [{ icon: Building2 }, { icon: Globe2 }, { icon: ShieldCheck }],
    workflowIcons: [{ icon: Building2 }, { icon: Bell }, { icon: Users }],
    relatedPlatform: [corePlatform.identity, corePlatform.vault, corePlatform.edge, corePlatform.status, corePlatform.search],
    relatedProducts: [coreProducts.shield, coreProducts.vpn, coreProducts.schematik],
    ctas: [
      { href: "/company/contact", variant: "primary" },
      { href: "/platform", variant: "secondary" },
    ],
  },
};

export const useCaseSolutions = solutionSlugs.filter(
  (slug) => solutions[slug].category === "useCase"
);

export const industrySolutions = solutionSlugs.filter(
  (slug) => solutions[slug].category === "industry"
);

export const adjacentSolutionThemes = [
  { key: "development", icon: Code2 },
  { key: "communications", icon: MessageSquare },
  { key: "media", icon: Megaphone },
  { key: "education", icon: GraduationCap },
  { key: "intelligence", icon: Brain },
  { key: "operations", icon: Workflow },
  { key: "dataGovernance", icon: Database },
  { key: "knowledge", icon: BookOpen },
];

export function getSolution(slug: SolutionSlug) {
  return solutions[slug];
}
