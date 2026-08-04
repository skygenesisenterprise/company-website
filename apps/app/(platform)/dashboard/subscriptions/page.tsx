"use client";

import * as React from "react";
import { Bell, Eye, Loader2, MoreHorizontal, PauseCircle, Pencil, RotateCcw, Trash2, XCircle } from "lucide-react";

import {
  DashboardConfirmDialog,
  DashboardEmptyState,
  DashboardFilter,
  DashboardMetricCard,
  DashboardPageHeader,
  DashboardSearch,
  DashboardStatusBadge,
  DashboardToolbar,
  DesktopTable,
  MobileResourceCard,
  MobileResourceList,
  MutedMeta,
  ResponsiveTableShell,
  TruncatedText,
} from "@/components/dashboard/audience-dashboard";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { subscriptionApi } from "@/lib/api";
import type { Subscription } from "@/lib/api/types";

type SubscriptionStatus = "active" | "paused" | "cancelled" | "expired" | "pending";

interface SiteSubscription {
  id: string;
  user: string;
  email: string;
  type: string;
  status: SubscriptionStatus;
  channel: string;
  startedAt: string;
  endsAt?: string;
  lastActivity?: string;
}

const subscriptionsSeed: SiteSubscription[] = [
  {
    id: "sub-demo-1",
    user: "Contact fictif Alpha",
    email: "sub-alpha@example.invalid",
    type: "Mises à jour produit",
    status: "active",
    channel: "Produit",
    startedAt: "2026-01-12",
    lastActivity: "2026-05-08",
  },
  {
    id: "sub-demo-2",
    user: "Contact fictif Beta",
    email: "sub-beta@example.invalid",
    type: "Alertes statut",
    status: "paused",
    channel: "Alerte",
    startedAt: "2026-02-03",
    lastActivity: "2026-04-24",
  },
  {
    id: "sub-demo-3",
    user: "Contact fictif Gamma",
    email: "sub-gamma@example.invalid",
    type: "Newsletter officielle",
    status: "pending",
    channel: "Email",
    startedAt: "2026-05-07",
  },
  {
    id: "sub-demo-4",
    user: "Contact fictif Delta",
    email: "sub-delta@example.invalid",
    type: "Suivi contenu",
    status: "cancelled",
    channel: "Contenu",
    startedAt: "2025-11-18",
    endsAt: "2026-03-18",
    lastActivity: "2026-03-18",
  },
];

const statusLabels: Record<SubscriptionStatus, string> = {
  active: "Actif",
  paused: "En pause",
  cancelled: "Annulé",
  expired: "Expiré",
  pending: "En attente",
};

const statusOptions = [
  { value: "all", label: "Tous les statuts" },
  { value: "active", label: "Actif" },
  { value: "paused", label: "En pause" },
  { value: "cancelled", label: "Annulé" },
  { value: "expired", label: "Expiré" },
  { value: "pending", label: "En attente" },
];

function formatDate(value?: string) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function mapApiSubscription(subscription: Subscription): SiteSubscription {
  const statusMap: Record<string, SubscriptionStatus> = {
    ACTIVE: "active",
    CANCELLED: "cancelled",
    EXPIRED: "expired",
    PAST_DUE: "pending",
  };

  return {
    id: subscription.id,
    user: "Utilisateur du workspace",
    email: "workspace-user@example.invalid",
    type: subscription.plan === "PREMIUM" ? "Préférence produit premium" : "Préférence produit essentielle",
    status: statusMap[subscription.status] ?? "pending",
    channel: "Produit",
    startedAt: subscription.startedAt,
    endsAt: subscription.expiresAt,
    lastActivity: subscription.lastPaymentDate ?? subscription.nextPaymentDate,
  };
}

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = React.useState<SiteSubscription[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState("all");
  const [confirmAction, setConfirmAction] = React.useState<{
    subscription: SiteSubscription;
    nextStatus?: SubscriptionStatus;
    remove?: boolean;
  } | null>(null);

  React.useEffect(() => {
    let mounted = true;

    async function loadSubscription() {
      setLoading(true);
      try {
        const response = await subscriptionApi.get();
        const data = response.data as Subscription | undefined;
        if (mounted) {
          setSubscriptions(data?.id ? [mapApiSubscription(data), ...subscriptionsSeed] : subscriptionsSeed);
          setError(null);
        }
      } catch {
        if (mounted) {
          setSubscriptions(subscriptionsSeed);
          setError("Les données API ne sont pas disponibles. Les abonnements affichés sont des exemples fictifs.");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadSubscription();
    return () => {
      mounted = false;
    };
  }, []);

  const filteredSubscriptions = subscriptions.filter((subscription) => {
    const haystack = `${subscription.user} ${subscription.email} ${subscription.type} ${subscription.channel}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (status === "all" || subscription.status === status);
  });

  const metrics = {
    active: subscriptions.filter((subscription) => subscription.status === "active").length,
    paused: subscriptions.filter((subscription) => subscription.status === "paused").length,
    pending: subscriptions.filter((subscription) => subscription.status === "pending").length,
    cancelled: subscriptions.filter((subscription) => subscription.status === "cancelled" || subscription.status === "expired").length,
  };

  const applyAction = () => {
    if (!confirmAction) return;
    if (confirmAction.remove) {
      setSubscriptions((current) => current.filter((subscription) => subscription.id !== confirmAction.subscription.id));
    } else if (confirmAction.nextStatus) {
      setSubscriptions((current) =>
        current.map((subscription) =>
          subscription.id === confirmAction.subscription.id
            ? { ...subscription, status: confirmAction.nextStatus as SubscriptionStatus }
            : subscription
        )
      );
    }
    setConfirmAction(null);
  };

  const renderActions = (subscription: SiteSubscription) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Actions abonnement</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Eye className="mr-2 h-4 w-4" />
          Consulter le détail
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Pencil className="mr-2 h-4 w-4" />
          Modifier
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {subscription.status === "paused" ? (
          <DropdownMenuItem onClick={() => setConfirmAction({ subscription, nextStatus: "active" })}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Réactiver
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={() => setConfirmAction({ subscription, nextStatus: "paused" })}>
            <PauseCircle className="mr-2 h-4 w-4" />
            Suspendre
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          className="text-destructive focus:text-destructive"
          onClick={() => setConfirmAction({ subscription, nextStatus: "cancelled" })}
        >
          <XCircle className="mr-2 h-4 w-4" />
          Annuler
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-destructive focus:text-destructive"
          onClick={() => setConfirmAction({ subscription, remove: true })}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Supprimer
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <DashboardPageHeader
        title="Abonnements"
        description="Gérez les abonnements, alertes et préférences liées au site."
      />

      {error ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {error}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard label="Actifs" value={metrics.active} helper="Préférences en cours" icon={Bell} />
        <DashboardMetricCard label="En pause" value={metrics.paused} helper="Notifications suspendues" icon={PauseCircle} />
        <DashboardMetricCard label="En attente" value={metrics.pending} helper="À confirmer" icon={MoreHorizontal} />
        <DashboardMetricCard label="Terminés" value={metrics.cancelled} helper="Annulés ou expirés" icon={XCircle} />
      </div>

      <DashboardToolbar>
        <DashboardSearch value={query} onChange={setQuery} placeholder="Rechercher par utilisateur, email, type ou canal..." />
        <DashboardFilter label="Statut" value={status} onChange={setStatus} options={statusOptions} />
      </DashboardToolbar>

      {loading ? (
        <ResponsiveTableShell>
          <div className="flex min-h-52 items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            Chargement des abonnements...
          </div>
        </ResponsiveTableShell>
      ) : filteredSubscriptions.length === 0 ? (
        <ResponsiveTableShell>
          <DashboardEmptyState
            icon={Bell}
            title="Aucun abonnement enregistré"
            description="Aucun abonnement n'est encore enregistré. Les futures souscriptions et préférences apparaîtront ici."
          />
        </ResponsiveTableShell>
      ) : (
        <>
          <MobileResourceList>
            {filteredSubscriptions.map((subscription) => (
              <MobileResourceCard key={subscription.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <DashboardStatusBadge status={subscription.status} label={statusLabels[subscription.status]} />
                    <p className="mt-3 truncate font-medium">{subscription.user}</p>
                    <MutedMeta>{subscription.email}</MutedMeta>
                  </div>
                  {renderActions(subscription)}
                </div>
                <div className="mt-4 grid gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Type</span>
                    <span className="truncate text-right">{subscription.type}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Canal</span>
                    <span>{subscription.channel}</span>
                  </div>
                </div>
              </MobileResourceCard>
            ))}
          </MobileResourceList>

          <DesktopTable>
            <ResponsiveTableShell>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Utilisateur</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Canal</TableHead>
                    <TableHead>Début</TableHead>
                    <TableHead>Fin ou renouvellement</TableHead>
                    <TableHead>Dernière activité</TableHead>
                    <TableHead className="w-12" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubscriptions.map((subscription) => (
                    <TableRow key={subscription.id} className="hover:bg-muted/40">
                      <TableCell className="max-w-60">
                        <TruncatedText className="font-medium">{subscription.user}</TruncatedText>
                        <MutedMeta>{subscription.email}</MutedMeta>
                      </TableCell>
                      <TableCell className="max-w-55">
                        <TruncatedText>{subscription.type}</TruncatedText>
                      </TableCell>
                      <TableCell>
                        <DashboardStatusBadge status={subscription.status} label={statusLabels[subscription.status]} />
                      </TableCell>
                      <TableCell>{subscription.channel}</TableCell>
                      <TableCell className="text-muted-foreground">{formatDate(subscription.startedAt)}</TableCell>
                      <TableCell className="text-muted-foreground">{formatDate(subscription.endsAt)}</TableCell>
                      <TableCell className="text-muted-foreground">{formatDate(subscription.lastActivity)}</TableCell>
                      <TableCell>{renderActions(subscription)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ResponsiveTableShell>
          </DesktopTable>
        </>
      )}

      <p className="text-xs text-muted-foreground">
        Cette page suit les souscriptions et préférences liées au site. Elle n'affiche pas de facturation tant qu'aucune logique de paiement dédiée n'est disponible.
      </p>

      <DashboardConfirmDialog
        open={Boolean(confirmAction)}
        onOpenChange={(open) => !open && setConfirmAction(null)}
        title={confirmAction?.remove ? "Supprimer cet abonnement ?" : "Confirmer la modification ?"}
        description="Cette action peut modifier les notifications ou préférences reçues par l'utilisateur. Vérifiez que la demande est légitime avant de continuer."
        confirmLabel={confirmAction?.remove ? "Supprimer" : "Confirmer"}
        destructive={confirmAction?.remove || confirmAction?.nextStatus === "cancelled"}
        onConfirm={applyAction}
      />
    </div>
  );
}
