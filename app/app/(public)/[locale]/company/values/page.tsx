import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  BookOpen,
  Cable,
  Eye,
  LockKeyhole,
  Orbit,
  ShieldCheck,
  Sparkles,
  TimerReset,
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
  const t = await getTranslations({ locale, namespace: "CompanyPages.values.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ValuesPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.values" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const valueItems = t.raw("values.items") as CompanyCardContent[];
  const practiceItems = t.raw("practice.items") as CompanyCardContent[];
  const icons = [BookOpen, Orbit, ShieldCheck, Cable, Sparkles, Eye, TimerReset, LockKeyhole];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
        primaryCta={common("careers")}
        primaryHref={`/${locale}/company/careers`}
        secondaryCta={common("about")}
        secondaryHref={`/${locale}/company/about`}
      />

      <CompanySection eyebrow={t("values.eyebrow")} title={t("values.title")} description={t("values.description")}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {valueItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={icons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("practice.eyebrow")}
        title={t("practice.title")}
        description={t("practice.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {practiceItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection eyebrow={t("culture.eyebrow")} title={t("culture.title")} description={t("culture.description")}>
        <div className="rounded-[1.75rem] border border-border/70 bg-card/90 p-8 shadow-sm lg:p-10">
          <p className="max-w-4xl text-lg leading-8 text-muted-foreground">{t("culture.body")}</p>
        </div>
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: common("careers"), href: `/${locale}/company/careers` },
          { label: common("contact"), href: `/${locale}/company/contact`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
