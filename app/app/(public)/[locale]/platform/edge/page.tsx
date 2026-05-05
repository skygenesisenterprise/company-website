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
  Cloud,
  Home,
  Building2,
  GitBranch,
  Power,
  Scale,
  Zap,
  Activity,
  Clock,
} from "lucide-react";

export default async function PlatformEdgePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const features = [
    {
      icon: Globe,
      title: t("edge.dnsManagementTitle"),
      description: t("edge.dnsManagementDesc"),
    },
    {
      icon: Network,
      title: t("edge.multiNodeTitle"),
      description: t("edge.multiNodeDesc"),
    },
    {
      icon: Scale,
      title: t("edge.progressiveScaleTitle"),
      description: t("edge.progressiveScaleDesc"),
    },
    {
      icon: Lock,
      title: t("edge.infraOwnershipTitle"),
      description: t("edge.infraOwnershipDesc"),
    },
    {
      icon: Layers,
      title: t("edge.modularDeployTitle"),
      description: t("edge.modularDeployDesc"),
    },
    {
      icon: Shield,
      title: t("edge.edgeSyncTitle"),
      description: t("edge.edgeSyncDesc"),
    },
  ];

  const deploymentModes = [
    {
      icon: Home,
      title: t("edge.singleNodeTitle"),
      description: t("edge.singleNodeDesc"),
      useCase: t("edge.singleNodeUseCase"),
      features: [t("edge.singleNodeFeature1"), t("edge.singleNodeFeature2"), t("edge.singleNodeFeature3")],
    },
    {
      icon: Building2,
      title: t("edge.clusterModeTitle"),
      description: t("edge.clusterModeDesc"),
      useCase: t("edge.clusterModeUseCase"),
      features: [t("edge.clusterModeFeature1"), t("edge.clusterModeFeature2"), t("edge.clusterModeFeature3")],
    },
    {
      icon: Cloud,
      title: t("edge.distributedEdgeTitle"),
      description: t("edge.distributedEdgeDesc"),
      useCase: t("edge.distributedEdgeUseCase"),
      features: [t("edge.distributedEdgeFeature1"), t("edge.distributedEdgeFeature2"), t("edge.distributedEdgeFeature3")],
    },
  ];

  const useCases = [
    {
      icon: Building2,
      title: t("edge.useCaseEnterpriseTitle"),
      description: t("edge.useCaseEnterpriseDesc"),
    },
    {
      icon: Server,
      title: t("edge.useCaseOnPremTitle"),
      description: t("edge.useCaseOnPremDesc"),
    },
    {
      icon: Shield,
      title: t("edge.useCasePrivacyTitle"),
      description: t("edge.useCasePrivacyDesc"),
    },
    {
      icon: Layers,
      title: t("edge.useCaseInternalTitle"),
      description: t("edge.useCaseInternalDesc"),
    },
  ];

  const architectureComponents = [
    {
      icon: Cpu,
      title: t("edge.archControlPlaneTitle"),
      description: t("edge.archControlPlaneDesc"),
      details: [t("edge.archControlPlaneDetail1"), t("edge.archControlPlaneDetail2"), t("edge.archControlPlaneDetail3")],
    },
    {
      icon: Server,
      title: t("edge.archDataPlaneTitle"),
      description: t("edge.archDataPlaneDesc"),
      details: [t("edge.archDataPlaneDetail1"), t("edge.archDataPlaneDetail2"), t("edge.archDataPlaneDetail3")],
    },
    {
      icon: GitBranch,
      title: t("edge.archSyncTitle"),
      description: t("edge.archSyncDesc"),
      details: [t("edge.archSyncDetail1"), t("edge.archSyncDetail2"), t("edge.archSyncDetail3")],
    },
  ];

  const metrics = [
    {
      icon: Zap,
      value: t("edge.metricLatencyValue"),
      label: t("edge.metricLatencyLabel"),
    },
    {
      icon: Activity,
      value: t("edge.metricUptimeValue"),
      label: t("edge.metricUptimeLabel"),
    },
    {
      icon: Globe,
      value: t("edge.metricNodesValue"),
      label: t("edge.metricNodesLabel"),
    },
    {
      icon: Clock,
      value: t("edge.metricSyncValue"),
      label: t("edge.metricSyncLabel"),
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
                <span>{t("edge.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("edge.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("edge.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("edge.deploySelfHosted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("edge.contactSales")}
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
                {t("edge.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("edge.problemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Database, color: "text-red-500", title: t("edge.problem1Title"), desc: t("edge.problem1Desc") },
                { icon: Cloud, color: "text-orange-500", title: t("edge.problem2Title"), desc: t("edge.problem2Desc") },
                { icon: Lock, color: "text-yellow-500", title: t("edge.problem3Title"), desc: t("edge.problem3Desc") },
              ].map((item) => (
                <div key={item.title} className="p-10 rounded-2xl bg-card">
                  <item.icon className={`w-10 h-10 ${item.color} mb-6`} />
                  <h3 className="text-xl font-medium text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("edge.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("edge.solutionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Cpu, color: "text-green-500", title: t("edge.solution1Title"), desc: t("edge.solution1Desc") },
                { icon: Globe, color: "text-green-500", title: t("edge.solution2Title"), desc: t("edge.solution2Desc") },
                { icon: Layers, color: "text-green-500", title: t("edge.solution3Title"), desc: t("edge.solution3Desc") },
              ].map((item) => (
                <div key={item.title} className="p-10 rounded-2xl bg-card">
                  <item.icon className={`w-10 h-10 ${item.color} mb-6`} />
                  <h3 className="text-xl font-medium text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("edge.featuresTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("edge.featuresDescription")}
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
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("edge.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("edge.architectureDescription")}
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
                <Power className="w-10 h-10 text-green-500 mb-2" />
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-3">{t("edge.offlineResilienceTitle")}</h4>
                  <p className="text-muted-foreground leading-relaxed">{t("edge.offlineResilienceDesc")}</p>
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
                {t("edge.deploymentTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("edge.deploymentDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {deploymentModes.map((mode) => (
                <div key={mode.title} className="p-10 rounded-2xl bg-card">
                  <mode.icon className="w-10 h-10 text-green-500 mb-6" />
                  <h3 className="text-2xl font-medium text-foreground mb-4">{mode.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{mode.description}</p>
                  <div className="p-4 rounded-xl bg-muted/50 mb-6">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{t("edge.useCaseLabel")}</span>
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
                {t("edge.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("edge.useCasesDescription")}
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

        {/* Comparison Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("edge.comparisonTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("edge.comparisonDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Cloud className="w-8 h-8 text-blue-500" />
                  <h3 className="text-xl font-medium text-foreground">{t("edge.traditionalDnsTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                      <span>{t(`edge.traditionalDnsPoint${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-green-500" />
                  <h3 className="text-xl font-medium text-foreground">{t("edge.aetherEdgeTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{t(`edge.aetherEdgePoint${i}`)}</span>
                    </li>
                  ))}
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
                {t("edge.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("edge.ctaDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("edge.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-edge" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("edge.contribute")}
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
