/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/editorial-calendar
 * Layer: Dashboard Page
 * Purpose: Provides an editorial planning view for articles, announcements, newsletters and public content.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  FileText,
  ListChecks,
  Megaphone,
  Plus,
  Radio,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CalendarItem = {
  id: string;
  title: string;
  type: "article" | "announcement" | "newsletter" | "page" | "live" | "technical";
  status: "draft" | "review" | "scheduled" | "published" | "late";
  time: string;
  team: string;
  priority: "low" | "medium" | "high";
  href: string;
};

type CalendarDay = {
  day: string;
  date: string;
  items: CalendarItem[];
};

type UpcomingContent = {
  id: string;
  title: string;
  channel: string;
  date: string;
  status: CalendarItem["status"];
  owner: string;
  href: string;
};

const statusLabels: Record<CalendarItem["status"], string> = {
  draft: "Brouillon",
  review: "En révision",
  scheduled: "Planifié",
  published: "Publié",
  late: "En retard",
};

const typeLabels: Record<CalendarItem["type"], string> = {
  article: "Article",
  announcement: "Annonce",
  newsletter: "Newsletter",
  page: "Page publique",
  live: "Live",
  technical: "Technique",
};

const priorityLabels: Record<CalendarItem["priority"], string> = {
  low: "Basse",
  medium: "Moyenne",
  high: "Haute",
};

const statusStyles: Record<CalendarItem["status"], string> = {
  draft: "border-border/60 bg-muted/30 text-muted-foreground",
  review: "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  scheduled: "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  published: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  late: "border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300",
};

const priorityStyles: Record<CalendarItem["priority"], string> = {
  low: "border-border/60 bg-muted/20 text-muted-foreground",
  medium: "border-primary/20 bg-primary/10 text-primary",
  high: "border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300",
};

const summaryCards = [
  {
    label: "Cette semaine",
    value: "8 contenus",
    icon: CalendarDays,
  },
  {
    label: "En révision",
    value: "4",
    icon: ListChecks,
  },
  {
    label: "Planifiés",
    value: "6",
    icon: Clock3,
  },
  {
    label: "En retard",
    value: "2",
    icon: ShieldCheck,
  },
];

const filters = [
  "Tous",
  "Articles",
  "Annonces",
  "Newsletter",
  "Pages publiques",
  "Live",
  "Technique",
];

const calendarDays: CalendarDay[] = [
  {
    day: "Lundi",
    date: "11 mai",
    items: [
      {
        id: "aether-office",
        title: "Point d'avancement Aether Office",
        type: "article",
        status: "review",
        time: "09:30",
        team: "SGE Journal",
        priority: "high",
        href: "/dashboard/articles/aether-office",
      },
      {
        id: "edge-update",
        title: "Mise à jour Platform Edge",
        type: "announcement",
        status: "scheduled",
        time: "14:00",
        team: "Platform",
        priority: "medium",
        href: "/dashboard/publications/platform-edge",
      },
    ],
  },
  {
    day: "Mardi",
    date: "12 mai",
    items: [
      {
        id: "weekly-newsletter",
        title: "Newsletter hebdomadaire",
        type: "newsletter",
        status: "draft",
        time: "08:45",
        team: "Editorial",
        priority: "medium",
        href: "/dashboard/newsletter",
      },
    ],
  },
  {
    day: "Mercredi",
    date: "13 mai",
    items: [
      {
        id: "trust-center-pgp",
        title: "Publication Trust Center PGP",
        type: "page",
        status: "late",
        time: "10:15",
        team: "Trust & Security",
        priority: "high",
        href: "/dashboard/publications/trust-center-pgp",
      },
      {
        id: "partners-program",
        title: "Annonce Partners Program",
        type: "announcement",
        status: "scheduled",
        time: "16:30",
        team: "Partners",
        priority: "medium",
        href: "/dashboard/publications/partners-program",
      },
    ],
  },
  {
    day: "Jeudi",
    date: "14 mai",
    items: [
      {
        id: "skydb-note",
        title: "Note technique SkyDB",
        type: "technical",
        status: "review",
        time: "11:00",
        team: "Engineering",
        priority: "high",
        href: "/dashboard/articles/skydb-note",
      },
    ],
  },
  {
    day: "Vendredi",
    date: "15 mai",
    items: [
      {
        id: "journal-recap",
        title: "Récapitulatif SGE Journal",
        type: "article",
        status: "scheduled",
        time: "09:00",
        team: "SGE Journal",
        priority: "low",
        href: "/dashboard/articles/journal-recap",
      },
    ],
  },
  {
    day: "Weekend",
    date: "16-17 mai",
    items: [
      {
        id: "live-platform",
        title: "Live Platform Office Hours",
        type: "live",
        status: "scheduled",
        time: "17:00",
        team: "Community",
        priority: "medium",
        href: "/dashboard/scheduling",
      },
    ],
  },
];

const upcomingContents: UpcomingContent[] = [
  {
    id: "public-roadmap",
    title: "Page publique Roadmap Cloud",
    channel: "Pages publiques",
    date: "18 mai 2026",
    status: "review",
    owner: "Platform",
    href: "/dashboard/publications/public-roadmap",
  },
  {
    id: "podcast-founders",
    title: "Podcast SGE Founders Notes",
    channel: "Podcast",
    date: "19 mai 2026",
    status: "scheduled",
    owner: "Editorial",
    href: "/dashboard/publications/podcast-founders",
  },
  {
    id: "security-brief",
    title: "Brief sécurité Data Residency",
    channel: "Trust Center",
    date: "20 mai 2026",
    status: "draft",
    owner: "Trust & Security",
    href: "/dashboard/publications/security-brief",
  },
  {
    id: "partner-spotlight",
    title: "Partner Spotlight: Integrations Hub",
    channel: "Blog",
    date: "21 mai 2026",
    status: "scheduled",
    owner: "Partners",
    href: "/dashboard/articles/partner-spotlight",
  },
];

const editorialPriorities = ["Platform", "Trust & Security", "Partners", "SGE Journal"];
const channels = ["Blog", "Newsletter", "Live", "Podcast", "Pages publiques"];
const shortcuts = [
  { label: "Nouvel article", href: "/dashboard/articles/new" },
  { label: "Brouillons", href: "/dashboard/articles?status=draft" },
  { label: "Planification", href: "/dashboard/scheduling" },
  { label: "Newsletter", href: "/dashboard/newsletter" },
  { label: "Analytics", href: "/dashboard/analytics" },
];

export default function EditorialCalendarPage() {
  return (
    <div className="space-y-6 bg-background">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Sparkles className="size-4" />
            Console SGE
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Calendrier éditorial</h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Planifiez les publications, annonces, newsletters et contenus publics de Sky Genesis
              Enterprise.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button asChild variant="outline" className="rounded-2xl">
            <Link href="/dashboard/articles/new">
              <Plus className="size-4" />
              Nouvel article
            </Link>
          </Button>
          <Button asChild className="rounded-2xl">
            <Link href="/dashboard/scheduling">
              <CalendarDays className="size-4" />
              Planifier une publication
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <Card key={card.label} className="rounded-2xl border-border/50 bg-card">
              <CardContent className="flex items-center justify-between gap-4 pt-0">
                <div>
                  <p className="text-sm text-muted-foreground">{card.label}</p>
                  <p className="mt-2 text-2xl font-semibold">{card.value}</p>
                </div>
                <div className="rounded-2xl border border-border/50 bg-muted/20 p-3">
                  <Icon className="size-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <main className="space-y-6">
          <Card className="rounded-2xl border-border/50 bg-card">
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter, index) => (
                  <Button
                    key={filter}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className="rounded-2xl"
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Vue semaine éditoriale</CardTitle>
              <CardDescription>
                Suivi opérationnel des contenus à produire, valider et publier.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
                {calendarDays.map((day) => (
                  <section
                    key={day.day}
                    className="min-h-64 rounded-2xl border border-border/50 bg-muted/20 p-3"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-sm font-semibold">{day.day}</h2>
                        <p className="text-xs text-muted-foreground">{day.date}</p>
                      </div>
                      <Badge variant="outline" className="bg-card text-xs">
                        {day.items.length}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      {day.items.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="block rounded-2xl border border-border/50 bg-card p-3 transition-colors hover:bg-muted/20"
                        >
                          <div className="space-y-3">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <Badge variant="outline" className="bg-muted/20">
                                  {typeLabels[item.type]}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className={cn(priorityStyles[item.priority])}
                                >
                                  {priorityLabels[item.priority]}
                                </Badge>
                              </div>
                              <h3 className="text-sm font-medium leading-snug">{item.title}</h3>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                              <span className="inline-flex items-center gap-1">
                                <Clock3 className="size-3" />
                                {item.time}
                              </span>
                              <span>{item.team}</span>
                            </div>

                            <Badge variant="outline" className={cn(statusStyles[item.status])}>
                              {statusLabels[item.status]}
                            </Badge>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>À publier prochainement</CardTitle>
              <CardDescription>
                Contenus SGE à finaliser sur les prochains cycles de publication.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingContents.map((content) => (
                  <div
                    key={content.id}
                    className="grid gap-3 rounded-2xl border border-border/50 bg-muted/20 p-4 md:grid-cols-[1fr_150px_120px_auto] md:items-center"
                  >
                    <div className="min-w-0">
                      <p className="font-medium">{content.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {content.channel} · {content.owner}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">{content.date}</p>
                    <Badge variant="outline" className={cn(statusStyles[content.status])}>
                      {statusLabels[content.status]}
                    </Badge>
                    <Button asChild variant="outline" size="sm" className="rounded-2xl">
                      <Link href={content.href}>
                        Voir
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>

        <aside className="space-y-6">
          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Megaphone className="size-4" />
                Priorités éditoriales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {editorialPriorities.map((priority) => (
                <div
                  key={priority}
                  className="flex items-center justify-between rounded-2xl border border-border/50 bg-muted/20 px-3 py-2 text-sm"
                >
                  <span>{priority}</span>
                  <Badge variant="outline" className="bg-card">
                    Actif
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Radio className="size-4" />
                Canaux
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {channels.map((channel) => (
                <Badge key={channel} variant="outline" className="bg-muted/20 px-3 py-1">
                  {channel}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <FileText className="size-4" />
                Raccourcis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {shortcuts.map((shortcut) => (
                <Button
                  key={shortcut.href}
                  asChild
                  variant="outline"
                  className="w-full justify-between rounded-2xl"
                >
                  <Link href={shortcut.href}>
                    {shortcut.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
