import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Cloud, GraduationCap, Handshake, Landmark, ShieldCheck, Users } from "lucide-react";
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
  const t = await getTranslations({ locale, namespace: "CompanyPages.partners.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PartnersPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.partners" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const typeItems = t.raw("types.items") as CompanyCardContent[];
  const approachItems = t.raw("approach.items") as CompanyCardContent[];
  const audienceItems = t.raw("audience.items") as CompanyCardContent[];
  const typeIcons = [Cloud, ShieldCheck, GraduationCap, Landmark, Users, Handshake];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
        primaryCta={common("contact")}
        primaryHref={`/${locale}/company/contact`}
        secondaryCta={common("press")}
        secondaryHref={`/${locale}/company/press`}
      />

      <CompanySection eyebrow={t("types.eyebrow")} title={t("types.title")} description={t("types.description")}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {typeItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={typeIcons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("approach.eyebrow")}
        title={t("approach.title")}
        description={t("approach.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {approachItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("audience.eyebrow")}
        title={t("audience.title")}
        description={t("audience.description")}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {audienceItems.map((item) => (
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
          { label: common("about"), href: `/${locale}/company/about`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
