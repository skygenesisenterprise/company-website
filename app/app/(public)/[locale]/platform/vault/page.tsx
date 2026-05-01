import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Key,
  Lock,
  Users,
  Cpu,
  Database,
  Layers,
  CheckCircle2,
  ArrowDown,
  Cloud,
  Home,
  Building2,
  GitBranch,
  RefreshCw,
  Power,
  Target,
  Zap,
  Activity,
  Clock,
  Server,
  Terminal,
  Code,
  FileText,
  Eye,
  Fingerprint,
  Vault,
  Globe,
} from "lucide-react";

export default async function PlatformVaultPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const features = [
    {
      icon: Key,
      title: t("vault.secretsManagementTitle"),
      description: t("vault.secretsManagementDesc"),
    },
    {
      icon: Users,
      title: t("vault.userVaultTitle"),
      description: t("vault.userVaultDesc"),
    },
    {
      icon: Cpu,
      title: t("vault.machineIdentityTitle"),
      description: t("vault.machineIdentityDesc"),
    },
    {
      icon: Lock,
      title: t("vault.encryptionTitle"),
      description: t("vault.encryptionDesc"),
    },
    {
      icon: FileText,
      title: t("vault.auditComplianceTitle"),
      description: t("vault.auditComplianceDesc"),
    },
    {
      icon: RefreshCw,
      title: t("vault.autoRotationTitle"),
      description: t("vault.autoRotationDesc"),
    },
  ];

  const deploymentModes = [
    {
      icon: Home,
      title: t("vault.standaloneTitle"),
      description: t("vault.standaloneDesc"),
      useCase: t("vault.standaloneUseCase"),
      features: [t("vault.standaloneFeature1"), t("vault.standaloneFeature2"), t("vault.standaloneFeature3")],
    },
    {
      icon: Building2,
      title: t("vault.integratedTitle"),
      description: t("vault.integratedDesc"),
      useCase: t("vault.integratedUseCase"),
      features: [t("vault.integratedFeature1"), t("vault.integratedFeature2"), t("vault.integratedFeature3")],
    },
    {
      icon: Cloud,
      title: t("vault.distributedTitle"),
      description: t("vault.distributedDesc"),
      useCase: t("vault.distributedUseCase"),
      features: [t("vault.distributedFeature1"), t("vault.distributedFeature2"), t("vault.distributedFeature3")],
    },
  ];

  const useCases = [
    {
      icon: Terminal,
      title: t("vault.useCaseDevOpsTitle"),
      description: t("vault.useCaseDevOpsDesc"),
    },
    {
      icon: Database,
      title: t("vault.useCaseCredentialsTitle"),
      description: t("vault.useCaseCredentialsDesc"),
    },
    {
      icon: Shield,
      title: t("vault.useCaseProtectionTitle"),
      description: t("vault.useCaseProtectionDesc"),
    },
    {
      icon: Layers,
      title: t("vault.useCaseMultiCloudTitle"),
      description: t("vault.useCaseMultiCloudDesc"),
    },
  ];

  const architectureComponents = [
    {
      icon: Vault,
      title: t("vault.archSecretsEngineTitle"),
      description: t("vault.archSecretsEngineDesc"),
      details: [t("vault.archSecretsEngineDetail1"), t("vault.archSecretsEngineDetail2"), t("vault.archSecretsEngineDetail3")],
    },
    {
      icon: Fingerprint,
      title: t("vault.archIdentityLayerTitle"),
      description: t("vault.archIdentityLayerDesc"),
      details: [t("vault.archIdentityLayerDetail1"), t("vault.archIdentityLayerDetail2"), t("vault.archIdentityLayerDetail3")],
    },
    {
      icon: GitBranch,
      title: t("vault.archPolicyEngineTitle"),
      description: t("vault.archPolicyEngineDesc"),
      details: [t("vault.archPolicyEngineDetail1"), t("vault.archPolicyEngineDetail2"), t("vault.archPolicyEngineDetail3")],
    },
  ];

  const metrics = [
    {
      icon: Zap,
      value: t("vault.metricAccessValue"),
      label: t("vault.metricAccessLabel"),
    },
    {
      icon: Shield,
      value: t("vault.metricEncryptionValue"),
      label: t("vault.metricEncryptionLabel"),
    },
    {
      icon: Activity,
      value: t("vault.metricSecretsValue"),
      label: t("vault.metricSecretsLabel"),
    },
    {
      icon: Clock,
      value: t("vault.metricRotationValue"),
      label: t("vault.metricRotationLabel"),
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
                <span className="font-medium">{t("vault.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("vault.heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("vault.heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("vault.deploySelfHosted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("vault.contactSales")}
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

        {/* Problem Statement Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("vault.problemTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("vault.problemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Key className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("vault.problem1Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.problem1Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("vault.problem2Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.problem2Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("vault.problem3Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.problem3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("vault.solutionTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("vault.solutionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Vault className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("vault.solution1Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.solution1Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("vault.solution2Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.solution2Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("vault.solution3Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.solution3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("vault.featuresTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("vault.featuresDescription")}
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
                {t("vault.architectureTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("vault.architectureDescription")}
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
            <div className="mt-12 max-w-3xl mx-auto p-6 rounded-lg border border-green-500/20 bg-green-500/5">
              <div className="flex items-start gap-4">
                <Power className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t("vault.zeroTrustTitle")}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.zeroTrustDesc")}</p>
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
                {t("vault.deploymentTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("vault.deploymentDescription")}
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
                      <span className="font-semibold text-foreground">{t("vault.useCaseLabel")}</span>
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

        {/* Use Cases Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("vault.useCasesTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("vault.useCasesDescription")}
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

        {/* Security & Trust Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("vault.securityTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("vault.securityDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("vault.securityEncryptionTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t("vault.securityEncryptionDesc")}</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vault.securityEncryptionPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vault.securityEncryptionPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vault.securityEncryptionPoint3")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("vault.securityAuditTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t("vault.securityAuditDesc")}</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vault.securityAuditPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vault.securityAuditPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vault.securityAuditPoint3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Experience Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("vault.devexTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("vault.devexDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("vault.devexApiTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.devexApiDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Terminal className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("vault.devexCliTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.devexCliDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("vault.devexIntegrationTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.devexIntegrationDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("vault.comparisonTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("vault.comparisonDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Cloud className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("vault.traditionalVaultTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("vault.traditionalVaultPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("vault.traditionalVaultPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("vault.traditionalVaultPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{t("vault.traditionalVaultPoint4")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-lg border border-green-500/20 bg-green-500/5">
                <div className="flex items-center gap-3 mb-6">
                  <Vault className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-foreground">{t("vault.aetherVaultTitle")}</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vault.aetherVaultPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vault.aetherVaultPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vault.aetherVaultPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{t("vault.aetherVaultPoint4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Integration Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("vault.ecosystemTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("vault.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("vault.identityIntegrationTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.identityIntegrationDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("vault.edgeIntegrationTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.edgeIntegrationDesc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("vault.aiIntegrationTitle")}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("vault.aiIntegrationDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("vault.ctaTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("vault.ctaDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("vault.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-vault" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("vault.contribute")}
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
