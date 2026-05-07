"use client";

import { useState, useEffect } from "react";
import {
  CreditCard,
  Search,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  Loader2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Crown,
  Zap,
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
import { subscriptionApi } from "@/lib/api";
import type { Subscription, SubscriptionPlan, SubscriptionStatus } from "@/lib/api/types";

interface SubscriptionDisplay {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  startedAt: string;
  expiresAt?: string;
  lastPaymentDate?: string;
  nextPaymentDate?: string;
  paymentMethod?: string;
  paymentLast4?: string;
  cancelAtPeriodEnd: boolean;
}

const mockSubscriptions: SubscriptionDisplay[] = [
  {
    id: "1",
    userId: "u1",
    userName: "Marie Dupont",
    userEmail: "marie.dupont@etheria.com",
    plan: "PREMIUM",
    status: "ACTIVE",
    startedAt: "2025-01-15",
    expiresAt: "2026-01-15",
    lastPaymentDate: "2025-12-15",
    nextPaymentDate: "2026-01-15",
    paymentMethod: "card",
    paymentLast4: "4242",
    cancelAtPeriodEnd: false,
  },
  {
    id: "2",
    userId: "u2",
    userName: "Thomas Martin",
    userEmail: "thomas.martin@etheria.com",
    plan: "ESSENTIAL",
    status: "ACTIVE",
    startedAt: "2025-06-20",
    expiresAt: "2025-12-20",
    lastPaymentDate: "2025-11-20",
    nextPaymentDate: "2025-12-20",
    paymentMethod: "card",
    paymentLast4: "1234",
    cancelAtPeriodEnd: false,
  },
  {
    id: "3",
    userId: "u3",
    userName: "Sophie Laurent",
    userEmail: "sophie.laurent@etheria.com",
    plan: "PREMIUM",
    status: "CANCELLED",
    startedAt: "2025-03-10",
    expiresAt: "2025-12-10",
    lastPaymentDate: "2025-11-10",
    paymentMethod: "card",
    paymentLast4: "5678",
    cancelAtPeriodEnd: true,
  },
  {
    id: "4",
    userId: "u4",
    userName: "Pierre Moreau",
    userEmail: "pierre.moreau@etheria.com",
    plan: "ESSENTIAL",
    status: "EXPIRED",
    startedAt: "2024-06-05",
    expiresAt: "2025-06-05",
    lastPaymentDate: "2025-05-05",
    paymentMethod: "card",
    paymentLast4: "9012",
    cancelAtPeriodEnd: false,
  },
  {
    id: "5",
    userId: "u5",
    userName: "Julie Bernard",
    userEmail: "julie.bernard@etheria.com",
    plan: "PREMIUM",
    status: "PAST_DUE",
    startedAt: "2025-08-12",
    expiresAt: "2025-11-12",
    lastPaymentDate: "2025-10-12",
    nextPaymentDate: "2025-11-12",
    paymentMethod: "card",
    paymentLast4: "3456",
    cancelAtPeriodEnd: false,
  },
  {
    id: "6",
    userId: "u6",
    userName: "Marc Leroy",
    userEmail: "marc.leroy@etheria.com",
    plan: "ESSENTIAL",
    status: "ACTIVE",
    startedAt: "2025-09-18",
    expiresAt: "2026-03-18",
    lastPaymentDate: "2025-11-18",
    nextPaymentDate: "2025-12-18",
    paymentMethod: "paypal",
    cancelAtPeriodEnd: false,
  },
];

const planConfig = {
  ESSENTIAL: { label: "Essentiel", variant: "secondary" as const, icon: Zap },
  PREMIUM: { label: "Premium", variant: "default" as const, icon: Crown },
};

const statusConfig = {
  ACTIVE: { label: "Actif", color: "text-green-500", icon: CheckCircle },
  CANCELLED: { label: "Annulé", color: "text-gray-500", icon: XCircle },
  EXPIRED: { label: "Expiré", color: "text-red-500", icon: AlertCircle },
  PAST_DUE: { label: "En retard", color: "text-yellow-500", icon: AlertCircle },
};

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<SubscriptionDisplay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [planFilter, setPlanFilter] = useState<string>("all");
  const [selectedSubscriptions, setSelectedSubscriptions] = useState<string[]>([]);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState<SubscriptionDisplay | null>(
    null
  );
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [subscriptionToCancel, setSubscriptionToCancel] = useState<SubscriptionDisplay | null>(
    null
  );

  useEffect(() => {
    loadSubscriptions();
  }, []);

  async function loadSubscriptions() {
    setIsLoading(true);
    try {
      const response = await subscriptionApi.get();
      if (response.success && response.data) {
        const sub = response.data as Subscription;
        const mapped: SubscriptionDisplay[] = [
          {
            id: sub.id,
            userId: sub.userId,
            userName: "Utilisateur actuel",
            userEmail: "user@example.com",
            plan: sub.plan,
            status: sub.status,
            startedAt: sub.startedAt,
            expiresAt: sub.expiresAt,
            lastPaymentDate: sub.lastPaymentDate,
            nextPaymentDate: sub.nextPaymentDate,
            paymentMethod: sub.paymentMethod,
            paymentLast4: sub.paymentLast4,
            cancelAtPeriodEnd: sub.cancelAtPeriodEnd,
          },
        ];
        setSubscriptions(mapped);
      }
    } catch (error) {
      console.error("Failed to load subscriptions:", error);
      setSubscriptions(mockSubscriptions);
    } finally {
      setIsLoading(false);
    }
  }

  const filteredSubscriptions = subscriptions.filter((sub) => {
    const matchesSearch =
      sub.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.userEmail.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || sub.status === statusFilter;
    const matchesPlan = planFilter === "all" || sub.plan === planFilter;
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const stats = {
    total: subscriptions.length,
    active: subscriptions.filter((s) => s.status === "ACTIVE").length,
    cancelled: subscriptions.filter((s) => s.status === "CANCELLED").length,
    expired: subscriptions.filter((s) => s.status === "EXPIRED" || s.status === "PAST_DUE").length,
    premium: subscriptions.filter((s) => s.plan === "PREMIUM").length,
    essential: subscriptions.filter((s) => s.plan === "ESSENTIAL").length,
  };

  const toggleSelectAll = () => {
    if (selectedSubscriptions.length === filteredSubscriptions.length) {
      setSelectedSubscriptions([]);
    } else {
      setSelectedSubscriptions(filteredSubscriptions.map((s) => s.id));
    }
  };

  const toggleSelectSubscription = (id: string) => {
    setSelectedSubscriptions((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleViewDetails = (subscription: SubscriptionDisplay) => {
    setSelectedSubscription(subscription);
    setDetailsDialogOpen(true);
  };

  const handleCancelSubscription = (subscription: SubscriptionDisplay) => {
    setSubscriptionToCancel(subscription);
    setCancelDialogOpen(true);
  };

  const confirmCancel = () => {
    if (subscriptionToCancel) {
      setSubscriptions((prev) =>
        prev.map((s) =>
          s.id === subscriptionToCancel.id
            ? { ...s, cancelAtPeriodEnd: true, status: "CANCELLED" }
            : s
        )
      );
    }
    setCancelDialogOpen(false);
    setSubscriptionToCancel(null);
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
    return `${day} ${month} ${year}`;
  };

  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Abonnements</h1>
          <p className="text-sm text-muted-foreground">Gérez les abonnements de vos utilisateurs</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <CreditCard className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="text-2xl font-bold">{stats.total}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Actifs</p>
              <p className="text-2xl font-bold">{stats.active}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">En retard/Expirés</p>
              <p className="text-2xl font-bold">{stats.expired}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10">
              <Crown className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Premium</p>
              <p className="text-2xl font-bold">{stats.premium}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher un abonnement..."
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
            <SelectItem value="ACTIVE">Actif</SelectItem>
            <SelectItem value="CANCELLED">Annulé</SelectItem>
            <SelectItem value="EXPIRED">Expiré</SelectItem>
            <SelectItem value="PAST_DUE">En retard</SelectItem>
          </SelectContent>
        </Select>
        <Select value={planFilter} onValueChange={setPlanFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les plans</SelectItem>
            <SelectItem value="ESSENTIAL">Essentiel</SelectItem>
            <SelectItem value="PREMIUM">Premium</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bulk Actions */}
      {selectedSubscriptions.length > 0 && (
        <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-3">
          <span className="text-sm text-muted-foreground">
            {selectedSubscriptions.length} abonnement
            {selectedSubscriptions.length > 1 ? "s" : ""} sélectionné
            {selectedSubscriptions.length > 1 ? "s" : ""}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Pencil className="mr-2 h-4 w-4" />
              Modifier le plan
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 className="mr-2 h-4 w-4" />
              Annuler
            </Button>
          </div>
        </div>
      )}

      {/* Subscriptions Table */}
      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={
                    selectedSubscriptions.length === filteredSubscriptions.length &&
                    filteredSubscriptions.length > 0
                  }
                  onCheckedChange={toggleSelectAll}
                  aria-label="Sélectionner tout"
                />
              </TableHead>
              <TableHead>Utilisateur</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Début</TableHead>
              <TableHead>Expiration</TableHead>
              <TableHead>Prochain paiement</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSubscriptions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <CreditCard className="h-8 w-8 text-muted-foreground" />
                    <p className="text-muted-foreground">Aucun abonnement trouvé</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredSubscriptions.map((subscription) => {
                const PlanIcon = planConfig[subscription.plan].icon;
                const StatusIcon = statusConfig[subscription.status].icon;
                return (
                  <TableRow key={subscription.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedSubscriptions.includes(subscription.id)}
                        onCheckedChange={() => toggleSelectSubscription(subscription.id)}
                        aria-label={`Sélectionner ${subscription.userName}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{subscription.userName}</p>
                        <p className="text-xs text-muted-foreground">{subscription.userEmail}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={planConfig[subscription.plan].variant}>
                        <PlanIcon className="mr-1 h-3 w-3" />
                        {planConfig[subscription.plan].label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`flex items-center gap-1.5 ${statusConfig[subscription.status].color}`}
                      >
                        <StatusIcon className="h-4 w-4" />
                        {statusConfig[subscription.status].label}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(subscription.startedAt)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(subscription.expiresAt)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {subscription.cancelAtPeriodEnd ? (
                        <span className="text-yellow-500">Annule à la fin</span>
                      ) : (
                        formatDate(subscription.nextPaymentDate)
                      )}
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
                          <DropdownMenuItem onClick={() => handleViewDetails(subscription)}>
                            <Eye className="mr-2 h-4 w-4" />
                            Voir les détails
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil className="mr-2 h-4 w-4" />
                            Modifier le plan
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() => handleCancelSubscription(subscription)}
                            disabled={subscription.status === "CANCELLED"}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Annuler l&apos;abonnement
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

      {/* Subscription Details Dialog */}
      <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Détails de l&apos;abonnement</DialogTitle>
            <DialogDescription>
              Informations complètes sur l&apos;abonnement de {selectedSubscription?.userName}
            </DialogDescription>
          </DialogHeader>
          {selectedSubscription && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Utilisateur</Label>
                  <p className="font-medium">{selectedSubscription.userName}</p>
                  <p className="text-sm text-muted-foreground">{selectedSubscription.userEmail}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Plan</Label>
                  <div className="mt-1">
                    <Badge variant={planConfig[selectedSubscription.plan].variant}>
                      {planConfig[selectedSubscription.plan].label}
                    </Badge>
                  </div>
                </div>
                <div>
                  <Label className="text-muted-foreground">Statut</Label>
                  <div className="mt-1">
                    <span
                      className={`flex items-center gap-1.5 ${statusConfig[selectedSubscription.status].color}`}
                    >
                      {statusConfig[selectedSubscription.status].label}
                    </span>
                  </div>
                </div>
                <div>
                  <Label className="text-muted-foreground">Date de début</Label>
                  <p className="font-medium">{formatDate(selectedSubscription.startedAt)}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Date d&apos;expiration</Label>
                  <p className="font-medium">{formatDate(selectedSubscription.expiresAt)}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Dernier paiement</Label>
                  <p className="font-medium">{formatDate(selectedSubscription.lastPaymentDate)}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Prochain paiement</Label>
                  <p className="font-medium">{formatDate(selectedSubscription.nextPaymentDate)}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Paiement</Label>
                  <p className="font-medium">
                    {selectedSubscription.paymentMethod === "card"
                      ? `Carte •••• ${selectedSubscription.paymentLast4}`
                      : selectedSubscription.paymentMethod || "-"}
                  </p>
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

      {/* Cancel Confirmation Dialog */}
      <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Annuler l&apos;abonnement</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir annuler l&apos;abonnement de {subscriptionToCancel?.userName}{" "}
              ? L&apos;abonnement restera actif jusqu&apos;à la fin de la période payée.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCancelDialogOpen(false)}>
              Non, conserver
            </Button>
            <Button variant="destructive" onClick={confirmCancel}>
              Oui, annuler
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
