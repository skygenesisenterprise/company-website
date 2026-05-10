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
  Landmark,
  Layers3,
  LockKeyhole,
  Mail,
  Map,
  MessageSquare,
  Network,
  Route,
  Search,
  ShieldCheck,
  ShoppingCart,
  Store,
  Table2,
  Users,
  Video,
  Workflow,
} from "lucide-react";

export type SolutionCategory = "use-case" | "industry";

export interface SolutionCta {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface SolutionCard {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface RelatedStackItem {
  label: string;
  href: string;
}

export interface SolutionContent {
  slug: SolutionSlug;
  category: SolutionCategory;
  title: string;
  positioning: string;
  description: string;
  challenge: {
    title: string;
    context: string;
    friction: string;
    risk: string;
  };
  approach: {
    title: string;
    body: string;
    principles: string[];
  };
  capabilities: SolutionCard[];
  architectureFlow: string[];
  relatedPlatform: RelatedStackItem[];
  relatedProducts: RelatedStackItem[];
  adoptionPath: SolutionCard[];
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
    category: "use-case",
    title: "B2C",
    positioning: "Customer-facing digital services built around identity, communication and trust.",
    description:
      "Designed for organizations that need clearer customer accounts, lifecycle communication and support paths without building every platform capability from scratch.",
    challenge: {
      title: "Customer experiences depend on many hidden systems",
      context:
        "B2C services often combine account creation, notifications, support, security signals and analytics planning.",
      friction:
        "When those systems are assembled independently, customers face inconsistent flows and teams lose operational visibility.",
      risk:
        "A fragmented foundation can make account recovery, support routing and security communication harder to maintain.",
    },
    approach: {
      title: "A progressive customer platform foundation",
      body:
        "SGE combines identity, mailer, search and status foundations with product experiences such as Shield, Mail and Chat. The approach is intended to help teams start with the customer account journey, then add communication and support workflows gradually.",
      principles: ["Identity-led account model", "Clear lifecycle events", "Security signals before automation", "Support paths that can evolve"],
    },
    capabilities: [
      { icon: Fingerprint, title: "Customer identity", description: "Account access and authentication patterns for customer-facing services." },
      { icon: Users, title: "Account lifecycle", description: "Registration, verification, recovery and account state flows." },
      { icon: Bell, title: "Notifications", description: "Product and account messages routed through controlled communication paths." },
      { icon: Route, title: "Support routing", description: "Paths that help customer requests reach the right internal workflow." },
      { icon: ShieldCheck, title: "Security signals", description: "Signals designed to help teams understand account and access risk." },
      { icon: Activity, title: "Analytics readiness", description: "Event structure that can support future product and support analytics." },
    ],
    architectureFlow: ["User", "Identity", "Account", "Notifications", "Support", "Analytics"],
    relatedPlatform: [
      { label: "Identity", href: "/platform/identity" },
      { label: "Mailer", href: "/platform/mailer" },
      { label: "Search", href: "/platform/search" },
      { label: "Status", href: "/platform/status" },
    ],
    relatedProducts: [
      { label: "Shield", href: "/products/shield" },
      { label: "Mail", href: "/products/mail" },
      { label: "Chat", href: "/products/chat" },
    ],
    adoptionPath: [
      { title: "Clarify the customer journey", description: "Identify the account, notification and support moments that matter first." },
      { title: "Map required services", description: "Connect identity, mailer, search and support-related product surfaces." },
      { title: "Build progressively", description: "Start with core account flows before adding analytics or automation readiness." },
    ],
    ctas: [
      { label: "Contact SGE", href: "/company/contact", variant: "primary" },
      { label: "Explore Products", href: "/products", variant: "secondary" },
    ],
  },
  b2b: {
    slug: "b2b",
    category: "use-case",
    title: "B2B SaaS",
    positioning: "Organization, team and developer foundations for SaaS products.",
    description:
      "Built to support SaaS teams that need workspaces, organization access, integrations and auditability as their product matures.",
    challenge: {
      title: "B2B software needs more than user login",
      context:
        "SaaS products need organizations, teams, roles, developer integrations and traceable operational activity.",
      friction:
        "Adding those capabilities late can produce fragile permissions, inconsistent APIs and unclear audit trails.",
      risk:
        "Without a structured foundation, scaling from a simple app to an organization-ready product becomes expensive and risky.",
    },
    approach: {
      title: "An organization-first SaaS foundation",
      body:
        "SGE is intended to combine Identity, Vault, Status and integration surfaces with products such as Giteria, Schematik and Shield. Teams can begin with workspace and role models, then expand toward developer workflows and audit visibility.",
      principles: ["Organization context by default", "Role-aware access", "Developer integration readiness", "Auditability before scale"],
    },
    capabilities: [
      { icon: Building2, title: "Organization management", description: "Structures for organizations, teams and product ownership." },
      { icon: Users, title: "Team access", description: "Team-aware access patterns for workspace and product areas." },
      { icon: LockKeyhole, title: "Role-based permissions", description: "Permission models designed around roles and operational boundaries." },
      { icon: Code2, title: "Developer integrations", description: "API, webhook and SDK readiness for product extensibility." },
      { icon: FileSearch, title: "Audit trails", description: "Traceable events for access, administration and sensitive actions." },
      { icon: Layers3, title: "Workspace readiness", description: "A workspace model that can connect product, account and team surfaces." },
    ],
    architectureFlow: ["Organization", "Identity", "Workspace", "Roles", "APIs", "Audit logs"],
    relatedPlatform: [
      { label: "Identity", href: "/platform/identity" },
      { label: "Vault", href: "/platform/vault" },
      { label: "Webhooks", href: "/developers/api" },
      { label: "Status", href: "/platform/status" },
    ],
    relatedProducts: [
      { label: "Giteria", href: "/products/giteria" },
      { label: "Schematik", href: "/products/schematik" },
      { label: "Shield", href: "/products/shield" },
    ],
    adoptionPath: [
      { title: "Clarify the SaaS model", description: "Define organizations, teams, roles and admin workflows." },
      { title: "Map platform dependencies", description: "Connect identity, vault, webhooks and status where needed." },
      { title: "Build progressively", description: "Add audit trails and developer integrations as the product surface stabilizes." },
    ],
    ctas: [
      { label: "Contact SGE", href: "/company/contact", variant: "primary" },
      { label: "Explore Developers", href: "/developers", variant: "secondary" },
    ],
  },
  infrastructure: {
    slug: "infrastructure",
    category: "use-case",
    title: "Infrastructure",
    positioning: "Operational foundations for services, secrets, visibility and integration.",
    description:
      "Intended for teams that need to organize service access, keys, status, webhooks and operational logging around a coherent platform model.",
    challenge: {
      title: "Infrastructure operations need shared control points",
      context:
        "Modern services depend on API keys, secrets, webhooks, health signals and logs across many environments.",
      friction:
        "When each service owns its own operational model, teams lose consistency and incident review becomes harder.",
      risk:
        "Unstructured infrastructure increases exposure around secrets, access and service visibility.",
    },
    approach: {
      title: "A platform-connected operations model",
      body:
        "SGE combines Edge, Vault, Status, Search and product experiences such as Shield, VPN and Schematik to support a gradual infrastructure operating model. The focus is on visibility, controlled access and maintainable service boundaries.",
      principles: ["Service boundaries first", "Secrets handled centrally", "Status visibility", "Logs and audit where they matter"],
    },
    capabilities: [
      { icon: Network, title: "Service orchestration", description: "Conceptual service organization across routing, access and operations." },
      { icon: Activity, title: "Status visibility", description: "Health and incident visibility for platform and service contexts." },
      { icon: FileKey2, title: "Secrets management", description: "Controlled handling of secrets, tokens and sensitive integration material." },
      { icon: KeyRound, title: "API keys", description: "API key planning for service-to-service and developer access." },
      { icon: GitBranch, title: "Webhooks", description: "Event delivery patterns for product and infrastructure workflows." },
      { icon: FileSearch, title: "Operational logging", description: "Logs and audit events for operational review." },
    ],
    architectureFlow: ["Services", "API Keys", "Webhooks", "Vault", "Status", "Audit Logs"],
    relatedPlatform: [
      { label: "Edge", href: "/platform/edge" },
      { label: "Vault", href: "/platform/vault" },
      { label: "Status", href: "/platform/status" },
      { label: "Search", href: "/platform/search" },
    ],
    relatedProducts: [
      { label: "Shield", href: "/products/shield" },
      { label: "VPN", href: "/products/vpn" },
      { label: "Schematik", href: "/products/schematik" },
    ],
    adoptionPath: [
      { title: "Clarify service boundaries", description: "Identify which services, keys and events need shared controls." },
      { title: "Map required services", description: "Connect vault, status, edge and logging needs to the operating model." },
      { title: "Build progressively", description: "Start with secrets and visibility before expanding orchestration." },
    ],
    ctas: [
      { label: "Explore Platform", href: "/platform", variant: "primary" },
      { label: "Contact SGE", href: "/company/contact", variant: "secondary" },
    ],
  },
  workplace: {
    slug: "workplace",
    category: "use-case",
    title: "Workplace",
    positioning: "Communication and productivity flows connected to identity and workspace context.",
    description:
      "Designed for teams that need mail, chat, meetings and structured work surfaces connected to a common account and access foundation.",
    challenge: {
      title: "Work tools become fragmented quickly",
      context:
        "Teams coordinate across mail, chat, meetings, tables and account settings every day.",
      friction:
        "When each surface is disconnected, onboarding, permissions, communication and follow-up become harder to manage.",
      risk:
        "A fragmented workplace can weaken security and make operational continuity dependent on too many isolated tools.",
    },
    approach: {
      title: "A workspace built from shared foundations",
      body:
        "SGE connects Identity, Vault, Mailer, Search and Status with products such as Mail, Chat, Meet and Sheets. The approach is product-oriented but keeps account, access and operational foundations visible.",
      principles: ["Common identity", "Workspace navigation", "Secure communication", "Progressive product adoption"],
    },
    capabilities: [
      { icon: Fingerprint, title: "Identity & access", description: "Shared account and access foundation for workplace tools." },
      { icon: Mail, title: "Mail", description: "Professional communication and account-related messages." },
      { icon: MessageSquare, title: "Chat", description: "Team spaces, channels and operational conversations." },
      { icon: Video, title: "Meet", description: "Meeting flows planned around workspace and scheduling context." },
      { icon: Table2, title: "Sheets", description: "Collaborative tables and structured operational data." },
      { icon: Layers3, title: "Workspace navigation", description: "A coherent navigation model across workplace surfaces." },
    ],
    architectureFlow: ["Identity", "Workspace", "Mail / Chat / Meet / Sheets", "Vault", "Status", "Audit Logs"],
    relatedPlatform: [
      { label: "Identity", href: "/platform/identity" },
      { label: "Vault", href: "/platform/vault" },
      { label: "Mailer", href: "/platform/mailer" },
      { label: "Search", href: "/platform/search" },
      { label: "Status", href: "/platform/status" },
    ],
    relatedProducts: [
      { label: "Mail", href: "/products/mail" },
      { label: "Chat", href: "/products/chat" },
      { label: "Meet", href: "/products/meet" },
      { label: "Sheets", href: "/products/sheets" },
    ],
    adoptionPath: [
      { title: "Clarify workplace needs", description: "Identify communication, meetings and data workflows that need coherence." },
      { title: "Map required services", description: "Connect identity, mailer, search and status foundations." },
      { title: "Build progressively", description: "Introduce products one surface at a time as readiness improves." },
    ],
    ctas: [
      { label: "Explore Products", href: "/products", variant: "primary" },
      { label: "Contact SGE", href: "/company/contact", variant: "secondary" },
    ],
  },
  financial: {
    slug: "financial",
    category: "industry",
    title: "Financial Services",
    positioning: "Secure, auditable foundations for financial-service-adjacent digital systems.",
    description:
      "Designed for cautious planning around identity, data protection, auditability and future ledger readiness. This is not a claim of regulated banking or payment service availability.",
    challenge: {
      title: "Financial contexts require restraint and auditability",
      context:
        "Financial-service environments depend on secure identity, clear records, data protection and operational transparency.",
      friction:
        "Digital products in this sector can become risky when access, audit and policy workflows are added after the fact.",
      risk:
        "Overstating financial capabilities is dangerous; any ledger or payment-related work must remain explicit about maturity and regulatory boundaries.",
    },
    approach: {
      title: "Security-first planning without banking claims",
      body:
        "SGE connects Identity, Vault, Status and Bank research concepts with products such as Shield, VPN and Sheets. The approach is intended to support auditability, controlled access and future-ready record structures without presenting regulated services as available.",
      principles: ["No public banking claim", "Audit-first design", "Data protection", "Compliance workflow planning"],
    },
    capabilities: [
      { icon: Fingerprint, title: "Secure identity", description: "Identity and access patterns for sensitive digital services." },
      { icon: FileSearch, title: "Auditability", description: "Traceable events for access, administrative and record-related actions." },
      { icon: LockKeyhole, title: "Data protection", description: "Protection patterns for sensitive data and integration material." },
      { icon: Database, title: "Ledger readiness", description: "Research-stage ledger concepts for future economic records." },
      { icon: Workflow, title: "Compliance workflows", description: "Workflow planning for review, policy and operational controls." },
      { icon: Activity, title: "Operational transparency", description: "Status and visibility patterns for service communication." },
    ],
    architectureFlow: ["User / Organization", "Identity", "Ledger readiness", "Audit logs", "Compliance workflows", "Operational transparency"],
    relatedPlatform: [
      { label: "Identity", href: "/platform/identity" },
      { label: "Vault", href: "/platform/vault" },
      { label: "Status", href: "/platform/status" },
      { label: "Bank", href: "/platform/bank" },
    ],
    relatedProducts: [
      { label: "Shield", href: "/products/shield" },
      { label: "VPN", href: "/products/vpn" },
      { label: "Sheets", href: "/products/sheets" },
    ],
    adoptionPath: [
      { title: "Clarify the regulated boundary", description: "Separate available digital workflows from regulated financial capabilities." },
      { title: "Map required services", description: "Identify identity, vault, audit and status needs before ledger research." },
      { title: "Build progressively", description: "Prototype internal records and governance workflows before any public capability." },
    ],
    ctas: [
      { label: "Contact SGE", href: "/company/contact", variant: "primary" },
      { label: "Explore Platform", href: "/platform", variant: "secondary" },
    ],
  },
  healthcare: {
    slug: "healthcare",
    category: "industry",
    title: "Healthcare",
    positioning: "Privacy-first coordination patterns for sensitive teams and services.",
    description:
      "Intended to help healthcare-adjacent organizations reason about secure access, communication, data boundaries and availability visibility without claiming sector certification.",
    challenge: {
      title: "Sensitive collaboration needs clear boundaries",
      context:
        "Healthcare contexts involve sensitive communication, care-team coordination and strict expectations around privacy.",
      friction:
        "Tools that are not designed around identity, boundaries and audit can make sensitive operations difficult to govern.",
      risk:
        "Any healthcare deployment requires careful legal, security and operational review before production use.",
    },
    approach: {
      title: "Privacy-first building blocks for care-team workflows",
      body:
        "SGE combines Identity, Vault, Status and Mailer foundations with Shield, Mail, Meet and Sheets. The approach focuses on controlled access, secure communication and auditable coordination while remaining transparent about maturity.",
      principles: ["Privacy-first access", "Secure communication", "Auditable events", "Availability awareness"],
    },
    capabilities: [
      { icon: HeartPulse, title: "Privacy-first access", description: "Access patterns designed around sensitive users and teams." },
      { icon: Mail, title: "Secure communication", description: "Communication paths connected to identity and security controls." },
      { icon: LockKeyhole, title: "Data boundaries", description: "Boundaries for sensitive records, messages and operational data." },
      { icon: FileSearch, title: "Audit logs", description: "Traceable events for access and sensitive workflows." },
      { icon: Activity, title: "Availability visibility", description: "Status visibility for services that support coordination." },
      { icon: Users, title: "Team coordination", description: "Team communication and structured workspace patterns." },
    ],
    architectureFlow: ["Care team", "Identity", "Secure communication", "Data boundaries", "Audit logs", "Availability status"],
    relatedPlatform: [
      { label: "Identity", href: "/platform/identity" },
      { label: "Vault", href: "/platform/vault" },
      { label: "Status", href: "/platform/status" },
      { label: "Mailer", href: "/platform/mailer" },
    ],
    relatedProducts: [
      { label: "Shield", href: "/products/shield" },
      { label: "Mail", href: "/products/mail" },
      { label: "Meet", href: "/products/meet" },
      { label: "Sheets", href: "/products/sheets" },
    ],
    adoptionPath: [
      { title: "Clarify the care workflow", description: "Identify sensitive communication and coordination needs." },
      { title: "Map required services", description: "Connect identity, vault, mailer and status foundations." },
      { title: "Build progressively", description: "Validate privacy, legal and security boundaries before operational dependency." },
    ],
    ctas: [
      { label: "Contact SGE", href: "/company/contact", variant: "primary" },
      { label: "Explore Products", href: "/products", variant: "secondary" },
    ],
  },
  retail: {
    slug: "retail",
    category: "industry",
    title: "Retail & Ecommerce",
    positioning: "Customer accounts, communication and discovery patterns for commerce teams.",
    description:
      "Built to support retail and ecommerce contexts where customer identity, campaign links, notifications, search and support routing need a clearer foundation.",
    challenge: {
      title: "Commerce experiences depend on fast, reliable customer flows",
      context:
        "Retail services need account access, campaign communication, product discovery and support continuity.",
      friction:
        "Fragmented identity, messaging and search can create customer friction and operational support gaps.",
      risk:
        "Poorly connected customer systems can weaken trust, increase support load and slow experimentation.",
    },
    approach: {
      title: "A customer-flow foundation for commerce",
      body:
        "SGE combines Identity, Search, Mailer and Status with products such as Mail, Chat and Sheets. The approach is intended to help teams build customer journeys progressively while keeping support and communication visible.",
      principles: ["Customer account clarity", "Search and discovery", "Notification discipline", "Support continuity"],
    },
    capabilities: [
      { icon: Users, title: "Customer accounts", description: "Account and lifecycle flows for commerce users." },
      { icon: Route, title: "Campaign links", description: "Campaign entry points connected to identity and communication paths." },
      { icon: Bell, title: "Notifications", description: "Customer and system notifications routed through platform foundations." },
      { icon: Search, title: "Search", description: "Discovery patterns for content, products and support resources." },
      { icon: MessageSquare, title: "Support routing", description: "Conversation and support paths for customer requests." },
      { icon: ShoppingCart, title: "Commerce integrations", description: "Integration planning for commerce systems and operational data." },
    ],
    architectureFlow: ["Customer", "Identity", "Campaign link", "Notification", "Search", "Support routing"],
    relatedPlatform: [
      { label: "Identity", href: "/platform/identity" },
      { label: "Search", href: "/platform/search" },
      { label: "Mailer", href: "/platform/mailer" },
      { label: "Status", href: "/platform/status" },
    ],
    relatedProducts: [
      { label: "Mail", href: "/products/mail" },
      { label: "Chat", href: "/products/chat" },
      { label: "Sheets", href: "/products/sheets" },
    ],
    adoptionPath: [
      { title: "Clarify the customer flow", description: "Map account, campaign, notification and support moments." },
      { title: "Map required services", description: "Connect identity, search, mailer and support product surfaces." },
      { title: "Build progressively", description: "Start with account and communication foundations before commerce automation." },
    ],
    ctas: [
      { label: "Contact SGE", href: "/company/contact", variant: "primary" },
      { label: "Explore Products", href: "/products", variant: "secondary" },
    ],
  },
  government: {
    slug: "government",
    category: "industry",
    title: "Public Sector",
    positioning: "Sovereign, maintainable digital-service foundations for public contexts.",
    description:
      "Designed for public-sector planning around secure identity, transparency, access governance and long-term maintainability. It does not claim public-sector certification or deployment references.",
    challenge: {
      title: "Public digital services require durable foundations",
      context:
        "Public services need identity, security, transparency, open standards and maintainable operations over long time horizons.",
      friction:
        "Short-term tooling decisions can create dependency, fragmentation and difficult maintenance obligations.",
      risk:
        "Without clear governance and operational transparency, public digital services can become hard to trust and sustain.",
    },
    approach: {
      title: "Sovereign architecture with open foundations",
      body:
        "SGE connects Identity, Vault, Edge, Status and Search with products such as Shield, VPN and Schematik. The approach is intended to support secure service delivery, public transparency and long-term operations without overstating readiness.",
      principles: ["Sovereign infrastructure", "Secure identity", "Open standards", "Maintainable operations"],
    },
    capabilities: [
      { icon: Globe2, title: "Sovereign infrastructure", description: "Infrastructure planning with European control and maintainability in mind." },
      { icon: Fingerprint, title: "Secure identity", description: "Identity and access foundations for agents and service users." },
      { icon: Activity, title: "Public transparency", description: "Status and communication patterns for public service visibility." },
      { icon: ShieldCheck, title: "Access governance", description: "Governance patterns for roles, access and sensitive actions." },
      { icon: BookOpen, title: "Open standards", description: "Preference for documented interfaces and open foundations where practical." },
      { icon: Layers3, title: "Long-term maintainability", description: "Structures intended to remain understandable and operable over time." },
    ],
    architectureFlow: ["Citizen / Agent", "Identity", "Secure service", "Public transparency", "Audit", "Long-term operations"],
    relatedPlatform: [
      { label: "Identity", href: "/platform/identity" },
      { label: "Vault", href: "/platform/vault" },
      { label: "Edge", href: "/platform/edge" },
      { label: "Status", href: "/platform/status" },
      { label: "Search", href: "/platform/search" },
    ],
    relatedProducts: [
      { label: "Shield", href: "/products/shield" },
      { label: "VPN", href: "/products/vpn" },
      { label: "Schematik", href: "/products/schematik" },
    ],
    adoptionPath: [
      { title: "Clarify the public service", description: "Define users, agents, data boundaries and transparency expectations." },
      { title: "Map required services", description: "Connect identity, vault, edge, status and search foundations." },
      { title: "Build progressively", description: "Prototype with open standards and governance before long-term operation." },
    ],
    ctas: [
      { label: "Contact SGE", href: "/company/contact", variant: "primary" },
      { label: "Explore Platform", href: "/platform", variant: "secondary" },
    ],
  },
};

export const useCaseSolutions = solutionSlugs.filter(
  (slug) => solutions[slug].category === "use-case"
);

export const industrySolutions = solutionSlugs.filter(
  (slug) => solutions[slug].category === "industry"
);

export function getSolution(slug: SolutionSlug) {
  return solutions[slug];
}
