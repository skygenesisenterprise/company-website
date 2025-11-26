'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  Shield, 
  Users, 
  Globe, 
  Database, 
  Lock, 
  Zap, 
  Code, 
  BookOpen, 
  Target,
  Building,
  Cloud,
  FileText,
  Rocket,
  Award,
  GitBranch,
  Server,
  Activity,
  CheckCircle,
  Star,
  Eye,
  UserCheck,
  TrendingUp
} from 'lucide-react';

export default function HomePage() {
  // Security: Sanitize text content for future dynamic data
  // const sanitizeText = (text: string): string => {
  //   return text.replace(/[<>'"&]/g, '');
  // };
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
                Redefining European
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Digital Sovereignty
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4">
              <p>
                Sky Genesis Enterprise develops unified platforms for secure collaboration, 
                governance, and large-scale digital operations.
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="/office" 
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                Discover Aether Office
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/vision" 
                className="border border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
              >
                Explore Our Vision
              </Link>
            </div>
          </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Mission & Vision
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Building the foundation for European digital sovereignty through enterprise-grade infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/20 rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To engineer and deliver sovereign enterprise infrastructure that empowers European organizations with complete technological independence, security, and control over their digital future.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 rounded-2xl p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  A Europe where every organization has access to world-class, sovereign technology that respects European values, protects data sovereignty, and enables unprecedented innovation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">Security</div>
                <div className="text-sm text-gray-400">Zero-trust architecture</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Innovation</div>
                <div className="text-sm text-gray-400">Open-source foundation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Sovereignty</div>
                <div className="text-sm text-gray-400">European infrastructure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">Enterprise</div>
                <div className="text-sm text-gray-400">Grade solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT ECOSYSTEM OVERVIEW */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Product Ecosystem
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Comprehensive solutions for the modern enterprise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Aether Office</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Complete enterprise workspace with Mail, Drive, Meet, Chat, Docs, Sheets, and more.
                </p>
                <Link href="/office" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                  Explore →
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-all duration-300">
                  <Cloud className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cloud & Infrastructure</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  SkyCompute, SkyDB, Network, Storage, and enterprise-grade cloud services.
                </p>
                <Link href="/solutions/infrastructure" className="text-green-400 hover:text-green-300 font-semibold flex items-center">
                  Explore →
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-all duration-300">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Developer Platform</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  APIs, SDKs, comprehensive documentation, and open-source tools.
                </p>
                <Link href="/developer/api" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center">
                  Explore →
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-all duration-300">
                  <Shield className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Security & Governance</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Zero-Trust, Compliance, Identity, and enterprise security solutions.
                </p>
                <Link href="/governance" className="text-orange-400 hover:text-orange-300 font-semibold flex items-center">
                  Explore →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SKY GENESIS - VALUE PROPOSITION */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Why Sky Genesis Enterprise
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                The competitive advantages that set us apart
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <GitBranch className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">Open-Source Foundation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Transparent, auditable codebase with community-driven innovation and no vendor lock-in.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">Sovereign Cloud & Infrastructure</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  European-hosted infrastructure with complete data residency and GDPR compliance by design.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Lock className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">End-to-End Security</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Zero-Trust architecture with military-grade encryption and comprehensive audit trails.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">Reliability & Scalability</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  99.99% uptime SLA with auto-scaling infrastructure and disaster recovery.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">Unified Digital Workplace</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Single platform for collaboration, productivity, and enterprise operations.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">European Excellence</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Built with European values, privacy standards, and long-term sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SPOTLIGHT */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Featured Products
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Flagship solutions powering enterprise transformation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/20 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Aether Office</h3>
                    <p className="text-blue-400">Enterprise Workspace Platform</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The complete digital workplace solution that unifies email, documents, collaboration, and productivity tools in a secure, sovereign environment. Features real-time collaboration, advanced security controls, and seamless integration with existing enterprise systems.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Real-time collaboration with enterprise security</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Complete suite: Mail, Drive, Meet, Chat, Docs, Sheets</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Zero-trust architecture and end-to-end encryption</span>
                  </div>
                </div>
                <Link href="/office" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                  Learn more about Aether Office
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/20 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                    <Database className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">SkyDB</h3>
                    <p className="text-green-400">Distributed Database Platform</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  High-performance distributed database designed for enterprise scale with built-in security, automatic sharding, and multi-region replication. Optimized for both transactional and analytical workloads with guaranteed consistency and performance.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Multi-region deployment with automatic failover</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">ACID compliance with distributed transactions</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Built-in encryption and fine-grained access control</span>
                  </div>
                </div>
                <Link href="/solutions/infrastructure" className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold">
                  Learn more about SkyDB
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC CONTENT SECTION */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Latest Updates
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Stay informed with our latest developments and insights
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-semibold">Latest Blog Posts</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="text-xs text-gray-500 mb-2">2 days ago</div>
                    <h4 className="font-semibold mb-2 hover:text-blue-400 transition-colors">
                      <Link href="/blog/zero-trust-implementation">Implementing Zero-Trust Architecture at Scale</Link>
                    </h4>
                    <p className="text-sm text-gray-400">Best practices and lessons learned from enterprise deployments.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="text-xs text-gray-500 mb-2">5 days ago</div>
                    <h4 className="font-semibold mb-2 hover:text-blue-400 transition-colors">
                      <Link href="/blog/european-data-sovereignty">The Future of European Data Sovereignty</Link>
                    </h4>
                    <p className="text-sm text-gray-400">How sovereign infrastructure is reshaping enterprise IT.</p>
                  </div>
                </div>
                <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center">
                  View all posts <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Activity className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-semibold">Changelog</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="text-xs text-gray-500 mb-2">v2.4.1 • 1 day ago</div>
                    <h4 className="font-semibold mb-2">Aether Office Security Update</h4>
                    <p className="text-sm text-gray-400">Enhanced encryption protocols and security patches.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="text-xs text-gray-500 mb-2">v1.8.3 • 3 days ago</div>
                    <h4 className="font-semibold mb-2">SkyDB Performance Improvements</h4>
                    <p className="text-sm text-gray-400">30% faster query performance and reduced latency.</p>
                  </div>
                </div>
                <Link href="/changelog" className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center">
                  View all updates <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold">Whitepapers</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="text-xs text-gray-500 mb-2">New</div>
                    <h4 className="font-semibold mb-2 hover:text-purple-400 transition-colors">
                      <Link href="/whitepaper/zero-trust">Zero-Trust Security Framework</Link>
                    </h4>
                    <p className="text-sm text-gray-400">Comprehensive guide to implementing zero-trust architecture.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="text-xs text-gray-500 mb-2">Featured</div>
                    <h4 className="font-semibold mb-2 hover:text-purple-400 transition-colors">
                      <Link href="/whitepaper/digital-sovereignty">European Digital Sovereignty</Link>
                    </h4>
                    <p className="text-sm text-gray-400">Building independent digital infrastructure for Europe.</p>
                  </div>
                </div>
                <Link href="/whitepaper" className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
                  View all whitepapers <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN-SOURCE INVOLVEMENT */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Open-Source Commitment
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                We believe in transparent, collaborative development. Our core infrastructure is open-source, 
                ensuring auditability, community innovation, and freedom from vendor lock-in.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/20 rounded-2xl p-8 text-center hover:bg-green-900/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-all duration-300">
                  <GitBranch className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-sm text-gray-400 mb-4">Open-source projects</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Active contributions to enterprise-grade open-source initiatives
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/20 rounded-2xl p-8 text-center hover:bg-blue-900/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">1M+</div>
                <div className="text-sm text-gray-400 mb-4">Lines of code contributed</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Enterprise-grade code with comprehensive documentation
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 rounded-2xl p-8 text-center hover:bg-purple-900/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30 transition-all duration-300">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">Active</div>
                <div className="text-sm text-gray-400 mb-4">Global Community</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Thriving ecosystem of contributors driving innovation and excellence
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm mb-8">
                <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                100% Transparent & Auditable
              </div>
              <Link 
                href="/developer/open-source" 
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 text-lg"
              >
                Explore Open-Source Projects
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS HIGHLIGHT */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm mb-8">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
                We&apos;re Expanding Our Team
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Shape the Future of European Technology
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Join our team of engineers, researchers, and visionaries building sovereign enterprise infrastructure 
                that will define the next decade of European digital independence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/10 border border-orange-500/20 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Why Join Us</h3>
                    <p className="text-orange-400 text-sm">Build what matters</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white mb-1">Competitive Excellence</div>
                      <div className="text-sm text-gray-400">Top-tier compensation, equity, and comprehensive benefits</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white mb-1">Remote-First Culture</div>
                      <div className="text-sm text-gray-400">Work from anywhere with flexible schedules</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white mb-1">European Impact</div>
                      <div className="text-sm text-gray-400">Shape digital sovereignty across Europe</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/10 border border-blue-500/20 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                    <UserCheck className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">We&apos;re Looking For</h3>
                    <p className="text-blue-400 text-sm">Talent that drives innovation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-white mb-1">Senior Security Engineers</div>
                      <div className="text-sm text-gray-400">Zero-trust architecture and enterprise security</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-white mb-1">Solutions Architects</div>
                      <div className="text-sm text-gray-400">Enterprise-scale system design</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-white mb-1">Product Managers</div>
                      <div className="text-sm text-gray-400">Drive our core product vision</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm mb-8">
                <TrendingUp className="w-4 h-4 mr-3" />
                15+ Open Positions Across Europe
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/careers" 
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:-translate-y-1 text-lg"
                >
                  Explore Career Opportunities
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
                <Link 
                  href="/careers#culture" 
                  className="inline-flex items-center border border-white/20 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-lg"
                >
                  Learn About Our Culture
                  <Eye className="w-5 h-5 ml-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ECOSYSTEM ENGAGEMENT */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-8">
                <Target className="w-4 h-4 mr-3" />
                Strategic Vision & Future Engagement
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Shaping Tomorrow&apos;s Digital Landscape
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                We actively engage with pioneering organizations and initiatives that are defining the future of 
                European technology, open-source innovation, and digital sovereignty.
              </p>
            </div>

            <div className="space-y-20">
              {/* Technology & Open-Source Foundations */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">Technology & Open-Source Foundations</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {[
                    { name: 'Linux Foundation', description: 'Enterprise Linux ecosystem', status: 'Active Contributor' },
                    { name: 'CNCF', description: 'Cloud Native Computing', status: 'Strategic Partner' },
                    { name: 'OpenAPI Initiative', description: 'API standards', status: 'Standards Committee' },
                    { name: 'SPDX', description: 'Software licensing', status: 'Technical Advisor' },
                    { name: 'OpenSSF', description: 'Open source security', status: 'Security Working Group' },
                    { name: 'The Document Foundation', description: 'Document standards', status: 'Enterprise Member' },
                    { name: 'Open Source Europe Initiative', description: 'European open source', status: 'Founding Supporter' }
                  ].map((org, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-gray-700 rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <div className="w-6 h-6 bg-gray-600 rounded"></div>
                        </div>
                        <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {org.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {org.description}
                        </div>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">
                            {org.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standards & Regulatory Ecosystem */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">Standards & Regulatory Ecosystem</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { name: 'ISO Ecosystem', description: 'International standards', status: 'Compliance Framework' },
                    { name: 'ETSI', description: 'Telecom standards', status: 'Technical Committee' },
                    { name: 'ENISA Programs', description: 'Cybersecurity agency', status: 'Security Partner' },
                    { name: 'eIDAS Ecosystem', description: 'Digital identity', status: 'Identity Framework' }
                  ].map((org, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-gray-700 rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <div className="w-6 h-6 bg-gray-600 rounded"></div>
                        </div>
                        <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {org.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {org.description}
                        </div>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400">
                            {org.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* European Digital Sovereignty Initiatives */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">European Digital Sovereignty Initiatives</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { name: 'Gaia-X', description: 'European data infrastructure', status: 'Core Contributor' },
                    { name: 'European Cloud Industrial Alliance', description: 'Cloud sovereignty', status: 'Founding Member' },
                    { name: 'EU Digital Innovation Hubs', description: 'Innovation network', status: 'Strategic Partner' }
                  ].map((org, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-gray-700 rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <div className="w-6 h-6 bg-gray-600 rounded"></div>
                        </div>
                        <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {org.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {org.description}
                        </div>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400">
                            {org.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry-Specific Participations */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">Industry-Specific Participations</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { name: 'Banking & FinTech Networks', description: 'Financial technology', status: 'Enterprise Solutions' },
                    { name: 'Cloud & Infrastructure Ecosystems', description: 'Infrastructure alliances', status: 'Technical Leadership' },
                    { name: 'Aerospace Technology Consortia', description: 'Aerospace innovation', status: 'Innovation Partner' },
                    { name: 'Logistics Innovation Alliances', description: 'Supply chain tech', status: 'Digital Transformation' }
                  ].map((org, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-gray-700 rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <div className="w-6 h-6 bg-gray-600 rounded"></div>
                        </div>
                        <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {org.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {org.description}
                        </div>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs text-orange-400">
                            {org.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-20">
              <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm mb-8">
                <TrendingUp className="w-4 h-4 mr-3" />
                Committed to European Digital Excellence
              </div>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Our strategic engagement with these pioneering organizations ensures we remain at the forefront 
                of technological innovation while actively shaping the future of European digital sovereignty 
                and enterprise infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/company/about" 
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Our Strategic Vision
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  href="/governance" 
                  className="inline-flex items-center border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Governance Framework
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION CALL-TO-ACTION */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-8">
                <Zap className="w-4 h-4 mr-3" />
                Start Your Digital Transformation Journey
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Transform Your Enterprise with 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  European Sovereignty
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed ">
                Join leading European enterprises choosing sovereign infrastructure that combines security, 
                innovation, and complete digital independence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/20 rounded-2xl p-8 text-center hover:bg-blue-900/30 transition-all duration-300 group">
                <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                  <Building className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Consultation</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  Personalized roadmap assessment and strategic planning for your digital transformation
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Free initial consultation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Custom migration strategy</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Dedicated success team</span>
                  </div>
                </div>
                <Link 
                  href="/contact/sales" 
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/20 rounded-2xl p-8 text-center hover:bg-green-900/30 transition-all duration-300 group">
                <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-all duration-300">
                  <Users className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Experience Aether Office</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  Start your 30-day free trial and discover the future of enterprise collaboration
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">No credit card required</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Full feature access</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Free migration support</span>
                  </div>
                </div>
                <Link 
                  href="/office" 
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Free Trial
                  <Rocket className="w-5 h-5 ml-3" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 rounded-2xl p-8 text-center hover:bg-purple-900/30 transition-all duration-300 group">
                <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30 transition-all duration-300">
                  <Server className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Explore Complete Platform</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  Discover our full ecosystem of sovereign enterprise solutions and developer tools
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Interactive product demos</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Technical documentation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-gray-300">Developer resources</span>
                  </div>
                </div>
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Explore Solutions
                  <Eye className="w-5 h-5 ml-3" />
                </Link>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm mb-8">
                <Award className="w-4 h-4 mr-3" />
                Trusted by 500+ European Enterprises
              </div>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Ready to join the movement toward European digital sovereignty? 
                Our team is here to guide your transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/company/about" 
                  className="inline-flex items-center border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Learn About Our Mission
                  <Target className="w-5 h-5 ml-3" />
                </Link>
                <Link 
                  href="/vision" 
                  className="inline-flex items-center border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Read Our Vision
                  <Globe className="w-5 h-5 ml-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}