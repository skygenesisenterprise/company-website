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

interface PlatformServicePageProps {
  locale: string;
  service: PlatformService;
}

interface PlatformSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  muted?: boolean;
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
  muted = false,
  children,
}: PlatformSectionProps) {
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

function PlatformStatusBadge({ status }: { status: PlatformServiceStatus }) {
  const tStatus = useTranslations("Public.home.page.status");
  const toneByStatus: Record<PlatformServiceStatus, string> = {
    Available: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    "Private preview": "border-primary/25 bg-primary/10 text-primary",
    "In development": "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
    Experimental: "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300",
    Planned: "border-border bg-muted text-muted-foreground",
    Research: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        toneByStatus[status]
      )}
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
        "h-12 rounded-md px-6 text-sm font-medium",
        isPrimary && "bg-primary text-primary-foreground hover:bg-primary/90"
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
  const t = useTranslations("Public.home.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");
  const tStatus = useTranslations("Public.home.page.status");
  const serviceTitle = tPlatform(`${service.slug}.title`);
  const ctaLabels = tPlatform.raw(`${service.slug}.ctas`) as [string, string];

  return (
    <section className="border-b border-border bg-background py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            {t("brand")}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {serviceTitle}
            </h1>
            <PlatformStatusBadge status={service.status} />
          </div>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
            {tPlatform(`${service.slug}.promise`)}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
            {tPlatform(`${service.slug}.description`)}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {service.ctas.map((cta, index) => (
              <PlatformCTA
                key={cta.href}
                cta={cta}
                label={ctaLabels[index]}
                locale={locale}
              />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-muted/50 p-6 lg:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {t("serviceProfile")}
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                {serviceTitle}
              </p>
            </div>
            <PlatformStatusBadge status={service.status} />
          </div>
          <dl className="mt-6 grid gap-4">
            {service.availability.slice(0, 4).map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 rounded-md border border-border bg-card px-4 py-3"
              >
                <dt className="text-sm text-muted-foreground">
                  {t(`availability.labels.${item.label}`)}
                </dt>
                <dd className="text-right text-sm font-medium text-foreground">
                  {item.value in customAvailabilityValues
                    ? t(`availability.values.${item.value}`)
                    : tStatus(item.value)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function PlatformPurpose({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");

  return (
    <PlatformSection
      eyebrow={t("purpose.eyebrow")}
      title={tPlatform(`${service.slug}.purpose.title`)}
      description={tPlatform(`${service.slug}.purpose.problem`)}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-foreground">
            {t("purpose.ecosystemRole")}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {tPlatform(`${service.slug}.purpose.ecosystem`)}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-foreground">
            {t("purpose.platformBenefit")}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {tPlatform(`${service.slug}.purpose.benefit`)}
          </p>
        </div>
      </div>
    </PlatformSection>
  );
}

function PlatformWhyNow({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.platformPage");
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
      muted
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="rounded-lg border border-border bg-card p-6">
              <Icon className="mb-5 h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </div>
          );
        })}
      </div>
    </PlatformSection>
  );
}

function PlatformCapabilities({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");
  const capabilities = tPlatform.raw(`${service.slug}.capabilities`) as PlatformTextCard[];

  return (
    <PlatformSection
      eyebrow={t("capabilities.eyebrow")}
      title={t("capabilities.title")}
      description={t("capabilities.description")}
      muted
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {service.capabilities.map((capability, index) => {
          const Icon = capability.icon;
          const capabilityText = capabilities[index];

          return (
            <div
              key={capabilityText.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              {Icon ? (
                <Icon className="mb-5 h-5 w-5 text-primary" aria-hidden="true" />
              ) : null}
              <h3 className="text-base font-semibold text-foreground">
                {capabilityText.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {capabilityText.description}
              </p>
            </div>
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
  const t = useTranslations("Public.home.platformPage");
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
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/20"
            >
              <Icon className="mb-5 h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                {t("common.explore")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </PlatformSection>
  );
}

function PlatformUseCases({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.platformPage");
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
          <div
            key={useCase.title}
            className="rounded-lg border border-border bg-card p-6"
          >
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
              {index + 1}
            </div>
            <h3 className="text-base font-semibold text-foreground">
              {useCase.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>
    </PlatformSection>
  );
}

function PlatformRecommendedNextStep({
  locale,
  service,
}: PlatformServicePageProps) {
  const t = useTranslations("Public.home.platformPage");
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
      muted
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/20"
          >
            <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
              {item.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </PlatformSection>
  );
}

function PlatformIntegration({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");
  const integrations = tPlatform.raw(`${service.slug}.integrations`) as string[];

  return (
    <PlatformSection
      eyebrow={t("integration.eyebrow")}
      title={t("integration.title")}
      description={t("integration.description")}
      muted
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm font-medium text-foreground">{t("integration.mapTitle")}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              {tPlatform(`${service.slug}.title`)}
            </span>
            <span className="h-px w-8 bg-border" />
            <span className="rounded-md border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
              {t("brand")}
            </span>
          </div>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            {t("integration.mapDescription")}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {integrations.map((integration) => (
            <div
              key={integration}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">
                {integration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PlatformSection>
  );
}

function PlatformArchitecture({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.platformPage");
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
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-card text-sm font-semibold text-foreground">
                {index + 1}
              </div>
              <div className="min-h-11 flex-1 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">
                {step}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-muted/50 p-6">
          <h3 className="text-base font-semibold text-foreground">
            {t("architecture.operationalPrinciples")}
          </h3>
          <ul className="mt-5 space-y-4">
            {operationalPrinciples.map((principle) => (
              <li key={principle} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PlatformSection>
  );
}

function PlatformAvailability({
  locale,
  service,
}: PlatformServicePageProps) {
  const t = useTranslations("Public.home.platformPage");
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
      muted
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.availability.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-card p-5"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {t(`availability.labels.${item.label}`)}
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {toFrenchAvailabilityValue(item.value)}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">
            {t("availability.continueWith", { service: serviceTitle })}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {t("availability.description")}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {service.ctas.map((cta, index) => (
              <PlatformCTA
                key={cta.href}
                cta={cta}
                label={ctaLabels[index]}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </div>
    </PlatformSection>
  );
}

export function PlatformServicePage({ locale, service }: PlatformServicePageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header locale={locale as Locale} />
      <main className="flex-1">
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
