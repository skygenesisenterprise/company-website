import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type {
  PlatformCta,
  PlatformServiceStatus,
} from "@/lib/platform/platform-services";
import type { Locale } from "@/lib/locale";
import type { LucideIcon } from "lucide-react";

interface PlatformPageShellProps {
  locale: string;
  children: React.ReactNode;
}

interface PlatformSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "default" | "muted" | "inverted";
  headerAside?: React.ReactNode;
  children: React.ReactNode;
}

interface PlatformHeroProps {
  locale: string;
  eyebrow: string;
  title: string;
  promise: string;
  description: string;
  status: PlatformServiceStatus;
  statusLabel: string;
  ctas: PlatformCta[];
  ctaLabels: [string, string];
  availabilityLabels: string[];
}

export function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

export function PlatformSectionEyebrow({
  children,
  inverted = false,
}: {
  children: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]",
        inverted ? "text-background/65" : "text-muted-foreground"
      )}
    >
      <span className={cn("h-px w-9", inverted ? "bg-background/25" : "bg-foreground/15")} />
      {children}
    </span>
  );
}

export function PlatformSignalPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-primary/80" />
      {children}
    </span>
  );
}

export function PlatformPageShell({ locale, children }: PlatformPageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header locale={locale as Locale} />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export function PlatformSection({
  eyebrow,
  title,
  description,
  tone = "default",
  headerAside,
  children,
}: PlatformSectionProps) {
  const isInverted = tone === "inverted";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 sm:py-28 lg:py-32",
        tone === "muted" && "bg-muted/[0.38]",
        isInverted && "bg-foreground text-background"
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
            <PlatformSectionEyebrow inverted={isInverted}>{eyebrow}</PlatformSectionEyebrow>
            <h2
              className={cn(
                "mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl",
                isInverted ? "text-background" : "text-foreground"
              )}
            >
              {title}
            </h2>
            {description ? (
              <p
                className={cn(
                  "mt-6 max-w-3xl text-lg leading-8",
                  isInverted ? "text-background/70" : "text-muted-foreground"
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

export function PlatformCard({
  children,
  className,
  interactive = false,
  inverted = false,
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  inverted?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-[1.75rem] border p-6 shadow-sm transition duration-300",
        inverted ? "border-background/10 bg-background/[0.04]" : "border-border/70 bg-card/90",
        interactive &&
          (inverted
            ? "hover:-translate-y-1 hover:border-background/20 hover:bg-background/[0.07]"
            : "hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"),
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-px",
          inverted
            ? "bg-linear-to-r from-transparent via-background/20 to-transparent"
            : "bg-linear-to-r from-transparent via-primary/25 to-transparent"
        )}
      />
      {children}
    </div>
  );
}

export function PlatformIconChip({
  children,
  inverted = false,
}: {
  children: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl border",
        inverted
          ? "border-background/10 bg-background/[0.06] text-background"
          : "border-border/70 bg-background text-primary"
      )}
    >
      {children}
    </span>
  );
}

export function PlatformLinkArrow({ inverted = false }: { inverted?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border transition",
        inverted
          ? "border-background/10 bg-background/[0.04] text-background/70 group-hover:border-background/20 group-hover:text-background"
          : "border-border/70 bg-background text-muted-foreground group-hover:border-primary/30 group-hover:text-primary"
      )}
    >
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </span>
  );
}

export function PlatformBodyCard({
  title,
  description,
  icon,
  className,
  inverted = false,
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
  inverted?: boolean;
}) {
  const Icon = icon;

  return (
    <PlatformCard className={className} inverted={inverted}>
      <div className="flex items-start justify-between gap-4">
        {Icon ? (
          <PlatformIconChip inverted={inverted}>
            <Icon className="h-5 w-5" aria-hidden="true" />
          </PlatformIconChip>
        ) : (
          <span />
        )}
      </div>
      <h3 className={cn("mt-8 text-lg font-semibold", inverted ? "text-background" : "text-foreground")}>
        {title}
      </h3>
      <p className={cn("mt-4 text-sm leading-7", inverted ? "text-background/68" : "text-muted-foreground")}>
        {description}
      </p>
    </PlatformCard>
  );
}

export function PlatformLinkedCard({
  href,
  title,
  description,
  label,
  icon,
  inverted = false,
}: {
  href: string;
  title: string;
  description: string;
  label: string;
  icon?: LucideIcon;
  inverted?: boolean;
}) {
  const Icon = icon;

  return (
    <Link href={href} className="group block h-full">
      <PlatformCard interactive inverted={inverted}>
        <div className="flex items-start justify-between gap-4">
          {Icon ? (
            <PlatformIconChip inverted={inverted}>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </PlatformIconChip>
          ) : (
            <span />
          )}
          <PlatformLinkArrow inverted={inverted} />
        </div>
        <h3 className={cn("mt-8 text-lg font-semibold", inverted ? "text-background" : "text-foreground")}>
          {title}
        </h3>
        <p className={cn("mt-4 text-sm leading-7", inverted ? "text-background/68" : "text-muted-foreground")}>
          {description}
        </p>
        <span
          className={cn(
            "mt-6 inline-flex items-center gap-2 text-sm font-medium",
            inverted ? "text-background/80" : "text-foreground"
          )}
        >
          {label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </PlatformCard>
    </Link>
  );
}

export function PlatformStatusBadge({
  status,
  label,
}: {
  status: PlatformServiceStatus;
  label: string;
}) {
  const toneByStatus: Record<PlatformServiceStatus, string> = {
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

export function PlatformCTA({
  cta,
  label,
  locale,
}: {
  cta: PlatformCta;
  label: string;
  locale: string;
}) {
  const isPrimary = cta.variant !== "secondary";

  return (
    <Button
      asChild
      size="lg"
      variant={isPrimary ? "default" : "outline"}
      className={cn(
        "h-14 rounded-full px-8 text-sm font-medium",
        isPrimary && "bg-primary text-primary-foreground shadow-lg shadow-primary/10 hover:bg-primary/90"
      )}
    >
      <Link href={localizeHref(locale, cta.href)}>
        {label}
        {isPrimary ? <ArrowRight className="h-4 w-4" /> : null}
      </Link>
    </Button>
  );
}

export function PlatformHero({
  locale,
  eyebrow,
  title,
  promise,
  description,
  status,
  statusLabel,
  ctas,
  ctaLabels,
  availabilityLabels,
}: PlatformHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
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
      <div className="relative mx-auto max-w-350 px-6 py-24 sm:py-28 lg:px-12 lg:py-36">
        <div className="relative max-w-3xl xl:max-w-4xl">
          <PlatformSectionEyebrow>{eyebrow}</PlatformSectionEyebrow>
          <h1 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-foreground">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{promise}</p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">{description}</p>
          <div className="mt-6 inline-flex rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
            {eyebrow}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {ctas.map((cta, index) => (
              <PlatformCTA key={cta.href} cta={cta} label={ctaLabels[index]} locale={locale} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <PlatformStatusBadge status={status} label={statusLabel} />
            {availabilityLabels.map((label) => (
              <PlatformSignalPill key={label}>{label}</PlatformSignalPill>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
