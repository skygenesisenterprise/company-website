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
  CheckCircle2,
  Zap,
  Layers,
  Database,
  Globe,
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
  ShoppingCart,
  Store,
  BarChart3,
  Truck,
  CreditCard,
  Percent,
} from "lucide-react";

export default async function RetailSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const problems = [
    {
      icon: Users,
      title: t("retail.problemScaleTitle"),
      description: t("retail.problemScaleDesc"),
    },
    {
      icon: AlertTriangle,
      title: t("retail.problemFraudTitle"),
      description: t("retail.problemFraudDesc"),
    },
    {
      icon: Layers,
      title: t("retail.problemOmnichannelTitle"),
      description: t("retail.problemOmnichannelDesc"),
    },
    {
      icon: Eye,
      title: t("retail.problemFrictionTitle"),
      description: t("retail.problemFrictionDesc"),
    },
  ];

  const solutions = [
    {
      icon: Fingerprint,
      title: t("retail.solutionPasswordlessTitle"),
      description: t("retail.solutionPasswordlessDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("retail.solutionFraudTitle"),
      description: t("retail.solutionFraudDesc"),
    },
    {
      icon: Layers,
      title: t("retail.solutionUnifiedTitle"),
      description: t("retail.solutionUnifiedDesc"),
    },
    {
      icon: Zap,
      title: t("retail.solutionCheckoutTitle"),
      description: t("retail.solutionCheckoutDesc"),
    },
    {
      icon: FileCheck,
      title: t("retail.solutionLoyaltyTitle"),
      description: t("retail.solutionLoyaltyDesc"),
    },
  ];

  const capabilities = [
    {
      icon: Users,
      title: t("retail.capabilitySocialTitle"),
      description: t("retail.capabilitySocialDesc"),
    },
    {
      icon: Shield,
      title: t("retail.capabilityMfaTitle"),
      description: t("retail.capabilityMfaDesc"),
    },
    {
      icon: Activity,
      title: t("retail.capabilityAnalyticsTitle"),
      description: t("retail.capabilityAnalyticsDesc"),
    },
    {
      icon: Zap,
      title: t("retail.capabilityApiTitle"),
      description: t("retail.capabilityApiDesc"),
    },
    {
      icon: ScrollText,
      title: t("retail.capabilityConsentTitle"),
      description: t("retail.capabilityConsentDesc"),
    },
  ];

  const architectureSteps = [
    {
      icon: Smartphone,
      title: t("retail.archCustomerTitle"),
      description: t("retail.archCustomerDesc"),
    },
    {
      icon: Layers,
      title: t("retail.archAuthLayerTitle"),
      description: t("retail.archAuthLayerDesc"),
    },
    {
      icon: Database,
      title: t("retail.archIdentityTitle"),
      description: t("retail.archIdentityDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("retail.archPolicyTitle"),
      description: t("retail.archPolicyDesc"),
    },
  ];

  const useCases = [
    {
      icon: ShoppingCart,
      title: t("retail.useCaseEcommerceTitle"),
      description: t("retail.useCaseEcommerceDesc"),
    },
    {
      icon: Store,
      title: t("retail.useCaseStoresTitle"),
      description: t("retail.useCaseStoresDesc"),
    },
    {
      icon: Truck,
      title: t("retail.useCaseMarketplaceTitle"),
      description: t("retail.useCaseMarketplaceDesc"),
    },
    {
      icon: Percent,
      title: t("retail.useCaseLoyaltyTitle"),
      description: t("retail.useCaseLoyaltyDesc"),
    },
  ];

  const securityItems = [
    {
      icon: FileCheck,
      title: t("retail.securityGdprTitle"),
      description: t("retail.securityGdprDesc"),
    },
    {
      icon: Lock,
      title: t("retail.securityEncryptionTitle"),
      description: t("retail.securityEncryptionDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("retail.securityFraudTitle"),
      description: t("retail.securityFraudDesc"),
    },
    {
      icon: ScrollText,
      title: t("retail.securityAuditTitle"),
      description: t("retail.securityAuditDesc"),
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
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                <span>{t("retail.heroBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("retail.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("retail.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("retail.ctaPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com/">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("retail.ctaSecondary")}
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
                {t("retail.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("retail.problemSubtitle")}
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
                {t("retail.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("retail.solutionSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {solutions.map((solution) => (
                <div key={solution.title} className="p-10 rounded-2xl bg-card">
                  <solution.icon className="w-10 h-10 text-violet-500 mb-6" />
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
                {t("retail.capabilitiesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("retail.capabilitiesSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <div key={capability.title} className="p-10 rounded-2xl bg-card">
                  <capability.icon className="w-10 h-10 text-violet-500 mb-6" />
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
                {t("retail.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("retail.architectureSubtitle")}
              </p>
            </div>
            <div className="relative max-w-5xl mx-auto">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {architectureSteps.map((step, i) => (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-violet-500" />
                    </div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      {t("retail.archStep")} {i + 1}
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
                {t("retail.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("retail.useCasesSubtitle")}
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
                {t("retail.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("retail.securitySubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityItems.map((item) => (
                <div key={item.title} className="p-8 rounded-2xl bg-card">
                  <item.icon className="w-10 h-10 text-violet-500 mb-6" />
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
                {t("retail.ctaFinalTitle")}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                {t("retail.ctaFinalDescription")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("retail.ctaFinalPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com">
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    <BookOpen className="h-4 w-4" />
                    {t("retail.ctaFinalSecondary")}
                  </Button>
                </Link>
              </div>
              <div className="mt-8">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t("retail.ctaFinalContact")}
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
