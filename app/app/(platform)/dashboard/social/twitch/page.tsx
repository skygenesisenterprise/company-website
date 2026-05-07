"use client";

import { useState } from "react";
import {
  Video,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Gamepad2,
  Clock,
  ArrowUpRight,
  Calendar,
  RefreshCw,
  Search,
  MoreHorizontal,
  Pencil,
  Trash2,
  ExternalLink,
  Settings,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
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

interface Stream {
  id: string;
  title: string;
  game: string;
  viewers: number;
  duration: string;
  status: "live" | "offline" | "scheduled";
  thumbnail?: string;
}

interface ViewerData {
  hour: string;
  viewers: number;
}

interface Streamer {
  id: string;
  name: string;
  avatar?: string;
  role: "partner" | "affiliate" | "regular";
  followers: number;
  views: number;
  lastStream: string;
}

const mockStreams: Stream[] = [
  {
    id: "1",
    title: "Etheria Times - Stream spécial",
    game: "Minecraft",
    viewers: 1250,
    duration: "2h 45m",
    status: "live",
  },
  {
    id: "2",
    title: "Tournoi communautaire",
    game: "League of Legends",
    viewers: 890,
    duration: "1h 30m",
    status: "live",
  },
  {
    id: "3",
    title: "Discussion et gameplay",
    game: "Just Chatting",
    viewers: 0,
    duration: "",
    status: "scheduled",
  },
  {
    id: "4",
    title: "Session chill",
    game: "Valorant",
    viewers: 0,
    duration: "",
    status: "offline",
  },
  {
    id: "5",
    title: "Q&A avec la communauté",
    game: "Just Chatting",
    viewers: 0,
    duration: "",
    status: "offline",
  },
];

const mockStreamers: Streamer[] = [
  {
    id: "1",
    name: "EtheriaHost",
    role: "partner",
    followers: 45200,
    views: 1250000,
    lastStream: "2026-03-27",
  },
  {
    id: "2",
    name: "EtheriaNews",
    role: "affiliate",
    followers: 12500,
    views: 340000,
    lastStream: "2026-03-26",
  },
  {
    id: "3",
    name: "EtheriaGaming",
    role: "affiliate",
    followers: 8900,
    views: 180000,
    lastStream: "2026-03-25",
  },
  {
    id: "4",
    name: "EtheriaEvents",
    role: "regular",
    followers: 3200,
    views: 45000,
    lastStream: "2026-03-20",
  },
  {
    id: "5",
    name: "EtheriaChat",
    role: "regular",
    followers: 1500,
    views: 22000,
    lastStream: "2026-03-15",
  },
];

const mockViewerData: ViewerData[] = [
  { hour: "00h", viewers: 120 },
  { hour: "04h", viewers: 45 },
  { hour: "08h", viewers: 890 },
  { hour: "12h", viewers: 2340 },
  { hour: "16h", viewers: 1890 },
  { hour: "20h", viewers: 3120 },
];

const gameDistribution = [
  { name: "Minecraft", value: 35, color: "#62B47A" },
  { name: "League of Legends", value: 25, color: "#C89B3C" },
  { name: "Just Chatting", value: 20, color: "#9146FF" },
  { name: "Valorant", value: 12, color: "#FF4655" },
  { name: "Autres", value: 8, color: "#6B7280" },
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

const formatDate = (dateString: string) => {
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
  const year = date.getUTCFullYear();
  return `${day} ${month} ${year}`;
};

const roleConfig = {
  partner: { label: "Partner", color: "bg-[#9146FF]", icon: Star },
  affiliate: { label: "Affiliate", color: "bg-green-600", icon: Trophy },
  regular: { label: "Regular", color: "bg-gray-500", icon: Users },
};

const statusConfig = {
  live: { label: "En direct", color: "bg-red-600", icon: Video },
  offline: { label: "Hors ligne", color: "bg-gray-500", icon: Video },
  scheduled: { label: "Planifié", color: "bg-blue-600", icon: Clock },
};

export default function TwitchPage() {
  const [timeRange, setTimeRange] = useState("7d");
  const [searchQuery, setSearchQuery] = useState("");

  const stats = {
    followers: 68400,
    followersGrowth: 8.3,
    totalViews: 1820000,
    viewsGrowth: 12.5,
    peakViewers: 3120,
    streamsThisMonth: 24,
  };

  const filteredStreamers = mockStreamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9146FF]">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.571 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Twitch</h1>
            <p className="text-sm text-muted-foreground">
              Etheria Times • {formatNumber(stats.followers)} followers
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
            Ouvrir Twitch
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Followers total</span>
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
              <span>Vues total</span>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.totalViews)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.viewsGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Pic de spectateurs</span>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.peakViewers)}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <span>Maximum de la période</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Streams ce mois</span>
              <Video className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.streamsThisMonth}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <span>Moyenne: 2h 15m/stream</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Aperçu</TabsTrigger>
          <TabsTrigger value="streams">Streams</TabsTrigger>
          <TabsTrigger value="streamers">Streamers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Spectateurs</CardTitle>
                <CardDescription>Nombre de spectateurs par heure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-62.5 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={mockViewerData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorViewers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#9146FF" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#9146FF" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="hour"
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
                        formatter={(value) => [formatNumber(value as number), "Spectateurs"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="viewers"
                        stroke="#9146FF"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorViewers)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Distribution par jeu</CardTitle>
                <CardDescription>Temps de stream par jeu</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-62.5 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={gameDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {gameDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                        formatter={(value) => `${value}%`}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                  {gameDistribution.map((game) => (
                    <div key={game.name} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: game.color }}
                      />
                      <span className="text-sm text-muted-foreground">{game.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Streams en direct</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockStreams
                  .filter((s) => s.status === "live")
                  .slice(0, 4)
                  .map((stream) => (
                    <div key={stream.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-red-500" />
                        <div>
                          <p className="font-medium text-sm">{stream.title}</p>
                          <p className="text-xs text-muted-foreground">{stream.game}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm">{formatNumber(stream.viewers)}</span>
                      </div>
                    </div>
                  ))}
                {mockStreams.filter((s) => s.status === "live").length === 0 && (
                  <p className="text-sm text-muted-foreground">Aucun stream en direct</p>
                )}
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">Top streamers</CardTitle>
                <CardDescription>Meilleurs performeurs par followers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockStreamers.slice(0, 5)} layout="vertical">
                      <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={true}
                        vertical={false}
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        type="number"
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => formatNumber(value)}
                      />
                      <YAxis
                        dataKey="name"
                        type="category"
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        width={100}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                        formatter={(value) => formatNumber(value as number)}
                      />
                      <Bar dataKey="followers" fill="#9146FF" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="streams" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Tous les streams</CardTitle>
              <CardDescription>Gérez vos streams Twitch</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Titre</TableHead>
                    <TableHead>Jeu</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Spectateurs</TableHead>
                    <TableHead>Durée</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockStreams.map((stream) => {
                    const StatusIcon = statusConfig[stream.status].icon;
                    return (
                      <TableRow key={stream.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <StatusIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{stream.title}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1">
                            <Gamepad2 className="h-3 w-3 text-muted-foreground" />
                            {stream.game}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge className={statusConfig[stream.status].color}>
                            {statusConfig[stream.status].label}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3 text-muted-foreground" />
                            {stream.status === "live" ? formatNumber(stream.viewers) : "-"}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            {stream.duration || "-"}
                          </span>
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
                                <Settings className="mr-2 h-4 w-4" />
                                Configurer
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
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="streamers" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Tous les streamers</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher un streamer..."
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
                    <TableHead>Streamer</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Followers</TableHead>
                    <TableHead>Vues</TableHead>
                    <TableHead>Dernier stream</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStreamers.map((streamer) => {
                    const RoleIcon = roleConfig[streamer.role].icon;
                    return (
                      <TableRow key={streamer.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xs font-medium">
                              {streamer.name.charAt(0)}
                            </div>
                            <span className="font-medium">{streamer.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={roleConfig[streamer.role].color}>
                            <RoleIcon className="h-3 w-3 mr-1" />
                            {roleConfig[streamer.role].label}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3 text-muted-foreground" />
                            {formatNumber(streamer.followers)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3 text-muted-foreground" />
                            {formatNumber(streamer.views)}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {formatDate(streamer.lastStream)}
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
                                Voir profil
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Envoyer un message
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
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
