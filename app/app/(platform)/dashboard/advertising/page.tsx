"use client";

import { useState } from "react";
import {
  Megaphone,
  MousePointer,
  Eye,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Search,
  MoreHorizontal,
  Plus,
  Pencil,
  Trash2,
  Eye as EyeIcon,
  Pause,
  Play,
  Loader2,
  BarChart3,
  Globe,
  LayoutTemplate,
  Calendar,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface AdCampaign {
  id: string;
  name: string;
  status: "active" | "paused" | "draft" | "completed";
  type: "banner" | "sponsored" | "video" | "native";
  impressions: number;
  clicks: number;
  ctr: number;
  spend: number;
  budget: number;
  startDate: string;
  endDate?: string;
  advertiser: string;
}

interface AdPlacement {
  id: string;
  name: string;
  zone: string;
  format: string;
  position: string;
  impressions: number;
  clicks: number;
  ctr: number;
  revenue: number;
  status: "active" | "inactive";
}

const mockCampaigns: AdCampaign[] = [
  {
    id: "1",
    name: "Campagne été 2026",
    status: "active",
    type: "banner",
    impressions: 125000,
    clicks: 3250,
    ctr: 2.6,
    spend: 850,
    budget: 2000,
    startDate: "2026-01-15",
    endDate: "2026-03-31",
    advertiser: "Etheria Corp",
  },
  {
    id: "2",
    name: "Produit Premium",
    status: "active",
    type: "sponsored",
    impressions: 85000,
    clicks: 2100,
    ctr: 2.47,
    spend: 620,
    budget: 1500,
    startDate: "2026-02-01",
    endDate: "2026-04-30",
    advertiser: "Tech Solutions",
  },
  {
    id: "3",
    name: "Newsletter sponsorisée",
    status: "paused",
    type: "native",
    impressions: 45000,
    clicks: 1800,
    ctr: 4.0,
    spend: 450,
    budget: 1000,
    startDate: "2026-01-20",
    endDate: "2026-02-20",
    advertiser: "Finance Plus",
  },
  {
    id: "4",
    name: "Video brand",
    status: "draft",
    type: "video",
    impressions: 0,
    clicks: 0,
    ctr: 0,
    spend: 0,
    budget: 3000,
    startDate: "2026-04-01",
    endDate: "2026-06-30",
    advertiser: "Auto Motors",
  },
  {
    id: "5",
    name: "Promo printemps",
    status: "completed",
    type: "banner",
    impressions: 200000,
    clicks: 4500,
    ctr: 2.25,
    spend: 1200,
    budget: 1200,
    startDate: "2025-12-01",
    endDate: "2026-01-31",
    advertiser: "Shop Local",
  },
  {
    id: "6",
    name: "Partner link",
    status: "active",
    type: "native",
    impressions: 62000,
    clicks: 1850,
    ctr: 2.98,
    spend: 380,
    budget: 800,
    startDate: "2026-02-15",
    advertiser: "Media Group",
  },
];

const mockPlacements: AdPlacement[] = [
  {
    id: "1",
    name: "Bannière header",
    zone: "header",
    format: "728x90",
    position: "Haut de page",
    impressions: 150000,
    clicks: 3200,
    ctr: 2.13,
    revenue: 450,
    status: "active",
  },
  {
    id: "2",
    name: "Bannière sidebar",
    zone: "sidebar",
    format: "300x250",
    position: "Colonne droite",
    impressions: 120000,
    clicks: 2800,
    ctr: 2.33,
    revenue: 380,
    status: "active",
  },
  {
    id: "3",
    name: "Bannière article",
    zone: "article",
    format: "640x100",
    position: "Fin d'article",
    impressions: 95000,
    clicks: 2100,
    ctr: 2.21,
    revenue: 290,
    status: "active",
  },
  {
    id: "4",
    name: "Between content",
    zone: "content",
    format: "800x200",
    position: "Milieu de contenu",
    impressions: 75000,
    clicks: 1650,
    ctr: 2.2,
    revenue: 220,
    status: "inactive",
  },
  {
    id: "5",
    name: "Footer banner",
    zone: "footer",
    format: "468x60",
    position: "Pied de page",
    impressions: 180000,
    clicks: 2100,
    ctr: 1.17,
    revenue: 180,
    status: "active",
  },
];

const campaignTypeConfig = {
  banner: { label: "Bannière", variant: "default" as const },
  sponsored: { label: "Sponsorisé", variant: "secondary" as const },
  video: { label: "Vidéo", variant: "outline" as const },
  native: { label: "Natif", variant: "secondary" as const },
};

const campaignStatusConfig = {
  active: { label: "Actif", color: "text-green-500", icon: Play },
  paused: { label: "En pause", color: "text-yellow-500", icon: Pause },
  draft: { label: "Brouillon", color: "text-gray-500", icon: Pencil },
  completed: { label: "Terminé", color: "text-blue-500", icon: TrendingUp },
};

const placementStatusConfig = {
  active: { label: "Actif", color: "text-green-500" },
  inactive: { label: "Inactif", color: "text-gray-500" },
};

export default function AdvertisingPage() {
  const [activeTab, setActiveTab] = useState<"campaigns" | "placements">("campaigns");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([]);
  const [selectedPlacements, setSelectedPlacements] = useState<string[]>([]);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  const filteredCampaigns = mockCampaigns.filter((campaign) => {
    const matchesSearch =
      campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.advertiser.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || campaign.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredPlacements = mockPlacements.filter((placement) => {
    const matchesSearch = placement.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || placement.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    totalImpressions: mockCampaigns.reduce((acc, c) => acc + c.impressions, 0),
    totalClicks: mockCampaigns.reduce((acc, c) => acc + c.clicks, 0),
    averageCtr: (mockCampaigns.reduce((acc, c) => acc + c.ctr, 0) / mockCampaigns.length).toFixed(
      2
    ),
    totalSpend: mockCampaigns.reduce((acc, c) => acc + c.spend, 0),
    totalRevenue: mockPlacements.reduce((acc, p) => acc + p.revenue, 0),
    activeCampaigns: mockCampaigns.filter((c) => c.status === "active").length,
  };

  const toggleSelectAllCampaigns = () => {
    if (selectedCampaigns.length === filteredCampaigns.length) {
      setSelectedCampaigns([]);
    } else {
      setSelectedCampaigns(filteredCampaigns.map((c) => c.id));
    }
  };

  const toggleSelectCampaign = (id: string) => {
    setSelectedCampaigns((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const toggleSelectAllPlacements = () => {
    if (selectedPlacements.length === filteredPlacements.length) {
      setSelectedPlacements([]);
    } else {
      setSelectedPlacements(filteredPlacements.map((p) => p.id));
    }
  };

  const toggleSelectPlacement = (id: string) => {
    setSelectedPlacements((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("fr-FR").format(num);
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(num);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
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
    ][date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Publicité</h1>
          <p className="text-sm text-muted-foreground">
            Gérez vos campagnes publicitaires et emplacements
          </p>
        </div>
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle campagne
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Eye className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Impressions</p>
              <p className="text-2xl font-bold">{formatNumber(stats.totalImpressions)}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <MousePointer className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Clics</p>
              <p className="text-2xl font-bold">{formatNumber(stats.totalClicks)}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">CTR moyen</p>
              <p className="text-2xl font-bold">{stats.averageCtr}%</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10">
              <DollarSign className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Revenus</p>
              <p className="text-2xl font-bold">{formatCurrency(stats.totalRevenue)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-border">
        <button
          onClick={() => setActiveTab("campaigns")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "campaigns"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Megaphone className="h-4 w-4" />
          Campagnes
          <Badge variant="secondary" className="ml-1">
            {mockCampaigns.length}
          </Badge>
        </button>
        <button
          onClick={() => setActiveTab("placements")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "placements"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <LayoutTemplate className="h-4 w-4" />
          Emplacements
          <Badge variant="secondary" className="ml-1">
            {mockPlacements.length}
          </Badge>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={
              activeTab === "campaigns"
                ? "Rechercher une campagne..."
                : "Rechercher un emplacement..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            {activeTab === "campaigns" ? (
              <>
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="paused">En pause</SelectItem>
                <SelectItem value="draft">Brouillon</SelectItem>
                <SelectItem value="completed">Terminé</SelectItem>
              </>
            ) : (
              <>
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="inactive">Inactif</SelectItem>
              </>
            )}
          </SelectContent>
        </Select>
      </div>

      {/* Bulk Actions */}
      {((activeTab === "campaigns" && selectedCampaigns.length > 0) ||
        (activeTab === "placements" && selectedPlacements.length > 0)) && (
        <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-3">
          <span className="text-sm text-muted-foreground">
            {activeTab === "campaigns"
              ? `${selectedCampaigns.length} campagne${selectedCampaigns.length > 1 ? "s" : ""} sélectionné${selectedCampaigns.length > 1 ? "s" : ""}`
              : `${selectedPlacements.length} emplacement${selectedPlacements.length > 1 ? "s" : ""} sélectionné${selectedPlacements.length > 1 ? "s" : ""}`}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Pencil className="mr-2 h-4 w-4" />
              Modifier
            </Button>
            <Button variant="outline" size="sm">
              <Pause className="mr-2 h-4 w-4" />
              {activeTab === "campaigns" ? "Mettre en pause" : "Désactiver"}
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer
            </Button>
          </div>
        </div>
      )}

      {/* Campaigns Table */}
      {activeTab === "campaigns" && (
        <div className="rounded-lg border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={
                      selectedCampaigns.length === filteredCampaigns.length &&
                      filteredCampaigns.length > 0
                    }
                    onCheckedChange={toggleSelectAllCampaigns}
                    aria-label="Sélectionner tout"
                  />
                </TableHead>
                <TableHead>Campagne</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Impressions</TableHead>
                <TableHead className="text-right">Clics</TableHead>
                <TableHead className="text-right">CTR</TableHead>
                <TableHead className="text-right">Dépense</TableHead>
                <TableHead className="text-right">Budget</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCampaigns.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={10} className="h-24 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Megaphone className="h-8 w-8 text-muted-foreground" />
                      <p className="text-muted-foreground">Aucune campagne trouvée</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredCampaigns.map((campaign) => {
                  const StatusIcon = campaignStatusConfig[campaign.status].icon;
                  return (
                    <TableRow key={campaign.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedCampaigns.includes(campaign.id)}
                          onCheckedChange={() => toggleSelectCampaign(campaign.id)}
                          aria-label={`Sélectionner ${campaign.name}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{campaign.name}</p>
                          <p className="text-xs text-muted-foreground">{campaign.advertiser}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={campaignTypeConfig[campaign.type].variant}>
                          {campaignTypeConfig[campaign.type].label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`flex items-center gap-1.5 ${campaignStatusConfig[campaign.status].color}`}
                        >
                          <StatusIcon className="h-4 w-4" />
                          {campaignStatusConfig[campaign.status].label}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        {formatNumber(campaign.impressions)}
                      </TableCell>
                      <TableCell className="text-right">{formatNumber(campaign.clicks)}</TableCell>
                      <TableCell className="text-right">{campaign.ctr.toFixed(2)}%</TableCell>
                      <TableCell className="text-right">{formatCurrency(campaign.spend)}</TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(campaign.budget)}
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
                              <EyeIcon className="mr-2 h-4 w-4" />
                              Voir les détails
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <BarChart3 className="mr-2 h-4 w-4" />
                              Statistiques
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Pencil className="mr-2 h-4 w-4" />
                              Modifier
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {campaign.status === "active" ? (
                              <DropdownMenuItem>
                                <Pause className="mr-2 h-4 w-4" />
                                Mettre en pause
                              </DropdownMenuItem>
                            ) : campaign.status === "paused" ? (
                              <DropdownMenuItem>
                                <Play className="mr-2 h-4 w-4" />
                                Reprendre
                              </DropdownMenuItem>
                            ) : null}
                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Placements Table */}
      {activeTab === "placements" && (
        <div className="rounded-lg border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={
                      selectedPlacements.length === filteredPlacements.length &&
                      filteredPlacements.length > 0
                    }
                    onCheckedChange={toggleSelectAllPlacements}
                    aria-label="Sélectionner tout"
                  />
                </TableHead>
                <TableHead>Emplacement</TableHead>
                <TableHead>Zone</TableHead>
                <TableHead>Format</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Impressions</TableHead>
                <TableHead className="text-right">Clics</TableHead>
                <TableHead className="text-right">CTR</TableHead>
                <TableHead className="text-right">Revenus</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPlacements.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={10} className="h-24 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <LayoutTemplate className="h-8 w-8 text-muted-foreground" />
                      <p className="text-muted-foreground">Aucun emplacement trouvé</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredPlacements.map((placement) => (
                  <TableRow key={placement.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedPlacements.includes(placement.id)}
                        onCheckedChange={() => toggleSelectPlacement(placement.id)}
                        aria-label={`Sélectionner ${placement.name}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{placement.name}</p>
                        <p className="text-xs text-muted-foreground">{placement.position}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{placement.zone}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{placement.format}</TableCell>
                    <TableCell>
                      <span
                        className={`flex items-center gap-1.5 ${placementStatusConfig[placement.status].color}`}
                      >
                        {placement.status === "active" ? (
                          <Play className="h-4 w-4" />
                        ) : (
                          <Pause className="h-4 w-4" />
                        )}
                        {placementStatusConfig[placement.status].label}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {formatNumber(placement.impressions)}
                    </TableCell>
                    <TableCell className="text-right">{formatNumber(placement.clicks)}</TableCell>
                    <TableCell className="text-right">{placement.ctr.toFixed(2)}%</TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(placement.revenue)}
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
                            <EyeIcon className="mr-2 h-4 w-4" />
                            Voir les détails
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BarChart3 className="mr-2 h-4 w-4" />
                            Statistiques
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil className="mr-2 h-4 w-4" />
                            Modifier
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive focus:text-destructive">
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
      )}

      {/* Create Campaign Dialog */}
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nouvelle campagne</DialogTitle>
            <DialogDescription>Créez une nouvelle campagne publicitaire</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="campaignName">Nom de la campagne</Label>
              <Input id="campaignName" placeholder="Nom de la campagne" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="advertiser">Annonceur</Label>
              <Input id="advertiser" placeholder="Nom de l'annonceur" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="campaignType">Type de campagne</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banner">Bannière</SelectItem>
                  <SelectItem value="sponsored">Sponsorisé</SelectItem>
                  <SelectItem value="video">Vidéo</SelectItem>
                  <SelectItem value="native">Natif</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget</Label>
              <Input id="budget" type="number" placeholder="0.00" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Date de début</Label>
                <Input id="startDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">Date de fin</Label>
                <Input id="endDate" type="date" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={() => setCreateDialogOpen(false)}>Créer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
