import * as React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  Blocks,
  BookOpen,
  Building2,
  Code2,
  Globe2,
  LockKeyhole,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Footer } from "@/components/public/Footer";
import { Header } from "@/components/public/Header";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

interface HomePageProps {
  locale: string;
}

interface HomePageContentProps extends HomePageProps {
  t: (key: string) => string;
}

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "default" | "muted" | "dark";
  children: React.ReactNode;
}

interface CardLinkProps {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) return href;
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function SectionEyebrow({ children, inverted = false }: { children: React.ReactNode; inverted?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em]",
        inverted ? "text-background/50" : "text-muted-foreground",
      )}
    >
      <span className={cn("h-px w-8", inverted ? "bg-background/15" : "bg-border")} />
      {children}
    </span>
  );
}

function Section({ id, eyebrow, title, description, tone = "default", children }: SectionProps) {
  const dark = tone === "dark";

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-28 sm:py-36 lg:py-44",
        tone === "muted" && "bg-muted/40",
        dark && "bg-foreground text-background",
      )}
    >
      <div className="relative mx-auto max-w-360 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl">
          {eyebrow ? <SectionEyebrow inverted={dark}>{eyebrow}</SectionEyebrow> : null}
          <div>
            <h2
              className={cn(
                "mt-6 text-[clamp(2.2rem,4.5vw,3.5rem)] font-medium tracking-[-0.045em] leading-[1.08]",
                dark ? "text-background" : "text-foreground",
              )}
            >
              {title}
            </h2>
            {description ? (
              <p className={cn("mt-5 max-w-3xl text-base leading-7", dark ? "text-background/50" : "text-muted-foreground")}>
                {description}
              </p>
            ) : null}
          </div>
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

function CardLink({ title, description, href, cta, icon: Icon, className }: CardLinkProps) {
  const content = (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-border/40 bg-card p-6 transition-all duration-200",
        "hover:border-border/70 hover:shadow-md",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        {Icon ? (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors duration-200 group-hover:bg-foreground/5 group-hover:text-foreground">
            <Icon className="h-4.5 w-4.5" />
          </span>
        ) : (
          <span />
        )}
        {href ? (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100">
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden={true} />
          </span>
        ) : null}
      </div>
      <h3 className="mt-6 text-[1.05rem] font-medium tracking-[-0.01em] text-foreground">{title}</h3>
      <p className="mt-2.5 text-sm leading-6 text-muted-foreground">{description}</p>
      {cta ? (
        <span className="mt-5 inline-flex text-sm font-medium text-foreground/60 transition-colors duration-200 group-hover:text-foreground">
          {cta}
        </span>
      ) : null}
    </div>
  );

  if (!href) return content;
  return <Link href={href}>{content}</Link>;
}

/* ------------------------------------------------------------------ */
/* 1. Hero                                                             */
/* ------------------------------------------------------------------ */

function HomeHero({ locale, t }: HomePageContentProps) {
  const values = [
    { key: "secure", icon: ShieldCheck },
    { key: "interconnected", icon: Globe2 },
    { key: "modular", icon: Blocks },
    { key: "open", icon: Code2 },
  ];

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden={true} className="pointer-events-none absolute inset-0 gradient-mesh-hero" />
      <div aria-hidden={true} className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-360 items-center px-6 py-24 sm:py-32 lg:px-12">
        <div className="max-w-4xl">
          <SectionEyebrow>{t("hero.eyebrow")}</SectionEyebrow>

          <h1 className="mt-8 max-w-5xl text-[clamp(3.2rem,7vw,6.5rem)] font-medium leading-[0.86] tracking-[-0.065em] text-foreground">
            <span className="block">{t("hero.titleLine1")}</span>
            <span className="block">{t("hero.titleLine2")}</span>
            <span className="block">{t("hero.titleLine3")}</span>
            <span className="block text-gradient-primary">{t("hero.titleImpact")}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            {t("hero.description")}
          </p>

          {/* Value pills */}
          <div className="mt-10 flex flex-wrap gap-3">
            {values.map((v) => (
              <span
                key={v.key}
                className="inline-flex items-center gap-2.5 rounded-full border border-border/40 bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors duration-200 hover:border-border/70 hover:text-foreground"
              >
                <v.icon className="h-3.5 w-3.5" />
                <span className="font-medium">{t(`hero.values.${v.key}.title`)}</span>
                <span className="hidden sm:inline text-[11px] text-muted-foreground/60">
                  {t(`hero.values.${v.key}.description`)}
                </span>
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-foreground px-8 text-sm font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href={localizeHref(locale, "/office")}>
                {t("hero.primaryCta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-full px-8 text-sm font-medium text-foreground/60 transition-all duration-200 hover:bg-foreground/5 hover:text-foreground"
            >
              <Link href={localizeHref(locale, "/platform")}>{t("hero.secondaryCta")}</Link>
            </Button>
          </div>

          {/* Signal bar */}
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/50">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/15" />
              {t("hero.signals.workspace")}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/15" />
              {t("hero.signals.platforms")}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/15" />
              {t("hero.signals.foundations")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Stats Bar                                                        */
/* ------------------------------------------------------------------ */

function StatsBar({ t }: { t: (key: string) => string }) {
  const stats = [
    { value: t("statsBar.uptime"), label: t("statsBar.uptimeLabel") },
    { value: t("statsBar.countries"), label: t("statsBar.countriesLabel") },
    { value: t("statsBar.organizations"), label: t("statsBar.organizationsLabel") },
    { value: t("statsBar.transactions"), label: t("statsBar.transactionsLabel") },
  ];

  return (
    <section className="border-y border-border/40 bg-muted/30">
      <div className="mx-auto max-w-360 px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "py-12 sm:py-14",
                index < stats.length - 1 && "lg:border-r lg:border-border/30",
                index === 0 && "border-b lg:border-b-0 border-border/30",
                index === 1 && "border-b lg:border-b-0 border-border/30 lg:border-l lg:border-transparent",
              )}
            >
              <div className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-semibold tracking-[-0.06em] text-foreground">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2b. Social Proof (logo strip)                                       */
/* ------------------------------------------------------------------ */

function SocialProof() {
  const logos = [
    { name: "Partner 1" },
    { name: "Partner 2" },
    { name: "Partner 3" },
    { name: "Partner 4" },
    { name: "Partner 5" },
  ];

  return (
    <section className="border-b border-border/40 bg-muted/20 py-10 sm:py-12">
      <div className="mx-auto max-w-360 px-6 lg:px-12">
        <div className="flex flex-col items-center gap-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground/50">
            Fait confiance par
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.map((logo) => (
              <span
                key={logo.name}
                className="text-sm font-medium text-muted-foreground/30 transition-colors duration-200 hover:text-muted-foreground/60"
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Manifesto                                                        */
/* ------------------------------------------------------------------ */

function ManifestoSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
      <div className="relative mx-auto max-w-360 px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[clamp(1.5rem,3.2vw,2.8rem)] font-medium leading-[1.12] tracking-[-0.03em] text-foreground">
            {t("manifesto.statement")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Office Showcase (bento + capabilities + deployment)              */
/* ------------------------------------------------------------------ */

function OfficePreview({ t }: { t: (key: string) => string }) {
  const labels = ["mail", "meet", "chat", "sheets", "files", "calendar"] as const;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-card p-5">
      <div className="relative grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-border/30 bg-muted/40 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t("officeFeatured.visual.mailLabel")}
              </div>
              <div className="mt-2 text-lg font-medium text-foreground">
                {t("officeFeatured.visual.mailTitle")}
              </div>
            </div>
            <span className="rounded-full border border-border/40 bg-background px-3 py-1 text-xs text-muted-foreground">
              {t("officeFeatured.visual.mailState")}
            </span>
          </div>
          <div className="mt-5 space-y-2.5">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-xl border border-border/25 bg-background/70 px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-foreground">
                    {t(`officeFeatured.visual.mailItems.${item}.title`)}
                  </div>
                  <div className="h-2 w-2 rounded-full bg-border" />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {t(`officeFeatured.visual.mailItems.${item}.meta`)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-background/10 bg-foreground p-5 text-background sm:col-span-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">{t("officeFeatured.visual.meetTitle")}</div>
              <div className="rounded-full border border-background/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-background/50">
                {t("officeFeatured.visual.meetState")}
              </div>
            </div>
            <div className="mt-10 flex items-end justify-between gap-6">
              <div>
                <div className="text-3xl font-semibold tracking-[-0.04em]">
                  {t("officeFeatured.visual.meetTime")}
                </div>
                <div className="mt-2 text-sm text-background/50">
                  {t("officeFeatured.visual.meetMeta")}
                </div>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <span key={item} className="h-9 w-9 rounded-full border border-background/10 bg-background/8" />
                ))}
              </div>
            </div>
          </div>

          {labels.map((label) => (
            <div key={label} className="rounded-xl border border-border/25 bg-background/60 px-4 py-4">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t(`officeFeatured.visual.apps.${label}.label`)}
              </div>
              <div className="mt-2 text-base font-medium text-foreground">
                {t(`officeFeatured.visual.apps.${label}.title`)}
              </div>
              <div className="mt-2 text-sm leading-6 text-muted-foreground">
                {t(`officeFeatured.visual.apps.${label}.description`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OfficeShowcase({ locale, t }: HomePageContentProps) {
  return (
    <Section
      eyebrow={t("officeFeatured.eyebrow")}
      title={t("officeFeatured.title")}
      description={t("officeFeatured.description")}
      tone="muted"
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-center">
        <div className="max-w-xl">
          <div className="space-y-4">
            {["summary", "modular", "governed"].map((item) => (
              <div key={item} className="rounded-2xl border border-border/30 bg-card px-6 py-5">
                <div className="text-sm font-medium text-foreground">
                  {t(`officeFeatured.points.${item}.title`)}
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {t(`officeFeatured.points.${item}.description`)}
                </p>
              </div>
            ))}
          </div>

          {/* Capabilities row */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              { key: "communicate", icon: Globe2 },
              { key: "create", icon: Blocks },
              { key: "organize", icon: Network },
              { key: "secure", icon: ShieldCheck },
            ].map((item) => (
              <div key={item.key} className="flex items-center gap-3 rounded-xl border border-border/30 bg-card/60 px-4 py-3">
                <item.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {t(`officeCapabilities.items.${item.key}.title`)}
                </span>
              </div>
            ))}
          </div>

          {/* Deployment options */}
          <div className="mt-6 flex flex-wrap gap-3">
            {["managed", "controlled"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/50 px-4 py-2 text-xs font-medium text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                {t(`modularDeployment.options.${item}.title`)}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-full px-8 text-sm font-medium text-foreground/60 transition-all duration-200 hover:bg-foreground/5 hover:text-foreground"
            >
              <Link href={localizeHref(locale, "/office")}>{t("officeFeatured.cta")}</Link>
            </Button>
          </div>
        </div>
        <OfficePreview t={t} />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. What We Build (NEW — unused translations)                        */
/* ------------------------------------------------------------------ */

function WhatWeBuildSection({ t }: { t: (key: string) => string }) {
  const items = [
    { key: "platform", icon: Blocks },
    { key: "products", icon: Globe2 },
    { key: "solutions", icon: LockKeyhole },
    { key: "developerTools", icon: Code2 },
  ];

  return (
    <Section
      eyebrow={t("whatWeBuild.eyebrow")}
      title={t("whatWeBuild.title")}
      description={t("whatWeBuild.description")}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <CardLink
            key={item.key}
            title={t(`whatWeBuild.items.${item.key}.title`)}
            description={t(`whatWeBuild.items.${item.key}.description`)}
            icon={item.icon}
            className="min-h-52"
          />
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Why Now (NEW — unused translations)                              */
/* ------------------------------------------------------------------ */

function WhyNowSection({ t }: { t: (key: string) => string }) {
  const items = [
    { key: "control", icon: ShieldCheck },
    { key: "clarity", icon: BookOpen },
    { key: "execution", icon: Blocks },
  ];

  return (
    <Section
      eyebrow={t("whyNow.eyebrow")}
      title={t("whyNow.title")}
      description={t("whyNow.description")}
      tone="muted"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.key} className="rounded-2xl border border-border/30 bg-card p-7">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
              <item.icon className="h-4.5 w-4.5" />
            </span>
            <div className="mt-6 text-lg font-medium tracking-[-0.02em] text-foreground">
              {t(`whyNow.items.${item.key}.title`)}
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {t(`whyNow.items.${item.key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Platforms (consolidated: transition + platforms + architecture)   */
/* ------------------------------------------------------------------ */

function PlatformsSection({ locale, t }: HomePageContentProps) {
  const platforms = [
    { key: "developer", icon: Code2, href: "/platform/developer" },
    { key: "cloud", icon: Building2, href: "/platform/cloud" },
    { key: "telecom", icon: Network, href: "/platform/telecom" },
    { key: "finance", icon: LockKeyhole, href: "/platform/finance" },
    { key: "intelligence", icon: Blocks, href: "/platform/intelligence" },
    { key: "media", icon: Globe2, href: "/platform/media" },
  ];

  return (
    <>
      {/* Dark transition band */}
      <section className="relative overflow-hidden bg-foreground py-28 sm:py-36 lg:py-44">
        <div aria-hidden={true} className="pointer-events-none absolute inset-0 gradient-mesh-hero-dark" />
        <div className="relative mx-auto max-w-360 px-6 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <SectionEyebrow inverted>{t("platformsTransition.eyebrow")}</SectionEyebrow>
            <h2 className="mt-6 max-w-5xl text-[clamp(2.2rem,4.5vw,3.5rem)] font-medium tracking-[-0.045em] leading-[1.08] text-background">
              {t("platformsTransition.title")}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-background/50">
              {t("platformsTransition.description")}
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end">
            <p className="max-w-2xl text-2xl font-medium leading-10 tracking-[-0.04em] text-background/80">
              {t("platformsTransition.statement")}
            </p>
            <div className="rounded-2xl border border-background/8 bg-background/5 p-6 text-sm leading-7 text-background/50">
              {t("platformsTransition.aside")}
            </div>
          </div>
        </div>
      </section>

      {/* Platform cards */}
      <Section eyebrow={t("platforms.eyebrow")} title={t("platforms.title")} description={t("platforms.description")}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {platforms.map((platform) => (
            <CardLink
              key={platform.key}
              title={t(`platforms.items.${platform.key}.title`)}
              description={t(`platforms.items.${platform.key}.description`)}
              href={localizeHref(locale, platform.href)}
              cta={t("platforms.cta")}
              icon={platform.icon}
              className="min-h-56"
            />
          ))}
        </div>

        {/* Architecture layers */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border/30 bg-card p-6 sm:p-8">
            <div className="grid gap-3">
              {["organizations", "office", "platforms", "foundations"].map((item, index) => (
                <React.Fragment key={item}>
                  <div className="rounded-2xl border border-border/25 bg-background/70 p-5">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {t(`ecosystemArchitecture.layers.${item}.eyebrow`)}
                      </span>
                      <span className="text-lg font-medium tracking-[-0.03em] text-foreground">
                        {t(`ecosystemArchitecture.layers.${item}.title`)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {t(`ecosystemArchitecture.layers.${item}.description`)}
                    </p>
                  </div>
                  {index < 3 ? (
                    <div className="flex justify-center" aria-hidden={true}>
                      <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        <ArrowRight className="h-3 w-3 rotate-90" />
                      </div>
                    </div>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Developers (dark)                                                */
/* ------------------------------------------------------------------ */

function DevelopersSection({ locale, t }: HomePageContentProps) {
  return (
    <Section eyebrow={t("developersShowcase.eyebrow")} title={t("developersShowcase.title")} description={t("developersShowcase.description")} tone="dark">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="rounded-3xl border border-background/8 bg-background/3 p-7">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40">
            {t("developersShowcase.panel.eyebrow")}
          </div>
          <div className="mt-4 text-3xl font-medium tracking-[-0.04em] text-background">
            {t("developersShowcase.panel.title")}
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-background/50">
            {t("developersShowcase.panel.description")}
          </p>
          <div className="mt-8 grid gap-2.5 font-mono text-sm text-background/60">
            {["documentation", "apis", "sdks", "giteria"].map((item) => (
              <div key={item} className="rounded-xl border border-background/6 bg-background/3 px-4 py-3.5">
                {t(`developersShowcase.panel.entries.${item}`)}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="secondary" className="rounded-full px-6">
              <Link href={localizeHref(locale, "/developers")}>{t("developersShowcase.cta")}</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            { key: "documentation", icon: BookOpen },
            { key: "apis", icon: Network },
            { key: "sdks", icon: Code2 },
            { key: "openSource", icon: Blocks },
          ].map((item) => (
            <CardLink
              key={item.key}
              title={t(`developersShowcase.items.${item.key}.title`)}
              description={t(`developersShowcase.items.${item.key}.description`)}
              icon={item.icon}
              className="border-background/6 bg-background/3 shadow-none [&_h3]:text-background [&_p]:text-background/50"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 9. Trust (compact strip)                                            */
/* ------------------------------------------------------------------ */

function TrustSection({ locale, t }: HomePageContentProps) {
  return (
    <Section eyebrow={t("trustSecurity.eyebrow")} title={t("trustSecurity.title")} description={t("trustSecurity.description")}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {["identity", "design", "transparency", "disclosure"].map((item) => (
          <div key={item} className="rounded-2xl border border-border/30 bg-card p-6">
            <div className="text-base font-medium text-foreground">
              {t(`trustSecurity.items.${item}.title`)}
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {t(`trustSecurity.items.${item}.description`)}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button asChild variant="ghost" className="rounded-full px-6 text-foreground/60 transition-all duration-200 hover:bg-foreground/5 hover:text-foreground">
          <Link href={localizeHref(locale, "/security")}>{t("trustSecurity.securityCta")}</Link>
        </Button>
        <Button asChild variant="ghost" className="rounded-full px-6 text-foreground/60 transition-all duration-200 hover:bg-foreground/5 hover:text-foreground">
          <Link href={localizeHref(locale, "/security/trust")}>{t("trustSecurity.trustCta")}</Link>
        </Button>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 10. Company                                                         */
/* ------------------------------------------------------------------ */

function CompanySection({ locale, t }: HomePageContentProps) {
  return (
    <Section eyebrow={t("company.eyebrow")} title={t("company.title")} description={t("company.description")} tone="muted">
      <div className="grid gap-4 md:grid-cols-3">
        <CardLink
          title={t("company.items.company.title")}
          description={t("company.items.company.description")}
          href={localizeHref(locale, "/company/about")}
          cta={t("company.items.company.cta")}
          icon={Building2}
          className="min-h-56"
        />
        <CardLink
          title={t("company.items.partners.title")}
          description={t("company.items.partners.description")}
          href={localizeHref(locale, "/company/partners")}
          cta={t("company.items.partners.cta")}
          icon={Users}
          className="min-h-56"
        />
        <CardLink
          title={t("company.items.careers.title")}
          description={t("company.items.careers.description")}
          href={localizeHref(locale, "/company/careers")}
          cta={t("company.items.careers.cta")}
          icon={Code2}
          className="min-h-56"
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 11. Final CTA                                                       */
/* ------------------------------------------------------------------ */

function FinalCtaSection({ locale, t }: HomePageContentProps) {
  return (
    <section className="relative overflow-hidden bg-foreground py-28 sm:py-36 lg:py-44">
      <div aria-hidden={true} className="pointer-events-none absolute inset-0 gradient-mesh-hero-dark" />
      <div
        aria-hidden={true}
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto max-w-360 px-6 lg:px-12">
        <div className="rounded-3xl border border-background/8 bg-background/5 px-8 py-10 sm:px-10 lg:px-14 lg:py-14">
          <SectionEyebrow inverted>{t("finalCta.eyebrow")}</SectionEyebrow>
          <h2 className="mt-6 max-w-4xl text-[clamp(2.2rem,4.5vw,3.8rem)] font-medium tracking-tighter leading-[1.05] text-background">
            {t("finalCta.title")}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-background/50">
            {t("finalCta.description")}
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { key: "organizations", href: "/office", icon: Building2 },
              { key: "builders", href: "/platform", icon: Blocks },
              { key: "developers", href: "/developers", icon: Code2 },
            ].map((item) => (
              <Link
                key={item.key}
                href={localizeHref(locale, item.href)}
                className="group rounded-2xl border border-background/8 bg-background/3 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-background/15 hover:bg-background/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-background/8 bg-background/3 text-background/70">
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-background/35">
                  {t(`finalCta.items.${item.key}.eyebrow`)}
                </div>
                <div className="mt-3 text-2xl font-medium tracking-[-0.04em] text-background">
                  {t(`finalCta.items.${item.key}.title`)}
                </div>
                <p className="mt-3 text-sm leading-6 text-background/50">
                  {t(`finalCta.items.${item.key}.description`)}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-background/70 transition-colors duration-200 group-hover:text-background">
                  {t(`finalCta.items.${item.key}.cta`)}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export async function HomePage({ locale }: HomePageProps) {
  const translate = await getTranslations({ locale, namespace: "Public.home.page" });
  const t = (key: string) => translate(key);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header locale={locale as Locale} />
      <main className="flex-1 overflow-x-hidden">
        <HomeHero locale={locale} t={t} />
        <StatsBar t={t} />
        <SocialProof />
        <ManifestoSection t={t} />
        <OfficeShowcase locale={locale} t={t} />
        <WhatWeBuildSection t={t} />
        <WhyNowSection t={t} />
        <PlatformsSection locale={locale} t={t} />
        <DevelopersSection locale={locale} t={t} />
        <TrustSection locale={locale} t={t} />
        <CompanySection locale={locale} t={t} />
        <FinalCtaSection locale={locale} t={t} />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}
