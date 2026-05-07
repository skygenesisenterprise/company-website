"use client";

import { useState } from "react";
import {
  Share2,
  Search,
  MoreHorizontal,
  Plus,
  Pencil,
  Trash2,
  Eye,
  Send,
  Clock,
  Heart,
  MessageCircle,
  Repeat,
  BarChart3,
  Image,
  Link2,
  Calendar,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

interface Publication {
  id: string;
  content: string;
  platform: "twitter" | "facebook" | "instagram" | "linkedin";
  status: "draft" | "scheduled" | "published" | "failed";
  scheduledAt?: string;
  publishedAt?: string;
  articleId?: string;
  articleTitle?: string;
  likes: number;
  comments: number;
  shares: number;
  reach?: number;
}

const mockPublications: Publication[] = [
  {
    id: "1",
    content:
      "Les technologies de 2026 révolutionnent notre quotidien. Découvrez notre analyse complète sur les tendances qui moldent l'avenir.",
    platform: "twitter",
    status: "published",
    publishedAt: "2026-03-27T10:00:00Z",
    articleId: "42",
    articleTitle: "Les nouvelles technologies de 2026",
    likes: 245,
    comments: 32,
    shares: 89,
    reach: 12500,
  },
  {
    id: "2",
    content: "Élections 2026: tous les résultats et analyses",
    platform: "facebook",
    status: "published",
    publishedAt: "2026-03-27T08:30:00Z",
    articleId: "41",
    articleTitle: "Élections 2026: les résultats",
    likes: 892,
    comments: 156,
    shares: 234,
    reach: 45000,
  },
  {
    id: "3",
    content: "Interview exclusive: Le PDG d'Etheria Times révèle les projets pour 2026",
    platform: "linkedin",
    status: "scheduled",
    scheduledAt: "2026-03-28T14:00:00Z",
    articleId: "43",
    articleTitle: "Interview: Projets 2026",
    likes: 0,
    comments: 0,
    shares: 0,
  },
  {
    id: "4",
    content: "Les meilleures photos de la semaine",
    platform: "instagram",
    status: "draft",
    likes: 0,
    comments: 0,
    shares: 0,
  },
  {
    id: "5",
    content: "Cryptomonnaies: le Bitcoin atteint un nouveau record historique",
    platform: "twitter",
    status: "published",
    publishedAt: "2026-03-26T15:00:00Z",
    articleId: "40",
    articleTitle: "Bitcoin: record historique",
    likes: 567,
    comments: 89,
    shares: 234,
    reach: 28000,
  },
  {
    id: "6",
    content: "Climate summit: les décisions importantes",
    platform: "facebook",
    status: "failed",
    scheduledAt: "2026-03-26T12:00:00Z",
    likes: 0,
    comments: 0,
    shares: 0,
  },
  {
    id: "7",
    content: "Top 10 des startups françaises à surveiller",
    platform: "linkedin",
    status: "published",
    publishedAt: "2026-03-25T09:00:00Z",
    articleId: "38",
    articleTitle: "Startups françaises 2026",
    likes: 1234,
    comments: 67,
    shares: 456,
    reach: 67000,
  },
  {
    id: "8",
    content: "Breaking: Nouvelle découverte scientifique majeure",
    platform: "twitter",
    status: "published",
    publishedAt: "2026-03-27T11:30:00Z",
    likes: 892,
    comments: 145,
    shares: 567,
    reach: 89000,
  },
];

const platformConfig = {
  twitter: { label: "Twitter/X", color: "bg-black text-white", icon: Share2 },
  facebook: { label: "Facebook", color: "bg-blue-600 text-white", icon: Share2 },
  instagram: {
    label: "Instagram",
    color: "bg-gradient-to-r from-purple-600 to-pink-500 text-white",
    icon: Share2,
  },
  linkedin: { label: "LinkedIn", color: "bg-blue-700 text-white", icon: Share2 },
};

const statusConfig = {
  draft: { label: "Brouillon", color: "bg-gray-100 text-gray-800" },
  scheduled: { label: "Planifié", color: "bg-yellow-100 text-yellow-800" },
  published: { label: "Publié", color: "bg-green-100 text-green-800" },
  failed: { label: "Échoué", color: "bg-red-100 text-red-800" },
};

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [platformFilter, setPlatformFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedPublications, setSelectedPublications] = useState<string[]>([]);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [publicationToDelete, setPublicationToDelete] = useState<Publication | null>(null);
  const [publications] = useState<Publication[]>(mockPublications);

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pub.articleTitle && pub.articleTitle.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesPlatform = platformFilter === "all" || pub.platform === platformFilter;
    const matchesStatus = statusFilter === "all" || pub.status === statusFilter;
    return matchesSearch && matchesPlatform && matchesStatus;
  });

  const stats = {
    total: publications.length,
    published: publications.filter((p) => p.status === "published").length,
    scheduled: publications.filter((p) => p.status === "scheduled").length,
    draft: publications.filter((p) => p.status === "draft").length,
    totalLikes: publications.reduce((acc, p) => acc + p.likes, 0),
    totalReach: publications.reduce((acc, p) => acc + (p.reach || 0), 0),
  };

  const formatDateTime = (dateString?: string) => {
    if (!dateString) return "-";
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

  const toggleSelectAll = () => {
    if (selectedPublications.length === filteredPublications.length) {
      setSelectedPublications([]);
    } else {
      setSelectedPublications(filteredPublications.map((p) => p.id));
    }
  };

  const toggleSelectPublication = (id: string) => {
    setSelectedPublications((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleDelete = (pub: Publication) => {
    setPublicationToDelete(pub);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    setDeleteDialogOpen(false);
    setPublicationToDelete(null);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Publications</h1>
          <p className="text-sm text-muted-foreground">
            Gérez vos publications sur les réseaux sociaux
          </p>
        </div>
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle publication
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Share2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="text-2xl font-bold">{stats.total}</p>
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
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10">
              <Clock className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Planifiés</p>
              <p className="text-2xl font-bold">{stats.scheduled}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <BarChart3 className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Portée totale</p>
              <p className="text-2xl font-bold">{stats.totalReach.toLocaleString("fr-FR")}</p>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            <CardTitle className="text-base">Historique des publications</CardTitle>
          </div>
          <CardDescription>Toutes vos publications sur les réseaux sociaux</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher une publication..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={platformFilter} onValueChange={setPlatformFilter}>
              <SelectTrigger className="w-full sm:w-40">
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
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="draft">Brouillon</SelectItem>
                <SelectItem value="scheduled">Planifié</SelectItem>
                <SelectItem value="published">Publié</SelectItem>
                <SelectItem value="failed">Échoué</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {selectedPublications.length > 0 && (
            <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-3">
              <span className="text-sm text-muted-foreground">
                {selectedPublications.length} publication
                {selectedPublications.length > 1 ? "s" : ""} sélectionnée
                {selectedPublications.length > 1 ? "s" : ""}
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Send className="mr-2 h-4 w-4" />
                  Publier
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Supprimer
                </Button>
              </div>
            </div>
          )}

          <div className="rounded-md border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={
                        selectedPublications.length === filteredPublications.length &&
                        filteredPublications.length > 0
                      }
                      onCheckedChange={toggleSelectAll}
                      aria-label="Sélectionner tout"
                    />
                  </TableHead>
                  <TableHead>Contenu</TableHead>
                  <TableHead>Plateforme</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Statistiques</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPublications.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Share2 className="h-8 w-8 text-muted-foreground" />
                        <p className="text-muted-foreground">Aucune publication trouvée</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredPublications.map((pub) => (
                    <TableRow key={pub.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedPublications.includes(pub.id)}
                          onCheckedChange={() => toggleSelectPublication(pub.id)}
                          aria-label={`Sélectionner ${pub.id}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="max-w-md">
                          <p className="truncate font-medium">{pub.content}</p>
                          {pub.articleTitle && (
                            <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                              <Link2 className="h-3 w-3" />
                              <span>{pub.articleTitle}</span>
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={platformConfig[pub.platform].color}>
                          {platformConfig[pub.platform].label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={statusConfig[pub.status].color}>
                          {statusConfig[pub.status].label}
                        </Badge>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <span className="text-muted-foreground">
                          {pub.status === "published"
                            ? formatDateTime(pub.publishedAt)
                            : pub.status === "scheduled"
                              ? formatDateTime(pub.scheduledAt)
                              : "-"}
                        </span>
                      </TableCell>
                      <TableCell>
                        {pub.status === "published" ? (
                          <div className="flex items-center gap-3 text-xs">
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3 text-pink-500" />
                              {pub.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3 text-blue-500" />
                              {pub.comments}
                            </span>
                            <span className="flex items-center gap-1">
                              <Repeat className="h-3 w-3 text-green-500" />
                              {pub.shares}
                            </span>
                            {pub.reach && (
                              <span className="flex items-center gap-1">
                                <BarChart3 className="h-3 w-3 text-purple-500" />
                                {pub.reach.toLocaleString("fr-FR")}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
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
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Voir
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Pencil className="mr-2 h-4 w-4" />
                              Modifier
                            </DropdownMenuItem>
                            {pub.status === "draft" && (
                              <DropdownMenuItem>
                                <Send className="mr-2 h-4 w-4" />
                                Publier
                              </DropdownMenuItem>
                            )}
                            {pub.status === "scheduled" && (
                              <DropdownMenuItem>
                                <Calendar className="mr-2 h-4 w-4" />
                                Reprogrammer
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-destructive focus:text-destructive"
                              onClick={() => handleDelete(pub)}
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

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{filteredPublications.length} publications</span>
          </div>
        </CardContent>
      </Card>

      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Nouvelle publication</DialogTitle>
            <DialogDescription>
              Créez une nouvelle publication pour les réseaux sociaux
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Plateforme(s)</Label>
              <div className="flex gap-2">
                {Object.entries(platformConfig).map(([key, config]) => (
                  <Button key={key} variant="outline" size="sm" className={config.color}>
                    {config.label}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Contenu</Label>
              <Textarea id="content" placeholder="Écrivez votre publication..." rows={4} />
              <p className="text-xs text-muted-foreground">
                280 caractères recommandés pour Twitter
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Associer à un article</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un article" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="42">Les nouvelles technologies de 2026</SelectItem>
                    <SelectItem value="41">Élections 2026: les résultats</SelectItem>
                    <SelectItem value="40">Bitcoin: record historique</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Statut</Label>
                <Select defaultValue="draft">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Brouillon</SelectItem>
                    <SelectItem value="scheduled">Planifier</SelectItem>
                    <SelectItem value="publish">Publier maintenant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Médias</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                <Image className="h-8 w-8 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground mt-2">
                  Glissez une image ou cliquez pour parcourir
                </p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
              Annuler
            </Button>
            <Button>
              <Send className="mr-2 h-4 w-4" />
              Créer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la publication</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer cette publication ? Cette action est irréversible.
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
