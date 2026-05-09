"use client";

/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/audit-logs
 * Layer: Dashboard Page
 * Purpose: Provides an audit logging view aligned with the main dashboard overview.
 */

import * as React from "react";
import { Check, Clipboard, Download, Eye, FileText, KeyRound, LogIn, MoreHorizontal, ShieldCheck, ShieldAlert, UserPen } from "lucide-react";

import {
  DashboardEmptyState,
  DashboardMetricCard,
  DashboardPageHeader,
  DashboardSearch,
  DashboardStatusBadge,
  DashboardToolbar,
} from "@/components/dashboard/cms-shell";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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

type AuditActionType = "creation" | "modification" | "suppression" | "publication" | "connexion" | "security" | "integration";
type AuditLevel = "info" | "warning" | "critical";

interface AuditEvent {
  id: string;
  action: string;
  type: AuditActionType;
  user: string;
  resource: string;
  occurredAt: string;
  ipAddress?: string;
  level: AuditLevel;
  details: string;
}

const auditEvents: AuditEvent[] = [
  {
    id: "aud_demo_1001",
    action: "Publication validée",
    type: "publication",
    user: "Admin contenu",
    resource: "Page /security",
    occurredAt: "2026-05-08T14:20:00Z",
    ipAddress: "192.0.2.24",
    level: "info",
    details: "Mise en ligne d'une page institutionnelle.",
  },
  {
    id: "aud_demo_1002",
    action: "Clé API désactivée",
    type: "integration",
    user: "Responsable intégrations",
    resource: "Connecteur analytics",
    occurredAt: "2026-05-08T09:35:00Z",
    ipAddress: "198.51.100.18",
    level: "warning",
    details: "Accès suspendu après rotation prévue.",
  },
  {
    id: "aud_demo_1003",
    action: "Tentative de connexion refusée",
    type: "security",
    user: "Compte inconnu",
    resource: "Dashboard",
    occurredAt: "2026-05-07T17:05:00Z",
    ipAddress: "203.0.113.42",
    level: "critical",
    details: "Échec répété détecté, aucun secret exposé.",
  },
  {
    id: "aud_demo_1004",
    action: "Dossier modifié",
    type: "modification",
    user: "Éditeur",
    resource: "Dossier entreprise",
    occurredAt: "2026-05-07T11:12:00Z",
    ipAddress: "192.0.2.31",
    level: "info",
    details: "Mise à jour du résumé et des métadonnées.",
  },
  {
    id: "aud_demo_1005",
    action: "Notification créée",
    type: "creation",
    user: "Admin système",
    resource: "Notification maintenance",
    occurredAt: "2026-05-06T16:44:00Z",
    ipAddress: "192.0.2.45",
    level: "info",
    details: "Brouillon de notification interne préparé.",
  },
];

const typeOptions = [
  { value: "all", label: "Tous les types" },
  { value: "creation", label: "Création" },
  { value: "modification", label: "Modification" },
  { value: "suppression", label: "Suppression" },
  { value: "publication", label: "Publication" },
  { value: "connexion", label: "Connexion" },
  { value: "security", label: "Sécurité" },
  { value: "integration", label: "Intégration" },
];

const levelOptions = [
  { value: "all", label: "Tous les niveaux" },
  { value: "info", label: "Info" },
  { value: "warning", label: "Warning" },
  { value: "critical", label: "Critical" },
];

const levelLabels: Record<AuditLevel, string> = {
  info: "Info",
  warning: "Warning",
  critical: "Critical",
};

const levelTones: Record<AuditLevel, "blue" | "amber" | "red"> = {
  info: "blue",
  warning: "amber",
  critical: "red",
};

const typeIcons: Record<AuditActionType, React.ElementType> = {
  creation: FileText,
  modification: UserPen,
  suppression: ShieldAlert,
  publication: Check,
  connexion: LogIn,
  security: ShieldCheck,
  integration: KeyRound,
};

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(new Date(value));
}

export default function AuditLogsPage() {
  const [query, setQuery] = React.useState("");
  const [type, setType] = React.useState("all");
  const [level, setLevel] = React.useState("all");
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const filteredEvents = auditEvents.filter((event) => {
    const search = query.toLowerCase();
    const matchesQuery =
      event.action.toLowerCase().includes(search) ||
      event.user.toLowerCase().includes(search) ||
      event.resource.toLowerCase().includes(search) ||
      event.id.toLowerCase().includes(search) ||
      event.ipAddress?.toLowerCase().includes(search);
    const matchesType = type === "all" || event.type === type;
    const matchesLevel = level === "all" || event.level === level;
    return matchesQuery && matchesType && matchesLevel;
  });

  const copyEventId = async (id: string) => {
    await navigator.clipboard.writeText(id);
    setCopiedId(id);
    window.setTimeout(() => setCopiedId(null), 1600);
  };

  const handleExport = () => {
    const headers = ["id", "date", "action", "user", "resource", "level"];
    const rows = filteredEvents.map((event) =>
      [event.id, event.occurredAt, event.action, event.user, event.resource, event.level].join(","),
    );
    const blob = new Blob([[headers.join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "audit-logs-demo.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 p-6">
      <DashboardPageHeader
        title="Audit logs"
        description="Consultez les actions importantes réalisées dans le dashboard."
        action={
          <Button variant="outline" onClick={handleExport}>
            <Download className="mr-2 size-4" />
            Exporter
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard label="Événements" value={auditEvents.length} detail="Entrées fictives listées" icon={ShieldCheck} />
        <DashboardMetricCard label="Info" value={auditEvents.filter((event) => event.level === "info").length} detail="Actions nominales" icon={FileText} />
        <DashboardMetricCard label="Warning" value={auditEvents.filter((event) => event.level === "warning").length} detail="Points à vérifier" icon={ShieldAlert} />
        <DashboardMetricCard label="Critical" value={auditEvents.filter((event) => event.level === "critical").length} detail="À traiter en priorité" icon={ShieldCheck} />
      </div>

      <DashboardToolbar>
        <DashboardSearch
          value={query}
          onChange={setQuery}
          placeholder="Rechercher par utilisateur, action, ressource, IP ou identifiant..."
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-full sm:w-48" aria-label="Type d'action">
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
          <Select value={level} onValueChange={setLevel}>
            <SelectTrigger className="w-full sm:w-44" aria-label="Niveau">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {levelOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </DashboardToolbar>

      {filteredEvents.length === 0 ? (
        <DashboardEmptyState
          icon={ShieldCheck}
          title="Aucun événement d'audit n'est disponible pour le moment"
          description="Les actions importantes du dashboard apparaîtront ici."
        />
      ) : (
        <>
          <div className="hidden overflow-hidden rounded-lg border border-border/70 bg-card md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Action</TableHead>
                  <TableHead>Utilisateur</TableHead>
                  <TableHead>Ressource</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>IP</TableHead>
                  <TableHead>Niveau</TableHead>
                  <TableHead className="w-12" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEvents.map((event) => {
                  const Icon = typeIcons[event.type];
                  return (
                    <TableRow key={event.id} className="hover:bg-muted/30">
                      <TableCell className="max-w-80">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                            <Icon className="size-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate font-medium">{event.action}</p>
                            <p className="truncate text-xs text-muted-foreground">{event.details}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{event.user}</TableCell>
                      <TableCell className="max-w-52 truncate">{event.resource}</TableCell>
                      <TableCell className="whitespace-nowrap text-muted-foreground">{formatDateTime(event.occurredAt)}</TableCell>
                      <TableCell>
                        <code className="rounded-md bg-muted px-2 py-1 text-xs">{event.ipAddress ?? "N/A"}</code>
                      </TableCell>
                      <TableCell>
                        <DashboardStatusBadge tone={levelTones[event.level]}>{levelLabels[event.level]}</DashboardStatusBadge>
                      </TableCell>
                      <TableCell>
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
                            <DropdownMenuItem onClick={() => copyEventId(event.id)}>
                              <Clipboard className="mr-2 size-4" />
                              {copiedId === event.id ? "Identifiant copié" : "Copier l'identifiant"}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          <div className="grid gap-3 md:hidden">
            {filteredEvents.map((event) => {
              const Icon = typeIcons[event.type];
              return (
                <article key={event.id} className="rounded-lg border border-border/70 bg-card p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                        <Icon className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="truncate text-sm font-semibold">{event.action}</h2>
                        <p className="mt-1 text-xs text-muted-foreground">{event.resource}</p>
                      </div>
                    </div>
                    <DashboardStatusBadge tone={levelTones[event.level]}>{levelLabels[event.level]}</DashboardStatusBadge>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{event.details}</p>
                  <div className="mt-3 grid gap-1 text-xs text-muted-foreground">
                    <span>{event.user}</span>
                    <span>{formatDateTime(event.occurredAt)}</span>
                    <span>{event.ipAddress ?? "IP non disponible"}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
