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

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function PlatformSection({
  eyebrow,
  title,
  description,
  muted = false,
  children,
}: PlatformSectionProps) {
  return (
    <section className={cn("py-20 sm:py-24", muted && "bg-slate-50/70")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
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
    Available: "border-emerald-200 bg-emerald-50 text-emerald-800",
    "Private preview": "border-indigo-200 bg-indigo-50 text-indigo-800",
    "In development": "border-amber-200 bg-amber-50 text-amber-800",
    Experimental: "border-sky-200 bg-sky-50 text-sky-800",
    Planned: "border-slate-200 bg-slate-50 text-slate-700",
    Research: "border-violet-200 bg-violet-50 text-violet-800",
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
  locale,
}: {
  cta: PlatformCta;
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
        isPrimary && "bg-slate-950 text-white hover:bg-indigo-950"
      )}
    >
      <Link href={localizeHref(locale, cta.href)}>
        {cta.label}
        {isPrimary ? <ArrowRight className="h-4 w-4" /> : null}
      </Link>
    </Button>
  );
}

function PlatformHero({ locale, service }: PlatformServicePageProps) {
  const t = useTranslations("Public.home.platformPage");
  const tPlatform = useTranslations("Public.home.page.platform.services");

  return (
    <section className="border-b border-slate-200 bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-700">
            {t("brand")}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              {service.title}
            </h1>
            <PlatformStatusBadge status={service.status} />
          </div>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
            {tPlatform(`${service.slug}.promise`)}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
            {service.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {service.ctas.map((cta) => (
              <PlatformCTA key={cta.label} cta={cta} locale={locale} />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 lg:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                {t("serviceProfile")}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                {service.title}
              </p>
            </div>
            <PlatformStatusBadge status={service.status} />
          </div>
          <dl className="mt-6 grid gap-4">
            {service.availability.slice(0, 4).map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 rounded-md border border-slate-200 bg-white px-4 py-3"
              >
                <dt className="text-sm text-slate-500">{item.label}</dt>
                <dd className="text-right text-sm font-medium text-slate-950">
                  {item.value}
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

  return (
    <PlatformSection
      eyebrow={t("purpose.eyebrow")}
      title={service.purpose.title}
      description={service.purpose.problem}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-slate-950">
            {t("purpose.ecosystemRole")}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {service.purpose.ecosystem}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-slate-950">
            {t("purpose.platformBenefit")}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {service.purpose.benefit}
          </p>
        </div>
      </div>
    </PlatformSection>
  );
}

function PlatformWhyNow({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.platformPage");

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
      title: t("whyNow.items.execution.title", { service: service.title }),
      description: t("whyNow.items.execution.description", { service: service.title }),
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
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <Icon className="mb-5 h-5 w-5 text-indigo-700" aria-hidden="true" />
              <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </PlatformSection>
  );
}

function PlatformCapabilities({ service }: { service: PlatformService }) {
  const t = useTranslations("Public.home.platformPage");

  return (
    <PlatformSection
      eyebrow={t("capabilities.eyebrow")}
      title={t("capabilities.title")}
      description={t("capabilities.description")}
      muted
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {service.capabilities.map((capability) => {
          const Icon = capability.icon;

          return (
            <div
              key={capability.title}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              {Icon ? (
                <Icon className="mb-5 h-5 w-5 text-indigo-700" aria-hidden="true" />
              ) : null}
              <h3 className="text-base font-semibold text-slate-950">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {capability.description}
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

  const items = [
    {
      title: t("ecosystemConnections.items.platform.title"),
      description: t("ecosystemConnections.items.platform.description", { service: service.title }),
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
              className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-indigo-200"
            >
              <Icon className="mb-5 h-5 w-5 text-indigo-700" aria-hidden="true" />
              <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-800">
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

  return (
    <PlatformSection
      eyebrow={t("useCases.eyebrow")}
      title={t("useCases.title")}
      description={t("useCases.description")}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {service.useCases.map((useCase, index) => (
          <div
            key={useCase.title}
            className="rounded-lg border border-slate-200 bg-white p-6"
          >
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-md border border-indigo-200 bg-indigo-50 text-sm font-semibold text-indigo-800">
              {index + 1}
            </div>
            <h3 className="text-base font-semibold text-slate-950">
              {useCase.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
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

  const items = [
    {
      title: t("recommendedNextStep.items.explore.title"),
      description: t("recommendedNextStep.items.explore.description"),
      href: localizeHref(locale, "/platform"),
      label: t("recommendedNextStep.items.explore.label"),
    },
    {
      title: t("recommendedNextStep.items.evaluate.title"),
      description: t("recommendedNextStep.items.evaluate.description", { service: service.title }),
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
            className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-indigo-200"
          >
            <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-800">
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

  return (
    <PlatformSection
      eyebrow={t("integration.eyebrow")}
      title={t("integration.title")}
      description={t("integration.description")}
      muted
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm font-medium text-slate-950">{t("integration.mapTitle")}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-900">
              {service.title}
            </span>
            <span className="h-px w-8 bg-slate-300" />
            <span className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
              {t("brand")}
            </span>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            {t("integration.mapDescription")}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {service.integrations.map((integration) => (
            <div
              key={integration}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4"
            >
              <CheckCircle2 className="h-4 w-4 text-indigo-700" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-800">
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

  return (
    <PlatformSection
      eyebrow={t("architecture.eyebrow")}
      title={t("architecture.title")}
      description={t("architecture.description")}
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-3">
          {service.architectureFlow.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-semibold text-slate-950">
                {index + 1}
              </div>
              <div className="min-h-11 flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800">
                {step}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-base font-semibold text-slate-950">
            {t("architecture.operationalPrinciples")}
          </h3>
          <ul className="mt-5 space-y-4">
            {service.operationalPrinciples.map((principle) => (
              <li key={principle} className="flex gap-3 text-sm leading-6 text-slate-600">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-700" />
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
  const isFrenchLocale = locale.startsWith("fr") || locale.startsWith("be_") || locale.startsWith("ch_");
  const valueMap: Record<string, string> = {
    "En progression": "En progression",
    "Non disponible": "Non disponible",
    Limité: "Limité",
    Interne: "Interne",
  };
  const labelMap: Record<string, string> = {
    "Current status": "Statut actuel",
    "Statut actuel": "Statut actuel",
    "Public API": "API publique",
    "API publique": "API publique",
    "Dashboard integration": "Intégration tableau de bord",
    "Intégration dashboard": "Intégration tableau de bord",
    Documentation: "Documentation",
    "Workspace integration": "Intégration espace de travail",
    "Intégration workspace": "Intégration espace de travail",
  };

  function toFrenchAvailabilityValue(value: string) {
    if (value in valueMap) {
      return valueMap[value];
    }

    try {
      return tStatus(value);
    } catch {
      return value;
    }
  }

  function toFrenchAvailabilityLabel(label: string) {
    return labelMap[label] ?? label;
  }

  return (
    <PlatformSection
      eyebrow={t("availability.eyebrow")}
      title={t("availability.title")}
      description={isFrenchLocale ? t("availability.description") : service.nextStep}
      muted
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.availability.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                {toFrenchAvailabilityLabel(item.label)}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-950">
                {toFrenchAvailabilityValue(item.value)}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            {t("availability.continueWith", { service: service.title })}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {t("availability.description")}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {service.ctas.map((cta) => (
              <PlatformCTA key={cta.label} cta={cta} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </PlatformSection>
  );
}

export function PlatformServicePage({ locale, service }: PlatformServicePageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
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
