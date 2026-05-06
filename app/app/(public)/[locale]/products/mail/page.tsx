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
        <section className="relative py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-8">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                <span>{t("mail.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("mail.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("mail.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("mail.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("mail.contactSales")}
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

        {/* System Overview Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("mail.systemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("mail.systemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemModules.map((module) => (
                <div key={module.title} className="p-8 rounded-2xl bg-card">
                  <module.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{module.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
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
                {t("mail.featuresTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("mail.featuresDescription")}
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
                {t("mail.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("mail.architectureDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto">
              {architectureComponents.map((component) => (
                <div key={component.title} className="text-center">
                  <component.icon className="w-10 h-10 text-purple-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-normal text-foreground mb-2">{component.title}</h3>
                  <p className="text-xs text-muted-foreground">{component.description}</p>
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
                {t("mail.deploymentTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("mail.deploymentDescription")}
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
                {t("mail.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("mail.useCasesDescription")}
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

        {/* CLI & Developer Mode Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("mail.cliTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("mail.cliDescription")}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
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
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("mail.philosophyTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("mail.philosophyDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-8 h-8 text-purple-400" />
                  <h3 className="text-lg font-medium text-foreground">{t("mail.philosophyUnificationTitle")}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("mail.philosophyUnificationDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Box className="w-8 h-8 text-purple-400" />
                  <h3 className="text-lg font-medium text-foreground">{t("mail.philosophyLocalTitle")}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("mail.philosophyLocalDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-purple-400" />
                  <h3 className="text-lg font-medium text-foreground">{t("mail.philosophySovereigntyTitle")}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("mail.philosophySovereigntyDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Workflow className="w-8 h-8 text-purple-400" />
                  <h3 className="text-lg font-medium text-foreground">{t("mail.philosophyFlowTitle")}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("mail.philosophyFlowDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("mail.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("mail.ctaDescription")}
              </p>
            </div>
            <div className="text-center">
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("mail.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-mail" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
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
