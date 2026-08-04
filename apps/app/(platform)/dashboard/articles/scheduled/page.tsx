/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/articles/scheduled
 * Layer: Dashboard Page
 * Purpose: Monitor scheduled SGE editorial publications.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */

import Link from "next/link";
import { CalendarDays, Clock, Pencil, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { editorialArticles, formatDateTime, statusLabels } from "../_data";

const groups = [
  { label: "Aujourd'hui", until: new Date("2026-05-08T23:59:59") },
  { label: "Cette semaine", until: new Date("2026-05-15T23:59:59") },
  { label: "Plus tard", until: undefined },
];

export default function ScheduledArticlesPage() {
  const scheduled = editorialArticles
    .filter((article) => article.status === "scheduled")
    .sort((a, b) => new Date(a.scheduledAt ?? "").getTime() - new Date(b.scheduledAt ?? "").getTime());
  const thisWeek = scheduled.filter((article) => new Date(article.scheduledAt ?? "") <= new Date("2026-05-15T23:59:59"));
  const summary = [
    { label: "Aujourd'hui", value: scheduled.filter((article) => new Date(article.scheduledAt ?? "").toDateString() === new Date("2026-05-08").toDateString()).length },
    { label: "Cette semaine", value: thisWeek.length },
    { label: "Ce mois-ci", value: scheduled.length },
    { label: "En attente confirmation", value: scheduled.filter((article) => !article.channel).length },
  ];

  return (
    <div className="space-y-6 bg-background p-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Planifiés</h1>
          <p className="text-sm text-muted-foreground">
            Suivez les contenus programmés pour publication.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="rounded-2xl border-border/50" asChild>
            <Link href="/dashboard/editorial-calendar">
              <CalendarDays className="size-4" />
              Calendrier éditorial
            </Link>
          </Button>
          <Button className="rounded-2xl" asChild>
            <Link href="/dashboard/articles/new">
              <Plus className="size-4" />
              Nouvel article
            </Link>
          </Button>
        </div>
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

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <main className="space-y-4">
          {groups.map((group, index) => {
            const previousUntil = index === 0 ? undefined : groups[index - 1]?.until;
            const articles = scheduled.filter((article) => {
              const date = new Date(article.scheduledAt ?? "");
              if (!group.until) return previousUntil ? date > previousUntil : true;
              return previousUntil ? date > previousUntil && date <= group.until : date <= group.until;
            });

            return (
              <Card key={group.label} className="rounded-2xl border-border/50 bg-card">
                <CardHeader>
                  <CardTitle>{group.label}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {articles.map((article) => (
                    <div key={article.id} className="rounded-2xl border border-border/50 bg-muted/20 p-4">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <h2 className="font-medium">{article.title}</h2>
                            <Badge variant="outline" className="rounded-2xl">{article.type}</Badge>
                            <Badge variant="secondary" className="rounded-2xl">{article.category}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {formatDateTime(article.scheduledAt)} · {article.channel ?? "Canal à confirmer"} · {article.team}
                          </p>
                          <Badge variant="outline" className="rounded-2xl">{statusLabels[article.status]}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm" className="rounded-2xl" asChild>
                            <Link href={`/dashboard/articles/${article.id}`}>
                              <Clock className="size-4" />
                              Ouvrir
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-2xl" asChild>
                            <Link href={`/dashboard/articles/${article.id}/edit`}>
                              <Pencil className="size-4" />
                              Modifier
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {articles.length === 0 ? (
                    <p className="rounded-2xl border border-border/50 bg-muted/20 p-4 text-sm text-muted-foreground">
                      Aucun contenu dans ce groupe.
                    </p>
                  ) : null}
                </CardContent>
              </Card>
            );
          })}
        </main>

        <aside>
          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Prochaines échéances</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {scheduled.slice(0, 4).map((article) => (
                <div key={article.id} className="rounded-2xl border border-border/50 bg-muted/20 p-3">
                  <p className="text-sm font-medium">{article.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{formatDateTime(article.scheduledAt)}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
