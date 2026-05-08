/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/articles
 * Layer: Dashboard Page
 * Purpose: Manage the global editorial library for SGE publications.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */

"use client";

import * as React from "react";
import Link from "next/link";
import { Archive, CalendarDays, Copy, Eye, FileText, MoreHorizontal, Pencil, Plus, Search, Send, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { articlesApi } from "@/lib/api";

import {
  articleCategories,
  articleTypes,
  editorialArticles,
  formatDate,
  statusLabels,
  type ArticleStatus,
} from "./_data";

const statusOptions: Array<{ value: ArticleStatus | "all"; label: string }> = [
  { value: "all", label: "Tous les statuts" },
  { value: "draft", label: "Brouillon" },
  { value: "writing", label: "En rédaction" },
  { value: "review", label: "En révision" },
  { value: "scheduled", label: "Planifié" },
  { value: "published", label: "Publié" },
  { value: "archived", label: "Archivé" },
];

const summaryCards = [
  { label: "Tous", value: editorialArticles.length },
  { label: "Brouillons", value: editorialArticles.filter((article) => article.status === "draft").length },
  { label: "En révision", value: editorialArticles.filter((article) => article.status === "review").length },
  { label: "Planifiés", value: editorialArticles.filter((article) => article.status === "scheduled").length },
  { label: "Publiés", value: editorialArticles.filter((article) => article.status === "published").length },
];

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [selectedStatus, setSelectedStatus] = React.useState<ArticleStatus | "all">("all");
  const [selectedType, setSelectedType] = React.useState("all");
  const [selectedArticles, setSelectedArticles] = React.useState<string[]>([]);

  React.useEffect(() => {
    void articlesApi.list({ pageSize: 50 });
  }, []);

  const filteredArticles = editorialArticles.filter((article) => {
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      article.title.toLowerCase().includes(query) || article.team.toLowerCase().includes(query);
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || article.status === selectedStatus;
    const matchesType = selectedType === "all" || article.type === selectedType;

    return matchesQuery && matchesCategory && matchesStatus && matchesType;
  });

  const allVisibleSelected =
    filteredArticles.length > 0 && filteredArticles.every((article) => selectedArticles.includes(article.id));

  const toggleArticle = (articleId: string) => {
    setSelectedArticles((current) =>
      current.includes(articleId) ? current.filter((id) => id !== articleId) : [...current, articleId],
    );
  };

  const toggleVisibleArticles = () => {
    setSelectedArticles(allVisibleSelected ? [] : filteredArticles.map((article) => article.id));
  };

  return (
    <div className="space-y-6 bg-background p-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Articles</h1>
          <p className="text-sm text-muted-foreground">
            Gérez les publications du SGE Journal, les annonces produit et les notes techniques.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="rounded-2xl border-border/50" asChild>
            <Link href="/dashboard/editorial-calendar">
              <CalendarDays className="size-4" />
              Calendrier éditorial
            </Link>
          </Button>
          <Button className="rounded-2xl" asChild>
            <Link href="/dashboard/articles/new">
              <Plus className="size-4" />
              Nouvel article
            </Link>
          </Button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-5">
        {summaryCards.map((card) => (
          <Card key={card.label} className="rounded-2xl border-border/50 bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{card.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card className="rounded-2xl border-border/50 bg-card">
        <CardContent className="space-y-4">
          <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Rechercher par titre ou équipe"
                className="rounded-2xl pl-9"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full rounded-2xl">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
                {articleCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={(value) => setSelectedStatus(value as ArticleStatus | "all")}>
              <SelectTrigger className="w-full rounded-2xl">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full rounded-2xl">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                {articleTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border/50 bg-muted/20 p-3">
            <span className="text-sm text-muted-foreground">{selectedArticles.length} sélectionné(s)</span>
            <Button variant="outline" size="sm" className="rounded-2xl">
              <Send className="size-4" />
              Publier
            </Button>
            <Button variant="outline" size="sm" className="rounded-2xl">
              <CalendarDays className="size-4" />
              Planifier
            </Button>
            <Button variant="outline" size="sm" className="rounded-2xl">
              <Archive className="size-4" />
              Archiver
            </Button>
            <Button variant="outline" size="sm" className="rounded-2xl text-destructive">
              <Trash2 className="size-4" />
              Supprimer
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/50">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead className="w-12">
                    <Checkbox
                      checked={allVisibleSelected}
                      onCheckedChange={toggleVisibleArticles}
                      aria-label="Sélectionner les articles visibles"
                    />
                  </TableHead>
                  <TableHead>Article</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Équipe</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Mise à jour</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead className="w-12">
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredArticles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedArticles.includes(article.id)}
                        onCheckedChange={() => toggleArticle(article.id)}
                        aria-label={`Sélectionner ${article.title}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="max-w-sm space-y-1">
                        <div className="font-medium">{article.title}</div>
                        <div className="line-clamp-1 text-xs text-muted-foreground">{article.excerpt}</div>
                      </div>
                    </TableCell>
                    <TableCell>{article.type}</TableCell>
                    <TableCell>{article.category}</TableCell>
                    <TableCell>{article.team}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="rounded-2xl">
                        {statusLabels[article.status]}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(article.updatedAt)}</TableCell>
                    <TableCell>
                      <span className="text-sm">{article.performance.views.toLocaleString("fr-FR")} vues</span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="rounded-2xl">
                            <MoreHorizontal className="size-4" />
                            <span className="sr-only">Ouvrir les actions de l'article</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/articles/${article.id}`}>
                              <Eye className="size-4" />
                              Voir
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/articles/${article.id}/edit`}>
                              <Pencil className="size-4" />
                              Modifier
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="size-4" />
                            Dupliquer
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Archive className="size-4" />
                            Archiver
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive focus:text-destructive">
                            <Trash2 className="size-4" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredArticles.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} className="h-32 text-center text-muted-foreground">
                      Aucun contenu ne correspond aux filtres.
                    </TableCell>
                  </TableRow>
                ) : null}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
