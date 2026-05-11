import * as React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Code2,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/locale";
import type { LucideIcon } from "lucide-react";
import {
  platformServiceSlugs,
  platformServices,
  type PlatformServiceStatus,
} from "@/lib/platform/platform-services";
import {
  productServiceSlugs,
  productServices,
  type ProductStatus,
} from "@/lib/products/product-services";

interface HomePageProps {
  locale: string;
}

interface HomePageContentProps extends HomePageProps {
  t: (key: string) => string;
}

interface HomeSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  muted?: boolean;
  children: React.ReactNode;
}

interface HomeCardProps {
  title: string;
  description: string;
  href?: string;
  label?: string;
  icon?: LucideIcon;
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function StatusBadge({ status, label }: { status: PlatformServiceStatus | ProductStatus; label: string }) {
  const toneByStatus: Record<PlatformServiceStatus | ProductStatus, string> = {
    Available: "border-primary/25 bg-primary/10 text-primary",
    "Private preview": "border-accent bg-accent text-accent-foreground",
    "In development": "border-border bg-muted text-foreground",
    Experimental: "border-primary/20 bg-background text-primary",
    Planned: "border-border bg-muted/60 text-muted-foreground",
    Research: "border-border bg-card text-foreground",
  };

  return (
    <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium", toneByStatus[status])}>
      {label}
    </span>
  );
}

function HomeSection({ eyebrow, title, description, muted, children }: HomeSectionProps) {
  return (
    <section className={cn("py-20 sm:py-24", muted && "bg-muted/35")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function HomeCard({ title, description, href, label, icon: Icon }: HomeCardProps) {
  const content = (
    <div className="h-full rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30">
      {Icon ? <Icon className="mb-5 h-5 w-5 text-primary" aria-hidden={true} /> : null}
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
      {href ? (
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
          {label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      ) : null}
    </div>
  );

  if (!href) {
    return content;
  }

  return <Link href={href}>{content}</Link>;
}

function HomeHero({ locale, t }: HomePageContentProps) {
  return (
    <section className="border-b border-border bg-background py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            {t("hero.eyebrow")}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-muted-foreground">
            {t("hero.description")}
          </p>
          <div className="mt-6 inline-flex rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground">
            {t("hero.badge")}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-md px-6 text-sm font-medium">
              <Link href={localizeHref(locale, "/platform")}>
                {t("hero.primaryCta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-md px-6 text-sm font-medium">
              <Link href={localizeHref(locale, "/company/about")}>{t("hero.secondaryCta")}</Link>
            </Button>
          </div>
        </div>
        <HomeEcosystemMap t={t} />
      </div>
    </section>
  );
}

function HomeEcosystemMap({ t }: { t: (key: string) => string }) {
  const nodes = ["platform", "products", "solutions", "developers", "company"];

  return (
    <div className="rounded-lg border border-border bg-muted/50 p-6">
      <div className="rounded-md border border-border bg-card p-5">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <p className="text-sm font-semibold text-foreground">{t("ecosystemMap.title")}</p>
          <span className="text-xs font-medium text-muted-foreground">{t("ecosystemMap.badge")}</span>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary">
            {t("ecosystemMap.center")}
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {nodes.map((node) => (
            <div key={node} className="rounded-md border border-border bg-muted/45 px-4 py-3 text-sm font-medium text-foreground">
              {t(`ecosystemMap.nodes.${node}`)}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-muted-foreground">
          {t("ecosystemMap.description")}
        </p>
      </div>
    </div>
  );
}

function WhatWeBuild({ locale, t }: HomePageContentProps) {
  const items = [
    {
      title: t("whatWeBuild.items.platform.title"),
      description: t("whatWeBuild.items.platform.description"),
      href: localizeHref(locale, "/platform"),
      label: t("common.explore"),
      icon: Layers3,
    },
    {
      title: t("whatWeBuild.items.products.title"),
      description: t("whatWeBuild.items.products.description"),
      href: localizeHref(locale, "/products"),
      label: t("common.explore"),
      icon: Building2,
    },
    {
      title: t("whatWeBuild.items.solutions.title"),
      description: t("whatWeBuild.items.solutions.description"),
      href: localizeHref(locale, "/solutions/workplace"),
      label: t("common.explore"),
      icon: Users,
    },
    {
      title: t("whatWeBuild.items.developerTools.title"),
      description: t("whatWeBuild.items.developerTools.description"),
      href: localizeHref(locale, "/developers"),
      label: t("common.explore"),
      icon: Code2,
    },
  ];

  return (
    <HomeSection
      eyebrow={t("whatWeBuild.eyebrow")}
      title={t("whatWeBuild.title")}
      description={t("whatWeBuild.description")}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <HomeCard key={item.title} {...item} />
        ))}
      </div>
    </HomeSection>
  );
}

function WhyNow({ t }: HomePageContentProps) {
  const items = [
    {
      title: t("whyNow.items.control.title"),
      description: t("whyNow.items.control.description"),
      icon: ShieldCheck,
    },
    {
      title: t("whyNow.items.clarity.title"),
      description: t("whyNow.items.clarity.description"),
      icon: CheckCircle2,
    },
    {
      title: t("whyNow.items.execution.title"),
      description: t("whyNow.items.execution.description"),
      icon: Layers3,
    },
  ];

  return (
    <HomeSection
      eyebrow={t("whyNow.eyebrow")}
      title={t("whyNow.title")}
      description={t("whyNow.description")}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <HomeCard key={item.title} {...item} />
        ))}
      </div>
    </HomeSection>
  );
}

function HomePlatformGrid({ locale, t }: HomePageContentProps) {
  return (
    <HomeSection
      eyebrow={t("platform.eyebrow")}
      title={t("platform.title")}
      description={t("platform.description")}
      muted
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {platformServiceSlugs.map((slug) => {
          const service = platformServices[slug];

          return (
            <Link
              key={service.slug}
              href={localizeHref(locale, `/platform/${service.slug}`)}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-foreground">{t(`platform.services.${service.slug}.title`)}</h3>
                <StatusBadge status={service.status} label={t(`status.${service.status}`)} />
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t(`platform.services.${service.slug}.promise`)}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-8">
        <Button asChild variant="outline" className="rounded-md">
          <Link href={localizeHref(locale, "/platform")}>{t("platform.cta")}</Link>
        </Button>
      </div>
    </HomeSection>
  );
}

function HomeProductGrid({ locale, t }: HomePageContentProps) {
  return (
    <HomeSection
      eyebrow={t("products.eyebrow")}
      title={t("products.title")}
      description={t("products.description")}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {productServiceSlugs.map((slug) => {
          const product = productServices[slug];

          return (
            <Link
              key={product.slug}
              href={localizeHref(locale, `/products/${product.slug}`)}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-foreground">{t(`products.services.${product.slug}.title`)}</h3>
                <StatusBadge status={product.status} label={t(`status.${product.status}`)} />
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t(`products.services.${product.slug}.positioning`)}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-8">
        <Button asChild variant="outline" className="rounded-md">
          <Link href={localizeHref(locale, "/products")}>{t("products.cta")}</Link>
        </Button>
      </div>
    </HomeSection>
  );
}

function EcosystemConnections({ locale, t }: HomePageContentProps) {
  const items = [
    {
      title: t("ecosystemConnections.items.platform.title"),
      description: t("ecosystemConnections.items.platform.description"),
      href: localizeHref(locale, "/platform"),
      label: t("common.explore"),
      icon: Layers3,
    },
    {
      title: t("ecosystemConnections.items.products.title"),
      description: t("ecosystemConnections.items.products.description"),
      href: localizeHref(locale, "/products"),
      label: t("common.explore"),
      icon: Building2,
    },
    {
      title: t("ecosystemConnections.items.solutions.title"),
      description: t("ecosystemConnections.items.solutions.description"),
      href: localizeHref(locale, "/solutions/workplace"),
      label: t("common.explore"),
      icon: Network,
    },
    {
      title: t("ecosystemConnections.items.company.title"),
      description: t("ecosystemConnections.items.company.description"),
      href: localizeHref(locale, "/company/about"),
      label: t("common.explore"),
      icon: Users,
    },
  ];

  return (
    <HomeSection
      eyebrow={t("ecosystemConnections.eyebrow")}
      title={t("ecosystemConnections.title")}
      description={t("ecosystemConnections.description")}
      muted
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <HomeCard key={item.title} {...item} />
        ))}
      </div>
    </HomeSection>
  );
}

function SolutionsForOrganizations({ locale, t }: HomePageContentProps) {
  const solutions = [
    {
      title: t("solutions.items.b2c.title"),
      description: t("solutions.items.b2c.description"),
      href: localizeHref(locale, "/solutions/b2c"),
      label: t("common.explore"),
      icon: Users,
    },
    {
      title: t("solutions.items.b2b.title"),
      description: t("solutions.items.b2b.description"),
      href: localizeHref(locale, "/solutions/b2b"),
      label: t("common.explore"),
      icon: Building2,
    },
    {
      title: t("solutions.items.infrastructure.title"),
      description: t("solutions.items.infrastructure.description"),
      href: localizeHref(locale, "/solutions/infrastructure"),
      label: t("common.explore"),
      icon: Network,
    },
    {
      title: t("solutions.items.workplace.title"),
      description: t("solutions.items.workplace.description"),
      href: localizeHref(locale, "/solutions/workplace"),
      label: t("common.explore"),
      icon: Layers3,
    },
  ];

  return (
    <HomeSection
      eyebrow={t("solutions.eyebrow")}
      title={t("solutions.title")}
      description={t("solutions.description")}
      muted
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution) => (
          <HomeCard key={solution.title} {...solution} />
        ))}
      </div>
    </HomeSection>
  );
}

function RecommendedNextStep({ locale, t }: HomePageContentProps) {
  const items = [
    {
      title: t("recommendedNextStep.items.discover.title"),
      description: t("recommendedNextStep.items.discover.description"),
      href: localizeHref(locale, "/platform"),
      label: t("recommendedNextStep.items.discover.label"),
      icon: Layers3,
    },
    {
      title: t("recommendedNextStep.items.evaluate.title"),
      description: t("recommendedNextStep.items.evaluate.description"),
      href: localizeHref(locale, "/solutions/b2b"),
      label: t("recommendedNextStep.items.evaluate.label"),
      icon: Building2,
    },
    {
      title: t("recommendedNextStep.items.engage.title"),
      description: t("recommendedNextStep.items.engage.description"),
      href: localizeHref(locale, "/company/contact"),
      label: t("recommendedNextStep.items.engage.label"),
      icon: ArrowRight,
    },
  ];

  return (
    <HomeSection
      eyebrow={t("recommendedNextStep.eyebrow")}
      title={t("recommendedNextStep.title")}
      description={t("recommendedNextStep.description")}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <HomeCard key={item.title} {...item} />
        ))}
      </div>
    </HomeSection>
  );
}

function DeveloperOpenSource({ locale, t }: HomePageContentProps) {
  const developerItems = [
    { title: t("developers.items.documentation.title"), description: t("developers.items.documentation.description"), href: "/developers", icon: BookOpen },
    { title: t("developers.items.sdks.title"), description: t("developers.items.sdks.description"), href: "/developers/sdks", icon: Code2 },
    { title: t("developers.items.apis.title"), description: t("developers.items.apis.description"), href: "/developers/api", icon: Network },
    { title: t("developers.items.openSource.title"), description: t("developers.items.openSource.description"), href: "/developers", icon: GitBranch },
  ];

  return (
    <HomeSection
      eyebrow={t("developers.eyebrow")}
      title={t("developers.title")}
      description={t("developers.description")}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {developerItems.map((item) => (
          <HomeCard
            key={item.title}
            title={item.title}
            description={item.description}
            href={localizeHref(locale, item.href)}
            label={t("common.explore")}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild className="rounded-md">
          <Link href={localizeHref(locale, "/developers")}>{t("developers.primaryCta")}</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-md">
          <Link href="/docs">{t("developers.secondaryCta")}</Link>
        </Button>
      </div>
    </HomeSection>
  );
}

function HomePrinciples({ locale, t }: HomePageContentProps) {
  const principles = [
    { title: t("principles.items.sovereignty.title"), description: t("principles.items.sovereignty.description"), icon: ShieldCheck },
    { title: t("principles.items.security.title"), description: t("principles.items.security.description"), icon: LockKeyhole },
    { title: t("principles.items.operational.title"), description: t("principles.items.operational.description"), icon: CheckCircle2 },
    { title: t("principles.items.open.title"), description: t("principles.items.open.description"), icon: GitBranch },
    { title: t("principles.items.longTerm.title"), description: t("principles.items.longTerm.description"), icon: Layers3 },
  ];

  return (
    <HomeSection
      eyebrow={t("principles.eyebrow")}
      title={t("principles.title")}
      description={t("principles.description")}
      muted
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {principles.map((principle) => (
          <HomeCard key={principle.title} {...principle} />
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="outline" className="rounded-md">
          <Link href={localizeHref(locale, "/security")}>{t("principles.securityCta")}</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-md">
          <Link href={localizeHref(locale, "/security/trust")}>{t("principles.trustCta")}</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-md">
          <Link href={localizeHref(locale, "/company/about")}>{t("principles.aboutCta")}</Link>
        </Button>
      </div>
    </HomeSection>
  );
}

function HomeCTA({ locale, t }: HomePageContentProps) {
  const actions = [
    {
      title: t("cta.actions.organizations.title"),
      description: t("cta.actions.organizations.description"),
      href: localizeHref(locale, "/company/contact"),
      label: t("cta.actions.organizations.label"),
      icon: Building2,
    },
    {
      title: t("cta.actions.developers.title"),
      description: t("cta.actions.developers.description"),
      href: localizeHref(locale, "/developers"),
      label: t("cta.actions.developers.label"),
      icon: Code2,
    },
    {
      title: t("cta.actions.talent.title"),
      description: t("cta.actions.talent.description"),
      href: localizeHref(locale, "/company/careers"),
      label: t("cta.actions.talent.label"),
      icon: Users,
    },
  ];

  return (
    <section className="border-t border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {t("cta.eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("cta.title")}
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {actions.map((action) => (
            <HomeCard key={action.title} {...action} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function HomePage({ locale }: HomePageProps) {
  const translate = await getTranslations({ locale, namespace: "Public.home.page" });
  const t = (key: string) => translate(key);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header locale={locale as Locale} />
      <main className="flex-1">
        <HomeHero locale={locale} t={t} />
        <WhatWeBuild locale={locale} t={t} />
        <WhyNow locale={locale} t={t} />
        <HomePlatformGrid locale={locale} t={t} />
        <HomeProductGrid locale={locale} t={t} />
        <EcosystemConnections locale={locale} t={t} />
        <SolutionsForOrganizations locale={locale} t={t} />
        <DeveloperOpenSource locale={locale} t={t} />
        <HomePrinciples locale={locale} t={t} />
        <RecommendedNextStep locale={locale} t={t} />
        <HomeCTA locale={locale} t={t} />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export {
  HomeHero,
  HomeSection,
  HomeCard,
  HomeEcosystemMap,
  WhyNow,
  HomePlatformGrid,
  HomeProductGrid,
  EcosystemConnections,
  HomePrinciples,
  RecommendedNextStep,
  HomeCTA,
};
