"use client";

import * as React from "react";
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  BarChart3,
  Calendar,
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
  Search,
  Send,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
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

const systemHealth = [
  { label: "Site public", value: "Opérationnel", tone: "operational" },
  { label: "Status page", value: "Synchronisée", tone: "operational" },
  { label: "Dernière publication", value: "il y a 2h", tone: "neutral" },
  { label: "Alertes ouvertes", value: "2", tone: "attention" },
];

const priorityActions = [
  {
    label: "Nouvel article",
    description: "Créer une publication pour le journal SGE.",
    href: "/dashboard/articles/new",
    icon: FileText,
  },
  {
    label: "Publier une annonce",
    description: "Préparer une communication publique prioritaire.",
    href: "/dashboard/articles/new?type=announcement",
    icon: Send,
  },
  {
    label: "Vérifier le statut",
    description: "Contrôler les signaux de disponibilité publics.",
    href: "/fr/platform/status",
    icon: ShieldCheck,
  },
  {
    label: "Consulter les rapports",
    description: "Analyser le trafic, les contenus et les signaux.",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
];

const keyMetrics = [
  { title: "Pages publiques", value: "128", description: "pages indexées", icon: Globe },
  { title: "Articles publiés", value: "42", description: "journal et annonces", icon: FileText },
  { title: "Visiteurs", value: "24.8K", description: "période sélectionnée", icon: Users },
  { title: "Abonnés newsletter", value: "5.4K", description: "audience qualifiée", icon: Mail },
  { title: "Uptime public", value: "99.98%", description: "disponibilité mesurée", icon: Activity },
  { title: "Demandes contact", value: "18", description: "à qualifier", icon: Send },
  { title: "Documents publiés", value: "12", description: "ressources officielles", icon: FileCheck2 },
  { title: "Alertes ouvertes", value: "2", description: "requièrent attention", icon: AlertCircle },
];

const siteTrafficData = [
  { date: "Lun", views: 18400, visitors: 11200 },
  { date: "Mar", views: 21600, visitors: 13400 },
  { date: "Mer", views: 24800, visitors: 15100 },
  { date: "Jeu", views: 23100, visitors: 14300 },
  { date: "Ven", views: 26700, visitors: 16800 },
  { date: "Sam", views: 19800, visitors: 12100 },
  { date: "Dim", views: 17400, visitors: 10800 },
];

const mainChannels = [
  { name: "Direct", value: "38%", detail: "Trafic marque et accès directs" },
  { name: "Recherche", value: "27%", detail: "Pages produits et articles" },
  { name: "Référents", value: "16%", detail: "Partenaires et mentions" },
  { name: "Social", value: "11%", detail: "Relais institutionnels" },
  { name: "Documentation", value: "8%", detail: "Guides, PGP et plateformes" },
];

const editorialStates = [
  { label: "Brouillons", value: "7", description: "contenus en préparation" },
  { label: "En révision", value: "5", description: "validation éditoriale" },
  { label: "Planifiés", value: "4", description: "publications à venir" },
  { label: "Publiés", value: "42", description: "contenus actifs" },
];

const editorialPipeline = [
  {
    title: "Aether Office : état d’avancement",
    type: "Article produit",
    status: "En révision",
    date: "Aujourd’hui",
    owner: "Équipe Web Platform",
  },
  {
    title: "Refonte Platform",
    type: "Page publique",
    status: "Brouillon",
    date: "Demain",
    owner: "Équipe Platform",
  },
  {
    title: "Trust Center PGP",
    type: "Confiance",
    status: "Publié",
    date: "il y a 2h",
    owner: "Équipe Security",
  },
  {
    title: "Programme partenaires SGE",
    type: "Partenaires",
    status: "Planifié",
    date: "12 mai",
    owner: "Équipe SGE",
  },
  {
    title: "SGE Journal",
    type: "Journal",
    status: "Publié",
    date: "il y a 2h",
    owner: "Équipe Editorial",
  },
];

const publicModules = [
  { name: "Edge", status: "En consolidation", updatedAt: "il y a 1h", href: "/fr/platform/edge" },
  {
    name: "Identity",
    status: "Développement avancé",
    updatedAt: "hier",
    href: "/fr/platform/identity",
  },
  { name: "Vault", status: "Développement actif", updatedAt: "hier", href: "/fr/platform/vault" },
  {
    name: "Status",
    status: "Prêt pour intégration",
    updatedAt: "il y a 2h",
    href: "/fr/platform/status",
  },
  {
    name: "Search",
    status: "Prototype avancé",
    updatedAt: "il y a 3j",
    href: "/fr/platform/search",
  },
  {
    name: "Mailer",
    status: "En développement",
    updatedAt: "il y a 4j",
    href: "/fr/platform/mailer",
  },
];

const recentActivity = [
  {
    team: "Équipe Web",
    action: "a publié",
    target: "SGE Journal",
    time: "il y a 2h",
    icon: FileText,
  },
  {
    team: "Security",
    action: "a mis à jour",
    target: "la page PGP",
    time: "il y a 3h",
    icon: ShieldCheck,
  },
  {
    team: "Platform",
    action: "a modifié",
    target: "la page Edge",
    time: "il y a 5h",
    icon: Layers3,
  },
  {
    team: "System",
    action: "a synchronisé",
    target: "le sitemap",
    time: "il y a 6h",
    icon: Workflow,
  },
  {
    team: "Content",
    action: "a planifié",
    target: "une annonce",
    time: "hier",
    icon: Calendar,
  },
];

const upcomingItems = [
  { title: "Newsletter hebdomadaire", date: "Lundi", owner: "Équipe Editorial" },
  { title: "Publication Platform", date: "Mardi", owner: "Équipe Platform" },
  { title: "Note sécurité", date: "Jeudi", owner: "Équipe Security" },
  { title: "Revue partenaires", date: "Vendredi", owner: "Équipe SGE" },
];

const quickLinks = [
  { label: "Site public", href: "/fr", icon: Globe },
  { label: "Journal", href: "/fr/blog", icon: FileText },
  { label: "Status page", href: "/fr/platform/status", icon: Activity },
  { label: "Documentation", href: "/fr/developers", icon: FileCheck2 },
  { label: "PGP", href: "/fr/pgp", icon: ShieldCheck },
  { label: "Partners", href: "/fr/partners/program", icon: Users },
  { label: "Platform", href: "/fr/platform/edge", icon: Layers3 },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
];

const trafficChartConfig = {
  views: { label: "Pages vues", color: "var(--chart-1)" },
  visitors: { label: "Visiteurs uniques", color: "var(--chart-2)" },
} satisfies ChartConfig;

function StatusDot({ tone }: { tone: string }) {
  const className =
    tone === "operational"
      ? "bg-emerald-500"
      : tone === "attention"
        ? "bg-amber-500"
        : "bg-muted-foreground";

  return <span className={`h-2.5 w-2.5 rounded-full ${className}`} aria-hidden="true" />;
}

function StatusBadge({ status }: { status: string }) {
  if (status === "Publié" || status === "Prêt pour intégration") {
    return <Badge variant="secondary">Stable</Badge>;
  }

  if (status === "En révision" || status === "En consolidation") {
    return <Badge variant="outline">À valider</Badge>;
  }

  if (status === "Planifié" || status === "Prototype avancé") {
    return <Badge variant="outline">Planifié</Badge>;
  }

  return <Badge variant="secondary">{status}</Badge>;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function DashboardPage() {
  const [timeRange, setTimeRange] = React.useState("14d");

  return (
    <div className="bg-background p-6 space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-medium text-foreground">Vue d’ensemble</h1>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Pilotez le site officiel, les contenus, les signaux de confiance et les services
            publics de Sky Genesis Enterprise.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-full sm:w-44">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">7 derniers jours</SelectItem>
              <SelectItem value="14d">14 derniers jours</SelectItem>
              <SelectItem value="30d">30 derniers jours</SelectItem>
              <SelectItem value="90d">3 derniers mois</SelectItem>
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
        {systemHealth.map((item) => (
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
        {keyMetrics.map((metric) => (
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
          <CardHeader className="pb-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">Trafic public</CardTitle>
                <CardDescription>
                  Pages vues et visiteurs uniques sur la période sélectionnée.
                </CardDescription>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Pages vues</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />
                  <span className="text-muted-foreground">Visiteurs</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={trafficChartConfig} className="h-70 w-full">
              <AreaChart data={siteTrafficData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="fillPublicViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-views)" stopOpacity={0.24} />
                    <stop offset="95%" stopColor="var(--color-views)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="fillPublicVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-visitors)" stopOpacity={0.16} />
                    <stop offset="95%" stopColor="var(--color-visitors)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke="var(--color-visitors)"
                  strokeWidth={2}
                  fill="url(#fillPublicVisitors)"
                />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="var(--color-views)"
                  strokeWidth={2}
                  fill="url(#fillPublicViews)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50 bg-card shadow-none xl:col-span-3">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">Canaux principaux</CardTitle>
                <CardDescription>Origine du trafic utile vers les surfaces publiques.</CardDescription>
              </div>
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mainChannels.map((channel) => (
                <div key={channel.name} className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground" />
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium text-foreground">{channel.name}</p>
                      <p className="text-xs text-muted-foreground">{channel.detail}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{channel.value}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-7">
        <Card className="rounded-2xl border-border/50 bg-card shadow-none xl:col-span-4">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">Pipeline éditorial</CardTitle>
                <CardDescription>Contenus publics en cours de production et validation.</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/articles">
                  Voir les contenus
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {editorialStates.map((state) => (
                <div key={state.label} className="rounded-2xl border border-border/50 bg-muted/20 p-4">
                  <p className="text-sm text-muted-foreground">{state.label}</p>
                  <p className="mt-1 text-2xl font-medium text-foreground">{state.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{state.description}</p>
                </div>
              ))}
            </div>
            <div className="divide-y divide-border/50">
              {editorialPipeline.map((item) => (
                <div key={item.title} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-muted text-xs text-muted-foreground">
                      {getInitials(item.owner)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <Badge variant="outline">{item.type}</Badge>
                      <StatusBadge status={item.status} />
                    </div>
                    <p className="truncate text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.owner} · {item.date} · {item.status}
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
                      <DropdownMenuItem>Ouvrir</DropdownMenuItem>
                      <DropdownMenuItem>Planifier</DropdownMenuItem>
                      <DropdownMenuItem>Assigner</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50 bg-card shadow-none xl:col-span-3">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">Modules publics suivis</CardTitle>
                <CardDescription>État éditorial des modules visibles publiquement.</CardDescription>
              </div>
              <Layers3 className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {publicModules.map((module) => (
                <div key={module.name} className="flex items-center justify-between gap-4 px-6 py-3">
                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-foreground">{module.name}</p>
                      <StatusBadge status={module.status} />
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
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="rounded-2xl border-border/50 bg-card shadow-none">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-base font-medium">Activité récente</CardTitle>
                <CardDescription>Dernières actions sur la console SGE.</CardDescription>
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
                <CardTitle className="text-base font-medium">À venir</CardTitle>
                <CardDescription>Calendrier éditorial et opérations publiques.</CardDescription>
              </div>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/50 bg-muted/20 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.owner}</p>
                    </div>
                    <Badge variant="outline">{item.date}</Badge>
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
                <CardDescription>Surfaces publiques et outils de pilotage.</CardDescription>
              </div>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
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
