"use client";

/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/editorial-calendar
 * Layer: Dashboard Page
 * Purpose: Provides an editorial planning view aligned with the main dashboard overview.
 */

import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Calendar,
  CalendarDays,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileCheck2,
  FileText,
  Globe,
  Layers3,
  Mail,
  MoreHorizontal,
  Plus,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type EditorialStatus = "draft" | "review" | "scheduled" | "published" | "late";
type EditorialType = "article" | "announcement" | "newsletter" | "page" | "technical";

interface EditorialItem {
  title: string;
  type: EditorialType;
  status: EditorialStatus;
  date: string;
  time: string;
  owner: string;
  href: string;
}

const editorialHealth = [
  { label: "Cycle éditorial", value: "Semaine active", tone: "operational" },
  { label: "Dernière publication", value: "il y a 2h", tone: "neutral" },
  { label: "Contenus à valider", value: "5", tone: "attention" },
  { label: "Planifiés", value: "4", tone: "operational" },
];

const priorityActions = [
  {
    label: "Nouvel article",
    description: "Créer une publication pour le journal SGE.",
    href: "/dashboard/articles/new",
    icon: FileText,
  },
  {
    label: "Planifier une publication",
    description: "Programmer une publication, une page ou une opération éditoriale.",
    href: "/dashboard/scheduling",
    icon: CalendarDays,
  },
  {
    label: "Préparer la newsletter",
    description: "Coordonner les contenus du prochain envoi.",
    href: "/dashboard/newsletter",
    icon: Mail,
  },
  {
    label: "Voir les analytics",
    description: "Relier le planning aux signaux de lecture.",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
];

const editorialMetrics = [
  { title: "Brouillons", value: "7", description: "contenus en préparation", icon: FileText },
  { title: "En révision", value: "5", description: "validation éditoriale", icon: FileCheck2 },
  { title: "Planifiés", value: "4", description: "publications à venir", icon: Calendar },
  { title: "Publiés", value: "42", description: "contenus actifs", icon: CheckCircle2 },
];

const weeklyPlan: Array<{ day: string; date: string; items: EditorialItem[] }> = [
  {
    day: "Lundi",
    date: "11 mai",
    items: [
      {
        title: "Aether Office : état d'avancement",
        type: "article",
        status: "review",
        date: "11 mai",
        time: "09:30",
        owner: "Équipe Web Platform",
        href: "/dashboard/articles/aether-office",
      },
      {
        title: "Annonce Platform Edge",
        type: "announcement",
        status: "scheduled",
        date: "11 mai",
        time: "14:00",
        owner: "Équipe Platform",
        href: "/dashboard/publications/platform-edge",
      },
    ],
  },
  {
    day: "Mardi",
    date: "12 mai",
    items: [
      {
        title: "Newsletter hebdomadaire",
        type: "newsletter",
        status: "draft",
        date: "12 mai",
        time: "08:45",
        owner: "Équipe Editorial",
        href: "/dashboard/newsletter",
      },
      {
        title: "Programme partenaires SGE",
        type: "page",
        status: "scheduled",
        date: "12 mai",
        time: "16:00",
        owner: "Équipe SGE",
        href: "/dashboard/publications/partners-program",
      },
    ],
  },
  {
    day: "Mercredi",
    date: "13 mai",
    items: [
      {
        title: "Trust Center PGP",
        type: "page",
        status: "late",
        date: "13 mai",
        time: "10:15",
        owner: "Équipe Security",
        href: "/dashboard/pages",
      },
    ],
  },
  {
    day: "Jeudi",
    date: "14 mai",
    items: [
      {
        title: "Note technique SkyDB",
        type: "technical",
        status: "review",
        date: "14 mai",
        time: "11:00",
        owner: "Équipe Engineering",
        href: "/dashboard/articles/skydb-note",
      },
    ],
  },
  {
    day: "Vendredi",
    date: "15 mai",
    items: [
      {
        title: "Récapitulatif SGE Journal",
        type: "article",
        status: "scheduled",
        date: "15 mai",
        time: "09:00",
        owner: "Équipe Editorial",
        href: "/dashboard/articles/journal-recap",
      },
    ],
  },
];

const trackedModules = [
  { name: "Platform", status: "En révision", updatedAt: "hier", href: "/fr/platform/edge" },
  { name: "Trust Center", status: "À valider", updatedAt: "il y a 3h", href: "/fr/pgp" },
  { name: "Partners", status: "Planifié", updatedAt: "il y a 1j", href: "/fr/partners/program" },
  { name: "Journal", status: "Publié", updatedAt: "il y a 2h", href: "/fr/blog" },
];

const recentActivity = [
  { team: "Équipe Web", action: "a publié", target: "SGE Journal", time: "il y a 2h", icon: FileText },
  { team: "Security", action: "a mis à jour", target: "la page PGP", time: "il y a 3h", icon: ShieldCheck },
  { team: "Platform", action: "a planifié", target: "une annonce Edge", time: "hier", icon: Layers3 },
  { team: "Editorial", action: "a préparé", target: "la newsletter", time: "hier", icon: Mail },
];

const quickLinks = [
  { label: "Site public", href: "/fr", icon: Globe },
  { label: "Articles", href: "/dashboard/articles", icon: FileText },
  { label: "Planification", href: "/dashboard/scheduling", icon: CalendarDays },
  { label: "Pages", href: "/dashboard/pages", icon: Layers3 },
  { label: "Newsletter", href: "/dashboard/newsletter", icon: Mail },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
];

const typeLabels: Record<EditorialType, string> = {
  article: "Article",
  announcement: "Annonce",
  newsletter: "Newsletter",
  page: "Page publique",
  technical: "Technique",
};

const statusLabels: Record<EditorialStatus, string> = {
  draft: "Brouillon",
  review: "En révision",
  scheduled: "Planifié",
  published: "Publié",
  late: "En retard",
};

const statusClasses: Record<EditorialStatus, string> = {
  draft: "border-slate-200 bg-slate-50 text-slate-700",
  review: "border-amber-200 bg-amber-50 text-amber-700",
  scheduled: "border-blue-200 bg-blue-50 text-blue-700",
  published: "border-emerald-200 bg-emerald-50 text-emerald-700",
  late: "border-rose-200 bg-rose-50 text-rose-700",
};

function StatusDot({ tone }: { tone: string }) {
  const className =
    tone === "operational"
      ? "bg-emerald-500"
      : tone === "attention"
        ? "bg-amber-500"
        : "bg-muted-foreground";

  return <span className={`h-2.5 w-2.5 rounded-full ${className}`} aria-hidden="true" />;
}

function StatusBadge({ status }: { status: EditorialStatus }) {
  return (
    <Badge variant="outline" className={statusClasses[status]}>
      {statusLabels[status]}
    </Badge>
  );
}

function ModuleStatusBadge({ status }: { status: string }) {
  if (status === "Publié") return <Badge variant="secondary">Stable</Badge>;
  if (status === "Planifié") return <Badge variant="outline">Planifié</Badge>;
  return <Badge variant="outline">À valider</Badge>;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function EditorialCalendarPage() {
  const [timeRange, setTimeRange] = React.useState("week");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const flatItems = weeklyPlan.flatMap((day) => day.items);
  const filteredPlan = weeklyPlan.map((day) => ({
    ...day,
    items: day.items.filter((item) => statusFilter === "all" || item.status === statusFilter),
  }));

  return (
    <div className="space-y-6 bg-background p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-medium text-foreground">Calendrier éditorial</h1>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Pilotez les publications, annonces, newsletters et pages publiques en cohérence avec la
            vue d'ensemble du site officiel.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-full sm:w-44">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Cette semaine</SelectItem>
              <SelectItem value="next">Semaine prochaine</SelectItem>
              <SelectItem value="month">Ce mois</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" asChild>
            <Link href="/fr">
              Voir le site
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard/articles/new">
              Nouvel article
              <Plus className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {editorialHealth.map((item) => (
          <Card key={item.label} className="rounded-2xl border-border/50 bg-card py-4 shadow-none">
            <CardContent className="px-4">
              <div className="flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
                <StatusDot tone={item.tone} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {priorityActions.map((action) => (
          <Card
            key={action.label}
            className="rounded-2xl border-border/50 bg-card py-0 shadow-none transition-colors hover:bg-muted/20"
          >
            <Link href={action.href} className="flex h-full flex-col gap-4 p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/40">
                  <action.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base font-medium text-foreground">{action.label}</h2>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
            </Link>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {editorialMetrics.map((metric) => (
          <Card key={metric.title} className="rounded-2xl border-border/50 bg-card py-4 shadow-none">
            <CardContent className="px-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                  <p className="text-2xl font-medium tracking-tight text-foreground">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/40">
                  <metric.icon className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-7">
        <Card className="rounded-2xl border-border/50 bg-card shadow-none xl:col-span-4">
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">Vue semaine éditoriale</CardTitle>
                <CardDescription>
                  Contenus publics à produire, valider et publier sur la période sélectionnée.
                </CardDescription>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-44">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="draft">Brouillons</SelectItem>
                  <SelectItem value="review">En révision</SelectItem>
                  <SelectItem value="scheduled">Planifiés</SelectItem>
                  <SelectItem value="published">Publiés</SelectItem>
                  <SelectItem value="late">En retard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 2xl:grid-cols-5">
              {filteredPlan.map((day) => (
                <section key={day.day} className="min-h-64 rounded-2xl border border-border/50 bg-muted/20 p-3">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-medium text-foreground">{day.day}</h2>
                      <p className="text-xs text-muted-foreground">{day.date}</p>
                    </div>
                    <Badge variant="outline" className="bg-card text-xs">
                      {day.items.length}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    {day.items.length === 0 ? (
                      <div className="rounded-2xl border border-dashed border-border/60 bg-card/50 p-3 text-xs text-muted-foreground">
                        Aucun contenu pour ce filtre.
                      </div>
                    ) : (
                      day.items.map((item) => (
                        <Link
                          key={`${day.day}-${item.title}`}
                          href={item.href}
                          className="block rounded-2xl border border-border/50 bg-card p-3 transition-colors hover:bg-muted/20"
                        >
                          <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge variant="outline" className="bg-muted/20">
                                {typeLabels[item.type]}
                              </Badge>
                              <StatusBadge status={item.status} />
                            </div>
                            <h3 className="line-clamp-2 text-sm font-medium leading-snug text-foreground">
                              {item.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                              <span className="inline-flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {item.time}
                              </span>
                              <span>{item.owner}</span>
                            </div>
                          </div>
                        </Link>
                      ))
                    )}
                  </div>
                </section>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50 bg-card shadow-none xl:col-span-3">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">Pipeline éditorial</CardTitle>
                <CardDescription>Vue compacte alignée avec la vue d'ensemble.</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/articles">
                  Voir les contenus
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {flatItems.slice(0, 6).map((item) => (
                <div key={`${item.date}-${item.title}`} className="flex items-center gap-4 px-6 py-4">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-muted text-xs text-muted-foreground">
                      {getInitials(item.owner)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <Badge variant="outline">{typeLabels[item.type]}</Badge>
                      <StatusBadge status={item.status} />
                    </div>
                    <p className="truncate text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.owner} · {item.date} · {item.time}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions pour {item.title}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={item.href}>Ouvrir</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/scheduling">Planifier</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Assigner</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="rounded-2xl border-border/50 bg-card shadow-none">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">Modules publics suivis</CardTitle>
                <CardDescription>État éditorial des surfaces visibles publiquement.</CardDescription>
              </div>
              <Layers3 className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {trackedModules.map((module) => (
                <div key={module.name} className="flex items-center justify-between gap-4 px-6 py-3">
                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-foreground">{module.name}</p>
                      <ModuleStatusBadge status={module.status} />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {module.status} · Mise à jour {module.updatedAt}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={module.href}>
                      Voir <span className="sr-only">{module.name}</span>
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50 bg-card shadow-none">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">Activité récente</CardTitle>
                <CardDescription>Dernières actions éditoriales visibles dans le dashboard.</CardDescription>
              </div>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {recentActivity.map((activity) => (
                <div key={`${activity.team}-${activity.target}`} className="flex gap-3 px-6 py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted/40">
                    <activity.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{activity.team}</span>{" "}
                      <span className="text-muted-foreground">{activity.action}</span>{" "}
                      <span className="font-medium">{activity.target}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50 bg-card shadow-none">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">Accès rapides</CardTitle>
                <CardDescription>Surfaces publiques et outils éditoriaux.</CardDescription>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="outline"
                  className="h-auto justify-start gap-2 rounded-xl py-3"
                  asChild
                >
                  <Link href={link.href}>
                    <link.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{link.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
