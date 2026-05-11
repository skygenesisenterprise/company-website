import type { Metadata } from "next";
import {
  generatePlatformMetadata,
  type PlatformPageParams,
  renderPlatformPage,
} from "../page-helpers";

export async function generateMetadata({ params }: PlatformPageParams): Promise<Metadata> {
  return generatePlatformMetadata(params, "edge");
}

export default async function PlatformEdgePage({ params }: PlatformPageParams) {
  return renderPlatformPage(params, "edge");
}
