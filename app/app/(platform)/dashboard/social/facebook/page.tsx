"use client";

import { useState } from "react";
import {
  Share2,
  TrendingUp,
  TrendingDown,
  Users,
  Heart,
  MessageCircle,
  ThumbsUp,
  Share2 as ShareIcon,
  BarChart3,
  Eye,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  RefreshCw,
  Download,
  Search,
  MoreHorizontal,
  Pencil,
  Trash2,
  ExternalLink,
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

interface Post {
  id: string;
  content: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
  reach: number;
  engagement: number;
  type: "video" | "image" | "text" | "link";
}

interface FollowerData {
  date: string;
  followers: number;
}

const mockPosts: Post[] = [
  {
    id: "1",
    content:
      "Breaking: Nouvelle découverte scientifique majeure qui révolutionne notre compréhension de l'univers. Les chercheurs présentent leurs conclusions aujourd'hui.",
    date: "2026-03-27T11:30:00Z",
    likes: 1890,
    comments: 234,
    shares: 567,
    reach: 89000,
    engagement: 4.2,
    type: "link",
  },
  {
    id: "2",
    content:
      "Les technologies de 2026 révolutionnent notre quotidien. Découvrez notre analyse complète sur les tendances qui moldent l'avenir.",
    date: "2026-03-27T10:00:00Z",
    likes: 1234,
    comments: 156,
    shares: 456,
    reach: 67000,
    engagement: 3.8,
    type: "image",
  },
  {
    id: "3",
    content:
      "Élections 2026: tous les résultats et analyses en direct. Suivez notre couverture spéciale.",
    date: "2026-03-26T18:00:00Z",
    likes: 3420,
    comments: 567,
    shares: 1234,
    reach: 156000,
    engagement: 4.8,
    type: "video",
  },
  {
    id: "4",
    content:
      "Cryptomonnaies: le Bitcoin atteint un nouveau record historique à 150 000$. Analyse complète à venir.",
    date: "2026-03-26T15:00:00Z",
    likes: 567,
    comments: 89,
    shares: 234,
    reach: 45000,
    engagement: 3.2,
    type: "text",
  },
  {
    id: "5",
    content: "Le mot du jour: Innovation. C'est le moteur du progrès!",
    date: "2026-03-26T08:00:00Z",
    likes: 890,
    comments: 45,
    shares: 123,
    reach: 34000,
    engagement: 3.5,
    type: "image",
  },
  {
    id: "6",
    content:
      "Interview exclusive à venir: Le PDG d'Etheria Times révèle les projets pour 2026. Stay tuned!",
    date: "2026-03-25T14:00:00Z",
    likes: 1567,
    comments: 234,
    shares: 567,
    reach: 78000,
    engagement: 4.1,
    type: "video",
  },
];

const mockFollowerData: FollowerData[] = [
  { date: "2026-03-21", followers: 121800 },
  { date: "2026-03-22", followers: 122400 },
  { date: "2026-03-23", followers: 123100 },
  { date: "2026-03-24", followers: 123800 },
  { date: "2026-03-25", followers: 124200 },
  { date: "2026-03-26", followers: 124800 },
  { date: "2026-03-27", followers: 125400 },
];

const weeklyImpressions = [
  { day: "Lun", impressions: 32000, reach: 21000 },
  { day: "Mar", impressions: 38000, reach: 25000 },
  { day: "Mer", impressions: 35000, reach: 23000 },
  { day: "Jeu", impressions: 42000, reach: 28000 },
  { day: "Ven", impressions: 48000, reach: 32000 },
  { day: "Sam", impressions: 55000, reach: 38000 },
  { day: "Dim", impressions: 51000, reach: 35000 },
];

const engagementData = [
  { type: "Likes", count: 45230 },
  { type: "Commentaires", count: 8920 },
  { type: "Partages", count: 12450 },
  { type: "Réactions", count: 67890 },
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

const maxImpressions = Math.max(...weeklyImpressions.map((d) => d.impressions));

const typeConfig = {
  video: { label: "Vidéo", color: "bg-red-500" },
  image: { label: "Image", color: "bg-green-500" },
  text: { label: "Statut", color: "bg-blue-500" },
  link: { label: "Lien", color: "bg-purple-500" },
};

export default function FacebookPage() {
  const [timeRange, setTimeRange] = useState("7d");
  const [searchQuery, setSearchQuery] = useState("");

  const stats = {
    followers: 125400,
    followersGrowth: 2.1,
    pageViews: 89000,
    pageViewsGrowth: 5.3,
    engagement: 2.3,
    engagementGrowth: -0.2,
    likes: 45230,
    likesGrowth: 3.2,
  };

  const filteredPosts = mockPosts.filter((post) =>
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Facebook</h1>
            <p className="text-sm text-muted-foreground">
              Etheria Times • {formatNumber(stats.followers)} mentions J&quot;aime
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
            Ouvrir Facebook
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Mentions J&quot;aime</span>
              <ThumbsUp className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.followers)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              {stats.followersGrowth > 0 ? (
                <ArrowUpRight className="h-3 w-3" />
              ) : (
                <ArrowDownRight className="h-3 w-3" />
              )}
              <span>
                {stats.followersGrowth > 0 ? "+" : ""}
                {stats.followersGrowth}%
              </span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Vues de page</span>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.pageViews)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.pageViewsGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Portée</span>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(89000)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+8.5%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Engagement</span>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.engagement}%</div>
            <div className="flex items-center gap-1 text-xs text-red-600 mt-1">
              <ArrowDownRight className="h-3 w-3" />
              <span>{stats.engagementGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Aperçu</TabsTrigger>
          <TabsTrigger value="posts">Publications</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Évolution des mentions J&quot;aime</CardTitle>
                <CardDescription>
                  Nombre de mentions J&quot;aime sur les 7 derniers jours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={mockFollowerData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorFollowersFb" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1877F2" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#1877F2" stopOpacity={0} />
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
                        formatter={(value) => [formatNumber(value as number), "Mentions J'aime"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="followers"
                        stroke="#1877F2"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorFollowersFb)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Portée et impressions</CardTitle>
                <CardDescription>Nombre de personnes rejointes par jour</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={weeklyImpressions}
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
                        formatter={(value) => formatNumber(value as number)}
                      />
                      <Legend />
                      <Bar
                        dataKey="impressions"
                        name="Impressions"
                        fill="#1877F2"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar dataKey="reach" name="Portée" fill="#42B72A" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Types d'engagement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {engagementData.map((item) => (
                  <div key={item.type} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{item.type}</span>
                    <span className="font-medium">{formatNumber(item.count)}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">Publications récentes performantes</CardTitle>
                <CardDescription>Vos publications avec le plus d'engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="p-4 rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={typeConfig[post.type].color}>
                          {typeConfig[post.type].label}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatDateTime(post.date)}
                        </span>
                      </div>
                      <p className="text-sm mb-3">{post.content}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3 text-blue-500" />
                          {formatNumber(post.likes)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3 text-blue-500" />
                          {formatNumber(post.comments)}
                        </span>
                        <span className="flex items-center gap-1">
                          <ShareIcon className="h-3 w-3 text-green-500" />
                          {formatNumber(post.shares)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3 text-purple-500" />
                          {formatNumber(post.reach)}
                        </span>
                        <Badge variant="secondary" className="ml-auto">
                          {post.engagement}% engagement
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="posts" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Toutes les publications</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher une publication..."
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
                    <TableHead>Publication</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Portée</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>
                        <p className="max-w-md truncate text-sm">{post.content}</p>
                      </TableCell>
                      <TableCell>
                        <Badge className={typeConfig[post.type].color}>
                          {typeConfig[post.type].label}
                        </Badge>
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-muted-foreground">
                        {formatDateTime(post.date)}
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3 text-purple-500" />
                          {formatNumber(post.reach)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{post.engagement}%</Badge>
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
                              Voir sur Facebook
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <BarChart3 className="mr-2 h-4 w-4" />
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
                <CardTitle className="text-base">Croissance de l'audience</CardTitle>
                <CardDescription>Évolution du nombre de followers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={mockFollowerData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorAudience" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1877F2" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#1877F2" stopOpacity={0} />
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
                        formatter={(value) => [formatNumber(value as number), "Followers"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="followers"
                        stroke="#1877F2"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorAudience)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold">{formatNumber(stats.followers)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Croissance</p>
                    <p className="text-2xl font-bold text-green-600">+{stats.followersGrowth}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Nouveau(x)</p>
                    <p className="text-2xl font-bold">
                      +
                      {mockFollowerData[mockFollowerData.length - 1].followers -
                        mockFollowerData[0].followers}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Démographie</CardTitle>
                <CardDescription>Informations sur votre audience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Femmes</span>
                    <span className="font-medium">52%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-pink-500 rounded-full" style={{ width: "52%" }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Hommes</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "45%" }} />
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <p className="text-sm font-medium">Tranches d'âge</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">18-24</span>
                      <span className="font-medium">15%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">25-34</span>
                      <span className="font-medium">38%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">35-44</span>
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">45-54</span>
                      <span className="font-medium">12%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">55+</span>
                      <span className="font-medium">7%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
