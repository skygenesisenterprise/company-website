import * as React from "react";
import { getTranslations } from "next-intl/server";
import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Code2,
  Compass,
  FileText,
  GitBranch,
  Globe2,
  Handshake,
  Layers3,
  Mail,
  Megaphone,
  Network,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import {
  CompanyCardGrid,
  CompanyFinalCta,
  CompanyHero,
  CompanyLayerDiagram,
  CompanyPageShell,
  CompanyPillList,
  CompanySection,
  CompanySplitList,
  CompanyTimeline,
} from "@/components/public/company/company-page";

interface CompanyPageProps {
  locale: string;
}

interface CompanyGridItem {
  title: string;
  description: string;
  meta?: string;
  href?: string;
  cta?: string;
  icon?: LucideIcon;
}

interface CompanyAction {
  label: string;
  href: string;
  variant?: "default" | "outline";
}

interface CompanySectionContent {
  eyebrow: string;
  title: string;
  description: string;
  items?: CompanyGridItem[];
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function withIcons(items: CompanyGridItem[], icons: LucideIcon[]) {
  return items.map((item, index) => ({ ...item, icon: icons[index] }));
}

function localizeItems(locale: string, items: CompanyGridItem[], icons: LucideIcon[] = []) {
  return withIcons(items, icons).map((item) => ({
    ...item,
    href: item.href ? localizeHref(locale, item.href) : undefined,
  }));
}

function localizeActions(locale: string, actions: CompanyAction[]) {
  return actions.map((action) => ({
    ...action,
    href: localizeHref(locale, action.href),
  }));
}

function CompanyExpansionSections({
  sections,
  count,
}: {
  sections: CompanySectionContent[];
  count: number;
}) {
  const icons = [Layers3, ShieldCheck, Network, Users, FileText, Globe2];

  return (
    <>
      {sections.slice(0, count).map((section, index) => (
        <CompanySection
          key={section.title}
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          tone={index % 2 === 1 ? "muted" : "default"}
        >
          <CompanyCardGrid
            items={withIcons(
              section.items ?? [],
              [icons[index % icons.length], icons[(index + 1) % icons.length], icons[(index + 2) % icons.length]],
            )}
          />
        </CompanySection>
      ))}
    </>
  );
}

export async function CompanyOverviewPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.overview" });
  const ecosystemItems = t.raw("ecosystem.items") as CompanyGridItem[];
  const missionItems = t.raw("mission.items") as CompanyGridItem[];
  const trajectoryItems = t.raw("trajectory.items") as Array<{ label: string; title: string; description: string }>;
  const cultureItems = t.raw("culture.items") as CompanyGridItem[];
  const expansionSections = t.raw("expansion.sections") as CompanySectionContent[];
  const finalActions = t.raw("finalCta.actions") as CompanyAction[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        actions={[
          { label: t("hero.primaryCta"), href: `/${locale}/company/about` },
          { label: t("hero.secondaryCta"), href: `/${locale}/platform`, variant: "outline" },
        ]}
        visual={<CompanyLayerDiagram layers={t.raw("layerDiagram.layers")} />}
      />

      <CompanySection centered title={t("statement.title")} description={t("statement.description")} />

      <CompanySection eyebrow={t("ecosystem.eyebrow")} title={t("ecosystem.title")} description={t("ecosystem.description")} tone="muted">
        <CompanyCardGrid items={localizeItems(locale, ecosystemItems, [Layers3, Blocks, Network])} />
      </CompanySection>

      <CompanySection eyebrow={t("mission.eyebrow")} title={t("mission.title")} description={t("mission.description")}>
        <CompanySplitList items={missionItems} />
      </CompanySection>

      <CompanySection eyebrow={t("trajectory.eyebrow")} title={t("trajectory.title")} description={t("trajectory.description")} tone="muted">
        <CompanyTimeline items={trajectoryItems} />
      </CompanySection>

      <CompanySection eyebrow={t("openTechnology.eyebrow")} title={t("openTechnology.title")} description={t("openTechnology.description")} tone="dark">
        <CompanyPillList items={t.raw("openTechnology.pills") as string[]} inverted />
      </CompanySection>

      <CompanySection eyebrow={t("culture.eyebrow")} title={t("culture.title")} description={t("culture.description")}>
        <CompanySplitList items={cultureItems} />
      </CompanySection>

      <CompanyExpansionSections sections={expansionSections} count={7} />

      <CompanyFinalCta
        eyebrow={t("finalCta.eyebrow")}
        title={t("finalCta.title")}
        description={t("finalCta.description")}
        actions={localizeActions(locale, finalActions)}
      />
    </CompanyPageShell>
  );
}

export async function CompanyAboutPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.about" });
  const architecture = t.raw("architecture") as CompanySectionContent;
  const method = t.raw("method") as CompanySectionContent;
  const pages = t.raw("pages") as CompanySectionContent;
  const expansionSections = t.raw("expansion.sections") as CompanySectionContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} description={t("hero.description")} centered />

      <CompanySection centered title={t("statement.title")} description={t("statement.description")} />

      <CompanySection eyebrow={architecture.eyebrow} title={architecture.title} description={architecture.description} tone="muted">
        <CompanyCardGrid items={withIcons(architecture.items ?? [], [Layers3, Network, ShieldCheck, Building2])} />
      </CompanySection>

      <CompanySection eyebrow={method.eyebrow} title={method.title} description={method.description}>
        <CompanySplitList items={method.items ?? []} />
      </CompanySection>

      <CompanySection eyebrow={t("transparency.eyebrow")} title={t("transparency.title")} description={t("transparency.description")} tone="muted" />

      <CompanySection eyebrow={pages.eyebrow} title={pages.title} description={pages.description}>
        <CompanyCardGrid items={localizeItems(locale, pages.items ?? [], [GitBranch, ShieldCheck])} columns="two" />
      </CompanySection>

      <CompanyExpansionSections sections={expansionSections} count={8} />

      <CompanyFinalCta
        eyebrow={t("finalCta.eyebrow")}
        title={t("finalCta.title")}
        description={t("finalCta.description")}
        actions={[
          { label: "Notre trajectoire", href: `/${locale}/company/story` },
          { label: "Nos principes", href: `/${locale}/company/values`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyStoryPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.story" });
  const problem = t.raw("problem") as CompanySectionContent;
  const response = t.raw("response") as CompanySectionContent;
  const timelineItems = t.raw("timeline.items") as Array<{ label: string; title: string; description: string }>;
  const expansionSections = t.raw("expansion.sections") as CompanySectionContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} description={t("hero.description")} centered />

      <CompanySection eyebrow={t("origin.eyebrow")} title={t("origin.title")} description={t("origin.description")} />

      <CompanySection eyebrow={problem.eyebrow} title={problem.title} description={problem.description} tone="muted">
        <CompanyCardGrid items={withIcons(problem.items ?? [], [Compass, GitBranch, ShieldCheck])} />
      </CompanySection>

      <CompanySection eyebrow={response.eyebrow} title={response.title} description={response.description}>
        <CompanyCardGrid items={withIcons(response.items ?? [], [BookOpen, Layers3, Network, Sparkles])} columns="two" />
      </CompanySection>

      <CompanySection eyebrow={t("timeline.eyebrow")} title={t("timeline.title")} description={t("timeline.description")} tone="muted">
        <CompanyTimeline items={timelineItems} />
      </CompanySection>

      <CompanyExpansionSections sections={expansionSections} count={9} />

      <CompanyFinalCta
        eyebrow={t("finalCta.eyebrow")}
        title={t("finalCta.title")}
        description={t("finalCta.description")}
        actions={[
          { label: "À propos de SGE", href: `/${locale}/company/about` },
          { label: "Nous contacter", href: `/${locale}/company/contact`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyValuesPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.values" });
  const principles = t.raw("principles") as CompanySectionContent;
  const culture = t.raw("culture") as CompanySectionContent;
  const expansionSections = t.raw("expansion.sections") as CompanySectionContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} description={t("hero.description")} centered />

      <CompanySection eyebrow={principles.eyebrow} title={principles.title} description={principles.description}>
        <CompanyCardGrid items={withIcons(principles.items ?? [], [Compass, GitBranch, ShieldCheck, Network, Sparkles, BookOpen])} />
      </CompanySection>

      <CompanySection eyebrow={culture.eyebrow} title={culture.title} description={culture.description} tone="muted">
        <CompanyCardGrid items={withIcons(culture.items ?? [], [Users, FileText, BriefcaseBusiness, Sparkles, Handshake])} />
      </CompanySection>

      <CompanyExpansionSections sections={expansionSections} count={11} />

      <CompanyFinalCta
        eyebrow={t("finalCta.eyebrow")}
        title={t("finalCta.title")}
        description={t("finalCta.description")}
        actions={[
          { label: "Lire la trajectoire", href: `/${locale}/company/story` },
          { label: "Carrières", href: `/${locale}/company/careers`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyCareersPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.careers" });
  const culture = t.raw("culture") as CompanySectionContent;
  const domains = t.raw("domains") as CompanySectionContent;
  const expansionSections = t.raw("expansion.sections") as CompanySectionContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} description={t("hero.description")} centered />

      <CompanySection eyebrow={culture.eyebrow} title={culture.title} description={culture.description}>
        <CompanyCardGrid items={withIcons(culture.items ?? [], [Compass, ShieldCheck, Users, FileText, GitBranch, Sparkles])} />
      </CompanySection>

      <CompanySection eyebrow={domains.eyebrow} title={domains.title} description={domains.description} tone="muted">
        <CompanyCardGrid items={withIcons(domains.items ?? [], [Code2, Network, ShieldCheck, Sparkles, BookOpen, Handshake])} />
      </CompanySection>

      <CompanySection eyebrow={t("transparency.eyebrow")} title={t("transparency.title")} description={t("transparency.description")} />

      <CompanyExpansionSections sections={expansionSections} count={10} />

      <CompanyFinalCta
        eyebrow={t("finalCta.eyebrow")}
        title={t("finalCta.title")}
        description={t("finalCta.description")}
        actions={[
          { label: "Nous contacter", href: `/${locale}/company/contact` },
          { label: "Nos principes", href: `/${locale}/company/values`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyContactPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.contact" });
  const routes = t.raw("routes") as CompanySectionContent;
  const expectations = t.raw("expectations") as CompanySectionContent;
  const official = t.raw("official") as CompanySectionContent;
  const expansionSections = t.raw("expansion.sections") as CompanySectionContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} description={t("hero.description")} centered />

      <CompanySection eyebrow={routes.eyebrow} title={routes.title} description={routes.description}>
        <CompanyCardGrid items={localizeItems(locale, routes.items ?? [], [Mail, Handshake, Megaphone, BriefcaseBusiness])} columns="two" />
      </CompanySection>

      <CompanySection eyebrow={expectations.eyebrow} title={expectations.title} description={expectations.description} tone="muted">
        <CompanySplitList items={expectations.items ?? []} />
      </CompanySection>

      <CompanySection eyebrow={official.eyebrow} title={official.title} description={official.description}>
        <CompanyCardGrid items={localizeItems(locale, official.items ?? [], [Mail, Newspaper, BriefcaseBusiness, ShieldCheck])} columns="two" />
      </CompanySection>

      <CompanyExpansionSections sections={expansionSections} count={10} />

      <CompanyFinalCta
        eyebrow={t("finalCta.eyebrow")}
        title={t("finalCta.title")}
        description={t("finalCta.description")}
        actions={[
          { label: "À propos", href: `/${locale}/company/about` },
          { label: "Presse", href: `/${locale}/company/press`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyLeadershipPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.leadership" });
  const areas = t.raw("areas") as CompanySectionContent;
  const governance = t.raw("governance") as CompanySectionContent;
  const expansionSections = t.raw("expansion.sections") as CompanySectionContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} description={t("hero.description")} centered />

      <CompanySection eyebrow={t("founder.eyebrow")} title={t("founder.title")} description={t("founder.description")} />

      <CompanySection eyebrow={areas.eyebrow} title={areas.title} description={areas.description} tone="muted">
        <CompanyCardGrid items={withIcons(areas.items ?? [], [Compass, ShieldCheck, Users])} />
      </CompanySection>

      <CompanySection eyebrow={governance.eyebrow} title={governance.title} description={governance.description}>
        <CompanySplitList items={governance.items ?? []} />
      </CompanySection>

      <CompanySection eyebrow={t("future.eyebrow")} title={t("future.title")} description={t("future.description")} tone="muted" />

      <CompanyExpansionSections sections={expansionSections} count={9} />

      <CompanyFinalCta
        eyebrow={t("finalCta.eyebrow")}
        title={t("finalCta.title")}
        description={t("finalCta.description")}
        actions={[
          { label: "Notre histoire", href: `/${locale}/company/story` },
          { label: "Nous contacter", href: `/${locale}/company/contact`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyPartnersPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.partners" });
  const types = t.raw("types") as CompanySectionContent;
  const principles = t.raw("principles") as CompanySectionContent;
  const audiences = t.raw("audiences") as CompanySectionContent;
  const expansionSections = t.raw("expansion.sections") as CompanySectionContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} description={t("hero.description")} centered />

      <CompanySection centered title={t("statement.title")} description={t("statement.description")} />

      <CompanySection eyebrow={types.eyebrow} title={types.title} description={types.description} tone="muted">
        <CompanyCardGrid items={withIcons(types.items ?? [], [Network, Layers3, BookOpen, GitBranch, Building2, Handshake])} />
      </CompanySection>

      <CompanySection eyebrow={principles.eyebrow} title={principles.title} description={principles.description}>
        <CompanySplitList items={principles.items ?? []} />
      </CompanySection>

      <CompanySection eyebrow={audiences.eyebrow} title={audiences.title} description={audiences.description} tone="muted">
        <CompanyCardGrid items={withIcons(audiences.items ?? [], [Network, GitBranch, Globe2])} />
      </CompanySection>

      <CompanyExpansionSections sections={expansionSections} count={9} />

      <CompanyFinalCta
        eyebrow={t("finalCta.eyebrow")}
        title={t("finalCta.title")}
        description={t("finalCta.description")}
        actions={[
          { label: "Nous contacter", href: `/${locale}/company/contact` },
          { label: "À propos", href: `/${locale}/company/about`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyPressPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.press" });
  const boilerplate = t.raw("boilerplate") as CompanySectionContent;
  const facts = t.raw("facts") as CompanySectionContent;
  const resources = t.raw("resources") as CompanySectionContent;
  const expansionSections = t.raw("expansion.sections") as CompanySectionContent[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} description={t("hero.description")} centered />

      <CompanySection eyebrow={boilerplate.eyebrow} title={boilerplate.title} description={boilerplate.description}>
        <CompanyCardGrid items={withIcons(boilerplate.items ?? [], [FileText, Newspaper])} columns="two" />
      </CompanySection>

      <CompanySection eyebrow={facts.eyebrow} title={facts.title} description={facts.description} tone="muted">
        <CompanyCardGrid items={withIcons(facts.items ?? [], [Building2, Network, FileText])} />
      </CompanySection>

      <CompanySection eyebrow={resources.eyebrow} title={resources.title} description={resources.description}>
        <CompanyCardGrid items={localizeItems(locale, resources.items ?? [], [Building2, Newspaper, GitBranch])} />
      </CompanySection>

      <CompanySection eyebrow={t("contact.eyebrow")} title={t("contact.title")} description={t("contact.description")} tone="muted">
        <CompanyCardGrid
          items={[
            {
              title: t("contact.email"),
              description: t("contact.description"),
              href: `mailto:${t("contact.email")}`,
              cta: "Contacter la presse",
              icon: Mail,
            },
          ]}
          columns="two"
        />
      </CompanySection>

      <CompanyExpansionSections sections={expansionSections} count={9} />

      <CompanyFinalCta
        eyebrow={t("finalCta.eyebrow")}
        title={t("finalCta.title")}
        description={t("finalCta.description")}
        actions={[
          { label: "Contact", href: `/${locale}/company/contact` },
          { label: "Company", href: `/${locale}/company`, variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
