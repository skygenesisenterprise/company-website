import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Users,
  Lock,
  Globe,
} from "lucide-react";

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const sections = [
    {
      title: t("terms.introTitle"),
      content: t("terms.introContent"),
    },
    {
      title: t("terms.acceptanceTitle"),
      content: t("terms.acceptanceContent"),
    },
    {
      title: t("terms.servicesTitle"),
      content: t("terms.servicesContent"),
    },
    {
      title: t("terms.accountsTitle"),
      content: t("terms.accountsContent"),
    },
    {
      title: t("terms.paymentTitle"),
      content: t("terms.paymentContent"),
    },
    {
      title: t("terms.intellectualTitle"),
      content: t("terms.intellectualContent"),
    },
    {
      title: t("terms.limitationTitle"),
      content: t("terms.limitationContent"),
    },
    {
      title: t("terms.indemnificationTitle"),
      content: t("terms.indemnificationContent"),
    },
    {
      title: t("terms.terminationTitle"),
      content: t("terms.terminationContent"),
    },
    {
      title: t("terms.governingTitle"),
      content: t("terms.governingContent"),
    },
    {
      title: t("terms.changesTitle"),
      content: t("terms.changesContent"),
    },
    {
      title: t("terms.contactTitle"),
      content: t("terms.contactContent"),
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
                {t("terms.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("terms.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("terms.contactUs")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/privacy`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("terms.viewPrivacy")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("terms.summaryTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("terms.summaryDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {t("terms.summaryAccountTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("terms.summaryAccountDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6">
                  <Lock className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {t("terms.summarySecurityTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("terms.summarySecurityDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {t("terms.summaryDataTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("terms.summaryDataDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-muted-foreground mb-12">
              {t("terms.lastUpdated")}: {t("terms.lastUpdatedDate")}
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
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("terms.questionsTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("terms.questionsDescription")}
              </p>
              <div className="mt-10">
                <a href="mailto:legal@skygenesisenterprise.com">
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    <Mail className="h-4 w-4" />
                    {t("terms.emailLegal")}
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
