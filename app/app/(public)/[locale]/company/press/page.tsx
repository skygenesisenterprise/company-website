import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Building2, FileText, Mail, Newspaper, PackageOpen, ScrollText } from "lucide-react";
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

  const factItems = t.raw("facts.items") as CompanyCardContent[];
  const kitItems = t.raw("kit.items") as CompanyCardContent[];
  const placeholderItems = t.raw("placeholders.items") as CompanyCardContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
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
        <div className="grid gap-5 lg:grid-cols-2">
          <CompanyCard
            icon={ScrollText}
            meta={t("boilerplate.shortLabel")}
            title={t("boilerplate.shortTitle")}
            description={t("boilerplate.short")}
          />
          <CompanyCard
            icon={FileText}
            meta={t("boilerplate.longLabel")}
            title={t("boilerplate.longTitle")}
            description={t("boilerplate.long")}
          />
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("facts.eyebrow")}
        title={t("facts.title")}
        description={t("facts.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {factItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={index === 0 ? Building2 : index === 1 ? Newspaper : FileText}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection eyebrow={t("kit.eyebrow")} title={t("kit.title")} description={t("kit.description")}>
        <div className="grid gap-5 md:grid-cols-3">
          {kitItems.map((item) => (
            <CompanyCard
              key={item.title}
              icon={PackageOpen}
              meta={t("kit.status")}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("placeholders.eyebrow")}
        title={t("placeholders.title")}
        description={t("placeholders.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {placeholderItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection eyebrow={t("contact.eyebrow")} title={t("contact.title")} description={t("contact.description")}>
        <CompanyCard
          icon={Mail}
          title={t("contact.cardTitle")}
          description={t("contact.cardDescription")}
          href="mailto:press@skygenesisenterprise.com"
          cta={t("contact.cta")}
          className="max-w-2xl"
        />
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
