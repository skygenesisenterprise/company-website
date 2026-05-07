"use client";

import { useState } from "react";
import {
  Users,
  Heart,
  MessageCircle,
  Repeat,
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

interface Tweet {
  id: string;
  content: string;
  date: string;
  likes: number;
  replies: number;
  retweets: number;
  impressions: number;
  engagement: number;
  url?: string;
}

interface FollowerData {
  date: string;
  followers: number;
}

const mockTweets: Tweet[] = [
  {
    id: "1",
    content:
      "Breaking: Nouvelle découverte scientifique majeure qui révolutionne notre compréhension de l'univers. Les chercheurs présentent leurs conclusions aujourd'hui.",
    date: "2026-03-27T11:30:00Z",
    likes: 2450,
    replies: 342,
    retweets: 890,
    impressions: 125000,
    engagement: 4.2,
    url: "https://twitter.com/etheriatimes/status/123456789",
  },
  {
    id: "2",
    content:
      "Les technologies de 2026 révolutionnent notre quotidien. Découvrez notre analyse complète sur les tendances qui moldent l'avenir.",
    date: "2026-03-27T10:00:00Z",
    likes: 1234,
    replies: 156,
    retweets: 456,
    impressions: 89000,
    engagement: 3.8,
  },
  {
    id: "3",
    content:
      "Élections 2026: tous les résultats et analyses en direct. Suivez notre couverture spéciale.",
    date: "2026-03-26T18:00:00Z",
    likes: 3420,
    replies: 567,
    retweets: 1234,
    impressions: 156000,
    engagement: 4.8,
  },
  {
    id: "4",
    content:
      "Cryptomonnaies: le Bitcoin atteint un nouveau record historique à 150 000$. Analyse complète à venir.",
    date: "2026-03-26T15:00:00Z",
    likes: 567,
    replies: 89,
    retweets: 234,
    impressions: 45000,
    engagement: 3.2,
  },
  {
    id: "5",
    content: "Le mot du jour: Innovation. C'est le moteur du progrès!",
    date: "2026-03-26T08:00:00Z",
    likes: 890,
    replies: 45,
    retweets: 123,
    impressions: 34000,
    engagement: 3.5,
  },
  {
    id: "6",
    content:
      "Interview exclusive à venir: Le PDG d'Etheria Times révèle les projets pour 2026. Stay tuned!",
    date: "2026-03-25T14:00:00Z",
    likes: 1567,
    replies: 234,
    retweets: 567,
    impressions: 78000,
    engagement: 4.1,
  },
];

const mockFollowerData: FollowerData[] = [
  { date: "2026-03-21", followers: 42800 },
  { date: "2026-03-22", followers: 43200 },
  { date: "2026-03-23", followers: 43800 },
  { date: "2026-03-24", followers: 44100 },
  { date: "2026-03-25", followers: 44500 },
  { date: "2026-03-26", followers: 44900 },
  { date: "2026-03-27", followers: 45230 },
];

const weeklyImpressions = [
  { day: "Lun", impressions: 45000, engagement: 3.2 },
  { day: "Mar", impressions: 52000, engagement: 3.8 },
  { day: "Mer", impressions: 48000, engagement: 3.5 },
  { day: "Jeu", impressions: 61000, engagement: 4.2 },
  { day: "Ven", impressions: 55000, engagement: 3.9 },
  { day: "Sam", impressions: 72000, engagement: 4.5 },
  { day: "Dim", impressions: 68000, engagement: 4.1 },
];

const topHashtags = [
  { tag: "#EtheriaTimes", posts: 1250 },
  { tag: "#News", posts: 890 },
  { tag: "#Tech2026", posts: 567 },
  { tag: "#Innovation", posts: 432 },
  { tag: "#Actualité", posts: 345 },
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

export default function TwitterPage() {
  const [timeRange, setTimeRange] = useState("7d");
  const [searchQuery, setSearchQuery] = useState("");

  const stats = {
    followers: 45230,
    followersGrowth: 5.2,
    impressions: 450000,
    impressionsGrowth: 12.3,
    engagement: 3.8,
    engagementGrowth: 0.4,
    tweets: 8920,
    tweetsGrowth: 2.1,
  };

  const filteredTweets = mockTweets.filter((tweet) =>
    tweet.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">X (Twitter)</h1>
            <p className="text-sm text-muted-foreground">
              @EtheriaTimes • {formatNumber(stats.followers)} abonnés
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
            Ouvrir X
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
              <Heart className="h-4 w-4 text-muted-foreground" />
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
              <span>Tweets</span>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.tweets)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.tweetsGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Aperçu</TabsTrigger>
          <TabsTrigger value="tweets">Tweets</TabsTrigger>
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
                        <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#000000" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#000000" stopOpacity={0} />
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
                        stroke="#000000"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorFollowers)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Impressions et engagement</CardTitle>
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
                        fill="#000000"
                        radius={[4, 4, 0, 0]}
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
                <CardTitle className="text-base">Top hashtags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topHashtags.map((hashtag, index) => (
                  <div key={hashtag.tag} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-muted-foreground w-4">
                        {index + 1}
                      </span>
                      <span className="font-medium">{hashtag.tag}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatNumber(hashtag.posts)} posts
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">Tweets récents performants</CardTitle>
                <CardDescription>Vos tweets avec le plus d'engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTweets.slice(0, 3).map((tweet) => (
                    <div key={tweet.id} className="p-4 rounded-lg border">
                      <p className="text-sm mb-3">{tweet.content}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3 text-pink-500" />
                          {formatNumber(tweet.likes)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3 text-blue-500" />
                          {formatNumber(tweet.replies)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Repeat className="h-3 w-3 text-green-500" />
                          {formatNumber(tweet.retweets)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3 text-purple-500" />
                          {formatNumber(tweet.impressions)}
                        </span>
                        <Badge variant="secondary" className="ml-auto">
                          {tweet.engagement}% engagement
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tweets" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Tous les tweets</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher un tweet..."
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
                    <TableHead>Tweet</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Likes</TableHead>
                    <TableHead>Réponses</TableHead>
                    <TableHead>Retweets</TableHead>
                    <TableHead>Impressions</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTweets.map((tweet) => (
                    <TableRow key={tweet.id}>
                      <TableCell>
                        <p className="max-w-md truncate text-sm">{tweet.content}</p>
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-muted-foreground">
                        {formatDateTime(tweet.date)}
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3 text-pink-500" />
                          {formatNumber(tweet.likes)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3 text-blue-500" />
                          {formatNumber(tweet.replies)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1">
                          <Repeat className="h-3 w-3 text-green-500" />
                          {formatNumber(tweet.retweets)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3 text-purple-500" />
                          {formatNumber(tweet.impressions)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{tweet.engagement}%</Badge>
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
                              Voir sur X
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
                        <linearGradient id="colorAudience" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#000000" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#000000" stopOpacity={0} />
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
                        stroke="#000000"
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
                <CardTitle className="text-base">Statistiques clés</CardTitle>
                <CardDescription>Informations sur votre audience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Abonnés</span>
                  <span className="font-medium">{formatNumber(stats.followers)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Impressions totales</span>
                  <span className="font-medium">{formatNumber(stats.impressions)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Taux d'engagement</span>
                  <span className="font-medium text-green-600">{stats.engagement}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Publications</span>
                  <span className="font-medium">{formatNumber(stats.tweets)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Taux de croissance</span>
                  <span className="font-medium text-green-600">+{stats.followersGrowth}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Croissance impressions</span>
                  <span className="font-medium text-green-600">+{stats.impressionsGrowth}%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
