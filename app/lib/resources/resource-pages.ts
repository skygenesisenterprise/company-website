import type { LucideIcon } from "lucide-react";
import {
  Binary,
  BookOpen,
  Boxes,
  Building2,
  Calendar,
  Cloud,
  Database,
  FileText,
  Globe,
  Library,
  MonitorPlay,
  Network,
  Presentation,
  Radio,
  ScrollText,
  Server,
  Shield,
  ShieldCheck,
  Users,
  UsersRound,
  Video,
  Workflow,
} from "lucide-react";

export type ResourcePageStatus =
  | "Scénarios publics"
  | "Publications à venir"
  | "Sessions à venir";

export interface ResourceLink {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}

export interface ResourceProfileItem {
  label: string;
  value: string;
}

export interface ResourceCard {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
  status?: ResourcePageStatus;
  meta?: string[];
}

export interface ResourceNumberedItem {
  title: string;
  description: string;
  href?: string;
}

export interface ResourceDefinitionItem {
  label: string;
  value: string;
  description?: string;
  status?: ResourcePageStatus;
  monospace?: boolean;
}

interface ResourceBaseSection {
  eyebrow: string;
  title: string;
  description?: string;
  muted?: boolean;
}

export interface ResourceCardSection extends ResourceBaseSection {
  kind: "cards";
  cards: ResourceCard[];
  columns?: 2 | 3;
}

export interface ResourceNumberedSection extends ResourceBaseSection {
  kind: "numbered";
  items: ResourceNumberedItem[];
  columns?: 2 | 3;
}

export interface ResourceDefinitionSection extends ResourceBaseSection {
  kind: "definitions";
  items: ResourceDefinitionItem[];
  columns?: 2 | 3;
}

export type ResourceSection =
  | ResourceCardSection
  | ResourceNumberedSection
  | ResourceDefinitionSection;

export interface ResourcePageContent {
  title: string;
  eyebrow: string;
  description: string;
  body?: string;
  status: ResourcePageStatus;
  ctas: [ResourceLink, ResourceLink];
  profileItems: ResourceProfileItem[];
  sections: ResourceSection[];
  bottomTitle?: string;
  bottomDescription?: string;
  bottomLinks?: ResourceLink[];
}

export const resourcePageSlugs = ["caseStudies", "whitepapers", "webinars"] as const;

export type ResourcePageSlug = (typeof resourcePageSlugs)[number];

export interface ResourcePageMessages {
  metadata: {
    titleTemplate: string;
  };
  common: {
    profile: string;
    explore: string;
    continue: string;
    bottomEyebrow: string;
  };
  resources: Record<ResourcePageSlug, ResourceRawPageContent>;
}

const resourceIcons = {
  Binary,
  BookOpen,
  Boxes,
  Building2,
  Calendar,
  Cloud,
  Database,
  FileText,
  Globe,
  Library,
  MonitorPlay,
  Network,
  Presentation,
  Radio,
  ScrollText,
  Server,
  Shield,
  ShieldCheck,
  Users,
  UsersRound,
  Video,
  Workflow,
} as const;

type ResourceIconName = keyof typeof resourceIcons;

interface ResourceRawCard extends Omit<ResourceCard, "icon"> {
  icon?: ResourceIconName;
}

interface ResourceRawCardSection extends Omit<ResourceCardSection, "cards"> {
  cards: ResourceRawCard[];
}

type ResourceRawSection =
  | ResourceRawCardSection
  | ResourceNumberedSection
  | ResourceDefinitionSection;

interface ResourceRawPageContent extends Omit<ResourcePageContent, "sections"> {
  metadata: {
    title: string;
    description: string;
  };
  sections: ResourceRawSection[];
}

function resolveCard(card: ResourceRawCard): ResourceCard {
  return {
    ...card,
    icon: card.icon ? resourceIcons[card.icon] : undefined,
  };
}

function resolveSection(section: ResourceRawSection): ResourceSection {
  if (section.kind === "cards") {
    return {
      ...section,
      cards: section.cards.map(resolveCard),
    };
  }

  return section;
}

export function createResourcePage(
  messages: ResourcePageMessages,
  slug: ResourcePageSlug
): ResourcePageContent {
  const page = messages.resources[slug];

  if (!page) {
    throw new Error(`Unknown resource page: ${slug}`);
  }

  return {
    ...page,
    ctas: page.ctas as [ResourceLink, ResourceLink],
    profileItems: [
      ...page.profileItems,
      {
        label: "Sections",
        value: String(page.sections.length),
      },
    ],
    sections: page.sections.map(resolveSection),
  };
}

export function getResourceMetadata(messages: ResourcePageMessages, slug: ResourcePageSlug) {
  const page = messages.resources[slug];

  if (!page) {
    throw new Error(`Unknown resource page: ${slug}`);
  }

  return page.metadata;
}
