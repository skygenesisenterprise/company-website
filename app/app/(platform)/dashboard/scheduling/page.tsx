"use client";

/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/scheduling
 * Layer: Dashboard Page
 * Purpose: Provides a scheduling view aligned with the main dashboard overview.
 */

import * as React from "react";
import {
  CalendarClock,
  CheckCircle2,
  Eye,
  MoreHorizontal,
  Pencil,
  Play,
  Plus,
  Search,
  Trash2,
  XCircle,
} from "lucide-react";

import { DashboardConfirmDialog } from "@/components/dashboard/audience-dashboard";
import {
  DashboardEmptyState,
  DashboardMetricCard,
  DashboardPageHeader,
  DashboardSearch,
  DashboardStatusBadge,
  DashboardToolbar,
} from "@/components/dashboard/cms-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ScheduleType = "publication" | "maintenance" | "notification" | "task" | "content";
type ScheduleStatus = "scheduled" | "running" | "completed" | "cancelled" | "failed";

interface ScheduledItem {
  id: string;
  title: string;
  type: ScheduleType;
  status: ScheduleStatus;
  scheduledAt: string;
  resource: string;
  owner: string;
  updatedAt: string;
}

const initialScheduledItems: ScheduledItem[] = [
  {
    id: "sch_demo_1001",
    title: "Publication de la page sécurité",
    type: "publication",
    status: "scheduled",
    scheduledAt: "2026-05-12T08:30:00Z",
    resource: "/security",
    owner: "Équipe contenu",
    updatedAt: "2026-05-08T13:20:00Z",
  },
  {
    id: "sch_demo_1002",
    title: "Maintenance courte du site officiel",
    type: "maintenance",
    status: "scheduled",
    scheduledAt: "2026-05-14T21:00:00Z",
    resource: "Pages publiques",
    owner: "Admin système",
    updatedAt: "2026-05-08T10:10:00Z",
  },
  {
    id: "sch_demo_1003",
    title: "Notification interne maintenance",
    type: "notification",
    status: "running",
    scheduledAt: "2026-05-10T07:00:00Z",
    resource: "Dashboard interne",
    owner: "Opérations",
    updatedAt: "2026-05-09T08:05:00Z",
  },
  {
    id: "sch_demo_1004",
    title: "Relecture du dossier entreprise",
    type: "task",
    status: "completed",
    scheduledAt: "2026-05-06T14:00:00Z",
    resource: "Dossier entreprise",
    owner: "Éditeur",
    updatedAt: "2026-05-06T16:30:00Z",
  },
  {
    id: "sch_demo_1005",
    title: "Mise à jour contenu développeurs",
    type: "content",
    status: "cancelled",
    scheduledAt: "2026-05-07T09:00:00Z",
    resource: "/developers",
    owner: "Équipe contenu",
    updatedAt: "2026-05-07T08:40:00Z",
  },
];

const typeLabels: Record<ScheduleType, string> = {
  publication: "Publication",
  maintenance: "Maintenance",
  notification: "Notification",
  task: "Tâche",
  content: "Contenu",
};

const statusLabels: Record<ScheduleStatus, string> = {
  scheduled: "Planifié",
  running: "En cours",
  completed: "Terminé",
  cancelled: "Annulé",
  failed: "Échoué",
};

const statusTones: Record<ScheduleStatus, "green" | "amber" | "red" | "gray"> = {
  scheduled: "amber",
  running: "amber",
  completed: "green",
  cancelled: "gray",
  failed: "red",
};

const typeOptions = [
  { value: "all", label: "Tous les types" },
  { value: "publication", label: "Publication" },
  { value: "maintenance", label: "Maintenance" },
  { value: "notification", label: "Notification" },
  { value: "task", label: "Tâche" },
  { value: "content", label: "Contenu" },
];

const statusOptions = [
  { value: "all", label: "Tous les statuts" },
  { value: "scheduled", label: "Planifié" },
  { value: "running", label: "En cours" },
  { value: "completed", label: "Terminé" },
  { value: "cancelled", label: "Annulé" },
  { value: "failed", label: "Échoué" },
];

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(new Date(value));
}

export default function SchedulingPage() {
  const [items, setItems] = React.useState(initialScheduledItems);
  const [query, setQuery] = React.useState("");
  const [type, setType] = React.useState("all");
  const [status, setStatus] = React.useState("all");
  const [confirmAction, setConfirmAction] = React.useState<{
    title: string;
    description: string;
    confirmLabel: string;
    destructive?: boolean;
    run: () => void;
  } | null>(null);

  const filteredItems = items.filter((item) => {
    const search = query.toLowerCase();
    const matchesQuery =
      item.title.toLowerCase().includes(search) ||
      item.resource.toLowerCase().includes(search) ||
      item.owner.toLowerCase().includes(search) ||
      typeLabels[item.type].toLowerCase().includes(search);
    const matchesType = type === "all" || item.type === type;
    const matchesStatus = status === "all" || item.status === status;
    return matchesQuery && matchesType && matchesStatus;
  });

  const updateStatus = (id: string, nextStatus: ScheduleStatus) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status: nextStatus, updatedAt: new Date().toISOString() } : item,
      ),
    );
  };

  const deleteItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const upcomingItems = [...items]
    .filter((item) => item.status === "scheduled" || item.status === "running")
    .sort((a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime())
    .slice(0, 4);

  return (
    <div className="space-y-6 p-6">
      <DashboardPageHeader
        title="Planification"
        description="Planifiez les publications, maintenances et tâches liées au site officiel."
        action={
          <Button variant="outline">
            <Plus className="mr-2 size-4" />
            Créer une planification
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard label="Planifications" value={items.length} detail="Éléments enregistrés" icon={CalendarClock} />
        <DashboardMetricCard label="À venir" value={items.filter((item) => item.status === "scheduled").length} detail="Planifiés" icon={CalendarClock} />
        <DashboardMetricCard label="En cours" value={items.filter((item) => item.status === "running").length} detail="Opérations actives" icon={Play} />
        <DashboardMetricCard label="Terminés" value={items.filter((item) => item.status === "completed").length} detail="Opérations clôturées" icon={CheckCircle2} />
      </div>

      <DashboardToolbar>
        <DashboardSearch
          value={query}
          onChange={setQuery}
          placeholder="Rechercher par titre, type, ressource ou responsable..."
        />
        <div className="flex flex-col gap-3 sm:flex-row">
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
        </div>
      </DashboardToolbar>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)]">
        <Card className="rounded-lg border-border/70 shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Search className="size-4" />
              Éléments planifiés
            </CardTitle>
            <CardDescription>
              Données fictives utilisées tant qu'aucun workflow de planification n'est connecté.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredItems.length === 0 ? (
              <DashboardEmptyState
                icon={CalendarClock}
                title="Aucune planification n'est enregistrée"
                description="Les publications, maintenances et tâches programmées apparaîtront ici."
                compact
              />
            ) : (
              <>
                <div className="hidden overflow-hidden rounded-lg border border-border/70 md:block">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Titre</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Date prévue</TableHead>
                        <TableHead>Responsable</TableHead>
                        <TableHead className="w-12" />
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredItems.map((item) => (
                        <TableRow key={item.id} className="hover:bg-muted/30">
                          <TableCell className="max-w-80">
                            <p className="truncate font-medium">{item.title}</p>
                            <p className="truncate text-xs text-muted-foreground">{item.resource}</p>
                          </TableCell>
                          <TableCell>{typeLabels[item.type]}</TableCell>
                          <TableCell>
                            <DashboardStatusBadge tone={statusTones[item.status]}>
                              {statusLabels[item.status]}
                            </DashboardStatusBadge>
                          </TableCell>
                          <TableCell className="whitespace-nowrap text-muted-foreground">
                            {formatDateTime(item.scheduledAt)}
                          </TableCell>
                          <TableCell>{item.owner}</TableCell>
                          <TableCell>
                            <RowActions
                              item={item}
                              onCancel={() =>
                                setConfirmAction({
                                  title: "Annuler la planification",
                                  description: "Cette action marquera l'élément comme annulé dans la liste interne.",
                                  confirmLabel: "Annuler la planification",
                                  run: () => updateStatus(item.id, "cancelled"),
                                })
                              }
                              onRunNow={() =>
                                setConfirmAction({
                                  title: "Déclencher maintenant",
                                  description: "Cette action simulera le déclenchement immédiat de la planification.",
                                  confirmLabel: "Déclencher",
                                  destructive: false,
                                  run: () => updateStatus(item.id, "running"),
                                })
                              }
                              onDelete={() =>
                                setConfirmAction({
                                  title: "Supprimer la planification",
                                  description: "Cette action retirera l'élément de la liste locale.",
                                  confirmLabel: "Supprimer",
                                  run: () => deleteItem(item.id),
                                })
                              }
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="grid gap-3 md:hidden">
                  {filteredItems.map((item) => (
                    <article key={item.id} className="rounded-lg border border-border/70 bg-card p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h2 className="truncate text-sm font-semibold">{item.title}</h2>
                          <p className="mt-1 truncate text-xs text-muted-foreground">{item.resource}</p>
                        </div>
                        <DashboardStatusBadge tone={statusTones[item.status]}>
                          {statusLabels[item.status]}
                        </DashboardStatusBadge>
                      </div>
                      <div className="mt-3 grid gap-1 text-xs text-muted-foreground">
                        <span>{typeLabels[item.type]}</span>
                        <span>{formatDateTime(item.scheduledAt)}</span>
                        <span>{item.owner}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="rounded-lg border-border/70 shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Prochaines opérations</CardTitle>
            <CardDescription>Vue simple des éléments à surveiller.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingItems.length === 0 ? (
              <DashboardEmptyState
                icon={CalendarClock}
                title="Aucune opération à venir"
                description="Les prochains éléments planifiés seront listés ici."
                compact
              />
            ) : (
              upcomingItems.map((item) => (
                <div key={item.id} className="rounded-lg border border-border/70 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{item.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{formatDateTime(item.scheduledAt)}</p>
                    </div>
                    <DashboardStatusBadge tone={statusTones[item.status]}>
                      {statusLabels[item.status]}
                    </DashboardStatusBadge>
                  </div>
                  <p className="mt-2 truncate text-xs text-muted-foreground">
                    {typeLabels[item.type]} · {item.resource}
                  </p>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      <DashboardConfirmDialog
        open={confirmAction !== null}
        onOpenChange={(open) => {
          if (!open) setConfirmAction(null);
        }}
        title={confirmAction?.title ?? ""}
        description={confirmAction?.description ?? ""}
        confirmLabel={confirmAction?.confirmLabel ?? "Confirmer"}
        destructive={confirmAction?.destructive ?? true}
        onConfirm={() => {
          confirmAction?.run();
          setConfirmAction(null);
        }}
      />
    </div>
  );
}

function RowActions({
  item,
  onCancel,
  onRunNow,
  onDelete,
}: {
  item: ScheduledItem;
  onCancel: () => void;
  onRunNow: () => void;
  onDelete: () => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8">
          <MoreHorizontal className="size-4" />
          <span className="sr-only">Actions</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Eye className="mr-2 size-4" />
          Consulter le détail
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Pencil className="mr-2 size-4" />
          Modifier
        </DropdownMenuItem>
        {item.status === "scheduled" ? (
          <>
            <DropdownMenuItem onClick={onRunNow}>
              <Play className="mr-2 size-4" />
              Déclencher maintenant
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onCancel}>
              <XCircle className="mr-2 size-4" />
              Annuler
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        ) : null}
        <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={onDelete}>
          <Trash2 className="mr-2 size-4" />
          Supprimer
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
