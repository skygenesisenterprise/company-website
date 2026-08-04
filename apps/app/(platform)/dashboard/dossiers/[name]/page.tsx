import { DossierEditClient } from "./dossier-edit-client";

const dossierNames = ["donald-trump", "guerre-ukraine", "affaire-epstein", "iran", "pouvoir-achat"];

export function generateStaticParams() {
  return dossierNames.map((name) => ({ name }));
}

export default async function DossierEditPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;

  return <DossierEditClient name={name} />;
}
