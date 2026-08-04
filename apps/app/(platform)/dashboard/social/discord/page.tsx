"use client";

/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/social/discord
 * Layer: Dashboard Page
 * Purpose: Provides a clean channel overview for an official SGE social account.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */

import * as React from "react";
import { BarChart3, CalendarClock, CheckCircle2, ExternalLink, Eye, MoreHorizontal, Pencil, Plus, RefreshCw, Search, ShieldCheck, Sparkles } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ActivityStatus = "Publié" | "Planifié" | "Brouillon" | "À relire" | "Échec";

interface Metric {
  label: string;
  value: string;
  detail: string;
}

interface CommunityActivity {
  content: string;
  status: ActivityStatus;
  date: string;
  reach: string;
  engagement: string;
}

const metrics: Metric[] = [
  { label: "Membres", value: "8,4K", detail: "+620 sur 30 jours" },
  { label: "Actifs", value: "1,9K", detail: "Membres actifs hebdomadaires" },
  { label: "Messages", value: "18,2K", detail: "Discussions et support" },
  { label: "Événements", value: "5", detail: "2 planifiés" },
];

const healthItems = [
  { label: "Connecté", value: "Oui", icon: CheckCircle2 },
  { label: "Dernière synchronisation", value: "il y a 7 min", icon: RefreshCw },
  { label: "Permissions", value: "Valides", icon: ShieldCheck },
  { label: "Publications planifiées", value: "2", icon: CalendarClock },
];

const chartData = [
  { label: "J-6", value: 980 },
  { label: "J-5", value: 1120 },
  { label: "J-4", value: 1080 },
  { label: "J-3", value: 1260 },
  { label: "J-2", value: 1420 },
  { label: "Hier", value: 1510 },
  { label: "Aujourd'hui", value: 1640 },
];

const activities: CommunityActivity[] = [
  { content: "Présentation de SGE Platform #SkyGenesisEnterprise", status: "Publié", date: "08 mai 2026, 13:00", reach: "1,8K", engagement: "342 messages" },
  { content: "Mise à jour Trust Center PGP #CyberSecurity", status: "Planifié", date: "09 mai 2026, 16:00", reach: "Prévu", engagement: "Prévu" },
  { content: "Aether Office : état d’avancement #DeveloperPlatform", status: "À relire", date: "11 mai 2026, 18:00", reach: "Prévu", engagement: "Prévu" },
  { content: "Open-source : ouverture progressive #OpenSource", status: "Brouillon", date: "14 mai 2026, 19:30", reach: "Prévu", engagement: "Prévu" },
];

const recommendations = [
  "Mettre en avant les salons actifs.",
  "Planifier des Q&A techniques.",
  "Clarifier les règles communautaires.",
];

const communitySignals = [
  { label: "Croissance audience", value: "+620", detail: "Les nouveaux membres arrivent après les annonces Platform." },
  { label: "Heures performantes", value: "18:00 - 21:00", detail: "Fenêtre la plus active pour les échanges techniques." },
  { label: "Formats qui performent", value: "Q&A courts", detail: "Les sessions orientées support déclenchent le plus de réponses." },
  { label: "Signaux faibles", value: "Questions PGP", detail: "Le canal sécurité nécessite une FAQ épinglée." },
];

export default function DiscordPage() {
  const [period, setPeriod] = React.useState("30d");
  const [searchQuery, setSearchQuery] = React.useState("");
  const filteredActivities = activities.filter((activity) => activity.content.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="space-y-6 p-6">
      <Card className="rounded-2xl border-border/50 bg-card">
        <CardHeader className="gap-4 lg:flex lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-border/50 bg-muted/30"><BarChart3 className="size-5 text-muted-foreground" /></div>
              <div><CardTitle className="text-2xl">Discord</CardTitle><CardDescription>Sky Genesis Enterprise Community</CardDescription></div>
              <Badge variant="secondary" className="rounded-full">Connecté</Badge>
            </div>
            <p className="max-w-2xl text-sm text-muted-foreground">Communauté, échanges techniques et support communautaire. Dernière synchronisation : il y a 7 min.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Select value={period} onValueChange={setPeriod}><SelectTrigger className="w-36 rounded-2xl"><SelectValue placeholder="Période" /></SelectTrigger><SelectContent><SelectItem value="7d">7 jours</SelectItem><SelectItem value="30d">30 jours</SelectItem><SelectItem value="90d">90 jours</SelectItem></SelectContent></Select>
            <Button variant="outline" className="rounded-2xl"><RefreshCw className="size-4" />Actualiser</Button>
            <Button variant="outline" className="rounded-2xl"><ExternalLink className="size-4" />Ouvrir la plateforme</Button>
            <Button className="rounded-2xl"><Plus className="size-4" />Nouvelle publication</Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{healthItems.map((item) => <Card key={item.label} className="rounded-2xl border-border/50 bg-card"><CardContent className="flex items-center gap-3 pt-6"><item.icon className="size-5 text-muted-foreground" /><div><p className="text-sm text-muted-foreground">{item.label}</p><p className="font-medium">{item.value}</p></div></CardContent></Card>)}</div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{metrics.map((metric) => <Card key={metric.label} className="rounded-2xl border-border/50 bg-card"><CardHeader><CardDescription>{metric.label}</CardDescription><CardTitle className="text-2xl">{metric.value}</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">{metric.detail}</p></CardContent></Card>)}</div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full max-w-xl grid-cols-3 rounded-2xl"><TabsTrigger value="overview" className="rounded-2xl">Aperçu</TabsTrigger><TabsTrigger value="activity" className="rounded-2xl">Activité</TabsTrigger><TabsTrigger value="community" className="rounded-2xl">Communauté</TabsTrigger></TabsList>
        <TabsContent value="overview" className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
          <Card className="rounded-2xl border-border/50 bg-card"><CardHeader><CardTitle>Activité récente</CardTitle><CardDescription>Messages actifs par jour sur la période sélectionnée.</CardDescription></CardHeader><CardContent className="h-72"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData}><CartesianGrid strokeDasharray="3 3" className="stroke-muted" /><XAxis dataKey="label" className="text-xs" /><YAxis className="text-xs" /><Tooltip /><Area dataKey="value" stroke="hsl(var(--foreground))" fill="hsl(var(--muted))" /></AreaChart></ResponsiveContainer></CardContent></Card>
          <div className="space-y-4">
            <Card className="rounded-2xl border-border/50 bg-card"><CardHeader><CardTitle>Meilleurs contenus récents</CardTitle><CardDescription>Les annonces qui activent le mieux la communauté.</CardDescription></CardHeader><CardContent className="space-y-3">{activities.slice(0, 3).map((activity) => <div key={activity.content} className="rounded-2xl border border-border/50 p-3"><p className="text-sm font-medium">{activity.content}</p><p className="mt-1 text-xs text-muted-foreground">{activity.reach} membres touchés · {activity.engagement}</p></div>)}</CardContent></Card>
            <Card className="rounded-2xl border-border/50 bg-card"><CardHeader><CardTitle>Recommandations</CardTitle></CardHeader><CardContent className="space-y-3">{recommendations.map((recommendation) => <div key={recommendation} className="flex gap-3 text-sm"><Sparkles className="mt-0.5 size-4 shrink-0 text-muted-foreground" /><span>{recommendation}</span></div>)}</CardContent></Card>
          </div>
        </TabsContent>
        <TabsContent value="activity">
          <Card className="rounded-2xl border-border/50 bg-card"><CardHeader className="gap-4 md:flex md:flex-row md:items-center md:justify-between"><div><CardTitle>Activités récentes et planifiées</CardTitle><CardDescription>Annonces, Q&A et événements communautaires.</CardDescription></div><div className="relative w-full md:w-80"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Rechercher une activité" className="rounded-2xl pl-9" /></div></CardHeader><CardContent><Table><TableHeader><TableRow><TableHead>Contenu</TableHead><TableHead>Statut</TableHead><TableHead>Date</TableHead><TableHead>Portée</TableHead><TableHead>Engagement</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader><TableBody>{filteredActivities.map((activity) => <TableRow key={activity.content}><TableCell className="max-w-md font-medium">{activity.content}</TableCell><TableCell><Badge variant="outline" className="rounded-full">{activity.status}</Badge></TableCell><TableCell className="text-muted-foreground">{activity.date}</TableCell><TableCell>{activity.reach}</TableCell><TableCell>{activity.engagement}</TableCell><TableCell className="text-right"><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="rounded-2xl"><MoreHorizontal className="size-4" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem><Eye className="size-4" />Voir</DropdownMenuItem><DropdownMenuItem><Pencil className="size-4" />Modifier</DropdownMenuItem></DropdownMenuContent></DropdownMenu></TableCell></TableRow>)}</TableBody></Table></CardContent></Card>
        </TabsContent>
        <TabsContent value="community"><div className="grid gap-4 md:grid-cols-2">{communitySignals.map((signal) => <Card key={signal.label} className="rounded-2xl border-border/50 bg-card"><CardHeader><CardDescription>{signal.label}</CardDescription><CardTitle>{signal.value}</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">{signal.detail}</p></CardContent></Card>)}</div></TabsContent>
      </Tabs>
    </div>
  );
}
