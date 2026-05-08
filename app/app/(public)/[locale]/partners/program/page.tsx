import {
  BadgeCheck,
  BookOpenCheck,
  Boxes,
  Compass,
  Eye,
  FileCheck2,
  GitMerge,
  GraduationCap,
  Handshake,
  Layers3,
  ShieldCheck,
  Sparkles,
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

export default async function PartnersProgramPage({
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
        badge: tPartners("program.badge"),
        title: tPartners("program.heroTitle"),
        description: tPartners("program.heroDescription"),
        primaryCta: tPartners("program.primaryCta"),
        primaryHref: `/${locale}/partners/become`,
        secondaryCta: tPartners("common.resourcesCta"),
        secondaryHref: `/${locale}/partners/resources`,
        audienceTitle: tPartners("program.audienceTitle"),
        audienceDescription: tPartners("program.audienceDescription"),
        audienceItems: list("program.audienceItems"),
        buildTitle: tPartners("program.buildTitle"),
        buildDescription: tPartners("program.buildDescription"),
        buildItems: cards("program.buildItems"),
        collaborationTitle: tPartners("program.collaborationTitle"),
        collaborationDescription: tPartners("program.collaborationDescription"),
        collaborationItems: cards("program.collaborationItems"),
        processTitle: tPartners("program.processTitle"),
        processDescription: tPartners("program.processDescription"),
        processItems: steps("program.processItems"),
        resourcesTitle: tPartners("program.resourcesTitle"),
        resourcesDescription: tPartners("program.resourcesDescription"),
        resourcesItems: cards("program.resourcesItems"),
        ctaTitle: tPartners("program.ctaTitle"),
        ctaDescription: tPartners("program.ctaDescription"),
        ctaLabel: tPartners("program.ctaLabel"),
        ctaHref: `/${locale}/partners/become`,
      }}
      icons={{
        hero: Compass,
        audience: Handshake,
        build: [Boxes, Layers3, GraduationCap, GitMerge],
        collaboration: [Eye, BookOpenCheck, BadgeCheck, Sparkles],
        resources: [ShieldCheck, FileCheck2, BookOpenCheck],
      }}
    />
  );
}
