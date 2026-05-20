import type { Metadata } from "next";
import {
  generateProductMetadata,
  type ProductPageParams,
  renderProductPage,
} from "../page-helpers";

export async function generateMetadata({ params }: ProductPageParams): Promise<Metadata> {
  return generateProductMetadata(params, "giteria");
}

export default async function GiteriaProductPage({ params }: ProductPageParams) {
  return renderProductPage(params, "giteria");
}
