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
  Award
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
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                Documentation Platform
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Built for Enterprise
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Structured guides, best practices, and curated resources for a seamless developer experience.
              </p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Comprehensive documentation designed for clarity, accessibility, and productivity — empowering developers to build secure, sovereign enterprise applications with confidence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
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

      {/* Key Benefits / Value Proposition */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Developers Choose Sky Genesis Enterprise Docs</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Enterprise documentation designed for clarity, reliability, and developer productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card group">
                  <div className="space-y-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Documentation Categories</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive coverage of all aspects of our platform and ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => (
                <Link key={index} href={category.url} className="card group block">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-blue-400 group-hover:scale-110 transition-transform">
                        {category.icon}
                      </div>
                      <div className="flex items-center space-x-2">
                        {category.badge && (
                          <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">
                            {category.badge}
                          </span>
                        )}
                        <span className="text-sm text-gray-500">{category.count}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </Link>
              ))}
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
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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