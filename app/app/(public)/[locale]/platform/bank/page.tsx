import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Lock,
  Database,
  Key,
  Layers,
  Terminal,
  Server,
  Building2,
  CreditCard,
  Plug,
  FlaskConical,
  CheckCircle2,
  Globe,
  Cpu,
  Vault,
  GitBranch,
  Activity,
  FileText,
  Shield as ShieldIcon,
  Zap,
  Clock,
  TrendingUp,
} from "lucide-react";

export default async function PlatformBankPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const architectureComponents = [
    {
      icon: Database,
      title: t("bank.ledgerTitle"),
      description: t("bank.ledgerDesc"),
      details: [t("bank.ledgerDetail1"), t("bank.ledgerDetail2"), t("bank.ledgerDetail3")],
    },
    {
      icon: Vault,
      title: t("bank.vaultTitle"),
      description: t("bank.vaultDesc"),
      details: [t("bank.vaultDetail1"), t("bank.vaultDetail2"), t("bank.vaultDetail3")],
    },
    {
      icon: Layers,
      title: t("bank.orchestrationTitle"),
      description: t("bank.orchestrationDesc"),
      details: [t("bank.orchestrationDetail1"), t("bank.orchestrationDetail2"), t("bank.orchestrationDetail3")],
    },
  ];

  const capabilities = [
    {
      icon: Building2,
      title: t("bank.accountsLedgerTitle"),
      description: t("bank.accountsLedgerDesc"),
    },
    {
      icon: CreditCard,
      title: t("bank.cardIssuingTitle"),
      description: t("bank.cardIssuingDesc"),
    },
    {
      icon: Plug,
      title: t("bank.pspIntegrationTitle"),
      description: t("bank.pspIntegrationDesc"),
    },
    {
      icon: FlaskConical,
      title: t("bank.sandboxTitle"),
      description: t("bank.sandboxDesc"),
    },
    {
      icon: Globe,
      title: t("bank.multiIbanTitle"),
      description: t("bank.multiIbanDesc"),
    },
    {
      icon: GitBranch,
      title: t("bank.programmableTitle"),
      description: t("bank.programmableDesc"),
    },
  ];

  const securityFeatures = [
    {
      icon: ShieldIcon,
      title: t("bank.zeroSensitiveTitle"),
      description: t("bank.zeroSensitiveDesc"),
    },
    {
      icon: Key,
      title: t("bank.vaultAbstractionTitle"),
      description: t("bank.vaultAbstractionDesc"),
    },
    {
      icon: Lock,
      title: t("bank.complianceTitle"),
      description: t("bank.complianceDesc"),
    },
  ];

  const developerExperience = [
    {
      icon: Terminal,
      title: t("bank.apiFirstTitle"),
      description: t("bank.apiFirstDesc"),
    },
    {
      icon: Server,
      title: t("bank.cliSupportTitle"),
      description: t("bank.cliSupportDesc"),
    },
    {
      icon: Activity,
      title: t("bank.observabilityTitle"),
      description: t("bank.observabilityDesc"),
    },
    {
      icon: FileText,
      title: t("bank.structuredLogsTitle"),
      description: t("bank.structuredLogsDesc"),
    },
  ];

  const useCases = [
    {
      icon: Cpu,
      title: t("bank.aetherOfficeTitle"),
      description: t("bank.aetherOfficeDesc"),
    },
    {
      icon: Layers,
      title: t("bank.internalProductsTitle"),
      description: t("bank.internalProductsDesc"),
    },
    {
      icon: Building2,
      title: t("bank.embeddedFinanceTitle"),
      description: t("bank.embeddedFinanceDesc"),
    },
    {
      icon: Database,
      title: t("bank.treasuryAutomationTitle"),
      description: t("bank.treasuryAutomationDesc"),
    },
  ];

  const metrics = [
    {
      icon: Zap,
      value: t("bank.metricTransactionsValue"),
      label: t("bank.metricTransactionsLabel"),
    },
    {
      icon: Clock,
      value: t("bank.metricSettlementValue"),
      label: t("bank.metricSettlementLabel"),
    },
    {
      icon: TrendingUp,
      value: t("bank.metricVolumeValue"),
      label: t("bank.metricVolumeLabel"),
    },
    {
      icon: ShieldIcon,
      value: t("bank.metricComplianceValue"),
      label: t("bank.metricComplianceLabel"),
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
                <span className="font-medium">{t("bank.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("bank.heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("bank.heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("bank.deployInfrastructure")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("bank.contactSales")}
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
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("bank.visionTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("bank.visionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("bank.problem1Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("bank.problem1Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("bank.problem2Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("bank.problem2Desc")}</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                  <ShieldIcon className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("bank.problem3Title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("bank.problem3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("bank.architectureTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("bank.architectureDescription")}
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

        {/* Capabilities Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("bank.capabilitiesTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("bank.capabilitiesDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <div key={capability.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                  <div className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center mb-4">
                    <capability.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Model Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("bank.securityTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("bank.securityDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Experience Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("bank.devexTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("bank.devexDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developerExperience.map((feature) => (
                <div key={feature.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                  <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
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
                {t("bank.useCasesTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("bank.useCasesDescription")}
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

        {/* Closing Statement Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("bank.closingTitle")}
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                {t("bank.closingDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("bank.ctaTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("bank.ctaDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("bank.deployInfrastructure")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("bank.contactSales")}
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