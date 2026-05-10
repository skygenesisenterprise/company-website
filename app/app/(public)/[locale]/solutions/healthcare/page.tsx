import type { Metadata } from "next";
import { SolutionPage } from "@/components/public/solutions/solution-pages";
import { getSolution } from "@/lib/solutions/solution-content";

interface SolutionPageParams {
  params: Promise<{ locale: string }>;
}

const solution = getSolution("healthcare");

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${solution.title} Solutions | Sky Genesis Enterprise`,
    description: solution.description,
  };
}

export default async function HealthcareSolutionsPage({ params }: SolutionPageParams) {
  const { locale } = await params;

  return <SolutionPage locale={locale} solution={solution} />;
}
