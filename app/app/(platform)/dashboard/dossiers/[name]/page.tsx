"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface DossierArticle {
  id: string;
  title: string;
  publishedAt: string;
}

interface Dossier {
  id: string;
  name: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  articleCount: number;
  isVisible: boolean;
  locale: string;
  articles: DossierArticle[];
}

const mockDossiers: Record<string, Dossier> = {
  "donald-trump": {
    id: "1",
    name: "donald-trump",
    title: "Donald Trump",
    description: "Couverture complète de l'actualité autour de Donald Trump",
    content:
      "Bienvenue sur le dossier Donald Trump. Vous retrouverez ici toutes les informations relatives à l'actualité de Donald Trump.",
    imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&h=400&fit=crop",
    articleCount: 24,
    isVisible: true,
    locale: "fr",
    articles: [
      { id: "1", title: "Trump annonce une nouvelle politique", publishedAt: "2026-03-27" },
      { id: "2", title: "Les réactions internationales", publishedAt: "2026-03-26" },
      { id: "3", title: "Analyse: Quel impact sur l'Europe?", publishedAt: "2026-03-25" },
    ],
  },
  "guerre-ukraine": {
    id: "2",
    name: "guerre-ukraine",
    title: "Guerre en Ukraine",
    description: "Toutes les informations sur le conflit en Ukraine",
    content:
      "Dossier spécial sur la guerre en Ukraine. Suivez l'évolution de la situation jour après jour.",
    imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&h=400&fit=crop",
    articleCount: 156,
    isVisible: true,
    locale: "fr",
    articles: [
      { id: "4", title: "Les négociations reprennent", publishedAt: "2026-03-27" },
      { id: "5", title: "Point sur la situation militaire", publishedAt: "2026-03-26" },
    ],
  },
  "affaire-epstein": {
    id: "3",
    name: "affaire-epstein",
    title: "Affaire Epstein",
    description: "Enquête sur l'affaire Jeffrey Epstein",
    content: "Dossier sur l'affaire Jeffrey Epstein et ses ramifications.",
    imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&h=400&fit=crop",
    articleCount: 12,
    isVisible: true,
    locale: "fr",
    articles: [],
  },
  iran: {
    id: "4",
    name: "iran",
    title: "Iran",
    description: "Actualités et analyses sur l'Iran",
    content: "Dossier sur l'actualité iranienne et les relations internationales.",
    imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&h=400&fit=crop",
    articleCount: 45,
    isVisible: true,
    locale: "fr",
    articles: [],
  },
  "pouvoir-achat": {
    id: "5",
    name: "pouvoir-achat",
    title: "Pouvoir d'achat",
    description: "Tout sur le pouvoir d'achat en France",
    content: "Dossier complet sur le pouvoir d'achat: inflation, salaires, retraites...",
    imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&h=400&fit=crop",
    articleCount: 78,
    isVisible: true,
    locale: "fr",
    articles: [],
  },
};

export default function DossierEditPage() {
  const params = useParams();
  const router = useRouter();
  const name = params?.name as string;

  const [isLoading, setIsLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    content: "",
    imageUrl: "",
    locale: "fr",
    isVisible: true,
  });

  useEffect(() => {
    if (name && mockDossiers[name]) {
      const dossier = mockDossiers[name];
      setFormData({
        name: dossier.name,
        title: dossier.title,
        description: dossier.description,
        content: dossier.content,
        imageUrl: dossier.imageUrl,
        locale: dossier.locale,
        isVisible: dossier.isVisible,
      });
    }
    setIsLoading(false);
  }, [name]);

  const handleSave = async () => {
    setSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSaving(false);
  };

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!name || !mockDossiers[name]) {
    return (
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/dossiers">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Dossier non trouvé</h1>
        </div>
        <p className="text-muted-foreground">Le dossier "{name}" n'existe pas.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/dossiers">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Modifier: {formData.title}</h1>
            <p className="text-sm text-muted-foreground">
              Gérez le contenu et les paramètres du dossier
            </p>
          </div>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Save className="h-4 w-4 mr-2" />
          )}
          Enregistrer
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold">Informations générales</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nom (URL)</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="nom-du-dossier"
                />
              </div>
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
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="be_fr">Belgiqe (FR)</SelectItem>
                    <SelectItem value="be_nl">Belgique (NL)</SelectItem>
                    <SelectItem value="ch_fr">Suisse (FR)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Titre</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Titre du dossier"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Description courte du dossier"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Contenu</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Contenu principal du dossier..."
                rows={6}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">URL de l'image</Label>
              <Input
                id="imageUrl"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                placeholder="https://..."
              />
              {formData.imageUrl && (
                <div className="mt-2 rounded-md overflow-hidden h-32 bg-muted">
                  <img
                    src={formData.imageUrl}
                    alt="Aperçu"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Articles associés</h2>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter un article
              </Button>
            </div>

            {mockDossiers[name]?.articles.length === 0 ? (
              <p className="text-sm text-muted-foreground">Aucun article associé à ce dossier.</p>
            ) : (
              <div className="space-y-2">
                {mockDossiers[name]?.articles.map((article) => (
                  <div
                    key={article.id}
                    className="flex items-center justify-between p-3 rounded-md bg-muted/50"
                  >
                    <div>
                      <p className="font-medium">{article.title}</p>
                      <p className="text-xs text-muted-foreground">{article.publishedAt}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold">Paramètres</h2>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Visible</Label>
                <p className="text-sm text-muted-foreground">Le dossier est visible sur le site</p>
              </div>
              <Switch
                checked={formData.isVisible}
                onCheckedChange={(checked) => setFormData({ ...formData, isVisible: checked })}
              />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Statistiques</Label>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Articles</p>
                  <p className="text-2xl font-bold">{mockDossiers[name]?.articleCount}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Vues</p>
                  <p className="text-2xl font-bold">12.5K</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold">Prévisualisation</h2>
            <div className="space-y-2">
              <div className="rounded-md overflow-hidden bg-muted h-32">
                {formData.imageUrl ? (
                  <img
                    src={formData.imageUrl}
                    alt={formData.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Aucune image
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-semibold">{formData.title || "Titre du dossier"}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {formData.description || "Description du dossier..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
