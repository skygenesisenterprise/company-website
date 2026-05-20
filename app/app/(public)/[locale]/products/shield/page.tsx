import type { Metadata } from "next";
import {
  generateProductMetadata,
  type ProductPageParams,
  renderProductPage,
} from "../page-helpers";

export async function generateMetadata({ params }: ProductPageParams): Promise<Metadata> {
  return generateProductMetadata(params, "shield");
}

export default async function ShieldProductPage({ params }: ProductPageParams) {
  return renderProductPage(params, "shield");
}
