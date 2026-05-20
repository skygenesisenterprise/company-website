import type { Metadata } from "next";
import {
  generateProductMetadata,
  type ProductPageParams,
  renderProductPage,
} from "../page-helpers";

export async function generateMetadata({ params }: ProductPageParams): Promise<Metadata> {
  return generateProductMetadata(params, "schematik");
}

export default async function SchematikProductPage({ params }: ProductPageParams) {
  return renderProductPage(params, "schematik");
}
