import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  BriefcaseBusiness,
  Handshake,
  Headphones,
  Mail,
  Megaphone,
  ShieldAlert,
  ShoppingBag,
  Scale,
} from "lucide-react";
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

interface ContactRouteContent {
  title: string;
  description: string;
  href: string;
  cta: string;
}

interface OfficialContactContent {
  label: string;
  value: string;
  href: string;
}

interface ExpectationContent {
  title: string;
  description: string;
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

  const routes = t.raw("routing.items") as ContactRouteContent[];
  const contacts = t.raw("official.items") as OfficialContactContent[];
  const expectations = t.raw("expectations.items") as ExpectationContent[];
  const routeIcons = [ShoppingBag, Handshake, Megaphone, BriefcaseBusiness, Headphones, ShieldAlert];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={common("eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        signals={t.raw("hero.signals") as string[]}
      />

      <CompanySection
        eyebrow="Demandes générales"
        title="Commencer par une demande générale lorsque le bon interlocuteur n’est pas encore évident."
        description="Le canal général reste le meilleur point d’entrée pour les sujets institutionnels, les demandes ouvertes ou les premiers échanges."
      >
        <CompanyCard
          icon={ShoppingBag}
          title={routes[0].title}
          description={routes[0].description}
          href={routes[0].href}
          cta={routes[0].cta}
          className="max-w-2xl"
        />
      </CompanySection>

      <CompanySection
        eyebrow="Partenariats"
        title="Orienter les propositions de collaboration vers le bon cadre dès le départ."
        description="Les demandes de partenariat gagnent à préciser le type de collaboration, le périmètre technique ou opérationnel et la valeur attendue."
        tone="muted"
      >
        <CompanyCard
          icon={Handshake}
          title={routes[1].title}
          description={routes[1].description}
          href={routes[1].href}
          cta={routes[1].cta}
          className="max-w-2xl"
        />
      </CompanySection>

      <CompanySection
        eyebrow="Presse"
        title="Les demandes média doivent passer par un canal dédié."
        description="Cela permet de distinguer rapidement les sujets éditoriaux, les besoins de clarification institutionnelle et les demandes d’interview ou de citation."
      >
        <CompanyCard
          icon={Megaphone}
          title={routes[2].title}
          description={routes[2].description}
          href={routes[2].href}
          cta={routes[2].cta}
          className="max-w-2xl"
        />
      </CompanySection>

      <CompanySection
        eyebrow="Carrières"
        title="Les candidatures et prises de contact autour des futurs rôles ont aussi leur canal."
        description="Un premier message utile précise le contexte, le profil, les réalisations concrètes et le type de contribution envisagé."
        tone="muted"
      >
        <CompanyCard
          icon={BriefcaseBusiness}
          title={routes[3].title}
          description={routes[3].description}
          href={routes[3].href}
          cta={routes[3].cta}
          className="max-w-2xl"
        />
      </CompanySection>

      <CompanySection
        eyebrow="Support"
        title="Le support doit pouvoir qualifier rapidement les besoins opérationnels."
        description="Questions d’accès, d’usage, de configuration ou d’assistance doivent arriver dans un contexte suffisamment clair."
      >
        <CompanyCard
          icon={Headphones}
          title={routes[4].title}
          description={routes[4].description}
          href={routes[4].href}
          cta={routes[4].cta}
          className="max-w-2xl"
        />
      </CompanySection>

      <CompanySection
        eyebrow="Sécurité"
        title="Les sujets sensibles ou liés à la sécurité doivent être isolés du flux général."
        description="Vulnérabilités, abus, incidents ou signaux de risque passent par un canal dédié."
        tone="muted"
      >
        <CompanyCard
          icon={ShieldAlert}
          title={routes[5].title}
          description={routes[5].description}
          href={routes[5].href}
          cta={routes[5].cta}
          className="max-w-2xl"
        />
      </CompanySection>

      <CompanySection
        eyebrow="Business et sujets légaux"
        title="Les sujets corporate, contractuels ou administratifs doivent rester simples à orienter."
        description="Le canal général et les adresses officielles permettent de gérer les échanges business, institutionnels ou légaux sans multiplier les points de contact artificiels."
      >
        <CompanyStatement
          title="Un nombre limité de canaux officiels vaut mieux qu’un routage trop complexe."
          body="Lorsqu’une demande concerne des sujets business, légaux, institutionnels ou transverses, l’important est d’indiquer clairement l’objet, les contraintes éventuelles et le niveau d’urgence afin de réorienter correctement la discussion."
        />
      </CompanySection>

      <CompanySection eyebrow={t("official.eyebrow")} title={t("official.title")} description={t("official.description")} tone="muted">
        <div className="grid gap-5 md:grid-cols-2">
          {contacts.map((contact, index) => (
            <CompanyCard
              key={contact.value}
              icon={index === contacts.length - 1 ? Scale : Mail}
              meta={contact.label}
              title={contact.value}
              description={t("official.cardDescription")}
              href={contact.href}
              cta={t("official.cta")}
            />
          ))}
        </div>
      </CompanySection>

      <CompanySection eyebrow={t("expectations.eyebrow")} title={t("expectations.title")} description={t("expectations.description")}>
        <div className="grid gap-5 md:grid-cols-3">
          {expectations.map((item) => (
            <CompanyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CompanySection>

      <CompanyCTA
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        actions={[
          { label: common("about"), href: `/${locale}/company/about` },
          { label: common("press"), href: `/${locale}/company/press`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
