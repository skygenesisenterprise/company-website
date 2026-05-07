import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Landmark,
  Lock,
  FileCheck,
  ScrollText,
  Zap,
  Layers,
  Database,
  BookOpen,
  Mail,
  Key,
  Eye,
  Fingerprint,
  Server,
  Activity,
  Smartphone,
  ShieldCheck,
  AlertTriangle,
  CreditCard,
  Wallet,
} from "lucide-react";

export default async function FinancialSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const problems = [
    {
      icon: FileCheck,
      title: t("financial.problemComplianceTitle"),
      description: t("financial.problemComplianceDesc"),
    },
    {
      icon: AlertTriangle,
      title: t("financial.problemFraudTitle"),
      description: t("financial.problemFraudDesc"),
    },
    {
      icon: Layers,
      title: t("financial.problemFragmentationTitle"),
      description: t("financial.problemFragmentationDesc"),
    },
    {
      icon: Server,
      title: t("financial.problemLegacyTitle"),
      description: t("financial.problemLegacyDesc"),
    },
  ];

  const solutions = [
    {
      icon: ShieldCheck,
      title: t("financial.solutionStrongAuthTitle"),
      description: t("financial.solutionStrongAuthDesc"),
    },
    {
      icon: Eye,
      title: t("financial.solutionFraudTitle"),
      description: t("financial.solutionFraudDesc"),
    },
    {
      icon: Layers,
      title: t("financial.solutionUnifiedTitle"),
      description: t("financial.solutionUnifiedDesc"),
    },
    {
      icon: Key,
      title: t("financial.solutionApiTitle"),
      description: t("financial.solutionApiDesc"),
    },
    {
      icon: FileCheck,
      title: t("financial.solutionComplianceTitle"),
      description: t("financial.solutionComplianceDesc"),
    },
  ];

  const capabilities = [
    {
      icon: Shield,
      title: t("financial.capabilityMfaTitle"),
      description: t("financial.capabilityMfaDesc"),
    },
    {
      icon: Fingerprint,
      title: t("financial.capabilityBiometricTitle"),
      description: t("financial.capabilityBiometricDesc"),
    },
    {
      icon: Activity,
      title: t("financial.capabilityTransactionTitle"),
      description: t("financial.capabilityTransactionDesc"),
    },
    {
      icon: Zap,
      title: t("financial.capabilityApiTitle"),
      description: t("financial.capabilityApiDesc"),
    },
    {
      icon: ScrollText,
      title: t("financial.capabilityAuditTitle"),
      description: t("financial.capabilityAuditDesc"),
    },
  ];

  const architectureSteps = [
    {
      icon: Smartphone,
      title: t("financial.archClientTitle"),
      description: t("financial.archClientDesc"),
    },
    {
      icon: Layers,
      title: t("financial.archAuthLayerTitle"),
      description: t("financial.archAuthLayerDesc"),
    },
    {
      icon: Database,
      title: t("financial.archIdentityCoreTitle"),
      description: t("financial.archIdentityCoreDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("financial.archPolicyTitle"),
      description: t("financial.archPolicyDesc"),
    },
  ];

  const useCases = [
    {
      icon: Landmark,
      title: t("financial.useCaseBankingTitle"),
      description: t("financial.useCaseBankingDesc"),
    },
    {
      icon: Wallet,
      title: t("financial.useCaseFintechTitle"),
      description: t("financial.useCaseFintechDesc"),
    },
    {
      icon: Shield,
      title: t("financial.useCaseInsuranceTitle"),
      description: t("financial.useCaseInsuranceDesc"),
    },
    {
      icon: CreditCard,
      title: t("financial.useCasePaymentsTitle"),
      description: t("financial.useCasePaymentsDesc"),
    },
  ];

  const securityItems = [
    {
      icon: FileCheck,
      title: t("financial.securityPciTitle"),
      description: t("financial.securityPciDesc"),
    },
    {
      icon: Lock,
      title: t("financial.securityGdprTitle"),
      description: t("financial.securityGdprDesc"),
    },
    {
      icon: Key,
      title: t("financial.securityEncryptionTitle"),
      description: t("financial.securityEncryptionDesc"),
    },
    {
      icon: ScrollText,
      title: t("financial.securityAuditTitle"),
      description: t("financial.securityAuditDesc"),
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
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                <span>{t("financial.heroBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("financial.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("financial.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("financial.ctaPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com/">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("financial.ctaSecondary")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("financial.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("financial.problemSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem) => (
                <div key={problem.title} className="p-8 rounded-2xl bg-card text-center">
                  <problem.icon className="w-10 h-10 text-foreground mx-auto mb-6 opacity-70" />
                  <h3 className="text-lg font-medium text-foreground mb-3">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("financial.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("financial.solutionSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {solutions.map((solution) => (
                <div key={solution.title} className="p-10 rounded-2xl bg-card">
                  <solution.icon className="w-10 h-10 text-indigo-500 mb-6" />
                  <h3 className="text-xl font-medium text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Capabilities Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("financial.capabilitiesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("financial.capabilitiesSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <div key={capability.title} className="p-10 rounded-2xl bg-card">
                  <capability.icon className="w-10 h-10 text-indigo-500 mb-6" />
                  <h3 className="text-xl font-medium text-foreground mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("financial.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("financial.architectureSubtitle")}
              </p>
            </div>
            <div className="relative max-w-5xl mx-auto">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {architectureSteps.map((step, i) => (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-indigo-500" />
                    </div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      {t("financial.archStep")} {i + 1}
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("financial.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("financial.useCasesSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="p-8 rounded-2xl bg-card text-center">
                  <useCase.icon className="w-10 h-10 text-foreground mx-auto mb-6 opacity-70" />
                  <h3 className="text-lg font-medium text-foreground mb-3">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("financial.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("financial.securitySubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityItems.map((item) => (
                <div key={item.title} className="p-8 rounded-2xl bg-card">
                  <item.icon className="w-10 h-10 text-indigo-500 mb-6" />
                  <h3 className="text-lg font-medium text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground mb-6">
                {t("financial.ctaFinalTitle")}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                {t("financial.ctaFinalDescription")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("financial.ctaFinalPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com">
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    <BookOpen className="h-4 w-4" />
                    {t("financial.ctaFinalSecondary")}
                  </Button>
                </Link>
              </div>
              <div className="mt-8">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t("financial.ctaFinalContact")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale as "fr" | "be_fr" | "be_nl" | "ch_fr"} />
    </div>
  );
}
