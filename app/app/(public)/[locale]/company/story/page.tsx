import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Compass, Flag, Layers3 } from "lucide-react";
import {
  CompanyCTA,
  CompanyHero,
  CompanyPageShell,
  CompanySection,
  CompanyStat,
  CompanyTimelineItem,
} from "@/components/public/company/company-page";

interface MetadataParams {
  params: Promise<{ locale: string }>;
}

interface StoryTimelineContent {
  label: string;
  title: string;
  description: string;
}

interface StoryStatContent {
  label: string;
  value: string;
  description: string;
}

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.story.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function StoryPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.story" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const timelineItems = t.raw("timeline.items") as StoryTimelineContent[];
  const nextStats = t.raw("ahead.stats") as StoryStatContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
        primaryCta={common("about")}
        primaryHref={`/${locale}/company/about`}
        secondaryCta={common("contact")}
        secondaryHref={`/${locale}/company/contact`}
      />

      <CompanySection eyebrow={t("origin.eyebrow")} title={t("origin.title")} description={t("origin.description")}>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <CompanyStat
            label={t("origin.cardLabel")}
            value={t("origin.cardValue")}
            description={t("origin.cardDescription")}
          />
          <div className="rounded-[1.75rem] border border-border/70 bg-card/90 p-8 shadow-sm">
            <p className="text-lg leading-8 text-muted-foreground">{t("origin.body")}</p>
          </div>
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("timeline.eyebrow")}
        title={t("timeline.title")}
        description={t("timeline.description")}
        tone="muted"
      >
        <div className="space-y-5">
          {timelineItems.map((item) => (
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
        eyebrow={t("ahead.eyebrow")}
        title={t("ahead.title")}
        description={t("ahead.description")}
        headerAside={
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <Flag className="h-3.5 w-3.5" />
            {t("ahead.badge")}
          </div>
        }
      >
        <div className="grid gap-5 md:grid-cols-3">
          {nextStats.map((item, index) => (
            <CompanyStat
              key={item.label}
              label={item.label}
              value={item.value}
              description={item.description}
            />
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <CompanyStat
            label={t("ahead.focusLabel1")}
            value={t("ahead.focusValue1")}
            description={t("ahead.focusDescription1")}
          />
          <CompanyStat
            label={t("ahead.focusLabel2")}
            value={t("ahead.focusValue2")}
            description={t("ahead.focusDescription2")}
          />
          <CompanyStat
            label={t("ahead.focusLabel3")}
            value={t("ahead.focusValue3")}
            description={t("ahead.focusDescription3")}
          />
        </div>
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: common("values"), href: `/${locale}/company/values` },
          { label: common("contact"), href: `/${locale}/company/contact`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
