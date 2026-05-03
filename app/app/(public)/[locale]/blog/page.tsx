import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Search,
  MessageCircle,
  Heart,
  Eye,
  Calendar,
  User,
  Tag,
  Filter,
  TrendingUp,
  Clock,
  MessageSquare,
  Users,
  FileText,
  Zap,
  Star,
  Hash,
  Plus,
  Share2,
  ChevronDown,
  BookOpen,
  Bell,
  Flame,
  Award,
} from "lucide-react";

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });

  const featuredPosts = [
    {
      id: 1,
      category: t("categories.announcements"),
      title: "Sky Genesis Enterprise Lance une Nouvelle Version d'Aether Identity",
      excerpt: "Découvrez les nouvelles fonctionnalités de gestion d'identité et les améliorations de sécurité dans cette version majeure.",
      author: "Équipe SGE",
      date: "15 Avril 2026",
      readTime: "8 min",
      likes: 234,
      comments: 45,
      views: 1240,
      featured: true,
      image: "/blog/identity-v2.jpg",
      categoryColor: "text-blue-400",
      categoryBg: "bg-blue-500/20",
    },
    {
      id: 2,
      category: t("categories.tutorials"),
      title: "Guide Complet: Implémenter Zero Trust avec Aether Edge",
      excerpt: "Apprenez à déployer une architecture Zero Trust en utilisant notre infrastructure DNS et edge distribuée.",
      author: "Marie Laurent",
      date: "12 Avril 2026",
      readTime: "15 min",
      likes: 189,
      comments: 32,
      views: 890,
      featured: true,
      image: "/blog/zero-trust.jpg",
      categoryColor: "text-green-400",
      categoryBg: "bg-green-500/20",
    },
    {
      id: 3,
      category: t("categories.technical"),
      title: "Architecture Microservices: Best Practices pour Kubernetes",
      excerpt: "Retour d'expérience sur le déploiement de microservices à grande échelle avec Aether Cloud.",
      author: "Thomas Dubois",
      date: "10 Avril 2026",
      readTime: "12 min",
      likes: 156,
      comments: 28,
      views: 720,
      featured: true,
      image: "/blog/kubernetes.jpg",
      categoryColor: "text-purple-400",
      categoryBg: "bg-purple-500/20",
    },
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: "Comment configurer l'authentification SSO avec Aether Identity?",
      author: "Jean Martin",
      authorAvatar: "JM",
      date: "Il y a 2 heures",
      category: t("categories.technical"),
      tags: ["SSO", "Authentication", "Enterprise"],
      replies: 23,
      likes: 45,
      views: 312,
      hot: true,
    },
    {
      id: 2,
      title: "Retour d'expérience: Migration depuis Auth0 vers Aether",
      author: "Sophie Bernard",
      authorAvatar: "SB",
      date: "Il y a 5 heures",
      category: t("categories.community"),
      tags: ["Migration", "Feedback", "Enterprise"],
      replies: 18,
      likes: 67,
      views: 428,
      hot: true,
    },
    {
      id: 3,
      title: "Question sur la conformité RGPD avec Aether Vault",
      author: "Pierre Durand",
      authorAvatar: "PD",
      date: "Il y a 1 jour",
      category: t("categories.bestPractices"),
      tags: ["RGPD", "Compliance", "Security"],
      replies: 12,
      likes: 34,
      views: 256,
      hot: false,
    },
    {
      id: 4,
      title: "Nouvelle fonctionnalité: Support WebAuthn disponible",
      author: "Équipe SGE",
      authorAvatar: "SGE",
      date: "Il y a 2 jours",
      category: t("categories.updates"),
      tags: ["WebAuthn", "Security", "Feature"],
      replies: 56,
      likes: 189,
      views: 1024,
      hot: true,
    },
    {
      id: 5,
      title: "Tutoriel: Déployer Aether Edge sur Raspberry Pi",
      author: "Lucas Petit",
      authorAvatar: "LP",
      date: "Il y a 3 jours",
      category: t("categories.tutorials"),
      tags: ["Edge", "Tutorial", "Self-hosted"],
      replies: 34,
      likes: 92,
      views: 567,
      hot: false,
    },
  ];

  const categories = [
    { name: t("categories.announcements"), count: 24, icon: Bell, color: "text-blue-400", bgColor: "bg-blue-500/20", borderColor: "border-blue-500/20" },
    { name: t("categories.tutorials"), count: 48, icon: BookOpen, color: "text-green-400", bgColor: "bg-green-500/20", borderColor: "border-green-500/20" },
    { name: t("categories.community"), count: 156, icon: Users, color: "text-purple-400", bgColor: "bg-purple-500/20", borderColor: "border-purple-500/20" },
    { name: t("categories.technical"), count: 89, icon: FileText, color: "text-orange-400", bgColor: "bg-orange-500/20", borderColor: "border-orange-500/20" },
    { name: t("categories.updates"), count: 32, icon: Zap, color: "text-yellow-400", bgColor: "bg-yellow-500/20", borderColor: "border-yellow-500/20" },
    { name: t("categories.bestPractices"), count: 67, icon: Award, color: "text-pink-400", bgColor: "bg-pink-500/20", borderColor: "border-pink-500/20" },
  ];

  const tags = [
    { name: t("tags.security"), count: 124 },
    { name: t("tags.identity"), count: 98 },
    { name: t("tags.cloud"), count: 87 },
    { name: t("tags.devops"), count: 76 },
    { name: t("tags.api"), count: 65 },
    { name: t("tags.integration"), count: 54 },
    { name: t("tags.opensource"), count: 43 },
    { name: t("tags.enterprise"), count: 38 },
  ];

  const topContributors = [
    { name: "Marie Laurent", role: "Core Team", points: 2450, avatar: "ML", streak: 12 },
    { name: "Thomas Dubois", role: "Community Lead", points: 1890, avatar: "TD", streak: 8 },
    { name: "Sophie Bernard", role: "MVP", points: 1560, avatar: "SB", streak: 5 },
    { name: "Jean Martin", role: "Contributor", points: 1230, avatar: "JM", streak: 3 },
  ];

  const forumStats = [
    { icon: Users, value: "12,450", label: t("forumStats.members"), color: "text-blue-400" },
    { icon: MessageSquare, value: "3,890", label: t("forumStats.discussions"), color: "text-green-400" },
    { icon: FileText, value: "8,234", label: t("forumStats.posts"), color: "text-purple-400" },
    { icon: Zap, value: "342", label: t("forumStats.online"), color: "text-yellow-400" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header locale={locale as import("@/lib/locale").Locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 border-b border-border bg-linear-to-br from-blue-900/20 via-background to-purple-900/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium">Communauté Active</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
                {t("heroTitle")}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                {t("heroDescription")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/${locale}/blog/new`}>
                  <Button size="lg" className="gap-2 h-12 px-6 text-base">
                    <Plus className="h-4 w-4" />
                    {t("newDiscussion")}
                  </Button>
                </Link>
                <Link href={`/${locale}/blog/subscribe`}>
                  <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                    <Bell className="h-4 w-4" />
                    S'abonner
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-8 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative w-full lg:max-w-xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  className="pl-10 h-12 bg-background border-border"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="relative">
                  <Button variant="outline" className="gap-2 h-10">
                    <Filter className="h-4 w-4" />
                    {t("allCategories")}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
                <div className="relative">
                  <Button variant="outline" className="gap-2 h-10">
                    <Tag className="h-4 w-4" />
                    {t("allTags")}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
                <div className="relative">
                  <Button variant="outline" className="gap-2 h-10">
                    <Clock className="h-4 w-4" />
                    {t("sortBy")}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forum Stats */}
        <section className="py-12 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {forumStats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-lg border border-border bg-card text-center hover:border-foreground/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-4">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 lg:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">{t("featuredTitle")}</h2>
                <p className="mt-2 text-muted-foreground">{t("featuredDescription")}</p>
              </div>
              <Link href={`/${locale}/blog/featured`} className="text-sm font-medium text-blue-400 hover:opacity-80 flex items-center gap-1">
                {t("viewAll")} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <div key={post.id} className="group rounded-lg border border-border bg-card overflow-hidden hover:border-foreground/20 transition-all hover:shadow-lg">
                  <div className="aspect-video bg-linear-to-br from-blue-900/20 to-purple-900/20 relative">
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${post.categoryBg} ${post.categoryColor}`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-muted-foreground/40" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                      <Link href={`/${locale}/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <Link href={`/${locale}/blog/${post.id}`} className="text-sm font-medium text-blue-400 hover:opacity-80">
                        {t("readMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-16 lg:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Discussions */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">{t("discussionsTitle")}</h2>
                    <p className="mt-2 text-muted-foreground">{t("discussionsDescription")}</p>
                  </div>
                  <Link href={`/${locale}/blog/new`}>
                    <Button className="gap-2 h-10">
                      <Plus className="h-4 w-4" />
                      {t("newDiscussion")}
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentDiscussions.map((discussion) => (
                    <div key={discussion.id} className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all hover:shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0">
                          <span className="text-sm font-semibold text-white">{discussion.authorAvatar}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            {discussion.hot && (
                              <Flame className="w-4 h-4 text-orange-400" />
                            )}
                            <h3 className="text-base font-semibold text-foreground hover:text-blue-400 transition-colors">
                              <Link href={`/${locale}/blog/discussion/${discussion.id}`}>{discussion.title}</Link>
                            </h3>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{discussion.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{discussion.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Tag className="w-3 h-3" />
                              <span className={discussion.category.includes("Technique") ? "text-orange-400" : "text-blue-400"}>
                                {discussion.category}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {discussion.tags.map((tag) => (
                              <span key={tag} className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                                <Hash className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MessageCircle className="w-3 h-3" />
                                <span>{discussion.replies} réponses</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="w-3 h-3" />
                                <span>{discussion.likes}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                <span>{discussion.views} vues</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Share2 className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Heart className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center pt-6">
                  <Button variant="outline" className="gap-2 h-10 px-6">
                    {t("loadMore")}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Catégories</CardTitle>
                    <CardDescription>Explorez par thématique</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={`/${locale}/blog/category/${category.name.toLowerCase()}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <span className="text-sm font-medium text-foreground group-hover:text-blue-400 transition-colors">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    ))}
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tags Populaires</CardTitle>
                    <CardDescription>Mots-clés tendances</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Link
                          key={tag.name}
                          href={`/${locale}/blog/tag/${tag.name.toLowerCase()}`}
                          className="inline-flex items-center px-3 py-1.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-xs text-muted-foreground hover:text-foreground"
                        >
                          <Hash className="w-3 h-3 mr-1" />
                          {tag.name}
                          <span className="ml-2 text-xs opacity-60">({tag.count})</span>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Top Contributors */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      {t("topContributors")}
                    </CardTitle>
                    <CardDescription>Les membres les plus actifs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {topContributors.map((contributor, index) => (
                      <div key={contributor.name} className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                            <span className="text-sm font-semibold text-white">{contributor.avatar}</span>
                          </div>
                          {index === 0 && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                              <Star className="w-2.5 h-2.5 text-yellow-900" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-foreground truncate">{contributor.name}</span>
                            {contributor.streak > 5 && (
                              <Flame className="w-3 h-3 text-orange-400" />
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">{contributor.role}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-foreground">{contributor.points}</div>
                          <div className="text-xs text-muted-foreground">pts</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-linear-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Bell className="w-4 h-4 text-blue-400" />
                      {t("newsletterTitle")}
                    </CardTitle>
                    <CardDescription>{t("newsletterDescription")}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Input
                      type="email"
                      placeholder={t("newsletterPlaceholder")}
                      className="bg-background border-border"
                    />
                    <Button className="w-full gap-2">
                      <Bell className="w-4 h-4" />
                      {t("newsletterButton")}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Topics */}
        <section className="py-16 lg:py-20 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                {t("popularTopics")}
              </h2>
              <p className="mt-2 text-muted-foreground">Sujets les plus discutés cette semaine</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
                  <div className="text-xs text-muted-foreground">{item.count} discussions</div>
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
                  Prêt à Rejoindre la Communauté?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Participez aux discussions, partagez vos connaissances et apprenez des autres membres de la communauté Sky Genesis Enterprise.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="https://sso.skygenesisenterprise.com/register">
                    <Button size="lg" className="gap-2 h-12 px-6 text-base">
                      <Users className="h-4 w-4" />
                      Créer un Compte
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={`/${locale}/blog/guidelines`}>
                    <Button variant="outline" size="lg" className="gap-2 h-12 px-6 text-base">
                      <BookOpen className="h-4 w-4" />
                      Lire les Règles
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
