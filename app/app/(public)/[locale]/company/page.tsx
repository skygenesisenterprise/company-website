import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  ArrowUpRight,
  Blocks,
  Compass,
  Flag,
  Layers3,
  Sparkles,
  Users,
} from "lucide-react";
import {
  CompanyCard,
  CompanyCTA,
  CompanyHero,
  CompanyPageShell,
  CompanySection,
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
        <div className="rounded-[1.75rem] border border-border/70 bg-card/90 p-8 shadow-sm lg:p-10">
          <p className="max-w-4xl text-lg leading-8 text-muted-foreground">
            {t("intro.body")}
          </p>
        </div>
      </CompanySection>

      <CompanySection eyebrow={t("who.eyebrow")} title={t("who.title")} description={t("who.description")}>
        <div className="grid gap-5 md:grid-cols-3">
          {whoItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={whoIcons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("building.eyebrow")}
        title={t("building.title")}
        description={t("building.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {buildingItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={buildingIcons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("principles.eyebrow")}
        title={t("principles.title")}
        description={t("principles.description")}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {principlesItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("navigation.eyebrow")}
        title={t("navigation.title")}
        description={t("navigation.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {navItems.map((item) => (
            <CompanyCard
              key={item.title}
              icon={ArrowUpRight}
              title={item.title}
              description={item.description}
              href={`/${locale}${item.href}`}
              cta={item.cta}
            />
          ))}
        </div>
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: common("contact"), href: `/${locale}/company/contact` },
          { label: common("careers"), href: `/${locale}/company/careers`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
