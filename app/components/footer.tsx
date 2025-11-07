'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Github, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Ecosystem Products & Modules
  const ecosystemProducts = [
    { name: 'Aether Office', href: '/aether-office', description: 'Suite de productivité collaborative' },
    { name: 'Aether Documents', href: '/aether-office/documents', description: 'Gestion documentaire' },
    { name: 'Aether Calendar', href: '/aether-office/calendar', description: 'Planification et agendas' },
    { name: 'Aether Tasks', href: '/aether-office/tasks', description: 'Gestion de projet' },
    { name: 'Governance', href: '/governance', description: 'Outils de gouvernance' },
    { name: 'API Platform', href: '/api-platform', description: 'Plateforme de développement' },
  ];

  // Resources
  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api/docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Community', href: '/community' },
    { name: 'Support', href: '/support' },
  ];

  // Company Information
  const companyInfo = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Press', href: '/press' },
    { name: 'Contact', href: '/contact' },
  ];

  // Legal Information
  const legalInfo = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Legal Notice', href: '/legal' },
  ];

  // Social Media Links
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/skygenesisenterprise', icon: <Linkedin className="w-4 h-4" /> },
    { name: 'Twitter', href: 'https://twitter.com/skygenesis', icon: <Twitter className="w-4 h-4" /> },
    { name: 'GitHub', href: 'https://github.com/skygenesisenterprise', icon: <Github className="w-4 h-4" /> },
    { name: 'YouTube', href: 'https://youtube.com/@skygenesisenterprise', icon: <Youtube className="w-4 h-4" /> },
  ];

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] mt-auto">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                  Sky Genesis Enterprise
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Building the future of enterprise collaboration with innovative digital solutions.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[var(--background)] border border-[var(--border)] rounded-full flex items-center justify-center text-sm hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)] transition-all duration-200 group"
                    aria-label={social.name}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Ecosystem Products */}
            <div>
              <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
                Products
              </h4>
              <ul className="space-y-2">
                {ecosystemProducts.map((product) => (
                  <li key={product.name}>
                    <Link
                      href={product.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-200 group"
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform">
                        {product.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      href={resource.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-200 group"
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform">
                        {resource.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {companyInfo.map((info) => (
                  <li key={info.name}>
                    <Link
                      href={info.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-200 group"
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform">
                        {info.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                {legalInfo.map((legal) => (
                  <li key={legal.name}>
                    <Link
                      href={legal.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-200 group"
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform">
                        {legal.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="py-8 border-t border-[var(--border)]">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">
              Stay Updated
            </h4>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-sm focus:outline-none focus:border-[var(--accent)] text-[var(--foreground)]"
              />
              <button className="btn-primary text-sm px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-[var(--text-secondary)]">
              © {currentYear} Sky Genesis Enterprise. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm text-[var(--text-secondary)]">
              <span>Headquarters: Brussels, Belgium</span>
              <span>•</span>
              <span>VAT: BE 0123.456.789</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}