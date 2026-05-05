import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Key,
  Lock,
  Users,
  Server,
  Terminal,
  Fingerprint,
  Network,
  CheckCircle2,
  ArrowRight,
  Globe,
  Cpu,
  Layers,
  Eye,
  Code,
  Box,
  Database,
  Target,
} from "lucide-react";

export default async function PlatformIdentityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const features = [
    {
      icon: Key,
      title: t("identity.unifiedAuthTitle"),
      description: t("identity.unifiedAuthDesc"),
    },
    {
      icon: Lock,
      title: t("identity.fineGrainedAccessTitle"),
      description: t("identity.fineGrainedAccessDesc"),
    },
    {
      icon: Fingerprint,
      title: t("identity.portabilityTitle"),
      description: t("identity.portabilityDesc"),
    },
    {
      icon: Terminal,
      title: t("identity.cliFirstTitle"),
      description: t("identity.cliFirstDesc"),
    },
    {
      icon: Fingerprint,
      title: t("identity.hardwareAwareTitle"),
      description: t("identity.hardwareAwareDesc"),
    },
    {
      icon: Eye,
      title: t("identity.auditTrackingTitle"),
      description: t("identity.auditTrackingDesc"),
    },
  ];

  const authMethods = [
    {
      icon: Fingerprint,
      title: t("identity.passwordlessTitle"),
      description: t("identity.passwordlessDesc"),
      features: [t("identity.passwordlessFeature1"), t("identity.passwordlessFeature2"), t("identity.passwordlessFeature3")],
    },
    {
      icon: Shield,
      title: t("identity.mfaTitle"),
      description: t("identity.mfaDesc"),
      features: [t("identity.mfaFeature1"), t("identity.mfaFeature2"), t("identity.mfaFeature3")],
    },
    {
      icon: Shield,
      title: t("identity.ssoTitle"),
      description: t("identity.ssoDesc"),
      features: [t("identity.ssoFeature1"), t("identity.ssoFeature2"), t("identity.ssoFeature3")],
    },
  ];

  const useCases = [
    {
      icon: Users,
      title: t("identity.useCaseEnterpriseTitle"),
      description: t("identity.useCaseEnterpriseDesc"),
    },
    {
      icon: Server,
      title: t("identity.useCaseInfraTitle"),
      description: t("identity.useCaseInfraDesc"),
    },
    {
      icon: Box,
      title: t("identity.useCaseConvergenceTitle"),
      description: t("identity.useCaseConvergenceDesc"),
    },
    {
      icon: Code,
      title: t("identity.useCaseDevOpsTitle"),
      description: t("identity.useCaseDevOpsDesc"),
    },
  ];

  const architectureComponents = [
    {
      icon: Shield,
      title: t("identity.archCoreTitle"),
      description: t("identity.archCoreDesc"),
      details: [t("identity.archCoreDetail1"), t("identity.archCoreDetail2"), t("identity.archCoreDetail3")],
    },
    {
      icon: Network,
      title: t("identity.archDistributionTitle"),
      description: t("identity.archDistributionDesc"),
      details: [t("identity.archDistributionDetail1"), t("identity.archDistributionDetail2"), t("identity.archDistributionDetail3")],
    },
    {
      icon: Layers,
      title: t("identity.archIntegrationTitle"),
      description: t("identity.archIntegrationDesc"),
      details: [t("identity.archIntegrationDetail1"), t("identity.archIntegrationDetail2"), t("identity.archIntegrationDetail3")],
    },
  ];

  const metrics = [
    {
      value: t("identity.metricAuthValue"),
      label: t("identity.metricAuthLabel"),
    },
    {
      value: t("identity.metricUptimeValue"),
      label: t("identity.metricUptimeLabel"),
    },
    {
      value: t("identity.metricIdentityValue"),
      label: t("identity.metricIdentityLabel"),
    },
    {
      value: t("identity.metricLatencyValue"),
      label: t("identity.metricLatencyLabel"),
    },
  ];

  const cliCommands = [
    {
      command: "identity login",
      description: t("identity.cliLoginDesc"),
    },
    {
      command: "identity whoami",
      description: t("identity.cliWhoamiDesc"),
    },
    {
      command: "identity access grant",
      description: t("identity.cliAccessGrantDesc"),
    },
    {
      command: "identity device register",
      description: t("identity.cliDeviceRegisterDesc"),
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
                <span>{t("identity.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("identity.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("identity.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("identity.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("identity.contactSales")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-4xl lg:text-5xl font-normal text-foreground mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("identity.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("identity.problemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Database className="w-10 h-10 text-red-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("identity.problem1Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("identity.problem1Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Layers className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("identity.problem2Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("identity.problem2Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Lock className="w-10 h-10 text-yellow-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("identity.problem3Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("identity.problem3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("identity.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("identity.solutionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Shield className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("identity.solution1Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("identity.solution1Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Network className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("identity.solution2Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("identity.solution2Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Cpu className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("identity.solution3Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("identity.solution3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("identity.featuresTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("identity.featuresDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="p-10 rounded-2xl bg-card">
                  <feature.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("identity.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("identity.architectureDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {architectureComponents.map((component) => (
                <div key={component.title} className="p-10 rounded-2xl bg-card">
                  <component.icon className="w-10 h-10 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-medium text-foreground mb-4">{component.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{component.description}</p>
                  <ul className="space-y-3">
                    {component.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto p-10 rounded-2xl bg-card">
              <div className="flex items-start gap-4">
                <Target className="w-10 h-10 text-blue-500 mb-6" />
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-4">{t("identity.trustLayerTitle")}</h4>
                  <p className="text-muted-foreground leading-relaxed">{t("identity.trustLayerDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication Methods Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("identity.authMethodsTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("identity.authMethodsDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {authMethods.map((method) => (
                <div key={method.title} className="p-10 rounded-2xl bg-card">
                  <method.icon className="w-10 h-10 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-medium text-foreground mb-4">{method.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{method.description}</p>
                  <ul className="space-y-3">
                    {method.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLI Experience Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("identity.cliTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("identity.cliDescription")}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl bg-card overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-muted-foreground ml-2">terminal</span>
                </div>
                <div className="p-10 font-mono text-sm">
                  {cliCommands.map((cmd, index) => (
                    <div key={cmd.command} className="mb-6 last:mb-0">
                      <div className="flex items-start gap-3">
                        <span className="text-green-400 shrink-0">$</span>
                        <div className="flex-1">
                          <code className="text-foreground">{cmd.command}</code>
                          <p className="text-muted-foreground mt-2 text-xs">{cmd.description}</p>
                        </div>
                      </div>
                      {index < cliCommands.length - 1 && (
                        <div className="border-t border-border mt-6 pt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Integration Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("identity.ecosystemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("identity.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card text-center">
                <Globe className="w-10 h-10 text-green-500 mb-6 mx-auto" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("identity.edgeIntegrationTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("identity.edgeIntegrationDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card text-center">
                <Database className="w-10 h-10 text-purple-500 mb-6 mx-auto" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("identity.vaultIntegrationTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("identity.vaultIntegrationDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card text-center">
                <Cpu className="w-10 h-10 text-orange-500 mb-6 mx-auto" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("identity.hardwareIntegrationTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("identity.hardwareIntegrationDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("identity.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("identity.useCasesDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="p-8 rounded-2xl bg-card">
                  <useCase.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Trust Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("identity.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("identity.securityDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Shield className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("identity.zeroTrustTitle")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("identity.zeroTrustPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("identity.zeroTrustPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("identity.zeroTrustPoint3")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Lock className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("identity.encryptionTitle")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("identity.encryptionPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("identity.encryptionPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("identity.encryptionPoint3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("identity.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("identity.ctaDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("identity.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-identity" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("identity.contribute")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
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
