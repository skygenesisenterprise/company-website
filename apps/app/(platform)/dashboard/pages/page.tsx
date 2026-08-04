"use client";

import * as React from "react";
import Link from "next/link";
import { Archive, Eye, FileText, Globe2, MoreHorizontal, Pencil, Plus, Send, Trash2 } from "lucide-react";

import {
  DashboardCardGrid,
  DashboardEmptyState,
  DashboardErrorState,
  DashboardLoadingRows,
  DashboardPageHeader,
  DashboardResourceCard,
  DashboardSearch,
  DashboardTableFrame,
  DashboardToolbar,
} from "@/components/dashboard/cms-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { articlesApi } from "@/lib/api";
import type { Article, ArticleStatus } from "@/lib/api/types";

type PageStatus = "draft" | "published" | "archived";

interface EditorialPage {
  id: string;
  title: string;
  path: string;
  slug: string;
  status: PageStatus;
  language: string;
  section: string;
  updatedAt: string;
}

const fallbackPages: EditorialPage[] = [
  {
    id: "home",
    title: "Accueil",
    path: "/",
    slug: "accueil",
    status: "published",
    language: "FR",
    section: "Institutionnel",
    updatedAt: "2026-04-24",
  },
  {
    id: "trust",
    title: "Centre de confiance",
    path: "/trust-center",
    slug: "trust-center",
    status: "published",
    language: "FR",
    section: "Confiance et sécurité",
    updatedAt: "2026-04-19",
  },
  {
    id: "partners",
    title: "Programme partenaires",
    path: "/partners",
    slug: "partners",
    status: "draft",
    language: "FR",
    section: "Programme partenaires",
    updatedAt: "2026-04-12",
  },
  {
    id: "legacy-status",
    title: "Ancienne page statut",
    path: "/status-old",
    slug: "status-old",
    status: "archived",
    language: "FR",
    section: "Archives publiques",
    updatedAt: "2026-03-22",
  },
];

const statusLabels: Record<PageStatus, string> = {
  draft: "Brouillon",
  published: "Publié",
  archived: "Archivé",
};

const statusClasses: Record<PageStatus, string> = {
  published: "border-emerald-200 bg-emerald-50 text-emerald-700",
  draft: "border-slate-200 bg-slate-50 text-slate-700",
  archived: "border-zinc-200 bg-zinc-50 text-zinc-600",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

function normalizeStatus(status: ArticleStatus): PageStatus {
  if (status === "PUBLISHED") return "published";
  if (status === "ARCHIVED") return "archived";
  return "draft";
}

function articleToPage(article: Article): EditorialPage {
  return {
    id: article.id,
    title: article.title,
    path: `/${article.slug}`,
    slug: article.slug,
    status: normalizeStatus(article.status),
    language: "FR",
    section: article.categoryId || "Contenu éditorial",
    updatedAt: article.updatedAt || article.createdAt,
  };
}

function sortByEditorialPriority(a: EditorialPage, b: EditorialPage) {
  const order: Record<PageStatus, number> = { published: 0, draft: 1, archived: 2 };
  return order[a.status] - order[b.status] || new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
}

export default function PagesPage() {
  const [pages, setPages] = React.useState<EditorialPage[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState<PageStatus | "all">("all");

  const loadPages = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await articlesApi.list({ pageSize: 50 });
      setPages(response.success && response.data ? response.data.map(articleToPage) : []);
    } catch {
      setPages(fallbackPages);
      setError("Les contenus API ne sont pas accessibles. Une vue éditoriale de démonstration est affichée.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    void loadPages();
  }, [loadPages]);

  const filteredPages = pages
    .filter((page) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        page.title.toLowerCase().includes(query) ||
        page.slug.toLowerCase().includes(query) ||
        page.path.toLowerCase().includes(query);
      const matchesStatus = selectedStatus === "all" || page.status === selectedStatus;
      return matchesSearch && matchesStatus;
    })
    .sort(sortByEditorialPriority);

  const counts = {
    published: pages.filter((page) => page.status === "published").length,
    draft: pages.filter((page) => page.status === "draft").length,
    archived: pages.filter((page) => page.status === "archived").length,
  };

  const primaryAction = (
    <Button>
      <Plus className="size-4" />
      Créer une page
    </Button>
  );

  return (
    <div className="space-y-6 bg-background p-4 sm:p-6">
      <DashboardPageHeader
        title="Pages"
        description="Gérez les pages publiées, brouillons et contenus à préparer."
        action={primaryAction}
      />

      {error ? <DashboardErrorState message={error} onRetry={loadPages} /> : null}

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-border/70 bg-card p-4">
          <p className="text-sm text-muted-foreground">Publiées</p>
          <p className="mt-1 text-2xl font-semibold">{counts.published}</p>
        </div>
        <div className="rounded-lg border border-border/70 bg-card p-4">
          <p className="text-sm text-muted-foreground">Brouillons</p>
          <p className="mt-1 text-2xl font-semibold">{counts.draft}</p>
        </div>
        <div className="rounded-lg border border-border/70 bg-card p-4">
          <p className="text-sm text-muted-foreground">Archivées</p>
          <p className="mt-1 text-2xl font-semibold">{counts.archived}</p>
        </div>
      </div>

      <DashboardToolbar>
        <DashboardSearch value={searchQuery} onChange={setSearchQuery} placeholder="Rechercher par titre, slug ou chemin" />
        <Select value={selectedStatus} onValueChange={(value) => setSelectedStatus(value as PageStatus | "all")}>
          <SelectTrigger className="w-full md:w-45">
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="published">Publiées</SelectItem>
            <SelectItem value="draft">Brouillons</SelectItem>
            <SelectItem value="archived">Archivées</SelectItem>
          </SelectContent>
        </Select>
      </DashboardToolbar>

      {isLoading ? (
        <DashboardLoadingRows />
      ) : filteredPages.length === 0 ? (
        <DashboardEmptyState
          icon={FileText}
          title={searchQuery || selectedStatus !== "all" ? "Aucune page ne correspond aux filtres" : "Aucune page créée"}
          description={
            searchQuery || selectedStatus !== "all"
              ? "Ajustez la recherche ou le statut pour retrouver une page."
              : "Créez une première page pour préparer les contenus institutionnels du site."
          }
          action={!searchQuery && selectedStatus === "all" ? primaryAction : undefined}
        />
      ) : (
        <>
          <DashboardTableFrame>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead>Page</TableHead>
                  <TableHead>Chemin</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Langue</TableHead>
                  <TableHead>Dossier / catégorie</TableHead>
                  <TableHead>Dernière modification</TableHead>
                  <TableHead className="w-12"><span className="sr-only">Actions</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPages.map((page) => (
                  <TableRow key={page.id}>
                    <TableCell>
                      <div className="font-medium">{page.title}</div>
                      <div className="font-mono text-xs text-muted-foreground">{page.slug}</div>
                    </TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">{page.path}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={statusClasses[page.status]}>{statusLabels[page.status]}</Badge>
                    </TableCell>
                    <TableCell>{page.language}</TableCell>
                    <TableCell className="text-muted-foreground">{page.section}</TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(page.updatedAt)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="size-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={page.path}>
                              <Eye className="size-4" />
                              Prévisualiser
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil className="size-4" />
                            Modifier
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            {page.status === "published" ? <Archive className="size-4" /> : <Send className="size-4" />}
                            {page.status === "published" ? "Dépublier" : "Publier"}
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
              </TableBody>
            </Table>
          </DashboardTableFrame>

          <DashboardCardGrid>
            {filteredPages.map((page) => (
              <DashboardResourceCard key={page.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="truncate font-medium">{page.title}</h2>
                    <p className="font-mono text-xs text-muted-foreground">{page.path}</p>
                  </div>
                  <Badge variant="outline" className={statusClasses[page.status]}>{statusLabels[page.status]}</Badge>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{page.section}</span>
                  <span>{formatDate(page.updatedAt)}</span>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <Link href={page.path}>
                    <Globe2 className="size-4" />
                    Prévisualiser
                  </Link>
                </Button>
              </DashboardResourceCard>
            ))}
          </DashboardCardGrid>
        </>
      )}
    </div>
  );
}
