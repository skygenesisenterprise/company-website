import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Zap,
  Network,
  Layers,
  Target,
  Command,
  Globe,
  Shield,
  Cpu,
  CheckCircle2,
  Activity,
  Clock,
  Database,
  Terminal,
} from "lucide-react";

export default async function PlatformSearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const capabilities = [
    {
      icon: Network,
      title: t("search.ecosystemSearchTitle"),
      description: t("search.ecosystemSearchDesc"),
    },
    {
      icon: Globe,
      title: t("search.webDiscoveryTitle"),
      description: t("search.webDiscoveryDesc"),
    },
    {
      icon: Command,
      title: t("search.commandActionsTitle"),
      description: t("search.commandActionsDesc"),
    },
    {
      icon: Target,
      title: t("search.contextRankingTitle"),
      description: t("search.contextRankingDesc"),
    },
    {
      icon: Layers,
      title: t("search.unifiedInterfaceTitle"),
      description: t("search.unifiedInterfaceDesc"),
    },
  ];

  const pipelineSteps = [
    {
      icon: Terminal,
      title: t("search.pipelineInputTitle"),
      description: t("search.pipelineInputDesc"),
      details: [t("search.pipelineInputDetail1"), t("search.pipelineInputDetail2"), t("search.pipelineInputDetail3")],
    },
    {
      icon: Cpu,
      title: t("search.pipelineIntentTitle"),
      description: t("search.pipelineIntentDesc"),
      details: [t("search.pipelineIntentDetail1"), t("search.pipelineIntentDetail2"), t("search.pipelineIntentDetail3")],
    },
    {
      icon: Network,
      title: t("search.pipelineRoutingTitle"),
      description: t("search.pipelineRoutingDesc"),
      details: [t("search.pipelineRoutingDetail1"), t("search.pipelineRoutingDetail2"), t("search.pipelineRoutingDetail3")],
    },
    {
      icon: Search,
      title: t("search.pipelineRenderTitle"),
      description: t("search.pipelineRenderDesc"),
      details: [t("search.pipelineRenderDetail1"), t("search.pipelineRenderDetail2"), t("search.pipelineRenderDetail3")],
    },
  ];

  const metrics = [
    {
      value: t("search.metricLatencyValue"),
      label: t("search.metricLatencyLabel"),
    },
    {
      value: t("search.metricAccuracyValue"),
      label: t("search.metricAccuracyLabel"),
    },
    {
      value: t("search.metricServicesValue"),
      label: t("search.metricServicesLabel"),
    },
    {
      value: t("search.metricIndexValue"),
      label: t("search.metricIndexLabel"),
    },
  ];

  const designPrinciples = [
    {
      icon: Shield,
      title: t("search.designMinimalTitle"),
      description: t("search.designMinimalDesc"),
    },
    {
      icon: Zap,
      title: t("search.designPerformanceTitle"),
      description: t("search.designPerformanceDesc"),
    },
    {
      icon: Terminal,
      title: t("search.designDeveloperTitle"),
      description: t("search.designDeveloperDesc"),
    },
    {
      icon: Shield,
      title: t("search.designPrivacyTitle"),
      description: t("search.designPrivacyDesc"),
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
                <span>{t("search.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("search.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("search.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("search.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("search.contactSales")}
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

        {/* Concept Overview Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("search.conceptTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("search.conceptDescription")}
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t("search.conceptDesc1")}</p>
                <p>{t("search.conceptDesc2")}</p>
                <p>{t("search.conceptDesc3")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("search.capabilitiesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("search.capabilitiesDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <div key={capability.title} className="p-10 rounded-2xl bg-card">
                  <capability.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Pipeline Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("search.pipelineTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("search.pipelineDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {pipelineSteps.map((step) => (
                <div key={step.title} className="p-10 rounded-2xl bg-card">
                  <step.icon className="w-10 h-10 text-blue-500 mb-6" />
                  <h3 className="text-xl font-medium text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
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
                <Layers className="w-10 h-10 text-blue-500 mb-6" />
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-4">{t("search.orchestrationTitle")}</h4>
                  <p className="text-muted-foreground leading-relaxed">{t("search.orchestrationDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration with Aether Edge Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("search.edgeIntegrationTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("search.edgeIntegrationDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Search className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-6">{t("search.aetherSearchRoleTitle")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("search.aetherSearchRolePoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("search.aetherSearchRolePoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("search.aetherSearchRolePoint3")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Globe className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-6">{t("search.aetherEdgeRoleTitle")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("search.aetherEdgeRolePoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("search.aetherEdgeRolePoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("search.aetherEdgeRolePoint3")}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto p-10 rounded-2xl bg-card">
              <div className="flex items-start gap-4">
                <Command className="w-10 h-10 text-blue-500 mb-6" />
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-4">{t("search.commandExecutionTitle")}</h4>
                  <p className="text-muted-foreground leading-relaxed">{t("search.commandExecutionDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Philosophy Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("search.designTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("search.designDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designPrinciples.map((principle) => (
                <div key={principle.title} className="p-8 rounded-2xl bg-card">
                  <principle.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Statement Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("search.closingTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("search.closingDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("search.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("search.ctaDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("search.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("search.contactSales")}
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
