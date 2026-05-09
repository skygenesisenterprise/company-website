"use client";

/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/notifications
 * Layer: Dashboard Page
 * Purpose: Provides a notification management view aligned with the main dashboard overview.
 */

import * as React from "react";
import { Archive, Bell, Check, Eye, Loader2, MoreHorizontal, Plus, Send, ShieldAlert, Trash2 } from "lucide-react";

import {
  DashboardConfirmDialog,
  DashboardEmptyState,
  DashboardMetricCard,
  DashboardPageHeader,
  DashboardSearch,
  DashboardToolbar,
} from "@/components/dashboard/audience-dashboard";
import { DashboardStatusBadge as GovernanceStatusBadge } from "@/components/dashboard/cms-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { notificationsApi } from "@/lib/api";

type NotificationType = "system" | "security" | "content" | "user" | "integration" | "maintenance";
type NotificationStatus = "unread" | "read" | "archived" | "sent" | "draft";

interface InternalNotification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  status: NotificationStatus;
  audience: string;
  createdAt: string;
  sentAt?: string;
}

const demoNotifications: InternalNotification[] = [
  {
    id: "notif_demo_1",
    title: "Maintenance du site officiel",
    message: "Fenêtre de maintenance prévue sur les pages publiques institutionnelles.",
    type: "maintenance",
    status: "draft",
    audience: "Administrateurs",
    createdAt: "2026-05-08T10:00:00Z",
  },
  {
    id: "notif_demo_2",
    title: "Rotation de clé intégration",
    message: "Une clé de test a été désactivée après rotation planifiée.",
    type: "integration",
    status: "sent",
    audience: "Équipe technique",
    createdAt: "2026-05-07T08:20:00Z",
    sentAt: "2026-05-07T08:25:00Z",
  },
  {
    id: "notif_demo_3",
    title: "Commentaire signalé",
    message: "Un commentaire attend une vérification de modération.",
    type: "content",
    status: "unread",
    audience: "Modération",
    createdAt: "2026-05-06T15:45:00Z",
  },
  {
    id: "notif_demo_4",
    title: "Connexion inhabituelle",
    message: "Un événement de sécurité critique a été ajouté aux journaux d'audit.",
    type: "security",
    status: "read",
    audience: "Administrateurs",
    createdAt: "2026-05-06T11:10:00Z",
  },
];

const typeLabels: Record<NotificationType, string> = {
  system: "Système",
  security: "Sécurité",
  content: "Contenu",
  user: "Utilisateur",
  integration: "Intégration",
  maintenance: "Maintenance",
};

const statusLabels: Record<NotificationStatus, string> = {
  unread: "Non lue",
  read: "Lue",
  archived: "Archivée",
  sent: "Envoyée",
  draft: "Brouillon",
};

const statusTones: Record<NotificationStatus, "green" | "blue" | "gray" | "amber"> = {
  unread: "amber",
  read: "blue",
  archived: "gray",
  sent: "green",
  draft: "amber",
};

const typeOptions = [
  { value: "all", label: "Tous les types" },
  { value: "system", label: "Système" },
  { value: "security", label: "Sécurité" },
  { value: "content", label: "Contenu" },
  { value: "user", label: "Utilisateur" },
  { value: "integration", label: "Intégration" },
  { value: "maintenance", label: "Maintenance" },
];

const statusOptions = [
  { value: "all", label: "Tous les statuts" },
  { value: "unread", label: "Non lue" },
  { value: "read", label: "Lue" },
  { value: "archived", label: "Archivée" },
  { value: "sent", label: "Envoyée" },
  { value: "draft", label: "Brouillon" },
];

function formatDate(value?: string) {
  if (!value) return "Non envoyée";
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(new Date(value));
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = React.useState<InternalNotification[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState("all");
  const [type, setType] = React.useState("all");
  const [confirmAction, setConfirmAction] = React.useState<{
    title: string;
    description: string;
    label: string;
    run: () => void;
  } | null>(null);

  const loadNotifications = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await notificationsApi.list({ pageSize: 50 });
      if (response.success && response.data) {
        setNotifications(
          response.data.map((notification) => ({
            id: notification.id,
            title: notification.title,
            message: notification.message,
            type: normalizeType(notification.type),
            status: notification.isRead ? "read" : "unread",
            audience: "Dashboard interne",
            createdAt: notification.createdAt,
          })),
        );
      } else {
        setNotifications(demoNotifications);
      }
    } catch {
      setError("Les notifications API sont indisponibles. Des données fictives sont affichées.");
      setNotifications(demoNotifications);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  const filteredNotifications = notifications.filter((notification) => {
    const search = query.toLowerCase();
    const matchesQuery =
      notification.title.toLowerCase().includes(search) ||
      notification.message.toLowerCase().includes(search) ||
      notification.audience.toLowerCase().includes(search) ||
      typeLabels[notification.type].toLowerCase().includes(search);
    const matchesStatus = status === "all" || notification.status === status;
    const matchesType = type === "all" || notification.type === type;
    return matchesQuery && matchesStatus && matchesType;
  });

  const updateStatus = (id: string, nextStatus: NotificationStatus) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              status: nextStatus,
              sentAt: nextStatus === "sent" ? new Date().toISOString() : notification.sentAt,
            }
          : notification,
      ),
    );
  };

  const deleteNotification = async (id: string) => {
    try {
      await notificationsApi.delete(id);
    } catch {
      setError("La suppression distante n'a pas abouti. L'élément est retiré localement.");
    }
    setNotifications((current) => current.filter((notification) => notification.id !== id));
  };

  return (
    <div className="space-y-6 p-6">
      <DashboardPageHeader
        title="Notifications internes"
        description="Gérez les notifications internes et alertes système du dashboard."
        action={
          <Button variant="outline">
            <Plus className="mr-2 size-4" />
            Créer
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard label="Notifications" value={notifications.length} helper="Internes et système" icon={Bell} />
        <DashboardMetricCard label="Non lues" value={notifications.filter((item) => item.status === "unread").length} helper="À traiter" icon={ShieldAlert} />
        <DashboardMetricCard label="Envoyées" value={notifications.filter((item) => item.status === "sent").length} helper="Diffusées" icon={Send} />
        <DashboardMetricCard label="Brouillons" value={notifications.filter((item) => item.status === "draft").length} helper="Non envoyées" icon={Archive} />
      </div>

      <DashboardToolbar>
        <DashboardSearch
          value={query}
          onChange={setQuery}
          placeholder="Rechercher par titre, type, message ou destinataire..."
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-full sm:w-48" aria-label="Statut">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-full sm:w-48" aria-label="Type">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {typeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </DashboardToolbar>

      {error ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {error}
        </div>
      ) : null}

      <Card className="rounded-lg border-border/70 shadow-none">
        <CardContent className="p-0">
          {isLoading ? (
            <div className="flex min-h-56 flex-col items-center justify-center gap-3 text-muted-foreground">
              <Loader2 className="size-6 animate-spin" />
              <span className="text-sm">Chargement des notifications internes...</span>
            </div>
          ) : filteredNotifications.length === 0 ? (
            <DashboardEmptyState
              icon={Bell}
              title="Aucune notification interne n'est disponible pour le moment"
              description="Les alertes système, brouillons et messages administratifs apparaîtront ici."
            />
          ) : (
            <div className="divide-y divide-border/70">
              {filteredNotifications.map((notification) => (
                <article key={notification.id} className="grid gap-4 p-4 hover:bg-muted/20 lg:grid-cols-[minmax(0,1fr)_12rem_11rem_3rem] lg:items-center">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="truncate text-sm font-semibold text-foreground">{notification.title}</h2>
                      <GovernanceStatusBadge tone={statusTones[notification.status]}>
                        {statusLabels[notification.status]}
                      </GovernanceStatusBadge>
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{notification.message}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {typeLabels[notification.type]} · {notification.audience}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Créée le</p>
                    <p className="font-medium text-foreground">{formatDate(notification.createdAt)}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Envoi</p>
                    <p className="font-medium text-foreground">{formatDate(notification.sentAt)}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="size-8 justify-self-start lg:justify-self-end">
                        <MoreHorizontal className="size-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 size-4" />
                        Consulter le détail
                      </DropdownMenuItem>
                      {notification.status === "unread" ? (
                        <DropdownMenuItem onClick={() => updateStatus(notification.id, "read")}>
                          <Check className="mr-2 size-4" />
                          Marquer comme lue
                        </DropdownMenuItem>
                      ) : null}
                      {notification.status === "draft" ? (
                        <DropdownMenuItem
                          onClick={() =>
                            setConfirmAction({
                              title: "Envoyer la notification",
                              description: "Cette action marquera la notification comme envoyée dans ce tableau interne.",
                              label: "Envoyer",
                              run: () => updateStatus(notification.id, "sent"),
                            })
                          }
                        >
                          <Send className="mr-2 size-4" />
                          Envoyer
                        </DropdownMenuItem>
                      ) : null}
                      <DropdownMenuItem onClick={() => updateStatus(notification.id, "archived")}>
                        <Archive className="mr-2 size-4" />
                        Archiver
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-destructive focus:text-destructive"
                        onClick={() =>
                          setConfirmAction({
                            title: "Supprimer la notification",
                            description: "Cette action retire la notification de la liste interne.",
                            label: "Supprimer",
                            run: () => void deleteNotification(notification.id),
                          })
                        }
                      >
                        <Trash2 className="mr-2 size-4" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </article>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <DashboardConfirmDialog
        open={confirmAction !== null}
        onOpenChange={(open) => {
          if (!open) setConfirmAction(null);
        }}
        title={confirmAction?.title ?? ""}
        description={confirmAction?.description ?? ""}
        confirmLabel={confirmAction?.label ?? "Confirmer"}
        onConfirm={() => {
          confirmAction?.run();
          setConfirmAction(null);
        }}
      />
    </div>
  );
}

function normalizeType(value?: string): NotificationType {
  const normalized = value?.toLowerCase();
  if (normalized === "security") return "security";
  if (normalized === "content" || normalized === "article" || normalized === "comment") return "content";
  if (normalized === "user") return "user";
  if (normalized === "integration") return "integration";
  if (normalized === "maintenance") return "maintenance";
  return "system";
}
