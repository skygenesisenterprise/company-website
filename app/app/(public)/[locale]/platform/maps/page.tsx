import type { Metadata } from "next";
import {
  getPlatformPageData,
  generatePlatformMetadata,
  type PlatformPageParams,
} from "../page-data";
import { PlatformServicePage } from "@/components/public/platform/platform-service-page";

export async function generateMetadata({ params }: PlatformPageParams): Promise<Metadata> {
  return generatePlatformMetadata(params, "maps");
}

export default async function PlatformMapsPage({ params }: PlatformPageParams) {
  const pageData = await getPlatformPageData(params, "maps");

  return <PlatformServicePage {...pageData} />;
}
