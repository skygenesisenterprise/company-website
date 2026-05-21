import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Boxes,
  Braces,
  Cable,
  Cloud,
  Code2,
  FileCode2,
  FileJson2,
  Globe,
  KeyRound,
  Layers3,
  Link2,
  Package,
  PlugZap,
  Rocket,
  ServerCog,
  ShieldCheck,
  Terminal,
  Waypoints,
  Workflow,
} from "lucide-react";

export type DeveloperPageStatus =
  | "Conceptuel"
  | "En préparation"
  | "En développement"
  | "Prototype"
  | "Alpha"
  | "Beta"
  | "Stable";

export interface DeveloperLink {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}

export interface DeveloperProfileItem {
  label: string;
  value: string;
}

export interface DeveloperCard {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
  status?: DeveloperPageStatus;
  meta?: string[];
}

export interface DeveloperNumberedItem {
  title: string;
  description: string;
  href?: string;
}

export interface DeveloperDefinitionItem {
  label: string;
  value: string;
  description?: string;
  status?: DeveloperPageStatus;
  monospace?: boolean;
}

interface DeveloperBaseSection {
  eyebrow: string;
  title: string;
  description?: string;
  muted?: boolean;
}

export interface DeveloperCardSection extends DeveloperBaseSection {
  kind: "cards";
  cards: DeveloperCard[];
  columns?: 2 | 3;
}

export interface DeveloperNumberedSection extends DeveloperBaseSection {
  kind: "numbered";
  items: DeveloperNumberedItem[];
  columns?: 2 | 3;
}

export interface DeveloperDefinitionSection extends DeveloperBaseSection {
  kind: "definitions";
  items: DeveloperDefinitionItem[];
  columns?: 2 | 3;
}

export interface DeveloperCodeSection extends DeveloperBaseSection {
  kind: "code";
  code: string;
  language: string;
  caption?: string;
  notes?: DeveloperCard[];
}

export type DeveloperSection =
  | DeveloperCardSection
  | DeveloperNumberedSection
  | DeveloperDefinitionSection
  | DeveloperCodeSection;

export interface DeveloperPageContent {
  title: string;
  eyebrow: string;
  description: string;
  body?: string;
  status: DeveloperPageStatus;
  ctas: [DeveloperLink, DeveloperLink];
  profileItems: DeveloperProfileItem[];
  sections: DeveloperSection[];
  bottomTitle?: string;
  bottomDescription?: string;
  bottomLinks?: DeveloperLink[];
}

export const developerResourceSlugs = [
  "api",
  "cli",
  "extensions",
  "postman",
  "quickstarts",
  "sdks",
] as const;

export type DeveloperResourceSlug = (typeof developerResourceSlugs)[number];

export interface DeveloperResourcePageContent extends DeveloperPageContent {
  slug: DeveloperResourceSlug;
}

const developerIcons = {
  BookOpen,
  Boxes,
  Braces,
  Cable,
  Cloud,
  Code2,
  FileCode2,
  FileJson2,
  Globe,
  KeyRound,
  Layers3,
  Link2,
  Package,
  PlugZap,
  Rocket,
  ServerCog,
  ShieldCheck,
  Terminal,
  Waypoints,
  Workflow,
} as const;

type DeveloperIconName = keyof typeof developerIcons;

interface DeveloperRawCard extends Omit<DeveloperCard, "icon"> {
  icon?: DeveloperIconName;
}

interface DeveloperRawCodeSection extends Omit<DeveloperCodeSection, "notes"> {
  notes?: DeveloperRawCard[];
}

interface DeveloperRawCardSection extends Omit<DeveloperCardSection, "cards"> {
  cards: DeveloperRawCard[];
}

type DeveloperRawSection =
  | DeveloperRawCardSection
  | DeveloperNumberedSection
  | DeveloperDefinitionSection
  | DeveloperRawCodeSection;

interface DeveloperRawPageContent extends Omit<DeveloperPageContent, "sections"> {
  sections: DeveloperRawSection[];
}

export interface DeveloperPageMessages {
  metadata: {
    title: string;
    titleTemplate: string;
  };
  common: {
    profile: string;
    explore: string;
    continue: string;
    bottomEyebrow: string;
    supplemental: {
      profileItemDescription: string;
      measureDescription: string;
      expandDescriptionFallback: string;
      statusNarratives: Record<DeveloperPageStatus | "default", string>;
      linkNarratives: {
        quickstarts: string;
        api: string;
        postman: string;
        sdks: string;
        cli: string;
        extensions: string;
        contact: string;
        products: string;
        platform: string;
        default: string;
      };
      sections: {
        framing: {
          eyebrow: string;
          title: string;
          description: string;
        };
        sequence: {
          eyebrow: string;
          title: string;
          description: string;
        };
        productReading: {
          eyebrow: string;
          title: string;
          description: string;
          currentScopeTitle: string;
          visibleMaturityTitle: string;
          primarySignalTitle: string;
        };
        ecosystem: {
          eyebrow: string;
          title: string;
          description: string;
          developerPortalTitle: string;
          developerPortalDescription: string;
          platformTitle: string;
          platformDescription: string;
          productsTitle: string;
          productsDescription: string;
        };
        adoption: {
          eyebrow: string;
          title: string;
          description: string;
          startSmallTitle: string;
          startSmallDescription: string;
          measureTitle: string;
          expandTitle: string;
        };
      };
    };
  };
  home: DeveloperRawPageContent;
  resources: Record<DeveloperResourceSlug, DeveloperRawPageContent & { slug: DeveloperResourceSlug }>;
}

function resolveCard(card: DeveloperRawCard): DeveloperCard {
  return {
    ...card,
    icon: card.icon ? developerIcons[card.icon] : undefined,
  };
}

function resolveSection(section: DeveloperRawSection): DeveloperSection {
  switch (section.kind) {
    case "cards":
      return {
        ...section,
        cards: section.cards.map(resolveCard),
      };
    case "code":
      return {
        ...section,
        notes: section.notes?.map(resolveCard),
      };
    default:
      return section;
  }
}

function resolvePage(page: DeveloperRawPageContent): DeveloperPageContent {
  return {
    ...page,
    ctas: page.ctas as [DeveloperLink, DeveloperLink],
    sections: page.sections.map(resolveSection),
  };
}

export function createDeveloperPortalHome(messages: DeveloperPageMessages): DeveloperPageContent {
  return resolvePage(messages.home);
}

export function createDeveloperResource(
  messages: DeveloperPageMessages,
  slug: DeveloperResourceSlug
): DeveloperResourcePageContent {
  const resource = messages.resources[slug];

  if (!resource) {
    throw new Error(`Unknown developer resource: ${slug}`);
  }

  return {
    ...resolvePage(resource),
    slug,
  };
}
