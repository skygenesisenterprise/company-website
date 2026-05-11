import type { Metadata } from "next";
import {
  generatePlatformMetadata,
  type PlatformPageParams,
  renderPlatformPage,
} from "../page-helpers";

export async function generateMetadata({ params }: PlatformPageParams): Promise<Metadata> {
  return generatePlatformMetadata(params, "status");
}

export default async function PlatformStatusPage({ params }: PlatformPageParams) {
  return renderPlatformPage(params, "status");
}
