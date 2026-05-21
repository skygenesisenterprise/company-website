import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Building2, Compass, GitBranch, ShieldCheck, Users } from "lucide-react";
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

const leadershipAreas = [
  {
    title: "Founder-led vision",
    description: "La direction reste portée par une logique de fondation, d’architecture et de cohérence long terme.",
  },
  {
    title: "Direction technique",
    description: "Les arbitrages doivent rester compatibles avec les réalités de sécurité, d’exploitation, d’identité et d’interopérabilité.",
  },
  {
    title: "Lecture produit et écosystème",
    description: "Les décisions ne portent pas seulement sur un produit isolé mais sur la relation entre plusieurs briques.",
  },
];

const relatedLeadershipPages = [
  {
    title: "Story",
    description: "Comprendre comment cette direction s’est construite et pourquoi elle reste volontairement progressive.",
    hrefSuffix: "/company/story",
    icon: GitBranch,
  },
  {
    title: "Values",
    description: "Voir les principes qui encadrent la gouvernance, la technique et la relation à l’écosystème.",
    hrefSuffix: "/company/values",
    icon: ShieldCheck,
  },
  {
    title: "Careers",
    description: "Explorer les futures zones de responsabilité et la manière dont l’équipe pourra se structurer.",
    hrefSuffix: "/company/careers",
    icon: Users,
  },
];

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.leadership.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LeadershipPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.leadership" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const directionItems = t.raw("direction.items") as CompanyCardContent[];
  const governanceItems = t.raw("governance.items") as CompanyCardContent[];
  const futureItems = t.raw("future.items") as CompanyCardContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
        primaryCta={common("contact")}
        primaryHref={`/${locale}/company/contact`}
        secondaryCta={common("careers")}
        secondaryHref={`/${locale}/company/careers`}
      />

      <CompanySection eyebrow={t("founder.eyebrow")} title={t("founder.title")} description={t("founder.description")}>
        <CompanyStatement
          label={t("founder.cardMeta")}
          title={t("founder.cardTitle")}
          body={t("founder.cardDescription")}
          aside={<CompanyCard icon={Compass} title="Founder-led" description={t("founder.body")} />}
        />
      </CompanySection>

      <CompanySection
        eyebrow="Direction stratégique"
        title="Une direction stratégique portée par la cohérence entre vision et exécution."
        description="Le leadership ne se mesure pas au volume d’organigramme mais à la qualité des arbitrages."
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {leadershipAreas.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={index === 0 ? Compass : index === 1 ? ShieldCheck : Building2}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection eyebrow={t("direction.eyebrow")} title={t("direction.title")} description={t("direction.description")}>
        <div className="grid gap-5 md:grid-cols-3">
          {directionItems.map((item, index) => (
            <CompanyCard
              key={item.title}
              icon={index === 0 ? Building2 : index === 1 ? ShieldCheck : Users}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Gouvernance"
        title="Des principes de gouvernance simples, lisibles et responsables."
        description="La gouvernance doit protéger la qualité du projet, la clarté des responsabilités et la continuité du travail."
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {governanceItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Leadership à venir"
        title="Les futures zones de leadership devront émerger à mesure que l’écosystème se consolide."
        description="Aucune grande équipe n’est inventée ici: la structure à venir doit correspondre à des responsabilités réelles."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {futureItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Advisors et partenaires"
        title="SGE pourra aussi se construire avec des advisors, partenaires et relais spécialisés."
        description="Le rôle de ces contributions futures est d’augmenter la qualité de lecture, pas de créer une illusion de maturité."
        tone="muted"
      >
        <CompanyStatement
          title="L’ouverture à des expertises externes devra rester cadrée par les besoins réels de l’entreprise."
          body="Qu’il s’agisse d’infrastructure, de sécurité, de produit, de gouvernance ou de partenariats, l’objectif reste de bâtir un cadre sérieux, progressif et compatible avec le stade actuel de SGE."
        />
      </CompanySection>

      <CompanySection
        eyebrow="Pages liées"
        title="Revenir à l’histoire, aux principes et à la construction de l’équipe."
        description="Leadership prend sens lorsqu’il reste relié au récit fondateur et à la culture de construction."
      >
        <CompanyRelatedPages
          items={relatedLeadershipPages.map((item) => ({
            title: item.title,
            description: item.description,
            href: `/${locale}${item.hrefSuffix}`,
            cta: "Explorer",
            icon: item.icon,
          }))}
        />
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: common("story"), href: `/${locale}/company/story` },
          { label: common("contact"), href: `/${locale}/company/contact`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
