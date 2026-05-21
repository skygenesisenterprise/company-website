import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Compass, Flag, GitBranch, Layers3, ShieldCheck } from "lucide-react";
import {
  CompanyBulletGrid,
  CompanyCTA,
  CompanyHero,
  CompanyPageShell,
  CompanyRelatedPages,
  CompanySection,
  CompanyStatement,
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
  const firstIdeasItems = t.raw("firstIdeas.items") as Array<{ title: string; description: string }>;
  const problem = t.raw("problem") as { eyebrow: string; title: string; description: string; statementTitle: string; body: string };
  const firstFoundations = t.raw("firstFoundations") as { eyebrow: string; title: string; description: string; statementTitle: string; body: string };
  const toolsToEcosystem = t.raw("toolsToEcosystem") as {
    eyebrow: string;
    title: string;
    description: string;
    stats: StoryStatContent[];
  };
  const ecosystemToEnterprise = t.raw("ecosystemToEnterprise") as {
    eyebrow: string;
    title: string;
    description: string;
    statementTitle: string;
    body: string;
  };
  const related = t.raw("related") as {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string; href: string }>;
  };

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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
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
        eyebrow={problem.eyebrow}
        title={problem.title}
        description={problem.description}
        tone="muted"
      >
        <CompanyStatement
          title={problem.statementTitle}
          body={problem.body}
        />
      </CompanySection>

      <CompanySection
        eyebrow={t("firstIdeas.eyebrow")}
        title={t("firstIdeas.title")}
        description={t("firstIdeas.description")}
      >
        <CompanyBulletGrid items={firstIdeasItems} />
      </CompanySection>

      <CompanySection
        eyebrow={firstFoundations.eyebrow}
        title={firstFoundations.title}
        description={firstFoundations.description}
        tone="muted"
      >
        <CompanyStatement
          title={firstFoundations.statementTitle}
          body={firstFoundations.body}
        />
      </CompanySection>

      <CompanySection
        eyebrow={toolsToEcosystem.eyebrow}
        title={toolsToEcosystem.title}
        description={toolsToEcosystem.description}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {toolsToEcosystem.stats.map((item) => (
            <CompanyStat key={item.value} label={item.label} value={item.value} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={ecosystemToEnterprise.eyebrow}
        title={ecosystemToEnterprise.title}
        description={ecosystemToEnterprise.description}
        tone="muted"
      >
        <CompanyStatement
          title={ecosystemToEnterprise.statementTitle}
          body={ecosystemToEnterprise.body}
        />
      </CompanySection>

      <CompanySection
        eyebrow={t("timeline.eyebrow")}
        title={t("timeline.title")}
        description={t("timeline.description")}
      >
        <div className="space-y-5">
          {timelineItems.map((item) => (
            <CompanyTimelineItem key={item.label} label={item.label} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("ahead.eyebrow")}
        title={t("ahead.title")}
        description={t("ahead.description")}
        tone="muted"
        headerAside={
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <Flag className="h-3.5 w-3.5" />
            {t("ahead.badge")}
          </div>
        }
      >
        <div className="grid gap-5 md:grid-cols-3">
          {nextStats.map((item) => (
            <CompanyStat key={item.label} label={item.label} value={item.value} description={item.description} />
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <CompanyStat label={t("ahead.focusLabel1")} value={t("ahead.focusValue1")} description={t("ahead.focusDescription1")} />
          <CompanyStat label={t("ahead.focusLabel2")} value={t("ahead.focusValue2")} description={t("ahead.focusDescription2")} />
          <CompanyStat label={t("ahead.focusLabel3")} value={t("ahead.focusValue3")} description={t("ahead.focusDescription3")} />
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={related.eyebrow}
        title={related.title}
        description={related.description}
      >
        <CompanyRelatedPages
          items={related.items.map((item) => ({
            title: item.title,
            description: item.description,
            href: `/${locale}${item.href}`,
            cta: common("explore"),
            icon: item.title === "About" ? Compass : item.title === "Values" ? ShieldCheck : Flag,
          }))}
        />
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: common("values"), href: `/${locale}/company/values` },
          { label: common("careers"), href: `/${locale}/company/careers`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
