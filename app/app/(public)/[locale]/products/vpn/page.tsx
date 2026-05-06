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
  Cpu,
  Network,
  Layers,
  Lock,
  CheckCircle2,
  ArrowDown,
  Cloud,
  Home,
  Building2,
  GitBranch,
  Zap,
  Activity,
  Clock,
  Terminal,
  Laptop,
  Smartphone,
  Key,
  Eye,
  RefreshCw,
  Scale,
} from "lucide-react";

export default async function PlatformVpnPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const features = [
    {
      icon: Lock,
      title: t("vpn.zeroTrustTitle"),
      description: t("vpn.zeroTrustDesc"),
    },
    {
      icon: Zap,
      title: t("vpn.wireguardTitle"),
      description: t("vpn.wireguardDesc"),
    },
    {
      icon: Cloud,
      title: t("vpn.flexibleDeployTitle"),
      description: t("vpn.flexibleDeployDesc"),
    },
    {
      icon: Eye,
      title: t("vpn.openSourceTitle"),
      description: t("vpn.openSourceDesc"),
    },
    {
      icon: Terminal,
      title: t("vpn.cliApiTitle"),
      description: t("vpn.cliApiDesc"),
    },
    {
      icon: Laptop,
      title: t("vpn.crossPlatformTitle"),
      description: t("vpn.crossPlatformDesc"),
    },
  ];

  const architectureComponents = [
    {
      icon: Cpu,
      title: t("vpn.archControlTitle"),
      description: t("vpn.archControlDesc"),
      details: [t("vpn.archControlDetail1"), t("vpn.archControlDetail2"), t("vpn.archControlDetail3")],
    },
    {
      icon: Smartphone,
      title: t("vpn.archClientsTitle"),
      description: t("vpn.archClientsDesc"),
      details: [t("vpn.archClientsDetail1"), t("vpn.archClientsDetail2"), t("vpn.archClientsDetail3")],
    },
    {
      icon: Network,
      title: t("vpn.archMeshTitle"),
      description: t("vpn.archMeshDesc"),
      details: [t("vpn.archMeshDetail1"), t("vpn.archMeshDetail2"), t("vpn.archMeshDetail3")],
    },
  ];

  const deploymentModes = [
    {
      icon: Home,
      title: t("vpn.selfHostedTitle"),
      description: t("vpn.selfHostedDesc"),
      useCase: t("vpn.selfHostedUseCase"),
      features: [t("vpn.selfHostedFeature1"), t("vpn.selfHostedFeature2"), t("vpn.selfHostedFeature3")],
    },
    {
      icon: Building2,
      title: t("vpn.cloudManagedTitle"),
      description: t("vpn.cloudManagedDesc"),
      useCase: t("vpn.cloudManagedUseCase"),
      features: [t("vpn.cloudManagedFeature1"), t("vpn.cloudManagedFeature2"), t("vpn.cloudManagedFeature3")],
    },
    {
      icon: Layers,
      title: t("vpn.hybridTitle"),
      description: t("vpn.hybridDesc"),
      useCase: t("vpn.hybridUseCase"),
      features: [t("vpn.hybridFeature1"), t("vpn.hybridFeature2"), t("vpn.hybridFeature3")],
    },
  ];

  const useCases = [
    {
      icon: Building2,
      title: t("vpn.useCaseRemoteTitle"),
      description: t("vpn.useCaseRemoteDesc"),
    },
    {
      icon: Server,
      title: t("vpn.useCaseInfraTitle"),
      description: t("vpn.useCaseInfraDesc"),
    },
    {
      icon: Cloud,
      title: t("vpn.useCaseMultiCloudTitle"),
      description: t("vpn.useCaseMultiCloudDesc"),
    },
    {
      icon: Lock,
      title: t("vpn.useCasePrivacyTitle"),
      description: t("vpn.useCasePrivacyDesc"),
    },
    {
      icon: Globe,
      title: t("vpn.useCaseCorporateTitle"),
      description: t("vpn.useCaseCorporateDesc"),
    },
  ];

  const metrics = [
    {
      icon: Zap,
      value: t("vpn.metricSpeedValue"),
      label: t("vpn.metricSpeedLabel"),
    },
    {
      icon: Activity,
      value: t("vpn.metricUptimeValue"),
      label: t("vpn.metricUptimeLabel"),
    },
    {
      icon: Network,
      value: t("vpn.metricNodesValue"),
      label: t("vpn.metricNodesLabel"),
    },
    {
      icon: Clock,
      value: t("vpn.metricLatencyValue"),
      label: t("vpn.metricLatencyLabel"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header locale={locale as import("@/lib/locale").Locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium">{t("vpn.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("vpn.heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("vpn.heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("vpn.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("vpn.contactSales")}
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
                  <div className="text-4xl lg:text-5xl font-normal text-foreground">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vpn.overviewTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vpn.overviewDesc1")}
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vpn.featuresTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vpn.featuresDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="p-8 rounded-2xl bg-card">
                  <feature.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
                {t("vpn.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vpn.architectureDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto">
              {architectureComponents.map((component) => (
                <div key={component.title} className="text-center">
                  <component.icon className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-normal text-foreground mb-2">{component.title}</h3>
                  <p className="text-xs text-muted-foreground">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vpn.openSourceSectionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vpn.openSourceSectionDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("vpn.transparencyTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vpn.transparencyPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vpn.transparencyPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vpn.transparencyPoint3")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Home className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("vpn.selfHostingTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vpn.selfHostingPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vpn.selfHostingPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vpn.selfHostingPoint3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Ready Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vpn.enterpriseTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vpn.enterpriseDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-card">
                <Scale className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("vpn.entScalabilityTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("vpn.entScalabilityDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Building2 className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("vpn.entTeamTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("vpn.entTeamDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Lock className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("vpn.entAclTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("vpn.entAclDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Activity className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("vpn.entObservabilityTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("vpn.entObservabilityDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <GitBranch className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("vpn.entIntegrationTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("vpn.entIntegrationDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Shield className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("vpn.entComplianceTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("vpn.entComplianceDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CLI & Automation Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vpn.cliTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vpn.cliDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("vpn.cliFullTitle")}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{t("vpn.cliFullDesc")}</p>
                <div className="p-4 rounded-xl bg-muted/50 font-mono text-xs text-muted-foreground">
                  <div className="mb-2"># Connect to a network</div>
                  <div className="text-green-400">avpn connect &lt;network-name&gt;</div>
                  <div className="mt-4 mb-2"># List available networks</div>
                  <div className="text-green-400">avpn networks list</div>
                  <div className="mt-4 mb-2"># Check connection status</div>
                  <div className="text-green-400">avpn status</div>
                </div>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <RefreshCw className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("vpn.automationTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vpn.automationPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vpn.automationPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vpn.automationPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vpn.automationPoint4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Modes Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vpn.deploymentTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vpn.deploymentDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deploymentModes.map((mode) => (
                <div key={mode.title} className="p-8 rounded-2xl bg-card">
                  <mode.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{mode.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{mode.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vpn.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vpn.useCasesDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Ecosystem Integration Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vpn.ecosystemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vpn.ecosystemDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-card">
                <Globe className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("vpn.ecoEdgeTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("vpn.ecoEdgeDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Layers className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("vpn.ecoOfficeTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("vpn.ecoOfficeDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Key className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("vpn.ecoApiTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("vpn.ecoApiDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vpn.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vpn.ctaDesc")}
              </p>
            </div>
            <div className="text-center">
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("vpn.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-vpn" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("vpn.viewGithub")}
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
