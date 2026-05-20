import type { Metadata } from "next";
import {
  generateDeveloperResourceMetadata,
  type DeveloperPageParams,
  renderDeveloperResourcePage,
} from "../page-helpers";

export async function generateMetadata({ params }: DeveloperPageParams): Promise<Metadata> {
  return generateDeveloperResourceMetadata(params, "cli");
}

export default async function DevelopersCliPage({ params }: DeveloperPageParams) {
  return renderDeveloperResourcePage(params, "cli");
}
