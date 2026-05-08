import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  BriefcaseBusiness,
  Handshake,
  Headphones,
  Mail,
  Megaphone,
  Send,
  ShieldAlert,
  ShoppingBag,
} from "lucide-react";
import {
  CompanyCard,
  CompanyHero,
  CompanyPageShell,
  CompanySection,
} from "@/components/public/company/company-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface RouteContent {
  title: string;
  description: string;
  href: string;
  cta: string;
}

interface OfficialContact {
  label: string;
  value: string;
  href: string;
}

interface MetadataParams {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.contact.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.contact" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const routes = t.raw("routing.items") as RouteContent[];
  const contacts = t.raw("official.items") as OfficialContact[];
  const icons = [ShoppingBag, Handshake, Megaphone, BriefcaseBusiness, Headphones, ShieldAlert];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />

      <CompanySection
        eyebrow={t("routing.eyebrow")}
        title={t("routing.title")}
        description={t("routing.description")}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, index) => (
            <CompanyCard
              key={route.title}
              icon={icons[index]}
              title={route.title}
              description={route.description}
              href={route.href}
              cta={route.cta}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("form.eyebrow")}
        title={t("form.title")}
        description={t("form.description")}
        muted
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            action="mailto:contact@skygenesisenterprise.com"
            method="post"
            encType="text/plain"
            className="rounded-lg border border-border/60 bg-background p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                  {t("form.firstName")}
                </label>
                <Input id="firstName" name="firstName" placeholder={t("form.firstNamePlaceholder")} />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                  {t("form.lastName")}
                </label>
                <Input id="lastName" name="lastName" placeholder={t("form.lastNamePlaceholder")} />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  {t("form.email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("form.emailPlaceholder")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  {t("form.company")}
                </label>
                <Input id="company" name="company" placeholder={t("form.companyPlaceholder")} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="topic" className="text-sm font-medium text-foreground">
                  {t("form.topic")}
                </label>
                <Input id="topic" name="topic" placeholder={t("form.topicPlaceholder")} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  {t("form.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder={t("form.messagePlaceholder")}
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="mt-6 h-12 px-6">
              {t("form.submit")}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="space-y-5">
            {contacts.map((contact) => (
              <a
                key={contact.value}
                href={contact.href}
                className="flex items-start gap-4 rounded-lg border border-border/60 bg-card p-5 transition-colors hover:border-foreground/20"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/30">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-foreground">
                    {contact.label}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {contact.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </CompanySection>

      <CompanySection
        eyebrow={t("trust.eyebrow")}
        title={t("trust.title")}
        description={t("trust.description")}
        className="border-b-0"
      >
        <div className="rounded-lg border border-border/60 bg-card p-6 sm:p-8">
          <p className="max-w-4xl text-base leading-7 text-muted-foreground sm:text-lg">
            {t("trust.body")}
          </p>
        </div>
      </CompanySection>
    </CompanyPageShell>
  );
}
