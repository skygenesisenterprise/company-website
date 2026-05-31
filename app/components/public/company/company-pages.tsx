import * as React from "react";
import Link from "next/link";
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
import { GitHubIcon } from "@/components/ui/icons/GitHubIcon";
import { LinkedinIcon } from "@/components/ui/icons/LinkedinIcon";
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
import { cn } from "@/lib/utils";

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

interface LeadershipMetric {
  value: string;
  label: string;
}

interface LeadershipMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  image?: string;
  github?: string;
  linkedin?: string;
}

interface LeadershipGroup {
  title: string;
  description: string;
  members: LeadershipMember[];
}

const LEADERSHIP_MEMBERS_PER_ROW = 4;

const companyRoutes = {
  overview: "/company",
  about: "/company/about",
  story: "/company/story",
  values: "/company/values",
  careers: "/company/careers",
  contact: "/company/contact",
  leadership: "/company/leadership",
  partners: "/company/partners",
  press: "/company/press",
  office: "/office",
  platform: "/platform",
  developers: "/developers",
} as const;

async function getCompanySharedTranslations(locale: string) {
  return getTranslations({ locale, namespace: "Public.company.shared" });
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

function companyHref(locale: string, route: keyof typeof companyRoutes) {
  return localizeHref(locale, companyRoutes[route]);
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

function LeadershipMetricsPanel({ metrics }: { metrics: LeadershipMetric[] }) {
  return (
    <div className="relative overflow-hidden rounded-4xl border border-zinc-200 bg-white p-5 shadow-[0_32px_100px_-52px_rgba(15,23,42,0.28)]">
      <div
        aria-hidden={true}
        className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.18),transparent_58%),linear-gradient(180deg,rgba(244,244,245,0.96),rgba(255,255,255,0))]"
      />
      <div className="relative grid gap-4 sm:grid-cols-2">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 p-5">
            <div className="text-4xl font-semibold tracking-tighter text-zinc-950">{metric.value}</div>
            <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function normalizeLeadershipImagePath(image?: string) {
  const trimmedImage = image?.trim();

  if (!trimmedImage) {
    return undefined;
  }

  return trimmedImage.startsWith("/public/") ? trimmedImage.replace(/^\/public/, "") : trimmedImage;
}

function chunkLeadershipMembers(members: Array<LeadershipMember & { groupTitle: string }>) {
  return members.reduce<Array<Array<LeadershipMember & { groupTitle: string }>>>((rows, member, index) => {
    const rowIndex = Math.floor(index / LEADERSHIP_MEMBERS_PER_ROW);
    const row = rows[rowIndex] ?? [];

    rows[rowIndex] = [...row, member];

    return rows;
  }, []);
}

function LeadershipMemberCard({ member, socialLabels }: { member: LeadershipMember; socialLabels?: { github: string; linkedin: string } }) {
  const image = normalizeLeadershipImagePath(member.image);
  const github = member.github?.trim();
  const linkedin = member.linkedin?.trim();
  const links = [
    github ? { label: socialLabels?.github ?? "GitHub", href: github, icon: GitHubIcon } : null,
    linkedin ? { label: socialLabels?.linkedin ?? "LinkedIn", href: linkedin, icon: LinkedinIcon } : null,
  ].filter(Boolean) as Array<{ label: string; href: string; icon: React.ComponentType<{ className?: string }> }>;
  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-4xl border border-zinc-200/80 bg-white p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.24)] transition duration-300",
        "hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_24px_80px_-36px_rgba(15,23,42,0.2)]",
      )}
    >
      <div className="flex justify-center pt-3">
        <div className="rounded-full bg-[conic-gradient(from_140deg,rgba(24,24,27,0.9),rgba(161,161,170,0.36),rgba(244,244,245,0.95),rgba(24,24,27,0.9))] p-[3px] shadow-[0_22px_60px_-34px_rgba(15,23,42,0.7)]">
          <div className="rounded-full bg-white p-1">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 sm:h-32 sm:w-32">
              {image ? (
                <img src={image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(244,244,245,0.96),rgba(212,212,216,0.72)_48%,rgba(113,113,122,0.18))]">
                  <span className="text-4xl font-semibold tracking-[-0.08em] text-zinc-800">{initials}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-1 pb-1 pt-6 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{member.department}</div>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-zinc-950">{member.name}</h3>
        <p className="mt-2 text-sm font-medium text-zinc-700">{member.role}</p>
        {links.length ? (
          <div className="mt-4 flex justify-center gap-2">
            {links.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={`${member.name} ${label}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-950 transition hover:border-zinc-300 hover:bg-white"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        ) : null}
        <p className="mt-5 text-sm leading-7 text-zinc-600">{member.bio}</p>
      </div>
    </article>
  );
}

function LeadershipStructureSection({
  eyebrow,
  title,
  description,
  groups,
  socialLabels,
}: {
  eyebrow: string;
  title: string;
  description: string;
  groups: LeadershipGroup[];
  socialLabels?: { github: string; linkedin: string };
}) {
  const members = groups.flatMap((group) => group.members.map((member) => ({ ...member, groupTitle: group.title })));
  const memberRows = chunkLeadershipMembers(members);

  return (
    <CompanySection eyebrow={eyebrow} title={title} description={description}>
      <div className="space-y-5">
        {memberRows.map((row, rowIndex) => (
          <div key={`leadership-row-${rowIndex}`} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {row.map((member) => (
              <LeadershipMemberCard key={`${member.groupTitle}-${member.name}`} member={member} socialLabels={socialLabels} />
            ))}
          </div>
        ))}
      </div>
    </CompanySection>
  );
}

export async function CompanyOverviewPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.overview" });
  const shared = await getCompanySharedTranslations(locale);
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
          { label: t("hero.primaryCta"), href: companyHref(locale, "about") },
          { label: t("hero.secondaryCta"), href: companyHref(locale, "platform"), variant: "outline" },
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
        actions={localizeActions(locale, finalActions.length ? finalActions : [
          { label: shared("ctaAbout"), href: companyRoutes.about },
          { label: shared("ctaDiscoverOffice"), href: companyRoutes.office, variant: "outline" },
        ])}
      />
    </CompanyPageShell>
  );
}

export async function CompanyAboutPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.about" });
  const shared = await getCompanySharedTranslations(locale);
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
          { label: shared("ctaStory"), href: companyHref(locale, "story") },
          { label: shared("ctaValues"), href: companyHref(locale, "values"), variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyStoryPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.story" });
  const shared = await getCompanySharedTranslations(locale);
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
          { label: shared("ctaAbout"), href: companyHref(locale, "about") },
          { label: shared("ctaContact"), href: companyHref(locale, "contact"), variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyValuesPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.values" });
  const shared = await getCompanySharedTranslations(locale);
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
          { label: shared("ctaStory"), href: companyHref(locale, "story") },
          { label: shared("ctaCareers"), href: companyHref(locale, "careers"), variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyCareersPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.careers" });
  const shared = await getCompanySharedTranslations(locale);
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
          { label: shared("ctaContact"), href: companyHref(locale, "contact") },
          { label: shared("ctaValues"), href: companyHref(locale, "values"), variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyContactPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.contact" });
  const shared = await getCompanySharedTranslations(locale);
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
          { label: shared("ctaAbout"), href: companyHref(locale, "about") },
          { label: shared("ctaPress"), href: companyHref(locale, "press"), variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyLeadershipPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.leadership" });
  const shared = await getCompanySharedTranslations(locale);
  const areas = t.raw("areas") as CompanySectionContent;
  const governance = t.raw("governance") as CompanySectionContent;
  const expansionSections = t.raw("expansion.sections") as CompanySectionContent[];
  const metrics = t.raw("hero.metrics") as LeadershipMetric[];
  const leadershipGroups = t.raw("structure.groups") as LeadershipGroup[];

  return (
    <CompanyPageShell locale={locale}>
      <CompanyHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        visual={<LeadershipMetricsPanel metrics={metrics} />}
      />

      <LeadershipStructureSection
        eyebrow={t("structure.eyebrow")}
        title={t("structure.title")}
        description={t("structure.description")}
        groups={leadershipGroups}
        socialLabels={{ github: t("social.github"), linkedin: t("social.linkedin") }}
      />

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
          { label: shared("ctaStory"), href: companyHref(locale, "story") },
          { label: shared("ctaContact"), href: companyHref(locale, "contact"), variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyPartnersPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.partners" });
  const shared = await getCompanySharedTranslations(locale);
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
          { label: shared("ctaContact"), href: companyHref(locale, "contact") },
          { label: shared("ctaAbout"), href: companyHref(locale, "about"), variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}

export async function CompanyPressPage({ locale }: CompanyPageProps) {
  const t = await getTranslations({ locale, namespace: "Public.company.press" });
  const shared = await getCompanySharedTranslations(locale);
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
              cta: shared("ctaPress"),
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
          { label: shared("ctaContact"), href: companyHref(locale, "contact") },
          { label: shared("ctaCompany"), href: companyHref(locale, "overview"), variant: "outline" },
        ]}
      />
    </CompanyPageShell>
  );
}
