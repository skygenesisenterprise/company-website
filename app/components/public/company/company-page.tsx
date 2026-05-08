import * as React from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
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
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

interface CompanySectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
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

export function CompanyPageShell({ locale, children }: CompanyPageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header locale={locale as Locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as "fr" | "be_fr" | "be_nl" | "ch_fr"} />
    </div>
  );
}

export function CompanyHero({
  eyebrow,
  title,
  description,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
}: CompanyHeroProps) {
  return (
    <section className="border-b border-border/60 bg-background py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {eyebrow}
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {description}
          </p>
          {primaryCta && primaryHref ? (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6">
                <Link href={primaryHref}>
                  {primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {secondaryCta && secondaryHref ? (
                <Button asChild variant="outline" size="lg" className="h-12 px-6">
                  <Link href={secondaryHref}>{secondaryCta}</Link>
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function CompanySection({
  eyebrow,
  title,
  description,
  children,
  className,
  muted = false,
}: CompanySectionProps) {
  return (
    <section
      className={cn(
        "border-b border-border/60 py-20 lg:py-24",
        muted && "bg-muted/30",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
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
        "h-full rounded-lg border border-border/60 bg-card p-6 transition-colors",
        href && "hover:border-foreground/20",
        className,
      )}
    >
      {Icon ? (
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-border/60 bg-muted/30 text-foreground">
          <Icon className="h-5 w-5" />
        </div>
      ) : null}
      {meta ? (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {meta}
        </p>
      ) : null}
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
      {href && cta ? (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
          {cta}
          <ArrowRight className="h-3.5 w-3.5" />
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
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-border/60 bg-card p-8 sm:p-10 lg:p-12">
          {eyebrow ? (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
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
                  className="h-12 px-6"
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
