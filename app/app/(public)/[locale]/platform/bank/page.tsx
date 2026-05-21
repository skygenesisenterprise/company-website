import type { Metadata } from "next";
import {
  getPlatformPageData,
  generatePlatformMetadata,
  type PlatformPageParams,
} from "../page-data";
import { PlatformServicePage } from "@/components/public/platform/platform-service-page";

export async function generateMetadata({ params }: PlatformPageParams): Promise<Metadata> {
  return generatePlatformMetadata(params, "bank");
}

export default async function PlatformBankPage({ params }: PlatformPageParams) {
  const pageData = await getPlatformPageData(params, "bank");

  return <PlatformServicePage {...pageData} />;
}
