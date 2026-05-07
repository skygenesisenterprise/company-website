"use client";

import { useState } from "react";
import {
  Key,
  Search,
  MoreHorizontal,
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeIcon,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface ApiKey {
  id: string;
  name: string;
  prefix: string;
  key: string;
  type: "public" | "secret";
  permissions: string[];
  lastUsed?: string;
  createdAt: string;
  expiresAt?: string;
  status: "active" | "expired" | "revoked";
}

const mockApiKeys: ApiKey[] = [
  {
    id: "1",
    name: "Clé production principale",
    prefix: "pk_live_",
    key: "pk_live_xxxxxxxxxxxxx",
    type: "public",
    permissions: ["read:articles", "read:categories"],
    lastUsed: "2026-03-27T10:30:00Z",
    createdAt: "2025-01-15T10:00:00Z",
    status: "active",
  },
  {
    id: "2",
    name: "Clé secrète serveur",
    prefix: "sk_live_",
    key: "sk_live_xxxxxxxxxxxxx",
    type: "secret",
    permissions: ["read:all", "write:articles", "admin:users"],
    lastUsed: "2026-03-27T09:45:00Z",
    createdAt: "2025-01-15T10:00:00Z",
    expiresAt: "2027-01-15T10:00:00Z",
    status: "active",
  },
  {
    id: "3",
    name: "Clé développement",
    prefix: "pk_test_",
    key: "pk_test_xxxxxxxxxxxxx",
    type: "public",
    permissions: ["read:articles"],
    lastUsed: "2026-03-25T14:20:00Z",
    createdAt: "2025-06-20T10:00:00Z",
    status: "active",
  },
  {
    id: "4",
    name: "Ancienne clé",
    prefix: "sk_live_",
    key: "sk_live_oldxxxxxxxx",
    type: "secret",
    permissions: ["read:all"],
    createdAt: "2024-06-01T10:00:00Z",
    expiresAt: "2025-06-01T10:00:00Z",
    status: "expired",
  },
  {
    id: "5",
    name: "Clé temporaire",
    prefix: "pk_test_",
    key: "pk_test_tempxxxxxx",
    type: "public",
    permissions: ["read:articles"],
    createdAt: "2026-03-01T10:00:00Z",
    expiresAt: "2026-04-01T10:00:00Z",
    status: "active",
  },
];

const availablePermissions = [
  { value: "read:articles", label: "Lire les articles" },
  { value: "write:articles", label: "Écrire les articles" },
  { value: "read:categories", label: "Lire les catégories" },
  { value: "admin:users", label: "Administrer les utilisateurs" },
  { value: "read:all", label: "Tout lire" },
  { value: "admin:all", label: "Tout administrer" },
];

const keyTypeConfig = {
  public: { label: "Publique", variant: "default" as const, color: "text-blue-500" },
  secret: { label: "Secrète", variant: "destructive" as const, color: "text-red-500" },
};

const keyStatusConfig = {
  active: { label: "Active", color: "text-green-500", icon: CheckCircle },
  expired: { label: "Expirée", color: "text-yellow-500", icon: Clock },
  revoked: { label: "Révoquée", color: "text-gray-500", icon: XCircle },
};

export default function ApiKeysPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [revealedKeys, setRevealedKeys] = useState<Set<string>>(new Set());
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [keyToDelete, setKeyToDelete] = useState<ApiKey | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [keyToEdit, setKeyToEdit] = useState<ApiKey | null>(null);
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyType, setNewKeyType] = useState<"public" | "secret">("public");
  const [newKeyPermissions, setNewKeyPermissions] = useState<string[]>([]);
  const [newKeyExpires, setNewKeyExpires] = useState("");
  const [apiKeys, setApiKeys] = useState<ApiKey[]>(mockApiKeys);

  const filteredKeys = apiKeys.filter((key) => {
    const matchesSearch = key.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const stats = {
    total: apiKeys.length,
    active: apiKeys.filter((k) => k.status === "active").length,
    expired: apiKeys.filter((k) => k.status === "expired").length,
    public: apiKeys.filter((k) => k.type === "public").length,
    secret: apiKeys.filter((k) => k.type === "secret").length,
  };

  const toggleSelectAll = () => {
    if (selectedKeys.length === filteredKeys.length) {
      setSelectedKeys([]);
    } else {
      setSelectedKeys(filteredKeys.map((k) => k.id));
    }
  };

  const toggleSelectKey = (id: string) => {
    setSelectedKeys((prev) => (prev.includes(id) ? prev.filter((k) => k !== id) : [...prev, id]));
  };

  const toggleRevealKey = (id: string) => {
    setRevealedKeys((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleDelete = (key: ApiKey) => {
    setKeyToDelete(key);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (keyToDelete) {
      setApiKeys((prev) => prev.filter((k) => k.id !== keyToDelete.id));
      setSelectedKeys((prev) => prev.filter((id) => id !== keyToDelete.id));
    }
    setDeleteDialogOpen(false);
    setKeyToDelete(null);
  };

  const handleEdit = (key: ApiKey) => {
    setKeyToEdit(key);
    setEditDialogOpen(true);
  };

  const saveEdit = () => {
    if (keyToEdit) {
      setApiKeys((prev) =>
        prev.map((k) => (k.id === keyToEdit.id ? { ...k, name: keyToEdit.name } : k))
      );
    }
    setEditDialogOpen(false);
    setKeyToEdit(null);
  };

  const handleRevoke = (key: ApiKey) => {
    setApiKeys((prev) =>
      prev.map((k) => (k.id === key.id ? { ...k, status: "revoked" as const } : k))
    );
  };

  const handleCreate = () => {
    if (!newKeyName.trim()) return;

    const typePrefix = newKeyType === "public" ? "pk_" : "sk_";
    const envPrefix = "test_";
    const randomPart = Math.random().toString(36).substring(2, 15);
    const fullKey = `${typePrefix}${envPrefix}${randomPart}`;

    const newKey: ApiKey = {
      id: Date.now().toString(),
      name: newKeyName,
      prefix: `${typePrefix}${envPrefix}`,
      key: fullKey,
      type: newKeyType,
      permissions: newKeyPermissions,
      createdAt: new Date().toISOString(),
      expiresAt: newKeyExpires || undefined,
      status: "active",
    };

    setApiKeys((prev) => [newKey, ...prev]);
    setCreateDialogOpen(false);
    setNewKeyName("");
    setNewKeyType("public");
    setNewKeyPermissions([]);
    setNewKeyExpires("");
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "-";
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
    return `${day} ${month} ${year}`;
  };

  const formatDateTime = (dateString?: string) => {
    if (!dateString) return "-";
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

  const togglePermission = (permission: string) => {
    setNewKeyPermissions((prev) =>
      prev.includes(permission) ? prev.filter((p) => p !== permission) : [...prev, permission]
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Clés API</h1>
          <p className="text-sm text-muted-foreground">
            Gérez les clés API pour accéder à votre plateforme
          </p>
        </div>
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle clé
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Key className="h-5 w-5 text-primary" />
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
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Actives</p>
              <p className="text-2xl font-bold">{stats.active}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10">
              <Clock className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expirées</p>
              <p className="text-2xl font-bold">{stats.expired}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <EyeIcon className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Publiques</p>
              <p className="text-2xl font-bold">{stats.public}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Sécurité des clés API</p>
            <p className="text-sm text-muted-foreground mt-1">
              Ne partagez jamais vos clés secrètes. Utilisez les variables d&apos;environnement pour
              les stocker en production. Les clés sont uniquement affichées lors de leur création.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher une clé..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedKeys.length > 0 && (
        <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-3">
          <span className="text-sm text-muted-foreground">
            {selectedKeys.length} clé{selectedKeys.length > 1 ? "s" : ""} sélectionné
            {selectedKeys.length > 1 ? "s" : ""}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Régénérer
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 className="mr-2 h-4 w-4" />
              Révoquer
            </Button>
          </div>
        </div>
      )}

      {/* API Keys Table */}
      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedKeys.length === filteredKeys.length && filteredKeys.length > 0}
                  onCheckedChange={toggleSelectAll}
                  aria-label="Sélectionner tout"
                />
              </TableHead>
              <TableHead>Nom</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Clé</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead>Dernière utilisation</TableHead>
              <TableHead>Créée le</TableHead>
              <TableHead>Expiration</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredKeys.length === 0 ? (
              <TableRow>
                <TableCell colSpan={10} className="h-24 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Key className="h-8 w-8 text-muted-foreground" />
                    <p className="text-muted-foreground">Aucune clé API trouvée</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredKeys.map((apiKey) => {
                const StatusIcon = keyStatusConfig[apiKey.status].icon;
                return (
                  <TableRow key={apiKey.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedKeys.includes(apiKey.id)}
                        onCheckedChange={() => toggleSelectKey(apiKey.id)}
                        aria-label={`Sélectionner ${apiKey.name}`}
                      />
                    </TableCell>
                    <TableCell>
                      <p className="font-medium">{apiKey.name}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant={keyTypeConfig[apiKey.type].variant}>
                        {keyTypeConfig[apiKey.type].label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-muted px-2 py-1 font-mono text-sm">
                          {revealedKeys.has(apiKey.id)
                            ? apiKey.key
                            : `${apiKey.prefix}••••••••••••`}
                        </code>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => toggleRevealKey(apiKey.id)}
                        >
                          {revealedKeys.has(apiKey.id) ? (
                            <EyeIcon className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => copyToClipboard(apiKey.key)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {apiKey.permissions.slice(0, 2).map((perm) => (
                          <Badge key={perm} variant="outline" className="text-xs">
                            {perm}
                          </Badge>
                        ))}
                        {apiKey.permissions.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{apiKey.permissions.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDateTime(apiKey.lastUsed)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(apiKey.createdAt)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(apiKey.expiresAt)}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`flex items-center gap-1.5 ${keyStatusConfig[apiKey.status].color}`}
                      >
                        <StatusIcon className="h-4 w-4" />
                        {keyStatusConfig[apiKey.status].label}
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => copyToClipboard(apiKey.key)}>
                            <Copy className="mr-2 h-4 w-4" />
                            Copier la clé
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEdit(apiKey)}>
                            <Pencil className="mr-2 h-4 w-4" />
                            Modifier le nom
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {apiKey.status === "active" && (
                            <DropdownMenuItem onClick={() => handleRevoke(apiKey)}>
                              <XCircle className="mr-2 h-4 w-4" />
                              Révoquer
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() => handleDelete(apiKey)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Create API Key Dialog */}
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nouvelle clé API</DialogTitle>
            <DialogDescription>
              Créez une nouvelle clé API pour accéder à votre plateforme
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="keyName">Nom de la clé</Label>
              <Input
                id="keyName"
                placeholder="Ma clé API"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="keyType">Type de clé</Label>
              <Select
                value={newKeyType}
                onValueChange={(v) => setNewKeyType(v as "public" | "secret")}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Publique (pk_)</SelectItem>
                  <SelectItem value="secret">Secrète (sk_)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Permissions</Label>
              <div className="grid grid-cols-2 gap-2">
                {availablePermissions.map((perm) => (
                  <div key={perm.value} className="flex items-center space-x-2">
                    <Switch
                      checked={newKeyPermissions.includes(perm.value)}
                      onCheckedChange={() => togglePermission(perm.value)}
                      id={perm.value}
                    />
                    <Label htmlFor={perm.value} className="text-sm cursor-pointer">
                      {perm.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="keyExpires">Expiration (optionnel)</Label>
              <Input
                id="keyExpires"
                type="date"
                value={newKeyExpires}
                onChange={(e) => setNewKeyExpires(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Laissez vide pour une clé sans expiration
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleCreate} disabled={!newKeyName.trim()}>
              <Key className="mr-2 h-4 w-4" />
              Créer la clé
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit API Key Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier la clé API</DialogTitle>
            <DialogDescription>Modifiez le nom de votre clé API</DialogDescription>
          </DialogHeader>
          {keyToEdit && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="editKeyName">Nom de la clé</Label>
                <Input
                  id="editKeyName"
                  value={keyToEdit.name}
                  onChange={(e) => setKeyToEdit({ ...keyToEdit, name: e.target.value })}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={saveEdit}>Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer la clé API</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer la clé &quot;{keyToDelete?.name}&quot; ? Cette
              action est irréversible et toute application utilisant cette clé perdra son accès.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
