import type { Metadata } from "next";
import {
  generateDeveloperResourceMetadata,
  type DeveloperPageParams,
  renderDeveloperResourcePage,
} from "../page-helpers";

export async function generateMetadata({ params }: DeveloperPageParams): Promise<Metadata> {
  return generateDeveloperResourceMetadata(params, "quickstarts");
}

export default async function DevelopersQuickstartsPage({ params }: DeveloperPageParams) {
  return renderDeveloperResourcePage(params, "quickstarts");
}
