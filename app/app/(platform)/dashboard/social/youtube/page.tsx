"use client";

import { useState } from "react";
import {
  Users,
  Heart,
  MessageCircle,
  Eye,
  Clock,
  ArrowUpRight,
  Calendar,
  RefreshCw,
  Search,
  MoreHorizontal,
  Pencil,
  Trash2,
  ExternalLink,
  Play,
  ThumbsUp,
  MonitorPlay,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Line,
} from "recharts";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Video {
  id: string;
  title: string;
  date: string;
  views: number;
  likes: number;
  dislikes: number;
  comments: number;
  watchTime: number;
  ctr: number;
  status: "published" | "scheduled" | "draft" | "private";
  thumbnail?: string;
}

interface SubscriberData {
  date: string;
  subscribers: number;
}

const mockVideos: Video[] = [
  {
    id: "1",
    title: "Interview exclusive: Le PDG révèle les projets ambitieux pour 2026",
    date: "2026-03-27T10:00:00Z",
    views: 125000,
    likes: 8900,
    dislikes: 120,
    comments: 456,
    watchTime: 8.5,
    ctr: 12.3,
    status: "published",
  },
  {
    id: "2",
    title: "Top 10 des tendances technologiques à suivre en 2026",
    date: "2026-03-26T14:00:00Z",
    views: 89000,
    likes: 5600,
    dislikes: 89,
    comments: 234,
    watchTime: 12.3,
    ctr: 10.5,
    status: "published",
  },
  {
    id: "3",
    title: "Analyse: Ce qui Change avec l'IA en 2026",
    date: "2026-03-25T09:00:00Z",
    views: 67000,
    likes: 4200,
    dislikes: 67,
    comments: 189,
    watchTime: 15.2,
    ctr: 9.8,
    status: "published",
  },
  {
    id: "4",
    title: "Résumé de l'actualité de la semaine - Édition 12",
    date: "2026-03-24T16:00:00Z",
    views: 45000,
    likes: 2800,
    dislikes: 45,
    comments: 123,
    watchTime: 10.1,
    ctr: 8.2,
    status: "published",
  },
  {
    id: "5",
    title: "Élections 2026: Analyse complète et résultats",
    date: "2026-03-23T18:00:00Z",
    views: 234000,
    likes: 15600,
    dislikes: 340,
    comments: 890,
    watchTime: 22.5,
    ctr: 15.8,
    status: "published",
  },
  {
    id: "6",
    title: "Webinaire: Comment réussir sa stratégie digitale en 2026",
    date: "2026-03-28T14:00:00Z",
    views: 0,
    likes: 0,
    dislikes: 0,
    comments: 0,
    watchTime: 0,
    ctr: 0,
    status: "scheduled",
  },
];

const mockSubscriberData: SubscriberData[] = [
  { date: "2026-03-21", subscribers: 42500 },
  { date: "2026-03-22", subscribers: 43200 },
  { date: "2026-03-23", subscribers: 44100 },
  { date: "2026-03-24", subscribers: 44800 },
  { date: "2026-03-25", subscribers: 45500 },
  { date: "2026-03-26", subscribers: 46200 },
  { date: "2026-03-27", subscribers: 46800 },
];

const weeklyViews = [
  { day: "Lun", views: 45000, watchTime: 180 },
  { day: "Mar", views: 52000, watchTime: 210 },
  { day: "Mer", views: 48000, watchTime: 195 },
  { day: "Jeu", views: 61000, watchTime: 240 },
  { day: "Ven", views: 55000, watchTime: 225 },
  { day: "Sam", views: 72000, watchTime: 290 },
  { day: "Dim", views: 68000, watchTime: 275 },
];

const topCountries = [
  { country: "France", views: 125000, percentage: 45 },
  { country: "Belgique", views: 28000, percentage: 10 },
  { country: "Suisse", views: 22000, percentage: 8 },
  { country: "Canada", views: 18000, percentage: 6 },
  { country: "Autres", views: 85000, percentage: 31 },
];

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};

const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = [
    "jan",
    "fév",
    "mar",
    "avr",
    "mai",
    "juin",
    "juil",
    "aoû",
    "sep",
    "oct",
    "nov",
    "déc",
  ][date.getUTCMonth()];
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${day} ${month}, ${hours}:${minutes}`;
};

const statusConfig = {
  published: { label: "Publié", color: "bg-green-500" },
  scheduled: { label: "Planifié", color: "bg-blue-500" },
  draft: { label: "Brouillon", color: "bg-gray-500" },
  private: { label: "Privé", color: "bg-red-500" },
};

export default function YouTubePage() {
  const [timeRange, setTimeRange] = useState("7d");
  const [searchQuery, setSearchQuery] = useState("");

  const stats = {
    subscribers: 46800,
    subscribersGrowth: 10.2,
    totalViews: 890000,
    totalViewsGrowth: 15.3,
    watchTime: 12500,
    watchTimeGrowth: 8.7,
    avgCtr: 8.5,
    avgCtrGrowth: 1.2,
  };

  const filteredVideos = mockVideos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">YouTube</h1>
            <p className="text-sm text-muted-foreground">
              Etheria Times • {formatNumber(stats.subscribers)} abonnés
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Dernières 24h</SelectItem>
              <SelectItem value="7d">7 derniers jours</SelectItem>
              <SelectItem value="30d">30 derniers jours</SelectItem>
              <SelectItem value="90d">90 derniers jours</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualiser
          </Button>
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            Ouvrir YouTube
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Abonnés</span>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.subscribers)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.subscribersGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Vues totales</span>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.totalViews)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.totalViewsGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Temps de visionnage (h)</span>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.watchTime)}h</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.watchTimeGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>CTR moyen</span>
              <MonitorPlay className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.avgCtr}%</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.avgCtrGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Aperçu</TabsTrigger>
          <TabsTrigger value="videos">Vidéos</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Évolution des abonnés</CardTitle>
                <CardDescription>Nombre d'abonnés sur les 7 derniers jours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-62.5 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={mockSubscriberData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorSubscribersYt" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FF0000" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#FF0000" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) => {
                          const date = new Date(value);
                          return date.toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "short",
                          });
                        }}
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => formatNumber(value)}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                        formatter={(value) => [formatNumber(value as number), "Abonnés"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="subscribers"
                        stroke="#FF0000"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorSubscribersYt)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Vues et temps de visionnage</CardTitle>
                <CardDescription>Performance quotidienne</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-62.5 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={weeklyViews}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="day"
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        yAxisId="left"
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => formatNumber(value)}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}h`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                        formatter={(value) => formatNumber(value as number)}
                      />
                      <Legend />
                      <Bar
                        yAxisId="left"
                        dataKey="views"
                        name="Vues"
                        fill="#FF0000"
                        radius={[4, 4, 0, 0]}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="watchTime"
                        name="Temps (h)"
                        stroke="#2563EB"
                        strokeWidth={2}
                        dot={false}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Top pays</CardTitle>
                <CardDescription>Origine des spectateurs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topCountries.map((country) => (
                  <div key={country.country} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{country.country}</span>
                      <span className="font-medium">{formatNumber(country.views)}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: `${country.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">Vidéos récentes</CardTitle>
                <CardDescription>Vos dernières vidéos publiées</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockVideos
                    .filter((v) => v.status === "published")
                    .slice(0, 3)
                    .map((video) => (
                      <div key={video.id} className="flex gap-4 p-4 rounded-lg border">
                        <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center">
                          <Play className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className={statusConfig[video.status].color}>
                              {statusConfig[video.status].label}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {formatDateTime(video.date)}
                            </span>
                          </div>
                          <p className="font-medium mb-2 line-clamp-2">{video.title}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {formatNumber(video.views)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {formatNumber(video.likes)}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3" />
                              {formatNumber(video.comments)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {video.watchTime}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Toutes les vidéos</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher une vidéo..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vidéo</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Vues</TableHead>
                    <TableHead>Likes</TableHead>
                    <TableHead>Watch Time</TableHead>
                    <TableHead>CTR</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVideos.map((video) => (
                    <TableRow key={video.id}>
                      <TableCell>
                        <p className="max-w-md truncate text-sm font-medium">{video.title}</p>
                      </TableCell>
                      <TableCell>
                        <Badge className={statusConfig[video.status].color}>
                          {statusConfig[video.status].label}
                        </Badge>
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-muted-foreground">
                        {formatDateTime(video.date)}
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3 text-red-500" />
                          {formatNumber(video.views)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3 text-green-500" />
                          {formatNumber(video.likes)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-blue-500" />
                          {video.watchTime}%
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{video.ctr}%</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Voir sur YouTube
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <ThumbsUp className="mr-2 h-4 w-4" />
                              Statistiques
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Pencil className="mr-2 h-4 w-4" />
                              Modifier
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Croissance des abonnés</CardTitle>
                <CardDescription>Évolution du nombre d'abonnés</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-75 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={mockSubscriberData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorAudienceYt" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FF0000" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#FF0000" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) => {
                          const date = new Date(value);
                          return date.toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "short",
                          });
                        }}
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => formatNumber(value)}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                        formatter={(value) => [formatNumber(value as number), "Abonnés"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="subscribers"
                        stroke="#FF0000"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorAudienceYt)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold">{formatNumber(stats.subscribers)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Croissance</p>
                    <p className="text-2xl font-bold text-green-600">+{stats.subscribersGrowth}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Nouveau(x)</p>
                    <p className="text-2xl font-bold">
                      +
                      {mockSubscriberData[mockSubscriberData.length - 1].subscribers -
                        mockSubscriberData[0].subscribers}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Statistiques clés</CardTitle>
                <CardDescription>Informations sur votre audience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Abonnés</span>
                  <span className="font-medium">{formatNumber(stats.subscribers)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Vues totales</span>
                  <span className="font-medium">{formatNumber(stats.totalViews)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Temps de visionnage</span>
                  <span className="font-medium">{formatNumber(stats.watchTime)}h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Vues/abonné</span>
                  <span className="font-medium">
                    {Math.round(stats.totalViews / stats.subscribers)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">CTR moyen</span>
                  <span className="font-medium text-green-600">{stats.avgCtr}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Vidéos publiées</span>
                  <span className="font-medium">
                    {mockVideos.filter((v) => v.status === "published").length}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
