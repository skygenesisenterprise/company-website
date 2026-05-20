import type { Metadata } from "next";
import {
  generateProductMetadata,
  type ProductPageParams,
  renderProductPage,
} from "../page-helpers";

export async function generateMetadata({ params }: ProductPageParams): Promise<Metadata> {
  return generateProductMetadata(params, "chat");
}

export default async function ChatProductPage({ params }: ProductPageParams) {
  return renderProductPage(params, "chat");
}
