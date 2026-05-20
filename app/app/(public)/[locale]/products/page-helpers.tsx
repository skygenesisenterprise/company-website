import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ProductServicePage } from "@/components/public/products/product-service-page";
import {
  getProductService,
  type ProductServiceSlug,
} from "@/lib/products/product-services";

export interface ProductPageParams {
  params: Promise<{ locale: string }>;
}

export async function generateProductMetadata(
  params: ProductPageParams["params"],
  slug: ProductServiceSlug
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public.home.page.products.services" });
  const tPage = await getTranslations({ locale, namespace: "Public.home.productPage" });

  return {
    title: `${t(`${slug}.title`)} | ${tPage("brand")}`,
    description: t(`${slug}.positioning`),
  };
}

export async function renderProductPage(
  params: ProductPageParams["params"],
  slug: ProductServiceSlug
) {
  const { locale } = await params;
  const product = getProductService(slug);

  return <ProductServicePage locale={locale} product={product} />;
}
