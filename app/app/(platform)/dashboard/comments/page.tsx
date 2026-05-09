"use client";

import * as React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Eye,
  Flag,
  MessageSquare,
  MoreHorizontal,
  ShieldAlert,
  Trash2,
  XCircle,
} from "lucide-react";

import {
  DashboardConfirmDialog,
  DashboardEmptyState,
  DashboardFilter,
  DashboardMetricCard,
  DashboardPageHeader,
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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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

type CommentStatus = "pending" | "approved" | "rejected" | "reported" | "spam";

interface ModerationComment {
  id: string;
  excerpt: string;
  author: string;
  email: string;
  pageTitle: string;
  pageHref: string;
  status: CommentStatus;
  publishedAt: string;
  reports: number;
  lastModeration?: string;
}

const commentsSeed: ModerationComment[] = [
  {
    id: "com-demo-1",
    excerpt: "La page de présentation est claire, mais le lien vers la documentation semble manquer.",
    author: "Contact fictif Alpha",
    email: "alpha@example.invalid",
    pageTitle: "Platform overview",
    pageHref: "/fr/platform",
    status: "pending",
    publishedAt: "2026-05-08T11:20:00",
    reports: 0,
  },
  {
    id: "com-demo-2",
    excerpt: "Signalement utilisateur: ce message répète le même lien promotionnel plusieurs fois.",
    author: "Compte fictif Beta",
    email: "beta@example.invalid",
    pageTitle: "Community",
    pageHref: "/fr/community",
    status: "reported",
    publishedAt: "2026-05-07T16:45:00",
    reports: 3,
    lastModeration: "Signalé automatiquement",
  },
  {
    id: "com-demo-3",
    excerpt: "Merci pour la mise à jour sur les produits, les informations sont utiles.",
    author: "Lecteur fictif Gamma",
    email: "gamma@example.invalid",
    pageTitle: "Sky Genesis Mail",
    pageHref: "/fr/products/mail",
    status: "approved",
    publishedAt: "2026-05-05T09:05:00",
    reports: 0,
    lastModeration: "Approuvé par modération",
  },
  {
    id: "com-demo-4",
    excerpt: "Message refusé car hors sujet et trop répétitif pour la page concernée.",
    author: "Visiteur fictif Delta",
    email: "delta@example.invalid",
    pageTitle: "Contact",
    pageHref: "/fr/company/contact",
    status: "rejected",
    publishedAt: "2026-05-03T18:10:00",
    reports: 1,
    lastModeration: "Rejeté",
  },
  {
    id: "com-demo-5",
    excerpt: "Contenu promotionnel non sollicité détecté dans le commentaire.",
    author: "Source fictive Epsilon",
    email: "epsilon@example.invalid",
    pageTitle: "Developers API",
    pageHref: "/fr/developers/api",
    status: "spam",
    publishedAt: "2026-05-02T07:30:00",
    reports: 5,
    lastModeration: "Marqué comme spam",
  },
];

const statusLabels: Record<CommentStatus, string> = {
  pending: "En attente",
  approved: "Approuvé",
  rejected: "Rejeté",
  reported: "Signalé",
  spam: "Spam",
};

const statusOptions = [
  { value: "all", label: "Tous les statuts" },
  { value: "pending", label: "En attente" },
  { value: "approved", label: "Approuvé" },
  { value: "rejected", label: "Rejeté" },
  { value: "reported", label: "Signalé" },
  { value: "spam", label: "Spam" },
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export default function CommentsPage() {
  const [comments, setComments] = React.useState(commentsSeed);
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState("all");
  const [confirmTarget, setConfirmTarget] = React.useState<ModerationComment | null>(null);

  const filteredComments = comments.filter((comment) => {
    const haystack = `${comment.author} ${comment.email} ${comment.excerpt} ${comment.pageTitle}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (status === "all" || comment.status === status);
  });

  const setCommentStatus = (id: string, nextStatus: CommentStatus) => {
    setComments((current) =>
      current.map((comment) =>
        comment.id === id
          ? { ...comment, status: nextStatus, lastModeration: statusLabels[nextStatus] }
          : comment
      )
    );
  };

  const metrics = {
    pending: comments.filter((comment) => comment.status === "pending").length,
    reported: comments.filter((comment) => comment.status === "reported").length,
    approved: comments.filter((comment) => comment.status === "approved").length,
    spam: comments.filter((comment) => comment.status === "spam").length,
  };

  const renderActions = (comment: ModerationComment) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Actions du commentaire</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={comment.pageHref}>
            <Eye className="mr-2 h-4 w-4" />
            Ouvrir la page liée
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCommentStatus(comment.id, "approved")}>
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Approuver
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCommentStatus(comment.id, "rejected")}>
          <XCircle className="mr-2 h-4 w-4" />
          Rejeter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCommentStatus(comment.id, "spam")}>
          <ShieldAlert className="mr-2 h-4 w-4" />
          Marquer comme spam
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-destructive focus:text-destructive"
          onClick={() => setConfirmTarget(comment)}
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
        title="Commentaires"
        description="Modérez les commentaires publiés sur les contenus du site."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard label="En attente" value={metrics.pending} helper="À traiter" icon={MessageSquare} />
        <DashboardMetricCard label="Signalés" value={metrics.reported} helper="Priorité modération" icon={Flag} />
        <DashboardMetricCard label="Approuvés" value={metrics.approved} helper="Visibles sur le site" icon={CheckCircle2} />
        <DashboardMetricCard label="Spam" value={metrics.spam} helper="Commentaires isolés" icon={ShieldAlert} />
      </div>

      <DashboardToolbar>
        <DashboardSearch
          value={query}
          onChange={setQuery}
          placeholder="Rechercher par auteur, email, contenu ou page..."
        />
        <DashboardFilter label="Statut" value={status} onChange={setStatus} options={statusOptions} />
      </DashboardToolbar>

      {filteredComments.length === 0 ? (
        <ResponsiveTableShell>
          <DashboardEmptyState
            icon={MessageSquare}
            title="Aucun commentaire à traiter"
            description="Aucun commentaire à traiter pour le moment. Les nouveaux commentaires apparaîtront ici lorsqu'ils seront publiés ou signalés."
          />
        </ResponsiveTableShell>
      ) : (
        <>
          <MobileResourceList>
            {filteredComments.map((comment) => (
              <MobileResourceCard key={comment.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <DashboardStatusBadge status={comment.status} label={statusLabels[comment.status]} />
                    <p className="mt-3 line-clamp-3 text-sm text-foreground">{comment.excerpt}</p>
                    <p className="mt-3 truncate text-sm font-medium">{comment.author}</p>
                    <MutedMeta>{comment.email}</MutedMeta>
                  </div>
                  {renderActions(comment)}
                </div>
                <div className="mt-4 grid gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Page</span>
                    <span className="truncate text-right">{comment.pageTitle}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Signalements</span>
                    <span>{comment.reports}</span>
                  </div>
                </div>
              </MobileResourceCard>
            ))}
          </MobileResourceList>

          <DesktopTable>
            <ResponsiveTableShell>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Commentaire</TableHead>
                    <TableHead>Auteur</TableHead>
                    <TableHead>Page</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Signalements</TableHead>
                    <TableHead>Publication</TableHead>
                    <TableHead>Dernière action</TableHead>
                    <TableHead className="w-12" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredComments.map((comment) => (
                    <TableRow key={comment.id} className="hover:bg-muted/40">
                      <TableCell className="max-w-[320px]">
                        <TruncatedText>{comment.excerpt}</TruncatedText>
                      </TableCell>
                      <TableCell className="max-w-55">
                        <TruncatedText className="font-medium">{comment.author}</TruncatedText>
                        <MutedMeta>{comment.email}</MutedMeta>
                      </TableCell>
                      <TableCell className="max-w-45">
                        <Link href={comment.pageHref} className="block truncate text-sm hover:underline">
                          {comment.pageTitle}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <DashboardStatusBadge status={comment.status} label={statusLabels[comment.status]} />
                      </TableCell>
                      <TableCell>{comment.reports}</TableCell>
                      <TableCell className="text-muted-foreground">{formatDate(comment.publishedAt)}</TableCell>
                      <TableCell className="max-w-45 text-muted-foreground">
                        <TruncatedText>{comment.lastModeration ?? "Aucune"}</TruncatedText>
                      </TableCell>
                      <TableCell>{renderActions(comment)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ResponsiveTableShell>
          </DesktopTable>
        </>
      )}

      <DashboardConfirmDialog
        open={Boolean(confirmTarget)}
        onOpenChange={(open) => !open && setConfirmTarget(null)}
        title="Supprimer ce commentaire ?"
        description="Cette suppression retirera le commentaire de la file de modération. Elle doit être utilisée uniquement si le commentaire ne doit plus être conservé."
        confirmLabel="Supprimer"
        onConfirm={() => {
          if (confirmTarget) {
            setComments((current) => current.filter((comment) => comment.id !== confirmTarget.id));
          }
          setConfirmTarget(null);
        }}
      />
    </div>
  );
}
