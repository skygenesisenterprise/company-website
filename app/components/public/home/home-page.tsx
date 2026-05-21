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
import { HeroWorldMap } from "@/components/public/home/hero-world-map";
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
  tone?: "default" | "muted" | "inverted";
  headerAside?: React.ReactNode;
  children: React.ReactNode;
}

interface HomeCardProps {
  title: string;
  description: string;
  href?: string;
  label?: string;
  icon?: LucideIcon;
  className?: string;
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
    "In development": "border-border/70 bg-background/80 text-foreground",
    Experimental: "border-primary/20 bg-background/90 text-primary",
    Planned: "border-border/70 bg-muted/70 text-muted-foreground",
    Research: "border-border/70 bg-card/90 text-foreground",
  };

  return (
    <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium", toneByStatus[status])}>
      {label}
    </span>
  );
}

function SectionEyebrow({ children, inverted }: { children: React.ReactNode; inverted?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]",
        inverted ? "text-background/65" : "text-muted-foreground",
      )}
    >
      <span className={cn("h-px w-9", inverted ? "bg-background/25" : "bg-foreground/15")} />
      {children}
    </span>
  );
}

function HomeSection({ eyebrow, title, description, tone = "default", headerAside, children }: HomeSectionProps) {
  const isInverted = tone === "inverted";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 sm:py-28 lg:py-32",
        tone === "muted" && "bg-muted/[0.38]",
        isInverted && "bg-foreground text-background",
      )}
    >
      {isInverted ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 34px, currentColor 34px, currentColor 35px)",
          }}
        />
      ) : null}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
          <div className="max-w-4xl">
            <SectionEyebrow inverted={isInverted}>{eyebrow}</SectionEyebrow>
            <h2
              className={cn(
                "mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl",
                isInverted ? "text-background" : "text-foreground",
              )}
            >
              {title}
            </h2>
            {description ? (
              <p
                className={cn(
                  "mt-6 max-w-3xl text-lg leading-8",
                  isInverted ? "text-background/70" : "text-muted-foreground",
                )}
              >
                {description}
              </p>
            ) : null}
          </div>
          {headerAside ? <div className="lg:justify-self-end">{headerAside}</div> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function HomeCard({ title, description, href, label, icon: Icon, className }: HomeCardProps) {
  const content = (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/90 p-6 shadow-sm transition duration-300",
        "hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/25 to-transparent" />
      <div className="flex items-start justify-between gap-4">
        {Icon ? (
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-background text-primary">
            <Icon className="h-5 w-5" aria-hidden={true} />
          </span>
        ) : (
          <span />
        )}
        {href ? (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground transition group-hover:border-primary/30 group-hover:text-primary">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        ) : null}
      </div>
      <h3 className="mt-8 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
      {href && label ? (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
          {label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
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
  const heroSignals = [t("ecosystemMap.nodes.platform"), t("ecosystemMap.nodes.products"), t("ecosystemMap.nodes.developers")];

  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="pointer-events-none absolute right-[-5rem] top-[2rem] hidden h-[760px] w-[760px] opacity-60 lg:block xl:right-[-6rem] xl:top-0 xl:h-[920px] xl:w-[920px]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(57,76,140,0.12),transparent_62%)]" />
        <HeroWorldMap className="relative z-10 h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(57,76,140,0.18),transparent_38%),radial-gradient(circle_at_85%_18%,rgba(57,76,140,0.1),transparent_28%)]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklch, var(--border) 65%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 65%, transparent) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 py-20 sm:py-24 lg:px-12 lg:py-28">
        <div className="relative max-w-3xl xl:max-w-4xl">
          <SectionEyebrow>{t("hero.eyebrow")}</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-foreground">
            {t("hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {t("hero.description")}
          </p>
          <div className="mt-6 inline-flex rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
            {t("hero.badge")}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 rounded-full px-8 text-sm font-medium shadow-lg shadow-primary/10">
              <Link href={localizeHref(locale, "/platform")}>
                {t("hero.primaryCta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 rounded-full px-8 text-sm font-medium">
              <Link href={localizeHref(locale, "/company/about")}>{t("hero.secondaryCta")}</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {heroSignals.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-primary/80" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
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
      headerAside={
        <div className="rounded-[1.5rem] border border-border/70 bg-card/80 px-5 py-4 text-sm text-muted-foreground">
          {t("recommendedNextStep.items.discover.description")}
        </div>
      }
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <HomeCard
              key={item.title}
              {...item}
              className={cn(index === 0 || index === 3 ? "md:min-h-[290px]" : "md:min-h-[250px]")}
            />
          ))}
        </div>
        <div className="rounded-[2rem] border border-border/70 bg-foreground p-8 text-background">
          <SectionEyebrow inverted>{t("whyNow.eyebrow")}</SectionEyebrow>
          <h3 className="mt-6 text-3xl font-semibold tracking-tight">{t("whyNow.title")}</h3>
          <p className="mt-4 text-base leading-7 text-background/70">{t("whyNow.description")}</p>
          <div className="mt-8 space-y-4">
            {["control", "clarity", "execution"].map((key, index) => (
              <div key={key} className="rounded-[1.5rem] border border-background/10 bg-background/5 p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-background/40">0{index + 1}</div>
                <div className="mt-3 text-lg font-semibold">{t(`whyNow.items.${key}.title`)}</div>
                <p className="mt-2 text-sm leading-6 text-background/65">{t(`whyNow.items.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
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
      tone="inverted"
      headerAside={
        <div className="rounded-[1.5rem] border border-background/10 bg-background/5 px-5 py-4 text-sm text-background/65">
          {t("ecosystemConnections.items.platform.description")}
        </div>
      }
    >
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_320px]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {platformServiceSlugs.map((slug, index) => {
            const service = platformServices[slug];

            return (
              <Link
                key={service.slug}
                href={localizeHref(locale, `/platform/${service.slug}`)}
                className={cn(
                  "group rounded-[1.75rem] border border-background/10 bg-background/[0.04] p-6 transition duration-300",
                  "hover:-translate-y-1 hover:border-background/20 hover:bg-background/[0.07]",
                  index === 0 && "sm:col-span-2 xl:col-span-1",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-background">{t(`platform.services.${service.slug}.title`)}</h3>
                  <StatusBadge status={service.status} label={t(`status.${service.status}`)} />
                </div>
                <p className="mt-4 text-sm leading-7 text-background/68">{t(`platform.services.${service.slug}.promise`)}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-background/80">
                  {t("common.explore")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="rounded-[2rem] border border-background/10 bg-background/[0.04] p-6">
          <div className="flex items-center justify-between border-b border-background/10 pb-4">
            <span className="text-sm font-medium text-background">{t("ecosystemMap.title")}</span>
            <span className="text-xs uppercase tracking-[0.18em] text-background/45">{t("ecosystemMap.badge")}</span>
          </div>
          <div className="mt-6 space-y-4">
            {[
              {
                title: t("ecosystemMap.nodes.platform"),
                description: t("ecosystemConnections.items.platform.description"),
              },
              {
                title: t("ecosystemMap.nodes.products"),
                description: t("ecosystemConnections.items.products.description"),
              },
              {
                title: t("ecosystemMap.nodes.solutions"),
                description: t("ecosystemConnections.items.solutions.description"),
              },
              {
                title: t("ecosystemMap.nodes.developers"),
                description: t("developers.items.apis.description"),
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-background/10 bg-background/[0.03] px-4 py-4">
                <div className="text-sm font-semibold text-background">{item.title}</div>
                <p className="mt-2 text-sm leading-6 text-background/60">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild variant="secondary" className="w-full rounded-full">
              <Link href={localizeHref(locale, "/platform")}>{t("platform.cta")}</Link>
            </Button>
          </div>
        </div>
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
      tone="muted"
    >
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {productServiceSlugs.map((slug, index) => {
          const product = productServices[slug];

          return (
            <Link
              key={product.slug}
              href={localizeHref(locale, `/products/${product.slug}`)}
              className={cn(
                "group rounded-[1.75rem] border border-border/70 bg-card/90 p-6 shadow-sm transition duration-300",
                "hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl",
                index === 0 ? "xl:col-span-2 xl:row-span-2" : "",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className={cn("font-semibold text-foreground", index === 0 ? "text-xl" : "text-base")}>
                  {t(`products.services.${product.slug}.title`)}
                </h3>
                <StatusBadge status={product.status} label={t(`status.${product.status}`)} />
              </div>
              <p className={cn("mt-4 leading-7 text-muted-foreground", index === 0 ? "max-w-md text-base" : "text-sm")}>
                {t(`products.services.${product.slug}.positioning`)}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                {t("common.explore")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
      <div className="mt-10">
        <Button asChild variant="outline" className="rounded-full px-6">
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
    >
      <div className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
        <div className="rounded-[2rem] border border-border/70 bg-card/85 p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("ecosystemMap.badge")}</div>
          <div className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{t("ecosystemMap.center")}</div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{t("ecosystemMap.description")}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <HomeCard key={item.title} {...item} />
          ))}
        </div>
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
      tone="muted"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {solutions.map((solution) => (
          <HomeCard key={solution.title} {...solution} />
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
      tone="inverted"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="rounded-[2rem] border border-background/10 bg-background/[0.04] p-8">
          <div className="text-sm font-medium text-background">{t("developers.items.documentation.title")}</div>
          <p className="mt-4 max-w-xl text-base leading-8 text-background/68">{t("developers.items.documentation.description")}</p>
          <div className="mt-8 space-y-4 font-mono text-sm text-background/70">
            <div className="rounded-2xl border border-background/10 bg-background/[0.03] px-4 py-4">/{locale}/developers</div>
            <div className="rounded-2xl border border-background/10 bg-background/[0.03] px-4 py-4">/{locale}/developers/api</div>
            <div className="rounded-2xl border border-background/10 bg-background/[0.03] px-4 py-4">/{locale}/developers/sdks</div>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="secondary" className="rounded-full px-6">
              <Link href={localizeHref(locale, "/developers")}>{t("developers.primaryCta")}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-background/15 bg-transparent px-6 text-background hover:bg-background/10 hover:text-background">
              <Link href="/docs">{t("developers.secondaryCta")}</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {developerItems.map((item) => (
            <HomeCard
              key={item.title}
              title={item.title}
              description={item.description}
              href={localizeHref(locale, item.href)}
              label={t("common.explore")}
              icon={item.icon}
              className="border-background/10 bg-background/[0.04] [&_h3]:text-background [&_p]:text-background/65"
            />
          ))}
        </div>
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
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {principles.map((principle) => (
          <HomeCard key={principle.title} {...principle} />
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <Button asChild variant="outline" className="rounded-full px-6">
          <Link href={localizeHref(locale, "/security")}>{t("principles.securityCta")}</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full px-6">
          <Link href={localizeHref(locale, "/security/trust")}>{t("principles.trustCta")}</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full px-6">
          <Link href={localizeHref(locale, "/company/about")}>{t("principles.aboutCta")}</Link>
        </Button>
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
      tone="muted"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <HomeCard key={item.title} {...item} />
        ))}
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
    <section className="relative overflow-hidden border-t border-border/70 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(57,76,140,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="overflow-hidden rounded-[2.25rem] border border-border bg-card/90 shadow-2xl">
          <div className="grid gap-10 px-8 py-10 sm:px-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-14 lg:py-14">
            <div className="lg:pr-8">
              <SectionEyebrow>{t("cta.eyebrow")}</SectionEyebrow>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t("cta.title")}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {actions.map((action) => (
                <HomeCard key={action.title} {...action} className="bg-background/85" />
              ))}
            </div>
          </div>
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
      <main className="flex-1 overflow-x-hidden">
        <HomeHero locale={locale} t={t} />
        <WhatWeBuild locale={locale} t={t} />
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
  HomePlatformGrid,
  HomeProductGrid,
  EcosystemConnections,
  HomePrinciples,
  RecommendedNextStep,
  HomeCTA,
};
