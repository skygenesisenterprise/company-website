import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Building2, Compass, ShieldCheck, Users } from "lucide-react";
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
}

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.leadership.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LeadershipPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.leadership" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const directionItems = t.raw("direction.items") as CompanyCardContent[];
  const governanceItems = t.raw("governance.items") as CompanyCardContent[];
  const futureItems = t.raw("future.items") as CompanyCardContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
        primaryCta={common("contact")}
        primaryHref={`/${locale}/company/contact`}
        secondaryCta={common("careers")}
        secondaryHref={`/${locale}/company/careers`}
      />

      <CompanySection eyebrow={t("founder.eyebrow")} title={t("founder.title")} description={t("founder.description")}>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <CompanyCard
            icon={Compass}
            meta={t("founder.cardMeta")}
            title={t("founder.cardTitle")}
            description={t("founder.cardDescription")}
          />
          <div className="rounded-[1.75rem] border border-border/70 bg-card/90 p-8 shadow-sm">
            <p className="text-lg leading-8 text-muted-foreground">{t("founder.body")}</p>
          </div>
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("direction.eyebrow")}
        title={t("direction.title")}
        description={t("direction.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {directionItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={index === 0 ? Building2 : index === 1 ? ShieldCheck : Users}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("governance.eyebrow")}
        title={t("governance.title")}
        description={t("governance.description")}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {governanceItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("future.eyebrow")}
        title={t("future.title")}
        description={t("future.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {futureItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: common("contact"), href: `/${locale}/company/contact` },
          { label: common("story"), href: `/${locale}/company/story`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
