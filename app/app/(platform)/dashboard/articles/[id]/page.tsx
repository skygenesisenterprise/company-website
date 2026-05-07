"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Pencil,
  Eye,
  Trash2,
  Clock,
  FileText,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type ArticleStatus = "published" | "draft" | "review" | "archived";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  author: string;
  status: ArticleStatus;
  publishedAt: string | null;
  updatedAt: string;
  views: number;
  image: string;
  tags?: string[];
}

const mockArticles: Record<string, Article> = {
  "1": {
    id: "1",
    title: "Les nouvelles réformes économiques annoncées par le gouvernement",
    excerpt: "Le Premier ministre a dévoiler un plan ambitieux pour relancer l'économie...",
    content:
      "Le Premier ministre a dévoiler un plan ambitieux pour relancer l'économie nationale. Ce plan, présenté lors d'une conférence de presse tenue à Matignon, prévoit plusieurs mesures clés dont la réduction des impôts pour les classes moyennes, des investissements massifs dans les infrastructures vertes et un programme de formation professionnelle pour les jeunes.\n\n\"Nous voulons construire une économie plus juste et plus compétitive\", a déclaré le Chef du gouvernement. Cette annonce survient après plusieurs mois de concertation avec les partenaires sociaux et les acteurs économiques du pays.\n\nLes principales mesures incluent:\n- Réduction de 5% de l'impôt sur le revenu pour les ménages fiscalisés\n- Création de 50 000 emplois verts d'ici 2028\n- Mise en place d'un fonds d'investissement pour les PME\n\nLes experts économiques restent divisionnés sur l'impact de ces mesures à long terme.",
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
      "L'équipe de France de football a écrit une nouvelle page de son histoire en devenant championne du monde pour la troisième fois. La finale, joué au Stade de France, a vu les Bleus s'imposer face à l'Italie sur le score de 3-1.\n\nLes buts de Mbappé, Benzema et Dembélé ont offert à la France un succès memorable. Le captain Hugo Lloris a également réalisé plusieurs arrêts décisifs qui ont permis de maintenir l'avantage.\n\nCette victoire est la première depuis 2018 et la deuxième à domicile après celle de 1998.",
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
    category: "Culture",
    author: "Sophie Laurent",
    status: "draft",
    publishedAt: null,
    updatedAt: "2026-03-26",
    views: 0,
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800&h=400&fit=crop",
  },
  "4": {
    id: "4",
    title: "Tensions diplomatiques : les négociations reprennent à Genève",
    excerpt: "Après plusieurs semaines de blocage, les discussions ont enfin repris...",
    category: "International",
    author: "Pierre Moreau",
    status: "review",
    publishedAt: null,
    updatedAt: "2026-03-26",
    views: 0,
    image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=800&h=400&fit=crop",
  },
  "5": {
    id: "5",
    title: "Innovation : une startup française révolutionne le secteur de l'énergie",
    excerpt: "Cette jeune pousse a développé une technologie de stockage révolutionnaire...",
    category: "Économie",
    author: "Julie Bernard",
    status: "published",
    publishedAt: "2026-03-23",
    updatedAt: "2026-03-23",
    views: 9840,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
  },
  "6": {
    id: "6",
    title: "Météo : vague de chaleur exceptionnelle attendue cette semaine",
    excerpt: "Les températures pourraient atteindre des records dans plusieurs régions...",
    category: "Société",
    author: "Marc Leroy",
    status: "published",
    publishedAt: "2026-03-22",
    updatedAt: "2026-03-22",
    views: 12300,
    image: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=800&h=400&fit=crop",
  },
  "7": {
    id: "7",
    title: "Interview exclusive avec le nouveau directeur de la Banque Centrale",
    excerpt: "Il nous livre sa vision pour les années à venir et les défis à relever...",
    category: "Économie",
    author: "Marie Dupont",
    status: "draft",
    publishedAt: null,
    updatedAt: "2026-03-26",
    views: 0,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
  },
  "8": {
    id: "8",
    title: "Le festival de cinéma dévoiler sa sélection officielle",
    excerpt: "Cette année, 24 films seront en compétition pour la prestigieuse récompense...",
    category: "Culture",
    author: "Sophie Laurent",
    status: "archived",
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-20",
    views: 5200,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=400&fit=crop",
  },
};

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

export default function ArticleViewPage() {
  const params = useParams();
  const id = params.id as string;
  const article = mockArticles[id];

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

  const StatusIcon = statusConfig[article.status].icon;

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
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
            <h1 className="text-2xl font-bold text-foreground">Détails de l&apos;article</h1>
            <p className="text-sm text-muted-foreground">
              Visualisez les informations de l&apos;article
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/article/${article.id}`} target="_blank">
              <Eye className="mr-2 h-4 w-4" />
              Voir sur le site
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={`/dashboard/articles/${article.id}/edit`}>
              <Pencil className="mr-2 h-4 w-4" />
              Modifier
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image */}
          {article.image && (
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Title & Excerpt */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{article.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{article.excerpt}</p>
              {article.content && (
                <>
                  <Separator />
                  <div className="space-y-3 text-sm leading-relaxed">
                    {article.content
                      .split("\n")
                      .map((paragraph, index) =>
                        paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />
                      )}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <Card>
            <CardHeader>
              <CardTitle>Statut</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={statusConfig[article.status].variant} className="gap-1">
                <StatusIcon className="h-3 w-3" />
                {statusConfig[article.status].label}
              </Badge>
            </CardContent>
          </Card>

          {/* Details */}
          <Card>
            <CardHeader>
              <CardTitle>Informations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Catégorie</p>
                <p className="font-medium">{article.category}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Auteur</p>
                <p className="font-medium">{article.author}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date de création</p>
                <p className="font-medium">{formatDate(article.updatedAt)}</p>
              </div>
              {article.publishedAt && (
                <div>
                  <p className="text-sm text-muted-foreground">Date de publication</p>
                  <p className="font-medium">{formatDate(article.publishedAt)}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-muted-foreground">Vues</p>
                <p className="font-medium">{article.views.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
