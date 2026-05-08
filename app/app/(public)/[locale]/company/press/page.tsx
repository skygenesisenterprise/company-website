import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Building2, FileText, Mail, Newspaper, PackageOpen } from "lucide-react";
import {
  CompanyCard,
  CompanyCTA,
  CompanyHero,
  CompanyPageShell,
  CompanySection,
} from "@/components/public/company/company-page";

interface CompanyCardContent {
  title: string;
  description: string;
}

interface MetadataParams {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.press.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PressPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.press" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const facts = t.raw("facts.items") as CompanyCardContent[];
  const kit = t.raw("kit.items") as CompanyCardContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        primaryCta={t("hero.cta")}
        primaryHref="mailto:press@skygenesisenterprise.com"
        secondaryCta={common("contact")}
        secondaryHref={`/${locale}/company/contact`}
      />

      <CompanySection
        eyebrow={t("boilerplate.eyebrow")}
        title={t("boilerplate.title")}
        description={t("boilerplate.description")}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border/60 bg-card p-6 sm:p-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {t("boilerplate.shortLabel")}
            </p>
            <p className="text-base leading-7 text-muted-foreground">
              {t("boilerplate.short")}
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-card p-6 sm:p-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {t("boilerplate.longLabel")}
            </p>
            <p className="text-base leading-7 text-muted-foreground">
              {t("boilerplate.long")}
            </p>
          </div>
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("facts.eyebrow")}
        title={t("facts.title")}
        description={t("facts.description")}
        muted
      >
        <div className="grid gap-5 md:grid-cols-3">
          {facts.map((fact, index) => (
            <CompanyCard
              key={fact.title}
              icon={index === 0 ? Building2 : index === 1 ? FileText : Newspaper}
              title={fact.title}
              description={fact.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("kit.eyebrow")}
        title={t("kit.title")}
        description={t("kit.description")}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {kit.map((asset) => (
            <CompanyCard
              key={asset.title}
              icon={PackageOpen}
              title={asset.title}
              description={asset.description}
              meta={t("kit.status")}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        description={t("contact.description")}
        muted
      >
        <CompanyCard
          icon={Mail}
          title={t("contact.cardTitle")}
          description={t("contact.cardDescription")}
          href="mailto:press@skygenesisenterprise.com"
          cta={t("contact.cta")}
          className="max-w-2xl bg-background"
        />
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
