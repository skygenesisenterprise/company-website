"use client";

import * as React from "react";
import { Activity, BellRing, Eye, MoreHorizontal, Pencil, Play, Plus, Power, Trash2, Webhook } from "lucide-react";

import {
  DashboardCardGrid,
  DashboardCodeBlock,
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

type WebhookStatus = "active" | "disabled" | "error";

interface IntegrationWebhook {
  id: string;
  name: string;
  url: string;
  events: string[];
  status: WebhookStatus;
  secret: string;
  lastDelivery?: string;
  successRate?: string;
  createdAt: string;
}

const statusLabels: Record<WebhookStatus, string> = {
  active: "Actif",
  disabled: "Désactivé",
  error: "En erreur",
};

const statusTones: Record<WebhookStatus, "green" | "gray" | "red"> = {
  active: "green",
  disabled: "gray",
  error: "red",
};

const webhooks: IntegrationWebhook[] = [
  {
    id: "deploy",
    name: "Déploiement site public",
    url: "https://ops.skygenesisenterprise.com/hooks/deployments/site",
    events: ["deployment.completed", "deployment.failed"],
    status: "active",
    secret: "whsec_01HX7QZ8Z9A2B3C4D5E6",
    lastDelivery: "2026-05-08T16:10:00Z",
    successRate: "98%",
    createdAt: "2026-02-12T10:00:00Z",
  },
  {
    id: "content",
    name: "Publication contenu",
    url: "https://cms.internal/hooks/content",
    events: ["page.published", "media.created"],
    status: "active",
    secret: "whsec_01HXCMSCONTENT",
    lastDelivery: "2026-05-08T12:40:00Z",
    successRate: "100%",
    createdAt: "2026-03-04T14:20:00Z",
  },
  {
    id: "crm",
    name: "Synchronisation CRM",
    url: "https://integrations.example.com/sge/crm",
    events: ["lead.created"],
    status: "error",
    secret: "whsec_01HXCRMERROR",
    lastDelivery: "2026-05-07T08:15:00Z",
    successRate: "72%",
    createdAt: "2026-01-22T09:30:00Z",
  },
];

function formatDate(value?: string) {
  if (!value) return "Jamais";
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

export default function WebhooksPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState<WebhookStatus | "all">("all");
  const [confirmWebhook, setConfirmWebhook] = React.useState<IntegrationWebhook | null>(null);

  const filteredWebhooks = webhooks.filter((item) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(query) || item.url.toLowerCase().includes(query);
    const matchesStatus = selectedStatus === "all" || item.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const primaryAction = (
    <Button>
      <Plus className="size-4" />
      Créer un webhook
    </Button>
  );

  return (
    <div className="space-y-6 bg-background p-4 sm:p-6">
      <DashboardPageHeader
        title="Webhooks"
        description="Configurez les événements envoyés vers vos systèmes."
        action={primaryAction}
      />

      <div className="grid gap-3 sm:grid-cols-3">
        <DashboardMetricCard label="Webhooks" value={webhooks.length} detail="Configurations" icon={Webhook} />
        <DashboardMetricCard label="Actifs" value={webhooks.filter((item) => item.status === "active").length} detail="Émissions autorisées" icon={BellRing} />
        <DashboardMetricCard label="En erreur" value={webhooks.filter((item) => item.status === "error").length} detail="À vérifier" icon={Activity} />
      </div>

      <DashboardToolbar>
        <DashboardSearch value={searchQuery} onChange={setSearchQuery} placeholder="Rechercher par nom ou URL" />
        <Select value={selectedStatus} onValueChange={(value) => setSelectedStatus(value as WebhookStatus | "all")}>
          <SelectTrigger className="w-full md:w-[180px]"><SelectValue placeholder="Statut" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="active">Actifs</SelectItem>
            <SelectItem value="disabled">Désactivés</SelectItem>
            <SelectItem value="error">En erreur</SelectItem>
          </SelectContent>
        </Select>
      </DashboardToolbar>

      {filteredWebhooks.length === 0 ? (
        <DashboardEmptyState icon={Webhook} title="Aucun webhook configuré" description="Créez un premier webhook pour envoyer les événements du site vers une intégration interne." action={primaryAction} />
      ) : (
        <>
          <DashboardTableFrame>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead>Webhook</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Événements</TableHead>
                  <TableHead>Secret</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Dernière livraison</TableHead>
                  <TableHead>Succès</TableHead>
                  <TableHead className="w-12"><span className="sr-only">Actions</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWebhooks.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell><DashboardCodeBlock>{item.url}</DashboardCodeBlock></TableCell>
                    <TableCell>
                      <div className="flex max-w-xs flex-wrap gap-1">
                        {item.events.map((event) => <Badge key={event} variant="outline">{event}</Badge>)}
                      </div>
                    </TableCell>
                    <TableCell><DashboardSecretField value={item.secret} /></TableCell>
                    <TableCell><DashboardStatusBadge tone={statusTones[item.status]}>{statusLabels[item.status]}</DashboardStatusBadge></TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(item.lastDelivery)}</TableCell>
                    <TableCell>{item.successRate || "-"}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="size-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem><Eye className="size-4" />Livraisons</DropdownMenuItem>
                          <DropdownMenuItem><Play className="size-4" />Tester</DropdownMenuItem>
                          <DropdownMenuItem><Pencil className="size-4" />Modifier</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setConfirmWebhook(item)}><Power className="size-4" />Activer / désactiver</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive focus:text-destructive"><Trash2 className="size-4" />Supprimer</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DashboardTableFrame>

          <DashboardCardGrid>
            {filteredWebhooks.map((item) => (
              <DashboardResourceCard key={item.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0"><h2 className="truncate font-medium">{item.name}</h2><p className="text-sm text-muted-foreground">{item.events.length} événement(s)</p></div>
                  <DashboardStatusBadge tone={statusTones[item.status]}>{statusLabels[item.status]}</DashboardStatusBadge>
                </div>
                <div className="mt-3 space-y-2">
                  <DashboardCodeBlock>{item.url}</DashboardCodeBlock>
                  <DashboardSecretField value={item.secret} />
                </div>
              </DashboardResourceCard>
            ))}
          </DashboardCardGrid>
        </>
      )}

      <Dialog open={Boolean(confirmWebhook)} onOpenChange={(open) => !open && setConfirmWebhook(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier l’activation du webhook</DialogTitle>
            <DialogDescription>
              Confirmez le changement d’état pour “{confirmWebhook?.name}”. Les livraisons peuvent être interrompues.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmWebhook(null)}>Annuler</Button>
            <Button onClick={() => setConfirmWebhook(null)}>Confirmer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
