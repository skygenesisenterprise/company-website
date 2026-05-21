import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Building2, CheckCircle2, Layers3, Network, ShieldCheck } from "lucide-react";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type {
  PlatformCta,
  PlatformService,
  PlatformServiceStatus,
} from "@/lib/platform/platform-services";
import type { Locale } from "@/lib/locale";
import type { LucideIcon } from "lucide-react";

interface PlatformServicePageProps {
  locale: string;
  service: PlatformService;
}

interface PlatformSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "default" | "muted" | "inverted";
  headerAside?: React.ReactNode;
  children: React.ReactNode;
}

interface PlatformTextCard {
  title: string;
  description: string;
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

const customAvailabilityValues = {
  inProgress: true,
  notAvailable: true,
  limited: true,
  internal: true,
} as const;

function PlatformSection({
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
            <span
              className={cn(
                "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]",
                isInverted ? "text-background/65" : "text-muted-foreground"
              )}
            >
              <span className={cn("h-px w-9", isInverted ? "bg-background/25" : "bg-foreground/15")} />
              {eyebrow}
            </span>
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

function PlatformCard({
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

function PlatformIconChip({
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

function PlatformLinkArrow({ inverted = false }: { inverted?: boolean }) {
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

function PlatformBodyCard({
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

function PlatformLinkedCard({
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

function PlatformStatusBadge({ status }: { status: PlatformServiceStatus }) {
  const tStatus = useTranslations("Public.home.page.status");
  const toneByStatus: Record<PlatformServiceStatus, string> = {
    Available: "border-primary/25 bg-primary/10 text-primary",
    "Private preview": "border-accent bg-accent text-accent-foreground",
    "In development": "border-border/70 bg-background/80 text-foreground",
    Experimental: "border-primary/20 bg-background/90 text-primary",
    Planned: "border-border/70 bg-muted/70 text-muted-foreground",
    Research: "border-border/70 bg-card/90 text-foreground",
  };

  return (
    <span
      className={cn("inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium", toneByStatus[status])}
    >
      {tStatus(status)}
    </span>
  );
}

function PlatformCTA({
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

function PlatformHero({ locale, service }: PlatformServicePageProps) {
  const t = useTranslations("Public.home.page.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");
  const tStatus = useTranslations("Public.home.page.status");
  const serviceTitle = tPlatform(`${service.slug}.title`);
  const ctaLabels = tPlatform.raw(`${service.slug}.ctas`) as [string, string];

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
      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-28">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-9 bg-foreground/15" />
            {t("brand")}
          </span>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <h1 className="text-[clamp(3rem,6vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-foreground">
              {serviceTitle}
            </h1>
            <PlatformStatusBadge status={service.status} />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {tPlatform(`${service.slug}.promise`)}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
            {tPlatform(`${service.slug}.description`)}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {service.ctas.map((cta, index) => (
              <PlatformCTA key={cta.href} cta={cta} label={ctaLabels[index]} locale={locale} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {service.availability.slice(0, 3).map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-primary/80" />
                {t(`availability.labels.${item.label}`)}
              </span>
            ))}
          </div>
        </div>
        <PlatformCard className="rounded-[2rem] bg-card/85 p-6 lg:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-border/70 pb-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {t("serviceProfile")}
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">{serviceTitle}</p>
            </div>
            <PlatformStatusBadge status={service.status} />
          </div>
          <dl className="mt-6 grid gap-4">
            {service.availability.slice(0, 4).map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-background/85 px-4 py-4"
              >
                <dt className="text-sm text-muted-foreground">{t(`availability.labels.${item.label}`)}</dt>
                <dd className="text-right text-sm font-medium text-foreground">
                  {item.value in customAvailabilityValues
                    ? t(`availability.values.${item.value}`)
                    : tStatus(item.value)}
                </dd>
              </div>
            ))}
          </dl>
        </PlatformCard>
      </div>
    </section>
  );
}

function PlatformPurpose({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.page.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");

  return (
    <PlatformSection
      eyebrow={t("purpose.eyebrow")}
      title={tPlatform(`${service.slug}.purpose.title`)}
      description={tPlatform(`${service.slug}.purpose.problem`)}
      headerAside={
        <div className="rounded-[1.5rem] border border-border/70 bg-card/80 px-5 py-4 text-sm text-muted-foreground">
          {tPlatform(`${service.slug}.description`)}
        </div>
      }
    >
      <div className="grid gap-5 md:grid-cols-2">
        <PlatformBodyCard
          title={t("purpose.ecosystemRole")}
          description={tPlatform(`${service.slug}.purpose.ecosystem`)}
        />
        <PlatformBodyCard
          title={t("purpose.platformBenefit")}
          description={tPlatform(`${service.slug}.purpose.benefit`)}
        />
      </div>
    </PlatformSection>
  );
}

function PlatformWhyNow({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.page.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");
  const serviceTitle = tPlatform(`${service.slug}.title`);

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
      title: t("whyNow.items.execution.title", { service: serviceTitle }),
      description: t("whyNow.items.execution.description", { service: serviceTitle }),
      icon: Layers3,
    },
  ];

  return (
    <PlatformSection
      eyebrow={t("whyNow.eyebrow")}
      title={t("whyNow.title")}
      description={t("whyNow.description")}
      tone="inverted"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <PlatformBodyCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            inverted
          />
        ))}
      </div>
    </PlatformSection>
  );
}

function PlatformCapabilities({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.page.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");
  const capabilities = tPlatform.raw(`${service.slug}.capabilities`) as PlatformTextCard[];

  return (
    <PlatformSection
      eyebrow={t("capabilities.eyebrow")}
      title={t("capabilities.title")}
      description={t("capabilities.description")}
      tone="muted"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {service.capabilities.map((capability, index) => {
          const capabilityText = capabilities[index];

          return (
            <PlatformBodyCard
              key={capabilityText.title}
              title={capabilityText.title}
              description={capabilityText.description}
              icon={capability.icon}
            />
          );
        })}
      </div>
    </PlatformSection>
  );
}

function PlatformEcosystemConnections({
  locale,
  service,
}: PlatformServicePageProps) {
  const t = useTranslations("Public.home.page.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");
  const serviceTitle = tPlatform(`${service.slug}.title`);

  const items = [
    {
      title: t("ecosystemConnections.items.platform.title"),
      description: t("ecosystemConnections.items.platform.description", { service: serviceTitle }),
      href: localizeHref(locale, "/platform"),
      icon: Layers3,
    },
    {
      title: t("ecosystemConnections.items.products.title"),
      description: t("ecosystemConnections.items.products.description"),
      href: localizeHref(locale, "/products"),
      icon: Building2,
    },
    {
      title: t("ecosystemConnections.items.solutions.title"),
      description: t("ecosystemConnections.items.solutions.description"),
      href: localizeHref(locale, "/solutions/infrastructure"),
      icon: Network,
    },
  ];

  return (
    <PlatformSection
      eyebrow={t("ecosystemConnections.eyebrow")}
      title={t("ecosystemConnections.title")}
      description={t("ecosystemConnections.description")}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <PlatformLinkedCard
            key={item.title}
            href={item.href}
            title={item.title}
            description={item.description}
            label={t("common.explore")}
            icon={item.icon}
          />
        ))}
      </div>
    </PlatformSection>
  );
}

function PlatformUseCases({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.page.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");
  const useCases = tPlatform.raw(`${service.slug}.useCases`) as PlatformTextCard[];

  return (
    <PlatformSection
      eyebrow={t("useCases.eyebrow")}
      title={t("useCases.title")}
      description={t("useCases.description")}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {useCases.map((useCase, index) => (
          <PlatformCard key={useCase.title}>
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-background text-sm font-semibold text-foreground">
              {index + 1}
            </div>
            <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{useCase.description}</p>
          </PlatformCard>
        ))}
      </div>
    </PlatformSection>
  );
}

function PlatformRecommendedNextStep({
  locale,
  service,
}: PlatformServicePageProps) {
  const t = useTranslations("Public.home.page.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");
  const serviceTitle = tPlatform(`${service.slug}.title`);

  const items = [
    {
      title: t("recommendedNextStep.items.explore.title"),
      description: t("recommendedNextStep.items.explore.description"),
      href: localizeHref(locale, "/platform"),
      label: t("recommendedNextStep.items.explore.label"),
    },
    {
      title: t("recommendedNextStep.items.evaluate.title"),
      description: t("recommendedNextStep.items.evaluate.description", { service: serviceTitle }),
      href: localizeHref(locale, "/solutions/infrastructure"),
      label: t("recommendedNextStep.items.evaluate.label"),
    },
    {
      title: t("recommendedNextStep.items.contact.title"),
      description: t("recommendedNextStep.items.contact.description"),
      href: localizeHref(locale, "/company/contact"),
      label: t("recommendedNextStep.items.contact.label"),
    },
  ];

  return (
    <PlatformSection
      eyebrow={t("recommendedNextStep.eyebrow")}
      title={t("recommendedNextStep.title")}
      description={t("recommendedNextStep.description")}
      tone="muted"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <PlatformLinkedCard
            key={item.title}
            href={item.href}
            title={item.title}
            description={item.description}
            label={item.label}
          />
        ))}
      </div>
    </PlatformSection>
  );
}

function PlatformIntegration({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.page.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");
  const integrations = tPlatform.raw(`${service.slug}.integrations`) as string[];

  return (
    <PlatformSection
      eyebrow={t("integration.eyebrow")}
      title={t("integration.title")}
      description={t("integration.description")}
      tone="muted"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <PlatformCard className="rounded-[2rem]">
          <p className="text-sm font-medium text-foreground">{t("integration.mapTitle")}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
              {tPlatform(`${service.slug}.title`)}
            </span>
            <span className="h-px w-8 bg-border" />
            <span className="rounded-full border border-border/70 bg-background px-4 py-2 text-sm text-muted-foreground">
              {t("brand")}
            </span>
          </div>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">{t("integration.mapDescription")}</p>
        </PlatformCard>
        <div className="grid gap-3 sm:grid-cols-2">
          {integrations.map((integration) => (
            <PlatformCard key={integration} className="flex items-center gap-3 p-4">
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">{integration}</span>
            </PlatformCard>
          ))}
        </div>
      </div>
    </PlatformSection>
  );
}

function PlatformArchitecture({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.page.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");
  const architectureFlow = tPlatform.raw(`${service.slug}.architectureFlow`) as string[];
  const operationalPrinciples = tPlatform.raw(`${service.slug}.operationalPrinciples`) as string[];

  return (
    <PlatformSection
      eyebrow={t("architecture.eyebrow")}
      title={t("architecture.title")}
      description={t("architecture.description")}
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-3">
          {architectureFlow.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-background text-sm font-semibold text-foreground">
                {index + 1}
              </div>
              <div className="min-h-11 flex-1 rounded-[1.25rem] border border-border/70 bg-card/90 px-4 py-3 text-sm font-medium text-foreground">
                {step}
              </div>
            </div>
          ))}
        </div>
        <PlatformCard className="rounded-[2rem] bg-card/85">
          <h3 className="text-base font-semibold text-foreground">{t("architecture.operationalPrinciples")}</h3>
          <ul className="mt-5 space-y-4">
            {operationalPrinciples.map((principle) => (
              <li key={principle} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {principle}
              </li>
            ))}
          </ul>
        </PlatformCard>
      </div>
    </PlatformSection>
  );
}

function PlatformAvailability({
  locale,
  service,
}: PlatformServicePageProps) {
  const t = useTranslations("Public.home.page.platformPage");
  const tStatus = useTranslations("Public.home.page.status");
  const tPlatform = useTranslations("Public.home.page.platform.services");
  const ctaLabels = tPlatform.raw(`${service.slug}.ctas`) as [string, string];
  const serviceTitle = tPlatform(`${service.slug}.title`);
  const isFrenchLocale = locale.startsWith("fr") || locale.startsWith("be_") || locale.startsWith("ch_");

  function toFrenchAvailabilityValue(value: string) {
    if (value in customAvailabilityValues) {
      return t(`availability.values.${value}`);
    }

    try {
      return tStatus(value);
    } catch {
      return value;
    }
  }

  return (
    <PlatformSection
      eyebrow={t("availability.eyebrow")}
      title={t("availability.title")}
      description={isFrenchLocale ? t("availability.description") : tPlatform(`${service.slug}.nextStep`)}
      tone="muted"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.availability.map((item) => (
            <PlatformCard key={item.label} className="p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {t(`availability.labels.${item.label}`)}
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {toFrenchAvailabilityValue(item.value)}
              </p>
            </PlatformCard>
          ))}
        </div>
        <PlatformCard className="rounded-[2rem] bg-card/85">
          <h3 className="text-lg font-semibold text-foreground">
            {t("availability.continueWith", { service: serviceTitle })}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{t("availability.description")}</p>
          <div className="mt-6 flex flex-col gap-3">
            {service.ctas.map((cta, index) => (
              <PlatformCTA key={cta.href} cta={cta} label={ctaLabels[index]} locale={locale} />
            ))}
          </div>
        </PlatformCard>
      </div>
    </PlatformSection>
  );
}

export function PlatformServicePage({ locale, service }: PlatformServicePageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header locale={locale as Locale} />
      <main className="flex-1 overflow-x-hidden">
        <PlatformHero locale={locale} service={service} />
        <PlatformPurpose service={service} />
        <PlatformWhyNow service={service} />
        <PlatformCapabilities service={service} />
        <PlatformEcosystemConnections locale={locale} service={service} />
        <PlatformUseCases service={service} />
        <PlatformIntegration service={service} />
        <PlatformArchitecture service={service} />
        <PlatformRecommendedNextStep locale={locale} service={service} />
        <PlatformAvailability locale={locale} service={service} />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export {
  PlatformHero,
  PlatformPurpose,
  PlatformWhyNow,
  PlatformCapabilities,
  PlatformEcosystemConnections,
  PlatformUseCases,
  PlatformIntegration,
  PlatformArchitecture,
  PlatformRecommendedNextStep,
  PlatformAvailability,
  PlatformStatusBadge,
  PlatformCTA,
};
