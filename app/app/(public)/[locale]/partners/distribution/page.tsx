import {
  Banknote,
  BriefcaseBusiness,
  Building2,
  Factory,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  Map,
  Megaphone,
  PackageCheck,
  Store,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PartnersPage } from "@/components/public/partners/partners-page";

interface PartnerCard {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

export default async function PartnersDistributionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tPartners = await getTranslations({ locale, namespace: "Partners" });
  const list = (key: string) => tPartners.raw(key) as string[];
  const cards = (key: string) => tPartners.raw(key) as PartnerCard[];
  const steps = (key: string) => tPartners.raw(key) as ProcessStep[];

  return (
    <PartnersPage
      locale={locale}
      content={{
        badge: tPartners("distribution.badge"),
        title: tPartners("distribution.heroTitle"),
        description: tPartners("distribution.heroDescription"),
        primaryCta: tPartners("distribution.primaryCta"),
        primaryHref: `/${locale}/partners/become`,
        secondaryCta: tPartners("common.programCta"),
        secondaryHref: `/${locale}/partners/program`,
        audienceTitle: tPartners("distribution.audienceTitle"),
        audienceDescription: tPartners("distribution.audienceDescription"),
        audienceItems: list("distribution.audienceItems"),
        buildTitle: tPartners("distribution.buildTitle"),
        buildDescription: tPartners("distribution.buildDescription"),
        buildItems: cards("distribution.buildItems"),
        collaborationTitle: tPartners("distribution.collaborationTitle"),
        collaborationDescription: tPartners("distribution.collaborationDescription"),
        collaborationItems: cards("distribution.collaborationItems"),
        processTitle: tPartners("distribution.processTitle"),
        processDescription: tPartners("distribution.processDescription"),
        processItems: steps("distribution.processItems"),
        resourcesTitle: tPartners("distribution.resourcesTitle"),
        resourcesDescription: tPartners("distribution.resourcesDescription"),
        resourcesItems: cards("distribution.resourcesItems"),
        ctaTitle: tPartners("distribution.ctaTitle"),
        ctaDescription: tPartners("distribution.ctaDescription"),
        ctaLabel: tPartners("distribution.ctaLabel"),
        ctaHref: `/${locale}/partners/become`,
      }}
      icons={{
        hero: Map,
        audience: Handshake,
        build: [Store, Landmark, GraduationCap, Factory, HeartPulse, Banknote],
        collaboration: [PackageCheck, BriefcaseBusiness, Megaphone],
        resources: [PackageCheck, GraduationCap, Building2],
      }}
    />
  );
}
