/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/articles/review
 * Layer: Dashboard Page
 * Purpose: Review and validate SGE editorial publications before release.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */

import Link from "next/link";
import { CalendarDays, CheckCircle2, FileCheck2, MessageSquare } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { editorialArticles, formatDate, getChecklistCompletion } from "../_data";

export default function ReviewArticlesPage() {
  const reviewArticles = editorialArticles.filter((article) => article.status === "review");
  const highPriority = reviewArticles.filter((article) => article.priority === "Haute");
  const changesRequested = reviewArticles.filter((article) => getChecklistCompletion(article) < 80);
  const readyToPublish = reviewArticles.filter((article) => getChecklistCompletion(article) >= 80);
  const summary = [
    { label: "En attente", value: reviewArticles.length },
    { label: "Priorité haute", value: highPriority.length },
    { label: "Modifications demandées", value: changesRequested.length },
    { label: "Prêts à publier", value: readyToPublish.length },
  ];
  const criteria = ["Clarté", "Exactitude", "Ton SGE", "SEO", "Conformité"];

  return (
    <div className="space-y-6 bg-background p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">En révision</h1>
        <p className="text-sm text-muted-foreground">
          Validez les publications avant planification ou publication.
        </p>
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

      <Card className="rounded-2xl border-border/50 bg-card">
        <CardContent>
          <div className="overflow-hidden rounded-2xl border border-border/50">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/20">
                  <TableHead>Article</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Équipe</TableHead>
                  <TableHead>Priorité</TableHead>
                  <TableHead>Checklist</TableHead>
                  <TableHead>Soumis le</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reviewArticles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{article.title}</div>
                        <div className="text-xs text-muted-foreground">{article.category}</div>
                      </div>
                    </TableCell>
                    <TableCell>{article.type}</TableCell>
                    <TableCell>{article.team}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="rounded-2xl">
                        {article.priority ?? "Normale"}
                      </Badge>
                    </TableCell>
                    <TableCell>{getChecklistCompletion(article)}%</TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(article.submittedAt)}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="rounded-2xl" asChild>
                          <Link href={`/dashboard/articles/${article.id}`}>Ouvrir</Link>
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-2xl">
                          <CheckCircle2 className="size-4" />
                          Approuver
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-2xl">
                          <MessageSquare className="size-4" />
                          Demander modifications
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-2xl">
                          <CalendarDays className="size-4" />
                          Planifier
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-border/50 bg-card">
        <CardHeader>
          <CardTitle>Critères de validation</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-5">
          {criteria.map((criterion) => (
            <div key={criterion} className="flex items-center gap-2 rounded-2xl border border-border/50 bg-muted/20 p-3 text-sm">
              <FileCheck2 className="size-4 text-muted-foreground" />
              {criterion}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
