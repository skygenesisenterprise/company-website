import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  Bell,
  BookOpen,
  Boxes,
  Braces,
  Building2,
  CircleDollarSign,
  Clock,
  CloudCog,
  Code2,
  Database,
  FileKey2,
  FileSearch,
  Fingerprint,
  Gauge,
  Globe2,
  KeyRound,
  Landmark,
  Layers3,
  ListChecks,
  LockKeyhole,
  Mail,
  Map,
  MapPinned,
  Network,
  Route,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

export type PlatformServiceStatus =
  | "Available"
  | "Private preview"
  | "In development"
  | "Experimental"
  | "Planned"
  | "Research";

export interface PlatformCta {
  href: string;
  variant?: "primary" | "secondary";
}

export interface PlatformCard {
  icon?: LucideIcon;
}

export interface PlatformAvailabilityItem {
  label: "currentStatus" | "publicApi" | "dashboardIntegration" | "documentation" | "workspaceIntegration";
  value: PlatformServiceStatus | "inProgress" | "notAvailable" | "limited" | "internal";
}

export interface PlatformService {
  slug: PlatformServiceSlug;
  status: PlatformServiceStatus;
  capabilities: PlatformCard[];
  availability: PlatformAvailabilityItem[];
  ctas: [PlatformCta, PlatformCta];
}

export const platformServiceSlugs = [
  "edge",
  "bank",
  "status",
  "search",
  "identity",
  "maps",
  "vault",
  "mailer",
] as const;

export type PlatformServiceSlug = (typeof platformServiceSlugs)[number];

export const platformServices: Record<PlatformServiceSlug, PlatformService> = {
  identity: {
    slug: "identity",
    status: "Available",
    capabilities: [
      { icon: Fingerprint },
      { icon: Clock },
      { icon: ShieldCheck },
      { icon: Code2 },
      { icon: Users },
      { icon: LockKeyhole },
    ],
    availability: [
      { label: "currentStatus", value: "Available" },
      { label: "publicApi", value: "limited" },
      { label: "dashboardIntegration", value: "Available" },
      { label: "documentation", value: "inProgress" },
      { label: "workspaceIntegration", value: "Available" },
    ],
    ctas: [
      { href: "/developers", variant: "primary" },
      { href: "/company/contact", variant: "secondary" },
    ],
  },
  vault: {
    slug: "vault",
    status: "Private preview",
    capabilities: [
      { icon: FileKey2 },
      { icon: KeyRound },
      { icon: Database },
      { icon: LockKeyhole },
      { icon: Workflow },
      { icon: FileSearch },
    ],
    availability: [
      { label: "currentStatus", value: "Private preview" },
      { label: "publicApi", value: "Planned" },
      { label: "dashboardIntegration", value: "inProgress" },
      { label: "documentation", value: "inProgress" },
      { label: "workspaceIntegration", value: "Planned" },
    ],
    ctas: [
      { href: "/developers", variant: "primary" },
      { href: "/company/contact", variant: "secondary" },
    ],
  },
  mailer: {
    slug: "mailer",
    status: "In development",
    capabilities: [
      { icon: Mail },
      { icon: AlertTriangle },
      { icon: BookOpen },
      { icon: ListChecks },
      { icon: Route },
      { icon: Users },
    ],
    availability: [
      { label: "currentStatus", value: "In development" },
      { label: "publicApi", value: "Planned" },
      { label: "dashboardIntegration", value: "inProgress" },
      { label: "documentation", value: "inProgress" },
      { label: "workspaceIntegration", value: "Planned" },
    ],
    ctas: [
      { href: "/developers", variant: "primary" },
      { href: "/company/contact", variant: "secondary" },
    ],
  },
  status: {
    slug: "status",
    status: "In development",
    capabilities: [
      { icon: Activity },
      { icon: AlertTriangle },
      { icon: Clock },
      { icon: FileSearch },
      { icon: Bell },
      { icon: Globe2 },
    ],
    availability: [
      { label: "currentStatus", value: "In development" },
      { label: "publicApi", value: "Planned" },
      { label: "dashboardIntegration", value: "inProgress" },
      { label: "documentation", value: "Planned" },
      { label: "workspaceIntegration", value: "Planned" },
    ],
    ctas: [
      { href: "/developers", variant: "primary" },
      { href: "/company/contact", variant: "secondary" },
    ],
  },
  search: {
    slug: "search",
    status: "In development",
    capabilities: [
      { icon: Search },
      { icon: Database },
      { icon: FileSearch },
      { icon: Sparkles },
      { icon: SlidersHorizontal },
      { icon: Gauge },
    ],
    availability: [
      { label: "currentStatus", value: "In development" },
      { label: "publicApi", value: "Planned" },
      { label: "dashboardIntegration", value: "Planned" },
      { label: "documentation", value: "inProgress" },
      { label: "workspaceIntegration", value: "Planned" },
    ],
    ctas: [
      { href: "/developers", variant: "primary" },
      { href: "/company/contact", variant: "secondary" },
    ],
  },
  edge: {
    slug: "edge",
    status: "In development",
    capabilities: [
      { icon: Route },
      { icon: Network },
      { icon: CloudCog },
      { icon: SlidersHorizontal },
      { icon: ShieldCheck },
      { icon: Globe2 },
    ],
    availability: [
      { label: "currentStatus", value: "In development" },
      { label: "publicApi", value: "Planned" },
      { label: "dashboardIntegration", value: "Planned" },
      { label: "documentation", value: "Planned" },
      { label: "workspaceIntegration", value: "Planned" },
    ],
    ctas: [
      { href: "/developers", variant: "primary" },
      { href: "/company/contact", variant: "secondary" },
    ],
  },
  maps: {
    slug: "maps",
    status: "Experimental",
    capabilities: [
      { icon: Map },
      { icon: Globe2 },
      { icon: MapPinned },
      { icon: Network },
      { icon: Layers3 },
      { icon: Boxes },
    ],
    availability: [
      { label: "currentStatus", value: "Experimental" },
      { label: "publicApi", value: "Research" },
      { label: "dashboardIntegration", value: "Planned" },
      { label: "documentation", value: "Planned" },
      { label: "workspaceIntegration", value: "Planned" },
    ],
    ctas: [
      { href: "/developers", variant: "primary" },
      { href: "/company/contact", variant: "secondary" },
    ],
  },
  bank: {
    slug: "bank",
    status: "Research",
    capabilities: [
      { icon: Database },
      { icon: ListChecks },
      { icon: CircleDollarSign },
      { icon: Landmark },
      { icon: Building2 },
      { icon: Braces },
    ],
    availability: [
      { label: "currentStatus", value: "Research" },
      { label: "publicApi", value: "notAvailable" },
      { label: "dashboardIntegration", value: "Planned" },
      { label: "documentation", value: "Planned" },
      { label: "workspaceIntegration", value: "Planned" },
    ],
    ctas: [
      { href: "/company/contact", variant: "primary" },
      { href: "/developers", variant: "secondary" },
    ],
  },
};

export function getPlatformService(slug: PlatformServiceSlug) {
  return platformServices[slug];
}
