"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Save, Eye, ImageIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
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

const categories = [
  "Politique",
  "Économie",
  "International",
  "Culture",
  "Sport",
  "Société",
  "Technologie",
  "Santé",
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

type ArticleStatus = "published" | "draft" | "review" | "archived";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  status: ArticleStatus;
  publishedAt: string | null;
  updatedAt: string;
  views: number;
  image: string;
  tags: string[];
}

const mockArticles: Record<string, Article> = {
  "1": {
    id: "1",
    title: "Les nouvelles réformes économiques annoncées par le gouvernement",
    excerpt: "Le Premier ministre a dévoiler un plan ambitieux pour relancer l'économie...",
    content:
      "Le Premier ministre a dévoiler un plan ambitieux pour relancer l'économie nationale. Ce plan, présenté lors d'une conférence de presse tenue à Matignon, prévoit plusieurs mesures clés dont la réduction des impôts pour les classes moyennes, des investissements massifs dans les infrastructures vertes et un programme de formation professionnelle pour les jeunes.\n\n\"Nous voulons construire une économie plus juste et plus compétitive\", a déclaré le Chef du gouvernement.",
    category: "Politique",
    author: "Marie Dupont",
    status: "published",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    views: 15420,
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=400&fit=crop",
    tags: ["Editorial", "Analyse"],
  },
  "2": {
    id: "2",
    title: "Victoire historique de l'équipe nationale en finale du championnat",
    excerpt: "Une performance exceptionnelle qui restera dans les annales du sport français...",
    content:
      "L'équipe de France de football a écrit une nouvelle page de son histoire en devenant championne du monde pour la troisième fois.",
    category: "Sport",
    author: "Thomas Martin",
    status: "published",
    publishedAt: "2026-03-24",
    updatedAt: "2026-03-24",
    views: 28750,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=400&fit=crop",
    tags: ["Breaking", "Reportage"],
  },
  "3": {
    id: "3",
    title: "La nouvelle exposition au Musée d'Art Moderne fait sensation",
    excerpt: "Plus de 10 000 visiteurs ont déjà découvert cette rétrospective unique...",
    content: "",
    category: "Culture",
    author: "Sophie Laurent",
    status: "draft",
    publishedAt: null,
    updatedAt: "2026-03-26",
    views: 0,
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800&h=400&fit=crop",
    tags: [],
  },
  "4": {
    id: "4",
    title: "Tensions diplomatiques : les négociations reprennent à Genève",
    excerpt: "Après plusieurs semaines de blocage, les discussions ont enfin repris...",
    content: "",
    category: "International",
    author: "Pierre Moreau",
    status: "review",
    publishedAt: null,
    updatedAt: "2026-03-26",
    views: 0,
    image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=800&h=400&fit=crop",
    tags: [],
  },
  "5": {
    id: "5",
    title: "Innovation : une startup française révolutionne le secteur de l'énergie",
    excerpt: "Cette jeune pousse a développé une technologie de stockage révolutionnaire...",
    content: "",
    category: "Économie",
    author: "Julie Bernard",
    status: "published",
    publishedAt: "2026-03-23",
    updatedAt: "2026-03-23",
    views: 9840,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
    tags: [],
  },
  "6": {
    id: "6",
    title: "Météo : vague de chaleur exceptionnelle attendue cette semaine",
    excerpt: "Les températures pourraient atteindre des records dans plusieurs régions...",
    content: "",
    category: "Société",
    author: "Marc Leroy",
    status: "published",
    publishedAt: "2026-03-22",
    updatedAt: "2026-03-22",
    views: 12300,
    image: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=800&h=400&fit=crop",
    tags: [],
  },
  "7": {
    id: "7",
    title: "Interview exclusive avec le nouveau directeur de la Banque Centrale",
    excerpt: "Il nous livre sa vision pour les années à venir et les défis à relever...",
    content: "",
    category: "Économie",
    author: "Marie Dupont",
    status: "draft",
    publishedAt: null,
    updatedAt: "2026-03-26",
    views: 0,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
    tags: [],
  },
  "8": {
    id: "8",
    title: "Le festival de cinéma dévoiler sa sélection officielle",
    excerpt: "Cette année, 24 films seront en compétition pour la prestigieuse récompense...",
    content: "",
    category: "Culture",
    author: "Sophie Laurent",
    status: "archived",
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-20",
    views: 5200,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=400&fit=crop",
    tags: [],
  },
};

export default function EditArticlePage() {
  const params = useParams();
  const id = params.id as string;
  const article = mockArticles[id];

  const [title, setTitle] = useState(article?.title || "");
  const [excerpt, setExcerpt] = useState(article?.excerpt || "");
  const [content, setContent] = useState(article?.content || "");
  const [category, setCategory] = useState(article?.category || "");
  const [selectedTags, setSelectedTags] = useState<string[]>(article?.tags || []);
  const [featured, setFeatured] = useState(false);
  const [allowComments, setAllowComments] = useState(true);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [image] = useState(article?.image || "");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  if (!article) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/articles">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Article non trouvé</h1>
        </div>
        <p className="text-muted-foreground">L&apos;article demandé n&apos;existe pas.</p>
      </div>
    );
  }

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
            <h1 className="text-2xl font-bold text-foreground">Modifier l&apos;article</h1>
            <p className="text-sm text-muted-foreground">Modifiez le contenu de votre article</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setPreviewOpen(true)}>
            <Eye className="mr-2 h-4 w-4" />
            Aperçu
          </Button>
          <Button size="sm">
            <Save className="mr-2 h-4 w-4" />
            Enregistrer
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
              <div className="relative h-40 w-full overflow-hidden rounded-lg border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer">
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    <div className="flex flex-col items-center gap-2">
                      <ImageIcon className="h-8 w-8" />
                      <p className="text-sm">Cliquez pour ajouter une image</p>
                    </div>
                  </div>
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

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
              <CardDescription>Ajoutez des tags pour categoriser votre article</CardDescription>
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
            {image && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={title || "Article"}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )}
            {title ? (
              <h1 className="text-2xl font-bold">{title}</h1>
            ) : (
              <p className="text-muted-foreground italic">Sans titre</p>
            )}
            {category && <p className="text-sm text-primary font-medium">{category}</p>}
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
    </div>
  );
}
