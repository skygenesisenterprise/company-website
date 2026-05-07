"use client";

import { useState } from "react";
import {
  Eye,
  Users,
  MessageSquare,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Clock,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { StatsCard } from "@/components/admin/stats-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const viewsOverTimeData = [
  { date: "01/03", views: 12500, visitors: 8200 },
  { date: "02/03", views: 14200, visitors: 9100 },
  { date: "03/03", views: 18900, visitors: 12300 },
  { date: "04/03", views: 16100, visitors: 10800 },
  { date: "05/03", views: 21500, visitors: 14200 },
  { date: "06/03", views: 19300, visitors: 12900 },
  { date: "07/03", views: 15600, visitors: 10100 },
  { date: "08/03", views: 18200, visitors: 12100 },
  { date: "09/03", views: 22400, visitors: 14800 },
  { date: "10/03", views: 19800, visitors: 13200 },
  { date: "11/03", views: 25600, visitors: 16800 },
  { date: "12/03", views: 23100, visitors: 15200 },
  { date: "13/03", views: 28400, visitors: 18900 },
  { date: "14/03", views: 26700, visitors: 17600 },
];

const topArticlesData = [
  { title: "Les nouvelles réformes économiques", views: 15420, change: 12 },
  { title: "Victoire historique de l'équipe nationale", views: 28750, change: 28 },
  { title: "Tensions diplomatiques à Genève", views: 12300, change: -5 },
  { title: "Innovation startup énergie", views: 9840, change: 15 },
  { title: "Météo vague de chaleur", views: 12300, change: 8 },
];

const trafficSourceData = [
  { source: "Recherche Google", value: 45, color: "var(--chart-1)" },
  { source: "Réseaux sociaux", value: 25, color: "var(--chart-2)" },
  { source: "Direct", value: 15, color: "var(--chart-3)" },
  { source: "Autres sites", value: 10, color: "var(--chart-4)" },
  { source: "Email", value: 5, color: "var(--chart-5)" },
];

const categoryViewsData = [
  { category: "Politique", views: 45000 },
  { category: "Économie", views: 38000 },
  { category: "Sport", views: 32000 },
  { category: "Culture", views: 28000 },
  { category: "International", views: 24000 },
  { category: "Société", views: 18000 },
];

const deviceData = [
  { device: "Mobile", percentage: 58 },
  { device: "Desktop", percentage: 35 },
  { device: "Tablet", percentage: 7 },
];

const commentsData = [
  { date: "Lun", comments: 45 },
  { date: "Mar", comments: 52 },
  { date: "Mer", comments: 38 },
  { date: "Jeu", comments: 61 },
  { date: "Ven", comments: 55 },
  { date: "Sam", comments: 28 },
  { date: "Dim", comments: 22 },
];

const viewsChartConfig = {
  views: { label: "Vues", color: "oklch(0.5 0.2 25)" },
  visitors: { label: "Visiteurs", color: "oklch(0.7 0.15 250)" },
};

const categoryChartConfig = {
  views: { label: "Vues", color: "oklch(0.5 0.2 25)" },
};

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("14d");

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytiques</h1>
          <p className="text-sm text-muted-foreground">Suivez les performances de votre site</p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-40">
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
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Vues totales"
          value="284.5K"
          change="+18%"
          changeType="positive"
          description="vs période précédente"
          icon={Eye}
        />
        <StatsCard
          title="Visiteurs uniques"
          value="156.2K"
          change="+12%"
          changeType="positive"
          description="vs période précédente"
          icon={Users}
        />
        <StatsCard
          title="Temps moyen"
          value="4m 32s"
          change="+8%"
          changeType="positive"
          description="vs période précédente"
          icon={Clock}
        />
        <StatsCard
          title="Commentaires"
          value="2,847"
          change="-3%"
          changeType="negative"
          description="vs période précédente"
          icon={MessageSquare}
        />
      </div>

      {/* Main Charts Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Views Over Time */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Vues et visiteurs</CardTitle>
                <CardDescription>Évolution sur la période</CardDescription>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Vues</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_250)]" />
                  <span className="text-muted-foreground">Visiteurs</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={viewsChartConfig} className="h-70 w-full">
              <AreaChart
                data={viewsOverTimeData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="fillViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-views)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-views)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-visitors)" stopOpacity={0.3} />
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
                  tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke="var(--color-visitors)"
                  strokeWidth={2}
                  fill="url(#fillVisitors)"
                />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="var(--color-views)"
                  strokeWidth={2}
                  fill="url(#fillViews)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Sources de trafic</CardTitle>
            <CardDescription>Origine des visiteurs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ChartContainer
                config={{ value: { label: "Pourcentage" } }}
                className="h-50 w-full"
              >
                <PieChart>
                  <Pie
                    data={trafficSourceData}
                    dataKey="value"
                    nameKey="source"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                  >
                    {trafficSourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </div>
            <div className="mt-4 space-y-2">
              {trafficSourceData.map((item) => (
                <div key={item.source} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-muted-foreground">{item.source}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Top Articles */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Articles les plus consultés</CardTitle>
            <CardDescription>Performance par article</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topArticlesData.map((article, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="text-lg font-bold text-muted-foreground w-6">{index + 1}</span>
                    <div className="min-w-0">
                      <p className="font-medium truncate">{article.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {article.views.toLocaleString()} vues
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-1 ${article.change >= 0 ? "text-green-500" : "text-red-500"}`}
                  >
                    {article.change >= 0 ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                    <span className="text-sm font-medium">{Math.abs(article.change)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Device Stats */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Appareils</CardTitle>
            <CardDescription>Répartition par device</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deviceData.map((item) => (
                <div key={item.device} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.device}</span>
                    <span className="font-medium">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Third Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Category Performance */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Vues par catégorie</CardTitle>
            <CardDescription>Performance des catégories</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={categoryChartConfig} className="h-62.5 w-full">
              <BarChart
                data={categoryViewsData}
                layout="vertical"
                margin={{ top: 10, right: 10, left: 80, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
                <XAxis
                  type="number"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                  tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                />
                <YAxis
                  type="category"
                  dataKey="category"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="views" fill="var(--color-views)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Comments Trend */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Commentaires</CardTitle>
            <CardDescription>Évolution des commentaires</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{ comments: { label: "Commentaires", color: "oklch(0.5 0.2 25)" } }}
              className="h-62.5 w-full"
            >
              <LineChart data={commentsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="comments"
                  stroke="var(--color-comments)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
