"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Save, Eye, ImageIcon, Search, X, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { locales } from "@/lib/locale";
import { articlesApi } from "@/lib/api/client";

const categories = [
  "Politique",
  "Économie",
  "International",
  "Culture",
  "Sport",
  "Étudiant",
  "Jeu Vidéo",
  "Informatique",
  "Société",
  "Environnement",
];

const tags = [
  "Breaking",
  "Editorial",
  "Interview",
  "Reportage",
  "Analyse",
  "Opinion",
  "Faits divers",
  "Éducation",
  "Religion",
];

export default function NewArticlePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedLocale, setSelectedLocale] = useState<string>("all");
  const [featured, setFeatured] = useState(false);
  const [allowComments, setAllowComments] = useState(true);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [imagePickerOpen, setImagePickerOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (publish: boolean = false) => {
    if (!title.trim()) return;

    setIsSaving(true);
    try {
      const categoryId = category.toLowerCase().replace(/é/g, "e").replace(/ /g, "-");

      const response = await articlesApi.create({
        title,
        content,
        excerpt,
        categoryId,
        imageUrl: selectedImage,
      });

      if (response.success && response.data) {
        const newArticle = {
          id: response.data.id,
          title: response.data.title,
          excerpt: response.data.excerpt || "",
          category: category || "Non catégorisé",
          author: "Vous",
          status: (publish ? "published" : "draft") as "published" | "draft",
          publishedAt: publish ? new Date().toISOString() : undefined,
          updatedAt: new Date().toISOString(),
          views: 0,
          image: selectedImage,
        };

        if (typeof window !== "undefined") {
          const stored = sessionStorage.getItem("newArticles");
          const newArticles = stored ? JSON.parse(stored) : [];
          newArticles.unshift(newArticle);
          sessionStorage.setItem("newArticles", JSON.stringify(newArticles));
        }

        if (publish && response.data.id) {
          await articlesApi.publish(response.data.id);
        }
        router.push("/dashboard/articles");
      }
    } catch (error) {
      console.error("Failed to save article:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
  };

  const sampleImages = [
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=400&fit=crop",
  ];

  const selectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setImagePickerOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/articles">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Nouvel article</h1>
            <p className="text-sm text-muted-foreground">
              Créez un nouvel article pour votre publication
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setPreviewOpen(true)}>
            <Eye className="mr-2 h-4 w-4" />
            Aperçu
          </Button>
          <Button size="sm" onClick={() => handleSave(false)} disabled={isSaving || !title.trim()}>
            {isSaving ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Save className="mr-2 h-4 w-4" />
            )}
            Sauvegarder
          </Button>
          <Button size="sm" onClick={() => handleSave(true)} disabled={isSaving || !title.trim()}>
            {isSaving ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Save className="mr-2 h-4 w-4" />
            )}
            Publier
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title & Excerpt */}
          <Card>
            <CardHeader>
              <CardTitle>Contenu principal</CardTitle>
              <CardDescription>Rédigez le titre et le résumé de votre article</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titre</Label>
                <Input
                  id="title"
                  placeholder="Titre de l'article"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Résumé</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Un court résumé de l'article..."
                  rows={3}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">{excerpt.length}/200 caractères</p>
              </div>
            </CardContent>
          </Card>

          {/* Content */}
          <Card>
            <CardHeader>
              <CardTitle>Corps de l&apos;article</CardTitle>
              <CardDescription>Rédigez le contenu complet de votre article</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Rédigez votre article ici..."
                rows={15}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-100"
              />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Featured Image */}
          <Card>
            <CardHeader>
              <CardTitle>Image principale</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="relative h-40 w-full overflow-hidden rounded-lg border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer"
                onClick={() => setImagePickerOpen(true)}
              >
                {selectedImage ? (
                  <Image src={selectedImage} alt="Selected" fill className="object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    <div className="flex flex-col items-center gap-2">
                      <ImageIcon className="h-8 w-8" />
                      <p className="text-sm">Cliquez pour ajouter une image</p>
                    </div>
                  </div>
                )}
                {selectedImage && (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage("");
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Category */}
          <Card>
            <CardHeader>
              <CardTitle>Catégorie</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Destination / Public */}
          <Card>
            <CardHeader>
              <CardTitle>Destinataires</CardTitle>
              <CardDescription>Sélectionnez le public cible de l'article</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedLocale} onValueChange={setSelectedLocale}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les pays (International)</SelectItem>
                  {locales.map((locale) => (
                    <SelectItem key={locale.code} value={locale.code}>
                      {locale.flag} {locale.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-2">
                {selectedLocale === "all"
                  ? "L'article sera visible dans tous les pays"
                  : `L'article sera visible uniquement en ${locales.find((l) => l.code === selectedLocale)?.label}`}
              </p>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
              <CardDescription>Ajoutez des tags pour categorize votre article</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    size="sm"
                    className="h-7"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Options */}
          <Card>
            <CardHeader>
              <CardTitle>Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="featured" className="flex flex-col gap-1">
                  <span>Article en vedette</span>
                  <span className="text-xs text-muted-foreground">Afficher en première page</span>
                </Label>
                <Switch id="featured" checked={featured} onCheckedChange={setFeatured} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="comments" className="flex flex-col gap-1">
                  <span>Autoriser les commentaires</span>
                  <span className="text-xs text-muted-foreground">
                    Les lecteurs peuvent commenter
                  </span>
                </Label>
                <Switch id="comments" checked={allowComments} onCheckedChange={setAllowComments} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Preview Dialog */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Aperçu de l&apos;article</DialogTitle>
            <DialogDescription>
              Voici comment votre article apparaîtra une fois publié
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            {selectedImage && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image src={selectedImage} alt={title || "Article"} fill className="object-cover" />
              </div>
            )}
            {title ? (
              <h1 className="text-2xl font-bold">{title}</h1>
            ) : (
              <p className="text-muted-foreground italic">Sans titre</p>
            )}
            {category && <p className="text-sm text-primary font-medium">{category}</p>}
            {selectedLocale !== "all" && (
              <p className="text-xs text-muted-foreground">
                {locales.find((l) => l.code === selectedLocale)?.flag} Article réservé aux lecteurs
                de {locales.find((l) => l.code === selectedLocale)?.label}
              </p>
            )}
            {excerpt && <p className="text-muted-foreground italic border-l-2 pl-3">{excerpt}</p>}
            {content ? (
              <div className="space-y-3 text-sm leading-relaxed">
                {content
                  .split("\n")
                  .map((paragraph, index) =>
                    paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />
                  )}
              </div>
            ) : (
              <p className="text-muted-foreground italic">Aucun contenu</p>
            )}
            {selectedTags.length > 0 && (
              <div className="flex gap-2">
                {selectedTags.map((tag) => (
                  <span key={tag} className="text-xs bg-muted px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Picker Dialog */}
      <Dialog open={imagePickerOpen} onOpenChange={setImagePickerOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle>Choisir une image</DialogTitle>
            <DialogDescription>
              Recherchez une image sur Unsplash ou parcourir les suggestions
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Rechercher sur Unsplash..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-9"
                />
              </div>
              <Button onClick={handleSearch} disabled={isSearching}>
                Rechercher
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
              {sampleImages.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-video cursor-pointer overflow-hidden rounded-lg border-2 hover:border-primary transition-colors"
                  onClick={() => selectImage(img)}
                >
                  <Image src={img} alt={`Option ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
