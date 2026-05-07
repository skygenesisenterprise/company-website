"use client";

import { useState } from "react";
import {
  Mail,
  Users,
  Send,
  FileText,
  Search,
  MoreHorizontal,
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeIcon,
  Loader2,
  BarChart3,
  Copy,
  Clock,
  CheckCircle,
  XCircle,
  ArrowRight,
  Calendar,
  Zap,
  MousePointer,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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

interface NewsletterCampaign {
  id: string;
  subject: string;
  status: "draft" | "scheduled" | "sent" | "failed";
  scheduledAt?: string;
  sentAt?: string;
  recipients: number;
  opened: number;
  clicked: number;
  openRate: number;
  clickRate: number;
}

interface Subscriber {
  id: string;
  email: string;
  name?: string;
  status: "active" | "unsubscribed";
  subscribedAt: string;
  lastReceivedAt?: string;
}

interface Template {
  id: string;
  name: string;
  subject: string;
  createdAt: string;
  usageCount: number;
}

const mockCampaigns: NewsletterCampaign[] = [
  {
    id: "1",
    subject: "L'actualité de la semaine - Édition spéciale",
    status: "sent",
    sentAt: "2026-03-20T10:00:00Z",
    recipients: 5420,
    opened: 2150,
    clicked: 680,
    openRate: 39.7,
    clickRate: 12.5,
  },
  {
    id: "2",
    subject: "Les headlines du jour - 19 Mars",
    status: "sent",
    sentAt: "2026-03-19T08:00:00Z",
    recipients: 5380,
    opened: 1980,
    clicked: 520,
    openRate: 36.8,
    clickRate: 9.7,
  },
  {
    id: "3",
    subject: "Votre résumé hebdomadaire",
    status: "scheduled",
    scheduledAt: "2026-03-27T09:00:00Z",
    recipients: 5450,
    opened: 0,
    clicked: 0,
    openRate: 0,
    clickRate: 0,
  },
  {
    id: "4",
    subject: "Édition spéciale: Élections 2026",
    status: "draft",
    recipients: 0,
    opened: 0,
    clicked: 0,
    openRate: 0,
    clickRate: 0,
  },
  {
    id: "5",
    subject: "L'actualité du weekend",
    status: "sent",
    sentAt: "2026-03-15T09:00:00Z",
    recipients: 5200,
    opened: 1850,
    clicked: 420,
    openRate: 35.6,
    clickRate: 8.1,
  },
  {
    id: "6",
    subject: "Newsletter mensuelle - Février",
    status: "sent",
    sentAt: "2026-02-28T10:00:00Z",
    recipients: 5100,
    opened: 2100,
    clicked: 650,
    openRate: 41.2,
    clickRate: 12.7,
  },
];

const mockSubscribers: Subscriber[] = [
  {
    id: "1",
    email: "marie.dupont@email.com",
    name: "Marie Dupont",
    status: "active",
    subscribedAt: "2025-01-15",
    lastReceivedAt: "2026-03-20",
  },
  {
    id: "2",
    email: "thomas.martin@email.com",
    name: "Thomas Martin",
    status: "active",
    subscribedAt: "2025-02-20",
    lastReceivedAt: "2026-03-20",
  },
  {
    id: "3",
    email: "sophie.laurent@email.com",
    name: "Sophie Laurent",
    status: "active",
    subscribedAt: "2025-03-10",
    lastReceivedAt: "2026-03-19",
  },
  {
    id: "4",
    email: "pierre.moreau@email.com",
    name: "Pierre Moreau",
    status: "unsubscribed",
    subscribedAt: "2025-04-05",
  },
  {
    id: "5",
    email: "julie.bernard@email.com",
    name: "Julie Bernard",
    status: "active",
    subscribedAt: "2025-05-12",
    lastReceivedAt: "2026-03-20",
  },
  {
    id: "6",
    email: "marc.leroy@email.com",
    status: "active",
    subscribedAt: "2025-06-18",
    lastReceivedAt: "2026-03-15",
  },
  {
    id: "7",
    email: "jean.dupont@email.com",
    name: "Jean Dupont",
    status: "active",
    subscribedAt: "2025-07-22",
    lastReceivedAt: "2026-03-19",
  },
  {
    id: "8",
    email: "claire Martin@email.com",
    name: "Claire Martin",
    status: "active",
    subscribedAt: "2026-03-01",
    lastReceivedAt: "2026-03-20",
  },
];

const mockTemplates: Template[] = [
  {
    id: "1",
    name: "Newsletter hebdomadaire",
    subject: "L'actualité de la semaine",
    createdAt: "2025-01-01",
    usageCount: 45,
  },
  {
    id: "2",
    name: "Édition quotidienne",
    subject: "Les headlines du jour",
    createdAt: "2025-02-15",
    usageCount: 120,
  },
  {
    id: "3",
    name: "Résumé mensuel",
    subject: "Newsletter mensuelle",
    createdAt: "2025-03-10",
    usageCount: 12,
  },
  {
    id: "4",
    name: "Special breaking",
    subject: "Édition spéciale: {title}",
    createdAt: "2025-06-20",
    usageCount: 8,
  },
];

const campaignStatusConfig = {
  draft: { label: "Brouillon", color: "text-gray-500", icon: FileText },
  scheduled: { label: "Planifié", color: "text-blue-500", icon: Clock },
  sent: { label: "Envoyé", color: "text-green-500", icon: CheckCircle },
  failed: { label: "Échoué", color: "text-red-500", icon: XCircle },
};

const subscriberStatusConfig = {
  active: { label: "Actif", color: "text-green-500" },
  unsubscribed: { label: "Désabonné", color: "text-gray-500" },
};

export default function NewsletterPage() {
  const [activeTab, setActiveTab] = useState<"campaigns" | "subscribers" | "templates">(
    "campaigns"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([]);
  const [selectedSubscribers, setSelectedSubscribers] = useState<string[]>([]);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [newCampaignSubject, setNewCampaignSubject] = useState("");
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<NewsletterCampaign | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [campaignToEdit, setCampaignToEdit] = useState<NewsletterCampaign | null>(null);
  const [statsDialogOpen, setStatsDialogOpen] = useState(false);
  const [campaignForStats, setCampaignForStats] = useState<NewsletterCampaign | null>(null);
  const [scheduleDialogOpen, setScheduleDialogOpen] = useState(false);
  const [campaignToSchedule, setCampaignToSchedule] = useState<NewsletterCampaign | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [campaignToDelete, setCampaignToDelete] = useState<NewsletterCampaign | null>(null);
  const [campaigns, setCampaigns] = useState<NewsletterCampaign[]>(mockCampaigns);

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || campaign.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredSubscribers = mockSubscribers.filter((subscriber) => {
    const matchesSearch =
      subscriber.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (subscriber.name && subscriber.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === "all" || subscriber.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const sentCampaigns = campaigns.filter((c) => c.status === "sent");
  const stats = {
    totalSubscribers: mockSubscribers.filter((s) => s.status === "active").length,
    unsubscribed: mockSubscribers.filter((s) => s.status === "unsubscribed").length,
    totalSent: sentCampaigns.reduce((acc, c) => acc + c.recipients, 0),
    avgOpenRate:
      sentCampaigns.length > 0
        ? (sentCampaigns.reduce((acc, c) => acc + c.openRate, 0) / sentCampaigns.length).toFixed(1)
        : "0.0",
    avgClickRate:
      sentCampaigns.length > 0
        ? (sentCampaigns.reduce((acc, c) => acc + c.clickRate, 0) / sentCampaigns.length).toFixed(1)
        : "0.0",
    lastCampaign: sentCampaigns[0]?.openRate || 0,
  };

  const handleViewDetails = (campaign: NewsletterCampaign) => {
    setSelectedCampaign(campaign);
    setDetailsDialogOpen(true);
  };

  const handleViewStats = (campaign: NewsletterCampaign) => {
    setCampaignForStats(campaign);
    setStatsDialogOpen(true);
  };

  const handleDuplicate = (campaign: NewsletterCampaign) => {
    const newCampaign: NewsletterCampaign = {
      ...campaign,
      id: Date.now().toString(),
      subject: `${campaign.subject} (copie)`,
      status: "draft",
      sentAt: undefined,
      scheduledAt: undefined,
      opened: 0,
      clicked: 0,
      openRate: 0,
      clickRate: 0,
    };
    setCampaigns((prev) => [newCampaign, ...prev]);
  };

  const handleEdit = (campaign: NewsletterCampaign) => {
    setCampaignToEdit(campaign);
    setEditDialogOpen(true);
  };

  const handleSend = (campaign: NewsletterCampaign) => {
    setCampaigns((prev) =>
      prev.map((c) =>
        c.id === campaign.id
          ? { ...c, status: "sent" as const, sentAt: new Date().toISOString() }
          : c
      )
    );
  };

  const handleSchedule = (campaign: NewsletterCampaign) => {
    setCampaignToSchedule(campaign);
    setScheduleDialogOpen(true);
  };

  const confirmSchedule = (date: string) => {
    if (campaignToSchedule) {
      setCampaigns((prev) =>
        prev.map((c) =>
          c.id === campaignToSchedule.id
            ? { ...c, status: "scheduled" as const, scheduledAt: date }
            : c
        )
      );
    }
    setScheduleDialogOpen(false);
    setCampaignToSchedule(null);
  };

  const handleDelete = (campaign: NewsletterCampaign) => {
    setCampaignToDelete(campaign);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (campaignToDelete) {
      setCampaigns((prev) => prev.filter((c) => c.id !== campaignToDelete.id));
      setSelectedCampaigns((prev) => prev.filter((id) => id !== campaignToDelete.id));
    }
    setDeleteDialogOpen(false);
    setCampaignToDelete(null);
  };

  const handleEditSave = () => {
    if (campaignToEdit) {
      setCampaigns((prev) =>
        prev.map((c) =>
          c.id === campaignToEdit.id ? { ...c, subject: campaignToEdit.subject } : c
        )
      );
    }
    setEditDialogOpen(false);
    setCampaignToEdit(null);
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

  const toggleSelectAllSubscribers = () => {
    if (selectedSubscribers.length === filteredSubscribers.length) {
      setSelectedSubscribers([]);
    } else {
      setSelectedSubscribers(filteredSubscribers.map((s) => s.id));
    }
  };

  const toggleSelectSubscriber = (id: string) => {
    setSelectedSubscribers((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("fr-FR").format(num);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "-";
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
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day} ${month} ${year}, ${hours}:${minutes}`;
  };

  const handleCreateCampaign = () => {
    if (!newCampaignSubject.trim()) return;
    setCreateDialogOpen(false);
    setNewCampaignSubject("");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Newsletter</h1>
          <p className="text-sm text-muted-foreground">Gérez vos campagnes et abonnés</p>
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
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Abonnés</p>
              <p className="text-2xl font-bold">{formatNumber(stats.totalSubscribers)}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <Send className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Envoyés</p>
              <p className="text-2xl font-bold">{formatNumber(stats.totalSent)}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
              <EyeIcon className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Taux d'ouverture</p>
              <p className="text-2xl font-bold">{stats.avgOpenRate}%</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10">
              <MousePointer className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Taux de clic</p>
              <p className="text-2xl font-bold">{stats.avgClickRate}%</p>
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
          <Send className="h-4 w-4" />
          Campagnes
          <Badge variant="secondary" className="ml-1">
            {campaigns.length}
          </Badge>
        </button>
        <button
          onClick={() => setActiveTab("subscribers")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "subscribers"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Users className="h-4 w-4" />
          Abonnés
          <Badge variant="secondary" className="ml-1">
            {mockSubscribers.filter((s) => s.status === "active").length}
          </Badge>
        </button>
        <button
          onClick={() => setActiveTab("templates")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "templates"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <FileText className="h-4 w-4" />
          Modèles
          <Badge variant="secondary" className="ml-1">
            {mockTemplates.length}
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
                : activeTab === "subscribers"
                  ? "Rechercher un abonné..."
                  : "Rechercher un modèle..."
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
                <SelectItem value="draft">Brouillon</SelectItem>
                <SelectItem value="scheduled">Planifié</SelectItem>
                <SelectItem value="sent">Envoyé</SelectItem>
                <SelectItem value="failed">Échoué</SelectItem>
              </>
            ) : activeTab === "subscribers" ? (
              <>
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="unsubscribed">Désabonné</SelectItem>
              </>
            ) : null}
          </SelectContent>
        </Select>
      </div>

      {/* Bulk Actions */}
      {((activeTab === "campaigns" && selectedCampaigns.length > 0) ||
        (activeTab === "subscribers" && selectedSubscribers.length > 0)) && (
        <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-3">
          <span className="text-sm text-muted-foreground">
            {activeTab === "campaigns"
              ? `${selectedCampaigns.length} campagne${selectedCampaigns.length > 1 ? "s" : ""} sélectionné${selectedCampaigns.length > 1 ? "s" : ""}`
              : `${selectedSubscribers.length} abonné${selectedSubscribers.length > 1 ? "s" : ""} sélectionné${selectedSubscribers.length > 1 ? "s" : ""}`}
          </span>
          <div className="flex gap-2">
            {activeTab === "campaigns" ? (
              <>
                <Button variant="outline" size="sm">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer
                </Button>
                <Button variant="outline" size="sm">
                  <Pencil className="mr-2 h-4 w-4" />
                  Modifier
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Supprimer
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm">
                  <Mail className="mr-2 h-4 w-4" />
                  Envoyer un email
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Supprimer
                </Button>
              </>
            )}
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
                <TableHead>Sujet</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Destinataires</TableHead>
                <TableHead className="text-right">Ouvertures</TableHead>
                <TableHead className="text-right">Clics</TableHead>
                <TableHead className="text-right">Tx. ouverture</TableHead>
                <TableHead className="text-right">Tx. clic</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCampaigns.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={10} className="h-24 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Send className="h-8 w-8 text-muted-foreground" />
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
                          aria-label={`Sélectionner ${campaign.subject}`}
                        />
                      </TableCell>
                      <TableCell>
                        <p className="font-medium">{campaign.subject}</p>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`flex items-center gap-1.5 ${campaignStatusConfig[campaign.status].color}`}
                        >
                          <StatusIcon className="h-4 w-4" />
                          {campaignStatusConfig[campaign.status].label}
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {campaign.status === "sent"
                          ? formatDate(campaign.sentAt)
                          : campaign.status === "scheduled"
                            ? formatDate(campaign.scheduledAt)
                            : "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        {campaign.recipients > 0 ? formatNumber(campaign.recipients) : "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        {campaign.opened > 0 ? formatNumber(campaign.opened) : "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        {campaign.clicked > 0 ? formatNumber(campaign.clicked) : "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        {campaign.openRate > 0 ? `${campaign.openRate.toFixed(1)}%` : "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        {campaign.clickRate > 0 ? `${campaign.clickRate.toFixed(1)}%` : "-"}
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
                            <DropdownMenuItem onClick={() => handleViewDetails(campaign)}>
                              <EyeIcon className="mr-2 h-4 w-4" />
                              Voir les détails
                            </DropdownMenuItem>
                            {campaign.status === "sent" && (
                              <DropdownMenuItem onClick={() => handleViewStats(campaign)}>
                                <BarChart3 className="mr-2 h-4 w-4" />
                                Statistiques
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem onClick={() => handleDuplicate(campaign)}>
                              <Copy className="mr-2 h-4 w-4" />
                              Dupliquer
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEdit(campaign)}>
                              <Pencil className="mr-2 h-4 w-4" />
                              Modifier
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {campaign.status === "draft" && (
                              <DropdownMenuItem onClick={() => handleSend(campaign)}>
                                <Send className="mr-2 h-4 w-4" />
                                Envoyer
                              </DropdownMenuItem>
                            )}
                            {campaign.status === "draft" && (
                              <DropdownMenuItem onClick={() => handleSchedule(campaign)}>
                                <Clock className="mr-2 h-4 w-4" />
                                Planifier
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem
                              className="text-destructive focus:text-destructive"
                              onClick={() => handleDelete(campaign)}
                            >
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

      {/* Subscribers Table */}
      {activeTab === "subscribers" && (
        <div className="rounded-lg border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={
                      selectedSubscribers.length === filteredSubscribers.length &&
                      filteredSubscribers.length > 0
                    }
                    onCheckedChange={toggleSelectAllSubscribers}
                    aria-label="Sélectionner tout"
                  />
                </TableHead>
                <TableHead>Abonné</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Inscrit le</TableHead>
                <TableHead>Dernier email</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubscribers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Users className="h-8 w-8 text-muted-foreground" />
                      <p className="text-muted-foreground">Aucun abonné trouvé</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredSubscribers.map((subscriber) => (
                  <TableRow key={subscriber.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedSubscribers.includes(subscriber.id)}
                        onCheckedChange={() => toggleSelectSubscriber(subscriber.id)}
                        aria-label={`Sélectionner ${subscriber.email}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{subscriber.name || subscriber.email}</p>
                        {subscriber.name && (
                          <p className="text-xs text-muted-foreground">{subscriber.email}</p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`flex items-center gap-1.5 ${subscriberStatusConfig[subscriber.status].color}`}
                      >
                        {subscriber.status === "active" ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <XCircle className="h-4 w-4" />
                        )}
                        {subscriberStatusConfig[subscriber.status].label}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(subscriber.subscribedAt)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {subscriber.lastReceivedAt ? formatDate(subscriber.lastReceivedAt) : "-"}
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
                            <Mail className="mr-2 h-4 w-4" />
                            Envoyer un email
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <EyeIcon className="mr-2 h-4 w-4" />
                            Voir le profil
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {subscriber.status === "active" ? (
                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                              <XCircle className="mr-2 h-4 w-4" />
                              Désabonner
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Réabonner
                            </DropdownMenuItem>
                          )}
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

      {/* Templates Table */}
      {activeTab === "templates" && (
        <div className="rounded-lg border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Modèle</TableHead>
                <TableHead>Sujet</TableHead>
                <TableHead>Créé le</TableHead>
                <TableHead className="text-right">Utilisation</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTemplates.map((template) => (
                <TableRow key={template.id}>
                  <TableCell>
                    <p className="font-medium">{template.name}</p>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{template.subject}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDate(template.createdAt)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary">{template.usageCount} fois</Badge>
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
                          Aperçu
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="mr-2 h-4 w-4" />
                          Dupliquer
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
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Create Campaign Dialog */}
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nouvelle campagne</DialogTitle>
            <DialogDescription>Créez une nouvelle newsletter pour vos abonnés</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="campaignSubject">Sujet</Label>
              <Input
                id="campaignSubject"
                placeholder="Sujet de la newsletter"
                value={newCampaignSubject}
                onChange={(e) => setNewCampaignSubject(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="campaignTemplate">Modèle</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un modèle" />
                </SelectTrigger>
                <SelectContent>
                  {mockTemplates.map((template) => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="campaignContent">Contenu</Label>
              <Textarea id="campaignContent" placeholder="Contenu de la newsletter..." rows={6} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
              Annuler
            </Button>
            <Button variant="outline">
              <EyeIcon className="mr-2 h-4 w-4" />
              Aperçu
            </Button>
            <Button onClick={handleCreateCampaign} disabled={!newCampaignSubject.trim()}>
              <Send className="mr-2 h-4 w-4" />
              Créer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Campaign Details Dialog */}
      <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Détails de la campagne</DialogTitle>
            <DialogDescription>Informations complètes sur la campagne</DialogDescription>
          </DialogHeader>
          {selectedCampaign && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Sujet</Label>
                  <p className="font-medium">{selectedCampaign.subject}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Statut</Label>
                  <div className="mt-1">
                    <Badge variant={selectedCampaign.status === "sent" ? "default" : "secondary"}>
                      {campaignStatusConfig[selectedCampaign.status].label}
                    </Badge>
                  </div>
                </div>
                <div>
                  <Label className="text-muted-foreground">Date d'envoi</Label>
                  <p className="font-medium">
                    {selectedCampaign.sentAt ? formatDate(selectedCampaign.sentAt) : "-"}
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Date planifiée</Label>
                  <p className="font-medium">
                    {selectedCampaign.scheduledAt ? formatDate(selectedCampaign.scheduledAt) : "-"}
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Destinataires</Label>
                  <p className="font-medium">{formatNumber(selectedCampaign.recipients)}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Ouvertures</Label>
                  <p className="font-medium">{formatNumber(selectedCampaign.opened)}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Clics</Label>
                  <p className="font-medium">{formatNumber(selectedCampaign.clicked)}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Taux d'ouverture</Label>
                  <p className="font-medium">{selectedCampaign.openRate.toFixed(1)}%</p>
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

      {/* Campaign Stats Dialog */}
      <Dialog open={statsDialogOpen} onOpenChange={setStatsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Statistiques de la campagne</DialogTitle>
            <DialogDescription>Performances de "{campaignForStats?.subject}"</DialogDescription>
          </DialogHeader>
          {campaignForStats && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
                  <p className="text-3xl font-bold">{campaignForStats.openRate.toFixed(1)}%</p>
                  <p className="text-sm text-muted-foreground">Taux d'ouverture</p>
                </div>
                <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
                  <p className="text-3xl font-bold">{campaignForStats.clickRate.toFixed(1)}%</p>
                  <p className="text-sm text-muted-foreground">Taux de clic</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Destinataires</span>
                  <span className="font-medium">{formatNumber(campaignForStats.recipients)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emails ouverts</span>
                  <span className="font-medium">{formatNumber(campaignForStats.opened)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Clics</span>
                  <span className="font-medium">{formatNumber(campaignForStats.clicked)}</span>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setStatsDialogOpen(false)}>
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Campaign Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier la campagne</DialogTitle>
            <DialogDescription>Modifiez les informations de la campagne</DialogDescription>
          </DialogHeader>
          {campaignToEdit && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="editSubject">Sujet</Label>
                <Input
                  id="editSubject"
                  value={campaignToEdit.subject}
                  onChange={(e) =>
                    setCampaignToEdit({ ...campaignToEdit, subject: e.target.value })
                  }
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleEditSave}>Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Schedule Campaign Dialog */}
      <Dialog open={scheduleDialogOpen} onOpenChange={setScheduleDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Planifier la campagne</DialogTitle>
            <DialogDescription>
              Choisissez la date d'envoi pour "{campaignToSchedule?.subject}"
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="scheduleDate">Date d'envoi</Label>
              <Input
                id="scheduleDate"
                type="datetime-local"
                defaultValue={
                  campaignToSchedule?.scheduledAt ? campaignToSchedule.scheduledAt.slice(0, 16) : ""
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setScheduleDialogOpen(false)}>
              Annuler
            </Button>
            <Button
              onClick={() => {
                const dateInput = document.getElementById("scheduleDate") as HTMLInputElement;
                if (dateInput?.value) {
                  confirmSchedule(new Date(dateInput.value).toISOString());
                }
              }}
            >
              <Clock className="mr-2 h-4 w-4" />
              Planifier
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la campagne</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer la campagne &quot;{campaignToDelete?.subject}&quot;
              ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
