'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  GitBranch, 
  BookOpen, 
  Image, 
  Settings, 
  Users,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const navigation = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Content',
    href: '/admin/content',
    icon: FileText,
    children: [
      { name: 'Blog', href: '/admin/content/blog' },
      { name: 'Careers', href: '/admin/content/careers' },
      { name: 'Changelog', href: '/admin/content/changelog' },
      { name: 'Whitepapers', href: '/admin/content/whitepapers' },
      { name: 'Guides', href: '/admin/content/guides' },
    ],
  },
  {
    name: 'Media Library',
    href: '/admin/media',
    icon: Image,
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
  {
    name: 'Users',
    href: '/admin/users',
    icon: Users,
  },
];

interface AdminLayoutClientProps {
  children: React.ReactNode;
}

export default function AdminLayoutClient({ children }: AdminLayoutClientProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 transition-transform duration-200 ease-in-out lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-16 items-center px-6 border-b border-gray-800">
          <h1 className="text-xl font-semibold text-white">Sky Genesis Admin</h1>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    active 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                  {item.children && (
                    <ChevronRight className={cn(
                      "ml-auto h-4 w-4 transition-transform",
                      active && "rotate-90"
                    )} />
                  )}
                </Link>
                
                {item.children && active && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.children.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            "block px-3 py-1.5 rounded-md text-sm transition-colors",
                            childActive
                              ? "bg-blue-500/20 text-blue-400 border-l-2 border-blue-400"
                              : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                          )}
                        >
                          {child.name}
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
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-gray-900 border-b border-gray-800">
          <div className="flex h-16 items-center px-6">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <div className="ml-4 lg:ml-0">
              <nav className="flex items-center space-x-2 text-sm text-gray-400">
                <Link href="/admin" className="hover:text-gray-200">
                  Admin
                </Link>
                {pathname !== '/admin' && pathname !== '/admin/dashboard' && (
                  <>
                    <span>/</span>
                    <span className="text-gray-200">
                      {(() => {
                        const segment = pathname.split('/').pop();
                        return segment ? segment.charAt(0).toUpperCase() + segment.slice(1) : '';
                      })()}
                    </span>
                  </>
                )}
              </nav>
            </div>

            <div className="ml-auto flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-medium">
                  A
                </div>
                <span className="text-sm text-gray-300">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}