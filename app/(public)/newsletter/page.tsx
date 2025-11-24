'use client';

import { useState } from 'react';
import { ArrowRight, Mail, User, CheckCircle, Shield, Star, ChevronDown, ChevronUp } from 'lucide-react';

export default function NewsletterPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    preferences: {
      insights: true,
      analyses: true,
      guides: true,
      events: true
    }
  });
  
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Newsletter subscription:', formData);
  };

  const faqs = [
    {
      question: "À quelle fréquence recevrai-je la newsletter ?",
      answer: "Notre newsletter est envoyée une fois par mois, avec des éditions spéciales pour les annonces majeures."
    },
    {
      question: "Puis-je me désabonner à tout moment ?",
      answer: "Oui, chaque email contient un lien de désabonnement. Vous pouvez gérer vos préférences à tout moment."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. Nous respectons le RGPD et vos données ne sont jamais partagées avec des tiers."
    },
    {
      question: "Le contenu est-il adapté à mon secteur ?",
      answer: "Notre contenu s'adresse aux décideurs et équipes techniques d'entreprises européennes."
    },
    {
      question: "Y a-t-il un coût pour s'abonner ?",
      answer: "Non, notre newsletter est entièrement gratuite et sans engagement."
    }
  ];

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
              <Mail className="w-4 h-4 mr-3" />
              Newsletter
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Restez
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  informé.
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Recevez chaque mois nos insights, analyses et actualités.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center items-center px-4">
              <button 
                onClick={() => document.getElementById('newsletter-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                S'abonner à la newsletter
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION FORM SECTION */}
      <section id="newsletter-form" className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Inscription</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nom (optionnel)</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-4">Centres d'intérêt</label>
                  <div className="space-y-3">
                    {[
                      { key: 'insights', label: 'Actualités essentielles' },
                      { key: 'analyses', label: 'Analyses d\'experts' },
                      { key: 'guides', label: 'Guides exclusifs' },
                      { key: 'events', label: 'Invitations à des événements' }
                    ].map((item) => (
                      <label key={item.key} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.preferences[item.key as keyof typeof formData.preferences]}
                          onChange={(e) => setFormData({
                            ...formData,
                            preferences: {
                              ...formData.preferences,
                              [item.key]: e.target.checked
                            }
                          })}
                          className="w-4 h-4 bg-white/5 border border-white/10 rounded text-blue-400 focus:ring-blue-400 focus:ring-2"
                        />
                        <span className="ml-3 text-gray-300">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-400 text-center">
                  En vous inscrivant, vous acceptez notre politique de confidentialité. 
                  Vos données sont protégées conformément au RGPD.
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                  S'abonner maintenant
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SUBSCRIBE SECTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Pourquoi s'abonner ?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Accédez à des contenus exclusifs pour rester à la pointe de l'innovation enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Actualités essentielles</h3>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Tenez-vous informé des dernières tendances et innovations du marché enterprise.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Star className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Analyses d'experts</h3>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Bénéficiez d'analyses approfondies de nos experts sur les technologies enterprise.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Guides exclusifs</h3>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Recevez des guides pratiques et des études de cas pour vos projets enterprise.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <User className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Invitations événements</h3>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Accédez en priorité à nos webinaires et événements exclusifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIOUS EDITIONS SECTION */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Exemple d'éditions précédentes
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Découvrez le type de contenu que nous partageons chaque mois.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-sm text-blue-400 mb-3">Novembre 2024</div>
              <h3 className="text-xl font-bold mb-4">L'avenir de l'IA enterprise</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Stratégies d'implémentation IA dans les grandes entreprises</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Cas d'usage : Transformation digitale chez EuroCorp</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Analyse : ROI des projets IA sur 12 mois</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-sm text-green-400 mb-3">Octobre 2024</div>
              <h3 className="text-xl font-bold mb-4">Sécurité et conformité</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Nouvelles réglementations RGPD à connaître</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Architecture Zero-Trust : Guide pratique</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Interview : CSO de TechInnov Group</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-sm text-purple-400 mb-3">Septembre 2024</div>
              <h3 className="text-xl font-bold mb-4">Cloud hybride et scalabilité</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Optimisation des coûts cloud multi-vendeurs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Kubernetes enterprise : Bonnes pratiques 2024</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Étude : Migration de DataCenter de GlobalBank</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Rejoignez notre communauté
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Des milliers de professionnels font déjà confiance à notre expertise.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="text-5xl lg:text-6xl font-bold text-white">
                15,000+
              </div>
            </div>
            <p className="text-xl text-gray-400 mb-12">
              Abonnés actifs dans toute l'Europe
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  "La meilleure newsletter pour rester à jour sur les technologies enterprise. 
                  Contenu toujours pertinent et bien analysé."
                </p>
                <p className="text-sm text-gray-400">— Marie D., CTO Paris</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Des analyses pointues qui m'aident dans mes décisions stratégiques. 
                  Indispensable pour tout dirigeant tech."
                </p>
                <p className="text-sm text-gray-400">— Thomas L., CEO Berlin</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Les guides pratiques sont excellents. J'ai appliqué plusieurs recommandations 
                  avec des résultats mesurables."
                </p>
                <p className="text-sm text-gray-400">— Sophie M., CIO Amsterdam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY GUARANTEE SECTION */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Protection de vos données</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Nous nous engageons à protéger votre vie privée. Vos données personnelles 
                sont traitées conformément au RGPD et ne sont jamais partagées avec des tiers. 
                Vous conservez le contrôle total sur vos abonnements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-gray-300">100% RGPD compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-gray-300">Désabonnement en 1 clic</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-gray-300">Pas de spam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Questions fréquentes
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Tout ce que vous devez savoir sur notre newsletter.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à rester informé ?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Rejoignez des milliers de professionnels et recevez les meilleures analyses 
              sur les technologies enterprise directement dans votre boîte mail.
            </p>
            
            <button
              onClick={() => document.getElementById('newsletter-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center text-lg"
            >
              Rejoindre la newsletter
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}