"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Plus,
  Search,
  MoreHorizontal,
  Pencil,
  Trash2,
  Eye,
  Download,
  Copy,
  ImageIcon,
  Film,
  FileText,
  File,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { mediaApi } from "@/lib/api";
import type { Media as MediaType } from "@/lib/api/types";

interface MediaDisplay {
  id: string;
  name: string;
  type: "image" | "video" | "document";
  url: string;
  size: string;
  dimensions?: string;
  uploadedAt: string;
  usedIn: number;
}

const mockMedias: MediaDisplay[] = [
  {
    id: "1",
    name: "reforme-economique.jpg",
    type: "image",
    url: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
    size: "2.4 MB",
    dimensions: "1920x1080",
    uploadedAt: "2026-03-25",
    usedIn: 3,
  },
  {
    id: "2",
    name: "victoire-sport.jpg",
    type: "image",
    url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop",
    size: "1.8 MB",
    dimensions: "1920x1080",
    uploadedAt: "2026-03-24",
    usedIn: 2,
  },
  {
    id: "3",
    name: "negociations-geneva.jpg",
    type: "image",
    url: "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=400&h=300&fit=crop",
    size: "3.1 MB",
    dimensions: "1920x1080",
    uploadedAt: "2026-03-23",
    usedIn: 1,
  },
  {
    id: "4",
    name: "startup-energie.jpg",
    type: "image",
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
    size: "2.2 MB",
    dimensions: "1920x1080",
    uploadedAt: "2026-03-22",
    usedIn: 1,
  },
  {
    id: "5",
    name: "vague-chaleur.jpg",
    type: "image",
    url: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=400&h=300&fit=crop",
    size: "1.9 MB",
    dimensions: "1920x1080",
    uploadedAt: "2026-03-21",
    usedIn: 2,
  },
  {
    id: "6",
    name: "festival-cinema.jpg",
    type: "image",
    url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
    size: "2.7 MB",
    dimensions: "1920x1080",
    uploadedAt: "2026-03-20",
    usedIn: 1,
  },
  {
    id: "7",
    name: "musee-art-moderne.jpg",
    type: "image",
    url: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=400&h=300&fit=crop",
    size: "3.4 MB",
    dimensions: "1920x1080",
    uploadedAt: "2026-03-19",
    usedIn: 1,
  },
  {
    id: "8",
    name: "interview-banquier.jpg",
    type: "image",
    url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    size: "2.1 MB",
    dimensions: "1920x1080",
    uploadedAt: "2026-03-18",
    usedIn: 0,
  },
];

const typeConfig = {
  image: { icon: ImageIcon, label: "Image", variant: "default" as const },
  video: { icon: Film, label: "Vidéo", variant: "secondary" as const },
  document: { icon: FileText, label: "Document", variant: "outline" as const },
};

export default function MediasPage() {
  const [medias, setMedias] = useState<MediaDisplay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMedias, setSelectedMedias] = useState<string[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [mediaToDelete, setMediaToDelete] = useState<MediaDisplay | null>(null);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    loadMedias();
  }, []);

  async function loadMedias() {
    setIsLoading(true);
    try {
      const response = await mediaApi.list();
      if (response.success && response.data) {
        const mapped: MediaDisplay[] = response.data.map((m) => {
          const mimeType = m.mimeType || "";
          let type: "image" | "video" | "document" = "document";
          if (mimeType.startsWith("image/")) type = "image";
          else if (mimeType.startsWith("video/")) type = "video";

          return {
            id: m.id,
            name: m.originalName || m.filename,
            type,
            url: m.url || "",
            size: formatFileSize(m.size),
            dimensions: m.width && m.height ? `${m.width}x${m.height}` : undefined,
            uploadedAt: m.createdAt || new Date().toISOString(),
            usedIn: 0,
          };
        });
        setMedias(mapped);
      }
    } catch (error) {
      console.error("Failed to load medias:", error);
      setMedias(mockMedias);
    } finally {
      setIsLoading(false);
    }
  }

  function formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }

  async function handleDeleteMedia() {
    if (!mediaToDelete) return;
    try {
      await mediaApi.delete(mediaToDelete.id);
      setMedias((prev) => prev.filter((m) => m.id !== mediaToDelete.id));
      setSelectedMedias((prev) => prev.filter((id) => id !== mediaToDelete.id));
    } catch (error) {
      console.error("Failed to delete media:", error);
    }
    setDeleteDialogOpen(false);
    setMediaToDelete(null);
  }

  const filteredMedias = medias.filter((media) =>
    media.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSelectAll = () => {
    if (selectedMedias.length === filteredMedias.length) {
      setSelectedMedias([]);
    } else {
      setSelectedMedias(filteredMedias.map((m) => m.id));
    }
  };

  const toggleSelectMedia = (id: string) => {
    setSelectedMedias((prev) => (prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]));
  };

  const handleDelete = (media: MediaDisplay) => {
    setMediaToDelete(media);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (mediaToDelete) {
      setMedias((prev) => prev.filter((m) => m.id !== mediaToDelete.id));
      setSelectedMedias((prev) => prev.filter((id) => id !== mediaToDelete.id));
    }
    setDeleteDialogOpen(false);
    setMediaToDelete(null);
  };

  const handleUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadDialogOpen(false);
          setUploadProgress(0);
          const newMedia: MediaDisplay = {
            id: Date.now().toString(),
            name: "nouveau-media.jpg",
            type: "image",
            url: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
            size: "2.5 MB",
            dimensions: "1920x1080",
            uploadedAt: new Date().toISOString().split("T")[0],
            usedIn: 0,
          };
          setMedias((prev) => [newMedia, ...prev]);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Médias</h1>
          <p className="text-sm text-muted-foreground">Gérez les médias de votre site</p>
        </div>
        <Button onClick={() => setUploadDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un média
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher un média..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedMedias.length > 0 && (
        <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-3">
          <span className="text-sm text-muted-foreground">
            {selectedMedias.length} média{selectedMedias.length > 1 ? "s" : ""} sélectionné
            {selectedMedias.length > 1 ? "s" : ""}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer
            </Button>
          </div>
        </div>
      )}

      {/* Medias Table */}
      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={
                    selectedMedias.length === filteredMedias.length && filteredMedias.length > 0
                  }
                  onCheckedChange={toggleSelectAll}
                  aria-label="Sélectionner tout"
                />
              </TableHead>
              <TableHead>Aperçu</TableHead>
              <TableHead>Nom</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Taille</TableHead>
              <TableHead>Dimensions</TableHead>
              <TableHead>Utilisé dans</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMedias.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="h-24 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                    <p className="text-muted-foreground">Aucun média trouvé</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredMedias.map((media) => {
                const TypeIcon = typeConfig[media.type].icon;
                return (
                  <TableRow key={media.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedMedias.includes(media.id)}
                        onCheckedChange={() => toggleSelectMedia(media.id)}
                        aria-label={`Sélectionner ${media.name}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="relative h-12 w-16 overflow-hidden rounded">
                        <Image src={media.url} alt={media.name} fill className="object-cover" />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{media.name}</TableCell>
                    <TableCell>
                      <Badge variant={typeConfig[media.type].variant} className="gap-1">
                        <TypeIcon className="h-3 w-3" />
                        {typeConfig[media.type].label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{media.size}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {media.dimensions || "-"}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {media.usedIn} article{media.usedIn !== 1 ? "s" : ""}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(media.uploadedAt)}
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
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            Aperçu
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Télécharger
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Copier l&apos;URL
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil className="mr-2 h-4 w-4" />
                            Renommer
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() => handleDelete(media)}
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Supprimer le média</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer &quot;{mediaToDelete?.name}&quot; ? Cette action
              est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Upload Dialog */}
      <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ajouter un média</DialogTitle>
            <DialogDescription>
              Téléchargez un fichier ou glissez-déposez-le dans la zone ci-dessous
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div
              className={`relative flex flex-col items-center justify-center h-40 rounded-lg border-2 border-dashed transition-colors cursor-pointer ${
                dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary"
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragActive(false);
              }}
            >
              <ImageIcon className="h-10 w-10 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                Glissez-déposez un fichier ici ou cliquez pour sélectionner
              </p>
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
            {isUploading && (
              <div className="space-y-2">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-200"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Téléchargement en cours... {uploadProgress}%
                </p>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setUploadDialogOpen(false)}
              disabled={isUploading}
            >
              Annuler
            </Button>
            <Button onClick={handleUpload} disabled={isUploading}>
              {isUploading ? "Téléchargement..." : "Télécharger"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
