'use client';

import Link from 'next/link';
import { Building, Mail, Shield, BarChart3, Link2, Cloud, CheckCircle, ArrowRight, Users, TrendingUp, Award, Globe, Lock, Zap, Lightbulb, ChevronDown, Star } from 'lucide-react';

export default function HomePage() {

  // Ecosystem Products Data
  const ecosystemProducts = [
    {
      name: 'Aether Office',
      description: 'Suite collaborative complète pour la productivité d\'entreprise',
      icon: <Building className="w-8 h-8" />,
      features: ['Documents', 'Calendar', 'Tasks', 'Communication'],
      href: '/aether-office',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Aether Mail',
      description: 'Email sécurisé et respectueux de la vie privée',
      icon: <Mail className="w-8 h-8" />,
      features: ['Chiffrement bout-en-bout', 'Anti-spam intelligent', 'Calendrier intégré'],
      href: '/aether-mail',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Governance',
      description: 'Outils de gouvernance et conformité réglementaire',
      icon: <Shield className="w-8 h-8" />,
      features: ['Audit trails', 'Compliance GDPR', 'Risk management'],
      href: '/governance',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Analytics',
      description: 'Business intelligence et analyses de données',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Tableaux de bord', 'Rapports personnalisés', 'ML insights'],
      href: '/analytics',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'API Platform',
      description: 'Infrastructure API pour l\'écosystème européen',
      icon: <Link2 className="w-8 h-8" />,
      features: ['REST & GraphQL', 'Documentation interactive', 'Sandbox'],
      href: '/api-platform',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Cloud Storage',
      description: 'Stockage cloud souverain et sécurisé',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Hébergement UE', 'Chiffrement AES-256', 'Sync multi-appareils'],
      href: '/cloud-storage',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  // Core Values
  const coreValues = [
    {
      title: 'Souveraineté Européenne',
      description: 'Données hébergées exclusivement en Union Européenne, conformes aux réglementations locales.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Sécurité Maximale',
      description: 'Chiffrement de bout en bout et audits de sécurité réguliers pour protéger vos données.',
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: 'Performance Optimale',
      description: 'Infrastructure haute disponibilité avec temps de réponse < 100ms en Europe.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Innovation Continue',
      description: 'R&D européenne avec investissement de 20% du chiffre d\'affaires dans l\'innovation.',
      icon: <Lightbulb className="w-8 h-8" />
    }
  ];

  // Partners & Testimonials
  const partners = [
    { name: 'European Commission', logo: '🏛️' },
    { name: 'Bundesverband', logo: '🇩🇪' },
    { name: 'La French Tech', logo: '🇫🇷' },
    { name: 'Tech Belgium', logo: '🇧🇪' },
    { name: 'Startup Europe', logo: '🚀' }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'CTO, Gouvernement Français',
      content: 'Sky Genesis nous a permis de retrouver notre souveraineté numérique tout en gardant une productivité exceptionnelle.',
      avatar: '👩‍💼'
    },
    {
      name: 'Hans Mueller',
      role: 'CEO, Industrie 4.0',
      content: 'L\'écosystème Aether Office a transformé notre collaboration. Vraiment l\'alternative européenne qu\'il nous fallait.',
      avatar: '👨‍💼'
    },
    {
      name: 'Elena Rossi',
      role: 'Directrice Innovation, Milano Tech',
      content: 'La plateforme API est robuste et la documentation est excellente. Migration réussie en 3 semaines seulement.',
      avatar: '👩‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[var(--gradient-surface)]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--accent)]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-[var(--surface)]/80 backdrop-blur-sm border border-[var(--border)] rounded-full text-sm text-[var(--text-secondary)] mb-8 hover:border-[var(--accent)] transition-all duration-300">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
              Écosystème Souverain Européen
              <ChevronDown className="w-4 h-4 ml-2 animate-bounce" />
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold text-[var(--foreground)] mb-8 leading-tight text-center">
              L'Alternative Européenne
              <br />
              <span className="bg-[var(--gradient-accent)] bg-clip-text text-transparent">
                aux Géants Américains
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              Retrouvez votre souveraineté numérique avec un écosystème complet, 
              sécurisé et performant. Conçu en Europe, pour l&apos;Europe.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Link 
                href="/aether-office" 
                className="btn-primary text-lg px-10 py-5 group text-base"
              >
                Découvrir l'Écosystème
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/auth/register" 
                className="btn-secondary text-lg px-10 py-5 text-base"
              >
                Commencer Gratuitement
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-[var(--surface)]/50 backdrop-blur-sm rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300">
                <div className="text-4xl font-bold text-[var(--foreground)] mb-2">99.9%</div>
                <div className="text-sm text-[var(--text-secondary)]">Uptime</div>
              </div>
              <div className="text-center p-6 bg-[var(--surface)]/50 backdrop-blur-sm rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300">
                <div className="text-4xl font-bold text-[var(--foreground)] mb-2">&lt;100ms</div>
                <div className="text-sm text-[var(--text-secondary)]">Latence UE</div>
              </div>
              <div className="text-center p-6 bg-[var(--surface)]/50 backdrop-blur-sm rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300">
                <div className="text-4xl font-bold text-[var(--foreground)] mb-2">100%</div>
                <div className="text-sm text-[var(--text-secondary)]">UE Hosting</div>
              </div>
              <div className="text-center p-6 bg-[var(--surface)]/50 backdrop-blur-sm rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300">
                <div className="text-4xl font-bold text-[var(--foreground)] mb-2">GDPR</div>
                <div className="text-sm text-[var(--text-secondary)]">Compliant</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[var(--text-secondary)]" />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
              Un Écosystème Complet
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Tous les outils dont votre entreprise a besoin, unifiés dans une plateforme 
              souveraine et sécurisée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemProducts.map((product, index) => (
              <div 
                key={product.name}
                className="card group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {product.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-lg">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[var(--text-secondary)]">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link 
                  href={product.href}
                  className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accent-hover)] font-semibold transition-colors group text-lg"
                >
                  En savoir plus
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-8">
              Nos Valeurs Européennes
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed">
              Plus qu&apos;une alternative technologique, un engagement pour la souveraineté 
              et l&apos;innovation européenne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={value.title}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-24 h-24 bg-[var(--background)] border-2 border-[var(--border)] rounded-2xl flex items-center justify-center text-[var(--accent)] mx-auto mb-8 group-hover:border-[var(--accent)] group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
              Approuvé par les Leaders Européens
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Des institutions et entreprises qui font confiance à notre écosystème 
              pour leurs opérations critiques.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-24">
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className="card p-8 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{partner.logo}</div>
                  <div className="text-sm font-semibold text-[var(--foreground)]">{partner.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="card animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-8">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-[var(--foreground)] text-lg">{testimonial.name}</div>
                    <div className="text-sm text-[var(--text-secondary)]">{testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="text-[var(--text-secondary)] italic leading-relaxed text-lg">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[var(--gradient-surface)] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[var(--accent)]/5 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-[var(--foreground)] mb-8">
              Rejoignez la Révolution
              <br />
              <span className="bg-[var(--gradient-accent)] bg-clip-text text-transparent">
                Numérique Européenne
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-16 max-w-3xl mx-auto leading-relaxed">
              Des milliers d&apos;entreprises ont déjà fait le choix de la souveraineté. 
              Quand commencerez-vous votre transition ?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Link 
                href="/auth/register" 
                className="btn-primary text-lg px-12 py-5 group text-base"
              >
                Commencer Gratuitement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="btn-secondary text-lg px-12 py-5 text-base"
              >
                Contacter nos Experts
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-[var(--surface)]/50 backdrop-blur-sm rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300">
                <div className="text-3xl font-bold text-[var(--foreground)] mb-2">15,000+</div>
                <div className="text-sm text-[var(--text-secondary)]">Entreprises Européennes</div>
              </div>
              <div className="text-center p-8 bg-[var(--surface)]/50 backdrop-blur-sm rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300">
                <div className="text-3xl font-bold text-[var(--foreground)] mb-2">2M+</div>
                <div className="text-sm text-[var(--text-secondary)]">Utilisateurs Actifs</div>
              </div>
              <div className="text-center p-8 bg-[var(--surface)]/50 backdrop-blur-sm rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300">
                <div className="text-3xl font-bold text-[var(--foreground)] mb-2">4.9/5</div>
                <div className="text-sm text-[var(--text-secondary)]">Satisfaction Client</div>
              </div>
              <div className="text-center p-8 bg-[var(--surface)]/50 backdrop-blur-sm rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300">
                <div className="text-3xl font-bold text-[var(--foreground)] mb-2">24/7</div>
                <div className="text-sm text-[var(--text-secondary)]">Support Européen</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}