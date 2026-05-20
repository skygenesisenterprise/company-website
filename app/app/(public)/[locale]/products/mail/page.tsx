import type { Metadata } from "next";
import {
  generateProductMetadata,
  type ProductPageParams,
  renderProductPage,
} from "../page-helpers";

export async function generateMetadata({ params }: ProductPageParams): Promise<Metadata> {
  return generateProductMetadata(params, "mail");
}

export default async function MailProductPage({ params }: ProductPageParams) {
  return renderProductPage(params, "mail");
}
