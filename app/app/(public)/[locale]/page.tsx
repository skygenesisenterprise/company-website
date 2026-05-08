/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /[locale]/page.tsx
 * Layer: Public Page
 * Purpose: Presents the SGE Platform as the technical foundation of the ecosystem.
 *
 * Stability: Active
 * Owner: SGE Platform
 * Contact: contact@skygenesisenterprise.com
 */
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Building,
  CheckCircle2,
  Cloud,
  Code,
  Database,
  FileText,
  GitBranch,
  Globe,
  Lock,
  Network,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });

  const projectStatus = [
    {
      icon: Users,
      title: "Aether Office",
      status: t("home.statusAdvancedDevelopment"),
      description: t("home.projectAetherDesc"),
      modules: [t("home.moduleMail"), t("home.moduleMeet"), t("home.moduleChat"), t("home.moduleSheets")],
    },
    {
      icon: Database,
      title: "SkyDB",
      status: t("home.statusAdvancedPrototype"),
      description: t("home.projectSkyDBDesc"),
      modules: [t("home.moduleStorage"), t("home.moduleApi"), t("home.moduleReplication"), t("home.moduleIntegration")],
    },
    {
      icon: Cloud,
      title: t("home.projectCloudTitle"),
      status: t("home.statusConsolidation"),
      description: t("home.projectCloudDesc"),
      modules: [t("home.moduleEdge"), t("home.moduleNetwork"), t("home.moduleMonitoring"), t("home.moduleSecurity")],
    },
    {
      icon: Code,
      title: t("home.devPlatformTitle"),
      status: t("home.statusProgressiveOpening"),
      description: t("home.projectDeveloperDesc"),
      modules: [t("home.moduleApi"), t("home.moduleCli"), t("home.moduleDocumentation"), t("home.moduleOpenSource")],
    },
  ];

  const products = [
    {
      icon: Users,
      title: t("home.aetherOfficeTitle"),
      description: t("home.aetherOfficeDesc"),
      href: "/solutions/workplace",
      color: "text-blue-400",
    },
    {
      icon: Cloud,
      title: t("home.cloudInfraTitle"),
      description: t("home.cloudInfraDesc"),
      href: "/solutions/infrastructure",
      color: "text-green-400",
    },
    {
      icon: Code,
      title: t("home.devPlatformTitle"),
      description: t("home.devPlatformDesc"),
      href: "/developers/api",
      color: "text-purple-400",
    },
    {
      icon: Shield,
      title: t("home.securityGovTitle"),
      description: t("home.securityGovDesc"),
      href: "/legal/security",
      color: "text-orange-400",
    },
  ];

  const featuredProducts = [
    {
      icon: Users,
      title: "Aether Office",
      maturity: t("home.statusAdvancedDevelopment"),
      subtitle: t("home.aetherOfficeSubtitle"),
      description: t("home.aetherOfficeFeaturedDesc"),
      features: [t("home.aetherFeature1"), t("home.aetherFeature2"), t("home.aetherFeature3")],
      href: "/solutions/workplace",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: Database,
      title: "SkyDB",
      maturity: t("home.skyDBMaturity"),
      subtitle: t("home.skyDBSubtitle"),
      description: t("home.skyDBFeaturedDesc"),
      features: [t("home.skyDBFeature1"), t("home.skyDBFeature2"), t("home.skyDBFeature3")],
      href: "/solutions/infrastructure",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
  ];

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

  const valueProps = [
    { icon: GitBranch, title: t("home.valueOpenSourceTitle"), desc: t("home.valueOpenSourceDesc") },
    { icon: Globe, title: t("home.valueSovereignCloudTitle"), desc: t("home.valueSovereignCloudDesc") },
    { icon: Lock, title: t("home.valueE2ETitle"), desc: t("home.valueE2EDesc") },
    { icon: Zap, title: t("home.valueReliabilityTitle"), desc: t("home.valueReliabilityDesc") },
    { icon: Building, title: t("home.valueUnifiedTitle"), desc: t("home.valueUnifiedDesc") },
    { icon: Shield, title: t("home.valueEuropeanTitle"), desc: t("home.valueEuropeanDesc") },
  ];

  const buildingBlocks = [
    {
      icon: Users,
      title: t("home.blockCollabTitle"),
      description: t("home.blockCollabDesc"),
    },
    {
      icon: Network,
      title: t("home.blockInfraTitle"),
      description: t("home.blockInfraDesc"),
    },
    {
      icon: Code,
      title: t("home.blockDevTitle"),
      description: t("home.blockDevDesc"),
    },
  ];

  const blogPosts = [
    { date: t("home.blog1Date"), title: t("home.blog1Title"), desc: t("home.blog1Desc"), href: "/blog/zero-trust-implementation" },
    { date: t("home.blog2Date"), title: t("home.blog2Title"), desc: t("home.blog2Desc"), href: "/blog/european-data-sovereignty" },
  ];

  const progressNotes = [
    { version: t("home.changelog1Version"), title: t("home.changelog1Title"), desc: t("home.changelog1Desc") },
    { version: t("home.changelog2Version"), title: t("home.changelog2Title"), desc: t("home.changelog2Desc") },
  ];

  const technicalNotes = [
    { title: t("home.whitepaper1Title"), desc: t("home.whitepaper1Desc") },
    { title: t("home.whitepaper2Title"), desc: t("home.whitepaper2Desc") },
  ];

  const openSourceSignals = [
    {
      icon: GitBranch,
      value: t("home.osProjectsValue"),
      label: t("home.osProjects"),
      desc: t("home.osProjectsDesc"),
      color: "text-green-400",
    },
    {
      icon: Code,
      value: t("home.osCodeValue"),
      label: t("home.osCode"),
      desc: t("home.osCodeDesc"),
      color: "text-blue-400",
    },
    {
      icon: Users,
      value: t("home.osCommunityValue"),
      label: t("home.osCommunity"),
      desc: t("home.osCommunityDesc"),
      color: "text-purple-400",
    },
  ];

  const ecosystemCategories = [
    {
      title: t("home.ecosystemTechTitle"),
      color: "text-blue-400",
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
      orgs: [
        { name: "Gaia-X", desc: t("home.gaiaxDesc"), status: t("home.gaiaxStatus") },
        { name: "European Cloud Industrial Alliance", desc: t("home.eciaDesc"), status: t("home.eciaStatus") },
        { name: "EU Digital Innovation Hubs", desc: t("home.eudihDesc"), status: t("home.eudihStatus") },
      ],
    },
    {
      title: t("home.ecosystemIndustryTitle"),
      color: "text-orange-400",
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
        <section className="relative py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-8">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span>{t("home.enterpriseBadge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {t("home.heroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("home.heroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/solutions/workplace`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("home.discoverAether")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#project-status">
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("home.exploreVision")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="project-status" className="py-24 bg-muted/20 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("home.projectStatusTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("home.projectStatusDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectStatus.map((project) => (
                <div key={project.title} className="p-7 rounded-2xl bg-card border border-border/50">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <project.icon className="w-8 h-8 text-foreground opacity-80" />
                    <span className="rounded-full border border-border/70 px-3 py-1 text-[11px] text-muted-foreground">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.modules.map((module) => (
                      <span key={module} className="rounded-full bg-muted px-3 py-1 text-[11px] text-muted-foreground">
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("home.productEcosystemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("home.productEcosystemDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link
                  key={product.title}
                  href={`/${locale}${product.href}`}
                  className="group p-8 rounded-2xl bg-card hover:bg-card/80 transition-colors"
                >
                  <product.icon className={`w-10 h-10 ${product.color} mb-6`} />
                  <h3 className="text-lg font-medium text-foreground mb-3">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {t("home.explore")}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("home.featuredProductsTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("home.featuredProductsDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.title} className="p-10 rounded-3xl bg-card border border-border/50">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between mb-8">
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-2xl ${product.bgColor} flex items-center justify-center`}>
                        <product.icon className={`w-7 h-7 ${product.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium text-foreground">{product.title}</h3>
                        <p className={`text-sm ${product.color}`}>{product.subtitle}</p>
                      </div>
                    </div>
                    <span className="w-fit rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground">
                      {product.maturity}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/${locale}${product.href}`} className={`inline-flex items-center gap-2 text-sm font-medium ${product.color}`}>
                    {t("home.learnMore")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("home.missionVisionTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("home.missionVisionDesc")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {missionVision.map((item) => (
                <div key={item.title} className="p-10 rounded-2xl bg-card">
                  <item.icon className="w-10 h-10 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-medium text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
              {coreValues.map((value) => (
                <div key={value.label} className="text-center">
                  <div className="text-2xl font-normal text-foreground mb-2">{value.label}</div>
                  <div className="text-xs text-muted-foreground">{value.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("home.whyUsTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("home.whyUsDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueProps.map((prop) => (
                <div key={prop.title} className="p-8 rounded-2xl bg-card">
                  <prop.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{prop.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{prop.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("home.buildingBlocksTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("home.buildingBlocksDesc")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {buildingBlocks.map((block) => (
                <div key={block.title} className="p-8 rounded-2xl bg-card border border-border/50">
                  <block.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-lg font-medium text-foreground mb-3">{block.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("home.latestUpdatesTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("home.latestUpdatesDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-5 h-5 text-foreground" />
                  <h3 className="text-base font-medium text-foreground">{t("home.blogTitle")}</h3>
                </div>
                <div className="space-y-6">
                  {blogPosts.map((post) => (
                    <Link key={post.title} href={`/${locale}${post.href}`} className="block group">
                      <div className="text-xs text-muted-foreground mb-2">{post.date}</div>
                      <h4 className="font-medium text-foreground group-hover:text-foreground/70 transition-colors mb-1">
                        {post.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{post.desc}</p>
                    </Link>
                  ))}
                </div>
                <Link href={`/${locale}/blog`} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/70">
                  {t("home.viewAll")} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-5 h-5 text-foreground" />
                  <h3 className="text-base font-medium text-foreground">{t("home.changelogTitle")}</h3>
                </div>
                <div className="space-y-6">
                  {progressNotes.map((item) => (
                    <div key={item.title} className="p-4 rounded-xl bg-card">
                      <div className="text-xs text-muted-foreground mb-2">{item.version}</div>
                      <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href={`/${locale}/products`} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/70">
                  {t("home.viewAll")} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-5 h-5 text-foreground" />
                  <h3 className="text-base font-medium text-foreground">{t("home.whitepapersTitle")}</h3>
                </div>
                <div className="space-y-6">
                  {technicalNotes.map((paper) => (
                    <div key={paper.title} className="p-4 rounded-xl bg-card">
                      <div className="text-xs text-muted-foreground mb-2">{t("home.whitepaperNew")}</div>
                      <h4 className="font-medium text-foreground mb-1">{paper.title}</h4>
                      <p className="text-sm text-muted-foreground">{paper.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href={`/${locale}/ressources/white-papers`} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/70">
                  {t("home.viewAll")} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("home.openSourceTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("home.openSourceDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              {openSourceSignals.map((signal) => (
                <div key={signal.label} className="p-10 rounded-2xl bg-card text-center">
                  <signal.icon className={`w-10 h-10 ${signal.color} mx-auto mb-6`} />
                  <div className="text-2xl font-normal text-foreground mb-2">{signal.value}</div>
                  <div className="text-sm text-muted-foreground mb-4">{signal.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{signal.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href={`/${locale}/developers`}>
                <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                  {t("home.exploreOSS")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("home.ecosystemTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {t("home.ecosystemDesc")}
              </p>
            </div>
            <div className="space-y-16">
              {ecosystemCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="text-lg font-medium text-foreground mb-6">{category.title}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.orgs.map((org) => (
                      <div key={org.name} className="p-5 rounded-xl bg-card border border-border/50">
                        <div className="text-sm font-medium text-foreground mb-1">{org.name}</div>
                        <div className="text-xs text-muted-foreground">{org.desc}</div>
                        <div className={`mt-3 text-xs ${category.color}`}>{org.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-card border border-border/50 p-10 lg:p-14 text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {t("home.ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {t("home.ctaDesc")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/solutions/infrastructure`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {t("home.startTransformation")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/company/about`}>
                  <Button variant="outline" size="lg" className="gap-2 h-14 px-8 text-base">
                    {t("home.strategicVisionLink")}
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
