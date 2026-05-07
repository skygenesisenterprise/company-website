"use client";

import { useState } from "react";
import {
  Clock,
  Search,
  MoreHorizontal,
  Plus,
  Pencil,
  Trash2,
  Calendar,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ScheduledPost {
  id: string;
  content: string;
  platform: "twitter" | "facebook" | "instagram" | "linkedin";
  scheduledAt: string;
  status: "scheduled" | "published" | "cancelled" | "failed";
  articleId?: string;
  articleTitle?: string;
  mediaCount: number;
  recurring: boolean;
  recurringPattern?: "daily" | "weekly" | "monthly";
}

const mockScheduledPosts: ScheduledPost[] = [
  {
    id: "1",
    content:
      "Les technologies de 2026 révolutionnent notre quotidien. Découvrez notre analyse complète.",
    platform: "twitter",
    scheduledAt: "2026-03-28T09:00:00Z",
    status: "scheduled",
    articleId: "42",
    articleTitle: "Les nouvelles technologies de 2026",
    mediaCount: 1,
    recurring: false,
  },
  {
    id: "2",
    content: "Résumé de l'actualité de la semaine",
    platform: "facebook",
    scheduledAt: "2026-03-28T10:00:00Z",
    status: "scheduled",
    articleId: "41",
    articleTitle: "Actualité de la semaine",
    mediaCount: 3,
    recurring: true,
    recurringPattern: "weekly",
  },
  {
    id: "3",
    content: "Photo du jour: Lever de soleil sur Paris",
    platform: "instagram",
    scheduledAt: "2026-03-28T08:00:00Z",
    status: "scheduled",
    mediaCount: 1,
    recurring: false,
  },
  {
    id: "4",
    content: " Notre entreprise recrute! Rejoignez notre équipe dynamique.",
    platform: "linkedin",
    scheduledAt: "2026-03-29T14:00:00Z",
    status: "scheduled",
    mediaCount: 2,
    recurring: false,
  },
  {
    id: "5",
    content: "Les marchés financiers clôture en hausse",
    platform: "twitter",
    scheduledAt: "2026-03-27T18:00:00Z",
    status: "published",
    articleId: "40",
    articleTitle: "Marchés financiers",
    mediaCount: 0,
    recurring: true,
    recurringPattern: "daily",
  },
  {
    id: "6",
    content: "Breaking: Nouvelle découverte scientifique",
    platform: "facebook",
    scheduledAt: "2026-03-27T12:00:00Z",
    status: "cancelled",
    mediaCount: 1,
    recurring: false,
  },
  {
    id: "7",
    content: "Interview exclusive à venir",
    platform: "twitter",
    scheduledAt: "2026-03-30T15:00:00Z",
    status: "scheduled",
    articleId: "43",
    articleTitle: "Interview: Projets 2026",
    mediaCount: 0,
    recurring: false,
  },
  {
    id: "8",
    content: "Conseils pour améliorer votre productivité",
    platform: "linkedin",
    scheduledAt: "2026-03-31T09:00:00Z",
    status: "scheduled",
    mediaCount: 1,
    recurring: true,
    recurringPattern: "weekly",
  },
  {
    id: "9",
    content: "Événement: Conference annuelle 2026",
    platform: "instagram",
    scheduledAt: "2026-04-01T10:00:00Z",
    status: "scheduled",
    mediaCount: 4,
    recurring: false,
  },
  {
    id: "10",
    content: "Le mot du jour: Innovation",
    platform: "twitter",
    scheduledAt: "2026-04-02T08:00:00Z",
    status: "scheduled",
    mediaCount: 1,
    recurring: true,
    recurringPattern: "daily",
  },
];

const platformConfig = {
  twitter: {
    label: "Twitter/X",
    color: "bg-black text-white",
    bgColor: "bg-black/5",
    textColor: "text-black",
  },
  facebook: {
    label: "Facebook",
    color: "bg-blue-600 text-white",
    bgColor: "bg-blue-600/10",
    textColor: "text-blue-600",
  },
  instagram: {
    label: "Instagram",
    color: "bg-gradient-to-r from-purple-600 to-pink-500 text-white",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-600",
  },
  linkedin: {
    label: "LinkedIn",
    color: "bg-blue-700 text-white",
    bgColor: "bg-blue-700/10",
    textColor: "text-blue-700",
  },
};

const statusConfig = {
  scheduled: { label: "Planifié", color: "bg-blue-100 text-blue-800" },
  published: { label: "Publié", color: "bg-green-100 text-green-800" },
  cancelled: { label: "Annulé", color: "bg-gray-100 text-gray-800" },
  failed: { label: "Échoué", color: "bg-red-100 text-red-800" },
};

const recurringConfig = {
  daily: { label: "Quotidien", color: "text-orange-500" },
  weekly: { label: "Hebdomadaire", color: "text-purple-500" },
  monthly: { label: "Mensuel", color: "text-blue-500" },
};

const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

export default function SchedulingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [platformFilter, setPlatformFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>(mockScheduledPosts);
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 27));
  const [calendarView, setCalendarView] = useState<"month" | "week">("month");
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<ScheduledPost | null>(null);
  const [newPostPlatform, setNewPostPlatform] = useState<string>("twitter");
  const [newPostDate, setNewPostDate] = useState("");
  const [newPostTime, setNewPostTime] = useState("");
  const [newPostRecurring, setNewPostRecurring] = useState(false);

  const filteredPosts = scheduledPosts.filter((post) => {
    const matchesSearch =
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.articleTitle && post.articleTitle.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesPlatform = platformFilter === "all" || post.platform === platformFilter;
    const matchesStatus = statusFilter === "all" || post.status === statusFilter;
    return matchesSearch && matchesPlatform && matchesStatus;
  });

  const stats = {
    total: scheduledPosts.length,
    scheduled: scheduledPosts.filter((p) => p.status === "scheduled").length,
    published: scheduledPosts.filter((p) => p.status === "published").length,
    cancelled: scheduledPosts.filter((p) => p.status === "cancelled").length,
    recurring: scheduledPosts.filter((p) => p.recurring).length,
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
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${day} ${month} ${year}, ${hours}:${minutes}`;
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    return { daysInMonth, startingDay };
  };

  const getPostsForDay = (day: number) => {
    return scheduledPosts.filter((post) => {
      const postDate = new Date(post.scheduledAt);
      return (
        postDate.getDate() === day &&
        postDate.getMonth() === currentDate.getMonth() &&
        postDate.getFullYear() === currentDate.getFullYear() &&
        post.status === "scheduled"
      );
    });
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const handleCancel = (post: ScheduledPost) => {
    setScheduledPosts((prev) =>
      prev.map((p) => (p.id === post.id ? { ...p, status: "cancelled" as const } : p))
    );
  };

  const handlePublish = (post: ScheduledPost) => {
    setScheduledPosts((prev) =>
      prev.map((p) =>
        p.id === post.id
          ? { ...p, status: "published" as const, publishedAt: new Date().toISOString() }
          : p
      )
    );
  };

  const handleDelete = (post: ScheduledPost) => {
    setPostToDelete(post);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (postToDelete) {
      setScheduledPosts((prev) => prev.filter((p) => p.id !== postToDelete.id));
    }
    setDeleteDialogOpen(false);
    setPostToDelete(null);
  };

  const handleCreate = () => {
    if (!newPostDate || !newPostTime) return;

    const scheduledAt = new Date(`${newPostDate}T${newPostTime}:00Z`).toISOString();

    const newPost: ScheduledPost = {
      id: Date.now().toString(),
      content: "Nouveau post programmé",
      platform: newPostPlatform as ScheduledPost["platform"],
      scheduledAt,
      status: "scheduled",
      mediaCount: 0,
      recurring: newPostRecurring,
      recurringPattern: newPostRecurring ? "weekly" : undefined,
    };

    setScheduledPosts((prev) => [newPost, ...prev]);
    setCreateDialogOpen(false);
    setNewPostDate("");
    setNewPostTime("");
    setNewPostRecurring(false);
    setNewPostPlatform("twitter");
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentDate);
  const calendarDays = [];

  for (let i = 0; i < startingDay; i++) {
    calendarDays.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Planification</h1>
          <p className="text-sm text-muted-foreground">
            Planifiez vos publications sur les réseaux sociaux
          </p>
        </div>
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle planification
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="text-2xl font-bold">{stats.total}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <Clock className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Planifiés</p>
              <p className="text-2xl font-bold">{stats.scheduled}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Publiés</p>
              <p className="text-2xl font-bold">{stats.published}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500/10">
              <XCircle className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Annulés</p>
              <p className="text-2xl font-bold">{stats.cancelled}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10">
              <RefreshCw className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Récurrents</p>
              <p className="text-2xl font-bold">{stats.recurring}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <CardTitle className="text-base">Calendrier</CardTitle>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => navigateMonth("prev")}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium min-w-28 text-center">
                  {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => navigateMonth("next")}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 text-center">
              {daysOfWeek.map((day) => (
                <div key={day} className="p-2 text-xs font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
              {calendarDays.map((day, index) => {
                const posts = day ? getPostsForDay(day) : [];
                const isToday =
                  day === currentDate.getDate() && currentDate.getMonth() === new Date().getTime();
                return (
                  <div
                    key={index}
                    className={`min-h-16 p-1 border rounded-lg ${
                      day ? "bg-card" : "bg-muted/30"
                    } ${isToday ? "border-primary" : ""}`}
                  >
                    {day && (
                      <>
                        <div
                          className={`text-xs font-medium ${
                            isToday ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {day}
                        </div>
                        <div className="space-y-1 mt-1">
                          {posts.slice(0, 2).map((post) => (
                            <div
                              key={post.id}
                              className={`text-xs p-0.5 rounded truncate ${platformConfig[post.platform].bgColor}`}
                            >
                              <span className={platformConfig[post.platform].textColor}>
                                {post.platform === "twitter" && "X"}
                                {post.platform === "facebook" && "FB"}
                                {post.platform === "instagram" && "IG"}
                                {post.platform === "linkedin" && "IN"}
                              </span>
                            </div>
                          ))}
                          {posts.length > 2 && (
                            <div className="text-xs text-muted-foreground">+{posts.length - 2}</div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <CardTitle className="text-base">Publications à venir</CardTitle>
            </div>
            <CardDescription>Liste des publications planifiées</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={platformFilter} onValueChange={setPlatformFilter}>
                <SelectTrigger className="w-full sm:w-36">
                  <SelectValue placeholder="Plateforme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes</SelectItem>
                  <SelectItem value="twitter">Twitter/X</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-32">
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous</SelectItem>
                  <SelectItem value="scheduled">Planifié</SelectItem>
                  <SelectItem value="published">Publié</SelectItem>
                  <SelectItem value="cancelled">Annulé</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border bg-card max-h-96 overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Plateforme</TableHead>
                    <TableHead>Contenu</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPosts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="h-24 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Clock className="h-8 w-8 text-muted-foreground" />
                          <p className="text-muted-foreground">Aucune publication trouvée</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredPosts.slice(0, 10).map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="whitespace-nowrap">
                          <span className="text-muted-foreground">
                            {formatDateTime(post.scheduledAt)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge className={platformConfig[post.platform].color}>
                            {platformConfig[post.platform].label}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="max-w-xs">
                            <p className="truncate text-sm">{post.content}</p>
                            {post.recurring && post.recurringPattern && (
                              <p className="text-xs text-muted-foreground">
                                <RefreshCw className="h-3 w-3 inline mr-1" />
                                {recurringConfig[post.recurringPattern].label}
                              </p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={statusConfig[post.status].color}>
                            {statusConfig[post.status].label}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {post.status === "scheduled" && (
                                <>
                                  <DropdownMenuItem onClick={() => handlePublish(post)}>
                                    <CheckCircle className="mr-2 h-4 w-4" />
                                    Publier maintenant
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleCancel(post)}>
                                    <XCircle className="mr-2 h-4 w-4" />
                                    Annuler
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                </>
                              )}
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Modifier
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="text-destructive focus:text-destructive"
                                onClick={() => handleDelete(post)}
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Supprimer
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nouvelle planification</DialogTitle>
            <DialogDescription>Planifiez une nouvelle publication</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Plateforme</Label>
              <Select value={newPostPlatform} onValueChange={setNewPostPlatform}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="twitter">Twitter/X</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="postDate">Date</Label>
                <Input
                  id="postDate"
                  type="date"
                  value={newPostDate}
                  onChange={(e) => setNewPostDate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postTime">Heure</Label>
                <Input
                  id="postTime"
                  type="time"
                  value={newPostTime}
                  onChange={(e) => setNewPostTime(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Contenu</Label>
              <Input placeholder="Écrivez votre publication..." />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Publication récurrente</Label>
                <p className="text-xs text-muted-foreground">
                  Cette publication se réptera automatiquement
                </p>
              </div>
              <Switch checked={newPostRecurring} onCheckedChange={setNewPostRecurring} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleCreate} disabled={!newPostDate || !newPostTime}>
              <Calendar className="mr-2 h-4 w-4" />
              Planifier
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la planification</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer cette publication planifiée ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
