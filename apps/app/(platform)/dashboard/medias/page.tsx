"use client";

import * as React from "react";
import Image from "next/image";
import { Copy, Eye, File, FileText, Film, ImageIcon, MoreHorizontal, Pencil, Plus, Trash2, Upload } from "lucide-react";

import {
  DashboardCardGrid,
  DashboardEmptyState,
  DashboardErrorState,
  DashboardLoadingRows,
  DashboardPageHeader,
  DashboardResourceCard,
  DashboardSearch,
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
import { mediaApi } from "@/lib/api";
import type { Media } from "@/lib/api/types";

type MediaKind = "all" | "image" | "video" | "document" | "other";

interface MediaDisplay {
  id: string;
  name: string;
  type: Exclude<MediaKind, "all">;
  url: string;
  size: string;
  dimensions?: string;
  uploadedAt?: string;
  author?: string;
}

const fallbackMedias: MediaDisplay[] = [
  {
    id: "hero-cloud",
    name: "sge-cloud-platform.jpg",
    type: "image",
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    size: "1.9 MB",
    dimensions: "1600x1067",
    uploadedAt: "2026-04-20",
    author: "Équipe marque",
  },
  {
    id: "trust-center",
    name: "trust-center-brief.pdf",
    type: "document",
    url: "/documents/trust-center-brief.pdf",
    size: "640 KB",
    uploadedAt: "2026-04-14",
    author: "Communication",
  },
  {
    id: "founders-talk",
    name: "founders-talk.mp4",
    type: "video",
    url: "/media/founders-talk.mp4",
    size: "42.1 MB",
    uploadedAt: "2026-04-03",
    author: "Studio",
  },
];

const typeLabels: Record<Exclude<MediaKind, "all">, string> = {
  image: "Image",
  video: "Vidéo",
  document: "Document",
  other: "Autre",
};

const typeIcons = {
  image: ImageIcon,
  video: Film,
  document: FileText,
  other: File,
};

function mediaKind(mimeType?: string): MediaDisplay["type"] {
  if (!mimeType) return "other";
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType.startsWith("video/")) return "video";
  if (mimeType.includes("pdf") || mimeType.includes("document") || mimeType.includes("text")) return "document";
  return "other";
}

function formatFileSize(bytes?: number): string {
  if (!bytes) return "Non renseigné";
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

function formatDate(value?: string) {
  if (!value) return "Non renseigné";
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

function toMediaDisplay(media: Media): MediaDisplay {
  return {
    id: media.id,
    name: media.originalName || media.filename,
    type: mediaKind(media.mimeType),
    url: media.url,
    size: formatFileSize(media.size),
    dimensions: media.width && media.height ? `${media.width}x${media.height}` : undefined,
    uploadedAt: media.createdAt,
  };
}

function MediaPreview({ media }: { media: MediaDisplay }) {
  if (media.type === "image" && media.url) {
    return (
      <div className="relative size-12 overflow-hidden rounded-md border border-border/70 bg-muted">
        <Image src={media.url} alt={media.name} fill className="object-cover" sizes="48px" />
      </div>
    );
  }

  const Icon = typeIcons[media.type];
  return (
    <div className="flex size-12 items-center justify-center rounded-md border border-border/70 bg-muted/30 text-muted-foreground">
      <Icon className="size-5" />
    </div>
  );
}

export default function MediasPage() {
  const [medias, setMedias] = React.useState<MediaDisplay[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedType, setSelectedType] = React.useState<MediaKind>("all");
  const [uploadDialogOpen, setUploadDialogOpen] = React.useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [mediaToDelete, setMediaToDelete] = React.useState<MediaDisplay | null>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [isUploading, setIsUploading] = React.useState(false);

  const loadMedias = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await mediaApi.list();
      setMedias(response.success && response.data ? response.data.map(toMediaDisplay) : []);
    } catch {
      setMedias(fallbackMedias);
      setError("La médiathèque API ne répond pas. Les fichiers de démonstration restent visibles.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    void loadMedias();
  }, [loadMedias]);

  const filteredMedias = medias.filter((media) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = media.name.toLowerCase().includes(query);
    const matchesType = selectedType === "all" || media.type === selectedType;
    return matchesSearch && matchesType;
  });

  const uploadMedia = async () => {
    if (!selectedFile) return;
    setIsUploading(true);
    try {
      const response = await mediaApi.upload(selectedFile);
      if (response.success && response.data) {
        setMedias((current) => [toMediaDisplay(response.data as Media), ...current]);
      }
    } catch {
      setMedias((current) => [
        {
          id: `local-${Date.now()}`,
          name: selectedFile.name,
          type: mediaKind(selectedFile.type),
          url: URL.createObjectURL(selectedFile),
          size: formatFileSize(selectedFile.size),
          uploadedAt: new Date().toISOString(),
        },
        ...current,
      ]);
    } finally {
      setIsUploading(false);
      setSelectedFile(null);
      setUploadDialogOpen(false);
    }
  };

  const deleteMedia = async () => {
    if (!mediaToDelete) return;
    try {
      await mediaApi.delete(mediaToDelete.id);
    } catch {
      // Local fallback keeps the management flow usable without the API.
    }
    setMedias((current) => current.filter((media) => media.id !== mediaToDelete.id));
    setMediaToDelete(null);
    setDeleteDialogOpen(false);
  };

  const copyUrl = async (url: string) => {
    if (!url || typeof navigator === "undefined") return;
    await navigator.clipboard?.writeText(url);
  };

  const primaryAction = (
    <Button onClick={() => setUploadDialogOpen(true)}>
      <Plus className="size-4" />
      Importer un média
    </Button>
  );

  return (
    <div className="space-y-6 bg-background p-4 sm:p-6">
      <DashboardPageHeader
        title="Médias"
        description="Centralisez les fichiers utilisés par les pages publiques."
        action={primaryAction}
      />

      {error ? <DashboardErrorState message={error} onRetry={loadMedias} /> : null}

      <DashboardToolbar>
        <DashboardSearch value={searchQuery} onChange={setSearchQuery} placeholder="Rechercher un fichier" />
        <Select value={selectedType} onValueChange={(value) => setSelectedType(value as MediaKind)}>
          <SelectTrigger className="w-full md:w-47.5">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            <SelectItem value="image">Images</SelectItem>
            <SelectItem value="document">Documents</SelectItem>
            <SelectItem value="video">Vidéos</SelectItem>
            <SelectItem value="other">Autres</SelectItem>
          </SelectContent>
        </Select>
      </DashboardToolbar>

      {isLoading ? (
        <DashboardLoadingRows />
      ) : filteredMedias.length === 0 ? (
        <DashboardEmptyState
          icon={Upload}
          title={searchQuery || selectedType !== "all" ? "Aucun média ne correspond aux filtres" : "Aucun média importé"}
          description={
            searchQuery || selectedType !== "all"
              ? "Ajustez la recherche ou le type de fichier pour retrouver un média."
              : "Importez les visuels et documents nécessaires aux pages du site officiel."
          }
          action={!searchQuery && selectedType === "all" ? primaryAction : undefined}
        />
      ) : (
        <>
          <DashboardTableFrame>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead>Aperçu</TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Taille</TableHead>
                  <TableHead>Dimensions</TableHead>
                  <TableHead>Auteur</TableHead>
                  <TableHead>Date d’ajout</TableHead>
                  <TableHead className="w-12"><span className="sr-only">Actions</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMedias.map((media) => {
                  const Icon = typeIcons[media.type];
                  return (
                    <TableRow key={media.id}>
                      <TableCell><MediaPreview media={media} /></TableCell>
                      <TableCell className="max-w-xs truncate font-medium">{media.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          <Icon className="size-3" />
                          {typeLabels[media.type]}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{media.size}</TableCell>
                      <TableCell className="text-muted-foreground">{media.dimensions || "-"}</TableCell>
                      <TableCell className="text-muted-foreground">{media.author || "-"}</TableCell>
                      <TableCell className="text-muted-foreground">{formatDate(media.uploadedAt)}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="size-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="size-4" />
                              Voir les détails
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => void copyUrl(media.url)}>
                              <Copy className="size-4" />
                              Copier l’URL
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Pencil className="size-4" />
                              Renommer
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-destructive focus:text-destructive"
                              onClick={() => {
                                setMediaToDelete(media);
                                setDeleteDialogOpen(true);
                              }}
                            >
                              <Trash2 className="size-4" />
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </DashboardTableFrame>

          <DashboardCardGrid>
            {filteredMedias.map((media) => (
              <DashboardResourceCard key={media.id}>
                <div className="flex gap-3">
                  <MediaPreview media={media} />
                  <div className="min-w-0 flex-1">
                    <h2 className="truncate font-medium">{media.name}</h2>
                    <p className="text-sm text-muted-foreground">{typeLabels[media.type]} · {media.size}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{formatDate(media.uploadedAt)}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => void copyUrl(media.url)}>Copier l’URL</Button>
                  <Button variant="outline" size="sm" onClick={() => {
                    setMediaToDelete(media);
                    setDeleteDialogOpen(true);
                  }}>Supprimer</Button>
                </div>
              </DashboardResourceCard>
            ))}
          </DashboardCardGrid>
        </>
      )}

      <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Importer un média</DialogTitle>
            <DialogDescription>Ajoutez une image, un document ou une vidéo à la médiathèque.</DialogDescription>
          </DialogHeader>
          <label className="flex min-h-40 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border/80 bg-muted/10 p-6 text-center">
            <Upload className="size-7 text-muted-foreground" />
            <span className="text-sm font-medium">{selectedFile ? selectedFile.name : "Choisir un fichier"}</span>
            <span className="text-xs text-muted-foreground">Le fichier sera ajouté à la médiathèque du site.</span>
            <input type="file" className="sr-only" onChange={(event) => setSelectedFile(event.target.files?.[0] ?? null)} />
          </label>
          <DialogFooter>
            <Button variant="outline" onClick={() => setUploadDialogOpen(false)} disabled={isUploading}>Annuler</Button>
            <Button onClick={uploadMedia} disabled={!selectedFile || isUploading}>{isUploading ? "Import..." : "Importer"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer le média</DialogTitle>
            <DialogDescription>Le fichier “{mediaToDelete?.name}” ne sera plus disponible dans la médiathèque.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>Annuler</Button>
            <Button variant="destructive" onClick={deleteMedia}>Supprimer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
