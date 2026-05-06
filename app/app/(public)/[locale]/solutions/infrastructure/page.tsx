import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Server,
  Network,
  Lock,
  Key,
  CheckCircle2,
  Zap,
  Layers,
  Database,
  Globe,
  BookOpen,
  Mail,
  FileCheck,
  Cog,
  Fingerprint,
  Radio,
  Activity,
  ShieldCheck,
  Eye,
} from "lucide-react";

export default async function InfrastructureSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const capabilities = [
    {
      icon: Fingerprint,
      title: t("infrastructure.capabilityServiceIdentityTitle"),
      description: t("infrastructure.capabilityServiceIdentityDesc"),
    },
    {
      icon: Radio,
      title: t("infrastructure.capabilityM2MTitle"),
      description: t("infrastructure.capabilityM2MDesc"),
    },
    {
      icon: Lock,
      title: t("infrastructure.capabilityAPISecurityTitle"),
      description: t("infrastructure.capabilityAPISecurityDesc"),
    },
    {
      icon: Cog,
      title: t("infrastructure.capabilityPolicyTitle"),
      description: t("infrastructure.capabilityPolicyDesc"),
    },
    {
      icon: Key,
      title: t("infrastructure.capabilityTokenTitle"),
      description: t("infrastructure.capabilityTokenDesc"),
    },
  ];

  const problems = [
    {
      icon: Server,
      title: t("infrastructure.problemStandardTitle"),
      description: t("infrastructure.problemStandardDesc"),
    },
    {
      icon: Lock,
      title: t("infrastructure.problemWeakSecTitle"),
      description: t("infrastructure.problemWeakSecDesc"),
    },
    {
      icon: Key,
      title: t("infrastructure.problemSecretsTitle"),
      description: t("infrastructure.problemSecretsDesc"),
    },
    {
      icon: Eye,
      title: t("infrastructure.problemVisibilityTitle"),
      description: t("infrastructure.problemVisibilityDesc"),
    },
  ];

  const solutions = [
    {
      icon: Radio,
      title: t("infrastructure.solutionM2MTitle"),
      description: t("infrastructure.solutionM2MDesc"),
    },
    {
      icon: Fingerprint,
      title: t("infrastructure.solutionServiceIdTitle"),
      description: t("infrastructure.solutionServiceIdDesc"),
    },
    {
      icon: CheckCircle2,
      title: t("infrastructure.solutionTokenTitle"),
      description: t("infrastructure.solutionTokenDesc"),
    },
    {
      icon: Cog,
      title: t("infrastructure.solutionPolicyTitle"),
      description: t("infrastructure.solutionPolicyDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("infrastructure.solutionZeroTrustTitle"),
      description: t("infrastructure.solutionZeroTrustDesc"),
    },
  ];

  const architectureSteps = [
    {
      icon: Network,
      title: t("infrastructure.archClientsTitle"),
      description: t("infrastructure.archClientsDesc"),
    },
    {
      icon: Layers,
      title: t("infrastructure.archIdentityTitle"),
      description: t("infrastructure.archIdentityDesc"),
    },
    {
      icon: Key,
      title: t("infrastructure.archAuthTitle"),
      description: t("infrastructure.archAuthDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("infrastructure.archPolicyTitle"),
      description: t("infrastructure.archPolicyDesc"),
    },
    {
      icon: Activity,
      title: t("infrastructure.archAuditTitle"),
      description: t("infrastructure.archAuditDesc"),
    },
  ];

  const useCases = [
    {
      icon: Database,
      title: t("infrastructure.useCaseMicroservicesTitle"),
      description: t("infrastructure.useCaseMicroservicesDesc"),
    },
    {
      icon: Globe,
      title: t("infrastructure.useCaseFintechTitle"),
      description: t("infrastructure.useCaseFintechDesc"),
    },
    {
      icon: Radio,
      title: t("infrastructure.useCaseIoTTitle"),
      description: t("infrastructure.useCaseIoTDesc"),
    },
    {
      icon: Server,
      title: t("infrastructure.useCaseEnterpriseAPITitle"),
      description: t("infrastructure.useCaseEnterpriseAPIDesc"),
    },
    {
      icon: Zap,
      title: t("infrastructure.useCaseEventDrivenTitle"),
      description: t("infrastructure.useCaseEventDrivenDesc"),
    },
  ];

  const securityItems = [
    {
      icon: ShieldCheck,
      title: t("infrastructure.securityZeroTrustTitle"),
      description: t("infrastructure.securityZeroTrustDesc"),
    },
    {
      icon: Lock,
      title: t("infrastructure.securityEncryptedTitle"),
      description: t("infrastructure.securityEncryptedDesc"),
    },
    {
      icon: Key,
      title: t("infrastructure.securityShortLivedTitle"),
      description: t("infrastructure.securityShortLivedDesc"),
    },
    {
      icon: FileCheck,
      title: t("infrastructure.securityAuditTitle"),
      description: t("infrastructure.securityAuditDesc"),
    },
    {
      icon: CheckCircle2,
      title: t("infrastructure.securityComplianceTitle"),
      description: t("infrastructure.securityComplianceDesc"),
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
                <span>{t("infrastructure.heroBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("infrastructure.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("infrastructure.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("infrastructure.ctaPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com/">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("infrastructure.ctaSecondary")}
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
                {t("infrastructure.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("infrastructure.problemSubtitle")}
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
                {t("infrastructure.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("infrastructure.solutionSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {solutions.map((solution) => (
                <div key={solution.title} className="p-10 rounded-2xl bg-card">
                  <solution.icon className="w-10 h-10 text-green-500 mb-6" />
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
                {t("infrastructure.capabilitiesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("infrastructure.capabilitiesSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <div key={capability.title} className="p-10 rounded-2xl bg-card">
                  <capability.icon className="w-10 h-10 text-green-500 mb-6" />
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
                {t("infrastructure.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("infrastructure.architectureSubtitle")}
              </p>
            </div>
            <div className="relative max-w-5xl mx-auto">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-border" />
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {architectureSteps.map((step, i) => (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-green-500" />
                    </div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      {t("infrastructure.archStep")} {i + 1}
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
                {t("infrastructure.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("infrastructure.useCasesSubtitle")}
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
                {t("infrastructure.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("infrastructure.securitySubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityItems.map((item) => (
                <div key={item.title} className="p-8 rounded-2xl bg-card">
                  <item.icon className="w-10 h-10 text-green-500 mb-6" />
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
                {t("infrastructure.ctaFinalTitle")}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                {t("infrastructure.ctaFinalDescription")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/company/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("infrastructure.ctaFinalPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com">
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    <BookOpen className="h-4 w-4" />
                    {t("infrastructure.ctaFinalSecondary")}
                  </Button>
                </Link>
              </div>
              <div className="mt-8">
                <Link
                  href={`/${locale}/company/contact`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t("infrastructure.ctaFinalContact")}
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
