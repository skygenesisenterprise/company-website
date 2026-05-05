import * as React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  Cpu,
  Network,
  Database,
  CheckCircle2,
  Cloud,
  GitBranch,
  Activity,
  Clock,
  Globe,
  Shield,
  Code,
  FileSpreadsheet,
  Mail,
  Video,
  MessageSquare,
  TrendingUp,
  Calculator,
  Bot,
  Building2,
  Target,
} from "lucide-react";

export default async function SheetsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const metrics = [
    {
      icon: Zap,
      value: t("sheets.metricLatencyValue"),
      label: t("sheets.metricLatencyLabel"),
    },
    {
      icon: Activity,
      value: t("sheets.metricUptimeValue"),
      label: t("sheets.metricUptimeLabel"),
    },
    {
      icon: Globe,
      value: t("sheets.metricCollaboratorsValue"),
      label: t("sheets.metricCollaboratorsLabel"),
    },
    {
      icon: Clock,
      value: t("sheets.metricSyncValue"),
      label: t("sheets.metricSyncLabel"),
    },
  ];

  const pillars = [
    {
      icon: Cpu,
      title: t("sheets.edgePerformanceTitle"),
      description: t("sheets.edgePerformanceDesc"),
      features: [t("sheets.edgePerformanceFeature1"), t("sheets.edgePerformanceFeature2"), t("sheets.edgePerformanceFeature3")],
    },
    {
      icon: Users,
      title: t("sheets.collaborationTitle"),
      description: t("sheets.collaborationDesc"),
      features: [t("sheets.collaborationFeature1"), t("sheets.collaborationFeature2"), t("sheets.collaborationFeature3")],
    },
    {
      icon: Code,
      title: t("sheets.programmableTitle"),
      description: t("sheets.programmableDesc"),
      features: [t("sheets.programmableFeature1"), t("sheets.programmableFeature2"), t("sheets.programmableFeature3")],
    },
    {
      icon: Network,
      title: t("sheets.ecosystemTitle"),
      description: t("sheets.ecosystemDesc"),
      features: [t("sheets.ecosystemFeature1"), t("sheets.ecosystemFeature2"), t("sheets.ecosystemFeature3")],
    },
  ];

  const features = [
    {
      icon: Database,
      title: t("sheets.smartDataTitle"),
      description: t("sheets.smartDataDesc"),
      details: [t("sheets.smartDataDetail1"), t("sheets.smartDataDetail2"), t("sheets.smartDataDetail3")],
    },
    {
      icon: Calculator,
      title: t("sheets.powerfulCalcTitle"),
      description: t("sheets.powerfulCalcDesc"),
      details: [t("sheets.powerfulCalcDetail1"), t("sheets.powerfulCalcDetail2"), t("sheets.powerfulCalcDetail3")],
    },
    {
      icon: Users,
      title: t("sheets.liveCollabTitle"),
      description: t("sheets.liveCollabDesc"),
      details: [t("sheets.liveCollabDetail1"), t("sheets.liveCollabDetail2"), t("sheets.liveCollabDetail3")],
    },
    {
      icon: Bot,
      title: t("sheets.automationTitle"),
      description: t("sheets.automationDesc"),
      details: [t("sheets.automationDetail1"), t("sheets.automationDetail2"), t("sheets.automationDetail3")],
    },
  ];

  const architectureComponents = [
    {
      icon: Cpu,
      title: t("sheets.archEdgeTitle"),
      description: t("sheets.archEdgeDesc"),
      details: [t("sheets.archEdgeDetail1"), t("sheets.archEdgeDetail2"), t("sheets.archEdgeDetail3")],
    },
    {
      icon: GitBranch,
      title: t("sheets.archDistributedTitle"),
      description: t("sheets.archDistributedDesc"),
      details: [t("sheets.archDistributedDetail1"), t("sheets.archDistributedDetail2"), t("sheets.archDistributedDetail3")],
    },
    {
      icon: Shield,
      title: t("sheets.archSecurityTitle"),
      description: t("sheets.archSecurityDesc"),
      details: [t("sheets.archSecurityDetail1"), t("sheets.archSecurityDetail2"), t("sheets.archSecurityDetail3")],
    },
  ];

  const useCases = [
    {
      icon: TrendingUp,
      title: t("sheets.useCaseAnalyticsTitle"),
      description: t("sheets.useCaseAnalyticsDesc"),
    },
    {
      icon: Calculator,
      title: t("sheets.useCaseFinanceTitle"),
      description: t("sheets.useCaseFinanceDesc"),
    },
    {
      icon: Building2,
      title: t("sheets.useCasePlanningTitle"),
      description: t("sheets.useCasePlanningDesc"),
    },
    {
      icon: Network,
      title: t("sheets.useCasePipelinesTitle"),
      description: t("sheets.useCasePipelinesDesc"),
    },
  ];

  const integrations = [
    {
      icon: Mail,
      title: t("sheets.integrationMailTitle"),
      description: t("sheets.integrationMailDesc"),
    },
    {
      icon: Video,
      title: t("sheets.integrationMeetTitle"),
      description: t("sheets.integrationMeetDesc"),
    },
    {
      icon: MessageSquare,
      title: t("sheets.integrationChatTitle"),
      description: t("sheets.integrationChatDesc"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header locale={locale as import("@/lib/locale").Locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-green-500/5 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          </div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium">{t("sheets.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("sheets.heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("sheets.heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("sheets.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("sheets.openApp")}
                </Button>
              </div>
              
              {/* Product Preview */}
              <div className="mt-16 relative">
                <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center text-xs text-muted-foreground font-mono">
                      Aether Sheets — Untitled Spreadsheet
                    </div>
                  </div>
                  <div className="p-8 bg-linear-to-br from-card to-muted/30">
                    <div className="grid grid-cols-6 gap-2 text-xs font-mono">
                      <div className="text-muted-foreground" />
                      {['A', 'B', 'C', 'D', 'E', 'F'].map((col) => (
                        <div key={col} className="text-center font-semibold text-muted-foreground py-2 border border-border rounded">
                          {col}
                        </div>
                      ))}
                      {[1, 2, 3, 4].map((row) => (
                        <React.Fragment key={`row-${row}`}>
                          <div key={row} className="text-center font-semibold text-muted-foreground py-2 border border-border rounded">
                            {row}
                          </div>
                          {[...Array(6)].map((_, col) => (
                            <div
                              key={`${row}-${col}`}
                              className={`py-2 px-3 border border-border rounded ${
                                col === 1 && row === 2 ? 'bg-green-500/10 border-green-500/30' : 
                                col === 2 && row === 3 ? 'bg-blue-500/10 border-blue-500/30' : 
                                'bg-background/50'
                              }`}
                            >
                              {col === 1 && row === 2 ? (
                                <span className="text-green-400 font-mono">=SUM(D2:D10)</span>
                              ) : col === 2 && row === 3 ? (
                                <span className="text-blue-400 font-mono">Q4 Revenue</span>
                              ) : (
                                <div className="h-4 bg-muted/30 rounded w-full" />
                              )}
                            </div>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
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
                {t("sheets.pillarsTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("sheets.pillarsDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="p-6 rounded-lg border border-border bg-card hover:border-green-500/20 transition-colors">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                    <pillar.icon className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Showcase */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("sheets.featuresTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("sheets.featuresDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-lg border border-border bg-card">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Edge Architecture Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("sheets.architectureTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("sheets.architectureDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {architectureComponents.map((component) => (
                <div key={component.title} className="p-6 rounded-lg border border-border bg-card">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                    <component.icon className="w-6 h-6 text-green-400" />
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
                <Sparkles className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t("sheets.edgePoweredTitle")}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t("sheets.edgePoweredDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("sheets.useCasesTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("sheets.useCasesDescription")}
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

        {/* Integration Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("sheets.integrationTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("sheets.integrationDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {integrations.map((integration) => (
                <div key={integration.title} className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                    <integration.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{integration.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("sheets.comparisonTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("sheets.comparisonDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Cloud className="w-8 h-8 text-muted-foreground" />
                  <h3 className="text-xl font-semibold text-foreground">{t("sheets.traditionalTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("sheets.traditionalPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("sheets.traditionalPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("sheets.traditionalPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("sheets.traditionalPoint4")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="flex items-center gap-3 mb-6">
                  <FileSpreadsheet className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("sheets.aetherTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("sheets.aetherPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("sheets.aetherPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("sheets.aetherPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("sheets.aetherPoint4")}</span>
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
                {t("sheets.ctaTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("sheets.ctaDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("sheets.startBuilding")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("sheets.contactSales")}
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
