import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
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
  Activity,
  Smartphone,
  ShieldCheck,
  AlertTriangle,
  HeartPulse,
  Stethoscope,
  Pill,
  ClipboardList,
} from "lucide-react";

export default async function HealthcareSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const problems = [
    {
      icon: FileCheck,
      title: t("healthcare.problemComplianceTitle"),
      description: t("healthcare.problemComplianceDesc"),
    },
    {
      icon: Eye,
      title: t("healthcare.problemPrivacyTitle"),
      description: t("healthcare.problemPrivacyDesc"),
    },
    {
      icon: Layers,
      title: t("healthcare.problemFragmentationTitle"),
      description: t("healthcare.problemFragmentationDesc"),
    },
    {
      icon: AlertTriangle,
      title: t("healthcare.problemAttacksTitle"),
      description: t("healthcare.problemAttacksDesc"),
    },
  ];

  const solutions = [
    {
      icon: Fingerprint,
      title: t("healthcare.solutionStrongAuthTitle"),
      description: t("healthcare.solutionStrongAuthDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("healthcare.solutionHipaaTitle"),
      description: t("healthcare.solutionHipaaDesc"),
    },
    {
      icon: Layers,
      title: t("healthcare.solutionUnifiedTitle"),
      description: t("healthcare.solutionUnifiedDesc"),
    },
    {
      icon: Key,
      title: t("healthcare.solutionApiTitle"),
      description: t("healthcare.solutionApiDesc"),
    },
    {
      icon: FileCheck,
      title: t("healthcare.solutionConsentTitle"),
      description: t("healthcare.solutionConsentDesc"),
    },
  ];

  const capabilities = [
    {
      icon: Shield,
      title: t("healthcare.capabilityMfaTitle"),
      description: t("healthcare.capabilityMfaDesc"),
    },
    {
      icon: Fingerprint,
      title: t("healthcare.capabilityBiometricTitle"),
      description: t("healthcare.capabilityBiometricDesc"),
    },
    {
      icon: Activity,
      title: t("healthcare.capabilityAuditTitle"),
      description: t("healthcare.capabilityAuditDesc"),
    },
    {
      icon: Zap,
      title: t("healthcare.capabilityApiTitle"),
      description: t("healthcare.capabilityApiDesc"),
    },
    {
      icon: ScrollText,
      title: t("healthcare.capabilityConsentTitle"),
      description: t("healthcare.capabilityConsentDesc"),
    },
  ];

  const architectureSteps = [
    {
      icon: Smartphone,
      title: t("healthcare.archPatientTitle"),
      description: t("healthcare.archPatientDesc"),
    },
    {
      icon: Layers,
      title: t("healthcare.archAuthLayerTitle"),
      description: t("healthcare.archAuthLayerDesc"),
    },
    {
      icon: Database,
      title: t("healthcare.archIdentityTitle"),
      description: t("healthcare.archIdentityDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("healthcare.archPolicyTitle"),
      description: t("healthcare.archPolicyDesc"),
    },
  ];

  const useCases = [
    {
      icon: HeartPulse,
      title: t("healthcare.useCaseEhrTitle"),
      description: t("healthcare.useCaseEhrDesc"),
    },
    {
      icon: Stethoscope,
      title: t("healthcare.useCaseTelemedicineTitle"),
      description: t("healthcare.useCaseTelemedicineDesc"),
    },
    {
      icon: Pill,
      title: t("healthcare.useCasePharmaTitle"),
      description: t("healthcare.useCasePharmaDesc"),
    },
    {
      icon: ClipboardList,
      title: t("healthcare.useCaseResearchTitle"),
      description: t("healthcare.useCaseResearchDesc"),
    },
  ];

  const securityItems = [
    {
      icon: FileCheck,
      title: t("healthcare.securityHipaaTitle"),
      description: t("healthcare.securityHipaaDesc"),
    },
    {
      icon: Lock,
      title: t("healthcare.securityGdprTitle"),
      description: t("healthcare.securityGdprDesc"),
    },
    {
      icon: Key,
      title: t("healthcare.securityEncryptionTitle"),
      description: t("healthcare.securityEncryptionDesc"),
    },
    {
      icon: ScrollText,
      title: t("healthcare.securityAuditTitle"),
      description: t("healthcare.securityAuditDesc"),
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
                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
                <span>{t("healthcare.heroBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("healthcare.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("healthcare.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("healthcare.ctaPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com/">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("healthcare.ctaSecondary")}
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
                {t("healthcare.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("healthcare.problemSubtitle")}
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
                {t("healthcare.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("healthcare.solutionSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {solutions.map((solution) => (
                <div key={solution.title} className="p-10 rounded-2xl bg-card">
                  <solution.icon className="w-10 h-10 text-rose-500 mb-6" />
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
                {t("healthcare.capabilitiesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("healthcare.capabilitiesSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <div key={capability.title} className="p-10 rounded-2xl bg-card">
                  <capability.icon className="w-10 h-10 text-rose-500 mb-6" />
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
                {t("healthcare.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("healthcare.architectureSubtitle")}
              </p>
            </div>
            <div className="relative max-w-5xl mx-auto">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {architectureSteps.map((step, i) => (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-rose-500" />
                    </div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      {t("healthcare.archStep")} {i + 1}
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
                {t("healthcare.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("healthcare.useCasesSubtitle")}
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
                {t("healthcare.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("healthcare.securitySubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityItems.map((item) => (
                <div key={item.title} className="p-8 rounded-2xl bg-card">
                  <item.icon className="w-10 h-10 text-rose-500 mb-6" />
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
                {t("healthcare.ctaFinalTitle")}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                {t("healthcare.ctaFinalDescription")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("healthcare.ctaFinalPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com">
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    <BookOpen className="h-4 w-4" />
                    {t("healthcare.ctaFinalSecondary")}
                  </Button>
                </Link>
              </div>
              <div className="mt-8">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t("healthcare.ctaFinalContact")}
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
