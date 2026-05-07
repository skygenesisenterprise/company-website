"use client";

import { useState } from "react";
import {
  Share2,
  Users,
  MessageCircle,
  Send,
  ThumbsUp,
  BarChart3,
  Eye,
  ArrowUpRight,
  Calendar,
  RefreshCw,
  Search,
  MoreHorizontal,
  Pencil,
  Trash2,
  ExternalLink,
  Briefcase,
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
  impressions: number;
  engagement: number;
  type: "post" | "article" | "video" | "poll";
}

interface FollowerData {
  date: string;
  followers: number;
}

const mockPosts: Post[] = [
  {
    id: "1",
    content:
      "Interview exclusive: Le PDG d'Etheria Times révèle les projets ambitieux pour 2026. Une année prometteuse pour l'innovation technologique.",
    date: "2026-03-27T10:00:00Z",
    likes: 1234,
    comments: 89,
    shares: 456,
    impressions: 45000,
    engagement: 5.2,
    type: "article",
  },
  {
    id: "2",
    content:
      "Top 10 des startups françaises à surveiller en 2026. Le landscape technologique français ne cesse de s'étoffer!",
    date: "2026-03-26T14:00:00Z",
    likes: 890,
    comments: 67,
    shares: 234,
    impressions: 34000,
    engagement: 4.5,
    type: "article",
  },
  {
    id: "3",
    content:
      "Comment améliorer votre productivité en 2026? Voici nos 5 conseils essentiels pour les professionnels.",
    date: "2026-03-25T09:00:00Z",
    likes: 567,
    comments: 45,
    shares: 123,
    impressions: 23000,
    engagement: 3.8,
    type: "post",
  },
  {
    id: "4",
    content:
      "Sondage: Quelle technologie révolutionnera votre quotidien en 2026? AI, Blockchain, IoT?",
    date: "2026-03-24T12:00:00Z",
    likes: 342,
    comments: 156,
    shares: 89,
    impressions: 28000,
    engagement: 6.2,
    type: "poll",
  },
  {
    id: "5",
    content:
      "Nous recrutons! Rejoignez notre équipe dynamique. Découvrez nos postes ouverts et postulez dès maintenant.",
    date: "2026-03-23T16:00:00Z",
    likes: 678,
    comments: 34,
    shares: 89,
    impressions: 19000,
    engagement: 4.1,
    type: "post",
  },
  {
    id: "6",
    content: "Webinaire: Les tendances du marché de l'emploi tech en 2026. Inscription gratuite!",
    date: "2026-03-22T11:00:00Z",
    likes: 456,
    comments: 23,
    shares: 67,
    impressions: 15000,
    engagement: 3.5,
    type: "video",
  },
];

const mockFollowerData: FollowerData[] = [
  { date: "2026-03-21", followers: 14800 },
  { date: "2026-03-22", followers: 15000 },
  { date: "2026-03-23", followers: 15150 },
  { date: "2026-03-24", followers: 15300 },
  { date: "2026-03-25", followers: 15420 },
  { date: "2026-03-26", followers: 15540 },
  { date: "2026-03-27", followers: 15600 },
];

const weeklyImpressions = [
  { day: "Lun", impressions: 12000, clicks: 450 },
  { day: "Mar", impressions: 14500, clicks: 520 },
  { day: "Mer", impressions: 13200, clicks: 480 },
  { day: "Jeu", impressions: 16800, clicks: 620 },
  { date: "Ven", impressions: 15200, clicks: 580 },
  { day: "Sam", impressions: 8500, clicks: 320 },
  { day: "Dim", impressions: 6800, clicks: 250 },
];

const topCompanies = [
  { name: "Etheria Times", followers: 15600 },
  { name: "Tech Corp", followers: 12400 },
  { name: "Innovation Labs", followers: 8900 },
  { name: "Digital Solutions", followers: 6700 },
  { name: "StartUp Inc", followers: 5400 },
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

const typeConfig = {
  post: { label: "Publication", color: "bg-blue-500" },
  article: { label: "Article", color: "bg-green-500" },
  video: { label: "Vidéo", color: "bg-red-500" },
  poll: { label: "Sondage", color: "bg-orange-500" },
};

export default function LinkedInPage() {
  const [timeRange, setTimeRange] = useState("7d");
  const [searchQuery, setSearchQuery] = useState("");

  const stats = {
    followers: 15600,
    followersGrowth: 12.3,
    connections: 5600,
    connectionsGrowth: 8.2,
    impressions: 85000,
    impressionsGrowth: 25.6,
    engagement: 5.2,
    engagementGrowth: 0.8,
    posts: 890,
    postsGrowth: 3.5,
  };

  const filteredPosts = mockPosts.filter((post) =>
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">LinkedIn</h1>
            <p className="text-sm text-muted-foreground">
              Etheria Times • {formatNumber(stats.followers)} abonnés
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
            Ouvrir LinkedIn
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
            <div className="text-2xl font-bold">{formatNumber(stats.followers)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.followersGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Impressions</span>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.impressions)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.impressionsGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Engagement</span>
              <ThumbsUp className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.engagement}%</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.engagementGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Publications</span>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.posts)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.postsGrowth}%</span>
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
                <CardTitle className="text-base">Évolution des abonnés</CardTitle>
                <CardDescription>Nombre d'abonnés sur les 7 derniers jours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-62.5 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={mockFollowerData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorFollowersLi" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0A66C2" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#0A66C2" stopOpacity={0} />
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
                        dataKey="followers"
                        stroke="#0A66C2"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorFollowersLi)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Impressions et clics</CardTitle>
                <CardDescription>Performance quotidienne</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-62.5 w-full">
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
                        fill="#0A66C2"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar dataKey="clicks" name="Clics" fill="#057642" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Top entreprises</CardTitle>
                <CardDescription>Pages les plus suivies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {topCompanies.map((company, index) => (
                  <div key={company.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-muted-foreground w-4">
                        {index + 1}
                      </span>
                      <span className="font-medium">{company.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatNumber(company.followers)}
                    </span>
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
                          <Send className="h-3 w-3 text-green-500" />
                          {formatNumber(post.shares)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3 text-purple-500" />
                          {formatNumber(post.impressions)}
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
                    <TableHead>Impressions</TableHead>
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
                          {formatNumber(post.impressions)}
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
                              Voir sur LinkedIn
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
                <CardDescription>Évolution du nombre d'abonnés</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-75 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={mockFollowerData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorAudienceLi" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0A66C2" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#0A66C2" stopOpacity={0} />
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
                        dataKey="followers"
                        stroke="#0A66C2"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorAudienceLi)"
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
                    <span className="text-muted-foreground">Hommes</span>
                    <span className="font-medium">58%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "58%" }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Femmes</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-pink-500 rounded-full" style={{ width: "40%" }} />
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <p className="text-sm font-medium">Tranches d'âge</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">18-24</span>
                      <span className="font-medium">8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">25-34</span>
                      <span className="font-medium">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">35-44</span>
                      <span className="font-medium">32%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">45-54</span>
                      <span className="font-medium">18%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">55+</span>
                      <span className="font-medium">7%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <p className="text-sm font-medium">Postes les plus représentés</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Dirigeant</span>
                      <span className="font-medium">22%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Manager</span>
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Expert</span>
                      <span className="font-medium">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Autre</span>
                      <span className="font-medium">15%</span>
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
