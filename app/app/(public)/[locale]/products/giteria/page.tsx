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
        <section className="relative py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-8">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span>{t("giteria.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("giteria.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("giteria.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("giteria.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("giteria.contactSales")}
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

        {/* Vision Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground mb-8">
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
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("giteria.platformTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("giteria.platformDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="p-10 rounded-2xl bg-card">
                  <feature.icon className="w-10 h-10 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-medium text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aether Edge Integration Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("giteria.edgeIntegrationTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("giteria.edgeIntegrationDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20 text-center">
                <Globe className="w-10 h-10 text-green-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-3">{t("giteria.edgeDeployTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("giteria.edgeDeployDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20 text-center">
                <Zap className="w-10 h-10 text-green-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-3">{t("giteria.edgeExecuteTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("giteria.edgeExecuteDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20 text-center">
                <Scale className="w-10 h-10 text-green-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-3">{t("giteria.edgeScaleTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("giteria.edgeScaleDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("giteria.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("giteria.architectureDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {architectureComponents.map((component) => (
                <div key={component.title} className="p-10 rounded-2xl bg-card">
                  <component.icon className="w-10 h-10 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-medium text-foreground mb-4">{component.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{component.description}</p>
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
          </div>
        </section>

        {/* Developer Experience Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("giteria.devexTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("giteria.devexDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("giteria.devexUnifiedTitle")}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{t("giteria.devexUnifiedDesc")}</p>
                <div className="p-4 rounded-xl bg-muted/50 font-mono text-xs text-muted-foreground">
                  <div className="mb-2"># Initialize a new project</div>
                  <div className="text-green-400">ga init my-project</div>
                  <div className="mt-4 mb-2"># Deploy to edge</div>
                  <div className="text-green-400">ga deploy --edge global</div>
                  <div className="mt-4 mb-2"># View real-time logs</div>
                  <div className="text-green-400">ga logs --follow</div>
                </div>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <RefreshCw className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-medium text-foreground">{t("giteria.devexAutomationTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("giteria.devexAutomationPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("giteria.devexAutomationPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("giteria.devexAutomationPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("giteria.devexAutomationPoint4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("giteria.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("giteria.useCasesDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="p-10 rounded-2xl bg-card text-center">
                  <useCase.icon className="w-10 h-10 text-foreground mx-auto mb-6 opacity-70" />
                  <h3 className="text-xl font-medium text-foreground mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Integration Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("giteria.ecosystemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("giteria.ecosystemDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20 text-center">
                <Globe className="w-10 h-10 text-green-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-3">{t("giteria.ecoEdgeTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("giteria.ecoEdgeDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20 text-center">
                <Key className="w-10 h-10 text-green-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-3">{t("giteria.ecoIdentityTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("giteria.ecoIdentityDesc")}</p>
              </div>
              <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20 text-center">
                <Shield className="w-10 h-10 text-green-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-3">{t("giteria.ecoVaultTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("giteria.ecoVaultDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground mb-6">
                {t("giteria.ctaTitle")}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t("giteria.ctaDesc")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("giteria.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/giteria" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
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
