import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Code2,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/locale";
import type { LucideIcon } from "lucide-react";
import {
  platformServiceSlugs,
  platformServices,
  type PlatformServiceStatus,
} from "@/lib/platform/platform-services";
import {
  productServiceSlugs,
  productServices,
  type ProductStatus,
} from "@/lib/products/product-services";

interface HomePageProps {
  locale: string;
}

interface HomeSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  muted?: boolean;
  children: React.ReactNode;
}

interface HomeCardProps {
  title: string;
  description: string;
  href?: string;
  label?: string;
  icon?: LucideIcon;
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function StatusBadge({ status }: { status: PlatformServiceStatus | ProductStatus }) {
  const toneByStatus: Record<PlatformServiceStatus | ProductStatus, string> = {
    Available: "border-emerald-200 bg-emerald-50 text-emerald-800",
    "Private preview": "border-indigo-200 bg-indigo-50 text-indigo-800",
    "In development": "border-amber-200 bg-amber-50 text-amber-800",
    Experimental: "border-sky-200 bg-sky-50 text-sky-800",
    Planned: "border-slate-200 bg-slate-50 text-slate-700",
    Research: "border-violet-200 bg-violet-50 text-violet-800",
  };

  return (
    <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium", toneByStatus[status])}>
      {status}
    </span>
  );
}

function HomeSection({ eyebrow, title, description, muted, children }: HomeSectionProps) {
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

function HomeCard({ title, description, href, label = "Explorer", icon: Icon }: HomeCardProps) {
  const content = (
    <div className="h-full rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-indigo-200">
      {Icon ? <Icon className="mb-5 h-5 w-5 text-indigo-700" aria-hidden={true} /> : null}
      <h3 className="text-base font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      {href ? (
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-800">
          {label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      ) : null}
    </div>
  );

  if (!href) {
    return content;
  }

  return <Link href={href}>{content}</Link>;
}

function HomeHero({ locale }: HomePageProps) {
  return (
    <section className="border-b border-slate-200 bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-700">
            Sky Genesis Enterprise
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Construire les fondations d'un ecosysteme technologique europeen.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700">
            Nous concevons des plateformes, produits et infrastructures numeriques penses pour la souverainete, la securite et l'execution long terme.
          </p>
          <div className="mt-6 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900">
            Ecosysteme en construction structuree, avec des statuts de maturite explicites.
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-md bg-slate-950 px-6 text-sm font-medium text-white hover:bg-indigo-950">
              <Link href={localizeHref(locale, "/platform")}>
                Explorer la plateforme
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-md px-6 text-sm font-medium">
              <Link href={localizeHref(locale, "/company/about")}>Comprendre l'entreprise</Link>
            </Button>
          </div>
        </div>
        <HomeEcosystemMap />
      </div>
    </section>
  );
}

function HomeEcosystemMap() {
  const nodes = ["Platform", "Products", "Solutions", "Developers", "Company"];

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
      <div className="rounded-md border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <p className="text-sm font-semibold text-slate-950">SGE ecosystem map</p>
          <span className="text-xs font-medium text-slate-500">Conceptual</span>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="rounded-full border border-indigo-200 bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-900">
            SGE
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {nodes.map((node) => (
            <div key={node} className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
              {node}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-slate-600">
          Une carte abstraite des briques de l'ecosysteme, sans simuler de capture produit ou de capacite finalisee.
        </p>
      </div>
    </div>
  );
}

function WhatWeBuild({ locale }: HomePageProps) {
  const items = [
    {
      title: "Platform",
      description: "Les briques communes: identite, secrets, edge, statut, recherche, mailer, cartes et concepts ledger.",
      href: localizeHref(locale, "/platform"),
      icon: Layers3,
    },
    {
      title: "Products",
      description: "Des experiences visibles pour la securite, le travail, la collaboration, le code et les donnees.",
      href: localizeHref(locale, "/products"),
      icon: Building2,
    },
    {
      title: "Solutions",
      description: "Des trajectoires d'usage pour organisations B2C, B2B, infrastructure et workplace.",
      href: localizeHref(locale, "/solutions/workplace"),
      icon: Users,
    },
    {
      title: "Developer tools",
      description: "Documentation, APIs, SDKs et fondations open-source pour integrer l'ecosysteme progressivement.",
      href: localizeHref(locale, "/developers"),
      icon: Code2,
    },
  ];

  return (
    <HomeSection
      eyebrow="What We Build"
      title="Un ecosysteme lisible, organise par familles."
      description="La home oriente vers les grands ensembles sans remplacer les pages detaillees."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <HomeCard key={item.title} {...item} />
        ))}
      </div>
    </HomeSection>
  );
}

function HomePlatformGrid({ locale }: HomePageProps) {
  return (
    <HomeSection
      eyebrow="Platform Foundation"
      title="Le socle technique commun."
      description="Les services platform structurent les produits SGE. Leur maturite est affichee pour eviter toute surpromesse."
      muted
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {platformServiceSlugs.map((slug) => {
          const service = platformServices[slug];

          return (
            <Link
              key={service.slug}
              href={localizeHref(locale, `/platform/${service.slug}`)}
              className="rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-indigo-200"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-slate-950">{service.title}</h3>
                <StatusBadge status={service.status} />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.promise}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-8">
        <Button asChild variant="outline" className="rounded-md">
          <Link href={localizeHref(locale, "/platform")}>Voir la plateforme</Link>
        </Button>
      </div>
    </HomeSection>
  );
}

function HomeProductGrid({ locale }: HomePageProps) {
  return (
    <HomeSection
      eyebrow="Product Ecosystem"
      title="Les produits visibles de l'ecosysteme."
      description="Chaque produit est presente comme une experience utilisateur, avec un statut coherent avec sa maturite."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {productServiceSlugs.map((slug) => {
          const product = productServices[slug];

          return (
            <Link
              key={product.slug}
              href={localizeHref(locale, `/products/${product.slug}`)}
              className="rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-indigo-200"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-slate-950">{product.title}</h3>
                <StatusBadge status={product.status} />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{product.positioning}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-8">
        <Button asChild variant="outline" className="rounded-md">
          <Link href={localizeHref(locale, "/products")}>Voir les produits</Link>
        </Button>
      </div>
    </HomeSection>
  );
}

function SolutionsForOrganizations({ locale }: HomePageProps) {
  const solutions = [
    {
      title: "Support B2C",
      description: "Des experiences numeriques pour relation client, confiance et services grand public.",
      href: localizeHref(locale, "/solutions/b2c"),
      icon: Users,
    },
    {
      title: "B2B SaaS",
      description: "Des fondations pour produits SaaS, comptes, espaces de travail et integrations.",
      href: localizeHref(locale, "/solutions/b2b"),
      icon: Building2,
    },
    {
      title: "Infrastructure",
      description: "Des trajectoires pour securite, acces, services platform et operations.",
      href: localizeHref(locale, "/solutions/infrastructure"),
      icon: Network,
    },
    {
      title: "Workplace",
      description: "Des outils de collaboration, communication et donnees pour les equipes.",
      href: localizeHref(locale, "/solutions/workplace"),
      icon: Layers3,
    },
  ];

  return (
    <HomeSection
      eyebrow="Solutions for Organizations"
      title="Des chemins d'adoption par usage."
      description="Les solutions relient les briques platform et les produits a des besoins d'organisation concrets."
      muted
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution) => (
          <HomeCard key={solution.title} {...solution} />
        ))}
      </div>
    </HomeSection>
  );
}

function DeveloperOpenSource({ locale }: HomePageProps) {
  const developerItems = [
    { title: "Documentation", description: "Guides, references et trajectoire de documentation platform.", href: "/developers", icon: BookOpen },
    { title: "SDKs", description: "Points d'integration pour connecter progressivement produits et services.", href: "/developers/sdks", icon: Code2 },
    { title: "APIs", description: "Interfaces techniques pour les usages developpeurs exposes par SGE.", href: "/developers/api", icon: Network },
    { title: "Open-source", description: "Fondations ouvertes et collaboration technique a mesure que les projets se stabilisent.", href: "/developers", icon: GitBranch },
  ];

  return (
    <HomeSection
      eyebrow="Developer & Open Source"
      title="Construire aussi pour les developpeurs."
      description="SGE documente ses interfaces et prepare des fondations ouvertes sans presenter comme finalise ce qui reste en construction."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {developerItems.map((item) => (
          <HomeCard
            key={item.title}
            title={item.title}
            description={item.description}
            href={localizeHref(locale, item.href)}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild className="rounded-md bg-slate-950 text-white hover:bg-indigo-950">
          <Link href={localizeHref(locale, "/developers")}>Explorer Developers</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-md">
          <Link href="/docs">Voir les docs</Link>
        </Button>
      </div>
    </HomeSection>
  );
}

function HomePrinciples({ locale }: HomePageProps) {
  const principles = [
    { title: "Sovereignty", description: "Concevoir avec une attention europeenne a la maitrise, aux donnees et a l'independance technique.", icon: ShieldCheck },
    { title: "Security by design", description: "Integrer identite, secrets, audit et controles d'acces comme fondations, pas comme options tardives.", icon: LockKeyhole },
    { title: "Operational excellence", description: "Documenter les statuts, incidents, limites et dependances pour construire avec discipline.", icon: CheckCircle2 },
    { title: "Open foundations", description: "Favoriser les standards, les APIs claires et les briques ouvertes quand elles sont suffisamment stables.", icon: GitBranch },
    { title: "Long-term infrastructure", description: "Construire des produits autour d'un socle durable plutot que de multiplier des experiences isolees.", icon: Layers3 },
  ];

  return (
    <HomeSection
      eyebrow="Trust & Operating Principles"
      title="Une ambition tenue par des principes operationnels."
      description="La credibilite vient de la clarte des limites, de la securite et d'une construction progressive."
      muted
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {principles.map((principle) => (
          <HomeCard key={principle.title} {...principle} />
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="outline" className="rounded-md">
          <Link href={localizeHref(locale, "/security")}>Securite</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-md">
          <Link href={localizeHref(locale, "/security/trust")}>Trust</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-md">
          <Link href={localizeHref(locale, "/company/about")}>A propos</Link>
        </Button>
      </div>
    </HomeSection>
  );
}

function HomeCTA({ locale }: HomePageProps) {
  const actions = [
    {
      title: "Pour les organisations",
      description: "Discuter d'un besoin, d'une trajectoire d'adoption ou d'une solution.",
      href: localizeHref(locale, "/company/contact"),
      label: "Contacter SGE",
      icon: Building2,
    },
    {
      title: "Pour les developpeurs",
      description: "Explorer les APIs, SDKs et ressources techniques disponibles.",
      href: localizeHref(locale, "/developers"),
      label: "Aller aux developers",
      icon: Code2,
    },
    {
      title: "Pour les talents",
      description: "Comprendre l'entreprise et les opportunites de contribution.",
      href: localizeHref(locale, "/company/careers"),
      label: "Voir les carrieres",
      icon: Users,
    },
  ];

  return (
    <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700">
            Final CTA
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Choisir le prochain point d'entree.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {actions.map((action) => (
            <HomeCard key={action.title} {...action} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage({ locale }: HomePageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale={locale as Locale} />
      <main className="flex-1">
        <HomeHero locale={locale} />
        <WhatWeBuild locale={locale} />
        <HomePlatformGrid locale={locale} />
        <HomeProductGrid locale={locale} />
        <SolutionsForOrganizations locale={locale} />
        <DeveloperOpenSource locale={locale} />
        <HomePrinciples locale={locale} />
        <HomeCTA locale={locale} />
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export {
  HomeHero,
  HomeSection,
  HomeCard,
  HomeEcosystemMap,
  HomePlatformGrid,
  HomeProductGrid,
  HomePrinciples,
  HomeCTA,
};
