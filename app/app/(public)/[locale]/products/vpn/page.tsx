import type { Metadata } from "next";
import {
  generateProductMetadata,
  type ProductPageParams,
  renderProductPage,
} from "../page-helpers";

export async function generateMetadata({ params }: ProductPageParams): Promise<Metadata> {
  return generateProductMetadata(params, "vpn");
}

export default async function VpnProductPage({ params }: ProductPageParams) {
  return renderProductPage(params, "vpn");
}
