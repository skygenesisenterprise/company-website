import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Globe,
  Shield,
  Users,
  Handshake,
  Building2,
} from "lucide-react";

export default async function PartnersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const partnershipLevels = [
    {
      title: t("partners.technologyTitle"),
      description: t("partners.technologyDesc"),
      benefits: [
        t("partners.benefit1"),
        t("partners.benefit2"),
        t("partners.benefit3"),
        t("partners.benefit4"),
      ],
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/20",
      bgGradient: "bg-gradient-to-br from-blue-900/20 to-blue-800/10",
    },
    {
      title: t("partners.solutionTitle"),
      description: t("partners.solutionDesc"),
      benefits: [
        t("partners.benefit5"),
        t("partners.benefit6"),
        t("partners.benefit7"),
        t("partners.benefit8"),
      ],
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/20",
      bgGradient: "bg-gradient-to-br from-green-900/20 to-green-800/10",
    },
    {
      title: t("partners.managedTitle"),
      description: t("partners.managedDesc"),
      benefits: [
        t("partners.benefit9"),
        t("partners.benefit10"),
        t("partners.benefit11"),
        t("partners.benefit12"),
      ],
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/20",
      bgGradient: "bg-gradient-to-br from-purple-900/20 to-purple-800/10",
    },
  ];

  const featuredPartners = [
    { name: "AWS", category: t("partners.categoryCloud"), logo: "AWS", color: "text-orange-400", bgColor: "bg-orange-500/20" },
    { name: "Microsoft Azure", category: t("partners.categoryCloud"), logo: "Azure", color: "text-blue-400", bgColor: "bg-blue-500/20" },
    { name: "Google Cloud", category: t("partners.categoryCloud"), logo: "GCP", color: "text-green-400", bgColor: "bg-green-500/20" },
    { name: "Kubernetes", category: t("partners.categoryContainer"), logo: "K8s", color: "text-blue-400", bgColor: "bg-blue-500/20" },
    { name: "Docker", category: t("partners.categoryContainer"), logo: "Docker", color: "text-blue-400", bgColor: "bg-blue-500/20" },
    { name: "Terraform", category: t("partners.categoryInfrastructure"), logo: "TF", color: "text-purple-400", bgColor: "bg-purple-500/20" },
    { name: "Datadog", category: t("partners.categoryMonitoring"), logo: "DD", color: "text-green-400", bgColor: "bg-green-500/20" },
    { name: "HashiCorp", category: t("partners.categoryInfrastructure"), logo: "HC", color: "text-purple-400", bgColor: "bg-purple-500/20" },
  ];

  const testimonials = [
    {
      quote: t("partners.testimonial1Quote"),
      author: t("partners.testimonial1Author"),
      role: t("partners.testimonial1Role"),
    },
    {
      quote: t("partners.testimonial2Quote"),
      author: t("partners.testimonial2Author"),
      role: t("partners.testimonial2Role"),
    },
    {
      quote: t("partners.testimonial3Quote"),
      author: t("partners.testimonial3Author"),
      role: t("partners.testimonial3Role"),
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
                <span className="font-medium">{t("home.enterpriseBadge")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("partners.heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("partners.heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("partners.becomePartner")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/docs`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("partners.viewDocumentation")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
                <Handshake className="w-4 h-4 mr-3" />
                {t("partners.featuredTitle")}
              </div>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("partners.featuredDescription")}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors text-center group"
                >
                  <div className={`w-16 h-16 ${partner.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:opacity-80 transition-opacity`}>
                    <span className={`text-lg font-semibold ${partner.color}`}>{partner.logo}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Levels */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm mb-6">
                <Star className="w-4 h-4 mr-3" />
                {t("partners.levelsTitle")}
              </div>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("partners.levelsDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {partnershipLevels.map((level) => (
                <div
                  key={level.title}
                  className={`p-8 rounded-lg border ${level.borderColor} ${level.bgGradient} hover:border-foreground/20 transition-colors`}
                >
                  <div className={`w-16 h-16 ${level.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <Building2 className={`w-8 h-8 ${level.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{level.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {level.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {level.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link href={`/${locale}/contact`}>
                      <Button variant="outline" className="w-full">
                        {t("partners.learnMore")}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
                <Star className="w-4 h-4 mr-3" />
                {t("partners.testimonialsTitle")}
              </div>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("partners.testimonialsDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="text-base font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
                  <Shield className="w-4 h-4 mr-3" />
                  {t("partners.whyTitle")}
                </div>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("partners.whyDescription")}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                    <Shield className="h-6 w-6 text-blue-400 mb-2" />
                    <div className="text-lg font-semibold text-foreground">
                      {t("partners.whyStat1")}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("partners.whyStat1Label")}
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                    <Users className="h-6 w-6 text-green-400 mb-2" />
                    <div className="text-lg font-semibold text-foreground">
                      {t("partners.whyStat2")}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("partners.whyStat2Label")}
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                    <Globe className="h-6 w-6 text-purple-400 mb-2" />
                    <div className="text-lg font-semibold text-foreground">
                      {t("partners.whyStat3")}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("partners.whyStat3Label")}
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                    <Handshake className="h-6 w-6 text-orange-400 mb-2" />
                    <div className="text-lg font-semibold text-foreground">
                      {t("partners.whyStat4")}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("partners.whyStat4Label")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-lg border border-blue-500/20 bg-linear-to-br from-blue-900/20 to-blue-800/10">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {t("partners.ctaTitle")}
                </h3>
                <p className="text-muted-foreground mb-6">{t("partners.ctaDescription")}</p>
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="w-full gap-2">
                    {t("partners.applyNow")}
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
