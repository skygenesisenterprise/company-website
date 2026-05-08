import {
  BadgeCheck,
  ClipboardCheck,
  CloudCog,
  GraduationCap,
  Headphones,
  Layers3,
  LifeBuoy,
  Route,
  SearchCheck,
  ShieldQuestion,
  UsersRound,
  Wrench,
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

export default async function PartnersServicePage({
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
        badge: tPartners("service.badge"),
        title: tPartners("service.heroTitle"),
        description: tPartners("service.heroDescription"),
        primaryCta: tPartners("service.primaryCta"),
        primaryHref: `/${locale}/partners/become`,
        secondaryCta: tPartners("common.programCta"),
        secondaryHref: `/${locale}/partners/program`,
        audienceTitle: tPartners("service.audienceTitle"),
        audienceDescription: tPartners("service.audienceDescription"),
        audienceItems: list("service.audienceItems"),
        buildTitle: tPartners("service.buildTitle"),
        buildDescription: tPartners("service.buildDescription"),
        buildItems: cards("service.buildItems"),
        collaborationTitle: tPartners("service.collaborationTitle"),
        collaborationDescription: tPartners("service.collaborationDescription"),
        collaborationItems: cards("service.collaborationItems"),
        processTitle: tPartners("service.processTitle"),
        processDescription: tPartners("service.processDescription"),
        processItems: steps("service.processItems"),
        resourcesTitle: tPartners("service.resourcesTitle"),
        resourcesDescription: tPartners("service.resourcesDescription"),
        resourcesItems: cards("service.resourcesItems"),
        ctaTitle: tPartners("service.ctaTitle"),
        ctaDescription: tPartners("service.ctaDescription"),
        ctaLabel: tPartners("service.ctaLabel"),
        ctaHref: `/${locale}/partners/become`,
      }}
      icons={{
        hero: Wrench,
        audience: UsersRound,
        build: [CloudCog, Layers3, GraduationCap, SearchCheck, Headphones],
        collaboration: [Route, BadgeCheck, ShieldQuestion, LifeBuoy],
        resources: [ClipboardCheck, GraduationCap, LifeBuoy],
      }}
    />
  );
}
