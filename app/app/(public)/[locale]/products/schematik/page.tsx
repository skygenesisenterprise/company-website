import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CircuitBoard,
  Cpu,
  Globe,
  Layers,
  Lock,
  CheckCircle2,
  ArrowDown,
  Cloud,
  Home,
  Building2,
  RefreshCw,
  Target,
  Activity,
  Clock,
  PenTool,
  Sparkles,
  Users,
  Workflow,
  Box,
  Settings,
  Wrench,
  Gauge,
  GaugeCircle,
} from "lucide-react";

export default async function PlatformSchematikPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const features = [
    {
      icon: Sparkles,
      title: t("schematik.aiSchematicTitle"),
      description: t("schematik.aiSchematicDesc"),
    },
    {
      icon: Users,
      title: t("schematik.realtimeCollabTitle"),
      description: t("schematik.realtimeCollabDesc"),
    },
    {
      icon: Workflow,
      title: t("schematik.modularComponentsTitle"),
      description: t("schematik.modularComponentsDesc"),
    },
    {
      icon: PenTool,
      title: t("schematik.intelligentRoutingTitle"),
      description: t("schematik.intelligentRoutingDesc"),
    },
    {
      icon: Cloud,
      title: t("schematik.cloudWorkspaceTitle"),
      description: t("schematik.cloudWorkspaceDesc"),
    },
    {
      icon: Gauge,
      title: t("schematik.performanceMetricsTitle"),
      description: t("schematik.performanceMetricsDesc"),
    },
  ];

  const solutionCards = [
    {
      icon: CircuitBoard,
      title: t("schematik.solution1Title"),
      description: t("schematik.solution1Desc"),
    },
    {
      icon: Users,
      title: t("schematik.solution2Title"),
      description: t("schematik.solution2Desc"),
    },
    {
      icon: Layers,
      title: t("schematik.solution3Title"),
      description: t("schematik.solution3Desc"),
    },
  ];

  const useCases = [
    {
      icon: Cpu,
      title: t("schematik.useCaseElectricalTitle"),
      description: t("schematik.useCaseElectricalDesc"),
    },
    {
      icon: Wrench,
      title: t("schematik.useCaseMechanicalTitle"),
      description: t("schematik.useCaseMechanicalDesc"),
    },
    {
      icon: Building2,
      title: t("schematik.useCaseIndustrialTitle"),
      description: t("schematik.useCaseIndustrialDesc"),
    },
    {
      icon: Globe,
      title: t("schematik.useCaseInfrastructureTitle"),
      description: t("schematik.useCaseInfrastructureDesc"),
    },
  ];

  const architectureComponents = [
    {
      icon: Sparkles,
      title: t("schematik.archAIEngineTitle"),
      description: t("schematik.archAIEngineDesc"),
      details: [t("schematik.archAIEngineDetail1"), t("schematik.archAIEngineDetail2"), t("schematik.archAIEngineDetail3")],
    },
    {
      icon: Box,
      title: t("schematik.archComponentLibTitle"),
      description: t("schematik.archComponentLibDesc"),
      details: [t("schematik.archComponentLibDetail1"), t("schematik.archComponentLibDetail2"), t("schematik.archComponentLibDetail3")],
    },
    {
      icon: Cloud,
      title: t("schematik.archCloudSyncTitle"),
      description: t("schematik.archCloudSyncDesc"),
      details: [t("schematik.archCloudSyncDetail1"), t("schematik.archCloudSyncDetail2"), t("schematik.archCloudSyncDetail3")],
    },
  ];

  const deploymentModes = [
    {
      icon: Home,
      title: t("schematik.localTitle"),
      description: t("schematik.localDesc"),
      useCase: t("schematik.localUseCase"),
      features: [t("schematik.localFeature1"), t("schematik.localFeature2"), t("schematik.localFeature3")],
    },
    {
      icon: Building2,
      title: t("schematik.teamTitle"),
      description: t("schematik.teamDesc"),
      useCase: t("schematik.teamUseCase"),
      features: [t("schematik.teamFeature1"), t("schematik.teamFeature2"), t("schematik.teamFeature3")],
    },
    {
      icon: Cloud,
      title: t("schematik.enterpriseTitle"),
      description: t("schematik.enterpriseDesc"),
      useCase: t("schematik.enterpriseUseCase"),
      features: [t("schematik.enterpriseFeature1"), t("schematik.enterpriseFeature2"), t("schematik.enterpriseFeature3")],
    },
  ];

  const metrics = [
    {
      icon: GaugeCircle,
      value: t("schematik.metricSpeedValue"),
      label: t("schematik.metricSpeedLabel"),
    },
    {
      icon: RefreshCw,
      value: t("schematik.metricSyncValue"),
      label: t("schematik.metricSyncLabel"),
    },
    {
      icon: Layers,
      value: t("schematik.metricComponentsValue"),
      label: t("schematik.metricComponentsLabel"),
    },
    {
      icon: Clock,
      value: t("schematik.metricDeployValue"),
      label: t("schematik.metricDeployLabel"),
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
                <span>{t("schematik.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("schematik.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("schematik.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base">
                  {t("schematik.startDesigning")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("schematik.requestAccess")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-blue-400" />
                  </div>
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
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("schematik.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("schematik.problemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <CircuitBoard className="w-10 h-10 text-red-500 mb-6" />
                <h3 className="text-2xl font-medium text-foreground mb-4">{t("schematik.problem1Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("schematik.problem1Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Users className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-2xl font-medium text-foreground mb-4">{t("schematik.problem2Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("schematik.problem2Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Activity className="w-10 h-10 text-yellow-500 mb-6" />
                <h3 className="text-2xl font-medium text-foreground mb-4">{t("schematik.problem3Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("schematik.problem3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("schematik.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("schematik.solutionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card border border-blue-500/20">
                <CircuitBoard className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-2xl font-medium text-foreground mb-4">{t("schematik.solution1Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("schematik.solution1Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card border border-blue-500/20">
                <Globe className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-2xl font-medium text-foreground mb-4">{t("schematik.solution2Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("schematik.solution2Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card border border-blue-500/20">
                <Layers className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-2xl font-medium text-foreground mb-4">{t("schematik.solution3Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("schematik.solution3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("schematik.featuresTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("schematik.featuresDescription")}
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
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("schematik.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("schematik.architectureDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {architectureComponents.map((component) => (
                <div key={component.title} className="p-10 rounded-2xl bg-card">
                  <component.icon className="w-10 h-10 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-medium text-foreground mb-4">{component.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Modes Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("schematik.deploymentTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("schematik.deploymentDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {deploymentModes.map((mode, index) => (
                <div key={mode.title} className="p-10 rounded-2xl bg-card relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <mode.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    {index < deploymentModes.length - 1 && (
                      <ArrowDown className="w-5 h-5 text-muted-foreground lg:hidden" />
                    )}
                  </div>
                  <h3 className="text-2xl font-medium text-foreground mb-3">{mode.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{mode.description}</p>
                  <div className="p-3 rounded bg-muted/50 mb-4">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">{t("schematik.useCaseLabel")}</span>
                      <br />
                      {mode.useCase}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {mode.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {index < deploymentModes.length - 1 && (
                    <ArrowDown className="w-5 h-5 text-muted-foreground mx-auto mt-6 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("schematik.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("schematik.useCasesDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="p-10 rounded-2xl bg-card">
                  <useCase.icon className="w-10 h-10 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-medium text-foreground mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aether Edge Integration Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("schematik.ecosystemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("schematik.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Globe className="w-10 h-10 text-green-500 mb-6" />
                <h3 className="text-2xl font-medium text-foreground mb-4">{t("schematik.ecoEdgeTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("schematik.ecoEdgeDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Lock className="w-10 h-10 text-purple-500 mb-6" />
                <h3 className="text-2xl font-medium text-foreground mb-4">{t("schematik.ecoIdentityTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("schematik.ecoIdentityDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Settings className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-2xl font-medium text-foreground mb-4">{t("schematik.ecoVaultTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("schematik.ecoVaultDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("schematik.comparisonTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("schematik.comparisonDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <CircuitBoard className="w-8 h-8 text-orange-400" />
                  <h3 className="text-2xl font-medium text-foreground">{t("schematik.traditionalCadTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("schematik.traditionalCadPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("schematik.traditionalCadPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("schematik.traditionalCadPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("schematik.traditionalCadPoint4")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 rounded-2xl bg-card border border-blue-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-medium text-foreground">{t("schematik.aetherSchematikTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{t("schematik.aetherSchematikPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{t("schematik.aetherSchematikPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{t("schematik.aetherSchematikPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{t("schematik.aetherSchematikPoint4")}</span>
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
                {t("schematik.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("schematik.ctaDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base">
                  {t("schematik.startDesigning")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("schematik.contactSales")}
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