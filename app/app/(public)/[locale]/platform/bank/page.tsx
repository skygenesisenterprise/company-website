import type { Metadata } from "next";
import {
  generatePlatformMetadata,
  type PlatformPageParams,
  renderPlatformPage,
} from "../page-helpers";

export async function generateMetadata({ params }: PlatformPageParams): Promise<Metadata> {
  return generatePlatformMetadata(params, "bank");
}

export default async function PlatformBankPage({ params }: PlatformPageParams) {
  return renderPlatformPage(params, "bank");
}
