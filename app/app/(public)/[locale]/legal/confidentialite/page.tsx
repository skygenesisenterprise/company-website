import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileText, Lock, Mail, CheckCircle2, Users, Globe } from "lucide-react";

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
        <section className="relative py-24 lg:py-32 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium">{t("home.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                Politique de Confidentialité
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Nous prenez très au sérieux la protection de vos données personnelles. Découvrez comment nous protégeons votre vie privée.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
                    Nous Contacter
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/cookies`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    Politique des Cookies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Données collectées */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
                <Shield className="w-4 h-4 mr-3" />
                Données que nous collectons
              </div>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Nous collectons différents types de données pour améliorer nos services et votre expérience.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {dataTypes.map((data) => (
                <div key={data.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors group">
                  <div className={`w-16 h-16 ${data.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-opacity`}>
                    <data.icon className={`w-8 h-8 ${data.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{data.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vos droits */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm mb-6">
                <Lock className="w-4 h-4 mr-3" />
                Vos Droits
              </div>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rights.map((right) => (
                <div key={right.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <h3 className="text-base font-semibold text-foreground">{right.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Politique Content */}
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
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez notre délégué à la protection des données (DPO).
              </p>
              <div className="mt-10">
                <a href="mailto:privacy@etheriatimes.com">
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
