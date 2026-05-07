"use client";

import { useState, useEffect } from "react";
import { Plus, Search, MoreHorizontal, Pencil, Trash2, Eye, Folder, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
import { categoriesApi } from "@/lib/api";

interface CategoryDisplay {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  articleCount: number;
}

const mockCategories: CategoryDisplay[] = [
  {
    id: "1",
    name: "Politique",
    slug: "politique",
    description: "Actualités politiques et gouvernementales",
    articleCount: 45,
    color: "bg-blue-500",
  },
  {
    id: "2",
    name: "Économie",
    slug: "economie",
    description: "Actualités économiques et financières",
    articleCount: 38,
    color: "bg-green-500",
  },
  {
    id: "3",
    name: "International",
    slug: "international",
    description: "Actualités internationales",
    articleCount: 32,
    color: "bg-purple-500",
  },
  {
    id: "4",
    name: "Culture",
    slug: "culture",
    description: "Actualités culturelles et artistiques",
    articleCount: 28,
    color: "bg-pink-500",
  },
  {
    id: "5",
    name: "Sport",
    slug: "sport",
    description: "Actualités sportives",
    articleCount: 24,
    color: "bg-orange-500",
  },
  {
    id: "6",
    name: "Société",
    slug: "societe",
    description: "Actualités de société",
    articleCount: 22,
    color: "bg-yellow-500",
  },
  {
    id: "7",
    name: "Technologie",
    slug: "technologie",
    description: "Actualités technologiques",
    articleCount: 18,
    color: "bg-cyan-500",
  },
  {
    id: "8",
    name: "Santé",
    slug: "sante",
    description: "Actualités santé et bien-être",
    articleCount: 15,
    color: "bg-red-500",
  },
  {
    id: "9",
    name: "Environnement",
    slug: "environnement",
    description: "Actualités environnementales",
    articleCount: 12,
    color: "bg-emerald-500",
  },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState<CategoryDisplay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<CategoryDisplay | null>(null);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryDescription, setNewCategoryDescription] = useState("");
  const [newCategoryColor, setNewCategoryColor] = useState("bg-blue-500");

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    setIsLoading(true);
    try {
      const response = await categoriesApi.list();
      if (response.success && response.data) {
        const mapped = response.data.map((cat) => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
          description: cat.description,
          color: cat.color,
          articleCount: 0,
        }));
        setCategories(mapped);
      }
    } catch (error) {
      console.error("Failed to load categories:", error);
      setCategories(mockCategories);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCreateCategory() {
    if (!newCategoryName.trim()) return;
    try {
      const response = await categoriesApi.create({
        name: newCategoryName,
        description: newCategoryDescription,
        color: newCategoryColor.replace("bg-", "#"),
      });
      if (response.success && response.data) {
        const newCat: CategoryDisplay = {
          id: response.data.id,
          name: response.data.name,
          slug: response.data.slug,
          description: response.data.description,
          color: response.data.color,
          articleCount: 0,
        };
        setCategories((prev) => [newCat, ...prev]);
      }
    } catch (error) {
      console.error("Failed to create category:", error);
    }
    setCreateDialogOpen(false);
    setNewCategoryName("");
    setNewCategoryDescription("");
    setNewCategoryColor("bg-blue-500");
  }

  async function handleDeleteCategory() {
    if (!categoryToDelete) return;
    try {
      await categoriesApi.delete(categoryToDelete.id);
      setCategories((prev) => prev.filter((c) => c.id !== categoryToDelete.id));
      setSelectedCategories((prev) => prev.filter((id) => id !== categoryToDelete.id));
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
    setDeleteDialogOpen(false);
    setCategoryToDelete(null);
  }

  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-cyan-500",
    "bg-red-500",
    "bg-emerald-500",
  ];

  const filteredCategories = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cat.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)
  );

  const toggleSelectAll = () => {
    if (selectedCategories.length === filteredCategories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(filteredCategories.map((c) => c.id));
    }
  };

  const toggleSelectCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleDelete = (category: CategoryDisplay) => {
    setCategoryToDelete(category);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    handleDeleteCategory();
  };

  const handleCreate = () => {
    handleCreateCategory();
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Catégories</h1>
          <p className="text-sm text-muted-foreground">Gérez les catégories de votre site</p>
        </div>
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle catégorie
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher une catégorie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedCategories.length > 0 && (
        <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-3">
          <span className="text-sm text-muted-foreground">
            {selectedCategories.length} catégorie{selectedCategories.length > 1 ? "s" : ""}{" "}
            sélectionnée{selectedCategories.length > 1 ? "s" : ""}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Modifier
            </Button>
            <Button variant="destructive" size="sm">
              Supprimer
            </Button>
          </div>
        </div>
      )}

      {/* Categories Table */}
      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={
                    selectedCategories.length === filteredCategories.length &&
                    filteredCategories.length > 0
                  }
                  onCheckedChange={toggleSelectAll}
                  aria-label="Sélectionner tout"
                />
              </TableHead>
              <TableHead>Catégorie</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-center">Articles</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCategories.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Folder className="h-8 w-8 text-muted-foreground" />
                    <p className="text-muted-foreground">Aucune catégorie trouvée</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => toggleSelectCategory(category.id)}
                      aria-label={`Sélectionner ${category.name}`}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className={`h-3 w-3 rounded-full ${category.color}`} />
                      <span className="font-medium">{category.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{category.slug}</TableCell>
                  <TableCell className="text-muted-foreground max-w-xs truncate">
                    {category.description}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary">{category.articleCount}</Badge>
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
                          <Pencil className="mr-2 h-4 w-4" />
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Voir les articles
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                          onClick={() => handleDelete(category)}
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la catégorie</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer la catégorie &quot;{categoryToDelete?.name}&quot; ?
              Cette action est irréversible.
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

      {/* Create Category Dialog */}
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nouvelle catégorie</DialogTitle>
            <DialogDescription>Créez une nouvelle catégorie pour vos articles</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                placeholder="Nom de la catégorie"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Description de la catégorie"
                value={newCategoryDescription}
                onChange={(e) => setNewCategoryDescription(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Couleur</Label>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`h-8 w-8 rounded-full ${color} ${
                      newCategoryColor === color ? "ring-2 ring-offset-2 ring-primary" : ""
                    }`}
                    onClick={() => setNewCategoryColor(color)}
                  />
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleCreate} disabled={!newCategoryName.trim()}>
              Créer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
