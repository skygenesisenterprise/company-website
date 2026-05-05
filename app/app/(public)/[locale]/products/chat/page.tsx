import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Server,
  Globe,
  Network,
  Database,
  Layers,
  Lock,
  CheckCircle2,
  Cloud,
  Home,
  Building2,
  Power,
  Target,
  Zap,
  Activity,
  MessageSquare,
  Smartphone,
  Container,
  Radio,
  Key,
  Users,
  Video,
  Vault,
} from "lucide-react";

export default async function ChatProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const features = [
    {
      icon: Lock,
      title: t("chat.e2eEncryptionTitle"),
      description: t("chat.e2eEncryptionDesc"),
    },
    {
      icon: Smartphone,
      title: t("chat.multiPlatformTitle"),
      description: t("chat.multiPlatformDesc"),
    },
    {
      icon: Container,
      title: t("chat.selfHostingTitle"),
      description: t("chat.selfHostingDesc"),
    },
    {
      icon: Radio,
      title: t("chat.realtimeCommsTitle"),
      description: t("chat.realtimeCommsDesc"),
    },
    {
      icon: Network,
      title: t("chat.p2pReadyTitle"),
      description: t("chat.p2pReadyDesc"),
    },
    {
      icon: Layers,
      title: t("chat.ecosystemIntegrationTitle"),
      description: t("chat.ecosystemIntegrationDesc"),
    },
  ];

  const deploymentModes = [
    {
      icon: Home,
      title: t("chat.dockerDeployTitle"),
      description: t("chat.dockerDeployDesc"),
      useCase: t("chat.selfHostPhilosophyTitle"),
      features: [t("chat.dockerDeployFeature1"), t("chat.dockerDeployFeature2"), t("chat.dockerDeployFeature3")],
    },
    {
      icon: Building2,
      title: t("chat.cloudVsPrivateTitle"),
      description: t("chat.cloudVsPrivateDesc"),
      useCase: t("chat.dataControlTitle"),
      features: [t("chat.dockerDeployFeature1"), t("chat.dockerDeployFeature2"), t("chat.dockerDeployFeature3")],
    },
    {
      icon: Cloud,
      title: t("chat.dataControlTitle"),
      description: t("chat.dataControlDesc"),
      useCase: t("chat.selfHostPhilosophyTitle"),
      features: [t("chat.dockerDeployFeature1"), t("chat.dockerDeployFeature2"), t("chat.dockerDeployFeature3")],
    },
  ];

  const useCases = [
    {
      icon: Building2,
      title: t("chat.useCaseEnterpriseTitle"),
      description: t("chat.useCaseEnterpriseDesc"),
    },
    {
      icon: Users,
      title: t("chat.useCaseRemoteTitle"),
      description: t("chat.useCaseRemoteDesc"),
    },
    {
      icon: Shield,
      title: t("chat.useCasePrivacyTitle"),
      description: t("chat.useCasePrivacyDesc"),
    },
    {
      icon: Database,
      title: t("chat.useCaseDeveloperTitle"),
      description: t("chat.useCaseDeveloperDesc"),
    },
  ];

  const architectureComponents = [
    {
      icon: Smartphone,
      title: t("chat.archClientTitle"),
      description: t("chat.archClientDesc"),
      details: [t("chat.archClientDetail1"), t("chat.archClientDetail2"), t("chat.archClientDetail3")],
    },
    {
      icon: Server,
      title: t("chat.archGatewayTitle"),
      description: t("chat.archGatewayDesc"),
      details: [t("chat.archGatewayDetail1"), t("chat.archGatewayDetail2"), t("chat.archGatewayDetail3")],
    },
    {
      icon: Key,
      title: t("chat.archEncryptionTitle"),
      description: t("chat.archEncryptionDesc"),
      details: [t("chat.archEncryptionDetail1"), t("chat.archEncryptionDetail2"), t("chat.archEncryptionDetail3")],
    },
    {
      icon: Globe,
      title: t("chat.archDeploymentTitle"),
      description: t("chat.archDeploymentDesc"),
      details: [t("chat.archDeploymentDetail1"), t("chat.archDeploymentDetail2"), t("chat.archDeploymentDetail3")],
    },
  ];

  const ecosystemIntegrations = [
    {
      icon: Video,
      title: t("chat.meetIntegrationTitle"),
      description: t("chat.meetIntegrationDesc"),
    },
    {
      icon: Globe,
      title: t("chat.edgeIntegrationTitle"),
      description: t("chat.edgeIntegrationDesc"),
    },
    {
      icon: Users,
      title: t("chat.identityIntegrationTitle"),
      description: t("chat.identityIntegrationDesc"),
    },
    {
      icon: Vault,
      title: t("chat.vaultIntegrationTitle"),
      description: t("chat.vaultIntegrationDesc"),
    },
  ];

  const metrics = [
    {
      icon: Zap,
      value: t("chat.metricLatencyValue"),
      label: t("chat.metricLatencyLabel"),
    },
    {
      icon: Activity,
      value: t("chat.metricUptimeValue"),
      label: t("chat.metricUptimeLabel"),
    },
    {
      icon: MessageSquare,
      value: t("chat.metricMessagesValue"),
      label: t("chat.metricMessagesLabel"),
    },
    {
      icon: Lock,
      value: t("chat.metricEncryptionValue"),
      label: t("chat.metricEncryptionLabel"),
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
                <span>{t("chat.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("chat.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("chat.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("chat.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("chat.contactSales")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-24">
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

        {/* Concept Overview Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground mb-8">
                {t("chat.conceptTitle")}
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t("chat.conceptDesc1")}</p>
                <p>{t("chat.conceptDesc2")}</p>
                <p>{t("chat.conceptDesc3")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("chat.featuresTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("chat.featuresDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="p-10 rounded-2xl bg-card">
                  <feature.icon className="w-10 h-10 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-medium text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("chat.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("chat.architectureDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {architectureComponents.map((component) => (
                <div key={component.title} className="p-10 rounded-2xl bg-card">
                  <component.icon className="w-10 h-10 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-medium text-foreground mb-4">{component.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{component.description}</p>
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
            <div className="mt-12 max-w-3xl mx-auto p-8 rounded-2xl bg-green-500/5 border border-green-500/20">
              <div className="flex items-start gap-4">
                <Power className="w-8 h-8 text-green-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-3">{t("chat.p2pFallbackTitle")}</h4>
                  <p className="text-muted-foreground leading-relaxed">{t("chat.p2pFallbackDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment & Sovereignty Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("chat.deploymentTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("chat.deploymentDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {deploymentModes.map((mode) => (
                <div key={mode.title} className="p-10 rounded-2xl bg-card">
                  <mode.icon className="w-10 h-10 text-green-500 mb-6" />
                  <h3 className="text-2xl font-medium text-foreground mb-4">{mode.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{mode.description}</p>
                  <div className="p-4 rounded-xl bg-muted/50 mb-6">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{t("chat.useCaseLabel")}</span>
                      <br />
                      {mode.useCase}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {mode.features.map((feature) => (
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

        {/* Use Cases Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("chat.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("chat.useCasesDescription")}
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

        {/* Ecosystem Integration Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("chat.ecosystemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("chat.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystemIntegrations.map((integration) => (
                <div key={integration.title} className="p-8 rounded-2xl bg-card text-center">
                  <integration.icon className="w-10 h-10 text-foreground mx-auto mb-6 opacity-70" />
                  <h3 className="text-lg font-medium text-foreground mb-3">{integration.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("chat.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("chat.securityDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("chat.zeroTrustTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("chat.zeroTrustPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("chat.zeroTrustPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("chat.zeroTrustPoint3")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 rounded-2xl bg-green-500/5 border border-green-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("chat.encryptionStandardsTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("chat.encryptionPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("chat.encryptionPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("chat.encryptionPoint3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("chat.comparisonTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("chat.comparisonDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Cloud className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("chat.traditionalMessagingTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("chat.traditionalMessagingPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("chat.traditionalMessagingPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("chat.traditionalMessagingPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("chat.traditionalMessagingPoint4")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 rounded-2xl bg-green-500/5 border border-green-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("chat.aetherChatTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("chat.aetherChatPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("chat.aetherChatPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("chat.aetherChatPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("chat.aetherChatPoint4")}</span>
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
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground mb-6">
                {t("chat.ctaTitle")}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t("chat.ctaDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("chat.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-chat" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("chat.contribute")}
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
