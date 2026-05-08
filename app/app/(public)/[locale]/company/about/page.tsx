import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Building2,
  Layers3,
  LockKeyhole,
  Network,
  Recycle,
  Server,
  ShieldCheck,
  Target,
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

  const modelItems = t.raw("model.items") as CompanyCardContent[];
  const principleItems = t.raw("principles.items") as CompanyCardContent[];
  const nowItems = t.raw("now.items") as CompanyCardContent[];
  const principleIcons = [ShieldCheck, LockKeyhole, Server, Network, Recycle];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        primaryCta={common("contact")}
        primaryHref={`/${locale}/company/contact`}
        secondaryCta={common("careers")}
        secondaryHref={`/${locale}/company/careers`}
      />

      <CompanySection
        eyebrow={t("mission.eyebrow")}
        title={t("mission.title")}
        description={t("mission.description")}
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <CompanyCard
            icon={Target}
            title={t("mission.cardTitle")}
            description={t("mission.cardDescription")}
            className="bg-muted/30"
          />
          <div className="rounded-lg border border-border/60 bg-card p-6 sm:p-8">
            <p className="text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
              {t("mission.statement")}
            </p>
          </div>
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("vision.eyebrow")}
        title={t("vision.title")}
        description={t("vision.description")}
        muted
      >
        <div className="rounded-lg border border-border/60 bg-background p-6 sm:p-8 lg:p-10">
          <p className="max-w-4xl text-lg leading-8 text-muted-foreground">
            {t("vision.body")}
          </p>
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("model.eyebrow")}
        title={t("model.title")}
        description={t("model.description")}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {modelItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={index < 2 ? Layers3 : index === 2 ? Server : Building2}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("principles.eyebrow")}
        title={t("principles.title")}
        description={t("principles.description")}
        muted
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {principleItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={principleIcons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("now.eyebrow")}
        title={t("now.title")}
        description={t("now.description")}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {nowItems.map((item) => (
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
          { label: common("careers"), href: `/${locale}/company/careers`, variant: "outline" },
          { label: common("platform"), href: `/${locale}/platform/edge`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
