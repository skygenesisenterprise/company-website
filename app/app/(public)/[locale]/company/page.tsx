import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  ArrowUpRight,
  Blocks,
  Compass,
  Flag,
  Globe2,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import {
  CompanyBulletGrid,
  CompanyCTA,
  CompanyCard,
  CompanyHero,
  CompanyPageShell,
  CompanyRelatedPages,
  CompanySection,
  CompanyStatement,
  CompanyTimelineItem,
} from "@/components/public/company/company-page";

interface MetadataParams {
  params: Promise<{ locale: string }>;
}

interface CompanyCardContent {
  title: string;
  description: string;
  href?: string;
  cta?: string;
}

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.page.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CompanyPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.page" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const whoItems = t.raw("who.items") as CompanyCardContent[];
  const buildingItems = t.raw("building.items") as CompanyCardContent[];
  const principlesItems = t.raw("principles.items") as CompanyCardContent[];
  const navItems = t.raw("navigation.items") as CompanyCardContent[];
  const overview = t.raw("overview") as { label: string; title: string; aside: string };
  const journeyItems = t.raw("journey.items") as Array<{ label: string; title: string; description: string }>;
  const globalFutureItems = t.raw("globalFuture.items") as Array<{ title: string; description: string }>;
  const latestLinkItems = t.raw("latestLinks.items") as Array<{ title: string; description: string; href: string }>;
  const whoIcons = [Flag, Users, Compass];
  const buildingIcons = [Layers3, Blocks, Sparkles];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
        primaryCta={t("hero.primaryCta")}
        primaryHref={`/${locale}/company/about`}
        secondaryCta={t("hero.secondaryCta")}
        secondaryHref={`/${locale}/company/story`}
      />

      <CompanySection
        eyebrow={t("intro.eyebrow")}
        title={t("intro.title")}
        description={t("intro.description")}
      >
        <CompanyStatement
          label={overview.label}
          title={overview.title}
          body={t("intro.body")}
          aside={
            <div className="rounded-[1.5rem] border border-border/70 bg-background/90 p-5 text-sm leading-7 text-muted-foreground">
              {overview.aside}
            </div>
          }
        />
      </CompanySection>

      <CompanySection
        eyebrow={t("whyExists.eyebrow")}
        title={t("whyExists.title")}
        description={t("whyExists.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {whoItems.map((item, index) => (
            <CompanyCard key={item.title} icon={whoIcons[index]} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("building.eyebrow")}
        title={t("building.title")}
        description={t("building.description")}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {buildingItems.map((item, index) => (
            <CompanyCard key={item.title} icon={buildingIcons[index]} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("principles.eyebrow")}
        title={t("principles.title")}
        description={t("principles.description")}
        tone="muted"
      >
        <CompanyBulletGrid items={principlesItems} />
      </CompanySection>

      <CompanySection
        eyebrow={t("journey.eyebrow")}
        title={t("journey.title")}
        description={t("journey.description")}
      >
        <div className="space-y-5">
          {journeyItems.map((item) => (
            <CompanyTimelineItem
              key={item.label}
              label={item.label}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("globalFuture.eyebrow")}
        title={t("globalFuture.title")}
        description={t("globalFuture.description")}
      >
        <CompanyBulletGrid items={globalFutureItems} />
      </CompanySection>

      <CompanySection
        eyebrow={t("navigation.eyebrow")}
        title={t("navigation.title")}
        description={t("navigation.description")}
        tone="muted"
      >
        <CompanyRelatedPages
          items={navItems.map((item) => ({
            title: item.title,
            description: item.description,
            href: `/${locale}${item.href}`,
            cta: item.cta ?? "Voir la page",
            icon: ArrowUpRight,
          }))}
        />
      </CompanySection>

      <CompanySection
        eyebrow={t("latestLinks.eyebrow")}
        title={t("latestLinks.title")}
        description={t("latestLinks.description")}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {latestLinkItems.map((item) => (
            <CompanyCard
              key={item.title}
              icon={item.title === "Story" ? Compass : item.title === "Platform" ? Network : Globe2}
              title={item.title}
              description={item.description}
              href={`/${locale}${item.href}`}
              cta={common("explore")}
            />
          ))}
        </div>
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: common("story"), href: `/${locale}/company/story` },
          { label: common("platform"), href: `/${locale}/platform`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
