import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Activity,
  ArrowRight,
  Code2,
  Fingerprint,
  Globe2,
  Layers3,
  Mail,
  Map,
  Network,
  Route,
  Search,
  ShieldCheck,
} from "lucide-react";
import {
  CompanyPageShell,
  CompanyHero,
  CompanySection,
  CompanyCard,
  CompanyStatement,
  CompanyBulletGrid,
  CompanyCTA,
} from "@/components/public/company/company-page";
import {
  platformServices,
  platformServiceSlugs,
  type PlatformServiceSlug,
} from "@/lib/platform/platform-services";
import type { Locale } from "@/lib/locale";

interface MetadataParams {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PlatformHub.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const serviceIcons: Record<PlatformServiceSlug, typeof Route> = {
  edge: Route,
  bank: ShieldCheck,
  status: Activity,
  search: Search,
  identity: Fingerprint,
  maps: Map,
  vault: ShieldCheck,
  mailer: Mail,
};

export default async function PlatformHubPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PlatformHub" });
  const tServices = await getTranslations({ locale, namespace: "Public.home.page.platform.services" });
  const tCommon = await getTranslations({ locale, namespace: "Public.home.page.platformPage" });

  const signals = t.raw("hero.signals") as string[];
  const whyItems = t.raw("whyIntegrated.items") as Record<string, { title: string; description: string }>;
  const infraItems = t.raw("infrastructure.items") as Record<string, { title: string; description: string }>;
  const identityItems = t.raw("identitySecurity.items") as Record<string, { title: string; description: string }>;

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={signals}
        primaryCta={t("hero.primaryCta")}
        primaryHref={`/${locale}/platform`}
        secondaryCta={t("hero.secondaryCta")}
        secondaryHref={`/${locale}`}
      />

      <CompanySection
        eyebrow={t("ecosystem.eyebrow")}
        title={t("ecosystem.title")}
        description={t("ecosystem.description")}
      >
        <CompanyStatement
          title={t("ecosystem.statementTitle")}
          body={t("ecosystem.body")}
        />
      </CompanySection>

      <CompanySection
        eyebrow={t("whyIntegrated.eyebrow")}
        title={t("whyIntegrated.title")}
        description={t("whyIntegrated.description")}
        tone="muted"
      >
        <CompanyBulletGrid
          items={Object.values(whyItems).map((item) => ({
            title: item.title,
            description: item.description,
          }))}
        />
      </CompanySection>

      <CompanySection
        eyebrow={t("infrastructure.eyebrow")}
        title={t("infrastructure.title")}
        description={t("infrastructure.description")}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(infraItems) as string[]).map((key) => {
            const item = infraItems[key];
            const slug = key as PlatformServiceSlug;
            return (
              <CompanyCard
                key={slug}
                icon={serviceIcons[slug] ?? Globe2}
                title={item.title}
                description={item.description}
                href={`/${locale}/platform/${slug}`}
                cta={t("common.viewService")}
              />
            );
          })}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("identitySecurity.eyebrow")}
        title={t("identitySecurity.title")}
        description={t("identitySecurity.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {(Object.keys(identityItems) as string[]).map((key) => {
            const item = identityItems[key];
            const slug = key as PlatformServiceSlug;
            return (
              <CompanyCard
                key={slug}
                icon={serviceIcons[slug] ?? ShieldCheck}
                title={item.title}
                description={item.description}
                href={`/${locale}/platform/${slug}`}
                cta={t("common.viewService")}
              />
            );
          })}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("communication.eyebrow")}
        title={t("communication.title")}
        description={t("communication.description")}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <CompanyCard
            icon={Mail}
            title={t("communication.item.title")}
            description={t("communication.item.description")}
            href={`/${locale}/platform/mailer`}
            cta={t("common.viewService")}
          />
          <CompanyCard
            icon={Network}
            title={t("developer.item.title")}
            description={t("developer.item.description")}
            href={`/${locale}/developers`}
            cta={t("common.explore")}
          />
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("developer.eyebrow")}
        title={t("developer.title")}
        description={t("developer.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <CompanyCard
            icon={Code2}
            title="APIs"
            description="Interfaces versionnées pour intégrer les services SGE : identité, cloud, edge, messagerie et statut."
            href={`/${locale}/developers/api`}
            cta={t("common.explore")}
          />
          <CompanyCard
            icon={Layers3}
            title="SDKs & CLI"
            description="Bibliothèques et outils en ligne de commande pour automatiser les opérations et accélérer l'intégration."
            href={`/${locale}/developers/sdks`}
            cta={t("common.explore")}
          />
          <CompanyCard
            icon={ArrowRight}
            title="Quickstarts"
            description="Parcours courts et actionnables pour comprendre par où commencer selon la maturité de chaque brique."
            href={`/${locale}/developers/quickstarts`}
            cta={t("common.explore")}
          />
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("sovereignty.eyebrow")}
        title={t("sovereignty.title")}
        description={t("sovereignty.description")}
      >
        <CompanyStatement
          title={t("sovereignty.statementTitle")}
          body={t("sovereignty.body")}
        />
      </CompanySection>

      <CompanySection
        eyebrow={t("navigation.eyebrow")}
        title={t("navigation.title")}
        description={t("navigation.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {platformServiceSlugs.map((slug) => {
            const service = platformServices[slug];
            const title = tServices(`${slug}.title`);
            const description = tServices(`${slug}.promise`);
            return (
              <CompanyCard
                key={slug}
                icon={serviceIcons[slug] ?? Globe2}
                title={title}
                description={description}
                href={`/${locale}/platform/${slug}`}
                cta={t("common.viewService")}
              />
            );
          })}
        </div>
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: t("cta.explore"), href: `/${locale}/platform` },
          { label: t("cta.solutions"), href: `/${locale}/solutions/infrastructure`, variant: "outline" },
          { label: t("cta.contact"), href: `/${locale}/company/contact`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
