import type { Metadata } from "next";
import {
  generateDeveloperResourceMetadata,
  type DeveloperPageParams,
  renderDeveloperResourcePage,
} from "../page-helpers";

export async function generateMetadata({ params }: DeveloperPageParams): Promise<Metadata> {
  return generateDeveloperResourceMetadata(params, "api");
}

export default async function DevelopersApiPage({ params }: DeveloperPageParams) {
  return renderDeveloperResourcePage(params, "api");
}
