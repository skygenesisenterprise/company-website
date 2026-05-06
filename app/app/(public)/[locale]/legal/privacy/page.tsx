import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Lock,
  Eye,
  Users,
  Globe,
  Mail,
  FileText,
  CheckCircle2,
  Calendar,
  Server,
  Database,
} from "lucide-react";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const dataTypes = [
    {
      icon: Users,
      title: t("privacy.personalDataTitle"),
      description: t("privacy.personalDataDesc"),
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: Server,
      title: t("privacy.usageDataTitle"),
      description: t("privacy.usageDataDesc"),
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      icon: Globe,
      title: t("privacy.technicalDataTitle"),
      description: t("privacy.technicalDataDesc"),
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
  ];

  const rights = [
    { title: t("privacy.rightAccess"), description: t("privacy.rightAccessDesc") },
    { title: t("privacy.rightRectification"), description: t("privacy.rightRectificationDesc") },
    { title: t("privacy.rightErasure"), description: t("privacy.rightErasureDesc") },
    { title: t("privacy.rightPortability"), description: t("privacy.rightPortabilityDesc") },
    { title: t("privacy.rightObject"), description: t("privacy.rightObjectDesc") },
    { title: t("privacy.rightWithdraw"), description: t("privacy.rightWithdrawDesc") },
  ];

  const sections = [
    {
      title: t("privacy.introTitle"),
      content: t("privacy.introContent"),
    },
    {
      title: t("privacy.collectionTitle"),
      content: t("privacy.collectionContent"),
    },
    {
      title: t("privacy.usageTitle"),
      content: t("privacy.usageContent"),
    },
    {
      title: t("privacy.sharingTitle"),
      content: t("privacy.sharingContent"),
    },
    {
      title: t("privacy.securityTitle"),
      content: t("privacy.securityContent"),
    },
    {
      title: t("privacy.retentionTitle"),
      content: t("privacy.retentionContent"),
    },
    {
      title: t("privacy.yourRightsTitle"),
      content: t("privacy.yourRightsContent"),
    },
    {
      title: t("privacy.childrenTitle"),
      content: t("privacy.childrenContent"),
    },
    {
      title: t("privacy.changesTitle"),
      content: t("privacy.changesContent"),
    },
    {
      title: t("privacy.contactTitle"),
      content: t("privacy.contactContent"),
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
                <span>{t("home.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("privacy.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("privacy.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("privacy.contactUs")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://docs.skygenesisenterprise.com/">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("privacy.viewDocs")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Data We Collect */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("privacy.dataWeCollect")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("privacy.dataWeCollectDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {dataTypes.map((data) => (
                <div
                  key={data.title}
                  className="p-10 rounded-2xl bg-card"
                >
                  <div className={`w-14 h-14 ${data.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <data.icon className={`w-7 h-7 ${data.color}`} />
                  </div>
                  <h3 className="text-2xl font-medium text-foreground mb-4">{data.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("privacy.yourRightsTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("privacy.yourRightsDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rights.map((right) => (
                <div key={right.title} className="p-8 rounded-2xl bg-card">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-base font-medium text-foreground mb-3">{right.title}</h3>
                      <p className="text-sm text-muted-foreground">{right.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-muted-foreground mb-12">
              {t("privacy.lastUpdated")}: {t("privacy.lastUpdatedDate")}
            </p>

            <div className="space-y-16">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-medium text-foreground mb-4">{section.title}</h2>
                  <div className="text-muted-foreground space-y-4">
                    {section.content.split("\n\n").map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("privacy.questionsTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("privacy.questionsDescription")}
              </p>
              <div className="mt-10">
                <a href="mailto:privacy@skygenesisenterprise.com">
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    <Mail className="h-4 w-4" />
                    {t("privacy.emailPrivacy")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale as "fr" | "be_fr" | "be_nl" | "ch_fr"} />
    </div>
  );
}
