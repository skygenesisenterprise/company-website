import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bell,
  BookOpen,
  Building2,
  Code2,
  Database,
  FileKey2,
  FileSearch,
  Fingerprint,
  GitBranch,
  Globe2,
  HeartPulse,
  KeyRound,
  Layers3,
  LockKeyhole,
  Mail,
  MessageSquare,
  Network,
  Route,
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

export interface SolutionCard {
  icon?: LucideIcon;
}

export interface RelatedStackItem {
  key: string;
  href: string;
}

export interface SolutionContent {
  slug: SolutionSlug;
  category: SolutionCategory;
  capabilities: SolutionCard[];
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

export const solutions: Record<SolutionSlug, SolutionContent> = {
  b2c: {
    slug: "b2c",
    category: "useCase",
    capabilities: [
      { icon: Fingerprint },
      { icon: Users },
      { icon: Bell },
      { icon: Route },
      { icon: ShieldCheck },
      { icon: Activity },
    ],
    relatedPlatform: [
      { key: "identity", href: "/platform/identity" },
      { key: "mailer", href: "/platform/mailer" },
      { key: "search", href: "/platform/search" },
      { key: "status", href: "/platform/status" },
    ],
    relatedProducts: [
      { key: "shield", href: "/products/shield" },
      { key: "mail", href: "/products/mail" },
      { key: "chat", href: "/products/chat" },
    ],
    ctas: [
      { href: "/company/contact", variant: "primary" },
      { href: "/products", variant: "secondary" },
    ],
  },
  b2b: {
    slug: "b2b",
    category: "useCase",
    capabilities: [
      { icon: Building2 },
      { icon: Users },
      { icon: LockKeyhole },
      { icon: Code2 },
      { icon: FileSearch },
      { icon: Layers3 },
    ],
    relatedPlatform: [
      { key: "identity", href: "/platform/identity" },
      { key: "vault", href: "/platform/vault" },
      { key: "webhooks", href: "/developers/api" },
      { key: "status", href: "/platform/status" },
    ],
    relatedProducts: [
      { key: "giteria", href: "/products/giteria" },
      { key: "schematik", href: "/products/schematik" },
      { key: "shield", href: "/products/shield" },
    ],
    ctas: [
      { href: "/company/contact", variant: "primary" },
      { href: "/developers", variant: "secondary" },
    ],
  },
  infrastructure: {
    slug: "infrastructure",
    category: "useCase",
    capabilities: [
      { icon: Network },
      { icon: Activity },
      { icon: FileKey2 },
      { icon: KeyRound },
      { icon: GitBranch },
      { icon: FileSearch },
    ],
    relatedPlatform: [
      { key: "edge", href: "/platform/edge" },
      { key: "vault", href: "/platform/vault" },
      { key: "status", href: "/platform/status" },
      { key: "search", href: "/platform/search" },
    ],
    relatedProducts: [
      { key: "shield", href: "/products/shield" },
      { key: "vpn", href: "/products/vpn" },
      { key: "schematik", href: "/products/schematik" },
    ],
    ctas: [
      { href: "/platform", variant: "primary" },
      { href: "/company/contact", variant: "secondary" },
    ],
  },
  workplace: {
    slug: "workplace",
    category: "useCase",
    capabilities: [
      { icon: Fingerprint },
      { icon: Mail },
      { icon: MessageSquare },
      { icon: Video },
      { icon: Table2 },
      { icon: Layers3 },
    ],
    relatedPlatform: [
      { key: "identity", href: "/platform/identity" },
      { key: "vault", href: "/platform/vault" },
      { key: "mailer", href: "/platform/mailer" },
      { key: "search", href: "/platform/search" },
      { key: "status", href: "/platform/status" },
    ],
    relatedProducts: [
      { key: "mail", href: "/products/mail" },
      { key: "chat", href: "/products/chat" },
      { key: "meet", href: "/products/meet" },
      { key: "sheets", href: "/products/sheets" },
    ],
    ctas: [
      { href: "/products", variant: "primary" },
      { href: "/company/contact", variant: "secondary" },
    ],
  },
  financial: {
    slug: "financial",
    category: "industry",
    capabilities: [
      { icon: Fingerprint },
      { icon: FileSearch },
      { icon: LockKeyhole },
      { icon: Database },
      { icon: Workflow },
      { icon: Activity },
    ],
    relatedPlatform: [
      { key: "identity", href: "/platform/identity" },
      { key: "vault", href: "/platform/vault" },
      { key: "status", href: "/platform/status" },
      { key: "bank", href: "/platform/bank" },
    ],
    relatedProducts: [
      { key: "shield", href: "/products/shield" },
      { key: "vpn", href: "/products/vpn" },
      { key: "sheets", href: "/products/sheets" },
    ],
    ctas: [
      { href: "/company/contact", variant: "primary" },
      { href: "/platform", variant: "secondary" },
    ],
  },
  healthcare: {
    slug: "healthcare",
    category: "industry",
    capabilities: [
      { icon: HeartPulse },
      { icon: Mail },
      { icon: LockKeyhole },
      { icon: FileSearch },
      { icon: Activity },
      { icon: Users },
    ],
    relatedPlatform: [
      { key: "identity", href: "/platform/identity" },
      { key: "vault", href: "/platform/vault" },
      { key: "status", href: "/platform/status" },
      { key: "mailer", href: "/platform/mailer" },
    ],
    relatedProducts: [
      { key: "shield", href: "/products/shield" },
      { key: "mail", href: "/products/mail" },
      { key: "meet", href: "/products/meet" },
      { key: "sheets", href: "/products/sheets" },
    ],
    ctas: [
      { href: "/company/contact", variant: "primary" },
      { href: "/products", variant: "secondary" },
    ],
  },
  retail: {
    slug: "retail",
    category: "industry",
    capabilities: [
      { icon: Users },
      { icon: Route },
      { icon: Bell },
      { icon: Search },
      { icon: MessageSquare },
      { icon: ShoppingCart },
    ],
    relatedPlatform: [
      { key: "identity", href: "/platform/identity" },
      { key: "search", href: "/platform/search" },
      { key: "mailer", href: "/platform/mailer" },
      { key: "status", href: "/platform/status" },
    ],
    relatedProducts: [
      { key: "mail", href: "/products/mail" },
      { key: "chat", href: "/products/chat" },
      { key: "sheets", href: "/products/sheets" },
    ],
    ctas: [
      { href: "/company/contact", variant: "primary" },
      { href: "/products", variant: "secondary" },
    ],
  },
  government: {
    slug: "government",
    category: "industry",
    capabilities: [
      { icon: Globe2 },
      { icon: Fingerprint },
      { icon: Activity },
      { icon: ShieldCheck },
      { icon: BookOpen },
      { icon: Layers3 },
    ],
    relatedPlatform: [
      { key: "identity", href: "/platform/identity" },
      { key: "vault", href: "/platform/vault" },
      { key: "edge", href: "/platform/edge" },
      { key: "status", href: "/platform/status" },
      { key: "search", href: "/platform/search" },
    ],
    relatedProducts: [
      { key: "shield", href: "/products/shield" },
      { key: "vpn", href: "/products/vpn" },
      { key: "schematik", href: "/products/schematik" },
    ],
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

export function getSolution(slug: SolutionSlug) {
  return solutions[slug];
}
