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
        <section className="relative py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-8">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span>{t("badge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href="https://github.com/skygenesisenterprise/aether-identity/blob/main/LICENSE">
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    <GitHubIcon className="h-4 w-4" />
                    {t("ctaGithub")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/legal/terms`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    <FileText className="h-4 w-4" />
                    {t("ctaTerms")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* License Info */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("aboutTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("aboutDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <Scale className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">{t("freeTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("freeDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6">
                  <GitHubIcon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {t("openSourceTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("openDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {t("permissiveTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("permissiveDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* License Text */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground mb-8">
              {t("licenseTextTitle")}
            </h2>
            <div className="bg-card p-10 rounded-2xl font-mono text-sm text-muted-foreground">
              <p className="mb-4">{t("licenseText")}</p>
            </div>
          </div>
        </section>

        {/* Permissions */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("permissionsTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("permissionsDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 rounded-2xl bg-card">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t("permCommercial")}
                </h3>
                <p className="text-sm text-muted-foreground">{t("permCommercialDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <h3 className="text-lg font-medium text-foreground mb-3">{t("permModify")}</h3>
                <p className="text-sm text-muted-foreground">{t("permModifyDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {t("permDistribute")}
                </h3>
                <p className="text-sm text-muted-foreground">{t("permDistributeDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <h3 className="text-lg font-medium text-foreground mb-3">{t("permPrivate")}</h3>
                <p className="text-sm text-muted-foreground">{t("permPrivateDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("conditionsTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("conditionsDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-10 rounded-2xl bg-card">
                <h3 className="text-2xl font-medium text-foreground mb-4">{t("condCopyright")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("condCopyrightDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <h3 className="text-2xl font-medium text-foreground mb-4">{t("condWarranty")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("condWarrantyDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("questionsTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("questionsDescription")}
              </p>
              <div className="mt-10">
                <a href="mailto:legal@skygenesisenterprise.com">
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
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
