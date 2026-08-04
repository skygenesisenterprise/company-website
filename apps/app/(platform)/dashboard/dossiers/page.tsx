"use client";

import * as React from "react";
import Link from "next/link";
import { Eye, FolderOpen, MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react";

import {
  DashboardCardGrid,
  DashboardEmptyState,
  DashboardPageHeader,
  DashboardResourceCard,
  DashboardSearch,
  DashboardTableFrame,
  DashboardToolbar,
} from "@/components/dashboard/cms-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type DossierStatus = "published" | "draft" | "archived";

interface EditorialDossier {
  id: string;
  title: string;
  slug: string;
  status: DossierStatus;
  description: string;
  contentCount: number;
  updatedAt: string;
}

const statusLabels: Record<DossierStatus, string> = {
  published: "Publié",
  draft: "Brouillon",
  archived: "Archivé",
};

const statusClasses: Record<DossierStatus, string> = {
  published: "border-emerald-200 bg-emerald-50 text-emerald-700",
  draft: "border-slate-200 bg-slate-50 text-slate-700",
  archived: "border-zinc-200 bg-zinc-50 text-zinc-600",
};

const dossiers: EditorialDossier[] = [
  {
    id: "1",
    title: "Infrastructure cloud souveraine",
    slug: "infrastructure-cloud-souveraine",
    status: "published",
    description: "Pages et contenus dédiés à l’approche cloud, réseau et hébergement.",
    contentCount: 9,
    updatedAt: "2026-04-22",
  },
  {
    id: "2",
    title: "Confiance et sécurité",
    slug: "confiance-securite",
    status: "published",
    description: "Dossier de référence pour conformité, sécurité, disponibilité et transparence.",
    contentCount: 7,
    updatedAt: "2026-04-17",
  },
  {
    id: "3",
    title: "Programme partenaires",
    slug: "programme-partenaires",
    status: "draft",
    description: "Ensemble éditorial en préparation pour les pages partenaires.",
    contentCount: 4,
    updatedAt: "2026-04-11",
  },
  {
    id: "4",
    title: "Archives publiques",
    slug: "archives-publiques",
    status: "archived",
    description: "Anciens contenus conservés pour historique et consultation interne.",
    contentCount: 13,
    updatedAt: "2026-03-28",
  },
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

export default function DossiersPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState<DossierStatus | "all">("all");

  const filteredDossiers = dossiers.filter((dossier) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      dossier.title.toLowerCase().includes(query) ||
      dossier.slug.toLowerCase().includes(query) ||
      dossier.description.toLowerCase().includes(query);
    const matchesStatus = selectedStatus === "all" || dossier.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const primaryAction = (
    <Button>
      <Plus className="size-4" />
      Créer un dossier
    </Button>
  );

  return (
    <div className="space-y-6 bg-background p-4 sm:p-6">
      <DashboardPageHeader
        title="Dossiers"
        description="Structurez les ensembles éditoriaux du site officiel."
        action={primaryAction}
      />

      <DashboardToolbar>
        <DashboardSearch value={searchQuery} onChange={setSearchQuery} placeholder="Rechercher par titre, slug ou description" />
        <Select value={selectedStatus} onValueChange={(value) => setSelectedStatus(value as DossierStatus | "all")}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="published">Publiés</SelectItem>
            <SelectItem value="draft">Brouillons</SelectItem>
            <SelectItem value="archived">Archivés</SelectItem>
          </SelectContent>
        </Select>
      </DashboardToolbar>

      {filteredDossiers.length === 0 ? (
        <DashboardEmptyState
          icon={FolderOpen}
          title={searchQuery || selectedStatus !== "all" ? "Aucun dossier ne correspond aux filtres" : "Aucun dossier créé"}
          description={
            searchQuery || selectedStatus !== "all"
              ? "Ajustez les critères pour retrouver un ensemble éditorial."
              : "Créez un premier dossier pour organiser les pages et contenus liés."
          }
          action={!searchQuery && selectedStatus === "all" ? primaryAction : undefined}
        />
      ) : (
        <>
          <DashboardTableFrame>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead>Dossier</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-center">Contenus</TableHead>
                  <TableHead>Dernière modification</TableHead>
                  <TableHead className="w-12"><span className="sr-only">Actions</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDossiers.map((dossier) => (
                  <TableRow key={dossier.id}>
                    <TableCell>
                      <div className="max-w-md space-y-1">
                        <div className="font-medium">{dossier.title}</div>
                        <div className="line-clamp-1 text-xs text-muted-foreground">{dossier.description}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">{dossier.slug}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={statusClasses[dossier.status]}>{statusLabels[dossier.status]}</Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline">{dossier.contentCount}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(dossier.updatedAt)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="size-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/dossiers/${dossier.slug}`}>
                              <Eye className="size-4" />
                              Ouvrir
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/dossiers/${dossier.slug}`}>
                              <Pencil className="size-4" />
                              Modifier
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive focus:text-destructive">
                            <Trash2 className="size-4" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DashboardTableFrame>

          <DashboardCardGrid>
            {filteredDossiers.map((dossier) => (
              <DashboardResourceCard key={dossier.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="truncate font-medium">{dossier.title}</h2>
                    <p className="font-mono text-xs text-muted-foreground">{dossier.slug}</p>
                  </div>
                  <Badge variant="outline" className={statusClasses[dossier.status]}>{statusLabels[dossier.status]}</Badge>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{dossier.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{dossier.contentCount} contenu(s)</span>
                  <span>{formatDate(dossier.updatedAt)}</span>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <Link href={`/dashboard/dossiers/${dossier.slug}`}>Ouvrir le dossier</Link>
                </Button>
              </DashboardResourceCard>
            ))}
          </DashboardCardGrid>
        </>
      )}
    </div>
  );
}
