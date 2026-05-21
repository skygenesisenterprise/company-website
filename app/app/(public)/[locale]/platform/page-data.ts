import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPlatformService, type PlatformService, type PlatformServiceSlug } from "@/lib/platform/platform-services";

export interface PlatformPageParams {
  params: Promise<{ locale: string }>;
}

export interface PlatformTextCard {
  title: string;
  description: string;
}

export interface PlatformLinkCard extends PlatformTextCard {
  href: string;
  label: string;
}

export interface PlatformPageCopy {
  hero: {
    eyebrow: string;
    title: string;
    promise: string;
    description: string;
    statusLabel: string;
    availabilityLabels: string[];
    ctaLabels: [string, string];
  };
  purpose: {
    eyebrow: string;
    title: string;
    description: string;
    aside: string;
    ecosystemRoleTitle: string;
    ecosystemRoleDescription: string;
    platformBenefitTitle: string;
    platformBenefitDescription: string;
  };
  whyNow: {
    eyebrow: string;
    title: string;
    description: string;
    items: PlatformTextCard[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    items: PlatformTextCard[];
  };
  ecosystemConnections: {
    eyebrow: string;
    title: string;
    description: string;
    items: PlatformLinkCard[];
  };
  useCases: {
    eyebrow: string;
    title: string;
    description: string;
    items: PlatformTextCard[];
  };
  integration: {
    eyebrow: string;
    title: string;
    description: string;
    mapTitle: string;
    mapDescription: string;
    brand: string;
    items: string[];
  };
  architecture: {
    eyebrow: string;
    title: string;
    description: string;
    operationalPrinciplesTitle: string;
    flow: string[];
    operationalPrinciples: string[];
  };
  recommendedNextStep: {
    eyebrow: string;
    title: string;
    description: string;
    items: PlatformLinkCard[];
  };
  availability: {
    eyebrow: string;
    title: string;
    description: string;
    continueWithTitle: string;
    continueWithDescription: string;
    items: Array<{ label: string; value: string }>;
  };
}

export interface PlatformServicePageData {
  locale: string;
  service: PlatformService;
  copy: PlatformPageCopy;
}

export async function generatePlatformMetadata(
  params: PlatformPageParams["params"],
  slug: PlatformServiceSlug
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public.home.page.platform.services" });

  return {
    title: `${t(`${slug}.title`)} | SGE Platform`,
    description: t(`${slug}.promise`),
  };
}

export async function getPlatformPageData(
  params: PlatformPageParams["params"],
  slug: PlatformServiceSlug
): Promise<PlatformServicePageData> {
  const { locale } = await params;
  const service = getPlatformService(slug);
  const t = await getTranslations({ locale, namespace: "Public.home.page.platformPage" });
  const tPlatform = await getTranslations({ locale, namespace: "Public.home.page.platform.services" });
  const tStatus = await getTranslations({ locale, namespace: "Public.home.page.status" });
  const serviceTitle = tPlatform(`${slug}.title`);
  const availabilityDescription =
    locale.startsWith("fr") || locale.startsWith("be_") || locale.startsWith("ch_")
      ? t("availability.description")
      : tPlatform(`${slug}.nextStep`);

  function translateAvailabilityValue(value: string) {
    if (value === "inProgress" || value === "notAvailable" || value === "limited" || value === "internal") {
      return t(`availability.values.${value}`);
    }

    try {
      return tStatus(value);
    } catch {
      return value;
    }
  }

  return {
    locale,
    service,
    copy: {
      hero: {
        eyebrow: t("brand"),
        title: serviceTitle,
        promise: tPlatform(`${slug}.promise`),
        description: tPlatform(`${slug}.description`),
        statusLabel: tStatus(service.status),
        availabilityLabels: service.availability.slice(0, 3).map((item) => t(`availability.labels.${item.label}`)),
        ctaLabels: tPlatform.raw(`${slug}.ctas`) as [string, string],
      },
      purpose: {
        eyebrow: t("purpose.eyebrow"),
        title: tPlatform(`${slug}.purpose.title`),
        description: tPlatform(`${slug}.purpose.problem`),
        aside: tPlatform(`${slug}.description`),
        ecosystemRoleTitle: t("purpose.ecosystemRole"),
        ecosystemRoleDescription: tPlatform(`${slug}.purpose.ecosystem`),
        platformBenefitTitle: t("purpose.platformBenefit"),
        platformBenefitDescription: tPlatform(`${slug}.purpose.benefit`),
      },
      whyNow: {
        eyebrow: t("whyNow.eyebrow"),
        title: t("whyNow.title"),
        description: t("whyNow.description"),
        items: [
          {
            title: t("whyNow.items.control.title"),
            description: t("whyNow.items.control.description"),
          },
          {
            title: t("whyNow.items.clarity.title"),
            description: t("whyNow.items.clarity.description"),
          },
          {
            title: t("whyNow.items.execution.title", { service: serviceTitle }),
            description: t("whyNow.items.execution.description", { service: serviceTitle }),
          },
        ],
      },
      capabilities: {
        eyebrow: t("capabilities.eyebrow"),
        title: t("capabilities.title"),
        description: t("capabilities.description"),
        items: tPlatform.raw(`${slug}.capabilities`) as PlatformTextCard[],
      },
      ecosystemConnections: {
        eyebrow: t("ecosystemConnections.eyebrow"),
        title: t("ecosystemConnections.title"),
        description: t("ecosystemConnections.description"),
        items: [
          {
            title: t("ecosystemConnections.items.platform.title"),
            description: t("ecosystemConnections.items.platform.description", { service: serviceTitle }),
            href: "/platform",
            label: t("common.explore"),
          },
          {
            title: t("ecosystemConnections.items.products.title"),
            description: t("ecosystemConnections.items.products.description"),
            href: "/products",
            label: t("common.explore"),
          },
          {
            title: t("ecosystemConnections.items.solutions.title"),
            description: t("ecosystemConnections.items.solutions.description"),
            href: "/solutions/infrastructure",
            label: t("common.explore"),
          },
        ],
      },
      useCases: {
        eyebrow: t("useCases.eyebrow"),
        title: t("useCases.title"),
        description: t("useCases.description"),
        items: tPlatform.raw(`${slug}.useCases`) as PlatformTextCard[],
      },
      integration: {
        eyebrow: t("integration.eyebrow"),
        title: t("integration.title"),
        description: t("integration.description"),
        mapTitle: t("integration.mapTitle"),
        mapDescription: t("integration.mapDescription"),
        brand: t("brand"),
        items: tPlatform.raw(`${slug}.integrations`) as string[],
      },
      architecture: {
        eyebrow: t("architecture.eyebrow"),
        title: t("architecture.title"),
        description: t("architecture.description"),
        operationalPrinciplesTitle: t("architecture.operationalPrinciples"),
        flow: tPlatform.raw(`${slug}.architectureFlow`) as string[],
        operationalPrinciples: tPlatform.raw(`${slug}.operationalPrinciples`) as string[],
      },
      recommendedNextStep: {
        eyebrow: t("recommendedNextStep.eyebrow"),
        title: t("recommendedNextStep.title"),
        description: t("recommendedNextStep.description"),
        items: [
          {
            title: t("recommendedNextStep.items.explore.title"),
            description: t("recommendedNextStep.items.explore.description"),
            href: "/platform",
            label: t("recommendedNextStep.items.explore.label"),
          },
          {
            title: t("recommendedNextStep.items.evaluate.title"),
            description: t("recommendedNextStep.items.evaluate.description", { service: serviceTitle }),
            href: "/solutions/infrastructure",
            label: t("recommendedNextStep.items.evaluate.label"),
          },
          {
            title: t("recommendedNextStep.items.contact.title"),
            description: t("recommendedNextStep.items.contact.description"),
            href: "/company/contact",
            label: t("recommendedNextStep.items.contact.label"),
          },
        ],
      },
      availability: {
        eyebrow: t("availability.eyebrow"),
        title: t("availability.title"),
        description: availabilityDescription,
        continueWithTitle: t("availability.continueWith", { service: serviceTitle }),
        continueWithDescription: t("availability.description"),
        items: service.availability.map((item) => ({
          label: t(`availability.labels.${item.label}`),
          value: translateAvailabilityValue(item.value),
        })),
      },
    },
  };
}
