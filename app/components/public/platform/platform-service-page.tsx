import * as React from "react";
import { ArrowRight, Building2, CheckCircle2, Layers3, Network, ShieldCheck } from "lucide-react";
import {
  PlatformBodyCard,
  PlatformCard,
  PlatformCTA,
  PlatformHero,
  PlatformLinkedCard,
  PlatformPageShell,
  PlatformSection,
  localizeHref,
} from "@/components/public/platform/platform-page";
import type { PlatformService } from "@/lib/platform/platform-services";
import type { PlatformPageCopy, PlatformTextCard } from "@/app/(public)/[locale]/platform/page-data";

interface PlatformServicePageProps {
  locale: string;
  service: PlatformService;
  copy: PlatformPageCopy;
}

function PlatformHeroSection({ locale, service, copy }: PlatformServicePageProps) {
  return (
    <PlatformHero
      locale={locale}
      eyebrow={copy.hero.eyebrow}
      title={copy.hero.title}
      promise={copy.hero.promise}
      description={copy.hero.description}
      status={service.status}
      statusLabel={copy.hero.statusLabel}
      ctas={service.ctas}
      ctaLabels={copy.hero.ctaLabels}
      availabilityLabels={copy.hero.availabilityLabels}
    />
  );
}

function PlatformPurpose({ copy }: { copy: PlatformPageCopy }) {
  return (
    <PlatformSection
      eyebrow={copy.purpose.eyebrow}
      title={copy.purpose.title}
      description={copy.purpose.description}
      headerAside={
        <div className="rounded-[1.5rem] border border-border/70 bg-card/80 px-5 py-4 text-sm text-muted-foreground">
          {copy.purpose.aside}
        </div>
      }
    >
      <div className="grid gap-5 md:grid-cols-2">
        <PlatformBodyCard
          title={copy.purpose.ecosystemRoleTitle}
          description={copy.purpose.ecosystemRoleDescription}
        />
        <PlatformBodyCard
          title={copy.purpose.platformBenefitTitle}
          description={copy.purpose.platformBenefitDescription}
        />
      </div>
    </PlatformSection>
  );
}

function PlatformWhyNow({ copy }: { copy: PlatformPageCopy }) {
  const items = [
    {
      ...copy.whyNow.items[0],
      icon: ShieldCheck,
    },
    {
      ...copy.whyNow.items[1],
      icon: CheckCircle2,
    },
    {
      ...copy.whyNow.items[2],
      icon: Layers3,
    },
  ];

  return (
    <PlatformSection
      eyebrow={copy.whyNow.eyebrow}
      title={copy.whyNow.title}
      description={copy.whyNow.description}
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

function PlatformCapabilities({ service, copy }: { service: PlatformService; copy: PlatformPageCopy }) {
  return (
    <PlatformSection
      eyebrow={copy.capabilities.eyebrow}
      title={copy.capabilities.title}
      description={copy.capabilities.description}
      tone="muted"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {service.capabilities.map((capability, index) => {
          const capabilityText = copy.capabilities.items[index] as PlatformTextCard;

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

function PlatformEcosystemConnections({ locale, copy }: { locale: string; copy: PlatformPageCopy }) {
  const items = [
    {
      ...copy.ecosystemConnections.items[0],
      href: localizeHref(locale, copy.ecosystemConnections.items[0]?.href ?? "/platform"),
      icon: Layers3,
    },
    {
      ...copy.ecosystemConnections.items[1],
      href: localizeHref(locale, copy.ecosystemConnections.items[1]?.href ?? "/products"),
      icon: Building2,
    },
    {
      ...copy.ecosystemConnections.items[2],
      href: localizeHref(locale, copy.ecosystemConnections.items[2]?.href ?? "/solutions/infrastructure"),
      icon: Network,
    },
  ];

  return (
    <PlatformSection
      eyebrow={copy.ecosystemConnections.eyebrow}
      title={copy.ecosystemConnections.title}
      description={copy.ecosystemConnections.description}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <PlatformLinkedCard
            key={item.title}
            href={item.href}
            title={item.title}
            description={item.description}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </PlatformSection>
  );
}

function PlatformUseCases({ copy }: { copy: PlatformPageCopy }) {
  return (
    <PlatformSection
      eyebrow={copy.useCases.eyebrow}
      title={copy.useCases.title}
      description={copy.useCases.description}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {copy.useCases.items.map((useCase, index) => (
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

function PlatformRecommendedNextStep({ locale, copy }: { locale: string; copy: PlatformPageCopy }) {
  return (
    <PlatformSection
      eyebrow={copy.recommendedNextStep.eyebrow}
      title={copy.recommendedNextStep.title}
      description={copy.recommendedNextStep.description}
      tone="muted"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {copy.recommendedNextStep.items.map((item) => (
          <PlatformLinkedCard
            key={item.title}
            href={localizeHref(locale, item.href)}
            title={item.title}
            description={item.description}
            label={item.label}
          />
        ))}
      </div>
    </PlatformSection>
  );
}

function PlatformIntegration({ copy }: { copy: PlatformPageCopy }) {
  return (
    <PlatformSection
      eyebrow={copy.integration.eyebrow}
      title={copy.integration.title}
      description={copy.integration.description}
      tone="muted"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <PlatformCard className="rounded-[2rem]">
          <p className="text-sm font-medium text-foreground">{copy.integration.mapTitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
              {copy.hero.title}
            </span>
            <span className="h-px w-8 bg-border" />
            <span className="rounded-full border border-border/70 bg-background px-4 py-2 text-sm text-muted-foreground">
              {copy.integration.brand}
            </span>
          </div>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">{copy.integration.mapDescription}</p>
        </PlatformCard>
        <div className="grid gap-3 sm:grid-cols-2">
          {copy.integration.items.map((integration) => (
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

function PlatformArchitecture({ copy }: { copy: PlatformPageCopy }) {
  return (
    <PlatformSection
      eyebrow={copy.architecture.eyebrow}
      title={copy.architecture.title}
      description={copy.architecture.description}
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-3">
          {copy.architecture.flow.map((step, index) => (
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
          <h3 className="text-base font-semibold text-foreground">{copy.architecture.operationalPrinciplesTitle}</h3>
          <ul className="mt-5 space-y-4">
            {copy.architecture.operationalPrinciples.map((principle) => (
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

function PlatformAvailability({ locale, service, copy }: PlatformServicePageProps) {
  return (
    <PlatformSection
      eyebrow={copy.availability.eyebrow}
      title={copy.availability.title}
      description={copy.availability.description}
      tone="muted"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.availability.items.map((item) => (
            <PlatformCard key={item.label} className="p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
              <p className="mt-3 text-sm font-semibold text-foreground">{item.value}</p>
            </PlatformCard>
          ))}
        </div>
        <PlatformCard className="rounded-[2rem] bg-card/85">
          <h3 className="text-lg font-semibold text-foreground">{copy.availability.continueWithTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy.availability.continueWithDescription}</p>
          <div className="mt-6 flex flex-col gap-3">
            {service.ctas.map((cta, index) => (
              <PlatformCTA key={cta.href} cta={cta} label={copy.hero.ctaLabels[index]} locale={locale} />
            ))}
          </div>
        </PlatformCard>
      </div>
    </PlatformSection>
  );
}

export function PlatformServicePage({ locale, service, copy }: PlatformServicePageProps) {
  return (
    <PlatformPageShell locale={locale}>
      <PlatformHeroSection locale={locale} service={service} copy={copy} />
      <PlatformPurpose copy={copy} />
      <PlatformWhyNow copy={copy} />
      <PlatformCapabilities service={service} copy={copy} />
      <PlatformEcosystemConnections locale={locale} copy={copy} />
      <PlatformUseCases copy={copy} />
      <PlatformIntegration copy={copy} />
      <PlatformArchitecture copy={copy} />
      <PlatformRecommendedNextStep locale={locale} copy={copy} />
      <PlatformAvailability locale={locale} service={service} copy={copy} />
    </PlatformPageShell>
  );
}
