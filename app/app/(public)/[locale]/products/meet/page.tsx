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
        <section className="relative py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-8">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span>{t("meet.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("meet.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("meet.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base">
                  {t("meet.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("meet.contactSales")}
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

        {/* Product Overview Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("meet.overviewTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("meet.overviewDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature) => (
                <div key={feature.title} className="p-8 rounded-2xl bg-card">
                  <feature.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Edge-First Architecture Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("meet.edgeArchitectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("meet.edgeArchitectureDescription")}
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

        {/* Ecosystem Integration Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("meet.ecosystemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("meet.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
              {ecosystemIntegrations.map((integration) => (
                <div key={integration.title} className="text-center">
                  <integration.icon className="w-10 h-10 text-foreground mx-auto mb-6 opacity-70" />
                  <h3 className="text-2xl font-normal text-foreground mb-2">{integration.title}</h3>
                  <p className="text-xs text-muted-foreground">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Sovereignty Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("meet.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("meet.securityDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="text-center">
                  <feature.icon className="w-10 h-10 text-foreground mx-auto mb-6 opacity-70" />
                  <h3 className="text-2xl font-normal text-foreground mb-2">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Modes Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("meet.deploymentTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("meet.deploymentDescription")}
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
                {t("meet.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("meet.useCasesDescription")}
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

        {/* Vision Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("meet.visionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("meet.visionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-card">
                <Layers className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("meet.visionFoundationTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("meet.visionFoundationDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Target className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("meet.visionStandardTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("meet.visionStandardDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-card">
                <Scale className="w-8 h-8 text-foreground mb-5 opacity-80" />
                <h3 className="text-base font-medium text-foreground mb-3">{t("meet.visionAlternativeTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("meet.visionAlternativeDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("meet.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("meet.ctaDescription")}
              </p>
            </div>
            <div className="text-center">
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("meet.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-meet" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
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
