import type { Metadata } from "next";
import {
  generateProductMetadata,
  type ProductPageParams,
  renderProductPage,
} from "../page-helpers";

export async function generateMetadata({ params }: ProductPageParams): Promise<Metadata> {
  return generateProductMetadata(params, "sheets");
}

export default async function SheetsProductPage({ params }: ProductPageParams) {
  return renderProductPage(params, "sheets");
}
