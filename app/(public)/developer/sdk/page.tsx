'use client';

import Link from 'next/link';
import { 
  Package, 
  Code, 
  Terminal, 
  Zap, 
  Shield, 
  Globe, 
  Download, 
  ExternalLink, 
 
  Book, 
  CheckCircle, 
  Star, 
  GitBranch, 
  Cpu, 
  Database, 
  Lock, 
  Settings, 
  Rocket,
  FileText,
  Cloud,
  Network,
  CreditCard,
  Activity,
  Building,

} from 'lucide-react';

interface SDK {
  name: string;
  language: string;
  description: string;
  icon: React.ReactNode;
  version: string;
  downloads: string;
  license: string;
  features: string[];
  documentationUrl: string;
  githubUrl: string;
  npmUrl?: string;
  category: 'language' | 'infrastructure' | 'application';
}

interface Tool {
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  url: string;
}

interface CodeExample {
  language: string;
  title: string;
  code: string;
  installation: string;
}

export default function DeveloperSDKPage() {
  // Language-specific SDKs
  const languageSDKs: SDK[] = [
    {
      name: 'TypeScript SDK',
      language: 'TypeScript/JavaScript',
      description: 'First-class TypeScript support with comprehensive type definitions and React hooks.',
      icon: <Code className="w-6 h-6" />,
      version: 'v2.4.1',
      downloads: '125k+',
      license: 'SGE-PL-1.0',
      features: ['Full TypeScript support', 'React hooks', 'Node.js compatible', 'Edge runtime ready'],
      documentationUrl: '/docs/sdks/typescript',
      githubUrl: 'https://github.com/skygenesisenterprise/typescript-sdk',
      npmUrl: 'npm install @skygenesis/sdk',
      category: 'language'
    },
    {
      name: 'Python SDK',
      language: 'Python 3.8+',
      description: 'Pythonic interface with async/await support and comprehensive documentation.',
      icon: <Terminal className="w-6 h-6" />,
      version: 'v2.3.0',
      downloads: '89k+',
      license: 'SGE-PL-1.0',
      features: ['Async/await support', 'Django integration', 'Data science tools', 'Jupyter notebooks'],
      documentationUrl: '/docs/sdks/python',
      githubUrl: 'https://github.com/skygenesisenterprise/python-sdk',
      npmUrl: 'pip install skygenesis-enterprise',
      category: 'language'
    },
    {
      name: 'Go SDK',
      language: 'Go 1.19+',
      description: 'High-performance Go client with context-aware operations and concurrency.',
      icon: <Zap className="w-6 h-6" />,
      version: 'v2.2.3',
      downloads: '67k+',
      license: 'SGE-PL-1.0',
      features: ['Context-aware', 'High performance', 'Concurrent operations', 'Minimal dependencies'],
      documentationUrl: '/docs/sdks/go',
      githubUrl: 'https://github.com/skygenesisenterprise/go-sdk',
      npmUrl: 'go get github.com/skygenesisenterprise/go-sdk',
      category: 'language'
    },
    {
      name: 'Rust SDK',
      language: 'Rust 1.70+',
      description: 'Memory-safe Rust client with zero-copy deserialization and async support.',
      icon: <Shield className="w-6 h-6" />,
      version: 'v1.8.2',
      downloads: '34k+',
      license: 'SGE-PL-1.0',
      features: ['Memory safe', 'Zero-copy', 'Async/await', 'WebAssembly support'],
      documentationUrl: '/docs/sdks/rust',
      githubUrl: 'https://github.com/skygenesisenterprise/rust-sdk',
      npmUrl: 'cargo add skygenesis-enterprise',
      category: 'language'
    },
    {
      name: 'Swift SDK',
      language: 'Swift 5.7+',
      description: 'Native Swift SDK for iOS and macOS applications with Combine support.',
      icon: <Cpu className="w-6 h-6" />,
      version: 'v1.5.0',
      downloads: '23k+',
      license: 'SGE-PL-1.0',
      features: ['Swift Concurrency', 'Combine support', 'iOS/macOS native', 'Type-safe'],
      documentationUrl: '/docs/sdks/swift',
      githubUrl: 'https://github.com/skygenesisenterprise/swift-sdk',
      category: 'language'
    },
    {
      name: 'Kotlin SDK',
      language: 'Kotlin 1.8+',
      description: 'Modern Kotlin SDK for Android and JVM with coroutines support.',
      icon: <Cpu className="w-6 h-6" />,
      version: 'v1.4.1',
      downloads: '18k+',
      license: 'SGE-PL-1.0',
      features: ['Coroutines support', 'Android native', 'Multiplatform', 'DSL builders'],
      documentationUrl: '/docs/sdks/kotlin',
      githubUrl: 'https://github.com/skygenesisenterprise/kotlin-sdk',
      category: 'language'
    }
  ];

  // Domain-specific SDKs
  const domainSDKs: SDK[] = [
    {
      name: 'Cloud Infrastructure SDK',
      language: 'TypeScript',
      description: 'Manage cloud resources, deployments, and infrastructure as code.',
      icon: <Cloud className="w-6 h-6" />,
      version: 'v3.1.0',
      downloads: '45k+',
      license: 'SGE-PL-1.0',
      features: ['Infrastructure as Code', 'Multi-cloud support', 'Terraform integration', 'Cost optimization'],
      documentationUrl: '/docs/sdks/cloud',
      githubUrl: 'https://github.com/skygenesisenterprise/cloud-sdk',
      category: 'infrastructure'
    },
    {
      name: 'Identity & Access SDK',
      language: 'TypeScript',
      description: 'Enterprise-grade authentication, authorization, and identity management.',
      icon: <Lock className="w-6 h-6" />,
      version: 'v2.8.1',
      downloads: '78k+',
      license: 'SGE-PL-1.0',
      features: ['OAuth 2.0/OIDC', 'MFA support', 'SSO integration', 'Zero-trust architecture'],
      documentationUrl: '/docs/sdks/identity',
      githubUrl: 'https://github.com/skygenesisenterprise/identity-sdk',
      category: 'infrastructure'
    },
    {
      name: 'Network & Edge SDK',
      language: 'Go',
      description: 'High-performance networking, CDN management, and edge computing.',
      icon: <Network className="w-6 h-6" />,
      version: 'v1.9.2',
      downloads: '29k+',
      license: 'SGE-PL-1.0',
      features: ['Edge computing', 'Global CDN', 'Load balancing', 'DDoS protection'],
      documentationUrl: '/docs/sdks/network',
      githubUrl: 'https://github.com/skygenesisenterprise/network-sdk',
      category: 'infrastructure'
    },
    {
      name: 'Realtime SDK',
      language: 'TypeScript',
      description: 'WebSocket-based real-time communication with automatic reconnection.',
      icon: <Activity className="w-6 h-6" />,
      version: 'v2.5.0',
      downloads: '56k+',
      license: 'SGE-PL-1.0',
      features: ['WebSocket support', 'Auto-reconnection', 'Room management', 'Presence detection'],
      documentationUrl: '/docs/sdks/realtime',
      githubUrl: 'https://github.com/skygenesisenterprise/realtime-sdk',
      category: 'application'
    },
    {
      name: 'Storage SDK',
      language: 'Python',
      description: 'Secure object storage with encryption, versioning, and CDN integration.',
      icon: <Database className="w-6 h-6" />,
      version: 'v2.7.3',
      downloads: '82k+',
      license: 'SGE-PL-1.0',
      features: ['End-to-end encryption', 'Version control', 'Global CDN', 'Smart caching'],
      documentationUrl: '/docs/sdks/storage',
      githubUrl: 'https://github.com/skygenesisenterprise/storage-sdk',
      category: 'application'
    },
    {
      name: 'Billing SDK',
      language: 'TypeScript',
      description: 'Subscription management, invoicing, and payment processing.',
      icon: <CreditCard className="w-6 h-6" />,
      version: 'v1.6.1',
      downloads: '31k+',
      license: 'SGE-PL-1.0',
      features: ['Subscription management', 'Multi-currency', 'Tax calculation', 'Revenue analytics'],
      documentationUrl: '/docs/sdks/billing',
      githubUrl: 'https://github.com/skygenesisenterprise/billing-sdk',
      category: 'application'
    }
  ];

  // CLI & Tooling
  const tools: Tool[] = [
    {
      name: 'Sky CLI',
      description: 'Command-line interface for managing projects, deployments, and resources.',
      icon: <Terminal className="w-6 h-6" />,
      category: 'CLI',
      url: '/docs/cli'
    },
    {
      name: 'VS Code Extension',
      description: 'Integrated development environment with syntax highlighting and debugging.',
      icon: <Code className="w-6 h-6" />,
      category: 'IDE',
      url: '/docs/tools/vscode'
    },
    {
      name: 'JetBrains Plugin',
      description: 'Professional IDE support for IntelliJ IDEA, PyCharm, and WebStorm.',
      icon: <Settings className="w-6 h-6" />,
      category: 'IDE',
      url: '/docs/tools/jetbrains'
    },
    {
      name: 'Project Templates',
      description: 'Boilerplate templates for quick project initialization.',
      icon: <Rocket className="w-6 h-6" />,
      category: 'Templates',
      url: '/docs/templates'
    },
    {
      name: 'CI/CD Integrations',
      description: 'GitHub Actions, GitLab CI, and Jenkins pipeline integrations.',
      icon: <GitBranch className="w-6 h-6" />,
      category: 'CI/CD',
      url: '/docs/cicd'
    },
    {
      name: 'Docker Images',
      description: 'Optimized Docker images for development and production.',
      icon: <Package className="w-6 h-6" />,
      category: 'Container',
      url: '/docs/docker'
    }
  ];

  // Code examples
  const codeExamples: CodeExample[] = [
    {
      language: 'TypeScript',
      title: 'Quick Authentication',
      installation: 'npm install @skygenesis/sdk',
      code: `import { SkyGenesisClient } from '@skygenesis/sdk';

const client = new SkyGenesisClient({
  apiKey: process.env.SKY_GENESIS_API_KEY,
  region: 'eu-west-1'
});

// Authenticate a user
const user = await client.auth.signIn({
  email: 'user@example.com',
  password: 'secure-password'
});

console.log('Authenticated user:', user.id);`
    },
    {
      language: 'Python',
      title: 'Data Storage',
      installation: 'pip install skygenesis-enterprise',
      code: `import asyncio
from skygenesis import SkyGenesisClient

async def main():
    client = SkyGenesisClient(
        api_key="your-api-key",
        region="eu-west-1"
    )
    
    # Store encrypted data
    result = await client.storage.upload(
        bucket="secure-data",
        file_path="documents/contract.pdf",
        encryption=True
    )
    
    print(f"File uploaded: {result.url}")

asyncio.run(main())`
    },
    {
      language: 'Go',
      title: 'Real-time Communication',
      installation: 'go get github.com/skygenesisenterprise/go-sdk',
      code: `package main

import (
    "context"
    "fmt"
    "github.com/skygenesisenterprise/go-sdk"
)

func main() {
    client := skygenesis.NewClient("your-api-key")
    
    // Join a real-time room
    room, err := client.Realtime.JoinRoom("project-updates")
    if err != nil {
        panic(err)
    }
    
    // Listen for messages
    room.OnMessage(func(msg skygenesis.Message) {
        fmt.Printf("Received: %s\\n", msg.Content)
    })
    
    // Send a message
    room.Send("Hello, team!")
}`
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'language': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'infrastructure': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'application': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
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
                Developer SDKs for
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Enterprise Integration
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4">
              <p>
                Comprehensive SDKs and tools to seamlessly integrate Sky Genesis Enterprise services 
                into your applications with enterprise-grade security and performance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="#available-sdks" 
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Browse SDKs
              </Link>
              <Link 
                href="/docs/sdks" 
                className="border border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-sm sm:text-base whitespace-nowrap flex items-center"
              >
                <Book className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View Documentation
              </Link>
            </div>
          </div>
      </section>

      {/* Why Our SDKs */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose Our SDKs</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Enterprise-grade SDKs designed for security, performance, and developer productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Type-Safe by Default',
                  description: 'Full TypeScript support with comprehensive type definitions and IntelliSense.',
                  icon: <Code className="w-6 h-6" />
                },
                {
                  title: 'Enterprise Security',
                  description: 'Built-in encryption, authentication, and compliance with European data protection standards.',
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  title: 'High Performance',
                  description: 'Optimized for speed with minimal dependencies and efficient resource usage.',
                  icon: <Zap className="w-6 h-6" />
                },
                {
                  title: 'Multi-Language Support',
                  description: 'Consistent APIs across TypeScript, Python, Go, Rust, Swift, and Kotlin.',
                  icon: <Globe className="w-6 h-6" />
                },
                {
                  title: 'Semantic Versioning',
                  description: 'Stable APIs with clear versioning and backward compatibility guarantees.',
                  icon: <Package className="w-6 h-6" />
                },
                {
                  title: 'Active Maintenance',
                  description: 'Regular updates, security patches, and feature enhancements with SLA guarantees.',
                  icon: <CheckCircle className="w-6 h-6" />
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

      {/* Language-Specific SDKs */}
      <section id="available-sdks" className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Language-Specific SDKs</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Official SDKs for your preferred programming language with idiomatic APIs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {languageSDKs.map((sdk, index) => (
                <div key={index} className="card group">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-blue-400 group-hover:scale-110 transition-transform">
                          {sdk.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                            {sdk.name}
                          </h3>
                          <p className="text-sm text-gray-500">{sdk.language}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(sdk.category)}`}>
                        {sdk.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-400">{sdk.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-gray-400">{sdk.version}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-400">{sdk.downloads}</span>
                        </div>
                      </div>
                      <span className="text-gray-500">{sdk.license}</span>
                    </div>

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
                    
                    {sdk.npmUrl && (
                      <div className="bg-gray-900 p-3 rounded-lg">
                        <code className="text-sm text-green-400">{sdk.npmUrl}</code>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <Link 
                        href={sdk.documentationUrl}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        <Book className="w-4 h-4 mr-1" />
                        Documentation
                      </Link>
                      <a 
                        href={sdk.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        <GitBranch className="w-4 h-4 mr-1" />
                        GitHub
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Domain-Specific SDKs */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Domain-Specific SDKs</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Specialized SDKs for infrastructure, application, and enterprise use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domainSDKs.map((sdk, index) => (
                <div key={index} className="card group">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-blue-400 group-hover:scale-110 transition-transform">
                          {sdk.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                            {sdk.name}
                          </h3>
                          <p className="text-xs text-gray-500">{sdk.language}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(sdk.category)}`}>
                        {sdk.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm">{sdk.description}</p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-400">{sdk.version}</span>
                        <span className="text-gray-400">{sdk.downloads}</span>
                      </div>
                      <span className="text-gray-500">{sdk.license}</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-800">
                      <Link 
                        href={sdk.documentationUrl}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm"
                      >
                        <Book className="w-3 h-3 mr-1" />
                        Docs
                      </Link>
                      <a 
                        href={sdk.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm"
                      >
                        <GitBranch className="w-3 h-3 mr-1" />
                        GitHub
                        <ExternalLink className="w-2 h-2 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLI & Tooling */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">CLI & Development Tools</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Command-line tools, IDE extensions, and development utilities to boost productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Link key={index} href={tool.url} className="card group block">
                  <div className="space-y-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-500">{tool.category}</p>
                    </div>
                    <p className="text-sm text-gray-400">{tool.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Getting Started</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Quick code examples to integrate Sky Genesis Enterprise services in minutes.
              </p>
            </div>

            <div className="space-y-12">
              {codeExamples.map((example, index) => (
                <div key={index} className="card">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{example.title}</h3>
                        <p className="text-sm text-gray-500">{example.language}</p>
                      </div>
                      <span className="text-sm bg-gray-800 px-3 py-1 rounded-full">
                        {example.language}
                      </span>
                    </div>
                    
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <div className="mb-3">
                        <code className="text-sm text-green-400">{example.installation}</code>
                      </div>
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/docs/quickstarts" className="btn-secondary">
                <Rocket className="w-5 h-5" />
                View All Quickstarts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source & Governance */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Open Source & Governance</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Our SDKs are open source with transparent governance and community-driven development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <GitBranch className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">SGE-PL-1.0 Licensed</h3>
                  <p className="text-gray-400 text-sm">
                    All our SDKs are released under the SGE-PL-1.0 license, ensuring commercial-friendly usage.
                  </p>
                  <Link href="/license" className="text-blue-400 hover:text-blue-300 font-medium">
                    View License
                  </Link>
                </div>
              </div>

              <div className="card text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <Building className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">European Governance</h3>
                  <p className="text-gray-400 text-sm">
                    Governed by European standards with GDPR compliance and digital sovereignty principles.
                  </p>
                  <Link href="/governance" className="text-blue-400 hover:text-blue-300 font-medium">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Contribute to Our SDKs</h3>
                  <p className="text-gray-300 mb-6">
                    Join our community of developers contributing to future of enterprise SDKs. 
                    Report bugs, suggest features, and submit pull requests on GitHub.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="https://github.com/skygenesisenterprise" className="btn-primary">
                      <GitBranch className="w-5 h-5" />
                      View on GitHub
                    </Link>
                    <Link href="/docs/contribute" className="btn-secondary">
                      <Book className="w-5 h-5" />
                      Contribution Guidelines
                    </Link>
                  </div>
                </div>
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
              Start Building with
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Enterprise SDKs
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Integrate powerful enterprise services into your applications with our comprehensive SDK ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/docs/sdks" className="btn-primary">
                <Book className="w-5 h-5" />
                Browse SDK Documentation
              </Link>
              <Link href="https://github.com/skygenesisenterprise" className="btn-secondary">
                <GitBranch className="w-5 h-5" />
                View on GitHub
              </Link>
              <Link href="/docs/quickstarts" className="btn-secondary">
                <Rocket className="w-5 h-5" />
                Quick Start Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}