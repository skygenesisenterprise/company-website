import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/icons/GitHubIcon";
import { ArrowRight, Scale, FileText } from "lucide-react";

export default async function LicencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "License" });

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
                <span className="font-medium">{t("badge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link href="https://github.com/skygenesisenterprise/aether-identity/blob/main/LICENSE">
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
                    <GitHubIcon className="h-4 w-4" />
                    {t("ctaGithub")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/legal/terms`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    <FileText className="h-4 w-4" />
                    {t("ctaTerms")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* License Info */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
                <Scale className="w-4 h-4 mr-3" />
                {t("aboutTitle")}
              </div>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("aboutDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors group">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:opacity-80 transition-opacity">
                  <Scale className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t("freeTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("freeDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors group">
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:opacity-80 transition-opacity">
                  <GitHubIcon className="h-7 w-7 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t("openSourceTitle")}
                </h3>
                <p className="text-sm text-muted-foreground">{t("openDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors group">
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:opacity-80 transition-opacity">
                  <FileText className="h-7 w-7 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t("permissiveTitle")}
                </h3>
                <p className="text-sm text-muted-foreground">{t("permissiveDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* License Text */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("licenseTextTitle")}
              </h2>
              <div className="bg-muted/30 p-8 rounded-lg border border-border font-mono text-sm">
                <p className="mb-4">{t("licenseText")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Permissions */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm mb-6">
                <FileText className="w-4 h-4 mr-3" />
                {t("permissionsTitle")}
              </div>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("permissionsDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t("permCommercial")}
                </h3>
                <p className="text-sm text-muted-foreground">{t("permCommercialDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">{t("permModify")}</h3>
                <p className="text-sm text-muted-foreground">{t("permModifyDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t("permDistribute")}
                </h3>
                <p className="text-sm text-muted-foreground">{t("permDistributeDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">{t("permPrivate")}</h3>
                <p className="text-sm text-muted-foreground">{t("permPrivateDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
                <Scale className="w-4 h-4 mr-3" />
                {t("conditionsTitle")}
              </div>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("conditionsDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">{t("condCopyright")}</h3>
                <p className="text-sm text-muted-foreground">{t("condCopyrightDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">{t("condWarranty")}</h3>
                <p className="text-sm text-muted-foreground">{t("condWarrantyDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-8">
                <Scale className="w-4 h-4 mr-3" />
                {t("questionsTitle")}
              </div>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("questionsDescription")}
              </p>
              <div className="mt-10">
                <a href="mailto:legal@skygenesisenterprise.com">
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("contactButton")}
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
