import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MessageSquare,
  Video,
  CheckSquare,
  Activity,
  Terminal,
  Cloud,
  Server,
  Layers,
  Zap,
  Clock,
  Shield,
  Network,
  GitBranch,
  CheckCircle2,
  ArrowRight,
  Box,
  Workflow,
  Sparkles,
  Inbox,
  Users,
} from "lucide-react";

export default async function MailPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const metrics = [
    {
      icon: Zap,
      value: t("mail.metricLatencyValue"),
      label: t("mail.metricLatencyLabel"),
    },
    {
      icon: Activity,
      value: t("mail.metricUptimeValue"),
      label: t("mail.metricUptimeLabel"),
    },
    {
      icon: Mail,
      value: t("mail.metricEmailsValue"),
      label: t("mail.metricEmailsLabel"),
    },
    {
      icon: Clock,
      value: t("mail.metricSyncValue"),
      label: t("mail.metricSyncLabel"),
    },
  ];

  const systemModules = [
    {
      icon: Inbox,
      title: t("mail.moduleInboxTitle"),
      description: t("mail.moduleInboxDesc"),
    },
    {
      icon: MessageSquare,
      title: t("mail.moduleChatTitle"),
      description: t("mail.moduleChatDesc"),
    },
    {
      icon: Video,
      title: t("mail.moduleMeetTitle"),
      description: t("mail.moduleMeetDesc"),
    },
    {
      icon: CheckSquare,
      title: t("mail.moduleTodoTitle"),
      description: t("mail.moduleTodoDesc"),
    },
    {
      icon: Activity,
      title: t("mail.moduleActivityTitle"),
      description: t("mail.moduleActivityDesc"),
    },
    {
      icon: Sparkles,
      title: t("mail.moduleCopilotTitle"),
      description: t("mail.moduleCopilotDesc"),
    },
  ];

  const features = [
    {
      icon: Inbox,
      title: t("mail.featureUnifiedTitle"),
      description: t("mail.featureUnifiedDesc"),
    },
    {
      icon: Network,
      title: t("mail.featureRealtimeTitle"),
      description: t("mail.featureRealtimeDesc"),
    },
    {
      icon: GitBranch,
      title: t("mail.featureContextTitle"),
      description: t("mail.featureContextDesc"),
    },
    {
      icon: Sparkles,
      title: t("mail.featureAiTitle"),
      description: t("mail.featureAiDesc"),
    },
    {
      icon: Workflow,
      title: t("mail.featureAutomationTitle"),
      description: t("mail.featureAutomationDesc"),
    },
    {
      icon: Activity,
      title: t("mail.featureStreamTitle"),
      description: t("mail.featureStreamDesc"),
    },
  ];

  const architectureComponents = [
    {
      icon: Server,
      title: t("mail.archBackendTitle"),
      description: t("mail.archBackendDesc"),
      details: [t("mail.archBackendDetail1"), t("mail.archBackendDetail2"), t("mail.archBackendDetail3")],
    },
    {
      icon: Layers,
      title: t("mail.archClientTitle"),
      description: t("mail.archClientDesc"),
      details: [t("mail.archClientDetail1"), t("mail.archClientDetail2"), t("mail.archClientDetail3")],
    },
    {
      icon: GitBranch,
      title: t("mail.archApiTitle"),
      description: t("mail.archApiDesc"),
      details: [t("mail.archApiDetail1"), t("mail.archApiDetail2"), t("mail.archApiDetail3")],
    },
  ];

  const useCases = [
    {
      icon: Terminal,
      title: t("mail.useCaseDevTitle"),
      description: t("mail.useCaseDevDesc"),
    },
    {
      icon: Users,
      title: t("mail.useCaseEnterpriseTitle"),
      description: t("mail.useCaseEnterpriseDesc"),
    },
    {
      icon: Shield,
      title: t("mail.useCasePrivacyTitle"),
      description: t("mail.useCasePrivacyDesc"),
    },
    {
      icon: Box,
      title: t("mail.useCaseCliTitle"),
      description: t("mail.useCaseCliDesc"),
    },
  ];

  const cliCommands = [
    {
      command: "mail inbox",
      description: t("mail.cliInboxDesc"),
    },
    {
      command: "mail compose",
      description: t("mail.cliComposeDesc"),
    },
    {
      command: "mail activity",
      description: t("mail.cliActivityDesc"),
    },
    {
      command: "mail meet",
      description: t("mail.cliMeetDesc"),
    },
  ];

  const deploymentModes = [
    {
      icon: Cloud,
      title: t("mail.deployCloudTitle"),
      description: t("mail.deployCloudDesc"),
      useCase: t("mail.deployCloudUseCase"),
      features: [t("mail.deployCloudFeature1"), t("mail.deployCloudFeature2"), t("mail.deployCloudFeature3")],
    },
    {
      icon: Server,
      title: t("mail.deploySelfHostedTitle"),
      description: t("mail.deploySelfHostedDesc"),
      useCase: t("mail.deploySelfHostedUseCase"),
      features: [t("mail.deploySelfHostedFeature1"), t("mail.deploySelfHostedFeature2"), t("mail.deploySelfHostedFeature3")],
    },
    {
      icon: Box,
      title: t("mail.deployDesktopTitle"),
      description: t("mail.deployDesktopDesc"),
      useCase: t("mail.deployDesktopUseCase"),
      features: [t("mail.deployDesktopFeature1"), t("mail.deployDesktopFeature2"), t("mail.deployDesktopFeature3")],
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
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span className="font-medium">{t("mail.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("mail.heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("mail.heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("mail.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("mail.contactSales")}
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
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-purple-400" />
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

        {/* System Overview Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mail.systemTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mail.systemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {systemModules.map((module) => (
                <div key={module.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                  <div className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center mb-4">
                    <module.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{module.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mail.featuresTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mail.featuresDescription")}
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

        {/* Architecture Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mail.architectureTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mail.architectureDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {architectureComponents.map((component) => (
                <div key={component.title} className="p-6 rounded-lg border border-border bg-card">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                    <component.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{component.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto p-6 rounded-lg border border-purple-500/20 bg-purple-500/5">
              <div className="flex items-start gap-4">
                <Cloud className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t("mail.hybridTitle")}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t("mail.hybridDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Modes Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mail.deploymentTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mail.deploymentDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {deploymentModes.map((mode, index) => (
                <div key={mode.title} className="p-6 rounded-lg border border-border bg-card relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <mode.icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{mode.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{mode.description}</p>
                  <div className="p-3 rounded bg-muted/50 mb-4">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">{t("mail.useCaseLabel")}</span>
                      <br />
                      {mode.useCase}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {mode.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
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
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mail.useCasesTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mail.useCasesDescription")}
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

        {/* CLI & Developer Mode Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mail.cliTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mail.cliDescription")}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg border border-border bg-card overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-muted-foreground ml-2">terminal</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  {cliCommands.map((cmd, index) => (
                    <div key={cmd.command} className="mb-4 last:mb-0">
                      <div className="flex items-start gap-3">
                        <span className="text-green-400 shrink-0">$</span>
                        <div className="flex-1">
                          <code className="text-foreground">{cmd.command}</code>
                          <p className="text-muted-foreground mt-1 text-xs">{cmd.description}</p>
                        </div>
                      </div>
                      {index < cliCommands.length - 1 && (
                        <div className="border-t border-border mt-4 pt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mail.philosophyTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mail.philosophyDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("mail.philosophyUnificationTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mail.philosophyUnificationDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Box className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("mail.philosophyLocalTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mail.philosophyLocalDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("mail.philosophySovereigntyTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mail.philosophySovereigntyDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Workflow className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("mail.philosophyFlowTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("mail.philosophyFlowDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("mail.ctaTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("mail.ctaDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("mail.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-mail" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("mail.contribute")}
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
