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
  Cloud,
  Building2,
  GitBranch,
  Zap,
  Activity,
  Clock,
  Video,
  MessageSquare,
  Users,
  Mic,
  Monitor,
  Calendar,
  RefreshCw,
  Eye,
  Terminal,
  Workflow,
  Database,
  Target,
  Home,
  Scale,
  Key,
} from "lucide-react";

export default async function MeetPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const metrics = [
    {
      icon: Zap,
      value: t("meet.metricLatencyValue"),
      label: t("meet.metricLatencyLabel"),
    },
    {
      icon: Activity,
      value: t("meet.metricUptimeValue"),
      label: t("meet.metricUptimeLabel"),
    },
    {
      icon: Video,
      value: t("meet.metricMeetingsValue"),
      label: t("meet.metricMeetingsLabel"),
    },
    {
      icon: Clock,
      value: t("meet.metricSyncValue"),
      label: t("meet.metricSyncLabel"),
    },
  ];

  const coreFeatures = [
    {
      icon: MessageSquare,
      title: t("meet.featureMessagingTitle"),
      description: t("meet.featureMessagingDesc"),
    },
    {
      icon: Video,
      title: t("meet.featureVideoTitle"),
      description: t("meet.featureVideoDesc"),
    },
    {
      icon: Mic,
      title: t("meet.featureAudioTitle"),
      description: t("meet.featureAudioDesc"),
    },
    {
      icon: Users,
      title: t("meet.featurePresenceTitle"),
      description: t("meet.featurePresenceDesc"),
    },
    {
      icon: Monitor,
      title: t("meet.featureScreenTitle"),
      description: t("meet.featureScreenDesc"),
    },
    {
      icon: Calendar,
      title: t("meet.featureSchedulingTitle"),
      description: t("meet.featureSchedulingDesc"),
    },
  ];

  const architectureComponents = [
    {
      icon: Cpu,
      title: t("meet.archMediaServerTitle"),
      description: t("meet.archMediaServerDesc"),
      details: [t("meet.archMediaServerDetail1"), t("meet.archMediaServerDetail2"), t("meet.archMediaServerDetail3")],
    },
    {
      icon: Network,
      title: t("meet.archSignalingTitle"),
      description: t("meet.archSignalingDesc"),
      details: [t("meet.archSignalingDetail1"), t("meet.archSignalingDetail2"), t("meet.archSignalingDetail3")],
    },
    {
      icon: GitBranch,
      title: t("meet.archEdgeTitle"),
      description: t("meet.archEdgeDesc"),
      details: [t("meet.archEdgeDetail1"), t("meet.archEdgeDetail2"), t("meet.archEdgeDetail3")],
    },
  ];

  const deploymentModes = [
    {
      icon: Home,
      title: t("meet.deploySingleTitle"),
      description: t("meet.deploySingleDesc"),
      useCase: t("meet.deploySingleUseCase"),
      features: [t("meet.deploySingleFeature1"), t("meet.deploySingleFeature2"), t("meet.deploySingleFeature3")],
    },
    {
      icon: Building2,
      title: t("meet.deployClusterTitle"),
      description: t("meet.deployClusterDesc"),
      useCase: t("meet.deployClusterUseCase"),
      features: [t("meet.deployClusterFeature1"), t("meet.deployClusterFeature2"), t("meet.deployClusterFeature3")],
    },
    {
      icon: Cloud,
      title: t("meet.deployDistributedTitle"),
      description: t("meet.deployDistributedDesc"),
      useCase: t("meet.deployDistributedUseCase"),
      features: [t("meet.deployDistributedFeature1"), t("meet.deployDistributedFeature2"), t("meet.deployDistributedFeature3")],
    },
  ];

  const useCases = [
    {
      icon: Building2,
      title: t("meet.useCaseEnterpriseTitle"),
      description: t("meet.useCaseEnterpriseDesc"),
    },
    {
      icon: Globe,
      title: t("meet.useCaseDistributedTitle"),
      description: t("meet.useCaseDistributedDesc"),
    },
    {
      icon: Shield,
      title: t("meet.useCaseCriticalTitle"),
      description: t("meet.useCaseCriticalDesc"),
    },
    {
      icon: Terminal,
      title: t("meet.useCaseCloudNativeTitle"),
      description: t("meet.useCaseCloudNativeDesc"),
    },
  ];

  const ecosystemIntegrations = [
    {
      icon: Layers,
      title: t("meet.ecoMailTitle"),
      description: t("meet.ecoMailDesc"),
    },
    {
      icon: Workflow,
      title: t("meet.ecoSchematikTitle"),
      description: t("meet.ecoSchematikDesc"),
    },
    {
      icon: Shield,
      title: t("meet.ecoShieldTitle"),
      description: t("meet.ecoShieldDesc"),
    },
    {
      icon: Key,
      title: t("meet.ecoVpnTitle"),
      description: t("meet.ecoVpnDesc"),
    },
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: t("meet.secE2eeTitle"),
      description: t("meet.secE2eeDesc"),
    },
    {
      icon: Eye,
      title: t("meet.secSovereigntyTitle"),
      description: t("meet.secSovereigntyDesc"),
    },
    {
      icon: Server,
      title: t("meet.secSelfHostTitle"),
      description: t("meet.secSelfHostDesc"),
    },
    {
      icon: Database,
      title: t("meet.secIsolationTitle"),
      description: t("meet.secIsolationDesc"),
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
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="font-medium">{t("meet.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("meet.heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("meet.heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("meet.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("meet.contactSales")}
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
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-blue-400" />
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

        {/* Product Overview Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("meet.overviewTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("meet.overviewDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {coreFeatures.map((feature) => (
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

        {/* Edge-First Architecture Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("meet.edgeArchitectureTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("meet.edgeArchitectureDescription")}
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
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto p-6 rounded-lg border border-blue-500/20 bg-blue-500/5">
              <div className="flex items-start gap-4">
                <RefreshCw className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t("meet.offlineResilienceTitle")}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t("meet.offlineResilienceDesc")}</p>
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
                {t("meet.ecosystemTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("meet.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {ecosystemIntegrations.map((integration) => (
                <div key={integration.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <integration.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{integration.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Sovereignty Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("meet.securityTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("meet.securityDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {securityFeatures.map((feature) => (
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

        {/* Deployment Modes Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("meet.deploymentTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("meet.deploymentDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {deploymentModes.map((mode, index) => (
                <div key={mode.title} className="p-6 rounded-lg border border-border bg-card relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <mode.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{mode.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{mode.description}</p>
                  <div className="p-3 rounded bg-muted/50 mb-4">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">{t("meet.useCaseLabel")}</span>
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
                {t("meet.useCasesTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("meet.useCasesDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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

        {/* Vision Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("meet.visionTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("meet.visionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("meet.visionFoundationTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("meet.visionFoundationDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("meet.visionStandardTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("meet.visionStandardDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("meet.visionAlternativeTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("meet.visionAlternativeDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("meet.ctaTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("meet.ctaDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("meet.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-meet" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("meet.contribute")}
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
