import type { Metadata } from "next";
import {
  generatePlatformMetadata,
  type PlatformPageParams,
  renderPlatformPage,
} from "../page-helpers";

export async function generateMetadata({ params }: PlatformPageParams): Promise<Metadata> {
  return generatePlatformMetadata(params, "identity");
}

export default async function PlatformIdentityPage({ params }: PlatformPageParams) {
  return renderPlatformPage(params, "identity");
}
