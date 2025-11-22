'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  FileText, 
  Shield, 
  Wrench, 
  Book, 
  Building,
  Users,
  Globe,
  Code
} from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  description?: string;
  hasDropdown?: boolean;
  icon?: React.ReactNode;
}

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle click outside dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Main navigation items
  const mainNavItems: NavItem[] = [
    { name: 'Home', href: '/home' },
    { 
      name: 'Aether Office', 
      href: '/office',
      description: 'SaaS ecosystem for modern workspace collaboration'
    },
    { 
      name: 'Governance', 
      href: '/governance',
      hasDropdown: true,
      description: 'Organizational structure and policies'
    },
    { 
      name: 'Company', 
      href: '/company',
      hasDropdown: true,
      description: 'About Sky Genesis Enterprise'
    },
    { name: 'Vision', href: '/vision' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { 
      name: 'Developer', 
      href: '/developer',
      hasDropdown: true,
      description: 'Developer resources and documentation'
    },
  ];

  // Governance dropdown items
  const governanceItems: DropdownItem[] = [
    { 
      title: 'Organizational Structure', 
      description: 'Corporate hierarchy and teams', 
      href: '/governance/structure',
      icon: <Building className="w-4 h-4" />
    },
    { 
      title: 'Policies & Procedures', 
      description: 'Company policies and guidelines', 
      href: '/governance/policies',
      icon: <FileText className="w-4 h-4" />
    },
    { 
      title: 'Compliance', 
      description: 'Regulatory compliance information', 
      href: '/governance/compliance',
      icon: <Shield className="w-4 h-4" />
    },
    { 
      title: 'Board of Directors', 
      description: 'Leadership and governance', 
      href: '/governance/board',
      icon: <Users className="w-4 h-4" />
    },
  ];

  // Company dropdown items
  const companyItems: DropdownItem[] = [
    { 
      title: 'About Us', 
      description: 'Our story and mission', 
      href: '/company/about',
      icon: <Building className="w-4 h-4" />
    },
    { 
      title: 'Leadership Team', 
      description: 'Meet our executives', 
      href: '/company/leadership',
      icon: <Users className="w-4 h-4" />
    },
    { 
      title: 'Subsidiaries', 
      description: 'Our portfolio companies', 
      href: '/company/subsidiaries',
      icon: <Globe className="w-4 h-4" />
    },
    { 
      title: 'Press & Media', 
      description: 'News and press releases', 
      href: '/company/press',
      icon: <FileText className="w-4 h-4" />
    },
  ];

  // Developer dropdown items
  const developerItems: DropdownItem[] = [
    { 
      title: 'Documentation', 
      description: 'API docs and guides', 
      href: '/developer/docs',
      icon: <Book className="w-4 h-4" />
    },
    { 
      title: 'API Portal', 
      description: 'REST & GraphQL APIs', 
      href: '/developer/api',
      icon: <Code className="w-4 h-4" />,
      badge: 'v2.0'
    },
    { 
      title: 'Open Source', 
      description: 'Our open source projects', 
      href: '/developer/open-source',
      icon: <Code className="w-4 h-4" />
    },
    { 
      title: 'SDK & Tools', 
      description: 'Development kits and tools', 
      href: '/developer/sdk',
      icon: <Wrench className="w-4 h-4" />
    },
  ];

  const getDropdownItems = (name: string): DropdownItem[] => {
    switch (name) {
      case 'Governance': return governanceItems;
      case 'Company': return companyItems;
      case 'Developer': return developerItems;
      default: return [];
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-sm' 
            : 'bg-black/80 backdrop-blur-lg border-b border-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="flex items-center">
              <Link 
                href="/home" 
                className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
                aria-label="Sky Genesis Enterprise homepage"
              >
                <span className="text-white">
                  Sky Genesis Enterprise
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  ref={(el) => { dropdownRefs.current[item.name] = el; }}
                >
                  {item.hasDropdown ? (
                     <button
                       className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-white ${
                         activeDropdown === item.name ? 'text-white' : 'text-gray-400'
                       }`}
                       onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                       aria-expanded={activeDropdown === item.name}
                       aria-haspopup="true"
                     >
                       <span>{item.name}</span>
                       <ChevronDown className={`w-4 h-4 transition-transform ${
                         activeDropdown === item.name ? 'rotate-180' : ''
                       }`} />
                     </button>
                  ) : (
                     <Link
                       href={item.href}
                       className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                     >
                       {item.name}
                     </Link>
                  )}

                   {/* Dropdown Menu */}
                   {item.hasDropdown && activeDropdown === item.name && (
                     <div className="absolute top-full left-0 mt-2 min-w-[280px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                       <div className="py-2">
                         {getDropdownItems(item.name).map((subItem) => (
                           <Link
                             key={subItem.title}
                             href={subItem.href}
                             className="flex items-center space-x-3 px-3 py-2 hover:bg-muted/50 transition-colors group"
                             onClick={() => setActiveDropdown(null)}
                           >
                             <div className="text-muted-foreground group-hover:text-primary transition-colors">
                               {subItem.icon}
                             </div>
                             <div className="flex-1">
                               <div className="flex items-center justify-between">
                                 <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                   {subItem.title}
                                 </span>
                                 {subItem.badge && (
                                   <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                                     {subItem.badge}
                                   </span>
                                 )}
                               </div>
                               <p className="text-xs text-muted-foreground mt-0.5">
                                 {subItem.description}
                               </p>
                             </div>
                           </Link>
                         ))}
                       </div>
                     </div>
                   )}
                 </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-muted/50"
                aria-label="Search documentation"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
                <kbd className="text-xs bg-muted border border-border rounded px-1.5 py-0.5 font-mono">
                  ⌘K
                </kbd>
              </button>

              {/* Auth Buttons */}
              <div className="hidden lg:flex items-center space-x-2">
                <Link 
                  href="/login" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-lg hover:bg-muted/50"
                >
                  Sign in
                </Link>
                <Link 
                  href="/register" 
                  className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg"
                >
                  Register
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-border/50 py-4 animate-in slide-in-from-top-2 duration-200">
              <div className="space-y-2">
                {mainNavItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className="w-full flex items-center justify-between p-3 text-left hover:bg-muted/50 rounded-lg transition-colors"
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="mt-1 ml-4 space-y-1">
                            {getDropdownItems(item.name).map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setIsOpen(false);
                                }}
                              >
                                <div className="text-primary">
                                  {subItem.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">{subItem.title}</span>
                                    {subItem.badge && (
                                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-0.5">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block p-3 text-left hover:bg-muted/50 rounded-lg transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Auth */}
              <div className="mt-6 pt-6 border-t border-border/50 space-y-2">
                <Link 
                  href="/auth/login" 
                  className="block w-full text-center p-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                  onClick={() => setIsOpen(false)}
                >
                  Sign in
                </Link>
                <Link 
                  href="/auth/register" 
                  className="block w-full text-center p-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Search Modal */}
      {searchOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-start justify-center pt-[20vh] p-4"
          onClick={() => setSearchOpen(false)}
        >
          <div 
            className="w-full max-w-lg bg-background border border-border rounded-xl shadow-2xl p-6 animate-in fade-in slide-in-from-top-4 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation, API, articles..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder-muted-foreground"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-muted-foreground">
              Press <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 font-mono">Esc</kbd> to close
            </div>
          </div>
        </div>
      )}
    </>
  );
}