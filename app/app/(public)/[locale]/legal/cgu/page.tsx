import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Shield, CheckCircle2, Mail } from "lucide-react";

export default async function CGUPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const sections = [
    {
      title: "1. Objet",
      content: "Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités d'accès et d'utilisation du site The Etheria Times accessible à l'adresse etheriatimes.com et ses sous-domaines.",
    },
    {
      title: "2. Acceptance des conditions",
      content: "L'utilisation du site implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous devez vous abstenez d'utiliser le site.",
    },
    {
      title: "3. Description des services",
      content: "The Etheria Times est un média d'information en ligne proposant :\n\n• Des articles d'actualités dans divers domaines\n• Des analyses et reportages\n• Des contenus multimédias (vidéos, podcasts)\n• Un service de newsletter\n• Un espace abonnement pour les abonnés",
    },
    {
      title: "4. Propriété intellectuelle",
      content: "L'ensemble des contenus présents sur le site (textes, images, vidéos, logos, sons, logiciels) est protégé par les droits de propriété intellectuelle et est la propriété exclusive de The Etheria Times ou de ses partenaires.\n\nToute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation préalable écrite est interdite.",
    },
    {
      title: "5. Responsabilité",
      content: "The Etheria Times s'efforce de fournir des informations exactes et à jour. Cependant, des erreurs ou omissions peuvent survenir. Le site ne peut être tenu responsable de l'utilisation qui pourrait être faite des informations contenues sur le site.",
    },
    {
      title: "6. Comptes utilisateurs",
      content: "Pour accéder à certains services, vous pouvez créer un compte utilisateur. Vous êtes responsable de la confidentialité de vos identifiants et de toutes les activités effectuées sous votre compte.\n\nVous vous engagez à fournir des informations véridiques et à maintenir ces informations à jour.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header locale={locale as import("@/lib/locale").Locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-8">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span>{t("home.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                Conditions Générales d&apos;Utilisation
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Les présentes conditions régissent votre utilisation de notre plateforme et définissent vos droits et obligations.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    Nous Contacter
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/privacy`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    Politique de Confidentialité
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Points clés */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">Points Essentiels</h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Les éléments clés à retenir de nos conditions d&apos;utilisation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">Utilisation Responsable</h3>
                <p className="text-muted-foreground leading-relaxed">Vous acceptez d&apos;utiliser le site conformément aux lois en vigueur et de manière responsable.</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">Propriété Intellectuelle</h3>
                <p className="text-muted-foreground leading-relaxed">Tous les contenus sont protégés. Toute reproduction non autorisée est interdite.</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">Compte Utilisateur</h3>
                <p className="text-muted-foreground leading-relaxed">Vous êtes responsable de la confidentialité de vos identifiants de connexion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CGU Content */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-muted-foreground mb-12">
              Dernière mise à jour : Mars 2026
            </p>

            <div className="space-y-16">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-medium text-foreground mb-4">{section.title}</h2>
                  <div className="text-muted-foreground space-y-4">
                    {section.content.split("\n\n").map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">Une Question ?</h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Pour toute question concernant ces conditions générales d&apos;utilisation, n&apos;hésitez pas à nous contacter.
              </p>
              <div className="mt-10">
                <a href="mailto:legal@skygenesisenterprise.com">
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    <Mail className="h-4 w-4" />
                    Nous Contacter
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale as "fr" | "be_fr" | "be_nl" | "ch_fr"} />
    </div>
  );
}
