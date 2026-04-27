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

export default async function PartnersProgramPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Public" });
  const tPartners = await getTranslations({ locale, namespace: "Partners" });

  const features = [
    {
      icon: Code,
      title: tPartners("programFeature1Title"),
      description: tPartners("programFeature1Desc"),
    },
    {
      icon: Layers,
      title: tPartners("programFeature2Title"),
      description: tPartners("programFeature2Desc"),
    },
    {
      icon: Server,
      title: tPartners("programFeature3Title"),
      description: tPartners("programFeature3Desc"),
    },
    {
      icon: FileCheck,
      title: tPartners("programFeature4Title"),
      description: tPartners("programFeature4Desc"),
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
        <section className="relative py-24 lg:py-32 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                {tPartners("badge")}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {tPartners("programHeroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {tPartners("programHeroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/partners/become`}>
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
                    {tPartners("ctaBecome")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/partners/resources`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    {tPartners("ctaResources")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {tPartners("featuresTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {tPartners("featuresDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors group">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {tPartners("benefitsTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {tPartners("benefitsDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                  <div className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid Section */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {tPartners("ourPartnersTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {tPartners("ourPartnersDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner) => (
                <div key={partner.name} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors text-center group">
                  <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{partner.type}</p>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400">{partner.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                {tPartners("ctaTitle")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {tPartners("ctaDescription")}
              </p>
              <div className="mt-10">
                <Link href={`/${locale}/partners/become`}>
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
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