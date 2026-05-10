import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
      {status}
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
  return (
    <section className="border-b border-slate-200 bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-700">
            SGE Platform
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              {service.title}
            </h1>
            <PlatformStatusBadge status={service.status} />
          </div>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
            {service.promise}
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
                Service profile
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
  return (
    <PlatformSection
      eyebrow="Purpose"
      title={service.purpose.title}
      description={service.purpose.problem}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-slate-950">
            Ecosystem role
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {service.purpose.ecosystem}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-slate-950">
            Platform benefit
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {service.purpose.benefit}
          </p>
        </div>
      </div>
    </PlatformSection>
  );
}

function PlatformCapabilities({ service }: { service: PlatformService }) {
  return (
    <PlatformSection
      eyebrow="Core capabilities"
      title="Core capabilities"
      description="The main functions are intentionally scoped to infrastructure needs and current maturity."
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

function PlatformUseCases({ service }: { service: PlatformService }) {
  return (
    <PlatformSection
      eyebrow="Use cases"
      title="Practical use cases"
      description="Short, realistic scenarios for how this service fits into SGE products and operations."
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

function PlatformIntegration({ service }: { service: PlatformService }) {
  return (
    <PlatformSection
      eyebrow="Ecosystem integration"
      title="Connects with the SGE ecosystem"
      description="Each platform service is presented as part of a shared technical foundation, not as an isolated product."
      muted
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm font-medium text-slate-950">Integration map</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-900">
              {service.title}
            </span>
            <span className="h-px w-8 bg-slate-300" />
            <span className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
              SGE Platform
            </span>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            The service exchanges signals, policies or product context with adjacent SGE systems according to its maturity.
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
  return (
    <PlatformSection
      eyebrow="Architecture & operations"
      title="Operational flow"
      description="A simplified view of how requests, events or records move through this service."
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
            Operational principles
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
  return (
    <PlatformSection
      eyebrow="Availability & next step"
      title="Availability and next step"
      description={service.nextStep}
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
                {item.label}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Continue with {service.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Start from the most relevant SGE entry point for the current maturity of this service.
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
        <PlatformCapabilities service={service} />
        <PlatformUseCases service={service} />
        <PlatformIntegration service={service} />
        <PlatformArchitecture service={service} />
        <PlatformAvailability locale={locale} service={service} />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export {
  PlatformHero,
  PlatformPurpose,
  PlatformCapabilities,
  PlatformUseCases,
  PlatformIntegration,
  PlatformArchitecture,
  PlatformAvailability,
  PlatformStatusBadge,
  PlatformCTA,
};
