import {
  Building2,
  CircleHelp,
  ClipboardList,
  Contact,
  FileText,
  Flag,
  Goal,
  GraduationCap,
  Handshake,
  Mail,
  MessagesSquare,
  Rocket,
  UsersRound,
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

export default async function PartnersBecomePage({
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
        badge: tPartners("become.badge"),
        title: tPartners("become.heroTitle"),
        description: tPartners("become.heroDescription"),
        primaryCta: tPartners("become.primaryCta"),
        primaryHref: "mailto:partners@skygenesisenterprise.com",
        secondaryCta: tPartners("common.programCta"),
        secondaryHref: `/${locale}/partners/program`,
        audienceTitle: tPartners("become.audienceTitle"),
        audienceDescription: tPartners("become.audienceDescription"),
        audienceItems: list("become.audienceItems"),
        buildTitle: tPartners("become.buildTitle"),
        buildDescription: tPartners("become.buildDescription"),
        buildItems: cards("become.buildItems"),
        collaborationTitle: tPartners("become.collaborationTitle"),
        collaborationDescription: tPartners("become.collaborationDescription"),
        collaborationItems: cards("become.collaborationItems"),
        processTitle: tPartners("become.processTitle"),
        processDescription: tPartners("become.processDescription"),
        processItems: steps("become.processItems"),
        resourcesTitle: tPartners("become.resourcesTitle"),
        resourcesDescription: tPartners("become.resourcesDescription"),
        resourcesItems: cards("become.resourcesItems"),
        ctaTitle: tPartners("become.ctaTitle"),
        ctaDescription: tPartners("become.ctaDescription"),
        ctaLabel: tPartners("become.ctaLabel"),
        ctaHref: "mailto:partners@skygenesisenterprise.com",
      }}
      icons={{
        hero: Mail,
        audience: Building2,
        build: [UsersRound, Handshake, GraduationCap, CircleHelp],
        collaboration: [ClipboardList, Goal, Contact, FileText, Flag],
        resources: [MessagesSquare, CircleHelp, Rocket],
      }}
    />
  );
}
