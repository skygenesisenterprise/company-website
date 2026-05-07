"use client";

import { useState } from "react";
import {
  Search,
  Globe,
  FileText,
  Link,
  ExternalLink,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  XCircle,
  Copy,
  RefreshCw,
  Settings,
  Map,
  Bot,
  RefreshCcw,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SeoAudit {
  id: string;
  url: string;
  title: string;
  metaDescription: string;
  h1: string;
  status: "success" | "warning" | "error";
  score: number;
  issues: SeoIssue[];
  lastChecked: string;
}

interface SeoIssue {
  type: "error" | "warning" | "success";
  message: string;
  field: string;
}

interface Keyword {
  id: string;
  keyword: string;
  position: number;
  previousPosition: number;
  volume: number;
  difficulty: string;
  trend: "up" | "down" | "stable";
}

interface MetaTag {
  id: string;
  name: string;
  content: string;
  page: string;
}

const mockAudits: SeoAudit[] = [
  {
    id: "1",
    url: "/",
    title: "The Etheria Times - L'information au service du citoyen",
    metaDescription:
      "The Etheria Times - Votre source d'information indépendante pour rester informé des dernières nouvelles.",
    h1: "L'actualité du jour",
    status: "success",
    score: 92,
    lastChecked: "2026-03-27T10:00:00Z",
    issues: [
      { type: "success", message: "Titre optimal (60 caractères)", field: "title" },
      {
        type: "success",
        message: "Description optimisée (155 caractères)",
        field: "metaDescription",
      },
      { type: "success", message: "Balise H1 présente", field: "h1" },
      { type: "success", message: "Images avec attributs alt", field: "images" },
    ],
  },
  {
    id: "2",
    url: "/politique",
    title: "Politique - The Etheria Times",
    metaDescription: "Actualités politiques Etheria Times",
    h1: "Politique",
    status: "warning",
    score: 75,
    lastChecked: "2026-03-27T10:00:00Z",
    issues: [
      { type: "success", message: "Balise title présente", field: "title" },
      {
        type: "warning",
        message: "Description trop courte (32 caractères)",
        field: "metaDescription",
      },
      { type: "success", message: "Balise H1 présente", field: "h1" },
      { type: "warning", message: "Images sans attributs alt", field: "images" },
    ],
  },
  {
    id: "3",
    url: "/economie",
    title: "Économie",
    metaDescription: "",
    h1: "Actualité économique",
    status: "error",
    score: 45,
    lastChecked: "2026-03-27T10:00:00Z",
    issues: [
      { type: "success", message: "Balise title présente", field: "title" },
      { type: "error", message: "Meta description manquante", field: "metaDescription" },
      { type: "success", message: "Balise H1 présente", field: "h1" },
      { type: "error", message: "Images sans attributs alt", field: "images" },
    ],
  },
];

const mockKeywords: Keyword[] = [
  {
    id: "1",
    keyword: "actualités Etheria",
    position: 3,
    previousPosition: 5,
    volume: 12500,
    difficulty: "moyen",
    trend: "up",
  },
  {
    id: "2",
    keyword: "journal Etheria Times",
    position: 1,
    previousPosition: 1,
    volume: 8200,
    difficulty: "facile",
    trend: "stable",
  },
  {
    id: "3",
    keyword: "news Etheria",
    position: 8,
    previousPosition: 6,
    volume: 5600,
    difficulty: "difficile",
    trend: "down",
  },
  {
    id: "4",
    keyword: "politique Etheria",
    position: 5,
    previousPosition: 8,
    volume: 4200,
    difficulty: "moyen",
    trend: "up",
  },
  {
    id: "5",
    keyword: "économie Etheria",
    position: 12,
    previousPosition: 15,
    volume: 3800,
    difficulty: "moyen",
    trend: "up",
  },
];

const mockMetaTags: MetaTag[] = [
  {
    id: "1",
    name: "description",
    content: "The Etheria Times - Votre source d'information indépendante",
    page: "/",
  },
  { id: "2", name: "keywords", content: "news, actualité, Etheria, journal", page: "/" },
  { id: "3", name: "author", content: "The Etheria Times", page: "/" },
  { id: "4", name: "robots", content: "index, follow", page: "/" },
  {
    id: "5",
    name: "description",
    content: "Actualités politiques Etheria Times",
    page: "/politique",
  },
  { id: "6", name: "og:title", content: "Politique - The Etheria Times", page: "/politique" },
  {
    id: "7",
    name: "og:description",
    content: "Suivez l'actualité politique sur Etheria Times",
    page: "/politique",
  },
];

const statusConfig = {
  success: { label: "Bon", color: "text-green-500", icon: CheckCircle },
  warning: { label: "Attention", color: "text-yellow-500", icon: AlertCircle },
  error: { label: "Erreur", color: "text-red-500", icon: XCircle },
};

const difficultyConfig = {
  facile: { label: "Facile", color: "text-green-500" },
  moyen: { label: "Moyen", color: "text-yellow-500" },
  difficile: { label: "Difficile", color: "text-red-500" },
};

export default function SeoPage() {
  const [activeTab, setActiveTab] = useState<"audit" | "keywords" | "meta" | "settings">("audit");
  const [searchQuery, setSearchQuery] = useState("");
  const [audits, setAudits] = useState<SeoAudit[]>(mockAudits);
  const [isAuditing, setIsAuditing] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [metaToEdit, setMetaToEdit] = useState<MetaTag | null>(null);
  const [editContent, setEditContent] = useState("");
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [auditForDetails, setAuditForDetails] = useState<SeoAudit | null>(null);

  const filteredAudits = audits.filter((audit) =>
    audit.url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = {
    averageScore: Math.round(audits.reduce((acc, a) => acc + a.score, 0) / audits.length),
    successCount: audits.filter((a) => a.status === "success").length,
    warningCount: audits.filter((a) => a.status === "warning").length,
    errorCount: audits.filter((a) => a.status === "error").length,
    topKeyword: mockKeywords[0]?.keyword || "-",
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = [
      "jan",
      "fév",
      "mar",
      "avr",
      "mai",
      "juin",
      "juil",
      "aoû",
      "sep",
      "oct",
      "nov",
      "déc",
    ][date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleRunAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setAudits((prev) =>
        prev.map((a) => ({
          ...a,
          lastChecked: new Date().toISOString(),
        }))
      );
      setIsAuditing(false);
    }, 2000);
  };

  const handleViewDetails = (audit: SeoAudit) => {
    setAuditForDetails(audit);
    setDetailsDialogOpen(true);
  };

  const handleEditMeta = (meta: MetaTag) => {
    setMetaToEdit(meta);
    setEditContent(meta.content);
    setEditDialogOpen(true);
  };

  const saveMetaEdit = () => {
    if (metaToEdit) {
      setAudits((prev) => prev);
    }
    setEditDialogOpen(false);
    setMetaToEdit(null);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">SEO</h1>
          <p className="text-sm text-muted-foreground">Optimisez le référencement de votre site</p>
        </div>
        <Button onClick={handleRunAudit} disabled={isAuditing}>
          {isAuditing ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="mr-2 h-4 w-4" />
          )}
          Lancer l&apos;audit
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Search className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Score moyen</p>
              <p className="text-2xl font-bold">{stats.averageScore}/100</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pages OK</p>
              <p className="text-2xl font-bold">{stats.successCount}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avertissements</p>
              <p className="text-2xl font-bold">{stats.warningCount}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <TrendingUp className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Mot-clé principal</p>
              <p className="text-2xl font-bold truncate">{stats.topKeyword}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-border">
        <button
          onClick={() => setActiveTab("audit")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "audit"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Search className="h-4 w-4" />
          Audit SEO
        </button>
        <button
          onClick={() => setActiveTab("keywords")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "keywords"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <TrendingUp className="h-4 w-4" />
          Mots-clés
        </button>
        <button
          onClick={() => setActiveTab("meta")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "meta"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <FileText className="h-4 w-4" />
          Méta tags
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "settings"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Settings className="h-4 w-4" />
          Configuration
        </button>
      </div>

      {/* Filters */}
      {activeTab === "audit" && (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Rechercher une page..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      )}

      {/* Audit Tab */}
      {activeTab === "audit" && (
        <div className="space-y-4">
          {filteredAudits.length === 0 ? (
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Aucun résultat trouvé</p>
            </div>
          ) : (
            filteredAudits.map((audit) => {
              const StatusIcon = statusConfig[audit.status].icon;
              return (
                <Card key={audit.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                          <Globe className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{audit.url}</CardTitle>
                          <CardDescription>{audit.title}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Score SEO</p>
                          <p
                            className={`text-2xl font-bold ${
                              audit.score >= 80
                                ? "text-green-500"
                                : audit.score >= 50
                                  ? "text-yellow-500"
                                  : "text-red-500"
                            }`}
                          >
                            {audit.score}
                          </p>
                        </div>
                        <Badge
                          variant={
                            audit.status === "success"
                              ? "default"
                              : audit.status === "warning"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          <StatusIcon className="mr-1 h-3 w-3" />
                          {statusConfig[audit.status].label}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {audit.issues.map((issue, index) => {
                        const IssueIcon = statusConfig[issue.type].icon;
                        return (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <IssueIcon className={`h-4 w-4 ${statusConfig[issue.type].color}`} />
                            <span className={statusConfig[issue.type].color}>{issue.message}</span>
                          </div>
                        );
                      })}
                    </div>
                    <Separator className="mt-4" />
                    <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                      <span>Dernière analyse: {formatDate(audit.lastChecked)}</span>
                      <Button variant="outline" size="sm" onClick={() => handleViewDetails(audit)}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Détails complets
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      )}

      {/* Keywords Tab */}
      {activeTab === "keywords" && (
        <div className="rounded-lg border border-border bg-card">
          <div className="grid gap-4 p-4">
            {mockKeywords.map((keyword) => (
              <div
                key={keyword.id}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">#{keyword.position}</p>
                    <p className="text-xs text-muted-foreground">Position</p>
                  </div>
                  <div>
                    <p className="font-medium">{keyword.keyword}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{keyword.volume.toLocaleString()} recherches/mois</span>
                      <span>•</span>
                      <span
                        className={
                          difficultyConfig[keyword.difficulty as keyof typeof difficultyConfig]
                            .color
                        }
                      >
                        {
                          difficultyConfig[keyword.difficulty as keyof typeof difficultyConfig]
                            .label
                        }
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {keyword.trend === "up" && <TrendingUp className="h-5 w-5 text-green-500" />}
                  {keyword.trend === "down" && <TrendingDown className="h-5 w-5 text-red-500" />}
                  {keyword.trend === "stable" && <span className="text-muted-foreground">-</span>}
                  <span className="text-sm text-muted-foreground">
                    {keyword.previousPosition > keyword.position
                      ? `+${keyword.previousPosition - keyword.position}`
                      : keyword.previousPosition < keyword.position
                        ? `${keyword.previousPosition - keyword.position}`
                        : "0"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Meta Tags Tab */}
      {activeTab === "meta" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Balises méta</CardTitle>
              <CardDescription>Gérez les balises méta de votre site</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockMetaTags.map((meta) => (
                  <div
                    key={meta.id}
                    className="flex items-center justify-between rounded-lg border border-border p-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{meta.name}</Badge>
                        <span className="text-sm text-muted-foreground">{meta.page}</span>
                      </div>
                      <p className="mt-2 font-mono text-sm">{meta.content}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => handleEditMeta(meta)}>
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div className="space-y-6">
          {/* Sitemap */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                Sitemap XML
              </CardTitle>
              <CardDescription>Gérez votre fichier sitemap.xml</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>URL du sitemap</Label>
                <div className="flex gap-2">
                  <Input
                    value="https://etheriatimes.com/sitemap.xml"
                    readOnly
                    className="font-mono"
                  />
                  <Button variant="outline">
                    <Copy className="mr-2 h-4 w-4" />
                    Copier
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-3">
                  <RefreshCcw className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Régénérer le sitemap</p>
                    <p className="text-sm text-muted-foreground">
                      Met à jour le sitemap avec les dernières pages
                    </p>
                  </div>
                </div>
                <Button variant="outline">Régénérer</Button>
              </div>
            </CardContent>
          </Card>

          {/* Robots.txt */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Robots.txt
              </CardTitle>
              <CardDescription>Configurez l'accès des robots</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Contenu du fichier robots.txt</Label>
                <Textarea
                  className="font-mono text-sm"
                  rows={10}
                  defaultValue={`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://etheriatimes.com/sitemap.xml`}
                />
              </div>
              <Button>Enregistrer</Button>
            </CardContent>
          </Card>

          {/* Canonical URLs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link className="h-5 w-5" />
                URL canoniques
              </CardTitle>
              <CardDescription>Gestion des URLs canoniques</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium">URLs canoniques automatiques</p>
                    <p className="text-sm text-muted-foreground">
                      Ajoute automatiquement les balises canonical
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Open Graph */}
          <Card>
            <CardHeader>
              <CardTitle>Open Graph</CardTitle>
              <CardDescription>Configuration pour les réseaux sociaux</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>og:title par défaut</Label>
                  <Input defaultValue="The Etheria Times" />
                </div>
                <div className="space-y-2">
                  <Label>og:description par défaut</Label>
                  <Input defaultValue="L'information au service du citoyen" />
                </div>
                <div className="space-y-2">
                  <Label>og:url</Label>
                  <Input defaultValue="https://etheriatimes.com" />
                </div>
                <div className="space-y-2">
                  <Label>og:site_name</Label>
                  <Input defaultValue="The Etheria Times" />
                </div>
              </div>
              <Button>Enregistrer</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Edit Meta Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier la balise méta</DialogTitle>
            <DialogDescription>
              Modifiez la balise {metaToEdit?.name} pour la page {metaToEdit?.page}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="metaContent">Contenu</Label>
              <Textarea
                id="metaContent"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={saveMetaEdit}>Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Audit Details Dialog */}
      <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Analyse SEO détaillée</DialogTitle>
            <DialogDescription>{auditForDetails?.url}</DialogDescription>
          </DialogHeader>
          {auditForDetails && (
            <div className="space-y-4 py-2 overflow-y-auto flex-1 pr-2">
              {/* Score */}
              <div className="flex items-center justify-center">
                <div className="relative flex h-32 w-32 items-center justify-center">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-muted"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${auditForDetails.score * 2.83} 283`}
                      className={
                        auditForDetails.score >= 80
                          ? "text-green-500"
                          : auditForDetails.score >= 50
                            ? "text-yellow-500"
                            : "text-red-500"
                      }
                    />
                  </svg>
                  <span className="absolute text-3xl font-bold">{auditForDetails.score}</span>
                </div>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label className="text-muted-foreground">Titre (title)</Label>
                <div className="rounded-lg border border-border bg-muted/50 p-3">
                  <p className="font-medium">{auditForDetails.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {auditForDetails.title.length} caractères
                  </p>
                </div>
              </div>

              {/* Meta Description */}
              <div className="space-y-2">
                <Label className="text-muted-foreground">Description (meta description)</Label>
                <div className="rounded-lg border border-border bg-muted/50 p-3">
                  {auditForDetails.metaDescription ? (
                    <>
                      <p className="font-medium">{auditForDetails.metaDescription}</p>
                      <p className="text-sm text-muted-foreground">
                        {auditForDetails.metaDescription.length} caractères
                      </p>
                    </>
                  ) : (
                    <p className="text-red-500">Aucune description</p>
                  )}
                </div>
              </div>

              {/* H1 */}
              <div className="space-y-2">
                <Label className="text-muted-foreground">Balise H1</Label>
                <div className="rounded-lg border border-border bg-muted/50 p-3">
                  <p className="font-medium">{auditForDetails.h1}</p>
                </div>
              </div>

              {/* Issues */}
              <div className="space-y-2">
                <Label className="text-muted-foreground">Problèmes détectés</Label>
                <div className="space-y-2">
                  {auditForDetails.issues.map((issue, index) => {
                    const IssueIcon = statusConfig[issue.type].icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-lg border border-border p-3"
                      >
                        <IssueIcon
                          className={`h-5 w-5 shrink-0 ${statusConfig[issue.type].color}`}
                        />
                        <div>
                          <p className="font-medium">{issue.message}</p>
                          <p className="text-sm text-muted-foreground">Champ: {issue.field}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recommendations */}
              <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Recommandations</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Optimisez votre titre pour qu&apos;il fasse entre 50-60 caractères</li>
                      <li>• Rédigez une description meta de 150-160 caractères</li>
                      <li>• Assurez-vous que toutes vos images ont un attribut alt</li>
                      <li>• Utilisez des balises heading (H1, H2, H3) correctement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDetailsDialogOpen(false)}>
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
