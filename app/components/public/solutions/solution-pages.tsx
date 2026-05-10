import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

function SolutionCTA({ cta, locale }: { cta: SolutionCta; locale: string }) {
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

function HubCard({
  locale,
  slug,
}: LocaleProps & {
  slug: keyof typeof solutions;
}) {
  const solution = solutions[slug];

  return (
    <Link
      href={localizeHref(locale, `/solutions/${solution.slug}`)}
      className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-indigo-200"
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
        {solution.category === "use-case" ? "Use case" : "Industry"}
      </p>
      <h3 className="mt-4 text-lg font-semibold text-slate-950">
        {solution.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {solution.positioning}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-800">
        Open solution
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}

function SolutionsHubHero({ locale }: LocaleProps) {
  return (
    <section className="border-b border-slate-200 bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-700">
            SGE Solutions
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Choose a path by use case or sector.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700">
            SGE solutions connect platform foundations and product experiences to organizational contexts. They are designed as adoption paths, not claims of finished sector deployments.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-md bg-slate-950 px-6 text-sm font-medium text-white hover:bg-indigo-950">
              <Link href={localizeHref(locale, "/company/contact")}>
                Contact SGE
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-md px-6 text-sm font-medium">
              <Link href={localizeHref(locale, "/platform")}>Explore Platform</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <div className="rounded-md border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-950">Solution model</p>
            <div className="mt-6 grid gap-3">
              {["Use case", "Platform services", "Products", "Adoption path"].map((item, index) => (
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
              A lightweight navigation model for understanding where SGE can support an organization progressively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowSgeBuildsSolutions() {
  const items = [
    {
      title: "Start from the organization",
      description: "Clarify the users, teams, data boundaries and operating constraints before selecting products.",
    },
    {
      title: "Connect platform foundations",
      description: "Use identity, vault, status, search, mailer and edge capabilities where they are relevant.",
    },
    {
      title: "Adopt products progressively",
      description: "Introduce product surfaces only when they support the operating model and maturity constraints.",
    },
  ];

  return (
    <SolutionSection
      eyebrow="How SGE builds solutions"
      title="A progressive approach, not a generic bundle."
      description="Solutions are assembled from platform services, products and developer tools according to the context."
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
  return (
    <SolutionSection
      eyebrow="Platform + Products connection"
      title="Solutions sit between infrastructure and product experience."
      description="Platform defines the technical foundation. Products create visible user experiences. Solutions explain how organizations can combine both."
      muted
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          { title: "Platform", description: "Identity, Vault, Edge, Mailer, Status, Search, Maps and Bank research.", href: "/platform" },
          { title: "Products", description: "Shield, VPN, Giteria, Schematik, Mail, Meet, Chat and Sheets.", href: "/products" },
          { title: "Developers", description: "APIs, SDKs and documentation for technical integration paths.", href: "/developers" },
        ].map((item) => (
          <Link key={item.title} href={localizeHref(locale, item.href)} className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-indigo-200">
            <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-800">
              Explore
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </SolutionSection>
  );
}

export function SolutionsHubPage({ locale }: LocaleProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale={locale as Locale} />
      <main className="flex-1">
        <SolutionsHubHero locale={locale} />
        <SolutionSection
          eyebrow="Choose by use case"
          title="Start from the work to be done."
          description="These solutions describe operational contexts that can apply across sectors."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {useCaseSolutions.map((slug) => (
              <HubCard key={slug} locale={locale} slug={slug} />
            ))}
          </div>
        </SolutionSection>
        <SolutionSection
          eyebrow="Choose by industry"
          title="Explore sector-oriented planning paths."
          description="Industry pages remain cautious: they describe fit and planning, not certifications or customer deployments."
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
                Final CTA
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Clarify where SGE can help.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                Contact SGE to map a use case, or start by exploring the platform and product layers.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-md bg-slate-950 text-white hover:bg-indigo-950">
                  <Link href={localizeHref(locale, "/company/contact")}>Contact SGE</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-md">
                  <Link href={localizeHref(locale, "/platform")}>Explore Platform</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-md">
                  <Link href={localizeHref(locale, "/products")}>View Products</Link>
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
  return (
    <section className="border-b border-slate-200 bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-700">
            SGE Solutions
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            {solution.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
            {solution.positioning}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
            {solution.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {solution.ctas.map((cta) => (
              <SolutionCTA key={cta.label} cta={cta} locale={locale} />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold text-slate-950">Solution frame</p>
          <div className="mt-6 grid gap-3">
            {solution.architectureFlow.slice(0, 4).map((step, index) => (
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
  const items = [
    { title: "Context", description: solution.challenge.context },
    { title: "Friction", description: solution.challenge.friction },
    { title: "Risk", description: solution.challenge.risk },
  ];

  return (
    <SolutionSection
      eyebrow="Challenge"
      title={solution.challenge.title}
      description="The challenge is framed at organization level, before selecting a product or platform service."
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

function SolutionApproach({ solution }: { solution: SolutionContent }) {
  return (
    <SolutionSection
      eyebrow="SGE Approach"
      title={solution.approach.title}
      description={solution.approach.body}
      muted
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {solution.approach.principles.map((principle) => (
          <div key={principle} className="rounded-lg border border-slate-200 bg-white p-5">
            <CheckCircle2 className="mb-4 h-4 w-4 text-indigo-700" aria-hidden="true" />
            <p className="text-sm font-medium text-slate-800">{principle}</p>
          </div>
        ))}
      </div>
    </SolutionSection>
  );
}

function SolutionCapabilities({ solution }: { solution: SolutionContent }) {
  return (
    <SolutionSection
      eyebrow="Capabilities"
      title="Capabilities mobilized by this solution"
      description="These are solution-level capabilities, assembled from product, platform and operational foundations."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solution.capabilities.map((capability) => {
          const Icon = capability.icon;

          return (
            <div key={capability.title} className="rounded-lg border border-slate-200 bg-white p-6">
              {Icon ? <Icon className="mb-5 h-5 w-5 text-indigo-700" aria-hidden="true" /> : null}
              <h3 className="text-base font-semibold text-slate-950">{capability.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{capability.description}</p>
            </div>
          );
        })}
      </div>
    </SolutionSection>
  );
}

function SolutionReferenceArchitecture({ solution }: { solution: SolutionContent }) {
  return (
    <SolutionSection
      eyebrow="Reference Architecture"
      title="A simple conceptual flow"
      description="This diagram shows how the main pieces can connect. It is not a production architecture or deployment guarantee."
      muted
    >
      <div className="grid gap-3 lg:grid-cols-6">
        {solution.architectureFlow.map((step, index) => (
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
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <h3 className="text-base font-semibold text-slate-950">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <Link
            key={item.label}
            href={localizeHref(locale, item.href)}
            className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 transition-colors hover:border-indigo-200 hover:bg-white"
          >
            {item.label}
            <ArrowRight className="h-4 w-4 text-indigo-700" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function SolutionRelatedStack({ locale, solution }: SolutionPageProps) {
  return (
    <SolutionSection
      eyebrow="Related Products & Platform"
      title="Connected SGE building blocks"
      description="Each solution connects organization-level needs to platform services and product experiences."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <StackColumn title="Platform services" items={solution.relatedPlatform} locale={locale} />
        <StackColumn title="Products" items={solution.relatedProducts} locale={locale} />
      </div>
    </SolutionSection>
  );
}

function SolutionAdoptionPath({ locale, solution }: SolutionPageProps) {
  return (
    <SolutionSection
      eyebrow="Adoption Path"
      title="Start progressively"
      description="The goal is to map the problem, select the required services and build only what is mature enough for the context."
      muted
    >
      <div className="grid gap-5 md:grid-cols-3">
        {solution.adoptionPath.map((step, index) => (
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
        {solution.ctas.map((cta) => (
          <SolutionCTA key={cta.label} cta={cta} locale={locale} />
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
        <SolutionApproach solution={solution} />
        <SolutionCapabilities solution={solution} />
        <SolutionReferenceArchitecture solution={solution} />
        <SolutionRelatedStack locale={locale} solution={solution} />
        <SolutionAdoptionPath locale={locale} solution={solution} />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export {
  SolutionHero,
  SolutionChallenge,
  SolutionApproach,
  SolutionCapabilities,
  SolutionReferenceArchitecture,
  SolutionRelatedStack,
  SolutionAdoptionPath,
  SolutionCTA,
};
