"use client";

import { useState } from "react";
import {
  Share2,
  Users,
  MessageCircle,
  Hash,
  Volume2,
  Crown,
  Shield,
  ArrowUpRight,
  Calendar,
  RefreshCw,
  Search,
  MoreHorizontal,
  Pencil,
  Trash2,
  ExternalLink,
  Settings,
  AtSign,
  Smile,
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

interface Channel {
  id: string;
  name: string;
  type: "text" | "voice" | "category";
  members: number;
  messages: number;
  category?: string;
}

interface Member {
  id: string;
  name: string;
  avatar?: string;
  role: "admin" | "mod" | "member";
  joinedAt: string;
  messages: number;
  lastActive: string;
}

interface MessageData {
  hour: string;
  messages: number;
}

const mockChannels: Channel[] = [
  {
    id: "1",
    name: "général",
    type: "text",
    members: 2450,
    messages: 12500,
    category: "Text Channels",
  },
  {
    id: "2",
    name: "annonces",
    type: "text",
    members: 2800,
    messages: 340,
    category: "Text Channels",
  },
  {
    id: "3",
    name: "actualités",
    type: "text",
    members: 1890,
    messages: 890,
    category: "Text Channels",
  },
  {
    id: "4",
    name: "discussions",
    type: "text",
    members: 1450,
    messages: 4500,
    category: "Text Channels",
  },
  {
    id: "5",
    name: "Salon vocal 1",
    type: "voice",
    members: 12,
    messages: 0,
    category: "Voice Channels",
  },
  {
    id: "6",
    name: "Salon vocal 2",
    type: "voice",
    members: 5,
    messages: 0,
    category: "Voice Channels",
  },
  { id: "7", name: "Musique", type: "voice", members: 8, messages: 0, category: "Voice Channels" },
];

const mockMembers: Member[] = [
  {
    id: "1",
    name: "Admin Principal",
    role: "admin",
    joinedAt: "2024-01-15",
    messages: 12500,
    lastActive: "2026-03-27",
  },
  {
    id: "2",
    name: "Modérateur 1",
    role: "mod",
    joinedAt: "2024-03-20",
    messages: 8900,
    lastActive: "2026-03-27",
  },
  {
    id: "3",
    name: "Membre actif",
    role: "member",
    joinedAt: "2024-06-10",
    messages: 4500,
    lastActive: "2026-03-26",
  },
  {
    id: "4",
    name: "Contributeur",
    role: "member",
    joinedAt: "2024-08-15",
    messages: 3200,
    lastActive: "2026-03-25",
  },
  {
    id: "5",
    name: "Nouveau membre",
    role: "member",
    joinedAt: "2026-03-01",
    messages: 120,
    lastActive: "2026-03-27",
  },
];

const mockMessageData: MessageData[] = [
  { hour: "00h", messages: 120 },
  { hour: "04h", messages: 45 },
  { hour: "08h", messages: 890 },
  { hour: "12h", messages: 2340 },
  { hour: "16h", messages: 1890 },
  { hour: "20h", messages: 1560 },
];

const roleDistribution = [
  { name: "Membres", value: 2750, color: "#7289DA" },
  { name: "Modérateurs", value: 15, color: "#FAA61A" },
  { name: "Administrateurs", value: 3, color: "#ED4245" },
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
  admin: { label: "Admin", color: "bg-red-500", icon: Crown },
  mod: { label: "Modérateur", color: "bg-yellow-500", icon: Shield },
  member: { label: "Membre", color: "bg-gray-500", icon: Users },
};

const channelTypeConfig = {
  text: { label: "Texte", icon: Hash, color: "text-gray-400" },
  voice: { label: "Vocal", icon: Volume2, color: "text-green-400" },
  category: { label: "Catégorie", icon: Hash, color: "text-gray-500" },
};

export default function DiscordPage() {
  const [timeRange, setTimeRange] = useState("7d");
  const [searchQuery, setSearchQuery] = useState("");

  const stats = {
    members: 2768,
    membersGrowth: 5.2,
    onlineNow: 145,
    onlineGrowth: 12.3,
    messagesToday: 8945,
    messagesGrowth: 8.7,
    channels: 12,
  };

  const filteredMembers = mockMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5865F2]">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Discord</h1>
            <p className="text-sm text-muted-foreground">
              Etheria Times Community • {formatNumber(stats.members)} membres
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
            Ouvrir Discord
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Membres total</span>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.members)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.membersGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>En ligne maintenant</span>
              <AtSign className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.onlineNow}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.onlineGrowth}%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Messages aujourd'hui</span>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(stats.messagesToday)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{stats.messagesGrowth}%</span>
              <span className="text-muted-foreground">vs hier</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Salons</span>
              <Hash className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.channels}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <span>7 textes • 3 vocaux • 2 catégories</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Aperçu</TabsTrigger>
          <TabsTrigger value="channels">Salons</TabsTrigger>
          <TabsTrigger value="members">Membres</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Activité des messages</CardTitle>
                <CardDescription>Messages par heure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-62.5 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={mockMessageData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#5865F2" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#5865F2" stopOpacity={0} />
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
                        formatter={(value) => [formatNumber(value as number), "Messages"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="messages"
                        stroke="#5865F2"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorMessages)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Distribution des rôles</CardTitle>
                <CardDescription>Répartition des membres par rôle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-62.5 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={roleDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {roleDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                        formatter={(value) => formatNumber(value as number)}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  {roleDistribution.map((role) => (
                    <div key={role.name} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: role.color }}
                      />
                      <span className="text-sm text-muted-foreground">{role.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Salons les plus actifs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockChannels
                  .filter((c) => c.type === "text")
                  .slice(0, 4)
                  .map((channel) => (
                    <div key={channel.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Hash className="h-4 w-4 text-gray-400" />
                        <span className="font-medium">{channel.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {formatNumber(channel.messages)} msg
                      </span>
                    </div>
                  ))}
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">Membres récents</CardTitle>
                <CardDescription>Derniers membres rejoints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockMembers.slice(0, 4).map((member) => {
                    const RoleIcon = roleConfig[member.role].icon;
                    return (
                      <div
                        key={member.id}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-medium">
                            {member.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Rejoint: {formatDate(member.joinedAt)}
                            </p>
                          </div>
                        </div>
                        <Badge className={roleConfig[member.role].color}>
                          <RoleIcon className="h-3 w-3 mr-1" />
                          {roleConfig[member.role].label}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="channels" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Tous les salons</CardTitle>
              <CardDescription>Gérez vos salons Discord</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Salon</TableHead>
                    <TableHead>Catégorie</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Membres</TableHead>
                    <TableHead>Messages</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockChannels.map((channel) => {
                    const ChannelIcon = channelTypeConfig[channel.type].icon;
                    return (
                      <TableRow key={channel.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <ChannelIcon className={channelTypeConfig[channel.type].color} />
                            <span className="font-medium">{channel.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-muted-foreground">{channel.category}</span>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{channelTypeConfig[channel.type].label}</Badge>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3 text-muted-foreground" />
                            {channel.members}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3 text-muted-foreground" />
                            {formatNumber(channel.messages)}
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

        <TabsContent value="members" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Tous les membres</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher un membre..."
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
                    <TableHead>Membre</TableHead>
                    <TableHead>Rôle</TableHead>
                    <TableHead>Rejoint le</TableHead>
                    <TableHead>Messages</TableHead>
                    <TableHead>Dernière activité</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMembers.map((member) => {
                    const RoleIcon = roleConfig[member.role].icon;
                    return (
                      <TableRow key={member.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-medium">
                              {member.name.charAt(0)}
                            </div>
                            <span className="font-medium">{member.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={roleConfig[member.role].color}>
                            <RoleIcon className="h-3 w-3 mr-1" />
                            {roleConfig[member.role].label}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {formatDate(member.joinedAt)}
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3 text-muted-foreground" />
                            {formatNumber(member.messages)}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{member.lastActive}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Smile className="mr-2 h-4 w-4" />
                                Voir profil
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Modifier le rôle
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive focus:text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Expulser
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
