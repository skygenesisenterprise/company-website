import {
  Activity,
  BookOpen,
  Boxes,
  Code2,
  FileCode2,
  FileText,
  KeyRound,
  Library,
  Megaphone,
  Palette,
  ScrollText,
  ShieldCheck,
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

export default async function PartnersResourcesPage({
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
        badge: tPartners("resources.badge"),
        title: tPartners("resources.heroTitle"),
        description: tPartners("resources.heroDescription"),
        primaryCta: tPartners("resources.primaryCta"),
        primaryHref: `/${locale}/partners/program`,
        secondaryCta: tPartners("common.becomeCta"),
        secondaryHref: `/${locale}/partners/become`,
        audienceTitle: tPartners("resources.audienceTitle"),
        audienceDescription: tPartners("resources.audienceDescription"),
        audienceItems: list("resources.audienceItems"),
        buildTitle: tPartners("resources.buildTitle"),
        buildDescription: tPartners("resources.buildDescription"),
        buildItems: cards("resources.buildItems"),
        collaborationTitle: tPartners("resources.collaborationTitle"),
        collaborationDescription: tPartners("resources.collaborationDescription"),
        collaborationItems: cards("resources.collaborationItems"),
        processTitle: tPartners("resources.processTitle"),
        processDescription: tPartners("resources.processDescription"),
        processItems: steps("resources.processItems"),
        resourcesTitle: tPartners("resources.resourcesTitle"),
        resourcesDescription: tPartners("resources.resourcesDescription"),
        resourcesItems: cards("resources.resourcesItems"),
        ctaTitle: tPartners("resources.ctaTitle"),
        ctaDescription: tPartners("resources.ctaDescription"),
        ctaLabel: tPartners("resources.ctaLabel"),
        ctaHref: `/${locale}/partners/program`,
      }}
      icons={{
        hero: Library,
        audience: BookOpen,
        build: [FileText, Palette, FileCode2, Megaphone, ShieldCheck, Code2],
        collaboration: [ScrollText, KeyRound, Activity],
        resources: [Boxes, BookOpen, ShieldCheck],
      }}
    />
  );
}
