import * as React from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroWorldMap } from "@/components/public/home/hero-world-map";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/locale";

interface CompanyPageShellProps {
  locale: string;
  children: React.ReactNode;
}

interface CompanyHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  signals?: string[];
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

interface CompanySectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  headerAside?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "muted" | "inverted";
  muted?: boolean;
}

interface CompanyCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  meta?: string;
  href?: string;
  cta?: string;
  className?: string;
}

interface CompanyCTAProps {
  eyebrow?: string;
  title: string;
  description: string;
  actions: Array<{
    label: string;
    href: string;
    variant?: "default" | "outline";
  }>;
}

interface CompanyTimelineItemProps {
  label: string;
  title: string;
  description: string;
}

interface CompanyStatProps {
  label: string;
  value: string;
  description?: string;
}

interface CompanyStatementProps {
  label?: string;
  title: string;
  body: string;
  aside?: React.ReactNode;
}

interface CompanyBulletGridProps {
  items: Array<{
    title: string;
    description: string;
  }>;
  columns?: "two" | "three";
}

interface CompanyRelatedPagesProps {
  items: Array<{
    title: string;
    description: string;
    href: string;
    cta: string;
    icon?: LucideIcon;
  }>;
}

export function CompanyPageShell({ locale, children }: CompanyPageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header locale={locale as Locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export function CompanyHero({
  eyebrow,
  title,
  description,
  signals,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
}: CompanyHeroProps) {
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
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-foreground">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
          <div className="mt-6 inline-flex rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
            {eyebrow}
          </div>
          {primaryCta && primaryHref ? (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-full px-8 text-sm font-medium shadow-lg shadow-primary/10">
                <Link href={primaryHref}>
                  {primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {secondaryCta && secondaryHref ? (
                <Button asChild variant="outline" size="lg" className="h-14 rounded-full px-8 text-sm font-medium">
                  <Link href={secondaryHref}>{secondaryCta}</Link>
                </Button>
              ) : null}
            </div>
          ) : null}
          {signals?.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {signals.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
                >
                  <span className="h-2 w-2 rounded-full bg-primary/80" />
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
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

export function CompanySection({
  eyebrow,
  title,
  description,
  headerAside,
  children,
  className,
  tone = "default",
  muted = false,
}: CompanySectionProps) {
  const resolvedTone = muted ? "muted" : tone;
  const isInverted = resolvedTone === "inverted";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/60 py-24 sm:py-28 lg:py-32",
        resolvedTone === "muted" && "bg-muted/[0.38]",
        isInverted && "bg-foreground text-background",
        className,
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
            {eyebrow ? <SectionEyebrow inverted={isInverted}>{eyebrow}</SectionEyebrow> : null}
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

export function CompanyCard({
  title,
  description,
  icon: Icon,
  meta,
  href,
  cta,
  className,
}: CompanyCardProps) {
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
      {meta ? (
        <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {meta}
        </p>
      ) : null}
      <h3 className={cn("text-lg font-semibold text-foreground", meta ? "mt-3" : "mt-8")}>
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
      {href && cta ? (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      ) : null}
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}

export function CompanyCTA({ eyebrow, title, description, actions }: CompanyCTAProps) {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card/90 p-8 shadow-sm sm:p-10 lg:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/25 to-transparent" />
          {eyebrow ? (
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
          ) : null}
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              {actions.map((action) => (
                <Button
                  key={action.href}
                  asChild
                  variant={action.variant ?? "default"}
                  size="lg"
                  className="h-14 rounded-full px-8 text-sm font-medium"
                >
                  <Link href={action.href}>{action.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CompanyTimelineItem({ label, title, description }: CompanyTimelineItemProps) {
  return (
    <div className="grid gap-6 rounded-[1.75rem] border border-border/70 bg-card/90 p-6 shadow-sm md:grid-cols-[140px_minmax(0,1fr)] md:items-start">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </div>
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function CompanyStat({ label, value, description }: CompanyStatProps) {
  return (
    <div className="rounded-[1.5rem] border border-border/70 bg-card/90 p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{value}</p>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

export function CompanyStatement({ label, title, body, aside }: CompanyStatementProps) {
  return (
    <div className="grid gap-6 rounded-[1.75rem] border border-border/70 bg-card/90 p-8 shadow-sm lg:grid-cols-[minmax(0,1fr)_240px] lg:p-10">
      <div className="max-w-3xl">
        {label ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </p>
        ) : null}
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h3>
        <p className="mt-5 text-base leading-7 text-muted-foreground">{body}</p>
      </div>
      <div className="lg:justify-self-end">{aside}</div>
    </div>
  );
}

export function CompanyBulletGrid({ items, columns = "three" }: CompanyBulletGridProps) {
  return (
    <div className={cn("grid gap-5", columns === "two" ? "md:grid-cols-2" : "md:grid-cols-3")}>
      {items.map((item) => (
        <div key={item.title} className="rounded-[1.5rem] border border-border/70 bg-card/90 p-6 shadow-sm">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background text-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function CompanyRelatedPages({ items }: CompanyRelatedPagesProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <CompanyCard
          key={item.href}
          icon={item.icon}
          title={item.title}
          description={item.description}
          href={item.href}
          cta={item.cta}
        />
      ))}
    </div>
  );
}
