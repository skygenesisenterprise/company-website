import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Users,
  Globe,
  Lock,
  Key,
  CheckCircle2,
  Zap,
  Layers,
  Database,
  BookOpen,
  Mail,
  FileCheck,
  Cog,
  Fingerprint,
  Activity,
  ShieldCheck,
  ScrollText,
  Smartphone,
  Briefcase,
  Building2,
  AlertTriangle,
  Eye,
} from "lucide-react";

export default async function WorkplaceSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const problems = [
    {
      icon: Layers,
      title: t("workplace.problemSaaSTitle"),
      description: t("workplace.problemSaaSDesc"),
    },
    {
      icon: Eye,
      title: t("workplace.problemAccessTitle"),
      description: t("workplace.problemAccessDesc"),
    },
    {
      icon: Users,
      title: t("workplace.problemOnboardingTitle"),
      description: t("workplace.problemOnboardingDesc"),
    },
    {
      icon: AlertTriangle,
      title: t("workplace.problemRiskTitle"),
      description: t("workplace.problemRiskDesc"),
    },
  ];

  const solutions = [
    {
      icon: Users,
      title: t("workplace.solutionCentralizedTitle"),
      description: t("workplace.solutionCentralizedDesc"),
    },
    {
      icon: Globe,
      title: t("workplace.solutionSsoTitle"),
      description: t("workplace.solutionSsoDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("workplace.solutionMfaTitle"),
      description: t("workplace.solutionMfaDesc"),
    },
    {
      icon: Key,
      title: t("workplace.solutionRbacTitle"),
      description: t("workplace.solutionRbacDesc"),
    },
    {
      icon: Zap,
      title: t("workplace.solutionDynamicTitle"),
      description: t("workplace.solutionDynamicDesc"),
    },
  ];

  const capabilities = [
    {
      icon: Users,
      title: t("workplace.capabilityWorkforceTitle"),
      description: t("workplace.capabilityWorkforceDesc"),
    },
    {
      icon: Globe,
      title: t("workplace.capabilitySsoTitle"),
      description: t("workplace.capabilitySsoDesc"),
    },
    {
      icon: Shield,
      title: t("workplace.capabilityMfaTitle"),
      description: t("workplace.capabilityMfaDesc"),
    },
    {
      icon: Lock,
      title: t("workplace.capabilityRbacTitle"),
      description: t("workplace.capabilityRbacDesc"),
    },
    {
      icon: Activity,
      title: t("workplace.capabilityLifecycleTitle"),
      description: t("workplace.capabilityLifecycleDesc"),
    },
  ];

  const architectureSteps = [
    {
      icon: Smartphone,
      title: t("workplace.archEmployeeTitle"),
      description: t("workplace.archEmployeeDesc"),
    },
    {
      icon: Database,
      title: t("workplace.archAppsTitle"),
      description: t("workplace.archAppsDesc"),
    },
    {
      icon: Fingerprint,
      title: t("workplace.archIdentityTitle"),
      description: t("workplace.archIdentityDesc"),
    },
    {
      icon: Cog,
      title: t("workplace.archPolicyTitle"),
      description: t("workplace.archPolicyDesc"),
    },
    {
      icon: CheckCircle2,
      title: t("workplace.archDecisionTitle"),
      description: t("workplace.archDecisionDesc"),
    },
  ];

  const useCases = [
    {
      icon: Briefcase,
      title: t("workplace.useCaseSaaSTitle"),
      description: t("workplace.useCaseSaaSDesc"),
    },
    {
      icon: Database,
      title: t("workplace.useCaseDashboardsTitle"),
      description: t("workplace.useCaseDashboardsDesc"),
    },
    {
      icon: Users,
      title: t("workplace.useCaseHrTitle"),
      description: t("workplace.useCaseHrDesc"),
    },
    {
      icon: Globe,
      title: t("workplace.useCaseRemoteTitle"),
      description: t("workplace.useCaseRemoteDesc"),
    },
    {
      icon: Building2,
      title: t("workplace.useCaseMultiOrgTitle"),
      description: t("workplace.useCaseMultiOrgDesc"),
    },
  ];

  const securityItems = [
    {
      icon: Shield,
      title: t("workplace.securityZeroTrustTitle"),
      description: t("workplace.securityZeroTrustDesc"),
    },
    {
      icon: FileCheck,
      title: t("workplace.securityGdprTitle"),
      description: t("workplace.securityGdprDesc"),
    },
    {
      icon: ScrollText,
      title: t("workplace.securityAuditTitle"),
      description: t("workplace.securityAuditDesc"),
    },
    {
      icon: Lock,
      title: t("workplace.securityAuthTitle"),
      description: t("workplace.securityAuthDesc"),
    },
    {
      icon: Activity,
      title: t("workplace.securitySessionTitle"),
      description: t("workplace.securitySessionDesc"),
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
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                <span>{t("workplace.heroBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("workplace.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("workplace.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("workplace.ctaPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com/">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("workplace.ctaSecondary")}
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
                {t("workplace.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("workplace.problemSubtitle")}
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
                {t("workplace.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("workplace.solutionSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {solutions.map((solution) => (
                <div key={solution.title} className="p-10 rounded-2xl bg-card">
                  <solution.icon className="w-10 h-10 text-orange-500 mb-6" />
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
                {t("workplace.capabilitiesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("workplace.capabilitiesSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <div key={capability.title} className="p-10 rounded-2xl bg-card">
                  <capability.icon className="w-10 h-10 text-orange-500 mb-6" />
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
                {t("workplace.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("workplace.architectureSubtitle")}
              </p>
            </div>
            <div className="relative max-w-5xl mx-auto">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-border" />
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {architectureSteps.map((step, i) => (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-orange-500" />
                    </div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      {t("workplace.archStep")} {i + 1}
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
                {t("workplace.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("workplace.useCasesSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {t("workplace.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("workplace.securitySubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityItems.map((item) => (
                <div key={item.title} className="p-8 rounded-2xl bg-card">
                  <item.icon className="w-10 h-10 text-orange-500 mb-6" />
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
                {t("workplace.ctaFinalTitle")}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                {t("workplace.ctaFinalDescription")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("workplace.ctaFinalPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com">
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    <BookOpen className="h-4 w-4" />
                    {t("workplace.ctaFinalSecondary")}
                  </Button>
                </Link>
              </div>
              <div className="mt-8">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t("workplace.ctaFinalContact")}
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
