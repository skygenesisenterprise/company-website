import type { Metadata } from "next";
import {
  generateDeveloperResourceMetadata,
  type DeveloperPageParams,
  renderDeveloperResourcePage,
} from "../page-helpers";

export async function generateMetadata({ params }: DeveloperPageParams): Promise<Metadata> {
  return generateDeveloperResourceMetadata(params, "sdks");
}

export default async function DevelopersSdksPage({ params }: DeveloperPageParams) {
  return renderDeveloperResourcePage(params, "sdks");
}
