import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  CheckCircle2,
  Globe,
  Lock,
  Zap,
  Layers,
  Server,
  FileCheck,
  Star,
} from "lucide-react";

export default async function PartnersResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });
  const tPartners = await getTranslations({ locale, namespace: "Partners" });

  const features = [
    {
      icon: Code,
      title: tPartners("resourcesFeature1Title"),
      description: tPartners("resourcesFeature1Desc"),
    },
    {
      icon: Layers,
      title: tPartners("resourcesFeature2Title"),
      description: tPartners("resourcesFeature2Desc"),
    },
    {
      icon: Server,
      title: tPartners("resourcesFeature3Title"),
      description: tPartners("resourcesFeature3Desc"),
    },
    {
      icon: FileCheck,
      title: tPartners("resourcesFeature4Title"),
      description: tPartners("resourcesFeature4Desc"),
    },
  ];

  const partners = [
    { name: "Cloud Infrastructure Alliance", status: tPartners("partnerStatus1"), type: tPartners("partnerType1") },
    { name: "Security Solutions Group", status: tPartners("partnerStatus1"), type: tPartners("partnerType2") },
    { name: "DevTools Consortium", status: tPartners("partnerStatus1"), type: tPartners("partnerType3") },
    { name: "API Gateway Network", status: tPartners("partnerStatus1"), type: tPartners("partnerType1") },
  ];

  const benefits = [
    { icon: Zap, title: tPartners("benefit1Title"), description: tPartners("benefit1Desc") },
    { icon: Globe, title: tPartners("benefit2Title"), description: tPartners("benefit2Desc") },
    { icon: Lock, title: tPartners("benefit3Title"), description: tPartners("benefit3Desc") },
    { icon: Star, title: tPartners("benefit4Title"), description: tPartners("benefit4Desc") },
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
                <span>{tPartners("badge")}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
                {tPartners("resourcesHeroTitle")}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {tPartners("resourcesHeroDescription")}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/partners/become`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {tPartners("ctaBecome")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/partners/resources`}>
                  <Button variant="ghost" size="lg" className="gap-2 h-14 px-8 text-base">
                    {tPartners("ctaResources")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {tPartners("featuresTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {tPartners("featuresDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="p-8 rounded-2xl bg-card hover:bg-card/80 transition-colors">
                  <feature.icon className="w-10 h-10 text-blue-400 mb-6" />
                  <h3 className="text-lg font-medium text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {tPartners("benefitsTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {tPartners("benefitsDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-8 rounded-2xl bg-card">
                  <benefit.icon className="w-8 h-8 text-foreground mb-5 opacity-80" />
                  <h3 className="text-base font-medium text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid Section */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {tPartners("ourPartnersTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {tPartners("ourPartnersDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner) => (
                <div key={partner.name} className="p-8 rounded-2xl bg-card text-center">
                  <Globe className="w-10 h-10 text-muted-foreground mx-auto mb-6" />
                  <h3 className="text-lg font-medium text-foreground mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{partner.type}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-green-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{partner.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                {tPartners("ctaTitle")}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {tPartners("ctaDescription")}
              </p>
              <div className="mt-12">
                <Link href={`/${locale}/partners/become`}>
                  <Button size="lg" className="gap-2 h-14 px-8 text-base font-medium">
                    {tPartners("ctaJoin")}
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
