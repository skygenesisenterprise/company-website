"use client";

import * as React from "react";
import { Eye, Loader2, MoreHorizontal, RotateCcw, Shield, Trash2, UserMinus, Users } from "lucide-react";

import {
  DashboardConfirmDialog,
  DashboardEmptyState,
  DashboardFilter,
  DashboardMetricCard,
  DashboardPageHeader,
  DashboardRoleBadge,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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
import { useAuth } from "@/context/AuthContext";
import { adminUsersApi } from "@/lib/api";
import type { AdminUser } from "@/lib/api/types";

type UserRole = "owner" | "admin" | "editor" | "moderator" | "user";
type UserStatus = "active" | "invited" | "suspended" | "disabled";

interface DashboardUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  lastLogin?: string;
  createdAt: string;
  origin: string;
}

const roleLabels: Record<UserRole, string> = {
  owner: "Owner",
  admin: "Admin",
  editor: "Editor",
  moderator: "Moderator",
  user: "User",
};

const statusLabels: Record<UserStatus, string> = {
  active: "Actif",
  invited: "Invité",
  suspended: "Suspendu",
  disabled: "Désactivé",
};

const roleOptions = [
  { value: "all", label: "Tous les rôles" },
  { value: "user", label: "User" },
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "moderator", label: "Moderator" },
  { value: "owner", label: "Owner" },
];

const statusOptions = [
  { value: "all", label: "Tous les statuts" },
  { value: "active", label: "Actif" },
  { value: "invited", label: "Invité" },
  { value: "suspended", label: "Suspendu" },
  { value: "disabled", label: "Désactivé" },
];

function normalizeRole(role?: string): UserRole {
  const normalized = role?.toLowerCase();
  if (normalized === "owner" || normalized === "admin" || normalized === "editor" || normalized === "moderator") {
    return normalized;
  }
  return "user";
}

function mapUser(user: AdminUser): DashboardUser {
  const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ").trim();
  return {
    id: user.id,
    name: fullName || user.email.split("@")[0],
    email: user.email,
    avatar: user.avatarUrl,
    role: normalizeRole(user.role),
    status: user.isActive === false ? "disabled" : "active",
    createdAt: user.createdAt ?? new Date().toISOString(),
    lastLogin: user.updatedAt,
    origin: "Dashboard",
  };
}

function formatDate(value?: string) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function getInitials(name: string) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
  return initials.toUpperCase() || "U";
}

export default function UsersPage() {
  const [users, setUsers] = React.useState<DashboardUser[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");
  const [role, setRole] = React.useState("all");
  const [status, setStatus] = React.useState("all");
  const [confirmAction, setConfirmAction] = React.useState<{
    user: DashboardUser;
    nextRole?: UserRole;
    nextStatus?: UserStatus;
    remove?: boolean;
  } | null>(null);
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  React.useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      setUsers([]);
      setLoading(false);
      setError("Connectez-vous avec un compte autorisé pour consulter les utilisateurs.");
      return;
    }

    let mounted = true;

    async function loadUsers() {
      setLoading(true);
      try {
        const response = await adminUsersApi.list({ pageSize: 50 });
        if (mounted) {
          setUsers((response.data ?? []).map(mapUser));
          setError(null);
        }
      } catch {
        if (mounted) {
          setUsers([]);
          setError("Impossible de charger les utilisateurs depuis l'API d'administration.");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadUsers();
    return () => {
      mounted = false;
    };
  }, [authLoading, isAuthenticated]);

  const filteredUsers = users.filter((user) => {
    const haystack = `${user.name} ${user.email} ${user.id}`.toLowerCase();
    return (
      haystack.includes(query.toLowerCase()) &&
      (role === "all" || user.role === role) &&
      (status === "all" || user.status === status)
    );
  });

  const metrics = {
    total: users.length,
    admins: users.filter((user) => user.role === "admin" || user.role === "owner").length,
    editors: users.filter((user) => user.role === "editor" || user.role === "moderator").length,
    restricted: users.filter((user) => user.status === "suspended" || user.status === "disabled").length,
  };

  const applyAction = async () => {
    if (!confirmAction) return;

    const { user, nextRole, nextStatus, remove } = confirmAction;

    try {
      if (remove) {
        await adminUsersApi.delete(user.id);
      } else if (nextRole) {
        await adminUsersApi.update(user.id, { role: nextRole.toUpperCase() });
      } else if (nextStatus) {
        await adminUsersApi.update(user.id, { isActive: nextStatus === "active" });
      }
    } catch {
      setError("L'API n'a pas confirmé l'action. L'affichage local a été mis à jour pour conserver le flux d'administration.");
    }

    if (remove) {
      setUsers((current) => current.filter((item) => item.id !== user.id));
    } else {
      setUsers((current) =>
        current.map((item) =>
          item.id === user.id
            ? {
                ...item,
                role: nextRole ?? item.role,
                status: nextStatus ?? item.status,
              }
            : item
        )
      );
    }

    setConfirmAction(null);
  };

  const renderActions = (user: DashboardUser) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Actions utilisateur</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Administration</DropdownMenuLabel>
        <DropdownMenuItem>
          <Eye className="mr-2 h-4 w-4" />
          Consulter le profil
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Shield className="mr-2 h-4 w-4" />
            Modifier le rôle
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {(["user", "moderator", "editor", "admin"] as UserRole[]).map((nextRole) => (
              <DropdownMenuItem
                key={nextRole}
                disabled={user.role === nextRole}
                onClick={() => setConfirmAction({ user, nextRole })}
              >
                {roleLabels[nextRole]}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        {user.status === "active" ? (
          <DropdownMenuItem onClick={() => setConfirmAction({ user, nextStatus: "suspended" })}>
            <UserMinus className="mr-2 h-4 w-4" />
            Suspendre
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={() => setConfirmAction({ user, nextStatus: "active" })}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Réactiver
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          className="text-destructive focus:text-destructive"
          onClick={() => setConfirmAction({ user, remove: true })}
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
        title="Utilisateurs"
        description="Administrez les comptes utilisateurs et leurs accès."
      />

      {error ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {error}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard label="Comptes" value={metrics.total} helper="Utilisateurs listés" icon={Users} />
        <DashboardMetricCard label="Admins" value={metrics.admins} helper="Accès sensibles" icon={Shield} />
        <DashboardMetricCard label="Édition/modération" value={metrics.editors} helper="Gestion de contenu" icon={Eye} />
        <DashboardMetricCard label="Restreints" value={metrics.restricted} helper="Suspendus ou désactivés" icon={UserMinus} />
      </div>

      <DashboardToolbar>
        <DashboardSearch value={query} onChange={setQuery} placeholder="Rechercher par nom, email ou identifiant..." />
        <DashboardFilter label="Rôle" value={role} onChange={setRole} options={roleOptions} />
        <DashboardFilter label="Statut" value={status} onChange={setStatus} options={statusOptions} />
      </DashboardToolbar>

      {loading ? (
        <ResponsiveTableShell>
          <div className="flex min-h-52 items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            Chargement des utilisateurs...
          </div>
        </ResponsiveTableShell>
      ) : filteredUsers.length === 0 ? (
        <ResponsiveTableShell>
          <DashboardEmptyState
            icon={Users}
            title="Aucun utilisateur enregistré"
            description="Aucun utilisateur n'est encore enregistré. Les comptes liés au site apparaîtront ici."
          />
        </ResponsiveTableShell>
      ) : (
        <>
          <MobileResourceList>
            {filteredUsers.map((user) => (
              <MobileResourceCard key={user.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user.avatar} alt="" />
                      <AvatarFallback className="text-xs">{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="truncate font-medium">{user.name}</p>
                      <MutedMeta>{user.email}</MutedMeta>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <DashboardRoleBadge role={user.role} label={roleLabels[user.role]} />
                        <DashboardStatusBadge status={user.status} label={statusLabels[user.status]} />
                      </div>
                    </div>
                  </div>
                  {renderActions(user)}
                </div>
              </MobileResourceCard>
            ))}
          </MobileResourceList>

          <DesktopTable>
            <ResponsiveTableShell>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Rôle</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Dernière connexion</TableHead>
                    <TableHead>Création</TableHead>
                    <TableHead>Origine</TableHead>
                    <TableHead className="w-12" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id} className="hover:bg-muted/40">
                      <TableCell className="max-w-55">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar} alt="" />
                            <AvatarFallback className="text-xs">{getInitials(user.name)}</AvatarFallback>
                          </Avatar>
                          <TruncatedText className="font-medium">{user.name}</TruncatedText>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-60">
                        <TruncatedText>{user.email}</TruncatedText>
                      </TableCell>
                      <TableCell>
                        <DashboardRoleBadge role={user.role} label={roleLabels[user.role]} />
                      </TableCell>
                      <TableCell>
                        <DashboardStatusBadge status={user.status} label={statusLabels[user.status]} />
                      </TableCell>
                      <TableCell className="text-muted-foreground">{formatDate(user.lastLogin)}</TableCell>
                      <TableCell className="text-muted-foreground">{formatDate(user.createdAt)}</TableCell>
                      <TableCell>{user.origin}</TableCell>
                      <TableCell>{renderActions(user)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ResponsiveTableShell>
          </DesktopTable>
        </>
      )}

      <p className="text-xs text-muted-foreground">
        Les changements de rôle, suspensions et suppressions peuvent affecter l'accès au dashboard ou au workspace. Les informations affichées sont limitées aux données nécessaires à l'administration.
      </p>

      <DashboardConfirmDialog
        open={Boolean(confirmAction)}
        onOpenChange={(open) => !open && setConfirmAction(null)}
        title={
          confirmAction?.remove
            ? "Supprimer cet utilisateur ?"
            : confirmAction?.nextRole
              ? "Modifier le rôle utilisateur ?"
              : "Modifier l'accès utilisateur ?"
        }
        description="Cette action peut modifier les accès au dashboard ou au workspace. Vérifiez le compte concerné avant de confirmer."
        confirmLabel={confirmAction?.remove ? "Supprimer" : "Confirmer"}
        destructive={confirmAction?.remove || confirmAction?.nextStatus === "suspended"}
        onConfirm={applyAction}
      />
    </div>
  );
}
