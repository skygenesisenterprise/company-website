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
  Cloud,
  Home,
  Building2,
  Route,
  Zap,
  Activity,
  Clock,
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
      icon: Building2,
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
      icon: Building2,
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
      value: t("maps.metricLatencyValue"),
      label: t("maps.metricLatencyLabel"),
    },
    {
      value: t("maps.metricUptimeValue"),
      label: t("maps.metricUptimeLabel"),
    },
    {
      value: t("maps.metricCoverageValue"),
      label: t("maps.metricCoverageLabel"),
    },
    {
      value: t("maps.metricRefreshValue"),
      label: t("maps.metricRefreshLabel"),
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
                <span>{t("maps.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("maps.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("maps.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("maps.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("maps.contactSales")}
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

        {/* Core Value Proposition */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("maps.valuePropTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("maps.valuePropDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Globe className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("maps.valueProp1Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("maps.valueProp1Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Network className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("maps.valueProp2Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("maps.valueProp2Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Lock className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("maps.valueProp3Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("maps.valueProp3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Architecture */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("maps.infrastructureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("maps.infrastructureDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {infrastructureComponents.map((component) => (
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
                  <h4 className="text-xl font-medium text-foreground mb-4">{t("maps.resilienceTitle")}</h4>
                  <p className="text-muted-foreground leading-relaxed">{t("maps.resilienceDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy by Design */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("maps.privacyTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("maps.privacyDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyFeatures.map((feature) => (
                <div key={feature.title} className="p-8 rounded-2xl bg-card">
                  <feature.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Platform */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("maps.developerTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("maps.developerDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developerTools.map((tool) => (
                <div key={tool.title} className="p-8 rounded-2xl bg-card">
                  <tool.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Integration */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("maps.ecosystemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("maps.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystemIntegrations.map((integration) => (
                <div key={integration.title} className="p-8 rounded-2xl bg-card">
                  <integration.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{integration.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("maps.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("maps.useCasesDescription")}
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

        {/* Deployment Modes */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("maps.deploymentTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("maps.deploymentDescription")}
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
                      <span className="font-medium text-foreground">{t("maps.useCaseLabel")}</span>
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

        {/* Open & Extensible */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("maps.openTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("maps.openDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Globe className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("maps.openSourceTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("maps.openSourceDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Home className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("maps.selfHostingTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("maps.selfHostingDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Layers className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("maps.modularComponentsTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("maps.modularComponentsDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Globe className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("maps.communityDrivenTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("maps.communityDrivenDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("maps.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("maps.ctaDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("maps.buildNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-maps" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
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
