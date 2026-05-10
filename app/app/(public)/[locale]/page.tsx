import type { Metadata } from "next";
import { HomePage } from "@/components/public/home/home-page";

interface HomePageParams {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sky Genesis Enterprise | Ecosysteme technologique europeen",
    description:
      "Sky Genesis Enterprise construit les fondations d'un ecosysteme technologique europeen: plateformes, produits, outils developpeurs et infrastructures numeriques.",
  };
}

export default async function PublicHomePage({ params }: HomePageParams) {
  const { locale } = await params;

  return <HomePage locale={locale} />;
}
