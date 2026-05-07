"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Globe,
  FolderOpen,
  FileText,
  Tv,
  Trophy,
  Users,
  Calendar,
  Video,
  ShoppingBag,
  CreditCard,
  Scale,
  Share2,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { value: "dossiers", label: "Dossiers d'actualité", icon: FolderOpen },
  { value: "series", label: "Séries", icon: Tv },
  { value: "sports", label: "Sports", icon: Trophy },
  { value: "politique", label: "Politique", icon: Users },
  { value: "etudiant", label: "Étudiant", icon: FileText },
  { value: "sorties", label: "Sorties", icon: Calendar },
  { value: "videos", label: "Vidéos", icon: Video },
  { value: "services", label: "Services", icon: ShoppingBag },
  { value: "subscription", label: "Abonnement", icon: CreditCard },
  { value: "legal", label: "Légal", icon: Scale },
  { value: "social", label: "Réseaux sociaux", icon: Share2 },
];

interface Rubrique {
  id: string;
  category: string;
  name: string;
  title: string;
  href: string;
  position: number;
  isVisible: boolean;
  locale: string;
}

const mockRubriques: Rubrique[] = [
  // Dossiers
  {
    id: "1",
    category: "dossiers",
    name: "donald-trump",
    title: "Donald Trump",
    href: "/dossiers/donald-trump",
    position: 0,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "2",
    category: "dossiers",
    name: "guerre-ukraine",
    title: "Guerre en Ukraine",
    href: "/dossiers/guerre-ukraine",
    position: 1,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "3",
    category: "dossiers",
    name: "affaire-epstein",
    title: "Affaire Epstein",
    href: "/dossiers/affaire-epstein",
    position: 2,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "4",
    category: "dossiers",
    name: "iran",
    title: "Iran",
    href: "/dossiers/iran",
    position: 3,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "5",
    category: "dossiers",
    name: "pouvoir-achat",
    title: "Pouvoir d'achat",
    href: "/dossiers/pouvoir-achat",
    position: 4,
    isVisible: true,
    locale: "fr",
  },

  // Series
  {
    id: "6",
    category: "series",
    name: "comptes",
    title: "Dans les comptes",
    href: "/series/comptes",
    position: 0,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "7",
    category: "series",
    name: "lit",
    title: "Dans le lit",
    href: "/series/lit",
    position: 1,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "8",
    category: "series",
    name: "tete",
    title: "Dans la tête",
    href: "/series/tete",
    position: 2,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "9",
    category: "series",
    name: "nouvelle-vie",
    title: "Dans la nouvelle vie",
    href: "/series/nouvelle-vie",
    position: 3,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "10",
    category: "series",
    name: "coeur",
    title: "Dans le cœur",
    href: "/series/coeur",
    position: 4,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "11",
    category: "series",
    name: "quiz",
    title: "Les quiz d'Etheria Times",
    href: "/quiz",
    position: 5,
    isVisible: true,
    locale: "fr",
  },

  // Sports
  {
    id: "12",
    category: "sports",
    name: "psg",
    title: "PSG",
    href: "/sport/psg",
    position: 0,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "13",
    category: "sports",
    name: "ligue-champions",
    title: "Ligue des champions",
    href: "/sport/ligue-champions",
    position: 1,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "14",
    category: "sports",
    name: "ligue-1",
    title: "Ligue 1",
    href: "/sport/ligue-1",
    position: 2,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "15",
    category: "sports",
    name: "paris-fc",
    title: "Paris FC",
    href: "/sport/paris-fc",
    position: 3,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "16",
    category: "sports",
    name: "dembele",
    title: "Ousmane Dembélé",
    href: "/sport/dembele",
    position: 4,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "17",
    category: "sports",
    name: "mbappe",
    title: "Kylian Mbappé",
    href: "/sport/mbappe",
    position: 5,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "18",
    category: "sports",
    name: "cdm-2026",
    title: "Coupe du monde 2026",
    href: "/sport/cdm-2026",
    position: 6,
    isVisible: true,
    locale: "fr",
  },

  // Politique
  {
    id: "19",
    category: "politique",
    name: "macron",
    title: "Emmanuel Macron",
    href: "/politique/macron",
    position: 0,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "20",
    category: "politique",
    name: "lecornu",
    title: "Sébastien Lecornu",
    href: "/politique/lecornu",
    position: 1,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "21",
    category: "politique",
    name: "municipales-2026",
    title: "Municipales 2026",
    href: "/politique/municipales-2026",
    position: 2,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "22",
    category: "politique",
    name: "municipales-2026-paris",
    title: "Municipales 2026 à Paris",
    href: "/politique/municipales-2026-paris",
    position: 3,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "23",
    category: "politique",
    name: "resultats-municipales-2026",
    title: "Résultats municipales 2026",
    href: "/politique/resultats-municipales-2026",
    position: 4,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "24",
    category: "politique",
    name: "presidentielle-2027",
    title: "Présidentielle 2027",
    href: "/politique/presidentielle-2027",
    position: 5,
    isVisible: true,
    locale: "fr",
  },

  // Etudiant
  {
    id: "25",
    category: "etudiant",
    name: "etudiant",
    title: "Étudiant",
    href: "/etudiant",
    position: 0,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "26",
    category: "etudiant",
    name: "seignement-superieur",
    title: "Enseignement supérieur",
    href: "/etudiant/seignement-superieur",
    position: 1,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "27",
    category: "etudiant",
    name: "lycee",
    title: "Lycée",
    href: "/etudiant/lycee",
    position: 2,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "28",
    category: "etudiant",
    name: "college",
    title: "Collège",
    href: "/etudiant/college",
    position: 3,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "29",
    category: "etudiant",
    name: "guide-metiers",
    title: "Guide métiers",
    href: "/etudiant/guide-metiers",
    position: 4,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "30",
    category: "etudiant",
    name: "vie-etudiante",
    title: "Vie étudiante",
    href: "/etudiant/vie-etudiante",
    position: 5,
    isVisible: true,
    locale: "fr",
  },

  // Sorties
  {
    id: "31",
    category: "sorties",
    name: "agenda",
    title: "Agenda sorties",
    href: "/sorties/agenda",
    position: 0,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "32",
    category: "sorties",
    name: "jobs-stages",
    title: "Jobs Stages",
    href: "/sorties/jobs-stages",
    position: 1,
    isVisible: true,
    locale: "fr",
  },

  // Videos
  {
    id: "33",
    category: "videos",
    name: "videos",
    title: "Podcasts & Vidéos",
    href: "/videos",
    position: 0,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "34",
    category: "videos",
    name: "crime-story",
    title: "Crime story",
    href: "/videos/crime-story",
    position: 1,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "35",
    category: "videos",
    name: "code-source",
    title: "Code source",
    href: "/videos/code-source",
    position: 2,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "36",
    category: "videos",
    name: "food-checking",
    title: "Food-checking",
    href: "/videos/food-checking",
    position: 3,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "37",
    category: "videos",
    name: "biclou",
    title: "Biclou",
    href: "/videos/biclou",
    position: 4,
    isVisible: true,
    locale: "fr",
  },

  // Services
  {
    id: "38",
    category: "services",
    name: "bons-plans",
    title: "Bons plans",
    href: "/services/bons-plans",
    position: 0,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "39",
    category: "services",
    name: "guide-achat",
    title: "Sélection du Guide d'achat",
    href: "/services/guide-achat",
    position: 1,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "40",
    category: "services",
    name: "meteo",
    title: "Météo",
    href: "/services/meteo",
    position: 2,
    isVisible: true,
    locale: "fr",
  },

  // Subscription
  {
    id: "41",
    category: "subscription",
    name: "abonnement",
    title: "Abonnement",
    href: "/abonnement",
    position: 0,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "42",
    category: "subscription",
    name: "newsletter",
    title: "Newsletter",
    href: "/newsletter",
    position: 1,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "43",
    category: "subscription",
    name: "app",
    title: "Application mobile",
    href: "/app",
    position: 2,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "44",
    category: "subscription",
    name: "archives",
    title: "Archives",
    href: "/archives",
    position: 3,
    isVisible: true,
    locale: "fr",
  },

  // Legal
  {
    id: "45",
    category: "legal",
    name: "mentions-legales",
    title: "Mentions légales",
    href: "/mentions-legales",
    position: 0,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "46",
    category: "legal",
    name: "cgu",
    title: "CGU",
    href: "/cgu",
    position: 1,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "47",
    category: "legal",
    name: "confidentialite",
    title: "Politique de confidentialité",
    href: "/confidentialite",
    position: 2,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "48",
    category: "legal",
    name: "cookies",
    title: "Gestion des cookies",
    href: "/cookies",
    position: 3,
    isVisible: true,
    locale: "fr",
  },

  // Social
  {
    id: "49",
    category: "social",
    name: "twitter",
    title: "Twitter",
    href: "https://x.com/etheriatimes",
    position: 0,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "50",
    category: "social",
    name: "facebook",
    title: "Facebook",
    href: "https://facebook.com/etheriatimes",
    position: 1,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "51",
    category: "social",
    name: "instagram",
    title: "Instagram",
    href: "https://instagram.com/etheriatimes",
    position: 2,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "52",
    category: "social",
    name: "youtube",
    title: "YouTube",
    href: "https://youtube.com/@etheriatimes",
    position: 3,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "53",
    category: "social",
    name: "discord",
    title: "Discord",
    href: "https://discord.gg/etheriatimes",
    position: 4,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "54",
    category: "social",
    name: "twitch",
    title: "Twitch",
    href: "https://twitch.tv/etheriatimes",
    position: 5,
    isVisible: true,
    locale: "fr",
  },
  {
    id: "55",
    category: "social",
    name: "github",
    title: "GitHub",
    href: "https://github.com/etheriatimes",
    position: 6,
    isVisible: true,
    locale: "fr",
  },
];

export default function RubriquesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredRubriques = mockRubriques.filter((rubrique) => {
    const matchesSearch =
      rubrique.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rubrique.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || rubrique.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryLabel = (category: string) => {
    return categories.find((c) => c.value === category)?.label || category;
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find((c) => c.value === category);
    const Icon = cat?.icon || FolderOpen;
    return <Icon className="h-4 w-4 mr-2" />;
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Rubriques</h1>
        <p className="text-sm text-muted-foreground">
          Gérez les rubriques et liens du pied de page
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-2 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <Globe className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Toutes les rubriques" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les rubriques</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  <span className="flex items-center">
                    {getCategoryIcon(cat.value)}
                    {cat.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Créer une rubriques
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => {
          const count = mockRubriques.filter((r) => r.category === cat.value).length;
          const Icon = cat.icon;
          return (
            <div
              key={cat.value}
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                selectedCategory === cat.value
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat.value ? "all" : cat.value)
              }
            >
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">{cat.label}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{count} liens</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-md border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rubrique</TableHead>
              <TableHead>Nom</TableHead>
              <TableHead>URL</TableHead>
              <TableHead className="w-[80px]">Position</TableHead>
              <TableHead className="w-[80px]">Visible</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRubriques.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                  Aucun résultat
                </TableCell>
              </TableRow>
            ) : (
              filteredRubriques
                .sort((a, b) => a.category.localeCompare(b.category) || a.position - b.position)
                .map((rubrique) => (
                  <TableRow key={rubrique.id}>
                    <TableCell>
                      <span className="flex items-center">
                        {getCategoryIcon(rubrique.category)}
                        {getCategoryLabel(rubrique.category)}
                      </span>
                    </TableCell>
                    <TableCell className="font-medium font-mono">{rubrique.name}</TableCell>
                    <TableCell className="text-muted-foreground text-sm max-w-[200px] truncate">
                      {rubrique.href}
                    </TableCell>
                    <TableCell>{rubrique.position}</TableCell>
                    <TableCell>
                      {rubrique.isVisible ? (
                        <Badge variant="default">Visible</Badge>
                      ) : (
                        <Badge variant="outline">Caché</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/dashboard/dossiers/${rubrique.category}/${rubrique.name}`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon">
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
    </div>
  );
}
