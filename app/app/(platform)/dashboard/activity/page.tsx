/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/activity
 * Layer: Dashboard Page
 * Purpose: Provides a detailed activity center for content, platform, security and system events.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */

import * as React from "react";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  Filter,
  Globe2,
  Layers3,
  ListFilter,
  LockKeyhole,
  Search,
  ServerCog,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type ActivityEvent = {
  id: string;
  title: string;
  description: string;
  actor: string;
  team: string;
  time: string;
  category: "content" | "page" | "platform" | "security" | "system";
  severity: "info" | "success" | "warning" | "critical";
  href?: string;
  icon: React.ElementType;
};

type ActivityGroup = {
  label: string;
  events: ActivityEvent[];
};

const summaryCards = [
  {
    label: "Événements aujourd’hui",
    value: "24",
    description: "+12% vs. moyenne semaine",
    icon: Activity,
  },
  {
    label: "Changements publiés",
    value: "8",
    description: "Pages et contenus synchronisés",
    icon: CheckCircle2,
  },
  {
    label: "Actions sécurité",
    value: "3",
    description: "Contrôles et mises à jour confiance",
    icon: ShieldCheck,
  },
  {
    label: "Alertes ouvertes",
    value: "2",
    description: "À qualifier par les équipes",
    icon: AlertTriangle,
  },
];

const filters = ["Tous", "Contenu", "Pages", "Plateforme", "Sécurité", "Système"];

const activityGroups: ActivityGroup[] = [
  {
    label: "Aujourd’hui",
    events: [
      {
        id: "evt-journal-publication",
        title: "Publication du SGE Journal",
        description: "La nouvelle page média a été mise à jour avec une structure éditoriale.",
        actor: "Équipe Web",
        team: "Web Platform",
        time: "09:45",
        category: "content",
        severity: "success",
        href: "/dashboard/articles",
        icon: FileText,
      },
      {
        id: "evt-pgp-update",
        title: "Mise à jour de la page PGP",
        description:
          "Le Trust Center public a été remodelé pour améliorer la lisibilité de la clé officielle.",
        actor: "Security",
        team: "SGE Security",
        time: "08:20",
        category: "security",
        severity: "info",
        href: "/dashboard/pages",
        icon: LockKeyhole,
      },
      {
        id: "evt-platform-edge",
        title: "Modification de Platform Edge",
        description: "La sous-page Edge a été alignée avec le nouveau cadrage plateforme.",
        actor: "Platform",
        team: "SGE Platform",
        time: "07:55",
        category: "platform",
        severity: "info",
        href: "/dashboard/pages",
        icon: Layers3,
      },
    ],
  },
  {
    label: "Hier",
    events: [
      {
        id: "evt-sitemap-sync",
        title: "Synchronisation du sitemap",
        description: "Le sitemap public a été régénéré après mise à jour des routes.",
        actor: "System",
        team: "Automation",
        time: "18:10",
        category: "system",
        severity: "success",
        icon: ServerCog,
      },
      {
        id: "evt-incomplete-content",
        title: "Alerte de contenu incomplet",
        description: "Certaines clés de traduction semblent manquantes sur une page publique.",
        actor: "System",
        team: "Quality",
        time: "16:35",
        category: "system",
        severity: "warning",
        icon: AlertTriangle,
      },
      {
        id: "evt-footer-update",
        title: "Mise à jour du footer",
        description: "Ajout des sections Plateforme API, Sécurité, Autre et Assistance.",
        actor: "Équipe Web",
        team: "Web Platform",
        time: "11:25",
        category: "page",
        severity: "success",
        href: "/dashboard/pages",
        icon: Globe2,
      },
    ],
  },
  {
    label: "Cette semaine",
    events: [
      {
        id: "evt-seo-alert",
        title: "Alerte SEO sur pages publiques",
        description: "Des métadonnées sociales doivent être revues sur plusieurs routes publiques.",
        actor: "System",
        team: "Quality",
        time: "Mardi",
        category: "page",
        severity: "warning",
        href: "/dashboard/seo",
        icon: ListFilter,
      },
      {
        id: "evt-audit-policy",
        title: "Revue des journaux d’audit",
        description: "Les traces administratives critiques ont été contrôlées pour la période active.",
        actor: "Security",
        team: "SGE Security",
        time: "Lundi",
        category: "security",
        severity: "critical",
        href: "/dashboard/audit-logs",
        icon: ShieldCheck,
      },
    ],
  },
];

const criticalItems = [
  "Traductions manquantes",
  "Alerte SEO",
  "Vérification PGP à confirmer",
];

const activeTeams = [
  { name: "Web Platform", initials: "WP", actions: 11 },
  { name: "Security", initials: "SE", actions: 5 },
  { name: "Platform", initials: "PL", actions: 4 },
  { name: "Editorial", initials: "ED", actions: 4 },
];

const quickAccess = [
  { label: "Logs système", href: "/dashboard/logs", icon: ServerCog },
  { label: "Audit logs", href: "/dashboard/audit-logs", icon: ShieldCheck },
  { label: "Pages publiques", href: "/dashboard/pages", icon: Globe2 },
  { label: "Analytics", href: "/dashboard/analytics", icon: Activity },
];

const categoryLabels: Record<ActivityEvent["category"], string> = {
  content: "Contenu",
  page: "Pages",
  platform: "Plateforme",
  security: "Sécurité",
  system: "Système",
};

const severityLabels: Record<ActivityEvent["severity"], string> = {
  info: "Info",
  success: "Succès",
  warning: "Attention",
  critical: "Critique",
};

const severityClasses: Record<ActivityEvent["severity"], string> = {
  info: "bg-muted text-muted-foreground border-border",
  success: "bg-green-500/10 text-green-700 border-green-500/20",
  warning: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  critical: "bg-red-500/10 text-red-700 border-red-500/20",
};

function ActivityBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Badge variant="outline" className={cn("rounded-full font-medium", className)}>
      {children}
    </Badge>
  );
}

function EmptyActivityState() {
  return (
    <div className="rounded-2xl border border-dashed border-border/50 bg-muted/20 p-6 text-sm text-muted-foreground">
      Aucune activité pour ce filtre.
    </div>
  );
}

export default function ActivityPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-2xl border border-border/50 bg-muted/20">
              <Clock3 className="size-5 text-muted-foreground" aria-hidden="true" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">Activité</h1>
          </div>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Suivez les changements récents du site officiel, des contenus, des modules publics
            et des opérations système.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" disabled>
            <Download className="size-4" aria-hidden="true" />
            Exporter
          </Button>
          <Button asChild>
            <Link href="/dashboard/logs">
              <ServerCog className="size-4" aria-hidden="true" />
              Voir les logs
            </Link>
          </Button>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="Résumé activité">
        {summaryCards.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.label} className="rounded-2xl border-border/50 bg-card">
              <CardContent className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-2xl font-semibold tracking-tight">{item.value}</p>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-2xl border border-border/50 bg-muted/20">
                  <Icon className="size-5 text-muted-foreground" aria-hidden="true" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <Card className="rounded-2xl border-border/50 bg-card">
        <CardContent className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" aria-label="Filtres activité">
            {filters.map((filter) => (
              <Button
                key={filter}
                type="button"
                variant={filter === "Tous" ? "secondary" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {filter === "Tous" ? (
                  <Filter className="size-4" aria-hidden="true" />
                ) : null}
                {filter}
              </Button>
            ))}
          </div>
          <div className="relative w-full lg:max-w-sm">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              readOnly
              aria-label="Recherche dans l’activité"
              placeholder="Rechercher dans l’activité…"
              className="rounded-full bg-muted/20 pl-9"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card className="rounded-2xl border-border/50 bg-card">
          <CardHeader>
            <CardTitle>Timeline détaillée</CardTitle>
            <CardDescription>
              Historique récent des contenus, pages, signaux de confiance et opérations système.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {activityGroups.length === 0 ? <EmptyActivityState /> : null}
            {activityGroups.map((group) => (
              <section key={group.label} className="space-y-4" aria-labelledby={group.label}>
                <div className="flex items-center gap-3">
                  <h2 id={group.label} className="text-sm font-semibold">
                    {group.label}
                  </h2>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
                <div className="space-y-0">
                  {group.events.map((event, index) => {
                    const Icon = event.icon;
                    const isLast = index === group.events.length - 1;

                    return (
                      <article key={event.id} className="relative flex gap-4 pb-6 last:pb-0">
                        {!isLast ? (
                          <div
                            className="absolute left-5 top-11 h-[calc(100%-2rem)] w-px bg-border/50"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-muted/20">
                          <Icon className="size-5 text-muted-foreground" aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1 rounded-2xl border border-border/50 bg-background p-4">
                          <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
                            <div className="min-w-0 space-y-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-medium leading-tight">{event.title}</h3>
                                <ActivityBadge>{categoryLabels[event.category]}</ActivityBadge>
                                <ActivityBadge className={severityClasses[event.severity]}>
                                  {severityLabels[event.severity]}
                                </ActivityBadge>
                              </div>
                              <p className="text-sm text-muted-foreground">{event.description}</p>
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                                <span>Acteur : {event.actor}</span>
                                <span>Équipe : {event.team}</span>
                                <span>Heure : {event.time}</span>
                              </div>
                            </div>
                            {event.href ? (
                              <Button asChild variant="outline" size="sm" className="shrink-0">
                                <Link href={event.href}>
                                  Voir
                                  <ArrowRight className="size-4" aria-hidden="true" />
                                </Link>
                              </Button>
                            ) : null}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </CardContent>
        </Card>

        <aside className="space-y-6">
          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Activité critique</CardTitle>
              <CardDescription>Points à surveiller en priorité.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {criticalItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border/50 bg-muted/20 p-3"
                >
                  <AlertTriangle className="size-4 text-muted-foreground" aria-hidden="true" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Équipes actives</CardTitle>
              <CardDescription>Actions enregistrées sur la période récente.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {activeTeams.map((team) => (
                <div key={team.name} className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="text-xs font-semibold">
                        {team.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="truncate text-sm font-medium">{team.name}</span>
                  </div>
                  <Badge variant="outline" className="rounded-full border-border/50">
                    {team.actions} actions
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Accès rapides</CardTitle>
              <CardDescription>Vues utiles pour approfondir l’activité.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickAccess.map((item) => {
                const Icon = item.icon;

                return (
                  <Button
                    key={item.href}
                    asChild
                    variant="outline"
                    className="w-full justify-between rounded-2xl border-border/50"
                  >
                    <Link href={item.href}>
                      <span className="flex items-center gap-2">
                        <Icon className="size-4" aria-hidden="true" />
                        {item.label}
                      </span>
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                );
              })}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardContent className="flex items-start gap-3">
              <Sparkles className="mt-0.5 size-5 text-muted-foreground" aria-hidden="true" />
              <p className="text-sm text-muted-foreground">
                Les événements affichés sont des données locales de démonstration pour cadrer le
                futur centre d’activité opérationnel Sky Genesis Enterprise.
              </p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
