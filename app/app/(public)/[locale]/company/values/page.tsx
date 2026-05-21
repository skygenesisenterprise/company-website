import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  BookOpen,
  Cable,
  Eye,
  GitBranch,
  LockKeyhole,
  Orbit,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Users,
} from "lucide-react";
import {
  CompanyCTA,
  CompanyCard,
  CompanyHero,
  CompanyPageShell,
  CompanyRelatedPages,
  CompanySection,
  CompanyStatement,
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
  const whyValues = t.raw("whyValues") as { eyebrow: string; title: string; description: string; statementTitle: string; body: string };
  const openness = t.raw("openness") as { eyebrow: string; title: string; statementTitle: string; body: string };
  const sovereignty = t.raw("sovereignty") as { eyebrow: string; title: string; statementTitle: string; body: string };
  const security = t.raw("security") as { eyebrow: string; title: string; statementTitle: string; body: string };
  const interoperability = t.raw("interoperability") as { eyebrow: string; title: string; statementTitle: string; body: string };
  const developerExperience = t.raw("developerExperience") as { eyebrow: string; title: string; statementTitle: string; body: string };
  const longTerm = t.raw("longTerm") as { title: string };
  const related = t.raw("related") as {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string; href: string }>;
  };
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

      <CompanySection
        eyebrow={whyValues.eyebrow}
        title={whyValues.title}
        description={whyValues.description}
      >
        <CompanyStatement
          title={whyValues.statementTitle}
          body={whyValues.body}
        />
      </CompanySection>

      <CompanySection eyebrow={t("values.eyebrow")} title={t("values.title")} description={t("values.description")} tone="muted">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {valueItems.map((item, index) => (
            <CompanyCard key={item.title} icon={icons[index]} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection eyebrow={openness.eyebrow} title={openness.title}>
        <CompanyStatement
          title={openness.statementTitle}
          body={openness.body}
        />
      </CompanySection>

      <CompanySection eyebrow={sovereignty.eyebrow} title={sovereignty.title} tone="muted">
        <CompanyStatement
          title={sovereignty.statementTitle}
          body={sovereignty.body}
        />
      </CompanySection>

      <CompanySection eyebrow={security.eyebrow} title={security.title}>
        <CompanyStatement
          title={security.statementTitle}
          body={security.body}
        />
      </CompanySection>

      <CompanySection eyebrow={interoperability.eyebrow} title={interoperability.title} tone="muted">
        <CompanyStatement
          title={interoperability.statementTitle}
          body={interoperability.body}
        />
      </CompanySection>

      <CompanySection eyebrow={developerExperience.eyebrow} title={developerExperience.title}>
        <CompanyStatement
          title={developerExperience.statementTitle}
          body={developerExperience.body}
        />
      </CompanySection>

      <CompanySection eyebrow={t("practice.eyebrow")} title={t("practice.title")} description={t("practice.description")} tone="muted">
        <div className="grid gap-5 md:grid-cols-3">
          {practiceItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection eyebrow={t("culture.eyebrow")} title={t("culture.title")} description={t("culture.description")}>
        <CompanyStatement title={longTerm.title} body={t("culture.body")} />
      </CompanySection>

      <CompanySection
        eyebrow={related.eyebrow}
        title={related.title}
        description={related.description}
        tone="muted"
      >
        <CompanyRelatedPages
          items={related.items.map((item) => ({
            title: item.title,
            description: item.description,
            href: `/${locale}${item.href}`,
            cta: common("explore"),
            icon: item.title === "Story" ? GitBranch : Users,
          }))}
        />
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: common("story"), href: `/${locale}/company/story` },
          { label: common("careers"), href: `/${locale}/company/careers`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
