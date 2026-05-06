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

        {/* Problem Statement Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("shield.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("shield.problemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-card">
                <Database className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("shield.problem1Title")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("shield.problem1Desc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Cloud className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("shield.problem2Title")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("shield.problem2Desc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Lock className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("shield.problem3Title")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("shield.problem3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("shield.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("shield.solutionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-card">
                <Shield className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("shield.solution1Title")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("shield.solution1Desc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Cpu className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("shield.solution2Title")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("shield.solution2Desc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Layers className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("shield.solution3Title")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("shield.solution3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("shield.featuresTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("shield.featuresDescription")}
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
                {t("shield.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("shield.architectureDescription")}
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

        {/* Observability Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("shield.observabilityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("shield.observabilityDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
              {
                [
                  { icon: Activity, title: t("shield.obsLogsTitle"), desc: t("shield.obsLogsDesc") },
                  { icon: Eye, title: t("shield.obsMetricsTitle"), desc: t("shield.obsMetricsDesc") },
                  { icon: AlertTriangle, title: t("shield.obsAlertsTitle"), desc: t("shield.obsAlertsDesc") },
                  { icon: Database, title: t("shield.obsReportingTitle"), desc: t("shield.obsReportingDesc") },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <item.icon className="w-10 h-10 text-foreground mx-auto mb-6 opacity-70" />
                    <h3 className="text-2xl font-normal text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        {/* Deployment Modes Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("shield.deploymentTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("shield.deploymentDescription")}
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
                {t("shield.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("shield.useCasesDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="text-center">
                  <useCase.icon className="w-10 h-10 text-foreground mx-auto mb-6 opacity-70" />
                  <h3 className="text-2xl font-normal text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-xs text-muted-foreground">{useCase.description}</p>
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
                {t("shield.ecosystemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("shield.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-card">
                <Globe className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("shield.ecosystemEdgeTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("shield.ecosystemEdgeDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Key className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("shield.ecosystemIdentityTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("shield.ecosystemIdentityDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Shield className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("shield.ecosystemVaultTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("shield.ecosystemVaultDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Philosophy Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("shield.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("shield.securityDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("shield.zeroTrustArchTitle")}</h3>
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
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("shield.policyDrivenTitle")}</h3>
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
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("shield.comparisonTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("shield.comparisonDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("shield.traditionalFirewallTitle")}</h3>
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
              <div className="p-10 rounded-2xl bg-card border border-green-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("shield.aetherShieldTitle")}</h3>
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
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("shield.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("shield.ctaDescription")}
              </p>
            </div>
            <div className="text-center">
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("shield.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
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
