import type { Metadata } from "next";
import { ProductServicePage } from "@/components/public/products/product-service-page";
import { getProductService } from "@/lib/products/product-services";

interface ProductPageParams {
  params: Promise<{ locale: string }>;
}

const product = getProductService("chat");

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${product.title} | SGE Products`,
    description: product.description,
  };
}

export default async function ChatProductPage({ params }: ProductPageParams) {
  const { locale } = await params;

  return <ProductServicePage locale={locale} product={product} />;
}
