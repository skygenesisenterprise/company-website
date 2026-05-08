/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/articles/[id]
 * Layer: Dashboard Page
 * Purpose: Preview and inspect an official SGE editorial publication.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */

import Link from "next/link";
import { Archive, CheckCircle2, Copy, ExternalLink, Pencil } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import { formatDate, formatDateTime, getArticleById, statusLabels } from "../_data";

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = getArticleById(id);
  const timeline = [
    { label: "Créé", value: "22 avr. 2026" },
    { label: "Modifié", value: formatDate(article.updatedAt) },
    { label: "Envoyé en révision", value: article.submittedAt ? formatDate(article.submittedAt) : "Non soumis" },
    { label: article.status === "published" ? "Publié" : "Planifié", value: formatDateTime(article.publishedAt ?? article.scheduledAt) },
  ];
  const checklist = [
    ["Titre clair", article.checklist.titleClear],
    ["Excerpt présent", article.checklist.excerptReady],
    ["Catégorie définie", article.checklist.categorySet],
    ["SEO rempli", article.checklist.seoReady],
    ["Relecture effectuée", article.checklist.reviewed],
  ] as const;

  return (
    <div className="space-y-6 bg-background p-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">{article.title}</h1>
            <Badge variant="outline" className="rounded-2xl">
              {statusLabels[article.status]}
            </Badge>
          </div>
          <p className="max-w-3xl text-sm text-muted-foreground">{article.excerpt}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="rounded-2xl border-border/50" asChild>
            <Link href={`/dashboard/articles/${article.id}/edit`}>
              <Pencil className="size-4" />
              Modifier
            </Link>
          </Button>
          <Button variant="outline" className="rounded-2xl border-border/50">
            <ExternalLink className="size-4" />
            Voir public
          </Button>
          <Button variant="outline" className="rounded-2xl border-border/50">
            <Copy className="size-4" />
            Dupliquer
          </Button>
          <Button variant="outline" className="rounded-2xl border-border/50">
            <Archive className="size-4" />
            Archiver
          </Button>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <main className="space-y-6">
          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-2xl">{article.category}</Badge>
                <Badge variant="outline" className="rounded-2xl">{article.type}</Badge>
              </div>
              <div className="space-y-3 rounded-2xl border border-border/50 bg-muted/20 p-5">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                <p className="leading-7">{article.content}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Editorial timeline</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border/50 bg-muted/20 p-4">
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </main>

        <aside className="space-y-6">
          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Metadata</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <Meta label="Équipe" value={article.team} />
              <Meta label="Statut" value={statusLabels[article.status]} />
              <Meta label="Catégorie" value={article.category} />
              <Meta label="Type" value={article.type} />
              <Meta label="Slug" value={article.slug} />
              <Meta label="Dernière mise à jour" value={formatDate(article.updatedAt)} />
              <Meta label="Date de publication" value={formatDateTime(article.publishedAt ?? article.scheduledAt)} />
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Performance</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <Metric label="Vues" value={article.performance.views.toLocaleString("fr-FR")} />
              <Metric label="Temps moyen" value={article.performance.averageReadTime} />
              <Metric label="Partages" value={article.performance.shares.toString()} />
              <Metric label="Clics newsletter" value={article.performance.newsletterClicks.toString()} />
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Quality checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {checklist.map(([label, checked]) => (
                <label key={label} className="flex items-center gap-3 text-sm">
                  <Checkbox checked={checked} aria-label={label} />
                  <span className="flex items-center gap-2">
                    {checked ? <CheckCircle2 className="size-4 text-muted-foreground" /> : null}
                    {label}
                  </span>
                </label>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border/50 pb-2 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-medium">{value}</span>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/50 bg-muted/20 p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}
