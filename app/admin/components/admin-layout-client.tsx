'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/app/admin/lib/utils';
import { Button } from './ui/button';
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  GitBranch, 
  BookOpen, 
  Image, 
  Settings, 
  ChevronDown,
  Menu,
  X,
  Home,
  BarChart3,
  PenTool,
  Shield,
  User,
  LogOut,
  Key
} from 'lucide-react';

const navigation = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
    description: 'Overview and analytics',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Content',
    href: '/admin/content',
    icon: FileText,
    description: 'Manage all content',
    color: 'from-purple-500 to-purple-600',
    children: [
      { name: 'Blog Articles', href: '/admin/content/blog', icon: PenTool },
      { name: 'Job Postings', href: '/admin/content/careers', icon: Briefcase },
      { name: 'Changelogs', href: '/admin/content/changelog', icon: GitBranch },
      { name: 'Whitepapers', href: '/admin/content/whitepapers', icon: BookOpen },
      { name: 'Developer Guides', href: '/admin/content/guides', icon: FileText },
    ],
  },
  {
    name: 'Media Library',
    href: '/admin/media',
    icon: Image,
    description: 'Upload and manage files',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    description: 'System configuration',
    color: 'from-gray-500 to-gray-600',
  },
];

interface AdminLayoutClientProps {
  children: React.ReactNode;
}

export default function AdminLayoutClient({ children }: AdminLayoutClientProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>(['Content']);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAccountDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('user');
    router.push('/login');
  };

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800/50 transition-all duration-300 ease-in-out lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Sidebar Header */}
        <div className="flex h-16 items-center px-6 border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400">Sky Genesis Enterprise</h4>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto lg:hidden text-slate-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const isExpanded = expandedItems.includes(item.name);
            
            return (
              <div key={item.name}>
                <button
                  onClick={() => {
                    if (item.children) {
                      toggleExpanded(item.name);
                    } else {
                      window.location.href = item.href;
                    }
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                    active 
                      ? "bg-gradient-to-r " + item.color + " text-white shadow-lg shadow-black/20" 
                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200",
                    active 
                      ? "bg-white/20" 
                      : "bg-slate-800/50 group-hover:bg-slate-700/50"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs opacity-70">{item.description}</div>
                  </div>
                  {item.children && (
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isExpanded && "rotate-180"
                    )} />
                  )}
                </button>
                
                {/* Submenu */}
                {item.children && isExpanded && (
                  <div className="mt-2 ml-4 space-y-1">
                    {item.children.map((child) => {
                      const ChildIcon = child.icon;
                      const childActive = pathname === child.href;
                      return (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200",
                            childActive
                              ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-400 border-l-2 border-blue-400"
                              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
                          )}
                        >
                          <ChildIcon className="h-4 w-4" />
                          <span>{child.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>


      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50">
          <div className="flex h-16 items-center px-6">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-slate-400 hover:text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <div className="ml-4 lg:ml-0 flex-1">
              <nav className="flex items-center space-x-2 text-sm text-slate-400">
                <Link href="/admin" className="hover:text-slate-200 transition-colors">
                  <Home className="h-4 w-4 inline mr-1" />
                  Admin
                </Link>
                {pathname !== '/admin' && pathname !== '/admin/dashboard' && (
                  <>
                    <span>/</span>
                    <span className="text-slate-200">
                      {(() => {
                        const segment = pathname.split('/').pop();
                        return segment ? segment.charAt(0).toUpperCase() + segment.slice(1) : '';
                      })()}
                    </span>
                  </>
                )}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
              <div className="relative" ref={dropdownRef}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-3 pl-4 border-l border-slate-700 text-slate-400 hover:text-white"
                  onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">A</span>
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-medium text-white">Admin User</div>
                    <div className="text-xs text-slate-400">admin@skygenesis.com</div>
                  </div>
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    accountDropdownOpen && "rotate-180"
                  )} />
                </Button>

                {/* Dropdown Menu */}
                {accountDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl z-50">
                    <div className="py-2">
                      {/* Profile Link */}
                      <Link
                        href="/admin/profile"
                        className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors"
                        onClick={() => setAccountDropdownOpen(false)}
                      >
                        <User className="h-4 w-4" />
                        <div>
                          <div className="text-sm font-medium">Mon Profil</div>
                          <div className="text-xs text-slate-500">Gérer mes informations</div>
                        </div>
                      </Link>

                      {/* Account Settings */}
                      <Link
                        href="/admin/account/settings"
                        className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors"
                        onClick={() => setAccountDropdownOpen(false)}
                      >
                        <Settings className="h-4 w-4" />
                        <div>
                          <div className="text-sm font-medium">Paramètres du compte</div>
                          <div className="text-xs text-slate-500">Sécurité et préférences</div>
                        </div>
                      </Link>

                      {/* API Keys */}
                      <Link
                        href="/admin/api-keys"
                        className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors"
                        onClick={() => setAccountDropdownOpen(false)}
                      >
                        <Key className="h-4 w-4" />
                        <div>
                          <div className="text-sm font-medium">Clés API</div>
                          <div className="text-xs text-slate-500">Gérer les accès</div>
                        </div>
                      </Link>

                      {/* Divider */}
                      <div className="mx-4 my-2 border-t border-slate-700/50"></div>

                      {/* Logout */}
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-red-500/20 hover:text-red-400 transition-colors w-full text-left"
                      >
                        <LogOut className="h-4 w-4" />
                        <div>
                          <div className="text-sm font-medium">Se déconnecter</div>
                          <div className="text-xs text-slate-500">Quitter la session</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}