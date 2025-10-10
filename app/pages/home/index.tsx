export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--accent)]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl w-full text-center">
        {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-[var(--foreground)]">
          Construire les fondations<br/>
          <span className="text-[var(--text-secondary)]">technologiques</span>
        </h1>

        {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          d'une civilisation interconnectée
        </p>

        {/* Description */}
          <p className="text-lg md:text-xl text-[var(--text-tertiary)] mb-16 max-w-3xl mx-auto leading-relaxed">
          Sky Genesis Enterprise est une fédération mondiale d'innovation, d'infrastructure et de recherche,
          agissant comme un État fédéral privé pour le progrès technologique souverain.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 w-full">
          <a
            href="/about"
            className="btn-primary group"
          >
            Découvrir le Groupe
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/products"
            className="btn-secondary"
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
    <section className="py-24 bg-[var(--surface)]">
      <div className="container mx-auto px-4 max-w-7xl w-full">
        <div className="max-w-4xl mx-auto mb-16 w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--foreground)]">À propos de Sky Genesis Enterprise</h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
            Née de la convergence entre innovation technologique et gouvernance institutionnelle,
            Sky Genesis Enterprise représente la première fédération technologique mondiale.
            Nous unissons les forces de la recherche, de l'industrie et de la diplomatie numérique
            pour construire les infrastructures critiques de demain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
          <div className="card p-8 w-full text-center">
            <div className="w-16 h-16 bg-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Innovation</h3>
            <p className="text-[var(--text-secondary)]">
              Recherche de pointe et développement technologique souverain,
              libéré des contraintes des monopoles traditionnels.
            </p>
          </div>

          <div className="card p-8 w-full text-center">
            <div className="w-16 h-16 bg-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🏗️</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Infrastructure</h3>
            <p className="text-[var(--text-secondary)]">
              Construction et gestion des réseaux critiques mondiaux,
              garantissant connectivité et souveraineté numérique.
            </p>
          </div>

          <div className="card p-8 w-full text-center">
            <div className="w-16 h-16 bg-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">⚖️</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Gouvernance</h3>
            <p className="text-[var(--text-secondary)]">
              Modèle fédéral assurant la régulation éthique et démocratique
              des technologies d'intérêt général.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductsSection() {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="container mx-auto px-4 max-w-7xl w-full text-center">
        <div className="mb-16 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--foreground)]">Nos Technologies Phares</h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Découvrez notre écosystème technologique complet, conçu pour l'échelle mondiale
            et la souveraineté numérique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-6xl mx-auto w-full">
          <div className="card p-6 w-full text-center">
            <div className="w-12 h-12 bg-[var(--accent)] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold">API</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">API Platform</h3>
            <p className="text-[var(--text-secondary)] text-sm">Interfaces unifiées pour l'intégration souveraine</p>
          </div>

          <div className="card p-6 w-full text-center">
            <div className="w-12 h-12 bg-[var(--accent)] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold">SDK</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">Developer Kits</h3>
            <p className="text-[var(--text-secondary)] text-sm">Outils de développement pour l'innovation accélérée</p>
          </div>

          <div className="card p-6 w-full text-center">
            <div className="w-12 h-12 bg-[var(--accent)] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold">☁️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">Zenth Cloud</h3>
            <p className="text-[var(--text-secondary)] text-sm">Infrastructure cloud souveraine et distribuée</p>
          </div>

          <div className="card p-6 text-center w-full">
            <div className="w-12 h-12 bg-[var(--accent)] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold">📡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)] text-center">GINPA Protocol</h3>
            <p className="text-[var(--text-secondary)] text-sm text-center">Protocoles de télécommunication de nouvelle génération</p>
          </div>
        </div>

        <div className="text-center w-full">
          <a href="/products" className="btn-secondary">
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
    <section className="py-24 bg-[var(--background)]">
      <div className="container mx-auto px-4 max-w-7xl w-full text-center">
        <div className="max-w-4xl mx-auto text-center mb-16 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--foreground)] text-center">Modèle Fédéral & Gouvernance</h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto text-center">
            Sky Genesis Enterprise fonctionne selon un modèle constitutionnel fédéral,
            garantissant la souveraineté technologique tout en assurant la collaboration internationale.
            Notre gouvernance repose sur des principes démocratiques et transparents.
          </p>
        </div>

        {/* Federal Structure Visualization */}
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-3 gap-8 mb-12 w-full">
            <div className="card text-center p-6 w-full">
              <div className="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)] text-center">Assemblée Fédérale</h3>
              <p className="text-[var(--text-secondary)] text-sm text-center">Gouvernance démocratique des décisions stratégiques</p>
            </div>

            <div className="card text-center p-6 w-full">
              <div className="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)] text-center">Constitution Numérique</h3>
              <p className="text-[var(--text-secondary)] text-sm text-center">Cadre juridique pour la souveraineté technologique</p>
            </div>

            <div className="card text-center p-6 w-full">
              <div className="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)] text-center">Diplomatie Internationale</h3>
              <p className="text-[var(--text-secondary)] text-sm text-center">Relations avec les États et organisations globales</p>
            </div>
          </div>

          <div className="text-center w-full">
            <a href="/governance" className="btn-primary">
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
    <section className="py-24 bg-[var(--surface)]">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--foreground)]">Nos Secteurs d'Activité</h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Notre présence s'étend aux industries critiques de l'échelle mondiale,
            apportant innovation et souveraineté à chaque secteur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto w-full">
          {[
            { name: 'Aerospace & Defense', icon: '🚀', desc: 'Technologies spatiales et systèmes de défense souverains' },
            { name: 'Telecom & Cloud', icon: '📡', desc: 'Infrastructures de communication et cloud computing' },
            { name: 'Agriculture & Biotech', icon: '🌱', desc: 'Solutions agricoles intelligentes et biotechnologies' },
            { name: 'Energy & Sustainability', icon: '⚡', desc: 'Énergies renouvelables et gestion durable' },
            { name: 'Finance & Technology', icon: '💰', desc: 'Services financiers et technologies blockchain' },
            { name: 'Healthcare & Research', icon: '🏥', desc: 'Médecine personnalisée et recherche médicale' }
          ].map((industry, index) => (
            <div key={index} className="card p-6 text-center w-full">
              <div className="text-3xl mb-4 text-center">{industry.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)] text-center">{industry.name}</h3>
              <p className="text-[var(--text-secondary)] text-sm text-center">{industry.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center w-full">
          <a href="/industries" className="btn-secondary">
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
    <section className="py-24 bg-[var(--background)]">
      <div className="container mx-auto px-4 max-w-7xl w-full text-center">
        <div className="text-center mb-16 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--foreground)] text-center">Actualités & Ressources</h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto text-center">
            Restez informés des dernières avancées technologiques et des annonces institutionnelles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto w-full">
          <article className="card p-6 w-full">
            <div className="text-sm text-[var(--accent)] font-medium mb-2 uppercase tracking-wide text-center">TECHNOLOGIE</div>
            <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)] text-center">Lancement de Zenth Cloud v2.0</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4 text-center">Nouvelle architecture souveraine avec support multi-régions.</p>
            <div className="text-sm text-[var(--text-tertiary)] text-center">15 Oct 2025</div>
          </article>

          <article className="card p-6 w-full">
            <div className="text-sm text-[var(--accent)] font-medium mb-2 uppercase tracking-wide text-center">GOUVERNANCE</div>
            <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)] text-center">Assemblée Fédérale 2025</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4 text-center">Vote sur les nouvelles normes de souveraineté numérique.</p>
            <div className="text-sm text-[var(--text-tertiary)] text-center">12 Oct 2025</div>
          </article>

          <article className="card p-6 w-full">
            <div className="text-sm text-[var(--text-secondary)] font-medium mb-2 uppercase tracking-wide text-center">RECHERCHE</div>
            <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)] text-center">Avancées en IA Quantique</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4 text-center">Nouveaux algorithmes pour l'optimisation énergétique.</p>
            <div className="text-sm text-[var(--text-tertiary)] text-center">10 Oct 2025</div>
          </article>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto w-full">
          <a href="/blog" className="btn-primary">
            Voir tous les articles
          </a>
          <a href="/resources" className="btn-secondary">
            Portail Développeur
          </a>
        </div>
      </div>
    </section>
  );
}

export function VisionSection() {
  return (
    <section className="py-24 bg-[var(--surface)]">
      <div className="container mx-auto px-4 text-center max-w-7xl w-full">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--foreground)] text-center">Notre Vision</h2>
          <blockquote className="text-xl md:text-2xl leading-relaxed mb-12 italic text-[var(--text-secondary)] font-light max-w-3xl mx-auto text-center">
            &ldquo;Nous croyons en une innovation éthique, ouverte et souveraine.
            Sky Genesis Enterprise œuvre à bâtir des technologies universelles qui respectent les peuples,
            les données et les générations futures.&rdquo;
          </blockquote>
          <div className="text-lg text-[var(--text-tertiary)] text-center">
            — Conseil Fédéral de Sky Genesis Enterprise
          </div>
        </div>
      </div>
    </section>
  );
}
