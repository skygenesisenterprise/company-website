import type { Metadata } from "next";
import {
  getPlatformPageData,
  generatePlatformMetadata,
  type PlatformPageParams,
} from "../page-data";
import { PlatformServicePage } from "@/components/public/platform/platform-service-page";

export async function generateMetadata({ params }: PlatformPageParams): Promise<Metadata> {
  return generatePlatformMetadata(params, "mailer");
}

export default async function PlatformMailerPage({ params }: PlatformPageParams) {
  const pageData = await getPlatformPageData(params, "mailer");

  return <PlatformServicePage {...pageData} />;
}
