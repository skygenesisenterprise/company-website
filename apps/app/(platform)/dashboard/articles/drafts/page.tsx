/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/articles/drafts
 * Layer: Dashboard Page
 * Purpose: Track and continue draft SGE editorial publications.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */

import Link from "next/link";
import { FileText, Plus, Send, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { editorialArticles, formatDate, getChecklistCompletion } from "../_data";

export default function DraftArticlesPage() {
  const drafts = editorialArticles.filter((article) => article.status === "draft" || article.status === "writing");
  const inactiveDrafts = drafts.filter((article) => new Date(article.updatedAt) < new Date("2026-05-02"));
  const incompleteDrafts = drafts.filter((article) => getChecklistCompletion(article) < 80);
  const readyDrafts = drafts.filter((article) => getChecklistCompletion(article) >= 80);
  const summary = [
    { label: "Brouillons actifs", value: drafts.length },
    { label: "Sans activité", value: inactiveDrafts.length },
    { label: "Incomplets", value: incompleteDrafts.length },
    { label: "Prêts à relire", value: readyDrafts.length },
  ];

  return (
    <div className="space-y-6 bg-background p-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Brouillons</h1>
          <p className="text-sm text-muted-foreground">
            Retrouvez les publications commencées mais non encore soumises.
          </p>
        </div>
        <Button className="rounded-2xl" asChild>
          <Link href="/dashboard/articles/new">
            <Plus className="size-4" />
            Nouvel article
          </Link>
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-4">
        {summary.map((item) => (
          <Card key={item.label} className="rounded-2xl border-border/50 bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{item.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      {drafts.length > 0 ? (
        <section className="grid gap-4">
          {drafts.map((article) => (
            <Card key={article.id} className="rounded-2xl border-border/50 bg-card">
              <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <FileText className="size-4 text-muted-foreground" />
                    <h2 className="font-medium">{article.title}</h2>
                    <Badge variant="outline" className="rounded-2xl">{article.type}</Badge>
                    <Badge variant="secondary" className="rounded-2xl">{article.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {article.team} · Dernière modification {formatDate(article.updatedAt)}
                  </p>
                  <p className="text-sm">Complétion checklist : {getChecklistCompletion(article)}%</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="rounded-2xl" asChild>
                    <Link href={`/dashboard/articles/${article.id}/edit`}>Continuer</Link>
                  </Button>
                  <Button variant="outline" className="rounded-2xl">
                    <Send className="size-4" />
                    Envoyer en révision
                  </Button>
                  <Button variant="outline" className="rounded-2xl text-destructive">
                    <Trash2 className="size-4" />
                    Supprimer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      ) : (
        <Card className="rounded-2xl border-border/50 bg-card">
          <CardContent className="flex min-h-56 flex-col items-center justify-center gap-3 text-center">
            <FileText className="size-10 text-muted-foreground" />
            <p className="font-medium">Aucun brouillon</p>
            <p className="text-sm text-muted-foreground">Les publications commencées apparaîtront ici.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
