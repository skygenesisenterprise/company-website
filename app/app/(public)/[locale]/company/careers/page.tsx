import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  BookOpen,
  Code2,
  Handshake,
  Palette,
  Server,
  ShieldCheck,
} from "lucide-react";
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

const workItems = [
  {
    title: "Responsabilité claire",
    description: "Les sujets doivent avoir un propriétaire lisible, un niveau d’exigence explicite et une trajectoire documentée.",
  },
  {
    title: "Construction progressive",
    description: "Le bon rythme est celui qui consolide les fondations au lieu d’accumuler des annonces fragiles.",
  },
  {
    title: "Travail interdisciplinaire",
    description: "Engineering, sécurité, design, documentation, infrastructure et communauté doivent pouvoir se répondre.",
  },
];

const futureOpportunityItems = [
  {
    title: "Postes ouverts",
    description: "Les rôles réellement ouverts ont vocation à apparaître clairement lorsqu’ils existent.",
  },
  {
    title: "Candidatures spontanées",
    description: "Les profils alignés avec la trajectoire SGE peuvent initier un premier échange avant même l’ouverture formelle d’un rôle.",
  },
  {
    title: "Contributions préparatoires",
    description: "Une contribution concrète, ciblée ou documentée peut parfois être le meilleur point d’entrée.",
  },
];

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.careers.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CareersPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.careers" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const cultureItems = t.raw("culture.items") as CompanyCardContent[];
  const contributionItems = t.raw("contribution.items") as CompanyCardContent[];
  const profileItems = t.raw("profiles.items") as CompanyCardContent[];
  const profileIcons = [Code2, Server, ShieldCheck, Palette, BookOpen, Handshake];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
        primaryCta={common("contact")}
        primaryHref={`/${locale}/company/contact`}
        secondaryCta={common("values")}
        secondaryHref={`/${locale}/company/values`}
      />

      <CompanySection
        eyebrow="Pourquoi rejoindre SGE"
        title="Rejoindre SGE, c’est accepter de construire dans une entreprise encore en structuration."
        description="L’intérêt vient précisément de cette phase: les fondations restent ouvertes, les responsabilités sont visibles et les choix ont un impact durable."
      >
        <CompanyStatement
          title="La promesse n’est pas le confort d’une structure déjà figée, mais la possibilité de contribuer à une architecture, une culture et une trajectoire."
          body="SGE convient aux profils qui aiment clarifier, documenter, décider et construire dans la durée, plutôt qu’optimiser uniquement un périmètre déjà stabilisé."
        />
      </CompanySection>

      <CompanySection eyebrow={t("culture.eyebrow")} title={t("culture.title")} description={t("culture.description")} tone="muted">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cultureItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Contribution open-source"
        title="La contribution open-source fait partie des chemins d’entrée légitimes."
        description="Contribuer à une brique, à une doc, à une amélioration ou à une analyse utile peut être un premier signal fort."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {contributionItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Stages et premières collaborations"
        title="Les stages et premières collaborations doivent rester honnêtes et utiles."
        description="SGE ne cherche pas à promettre plus qu’il ne peut réellement encadrer."
        tone="muted"
      >
        <CompanyStatement
          title="Un bon cadre d’apprentissage vaut mieux qu’une ouverture artificielle."
          body="Lorsqu’un stage, un premier parcours ou une collaboration précoce a du sens, il doit s’inscrire dans un contexte où les responsabilités, les attentes et l’accompagnement sont suffisamment clairs."
        />
      </CompanySection>

      <CompanySection eyebrow={t("profiles.eyebrow")} title={t("profiles.title")} description={t("profiles.description")}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {profileItems.map((item, index) => (
            <CompanyCard key={item.title} icon={profileIcons[index]} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Comment nous travaillons"
        title="La manière de travailler compte autant que le périmètre du rôle."
        description="La qualité du raisonnement, de la documentation et de l’exécution doit rester lisible à chaque étape."
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {workItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Opportunités actuelles"
        title="Peu de postes ouverts ne signifie pas peu d’ambition."
        description="Cette page reste volontairement sobre sur la réalité actuelle de l’entreprise."
      >
        <CompanyStatement title={t("reality.title")} body={t("reality.body")} />
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {futureOpportunityItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Pages liées"
        title="Relier culture, principes et premier contact."
        description="La page Careers s’inscrit dans une trajectoire plus large qui relie valeurs, entreprise et conversation initiale."
        tone="muted"
      >
        <CompanyRelatedPages
          items={[
            {
              title: "Values",
              description: "Voir les principes qui structurent la culture de construction et d’exigence.",
              href: `/${locale}/company/values`,
              cta: "Explorer",
              icon: ShieldCheck,
            },
            {
              title: "About",
              description: "Revenir à la définition de SGE et à la nature du projet en cours de construction.",
              href: `/${locale}/company/about`,
              cta: "Explorer",
              icon: BookOpen,
            },
            {
              title: "Contact",
              description: "Envoyer un premier message clair sur votre profil, votre contexte et le type de contribution envisagé.",
              href: `/${locale}/company/contact`,
              cta: "Explorer",
              icon: Handshake,
            },
          ]}
        />
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: common("contact"), href: `/${locale}/company/contact` },
          { label: common("about"), href: `/${locale}/company/about`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
