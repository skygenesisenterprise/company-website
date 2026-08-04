"use client";

import * as React from "react";
import { Copy, ExternalLink, Link2, MoreHorizontal, Pencil, Plus, Power, Trash2 } from "lucide-react";

import {
  DashboardCardGrid,
  DashboardCodeBlock,
  DashboardEmptyState,
  DashboardErrorState,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { footerLinksApi, type FooterLink } from "@/lib/api/client";
import { locales } from "@/lib/locale";

type LinkStatus = "active" | "disabled" | "expired" | "draft";

interface LinkerItem {
  id: string;
  title: string;
  slug: string;
  targetUrl: string;
  status: LinkStatus;
  group: string;
  clicks?: number;
  updatedAt: string;
  source?: FooterLink;
}

const groups = [
  { value: "dossiers", label: "Dossiers" },
  { value: "services", label: "Services" },
  { value: "legal", label: "Légal" },
  { value: "social", label: "Réseaux sociaux" },
  { value: "resources", label: "Ressources" },
];

const fallbackLinks: LinkerItem[] = [
  { id: "trust-center", title: "Centre de confiance", slug: "/go/trust-center", targetUrl: "/trust-center", status: "active", group: "resources", clicks: 128, updatedAt: "2026-05-08T11:20:00Z" },
  { id: "partners", title: "Programme partenaires", slug: "/go/partners", targetUrl: "/partners", status: "draft", group: "services", clicks: 0, updatedAt: "2026-05-06T10:00:00Z" },
  { id: "legacy-docs", title: "Ancienne documentation", slug: "/go/docs-old", targetUrl: "https://docs-archive.skygenesisenterprise.com", status: "disabled", group: "resources", clicks: 42, updatedAt: "2026-04-12T09:00:00Z" },
];

const statusLabels: Record<LinkStatus, string> = {
  active: "Actif",
  disabled: "Désactivé",
  expired: "Expiré",
  draft: "Brouillon",
};

const statusTones: Record<LinkStatus, "green" | "amber" | "red" | "gray"> = {
  active: "green",
  disabled: "gray",
  expired: "amber",
  draft: "gray",
};

function footerLinkToLinkerItem(link: FooterLink): LinkerItem {
  return {
    id: link.id,
    title: link.name,
    slug: `/${link.locale}/${link.category}/${link.name}`,
    targetUrl: link.href,
    status: link.isVisible ? "active" : "disabled",
    group: link.category,
    clicks: undefined,
    updatedAt: new Date().toISOString(),
    source: link,
  };
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

export default function LinkerPage() {
  const [links, setLinks] = React.useState<LinkerItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [selectedLocale, setSelectedLocale] = React.useState("fr");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState<LinkStatus | "all">("all");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [editingLink, setEditingLink] = React.useState<LinkerItem | null>(null);
  const [confirmLink, setConfirmLink] = React.useState<LinkerItem | null>(null);
  const [formData, setFormData] = React.useState({ group: "resources", title: "", slug: "", targetUrl: "", active: true });

  const loadLinks = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await footerLinksApi.list({ locale: selectedLocale });
      setLinks(response.success && response.data.length > 0 ? response.data.map(footerLinkToLinkerItem) : fallbackLinks);
    } catch {
      setLinks(fallbackLinks);
      setError("Les liens API ne sont pas accessibles. Linker affiche des données internes de démonstration.");
    } finally {
      setIsLoading(false);
    }
  }, [selectedLocale]);

  React.useEffect(() => {
    void loadLinks();
  }, [loadLinks]);

  const filteredLinks = links.filter((link) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      link.title.toLowerCase().includes(query) ||
      link.slug.toLowerCase().includes(query) ||
      link.targetUrl.toLowerCase().includes(query) ||
      link.group.toLowerCase().includes(query);
    const matchesStatus = selectedStatus === "all" || link.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const openDialog = (link?: LinkerItem) => {
    setEditingLink(link ?? null);
    setFormData({
      group: link?.group ?? "resources",
      title: link?.title ?? "",
      slug: link?.slug ?? "",
      targetUrl: link?.targetUrl ?? "",
      active: link ? link.status === "active" : true,
    });
    setDialogOpen(true);
  };

  const saveLink = async () => {
    const baseLink = editingLink?.source;
    const payload = {
      category: formData.group,
      title: groups.find((group) => group.value === formData.group)?.label || formData.group,
      name: formData.title,
      href: formData.targetUrl,
      locale: selectedLocale,
      position: baseLink?.position ?? links.length,
      isVisible: formData.active,
    };

    try {
      if (baseLink) {
        await footerLinksApi.update(baseLink.id, payload);
      } else {
        await footerLinksApi.create(payload);
      }
      await loadLinks();
    } catch {
      const localItem: LinkerItem = {
        id: editingLink?.id ?? `local-${Date.now()}`,
        title: formData.title,
        slug: formData.slug || `/go/${formData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        targetUrl: formData.targetUrl,
        status: formData.active ? "active" : "disabled",
        group: formData.group,
        clicks: editingLink?.clicks ?? 0,
        updatedAt: new Date().toISOString(),
      };
      setLinks((current) => editingLink ? current.map((link) => link.id === editingLink.id ? localItem : link) : [localItem, ...current]);
    }

    setDialogOpen(false);
  };

  const deleteLink = async () => {
    if (!confirmLink) return;
    try {
      if (confirmLink.source) await footerLinksApi.delete(confirmLink.source.id);
    } catch {
      // Keep the local list responsive when the API is unavailable.
    }
    setLinks((current) => current.filter((link) => link.id !== confirmLink.id));
    setConfirmLink(null);
  };

  const copyLink = async (slug: string) => {
    await navigator.clipboard?.writeText(slug);
  };

  const primaryAction = (
    <Button onClick={() => openDialog()}>
      <Plus className="size-4" />
      Créer un lien
    </Button>
  );

  return (
    <div className="space-y-6 bg-background p-4 sm:p-6">
      <DashboardPageHeader
        title="Linker"
        description="Centralisez les liens officiels, redirections et ressources connectées."
        action={primaryAction}
      />

      {error ? <DashboardErrorState message={error} onRetry={loadLinks} /> : null}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardMetricCard label="Liens" value={links.length} detail="Ressources suivies" icon={Link2} />
        <DashboardMetricCard label="Actifs" value={links.filter((link) => link.status === "active").length} detail="Disponibles" />
        <DashboardMetricCard label="Brouillons" value={links.filter((link) => link.status === "draft").length} detail="À préparer" />
        <DashboardMetricCard label="Clics connus" value={links.reduce((sum, link) => sum + (link.clicks ?? 0), 0)} detail="Donnée interne si disponible" />
      </div>

      <DashboardToolbar>
        <div className="grid gap-3 md:grid-cols-[220px_minmax(0,1fr)]">
          <Select value={selectedLocale} onValueChange={setSelectedLocale}>
            <SelectTrigger className="w-full"><SelectValue placeholder="Locale" /></SelectTrigger>
            <SelectContent>
              {locales.map((locale) => <SelectItem key={locale.code} value={locale.code}>{locale.flag} {locale.label}</SelectItem>)}
            </SelectContent>
          </Select>
          <DashboardSearch value={searchQuery} onChange={setSearchQuery} placeholder="Rechercher par titre, slug, URL ou groupe" />
        </div>
        <Select value={selectedStatus} onValueChange={(value) => setSelectedStatus(value as LinkStatus | "all")}>
          <SelectTrigger className="w-full md:w-[180px]"><SelectValue placeholder="Statut" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="active">Actifs</SelectItem>
            <SelectItem value="disabled">Désactivés</SelectItem>
            <SelectItem value="expired">Expirés</SelectItem>
            <SelectItem value="draft">Brouillons</SelectItem>
          </SelectContent>
        </Select>
      </DashboardToolbar>

      {isLoading ? null : filteredLinks.length === 0 ? (
        <DashboardEmptyState icon={Link2} title="Aucun lien créé" description="Créez un premier lien officiel pour centraliser une redirection ou une ressource connectée." action={primaryAction} />
      ) : (
        <>
          <DashboardTableFrame>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead>Titre</TableHead>
                  <TableHead>Chemin court</TableHead>
                  <TableHead>URL cible</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Groupe</TableHead>
                  <TableHead>Clics</TableHead>
                  <TableHead>Modification</TableHead>
                  <TableHead className="w-12"><span className="sr-only">Actions</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLinks.map((link) => (
                  <TableRow key={link.id}>
                    <TableCell className="font-medium">{link.title}</TableCell>
                    <TableCell><DashboardCodeBlock>{link.slug}</DashboardCodeBlock></TableCell>
                    <TableCell><DashboardCodeBlock>{link.targetUrl}</DashboardCodeBlock></TableCell>
                    <TableCell><DashboardStatusBadge tone={statusTones[link.status]}>{statusLabels[link.status]}</DashboardStatusBadge></TableCell>
                    <TableCell className="text-muted-foreground">{groups.find((group) => group.value === link.group)?.label || link.group}</TableCell>
                    <TableCell>{link.clicks ?? "-"}</TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(link.updatedAt)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="size-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => void copyLink(link.slug)}><Copy className="size-4" />Copier le lien</DropdownMenuItem>
                          <DropdownMenuItem><ExternalLink className="size-4" />Détails</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => openDialog(link)}><Pencil className="size-4" />Modifier</DropdownMenuItem>
                          <DropdownMenuItem><Power className="size-4" />Activer / désactiver</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => setConfirmLink(link)} className="text-destructive focus:text-destructive"><Trash2 className="size-4" />Supprimer</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DashboardTableFrame>

          <DashboardCardGrid>
            {filteredLinks.map((link) => (
              <DashboardResourceCard key={link.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0"><h2 className="truncate font-medium">{link.title}</h2><p className="text-sm text-muted-foreground">{groups.find((group) => group.value === link.group)?.label || link.group}</p></div>
                  <DashboardStatusBadge tone={statusTones[link.status]}>{statusLabels[link.status]}</DashboardStatusBadge>
                </div>
                <div className="mt-3 space-y-2"><DashboardCodeBlock>{link.slug}</DashboardCodeBlock><DashboardCodeBlock>{link.targetUrl}</DashboardCodeBlock></div>
              </DashboardResourceCard>
            ))}
          </DashboardCardGrid>
        </>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingLink ? "Modifier le lien" : "Créer un lien"}</DialogTitle>
            <DialogDescription>Définissez un lien officiel, une redirection ou une ressource connectée.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="link-title">Titre</Label>
              <Input id="link-title" value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="link-slug">Chemin court</Label>
              <Input id="link-slug" value={formData.slug} onChange={(event) => setFormData({ ...formData, slug: event.target.value })} placeholder="/go/ressource" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="link-url">URL cible</Label>
              <Input id="link-url" value={formData.targetUrl} onChange={(event) => setFormData({ ...formData, targetUrl: event.target.value })} placeholder="https://..." />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Select value={formData.group} onValueChange={(value) => setFormData({ ...formData, group: value })}>
                <SelectTrigger><SelectValue placeholder="Groupe" /></SelectTrigger>
                <SelectContent>{groups.map((group) => <SelectItem key={group.value} value={group.value}>{group.label}</SelectItem>)}</SelectContent>
              </Select>
              <label className="flex items-center justify-between rounded-md border border-border/70 px-3 py-2 text-sm">
                Actif
                <Switch checked={formData.active} onCheckedChange={(active) => setFormData({ ...formData, active })} />
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Annuler</Button>
            <Button onClick={saveLink} disabled={!formData.title.trim() || !formData.targetUrl.trim()}>{editingLink ? "Enregistrer" : "Créer"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={Boolean(confirmLink)} onOpenChange={(open) => !open && setConfirmLink(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer le lien</DialogTitle>
            <DialogDescription>Le lien “{confirmLink?.title}” ne sera plus disponible dans Linker.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmLink(null)}>Annuler</Button>
            <Button variant="destructive" onClick={deleteLink}>Supprimer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
