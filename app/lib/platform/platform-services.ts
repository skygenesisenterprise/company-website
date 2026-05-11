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
  Radar,
  Route,
  Search,
  Send,
  Server,
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
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface PlatformCard {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface PlatformAvailabilityItem {
  label: string;
  value: PlatformServiceStatus | "En progression" | "Non disponible" | "Limité" | "Interne";
}

export interface PlatformService {
  slug: PlatformServiceSlug;
  title: string;
  promise: string;
  description: string;
  status: PlatformServiceStatus;
  purpose: {
    title: string;
    problem: string;
    ecosystem: string;
    benefit: string;
  };
  capabilities: PlatformCard[];
  useCases: PlatformCard[];
  integrations: string[];
  architectureFlow: string[];
  operationalPrinciples: string[];
  availability: PlatformAvailabilityItem[];
  ctas: [PlatformCta, PlatformCta];
  nextStep: string;
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
    title: "Identity",
    promise: "Common identity and access foundations for SGE products.",
    description:
      "Sky Genesis Identity provides a shared authentication layer for public applications, workspace sessions and developer integrations.",
    status: "Available",
    purpose: {
      title: "A controlled identity base for the platform",
      problem:
        "Applications need a consistent way to recognize users, issue sessions and apply access decisions without rebuilding account logic for every product.",
      ecosystem:
        "Identity anchors workspace access, dashboard security, API keys, SDKs and future third-party integrations.",
      benefit:
        "Teams can connect products to one account model while keeping authentication, session policy and audit events visible.",
    },
    capabilities: [
      { icon: Fingerprint, title: "Authentication", description: "Account sign-in flows designed for SGE public and workspace surfaces." },
      { icon: Clock, title: "Sessions", description: "Session handling for browser applications and controlled workspace access." },
      { icon: ShieldCheck, title: "MFA", description: "Multi-factor authentication support for higher-risk account operations." },
      { icon: Code2, title: "SDK integration", description: "Developer-facing integration points for products that need shared identity." },
      { icon: Users, title: "Account lifecycle", description: "Account creation, verification and recovery patterns for SGE services." },
      { icon: LockKeyhole, title: "Access control", description: "Policy-oriented access decisions connected to identity and audit events." },
    ],
    useCases: [
      { title: "Secure application login", description: "Add a consistent login model to an SGE application without duplicating identity logic." },
      { title: "Workspace sessions", description: "Manage authenticated sessions across workspace and dashboard surfaces." },
      { title: "Shared SDK identity", description: "Connect developer SDKs to a common account and token foundation." },
    ],
    integrations: ["Workspace", "Dashboard", "Vault", "API Keys", "SDKs", "Third-party apps"],
    architectureFlow: ["User request", "Authentication", "Session policy", "Access token", "Audit event"],
    operationalPrinciples: ["Least-privilege access", "Auditable session events", "Shared account lifecycle", "Incremental security controls"],
    availability: [
      { label: "Statut actuel", value: "Available" },
      { label: "API publique", value: "Limité" },
      { label: "Intégration dashboard", value: "Available" },
      { label: "Documentation", value: "En progression" },
      { label: "Intégration workspace", value: "Available" },
    ],
    ctas: [
      { label: "Développeurs", href: "/developers", variant: "primary" },
      { label: "Contact", href: "/company/contact", variant: "secondary" },
    ],
    nextStep: "Review the developer entry points or contact SGE for integration context.",
  },
  vault: {
    slug: "vault",
    title: "Vault",
    promise: "Secrets and sensitive integration material managed with policy and audit in mind.",
    description:
      "Sky Genesis Vault is the platform layer for API keys, tokens and secrets that should not live directly inside product code.",
    status: "Private preview",
    purpose: {
      title: "A safer place for platform secrets",
      problem:
        "Products need to store integration secrets without spreading sensitive material across repositories, dashboards or local configuration.",
      ecosystem:
        "Vault connects identity, API keys, webhooks and audit logs into a more controlled secrets workflow.",
      benefit:
        "Developers gain a consistent pattern for requesting secrets while operators retain visibility over access and rotation readiness.",
    },
    capabilities: [
      { icon: FileKey2, title: "Secrets management", description: "Centralized storage model for sensitive application and integration values." },
      { icon: KeyRound, title: "API keys", description: "Controlled handling of service credentials and product API keys." },
      { icon: Database, title: "Token storage", description: "Storage patterns for tokens used by internal services and integrations." },
      { icon: LockKeyhole, title: "Encryption", description: "Encryption-oriented handling for sensitive values and transport boundaries." },
      { icon: Workflow, title: "Rotation readiness", description: "Structure prepared for key rotation workflows as services mature." },
      { icon: FileSearch, title: "Access audit", description: "Audit events for secret access, policy checks and sensitive operations." },
    ],
    useCases: [
      { title: "Store integration secrets", description: "Keep service credentials away from application code and shared documents." },
      { title: "Protect API keys", description: "Give products a consistent way to request keys with identity checks." },
      { title: "Audit sensitive access", description: "Track secret access attempts for operational and security review." },
    ],
    integrations: ["Identity", "API Keys", "Webhooks", "Dashboard", "Audit Logs"],
    architectureFlow: ["Application request", "Identity verification", "Vault policy", "Secret access", "Audit event"],
    operationalPrinciples: ["No direct secret exposure by default", "Identity-bound requests", "Traceable access", "Rotation-aware data model"],
    availability: [
      { label: "Statut actuel", value: "Private preview" },
      { label: "API publique", value: "Planned" },
      { label: "Intégration dashboard", value: "En progression" },
      { label: "Documentation", value: "En progression" },
      { label: "Intégration workspace", value: "Planned" },
    ],
    ctas: [
      { label: "Développeurs", href: "/developers", variant: "primary" },
      { label: "Contact", href: "/company/contact", variant: "secondary" },
    ],
    nextStep: "Use SGE developer channels to discuss preview access and integration requirements.",
  },
  mailer: {
    slug: "mailer",
    title: "Mailer",
    promise: "Transactional communication for account, security and system events.",
    description:
      "Sky Genesis Mailer coordinates application-triggered email flows with templates, routing and delivery visibility.",
    status: "In development",
    purpose: {
      title: "Reliable product communication without ad hoc mail logic",
      problem:
        "Account verification, security alerts and system notifications need a shared delivery path instead of separate product-specific implementations.",
      ecosystem:
        "Mailer links identity, security, scheduling, newsletter and notification workflows across the SGE platform.",
      benefit:
        "Products can emit clear communication events while operations keep templates, logs and routing under review.",
    },
    capabilities: [
      { icon: Mail, title: "Transactional emails", description: "Application emails for account, security and product workflows." },
      { icon: AlertTriangle, title: "Security alerts", description: "Email routing for sensitive account and access events." },
      { icon: BookOpen, title: "Email templates", description: "Reusable templates for consistent institutional communication." },
      { icon: ListChecks, title: "Delivery logs", description: "Basic delivery visibility for operational review and support." },
      { icon: Route, title: "Notification routing", description: "Routing decisions for product-triggered communication events." },
      { icon: Users, title: "Lifecycle emails", description: "Account verification, recovery and lifecycle messages." },
    ],
    useCases: [
      { title: "Verify an account", description: "Send a structured account verification message from Identity." },
      { title: "Notify a security alert", description: "Deliver a clear email when a sensitive security event occurs." },
      { title: "Send a system notification", description: "Route product events to email where an operational message is needed." },
    ],
    integrations: ["Identity", "Security", "Newsletter", "Scheduling", "Notifications"],
    architectureFlow: ["Application event", "Mailer routing", "Template rendering", "Delivery provider", "Logs & audit"],
    operationalPrinciples: ["Template consistency", "Event-based routing", "Delivery traceability", "Provider abstraction"],
    availability: [
      { label: "Statut actuel", value: "In development" },
      { label: "API publique", value: "Planned" },
      { label: "Intégration dashboard", value: "En progression" },
      { label: "Documentation", value: "En progression" },
      { label: "Intégration workspace", value: "Planned" },
    ],
    ctas: [
      { label: "Développeurs", href: "/developers", variant: "primary" },
      { label: "Contact", href: "/company/contact", variant: "secondary" },
    ],
    nextStep: "Follow developer updates or contact SGE for transactional email integration planning.",
  },
  status: {
    slug: "status",
    title: "Status",
    promise: "Service health, incident communication and maintenance transparency.",
    description:
      "Sky Genesis Status gives products and operators a shared model for reporting service health and communicating platform events.",
    status: "In development",
    purpose: {
      title: "Transparent service state for a multi-product platform",
      problem:
        "As products share infrastructure, users and operators need one place to understand health, incidents and maintenance windows.",
      ecosystem:
        "Status connects service signals, notifications, scheduling, public status surfaces and audit logs.",
      benefit:
        "The platform can communicate issues carefully without overstating automation or masking operational uncertainty.",
    },
    capabilities: [
      { icon: Activity, title: "Service health", description: "Health states for public services and selected internal dependencies." },
      { icon: AlertTriangle, title: "Incidents", description: "Structured incident entries with timelines and operational context." },
      { icon: Clock, title: "Maintenance windows", description: "Planned maintenance communication for platform changes." },
      { icon: FileSearch, title: "Status history", description: "Historical records for service state and incident review." },
      { icon: Bell, title: "Internal alerts", description: "Operator-facing alert channels for status changes." },
      { icon: Globe2, title: "Public transparency", description: "Public-facing status communication where appropriate." },
    ],
    useCases: [
      { title: "Follow service health", description: "Check the state of public SGE services from a single status surface." },
      { title: "Prepare maintenance", description: "Publish a planned maintenance window before operational changes." },
      { title: "Communicate incidents", description: "Share incident state and updates with a clear timeline." },
    ],
    integrations: ["Services", "Notifications", "Scheduling", "Public status page", "Audit logs"],
    architectureFlow: ["Service signal", "Status evaluation", "Incident timeline", "Internal notification", "Public update"],
    operationalPrinciples: ["Clear state vocabulary", "Human-reviewed updates", "Incident timelines", "Post-event traceability"],
    availability: [
      { label: "Statut actuel", value: "In development" },
      { label: "API publique", value: "Planned" },
      { label: "Intégration dashboard", value: "En progression" },
      { label: "Documentation", value: "Planned" },
      { label: "Intégration workspace", value: "Planned" },
    ],
    ctas: [
      { label: "Explorer les développeurs", href: "/developers", variant: "primary" },
      { label: "Contact", href: "/company/contact", variant: "secondary" },
    ],
    nextStep: "Use the public status model as it matures, or contact SGE for operational communication needs.",
  },
  search: {
    slug: "search",
    title: "Search",
    promise: "Unified discovery across public content, documentation and platform resources.",
    description:
      "Sky Genesis Search organizes searchable content so users and developers can find relevant pages, docs and product resources.",
    status: "In development",
    purpose: {
      title: "A common discovery layer for the SGE ecosystem",
      problem:
        "Public pages, documentation and product resources become difficult to navigate when each surface implements search separately.",
      ecosystem:
        "Search links CMS pages, documentation, products, developer resources and workspace entry points.",
      benefit:
        "Users can explore the platform through one consistent discovery model while relevance tuning remains under operator control.",
    },
    capabilities: [
      { icon: Search, title: "Unified search", description: "One search experience for selected SGE public and developer surfaces." },
      { icon: Database, title: "Content indexing", description: "Indexing pipeline for pages, documentation and product metadata." },
      { icon: FileSearch, title: "Documentation search", description: "Search paths optimized for developer and support content." },
      { icon: Sparkles, title: "Product discovery", description: "Results that surface product and platform resources together." },
      { icon: SlidersHorizontal, title: "Filters", description: "Structured filtering for clearer navigation across content types." },
      { icon: Gauge, title: "Relevance tuning", description: "Tunable ranking rules as content coverage expands." },
    ],
    useCases: [
      { title: "Search public pages", description: "Find official SGE pages without navigating the full site structure." },
      { title: "Retrieve documentation", description: "Locate developer guidance and API resources from one entry point." },
      { title: "Explore products", description: "Discover product and platform pages through relevant queries." },
    ],
    integrations: ["CMS pages", "Docs", "Products", "Développeurs", "Workspace"],
    architectureFlow: ["Content source", "Indexing", "Ranking", "Query", "Result delivery"],
    operationalPrinciples: ["Curated source coverage", "Explainable ranking", "Respect for published content", "Progressive indexing"],
    availability: [
      { label: "Statut actuel", value: "In development" },
      { label: "API publique", value: "Planned" },
      { label: "Intégration dashboard", value: "Planned" },
      { label: "Documentation", value: "En progression" },
      { label: "Intégration workspace", value: "Planned" },
    ],
    ctas: [
      { label: "Développeurs", href: "/developers", variant: "primary" },
      { label: "Contact", href: "/company/contact", variant: "secondary" },
    ],
    nextStep: "Explore developer resources while the unified search surface continues to mature.",
  },
  edge: {
    slug: "edge",
    title: "Edge",
    promise: "Fondations de routage et de distribution pour les services publics et plateforme SGE.",
    description:
      "Sky Genesis Edge décrit la couche de routage, de contrôle du trafic et de distribution prévue pour un accès résilient aux services SGE.",
    status: "In development",
    purpose: {
      title: "A controlled network entry layer for platform services",
      problem:
        "Public interfaces and platform APIs need routing, monitoring and regional delivery patterns without claiming a hyperscale CDN footprint.",
      ecosystem:
        "Edge connects platform services, status, regions, security and the public website into a shared delivery model.",
      benefit:
        "Operators can reason about traffic paths, service entry points and future regional delivery through one infrastructure pattern.",
    },
    capabilities: [
      { icon: Route, title: "Routing", description: "Request routing policies for public services and controlled origins." },
      { icon: Network, title: "Distribution", description: "Delivery patterns prepared for selected regional deployment models." },
      { icon: CloudCog, title: "Caching readiness", description: "Architecture hooks for caching where product behavior allows it." },
      { icon: SlidersHorizontal, title: "Traffic control", description: "Routing controls for maintenance, rollout and service protection." },
      { icon: ShieldCheck, title: "Edge protection", description: "Security checks and protective boundaries at public entry points." },
      { icon: Globe2, title: "Regional delivery", description: "Region-aware delivery planning without overstating global coverage." },
    ],
    useCases: [
      { title: "Distribute public interfaces", description: "Serve public SGE surfaces through a consistent infrastructure entry layer." },
      { title: "Route service traffic", description: "Direct traffic toward the right service origin using explicit routing policy." },
      { title: "Prepare multi-region infrastructure", description: "Model future regional delivery while keeping current availability clear." },
    ],
    integrations: ["Platform services", "Status", "Regions", "Security", "Public website"],
    architectureFlow: ["Request", "Routing policy", "Edge layer", "Origin service", "Monitoring"],
    operationalPrinciples: ["Explicit routing policy", "Measured rollout paths", "Origin protection", "Regional readiness"],
    availability: [
      { label: "Statut actuel", value: "In development" },
      { label: "API publique", value: "Planned" },
      { label: "Intégration dashboard", value: "Planned" },
      { label: "Documentation", value: "Planned" },
      { label: "Intégration workspace", value: "Planned" },
    ],
    ctas: [
      { label: "Développeurs", href: "/developers", variant: "primary" },
      { label: "Contact", href: "/company/contact", variant: "secondary" },
    ],
    nextStep: "Contact SGE to discuss infrastructure routing requirements and future regional planning.",
  },
  maps: {
    slug: "maps",
    title: "Maps",
    promise: "Geographic context for regions, service locations and infrastructure views.",
    description:
      "Sky Genesis Maps provides a geographic model for representing platform regions, services and product data overlays.",
    status: "Experimental",
    purpose: {
      title: "Geographic visibility for infrastructure decisions",
      problem:
        "Infrastructure, products and organizations often need geographic context, but map views should remain grounded in verified data.",
      ecosystem:
        "Maps connects regions, infrastructure, services, products and selected data overlays.",
      benefit:
        "Teams can visualize service geography and regional models while keeping experimental data clearly separated from production claims.",
    },
    capabilities: [
      { icon: Map, title: "Geographic data", description: "Structured geographic references for platform and product contexts." },
      { icon: Globe2, title: "Region visualization", description: "Views for regions and operational geography." },
      { icon: MapPinned, title: "Service locations", description: "Location models for service presence and planned coverage." },
      { icon: Network, title: "Network mapping", description: "Simple network and infrastructure relationship views." },
      { icon: Layers3, title: "Data overlays", description: "Overlay-ready model for product or operational data layers." },
      { icon: Boxes, title: "Product integration", description: "Integration points for products that need geographic context." },
    ],
    useCases: [
      { title: "Visualize regions", description: "Represent SGE regions and infrastructure areas in a clear map model." },
      { title: "Locate services", description: "Show where selected services are planned, available or under review." },
      { title: "Represent geography", description: "Add geographic context to product and infrastructure data." },
    ],
    integrations: ["Regions", "Infrastructure", "Services", "Products", "Data overlays"],
    architectureFlow: ["Geo source", "Data normalization", "Region model", "Visualization layer", "Product usage"],
    operationalPrinciples: ["Verified source preference", "Clear maturity labels", "Layered data model", "Low-noise visualization"],
    availability: [
      { label: "Statut actuel", value: "Experimental" },
      { label: "API publique", value: "Research" },
      { label: "Intégration dashboard", value: "Planned" },
      { label: "Documentation", value: "Planned" },
      { label: "Intégration workspace", value: "Planned" },
    ],
    ctas: [
      { label: "Développeurs", href: "/developers", variant: "primary" },
      { label: "Contact", href: "/company/contact", variant: "secondary" },
    ],
    nextStep: "Contact SGE before relying on Maps for operational or customer-facing geography.",
  },
  bank: {
    slug: "bank",
    title: "Bank",
    promise: "Research-led financial infrastructure concepts for future ecosystem transactions.",
    description:
      "Sky Genesis Bank is not an operational bank or public regulated financial service. It is a research track for ledger concepts, internal records and future economic infrastructure.",
    status: "Research",
    purpose: {
      title: "A cautious ledger concept for future platform economics",
      problem:
        "Future ecosystem transactions may require structured records, policy validation and audit trails before any regulated payment capability can be considered.",
      ecosystem:
        "Bank connects identity, audit logs, compliance planning, future payments research and an internal ledger model.",
      benefit:
        "SGE can explore economic infrastructure deliberately without presenting banking, payment or settlement services as available.",
    },
    capabilities: [
      { icon: Database, title: "Ledger concept", description: "A research model for structured internal ledger entries and event history." },
      { icon: ListChecks, title: "Internal records", description: "Exploration of financial record structures for platform accounting needs." },
      { icon: CircleDollarSign, title: "Payment readiness", description: "Planning concepts for future payment integrations, not an available payment service." },
      { icon: Landmark, title: "Compliance planning", description: "Early analysis of governance, policy and regulatory boundaries." },
      { icon: Building2, title: "Economic infrastructure", description: "Long-term infrastructure thinking for ecosystem transaction models." },
      { icon: Braces, title: "Ecosystem transactions", description: "Conceptual transaction flows for future SGE products and services." },
    ],
    useCases: [
      { title: "Model an internal ledger", description: "Represent economic events as structured ledger entries for research and planning." },
      { title: "Prepare future flows", description: "Study how future ecosystem transactions could be validated and audited." },
      { title: "Structure experimental finance", description: "Define boundaries before any regulated financial capability is pursued." },
    ],
    integrations: ["Identity", "Audit logs", "Compliance", "Future payments", "Internal ledger"],
    architectureFlow: ["Economic event", "Ledger entry", "Policy validation", "Audit trail", "Future settlement"],
    operationalPrinciples: ["No public banking claims", "Audit-first records", "Compliance before capability", "Research-stage maturity"],
    availability: [
      { label: "Statut actuel", value: "Research" },
      { label: "API publique", value: "Non disponible" },
      { label: "Intégration dashboard", value: "Planned" },
      { label: "Documentation", value: "Planned" },
      { label: "Intégration workspace", value: "Planned" },
    ],
    ctas: [
      { label: "Contact", href: "/company/contact", variant: "primary" },
      { label: "Explorer les développeurs", href: "/developers", variant: "secondary" },
    ],
    nextStep: "Contact SGE for institutional context. No public banking, card, account or payment service is available from this page.",
  },
};

export function getPlatformService(slug: PlatformServiceSlug) {
  return platformServices[slug];
}
