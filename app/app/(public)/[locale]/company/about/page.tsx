import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Building2,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
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
  CompanyStat,
} from "@/components/public/company/company-page";

interface MetadataParams {
  params: Promise<{ locale: string }>;
}

interface CompanyCardContent {
  title: string;
  description: string;
}

interface CompanyStatContent {
  label: string;
  value: string;
  description: string;
}

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.about.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.about" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const identityItems = t.raw("identity.items") as CompanyCardContent[];
  const ecosystemItems = t.raw("ecosystem.items") as CompanyCardContent[];
  const distinctionItems = t.raw("distinction.items") as CompanyCardContent[];
  const statItems = t.raw("longTerm.stats") as CompanyStatContent[];
  const roleStat = t.raw("roleStat") as CompanyStatContent;
  const problemItems = t.raw("problem.items") as CompanyCardContent[];
  const mission = t.raw("mission") as { eyebrow: string; title: string; description: string; statementTitle: string; body: string };
  const openSource = t.raw("openSource") as { eyebrow: string; title: string; description: string; statementTitle: string; body: string };
  const sovereignty = t.raw("sovereignty") as { eyebrow: string; title: string; description: string };
  const definition = t.raw("definition") as { eyebrow: string; title: string; description: string };
  const related = t.raw("related") as {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string; href: string }>;
  };
  const identityIcons = [Building2, Layers3, GitBranch];
  const ecosystemIcons = [GitBranch, ShieldCheck, Network, Sparkles];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
        primaryCta={common("contact")}
        primaryHref={`/${locale}/company/contact`}
        secondaryCta={common("story")}
        secondaryHref={`/${locale}/company/story`}
      />

      <CompanySection
        eyebrow={t("identity.eyebrow")}
        title={t("identity.title")}
        description={t("identity.description")}
      >
        <CompanyStatement
          label={t("identity.statementLabel")}
          title={t("identity.statement")}
          body={t("identity.body")}
          aside={<CompanyStat label={roleStat.label} value={roleStat.value} description={roleStat.description} />}
        />
      </CompanySection>

      <CompanySection
        eyebrow={definition.eyebrow}
        title={definition.title}
        description={definition.description}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {identityItems.map((item, index) => (
            <CompanyCard key={item.title} icon={identityIcons[index]} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("problem.eyebrow")}
        title={t("problem.title")}
        description={t("problem.description")}
      >
        <CompanyBulletGrid items={problemItems} />
      </CompanySection>

      <CompanySection
        eyebrow={mission.eyebrow}
        title={mission.title}
        description={mission.description}
        tone="muted"
      >
        <CompanyStatement
          title={mission.statementTitle}
          body={mission.body}
        />
      </CompanySection>

      <CompanySection
        eyebrow={t("ecosystem.eyebrow")}
        title={t("ecosystem.title")}
        description={t("ecosystem.description")}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {ecosystemItems.map((item, index) => (
            <CompanyCard key={item.title} icon={ecosystemIcons[index]} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={openSource.eyebrow}
        title={openSource.title}
        description={openSource.description}
        tone="muted"
      >
        <CompanyStatement
          title={openSource.statementTitle}
          body={openSource.body}
        />
      </CompanySection>

      <CompanySection
        eyebrow={sovereignty.eyebrow}
        title={sovereignty.title}
        description={sovereignty.description}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {statItems.map((item) => (
            <CompanyStat key={item.label} label={item.label} value={item.value} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("distinction.eyebrow")}
        title={t("distinction.title")}
        description={t("distinction.description")}
        tone="muted"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {distinctionItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={index === 0 ? Building2 : Globe2}
              title={item.title}
              description={item.description}
            />
          ))}
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
            icon: item.title === "Story" ? GitBranch : item.title === "Values" ? ShieldCheck : item.title === "Platform" ? Network : Sparkles,
          }))}
        />
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
