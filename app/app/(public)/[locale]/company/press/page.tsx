import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Building2, FileText, Mail, Newspaper, PackageOpen, ScrollText } from "lucide-react";
import {
  CompanyCTA,
  CompanyCard,
  CompanyHero,
  CompanyPageShell,
  CompanyRelatedPages,
  CompanySection,
  CompanyStatement,
} from "@/components/public/company/company-page";

interface MetadataParams {
  params: Promise<{ locale: string }>;
}

interface CompanyCardContent {
  title: string;
  description: string;
}

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.press.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PressPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.press" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const factItems = t.raw("facts.items") as CompanyCardContent[];
  const kitItems = t.raw("kit.items") as CompanyCardContent[];
  const placeholderItems = t.raw("placeholders.items") as CompanyCardContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
        primaryCta={t("hero.cta")}
        primaryHref="mailto:press@skygenesisenterprise.com"
        secondaryCta={common("contact")}
        secondaryHref={`/${locale}/company/contact`}
      />

      <CompanySection
        eyebrow="Vue d’ensemble"
        title="Une base presse sobre, vérifiable et compatible avec le stade réel de SGE."
        description="Le rôle de cette page est d’aider à présenter l’entreprise sans extrapoler sa maturité, sa taille ou ses annonces."
      >
        <CompanyStatement
          title="La crédibilité presse commence par la discipline sur ce qui est affirmé publiquement."
          body="SGE préfère fournir un cadre institutionnel clair, des boilerplates maîtrisés, des repères utiles et des points de contact précis plutôt que d’inventer des chiffres, des références ou des communiqués inexistants."
        />
      </CompanySection>

      <CompanySection eyebrow={t("boilerplate.eyebrow")} title={t("boilerplate.title")} description={t("boilerplate.description")} tone="muted">
        <div className="grid gap-5 lg:grid-cols-2">
          <CompanyCard icon={ScrollText} meta={t("boilerplate.shortLabel")} title={t("boilerplate.shortTitle")} description={t("boilerplate.short")} />
          <CompanyCard icon={FileText} meta={t("boilerplate.longLabel")} title={t("boilerplate.longTitle")} description={t("boilerplate.long")} />
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Mission"
        title="La mission de SGE doit pouvoir être résumée simplement."
        description="Construire un écosystème numérique plus ouvert, plus maîtrisé et plus durable est le fil conducteur de toute la section presse."
      >
        <CompanyStatement
          title="Entreprise technologique européenne en construction, SGE travaille sur des produits, une plateforme et des fondations d’infrastructure."
          body="Cette phrase résume le cadre institutionnel de la société sans prétendre à une maturité ou une présence déjà installée à très grande échelle."
        />
      </CompanySection>

      <CompanySection eyebrow={t("facts.eyebrow")} title={t("facts.title")} description={t("facts.description")} tone="muted">
        <div className="grid gap-5 md:grid-cols-3">
          {factItems.map((item, index) => (
            <CompanyCard key={item.title} icon={index === 0 ? Building2 : index === 1 ? Newspaper : FileText} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Ce que SGE construit"
        title="Ce que SGE construit peut être expliqué sans jargon excessif."
        description="Produits, services, plateforme, documentation et infrastructure forment une trajectoire cohérente plutôt qu’un portefeuille dispersé."
      >
        <CompanyStatement
          title="Le cœur du récit reste technique, progressif et orienté fondations."
          body="L’entreprise travaille sur les briques qui permettent d’améliorer la maîtrise numérique: identité, sécurité, intégration, expérience développeur, services opérationnels et architecture d’ensemble."
        />
      </CompanySection>

      <CompanySection eyebrow={t("kit.eyebrow")} title={t("kit.title")} description={t("kit.description")} tone="muted">
        <div className="grid gap-5 md:grid-cols-3">
          {kitItems.map((item) => (
            <CompanyCard key={item.title} icon={PackageOpen} meta={t("kit.status")} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection eyebrow={t("placeholders.eyebrow")} title={t("placeholders.title")} description={t("placeholders.description")}>
        <div className="grid gap-5 md:grid-cols-3">
          {placeholderItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Liens liés"
        title="Orienter vers le blog, l’histoire et les pages institutionnelles."
        description="La salle de presse reste utile lorsqu’elle relie rapidement les lecteurs aux ressources narratives ou institutionnelles pertinentes."
        tone="muted"
      >
        <CompanyRelatedPages
          items={[
            {
              title: "Blog",
              description: "Retrouver les prises de parole, articles et ressources éditoriales publiques de SGE.",
              href: `/${locale}/blog`,
              cta: "Explorer",
              icon: Newspaper,
            },
            {
              title: "Story",
              description: "Comprendre le récit fondateur et la progression de l’entreprise.",
              href: `/${locale}/company/story`,
              cta: "Explorer",
              icon: ScrollText,
            },
            {
              title: "Company",
              description: "Revenir au hub général “Who we are” pour situer les autres pages de la section.",
              href: `/${locale}/company`,
              cta: "Explorer",
              icon: Building2,
            },
          ]}
        />
      </CompanySection>

      <CompanySection eyebrow={t("contact.eyebrow")} title={t("contact.title")} description={t("contact.description")}>
        <CompanyCard
          icon={Mail}
          title={t("contact.cardTitle")}
          description={t("contact.cardDescription")}
          href="mailto:press@skygenesisenterprise.com"
          cta={t("contact.cta")}
          className="max-w-2xl"
        />
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: common("contact"), href: `/${locale}/company/contact` },
          { label: common("story"), href: `/${locale}/company/story`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
