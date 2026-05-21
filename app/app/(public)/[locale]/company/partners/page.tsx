import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Cloud, GraduationCap, Handshake, Landmark, ShieldCheck, Users } from "lucide-react";
import {
  CompanyCTA,
  CompanyCard,
  CompanyHero,
  CompanyPageShell,
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

const partnershipPrinciples = [
  {
    title: "Clarté du périmètre",
    description: "Mieux vaut un partenariat précis et utile qu’un rapprochement large mais flou.",
  },
  {
    title: "Valeur mutuelle",
    description: "La collaboration doit améliorer soit le produit, soit l’infrastructure, soit la qualité de l’écosystème.",
  },
  {
    title: "Progression crédible",
    description: "Les collaborations démarrent souvent par un périmètre simple avant de s’étendre.",
  },
];

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.partners.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PartnersPage({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CompanyPages.partners" });
  const common = await getTranslations({ locale, namespace: "CompanyPages.common" });

  const typeItems = t.raw("types.items") as CompanyCardContent[];
  const approachItems = t.raw("approach.items") as CompanyCardContent[];
  const audienceItems = t.raw("audience.items") as CompanyCardContent[];
  const typeIcons = [Cloud, ShieldCheck, GraduationCap, Landmark, Users, Handshake];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
        primaryCta={common("contact")}
        primaryHref={`/${locale}/company/contact`}
        secondaryCta={common("press")}
        secondaryHref={`/${locale}/company/press`}
      />

      <CompanySection
        eyebrow="Pourquoi les partenariats comptent"
        title="Les partenariats comptent lorsqu’ils renforcent le projet plutôt que son image."
        description="SGE recherche des collaborations qui augmentent la qualité technique, la portée opérationnelle ou la crédibilité de l’écosystème."
      >
        <CompanyStatement
          title="Le bon partenariat accélère la capacité à construire sans déformer la trajectoire."
          body="Qu’il s’agisse d’infrastructure, de sécurité, de recherche, d’intégration ou de premiers usages, la logique reste la même: ajouter une capacité utile et durable à l’écosystème."
        />
      </CompanySection>

      <CompanySection eyebrow={t("types.eyebrow")} title={t("types.title")} description={t("types.description")} tone="muted">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {typeItems.map((item, index) => (
            <CompanyCard key={item.title} icon={typeIcons[index]} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Cloud et hébergement"
        title="L’infrastructure et l’hébergement font partie des collaborations structurantes."
        description="Ils influencent directement la souveraineté, l’exploitation, la résilience et la qualité de service."
      >
        <CompanyStatement
          title="Le cloud n’est pas un simple support technique: il façonne la capacité à opérer l’écosystème dans le temps."
          body="Les partenariats autour du réseau, de l’observabilité, des déploiements, de la sécurité et des opérations comptent parmi les plus structurants pour une entreprise qui construit ses fondations."
        />
      </CompanySection>

      <CompanySection eyebrow={t("approach.eyebrow")} title={t("approach.title")} description={t("approach.description")} tone="muted">
        <div className="grid gap-5 md:grid-cols-3">
          {approachItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Open-source et recherche"
        title="Les communautés, l’éducation et la recherche jouent un rôle essentiel dans la qualité de l’écosystème."
        description="SGE veut pouvoir construire avec des mainteneurs, des structures de formation, des laboratoires et des communautés techniques."
      >
        <CompanyStatement
          title="Toutes les collaborations importantes ne sont pas commerciales."
          body="Certaines améliorent la qualité du raisonnement, d’autres l’adoption, d’autres encore la robustesse ou la diffusion des savoirs. Ce sont des partenariats tout aussi stratégiques."
        />
      </CompanySection>

      <CompanySection eyebrow={t("audience.eyebrow")} title={t("audience.title")} description={t("audience.description")} tone="muted">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {audienceItems.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanySection
        eyebrow="Principes de partenariat"
        title="Les principes de partenariat doivent rester lisibles dès le premier échange."
        description="Cette base commune aide à qualifier si une collaboration a vraiment du sens."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {partnershipPrinciples.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
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
