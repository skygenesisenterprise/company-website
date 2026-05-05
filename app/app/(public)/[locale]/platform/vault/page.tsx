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
  Cloud,
  Home,
  Building2,
  GitBranch,
  Zap,
  Activity,
  Clock,
  Server,
  Terminal,
  Code,
  Eye,
  Globe,
  Vault,
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
      icon: Database,
      title: t("vault.auditComplianceTitle"),
      description: t("vault.auditComplianceDesc"),
    },
    {
      icon: GitBranch,
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
      icon: Key,
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
      value: t("vault.metricAccessValue"),
      label: t("vault.metricAccessLabel"),
    },
    {
      value: t("vault.metricEncryptionValue"),
      label: t("vault.metricEncryptionLabel"),
    },
    {
      value: t("vault.metricSecretsValue"),
      label: t("vault.metricSecretsLabel"),
    },
    {
      value: t("vault.metricRotationValue"),
      label: t("vault.metricRotationLabel"),
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
                <span>{t("vault.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("vault.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("vault.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("vault.deploySelfHosted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("vault.contactSales")}
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

        {/* Problem Statement Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vault.problemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vault.problemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Key className="w-10 h-10 text-red-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("vault.problem1Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("vault.problem1Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Cloud className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("vault.problem2Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("vault.problem2Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Lock className="w-10 h-10 text-yellow-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("vault.problem3Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("vault.problem3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vault.solutionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vault.solutionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Vault className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("vault.solution1Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("vault.solution1Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Users className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("vault.solution2Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("vault.solution2Desc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Cpu className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-4">{t("vault.solution3Title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("vault.solution3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vault.featuresTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vault.featuresDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="p-10 rounded-2xl bg-card">
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
                {t("vault.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vault.architectureDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {architectureComponents.map((component) => (
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
                <Shield className="w-10 h-10 text-blue-500 mb-6" />
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-4">{t("vault.zeroTrustTitle")}</h4>
                  <p className="text-muted-foreground leading-relaxed">{t("vault.zeroTrustDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Modes Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vault.deploymentTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vault.deploymentDescription")}
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
                      <span className="font-medium text-foreground">{t("vault.useCaseLabel")}</span>
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

        {/* Use Cases Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vault.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vault.useCasesDescription")}
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

        {/* Security & Trust Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vault.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vault.securityDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Shield className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-6">{t("vault.securityEncryptionTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{t("vault.securityEncryptionDesc")}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vault.securityEncryptionPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vault.securityEncryptionPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vault.securityEncryptionPoint3")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Eye className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-6">{t("vault.securityAuditTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{t("vault.securityAuditDesc")}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vault.securityAuditPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vault.securityAuditPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vault.securityAuditPoint3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Experience Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vault.devexTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vault.devexDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Code className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("vault.devexApiTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("vault.devexApiDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Terminal className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("vault.devexCliTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("vault.devexCliDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Server className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("vault.devexIntegrationTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("vault.devexIntegrationDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vault.comparisonTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vault.comparisonDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Cloud className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-6">{t("vault.traditionalVaultTitle")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0 opacity-50" />
                    <span>{t("vault.traditionalVaultPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0 opacity-50" />
                    <span>{t("vault.traditionalVaultPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0 opacity-50" />
                    <span>{t("vault.traditionalVaultPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0 opacity-50" />
                    <span>{t("vault.traditionalVaultPoint4")}</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Vault className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-6">{t("vault.aetherVaultTitle")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vault.aetherVaultPoint1")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vault.aetherVaultPoint2")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vault.aetherVaultPoint3")}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{t("vault.aetherVaultPoint4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Integration Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vault.ecosystemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vault.ecosystemDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-10 rounded-2xl bg-card">
                <Shield className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("vault.identityIntegrationTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("vault.identityIntegrationDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Globe className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("vault.edgeIntegrationTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("vault.edgeIntegrationDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <Cpu className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-lg font-medium text-foreground mb-4">{t("vault.aiIntegrationTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("vault.aiIntegrationDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("vault.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("vault.ctaDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("vault.deployNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="https://github.com/skygenesisenterprise/aether-vault" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
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
