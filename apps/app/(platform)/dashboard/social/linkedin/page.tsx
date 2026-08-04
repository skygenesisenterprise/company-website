"use client";

/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/social/linkedin
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

type PublicationStatus = "Publié" | "Planifié" | "Brouillon" | "À relire" | "Échec";

interface Metric {
  label: string;
  value: string;
  detail: string;
}

interface Publication {
  content: string;
  status: PublicationStatus;
  date: string;
  reach: string;
  engagement: string;
}

const metrics: Metric[] = [
  { label: "Abonnés", value: "18,4K", detail: "+2,9% sur 30 jours" },
  { label: "Impressions", value: "132K", detail: "Posts corporate et hiring" },
  { label: "Interactions", value: "6,1K", detail: "Commentaires qualifiés" },
  { label: "Posts", value: "16", detail: "3 planifiés" },
];

const healthItems = [
  { label: "Connecté", value: "Oui", icon: CheckCircle2 },
  { label: "Dernière synchronisation", value: "il y a 15 min", icon: RefreshCw },
  { label: "Permissions", value: "Valides", icon: ShieldCheck },
  { label: "Publications planifiées", value: "3", icon: CalendarClock },
];

const chartData = [
  { label: "J-6", value: 8600 },
  { label: "J-5", value: 9300 },
  { label: "J-4", value: 9800 },
  { label: "J-3", value: 11200 },
  { label: "J-2", value: 10800 },
  { label: "Hier", value: 12400 },
  { label: "Aujourd'hui", value: 13200 },
];

const publications: Publication[] = [
  { content: "Infrastructure européenne : notre approche #DigitalSovereignty #EuropeanTech", status: "Publié", date: "08 mai 2026, 10:20", reach: "24,8K", engagement: "5,6%" },
  { content: "Programme partenaires SGE #SkyGenesisEnterprise #SovereignCloud", status: "Planifié", date: "09 mai 2026, 09:00", reach: "Prévu", engagement: "Prévu" },
  { content: "SkyDB : consolidation de la couche data #DeveloperPlatform #OpenSource", status: "À relire", date: "12 mai 2026, 11:30", reach: "Prévu", engagement: "Prévu" },
  { content: "Mise à jour Trust Center PGP #CyberSecurity", status: "Brouillon", date: "14 mai 2026, 08:45", reach: "Prévu", engagement: "Prévu" },
];

const recommendations = [
  "Prioriser les annonces corporate et partenariats.",
  "Publier des notes longues sur souveraineté numérique.",
  "Relayer les offres de stages et recrutements.",
];

const audienceSignals = [
  { label: "Croissance audience", value: "+530", detail: "Les décideurs tech réagissent mieux aux sujets infrastructure." },
  { label: "Heures performantes", value: "08:30 - 10:30", detail: "Les annonces corporate performent en début de journée." },
  { label: "Formats qui performent", value: "Notes longues", detail: "Les posts structurés génèrent plus de commentaires qualifiés." },
  { label: "Signaux faibles", value: "Plus de clics carrière", detail: "Les contenus recrutement méritent un calendrier dédié." },
];

export default function LinkedInPage() {
  const [period, setPeriod] = React.useState("30d");
  const [searchQuery, setSearchQuery] = React.useState("");
  const filteredPublications = publications.filter((publication) => publication.content.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="space-y-6 p-6">
      <Card className="rounded-2xl border-border/50 bg-card">
        <CardHeader className="gap-4 lg:flex lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-border/50 bg-muted/30"><BarChart3 className="size-5 text-muted-foreground" /></div>
              <div><CardTitle className="text-2xl">LinkedIn</CardTitle><CardDescription>Sky Genesis Enterprise</CardDescription></div>
              <Badge variant="secondary" className="rounded-full">Connecté</Badge>
            </div>
            <p className="max-w-2xl text-sm text-muted-foreground">Communications corporate, recrutement, partenariats et annonces. Dernière synchronisation : il y a 15 min.</p>
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
        <TabsList className="grid w-full max-w-xl grid-cols-3 rounded-2xl"><TabsTrigger value="overview" className="rounded-2xl">Aperçu</TabsTrigger><TabsTrigger value="publications" className="rounded-2xl">Publications</TabsTrigger><TabsTrigger value="audience" className="rounded-2xl">Audience</TabsTrigger></TabsList>
        <TabsContent value="overview" className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
          <Card className="rounded-2xl border-border/50 bg-card"><CardHeader><CardTitle>Impressions récentes</CardTitle><CardDescription>Évolution des impressions organiques sur la période sélectionnée.</CardDescription></CardHeader><CardContent className="h-72"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData}><CartesianGrid strokeDasharray="3 3" className="stroke-muted" /><XAxis dataKey="label" className="text-xs" /><YAxis className="text-xs" /><Tooltip /><Area dataKey="value" stroke="hsl(var(--foreground))" fill="hsl(var(--muted))" /></AreaChart></ResponsiveContainer></CardContent></Card>
          <div className="space-y-4">
            <Card className="rounded-2xl border-border/50 bg-card"><CardHeader><CardTitle>Meilleurs contenus récents</CardTitle><CardDescription>Les posts les plus efficaces pour la ligne corporate SGE.</CardDescription></CardHeader><CardContent className="space-y-3">{publications.slice(0, 3).map((publication) => <div key={publication.content} className="rounded-2xl border border-border/50 p-3"><p className="text-sm font-medium">{publication.content}</p><p className="mt-1 text-xs text-muted-foreground">{publication.reach} de portée · {publication.engagement} engagement</p></div>)}</CardContent></Card>
            <Card className="rounded-2xl border-border/50 bg-card"><CardHeader><CardTitle>Recommandations</CardTitle></CardHeader><CardContent className="space-y-3">{recommendations.map((recommendation) => <div key={recommendation} className="flex gap-3 text-sm"><Sparkles className="mt-0.5 size-4 shrink-0 text-muted-foreground" /><span>{recommendation}</span></div>)}</CardContent></Card>
          </div>
        </TabsContent>
        <TabsContent value="publications">
          <Card className="rounded-2xl border-border/50 bg-card"><CardHeader className="gap-4 md:flex md:flex-row md:items-center md:justify-between"><div><CardTitle>Publications récentes et planifiées</CardTitle><CardDescription>Posts corporate, partenariats et recrutement.</CardDescription></div><div className="relative w-full md:w-80"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Rechercher une publication" className="rounded-2xl pl-9" /></div></CardHeader><CardContent><Table><TableHeader><TableRow><TableHead>Contenu</TableHead><TableHead>Statut</TableHead><TableHead>Date</TableHead><TableHead>Portée</TableHead><TableHead>Engagement</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader><TableBody>{filteredPublications.map((publication) => <TableRow key={publication.content}><TableCell className="max-w-md font-medium">{publication.content}</TableCell><TableCell><Badge variant="outline" className="rounded-full">{publication.status}</Badge></TableCell><TableCell className="text-muted-foreground">{publication.date}</TableCell><TableCell>{publication.reach}</TableCell><TableCell>{publication.engagement}</TableCell><TableCell className="text-right"><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="rounded-2xl"><MoreHorizontal className="size-4" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem><Eye className="size-4" />Voir</DropdownMenuItem><DropdownMenuItem><Pencil className="size-4" />Modifier</DropdownMenuItem></DropdownMenuContent></DropdownMenu></TableCell></TableRow>)}</TableBody></Table></CardContent></Card>
        </TabsContent>
        <TabsContent value="audience"><div className="grid gap-4 md:grid-cols-2">{audienceSignals.map((signal) => <Card key={signal.label} className="rounded-2xl border-border/50 bg-card"><CardHeader><CardDescription>{signal.label}</CardDescription><CardTitle>{signal.value}</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">{signal.detail}</p></CardContent></Card>)}</div></TabsContent>
      </Tabs>
    </div>
  );
}
