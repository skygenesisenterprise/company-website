import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PlatformServicePage } from "@/components/public/platform/platform-service-page";
import {
  getPlatformService,
  type PlatformServiceSlug,
} from "@/lib/platform/platform-services";

export interface PlatformPageParams {
  params: Promise<{ locale: string }>;
}

export async function generatePlatformMetadata(
  params: PlatformPageParams["params"],
  slug: PlatformServiceSlug
): Promise<Metadata> {
  const { locale } = await params;
  const service = getPlatformService(slug);
  const t = await getTranslations({ locale, namespace: "Public.home.page.platform.services" });

  return {
    title: `${t(`${slug}.title`)} | SGE Platform`,
    description: t(`${slug}.promise`) || service.description,
  };
}

export async function renderPlatformPage(
  params: PlatformPageParams["params"],
  slug: PlatformServiceSlug
) {
  const { locale } = await params;
  const service = getPlatformService(slug);

  return <PlatformServicePage locale={locale} service={service} />;
}
