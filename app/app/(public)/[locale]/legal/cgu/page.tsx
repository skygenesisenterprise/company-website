import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, FileText, Shield, CheckCircle2, Mail } from "lucide-react";

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
        <section className="relative py-24 lg:py-32 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium">{t("home.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                Conditions Générales d&apos;Utilisation
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Les présentes conditions régissent votre utilisation de notre plateforme et définissent vos droits et obligations.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
                    Nous Contacter
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/privacy`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    Politique de Confidentialité
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Points clés */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
                <Scale className="w-4 h-4 mr-3" />
                Points Essentiels
              </div>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Les éléments clés à retenir de nos conditions d'utilisation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors group">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:opacity-80 transition-opacity">
                  <Shield className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Utilisation Responsable</h3>
                <p className="text-sm text-muted-foreground">Vous acceptez d'utiliser le site conformément aux lois en vigueur et de manière responsable.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors group">
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:opacity-80 transition-opacity">
                  <FileText className="h-7 w-7 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Propriété Intellectuelle</h3>
                <p className="text-sm text-muted-foreground">Tous les contenus sont protégés. Toute reproduction non autorisée est interdite.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors group">
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:opacity-80 transition-opacity">
                  <CheckCircle2 className="h-7 w-7 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Compte Utilisateur</h3>
                <p className="text-sm text-muted-foreground">Vous êtes responsable de la confidentialité de vos identifiants de connexion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CGU Content */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-12">
                Dernière mise à jour : Mars 2026
              </p>

              {sections.map((section) => (
                <div key={section.title} className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">{section.title}</h2>
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
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-8">
                <Mail className="w-4 h-4 mr-3" />
                Une Question ?
              </div>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Pour toute question concernant ces conditions générales d'utilisation, n'hésitez pas à nous contacter.
              </p>
              <div className="mt-10">
                <a href="mailto:legal@skygenesisenterprise.com">
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
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
