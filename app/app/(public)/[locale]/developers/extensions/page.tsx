import type { Metadata } from "next";
import {
  generateDeveloperResourceMetadata,
  type DeveloperPageParams,
  renderDeveloperResourcePage,
} from "../page-helpers";

export async function generateMetadata({ params }: DeveloperPageParams): Promise<Metadata> {
  return generateDeveloperResourceMetadata(params, "extensions");
}

export default async function DevelopersExtensionsPage({ params }: DeveloperPageParams) {
  return renderDeveloperResourcePage(params, "extensions");
}
