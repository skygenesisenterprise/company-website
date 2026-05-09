"use client";

import * as React from "react";
import { Eye, Mail, MoreHorizontal, Pencil, RotateCcw, UserMinus, Users } from "lucide-react";

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

type NewsletterStatus = "subscribed" | "pending" | "unsubscribed" | "error";

interface NewsletterSubscriber {
  id: string;
  email: string;
  name?: string;
  status: NewsletterStatus;
  source: string;
  locale: string;
  subscribedAt: string;
  confirmedAt?: string;
}

const subscribersSeed: NewsletterSubscriber[] = [
  {
    id: "news-demo-1",
    email: "newsletter-alpha@example.invalid",
    name: "Contact fictif Alpha",
    status: "subscribed",
    source: "Formulaire footer",
    locale: "fr-FR",
    subscribedAt: "2026-04-12",
    confirmedAt: "2026-04-12",
  },
  {
    id: "news-demo-2",
    email: "newsletter-beta@example.invalid",
    status: "pending",
    source: "Page développeurs",
    locale: "fr-FR",
    subscribedAt: "2026-05-08",
  },
  {
    id: "news-demo-3",
    email: "newsletter-gamma@example.invalid",
    name: "Contact fictif Gamma",
    status: "unsubscribed",
    source: "Blog",
    locale: "en-US",
    subscribedAt: "2026-02-16",
    confirmedAt: "2026-02-16",
  },
  {
    id: "news-demo-4",
    email: "newsletter-delta@example.invalid",
    name: "Contact fictif Delta",
    status: "error",
    source: "Page produit",
    locale: "fr-FR",
    subscribedAt: "2026-03-02",
    confirmedAt: "2026-03-02",
  },
];

const statusLabels: Record<NewsletterStatus, string> = {
  subscribed: "Inscrit",
  pending: "En attente",
  unsubscribed: "Désinscrit",
  error: "Erreur",
};

const statusOptions = [
  { value: "all", label: "Tous les statuts" },
  { value: "subscribed", label: "Inscrit" },
  { value: "pending", label: "En attente" },
  { value: "unsubscribed", label: "Désinscrit" },
  { value: "error", label: "Erreur" },
];

function formatDate(value?: string) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export default function NewsletterPage() {
  const [subscribers, setSubscribers] = React.useState(subscribersSeed);
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState("all");
  const [confirmAction, setConfirmAction] = React.useState<{
    subscriber: NewsletterSubscriber;
    nextStatus: NewsletterStatus;
  } | null>(null);

  const filteredSubscribers = subscribers.filter((subscriber) => {
    const haystack = `${subscriber.email} ${subscriber.name ?? ""} ${subscriber.source}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (status === "all" || subscriber.status === status);
  });

  const metrics = {
    subscribed: subscribers.filter((subscriber) => subscriber.status === "subscribed").length,
    pending: subscribers.filter((subscriber) => subscriber.status === "pending").length,
    unsubscribed: subscribers.filter((subscriber) => subscriber.status === "unsubscribed").length,
    error: subscribers.filter((subscriber) => subscriber.status === "error").length,
  };

  const applyStatus = () => {
    if (!confirmAction) return;
    setSubscribers((current) =>
      current.map((subscriber) =>
        subscriber.id === confirmAction.subscriber.id
          ? {
              ...subscriber,
              status: confirmAction.nextStatus,
              confirmedAt:
                confirmAction.nextStatus === "subscribed"
                  ? new Date().toISOString().slice(0, 10)
                  : subscriber.confirmedAt,
            }
          : subscriber
      )
    );
    setConfirmAction(null);
  };

  const renderActions = (subscriber: NewsletterSubscriber) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Actions newsletter</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Eye className="mr-2 h-4 w-4" />
          Consulter le détail
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Pencil className="mr-2 h-4 w-4" />
          Modifier les préférences
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {subscriber.status === "unsubscribed" ? (
          <DropdownMenuItem
            onClick={() => setConfirmAction({ subscriber, nextStatus: "subscribed" })}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Réinscrire
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onClick={() => setConfirmAction({ subscriber, nextStatus: "unsubscribed" })}
          >
            <UserMinus className="mr-2 h-4 w-4" />
            Désinscrire
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <DashboardPageHeader
        title="Newsletter"
        description="Suivez les inscriptions et préférences newsletter."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard label="Inscrits" value={metrics.subscribed} helper="Consentement actif" icon={Users} />
        <DashboardMetricCard label="En attente" value={metrics.pending} helper="Confirmation requise" icon={Mail} />
        <DashboardMetricCard label="Désinscrits" value={metrics.unsubscribed} helper="Préférence respectée" icon={UserMinus} />
        <DashboardMetricCard label="Erreurs" value={metrics.error} helper="Adresse à vérifier" icon={RotateCcw} />
      </div>

      <DashboardToolbar>
        <DashboardSearch value={query} onChange={setQuery} placeholder="Rechercher par email, nom ou source..." />
        <DashboardFilter label="Statut" value={status} onChange={setStatus} options={statusOptions} />
      </DashboardToolbar>

      {filteredSubscribers.length === 0 ? (
        <ResponsiveTableShell>
          <DashboardEmptyState
            icon={Mail}
            title="Aucun inscrit newsletter"
            description="Aucun inscrit newsletter pour le moment. Les nouvelles inscriptions apparaîtront ici."
          />
        </ResponsiveTableShell>
      ) : (
        <>
          <MobileResourceList>
            {filteredSubscribers.map((subscriber) => (
              <MobileResourceCard key={subscriber.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <DashboardStatusBadge status={subscriber.status} label={statusLabels[subscriber.status]} />
                    <p className="mt-3 truncate font-medium">{subscriber.name ?? "Sans nom renseigné"}</p>
                    <MutedMeta>{subscriber.email}</MutedMeta>
                  </div>
                  {renderActions(subscriber)}
                </div>
                <div className="mt-4 grid gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Source</span>
                    <span className="truncate text-right">{subscriber.source}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Locale</span>
                    <span>{subscriber.locale}</span>
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
                    <TableHead>Email</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Locale</TableHead>
                    <TableHead>Inscription</TableHead>
                    <TableHead>Confirmation</TableHead>
                    <TableHead className="w-12" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubscribers.map((subscriber) => (
                    <TableRow key={subscriber.id} className="hover:bg-muted/40">
                      <TableCell className="max-w-60">
                        <TruncatedText className="font-medium">{subscriber.email}</TruncatedText>
                      </TableCell>
                      <TableCell className="max-w-45">
                        <TruncatedText>{subscriber.name ?? "Non renseigné"}</TruncatedText>
                      </TableCell>
                      <TableCell>
                        <DashboardStatusBadge status={subscriber.status} label={statusLabels[subscriber.status]} />
                      </TableCell>
                      <TableCell className="max-w-45">
                        <TruncatedText>{subscriber.source}</TruncatedText>
                      </TableCell>
                      <TableCell>{subscriber.locale}</TableCell>
                      <TableCell className="text-muted-foreground">{formatDate(subscriber.subscribedAt)}</TableCell>
                      <TableCell className="text-muted-foreground">{formatDate(subscriber.confirmedAt)}</TableCell>
                      <TableCell>{renderActions(subscriber)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ResponsiveTableShell>
          </DesktopTable>
        </>
      )}

      <p className="text-xs text-muted-foreground">
        Les préférences newsletter affichées ici reflètent uniquement les états disponibles dans le site. Ne réinscrivez un contact que si une base légitime de consentement existe.
      </p>

      <DashboardConfirmDialog
        open={Boolean(confirmAction)}
        onOpenChange={(open) => !open && setConfirmAction(null)}
        title={confirmAction?.nextStatus === "subscribed" ? "Réinscrire ce contact ?" : "Désinscrire ce contact ?"}
        description={
          confirmAction?.nextStatus === "subscribed"
            ? "Cette action remettra le contact en statut inscrit. Vérifiez que le consentement est valide avant de continuer."
            : "Cette action marquera le contact comme désinscrit et préservera sa préférence de retrait."
        }
        confirmLabel={confirmAction?.nextStatus === "subscribed" ? "Réinscrire" : "Désinscrire"}
        destructive={confirmAction?.nextStatus !== "subscribed"}
        onConfirm={applyStatus}
      />
    </div>
  );
}
