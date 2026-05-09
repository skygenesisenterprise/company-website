"use client";

import * as React from "react";
import { AlertTriangle, Copy, Key, MoreHorizontal, Pencil, Plus, RefreshCw, ShieldCheck, Trash2, XCircle } from "lucide-react";

import {
  DashboardCardGrid,
  DashboardEmptyState,
  DashboardMetricCard,
  DashboardPageHeader,
  DashboardResourceCard,
  DashboardSearch,
  DashboardSecretField,
  DashboardStatusBadge,
  DashboardTableFrame,
  DashboardToolbar,
} from "@/components/dashboard/cms-shell";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type ApiKeyStatus = "active" | "expired" | "revoked" | "pending";

interface ApiKeyRecord {
  id: string;
  name: string;
  prefix: string;
  scopes: string[];
  status: ApiKeyStatus;
  lastUsed?: string;
  createdAt: string;
  expiresAt?: string;
}

const statusLabels: Record<ApiKeyStatus, string> = {
  active: "Active",
  expired: "Expirée",
  revoked: "Révoquée",
  pending: "En attente",
};

const statusTones: Record<ApiKeyStatus, "green" | "amber" | "red" | "gray"> = {
  active: "green",
  expired: "amber",
  revoked: "red",
  pending: "gray",
};

const initialApiKeys: ApiKeyRecord[] = [
  {
    id: "site-read",
    name: "Lecture site public",
    prefix: "pk_live_8FJ4K2",
    scopes: ["content:read", "media:read"],
    status: "active",
    lastUsed: "2026-05-08T15:42:00Z",
    createdAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "server-write",
    name: "Intégration serveur CMS",
    prefix: "sk_live_2NA9QX",
    scopes: ["content:write", "webhooks:read", "media:write"],
    status: "active",
    lastUsed: "2026-05-08T13:20:00Z",
    createdAt: "2026-02-20T11:30:00Z",
    expiresAt: "2027-02-20T11:30:00Z",
  },
  {
    id: "legacy-sync",
    name: "Synchronisation legacy",
    prefix: "sk_live_OLD7P",
    scopes: ["content:read"],
    status: "expired",
    createdAt: "2025-03-02T09:00:00Z",
    expiresAt: "2026-03-02T09:00:00Z",
  },
  {
    id: "revoked-test",
    name: "Test révoqué",
    prefix: "pk_test_RVK9D",
    scopes: ["status:read"],
    status: "revoked",
    createdAt: "2026-04-01T08:15:00Z",
  },
];

function formatDate(value?: string) {
  if (!value) return "Non renseigné";
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

function formatDateTime(value?: string) {
  if (!value) return "Jamais";
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

export default function ApiKeysPage() {
  const [apiKeys, setApiKeys] = React.useState<ApiKeyRecord[]>(initialApiKeys);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState<ApiKeyStatus | "all">("all");
  const [confirmKey, setConfirmKey] = React.useState<ApiKeyRecord | null>(null);
  const [confirmMode, setConfirmMode] = React.useState<"revoke" | "delete">("revoke");

  const filteredKeys = apiKeys.filter((apiKey) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = apiKey.name.toLowerCase().includes(query) || apiKey.prefix.toLowerCase().includes(query);
    const matchesStatus = selectedStatus === "all" || apiKey.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const openConfirm = (apiKey: ApiKeyRecord, mode: "revoke" | "delete") => {
    setConfirmKey(apiKey);
    setConfirmMode(mode);
  };

  const confirmAction = () => {
    if (!confirmKey) return;
    if (confirmMode === "delete") {
      setApiKeys((current) => current.filter((apiKey) => apiKey.id !== confirmKey.id));
    } else {
      setApiKeys((current) => current.map((apiKey) => apiKey.id === confirmKey.id ? { ...apiKey, status: "revoked" } : apiKey));
    }
    setConfirmKey(null);
  };

  const copyPrefix = async (prefix: string) => {
    await navigator.clipboard?.writeText(prefix);
  };

  const primaryAction = (
    <Button>
      <Plus className="size-4" />
      Créer une clé API
    </Button>
  );

  return (
    <div className="space-y-6 bg-background p-4 sm:p-6">
      <DashboardPageHeader
        title="Clés API"
        description="Gérez les clés utilisées par les intégrations du site."
        action={primaryAction}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardMetricCard label="Clés" value={apiKeys.length} detail="Préfixes enregistrés" icon={Key} />
        <DashboardMetricCard label="Actives" value={apiKeys.filter((keyItem) => keyItem.status === "active").length} detail="Utilisables" icon={ShieldCheck} />
        <DashboardMetricCard label="Expirées" value={apiKeys.filter((keyItem) => keyItem.status === "expired").length} detail="À renouveler" />
        <DashboardMetricCard label="Révoquées" value={apiKeys.filter((keyItem) => keyItem.status === "revoked").length} detail="Accès coupés" />
      </div>

      <Alert className="border-amber-200 bg-amber-50/60">
        <AlertTriangle className="size-4 text-amber-700" />
        <AlertTitle>Sécurité des clés</AlertTitle>
        <AlertDescription>
          Seuls les préfixes sont affichés ici. Stockez les clés complètes dans un coffre ou des variables d’environnement au moment de leur génération.
        </AlertDescription>
      </Alert>

      <DashboardToolbar>
        <DashboardSearch value={searchQuery} onChange={setSearchQuery} placeholder="Rechercher par nom ou préfixe" />
        <Select value={selectedStatus} onValueChange={(value) => setSelectedStatus(value as ApiKeyStatus | "all")}>
          <SelectTrigger className="w-full md:w-[180px]"><SelectValue placeholder="Statut" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="active">Actives</SelectItem>
            <SelectItem value="expired">Expirées</SelectItem>
            <SelectItem value="revoked">Révoquées</SelectItem>
            <SelectItem value="pending">En attente</SelectItem>
          </SelectContent>
        </Select>
      </DashboardToolbar>

      {filteredKeys.length === 0 ? (
        <DashboardEmptyState icon={Key} title="Aucune clé API créée" description="Créez une première clé pour connecter une intégration au site officiel." action={primaryAction} />
      ) : (
        <>
          <DashboardTableFrame>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead>Nom</TableHead>
                  <TableHead>Préfixe</TableHead>
                  <TableHead>Scopes</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Dernière utilisation</TableHead>
                  <TableHead>Création</TableHead>
                  <TableHead>Expiration</TableHead>
                  <TableHead className="w-12"><span className="sr-only">Actions</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredKeys.map((apiKey) => (
                  <TableRow key={apiKey.id}>
                    <TableCell className="font-medium">{apiKey.name}</TableCell>
                    <TableCell><DashboardSecretField value={apiKey.prefix} visiblePrefix={apiKey.prefix.length} /></TableCell>
                    <TableCell>
                      <div className="flex max-w-xs flex-wrap gap-1">
                        {apiKey.scopes.map((scope) => <Badge key={scope} variant="outline">{scope}</Badge>)}
                      </div>
                    </TableCell>
                    <TableCell><DashboardStatusBadge tone={statusTones[apiKey.status]}>{statusLabels[apiKey.status]}</DashboardStatusBadge></TableCell>
                    <TableCell className="text-muted-foreground">{formatDateTime(apiKey.lastUsed)}</TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(apiKey.createdAt)}</TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(apiKey.expiresAt)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="size-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => void copyPrefix(apiKey.prefix)}><Copy className="size-4" />Copier le préfixe</DropdownMenuItem>
                          <DropdownMenuItem><Pencil className="size-4" />Modifier les scopes</DropdownMenuItem>
                          <DropdownMenuItem><RefreshCw className="size-4" />Renouveler</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {apiKey.status === "active" ? (
                            <DropdownMenuItem onClick={() => openConfirm(apiKey, "revoke")} className="text-destructive focus:text-destructive"><XCircle className="size-4" />Révoquer</DropdownMenuItem>
                          ) : null}
                          <DropdownMenuItem onClick={() => openConfirm(apiKey, "delete")} className="text-destructive focus:text-destructive"><Trash2 className="size-4" />Supprimer</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DashboardTableFrame>

          <DashboardCardGrid>
            {filteredKeys.map((apiKey) => (
              <DashboardResourceCard key={apiKey.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0"><h2 className="truncate font-medium">{apiKey.name}</h2><p className="text-sm text-muted-foreground">{formatDateTime(apiKey.lastUsed)}</p></div>
                  <DashboardStatusBadge tone={statusTones[apiKey.status]}>{statusLabels[apiKey.status]}</DashboardStatusBadge>
                </div>
                <div className="mt-3"><DashboardSecretField value={apiKey.prefix} visiblePrefix={apiKey.prefix.length} /></div>
                <div className="mt-3 flex flex-wrap gap-1">{apiKey.scopes.map((scope) => <Badge key={scope} variant="outline">{scope}</Badge>)}</div>
              </DashboardResourceCard>
            ))}
          </DashboardCardGrid>
        </>
      )}

      <Dialog open={Boolean(confirmKey)} onOpenChange={(open) => !open && setConfirmKey(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{confirmMode === "delete" ? "Supprimer la clé API" : "Révoquer la clé API"}</DialogTitle>
            <DialogDescription>
              {confirmMode === "delete"
                ? `La clé “${confirmKey?.name}” sera supprimée de la liste.`
                : `La clé “${confirmKey?.name}” ne pourra plus être utilisée par les intégrations.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmKey(null)}>Annuler</Button>
            <Button variant="destructive" onClick={confirmAction}>{confirmMode === "delete" ? "Supprimer" : "Révoquer"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
