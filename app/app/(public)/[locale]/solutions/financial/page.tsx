import type { Metadata } from "next";
import { SolutionPage } from "@/components/public/solutions/solution-pages";
import { getSolution } from "@/lib/solutions/solution-content";

interface SolutionPageParams {
  params: Promise<{ locale: string }>;
}

const solution = getSolution("financial");

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${solution.title} Solutions | Sky Genesis Enterprise`,
    description: solution.description,
  };
}

export default async function FinancialSolutionsPage({ params }: SolutionPageParams) {
  const { locale } = await params;

  return <SolutionPage locale={locale} solution={solution} />;
}
