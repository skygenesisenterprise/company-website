export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-600/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
            Construire les fondations<br/>technologiques
          </span>
          <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700 bg-clip-text text-transparent">
            d&apos;une civilisation interconnectée
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Sky Genesis Enterprise est une fédération mondiale d&apos;innovation, d&apos;infrastructure et de recherche,
          agissant comme un État fédéral privé pour le progrès technologique souverain.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <a
            href="/about"
            className="group bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Découvrir le Groupe
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="/products"
            className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
          >
            Explorer nos Technologies
          </a>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">À propos de Sky Genesis Enterprise</h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Née de la convergence entre innovation technologique et gouvernance institutionnelle,
            Sky Genesis Enterprise représente la première fédération technologique mondiale.
            Nous unissons les forces de la recherche, de l&apos;industrie et de la diplomatie numérique
            pour construire les infrastructures critiques de demain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Innovation</h3>
            <p className="text-slate-300">
              Recherche de pointe et développement technologique souverain,
              libéré des contraintes des monopoles traditionnels.
            </p>
          </div>

          <div className="text-center p-8 bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🏗️</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Infrastructure</h3>
            <p className="text-slate-300">
              Construction et gestion des réseaux critiques mondiaux,
              garantissant connectivité et souveraineté numérique.
            </p>
          </div>

          <div className="text-center p-8 bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600">
            <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">⚖️</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Gouvernance</h3>
            <p className="text-slate-300">
              Modèle fédéral assurant la régulation éthique et démocratique
              des technologies d&apos;intérêt général.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductsSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Nos Technologies Phares</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Découvrez notre écosystème technologique complet, conçu pour l&apos;échelle mondiale
            et la souveraineté numérique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="group p-6 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl border border-slate-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">API</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">API Platform</h3>
            <p className="text-slate-300 text-sm">Interfaces unifiées pour l&apos;intégration souveraine</p>
          </div>

          <div className="group p-6 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl border border-slate-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">SDK</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Developer Kits</h3>
            <p className="text-slate-300 text-sm">Outils de développement pour l&apos;innovation accélérée</p>
          </div>

          <div className="group p-6 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl border border-slate-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-slate-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">☁️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Zenth Cloud</h3>
            <p className="text-slate-300 text-sm">Infrastructure cloud souveraine et distribuée</p>
          </div>

          <div className="group p-6 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl border border-slate-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">📡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">GINPA Protocol</h3>
            <p className="text-slate-300 text-sm">Protocoles de télécommunication de nouvelle génération</p>
          </div>
        </div>

        <div className="text-center">
          <a href="/products" className="inline-flex items-center bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
            Voir tous les produits
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function GovernanceSection() {
  return (
    <section className="py-24 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Modèle Fédéral & Gouvernance</h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Sky Genesis Enterprise fonctionne selon un modèle constitutionnel fédéral,
            garantissant la souveraineté technologique tout en assurant la collaboration internationale.
            Notre gouvernance repose sur des principes démocratiques et transparents.
          </p>
        </div>

        {/* Federal Structure Visualization */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-slate-700 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Assemblée Fédérale</h3>
              <p className="text-slate-300 text-sm">Gouvernance démocratique des décisions stratégiques</p>
            </div>

            <div className="text-center p-6 bg-slate-700 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Constitution Numérique</h3>
              <p className="text-slate-300 text-sm">Cadre juridique pour la souveraineté technologique</p>
            </div>

            <div className="text-center p-6 bg-slate-700 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Diplomatie Internationale</h3>
              <p className="text-slate-300 text-sm">Relations avec les États et organisations globales</p>
            </div>
          </div>

          <div className="text-center">
            <a href="/governance" className="inline-flex items-center bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
              Explorer la Gouvernance
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Nos Secteurs d&apos;Activité</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Notre présence s&apos;étend aux industries critiques de l&apos;économie mondiale,
            apportant innovation et souveraineté à chaque secteur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { name: 'Aerospace & Defense', icon: '🚀', desc: 'Technologies spatiales et systèmes de défense souverains' },
            { name: 'Telecom & Cloud', icon: '📡', desc: 'Infrastructures de communication et cloud computing' },
            { name: 'Agriculture & Biotech', icon: '🌱', desc: 'Solutions agricoles intelligentes et biotechnologies' },
            { name: 'Energy & Sustainability', icon: '⚡', desc: 'Énergies renouvelables et gestion durable' },
            { name: 'Finance & Technology', icon: '💰', desc: 'Services financiers et technologies blockchain' },
            { name: 'Healthcare & Research', icon: '🏥', desc: 'Médecine personnalisée et recherche médicale' }
          ].map((industry, index) => (
            <div key={index} className="p-6 bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-700">
              <div className="text-3xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{industry.name}</h3>
              <p className="text-slate-300 text-sm">{industry.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/industries" className="inline-flex items-center bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
            Découvrir nos secteurs
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function BlogSection() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Actualités & Ressources</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Restez informés des dernières avancées technologiques et des annonces institutionnelles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <article className="bg-slate-700 rounded-xl p-6 border border-slate-600">
            <div className="text-sm text-cyan-400 font-medium mb-2">TECHNOLOGIE</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Lancement de Zenth Cloud v2.0</h3>
            <p className="text-slate-300 text-sm mb-4">Nouvelle architecture souveraine avec support multi-régions.</p>
            <div className="text-sm text-slate-400">15 Oct 2025</div>
          </article>

          <article className="bg-slate-700 rounded-xl p-6 border border-slate-600">
            <div className="text-sm text-blue-400 font-medium mb-2">GOUVERNANCE</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Assemblée Fédérale 2025</h3>
            <p className="text-slate-300 text-sm mb-4">Vote sur les nouvelles normes de souveraineté numérique.</p>
            <div className="text-sm text-slate-400">12 Oct 2025</div>
          </article>

          <article className="bg-slate-700 rounded-xl p-6 border border-slate-600">
            <div className="text-sm text-slate-400 font-medium mb-2">RECHERCHE</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Avancées en IA Quantique</h3>
            <p className="text-slate-300 text-sm mb-4">Nouveaux algorithmes pour l&apos;optimisation énergétique.</p>
            <div className="text-sm text-slate-400">10 Oct 2025</div>
          </article>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/blog" className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors">
            Voir tous les articles
          </a>
          <a href="/resources" className="border border-slate-500 text-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
            Portail Développeur
          </a>
        </div>
      </div>
    </section>
  );
}

export function VisionSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Notre Vision</h2>
          <blockquote className="text-xl md:text-2xl leading-relaxed mb-12 italic">
            &ldquo;Nous croyons en une innovation éthique, ouverte et souveraine.
            Sky Genesis Enterprise œuvre à bâtir des technologies universelles qui respectent les peuples,
            les données et les générations futures.&rdquo;
          </blockquote>
          <div className="text-lg text-slate-300">
            — Conseil Fédéral de Sky Genesis Enterprise
          </div>
        </div>
      </div>
    </section>
  );
}