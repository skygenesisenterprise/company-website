import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Handshake,
  NotebookText,
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

interface CompanyCardContent {
  title: string;
  description: string;
}

interface MetadataParams {
  params: Promise<{ locale: string }>;
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
  const profiles = t.raw("profiles.items") as CompanyCardContent[];
  const workItems = t.raw("work.items") as CompanyCardContent[];
  const profileIcons = [
    Code2,
    Server,
    ShieldCheck,
    Palette,
    BriefcaseBusiness,
    Handshake,
  ];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        primaryCta={common("contact")}
        primaryHref={`/${locale}/company/contact`}
        secondaryCta={common("about")}
        secondaryHref={`/${locale}/company/about`}
      />

      <CompanySection
        eyebrow={t("culture.eyebrow")}
        title={t("culture.title")}
        description={t("culture.description")}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {cultureItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("profiles.eyebrow")}
        title={t("profiles.title")}
        description={t("profiles.description")}
        muted
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, index) => (
            <CompanyCard
              key={profile.title}
              icon={profileIcons[index]}
              title={profile.title}
              description={profile.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("work.eyebrow")}
        title={t("work.title")}
        description={t("work.description")}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {workItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={index === 0 ? BriefcaseBusiness : index === 1 ? NotebookText : BrainCircuit}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("open.eyebrow")}
        title={t("open.title")}
        description={t("open.description")}
        muted
      >
        <div className="rounded-lg border border-border/60 bg-background p-6 sm:p-8 lg:p-10">
          <p className="max-w-4xl text-lg leading-8 text-muted-foreground">
            {t("open.body")}
          </p>
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
