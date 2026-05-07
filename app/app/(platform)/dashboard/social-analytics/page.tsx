"use client";

import { useState } from "react";
import {
  BarChart3,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  RefreshCw,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface PlatformStats {
  platform: string;
  followers: number;
  followersGrowth: number;
  engagement: number;
  engagementGrowth: number;
  reach: number;
  reachGrowth: number;
  impressions: number;
  impressionsGrowth: number;
}

interface PostPerformance {
  id: string;
  content: string;
  platform: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
  reach: number;
  engagement: number;
}

const mockPlatformStats: PlatformStats[] = [
  {
    platform: "Twitter/X",
    followers: 45230,
    followersGrowth: 5.2,
    engagement: 3.8,
    engagementGrowth: 0.4,
    reach: 125000,
    reachGrowth: 8.1,
    impressions: 450000,
    impressionsGrowth: 12.3,
  },
  {
    platform: "Facebook",
    followers: 125400,
    followersGrowth: 2.1,
    engagement: 2.3,
    engagementGrowth: -0.2,
    reach: 89000,
    reachGrowth: 3.5,
    impressions: 320000,
    impressionsGrowth: 5.7,
  },
  {
    platform: "Instagram",
    followers: 89200,
    followersGrowth: 8.4,
    engagement: 4.5,
    engagementGrowth: 1.2,
    reach: 67000,
    reachGrowth: 15.2,
    impressions: 280000,
    impressionsGrowth: 18.9,
  },
  {
    platform: "LinkedIn",
    followers: 15600,
    followersGrowth: 12.3,
    engagement: 5.2,
    engagementGrowth: 0.8,
    reach: 23000,
    reachGrowth: 22.4,
    impressions: 85000,
    impressionsGrowth: 25.6,
  },
];

const mockTopPosts: PostPerformance[] = [
  {
    id: "1",
    content: "Breaking: Nouvelle découverte scientifique majeure qui révolutionne...",
    platform: "Twitter/X",
    date: "2026-03-27",
    likes: 2450,
    comments: 342,
    shares: 890,
    reach: 125000,
    engagement: 4.2,
  },
  {
    id: "2",
    content: "Les technologies de 2026 révolutionnent notre quotidien...",
    platform: "Facebook",
    date: "2026-03-26",
    likes: 1890,
    comments: 234,
    shares: 567,
    reach: 89000,
    engagement: 3.8,
  },
  {
    id: "3",
    content: "Interview exclusive: Le PDG révèle les projets pour 2026...",
    platform: "LinkedIn",
    date: "2026-03-25",
    likes: 1234,
    comments: 89,
    shares: 456,
    reach: 45000,
    engagement: 5.1,
  },
  {
    id: "4",
    content: "Les meilleures photos de la semaine #EtheriaTimes",
    platform: "Instagram",
    date: "2026-03-24",
    likes: 5670,
    comments: 234,
    shares: 123,
    reach: 67000,
    engagement: 6.8,
  },
  {
    id: "5",
    content: "Élections 2026: tous les résultats et analyses...",
    platform: "Facebook",
    date: "2026-03-23",
    likes: 3420,
    comments: 567,
    shares: 890,
    reach: 125000,
    engagement: 4.5,
  },
];

const weeklyData = [
  { day: "Lun", twitter: 4500, facebook: 3200, instagram: 2800, linkedin: 1200 },
  { day: "Mar", twitter: 5200, facebook: 3400, instagram: 3100, linkedin: 1400 },
  { day: "Mer", twitter: 4800, facebook: 3600, instagram: 2900, linkedin: 1600 },
  { day: "Jeu", twitter: 6100, facebook: 4200, instagram: 3500, linkedin: 1800 },
  { day: "Ven", twitter: 5500, facebook: 3800, instagram: 3200, linkedin: 2100 },
  { day: "Sam", twitter: 7200, facebook: 4500, instagram: 4200, linkedin: 1500 },
  { day: "Dim", twitter: 6800, facebook: 4100, instagram: 3800, linkedin: 1300 },
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

const maxEngagement = Math.max(
  ...weeklyData.map((d) => d.twitter + d.facebook + d.instagram + d.linkedin)
);

export default function SocialAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d");
  const [platformFilter, setPlatformFilter] = useState("all");

  const totalFollowers = mockPlatformStats.reduce((acc, p) => acc + p.followers, 0);
  const totalReach = mockPlatformStats.reduce((acc, p) => acc + p.reach, 0);
  const totalImpressions = mockPlatformStats.reduce((acc, p) => acc + p.impressions, 0);
  const avgEngagement =
    mockPlatformStats.reduce((acc, p) => acc + p.engagement, 0) / mockPlatformStats.length;

  const avgFollowersGrowth =
    mockPlatformStats.reduce((acc, p) => acc + p.followersGrowth, 0) / mockPlatformStats.length;
  const avgReachGrowth =
    mockPlatformStats.reduce((acc, p) => acc + p.reachGrowth, 0) / mockPlatformStats.length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Statistiques sociales</h1>
          <p className="text-sm text-muted-foreground">
            Analysez les performances de vos réseaux sociaux
          </p>
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
            <Download className="h-4 w-4 mr-2" />
            Exporter
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Abonnés totaux</span>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(totalFollowers)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              {avgFollowersGrowth > 0 ? (
                <ArrowUpRight className="h-3 w-3" />
              ) : (
                <ArrowDownRight className="h-3 w-3" />
              )}
              <span>
                {avgFollowersGrowth > 0 ? "+" : ""}
                {avgFollowersGrowth.toFixed(1)}%
              </span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Portée totale</span>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(totalReach)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              {avgReachGrowth > 0 ? (
                <ArrowUpRight className="h-3 w-3" />
              ) : (
                <ArrowDownRight className="h-3 w-3" />
              )}
              <span>
                {avgReachGrowth > 0 ? "+" : ""}
                {avgReachGrowth.toFixed(1)}%
              </span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Impressions</span>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(totalImpressions)}</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+15.6%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center justify-between">
              <span>Engagement moyen</span>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgEngagement.toFixed(1)}%</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3" />
              <span>+0.5%</span>
              <span className="text-muted-foreground">vs période précédente</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Performances par plateforme</CardTitle>
          <CardDescription>
            Comparaison des métriques sur les différents réseaux sociaux
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mockPlatformStats.map((platform) => (
              <div key={platform.platform} className="rounded-lg border p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{platform.platform}</span>
                  <Badge variant="outline" className="text-xs">
                    {formatNumber(platform.followers)} abonnements
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Engagement</p>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{platform.engagement}%</span>
                      <span
                        className={`text-xs ${platform.engagementGrowth >= 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        {platform.engagementGrowth >= 0 ? "+" : ""}
                        {platform.engagementGrowth}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Portée</p>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{formatNumber(platform.reach)}</span>
                      <span
                        className={`text-xs ${platform.reachGrowth >= 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        {platform.reachGrowth >= 0 ? "+" : ""}
                        {platform.reachGrowth}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-muted-foreground text-xs">Impressions</p>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{formatNumber(platform.impressions)}</span>
                    <span
                      className={`text-xs ${platform.impressionsGrowth >= 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {platform.impressionsGrowth >= 0 ? "+" : ""}
                      {platform.impressionsGrowth}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Évolution des interactions</CardTitle>
            <CardDescription>Nombre d'interactions par jour</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day) => (
                <div key={day.day} className="flex items-center gap-3">
                  <span className="w-8 text-xs text-muted-foreground">{day.day}</span>
                  <div className="flex-1 flex gap-1 h-6">
                    <div
                      className="bg-black rounded-sm"
                      style={{ width: `${(day.twitter / maxEngagement) * 100}%` }}
                      title={`Twitter: ${day.twitter}`}
                    />
                    <div
                      className="bg-blue-600 rounded-sm"
                      style={{ width: `${(day.facebook / maxEngagement) * 100}%` }}
                      title={`Facebook: ${day.facebook}`}
                    />
                    <div
                      className="bg-linear-to-r from-purple-600 to-pink-500 rounded-sm"
                      style={{ width: `${(day.instagram / maxEngagement) * 100}%` }}
                      title={`Instagram: ${day.instagram}`}
                    />
                    <div
                      className="bg-blue-700 rounded-sm"
                      style={{ width: `${(day.linkedin / maxEngagement) * 100}%` }}
                      title={`LinkedIn: ${day.linkedin}`}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-12 text-right">
                    {(day.twitter + day.facebook + day.instagram + day.linkedin).toLocaleString(
                      "fr-FR"
                    )}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-4 pt-2 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-black rounded-sm" />
                  <span>Twitter/X</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-sm" />
                  <span>Facebook</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-linear-to-r from-purple-600 to-pink-500 rounded-sm" />
                  <span>Instagram</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-700 rounded-sm" />
                  <span>LinkedIn</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Top publications</CardTitle>
            <CardDescription>Vos publications les plus performantes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTopPosts.map((post, index) => (
                <div key={post.id} className="flex items-start gap-3 p-3 rounded-lg border">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {post.platform}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <p className="text-sm truncate mb-2">{post.content}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {formatNumber(post.likes)}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {formatNumber(post.comments)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="h-3 w-3" />
                        {formatNumber(post.shares)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {formatNumber(post.reach)}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {post.engagement}% engagement
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Tableau de bord consolidé</CardTitle>
          <CardDescription>Résumé complet des performances</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-muted/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-4 w-4 text-pink-500" />
                <span className="font-medium">Total des likes</span>
              </div>
              <p className="text-2xl font-bold">15,664</p>
              <p className="text-xs text-green-600 mt-1">+12.3% vs semaine dernière</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="h-4 w-4 text-blue-500" />
                <span className="font-medium">Total des commentaires</span>
              </div>
              <p className="text-2xl font-bold">1,466</p>
              <p className="text-xs text-green-600 mt-1">+8.7% vs semaine dernière</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="h-4 w-4 text-green-500" />
                <span className="font-medium">Total des partages</span>
              </div>
              <p className="text-2xl font-bold">2,936</p>
              <p className="text-xs text-green-600 mt-1">+18.2% vs semaine dernière</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-4 w-4 text-purple-500" />
                <span className="font-medium">Portée totale</span>
              </div>
              <p className="text-2xl font-bold">306K</p>
              <p className="text-xs text-green-600 mt-1">+12.4% vs semaine dernière</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-orange-500" />
                <span className="font-medium">Nouveaux abonnés</span>
              </div>
              <p className="text-2xl font-bold">+7,435</p>
              <p className="text-xs text-green-600 mt-1">+6.8% vs semaine dernière</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-cyan-500" />
                <span className="font-medium">Temps moyen</span>
              </div>
              <p className="text-2xl font-bold">2m 34s</p>
              <p className="text-xs text-green-600 mt-1">+15.2% vs semaine dernière</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
