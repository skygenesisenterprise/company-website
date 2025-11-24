'use client';

import { useState } from 'react';
import { ArrowRight, BookOpen, PlayCircle, Download, Wrench, Shield, Zap, Clock, ChevronRight, Users, Code, Database, Lock } from 'lucide-react';

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Guides rapides pour débuter avec nos produits',
      icon: BookOpen,
      color: 'blue'
    },
    {
      id: 'product-tutorials',
      title: 'Product Tutorials',
      description: 'Tutoriels détaillés pour maîtriser nos solutions',
      icon: PlayCircle,
      color: 'green'
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      description: 'Recommandations et bonnes pratiques enterprise',
      icon: Shield,
      color: 'purple'
    },
    {
      id: 'integrations',
      title: 'Integrations',
      description: 'Connectez nos outils avec votre écosystème',
      icon: Zap,
      color: 'orange'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Solutions aux problèmes courants',
      icon: Wrench,
      color: 'red'
    },
    {
      id: 'resources',
      title: 'Resources & Downloads',
      description: 'Documentation, templates et ressources',
      icon: Download,
      color: 'cyan'
    }
  ];

  const featuredGuides = [
    {
      title: 'Déployer Aether Office en entreprise',
      description: 'Guide complet pour l\'installation et la configuration d\'Aether Office dans un environnement enterprise avec plus de 1000 utilisateurs.',
      level: 'Intermediate',
      duration: '15 min read',
      badge: 'Nouveau',
      category: 'product-tutorials',
      icon: Users
    },
    {
      title: 'Sécurité Zero-Trust : Implémentation',
      description: 'Mise en place d\'une architecture Zero-Trust avec nos solutions de gouvernance et les meilleures pratiques de sécurité.',
      level: 'Advanced',
      duration: '25 min read',
      badge: 'Mis à jour',
      category: 'best-practices',
      icon: Lock
    },
    {
      title: 'API Integration Guide',
      description: 'Connectez vos applications existantes à nos APIs RESTful avec authentification OAuth2 et webhooks.',
      level: 'Intermediate',
      duration: '12 min read',
      category: 'integrations',
      icon: Code
    },
    {
      title: 'Migration vers Giteria Enterprise',
      description: 'Guide étape par étape pour migrer vos projets depuis GitLab/GitHub vers Giteria Enterprise.',
      level: 'Beginner',
      duration: '8 min read',
      category: 'getting-started',
      icon: Database
    }
  ];

  const allGuides = [
    {
      title: 'Configuration SSO avec SAML 2.0',
      description: 'Intégration de votre fournisseur d\'identité existant',
      type: 'Guide',
      level: 'Intermediate',
      duration: '10 min',
      category: 'integrations'
    },
    {
      title: 'Optimisation des performances',
      description: 'Améliorez les temps de réponse de vos applications',
      type: 'Tutoriel',
      level: 'Advanced',
      duration: '18 min',
      category: 'best-practices'
    },
    {
      title: 'Backup et Recovery',
      description: 'Stratégies de sauvegarde pour vos données critiques',
      type: 'Guide',
      level: 'Beginner',
      duration: '6 min',
      category: 'troubleshooting'
    },
    {
      title: 'Monitoring avec Prometheus',
      description: 'Surveillez vos infrastructures avec nos intégrations',
      type: 'Vidéo',
      level: 'Intermediate',
      duration: '22 min',
      category: 'integrations'
    },
    {
      title: 'Premiers pas avec Aether Office',
      description: 'Installation initiale et configuration de base',
      type: 'Guide',
      level: 'Beginner',
      duration: '5 min',
      category: 'getting-started'
    },
    {
      title: 'Gestion des accès et permissions',
      description: 'Contrôle d\'accès granulaire pour vos équipes',
      type: 'Tutoriel',
      level: 'Intermediate',
      duration: '14 min',
      category: 'best-practices'
    }
  ];

  const videoTutorials = [
    {
      title: 'Demo : Aether Office 2.0',
      description: 'Découvrez les nouvelles fonctionnalités',
      duration: '3:45',
      thumbnail: 'demo-aether-office'
    },
    {
      title: 'Tutoriel : Giteria Platform',
      description: 'Collaboration de code enterprise',
      duration: '8:12',
      thumbnail: 'tutorial-giteria'
    },
    {
      title: 'Webinar : Sécurité Zero-Trust',
      description: 'Architecture et implémentation',
      duration: '45:30',
      thumbnail: 'webinar-security'
    },
    {
      title: 'Formation : API Development',
      description: 'Créer des APIs avec nos SDKs',
      duration: '12:20',
      thumbnail: 'formation-api'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Guide': return BookOpen;
      case 'Tutoriel': return PlayCircle;
      case 'Vidéo': return PlayCircle;
      case 'PDF': return Download;
      default: return BookOpen;
    }
  };

  const filteredGuides = allGuides.filter(guide => {
    const categoryMatch = selectedCategory === 'all' || guide.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || guide.level === selectedLevel;
    const typeMatch = selectedType === 'all' || guide.type === selectedType;
    return categoryMatch && levelMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Tech grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            {/* Enterprise badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-12 hover:border-white/20 transition-all duration-300">
              <BookOpen className="w-4 h-4 mr-3" />
              Centre de ressources
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Guides &
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Tutorials
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Explorez nos ressources, tutoriels détaillés et meilleures pratiques.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center items-center px-4">
              <button 
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                Voir les guides
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section id="categories" className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Explorez par catégorie
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Des ressources organisées pour trouver rapidement ce dont vous avez besoin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              const colorClasses = {
                blue: 'bg-blue-500/20 text-blue-400',
                green: 'bg-green-500/20 text-green-400',
                purple: 'bg-purple-500/20 text-purple-400',
                orange: 'bg-orange-500/20 text-orange-400',
                red: 'bg-red-500/20 text-red-400',
                cyan: 'bg-cyan-500/20 text-cyan-400'
              };

              return (
                <div 
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 text-center cursor-pointer group"
                >
                  <div className={`w-16 h-16 ${colorClasses[category.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">{category.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED GUIDES SECTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Guides mis en avant
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Les ressources les plus populaires et recommandées par notre équipe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredGuides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      {guide.badge && (
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                          {guide.badge}
                        </span>
                      )}
                      <span className={`px-3 py-1 text-xs rounded-full ${getLevelColor(guide.level)}`}>
                        {guide.level}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{guide.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{guide.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {guide.duration}
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                      Lire le guide
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPLETE LIBRARY SECTION */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Bibliothèque complète
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Explorez tous nos guides et tutoriels avec des filtres avancés.
            </p>
          </div>

          {/* Filters */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Catégorie</label>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                  >
                    <option value="all">Toutes les catégories</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Niveau</label>
                  <select 
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                  >
                    <option value="all">Tous les niveaux</option>
                    <option value="Beginner">Débutant</option>
                    <option value="Intermediate">Intermédiaire</option>
                    <option value="Advanced">Avancé</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Type</label>
                  <select 
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                  >
                    <option value="all">Tous les types</option>
                    <option value="Guide">Guide</option>
                    <option value="Tutoriel">Tutoriel</option>
                    <option value="Vidéo">Vidéo</option>
                    <option value="PDF">PDF</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredGuides.map((guide, index) => {
              const Icon = getTypeIcon(guide.type);
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${getLevelColor(guide.level)}`}>
                      {guide.level}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{guide.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{guide.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{guide.duration}</span>
                    <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
                      Lire →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIDEO TUTORIALS SECTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Vidéos Tutorials
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Apprenez visuellement avec nos tutoriels vidéo et webinaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {videoTutorials.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  {/* Thumbnail placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center relative">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-8 h-8 text-white" />
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs">
                      {video.duration}
                    </span>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HELP SECTION */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Besoin d&apos;aide ?</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Vous ne trouvez pas le guide dont vous avez besoin ? Notre équipe peut vous accompagner 
                pour répondre à vos questions spécifiques et vous guider dans vos projets.
              </p>
              
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center">
                Contacter le support
                <ArrowRight className="w-5 h-5 ml-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à maîtriser nos solutions ?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Explorez notre bibliothèque complète de guides et devenez expert dans l&apos;utilisation 
              de nos technologies enterprise.
            </p>
            
            <button
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center text-lg"
            >
              Explorer tous les guides
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}