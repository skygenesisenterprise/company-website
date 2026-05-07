"use client";

import { useState } from "react";
import {
  Share2,
  TrendingUp,
  TrendingDown,
  Users,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
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
  Image,
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
  saves: number;
  reach: number;
  engagement: number;
  type: "image" | "video" | "carousel" | "story";
  imageUrl?: string;
}

interface FollowerData {
  date: string;
  followers: number;
}

const mockPosts: Post[] = [
  {
    id: "1",
    content: "Les meilleures photos de la semaine",
    date: "2026-03-27T10:00:00Z",
    likes: 5670,
    comments: 234,
    saves: 890,
    reach: 67000,
    engagement: 8.2,
    type: "carousel",
    imageUrl: "/placeholder.jpg",
  },
  {
    id: "2",
    content: "Interview exclusive: Le PDG révèle les projets",
    date: "2026-03-26T14:00:00Z",
    likes: 3420,
    comments: 156,
    saves: 567,
    reach: 45000,
    engagement: 6.5,
    type: "video",
  },
  {
    id: "3",
    content: "Behind the scenes de notre équipe",
    date: "2026-03-25T16:00:00Z",
    likes: 2890,
    comments: 89,
    saves: 234,
    reach: 34000,
    engagement: 5.8,
    type: "image",
  },
  {
    id: "4",
    content: "Nouvelle découverte: les couleurs de l'automne",
    date: "2026-03-24T12:00:00Z",
    likes: 4560,
    comments: 178,
    saves: 678,
    reach: 56000,
    engagement: 7.2,
    type: "carousel",
  },
  {
    id: "5",
    content: "Tips pour améliorer votre productivité",
    date: "2026-03-23T09:00:00Z",
    likes: 2340,
    comments: 123,
    saves: 456,
    reach: 28000,
    engagement: 5.2,
    type: "image",
  },
  {
    id: "6",
    content: "Flashback: nos meilleurs moments de 2025",
    date: "2026-03-22T18:00:00Z",
    likes: 6780,
    comments: 345,
    saves: 1230,
    reach: 89000,
    engagement: 9.1,
    type: "carousel",
  },
];

const mockFollowerData: FollowerData[] = [
  { date: "2026-03-21", followers: 85200 },
  { date: "2026-03-22", followers: 85800 },
  { date: "2026-03-23", followers: 86400 },
  { date: "2026-03-24", followers: 87100 },
  { date: "2026-03-25", followers: 87800 },
  { date: "2026-03-26", followers: 88500 },
  { date: "2026-03-27", followers: 89200 },
];

const weeklyEngagement = [
  { day: "Lun", likes: 4500, comments: 180, saves: 320 },
  { day: "Mar", likes: 5200, comments: 210, saves: 380 },
  { day: "Mer", likes: 4800, comments: 190, saves: 340 },
  { day: "Jeu", likes: 6100, comments: 280, saves: 420 },
  { day: "Ven", likes: 5500, comments: 240, saves: 390 },
  { day: "Sam", likes: 7200, comments: 320, saves: 560 },
  { day: "Dim", likes: 6800, comments: 290, saves: 510 },
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

const typeConfig = {
  image: { label: "Image", color: "bg-pink-500" },
  video: { label: "Vidéo", color: "bg-purple-500" },
  carousel: { label: "Carousel", color: "bg-orange-500" },
  story: { label: "Story", color: "bg-blue-500" },
};

export default function InstagramPage() {
  const [timeRange, setTimeRange] = useState("7d");
  const [searchQuery, setSearchQuery] = useState("");

  const stats = {
    followers: 89200,
    followersGrowth: 8.4,
    following: 890,
    posts: 2340,
    postsGrowth: 3.2,
    engagement: 4.5,
    engagementGrowth: 1.2,
    avgLikes: 4560,
    avgComments: 234,
  };

  const filteredPosts = mockPosts.filter((post) =>
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Instagram</h1>
            <p className="text-sm text-muted-foreground">
              @etheriatimes • {formatNumber(stats.followers)} abonnés
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
            Ouvrir Instagram
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
              <span>Publications</span>
              <Image className="h-4 w-4 text-muted-foreground" />
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

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Likes moyens</span>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.avgLikes)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+5.2%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Engagement</span>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
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
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={mockFollowerData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorFollowersIg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#E1306C" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#E1306C" stopOpacity={0} />
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
                        stroke="#E1306C"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorFollowersIg)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Engagement par jour</CardTitle>
                <CardDescription>Likes, commentaires et saves</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={weeklyEngagement}
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
                      <Bar dataKey="likes" name="Likes" fill="#E1306C" radius={[4, 4, 0, 0]} />
                      <Bar
                        dataKey="comments"
                        name="Commentaires"
                        fill="#F56040"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar dataKey="saves" name="Saves" fill="#405DE6" radius={[4, 4, 0, 0]} />
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
                <CardTitle className="text-base">Publications récentes</CardTitle>
                <CardDescription>Vos publications avec le plus d'engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {mockPosts.slice(0, 6).map((post) => (
                    <div
                      key={post.id}
                      className="aspect-square rounded-lg bg-muted relative group cursor-pointer overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-2">
                        <div className="flex items-center gap-3 text-white text-xs">
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3 fill-current" />
                            {formatNumber(post.likes)}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            {formatNumber(post.comments)}
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge className={typeConfig[post.type].color} variant="secondary">
                          {typeConfig[post.type].label}
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
                    <TableHead>Likes</TableHead>
                    <TableHead>Comments</TableHead>
                    <TableHead>Saves</TableHead>
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
                          <Heart className="h-3 w-3 text-pink-500" />
                          {formatNumber(post.likes)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3 text-blue-500" />
                          {formatNumber(post.comments)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1">
                          <Bookmark className="h-3 w-3 text-purple-500" />
                          {formatNumber(post.saves)}
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
                              Voir sur Instagram
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
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={mockFollowerData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorAudienceIg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#E1306C" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#E1306C" stopOpacity={0} />
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
                        stroke="#E1306C"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorAudienceIg)"
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
                  <span className="text-muted-foreground">Abonnements</span>
                  <span className="font-medium">{formatNumber(stats.following)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Publications</span>
                  <span className="font-medium">{formatNumber(stats.posts)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Taux d'engagement</span>
                  <span className="font-medium text-green-600">{stats.engagement}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Likes moyens/post</span>
                  <span className="font-medium">{formatNumber(stats.avgLikes)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Commentaires moyens/post</span>
                  <span className="font-medium">{formatNumber(stats.avgComments)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
