import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Users,
  Lock,
  FileCheck,
  ScrollText,
  Zap,
  Layers,
  Database,
  Globe,
  BookOpen,
  Mail,
  Key,
  Fingerprint,
  Server,
  Smartphone,
  ShieldCheck,
  AlertTriangle,
  GraduationCap,
  HeartPulse,
  Monitor,
} from "lucide-react";

export default async function GovernmentSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const problems = [
    {
      icon: FileCheck,
      title: t("government.problemComplianceTitle"),
      description: t("government.problemComplianceDesc"),
    },
    {
      icon: AlertTriangle,
      title: t("government.problemCyberTitle"),
      description: t("government.problemCyberDesc"),
    },
    {
      icon: Users,
      title: t("government.problemCitizenTitle"),
      description: t("government.problemCitizenDesc"),
    },
    {
      icon: Layers,
      title: t("government.problemInteropTitle"),
      description: t("government.problemInteropDesc"),
    },
  ];

  const solutions = [
    {
      icon: Fingerprint,
      title: t("government.solutionDigitalIdTitle"),
      description: t("government.solutionDigitalIdDesc"),
    },
    {
      icon: Globe,
      title: t("government.solutionSsoTitle"),
      description: t("government.solutionSsoDesc"),
    },
    {
      icon: FileCheck,
      title: t("government.solutionComplianceTitle"),
      description: t("government.solutionComplianceDesc"),
    },
    {
      icon: Key,
      title: t("government.solutionApiTitle"),
      description: t("government.solutionApiDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("government.solutionZeroTrustTitle"),
      description: t("government.solutionZeroTrustDesc"),
    },
  ];

  const capabilities = [
    {
      icon: Users,
      title: t("government.capabilityCitizenTitle"),
      description: t("government.capabilityCitizenDesc"),
    },
    {
      icon: Lock,
      title: t("government.capabilityAccessTitle"),
      description: t("government.capabilityAccessDesc"),
    },
    {
      icon: ScrollText,
      title: t("government.capabilityAuditTitle"),
      description: t("government.capabilityAuditDesc"),
    },
    {
      icon: Zap,
      title: t("government.capabilityInteropTitle"),
      description: t("government.capabilityInteropDesc"),
    },
    {
      icon: Shield,
      title: t("government.capabilitySovereigntyTitle"),
      description: t("government.capabilitySovereigntyDesc"),
    },
  ];

  const architectureSteps = [
    {
      icon: Smartphone,
      title: t("government.archCitizenTitle"),
      description: t("government.archCitizenDesc"),
    },
    {
      icon: Layers,
      title: t("government.archPortalTitle"),
      description: t("government.archPortalDesc"),
    },
    {
      icon: Database,
      title: t("government.archIdentityTitle"),
      description: t("government.archIdentityDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("government.archPolicyTitle"),
      description: t("government.archPolicyDesc"),
    },
  ];

  const useCases = [
    {
      icon: Monitor,
      title: t("government.useCaseEGovTitle"),
      description: t("government.useCaseEGovDesc"),
    },
    {
      icon: HeartPulse,
      title: t("government.useCaseHealthTitle"),
      description: t("government.useCaseHealthDesc"),
    },
    {
      icon: GraduationCap,
      title: t("government.useCaseEducationTitle"),
      description: t("government.useCaseEducationDesc"),
    },
    {
      icon: Shield,
      title: t("government.useCaseSecurityTitle"),
      description: t("government.useCaseSecurityDesc"),
    },
  ];

  const securityItems = [
    {
      icon: FileCheck,
      title: t("government.securityGdprTitle"),
      description: t("government.securityGdprDesc"),
    },
    {
      icon: Lock,
      title: t("government.securityEncryptionTitle"),
      description: t("government.securityEncryptionDesc"),
    },
    {
      icon: ScrollText,
      title: t("government.securityAuditTitle"),
      description: t("government.securityAuditDesc"),
    },
    {
      icon: Server,
      title: t("government.securitySovereigntyTitle"),
      description: t("government.securitySovereigntyDesc"),
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
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                <span>{t("government.heroBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("government.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("government.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("government.ctaPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com/">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("government.ctaSecondary")}
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
                {t("government.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("government.problemSubtitle")}
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
                {t("government.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("government.solutionSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {solutions.map((solution) => (
                <div key={solution.title} className="p-10 rounded-2xl bg-card">
                  <solution.icon className="w-10 h-10 text-teal-500 mb-6" />
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
                {t("government.capabilitiesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("government.capabilitiesSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <div key={capability.title} className="p-10 rounded-2xl bg-card">
                  <capability.icon className="w-10 h-10 text-teal-500 mb-6" />
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
                {t("government.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("government.architectureSubtitle")}
              </p>
            </div>
            <div className="relative max-w-5xl mx-auto">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {architectureSteps.map((step, i) => (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-teal-500" />
                    </div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      {t("government.archStep")} {i + 1}
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
                {t("government.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("government.useCasesSubtitle")}
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
                {t("government.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("government.securitySubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityItems.map((item) => (
                <div key={item.title} className="p-8 rounded-2xl bg-card">
                  <item.icon className="w-10 h-10 text-teal-500 mb-6" />
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
                {t("government.ctaFinalTitle")}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                {t("government.ctaFinalDescription")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("government.ctaFinalPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com">
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    <BookOpen className="h-4 w-4" />
                    {t("government.ctaFinalSecondary")}
                  </Button>
                </Link>
              </div>
              <div className="mt-8">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t("government.ctaFinalContact")}
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
