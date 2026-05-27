export type PlatformSlug =
  | "cloud"
  | "developer"
  | "finance"
  | "intelligence"
  | "media"
  | "telecom";

export type PlatformIcon =
  | "api"
  | "bank"
  | "blocks"
  | "brain"
  | "broadcast"
  | "cloud"
  | "code"
  | "database"
  | "edge"
  | "globe"
  | "identity"
  | "lock"
  | "media"
  | "network"
  | "route"
  | "server"
  | "shield"
  | "terminal"
  | "vault"
  | "workflow";

export interface PlatformProductConfig {
  icon: PlatformIcon;
}

export interface PlatformConfig {
  slug: PlatformSlug;
  primaryHref: string;
  secondaryHref: string;
  products: PlatformProductConfig[];
}

export const platformConfigs = {
  cloud: {
    slug: "cloud",
    primaryHref: "/developers",
    secondaryHref: "/company/contact",
    products: [{ icon: "edge" }, { icon: "cloud" }, { icon: "network" }, { icon: "vault" }, { icon: "database" }],
  },
  developer: {
    slug: "developer",
    primaryHref: "/developers",
    secondaryHref: "/developers/api",
    products: [{ icon: "code" }, { icon: "api" }, { icon: "terminal" }, { icon: "identity" }, { icon: "brain" }],
  },
  finance: {
    slug: "finance",
    primaryHref: "/developers/api",
    secondaryHref: "/company/contact",
    products: [{ icon: "bank" }, { icon: "shield" }, { icon: "lock" }, { icon: "api" }],
  },
  intelligence: {
    slug: "intelligence",
    primaryHref: "/developers/api",
    secondaryHref: "/company/contact",
    products: [{ icon: "brain" }, { icon: "server" }, { icon: "api" }, { icon: "workflow" }],
  },
  media: {
    slug: "media",
    primaryHref: "/blog",
    secondaryHref: "/company/contact",
    products: [{ icon: "media" }, { icon: "broadcast" }, { icon: "network" }, { icon: "blocks" }, { icon: "workflow" }],
  },
  telecom: {
    slug: "telecom",
    primaryHref: "/developers/api",
    secondaryHref: "/company/contact",
    products: [{ icon: "network" }, { icon: "globe" }, { icon: "edge" }, { icon: "route" }, { icon: "lock" }],
  },
} satisfies Record<PlatformSlug, PlatformConfig>;

export const platformConfigList = [
  platformConfigs.developer,
  platformConfigs.cloud,
  platformConfigs.telecom,
  platformConfigs.finance,
  platformConfigs.intelligence,
  platformConfigs.media,
];

export function getPlatformConfig(slug: PlatformSlug) {
  return platformConfigs[slug];
}
