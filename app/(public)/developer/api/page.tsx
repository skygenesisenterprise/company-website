'use client';

import Link from 'next/link';
import { 
  Shield, 
  Globe, 
  Zap, 
  Lock, 
  Database, 
  Users, 
  Server, 
  FileText, 
  CreditCard, 
  Activity, 
  Key, 
  Code, 
  CheckCircle, 
  ExternalLink,
  Book,
  Terminal,
  Package,
  Clock,
  MapPin,
  BarChart3,
  Building,
  Settings,
  ArrowRight,
  Cpu,
  BookOpen,
  ChevronRight
} from 'lucide-react';

interface APICategory {
  name: string;
  description: string;
  icon: React.ReactNode;
  endpoints: string;
  useCases: string[];
}

interface DesignPrinciple {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface EnterpriseFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  guarantee?: string;
}

interface SDK {
  name: string;
  language: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

export default function DeveloperAPIPage() {
  // API Categories
  const apiCategories: APICategory[] = [
    {
      name: 'Authentication API',
      description: 'Secure identity management and access control with zero-trust architecture and multi-factor authentication.',
      icon: <Key className="w-6 h-6" />,
      endpoints: '15 endpoints',
      useCases: ['User authentication', 'API key management', 'SSO integration']
    },
    {
      name: 'Collaboration API',
      description: 'Real-time collaboration tools for document editing, project management, and team communication.',
      icon: <Users className="w-6 h-6" />,
      endpoints: '32 endpoints',
      useCases: ['Document collaboration', 'Team workflows', 'Project management']
    },
    {
      name: 'Data API',
      description: 'High-performance data access with query optimization, caching, and real-time synchronization.',
      icon: <Database className="w-6 h-6" />,
      endpoints: '28 endpoints',
      useCases: ['Data retrieval', 'Analytics queries', 'Real-time sync']
    },
    {
      name: 'Storage API',
      description: 'Scalable object storage with automatic encryption, versioning, and global CDN distribution.',
      icon: <Server className="w-6 h-6" />,
      endpoints: '18 endpoints',
      useCases: ['File storage', 'Asset management', 'CDN distribution']
    },
    {
      name: 'Compute API',
      description: 'Serverless computing and container orchestration with automatic scaling and load balancing.',
      icon: <Zap className="w-6 h-6" />,
      endpoints: '22 endpoints',
      useCases: ['Function deployment', 'Container management', 'Auto-scaling']
    },
    {
      name: 'Audit & Logging API',
      description: 'Comprehensive audit trails, security monitoring, and compliance reporting with real-time alerts.',
      icon: <FileText className="w-6 h-6" />,
      endpoints: '24 endpoints',
      useCases: ['Security monitoring', 'Compliance reporting', 'Audit trails']
    },
    {
      name: 'Organization API',
      description: 'Enterprise organization management with role-based access control and hierarchical permissions.',
      icon: <Building className="w-6 h-6" />,
      endpoints: '19 endpoints',
      useCases: ['User management', 'Role assignment', 'Organization structure']
    },
    {
      name: 'Billing API',
      description: 'Flexible billing and subscription management with multi-currency support and detailed reporting.',
      icon: <CreditCard className="w-6 h-6" />,
      endpoints: '16 endpoints',
      useCases: ['Subscription management', 'Usage tracking', 'Invoice generation']
    }
  ];

  // Design Principles
  const designPrinciples: DesignPrinciple[] = [
    {
      title: 'REST-First Architecture',
      description: 'Clean, intuitive RESTful design with predictable resource patterns and HTTP semantics.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Predictable Resource Naming',
      description: 'Consistent naming conventions across all endpoints for intuitive API navigation.',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Idempotency Guarantees',
      description: 'Safe retry mechanisms with idempotent operations ensuring data consistency.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Standardized Error Models',
      description: 'Uniform error response format with detailed error codes and human-readable messages.',
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: 'Semantic Versioning',
      description: 'Clear versioning policy with backward compatibility guarantees and deprecation timelines.',
      icon: <Package className="w-6 h-6" />
    },
    {
      title: 'Consistent Validation',
      description: 'Uniform request validation with detailed error messages for invalid parameters.',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  // Enterprise Features
  const enterpriseFeatures: EnterpriseFeature[] = [
    {
      title: 'Multi-Region Availability',
      description: 'Deploy across European regions with automatic failover and latency-based routing.',
      icon: <MapPin className="w-6 h-6" />,
      guarantee: '99.99% Uptime SLA'
    },
    {
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption for data in transit and at rest with key management.',
      icon: <Lock className="w-6 h-6" />,
      guarantee: 'AES-256 Encryption'
    },
    {
      title: 'Role-Based Access Control',
      description: 'Granular permission system with hierarchical roles and audit trails.',
      icon: <Users className="w-6 h-6" />,
      guarantee: 'SOC 2 Type II Compliant'
    },
    {
      title: 'Advanced Rate Limiting',
      description: 'Intelligent throttling with burst capacity and fair usage policies.',
      icon: <BarChart3 className="w-6 h-6" />,
      guarantee: 'Burst Capacity Included'
    },
    {
      title: 'Real-Time Observability',
      description: 'Comprehensive monitoring with metrics, traces, and custom dashboards.',
      icon: <Activity className="w-6 h-6" />,
      guarantee: '1-Minute Metrics'
    },
    {
      title: 'Compliance Infrastructure',
      description: 'GDPR, ISO 27001, and European data protection regulation compliance.',
      icon: <Shield className="w-6 h-6" />,
      guarantee: 'Full Compliance'
    }
  ];

  // SDKs
  const sdks: SDK[] = [
    {
      name: 'TypeScript SDK',
      language: 'TypeScript/JavaScript',
      description: 'First-class TypeScript support with comprehensive type definitions.',
      icon: <Code className="w-6 h-6" />,
      features: ['Full TypeScript support', 'React hooks', 'Node.js compatible']
    },
    {
      name: 'Python SDK',
      language: 'Python 3.8+',
      description: 'Pythonic interface with async/await support and comprehensive documentation.',
      icon: <Terminal className="w-6 h-6" />,
      features: ['Async/await support', 'Django integration', 'Data science tools']
    },
    {
      name: 'Go SDK',
      language: 'Go 1.19+',
      description: 'High-performance Go client with context-aware operations and concurrency.',
      icon: <Zap className="w-6 h-6" />,
      features: ['Context-aware', 'High performance', 'Concurrent operations']
    },
    {
      name: 'Rust SDK',
      language: 'Rust 1.70+',
      description: 'Memory-safe Rust client with zero-copy deserialization and async support.',
      icon: <Shield className="w-6 h-6" />,
      features: ['Memory safe', 'Zero-copy', 'Async/await']
    }
  ];

  // Use Cases
  const useCases: UseCase[] = [
    {
      title: 'Internal Admin Dashboards',
      description: 'Build comprehensive administrative interfaces for managing users, resources, and organizational settings with real-time data synchronization.',
      icon: <BarChart3 className="w-6 h-6" />,
      category: 'Internal Tools'
    },
    {
      title: 'Automated Governance Workflows',
      description: 'Implement compliance automation, audit trails, and policy enforcement across enterprise systems.',
      icon: <Shield className="w-6 h-6" />,
      category: 'Compliance'
    },
    {
      title: 'Subsidiary Integration',
      description: 'Connect and synchronize data across multiple subsidiaries with secure, governed API access.',
      icon: <Building className="w-6 h-6" />,
      category: 'Enterprise Integration'
    },
    {
      title: 'Third-Party SaaS Integration',
      description: 'Integrate with external SaaS platforms while maintaining security and data sovereignty.',
      icon: <ExternalLink className="w-6 h-6" />,
      category: 'External Integration'
    },
    {
      title: 'Secure Collaboration Systems',
      description: 'Build custom collaboration tools with enterprise-grade security and real-time capabilities.',
      icon: <Users className="w-6 h-6" />,
      category: 'Collaboration'
    }
  ];

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
                Enterprise APIs for
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  European Sovereignty
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4">
              <p>
                Sky Genesis Enterprise develops unified API platforms for secure collaboration, 
                governance, and large-scale digital operations.
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="/docs/api" 
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                <Book className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Explore Full API Reference
              </Link>
              <Link 
                href="https://api.skygenesisenterprise.com" 
                className="border border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-sm sm:text-base whitespace-nowrap flex items-center"
              >
                <Key className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Generate API Key
              </Link>
            </div>
          </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Developers Choose Sky Genesis Enterprise APIs</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Enterprise-grade APIs designed for security, scalability, and European digital sovereignty.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Zero-Trust Security',
                  description: 'Built-in security with end-to-end encryption, role-based access control, and comprehensive audit trails.',
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  title: 'European Digital Sovereignty',
                  description: 'Data residency and processing within European borders with GDPR compliance by design.',
                  icon: <Globe className="w-6 h-6" />
                },
                {
                  title: 'High Availability',
                  description: '99.99% uptime SLA with multi-region deployment and automatic failover capabilities.',
                  icon: <Zap className="w-6 h-6" />
                },
                {
                  title: 'Consistent Design',
                  description: 'Uniform API patterns across all services with predictable resource naming and behavior.',
                  icon: <Settings className="w-6 h-6" />
                },
                {
                  title: 'Semantic Versioning',
                  description: 'Stable APIs with clear versioning policies and backward compatibility guarantees.',
                  icon: <Package className="w-6 h-6" />
                },
                {
                  title: 'Developer Experience',
                  description: 'First-class SDKs, comprehensive documentation, and intuitive error handling.',
                  icon: <Code className="w-6 h-6" />
                }
              ].map((value, index) => (
                <div key={index} className="card group">
                  <div className="space-y-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API Categories Overview */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">API Categories</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Comprehensive API ecosystem covering all enterprise needs from authentication to billing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {apiCategories.map((category, index) => (
                <div key={index} className="card group">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                        <span className="text-sm text-gray-500">{category.endpoints}</span>
                      </div>
                      <p className="text-gray-400 mb-4">{category.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-300">Common use cases:</p>
                        <div className="flex flex-wrap gap-2">
                          {category.useCases.map((useCase, idx) => (
                            <span key={idx} className="text-xs bg-gray-800 px-2 py-1 rounded">
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Design Principles */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Design Principles</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Our API architecture follows enterprise-grade design patterns for consistency and reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designPrinciples.map((principle, index) => (
                <div key={index} className="card">
                  <div className="space-y-4">
                    <div className="text-blue-400">
                      {principle.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{principle.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Features */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Enterprise-Grade Features</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Mission-critical capabilities designed for the most demanding enterprise environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="card group">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        {feature.guarantee && (
                          <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">
                            {feature.guarantee}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDK & Integration Ecosystem */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">SDK & Integration Ecosystem</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                First-class SDKs with typed models, built-in retries, and authentication helpers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sdks.map((sdk, index) => (
                <div key={index} className="card group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-blue-400 group-hover:scale-110 transition-transform">
                          {sdk.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{sdk.name}</h3>
                          <p className="text-sm text-gray-500">{sdk.language}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400">{sdk.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-300">Key features:</p>
                      <div className="flex flex-wrap gap-2">
                        {sdk.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-gray-800 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/docs/sdks" className="btn-secondary">
                <Book className="w-5 h-5" />
                Browse SDK Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Example Use Cases */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Enterprise Use Cases</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Real-world scenarios where our APIs power mission-critical enterprise applications.
              </p>
            </div>

            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="card group">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {useCase.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{useCase.title}</h3>
                        <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                          {useCase.category}
                        </span>
                      </div>
                      <p className="text-gray-400">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Changelog Preview */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Continuous Evolution</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Our APIs receive continuous updates with new features, performance improvements, and security enhancements.
              </p>
            </div>

            <div className="card bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Always Improving</h3>
                  <p className="text-gray-300 mb-6">
                    Regular updates include new endpoints, enhanced performance, additional SDK support, and expanded enterprise features. All changes follow our semantic versioning policy with backward compatibility guarantees.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-blue-400">Monthly Releases</p>
                      <p className="text-gray-400">New features and enhancements</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-400">Security Updates</p>
                      <p className="text-gray-400">Immediate patches for vulnerabilities</p>
                    </div>
                    <div>
                      <p className="font-semibold text-purple-400">Performance</p>
                      <p className="text-gray-400">Continuous optimization</p>
                    </div>
                  </div>
                </div>
                <Link href="/changelog" className="btn-secondary">
                  <FileText className="w-5 h-5" />
                  View Full Changelog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Build with
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sovereign APIs
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Start building enterprise applications with APIs designed for European digital sovereignty and security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/docs/api" className="btn-primary">
                <Book className="w-5 h-5" />
                Explore Full API Reference
              </Link>
              <Link href="https://api.skygenesisenterprise.com" className="btn-secondary">
                <Key className="w-5 h-5" />
                Generate Your API Key
              </Link>
              <Link href="/docs/sdks" className="btn-secondary">
                <Package className="w-5 h-5" />
                Browse SDK Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}