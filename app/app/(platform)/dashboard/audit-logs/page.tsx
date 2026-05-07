"use client";

import { useState } from "react";
import {
  Shield,
  Search,
  Download,
  Filter,
  User,
  Clock,
  Globe,
  Key,
  Trash2,
  Edit,
  LogIn,
  LogOut,
  Settings,
  FileText,
  AlertTriangle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

interface AuditLog {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  userEmail: string;
  action: string;
  resource: string;
  resourceId?: string;
  ipAddress: string;
  userAgent: string;
  details?: string;
  status: "success" | "failed" | "warning";
}

const mockAuditLogs: AuditLog[] = [
  {
    id: "1",
    timestamp: "2026-03-27T14:30:00Z",
    userId: "1",
    userName: "Admin Principal",
    userEmail: "admin@etheriatimes.com",
    action: "LOGIN",
    resource: "auth",
    ipAddress: "192.168.1.100",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    status: "success",
  },
  {
    id: "2",
    timestamp: "2026-03-27T14:25:00Z",
    userId: "2",
    userName: "John Doe",
    userEmail: "john@example.com",
    action: "ARTICLE_CREATE",
    resource: "articles",
    resourceId: "42",
    ipAddress: "192.168.1.101",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    details: "Article: 'Les nouvelles technologies de 2026'",
    status: "success",
  },
  {
    id: "3",
    timestamp: "2026-03-27T14:20:00Z",
    userId: "1",
    userName: "Admin Principal",
    userEmail: "admin@etheriatimes.com",
    action: "USER_UPDATE",
    resource: "users",
    resourceId: "3",
    ipAddress: "192.168.1.100",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    details: "Role changed from 'editor' to 'admin'",
    status: "success",
  },
  {
    id: "4",
    timestamp: "2026-03-27T14:15:00Z",
    userId: "4",
    userName: "Jane Smith",
    userEmail: "jane@example.com",
    action: "LOGIN_FAILED",
    resource: "auth",
    ipAddress: "192.168.1.102",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0)",
    details: "Invalid password",
    status: "failed",
  },
  {
    id: "5",
    timestamp: "2026-03-27T14:10:00Z",
    userId: "2",
    userName: "John Doe",
    userEmail: "john@example.com",
    action: "ARTICLE_DELETE",
    resource: "articles",
    resourceId: "38",
    ipAddress: "192.168.1.101",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    details: "Article: 'Ancienne nouvelle supprimée'",
    status: "warning",
  },
  {
    id: "6",
    timestamp: "2026-03-27T14:05:00Z",
    userId: "1",
    userName: "Admin Principal",
    userEmail: "admin@etheriatimes.com",
    action: "SETTINGS_UPDATE",
    resource: "settings",
    ipAddress: "192.168.1.100",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    details: "Site title updated",
    status: "success",
  },
  {
    id: "7",
    timestamp: "2026-03-27T14:00:00Z",
    userId: "3",
    userName: "Editor User",
    userEmail: "editor@etheriatimes.com",
    action: "CATEGORY_CREATE",
    resource: "categories",
    resourceId: "15",
    ipAddress: "192.168.1.103",
    userAgent: "Mozilla/5.0 (X11; Linux x86_64)",
    details: "Category: 'Politique Internationale'",
    status: "success",
  },
  {
    id: "8",
    timestamp: "2026-03-27T13:55:00Z",
    userId: "1",
    userName: "Admin Principal",
    userEmail: "admin@etheriatimes.com",
    action: "API_KEY_CREATE",
    resource: "api_keys",
    resourceId: "key_123",
    ipAddress: "192.168.1.100",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    details: "New API key created: 'Production Key'",
    status: "success",
  },
  {
    id: "9",
    timestamp: "2026-03-27T13:50:00Z",
    userId: "2",
    userName: "John Doe",
    userEmail: "john@example.com",
    action: "MEDIA_UPLOAD",
    resource: "medias",
    resourceId: "media_456",
    ipAddress: "192.168.1.101",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    details: "Image uploaded: banner-2026.jpg (2.5 MB)",
    status: "success",
  },
  {
    id: "10",
    timestamp: "2026-03-27T13:45:00Z",
    userId: "1",
    userName: "Admin Principal",
    userEmail: "admin@etheriatimes.com",
    action: "LOGOUT",
    resource: "auth",
    ipAddress: "192.168.1.100",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    status: "success",
  },
];

const actionConfig: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  LOGIN: { label: "Connexion", icon: LogIn, color: "text-green-500" },
  LOGOUT: { label: "Déconnexion", icon: LogOut, color: "text-gray-500" },
  LOGIN_FAILED: { label: "Échec connexion", icon: AlertTriangle, color: "text-red-500" },
  USER_CREATE: { label: "Utilisateur créé", icon: User, color: "text-blue-500" },
  USER_UPDATE: { label: "Utilisateur modifié", icon: Edit, color: "text-blue-500" },
  USER_DELETE: { label: "Utilisateur supprimé", icon: Trash2, color: "text-red-500" },
  ARTICLE_CREATE: { label: "Article créé", icon: FileText, color: "text-green-500" },
  ARTICLE_UPDATE: { label: "Article modifié", icon: Edit, color: "text-blue-500" },
  ARTICLE_DELETE: { label: "Article supprimé", icon: Trash2, color: "text-red-500" },
  CATEGORY_CREATE: { label: "Catégorie créée", icon: FileText, color: "text-green-500" },
  CATEGORY_UPDATE: { label: "Catégorie modifiée", icon: Edit, color: "text-blue-500" },
  CATEGORY_DELETE: { label: "Catégorie supprimée", icon: Trash2, color: "text-red-500" },
  MEDIA_UPLOAD: { label: "Médias uploadé", icon: FileText, color: "text-purple-500" },
  MEDIA_DELETE: { label: "Médias supprimé", icon: Trash2, color: "text-red-500" },
  SETTINGS_UPDATE: { label: "Paramètres modifiés", icon: Settings, color: "text-orange-500" },
  API_KEY_CREATE: { label: "Clé API créée", icon: Key, color: "text-green-500" },
  API_KEY_DELETE: { label: "Clé API supprimée", icon: Trash2, color: "text-red-500" },
};

const statusConfig = {
  success: { label: "Succès", color: "bg-green-100 text-green-800" },
  failed: { label: "Échec", color: "bg-red-100 text-red-800" },
  warning: { label: "Avertissement", color: "bg-yellow-100 text-yellow-800" },
};

export default function AuditLogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [actionFilter, setActionFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [resourceFilter, setResourceFilter] = useState<string>("all");
  const [auditLogs] = useState<AuditLog[]>(mockAuditLogs);

  const filteredLogs = auditLogs.filter((log) => {
    const matchesSearch =
      log.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (log.details && log.details.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesAction = actionFilter === "all" || log.action === actionFilter;
    const matchesStatus = statusFilter === "all" || log.status === statusFilter;
    const matchesResource = resourceFilter === "all" || log.resource === resourceFilter;
    return matchesSearch && matchesAction && matchesStatus && matchesResource;
  });

  const stats = {
    total: auditLogs.length,
    success: auditLogs.filter((l) => l.status === "success").length,
    failed: auditLogs.filter((l) => l.status === "failed").length,
    warning: auditLogs.filter((l) => l.status === "warning").length,
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, "0");
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
    ][date.getUTCMonth()];
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${day} ${month} ${year}, ${hours}:${minutes}`;
  };

  const uniqueActions = Array.from(new Set(auditLogs.map((log) => log.action)));
  const uniqueResources = Array.from(new Set(auditLogs.map((log) => log.resource)));

  const handleExport = () => {
    const headers = ["Date", "Utilisateur", "Email", "Action", "Ressource", "IP", "Statut"];
    const csvContent = [
      headers.join(","),
      ...filteredLogs.map((log) =>
        [
          log.timestamp,
          log.userName,
          log.userEmail,
          log.action,
          log.resource,
          log.ipAddress,
          log.status,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `audit-logs-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Audit Logs</h1>
          <p className="text-sm text-muted-foreground">
            Suivi des actions et événements sur la plateforme
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Exporter
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
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
              <LogIn className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Succès</p>
              <p className="text-2xl font-bold">{stats.success}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10">
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Échecs</p>
              <p className="text-2xl font-bold">{stats.failed}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10">
              <Clock className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avertissements</p>
              <p className="text-2xl font-bold">{stats.warning}</p>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <CardTitle className="text-base">Historique des actions</CardTitle>
          </div>
          <CardDescription>
            Journal complet de toutes les actions effectuées sur la plateforme
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher dans les logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={actionFilter} onValueChange={setActionFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les actions</SelectItem>
                {uniqueActions.map((action) => (
                  <SelectItem key={action} value={action}>
                    {actionConfig[action]?.label || action}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={resourceFilter} onValueChange={setResourceFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Ressource" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les ressources</SelectItem>
                {uniqueResources.map((resource) => (
                  <SelectItem key={resource} value={resource}>
                    {resource}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="success">Succès</SelectItem>
                <SelectItem value="failed">Échec</SelectItem>
                <SelectItem value="warning">Avertissement</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Utilisateur</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Ressource</TableHead>
                  <TableHead>IP</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Shield className="h-8 w-8 text-muted-foreground" />
                        <p className="text-muted-foreground">Aucun log d&apos;audit trouvé</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredLogs.map((log) => {
                    const actionInfo = actionConfig[log.action] || {
                      label: log.action,
                      icon: Shield,
                      color: "text-gray-500",
                    };
                    const ActionIcon = actionInfo.icon;
                    return (
                      <TableRow key={log.id}>
                        <TableCell className="whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              {formatDateTime(log.timestamp)}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{log.userName}</p>
                              <p className="text-xs text-muted-foreground">{log.userEmail}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className={`flex items-center gap-2 ${actionInfo.color}`}>
                            <ActionIcon className="h-4 w-4" />
                            <span className="font-medium">{actionInfo.label}</span>
                            {log.resourceId && (
                              <span className="text-xs text-muted-foreground">
                                ({log.resourceId})
                              </span>
                            )}
                          </div>
                          {log.details && (
                            <p className="text-xs text-muted-foreground mt-1">{log.details}</p>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            <span className="capitalize">{log.resource}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <code className="text-xs bg-muted px-2 py-1 rounded">
                            {log.ipAddress}
                          </code>
                        </TableCell>
                        <TableCell>
                          <Badge className={statusConfig[log.status].color}>
                            {statusConfig[log.status].label}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{filteredLogs.length} entrées</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
