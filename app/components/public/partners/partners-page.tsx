import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";

interface PartnerCard {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface PartnerPageContent {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
  audienceTitle: string;
  audienceDescription: string;
  audienceItems: string[];
  buildTitle: string;
  buildDescription: string;
  buildItems: PartnerCard[];
  collaborationTitle: string;
  collaborationDescription: string;
  collaborationItems: PartnerCard[];
  processTitle: string;
  processDescription: string;
  processItems: ProcessStep[];
  resourcesTitle: string;
  resourcesDescription: string;
  resourcesItems: PartnerCard[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref: string;
}

interface PartnersPageProps {
  locale: string;
  content: PartnerPageContent;
  icons: {
    hero: LucideIcon;
    audience: LucideIcon;
    build: LucideIcon[];
    collaboration: LucideIcon[];
    resources: LucideIcon[];
  };
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function CardGrid({
  items,
  icons,
}: {
  items: PartnerCard[];
  icons: LucideIcon[];
}) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <article key={item.title} className="rounded-2xl border border-border/50 bg-card p-6">
            <Icon className="mb-5 h-6 w-6 text-foreground/75" strokeWidth={1.5} />
            <h3 className="text-base font-medium text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}

export function PartnersPage({ locale, content, icons }: PartnersPageProps) {
  const HeroIcon = icons.hero;
  const AudienceIcon = icons.audience;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header locale={locale as import("@/lib/locale").Locale} />

      <main className="flex-1">
        <section className="relative py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card px-4 py-2 text-xs text-muted-foreground">
                  <HeroIcon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>{content.badge}</span>
                </div>
                <h1 className="max-w-5xl text-5xl font-normal leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  {content.title}
                </h1>
                <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
                  {content.description}
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link href={content.primaryHref}>
                    <Button size="lg" className="h-14 gap-2 px-7 text-base font-medium">
                      {content.primaryCta}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  {content.secondaryCta && content.secondaryHref ? (
                    <Link href={content.secondaryHref}>
                      <Button variant="ghost" size="lg" className="h-14 px-7 text-base">
                        {content.secondaryCta}
                      </Button>
                    </Link>
                  ) : null}
                </div>
              </div>

              <div className="rounded-3xl border border-border/50 bg-muted/20 p-6 lg:p-8">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/50 bg-card">
                    <AudienceIcon className="h-5 w-5 text-foreground/80" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-foreground">{content.audienceTitle}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {content.audienceDescription}
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {content.audienceItems.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/50 bg-card p-4">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/65" strokeWidth={1.5} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={content.buildTitle} description={content.buildDescription} />
            <CardGrid items={content.buildItems} icons={icons.build} />
          </div>
        </section>

        <section className="py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={content.collaborationTitle} description={content.collaborationDescription} />
            <CardGrid items={content.collaborationItems} icons={icons.collaboration} />
          </div>
        </section>

        <section className="py-28 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={content.processTitle} description={content.processDescription} />
            <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-4">
              {content.processItems.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-border/50 bg-card p-6">
                  <div className="mb-8 text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-medium text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={content.resourcesTitle} description={content.resourcesDescription} />
            <CardGrid items={content.resourcesItems} icons={icons.resources} />
          </div>
        </section>

        <section className="py-28 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border/50 bg-card p-8 text-center sm:p-12">
              <h2 className="mx-auto max-w-3xl text-3xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {content.ctaTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {content.ctaDescription}
              </p>
              <div className="mt-10">
                <Link href={content.ctaHref}>
                  <Button size="lg" className="h-14 gap-2 px-7 text-base font-medium">
                    {content.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale as "fr" | "be_fr" | "be_nl" | "ch_fr"} />
    </div>
  );
}
