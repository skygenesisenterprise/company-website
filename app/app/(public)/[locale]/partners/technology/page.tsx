import {
  Activity,
  Boxes,
  Braces,
  Database,
  Fingerprint,
  GitBranch,
  KeyRound,
  Network,
  Server,
  ShieldCheck,
  TerminalSquare,
  Workflow,
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

export default async function PartnersTechnologyPage({
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
        badge: tPartners("technology.badge"),
        title: tPartners("technology.heroTitle"),
        description: tPartners("technology.heroDescription"),
        primaryCta: tPartners("technology.primaryCta"),
        primaryHref: `/${locale}/partners/become`,
        secondaryCta: tPartners("common.resourcesCta"),
        secondaryHref: `/${locale}/partners/resources`,
        audienceTitle: tPartners("technology.audienceTitle"),
        audienceDescription: tPartners("technology.audienceDescription"),
        audienceItems: list("technology.audienceItems"),
        buildTitle: tPartners("technology.buildTitle"),
        buildDescription: tPartners("technology.buildDescription"),
        buildItems: cards("technology.buildItems"),
        collaborationTitle: tPartners("technology.collaborationTitle"),
        collaborationDescription: tPartners("technology.collaborationDescription"),
        collaborationItems: cards("technology.collaborationItems"),
        processTitle: tPartners("technology.processTitle"),
        processDescription: tPartners("technology.processDescription"),
        processItems: steps("technology.processItems"),
        resourcesTitle: tPartners("technology.resourcesTitle"),
        resourcesDescription: tPartners("technology.resourcesDescription"),
        resourcesItems: cards("technology.resourcesItems"),
        ctaTitle: tPartners("technology.ctaTitle"),
        ctaDescription: tPartners("technology.ctaDescription"),
        ctaLabel: tPartners("technology.ctaLabel"),
        ctaHref: `/${locale}/partners/become`,
      }}
      icons={{
        hero: Workflow,
        audience: Boxes,
        build: [Fingerprint, Server, ShieldCheck, TerminalSquare, Activity, Database],
        collaboration: [Braces, KeyRound, GitBranch],
        resources: [Network, TerminalSquare, Database],
      }}
    />
  );
}
