import type { Metadata } from "next";
import {
  generateDeveloperResourceMetadata,
  type DeveloperPageParams,
  renderDeveloperResourcePage,
} from "../page-helpers";

export async function generateMetadata({ params }: DeveloperPageParams): Promise<Metadata> {
  return generateDeveloperResourceMetadata(params, "postman");
}

export default async function DevelopersPostmanPage({ params }: DeveloperPageParams) {
  return renderDeveloperResourcePage(params, "postman");
}
