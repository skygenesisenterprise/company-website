import type { Metadata } from "next";
import { PlatformServicePage } from "@/components/public/platform/platform-service-page";
import { getPlatformService } from "@/lib/platform/platform-services";

interface PlatformPageParams {
  params: Promise<{ locale: string }>;
}

const service = getPlatformService("search");

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${service.title} | SGE Platform`,
    description: service.description,
  };
}

export default async function PlatformSearchPage({ params }: PlatformPageParams) {
  const { locale } = await params;

  return <PlatformServicePage locale={locale} service={service} />;
}
