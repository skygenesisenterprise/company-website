"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Pencil,
  Trash2,
  Eye,
  Copy,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { articlesApi } from "@/lib/api";

type ArticleStatus = "published" | "draft" | "review" | "archived";

interface ArticleDisplay {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  status: ArticleStatus;
  publishedAt: string | undefined;
  updatedAt: string;
  views: number;
  image: string;
}

const mockArticles: ArticleDisplay[] = [
  {
    id: "1",
    title: "Les nouvelles réformes économiques annoncées par le gouvernement",
    excerpt: "Le Premier ministre a dévoiler un plan ambitieux pour relancer l'économie...",
    category: "Politique",
    author: "Marie Dupont",
    status: "published",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    views: 15420,
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=100&h=60&fit=crop",
  },
  {
    id: "2",
    title: "Victoire historique de l'équipe nationale en finale du championnat",
    excerpt: "Une performance exceptionnelle qui restera dans les annales du sport français...",
    category: "Sport",
    author: "Thomas Martin",
    status: "published",
    publishedAt: "2026-03-24",
    updatedAt: "2026-03-24",
    views: 28750,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=100&h=60&fit=crop",
  },
  {
    id: "3",
    title: "La nouvelle exposition au Musée d'Art Moderne fait sensation",
    excerpt: "Plus de 10 000 visiteurs ont déjà découvert cette rétrospective unique...",
    category: "Culture",
    author: "Sophie Laurent",
    status: "draft",
    publishedAt: undefined,
    updatedAt: "2026-03-26",
    views: 0,
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=100&h=60&fit=crop",
  },
  {
    id: "4",
    title: "Tensions diplomatiques : les négociations reprennent à Genève",
    excerpt: "Après plusieurs semaines de blocage, les discussions ont enfin repris...",
    category: "International",
    author: "Pierre Moreau",
    status: "review",
    publishedAt: undefined,
    updatedAt: "2026-03-26",
    views: 0,
    image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=100&h=60&fit=crop",
  },
  {
    id: "5",
    title: "Innovation : une startup française révolutionne le secteur de l'énergie",
    excerpt: "Cette jeune pousse a développé une technologie de stockage révolutionnaire...",
    category: "Économie",
    author: "Julie Bernard",
    status: "published",
    publishedAt: "2026-03-23",
    updatedAt: "2026-03-23",
    views: 9840,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=100&h=60&fit=crop",
  },
  {
    id: "6",
    title: "Météo : vague de chaleur exceptionnelle attendue cette semaine",
    excerpt: "Les températures pourraient atteindre des records dans plusieurs régions...",
    category: "Société",
    author: "Marc Leroy",
    status: "published",
    publishedAt: "2026-03-22",
    updatedAt: "2026-03-22",
    views: 12300,
    image: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=100&h=60&fit=crop",
  },
  {
    id: "7",
    title: "Interview exclusive avec le nouveau directeur de la Banque Centrale",
    excerpt: "Il nous livre sa vision pour les années à venir et les défis à relever...",
    category: "Économie",
    author: "Marie Dupont",
    status: "draft",
    publishedAt: undefined,
    updatedAt: "2026-03-26",
    views: 0,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=60&fit=crop",
  },
  {
    id: "8",
    title: "Le festival de cinéma dévoiler sa sélection officielle",
    excerpt: "Cette année, 24 films seront en compétition pour la prestigieuse récompense...",
    category: "Culture",
    author: "Sophie Laurent",
    status: "archived",
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-20",
    views: 5200,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=100&h=60&fit=crop",
  },
];

const categories = [
  "Toutes",
  "Politique",
  "Économie",
  "International",
  "Culture",
  "Sport",
  "Société",
];
const statuses = [
  { value: "all", label: "Tous les statuts" },
  { value: "published", label: "Publié" },
  { value: "draft", label: "Brouillon" },
  { value: "review", label: "En révision" },
  { value: "archived", label: "Archivé" },
];

const statusConfig: Record<
  ArticleStatus,
  {
    label: string;
    variant: "default" | "secondary" | "outline" | "destructive";
    icon: typeof CheckCircle2;
  }
> = {
  published: { label: "Publié", variant: "default", icon: CheckCircle2 },
  draft: { label: "Brouillon", variant: "secondary", icon: FileText },
  review: { label: "En révision", variant: "outline", icon: Clock },
  archived: { label: "Archivé", variant: "destructive", icon: XCircle },
};

export default function ArticlesPage() {
  const [articles, setArticles] = useState<ArticleDisplay[]>(mockArticles);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedArticles, setSelectedArticles] = useState<string[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<ArticleDisplay | null>(null);
  const [newlyCreatedIds, setNewlyCreatedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadArticles();
  }, [selectedStatus, selectedCategory, newlyCreatedIds]);

  const isDev = process.env.NODE_ENV !== "production";

  async function loadArticles() {
    setIsLoading(true);
    try {
      const status = selectedStatus === "all" ? undefined : selectedStatus;
      const category = selectedCategory === "Toutes" ? undefined : selectedCategory;
      const response = await articlesApi.list({ status, category, pageSize: 50 });

      if (response.success && response.data && response.data.length > 0) {
        const mappedArticles = response.data.map((article) => ({
          id: article.id,
          title: article.title,
          excerpt: article.excerpt || "",
          category: article.categoryId || "Non catégorisé",
          author: article.authorId,
          status: article.status.toLowerCase() as ArticleStatus,
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
          views: article.viewCount,
          image: article.imageUrl || "",
        }));

        setArticles(mappedArticles);
      } else if (isDev) {
        setArticles(mockArticles);
      }
    } catch (error) {
      console.error("Failed to load articles:", error);
      if (isDev) {
        setArticles(mockArticles);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const handleFocus = () => {
      loadArticles();
    };
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [selectedStatus, selectedCategory]);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Toutes" || article.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || article.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const toggleSelectAll = () => {
    if (selectedArticles.length === filteredArticles.length) {
      setSelectedArticles([]);
    } else {
      setSelectedArticles(filteredArticles.map((a) => a.id));
    }
  };

  const toggleSelectArticle = (id: string) => {
    setSelectedArticles((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleDelete = (article: ArticleDisplay) => {
    setArticleToDelete(article);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (articleToDelete) {
      try {
        await articlesApi.delete(articleToDelete.id);
        setArticles((prev) => prev.filter((a) => a.id !== articleToDelete.id));
        setSelectedArticles((prev) => prev.filter((id) => id !== articleToDelete.id));
      } catch (error) {
        console.error("Failed to delete article:", error);
      }
    }
    setDeleteDialogOpen(false);
    setArticleToDelete(null);
  };

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Articles</h1>
          <p className="text-sm text-muted-foreground">Gérez et publiez vos articles</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/articles/new">
            <Plus className="mr-2 h-4 w-4" />
            Nouvel article
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher un article..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-40">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Catégorie" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Statut" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {selectedArticles.length > 0 && (
        <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-3">
          <span className="text-sm text-muted-foreground">
            {selectedArticles.length} article{selectedArticles.length > 1 ? "s" : ""} sélectionné
            {selectedArticles.length > 1 ? "s" : ""}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Publier
            </Button>
            <Button variant="outline" size="sm">
              Archiver
            </Button>
            <Button variant="destructive" size="sm">
              Supprimer
            </Button>
          </div>
        </div>
      )}

      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={
                    selectedArticles.length === filteredArticles.length &&
                    filteredArticles.length > 0
                  }
                  onCheckedChange={toggleSelectAll}
                  aria-label="Sélectionner tout"
                />
              </TableHead>
              <TableHead className="min-w-75">
                <Button variant="ghost" size="sm" className="-ml-3 h-8 data-[state=open]:bg-accent">
                  Article
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Catégorie</TableHead>
              <TableHead>Auteur</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="-ml-3 h-8 data-[state=open]:bg-accent">
                  Date
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">Vues</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
                </TableCell>
              </TableRow>
            ) : filteredArticles.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <p className="text-muted-foreground">Aucun article trouvé</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredArticles.map((article) => {
                const StatusIcon = statusConfig[article.status].icon;
                return (
                  <TableRow key={article.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedArticles.includes(article.id)}
                        onCheckedChange={() => toggleSelectArticle(article.id)}
                        aria-label={`Sélectionner ${article.title}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        {article.image && (
                          <div className="relative h-10 w-16 shrink-0 overflow-hidden rounded">
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="truncate font-medium text-foreground">{article.title}</p>
                          <p className="truncate text-xs text-muted-foreground">
                            {article.excerpt}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-normal">
                        {article.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {article.author}
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusConfig[article.status].variant} className="gap-1">
                        <StatusIcon className="h-3 w-3" />
                        {statusConfig[article.status].label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {formatDate(article.publishedAt || article.updatedAt)}
                    </TableCell>
                    <TableCell className="text-right text-sm font-medium">
                      {formatViews(article.views)}
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
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/articles/${article.id}/edit`}>
                              <Pencil className="mr-2 h-4 w-4" />
                              Modifier
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/articles/${article.id}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              Voir
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Dupliquer
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() => handleDelete(article)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          <p className="text-sm text-muted-foreground">
            {filteredArticles.length} article{filteredArticles.length > 1 ? "s" : ""} sur{" "}
            {articles.length}
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4" />
              Précédent
            </Button>
            <Button variant="outline" size="sm" disabled>
              Suivant
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer l&apos;article</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer l&apos;article &quot;{articleToDelete?.title}&quot;
              ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
