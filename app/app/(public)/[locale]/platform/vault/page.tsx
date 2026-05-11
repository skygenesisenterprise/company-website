import type { Metadata } from "next";
import {
  generatePlatformMetadata,
  type PlatformPageParams,
  renderPlatformPage,
} from "../page-helpers";

export async function generateMetadata({ params }: PlatformPageParams): Promise<Metadata> {
  return generatePlatformMetadata(params, "vault");
}

export default async function PlatformVaultPage({ params }: PlatformPageParams) {
  return renderPlatformPage(params, "vault");
}
