import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Bell,
  BookOpen,
  Bot,
  CalendarDays,
  Columns3,
  Database,
  Eye,
  FileCode2,
  FileSpreadsheet,
  GitPullRequest,
  Globe2,
  Inbox,
  KeyRound,
  Laptop,
  LayoutDashboard,
  LockKeyhole,
  MessageSquare,
  Network,
  NotebookText,
  Route,
  ScreenShare,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Table2,
  Users,
  Video,
  Workflow,
} from "lucide-react";

export type ProductStatus =
  | "Available"
  | "Private preview"
  | "In development"
  | "Experimental"
  | "Planned"
  | "Research";

export interface ProductCta {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface ProductCard {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ProductAvailabilityItem {
  label: string;
  value: ProductStatus | "In progress" | "Not open yet" | "Planned" | "Limited";
}

export interface ProductService {
  slug: ProductServiceSlug;
  title: string;
  positioning: string;
  description: string;
  status: ProductStatus;
  problem: {
    title: string;
    current: string;
    userNeed: string;
    promise: string;
    value: string;
  };
  experienceSteps: ProductCard[];
  features: ProductCard[];
  useCases: ProductCard[];
  integrations: string[];
  availability: ProductAvailabilityItem[];
  ctas: [ProductCta, ProductCta];
  nextStep: string;
}

export const productServiceSlugs = [
  "shield",
  "vpn",
  "giteria",
  "schematik",
  "mail",
  "meet",
  "chat",
  "sheets",
] as const;

export type ProductServiceSlug = (typeof productServiceSlugs)[number];

export const productServices: Record<ProductServiceSlug, ProductService> = {
  shield: {
    slug: "shield",
    title: "Shield",
    positioning: "Security guidance for accounts, access and operational risk.",
    description:
      "Sky Genesis Shield is designed as a security product experience for teams that need clearer account protection, risk visibility and incident guidance inside the SGE ecosystem.",
    status: "In development",
    problem: {
      title: "Security signals need to be understandable",
      current:
        "Security information is often scattered across settings pages, logs and infrastructure tools.",
      userNeed:
        "Administrators need a clear product view that explains what requires attention and what action is reasonable.",
      promise:
        "Shield brings account protection, access monitoring and trust controls into a calmer security workspace.",
      value:
        "Organizations can review risk signals without depending on a full security operations dashboard for every decision.",
    },
    experienceSteps: [
      { title: "Review overview", description: "Open a concise security summary for accounts and workspace controls." },
      { title: "Inspect risk signals", description: "Read structured signals that explain what may require review." },
      { title: "Check access", description: "Monitor sensitive access patterns connected to identity and audit events." },
      { title: "Follow guidance", description: "Use incident-oriented guidance for next steps without automated overreach." },
    ],
    features: [
      { icon: LayoutDashboard, title: "Security overview", description: "A focused view of account and workspace security posture." },
      { icon: ShieldCheck, title: "Account protection", description: "Controls and prompts for safer account administration." },
      { icon: AlertTriangle, title: "Risk signals", description: "Human-readable indicators for access and account events." },
      { icon: Eye, title: "Access monitoring", description: "Visibility into sensitive access paths and security-relevant actions." },
      { icon: BookOpen, title: "Incident guidance", description: "Structured response guidance for common security situations." },
      { icon: LockKeyhole, title: "Trust controls", description: "Controls connected to identity, policy and audit foundations." },
    ],
    useCases: [
      { title: "Protect an administrator account", description: "Review access, MFA posture and sensitive account controls." },
      { title: "Follow risk signals", description: "Understand which security events need attention and why." },
      { title: "Guide an incident response", description: "Use clear steps when account or access behavior looks unusual." },
    ],
    integrations: ["Identity", "Vault", "Status", "Audit logs", "Notifications"],
    availability: [
      { label: "Current status", value: "In development" },
      { label: "Public access", value: "Planned" },
      { label: "Private preview", value: "Not open yet" },
      { label: "Documentation", value: "In progress" },
      { label: "Workspace integration", value: "Planned" },
      { label: "API/SDK", value: "Planned" },
    ],
    ctas: [
      { label: "Contact SGE", href: "/company/contact", variant: "primary" },
      { label: "View platform", href: "/platform/identity", variant: "secondary" },
    ],
    nextStep: "Contact SGE for security product context while Shield remains in development.",
  },
  vpn: {
    slug: "vpn",
    title: "VPN",
    positioning: "Private access for teams, devices and internal resources.",
    description:
      "Sky Genesis VPN is a product direction for secure remote access, device protection and network policy management across SGE workspaces.",
    status: "Private preview",
    problem: {
      title: "Remote access should be controlled and legible",
      current:
        "Teams often rely on disconnected tunnels, device settings and network rules that are hard to review together.",
      userNeed:
        "Users need simple private access while administrators need policy, device and activity visibility.",
      promise:
        "VPN aims to combine secure tunnels, private access and policy controls in one product experience.",
      value:
        "Organizations can prepare access patterns for distributed teams without exposing internal resources broadly.",
    },
    experienceSteps: [
      { title: "Enroll device", description: "Connect a managed device to the workspace access model." },
      { title: "Select policy", description: "Apply access rules based on team, role or resource group." },
      { title: "Open tunnel", description: "Start a private connection for approved destinations." },
      { title: "Review activity", description: "Check connection state and operational events." },
    ],
    features: [
      { icon: LockKeyhole, title: "Secure tunnels", description: "Encrypted access paths for approved devices and destinations." },
      { icon: KeyRound, title: "Private access", description: "Access controls for internal services and workspace resources." },
      { icon: Laptop, title: "Device protection", description: "Device-oriented access checks before sensitive network use." },
      { icon: SlidersHorizontal, title: "Network policies", description: "Policy definitions for teams, roles and resources." },
      { icon: Route, title: "Regional routing", description: "Routing plans that can reflect future regional infrastructure." },
      { icon: Eye, title: "Activity visibility", description: "Connection visibility for operators and support review." },
    ],
    useCases: [
      { title: "Secure remote access", description: "Give a team a private path to internal resources." },
      { title: "Connect internal resources", description: "Apply access policy before exposing operational systems." },
      { title: "Apply network policies", description: "Define who can reach which resources under which conditions." },
    ],
    integrations: ["Identity", "Vault", "Edge", "Status", "Audit logs"],
    availability: [
      { label: "Current status", value: "Private preview" },
      { label: "Public access", value: "Planned" },
      { label: "Private preview", value: "Limited" },
      { label: "Documentation", value: "In progress" },
      { label: "Workspace integration", value: "In progress" },
      { label: "API/SDK", value: "Planned" },
    ],
    ctas: [
      { label: "Join preview", href: "/company/contact", variant: "primary" },
      { label: "View platform", href: "/platform/edge", variant: "secondary" },
    ],
    nextStep: "Request preview context before planning VPN usage in production environments.",
  },
  giteria: {
    slug: "giteria",
    title: "Giteria",
    positioning: "Code collaboration for repositories, reviews and release preparation.",
    description:
      "Giteria is the SGE product direction for source hosting and developer collaboration, connected to identity, secrets and platform observability.",
    status: "In development",
    problem: {
      title: "Development work needs a trusted collaboration surface",
      current:
        "Repositories, issues and releases are often separated from the identity, secrets and audit systems that support them.",
      userNeed:
        "Developers need a clear workspace for code, contribution review and team coordination.",
      promise:
        "Giteria brings repository hosting and collaboration workflows into the SGE ecosystem.",
      value:
        "Teams can prepare internal or open contribution workflows with clearer links to platform security and automation.",
    },
    experienceSteps: [
      { title: "Create repository", description: "Start a project with ownership and organization context." },
      { title: "Open issue", description: "Track work, decisions and technical discussion." },
      { title: "Review pull request", description: "Review changes before merging into shared code." },
      { title: "Prepare release", description: "Organize release readiness with connected platform signals." },
    ],
    features: [
      { icon: FileCode2, title: "Repository hosting", description: "Repository organization for product and infrastructure code." },
      { icon: NotebookText, title: "Issues", description: "Issue tracking for bugs, tasks and technical planning." },
      { icon: GitPullRequest, title: "Pull requests", description: "Review workflows for code changes and collaboration." },
      { icon: Users, title: "Organizations", description: "Team and organization structures for repository ownership." },
      { icon: Workflow, title: "CI/CD readiness", description: "Integration model prepared for future automated delivery workflows." },
      { icon: MessageSquare, title: "Developer collaboration", description: "Discussion and review patterns around code changes." },
    ],
    useCases: [
      { title: "Host an open project", description: "Prepare a repository and contribution model for public code." },
      { title: "Collaborate internally", description: "Coordinate an internal codebase through issues and pull requests." },
      { title: "Prepare contribution workflows", description: "Define how teams review, approve and ship code changes." },
    ],
    integrations: ["Identity", "Vault", "Webhooks", "Status", "Search"],
    availability: [
      { label: "Current status", value: "In development" },
      { label: "Public access", value: "Planned" },
      { label: "Private preview", value: "Not open yet" },
      { label: "Documentation", value: "In progress" },
      { label: "Workspace integration", value: "Planned" },
      { label: "API/SDK", value: "Planned" },
    ],
    ctas: [
      { label: "Explore documentation", href: "/developers", variant: "primary" },
      { label: "Contact SGE", href: "/company/contact", variant: "secondary" },
    ],
    nextStep: "Use developer resources for current platform context while Giteria matures.",
  },
  schematik: {
    slug: "schematik",
    title: "Schematik",
    positioning: "Visual modeling for systems, infrastructure and technical documentation.",
    description:
      "Schematik is an experimental product for drawing and maintaining structured diagrams connected to documentation and workspace context.",
    status: "Experimental",
    problem: {
      title: "Architecture diagrams are hard to keep useful",
      current:
        "Technical diagrams often become static artifacts disconnected from docs, systems and reviews.",
      userNeed:
        "Teams need visual models that are easy to discuss, update and reference during technical decisions.",
      promise:
        "Schematik provides a calmer workspace for diagrams, infrastructure maps and system models.",
      value:
        "Organizations can improve technical reviews without treating early diagrams as automated source-of-truth systems.",
    },
    experienceSteps: [
      { title: "Create diagram", description: "Start a system, process or infrastructure model from a structured canvas." },
      { title: "Map components", description: "Organize services, regions and dependencies visually." },
      { title: "Link documentation", description: "Connect diagrams to relevant docs and workspace notes." },
      { title: "Prepare review", description: "Share a clear model for technical review and planning." },
    ],
    features: [
      { icon: Columns3, title: "Visual diagrams", description: "Structured diagram surfaces for system and process views." },
      { icon: Network, title: "Infrastructure mapping", description: "Map services, regions and dependencies at a practical level." },
      { icon: Workflow, title: "System modeling", description: "Model relationships between applications, data and operations." },
      { icon: Users, title: "Team collaboration", description: "Collaborative editing and review patterns for technical teams." },
      { icon: BookOpen, title: "Documentation links", description: "Links from diagrams to docs, decisions and reference material." },
      { icon: Send, title: "Export readiness", description: "Export-oriented model for sharing diagrams outside the product." },
    ],
    useCases: [
      { title: "Document an architecture", description: "Create a shared visual reference for a system or service." },
      { title: "Map infrastructure", description: "Represent services, regions and operational dependencies." },
      { title: "Prepare a technical review", description: "Give reviewers a clear model before implementation decisions." },
    ],
    integrations: ["Identity", "Search", "Docs", "Workspace", "Export tools"],
    availability: [
      { label: "Current status", value: "Experimental" },
      { label: "Public access", value: "Planned" },
      { label: "Private preview", value: "Not open yet" },
      { label: "Documentation", value: "Planned" },
      { label: "Workspace integration", value: "Planned" },
      { label: "API/SDK", value: "Research" },
    ],
    ctas: [
      { label: "Contact SGE", href: "/company/contact", variant: "primary" },
      { label: "View platform", href: "/platform/search", variant: "secondary" },
    ],
    nextStep: "Contact SGE before relying on Schematik for formal architecture records.",
  },
  mail: {
    slug: "mail",
    title: "Mail",
    positioning: "Professional email for accounts, teams and workspace communication.",
    description:
      "Sky Genesis Mail is a product direction for professional inboxes, custom domains and secure workspace-connected communication.",
    status: "In development",
    problem: {
      title: "Email remains central to work, but fragmented",
      current:
        "Organizations often separate inboxes, account security, notifications and workspace context.",
      userNeed:
        "Users need a reliable mail experience while administrators need clearer account and domain controls.",
      promise:
        "Mail brings inbox, identity and platform notifications into a structured SGE product experience.",
      value:
        "Teams can plan professional communication around a shared identity and workspace foundation.",
    },
    experienceSteps: [
      { title: "Receive message", description: "Read and organize mail in a focused inbox view." },
      { title: "Organize inbox", description: "Use folders, labels or team mailbox patterns as the product matures." },
      { title: "Secure account", description: "Connect mail access to identity and account protection controls." },
      { title: "Connect workspace", description: "Relate messages to workspace notifications and product activity." },
    ],
    features: [
      { icon: Inbox, title: "Inbox", description: "A professional inbox experience for individual and team use." },
      { icon: Globe2, title: "Custom domains", description: "Domain-oriented email planning for organizations." },
      { icon: Send, title: "Transactional messages", description: "Product-triggered messages connected to the Mailer platform layer." },
      { icon: AlertTriangle, title: "Security alerts", description: "Account and security notifications surfaced through mail." },
      { icon: Users, title: "Team mailboxes", description: "Shared mailbox patterns for teams and operational addresses." },
      { icon: ShieldCheck, title: "Identity integration", description: "Mail access connected to SGE account and session controls." },
    ],
    useCases: [
      { title: "Manage a professional address", description: "Use a domain-backed address for business communication." },
      { title: "Send system notifications", description: "Route product notifications through a consistent mail path." },
      { title: "Connect a mailbox to workspace", description: "Tie mail activity to account, team and workspace context." },
    ],
    integrations: ["Identity", "Mailer", "Vault", "Status", "Search"],
    availability: [
      { label: "Current status", value: "In development" },
      { label: "Public access", value: "Planned" },
      { label: "Private preview", value: "Not open yet" },
      { label: "Documentation", value: "In progress" },
      { label: "Workspace integration", value: "Planned" },
      { label: "API/SDK", value: "Planned" },
    ],
    ctas: [
      { label: "Explore documentation", href: "/developers", variant: "primary" },
      { label: "Contact SGE", href: "/company/contact", variant: "secondary" },
    ],
    nextStep: "Follow developer and product updates while Mail remains under development.",
  },
  meet: {
    slug: "meet",
    title: "Meet",
    positioning: "Meetings connected to teams, schedules and workspace context.",
    description:
      "Sky Genesis Meet is planned as a meeting product for team rooms, video sessions and workspace-linked collaboration.",
    status: "Planned",
    problem: {
      title: "Meetings should connect to the work around them",
      current:
        "Video calls often sit outside the workspace where teams plan, document and follow up.",
      userNeed:
        "Teams need meeting access that is easy to schedule, join and connect to related workspace material.",
      promise:
        "Meet aims to provide simple meeting flows with identity, scheduling and workspace context.",
      value:
        "Organizations can plan meetings as part of a broader collaboration system instead of a standalone call tool.",
    },
    experienceSteps: [
      { title: "Create room", description: "Prepare a team room or meeting link with workspace context." },
      { title: "Invite people", description: "Invite members through identity and scheduling paths." },
      { title: "Share screen", description: "Use screen sharing for product and team discussions." },
      { title: "Capture notes", description: "Connect meeting notes or follow-ups to the workspace." },
    ],
    features: [
      { icon: Video, title: "Video meetings", description: "Planned video meeting experience for teams and organizations." },
      { icon: Users, title: "Team rooms", description: "Persistent rooms or meeting spaces connected to teams." },
      { icon: CalendarDays, title: "Calendar links", description: "Scheduling links for planned meetings and reminders." },
      { icon: ScreenShare, title: "Screen sharing", description: "Presentation and collaboration support for meetings." },
      { icon: NotebookText, title: "Meeting notes", description: "Notes and follow-up material tied to workspace context." },
      { icon: LockKeyhole, title: "Secure access", description: "Meeting access connected to SGE identity and policy." },
    ],
    useCases: [
      { title: "Organize a team meeting", description: "Create a meeting space for internal team coordination." },
      { title: "Plan a customer exchange", description: "Prepare a structured external meeting with controlled access." },
      { title: "Connect a meeting to workspace", description: "Keep notes and follow-up actions near related work." },
    ],
    integrations: ["Identity", "Mailer", "Calendar/Scheduling", "Status", "Workspace"],
    availability: [
      { label: "Current status", value: "Planned" },
      { label: "Public access", value: "Planned" },
      { label: "Private preview", value: "Not open yet" },
      { label: "Documentation", value: "Planned" },
      { label: "Workspace integration", value: "Planned" },
      { label: "API/SDK", value: "Planned" },
    ],
    ctas: [
      { label: "Contact SGE", href: "/company/contact", variant: "primary" },
      { label: "View platform", href: "/platform/identity", variant: "secondary" },
    ],
    nextStep: "Contact SGE for roadmap context before planning operational dependency on Meet.",
  },
  chat: {
    slug: "chat",
    title: "Chat",
    positioning: "Structured communication for spaces, channels and teams.",
    description:
      "Sky Genesis Chat is a product direction for team and community communication connected to identity, search and workspace workflows.",
    status: "In development",
    problem: {
      title: "Conversation needs structure and governance",
      current:
        "Team chat can become noisy when spaces, roles, search and integrations are managed separately.",
      userNeed:
        "Users need simple conversations, while teams need roles, moderation and app connections.",
      promise:
        "Chat organizes spaces, channels and direct messages inside the broader SGE workspace model.",
      value:
        "Organizations can coordinate communication while preserving control over access and integrations.",
    },
    experienceSteps: [
      { title: "Create space", description: "Start a workspace or community space with clear membership." },
      { title: "Invite members", description: "Bring users in through identity-aware access flows." },
      { title: "Organize channels", description: "Separate topics, teams and operational conversations." },
      { title: "Connect apps", description: "Route notifications and app activity into relevant spaces." },
    ],
    features: [
      { icon: MessageSquare, title: "Spaces", description: "Organized conversation spaces for teams and communities." },
      { icon: Columns3, title: "Channels", description: "Topic-based channels for focused collaboration." },
      { icon: Send, title: "Direct messages", description: "Private user-to-user communication patterns." },
      { icon: ShieldCheck, title: "Roles", description: "Role-aware access and permission planning." },
      { icon: Bot, title: "App integrations", description: "Integration model for product alerts, bots and workflows." },
      { icon: Bell, title: "Moderation tools", description: "Moderation and notification controls for healthier spaces." },
    ],
    useCases: [
      { title: "Structure a community", description: "Organize channels and roles around community topics." },
      { title: "Coordinate a team", description: "Use spaces for product, support or operational collaboration." },
      { title: "Connect apps and bots", description: "Bring product events into the right conversation channels." },
    ],
    integrations: ["Identity", "Search", "Webhooks", "Notifications", "Workspace"],
    availability: [
      { label: "Current status", value: "In development" },
      { label: "Public access", value: "Planned" },
      { label: "Private preview", value: "Not open yet" },
      { label: "Documentation", value: "In progress" },
      { label: "Workspace integration", value: "Planned" },
      { label: "API/SDK", value: "Planned" },
    ],
    ctas: [
      { label: "Explore documentation", href: "/developers", variant: "primary" },
      { label: "Contact SGE", href: "/company/contact", variant: "secondary" },
    ],
    nextStep: "Use SGE developer resources for integration context while Chat is built out.",
  },
  sheets: {
    slug: "sheets",
    title: "Sheets",
    positioning: "Collaborative tables for operational data and workspace workflows.",
    description:
      "Sky Genesis Sheets is an experimental product for collaborative tables, structured data and future automation readiness.",
    status: "Experimental",
    problem: {
      title: "Operational data often lives in fragile spreadsheets",
      current:
        "Teams use spreadsheets for real work, but sharing, permissions and automation can become unclear.",
      userNeed:
        "Users need familiar collaborative tables with better workspace integration and controlled sharing.",
      promise:
        "Sheets provides a structured table experience connected to identity, search and workspace workflows.",
      value:
        "Organizations can organize operational data while preparing for automation without claiming a finished data platform.",
    },
    experienceSteps: [
      { title: "Create sheet", description: "Start a structured table for operational tracking." },
      { title: "Invite collaborators", description: "Share with teammates through workspace controls." },
      { title: "Organize data", description: "Use columns, views and simple table structure." },
      { title: "Prepare automation", description: "Plan imports, exports and workflow hooks as the product matures." },
    ],
    features: [
      { icon: FileSpreadsheet, title: "Collaborative sheets", description: "Shared spreadsheet-like surfaces for team work." },
      { icon: Table2, title: "Structured tables", description: "Tables with clearer fields, views and operational context." },
      { icon: LockKeyhole, title: "Sharing controls", description: "Access and sharing patterns tied to identity." },
      { icon: Users, title: "Workspace integration", description: "Sheets connected to workspace teams and activity." },
      { icon: Database, title: "Imports/exports", description: "Import and export planning for structured data movement." },
      { icon: Workflow, title: "Automation readiness", description: "Model prepared for future workflow and scheduling hooks." },
    ],
    useCases: [
      { title: "Track operational data", description: "Maintain a shared table for tasks, assets or service records." },
      { title: "Collaborate on a table", description: "Work with teammates on structured information in one workspace." },
      { title: "Prepare automations", description: "Organize data for future imports, exports and scheduled workflows." },
    ],
    integrations: ["Identity", "Search", "Workspace", "Scheduling", "Export tools"],
    availability: [
      { label: "Current status", value: "Experimental" },
      { label: "Public access", value: "Planned" },
      { label: "Private preview", value: "Not open yet" },
      { label: "Documentation", value: "Planned" },
      { label: "Workspace integration", value: "Planned" },
      { label: "API/SDK", value: "Research" },
    ],
    ctas: [
      { label: "Contact SGE", href: "/company/contact", variant: "primary" },
      { label: "View platform", href: "/platform/search", variant: "secondary" },
    ],
    nextStep: "Contact SGE for roadmap context before using Sheets for critical operational records.",
  },
};

export function getProductService(slug: ProductServiceSlug) {
  return productServices[slug];
}
