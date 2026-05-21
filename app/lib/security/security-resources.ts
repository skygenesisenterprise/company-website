import type { LucideIcon } from "lucide-react";
import {
  Database,
  Eye,
  FileCheck,
  FileWarning,
  Fingerprint,
  Globe2,
  KeyRound,
  LockKeyhole,
  Radar,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

export type SecurityPageStatus =
  | "Cadre public"
  | "En amélioration continue"
  | "Approche progressive";

export interface SecurityLink {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}

export interface SecurityProfileItem {
  label: string;
  value: string;
}

export interface SecurityCard {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
  status?: SecurityPageStatus;
  meta?: string[];
}

export interface SecurityNumberedItem {
  title: string;
  description: string;
  href?: string;
}

export interface SecurityDefinitionItem {
  label: string;
  value: string;
  description?: string;
  status?: SecurityPageStatus;
  monospace?: boolean;
}

interface SecurityBaseSection {
  eyebrow: string;
  title: string;
  description?: string;
  muted?: boolean;
}

export interface SecurityCardSection extends SecurityBaseSection {
  kind: "cards";
  cards: SecurityCard[];
  columns?: 2 | 3;
}

export interface SecurityNumberedSection extends SecurityBaseSection {
  kind: "numbered";
  items: SecurityNumberedItem[];
  columns?: 2 | 3;
}

export interface SecurityDefinitionSection extends SecurityBaseSection {
  kind: "definitions";
  items: SecurityDefinitionItem[];
  columns?: 2 | 3;
}

export type SecuritySection =
  | SecurityCardSection
  | SecurityNumberedSection
  | SecurityDefinitionSection;

export interface SecurityPageContent {
  title: string;
  eyebrow: string;
  description: string;
  body?: string;
  status: SecurityPageStatus;
  ctas: [SecurityLink, SecurityLink];
  profileItems: SecurityProfileItem[];
  sections: SecuritySection[];
  bottomTitle?: string;
  bottomDescription?: string;
  bottomLinks?: SecurityLink[];
}

export const securityPageSlugs = ["privacy", "trust", "customers"] as const;

export type SecurityPageSlug = (typeof securityPageSlugs)[number];

export interface SecurityResourcePageContent extends SecurityPageContent {
  slug: SecurityPageSlug;
}

const securityIcons = {
  Database,
  Eye,
  FileCheck,
  FileWarning,
  Fingerprint,
  Globe2,
  KeyRound,
  LockKeyhole,
  Radar,
  ServerCog,
  ShieldCheck,
} as const;

type SecurityIconName = keyof typeof securityIcons;

interface SecurityRawCard extends Omit<SecurityCard, "icon"> {
  icon?: SecurityIconName;
}

interface SecurityRawCardSection extends Omit<SecurityCardSection, "cards"> {
  cards: SecurityRawCard[];
}

type SecurityRawSection =
  | SecurityRawCardSection
  | SecurityNumberedSection
  | SecurityDefinitionSection;

interface SecurityRawPageContent extends Omit<SecurityPageContent, "sections"> {
  sections: SecurityRawSection[];
}

export interface SecurityPageMessages {
  metadata: {
    title: string;
    titleTemplate: string;
  };
  common: {
    profile: string;
    explore: string;
    continue: string;
    bottomEyebrow: string;
  };
  home: SecurityRawPageContent;
  resources: Record<SecurityPageSlug, SecurityRawPageContent & { slug: SecurityPageSlug }>;
}

function resolveCard(card: SecurityRawCard): SecurityCard {
  return {
    ...card,
    icon: card.icon ? securityIcons[card.icon] : undefined,
  };
}

function resolveSection(section: SecurityRawSection): SecuritySection {
  if (section.kind === "cards") {
    return {
      ...section,
      cards: section.cards.map(resolveCard),
    };
  }

  return section;
}

function withSectionCount(page: SecurityRawPageContent): SecurityPageContent {
  const resolvedSections = page.sections.map(resolveSection);
  const sectionCountLabel = page.profileItems.some((item) => item.label === "Sections")
    ? page.profileItems
    : [
        ...page.profileItems,
        {
          label: "Sections",
          value: String(resolvedSections.length),
        },
      ];

  return {
    ...page,
    ctas: page.ctas as [SecurityLink, SecurityLink],
    profileItems: sectionCountLabel,
    sections: resolvedSections,
  };
}

export function createSecurityOverview(messages: SecurityPageMessages): SecurityPageContent {
  return withSectionCount(messages.home);
}

export function createSecurityResource(
  messages: SecurityPageMessages,
  slug: SecurityPageSlug
): SecurityResourcePageContent {
  const resource = messages.resources[slug];

  if (!resource) {
    throw new Error(`Unknown security resource: ${slug}`);
  }

  return {
    ...withSectionCount(resource),
    slug,
  };
}
