import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  FileText,
  Star,
  ChevronLeft,
  TrendingUp,
  Award,
  Bookmark,
  Share2,
} from "lucide-react";

export default async function FeaturedBlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });

  const featuredPosts = [
    {
      id: 1,
      category: t("categories.announcements"),
      title: "Sky Genesis Enterprise Lance une Nouvelle Version d'Aether Identity",
      excerpt: "Découvrez les nouvelles fonctionnalités de gestion d'identité et les améliorations de sécurité dans cette version majeure.",
      content: "Nous sommes ravis d'annoncer la sortie de la version 2.0 d'Aether Identity, notre plateforme de gestion d'identité entreprise. Cette version majeure apporte son lot de nouvelles fonctionnalités et d'améliorations significatives.\n\n## Nouvelles Fonctionnalités\n\n### Support WebAuthn Natif\nLa version 2.0 intègre nativement le support WebAuthn, permettant une authentification sans mot de passe sécurisée et conviviale.\n\n### Améliorations de Sécurité\n- Chiffrement de bout en bout renforcé\n- Journalisation d'audit améliorée\n- Détection d'anomalies en temps réel\n\n### Performance et Scalabilité\n- Temps de réponse réduits de 40%\n- Support de jusqu'à 1 million d'utilisateurs simultanés\n- Architecture microservices optimisée",
      author: "Équipe SGE",
      authorAvatar: "SGE",
      authorRole: "Équipe Officielle",
      date: "15 Avril 2026",
      readTime: "8 min",
      likes: 234,
      comments: 45,
      views: 1240,
      featured: true,
      categoryColor: "text-blue-400",
      categoryBg: "bg-blue-500/20",
    },
    {
      id: 2,
      category: t("categories.tutorials"),
      title: "Guide Complet: Implémenter Zero Trust avec Aether Edge",
      excerpt: "Apprenez à déployer une architecture Zero Trust en utilisant notre infrastructure DNS et edge distribuée.",
      content: "Le modèle Zero Trust est devenu essentiel pour sécuriser les infrastructures modernes. Dans ce guide, nous allons voir comment implémenter une architecture Zero Trust complète avec Aether Edge.\n\n## Qu'est-ce que Zero Trust?\n\nZero Trust est un modèle de sécurité qui suppose qu'aucune entité, interne ou externe, ne doit être automatiquement approuvée.\n\n## Étapes d'Implémentation\n\n### 1. Configuration DNS Sécurisée\nConfigurez vos zones DNS avec chiffrement DNS-over-HTTPS (DoH) et DNS-over-TLS (DoT).\n\n### 2. Segmentation Réseau\nUtilisez les nœuds Edge pour créer des segments réseau isolés.\n\n### 3. Authentification Continue\nImplémentez une vérification constante de l'identité et du contexte.",
      author: "Marie Laurent",
      authorAvatar: "ML",
      authorRole: "Core Team",
      date: "12 Avril 2026",
      readTime: "15 min",
      likes: 189,
      comments: 32,
      views: 890,
      featured: true,
      categoryColor: "text-green-400",
      categoryBg: "bg-green-500/20",
    },
    {
      id: 3,
      category: t("categories.technical"),
      title: "Architecture Microservices: Best Practices pour Kubernetes",
      excerpt: "Retour d'expérience sur le déploiement de microservices à grande échelle avec Aether Cloud.",
      content: "Après avoir déployé des centaines de microservices en production, voici les meilleures pratiques que nous avons identifiées.\n\n## Gestion des Configurations\n\nUtilisez des ConfigMaps et Secrets Kubernetes pour externaliser les configurations.\n\n## Observabilité\n\n- Métriques Prometheus\n- Logs centralisés avec Loki\n- Tracing distribué avec Jaeger\n\n## Résilience\n\nImplémentez des circuit breakers, retries et timeouts appropriés.",
      author: "Thomas Dubois",
      authorAvatar: "TD",
      authorRole: "Senior Engineer",
      date: "10 Avril 2026",
      readTime: "12 min",
      likes: 156,
      comments: 28,
      views: 720,
      featured: true,
      categoryColor: "text-purple-400",
      categoryBg: "bg-purple-500/20",
    },
    {
      id: 4,
      category: t("categories.updates"),
      title: "Roadmap 2026: Ce Qui Vous Attend",
      excerpt: "Découvrez notre feuille de route pour 2026 avec les nouvelles fonctionnalités et améliorations prévues.",
      content: "Voici un aperçu des fonctionnalités majeures que nous prévoyons de lancer en 2026.\n\n## Q2 2026\n\n- Aether Meet: Visioconférence chiffrée\n- Aether Sheets: Tableur collaboratif\n- Support GraphQL API\n\n## Q3 2026\n\n- Aether Chat: Messagerie d'équipe\n- Intégrations tierces étendues\n- Dashboard analytique amélioré\n\n## Q4 2026\n\n- IA-assisted features\n- Edge computing avancé\n- Certifications de conformité",
      author: "Équipe SGE",
      authorAvatar: "SGE",
      authorRole: "Équipe Officielle",
      date: "8 Avril 2026",
      readTime: "10 min",
      likes: 312,
      comments: 67,
      views: 1580,
      featured: true,
      categoryColor: "text-yellow-400",
      categoryBg: "bg-yellow-500/20",
    },
    {
      id: 5,
      category: t("categories.community"),
      title: "Interview: Comment l'Équipe SGE Construit l'Avenir du Cloud Souverain",
      excerpt: "Rencontre avec Alex Chen, CEO de Sky Genesis Enterprise, sur la vision et les défis du cloud souverain européen.",
      content: "Nous avons rencontré Alex Chen pour discuter de la vision de Sky Genesis Enterprise et des défis du cloud souverain.\n\n## La Vision SGE\n\n\"Notre mission est de fournir aux entreprises européennes une alternative souveraine aux géants du cloud américain.\"\n\n## Les Défis\n\n- Conformité RGPD stricte\n- Performance compétitive\n- Écosystème de partenaires\n\n## L'Avenir\n\n\"Nous croyons en un avenir où les données européennes restent en Europe, tout en offrant une expérience utilisateur de premier plan.\"",
      author: "Sophie Bernard",
      authorAvatar: "SB",
      authorRole: "Community Lead",
      date: "5 Avril 2026",
      readTime: "18 min",
      likes: 278,
      comments: 52,
      views: 1120,
      featured: true,
      categoryColor: "text-pink-400",
      categoryBg: "bg-pink-500/20",
    },
    {
      id: 6,
      category: t("categories.bestPractices"),
      title: "Sécuriser Vos APIs: Guide Complet",
      excerpt: "Les meilleures pratiques pour sécuriser vos APIs REST et GraphQL avec Aether Identity.",
      content: "La sécurité des APIs est cruciale dans les architectures modernes. Voici un guide complet pour sécuriser vos endpoints.\n\n## Authentification\n\nUtilisez OAuth 2.0 et OpenID Connect avec Aether Identity.\n\n## Autorisation\n\nImplémentez RBAC (Role-Based Access Control) ou ABAC (Attribute-Based).\n\n## Rate Limiting\n\nProtégez vos APIs contre les abus avec des limites de requêtes appropriées.\n\n## Validation des Entrées\n\nValidez et sanitizez toutes les entrées utilisateur.",
      author: "Jean Martin",
      authorAvatar: "JM",
      authorRole: "Security Expert",
      date: "2 Avril 2026",
      readTime: "14 min",
      likes: 198,
      comments: 38,
      views: 845,
      featured: true,
      categoryColor: "text-orange-400",
      categoryBg: "bg-orange-500/20",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header locale={locale as import("@/lib/locale").Locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 border-b border-border bg-linear-to-br from-yellow-900/20 via-background to-orange-900/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <Link href={`/${locale}/blog`}>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>Contenu Sélectionné</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
                  Articles en Vedette
                </h1>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
              {t("featuredDescription")} - Découvrez notre sélection des meilleurs articles, tutoriels et annonces de la communauté Sky Genesis Enterprise.
            </p>
          </div>
        </section>

        {/* Featured Badge */}
        <section className="py-8 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm">
              <Award className="w-4 h-4" />
              <span className="font-medium">Contenu Vérifié par l'Équipe Éditoriale</span>
            </div>
          </div>
        </section>

        {/* Featured Posts List */}
        <section className="py-16 lg:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
                >
                  {/* Content */}
                  <div className="lg:col-span-4 space-y-6">
                    {/* Category & Meta */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${post.categoryBg} ${post.categoryColor}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                      <Link href={`/${locale}/blog/${post.id}`}>{post.title}</Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <span className="text-sm font-semibold text-white">{post.authorAvatar}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{post.author}</div>
                        <div className="text-xs text-muted-foreground">{post.authorRole}</div>
                      </div>
                    </div>

                    {/* Stats & Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Link href={`/${locale}/blog/${post.id}`}>
                          <Button className="gap-2 h-9">
                            {t("readMore")}
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Featured Badge (Large) */}
                  <div className="lg:col-span-1 flex lg:justify-center">
                    <div className="inline-flex flex-col items-center justify-center p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                      <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 mb-2" />
                      <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">
                        Vedette
                      </span>
                      {index === 0 && (
                        <div className="mt-3 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                          #1
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-20 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                Impact de Nos Articles
              </h2>
              <p className="text-muted-foreground">
                Les articles en vedette génèrent un engagement exceptionnel
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">1,580</div>
                <div className="text-sm text-muted-foreground">Vues Max</div>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">312</div>
                <div className="text-sm text-muted-foreground">Likes Max</div>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">67</div>
                <div className="text-sm text-muted-foreground">Commentaires Max</div>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">18 min</div>
                <div className="text-sm text-muted-foreground">Temps de Lecture Max</div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <section className="py-16 lg:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                Sujets Tendances
              </h2>
              <p className="mt-2 text-muted-foreground">Explorez les thématiques populaires</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { topic: "Zero Trust", count: 234 },
                { topic: "Kubernetes", count: 189 },
                { topic: "RGPD", count: 156 },
                { topic: "WebAuthn", count: 142 },
                { topic: "Self-hosted", count: 128 },
                { topic: "API Security", count: 115 },
              ].map((item) => (
                <Link
                  key={item.topic}
                  href={`/${locale}/blog/topic/${item.topic.toLowerCase().replace(" ", "-")}`}
                  className="p-4 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all hover:shadow-md text-center group"
                >
                  <div className="text-sm font-medium text-foreground group-hover:text-blue-400 transition-colors mb-1">
                    #{item.topic}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.count} articles</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl border border-border bg-linear-to-br from-blue-900/20 via-background to-purple-900/20 overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-position-[32px]" />
              <div className="relative p-12 lg:p-16 text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                  Vous Avez une Histoire à Partager?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Contribuez à la communauté en partageant vos connaissances, retours d'expérience et tutoriels.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href={`/${locale}/blog/new`}>
                    <Button size="lg" className="gap-2 h-12 px-6 text-base">
                      <FileText className="h-4 w-4" />
                      Publier un Article
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={`/${locale}/blog/guidelines`}>
                    <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                      Guide de Contribution
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale as "fr" | "be_fr" | "be_nl" | "ch_fr"} />
    </div>
  );
}
