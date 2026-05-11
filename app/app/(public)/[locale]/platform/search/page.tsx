import type { Metadata } from "next";
import {
  generatePlatformMetadata,
  type PlatformPageParams,
  renderPlatformPage,
} from "../page-helpers";

export async function generateMetadata({ params }: PlatformPageParams): Promise<Metadata> {
  return generatePlatformMetadata(params, "search");
}

export default async function PlatformSearchPage({ params }: PlatformPageParams) {
  return renderPlatformPage(params, "search");
}
