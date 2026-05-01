import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
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
  Power,
  Scale,
  Zap,
  Activity,
  Clock,
  Route,
  Grid3X3,
  Box,
  Terminal,
  Webhook,
  MessageSquare,
  Search,
  Activity as ActivityIcon,
  Truck,
  Factory,
  Smartphone,
  LeafyGreen,
} from "lucide-react";

export default async function PlatformMapsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const features = [
    {
      icon: Globe,
      title: t("maps.valueProp1Title"),
      description: t("maps.valueProp1Desc"),
    },
    {
      icon: Network,
      title: t("maps.valueProp2Title"),
      description: t("maps.valueProp2Desc"),
    },
    {
      icon: Lock,
      title: t("maps.valueProp3Title"),
      description: t("maps.valueProp3Desc"),
    },
    {
      icon: Layers,
      title: t("maps.ecosystemTitle"),
      description: t("maps.ecosystemDescription"),
    },
    {
      icon: Shield,
      title: t("maps.privacyTitle"),
      description: t("maps.privacyDescription"),
    },
    {
      icon: Scale,
      title: t("maps.deploymentTitle"),
      description: t("maps.deploymentDescription"),
    },
  ];

  const infrastructureComponents = [
    {
      icon: Cpu,
      title: t("maps.archEdgeTilesTitle"),
      description: t("maps.archEdgeTilesDesc"),
      details: [
        t("maps.archEdgeTilesDetail1"),
        t("maps.archEdgeTilesDetail2"),
        t("maps.archEdgeTilesDetail3"),
      ],
    },
    {
      icon: Route,
      title: t("maps.archDistributedRoutingTitle"),
      description: t("maps.archDistributedRoutingDesc"),
      details: [
        t("maps.archDistributedRoutingDetail1"),
        t("maps.archDistributedRoutingDetail2"),
        t("maps.archDistributedRoutingDetail3"),
      ],
    },
    {
      icon: Database,
      title: t("maps.archGeoCachingTitle"),
      description: t("maps.archGeoCachingDesc"),
      details: [
        t("maps.archGeoCachingDetail1"),
        t("maps.archGeoCachingDetail2"),
        t("maps.archGeoCachingDetail3"),
      ],
    },
  ];

  const privacyFeatures = [
    {
      icon: Shield,
      title: t("maps.privacyNoTrackingTitle"),
      description: t("maps.privacyNoTrackingDesc"),
    },
    {
      icon: Lock,
      title: t("maps.privacyLocalFirstTitle"),
      description: t("maps.privacyLocalFirstDesc"),
    },
    {
      icon: Power,
      title: t("maps.privacyOfflineTitle"),
      description: t("maps.privacyOfflineDesc"),
    },
    {
      icon: Database,
      title: t("maps.privacyDataOwnershipTitle"),
      description: t("maps.privacyDataOwnershipDesc"),
    },
  ];

  const developerTools = [
    {
      icon: Grid3X3,
      title: t("maps.devApisTitle"),
      description: t("maps.devApisDesc"),
    },
    {
      icon: Smartphone,
      title: t("maps.devSdksTitle"),
      description: t("maps.devSdksDesc"),
    },
    {
      icon: Webhook,
      title: t("maps.devWebhooksTitle"),
      description: t("maps.devWebhooksDesc"),
    },
    {
      icon: Terminal,
      title: t("maps.devCliTitle"),
      description: t("maps.devCliDesc"),
    },
  ];

  const ecosystemIntegrations = [
    {
      icon: Network,
      title: t("maps.ecosystemEdgeTitle"),
      description: t("maps.ecosystemEdgeDesc"),
    },
    {
      icon: Search,
      title: t("maps.ecosystemSearchTitle"),
      description: t("maps.ecosystemSearchDesc"),
    },
    {
      icon: MessageSquare,
      title: t("maps.ecosystemChatTitle"),
      description: t("maps.ecosystemChatDesc"),
    },
    {
      icon: ActivityIcon,
      title: t("maps.ecosystemStatusTitle"),
      description: t("maps.ecosystemStatusDesc"),
    },
  ];

  const useCases = [
    {
      icon: Building2,
      title: t("maps.useCaseEnterpriseTitle"),
      description: t("maps.useCaseEnterpriseDesc"),
    },
    {
      icon: Truck,
      title: t("maps.useCaseLogisticsTitle"),
      description: t("maps.useCaseLogisticsDesc"),
    },
    {
      icon: Box,
      title: t("maps.useCaseDappsTitle"),
      description: t("maps.useCaseDappsDesc"),
    },
    {
      icon: Factory,
      title: t("maps.useCaseIotTitle"),
      description: t("maps.useCaseIotDesc"),
    },
  ];

  const deploymentModes = [
    {
      icon: Home,
      title: t("maps.deploySelfHostedTitle"),
      description: t("maps.deploySelfHostedDesc"),
      useCase: t("maps.deploySelfHostedUseCase"),
      features: [
        t("maps.deploySelfHostedFeature1"),
        t("maps.deploySelfHostedFeature2"),
        t("maps.deploySelfHostedFeature3"),
      ],
    },
    {
      icon: Building2,
      title: t("maps.deployManagedTitle"),
      description: t("maps.deployManagedDesc"),
      useCase: t("maps.deployManagedUseCase"),
      features: [
        t("maps.deployManagedFeature1"),
        t("maps.deployManagedFeature2"),
        t("maps.deployManagedFeature3"),
      ],
    },
    {
      icon: Cloud,
      title: t("maps.deployHybridTitle"),
      description: t("maps.deployHybridDesc"),
      useCase: t("maps.deployHybridUseCase"),
      features: [
        t("maps.deployHybridFeature1"),
        t("maps.deployHybridFeature2"),
        t("maps.deployHybridFeature3"),
      ],
    },
  ];

  const metrics = [
    {
      icon: Zap,
      value: t("maps.metricLatencyValue"),
      label: t("maps.metricLatencyLabel"),
    },
    {
      icon: Activity,
      value: t("maps.metricUptimeValue"),
      label: t("maps.metricUptimeLabel"),
    },
    {
      icon: Globe,
      value: t("maps.metricCoverageValue"),
      label: t("maps.metricCoverageLabel"),
    },
    {
      icon: Clock,
      value: t("maps.metricRefreshValue"),
      label: t("maps.metricRefreshLabel"),
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
                <span className="font-medium">{t("maps.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("maps.heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("maps.heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("maps.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("maps.contactSales")}
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

        {/* Core Value Proposition */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("maps.valuePropTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("maps.valuePropDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("maps.valueProp1Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("maps.valueProp1Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("maps.valueProp2Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("maps.valueProp2Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("maps.valueProp3Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("maps.valueProp3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Architecture */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("maps.infrastructureTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("maps.infrastructureDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {infrastructureComponents.map((component) => (
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
                  <h4 className="font-semibold text-foreground mb-2">{t("maps.resilienceTitle")}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t("maps.resilienceDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy by Design */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("maps.privacyTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("maps.privacyDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyFeatures.map((feature) => (
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

        {/* Developer Platform */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("maps.developerTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("maps.developerDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developerTools.map((tool) => (
                <div key={tool.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors group">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-opacity">
                    <tool.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{tool.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Integration */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("maps.ecosystemTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("maps.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystemIntegrations.map((integration) => (
                <div key={integration.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                  <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center mb-4">
                    <integration.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{integration.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("maps.useCasesTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("maps.useCasesDescription")}
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

        {/* Deployment Modes */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("maps.deploymentTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("maps.deploymentDescription")}
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
                      <span className="font-semibold text-foreground">{t("maps.useCaseLabel")}</span>
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

        {/* Open & Extensible */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("maps.openTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("maps.openDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <LeafyGreen className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("maps.openSourceTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("maps.openSourceDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("maps.selfHostingTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("maps.selfHostingDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("maps.modularComponentsTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("maps.modularComponentsDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("maps.communityDrivenTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("maps.communityDrivenDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("maps.ctaTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("maps.ctaDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("maps.buildNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-maps" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("maps.contribute")}
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
