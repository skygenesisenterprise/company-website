import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Mail, CheckCircle2, Users, Globe } from "lucide-react";

export default async function ConfidentialitePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const dataTypes = [
    {
      icon: Users,
      title: "Données d'identification",
      description: "Nom, prénom, adresse email, pseudonyme",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: Globe,
      title: "Données de connexion",
      description: "Adresse IP, navigateur utilisé, pages visitées",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      icon: Shield,
      title: "Données de navigation",
      description: "Cookies, préférences linguistiques",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
  ];

  const rights = [
    { title: "Droit d'accès", description: "Obtenir une copie de vos données" },
    { title: "Droit de rectification", description: "Corriger vos données inexactes" },
    { title: "Droit à l'effacement", description: "Demander la suppression de vos données" },
    { title: "Droit à la portabilité", description: "Recevoir vos données dans un format structuré" },
    { title: "Droit d'opposition", description: "Vous opposer au traitement de vos données" },
    { title: "Droit à la limitation", description: "Restreindre le traitement de vos données" },
  ];

  const sections = [
    {
      title: "1. Introduction",
      content: "Chez The Etheria Times, nous prenons très au sérieux la protection de vos données personnelles. Cette politique de confidentialité décrit les types de données que nous collectons, comment nous les utilisons et les mesures que nous prenons pour les protéger.",
    },
    {
      title: "2. Responsable du traitement",
      content: "Le responsable du traitement de vos données personnelles est :\n\nThe Etheria Times\n123 Avenue de la Liberté, 75008 Paris, France\nEmail : privacy@etheriatimes.com\nTéléphone : +33 1 23 45 67 89",
    },
    {
      title: "3. Données que nous collectons",
      content: "Nous collectons les données suivantes :\n\n• Données d'identification : nom, prénom, adresse email, pseudonyme\n• Données de connexion : adresse IP, navigateur utilisé, pages visitées\n• Données de navigation : cookies, préférences linguistiques\n• Données d'abonnement : informations de paiement, historique d'abonnement\n• Commentaires : contenus publiés, interactions sur le site",
    },
    {
      title: "4. Finalités du traitement",
      content: "Vos données sont traitées pour les finalités suivantes :\n\n• Fournir et améliorer nos services d'information\n• Gérer votre compte utilisateur et vos abonnements\n• Personnaliser votre expérience sur le site\n• Vous envoyer des newsletters et communications marketing (avec votre consentement)\n• Analyser l'audience et améliorer notre contenu\n• Assurer la sécurité du site et prévenir la fraude\n• Respecter nos obligations légales",
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
                Politique de Confidentialité
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Nous prenez très au sérieux la protection de vos données personnelles. Découvrez comment nous protégeons votre vie privée.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    Nous Contacter
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/cookies`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    Politique des Cookies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Données collectées */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                Données que nous collectons
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Nous collectons différents types de données pour améliorer nos services et votre expérience.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {dataTypes.map((data) => (
                <div key={data.title} className="p-10 rounded-2xl bg-card">
                  <div className={`w-14 h-14 ${data.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <data.icon className={`w-7 h-7 ${data.color}`} />
                  </div>
                  <h3 className="text-2xl font-medium text-foreground mb-4">{data.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vos droits */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                Vos Droits
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rights.map((right) => (
                <div key={right.title} className="p-8 rounded-2xl bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                    <h3 className="text-base font-medium text-foreground">{right.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Politique Content */}
        <section className="py-32">
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
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                Une Question ?
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez notre délégué à la protection des données (DPO).
              </p>
              <div className="mt-10">
                <a href="mailto:privacy@etheriatimes.com">
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
