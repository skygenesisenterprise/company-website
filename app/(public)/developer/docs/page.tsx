'use client';

import Link from 'next/link';
import { 
  Book, 
  Code, 
  Zap, 
  Search, 
  Terminal, 
  Package, 
  Shield, 
  Globe, 
  Clock, 
  ArrowRight, 
  FileText,
  Rocket,
  GitBranch,
  Settings,
  Key,
  Lock,
  Award,
  Users,
  Cpu,
  Database,
  BookOpen,
  ChevronRight
} from 'lucide-react';

interface DocCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  count: string;
  badge?: string;
  url: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface RecentUpdate {
  title: string;
  description: string;
  category: string;
  date: string;
  url: string;
}

interface QuickStart {
  title: string;
  description: string;
  icon: React.ReactNode;
  time: string;
  url: string;
}

export default function DeveloperDocsPage() {
  // Documentation categories
  const docCategories: DocCategory[] = [
    {
      title: 'API Documentation',
      description: 'Complete reference for all Sky Genesis Enterprise APIs with examples and best practices.',
      icon: <Terminal className="w-6 h-6" />,
      count: '200+ pages',
      badge: 'v2.0',
      url: '/docs/api'
    },
    {
      title: 'SDK Guides',
      description: 'Official SDK documentation for TypeScript, Python, Go, and Rust.',
      icon: <Package className="w-6 h-6" />,
      count: '50+ guides',
      url: '/docs/sdks'
    },
    {
      title: 'Quickstarts',
      description: 'Get started in minutes with step-by-step tutorials for common use cases.',
      icon: <Rocket className="w-6 h-6" />,
      count: '25+ tutorials',
      url: '/docs/quickstarts'
    },
    {
      title: 'Architecture Guides',
      description: 'Deep dives into system design, security patterns, and best practices.',
      icon: <Settings className="w-6 h-6" />,
      count: '30+ articles',
      url: '/docs/architecture'
    },
    {
      title: 'Security & Compliance',
      description: 'Security guidelines, compliance documentation, and trust center resources.',
      icon: <Shield className="w-6 h-6" />,
      count: '40+ resources',
      badge: 'GDPR',
      url: '/docs/security'
    },
    {
      title: 'Open Source',
      description: 'Documentation for our open-source projects and contribution guidelines.',
      icon: <GitBranch className="w-6 h-6" />,
      count: '15+ projects',
      url: '/docs/opensource'
    }
  ];

  // Key features
  const features: Feature[] = [
    {
      title: 'Structured & Searchable',
      description: 'Intelligent search with autocomplete, filters, and contextual suggestions for instant access to relevant content.',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'Versioned Documentation',
      description: 'Stable references for each API version with clear migration guides and deprecation timelines.',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Interactive Examples',
      description: 'Live code examples, API explorers, and sandboxed environments for hands-on learning.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Enterprise Reliability',
      description: 'Content reviewed and maintained by our engineering team with regular updates and accuracy guarantees.',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Sovereignty-Focused',
      description: 'Documentation emphasizing European digital sovereignty, data protection, and compliance requirements.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Developer-First Design',
      description: 'Optimized reading experience with dark mode, keyboard navigation, and mobile responsiveness.',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  // Recent updates
  const recentUpdates: RecentUpdate[] = [
    {
      title: 'Authentication API v2.1 Released',
      description: 'Enhanced security features and improved error handling for enterprise authentication.',
      category: 'API Updates',
      date: '2024-11-15',
      url: '/docs/changelog'
    },
    {
      title: 'New Python SDK with Async Support',
      description: 'Official Python SDK now supports async/await patterns and improved performance.',
      category: 'SDK Updates',
      date: '2024-11-12',
      url: '/docs/sdks/python'
    },
    {
      title: 'Multi-Region Deployment Guide',
      description: 'Comprehensive guide for deploying applications across European regions.',
      category: 'Architecture',
      date: '2024-11-10',
      url: '/docs/architecture/multi-region'
    },
    {
      title: 'GDPR Compliance Checklist',
      description: 'Updated compliance documentation with new EU data protection requirements.',
      category: 'Security',
      date: '2024-11-08',
      url: '/docs/security/gdpr'
    }
  ];

  // Quick starts
  const quickStarts: QuickStart[] = [
    {
      title: 'API Authentication',
      description: 'Learn how to authenticate with our APIs using API keys and OAuth 2.0.',
      icon: <Key className="w-6 h-6" />,
      time: '5 min read',
      url: '/docs/quickstarts/authentication'
    },
    {
      title: 'First API Request',
      description: 'Make your first API call and understand response structures and error handling.',
      icon: <Terminal className="w-6 h-6" />,
      time: '8 min read',
      url: '/docs/quickstarts/first-request'
    },
    {
      title: 'SDK Integration',
      description: 'Integrate our TypeScript SDK into your project with best practices.',
      icon: <Package className="w-6 h-6" />,
      time: '10 min read',
      url: '/docs/quickstarts/sdk-integration'
    },
    {
      title: 'Secure Data Storage',
      description: 'Implement secure data storage with encryption and access controls.',
      icon: <Lock className="w-6 h-6" />,
      time: '12 min read',
      url: '/docs/quickstarts/secure-storage'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'API Updates': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'SDK Updates': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Architecture': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Security': return 'bg-red-500/10 text-red-400 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

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
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                Sky Genesis Enterprise
                </div>
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Developer Documentation
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Platform for Enterprise
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4">
              <p>
                Structured guides, best practices, and curated resources for a seamless developer experience.
              </p>
              <p className="text-gray-500">
                Comprehensive documentation designed for clarity, accessibility, and productivity — empowering developers to build secure, sovereign enterprise applications with confidence.
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="/docs" 
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                <Book className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Browse Full Documentation
              </Link>
              <Link 
                href="/docs/quickstarts" 
                className="border border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
              >
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Start Your Developer Journey
              </Link>
            </div>
          </div>
      </section>

      {/* DOCUMENTATION DIVISIONS */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
          <div className="mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Documentation Divisions
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Comprehensive documentation resources for every aspect of enterprise development.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Terminal className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4">API Documentation</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm lg:text-base">
                  Complete reference for all Sky Genesis Enterprise APIs with examples and best practices.
                </p>
                <Link href="/docs/api" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center justify-center">
                  Explore APIs <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Package className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4">SDK Guides</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm lg:text-base">
                  Official SDK documentation for TypeScript, Python, Go, and Rust with integration examples.
                </p>
                <Link href="/docs/sdks" className="text-green-400 hover:text-green-300 font-semibold flex items-center justify-center">
                  View SDKs <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4">Security & Compliance</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm lg:text-base">
                  Security guidelines, compliance documentation, and trust center resources for enterprise.
                </p>
                <Link href="/docs/security" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center justify-center">
                  Security docs <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Quick Start Guides</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Get up and running in minutes with our step-by-step tutorials.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {quickStarts.map((quickStart, index) => (
                <Link key={index} href={quickStart.url} className="card group block">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {quickStart.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                          {quickStart.title}
                        </h3>
                        <span className="text-sm text-gray-500">{quickStart.time}</span>
                      </div>
                      <p className="text-gray-400">{quickStart.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Recent Updates</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Stay informed about the latest documentation updates and improvements.
              </p>
            </div>

            <div className="space-y-6">
              {recentUpdates.map((update, index) => (
                <div key={index} className="card group">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                          {update.title}
                        </h3>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(update.category)}`}>
                            {update.category}
                          </span>
                          <span className="text-sm text-gray-500">{formatDate(update.date)}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 mb-3">{update.description}</p>
                      <Link 
                        href={update.url}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/docs/changelog" className="btn-secondary">
                <Clock className="w-5 h-5" />
                View Full Changelog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Developer Resources</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Additional resources to support your development journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'API Reference',
                  description: 'Complete API endpoint documentation',
                  icon: <Terminal className="w-6 h-6" />,
                  url: '/docs/api'
                },
                {
                  title: 'SDK Downloads',
                  description: 'Official SDKs and libraries',
                  icon: <Package className="w-6 h-6" />,
                  url: '/docs/sdks'
                },
                {
                  title: 'Code Examples',
                  description: 'Sample implementations and patterns',
                  icon: <Code className="w-6 h-6" />,
                  url: '/docs/examples'
                },
                {
                  title: 'Best Practices',
                  description: 'Security and performance guidelines',
                  icon: <Shield className="w-6 h-6" />,
                  url: '/docs/best-practices'
                }
              ].map((resource, index) => (
                <Link key={index} href={resource.url} className="card text-center group block">
                  <div className="space-y-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform mx-auto">
                      {resource.icon}
                    </div>
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-400">{resource.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Start Building with
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Enterprise Documentation
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Access comprehensive guides, API references, and best practices to build secure, scalable enterprise applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/docs" className="btn-primary">
                <Book className="w-5 h-5" />
                Browse Full Documentation
              </Link>
              <Link href="/docs/quickstarts" className="btn-secondary">
                <Rocket className="w-5 h-5" />
                Start Your Developer Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}