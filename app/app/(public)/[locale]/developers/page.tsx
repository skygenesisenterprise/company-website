import type { Metadata } from "next";
import {
  generateDeveloperHomeMetadata,
  type DeveloperPageParams,
  renderDeveloperHomePage,
} from "./page-helpers";

export async function generateMetadata({ params }: DeveloperPageParams): Promise<Metadata> {
  return generateDeveloperHomeMetadata(params);
}

export default async function DevelopersPage({ params }: DeveloperPageParams) {
  return renderDeveloperHomePage(params);
}
