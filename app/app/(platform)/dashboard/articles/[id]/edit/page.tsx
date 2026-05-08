/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/articles/[id]/edit
 * Layer: Dashboard Page
 * Purpose: Edit an existing official SGE editorial publication.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */

"use client";

import * as React from "react";
import Link from "next/link";
import { Archive, CalendarDays, Eye, ImageIcon, Send } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import {
  articleCategories,
  articleTeams,
  articleTypes,
  getArticleById,
  statusLabels,
  type ArticleCategory,
  type ArticleStatus,
  type ArticleTeam,
  type ArticleType,
} from "../../_data";

export default function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const article = getArticleById(resolvedParams.id);
  const [title, setTitle] = React.useState(article.title);
  const [slug, setSlug] = React.useState(article.slug);
  const [excerpt, setExcerpt] = React.useState(article.excerpt);
  const [content, setContent] = React.useState(article.content);
  const [tags, setTags] = React.useState(article.tags.join(", "));
  const [status, setStatus] = React.useState<ArticleStatus>(article.status);
  const [type, setType] = React.useState(article.type);
  const [category, setCategory] = React.useState(article.category);
  const [team, setTeam] = React.useState(article.team);
  const [publishDate, setPublishDate] = React.useState(article.scheduledAt ?? article.publishedAt ?? "");
  const [seoTitle, setSeoTitle] = React.useState(article.title);
  const [seoDescription, setSeoDescription] = React.useState(article.excerpt);

  return (
    <div className="space-y-6 bg-background p-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">Modifier l'article</h1>
            <Badge variant="outline" className="rounded-2xl">
              {statusLabels[status]}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{article.title}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="rounded-2xl border-border/50" asChild>
            <Link href={`/dashboard/articles/${article.id}`}>Annuler</Link>
          </Button>
          <Button variant="outline" className="rounded-2xl border-border/50" asChild>
            <Link href={`/dashboard/articles/${article.id}`}>
              <Eye className="size-4" />
              Aperçu
            </Link>
          </Button>
          <Button className="rounded-2xl">Enregistrer</Button>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <main className="space-y-6">
          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Contenu</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <InputField id="title" label="Titre" value={title} onChange={setTitle} />
              <InputField id="slug" label="Slug" value={slug} onChange={setSlug} />
              <div className="space-y-2">
                <Label htmlFor="excerpt">Extrait</Label>
                <Textarea id="excerpt" value={excerpt} onChange={(event) => setExcerpt(event.target.value)} rows={4} className="rounded-2xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Contenu</Label>
                <Textarea id="content" value={content} onChange={(event) => setContent(event.target.value)} rows={14} className="rounded-2xl" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Couverture et tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-border/50 bg-muted/20 text-center">
                <div className="space-y-2">
                  <ImageIcon className="mx-auto size-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Placeholder neutre de couverture</p>
                </div>
              </div>
              <InputField id="tags" label="Tags" value={tags} onChange={setTags} />
            </CardContent>
          </Card>
        </main>

        <aside className="space-y-6">
          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Publication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FieldSelect label="Statut" value={status} onValueChange={(value) => setStatus(value as ArticleStatus)} values={Object.keys(statusLabels)} labels={statusLabels} />
              <FieldSelect label="Type" value={type} onValueChange={(value) => setType(value as ArticleType)} values={articleTypes} />
              <FieldSelect label="Catégorie" value={category} onValueChange={(value) => setCategory(value as ArticleCategory)} values={articleCategories} />
              <FieldSelect label="Équipe responsable" value={team} onValueChange={(value) => setTeam(value as ArticleTeam)} values={articleTeams} />
              <InputField id="publish-date" label="Date de publication" value={publishDate} onChange={setPublishDate} type="datetime-local" />
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <InputField id="seo-title" label="SEO title" value={seoTitle} onChange={setSeoTitle} />
              <div className="space-y-2">
                <Label htmlFor="seo-description">SEO description</Label>
                <Textarea id="seo-description" value={seoDescription} onChange={(event) => setSeoDescription(event.target.value)} rows={4} className="rounded-2xl" />
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      <footer className="flex flex-wrap justify-end gap-2 rounded-2xl border border-border/50 bg-muted/20 p-4">
        <Button className="rounded-2xl">Enregistrer</Button>
        <Button variant="outline" className="rounded-2xl">
          <Send className="size-4" />
          Envoyer en révision
        </Button>
        <Button variant="outline" className="rounded-2xl">
          <CalendarDays className="size-4" />
          Planifier
        </Button>
        <Button variant="outline" className="rounded-2xl">Publier</Button>
        <Button variant="outline" className="rounded-2xl">
          <Archive className="size-4" />
          Archiver
        </Button>
      </footer>
    </div>
  );
}

function InputField({
  id,
  label,
  value,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} className="rounded-2xl" />
    </div>
  );
}

function FieldSelect({
  label,
  value,
  onValueChange,
  values,
  labels,
}: {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  values: string[];
  labels?: Partial<Record<string, string>>;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full rounded-2xl">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {values.map((item) => (
            <SelectItem key={item} value={item}>
              {labels?.[item] ?? item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
