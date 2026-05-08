/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Component: Header
 * Layer: Public UI
 * Purpose: Provides global navigation, legal links, resources and trust entry points.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */
import * as React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { type Locale } from "@/lib/locale";
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Shield,
  Users,
  Key,
  Lock,
  Layers,
  Code,
  BookOpen,
  FileText,
  Zap,
  Building2,
  Smartphone,
  Globe,
  Server,
  Database,
  Settings,
  LifeBuoy,
  Mail,
  Inbox,
  Table2,
  Network,
  DatabaseSearch,
  GlobeLock,
  FolderGit2,
  MessageCircle,
  Briefcase,
  Landmark,
  ShoppingCart,
} from "lucide-react";
import { HeaderAuthButton } from "./HeaderAuthButton";

interface HeaderProps {
  locale?: Locale;
}

interface MenuItem {
  titleKey: string;
  descKey: string;
  href: string;
  icon: React.ReactNode;
}

interface MenuSection {
  titleKey: string;
  items: MenuItem[];
}

interface MegaMenuData {
  sections: MenuSection[];
  featured?: {
    titleKey: string;
    descKey: string;
    href: string;
    badgeKey?: string;
  };
}

type MegaMenuProps = {
  label: string;
  data: MegaMenuData;
  getLocaleHref: (href: string) => string;
  t: (key: string) => string;
  compact?: boolean;
};

function MegaMenu({
  label,
  data,
  getLocaleHref,
  t,
  compact = false,
}: MegaMenuProps) {
  const panelWidth = compact ? "w-[560px]" : "w-[820px]";
  const sectionGrid = compact ? "grid-cols-1" : "grid-cols-2";
  const hasFeatured = Boolean(data.featured);

  return (
    <li className="relative group">
      <button
        className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
        aria-haspopup="true"
        aria-expanded={false}
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity duration-150" />
      </button>
      <div className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-3 group-hover:block group-focus-within:block">
        <div
          className={`${panelWidth} overflow-hidden rounded-2xl border border-border/60 bg-background shadow-lg`}
        >
          <div className={hasFeatured ? "grid grid-cols-[1fr_260px]" : "grid"}>
            <div className="p-6">
              <div className={`grid ${sectionGrid} gap-6`}>
                {data.sections.map((section) => (
                  <div key={section.titleKey}>
                    <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {t(section.titleKey)}
                    </h3>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.titleKey}>
                          <Link
                            href={getLocaleHref(item.href)}
                            className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted/50 focus:bg-muted/50 focus:outline-none"
                          >
                            <span className="mt-0.5 shrink-0 text-muted-foreground transition-colors group-hover/item:text-foreground">
                              {item.icon}
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-foreground">
                                {t(item.titleKey)}
                              </span>
                              <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                                {t(item.descKey)}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {data.featured ? (
              <aside className="border-l border-border/60 bg-muted/30 p-6">
                <Link
                  href={getLocaleHref(data.featured.href)}
                  className="group/featured flex h-full flex-col justify-between rounded-xl bg-card p-5 ring-1 ring-border/50 transition-colors hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring/30"
                >
                  <span>
                    {data.featured.badgeKey ? (
                      <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {t(data.featured.badgeKey)}
                      </span>
                    ) : null}
                    <span className="mt-5 block text-sm font-medium text-foreground">
                      {t(data.featured.titleKey)}
                    </span>
                    <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                      {t(data.featured.descKey)}
                    </span>
                  </span>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
                    {t("learnMore")}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/featured:translate-x-0.5" />
                  </span>
                </Link>
              </aside>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  );
}

function getProductMenuData(): MegaMenuData {
  return {
    sections: [
      {
        titleKey: "identitySecurity",
        items: [
          {
            titleKey: "shield",
            descKey: "shieldDesc",
            href: "/products/shield",
            icon: <Shield className="h-5 w-5" />,
          },
          {
            titleKey: "vpn",
            descKey: "vpnDesc",
            href: "/products/vpn",
            icon: <GlobeLock className="h-5 w-5" />,
          },
          {
            titleKey: "giteria",
            descKey: "giteriaDesc",
            href: "/products/giteria",
            icon: <FolderGit2 className="h-5 w-5" />,
          },
          {
            titleKey: "schematik",
            descKey: "schematikDesc",
            href: "/products/schematik",
            icon: <Network className="h-5 w-5" />,
          },
        ],
      },
      {
        titleKey: "collaboration",
        items: [
          {
            titleKey: "mail",
            descKey: "mailDesc",
            href: "/products/mail",
            icon: <Mail className="h-5 w-5" />,
          },
          {
            titleKey: "meet",
            descKey: "meetDesc",
            href: "/products/meet",
            icon: <Users className="h-5 w-5" />,
          },
          {
            titleKey: "chat",
            descKey: "chatDesc",
            href: "/products/chat",
            icon: <MessageCircle className="h-5 w-5" />,
          },
          {
            titleKey: "sheets",
            descKey: "sheetsDesc",
            href: "/products/sheets",
            icon: <Table2 className="h-5 w-5" />,
          },
        ],
      },
    ],
    featured: {
      badgeKey: "productsFeaturedBadge",
      titleKey: "productsFeaturedTitle",
      descKey: "productsFeaturedDesc",
      href: "/products",
    },
  };
}

function getDevelopersMenuData(): MegaMenuData {
  return {
    sections: [
      {
        titleKey: "resources",
        items: [
          {
            titleKey: "documentation",
            descKey: "documentationDesc",
            href: "/developers/docs",
            icon: <BookOpen className="h-5 w-5" />,
          },
          {
            titleKey: "quickstarts",
            descKey: "quickstartsDesc",
            href: "/developers/quickstarts",
            icon: <Zap className="h-5 w-5" />,
          },
          {
            titleKey: "apiReference",
            descKey: "apiReferenceDesc",
            href: "/developers/api",
            icon: <Code className="h-5 w-5" />,
          },
          {
            titleKey: "sdksLibraries",
            descKey: "sdksLibrariesDesc",
            href: "/developers/sdks",
            icon: <Layers className="h-5 w-5" />,
          },
        ],
      },
      {
        titleKey: "tools",
        items: [
          {
            titleKey: "cli",
            descKey: "cliDesc",
            href: "/developers/cli",
            icon: <FileText className="h-5 w-5" />,
          },
          {
            titleKey: "postman",
            descKey: "postmanDesc",
            href: "/developers/postman",
            icon: <Database className="h-5 w-5" />,
          },
          {
            titleKey: "extensions",
            descKey: "extensionsDesc",
            href: "/developers/extensions",
            icon: <Settings className="h-5 w-5" />,
          },
          {
            titleKey: "community",
            descKey: "communityDesc",
            href: "/community",
            icon: <Users className="h-5 w-5" />,
          },
        ],
      },
    ],
    featured: {
      badgeKey: "developersFeaturedBadge",
      titleKey: "developersFeaturedTitle",
      descKey: "developersFeaturedDesc",
      href: "/developers/docs",
    },
  };
}

function getSolutionsMenuData(): MegaMenuData {
  return {
    sections: [
      {
        titleKey: "useCases",
        items: [
          {
            titleKey: "b2cIdentity",
            descKey: "b2cIdentityDesc",
            href: "/solutions/b2c",
            icon: <Smartphone className="h-5 w-5" />,
          },
          {
            titleKey: "b2bSaas",
            descKey: "b2bSaasDesc",
            href: "/solutions/b2b",
            icon: <Building2 className="h-5 w-5" />,
          },
          {
            titleKey: "machineToMachine",
            descKey: "machineToMachineDesc",
            href: "/solutions/infrastructure",
            icon: <Server className="h-5 w-5" />,
          },
          {
            titleKey: "passwordless",
            descKey: "passwordlessDesc",
            href: "/solutions/workplace",
            icon: <Briefcase className="h-5 w-5" />,
          },
        ],
      },
      {
        titleKey: "byIndustry",
        items: [
          {
            titleKey: "financialServices",
            descKey: "financialServicesDesc",
            href: "/solutions/financial",
            icon: <Landmark className="h-5 w-5" />,
          },
          {
            titleKey: "healthcare",
            descKey: "healthcareDesc",
            href: "/solutions/healthcare",
            icon: <LifeBuoy className="h-5 w-5" />,
          },
          {
            titleKey: "retailEcommerce",
            descKey: "retailEcommerceDesc",
            href: "/solutions/retail",
            icon: <ShoppingCart className="h-5 w-5" />,
          },
          {
            titleKey: "publicSector",
            descKey: "publicSectorDesc",
            href: "/solutions/government",
            icon: <Building2 className="h-5 w-5" />,
          },
        ],
      },
    ],
    featured: {
      badgeKey: "solutionsFeaturedBadge",
      titleKey: "solutionsFeaturedTitle",
      descKey: "solutionsFeaturedDesc",
      href: "/solutions",
    },
  };
}

function getEnterpriseMenuData(): MegaMenuData {
  return {
    sections: [
      {
        titleKey: "company",
        items: [
          {
            titleKey: "about",
            descKey: "aboutDesc",
            href: "/company/about",
            icon: <Building2 className="h-5 w-5" />,
          },
          {
            titleKey: "careers",
            descKey: "careersDesc",
            href: "/company/careers",
            icon: <Users className="h-5 w-5" />,
          },
          {
            titleKey: "contact",
            descKey: "contactDesc",
            href: "/company/contact",
            icon: <LifeBuoy className="h-5 w-5" />,
          },
          {
            titleKey: "press",
            descKey: "pressDesc",
            href: "/company/press",
            icon: <FileText className="h-5 w-5" />,
          },
        ],
      },
    ],
    featured: {
      badgeKey: "enterpriseFeaturedBadge",
      titleKey: "enterpriseFeaturedTitle",
      descKey: "enterpriseFeaturedDesc",
      href: "/company/about",
    },
  };
}

function getPlateformeMenuData(): MegaMenuData {
  return {
    sections: [
      {
        titleKey: "infrastructureCloud",
        items: [
          {
            titleKey: "edge",
            descKey: "edgeDesc",
            href: "/platform/edge",
            icon: <Server className="h-5 w-5" />,
          },
          {
            titleKey: "bank",
            descKey: "bankDesc",
            href: "/platform/bank",
            icon: <Building2 className="h-5 w-5" />,
          },
          {
            titleKey: "status",
            descKey: "statusDesc",
            href: "/platform/status",
            icon: <Zap className="h-5 w-5" />,
          },
          {
            titleKey: "search",
            descKey: "searchDesc",
            href: "/platform/search",
            icon: <DatabaseSearch className="h-5 w-5" />,
          },
        ],
      },
      {
        titleKey: "userServices",
        items: [
          {
            titleKey: "identity",
            descKey: "identityDesc",
            href: "/platform/identity",
            icon: <Lock className="h-5 w-5" />,
          },
          {
            titleKey: "maps",
            descKey: "mapsDesc",
            href: "/platform/maps",
            icon: <Globe className="h-5 w-5" />,
          },
          {
            titleKey: "vault",
            descKey: "vaultDesc",
            href: "/platform/vault",
            icon: <Key className="h-5 w-5" />,
          },
          {
            titleKey: "mailer",
            descKey: "mailerDesc",
            href: "/platform/mailer",
            icon: <Inbox className="h-5 w-5" />,
          },
        ],
      },
    ],
    featured: {
      badgeKey: "platformFeaturedBadge",
      titleKey: "platformFeaturedTitle",
      descKey: "platformFeaturedDesc",
      href: "/platform",
    },
  };
}

function getPartnersMenuData(): MegaMenuData {
  return {
    sections: [
      {
        titleKey: "partnersSolution",
        items: [
          {
            titleKey: "technologyPartners",
            descKey: "technologyPartnersDesc",
            href: "/partners/technology",
            icon: <Code className="h-5 w-5" />,
          },
          {
            titleKey: "servicePartners",
            descKey: "servicePartnersDesc",
            href: "/partners/service",
            icon: <Users className="h-5 w-5" />,
          },
          {
            titleKey: "distributionPartners",
            descKey: "distributionPartnersDesc",
            href: "/partners/distribution",
            icon: <Building2 className="h-5 w-5" />,
          },
        ],
      },
      {
        titleKey: "partnerProgram",
        items: [
          {
            titleKey: "program",
            descKey: "programDesc",
            href: "/partners/program",
            icon: <FileText className="h-5 w-5" />,
          },
          {
            titleKey: "becomePartner",
            descKey: "becomePartnerDesc",
            href: "/partners/become",
            icon: <Zap className="h-5 w-5" />,
          },
          {
            titleKey: "partnerResources",
            descKey: "partnerResourcesDesc",
            href: "/partners/resources",
            icon: <BookOpen className="h-5 w-5" />,
          },
        ],
      },
    ],
    featured: {
      badgeKey: "partnersFeaturedBadge",
      titleKey: "partnersFeaturedTitle",
      descKey: "partnersFeaturedDesc",
      href: "/partners/program",
    },
  };
}

export async function Header({ locale: initialLocale }: HeaderProps) {
  const locale = initialLocale || "fr";
  const t = await getTranslations({ locale, namespace: "Header" });

  const productMenuData = getProductMenuData();
  const developersMenuData = getDevelopersMenuData();
  const solutionsMenuData = getSolutionsMenuData();
  const plateformeMenuData = getPlateformeMenuData();
  const enterpriseMenuData = getEnterpriseMenuData();
  const partnersMenuData = getPartnersMenuData();

  const getLocaleHref = (href: string) => {
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href={getLocaleHref("/")} className="flex items-center gap-2">
              <span className="font-medium text-sm text-foreground tracking-tight">
                {t("brandName")}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-0">
              <MegaMenu
                label={t("plateforme")}
                data={plateformeMenuData}
                getLocaleHref={getLocaleHref}
                t={t}
              />
              <MegaMenu
                label={t("product")}
                data={productMenuData}
                getLocaleHref={getLocaleHref}
                t={t}
              />
              <MegaMenu
                label={t("solutions")}
                data={solutionsMenuData}
                getLocaleHref={getLocaleHref}
                t={t}
              />
              <MegaMenu
                label={t("developers")}
                data={developersMenuData}
                getLocaleHref={getLocaleHref}
                t={t}
              />
              <MegaMenu
                label={t("partners")}
                data={partnersMenuData}
                getLocaleHref={getLocaleHref}
                t={t}
              />
              <MegaMenu
                label={t("enterprise")}
                data={enterpriseMenuData}
                getLocaleHref={getLocaleHref}
                t={t}
                compact
              />

              <li>
                <Link
                  href={getLocaleHref("/blog")}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
                >
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <HeaderAuthButton
              loginText={t("login")}
              accountText={t("account")}
              signUpText={t("signUp")}
              signUpHref={getLocaleHref("/under-attack-online")}
            />

            {/* Mobile Menu Button - placeholder, needs client component */}
            <div className="lg:hidden">
              <Link
                href="#"
                className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                <Menu className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
