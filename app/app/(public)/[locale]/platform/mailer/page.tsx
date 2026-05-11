import type { Metadata } from "next";
import {
  generatePlatformMetadata,
  type PlatformPageParams,
  renderPlatformPage,
} from "../page-helpers";

export async function generateMetadata({ params }: PlatformPageParams): Promise<Metadata> {
  return generatePlatformMetadata(params, "mailer");
}

export default async function PlatformMailerPage({ params }: PlatformPageParams) {
  return renderPlatformPage(params, "mailer");
}
