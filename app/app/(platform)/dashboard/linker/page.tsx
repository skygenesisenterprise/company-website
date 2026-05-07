"use client";

import { useState, useEffect } from "react";
import { Plus, Search, Pencil, Trash2, Loader2, Globe, ArrowUp, ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { footerLinksApi, type FooterLink } from "@/lib/api/client";
import { locales, type Locale } from "@/lib/locale";

const categories = [
  { value: "dossiers", label: "Dossiers d'actualité" },
  { value: "series", label: "Séries" },
  { value: "sports", label: "Sports" },
  { value: "politique", label: "Politique" },
  { value: "etudiant", label: "Étudiant" },
  { value: "sorties", label: "Sorties" },
  { value: "videos", label: "Vidéos" },
  { value: "services", label: "Services" },
  { value: "subscription", label: "Abonnement" },
  { value: "legal", label: "Légal" },
  { value: "social", label: "Réseaux sociaux" },
];

export default function LinkerPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [links, setLinks] = useState<FooterLink[]>([]);
  const [selectedLocale, setSelectedLocale] = useState<string>("fr");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingLink, setEditingLink] = useState<FooterLink | null>(null);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    category: "dossiers",
    title: "",
    name: "",
    href: "",
    locale: "fr",
    position: 0,
    isVisible: true,
  });

  useEffect(() => {
    loadLinks();
  }, [selectedLocale]);

  async function loadLinks() {
    setIsLoading(true);
    try {
      const response = await footerLinksApi.list({ locale: selectedLocale });
      if (response.success && response.data) {
        setLinks(response.data);
      }
    } catch (error) {
      console.error("Failed to load links:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const filteredLinks = links.filter(
    (link) =>
      link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedLinks = categories.reduce(
    (acc, cat) => {
      acc[cat.value] = filteredLinks.filter((l) => l.category === cat.value);
      return acc;
    },
    {} as Record<string, FooterLink[]>
  );

  const handleOpenDialog = (link?: FooterLink) => {
    if (link) {
      setEditingLink(link);
      setFormData({
        category: link.category,
        title: link.title,
        name: link.name,
        href: link.href,
        locale: link.locale,
        position: link.position,
        isVisible: link.isVisible,
      });
    } else {
      setEditingLink(null);
      setFormData({
        category: "dossiers",
        title: categories.find((c) => c.value === "dossiers")?.label || "",
        name: "",
        href: "",
        locale: selectedLocale,
        position: 0,
        isVisible: true,
      });
    }
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const title = categories.find((c) => c.value === formData.category)?.label || "";
      const data = { ...formData, title };

      if (editingLink) {
        await footerLinksApi.update(editingLink.id, data);
      } else {
        await footerLinksApi.create(data);
      }
      await loadLinks();
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Failed to save link:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce lien ?")) return;
    try {
      await footerLinksApi.delete(id);
      await loadLinks();
    } catch (error) {
      console.error("Failed to delete link:", error);
    }
  };

  const handleToggleVisibility = async (link: FooterLink) => {
    try {
      await footerLinksApi.update(link.id, { isVisible: !link.isVisible });
      await loadLinks();
    } catch (error) {
      console.error("Failed to toggle visibility:", error);
    }
  };

  const handleMoveUp = async (link: FooterLink, category: string) => {
    const categoryLinks = groupedLinks[category]?.sort((a, b) => a.position - b.position) || [];
    const currentIndex = categoryLinks.findIndex((l) => l.id === link.id);
    if (currentIndex <= 0) return;

    const prevLink = categoryLinks[currentIndex - 1];
    try {
      await footerLinksApi.update(link.id, { position: prevLink.position });
      await footerLinksApi.update(prevLink.id, { position: link.position });
      await loadLinks();
    } catch (error) {
      console.error("Failed to move link up:", error);
    }
  };

  const handleMoveDown = async (link: FooterLink, category: string) => {
    const categoryLinks = groupedLinks[category]?.sort((a, b) => a.position - b.position) || [];
    const currentIndex = categoryLinks.findIndex((l) => l.id === link.id);
    if (currentIndex === -1 || currentIndex >= categoryLinks.length - 1) return;

    const nextLink = categoryLinks[currentIndex + 1];
    try {
      await footerLinksApi.update(link.id, { position: nextLink.position });
      await footerLinksApi.update(nextLink.id, { position: link.position });
      await loadLinks();
    } catch (error) {
      console.error("Failed to move link down:", error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Gestion des liens</h1>
        <p className="text-sm text-muted-foreground">Gérez les liens du pied de page par locale</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-4 items-center">
          <Select value={selectedLocale} onValueChange={setSelectedLocale}>
            <SelectTrigger className="w-45">
              <Globe className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sélectionner la locale" />
            </SelectTrigger>
            <SelectContent>
              {locales.map((locale) => (
                <SelectItem key={locale.code} value={locale.code}>
                  {locale.flag} {locale.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un lien..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-full sm:w-62.5"
            />
          </div>
          <Button onClick={() => handleOpenDialog()}>
            <Plus className="h-4 w-4 mr-2" />
            Ajouter un lien
          </Button>
        </div>
      </div>

      <Tabs defaultValue="dossiers" className="w-full">
        <TabsList className="flex flex-wrap h-auto">
          {categories.map((cat) => (
            <TabsTrigger key={cat.value} value={cat.value} className="mb-1">
              {cat.label}
              <Badge variant="secondary" className="ml-2 h-5 px-1.5">
                {groupedLinks[cat.value]?.length || 0}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.value} value={cat.value} className="mt-4">
            <div className="rounded-md border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12.5"></TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>URL</TableHead>
                    <TableHead className="w-25">Position</TableHead>
                    <TableHead className="w-25">Visible</TableHead>
                    <TableHead className="w-25"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                      </TableCell>
                    </TableRow>
                  ) : groupedLinks[cat.value]?.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                        Aucun lien dans cette catégorie
                      </TableCell>
                    </TableRow>
                  ) : (
                    groupedLinks[cat.value]
                      ?.sort((a, b) => a.position - b.position)
                      .map((link, index, arr) => (
                        <TableRow key={link.id}>
                          <TableCell>
                            <div className="flex flex-col gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                disabled={index === 0}
                                onClick={() => handleMoveUp(link, cat.value)}
                              >
                                <ArrowUp className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                disabled={index === arr.length - 1}
                                onClick={() => handleMoveDown(link, cat.value)}
                              >
                                <ArrowDown className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">{link.name}</TableCell>
                          <TableCell className="text-muted-foreground font-mono text-sm">
                            {link.href}
                          </TableCell>
                          <TableCell>{link.position}</TableCell>
                          <TableCell>
                            <Switch
                              checked={link.isVisible}
                              onCheckedChange={() => handleToggleVisibility(link)}
                            />
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleOpenDialog(link)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDelete(link.id)}
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingLink ? "Modifier le lien" : "Ajouter un lien"}</DialogTitle>
            <DialogDescription>
              {editingLink
                ? "Modifiez les informations du lien ci-dessous"
                : "Ajoutez un nouveau lien au pied de page"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="category">Catégorie</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nom du lien</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nom affiché"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="href">URL</Label>
              <Input
                id="href"
                value={formData.href}
                onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                placeholder="/chemin/du/lien"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="locale">Locale</Label>
                <Select
                  value={formData.locale}
                  onValueChange={(value) => setFormData({ ...formData, locale: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {locales.map((locale) => (
                      <SelectItem key={locale.code} value={locale.code}>
                        {locale.flag} {locale.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input
                  id="position"
                  type="number"
                  min="0"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: parseInt(e.target.value) || 0 })
                  }
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="isVisible">Visible</Label>
              <Switch
                id="isVisible"
                checked={formData.isVisible}
                onCheckedChange={(checked) => setFormData({ ...formData, isVisible: checked })}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleSave} disabled={saving || !formData.name || !formData.href}>
              {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              {editingLink ? "Enregistrer" : "Ajouter"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
