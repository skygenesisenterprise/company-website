import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Users,
  Server,
  Smartphone,
  Lock,
  FileCheck,
  ScrollText,
  CheckCircle2,
  Zap,
  Layers,
  Database,
  Globe,
  BookOpen,
  Mail,
  Key,
  Building2,
  Network,
  ShieldCheck,
  Briefcase,
  Landmark,
  HeartPulse,
} from "lucide-react";

export default async function B2BSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const capabilities = [
    {
      icon: Building2,
      title: t("b2b.capabilityPasswordlessTitle"),
      description: t("b2b.capabilityPasswordlessDesc"),
    },
    {
      icon: Network,
      title: t("b2b.capabilitySocialLoginTitle"),
      description: t("b2b.capabilitySocialLoginDesc"),
    },
    {
      icon: Users,
      title: t("b2b.capabilityMfaTitle"),
      description: t("b2b.capabilityMfaDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("b2b.capabilitySessionTitle"),
      description: t("b2b.capabilitySessionDesc"),
    },
    {
      icon: FileCheck,
      title: t("b2b.capabilityScaleTitle"),
      description: t("b2b.capabilityScaleDesc"),
    },
    {
      icon: Zap,
      title: t("b2b.capabilityApiFirstTitle"),
      description: t("b2b.capabilityApiFirstDesc"),
    },
  ];

  const problems = [
    {
      icon: Building2,
      title: t("b2b.problemScaleTitle"),
      description: t("b2b.problemScaleDesc"),
    },
    {
      icon: Network,
      title: t("b2b.problemFrictionTitle"),
      description: t("b2b.problemFrictionDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("b2b.problemSecurityTitle"),
      description: t("b2b.problemSecurityDesc"),
    },
    {
      icon: Briefcase,
      title: t("b2b.problemAttacksTitle"),
      description: t("b2b.problemAttacksDesc"),
    },
  ];

  const solutions = [
    {
      icon: CheckCircle2,
      title: t("b2b.solutionAuthTitle"),
      description: t("b2b.solutionAuthDesc"),
    },
    {
      icon: Building2,
      title: t("b2b.solutionPasswordlessTitle"),
      description: t("b2b.solutionPasswordlessDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("b2b.solutionAdaptiveMfaTitle"),
      description: t("b2b.solutionAdaptiveMfaDesc"),
    },
    {
      icon: Key,
      title: t("b2b.solutionSsoTitle"),
      description: t("b2b.solutionSsoDesc"),
    },
    {
      icon: Zap,
      title: t("b2b.solutionApiFirstTitle"),
      description: t("b2b.solutionApiFirstDesc"),
    },
  ];

  const architectureSteps = [
    {
      icon: Smartphone,
      title: t("b2b.archClientTitle"),
      description: t("b2b.archClientDesc"),
    },
    {
      icon: Layers,
      title: t("b2b.archAuthLayerTitle"),
      description: t("b2b.archAuthLayerDesc"),
    },
    {
      icon: Database,
      title: t("b2b.archIdentityCoreTitle"),
      description: t("b2b.archIdentityCoreDesc"),
    },
    {
      icon: Server,
      title: t("b2b.archProvidersTitle"),
      description: t("b2b.archProvidersDesc"),
    },
  ];

  const useCases = [
    {
      icon: Briefcase,
      title: t("b2b.useCaseSaaSTitle"),
      description: t("b2b.useCaseSaaSDesc"),
    },
    {
      icon: Landmark,
      title: t("b2b.useCaseMobileTitle"),
      description: t("b2b.useCaseMobileDesc"),
    },
    {
      icon: HeartPulse,
      title: t("b2b.useCaseEcommerceTitle"),
      description: t("b2b.useCaseEcommerceDesc"),
    },
    {
      icon: Globe,
      title: t("b2b.useCaseFintechTitle"),
      description: t("b2b.useCaseFintechDesc"),
    },
  ];

  const securityItems = [
    {
      icon: FileCheck,
      title: t("b2b.securityGdprTitle"),
      description: t("b2b.securityGdprDesc"),
    },
    {
      icon: Lock,
      title: t("b2b.securityEncryptionTitle"),
      description: t("b2b.securityEncryptionDesc"),
    },
    {
      icon: Shield,
      title: t("b2b.securityTokenTitle"),
      description: t("b2b.securityTokenDesc"),
    },
    {
      icon: ScrollText,
      title: t("b2b.securityAuditTitle"),
      description: t("b2b.securityAuditDesc"),
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
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span>{t("b2b.heroBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("b2b.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("b2b.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("b2b.ctaPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/docs`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("b2b.ctaSecondary")}
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
                {t("b2b.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("b2b.problemSubtitle")}
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
                {t("b2b.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("b2b.solutionSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {solutions.map((solution) => (
                <div key={solution.title} className="p-10 rounded-2xl bg-card">
                  <solution.icon className="w-10 h-10 text-blue-500 mb-6" />
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
                {t("b2b.capabilitiesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("b2b.capabilitiesSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <div key={capability.title} className="p-10 rounded-2xl bg-card">
                  <capability.icon className="w-10 h-10 text-blue-500 mb-6" />
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
                {t("b2b.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("b2b.architectureSubtitle")}
              </p>
            </div>
            <div className="relative max-w-5xl mx-auto">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {architectureSteps.map((step, i) => (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-blue-500" />
                    </div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      {t("b2b.archStep")} {i + 1}
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
                {t("b2b.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("b2b.useCasesSubtitle")}
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
                {t("b2b.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("b2b.securitySubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                {t("b2b.ctaFinalTitle")}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                {t("b2b.ctaFinalDescription")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("b2b.ctaFinalPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/docs`}>
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    <BookOpen className="h-4 w-4" />
                    {t("b2b.ctaFinalSecondary")}
                  </Button>
                </Link>
              </div>
              <div className="mt-8">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t("b2b.ctaFinalContact")}
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
