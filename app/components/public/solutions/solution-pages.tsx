import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Building2, CheckCircle2, Layers3, Network, ShieldCheck } from "lucide-react";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/locale";
import {
  industrySolutions,
  solutions,
  useCaseSolutions,
  type RelatedStackItem,
  type SolutionContent,
  type SolutionCta,
  type SolutionSlug,
} from "@/lib/solutions/solution-content";

interface LocaleProps {
  locale: string;
}

interface SolutionPageProps extends LocaleProps {
  solution: SolutionContent;
}

interface SolutionSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  muted?: boolean;
  children: React.ReactNode;
}

interface SolutionTextCard {
  title: string;
  description: string;
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function SolutionSection({
  eyebrow,
  title,
  description,
  muted = false,
  children,
}: SolutionSectionProps) {
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

function SolutionCTA({
  cta,
  label,
  locale,
}: {
  cta: SolutionCta;
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
        isPrimary && "bg-slate-950 text-white hover:bg-indigo-950"
      )}
    >
      <Link href={localizeHref(locale, cta.href)}>
        {label}
        {isPrimary ? <ArrowRight className="h-4 w-4" /> : null}
      </Link>
    </Button>
  );
}

function HubCard({
  locale,
  slug,
}: LocaleProps & {
  slug: SolutionSlug;
}) {
  const solution = solutions[slug];
  const t = useTranslations("Public.home.solutionPage");
  const tSolutions = useTranslations("Public.home.page.solutions.services");

  return (
    <Link
      href={localizeHref(locale, `/solutions/${solution.slug}`)}
      className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-indigo-200"
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
        {t(`categories.${solution.category}`)}
      </p>
      <h3 className="mt-4 text-lg font-semibold text-slate-950">
        {tSolutions(`${slug}.title`)}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {tSolutions(`${slug}.positioning`)}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-800">
        {t("common.openSolution")}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}

function SolutionsHubHero({ locale }: LocaleProps) {
  const t = useTranslations("Public.home.solutionPage");
  const modelSteps = t.raw("hub.hero.model.steps") as string[];

  return (
    <section className="border-b border-slate-200 bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-700">
            {t("brand")}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            {t("hub.hero.title")}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700">
            {t("hub.hero.description")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-md bg-slate-950 px-6 text-sm font-medium text-white hover:bg-indigo-950">
              <Link href={localizeHref(locale, "/company/contact")}>
                {t("hub.hero.primaryCta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-md px-6 text-sm font-medium">
              <Link href={localizeHref(locale, "/platform")}>{t("hub.hero.secondaryCta")}</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <div className="rounded-md border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-950">{t("hub.hero.model.title")}</p>
            <div className="mt-6 grid gap-3">
              {modelSteps.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-800">
                    {index + 1}
                  </span>
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              {t("hub.hero.model.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowSgeBuildsSolutions() {
  const t = useTranslations("Public.home.solutionPage");
  const items = t.raw("hub.how.items") as SolutionTextCard[];

  return (
    <SolutionSection
      eyebrow={t("hub.how.eyebrow")}
      title={t("hub.how.title")}
      description={t("hub.how.description")}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </SolutionSection>
  );
}

function PlatformProductsConnection({ locale }: LocaleProps) {
  const t = useTranslations("Public.home.solutionPage");
  const items = t.raw("hub.platformProducts.items") as Array<SolutionTextCard & { href: string }>;

  return (
    <SolutionSection
      eyebrow={t("hub.platformProducts.eyebrow")}
      title={t("hub.platformProducts.title")}
      description={t("hub.platformProducts.description")}
      muted
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <Link key={item.title} href={localizeHref(locale, item.href)} className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-indigo-200">
            <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-800">
              {t("common.explore")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </SolutionSection>
  );
}

export function SolutionsHubPage({ locale }: LocaleProps) {
  const t = useTranslations("Public.home.solutionPage");

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale={locale as Locale} />
      <main className="flex-1">
        <SolutionsHubHero locale={locale} />
        <SolutionSection
          eyebrow={t("hub.useCases.eyebrow")}
          title={t("hub.useCases.title")}
          description={t("hub.useCases.description")}
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {useCaseSolutions.map((slug) => (
              <HubCard key={slug} locale={locale} slug={slug} />
            ))}
          </div>
        </SolutionSection>
        <SolutionSection
          eyebrow={t("hub.industries.eyebrow")}
          title={t("hub.industries.title")}
          description={t("hub.industries.description")}
          muted
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {industrySolutions.map((slug) => (
              <HubCard key={slug} locale={locale} slug={slug} />
            ))}
          </div>
        </SolutionSection>
        <HowSgeBuildsSolutions />
        <PlatformProductsConnection locale={locale} />
        <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700">
                {t("hub.cta.eyebrow")}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                {t("hub.cta.title")}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                {t("hub.cta.description")}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-md bg-slate-950 text-white hover:bg-indigo-950">
                  <Link href={localizeHref(locale, "/company/contact")}>{t("hub.cta.contact")}</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-md">
                  <Link href={localizeHref(locale, "/platform")}>{t("hub.cta.platform")}</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-md">
                  <Link href={localizeHref(locale, "/products")}>{t("hub.cta.products")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

function SolutionHero({ locale, solution }: SolutionPageProps) {
  const t = useTranslations("Public.home.solutionPage");
  const tSolutions = useTranslations("Public.home.page.solutions.services");
  const ctaLabels = tSolutions.raw(`${solution.slug}.ctas`) as [string, string];
  const architectureFlow = tSolutions.raw(`${solution.slug}.architectureFlow`) as string[];

  return (
    <section className="border-b border-slate-200 bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-700">
            {t("brand")}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            {tSolutions(`${solution.slug}.title`)}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
            {tSolutions(`${solution.slug}.positioning`)}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
            {tSolutions(`${solution.slug}.description`)}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {solution.ctas.map((cta, index) => (
              <SolutionCTA
                key={cta.href}
                cta={cta}
                label={ctaLabels[index]}
                locale={locale}
              />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold text-slate-950">{t("hero.solutionFrame")}</p>
          <div className="mt-6 grid gap-3">
            {architectureFlow.slice(0, 4).map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3">
                <span className="text-xs font-semibold text-indigo-800">{index + 1}</span>
                <span className="text-sm font-medium text-slate-800">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionChallenge({ solution }: { solution: SolutionContent }) {
  const t = useTranslations("Public.home.solutionPage");
  const tSolutions = useTranslations("Public.home.page.solutions.services");
  const items = [
    { title: t("challenge.items.context"), description: tSolutions(`${solution.slug}.challenge.context`) },
    { title: t("challenge.items.friction"), description: tSolutions(`${solution.slug}.challenge.friction`) },
    { title: t("challenge.items.risk"), description: tSolutions(`${solution.slug}.challenge.risk`) },
  ];

  return (
    <SolutionSection
      eyebrow={t("challenge.eyebrow")}
      title={tSolutions(`${solution.slug}.challenge.title`)}
      description={t("challenge.description")}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </SolutionSection>
  );
}

function SolutionWhyNow({ solution }: { solution: SolutionContent }) {
  const t = useTranslations("Public.home.solutionPage");
  const tSolutions = useTranslations("Public.home.page.solutions.services");
  const solutionTitle = tSolutions(`${solution.slug}.title`);
  const items = [
    {
      title: t("whyNow.items.clarity.title"),
      description: t("whyNow.items.clarity.description"),
      icon: CheckCircle2,
    },
    {
      title: t("whyNow.items.context.title", { solution: solutionTitle }),
      description: t("whyNow.items.context.description"),
      icon: Building2,
    },
    {
      title: t("whyNow.items.foundation.title"),
      description: t("whyNow.items.foundation.description"),
      icon: ShieldCheck,
    },
  ];

  return (
    <SolutionSection
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
    </SolutionSection>
  );
}

function SolutionApproach({ solution }: { solution: SolutionContent }) {
  const t = useTranslations("Public.home.solutionPage");
  const tSolutions = useTranslations("Public.home.page.solutions.services");
  const principles = tSolutions.raw(`${solution.slug}.approach.principles`) as string[];

  return (
    <SolutionSection
      eyebrow={t("approach.eyebrow")}
      title={tSolutions(`${solution.slug}.approach.title`)}
      description={tSolutions(`${solution.slug}.approach.body`)}
      muted
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle) => (
          <div key={principle} className="rounded-lg border border-slate-200 bg-white p-5">
            <CheckCircle2 className="mb-4 h-4 w-4 text-indigo-700" aria-hidden="true" />
            <p className="text-sm font-medium text-slate-800">{principle}</p>
          </div>
        ))}
      </div>
    </SolutionSection>
  );
}

function SolutionEcosystemConnections({ locale, solution }: SolutionPageProps) {
  const t = useTranslations("Public.home.solutionPage");
  const tSolutions = useTranslations("Public.home.page.solutions.services");
  const solutionTitle = tSolutions(`${solution.slug}.title`);
  const items = [
    {
      title: t("ecosystemConnections.items.solutions.title"),
      description: t("ecosystemConnections.items.solutions.description", { solution: solutionTitle }),
      href: "/solutions",
      icon: Building2,
    },
    {
      title: t("ecosystemConnections.items.platform.title"),
      description: t("ecosystemConnections.items.platform.description"),
      href: "/platform",
      icon: Layers3,
    },
    {
      title: t("ecosystemConnections.items.products.title"),
      description: t("ecosystemConnections.items.products.description"),
      href: "/products",
      icon: Network,
    },
  ];

  return (
    <SolutionSection
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
              href={localizeHref(locale, item.href)}
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
    </SolutionSection>
  );
}

function SolutionCapabilities({ solution }: { solution: SolutionContent }) {
  const t = useTranslations("Public.home.solutionPage");
  const tSolutions = useTranslations("Public.home.page.solutions.services");
  const capabilities = tSolutions.raw(`${solution.slug}.capabilities`) as SolutionTextCard[];

  return (
    <SolutionSection
      eyebrow={t("capabilities.eyebrow")}
      title={t("capabilities.title")}
      description={t("capabilities.description")}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solution.capabilities.map((capability, index) => {
          const Icon = capability.icon;
          const capabilityText = capabilities[index];

          return (
            <div key={capabilityText.title} className="rounded-lg border border-slate-200 bg-white p-6">
              {Icon ? <Icon className="mb-5 h-5 w-5 text-indigo-700" aria-hidden="true" /> : null}
              <h3 className="text-base font-semibold text-slate-950">{capabilityText.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{capabilityText.description}</p>
            </div>
          );
        })}
      </div>
    </SolutionSection>
  );
}

function SolutionRecommendedNextStep({ locale, solution }: SolutionPageProps) {
  const t = useTranslations("Public.home.solutionPage");
  const tSolutions = useTranslations("Public.home.page.solutions.services");
  const solutionTitle = tSolutions(`${solution.slug}.title`);
  const items = [
    {
      title: t("recommendedNextStep.items.compare.title"),
      description: t("recommendedNextStep.items.compare.description"),
      href: "/solutions",
      label: t("recommendedNextStep.items.compare.label"),
    },
    {
      title: t("recommendedNextStep.items.evaluate.title"),
      description: t("recommendedNextStep.items.evaluate.description", { solution: solutionTitle }),
      href: "/platform",
      label: t("recommendedNextStep.items.evaluate.label"),
    },
    {
      title: t("recommendedNextStep.items.contact.title"),
      description: t("recommendedNextStep.items.contact.description"),
      href: "/company/contact",
      label: t("recommendedNextStep.items.contact.label"),
    },
  ];

  return (
    <SolutionSection
      eyebrow={t("recommendedNextStep.eyebrow")}
      title={t("recommendedNextStep.title")}
      description={t("recommendedNextStep.description")}
      muted
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={localizeHref(locale, item.href)}
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
    </SolutionSection>
  );
}

function SolutionReferenceArchitecture({ solution }: { solution: SolutionContent }) {
  const t = useTranslations("Public.home.solutionPage");
  const tSolutions = useTranslations("Public.home.page.solutions.services");
  const architectureFlow = tSolutions.raw(`${solution.slug}.architectureFlow`) as string[];

  return (
    <SolutionSection
      eyebrow={t("architecture.eyebrow")}
      title={t("architecture.title")}
      description={t("architecture.description")}
      muted
    >
      <div className="grid gap-3 lg:grid-cols-6">
        {architectureFlow.map((step, index) => (
          <div key={step} className="rounded-lg border border-slate-200 bg-white p-4">
            <span className="text-xs font-semibold text-indigo-800">{index + 1}</span>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-900">{step}</p>
          </div>
        ))}
      </div>
    </SolutionSection>
  );
}

function StackColumn({
  title,
  items,
  locale,
}: LocaleProps & {
  title: string;
  items: RelatedStackItem[];
}) {
  const t = useTranslations("Public.home.solutionPage");

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <h3 className="text-base font-semibold text-slate-950">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <Link
            key={item.key}
            href={localizeHref(locale, item.href)}
            className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 transition-colors hover:border-indigo-200 hover:bg-white"
          >
            {t(`relatedItems.${item.key}`)}
            <ArrowRight className="h-4 w-4 text-indigo-700" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function SolutionRelatedStack({ locale, solution }: SolutionPageProps) {
  const t = useTranslations("Public.home.solutionPage");

  return (
    <SolutionSection
      eyebrow={t("relatedStack.eyebrow")}
      title={t("relatedStack.title")}
      description={t("relatedStack.description")}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <StackColumn title={t("relatedStack.platformTitle")} items={solution.relatedPlatform} locale={locale} />
        <StackColumn title={t("relatedStack.productsTitle")} items={solution.relatedProducts} locale={locale} />
      </div>
    </SolutionSection>
  );
}

function SolutionAdoptionPath({ locale, solution }: SolutionPageProps) {
  const t = useTranslations("Public.home.solutionPage");
  const tSolutions = useTranslations("Public.home.page.solutions.services");
  const adoptionPath = tSolutions.raw(`${solution.slug}.adoptionPath`) as SolutionTextCard[];
  const ctaLabels = tSolutions.raw(`${solution.slug}.ctas`) as [string, string];

  return (
    <SolutionSection
      eyebrow={t("adoptionPath.eyebrow")}
      title={t("adoptionPath.title")}
      description={t("adoptionPath.description")}
      muted
    >
      <div className="grid gap-5 md:grid-cols-3">
        {adoptionPath.map((step, index) => (
          <div key={step.title} className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-md border border-indigo-200 bg-indigo-50 text-sm font-semibold text-indigo-800">
              {index + 1}
            </div>
            <h3 className="text-base font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {solution.ctas.map((cta, index) => (
          <SolutionCTA
            key={cta.href}
            cta={cta}
            label={ctaLabels[index]}
            locale={locale}
          />
        ))}
      </div>
    </SolutionSection>
  );
}

export function SolutionPage({ locale, solution }: SolutionPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale={locale as Locale} />
      <main className="flex-1">
        <SolutionHero locale={locale} solution={solution} />
        <SolutionChallenge solution={solution} />
        <SolutionWhyNow solution={solution} />
        <SolutionApproach solution={solution} />
        <SolutionCapabilities solution={solution} />
        <SolutionEcosystemConnections locale={locale} solution={solution} />
        <SolutionReferenceArchitecture solution={solution} />
        <SolutionRelatedStack locale={locale} solution={solution} />
        <SolutionRecommendedNextStep locale={locale} solution={solution} />
        <SolutionAdoptionPath locale={locale} solution={solution} />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export {
  SolutionHero,
  SolutionChallenge,
  SolutionWhyNow,
  SolutionApproach,
  SolutionCapabilities,
  SolutionEcosystemConnections,
  SolutionReferenceArchitecture,
  SolutionRelatedStack,
  SolutionRecommendedNextStep,
  SolutionAdoptionPath,
  SolutionCTA,
};
