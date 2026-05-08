/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /[locale]/pgp/page.tsx
 * Layer: Public Page
 * Purpose: Presents the SGE Platform as the technical foundation of the ecosystem.
 *
 * Stability: Active
 * Owner: SGE Platform
 * Contact: contact@skygenesisenterprise.com
 */
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Key, CheckCircle2, Mail, AlertTriangle, Fingerprint } from "lucide-react";

export default async function PGPPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const steps = [t("pgp.step1"), t("pgp.step2"), t("pgp.step3"), t("pgp.step4"), t("pgp.step5")];

  const uses = [
    { title: t("pgp.useVerifyTitle"), description: t("pgp.useVerifyDesc") },
    { title: t("pgp.useEncryptTitle"), description: t("pgp.useEncryptDesc") },
    { title: t("pgp.useSignTitle"), description: t("pgp.useSignDesc") },
    { title: t("pgp.useConfirmTitle"), description: t("pgp.useConfirmDesc") },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header locale={locale as import("@/lib/locale").Locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-28 lg:py-36">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6 rounded-full border border-border/50 bg-muted/20 px-4 py-1.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="font-medium">{t("pgp.badge")}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight text-balance">
              {t("pgp.heroTitle")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("pgp.heroDescription")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#public-key">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("pgp.showPublicKey")}
                  <Key className="h-4 w-4" />
                </Button>
              </Link>
              <a href="mailto:security@skygenesisenterprise.com">
                <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("pgp.contactSecurityTeam")}
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Trust Info Cards */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-2xl border border-border/50 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-muted/40">
                    <Shield className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{t("pgp.keyUsage")}</span>
                </div>
                <p className="text-sm text-foreground">{t("pgp.recommendedUsage")}</p>
              </div>
              <div className="p-6 rounded-2xl border border-border/50 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-muted/40">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{t("pgp.securityContact")}</span>
                </div>
                <p className="text-sm text-foreground">security@skygenesisenterprise.com</p>
              </div>
              <div className="p-6 rounded-2xl border border-border/50 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-muted/40">
                    <Fingerprint className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{t("pgp.fingerprintTitle")}</span>
                </div>
                <p className="text-sm text-foreground font-mono break-all">{t("pgp.fingerprint")}</p>
              </div>
              <div className="p-6 rounded-2xl border border-border/50 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-muted/40">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{t("pgp.officialKeyStatus")}</span>
                </div>
                <p className="text-sm text-foreground">{t("pgp.officialKeyDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* PGP Key Section */}
        <section id="public-key" className="py-24 lg:py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
                {t("pgp.publicKeyTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("pgp.publicKeyDescription")}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-2xl border border-border/50 bg-card">
                <h3 className="text-base font-medium text-foreground mb-4">{t("pgp.keyBlockTitle")}</h3>
                <div className="bg-muted/50 p-4 rounded-xl border border-border/50 max-h-105 overflow-auto">
                  <pre className="text-xs font-mono whitespace-pre-wrap break-all text-muted-foreground">
                    {t("pgp.keyBlock")}
                  </pre>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Pour obtenir le fichier clé, contactez{" "}
                  <a
                    href="mailto:security@skygenesisenterprise.com"
                    className="underline underline-offset-4 text-foreground"
                  >
                    security@skygenesisenterprise.com
                  </a>
                  .
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-border/50 bg-card">
                <h3 className="text-base font-medium text-foreground mb-6">{t("pgp.keyDetails")}</h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {t("pgp.fingerprintTitle")}
                    </span>
                    <code className="mt-2 text-sm font-mono break-all text-foreground bg-muted/50 p-3 rounded-lg block border border-border/50">
                      {t("pgp.fingerprint")}
                    </code>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {t("pgp.keyUsage")}
                    </span>
                    <p className="mt-2 text-sm text-foreground">{t("pgp.keyDetailUsageValue")}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {t("pgp.publishedAt")}
                    </span>
                    <p className="mt-2 text-sm text-foreground">{t("pgp.publishedAtValue")}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {t("pgp.securityContact")}
                    </span>
                    <a
                      href="mailto:security@skygenesisenterprise.com"
                      className="mt-2 text-sm text-foreground underline underline-offset-4 block"
                    >
                      security@skygenesisenterprise.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Verify Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
                {t("pgp.whyTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("pgp.whyDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl border border-border/50 bg-card">
                <div className="p-3 rounded-xl bg-muted/40 w-fit mb-6">
                  <Shield className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">{t("pgp.whyAuthTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("pgp.whyAuthDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl border border-border/50 bg-card">
                <div className="p-3 rounded-xl bg-muted/40 w-fit mb-6">
                  <CheckCircle2 className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">{t("pgp.whyTrustTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("pgp.whyTrustDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl border border-border/50 bg-card">
                <div className="p-3 rounded-xl bg-muted/40 w-fit mb-6">
                  <Key className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">{t("pgp.whySecureTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("pgp.whySecureDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Verify Section */}
        <section className="py-24 lg:py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
                {t("pgp.howVerifyTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("pgp.howVerifyDescription")}
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l border-border/50 ml-3 space-y-10">
                {steps.map((step, index) => (
                  <li key={index} className="relative pl-8">
                    <span className="absolute -left-1.25 top-1.5 flex items-center justify-center w-2.5 h-2.5 rounded-full bg-muted-foreground/30 ring-4 ring-background" />
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1 block">
                      Étape {index + 1}
                    </span>
                    <p className="text-base text-foreground leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Usage Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
                {t("pgp.usageTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("pgp.usageDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {uses.map((use) => (
                <div key={use.title} className="p-6 rounded-2xl border border-border/50 bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-base font-medium text-foreground">{use.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{use.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="py-24 lg:py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-2xl border border-border/50 bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-muted/40 shrink-0">
                    <AlertTriangle className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-foreground mb-2">{t("pgp.warningTitle")}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t("pgp.warningContent")}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      Ne faites jamais confiance à une clé récupérée depuis une source non vérifiée. Comparez
                      toujours le fingerprint avec les canaux officiels. En cas de doute, contactez{" "}
                      <a
                        href="mailto:security@skygenesisenterprise.com"
                        className="underline underline-offset-4 text-foreground"
                      >
                        security@skygenesisenterprise.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center p-10 rounded-3xl bg-muted/20 border border-border/50">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
                {t("pgp.verifyCommunicationTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("pgp.verifyCommunicationDesc")}
              </p>
              <div className="mt-10">
                <a href="mailto:security@skygenesisenterprise.com">
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
                    <Mail className="h-4 w-4" />
                    {t("pgp.emailSecurity")}
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
