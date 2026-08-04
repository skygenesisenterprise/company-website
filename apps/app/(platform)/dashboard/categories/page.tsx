"use client";

import * as React from "react";
import Link from "next/link";
import { Eye, FolderTree, MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { categoriesApi } from "@/lib/api";
import type { Category } from "@/lib/api/types";

interface CategoryDisplay {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  itemCount: number;
  updatedAt?: string;
  createdAt?: string;
}

const fallbackCategories: CategoryDisplay[] = [
  {
    id: "editorial",
    name: "Éditorial",
    slug: "editorial",
    description: "Contenus institutionnels, annonces et notes de fond.",
    color: "#111827",
    itemCount: 12,
    updatedAt: "2026-04-18",
  },
  {
    id: "produits",
    name: "Produits",
    slug: "produits",
    description: "Pages et publications liées aux offres Sky Genesis Enterprise.",
    color: "#2563eb",
    itemCount: 8,
    updatedAt: "2026-04-12",
  },
  {
    id: "confiance",
    name: "Confiance",
    slug: "confiance",
    description: "Sécurité, conformité, disponibilité et transparence.",
    color: "#047857",
    itemCount: 6,
    updatedAt: "2026-04-08",
  },
];

function toCategoryDisplay(category: Category): CategoryDisplay {
  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    color: category.color,
    itemCount: 0,
    updatedAt: category.updatedAt,
    createdAt: category.createdAt,
  };
}

function formatDate(value?: string) {
  if (!value) return "Non renseigné";
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

function colorStyle(color?: string): React.CSSProperties {
  if (!color) return { backgroundColor: "#111827" };
  if (color.startsWith("bg-")) return {};
  return { backgroundColor: color };
}

export default function CategoriesPage() {
  const [categories, setCategories] = React.useState<CategoryDisplay[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [categoryToDelete, setCategoryToDelete] = React.useState<CategoryDisplay | null>(null);
  const [newCategoryName, setNewCategoryName] = React.useState("");
  const [newCategoryDescription, setNewCategoryDescription] = React.useState("");

  const loadCategories = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await categoriesApi.list();
      setCategories(response.success && response.data ? response.data.map(toCategoryDisplay) : []);
    } catch {
      setCategories(fallbackCategories);
      setError("Les catégories API ne sont pas accessibles. Les données de démonstration restent disponibles.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    void loadCategories();
  }, [loadCategories]);

  const filteredCategories = categories.filter((category) => {
    const query = searchQuery.toLowerCase();
    return (
      category.name.toLowerCase().includes(query) ||
      category.slug.toLowerCase().includes(query) ||
      (category.description?.toLowerCase().includes(query) ?? false)
    );
  });

  const createCategory = async () => {
    const name = newCategoryName.trim();
    if (!name) return;

    try {
      const response = await categoriesApi.create({
        name,
        description: newCategoryDescription.trim() || undefined,
        color: "#111827",
      });
      if (response.success && response.data) {
        setCategories((current) => [toCategoryDisplay(response.data as Category), ...current]);
      }
    } catch {
      const slug = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      setCategories((current) => [
        {
          id: `local-${Date.now()}`,
          name,
          slug,
          description: newCategoryDescription.trim(),
          color: "#111827",
          itemCount: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        ...current,
      ]);
    }

    setCreateDialogOpen(false);
    setNewCategoryName("");
    setNewCategoryDescription("");
  };

  const deleteCategory = async () => {
    if (!categoryToDelete) return;
    try {
      await categoriesApi.delete(categoryToDelete.id);
    } catch {
      // Keep the existing UI action available even when the local API is not running.
    }
    setCategories((current) => current.filter((category) => category.id !== categoryToDelete.id));
    setCategoryToDelete(null);
    setDeleteDialogOpen(false);
  };

  const primaryAction = (
    <Button onClick={() => setCreateDialogOpen(true)}>
      <Plus className="size-4" />
      Créer une catégorie
    </Button>
  );

  return (
    <div className="space-y-6 bg-background p-4 sm:p-6">
      <DashboardPageHeader
        title="Catégories"
        description="Organisez les contenus du site avec des catégories éditoriales claires."
        action={primaryAction}
      />

      {error ? <DashboardErrorState message={error} onRetry={loadCategories} /> : null}

      <DashboardToolbar>
        <DashboardSearch value={searchQuery} onChange={setSearchQuery} placeholder="Rechercher par nom, slug ou description" />
        <div className="text-sm text-muted-foreground">{filteredCategories.length} catégorie(s)</div>
      </DashboardToolbar>

      {isLoading ? (
        <DashboardLoadingRows />
      ) : filteredCategories.length === 0 ? (
        <DashboardEmptyState
          icon={FolderTree}
          title={searchQuery ? "Aucune catégorie ne correspond à la recherche" : "Aucune catégorie créée"}
          description={
            searchQuery
              ? "Ajustez la recherche pour retrouver une ressource existante."
              : "Créez une première catégorie pour structurer les pages et publications du site officiel."
          }
          action={!searchQuery ? primaryAction : undefined}
        />
      ) : (
        <>
          <DashboardTableFrame>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead>Nom</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-center">Contenus</TableHead>
                  <TableHead>Dernière mise à jour</TableHead>
                  <TableHead className="w-12"><span className="sr-only">Actions</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCategories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <span className="size-2.5 rounded-full" style={colorStyle(category.color)} />
                        <span className="font-medium">{category.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">{category.slug}</TableCell>
                    <TableCell className="max-w-md truncate text-muted-foreground">{category.description || "Sans description"}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline">{category.itemCount}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(category.updatedAt || category.createdAt)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="size-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Pencil className="size-4" />
                            Modifier
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/articles?category=${category.slug}`}>
                              <Eye className="size-4" />
                              Contenus liés
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() => {
                              setCategoryToDelete(category);
                              setDeleteDialogOpen(true);
                            }}
                          >
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
            {filteredCategories.map((category) => (
              <DashboardResourceCard key={category.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full" style={colorStyle(category.color)} />
                      <h2 className="truncate font-medium">{category.name}</h2>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground">{category.slug}</p>
                  </div>
                  <Badge variant="outline">{category.itemCount}</Badge>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{category.description || "Sans description"}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatDate(category.updatedAt || category.createdAt)}</span>
                  <Button variant="outline" size="sm" onClick={() => {
                    setCategoryToDelete(category);
                    setDeleteDialogOpen(true);
                  }}>
                    Supprimer
                  </Button>
                </div>
              </DashboardResourceCard>
            ))}
          </DashboardCardGrid>
        </>
      )}

      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Créer une catégorie</DialogTitle>
            <DialogDescription>Ajoutez une catégorie éditoriale claire et réutilisable.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="category-name">Nom</Label>
              <Input id="category-name" value={newCategoryName} onChange={(event) => setNewCategoryName(event.target.value)} placeholder="Ex. Confiance" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category-description">Description</Label>
              <Textarea id="category-description" value={newCategoryDescription} onChange={(event) => setNewCategoryDescription(event.target.value)} placeholder="Usage éditorial de cette catégorie" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>Annuler</Button>
            <Button onClick={createCategory} disabled={!newCategoryName.trim()}>Créer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la catégorie</DialogTitle>
            <DialogDescription>
              Supprimer “{categoryToDelete?.name}” peut retirer une ressource structurante du CMS.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>Annuler</Button>
            <Button variant="destructive" onClick={deleteCategory}>Supprimer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
