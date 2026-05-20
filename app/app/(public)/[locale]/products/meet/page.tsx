import type { Metadata } from "next";
import {
  generateProductMetadata,
  type ProductPageParams,
  renderProductPage,
} from "../page-helpers";

export async function generateMetadata({ params }: ProductPageParams): Promise<Metadata> {
  return generateProductMetadata(params, "meet");
}

export default async function MeetProductPage({ params }: ProductPageParams) {
  return renderProductPage(params, "meet");
}
