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
  Database,
  Layers,
  Lock,
  CheckCircle2,
  ArrowDown,
  Cloud,
  Home,
  Building2,
  GitBranch,
  Power,
  Target,
  Zap,
  Activity,
  Clock,
  Mail,
  Terminal,
  Code,
  Box,
  Aperture,
  ShieldCheck,
  Users,
} from "lucide-react";

export default async function PlatformMailerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const features = [
    {
      icon: Mail,
      title: t("mailer.mailEngineTitle"),
      description: t("mailer.mailEngineDesc"),
    },
    {
      icon: Code,
      title: t("mailer.apiPlatformTitle"),
      description: t("mailer.apiPlatformDesc"),
    },
    {
      icon: Network,
      title: t("mailer.distributedNodesTitle"),
      description: t("mailer.distributedNodesDesc"),
    },
    {
      icon: Box,
      title: t("mailer.sdkIntegrationsTitle"),
      description: t("mailer.sdkIntegrationsDesc"),
    },
    {
      icon: Globe,
      title: t("mailer.multiPlatformTitle"),
      description: t("mailer.multiPlatformDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("mailer.securityFirstTitle"),
      description: t("mailer.securityFirstDesc"),
    },
  ];

  const deploymentModes = [
    {
      icon: Home,
      title: t("mailer.standaloneTitle"),
      description: t("mailer.standaloneDesc"),
      useCase: t("mailer.standaloneUseCase"),
      features: [t("mailer.standaloneFeature1"), t("mailer.standaloneFeature2"), t("mailer.standaloneFeature3")],
    },
    {
      icon: Building2,
      title: t("mailer.clusterModeTitle"),
      description: t("mailer.clusterModeDesc"),
      useCase: t("mailer.clusterModeUseCase"),
      features: [t("mailer.clusterModeFeature1"), t("mailer.clusterModeFeature2"), t("mailer.clusterModeFeature3")],
    },
    {
      icon: Cloud,
      title: t("mailer.distributedEdgeTitle"),
      description: t("mailer.distributedEdgeDesc"),
      useCase: t("mailer.distributedEdgeUseCase"),
      features: [t("mailer.distributedEdgeFeature1"), t("mailer.distributedEdgeFeature2"), t("mailer.distributedEdgeFeature3")],
    },
  ];

  const useCases = [
    {
      icon: Building2,
      title: t("mailer.useCaseSelfHostedTitle"),
      description: t("mailer.useCaseSelfHostedDesc"),
    },
    {
      icon: Server,
      title: t("mailer.useCaseSaaSTitle"),
      description: t("mailer.useCaseSaaSDesc"),
    },
    {
      icon: Users,
      title: t("mailer.useCaseEnterpriseTitle"),
      description: t("mailer.useCaseEnterpriseDesc"),
    },
    {
      icon: Network,
      title: t("mailer.useCaseDistributedTitle"),
      description: t("mailer.useCaseDistributedDesc"),
    },
  ];

  const architectureComponents = [
    {
      icon: Cpu,
      title: t("mailer.archControlPlaneTitle"),
      description: t("mailer.archControlPlaneDesc"),
      details: [t("mailer.archControlPlaneDetail1"), t("mailer.archControlPlaneDetail2"), t("mailer.archControlPlaneDetail3")],
    },
    {
      icon: Server,
      title: t("mailer.archDataPlaneTitle"),
      description: t("mailer.archDataPlaneDesc"),
      details: [t("mailer.archDataPlaneDetail1"), t("mailer.archDataPlaneDetail2"), t("mailer.archDataPlaneDetail3")],
    },
    {
      icon: GitBranch,
      title: t("mailer.archAccessLayersTitle"),
      description: t("mailer.archAccessLayersDesc"),
      details: [t("mailer.archAccessLayersDetail1"), t("mailer.archAccessLayersDetail2"), t("mailer.archAccessLayersDetail3")],
    },
  ];

  const metrics = [
    {
      icon: Zap,
      value: t("mailer.metricLatencyValue"),
      label: t("mailer.metricLatencyLabel"),
    },
    {
      icon: Activity,
      value: t("mailer.metricUptimeValue"),
      label: t("mailer.metricUptimeLabel"),
    },
    {
      icon: Mail,
      value: t("mailer.metricEmailsValue"),
      label: t("mailer.metricEmailsLabel"),
    },
    {
      icon: Clock,
      value: t("mailer.metricDeliveryValue"),
      label: t("mailer.metricDeliveryLabel"),
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
                <span className="font-medium">{t("mailer.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("mailer.heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("mailer.heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("mailer.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("mailer.deployDocker")}
                </Button>
                <Link href={`/${locale}/docs`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("mailer.viewDocs")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 lg:py-20 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-semibold text-foreground mb-2">
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
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mailer.problemTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mailer.problemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("mailer.problem1Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mailer.problem1Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("mailer.problem2Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mailer.problem2Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("mailer.problem3Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mailer.problem3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mailer.solutionTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mailer.solutionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("mailer.solution1Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mailer.solution1Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("mailer.solution2Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mailer.solution2Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("mailer.solution3Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mailer.solution3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mailer.featuresTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mailer.featuresDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                  <div className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mailer.architectureTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mailer.architectureDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {architectureComponents.map((component) => (
                <div key={component.title} className="p-6 rounded-lg border border-border bg-card">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <component.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{component.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto p-6 rounded-lg border border-green-500/20 bg-green-500/5">
              <div className="flex items-start gap-4">
                <Power className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t("mailer.decoupledUiTitle")}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t("mailer.decoupledUiDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Modes Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mailer.deploymentTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mailer.deploymentDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {deploymentModes.map((mode, index) => (
                <div key={mode.title} className="p-6 rounded-lg border border-border bg-card relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <mode.icon className="w-6 h-6 text-green-400" />
                    </div>
                    {index < deploymentModes.length - 1 && (
                      <ArrowDown className="w-5 h-5 text-muted-foreground lg:hidden" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{mode.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{mode.description}</p>
                  <div className="p-3 rounded bg-muted/50 mb-4">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">{t("mailer.useCaseLabel")}</span>
                      <br />
                      {mode.useCase}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {mode.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
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
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mailer.useCasesTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mailer.useCasesDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                  <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Experience Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mailer.devexTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mailer.devexDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("mailer.dockerFirstTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t("mailer.dockerFirstDesc")}</p>
                <div className="p-4 rounded bg-muted/50 font-mono text-xs text-muted-foreground">
                  <code>docker pull skygenesisenterprise/aether-mailer</code>
                </div>
              </div>
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("mailer.cliSdkTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t("mailer.cliSdkDesc")}</p>
                <div className="p-4 rounded bg-muted/50 font-mono text-xs text-muted-foreground">
                  <code>mailer send --to user@example.com</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Integration Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mailer.ecosystemTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mailer.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Aperture className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("mailer.edgeIntegrationTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mailer.edgeIntegrationDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("mailer.nodeIntegrationTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mailer.nodeIntegrationDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("mailer.vaultIntegrationTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mailer.vaultIntegrationDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mailer.comparisonTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mailer.comparisonDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Cloud className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("mailer.traditionalMailerTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("mailer.traditionalMailerPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("mailer.traditionalMailerPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("mailer.traditionalMailerPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("mailer.traditionalMailerPoint4")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("mailer.aetherMailerTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("mailer.aetherMailerPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("mailer.aetherMailerPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("mailer.aetherMailerPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("mailer.aetherMailerPoint4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mailer.ctaTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mailer.ctaDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("mailer.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/docs`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("mailer.exploreDocs")}
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
