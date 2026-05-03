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
  RefreshCw,
  Scale,
  Zap,
  Activity,
  Clock,
  Terminal,
  Code,
  Sparkles,
  Rocket,
  Key,
} from "lucide-react";

export default async function PlatformGiteriaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const features = [
    {
      icon: Code,
      title: t("giteria.nextGenGitTitle"),
      description: t("giteria.nextGenGitDesc"),
    },
    {
      icon: RefreshCw,
      title: t("giteria.intelligentCicdTitle"),
      description: t("giteria.intelligentCicdDesc"),
    },
    {
      icon: Sparkles,
      title: t("giteria.aiCollaborationTitle"),
      description: t("giteria.aiCollaborationDesc"),
    },
    {
      icon: Lock,
      title: t("giteria.advancedSecurityTitle"),
      description: t("giteria.advancedSecurityDesc"),
    },
    {
      icon: Globe,
      title: t("giteria.edgeNativeTitle"),
      description: t("giteria.edgeNativeDesc"),
    },
    {
      icon: Zap,
      title: t("giteria.globalPerformanceTitle"),
      description: t("giteria.globalPerformanceDesc"),
    },
  ];

  const architectureComponents = [
    {
      icon: Layers,
      title: t("giteria.archDistributedTitle"),
      description: t("giteria.archDistributedDesc"),
      details: [t("giteria.archDistributedDetail1"), t("giteria.archDistributedDetail2"), t("giteria.archDistributedDetail3")],
    },
    {
      icon: Cpu,
      title: t("giteria.archIntelligenceTitle"),
      description: t("giteria.archIntelligenceDesc"),
      details: [t("giteria.archIntelligenceDetail1"), t("giteria.archIntelligenceDetail2"), t("giteria.archIntelligenceDetail3")],
    },
    {
      icon: Network,
      title: t("giteria.archEdgeTitle"),
      description: t("giteria.archEdgeDesc"),
      details: [t("giteria.archEdgeDetail1"), t("giteria.archEdgeDetail2"), t("giteria.archEdgeDetail3")],
    },
  ];

  const useCases = [
    {
      icon: Rocket,
      title: t("giteria.useCaseStartupsTitle"),
      description: t("giteria.useCaseStartupsDesc"),
    },
    {
      icon: Sparkles,
      title: t("giteria.useCaseAITitle"),
      description: t("giteria.useCaseAIDesc"),
    },
    {
      icon: Database,
      title: t("giteria.useCaseDataTitle"),
      description: t("giteria.useCaseDataDesc"),
    },
    {
      icon: Shield,
      title: t("giteria.useCaseCriticalTitle"),
      description: t("giteria.useCaseCriticalDesc"),
    },
    {
      icon: Globe,
      title: t("giteria.useCaseDistributedTitle"),
      description: t("giteria.useCaseDistributedDesc"),
    },
  ];

  const metrics = [
    {
      icon: Zap,
      value: t("giteria.metricBuildValue"),
      label: t("giteria.metricBuildLabel"),
    },
    {
      icon: Activity,
      value: t("giteria.metricUptimeValue"),
      label: t("giteria.metricUptimeLabel"),
    },
    {
      icon: Globe,
      value: t("giteria.metricEdgesValue"),
      label: t("giteria.metricEdgesLabel"),
    },
    {
      icon: Clock,
      value: t("giteria.metricDeployValue"),
      label: t("giteria.metricDeployLabel"),
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
                <span className="font-medium">{t("giteria.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("giteria.heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("giteria.heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("giteria.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("giteria.contactSales")}
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

        {/* Vision Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-8">
                {t("giteria.visionTitle")}
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t("giteria.visionDesc1")}</p>
                <p>{t("giteria.visionDesc2")}</p>
                <p>{t("giteria.visionDesc3")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform & Features Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("giteria.platformTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("giteria.platformDesc")}
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

        {/* Aether Edge Integration Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("giteria.edgeIntegrationTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("giteria.edgeIntegrationDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("giteria.edgeDeployTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("giteria.edgeDeployDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("giteria.edgeExecuteTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("giteria.edgeExecuteDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("giteria.edgeScaleTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("giteria.edgeScaleDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("giteria.architectureTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("giteria.architectureDesc")}
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
          </div>
        </section>

        {/* Developer Experience Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("giteria.devexTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("giteria.devexDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("giteria.devexUnifiedTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t("giteria.devexUnifiedDesc")}</p>
                <div className="p-4 rounded bg-muted/50 font-mono text-xs text-muted-foreground">
                  <div className="mb-2"># Initialize a new project</div>
                  <div className="text-green-400">giteria init my-project</div>
                  <div className="mt-4 mb-2"># Deploy to edge</div>
                  <div className="text-green-400">giteria deploy --edge global</div>
                  <div className="mt-4 mb-2"># View real-time logs</div>
                  <div className="text-green-400">giteria logs --follow</div>
                </div>
              </div>
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <RefreshCw className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("giteria.devexAutomationTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("giteria.devexAutomationPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("giteria.devexAutomationPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("giteria.devexAutomationPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("giteria.devexAutomationPoint4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("giteria.useCasesTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("giteria.useCasesDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {t("giteria.ecosystemTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("giteria.ecosystemDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("giteria.ecoEdgeTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("giteria.ecoEdgeDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Key className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("giteria.ecoIdentityTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("giteria.ecoIdentityDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("giteria.ecoVaultTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("giteria.ecoVaultDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("giteria.ctaTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("giteria.ctaDesc")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("giteria.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/giteria" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("giteria.viewGithub")}
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
