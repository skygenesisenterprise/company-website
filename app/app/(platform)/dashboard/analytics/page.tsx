"use client";

/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/analytics
 * Layer: Dashboard Page
 * Purpose: Provides an analytics view aligned with the main dashboard overview.
 */

import * as React from "react";
import { Activity, BarChart3, CalendarDays, Eye, FileText, Mail, MessageSquare, ShieldAlert } from "lucide-react";

import {
  DashboardEmptyState,
  DashboardMetricCard,
  DashboardPageHeader,
  DashboardStatusBadge,
  DashboardToolbar,
} from "@/components/dashboard/cms-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type AnalyticsStatus = "available" | "partial" | "not_configured";

interface MetricItem {
  label: string;
  value: string | number;
  detail: string;
  icon: React.ElementType;
  status: AnalyticsStatus;
}

const metricItems: MetricItem[] = [
  { label: "Visites suivies", value: "Démo", detail: "Connecteur analytics en attente", icon: Eye, status: "partial" },
  { label: "Pages publiées", value: 18, detail: "Contenus publics connus", icon: FileText, status: "available" },
  { label: "Contenus récents", value: 6, detail: "Mises à jour éditoriales", icon: CalendarDays, status: "available" },
  { label: "Newsletter", value: "N/A", detail: "Synchronisation non configurée", icon: Mail, status: "not_configured" },
  { label: "Interactions", value: 12, detail: "Commentaires et retours fictifs", icon: MessageSquare, status: "partial" },
  { label: "Événements importants", value: 1, detail: "Signalement interne fictif", icon: ShieldAlert, status: "partial" },
];

const topPages = [
  { path: "/company", title: "Présentation entreprise", visits: 420, trend: "Stable" },
  { path: "/products", title: "Produits", visits: 360, trend: "En hausse" },
  { path: "/security", title: "Sécurité", visits: 240, trend: "Stable" },
  { path: "/developers", title: "Développeurs", visits: 190, trend: "À surveiller" },
];

const sourceItems = [
  { label: "Accès direct", value: 42 },
  { label: "Recherche", value: 31 },
  { label: "Réseaux sociaux", value: 17 },
  { label: "Référents", value: 10 },
];

const recentActivity = [
  "Page Sécurité mise à jour",
  "Article roadmap ajouté aux contenus récents",
  "Formulaire newsletter vérifié",
  "Signalement modération traité",
];

const periodOptions = [
  { value: "today", label: "Aujourd'hui" },
  { value: "7d", label: "7 jours" },
  { value: "30d", label: "30 jours" },
  { value: "custom", label: "Période personnalisée" },
];

const statusLabels: Record<AnalyticsStatus, string> = {
  available: "Disponible",
  partial: "Partiel",
  not_configured: "Non configuré",
};

const statusTones: Record<AnalyticsStatus, "green" | "amber" | "gray"> = {
  available: "green",
  partial: "amber",
  not_configured: "gray",
};

export default function AnalyticsPage() {
  const [period, setPeriod] = React.useState("7d");
  const hasAnalyticsData = metricItems.some((item) => item.status !== "not_configured");

  return (
    <div className="space-y-6 p-6">
      <DashboardPageHeader
        title="Analytics"
        description="Suivez l'activité générale du site officiel avec des indicateurs prudents et orientés pilotage."
      />

      <DashboardToolbar>
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground">Période d'analyse</p>
          <p className="text-xs text-muted-foreground">
            Les chiffres marqués partiels sont des données fictives en attente d'intégration.
          </p>
        </div>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-full md:w-56" aria-label="Période">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {periodOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </DashboardToolbar>

      {!hasAnalyticsData ? (
        <DashboardEmptyState
          icon={BarChart3}
          title="Aucune donnée analytics n'est encore disponible"
          description="Les métriques apparaîtront ici lorsque le suivi sera configuré."
        />
      ) : (
        <>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {metricItems.map((metric) => (
              <div key={metric.label} className="relative">
                <DashboardMetricCard
                  label={metric.label}
                  value={metric.value}
                  detail={metric.detail}
                  icon={metric.icon}
                />
                <div className="absolute right-4 top-4">
                  <DashboardStatusBadge tone={statusTones[metric.status]}>
                    {statusLabels[metric.status]}
                  </DashboardStatusBadge>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)]">
            <Card className="rounded-lg border-border/70 shadow-none">
              <CardHeader>
                <CardTitle className="text-base">Pages les plus consultées</CardTitle>
                <CardDescription>Données de démonstration, à remplacer par le connecteur analytics.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={page.path} className="grid gap-3 rounded-md border border-border/70 p-3 sm:grid-cols-[2rem_minmax(0,1fr)_7rem] sm:items-center">
                    <span className="text-sm font-semibold text-muted-foreground">{index + 1}</span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-foreground">{page.title}</p>
                      <p className="truncate text-xs text-muted-foreground">{page.path}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-sm font-semibold">{page.visits}</p>
                      <p className="text-xs text-muted-foreground">{page.trend}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-lg border-border/70 shadow-none">
              <CardHeader>
                <CardTitle className="text-base">Sources et canaux</CardTitle>
                <CardDescription>Répartition indicative des visites suivies.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {sourceItems.map((source) => (
                  <div key={source.label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{source.label}</span>
                      <span className="font-medium">{source.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary/70" style={{ width: `${source.value}%` }} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-lg border-border/70 shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Activity className="size-4" />
                Activité récente
              </CardTitle>
              <CardDescription>Événements internes utiles à la lecture des tendances.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {recentActivity.map((activity) => (
                  <div key={activity} className={cn("rounded-md border border-border/70 bg-muted/10 p-3 text-sm text-foreground")}>
                    {activity}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
