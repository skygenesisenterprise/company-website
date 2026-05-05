import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Activity,
  AlertTriangle,
  Server,
  Globe,
  Clock,
  Zap,
  CheckCircle2,
  Cloud,
  Home,
  Building2,
  GitBranch,
  Layers,
  Target,
  Shield,
  Cpu,
  Database,
} from "lucide-react";

export default async function PlatformStatusPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const features = [
    {
      icon: Activity,
      title: t("status.uptimeMonitoringTitle"),
      description: t("status.uptimeMonitoringDesc"),
    },
    {
      icon: AlertTriangle,
      title: t("status.incidentManagementTitle"),
      description: t("status.incidentManagementDesc"),
    },
    {
      icon: Server,
      title: t("status.statusPagesTitle"),
      description: t("status.statusPagesDesc"),
    },
    {
      icon: Clock,
      title: t("status.alertingSystemTitle"),
      description: t("status.alertingSystemDesc"),
    },
    {
      icon: Globe,
      title: t("status.multiRegionChecksTitle"),
      description: t("status.multiRegionChecksDesc"),
    },
    {
      icon: Shield,
      title: t("status.selfHostingTitle"),
      description: t("status.selfHostingDesc"),
    },
  ];

  const deploymentModes = [
    {
      icon: Home,
      title: t("status.singleNodeTitle"),
      description: t("status.singleNodeDesc"),
      useCase: t("status.singleNodeUseCase"),
      features: [t("status.singleNodeFeature1"), t("status.singleNodeFeature2"), t("status.singleNodeFeature3")],
    },
    {
      icon: Building2,
      title: t("status.clusterModeTitle"),
      description: t("status.clusterModeDesc"),
      useCase: t("status.clusterModeUseCase"),
      features: [t("status.clusterModeFeature1"), t("status.clusterModeFeature2"), t("status.clusterModeFeature3")],
    },
    {
      icon: Cloud,
      title: t("status.distributedEdgeTitle"),
      description: t("status.distributedEdgeDesc"),
      useCase: t("status.distributedEdgeUseCase"),
      features: [t("status.distributedEdgeFeature1"), t("status.distributedEdgeFeature2"), t("status.distributedEdgeFeature3")],
    },
  ];

  const useCases = [
    {
      icon: Building2,
      title: t("status.useCaseEnterpriseTitle"),
      description: t("status.useCaseEnterpriseDesc"),
    },
    {
      icon: Cloud,
      title: t("status.useCaseSaaSProvidersTitle"),
      description: t("status.useCaseSaaSProvidersDesc"),
    },
    {
      icon: Server,
      title: t("status.useCaseInternalDevOpsTitle"),
      description: t("status.useCaseInternalDevOpsDesc"),
    },
    {
      icon: CheckCircle2,
      title: t("status.useCaseComplianceTitle"),
      description: t("status.useCaseComplianceDesc"),
    },
  ];

  const architectureComponents = [
    {
      icon: Cpu,
      title: t("status.archControlPlaneTitle"),
      description: t("status.archControlPlaneDesc"),
      details: [t("status.archControlPlaneDetail1"), t("status.archControlPlaneDetail2"), t("status.archControlPlaneDetail3")],
    },
    {
      icon: Server,
      title: t("status.archDataPlaneTitle"),
      description: t("status.archDataPlaneDesc"),
      details: [t("status.archDataPlaneDetail1"), t("status.archDataPlaneDetail2"), t("status.archDataPlaneDetail3")],
    },
    {
      icon: GitBranch,
      title: t("status.archEventPipelineTitle"),
      description: t("status.archEventPipelineDesc"),
      details: [t("status.archEventPipelineDetail1"), t("status.archEventPipelineDetail2"), t("status.archEventPipelineDetail3")],
    },
  ];

  const metrics = [
    {
      value: t("status.metricLatencyValue"),
      label: t("status.metricLatencyLabel"),
    },
    {
      value: t("status.metricUptimeValue"),
      label: t("status.metricUptimeLabel"),
    },
    {
      value: t("status.metricRegionsValue"),
      label: t("status.metricRegionsLabel"),
    },
    {
      value: t("status.metricSyncValue"),
      label: t("status.metricSyncLabel"),
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
                <span>{t("status.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("status.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("status.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("status.deploySelfHosted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("status.contactSales")}
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
                {t("status.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("status.problemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Database className="w-10 h-10 text-red-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("status.problem1Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("status.problem1Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Cloud className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("status.problem2Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("status.problem2Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Target className="w-10 h-10 text-yellow-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("status.problem3Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("status.problem3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("status.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("status.solutionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Cpu className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("status.solution1Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("status.solution1Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Globe className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("status.solution2Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("status.solution2Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Layers className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("status.solution3Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("status.solution3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("status.featuresTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("status.featuresDescription")}
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
                {t("status.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("status.architectureDescription")}
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
                <Building2 className="w-10 h-10 text-blue-500 mb-6" />
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-4">{t("status.offlineResilienceTitle")}</h4>
                  <p className="text-muted-foreground leading-relaxed">{t("status.offlineResilienceDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Modes Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("status.deploymentTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("status.deploymentDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {deploymentModes.map((mode) => (
                <div key={mode.title} className="p-10 rounded-2xl bg-card">
                  <mode.icon className="w-10 h-10 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-medium text-foreground mb-4">{mode.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{mode.description}</p>
                  <div className="p-4 rounded-2xl bg-muted/20 mb-6">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{t("status.useCaseLabel")}</span>
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
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("status.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("status.useCasesDescription")}
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

        {/* Ecosystem Integration Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("status.ecosystemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("status.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 rounded-2xl bg-card">
                <Globe className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("status.edgeIntegrationTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("status.edgeIntegrationDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Shield className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("status.identityIntegrationTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("status.identityIntegrationDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Database className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("status.bankIntegrationTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("status.bankIntegrationDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Layers className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("status.unifiedInfraTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("status.unifiedInfraDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("status.comparisonTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("status.comparisonDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Cloud className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-6">{t("status.traditionalMonitoringTitle")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0 opacity-50" />
                    <span>{t("status.traditionalMonitoringPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0 opacity-50" />
                    <span>{t("status.traditionalMonitoringPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0 opacity-50" />
                    <span>{t("status.traditionalMonitoringPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0 opacity-50" />
                    <span>{t("status.traditionalMonitoringPoint4")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Activity className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-6">{t("status.aetherStatusTitle")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("status.aetherStatusPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("status.aetherStatusPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("status.aetherStatusPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("status.aetherStatusPoint4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("status.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("status.ctaDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("status.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-status" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("status.contribute")}
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
