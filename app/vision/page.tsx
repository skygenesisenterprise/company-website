'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Users, Globe, Cpu, Database, Lock, Zap, Code, ChevronRight, Target, Sparkles, TrendingUp, Award, CheckCircle } from 'lucide-react';

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background"></div>
        
        {/* Tech grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-muted/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            {/* Enterprise badge */}
            <div className="inline-flex items-center px-6 py-3 bg-card/50 backdrop-blur-sm border border rounded-full text-sm text-muted-foreground mb-12 hover:border-muted-foreground/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Our Vision for the Future
            </div>

            {/* Main title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight mx-auto">
              <div className="max-w-5xl mx-auto">
                Digital Independence
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Through Sovereign Technology
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
              <p>
                We envision a world where organizations maintain complete control over their digital infrastructure 
                while accessing world-class enterprise capabilities built on European values of privacy, security, and innovation.
              </p>
            <p className="text-muted-foreground italic">
              &quot;Technologies built for durability, control, and independence.&quot;
            </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 px-4">
              <Link 
                href="/aether-office" 
                className="bg-foreground text-background px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-muted transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-base lg:text-lg whitespace-nowrap"
              >
                Explore Our Ecosystem
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/blog" 
                className="border border text-foreground px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-card/50 transition-all duration-300 text-base lg:text-lg whitespace-nowrap"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="py-24 bg-gradient-to-b from-background to-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Our Guiding Principles
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The foundational values that shape every decision we make and every solution we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-8 hover:bg-card transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Sovereign</h3>
                <p className="text-muted-foreground leading-relaxed">
                  European-hosted infrastructure with full data sovereignty and compliance with GDPR, ensuring your digital assets remain under your control.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-all duration-300">
                  <Lock className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Secure</h3>
                <p className="text-gray-400 leading-relaxed">
                  Zero-trust architecture built into every layer, with end-to-end encryption and enterprise-grade security protocols as standard.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30 transition-all duration-300">
                  <Zap className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Scalable</h3>
                <p className="text-gray-400 leading-relaxed">
                  Enterprise-grade performance with 99.99% uptime SLA, designed to scale seamlessly from startups to global enterprises.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/30 transition-all duration-300">
                  <Cpu className="w-10 h-10 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Open</h3>
                <p className="text-gray-400 leading-relaxed">
                  Open-source integration with transparent technology stacks, ensuring no vendor lock-in and full customization capabilities.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-500/30 transition-all duration-300">
                  <Globe className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Interoperable</h3>
                <p className="text-gray-400 leading-relaxed">
                  Standards-based architecture ensuring seamless integration with existing systems and future-proof technology investments.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-500/30 transition-all duration-300">
                  <Users className="w-10 h-10 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Human-Centric</h3>
                <p className="text-gray-400 leading-relaxed">
                  Designed for people with intuitive interfaces and comprehensive support, ensuring technology serves human needs not the other way around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGICAL APPROACH */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-6">
                  <Code className="w-4 h-4 mr-2" />
                  Our Technology Stack
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Building for
                  <br />
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Digital Sovereignty
                  </span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Our approach combines cutting-edge technology with European values of privacy, 
                  security, and long-term sustainability to create truly independent digital infrastructure.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Zero-Trust Security Architecture</h3>
                      <p className="text-gray-400">
                        Every component operates under zero-trust principles with continuous verification, 
                        end-to-end encryption, and granular access controls.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">European Data Residency</h3>
                      <p className="text-gray-400">
                        All infrastructure hosted within European borders with full GDPR compliance 
                        and data protection by design principles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Open-Source Foundation</h3>
                      <p className="text-gray-400">
                        Built on transparent, auditable open-source technologies with no vendor lock-in 
                        and full customization capabilities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Enterprise-Grade Performance</h3>
                      <p className="text-gray-400">
                        Optimized for high availability with 99.99% uptime SLA, global CDN, and 
                        sub-50ms latency for critical operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="aspect-square bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto">
                          <Shield className="w-8 h-8 text-blue-400" />
                        </div>
                        <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto">
                          <Database className="w-8 h-8 text-green-400" />
                        </div>
                        <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto">
                          <Code className="w-8 h-8 text-purple-400" />
                        </div>
                        <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto">
                          <Zap className="w-8 h-8 text-orange-400" />
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">Integrated Technology Stack</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT TO CLIENTS */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Empowering Your
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Digital Independence
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                We&apos;re committed to helping organizations maintain complete control over their digital infrastructure 
                while accessing enterprise-grade capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold">Full Data Control</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Maintain complete ownership and control over your data with transparent data policies and no hidden data mining.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold">Custom Integration</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Seamlessly integrate with existing systems through comprehensive APIs and flexible deployment options.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold">Expert Support</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Access 24/7 enterprise support with dedicated account managers and technical consultants.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold">Compliance Ready</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Built to meet GDPR, SOC 2, ISO 27001, and other regulatory requirements out of the box.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold">Future-Proof</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Regular updates and innovation roadmap ensuring your infrastructure evolves with technology.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold">Cost Predictable</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Transparent pricing with no hidden fees and predictable scaling costs for long-term planning.
                </p>
              </div>
            </div>

            {/* Client Success Metrics */}
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400 mb-8">
                <Award className="w-4 h-4 mr-2" />
                Trusted by Leading Organizations
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-sm text-gray-400">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10M+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE ROADMAP */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Our Vision for
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Tomorrow&apos;s Enterprise
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Innovation roadmap focused on expanding capabilities while maintaining our core principles 
                of sovereignty, security, and openness.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-400 mb-1">2024-2025</div>
                    <h3 className="text-xl font-bold">Foundation Expansion</h3>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Advanced AI integration across all platforms</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Enhanced zero-trust security protocols</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Expanded European data center presence</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Next-generation collaboration tools</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-purple-400 mb-1">2025-2026</div>
                    <h3 className="text-xl font-bold">Ecosystem Growth</h3>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quantum-resistant cryptography integration</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Advanced analytics and business intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Industry-specific solution packages</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Global partner network expansion</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-green-400 mb-1">2026+</div>
                    <h3 className="text-xl font-bold">Innovation Leadership</h3>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Autonomous infrastructure management</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Edge computing integration</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Advanced sustainability metrics</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Next-gen user experience paradigms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Performance &
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Reliability Metrics
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Enterprise-grade performance backed by comprehensive SLAs and industry certifications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">99.99%</div>
                <div className="text-sm text-gray-400">Uptime SLA</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">&lt;50ms</div>
                <div className="text-sm text-gray-400">Global Latency</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">Zero</div>
                <div className="text-sm text-gray-400">Trust Architecture</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">SOC2</div>
                <div className="text-sm text-gray-400">Compliant</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">ISO 27001</h3>
                <p className="text-sm text-gray-400">Information Security Management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">GDPR</h3>
                <p className="text-sm text-gray-400">Data Protection Compliance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">CSA STAR</h3>
                <p className="text-sm text-gray-400">Cloud Security Alliance Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Build Your
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Digital Future?
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Join organizations worldwide who are choosing sovereignty, security, and innovation 
                for their enterprise infrastructure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  href="/aether-office" 
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group"
                >
                  Explore Aether Office
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-400">
                <Link href="/blog" className="hover:text-white transition-colors">
                  Read our blog
                </Link>
                <Link href="/developers" className="hover:text-white transition-colors">
                  Developer resources
                </Link>
                <Link href="/newsletter" className="hover:text-white transition-colors">
                  Subscribe to updates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}