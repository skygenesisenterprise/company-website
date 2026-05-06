import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Cookie,
  Mail,
  Settings,
  Bell,
  Eye,
  Clock,
  BarChart3,
} from "lucide-react";

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const cookieCategories = [
    {
      icon: Shield,
      title: t("cookies.essentialTitle"),
      description: t("cookies.essentialDesc"),
      required: true,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: Settings,
      title: t("cookies.functionalTitle"),
      description: t("cookies.functionalDesc"),
      required: false,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      icon: BarChart3,
      title: t("cookies.analyticsTitle"),
      description: t("cookies.analyticsDesc"),
      required: false,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
    {
      icon: Bell,
      title: t("cookies.marketingTitle"),
      description: t("cookies.marketingDesc"),
      required: false,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
    },
  ];

  const sections = [
    {
      title: t("cookies.introTitle"),
      content: t("cookies.introContent"),
    },
    {
      title: t("cookies.whatAreTitle"),
      content: t("cookies.whatAreContent"),
    },
    {
      title: t("cookies.howWeUseTitle"),
      content: t("cookies.howWeUseContent"),
    },
    {
      title: t("cookies.categoriesTitle"),
      content: t("cookies.categoriesContent"),
    },
    {
      title: t("cookies.thirdPartyTitle"),
      content: t("cookies.thirdPartyContent"),
    },
    {
      title: t("cookies.controlTitle"),
      content: t("cookies.controlContent"),
    },
    {
      title: t("cookies.updatesTitle"),
      content: t("cookies.updatesContent"),
    },
    {
      title: t("cookies.contactTitle"),
      content: t("cookies.contactContent"),
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
                {t("cookies.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("cookies.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/privacy`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("cookies.viewPrivacy")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/terms`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("cookies.viewTerms")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Categories */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("cookies.typesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("cookies.categoriesDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {cookieCategories.map((category) => (
                <div key={category.title} className="p-8 rounded-2xl bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-14 h-14 ${category.bgColor} rounded-2xl flex items-center justify-center`}>
                        <category.icon className={`h-5 w-5 ${category.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                    </div>
                    {category.required ? (
                      <span className="text-xs font-medium px-2 py-1 rounded bg-green-500/20 text-green-400">
                        {t("cookies.required")}
                      </span>
                    ) : (
                      <span className="text-xs font-medium px-2 py-1 rounded bg-muted text-muted-foreground">
                        {t("cookies.optional")}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Settings */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("cookies.controlTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("cookies.controlDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {t("cookies.controlBrowserTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("cookies.controlBrowserDesc")}</p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {t("cookies.controlPreferencesTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("cookies.controlPreferencesDesc")}
                </p>
              </div>
              <div className="p-10 rounded-2xl bg-card">
                <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {t("cookies.controlRetentionTitle")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("cookies.controlRetentionDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Policy Content */}
        <section className="py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              <p className="text-lg text-muted-foreground">
                {t("cookies.lastUpdated")}: {t("cookies.lastUpdatedDate")}
              </p>

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
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("cookies.questionsTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("cookies.questionsDescription")}
              </p>
              <div className="mt-10">
                <a href="mailto:privacy@skygenesisenterprise.com">
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    <Mail className="h-4 w-4" />
                    {t("cookies.emailPrivacy")}
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
