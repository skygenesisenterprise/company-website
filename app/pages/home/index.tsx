'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Users, Globe, Cpu, Database, Lock, Zap, Code, Briefcase, BookOpen, ChevronRight } from 'lucide-react';

export default function HomePage() {
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
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            {/* Enterprise badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-12 hover:border-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Sky Genesis Enterprise
            </div>

            {/* Main title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight mx-auto">
              <div className="max-w-5xl mx-auto">
                Building the Next Generation
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  of Enterprise Infrastructure
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
              <p>
                Sky Genesis Enterprise develops unified platforms for secure collaboration, 
                governance, and large-scale digital operations.
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="/aether-office" 
                className="bg-white text-black px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-base lg:text-lg whitespace-nowrap"
              >
                Discover Aether Office
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/vision" 
                className="border border-white/20 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-base lg:text-lg whitespace-nowrap"
              >
                Explore Our Vision
              </Link>
            </div>

            {/* Enterprise metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-5xl mx-auto px-4">
              <div className="text-center p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">99.99%</div>
                <div className="text-xs lg:text-sm text-gray-400">Uptime SLA</div>
              </div>
              <div className="text-center p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">&lt;50ms</div>
                <div className="text-xs lg:text-sm text-gray-400">Global Latency</div>
              </div>
              <div className="text-center p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">Zero</div>
                <div className="text-xs lg:text-sm text-gray-400">Trust Architecture</div>
              </div>
              <div className="text-center p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">SOC2</div>
                <div className="text-xs lg:text-sm text-gray-400">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP OVERVIEW */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
          <div className="mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Enterprise Divisions
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Specialized business units delivering comprehensive solutions for modern enterprises.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4">Aether Office</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm lg:text-base">
                  Unified workspace platform for enterprise collaboration, productivity, and digital operations.
                </p>
                <Link href="/aether-office" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center justify-center">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Code className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4">Giteria</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm lg:text-base">
                  Open-source developer collaboration platform with enterprise-grade security and scalability.
                </p>
                <Link href="/giteria" className="text-green-400 hover:text-green-300 font-semibold flex items-center justify-center">
                  Explore platform <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4">Governance Systems</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm lg:text-base">
                  Orchestration, security, and zero-trust architecture for enterprise digital sovereignty.
                </p>
                <Link href="/governance" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center justify-center">
                  Discover solutions <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
              <div className="max-w-4xl mx-auto">
                Our Vision for
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Digital Independence
                </span>
              </div>
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
              <p>
                At Sky Genesis Enterprise, we believe in technological sovereignty built on European values 
                of privacy, security, and long-term innovation.
              </p>
              <p className="text-xl md:text-2xl text-white font-light italic">
                "We design technologies built for durability, control, and independence."
              </p>
              <p>
                Our commitment extends beyond products to creating an ecosystem where organizations 
                maintain complete control over their digital infrastructure while accessing world-class 
                enterprise capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-20 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">Sovereign</div>
                <div className="text-gray-400 text-sm lg:text-base">European-hosted infrastructure</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">Secure</div>
                <div className="text-gray-400 text-sm lg:text-base">Zero-trust by design</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">Scalable</div>
                <div className="text-gray-400 text-sm lg:text-base">Enterprise-grade performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AETHER OFFICE FEATURE */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-6">
                Featured Product
              </div>
              <h2 className="text-5xl font-bold mb-6 text-center">
                Aether Office
                <br />
                <span className="text-2xl text-gray-400 font-normal">Enterprise Workspace Platform</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                The unified workspace platform that brings together collaboration, productivity, 
                and governance in a single, secure environment designed for enterprise scale.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Unified workspace for seamless collaboration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Real-time collaboration with enterprise security</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Zero-trust network access (ZTNA) architecture</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Internal ecosystem of enterprise applications</span>
                </div>
              </div>

              <Link 
                href="/aether-office" 
                className="inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn more about Aether Office
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-blue-400" />
                    </div>
                    <p className="text-gray-400">Aether Office Interface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE PILLARS */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold">
            Enterprise Pillars
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            The foundational principles that guide our enterprise architecture and service delivery.
          </p>
        </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-all duration-300">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Security & Zero-Trust</h3>
              <p className="text-gray-400 leading-relaxed">
                Enterprise-grade security with zero-trust architecture built into every layer.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-all duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reliability & Scalability</h3>
              <p className="text-gray-400 leading-relaxed">
                99.99% uptime with infrastructure that scales seamlessly with your growth.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-all duration-300">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Internal Technology Control</h3>
              <p className="text-gray-400 leading-relaxed">
                Full control over your technology stack with open-source transparency.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-all duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Open & Interoperable</h3>
              <p className="text-gray-400 leading-relaxed">
                Standards-based architecture ensuring seamless integration and future-proofing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN-SOURCE & DEVELOPER ECOSYSTEM */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold">
            Developer Ecosystem
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Open-source commitment with enterprise-grade tools and comprehensive developer resources.
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Giteria Platform</h3>
              <p className="text-gray-400 mb-4">
                Open-source collaboration platform with enterprise features.
              </p>
              <Link href="/giteria" className="text-green-400 hover:text-green-300 font-semibold">
                Explore Giteria
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">APIs & SDKs</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive APIs and SDKs for seamless integration.
              </p>
              <Link href="/developers" className="text-blue-400 hover:text-blue-300 font-semibold">
                View Documentation
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Developer Portal</h3>
              <p className="text-gray-400 mb-4">
                Complete documentation, tutorials, and developer resources.
              </p>
              <Link href="/developers" className="text-purple-400 hover:text-purple-300 font-semibold">
                Visit Portal
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/developers" 
              className="inline-flex items-center bg-white text-black px-10 py-5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Visit Developer Portal
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* INSDE SKY GENESIS Enterprise & CAREERS */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Blog & Press */}
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-8 text-center">Inside Sky Genesis Enterprise</h2>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-sm text-gray-400 mb-2">Product Announcement</div>
                  <h3 className="text-xl font-bold mb-2">Aether Office 2.0: Next-Gen Enterprise Workspace</h3>
                  <p className="text-gray-400 mb-4">
                    Introducing revolutionary features for enterprise collaboration and governance.
                  </p>
                  <Link href="/blog/aether-office-2" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Read more
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-sm text-gray-400 mb-2">Technical Article</div>
                  <h3 className="text-xl font-bold mb-2">Building Zero-Trust Architecture at Scale</h3>
                  <p className="text-gray-400 mb-4">
                    Deep dive into our security-first approach to enterprise infrastructure.
                  </p>
                  <Link href="/blog/zero-trust" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Read more
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-sm text-gray-400 mb-2">Company News</div>
                  <h3 className="text-xl font-bold mb-2">Sky Genesis Achieves SOC 2 Type II Certification</h3>
                  <p className="text-gray-400 mb-4">
                    Milestone in our commitment to enterprise security and compliance.
                  </p>
                  <Link href="/press/soc2-certification" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Read more
                  </Link>
                </div>
              </div>
            </div>

            {/* Careers */}
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-8 text-center">Careers</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Join our team of engineers, researchers, and visionaries building the future 
                  of enterprise technology in Europe.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                    <span className="text-gray-300">Excellence in engineering and research</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                    <span className="text-gray-300">Culture of innovation and continuous learning</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                    <span className="text-gray-300">Long-term vision with European values</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                    <span className="text-gray-300">Competitive compensation and benefits</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Open Positions</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span>Senior Security Engineer</span>
                      <Link href="/careers/security-engineer" className="text-blue-400 hover:text-blue-300 text-sm">
                        Apply →
                      </Link>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span>Enterprise Solutions Architect</span>
                      <Link href="/careers/solutions-architect" className="text-blue-400 hover:text-blue-300 text-sm">
                        Apply →
                      </Link>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span>Product Manager, Aether Office</span>
                      <Link href="/careers/product-manager" className="text-blue-400 hover:text-blue-300 text-sm">
                        Apply →
                      </Link>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/careers" 
                  className="inline-flex items-center bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 w-full justify-center"
                >
                  Explore Careers
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}