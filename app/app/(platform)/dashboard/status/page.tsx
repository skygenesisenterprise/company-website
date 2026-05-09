"use client";

import * as React from "react";
import { CalendarClock, CheckCircle2, Clock, History, MoreHorizontal, Pencil, Plus, ShieldAlert } from "lucide-react";

import {
  DashboardCardGrid,
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type OperationalStatus = "operational" | "degraded" | "incident" | "maintenance";

interface StatusService {
  id: string;
  name: string;
  area: string;
  status: OperationalStatus;
  note: string;
  updatedAt: string;
}

interface StatusEvent {
  id: string;
  title: string;
  type: "incident" | "maintenance" | "update";
  status: "open" | "planned" | "closed";
  createdAt: string;
}

const statusLabels: Record<OperationalStatus, string> = {
  operational: "Opérationnel",
  degraded: "Dégradé",
  incident: "Incident",
  maintenance: "Maintenance",
};

const statusTones: Record<OperationalStatus, "green" | "amber" | "red" | "gray"> = {
  operational: "green",
  degraded: "amber",
  incident: "red",
  maintenance: "amber",
};

const monitoredServices: StatusService[] = [
  { id: "web", name: "Site public", area: "Frontend", status: "operational", note: "Réponse normale.", updatedAt: "2026-05-08T16:15:00Z" },
  { id: "api", name: "API dashboard", area: "Backend", status: "operational", note: "Trafic nominal.", updatedAt: "2026-05-08T15:50:00Z" },
  { id: "media", name: "Médiathèque", area: "Content", status: "degraded", note: "Latence ponctuelle sur les aperçus.", updatedAt: "2026-05-07T18:05:00Z" },
  { id: "mailer", name: "Email transactionnel", area: "Operations", status: "maintenance", note: "Fenêtre de maintenance interne.", updatedAt: "2026-05-06T09:30:00Z" },
];

const statusEvents: StatusEvent[] = [
  { id: "evt-1", title: "Latence sur les aperçus médias", type: "incident", status: "open", createdAt: "2026-05-07T18:05:00Z" },
  { id: "evt-2", title: "Maintenance email transactionnel", type: "maintenance", status: "planned", createdAt: "2026-05-06T09:30:00Z" },
  { id: "evt-3", title: "Mise à jour API dashboard terminée", type: "update", status: "closed", createdAt: "2026-05-04T12:10:00Z" },
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

export default function StatusPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState<OperationalStatus | "all">("all");

  const filteredServices = monitoredServices.filter((service) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = service.name.toLowerCase().includes(query) || service.area.toLowerCase().includes(query);
    const matchesStatus = selectedStatus === "all" || service.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 bg-background p-4 sm:p-6">
      <DashboardPageHeader
        title="Statut opérationnel"
        description="Surveillez l’état opérationnel des composants internes."
        action={<Button><Plus className="size-4" />Créer un incident</Button>}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardMetricCard label="Opérationnels" value={monitoredServices.filter((service) => service.status === "operational").length} detail="Services sans alerte" icon={CheckCircle2} />
        <DashboardMetricCard label="Dégradés" value={monitoredServices.filter((service) => service.status === "degraded").length} detail="Surveillance active" icon={ShieldAlert} />
        <DashboardMetricCard label="Incidents ouverts" value={statusEvents.filter((event) => event.type === "incident" && event.status === "open").length} detail="Événements internes" icon={History} />
        <DashboardMetricCard label="Maintenances" value={statusEvents.filter((event) => event.type === "maintenance").length} detail="Planifiées ou en cours" icon={CalendarClock} />
      </div>

      <DashboardToolbar>
        <DashboardSearch value={searchQuery} onChange={setSearchQuery} placeholder="Rechercher un service ou une zone" />
        <Select value={selectedStatus} onValueChange={(value) => setSelectedStatus(value as OperationalStatus | "all")}>
          <SelectTrigger className="w-full md:w-[210px]"><SelectValue placeholder="Statut" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="operational">Opérationnels</SelectItem>
            <SelectItem value="degraded">Dégradés</SelectItem>
            <SelectItem value="incident">Incident</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
          </SelectContent>
        </Select>
      </DashboardToolbar>

      {filteredServices.length === 0 ? (
        <DashboardEmptyState icon={CheckCircle2} title="Aucun statut particulier" description="Aucun service ne correspond aux filtres sélectionnés." />
      ) : (
        <>
          <DashboardTableFrame>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead>Service</TableHead>
                  <TableHead>Zone</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Note</TableHead>
                  <TableHead>Dernière mise à jour</TableHead>
                  <TableHead className="w-12"><span className="sr-only">Actions</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell className="text-muted-foreground">{service.area}</TableCell>
                    <TableCell><DashboardStatusBadge tone={statusTones[service.status]}>{statusLabels[service.status]}</DashboardStatusBadge></TableCell>
                    <TableCell className="max-w-md truncate text-muted-foreground">{service.note}</TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(service.updatedAt)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="size-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem><Pencil className="size-4" />Mettre à jour</DropdownMenuItem>
                          <DropdownMenuItem><History className="size-4" />Historique</DropdownMenuItem>
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
                  <div><h2 className="font-medium">{service.name}</h2><p className="text-sm text-muted-foreground">{service.area}</p></div>
                  <DashboardStatusBadge tone={statusTones[service.status]}>{statusLabels[service.status]}</DashboardStatusBadge>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{service.note}</p>
              </DashboardResourceCard>
            ))}
          </DashboardCardGrid>
        </>
      )}

      <section className="rounded-lg border border-border/70 bg-card p-4">
        <div className="mb-4 flex items-center gap-2">
          <Clock className="size-4 text-muted-foreground" />
          <h2 className="font-semibold">Événements récents</h2>
        </div>
        <div className="space-y-3">
          {statusEvents.map((event) => (
            <div key={event.id} className="flex flex-col gap-1 rounded-md border border-border/60 p-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-muted-foreground">{formatDate(event.createdAt)}</p>
              </div>
              <DashboardStatusBadge tone={event.status === "open" ? "red" : event.status === "planned" ? "amber" : "gray"}>
                {event.status === "open" ? "Ouvert" : event.status === "planned" ? "Planifié" : "Clôturé"}
              </DashboardStatusBadge>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
