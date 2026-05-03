"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronLeft,
  FileText,
  MessageSquare,
  Eye,
  Save,
  Send,
  Image,
  Link2,
  Bold,
  Italic,
  List,
  Code,
  Quote,
  Heading,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function NewBlogPostPage({ params }: { params: { locale: string } }) {
  const t = useTranslations("Blog");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: "announcements", label: t("categories.announcements") },
    { value: "tutorials", label: t("categories.tutorials") },
    { value: "community", label: t("categories.community") },
    { value: "technical", label: t("categories.technical") },
    { value: "updates", label: t("categories.updates") },
    { value: "bestPractices", label: t("categories.bestPractices") },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Handle success (redirect or show success message)
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header locale={params.locale as import("@/lib/locale").Locale} />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-12 lg:py-16 border-b border-border bg-linear-to-br from-green-900/20 via-background to-blue-900/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <Link href={`/${params.locale}/blog`}>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <FileText className="w-4 h-4 text-green-400" />
                  <span>Création de Contenu</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">
                  {t("newPost")}
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Partagez vos connaissances avec la communauté. Rédigez un article technique, un tutoriel, ou partagez votre retour d'expérience.
            </p>
          </div>
        </section>

        {/* Guidelines Banner */}
        <section className="py-6 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-blue-400 mb-1">
                  Conseils de Rédaction
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Utilisez un titre clair et descriptif</li>
                  <li>• Structurez votre contenu avec des titres et sous-titres</li>
                  <li>• Ajoutez des exemples de code lorsque c'est pertinent</li>
                  <li>• Relisez votre article avant publication</li>
                </ul>
              </div>
              <Link href={`/${params.locale}/blog/guidelines`}>
                <Button variant="outline" size="sm" className="shrink-0">
                  Guide Complet
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 lg:py-16 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title Input */}
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium text-foreground">
                      Titre de l'Article *
                    </label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Ex: Comment implémenter Zero Trust avec Aether Edge"
                      className="h-12 bg-background border-border"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      {title.length}/100 caractères
                    </p>
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium text-foreground">
                      Catégorie *
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full h-12 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Sélectionner une catégorie</option>
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tags Input */}
                  <div className="space-y-2">
                    <label htmlFor="tags" className="text-sm font-medium text-foreground">
                      Tags
                    </label>
                    <Input
                      id="tags"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="Ex: security, zero-trust, tutorial (séparés par des virgules)"
                      className="h-12 bg-background border-border"
                    />
                    <p className="text-xs text-muted-foreground">
                      Séparez les tags par des virgules
                    </p>
                  </div>

                  {/* Content Editor */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="content" className="text-sm font-medium text-foreground">
                        Contenu *
                      </label>
                      <div className="flex items-center gap-2">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setIsPreview(!isPreview)}
                          className="gap-2 h-8"
                        >
                          {isPreview ? (
                            <>
                              <Code className="w-3.5 h-3.5" />
                              Éditer
                            </>
                          ) : (
                            <>
                              <Eye className="w-3.5 h-3.5" />
                              Aperçu
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Toolbar */}
                    {!isPreview && (
                      <div className="flex flex-wrap gap-1 p-2 rounded-t-lg border border-b-0 border-border bg-muted">
                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                          <Heading className="w-4 h-4" />
                        </Button>
                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                          <Bold className="w-4 h-4" />
                        </Button>
                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                          <Italic className="w-4 h-4" />
                        </Button>
                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                          <List className="w-4 h-4" />
                        </Button>
                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                          <Quote className="w-4 h-4" />
                        </Button>
                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                          <Code className="w-4 h-4" />
                        </Button>
                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                          <Link2 className="w-4 h-4" />
                        </Button>
                        <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                          <Image className="w-4 h-4" />
                        </Button>
                      </div>
                    )}

                    {isPreview ? (
                      <div className="min-h-100 p-6 rounded-b-lg border border-border bg-card">
                        {content ? (
                          <div className="prose prose-sm max-w-none">
                            <h2 className="text-xl font-semibold mb-4">{title || "Titre de l'article"}</h2>
                            <div className="text-muted-foreground whitespace-pre-wrap">
                              {content}
                            </div>
                          </div>
                        ) : (
                          <div className="text-muted-foreground text-sm italic">
                            L'aperçu apparaîtra ici...
                          </div>
                        )}
                      </div>
                    ) : (
                      <Textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Rédigez votre article en Markdown...\n\n## Introduction\n\nCommencez par une introduction captivante...\n\n## Développement\n\nDéveloppez vos idées avec des exemples..."
                        className="min-h-100 font-mono text-sm bg-background border-border rounded-t-none"
                        required
                      />
                    )}

                    <p className="text-xs text-muted-foreground">
                      Le Markdown est supporté pour la mise en forme
                    </p>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <Link href={`/${params.locale}/blog`}>
                      <Button type="button" variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" />
                        Annuler
                      </Button>
                    </Link>
                    <div className="flex items-center gap-3">
                      <Button type="button" variant="outline" className="gap-2">
                        <Save className="w-4 h-4" />
                        Enregistrer le Brouillon
                      </Button>
                      <Button
                        type="submit"
                        className="gap-2 h-12 px-6"
                        disabled={isSubmitting || !title || !content || !category}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            Publication...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Publier l'Article
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Requirements Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Requirements
                    </CardTitle>
                    <CardDescription>
                      Critères de publication
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${title.length >= 10 ? "bg-green-500/20 text-green-400" : "bg-muted text-muted-foreground"}`}>
                        {title.length >= 10 ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                      </div>
                      <span className={title.length >= 10 ? "text-foreground" : "text-muted-foreground"}>
                        Titre (10 caractères min)
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${content.length >= 100 ? "bg-green-500/20 text-green-400" : "bg-muted text-muted-foreground"}`}>
                        {content.length >= 100 ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                      </div>
                      <span className={content.length >= 100 ? "text-foreground" : "text-muted-foreground"}>
                        Contenu (100 caractères min)
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${category ? "bg-green-500/20 text-green-400" : "bg-muted text-muted-foreground"}`}>
                        {category ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                      </div>
                      <span className={category ? "text-foreground" : "text-muted-foreground"}>
                        Catégorie sélectionnée
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Tips Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-blue-400" />
                      Conseils
                    </CardTitle>
                    <CardDescription>
                      Pour un article de qualité
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      • Commencez par une introduction qui capture l'attention
                    </p>
                    <p>
                      • Utilisez des exemples concrets et du code
                    </p>
                    <p>
                      • Ajoutez des images et diagrammes si pertinent
                    </p>
                    <p>
                      • Terminez par une conclusion ou appel à l'action
                    </p>
                  </CardContent>
                </Card>

                {/* Stats Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Eye className="w-4 h-4 text-purple-400" />
                      Visibilité
                    </CardTitle>
                    <CardDescription>
                      Portée de votre article
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Membres de la communauté</span>
                      <span className="font-semibold text-foreground">12,450</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Visiteurs mensuels</span>
                      <span className="font-semibold text-foreground">45,000+</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Articles publiés</span>
                      <span className="font-semibold text-foreground">8,234</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Support Card */}
                <Card className="bg-linear-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Besoin d'Aide?</CardTitle>
                    <CardDescription>
                      Notre équipe est là pour vous
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Notre équipe éditoriale peut vous aider à améliorer votre article avant publication.
                    </p>
                    <Link href={`/${params.locale}/contact`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Contacter l'Équipe
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={params.locale as "fr" | "be_fr" | "be_nl" | "ch_fr"} />
    </div>
  );
}
