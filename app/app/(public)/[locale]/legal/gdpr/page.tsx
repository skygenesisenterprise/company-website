import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Eye,
  Users,
  Mail,
  FileText,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default async function GdprPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const gdprPrinciples = [
    {
      title: t("gdpr.principle1Title"),
      description: t("gdpr.principle1Desc"),
    },
    {
      title: t("gdpr.principle2Title"),
      description: t("gdpr.principle2Desc"),
    },
    {
      title: t("gdpr.principle3Title"),
      description: t("gdpr.principle3Desc"),
    },
    {
      title: t("gdpr.principle4Title"),
      description: t("gdpr.principle4Desc"),
    },
    {
      title: t("gdpr.principle5Title"),
      description: t("gdpr.principle5Desc"),
    },
    {
      title: t("gdpr.principle6Title"),
      description: t("gdpr.principle6Desc"),
    },
  ];

  const rights = [
    {
      icon: Eye,
      title: t("gdpr.right1Title"),
      description: t("gdpr.right1Desc"),
    },
    {
      icon: AlertCircle,
      title: t("gdpr.right2Title"),
      description: t("gdpr.right2Desc"),
    },
    {
      icon: Trash2,
      title: t("gdpr.right3Title"),
      description: t("gdpr.right3Desc"),
    },
    {
      icon: FileText,
      title: t("gdpr.right4Title"),
      description: t("gdpr.right4Desc"),
    },
  ];

  const sections = [
    {
      title: t("gdpr.introTitle"),
      content: t("gdpr.introContent"),
    },
    {
      title: t("gdpr.controllerTitle"),
      content: t("gdpr.controllerContent"),
    },
    {
      title: t("gdpr.dpoTitle"),
      content: t("gdpr.dpoContent"),
    },
    {
      title: t("gdpr.dataProcessedTitle"),
      content: t("gdpr.dataProcessedContent"),
    },
    {
      title: t("gdpr.purposeTitle"),
      content: t("gdpr.purposeContent"),
    },
    {
      title: t("gdpr.retentionTitle"),
      content: t("gdpr.retentionContent"),
    },
    {
      title: t("gdpr.rightsTitle"),
      content: t("gdpr.rightsContent"),
    },
    {
      title: t("gdpr.transfersTitle"),
      content: t("gdpr.transfersContent"),
    },
    {
      title: t("gdpr.securityTitle"),
      content: t("gdpr.securityContent"),
    },
    {
      title: t("gdpr.complaintsTitle"),
      content: t("gdpr.complaintsContent"),
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
                {t("gdpr.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("gdpr.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("gdpr.contactUs")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/privacy`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("gdpr.viewPrivacy")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GDPR Principles */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("gdpr.principlesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("gdpr.principlesDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gdprPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-400">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-3">{principle.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Subject Rights */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("gdpr.rightsSectionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("gdpr.rightsSectionDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {rights.map((right) => (
                <div key={right.title} className="p-8 rounded-2xl bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <right.icon className="w-5 h-5 text-green-400" />
                    <h3 className="text-base font-medium text-foreground mb-3">{right.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Measures */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("gdpr.complianceTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("gdpr.complianceDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {t("gdpr.technicalTitle")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{t("gdpr.technical1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{t("gdpr.technical2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{t("gdpr.technical3")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {t("gdpr.organizationalTitle")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{t("gdpr.organizational1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{t("gdpr.organizational2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{t("gdpr.organizational3")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {t("gdpr.accountabilityTitle")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{t("gdpr.accountability1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{t("gdpr.accountability2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{t("gdpr.accountability3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GDPR Policy Content */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-muted-foreground mb-12">
              {t("gdpr.lastUpdated")}: {t("gdpr.lastUpdatedDate")}
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
                {t("gdpr.questionsTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("gdpr.questionsDescription")}
              </p>
              <div className="mt-10">
                <a href="mailto:gdpr@skygenesisenterprise.com">
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    <Mail className="h-4 w-4" />
                    {t("gdpr.emailDpo")}
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

function Trash2({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}
