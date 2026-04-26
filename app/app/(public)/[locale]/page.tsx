import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Users,
  Globe,
  Database,
  Lock,
  Zap,
  Code,
  BookOpen,
  Target,
  Building,
  Cloud,
  FileText,
  Rocket,
  Award,
  GitBranch,
  Activity,
  CheckCircle2,
  Star,
  Eye,
  UserCheck,
  TrendingUp,
} from "lucide-react";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const missionVision = [
    {
      icon: Target,
      title: t("home.missionTitle"),
      description: t("home.missionDesc"),
    },
    {
      icon: Globe,
      title: t("home.visionTitle"),
      description: t("home.visionDesc"),
    },
  ];

  const coreValues = [
    { label: t("home.valueSecurity"), desc: t("home.valueSecurityDesc") },
    { label: t("home.valueInnovation"), desc: t("home.valueInnovationDesc") },
    { label: t("home.valueSovereignty"), desc: t("home.valueSovereigntyDesc") },
    { label: t("home.valueEnterprise"), desc: t("home.valueEnterpriseDesc") },
  ];

  const products = [
    {
      icon: Users,
      title: t("home.aetherOfficeTitle"),
      description: t("home.aetherOfficeDesc"),
      href: "/office",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: Cloud,
      title: t("home.cloudInfraTitle"),
      description: t("home.cloudInfraDesc"),
      href: "/solutions/infrastructure",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      icon: Code,
      title: t("home.devPlatformTitle"),
      description: t("home.devPlatformDesc"),
      href: "/developer/api",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
    {
      icon: Shield,
      title: t("home.securityGovTitle"),
      description: t("home.securityGovDesc"),
      href: "/governance",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
    },
  ];

  const valueProps = [
    { icon: GitBranch, title: t("home.valueOpenSourceTitle"), desc: t("home.valueOpenSourceDesc") },
    { icon: Globe, title: t("home.valueSovereignCloudTitle"), desc: t("home.valueSovereignCloudDesc") },
    { icon: Lock, title: t("home.valueE2ETitle"), desc: t("home.valueE2EDesc") },
    { icon: Zap, title: t("home.valueReliabilityTitle"), desc: t("home.valueReliabilityDesc") },
    { icon: Building, title: t("home.valueUnifiedTitle"), desc: t("home.valueUnifiedDesc") },
    { icon: Award, title: t("home.valueEuropeanTitle"), desc: t("home.valueEuropeanDesc") },
  ];

  const featuredProducts = [
    {
      icon: Users,
      title: "Aether Office",
      subtitle: t("home.aetherOfficeSubtitle"),
      description: t("home.aetherOfficeFeaturedDesc"),
      features: [t("home.aetherFeature1"), t("home.aetherFeature2"), t("home.aetherFeature3")],
      href: "/office",
      color: "text-blue-400",
      borderColor: "border-blue-500/20",
      bgGradient: "bg-gradient-to-br from-blue-900/20 to-blue-800/10",
    },
    {
      icon: Database,
      title: "SkyDB",
      subtitle: t("home.skyDBSubtitle"),
      description: t("home.skyDBFeaturedDesc"),
      features: [t("home.skyDBFeature1"), t("home.skyDBFeature2"), t("home.skyDBFeature3")],
      href: "/solutions/infrastructure",
      color: "text-green-400",
      borderColor: "border-green-500/20",
      bgGradient: "bg-gradient-to-br from-green-900/20 to-green-800/10",
    },
  ];

  const blogPosts = [
    { date: t("home.blog1Date"), title: t("home.blog1Title"), desc: t("home.blog1Desc"), href: "/blog/zero-trust-implementation" },
    { date: t("home.blog2Date"), title: t("home.blog2Title"), desc: t("home.blog2Desc"), href: "/blog/european-data-sovereignty" },
  ];

  const changelog = [
    { version: t("home.changelog1Version"), title: t("home.changelog1Title"), desc: t("home.changelog1Desc") },
    { version: t("home.changelog2Version"), title: t("home.changelog2Title"), desc: t("home.changelog2Desc") },
  ];

  const whitepapers = [
    { title: t("home.whitepaper1Title"), desc: t("home.whitepaper1Desc"), href: "/whitepaper/zero-trust" },
    { title: t("home.whitepaper2Title"), desc: t("home.whitepaper2Desc"), href: "/whitepaper/digital-sovereignty" },
  ];

  const openSourceStats = [
    { icon: GitBranch, value: "50+", label: t("home.osProjects"), desc: t("home.osProjectsDesc"), color: "text-green-400", borderColor: "border-green-500/20", bgGradient: "bg-gradient-to-br from-green-900/20 to-green-800/10" },
    { icon: Code, value: "1M+", label: t("home.osCode"), desc: t("home.osCodeDesc"), color: "text-blue-400", borderColor: "border-blue-500/20", bgGradient: "bg-gradient-to-br from-blue-900/20 to-blue-800/10" },
    { icon: Users, value: "Active", label: t("home.osCommunity"), desc: t("home.osCommunityDesc"), color: "text-purple-400", borderColor: "border-purple-500/20", bgGradient: "bg-gradient-to-br from-purple-900/20 to-purple-800/10" },
  ];

  const careerBenefits = [
    { icon: Star, title: t("home.careerBenefit1Title"), desc: t("home.careerBenefit1Desc") },
    { icon: Star, title: t("home.careerBenefit2Title"), desc: t("home.careerBenefit2Desc") },
    { icon: Star, title: t("home.careerBenefit3Title"), desc: t("home.careerBenefit3Desc") },
  ];

  const openPositions = [
    { title: t("home.position1Title"), desc: t("home.position1Desc") },
    { title: t("home.position2Title"), desc: t("home.position2Desc") },
    { title: t("home.position3Title"), desc: t("home.position3Desc") },
  ];

  const ecosystemCategories = [
    {
      title: t("home.ecosystemTechTitle"),
      color: "text-blue-400",
      borderColor: "border-blue-500/20",
      orgs: [
        { name: "Linux Foundation", desc: t("home.linuxFoundationDesc"), status: t("home.linuxFoundationStatus") },
        { name: "CNCF", desc: t("home.cncfDesc"), status: t("home.cncfStatus") },
        { name: "OpenAPI Initiative", desc: t("home.openApiDesc"), status: t("home.openApiStatus") },
        { name: "SPDX", desc: t("home.spdxDesc"), status: t("home.spdxStatus") },
        { name: "OpenSSF", desc: t("home.openssfDesc"), status: t("home.openssfStatus") },
        { name: "The Document Foundation", desc: t("home.tdfDesc"), status: t("home.tdfStatus") },
        { name: "Open Source Europe Initiative", desc: t("home.oseiDesc"), status: t("home.oseiStatus") },
      ],
    },
    {
      title: t("home.ecosystemStandardsTitle"),
      color: "text-green-400",
      borderColor: "border-green-500/20",
      orgs: [
        { name: "ISO Ecosystem", desc: t("home.isoDesc"), status: t("home.isoStatus") },
        { name: "ETSI", desc: t("home.etsiDesc"), status: t("home.etsiStatus") },
        { name: "ENISA Programs", desc: t("home.enisaDesc"), status: t("home.enisaStatus") },
        { name: "eIDAS Ecosystem", desc: t("home.eidasDesc"), status: t("home.eidasStatus") },
      ],
    },
    {
      title: t("home.ecosystemSovereigntyTitle"),
      color: "text-purple-400",
      borderColor: "border-purple-500/20",
      orgs: [
        { name: "Gaia-X", desc: t("home.gaiaxDesc"), status: t("home.gaiaxStatus") },
        { name: "European Cloud Industrial Alliance", desc: t("home.eciaDesc"), status: t("home.eciaStatus") },
        { name: "EU Digital Innovation Hubs", desc: t("home.eudihDesc"), status: t("home.eudihStatus") },
      ],
    },
    {
      title: t("home.ecosystemIndustryTitle"),
      color: "text-orange-400",
      borderColor: "border-orange-500/20",
      orgs: [
        { name: "Banking & FinTech Networks", desc: t("home.bankingDesc"), status: t("home.bankingStatus") },
        { name: "Cloud & Infrastructure Ecosystems", desc: t("home.cloudEcoDesc"), status: t("home.cloudEcoStatus") },
        { name: "Aerospace Technology Consortia", desc: t("home.aerospaceDesc"), status: t("home.aerospaceStatus") },
        { name: "Logistics Innovation Alliances", desc: t("home.logisticsDesc"), status: t("home.logisticsStatus") },
      ],
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
                {t("home.heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("home.heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/office`}>
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("home.discoverAether")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/vision`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("home.exploreVision")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("home.missionVisionTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("home.missionVisionDesc")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {missionVision.map((item) => (
                <div key={item.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-center">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {coreValues.map((value) => (
                <div key={value.label} className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">{value.label}</div>
                  <div className="text-sm text-muted-foreground">{value.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Ecosystem Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("home.productEcosystemTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("home.productEcosystemDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors group">
                  <div className={`w-16 h-16 ${product.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-opacity`}>
                    <product.icon className={`w-8 h-8 ${product.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{product.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{product.description}</p>
                  <Link href={`/${locale}${product.href}`} className={`text-sm font-semibold flex items-center gap-1 ${product.color} hover:opacity-80 transition-opacity`}>
                    {t("home.explore")} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Sky Genesis Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("home.whyUsTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("home.whyUsDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueProps.map((prop) => (
                <div key={prop.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                  <div className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center mb-4">
                    <prop.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{prop.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("home.featuredProductsTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("home.featuredProductsDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.title} className={`p-8 rounded-lg border ${product.borderColor} ${product.bgGradient}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 ${product.bgColor} rounded-xl flex items-center justify-center`}>
                      <product.icon className={`w-8 h-8 ${product.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{product.title}</h3>
                      <p className={product.color}>{product.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/${locale}${product.href}`} className={`inline-flex items-center gap-2 font-semibold ${product.color} hover:opacity-80 transition-opacity`}>
                    {t("home.learnMore")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("home.latestUpdatesTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("home.latestUpdatesDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Blog Posts */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("home.blogTitle")}</h3>
                </div>
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <div key={post.title} className="p-4 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                      <div className="text-xs text-muted-foreground mb-2">{post.date}</div>
                      <h4 className="font-semibold text-foreground mb-2 hover:text-blue-400 transition-colors">
                        <Link href={`/${locale}${post.href}`}>{post.title}</Link>
                      </h4>
                      <p className="text-sm text-muted-foreground">{post.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href={`/${locale}/blog`} className="text-sm font-medium flex items-center gap-1 text-blue-400 hover:opacity-80 transition-opacity">
                  {t("home.viewAll")} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Changelog */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Activity className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("home.changelogTitle")}</h3>
                </div>
                <div className="space-y-4">
                  {changelog.map((item) => (
                    <div key={item.title} className="p-4 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                      <div className="text-xs text-muted-foreground mb-2">{item.version}</div>
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href={`/${locale}/changelog`} className="text-sm font-medium flex items-center gap-1 text-green-400 hover:opacity-80 transition-opacity">
                  {t("home.viewAll")} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Whitepapers */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold text-foreground">{t("home.whitepapersTitle")}</h3>
                </div>
                <div className="space-y-4">
                  {whitepapers.map((paper) => (
                    <div key={paper.title} className="p-4 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                      <div className="text-xs text-muted-foreground mb-2">{t("home.whitepaperNew")}</div>
                      <h4 className="font-semibold text-foreground mb-2 hover:text-purple-400 transition-colors">
                        <Link href={`/${locale}${paper.href}`}>{paper.title}</Link>
                      </h4>
                      <p className="text-sm text-muted-foreground">{paper.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href={`/${locale}/whitepaper`} className="text-sm font-medium flex items-center gap-1 text-purple-400 hover:opacity-80 transition-opacity">
                  {t("home.viewAll")} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Open-Source Commitment Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("home.openSourceTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("home.openSourceDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {openSourceStats.map((stat) => (
                <div key={stat.label} className={`p-8 rounded-lg border ${stat.borderColor} ${stat.bgGradient} text-center hover:border-foreground/20 transition-colors`}>
                  <div className="w-16 h-16 rounded-xl bg-card flex items-center justify-center mx-auto mb-6">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground mb-4">{stat.label}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-full text-muted-foreground text-sm mb-8">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-3" />
                {t("home.fullyTransparent")}
              </div>
              <div className="flex justify-center">
                <Link href={`/${locale}/developer/open-source`}>
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("home.exploreOSS")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm mb-8">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse" />
                {t("home.weAreHiring")}
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("home.careersTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("home.careersDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-lg border border-orange-500/20 bg-linear-to-br from-orange-900/20 to-red-900/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{t("home.whyJoinUs")}</h3>
                    <p className="text-orange-400 text-sm">{t("home.buildWhatMatters")}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {careerBenefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start space-x-3">
                      <benefit.icon className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">{benefit.title}</div>
                        <div className="text-sm text-muted-foreground">{benefit.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-lg border border-blue-500/20 bg-linear-to-br from-blue-900/20 to-purple-900/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <UserCheck className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{t("home.lookingFor")}</h3>
                    <p className="text-blue-400 text-sm">{t("home.talentInnovation")}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {openPositions.map((position) => (
                    <div key={position.title} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">{position.title}</div>
                        <div className="text-sm text-muted-foreground">{position.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-full text-muted-foreground text-sm mb-8">
                <TrendingUp className="w-4 h-4 mr-3" />
                {t("home.openPositions")}
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href={`/${locale}/careers`}>
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("home.exploreCareers")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/careers#culture`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {t("home.learnCulture")}
                    <Eye className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Ecosystem Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-8">
                <Target className="w-4 h-4 mr-3" />
                {t("home.strategicVision")}
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("home.ecosystemTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("home.ecosystemDesc")}
              </p>
            </div>
            <div className="space-y-20">
              {ecosystemCategories.map((category) => (
                <div key={category.title}>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                    <div className={`w-16 h-0.5 bg-linear-to-r ${category.color} to-transparent`} />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {category.orgs.map((org) => (
                      <div key={org.name} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors text-center group">
                        <div className="w-12 h-12 bg-card border border-border rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <div className="w-6 h-6 bg-muted rounded" />
                        </div>
                        <div className="text-sm font-medium text-foreground group-hover:text-foreground/80 transition-colors">{org.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{org.desc}</div>
                        <div className="mt-2">
                          <span className={`inline-flex items-center px-2 py-1 bg-card border ${category.borderColor} rounded-full text-xs ${category.color}`}>
                            {org.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-20">
              <div className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-full text-muted-foreground text-sm mb-8">
                <TrendingUp className="w-4 h-4 mr-3" />
                {t("home.europeanExcellence")}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                {t("home.ecosystemCommitment")}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href={`/${locale}/company/about`}>
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
                    <Target className="h-5 w-5" />
                    {t("home.strategicVisionLink")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/governance`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    <Shield className="h-5 w-5" />
                    {t("home.governanceLink")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-8">
                <Zap className="w-4 h-4 mr-3" />
                {t("home.transformationJourney")}
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {t("home.ctaTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t("home.ctaDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="p-8 rounded-lg border border-blue-500/20 bg-linear-to-br from-blue-900/20 to-blue-800/10 text-center hover:border-foreground/20 transition-colors">
                <div className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t("home.consultationTitle")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("home.consultationDesc")}</p>
              </div>
            </div>
            <div className="text-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="gap-2 h-12 px-6 text-base">
                  {t("home.startTransformation")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale as "fr" | "be_fr" | "be_nl" | "ch_fr"} />
    </div>
  );
}