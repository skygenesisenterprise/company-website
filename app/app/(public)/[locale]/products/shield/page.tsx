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
  Scale,
  Target,
  Zap,
  Activity,
  Clock,
  Eye,
  Key,
  AlertTriangle,
} from "lucide-react";

export default async function PlatformShieldPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const features = [
    {
      icon: Network,
      title: t("shield.intelligentTrafficTitle"),
      description: t("shield.intelligentTrafficDesc"),
    },
    {
      icon: Eye,
      title: t("shield.realTimeObservabilityTitle"),
      description: t("shield.realTimeObservabilityDesc"),
    },
    {
      icon: Lock,
      title: t("shield.zeroTrustTitle"),
      description: t("shield.zeroTrustDesc"),
    },
    {
      icon: Layers,
      title: t("shield.apiFirstTitle"),
      description: t("shield.apiFirstDesc"),
    },
    {
      icon: Scale,
      title: t("shield.multiInstanceTitle"),
      description: t("shield.multiInstanceDesc"),
    },
    {
      icon: Globe,
      title: t("shield.secureEdgeTitle"),
      description: t("shield.secureEdgeDesc"),
    },
  ];

  const deploymentModes = [
    {
      icon: Home,
      title: t("shield.standaloneTitle"),
      description: t("shield.standaloneDesc"),
      useCase: t("shield.standaloneUseCase"),
      features: [t("shield.standaloneFeature1"), t("shield.standaloneFeature2"), t("shield.standaloneFeature3")],
    },
    {
      icon: Building2,
      title: t("shield.clusterModeTitle"),
      description: t("shield.clusterModeDesc"),
      useCase: t("shield.clusterModeUseCase"),
      features: [t("shield.clusterModeFeature1"), t("shield.clusterModeFeature2"), t("shield.clusterModeFeature3")],
    },
    {
      icon: Cloud,
      title: t("shield.distributedTitle"),
      description: t("shield.distributedDesc"),
      useCase: t("shield.distributedUseCase"),
      features: [t("shield.distributedFeature1"), t("shield.distributedFeature2"), t("shield.distributedFeature3")],
    },
  ];

  const useCases = [
    {
      icon: Building2,
      title: t("shield.useCaseEnterpriseTitle"),
      description: t("shield.useCaseEnterpriseDesc"),
    },
    {
      icon: Network,
      title: t("shield.useCaseMultiSiteTitle"),
      description: t("shield.useCaseMultiSiteDesc"),
    },
    {
      icon: Cloud,
      title: t("shield.useCaseCloudNativeTitle"),
      description: t("shield.useCaseCloudNativeDesc"),
    },
    {
      icon: Shield,
      title: t("shield.useCaseEdgeTitle"),
      description: t("shield.useCaseEdgeDesc"),
    },
  ];

  const architectureComponents = [
    {
      icon: Cpu,
      title: t("shield.archControlPlaneTitle"),
      description: t("shield.archControlPlaneDesc"),
      details: [t("shield.archControlPlaneDetail1"), t("shield.archControlPlaneDetail2"), t("shield.archControlPlaneDetail3")],
    },
    {
      icon: Server,
      title: t("shield.archDataPlaneTitle"),
      description: t("shield.archDataPlaneDesc"),
      details: [t("shield.archDataPlaneDetail1"), t("shield.archDataPlaneDetail2"), t("shield.archDataPlaneDetail3")],
    },
    {
      icon: GitBranch,
      title: t("shield.archPolicyTitle"),
      description: t("shield.archPolicyDesc"),
      details: [t("shield.archPolicyDetail1"), t("shield.archPolicyDetail2"), t("shield.archPolicyDetail3")],
    },
  ];

  const metrics = [
    {
      icon: Zap,
      value: t("shield.metricThroughputValue"),
      label: t("shield.metricThroughputLabel"),
    },
    {
      icon: Activity,
      value: t("shield.metricUptimeValue"),
      label: t("shield.metricUptimeLabel"),
    },
    {
      icon: Shield,
      value: t("shield.metricRulesValue"),
      label: t("shield.metricRulesLabel"),
    },
    {
      icon: Clock,
      value: t("shield.metricLatencyValue"),
      label: t("shield.metricLatencyLabel"),
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
                <span className="font-medium">{t("shield.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("shield.heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("shield.heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("shield.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("shield.contactSales")}
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
                {t("shield.problemTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("shield.problemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.problem1Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.problem1Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.problem2Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.problem2Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.problem3Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.problem3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("shield.solutionTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("shield.solutionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.solution1Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.solution1Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.solution2Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.solution2Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.solution3Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.solution3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("shield.featuresTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("shield.featuresDescription")}
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
                {t("shield.architectureTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("shield.architectureDescription")}
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
                  <h4 className="font-semibold text-foreground mb-2">{t("shield.performanceTitle")}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.performanceDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Observability Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("shield.observabilityTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("shield.observabilityDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.obsLogsTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.obsLogsDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.obsMetricsTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.obsMetricsDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.obsAlertsTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.obsAlertsDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.obsReportingTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.obsReportingDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Modes Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("shield.deploymentTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("shield.deploymentDescription")}
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
                      <span className="font-semibold text-foreground">{t("shield.useCaseLabel")}</span>
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
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("shield.useCasesTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("shield.useCasesDescription")}
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

        {/* Ecosystem Integration Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("shield.ecosystemTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("shield.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.ecosystemEdgeTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.ecosystemEdgeDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Key className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.ecosystemIdentityTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.ecosystemIdentityDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("shield.ecosystemVaultTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("shield.ecosystemVaultDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Philosophy Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("shield.securityTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("shield.securityDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("shield.zeroTrustArchTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("shield.zeroTrustPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("shield.zeroTrustPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("shield.zeroTrustPoint3")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("shield.policyDrivenTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("shield.policyDrivenPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("shield.policyDrivenPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("shield.policyDrivenPoint3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("shield.comparisonTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("shield.comparisonDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("shield.traditionalFirewallTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("shield.traditionalFirewallPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("shield.traditionalFirewallPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("shield.traditionalFirewallPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("shield.traditionalFirewallPoint4")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("shield.aetherShieldTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("shield.aetherShieldPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("shield.aetherShieldPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("shield.aetherShieldPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("shield.aetherShieldPoint4")}</span>
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
                {t("shield.ctaTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("shield.ctaDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("shield.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("shield.explorePlatform")}
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
