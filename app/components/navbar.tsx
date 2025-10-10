'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [language, setLanguage] = useState('FR');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

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

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const menuItems = [
    { name: 'Products', href: '/products', hasMega: true },
    { name: 'Governance', href: '/governance' },
    { name: 'Industries', href: '/industries', hasMega: true },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
  ];

  const productsMega = [
    { title: 'API Platform', desc: 'Powerful APIs for integration', icon: '🔗' },
    { title: 'SDK Tools', desc: 'Developer kits for rapid deployment', icon: '🛠️' },
    { title: 'Cloud Services', desc: 'Scalable cloud infrastructure', icon: '☁️' },
    { title: 'Telecom Solutions', desc: 'Advanced telecom technologies', icon: '📡' },
  ];

  const industriesMega = [
    { title: 'Federal Ministries', desc: 'Governmental operations', icon: '🏛️' },
    { title: 'Tech Subsidiaries', desc: 'Innovation hubs', icon: '🏢' },
    { title: 'Global Operations', desc: 'International presence', icon: '🌍' },
    { title: 'Research Labs', desc: 'Cutting-edge R&D', icon: '🔬' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-slate-900 dark:text-white font-sans">
              Sky Genesis Enterprise
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center relative">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition font-medium"
                  onMouseEnter={() => item.hasMega && setMegaMenuOpen(item.name)}
                  onMouseLeave={() => setMegaMenuOpen(null)}
                >
                  {item.name}
                </Link>
                {item.hasMega && megaMenuOpen === item.name && (
                  <div
                    className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-slate-800 shadow-xl rounded-lg p-6 border border-slate-200 dark:border-slate-700"
                    onMouseEnter={() => setMegaMenuOpen(item.name)}
                    onMouseLeave={() => setMegaMenuOpen(null)}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {(item.name === 'Products' ? productsMega : industriesMega).map((sub) => (
                        <Link key={sub.title} href={`${item.href}/${sub.title.toLowerCase().replace(/\s+/g, '-')}`} className="block p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition">
                          <div className="text-2xl mb-2">{sub.icon}</div>
                          <h3 className="font-semibold text-slate-900 dark:text-white">{sub.title}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{sub.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden lg:flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sm">Search</span>
              <kbd className="text-xs bg-slate-200 dark:bg-slate-700 px-1 rounded">⌘K</kbd>
            </button>

            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-slate-700 dark:text-slate-300 border-none focus:outline-none"
            >
              <option value="FR">FR</option>
              <option value="EN">EN</option>
              <option value="DE">DE</option>
              <option value="NL">NL</option>
            </select>

            {/* CTA */}
            <Link href="/developer-portal" className="hidden lg:block bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition text-sm font-medium">
              Portail Développeur
            </Link>

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition">
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                <Link href={item.href} className="block py-2 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition font-medium">
                  {item.name}
                </Link>
                {item.hasMega && (
                  <div className="ml-4 space-y-1">
                    {(item.name === 'Products' ? productsMega : industriesMega).map((sub) => (
                      <Link key={sub.title} href={`${item.href}/${sub.title.toLowerCase().replace(/\s+/g, '-')}`} className="block py-1 text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition">
                        {sub.icon} {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/developer-portal" className="block bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition text-sm font-medium mt-4">
              Portail Développeur
            </Link>
          </div>
        )}

        {/* Search Modal */}
        {searchOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setSearchOpen(false)}>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
              <input
                type="text"
                placeholder="Search docs, API, articles..."
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-transparent"
                autoFocus
              />
              <button onClick={() => setSearchOpen(false)} className="mt-4 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
                Close (Esc)
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}