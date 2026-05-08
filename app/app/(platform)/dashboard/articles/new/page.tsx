/**
 * Sky Genesis Enterprise
 *
 * Scope: Official Website
 * Route: /dashboard/articles/new
 * Layer: Dashboard Page
 * Purpose: Create an official SGE editorial publication.
 *
 * Stability: Active
 * Owner: SGE Web Platform
 * Contact: contact@skygenesisenterprise.com
 */

"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CalendarDays, ImageIcon, Send, Upload } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { articlesApi } from "@/lib/api/client";

import { articleCategories, articleTeams, articleTypes, statusLabels, type ArticleStatus } from "../_data";

const defaultTags = ["SGE Journal", "Infrastructure", "Trust Center", "Platform", "Open Source"];

export default function NewArticlePage() {
  const router = useRouter();
  const [title, setTitle] = React.useState("");
  const [slug, setSlug] = React.useState("");
  const [excerpt, setExcerpt] = React.useState("");
  const [content, setContent] = React.useState("");
  const [tags, setTags] = React.useState(defaultTags.join(", "));
  const [status, setStatus] = React.useState<ArticleStatus>("draft");
  const [type, setType] = React.useState("Article");
  const [category, setCategory] = React.useState("Actualités SGE");
  const [team, setTeam] = React.useState("Équipe Editorial");
  const [publishDate, setPublishDate] = React.useState("");
  const [seoTitle, setSeoTitle] = React.useState("");
  const [seoDescription, setSeoDescription] = React.useState("");
  const [isSaving, setIsSaving] = React.useState(false);

  const updateTitle = (value: string) => {
    setTitle(value);
    if (!slug) {
      setSlug(
        value
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, ""),
      );
    }
  };

  const saveDraft = async () => {
    if (!title.trim()) return;

    setIsSaving(true);
    try {
      await articlesApi.create({
        title,
        content,
        excerpt,
        categoryId: category,
        seoTitle,
        seoDescription,
        seoKeywords: tags,
      });
      router.push("/dashboard/articles");
    } catch {
      router.push("/dashboard/articles");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 bg-background p-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <Button variant="ghost" className="mb-2 rounded-2xl px-0 text-muted-foreground" asChild>
            <Link href="/dashboard/articles">
              <ArrowLeft className="size-4" />
              Annuler
            </Link>
          </Button>
          <h1 className="text-2xl font-semibold tracking-tight">Nouvel article</h1>
          <p className="text-sm text-muted-foreground">
            Créez une publication pour le SGE Journal, une annonce ou une note technique.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="rounded-2xl border-border/50" asChild>
            <Link href="/dashboard/articles">Annuler</Link>
          </Button>
          <Button className="rounded-2xl" disabled={isSaving || !title.trim()} onClick={saveDraft}>
            Enregistrer brouillon
          </Button>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <main className="space-y-6">
          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Contenu</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titre</Label>
                <Input id="title" value={title} onChange={(event) => updateTitle(event.target.value)} className="rounded-2xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input id="slug" value={slug} onChange={(event) => setSlug(event.target.value)} className="rounded-2xl" />
              </div>
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
              <CardTitle>Couverture et organisation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex min-h-44 items-center justify-center rounded-2xl border border-dashed border-border/50 bg-muted/20">
                <div className="space-y-2 text-center">
                  <ImageIcon className="mx-auto size-8 text-muted-foreground" />
                  <p className="text-sm font-medium">Placeholder de couverture</p>
                  <p className="text-xs text-muted-foreground">Aucune image externe n'est utilisée.</p>
                  <Button variant="outline" size="sm" className="rounded-2xl">
                    <Upload className="size-4" />
                    Choisir une image
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" value={tags} onChange={(event) => setTags(event.target.value)} className="rounded-2xl" />
              </div>
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
              <FieldSelect label="Type" value={type} onValueChange={setType} values={articleTypes} />
              <FieldSelect label="Catégorie" value={category} onValueChange={setCategory} values={articleCategories} />
              <FieldSelect label="Équipe responsable" value={team} onValueChange={setTeam} values={articleTeams} />
              <div className="space-y-2">
                <Label htmlFor="publish-date">Date de publication</Label>
                <Input id="publish-date" type="datetime-local" value={publishDate} onChange={(event) => setPublishDate(event.target.value)} className="rounded-2xl" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/50 bg-card">
            <CardHeader>
              <CardTitle>SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="seo-title">SEO title</Label>
                <Input id="seo-title" value={seoTitle} onChange={(event) => setSeoTitle(event.target.value)} className="rounded-2xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="seo-description">SEO description</Label>
                <Textarea id="seo-description" value={seoDescription} onChange={(event) => setSeoDescription(event.target.value)} rows={4} className="rounded-2xl" />
              </div>
              <Badge variant="outline" className="rounded-2xl">
                {statusLabels[status]}
              </Badge>
            </CardContent>
          </Card>
        </aside>
      </div>

      <footer className="flex flex-wrap justify-end gap-2 rounded-2xl border border-border/50 bg-muted/20 p-4">
        <Button variant="outline" className="rounded-2xl" disabled={isSaving || !title.trim()} onClick={saveDraft}>
          Enregistrer brouillon
        </Button>
        <Button variant="outline" className="rounded-2xl">
          <Send className="size-4" />
          Envoyer en révision
        </Button>
        <Button variant="outline" className="rounded-2xl">
          <CalendarDays className="size-4" />
          Planifier
        </Button>
        <Button className="rounded-2xl">Publier</Button>
      </footer>
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
  labels?: Record<string, string>;
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
