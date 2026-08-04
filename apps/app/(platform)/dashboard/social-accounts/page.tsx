"use client";

import { useState } from "react";
import {
  Globe,
  Search,
  MoreHorizontal,
  Plus,
  Pencil,
  Trash2,
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertCircle,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
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

interface SocialAccount {
  id: string;
  platform: "twitter" | "facebook" | "instagram" | "linkedin";
  accountName: string;
  accountId: string;
  connected: boolean;
  lastSync?: string;
  followers: number;
  following: number;
  posts: number;
  autoPost: boolean;
  accessToken?: string;
  refreshToken?: string;
  tokenExpiresAt?: string;
}

const mockAccounts: SocialAccount[] = [
  {
    id: "1",
    platform: "twitter",
    accountName: "@EtheriaTimes",
    accountId: "etheriatimes",
    connected: true,
    lastSync: "2026-03-27T14:00:00Z",
    followers: 45230,
    following: 1250,
    posts: 8920,
    autoPost: true,
  },
  {
    id: "2",
    platform: "facebook",
    accountName: "Etheria Times",
    accountId: "etheriatimes",
    connected: true,
    lastSync: "2026-03-27T13:30:00Z",
    followers: 125400,
    following: 340,
    posts: 4520,
    autoPost: true,
  },
  {
    id: "3",
    platform: "instagram",
    accountName: "@etheriatimes",
    accountId: "etheriatimes",
    connected: true,
    lastSync: "2026-03-27T12:00:00Z",
    followers: 89200,
    following: 890,
    posts: 2340,
    autoPost: false,
  },
  {
    id: "4",
    platform: "linkedin",
    accountName: "Etheria Times",
    accountId: "etheria-times",
    connected: true,
    lastSync: "2026-03-27T11:00:00Z",
    followers: 15600,
    following: 560,
    posts: 890,
    autoPost: true,
  },
  {
    id: "5",
    platform: "twitter",
    accountName: "@EtheriaTech",
    accountId: "etheriatech",
    connected: false,
    followers: 0,
    following: 0,
    posts: 0,
    autoPost: false,
  },
  {
    id: "6",
    platform: "facebook",
    accountName: "Etheria Tech",
    accountId: "etheriatech",
    connected: false,
    followers: 0,
    following: 0,
    posts: 0,
    autoPost: false,
  },
];

const platformConfig = {
  twitter: {
    label: "Twitter/X",
    color: "bg-black text-white",
    bgColor: "bg-black/5",
    textColor: "text-black",
  },
  facebook: {
    label: "Facebook",
    color: "bg-blue-600 text-white",
    bgColor: "bg-blue-600/10",
    textColor: "text-blue-600",
  },
  instagram: {
    label: "Instagram",
    color: "bg-gradient-to-r from-purple-600 to-pink-500 text-white",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-600",
  },
  linkedin: {
    label: "LinkedIn",
    color: "bg-blue-700 text-white",
    bgColor: "bg-blue-700/10",
    textColor: "text-blue-700",
  },
};

export default function SocialAccountsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [platformFilter, setPlatformFilter] = useState<string>("all");
  const [connectionFilter, setConnectionFilter] = useState<string>("all");
  const [accounts, setAccounts] = useState<SocialAccount[]>(mockAccounts);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [accountToEdit, setAccountToEdit] = useState<SocialAccount | null>(null);
  const [accountToDelete, setAccountToDelete] = useState<SocialAccount | null>(null);
  const [newAccountPlatform, setNewAccountPlatform] = useState<string>("twitter");
  const [newAccountName, setNewAccountName] = useState("");

  const filteredAccounts = accounts.filter((account) => {
    const matchesSearch =
      account.accountName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      account.accountId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = platformFilter === "all" || account.platform === platformFilter;
    const matchesConnection =
      connectionFilter === "all" ||
      (connectionFilter === "connected" && account.connected) ||
      (connectionFilter === "disconnected" && !account.connected);
    return matchesSearch && matchesPlatform && matchesConnection;
  });

  const stats = {
    total: accounts.length,
    connected: accounts.filter((a) => a.connected).length,
    disconnected: accounts.filter((a) => !a.connected).length,
    totalFollowers: accounts.filter((a) => a.connected).reduce((acc, a) => acc + a.followers, 0),
    autoPost: accounts.filter((a) => a.connected && a.autoPost).length,
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
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

  const handleConnect = (account: SocialAccount) => {
    setAccounts((prev) =>
      prev.map((a) =>
        a.id === account.id
          ? {
              ...a,
              connected: true,
              lastSync: new Date().toISOString(),
              followers: Math.floor(Math.random() * 50000) + 10000,
              following: Math.floor(Math.random() * 1000) + 100,
              posts: Math.floor(Math.random() * 5000) + 500,
            }
          : a
      )
    );
  };

  const handleDisconnect = (account: SocialAccount) => {
    setAccounts((prev) =>
      prev.map((a) =>
        a.id === account.id
          ? {
              ...a,
              connected: false,
              lastSync: undefined,
              followers: 0,
              following: 0,
              posts: 0,
            }
          : a
      )
    );
  };

  const handleToggleAutoPost = (account: SocialAccount) => {
    setAccounts((prev) =>
      prev.map((a) => (a.id === account.id ? { ...a, autoPost: !a.autoPost } : a))
    );
  };

  const handleDelete = (account: SocialAccount) => {
    setAccountToDelete(account);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (accountToDelete) {
      setAccounts((prev) => prev.filter((a) => a.id !== accountToDelete.id));
    }
    setDeleteDialogOpen(false);
    setAccountToDelete(null);
  };

  const handleCreate = () => {
    if (!newAccountName.trim()) return;

    const newAccount: SocialAccount = {
      id: Date.now().toString(),
      platform: newAccountPlatform as SocialAccount["platform"],
      accountName: newAccountName,
      accountId: newAccountName.toLowerCase().replace(/[^a-z0-9]/g, ""),
      connected: false,
      followers: 0,
      following: 0,
      posts: 0,
      autoPost: false,
    };

    setAccounts((prev) => [newAccount, ...prev]);
    setCreateDialogOpen(false);
    setNewAccountName("");
    setNewAccountPlatform("twitter");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Comptes sociaux</h1>
          <p className="text-sm text-muted-foreground">Gérez vos comptes sur les réseaux sociaux</p>
        </div>
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un compte
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Globe className="h-5 w-5 text-primary" />
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
              <p className="text-sm text-muted-foreground">Connectés</p>
              <p className="text-2xl font-bold">{stats.connected}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10">
              <XCircle className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Déconnectés</p>
              <p className="text-2xl font-bold">{stats.disconnected}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <MessageCircle className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Abonnés total</p>
              <p className="text-2xl font-bold">{formatNumber(stats.totalFollowers)}</p>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <CardTitle className="text-base">Comptes connectés</CardTitle>
          </div>
          <CardDescription>Gérez la connexion et les paramètres de vos comptes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher un compte..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={platformFilter} onValueChange={setPlatformFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Plateforme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes</SelectItem>
                <SelectItem value="twitter">Twitter/X</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
              </SelectContent>
            </Select>
            <Select value={connectionFilter} onValueChange={setConnectionFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="connected">Connectés</SelectItem>
                <SelectItem value="disconnected">Déconnectés</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plateforme</TableHead>
                  <TableHead>Compte</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Abonnés</TableHead>
                  <TableHead>Publications</TableHead>
                  <TableHead>Dernière sync</TableHead>
                  <TableHead>Auto-post</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAccounts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Globe className="h-8 w-8 text-muted-foreground" />
                        <p className="text-muted-foreground">Aucun compte trouvé</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredAccounts.map((account) => {
                    const config = platformConfig[account.platform];
                    return (
                      <TableRow key={account.id}>
                        <TableCell>
                          <div
                            className={`flex items-center gap-2 ${config.bgColor} rounded-lg p-2 w-fit`}
                          >
                            <Globe className={`h-5 w-5 ${config.textColor}`} />
                            <span className={`text-sm font-medium ${config.textColor}`}>
                              {config.label}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{account.accountName}</p>
                            <p className="text-xs text-muted-foreground">@{account.accountId}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          {account.connected ? (
                            <Badge className="bg-green-100 text-green-800">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Connecté
                            </Badge>
                          ) : (
                            <Badge className="bg-gray-100 text-gray-800">
                              <XCircle className="h-3 w-3 mr-1" />
                              Déconnecté
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <span className="font-medium">
                            {account.connected ? formatNumber(account.followers) : "-"}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="font-medium">
                            {account.connected ? formatNumber(account.posts) : "-"}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-muted-foreground">
                            {account.connected ? formatDateTime(account.lastSync) : "-"}
                          </span>
                        </TableCell>
                        <TableCell>
                          {account.connected ? (
                            <Switch
                              checked={account.autoPost}
                              onCheckedChange={() => handleToggleAutoPost(account)}
                            />
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
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
                              {account.connected ? (
                                <>
                                  <DropdownMenuItem onClick={() => handleDisconnect(account)}>
                                    <XCircle className="mr-2 h-4 w-4" />
                                    Déconnecter
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <RefreshCw className="mr-2 h-4 w-4" />
                                    Synchroniser
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Voir sur {config.label}
                                  </DropdownMenuItem>
                                </>
                              ) : (
                                <DropdownMenuItem onClick={() => handleConnect(account)}>
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Connecter
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                className="text-destructive focus:text-destructive"
                                onClick={() => handleDelete(account)}
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

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{filteredAccounts.length} comptes</span>
          </div>
        </CardContent>
      </Card>

      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ajouter un compte</DialogTitle>
            <DialogDescription>Connectez un nouveau compte de réseau social</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Plateforme</Label>
              <Select value={newAccountPlatform} onValueChange={setNewAccountPlatform}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="twitter">Twitter/X</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountName">Nom du compte</Label>
              <Input
                id="accountName"
                placeholder="@moncompte"
                value={newAccountName}
                onChange={(e) => setNewAccountName(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Entrez le nom d&apos;utilisateur ou le nom de la page
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleCreate} disabled={!newAccountName.trim()}>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer le compte</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer le compte &quot;{accountToDelete?.accountName}
              &quot; ? Cette action est irréversible.
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
