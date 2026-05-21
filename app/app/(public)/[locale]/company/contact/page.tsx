import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  BriefcaseBusiness,
  Handshake,
  Headphones,
  Mail,
  Megaphone,
  ShieldAlert,
  ShoppingBag,
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

interface ContactRouteContent {
  title: string;
  description: string;
  href: string;
  cta: string;
}

interface OfficialContactContent {
  label: string;
  value: string;
  href: string;
}

interface ExpectationContent {
  title: string;
  description: string;
}

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.contact.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.contact" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const routes = t.raw("routing.items") as ContactRouteContent[];
  const contacts = t.raw("official.items") as OfficialContactContent[];
  const expectations = t.raw("expectations.items") as ExpectationContent[];
  const routeIcons = [ShoppingBag, Handshake, Megaphone, BriefcaseBusiness, Headphones, ShieldAlert];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
      />

      <CompanySection
        eyebrow={t("routing.eyebrow")}
        title={t("routing.title")}
        description={t("routing.description")}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {routes.map((route, index) => (
            <CompanyCard
              key={route.title}
              icon={routeIcons[index]}
              title={route.title}
              description={route.description}
              href={route.href}
              cta={route.cta}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("official.eyebrow")}
        title={t("official.title")}
        description={t("official.description")}
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {contacts.map((contact) => (
            <CompanyCard
              key={contact.value}
              icon={Mail}
              meta={contact.label}
              title={contact.value}
              description={t("official.cardDescription")}
              href={contact.href}
              cta={t("official.cta")}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("expectations.eyebrow")}
        title={t("expectations.title")}
        description={t("expectations.description")}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {expectations.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: common("about"), href: `/${locale}/company/about` },
          { label: common("press"), href: `/${locale}/company/press`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
