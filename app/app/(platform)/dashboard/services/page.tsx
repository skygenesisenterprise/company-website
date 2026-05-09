"use client";

import * as React from "react";
import { Eye, MoreHorizontal, Pencil, Plus, Power, Server, Trash2 } from "lucide-react";

import {
  DashboardCardGrid,
  DashboardCodeBlock,
  DashboardEmptyState,
  DashboardMetricCard,
  DashboardPageHeader,
  DashboardResourceCard,
  DashboardSearch,
  DashboardStatusBadge,
  DashboardTableFrame,
  DashboardToolbar,
} from "@/components/dashboard/cms-shell";
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

type ServiceStatus = "active" | "inactive" | "degraded" | "maintenance";

interface SiteService {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
  environment: "production" | "staging" | "internal";
  endpoint: string;
  owner: string;
  updatedAt: string;
}

const statusLabels: Record<ServiceStatus, string> = {
  active: "Actif",
  inactive: "Inactif",
  degraded: "Dégradé",
  maintenance: "Maintenance",
};

const statusTones: Record<ServiceStatus, "green" | "gray" | "amber" | "red"> = {
  active: "green",
  inactive: "gray",
  degraded: "amber",
  maintenance: "amber",
};

const services: SiteService[] = [
  {
    id: "web",
    name: "Site public",
    description: "Application Next.js officielle et contenus publics.",
    status: "active",
    environment: "production",
    endpoint: "https://skygenesisenterprise.com",
    owner: "Web Platform",
    updatedAt: "2026-05-08T16:20:00Z",
  },
  {
    id: "api",
    name: "API principale",
    description: "Endpoints utilisés par le dashboard et les intégrations éditoriales.",
    status: "active",
    environment: "production",
    endpoint: "/api/v1",
    owner: "Backend",
    updatedAt: "2026-05-08T15:50:00Z",
  },
  {
    id: "media",
    name: "Médiathèque",
    description: "Stockage et exposition des fichiers utilisés par les pages publiques.",
    status: "degraded",
    environment: "internal",
    endpoint: "/api/v1/media",
    owner: "Content Ops",
    updatedAt: "2026-05-07T18:05:00Z",
  },
  {
    id: "mailer",
    name: "Notifications email",
    description: "Envoi transactionnel pour formulaires, compte et alertes internes.",
    status: "maintenance",
    environment: "staging",
    endpoint: "smtp.internal",
    owner: "Operations",
    updatedAt: "2026-05-06T09:30:00Z",
  },
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState<ServiceStatus | "all">("all");
  const [confirmService, setConfirmService] = React.useState<SiteService | null>(null);

  const filteredServices = services.filter((service) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      service.name.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.endpoint.toLowerCase().includes(query);
    const matchesStatus = selectedStatus === "all" || service.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const primaryAction = (
    <Button>
      <Plus className="size-4" />
      Ajouter un service
    </Button>
  );

  return (
    <div className="space-y-6 bg-background p-4 sm:p-6">
      <DashboardPageHeader
        title="Services"
        description="Suivez les services rattachés au site officiel."
        action={primaryAction}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardMetricCard label="Services" value={services.length} detail="Référencés dans le dashboard" icon={Server} />
        <DashboardMetricCard label="Actifs" value={services.filter((service) => service.status === "active").length} detail="Sans action immédiate" />
        <DashboardMetricCard label="À surveiller" value={services.filter((service) => service.status === "degraded" || service.status === "maintenance").length} detail="Dégradé ou maintenance" />
        <DashboardMetricCard label="Inactifs" value={services.filter((service) => service.status === "inactive").length} detail="Désactivés" />
      </div>

      <DashboardToolbar>
        <DashboardSearch value={searchQuery} onChange={setSearchQuery} placeholder="Rechercher par nom, endpoint ou description" />
        <Select value={selectedStatus} onValueChange={(value) => setSelectedStatus(value as ServiceStatus | "all")}>
          <SelectTrigger className="w-full md:w-47.5">
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="active">Actifs</SelectItem>
            <SelectItem value="inactive">Inactifs</SelectItem>
            <SelectItem value="degraded">Dégradés</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
          </SelectContent>
        </Select>
      </DashboardToolbar>

      {filteredServices.length === 0 ? (
        <DashboardEmptyState
          icon={Server}
          title="Aucun service enregistré"
          description="Ajoutez un premier service pour suivre les briques techniques du site officiel."
          action={primaryAction}
        />
      ) : (
        <>
          <DashboardTableFrame>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead>Service</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Environnement</TableHead>
                  <TableHead>Endpoint</TableHead>
                  <TableHead>Responsable</TableHead>
                  <TableHead>Mis à jour</TableHead>
                  <TableHead className="w-12"><span className="sr-only">Actions</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>
                      <div className="max-w-md space-y-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="line-clamp-1 text-xs text-muted-foreground">{service.description}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <DashboardStatusBadge tone={statusTones[service.status]}>{statusLabels[service.status]}</DashboardStatusBadge>
                    </TableCell>
                    <TableCell className="capitalize text-muted-foreground">{service.environment}</TableCell>
                    <TableCell><DashboardCodeBlock>{service.endpoint}</DashboardCodeBlock></TableCell>
                    <TableCell className="text-muted-foreground">{service.owner}</TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(service.updatedAt)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon"><MoreHorizontal className="size-4" /><span className="sr-only">Actions</span></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem><Eye className="size-4" />Détails</DropdownMenuItem>
                          <DropdownMenuItem><Pencil className="size-4" />Modifier</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setConfirmService(service)}><Power className="size-4" />Activer / désactiver</DropdownMenuItem>
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
            {filteredServices.map((service) => (
              <DashboardResourceCard key={service.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="truncate font-medium">{service.name}</h2>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <DashboardStatusBadge tone={statusTones[service.status]}>{statusLabels[service.status]}</DashboardStatusBadge>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <DashboardCodeBlock>{service.endpoint}</DashboardCodeBlock>
                  <div className="flex justify-between text-xs text-muted-foreground"><span>{service.owner}</span><span>{formatDate(service.updatedAt)}</span></div>
                </div>
              </DashboardResourceCard>
            ))}
          </DashboardCardGrid>
        </>
      )}

      <Dialog open={Boolean(confirmService)} onOpenChange={(open) => !open && setConfirmService(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier l’état du service</DialogTitle>
            <DialogDescription>
              Confirmez le changement d’état pour “{confirmService?.name}”. Cette action peut modifier la visibilité opérationnelle du service.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmService(null)}>Annuler</Button>
            <Button onClick={() => setConfirmService(null)}>Confirmer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
