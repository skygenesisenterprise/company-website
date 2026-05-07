"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  Check,
  Trash2,
  Clock,
  FileText,
  Users,
  Send,
  AlertCircle,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { notificationsApi } from "@/lib/api";
import type { EtheriaNotification } from "@/lib/api/types";

interface NotificationDisplay {
  id: string;
  type: "system" | "user" | "article" | "comment";
  title: string;
  message: string;
  time: string;
  read: boolean;
  priority: "low" | "medium" | "high";
}

const mockNotifications: NotificationDisplay[] = [
  {
    id: "1",
    type: "article",
    title: "Nouvel article soumis",
    message: "Marie Dupont a soumis un nouvel article pour révision",
    time: "2026-03-26T10:30:00",
    read: false,
    priority: "medium",
  },
  {
    id: "2",
    type: "comment",
    title: "Commentaire signalé",
    message: "Un commentaire a été signalé comme inapproprié sur l'article 'Économie mondiale'",
    time: "2026-03-26T09:15:00",
    read: false,
    priority: "high",
  },
  {
    id: "3",
    type: "user",
    title: "Nouvel utilisateur",
    message: "Pierre Martin s'est inscrit sur la plateforme",
    time: "2026-03-26T08:00:00",
    read: true,
    priority: "low",
  },
  {
    id: "4",
    type: "system",
    title: "Mise à jour système",
    message: "Le système a été mis à jour vers la version 2.1.0",
    time: "2026-03-25T14:00:00",
    read: true,
    priority: "low",
  },
  {
    id: "5",
    type: "article",
    title: "Article publié",
    message: "L'article 'Les réformes économiques' est maintenant publié",
    time: "2026-03-25T11:30:00",
    read: true,
    priority: "medium",
  },
  {
    id: "6",
    type: "comment",
    title: "Nouveau commentaire",
    message: "Nouveau commentaire sur l'article 'Victoire historique'",
    time: "2026-03-25T10:00:00",
    read: true,
    priority: "low",
  },
  {
    id: "7",
    type: "system",
    title: "Alerte de sécurité",
    message: "Tentative de connexion suspecte détectée",
    time: "2026-03-24T16:45:00",
    read: false,
    priority: "high",
  },
];

const typeConfig = {
  system: { icon: AlertCircle, color: "text-purple-500", bg: "bg-purple-500/10" },
  user: { icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
  article: { icon: FileText, color: "text-green-500", bg: "bg-green-500/10" },
  comment: { icon: Send, color: "text-yellow-500", bg: "bg-yellow-500/10" },
};

const priorityConfig = {
  low: { label: "Basse", variant: "secondary" as const },
  medium: { label: "Moyenne", variant: "outline" as const },
  high: { label: "Haute", variant: "destructive" as const },
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationDisplay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [notificationToDelete, setNotificationToDelete] = useState<NotificationDisplay | null>(
    null
  );

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    setIsLoading(true);
    try {
      const response = await notificationsApi.list({ pageSize: 50 });
      if (response.success && response.data) {
        const mapped: NotificationDisplay[] = response.data.map((n) => ({
          id: n.id,
          type: (n.type?.toLowerCase() as "system" | "user" | "article" | "comment") || "system",
          title: n.title,
          message: n.message,
          time: n.createdAt,
          read: n.isRead ?? false,
          priority: (n.priority === "HIGH"
            ? "high"
            : n.priority === "MEDIUM"
              ? "medium"
              : "low") as "low" | "medium" | "high",
        }));
        setNotifications(mapped);
      }
    } catch (error) {
      console.error("Failed to load notifications:", error);
      setNotifications(mockNotifications);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleMarkAsRead(id: string) {
    try {
      await notificationsApi.markRead(id);
      setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
    } catch (error) {
      console.error("Failed to mark as read:", error);
    }
  }

  async function handleMarkAllAsRead() {
    try {
      await notificationsApi.markAllRead();
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    } catch (error) {
      console.error("Failed to mark all as read:", error);
    }
  }

  async function handleDeleteNotification() {
    if (!notificationToDelete) return;
    try {
      await notificationsApi.delete(notificationToDelete.id);
      setNotifications((prev) => prev.filter((n) => n.id !== notificationToDelete.id));
    } catch (error) {
      console.error("Failed to delete notification:", error);
    }
    setDeleteDialogOpen(false);
    setNotificationToDelete(null);
  }

  async function handleDeleteAll() {
    for (const n of notifications) {
      try {
        await notificationsApi.delete(n.id);
      } catch (error) {
        console.error("Failed to delete notification:", error);
      }
    }
    setNotifications([]);
  }

  const filteredNotifications = notifications.filter((n) => {
    const matchesRead = filter === "unread" ? !n.read : true;
    const matchesType = typeFilter === "all" || n.type === typeFilter;
    return matchesRead && matchesType;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleDelete = (notification: NotificationDisplay) => {
    setNotificationToDelete(notification);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    handleDeleteNotification();
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
          <p className="text-sm text-muted-foreground">Gérez les notifications de la plateforme</p>
        </div>
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={handleMarkAllAsRead}>
              <Check className="mr-2 h-4 w-4" />
              Tout marquer comme lu
            </Button>
          )}
          {notifications.length > 0 && (
            <Button variant="outline" size="sm" onClick={handleDeleteAll}>
              <Trash2 className="mr-2 h-4 w-4" />
              Tout effacer
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            Toutes
          </Button>
          <Button
            variant={filter === "unread" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("unread")}
          >
            Non lues
            {unreadCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {unreadCount}
              </Badge>
            )}
          </Button>
        </div>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            <SelectItem value="system">Système</SelectItem>
            <SelectItem value="user">Utilisateur</SelectItem>
            <SelectItem value="article">Article</SelectItem>
            <SelectItem value="comment">Commentaire</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border border-border bg-card">
        <div className="divide-y divide-border">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground">Chargement...</p>
            </div>
          ) : filteredNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Bell className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-lg font-medium text-foreground">Aucune notification</p>
              <p className="text-sm text-muted-foreground mt-1">
                {filter === "unread"
                  ? "Vous avez lu toutes vos notifications"
                  : "Aucune notification disponible"}
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => {
              const config = typeConfig[notification.type];
              const Icon = config.icon;
              const priority = priorityConfig[notification.priority];

              return (
                <div
                  key={notification.id}
                  className={`flex items-start gap-4 p-4 ${
                    notification.read ? "bg-card" : "bg-primary/5"
                  }`}
                >
                  <div className={`rounded-full p-2 ${config.bg}`}>
                    <Icon className={`h-4 w-4 ${config.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-foreground">{notification.title}</p>
                        <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {formatTime(notification.time)}
                          </span>
                          <Badge variant={priority.variant} className="text-xs">
                            {priority.label}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleMarkAsRead(notification.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              className="text-destructive"
                              onClick={() => handleDelete(notification)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la notification</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer cette notification ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
