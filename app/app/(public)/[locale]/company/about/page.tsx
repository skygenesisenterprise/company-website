import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Building2,
  GitBranch,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  CompanyCard,
  CompanyCTA,
  CompanyHero,
  CompanyPageShell,
  CompanySection,
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
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 md:grid-cols-3">
            {identityItems.map((item, index) => (
              <CompanyCard
                key={item.title}
                icon={identityIcons[index]}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="rounded-[1.75rem] border border-border/70 bg-card/90 p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t("identity.statementLabel")}
            </p>
            <p className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
              {t("identity.statement")}
            </p>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              {t("identity.body")}
            </p>
          </div>
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("ecosystem.eyebrow")}
        title={t("ecosystem.title")}
        description={t("ecosystem.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {ecosystemItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={ecosystemIcons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("distinction.eyebrow")}
        title={t("distinction.title")}
        description={t("distinction.description")}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {distinctionItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("longTerm.eyebrow")}
        title={t("longTerm.title")}
        description={t("longTerm.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {statItems.map((item) => (
            <CompanyStat
              key={item.label}
              label={item.label}
              value={item.value}
              description={item.description}
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
          { label: common("platform"), href: `/${locale}/platform`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
