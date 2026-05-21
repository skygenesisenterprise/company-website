import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  BookOpen,
  Code2,
  Handshake,
  Palette,
  Server,
  ShieldCheck,
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
}

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.careers.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CareersPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.careers" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const cultureItems = t.raw("culture.items") as CompanyCardContent[];
  const contributionItems = t.raw("contribution.items") as CompanyCardContent[];
  const profileItems = t.raw("profiles.items") as CompanyCardContent[];
  const profileIcons = [Code2, Server, ShieldCheck, Palette, BookOpen, Handshake];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
        primaryCta={common("contact")}
        primaryHref={`/${locale}/company/contact`}
        secondaryCta={common("values")}
        secondaryHref={`/${locale}/company/values`}
      />

      <CompanySection eyebrow={t("culture.eyebrow")} title={t("culture.title")} description={t("culture.description")}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cultureItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("contribution.eyebrow")}
        title={t("contribution.title")}
        description={t("contribution.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {contributionItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection eyebrow={t("profiles.eyebrow")} title={t("profiles.title")} description={t("profiles.description")}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {profileItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={profileIcons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("reality.eyebrow")}
        title={t("reality.title")}
        description={t("reality.description")}
        tone="muted"
      >
        <div className="rounded-[1.75rem] border border-border/70 bg-background/90 p-8 shadow-sm lg:p-10">
          <p className="max-w-4xl text-lg leading-8 text-muted-foreground">{t("reality.body")}</p>
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
