'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Globe, User, LogIn, UserPlus, FileText, Calendar, CheckCircle, MessageSquare, BarChart3, Shield, Link2, RefreshCw, Wrench, Zap, Book, Beaker } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [language, setLanguage] = useState('FR');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Global navigation sections
  const globalSections = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];

  // Aether Office ecosystem modules
  const ecosystemModules = [
    { 
      name: 'Aether Office', 
      href: '/aether-office',
      hasMega: true,
      description: 'Suite de productivité collaborative'
    },
    { 
      name: 'Governance', 
      href: '/governance',
      description: 'Outils de gouvernance d\'entreprise'
    },
    { 
      name: 'API Platform', 
      href: '/api-platform',
      hasMega: true,
      description: 'Plateforme de développement'
    },
  ];

  // Resources and support
  const resourcesSections = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/support' },
  ];

  // Aether Office mega menu
  const aetherOfficeModules = [
    { title: 'Documents', desc: 'Gestion documentaire collaborative', icon: <FileText className="w-5 h-5" /> },
    { title: 'Calendar', desc: 'Planification et rendez-vous', icon: <Calendar className="w-5 h-5" /> },
    { title: 'Tasks', desc: 'Gestion de projet et tâches', icon: <CheckCircle className="w-5 h-5" /> },
    { title: 'Communication', desc: 'Messagerie et visioconférence', icon: <MessageSquare className="w-5 h-5" /> },
    { title: 'Analytics', desc: 'Tableaux de bord et rapports', icon: <BarChart3 className="w-5 h-5" /> },
    { title: 'Security', desc: 'Gestion des accès et permissions', icon: <Shield className="w-5 h-5" /> },
  ];

  // API Platform mega menu
  const apiPlatformModules = [
    { title: 'REST API', desc: 'API RESTful complètes', icon: <Link2 className="w-5 h-5" /> },
    { title: 'GraphQL', desc: 'API GraphQL flexibles', icon: <RefreshCw className="w-5 h-5" /> },
    { title: 'SDK Tools', desc: 'Kits de développement', icon: <Wrench className="w-5 h-5" /> },
    { title: 'Webhooks', desc: 'Intégrations temps réel', icon: <Zap className="w-5 h-5" /> },
    { title: 'Documentation', desc: 'Docs interactives', icon: <Book className="w-5 h-5" /> },
    { title: 'Sandbox', desc: 'Environnement de test', icon: <Beaker className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/90 backdrop-blur-lg border-b border-[var(--border)] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-[var(--gradient-accent)] bg-clip-text text-transparent font-sans">
              Sky Genesis Enterprise
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {/* Global Sections */}
            {globalSections.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Ecosystem Modules */}
            {ecosystemModules.map((module) => (
              <div key={module.name} className="relative">
                <Link
                  href={module.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition font-medium"
                  onMouseEnter={() => module.hasMega && setMegaMenuOpen(module.name)}
                  onMouseLeave={() => setMegaMenuOpen(null)}
                >
                  {module.name}
                </Link>
                {module.hasMega && megaMenuOpen === module.name && (
                  <div
                    className="absolute top-full left-0 mt-2 w-[600px] bg-[var(--background)] shadow-xl rounded-lg p-6 border border-[var(--border)]"
                    onMouseEnter={() => setMegaMenuOpen(module.name)}
                    onMouseLeave={() => setMegaMenuOpen(null)}
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
                        {module.name}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {module.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {(module.name === 'Aether Office' ? aetherOfficeModules : apiPlatformModules).map((sub) => (
                        <Link 
                          key={sub.title} 
                          href={`${module.href}/${sub.title.toLowerCase().replace(/\s+/g, '-')}`} 
                          className="block p-3 rounded-lg hover:bg-[var(--surface-hover)] transition group"
                        >
                          <div className="mb-2 group-hover:scale-110 transition-transform text-[var(--accent)]">
                            {sub.icon}
                          </div>
                          <h4 className="font-semibold text-[var(--foreground)] text-sm">
                            {sub.title}
                          </h4>
                          <p className="text-xs text-[var(--text-secondary)] mt-1">
                            {sub.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Resources */}
            <div className="relative group">
              <button className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition font-medium">
                Resources
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--background)] shadow-xl rounded-lg p-2 border border-[var(--border)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {resourcesSections.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden lg:flex items-center space-x-2 text-[var(--text-secondary)] hover:text-[var(--foreground)] transition"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm">Search</span>
              <kbd className="text-xs bg-[var(--surface)] px-1.5 py-0.5 rounded border border-[var(--border)]">
                ⌘K
              </kbd>
            </button>

            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-[var(--text-secondary)] border border-[var(--border)] rounded px-2 py-1 text-sm focus:outline-none focus:border-[var(--accent)]"
            >
              <option value="FR">FR</option>
              <option value="EN">EN</option>
              <option value="DE">DE</option>
              <option value="NL">NL</option>
            </select>

            {/* Login/Register Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link 
                href="/auth/login" 
                className="btn-secondary text-sm"
              >
                Login
              </Link>
              <Link 
                href="/auth/register" 
                className="btn-primary text-sm"
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[var(--foreground)] hover:text-[var(--accent)] focus:outline-none p-1"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-[var(--border)] mt-4 pt-4">
            {/* Global Sections */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                Navigation
              </h4>
              {globalSections.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="block py-2 text-[var(--foreground)] hover:text-[var(--accent)] transition font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Ecosystem Modules */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                Ecosystem
              </h4>
              {ecosystemModules.map((module) => (
                <div key={module.name}>
                  <Link 
                    href={module.href} 
                    className="block py-2 text-[var(--foreground)] hover:text-[var(--accent)] transition font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {module.name}
                  </Link>
                  <p className="text-xs text-[var(--text-secondary)] ml-4 mb-2">
                    {module.description}
                  </p>
                  {module.hasMega && (
                    <div className="ml-4 space-y-1">
                      {(module.name === 'Aether Office' ? aetherOfficeModules : apiPlatformModules).map((sub) => (
                        <Link 
                          key={sub.title} 
                          href={`${module.href}/${sub.title.toLowerCase().replace(/\s+/g, '-')}`} 
                          className="block py-1 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition"
                          onClick={() => setIsOpen(false)}
                         >
                           <span className="flex items-center space-x-2">
                             <span className="text-[var(--accent)]">{sub.icon}</span>
                             <span>{sub.title}</span>
                           </span>
                         </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Resources */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                Resources
              </h4>
              {resourcesSections.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-[var(--border)]">
              <Link 
                href="/auth/login" 
                className="btn-secondary text-sm text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/auth/register" 
                className="btn-primary text-sm text-center"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}

        {/* Search Modal */}
        {searchOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setSearchOpen(false)}>
            <div className="bg-[var(--background)] p-6 rounded-lg w-full max-w-md mx-4 border border-[var(--border)]" onClick={(e) => e.stopPropagation()}>
              <input
                type="text"
                placeholder="Search documentation, API, articles..."
                className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] text-[var(--foreground)]"
                autoFocus
              />
              <button onClick={() => setSearchOpen(false)} className="mt-4 text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition">
                Close (Esc)
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}