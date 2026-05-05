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
        <section className="relative py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-8">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span>{t("bank.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("bank.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("bank.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("bank.deployInfrastructure")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("bank.contactSales")}
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

        {/* Vision Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("bank.visionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("bank.visionDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {["problem1", "problem2", "problem3"].map((problem, i) => (
                <div key={problem} className="p-10 rounded-2xl bg-card">
                  <h3 className="text-xl font-medium text-foreground mb-4">{t(`bank.${problem}Title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`bank.${problem}Desc`)}</p>
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
                {t("bank.architectureTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("bank.architectureDescription")}
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
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("bank.capabilitiesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("bank.capabilitiesDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <div key={capability.title} className="p-8 rounded-2xl bg-card">
                  <capability.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Model Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("bank.securityTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("bank.securityDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="p-10 rounded-2xl bg-card text-center">
                  <feature.icon className="w-10 h-10 text-foreground mx-auto mb-6 opacity-70" />
                  <h3 className="text-lg font-medium text-foreground mb-4">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Experience Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("bank.devexTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("bank.devexDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developerExperience.map((feature) => (
                <div key={feature.title} className="p-8 rounded-2xl bg-card">
                  <feature.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
                {t("bank.useCasesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("bank.useCasesDescription")}
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

        {/* Closing Statement Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("bank.closingTitle")}
              </h2>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                {t("bank.closingDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("bank.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("bank.ctaDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("bank.deployInfrastructure")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href={`/${locale}/contact`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
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