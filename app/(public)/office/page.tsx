'use client';


import Link from 'next/link';
import { 
  Mail, 
  Video, 
  HardDrive, 
  FileText, 
  Globe, 
  Play, 
  HelpCircle, 
  Calendar, 
  Table, 
  ClipboardList,
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  BarChart3,
  Settings,
  Rocket,
  Building2,
  Github,
  Lock,
  MessageSquare,
  Cpu,
  Cloud,
  Award,
  Target
} from 'lucide-react';

export default function AetherOffice() {

  // Security: Validate CSS classes to prevent injection
  const allowedColors = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600', 
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600',
    'from-pink-500 to-pink-600',
    'from-red-500 to-red-600',
    'from-indigo-500 to-indigo-600',
    'from-teal-500 to-teal-600',
    'from-emerald-500 to-emerald-600',
    'from-cyan-500 to-cyan-600'
  ];

  // Security: Validate GitHub URLs to prevent phishing
  const isValidGitHubUrl = (url: string): boolean => {
    try {
      const parsed = new URL(url);
      return parsed.hostname === 'github.com' && parsed.pathname.startsWith('/');
    } catch {
      return false;
    }
  };

  // Security: Sanitize text content for attributes
  const sanitizeText = (text: string): string => {
    return text.replace(/[<>'"&]/g, '');
  };

  const applications = [
    {
      id: 'mail',
      name: 'Aether Mail',
      description: 'Secure enterprise email',
      icon: Mail,
      color: 'from-blue-500 to-blue-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-mail',
      features: ['End-to-end encryption', 'Advanced spam filtering', 'Calendar integration']
    },
    {
      id: 'meet',
      name: 'Aether Meet',
      description: 'Video conferencing & team meetings',
      icon: Video,
      color: 'from-green-500 to-green-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-meet',
      features: ['HD video quality', 'Screen sharing', 'Recording capabilities']
    },
    {
      id: 'drive',
      name: 'Aether Drive',
      description: 'Cloud storage & file management',
      icon: HardDrive,
      color: 'from-purple-500 to-purple-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-drive',
      features: ['Unlimited storage', 'Version control', 'Real-time collaboration']
    },
    {
      id: 'slide',
      name: 'Aether Slide',
      description: 'Presentations',
      icon: FileText,
      color: 'from-orange-500 to-orange-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-slide',
      features: ['Professional templates', 'Real-time editing', 'Export options']
    },
    {
      id: 'sites',
      name: 'Aether Sites',
      description: 'Internal or public site creation',
      icon: Globe,
      color: 'from-pink-500 to-pink-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-sites',
      features: ['Drag-and-drop builder', 'Responsive design', 'Custom domains']
    },
    {
      id: 'vids',
      name: 'Aether Vids',
      description: 'Enterprise video hosting',
      icon: Play,
      color: 'from-red-500 to-red-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-vids',
      features: ['Secure hosting', 'Analytics', 'Embedding options']
    },
    {
      id: 'desk',
      name: 'Aether Desk',
      description: 'Support & ticketing system',
      icon: HelpCircle,
      color: 'from-indigo-500 to-indigo-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-desk',
      features: ['Ticket management', 'Knowledge base', 'SLA tracking']
    },
    {
      id: 'calendar',
      name: 'Aether Calendar',
      description: 'Scheduling & events',
      icon: Calendar,
      color: 'from-teal-500 to-teal-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-calendar',
      features: ['Shared calendars', 'Meeting scheduling', 'Reminders']
    },
    {
      id: 'sheet',
      name: 'Aether Sheet',
      description: 'Spreadsheets & analytics',
      icon: Table,
      color: 'from-emerald-500 to-emerald-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-sheet',
      features: ['Advanced formulas', 'Data visualization', 'Collaboration']
    },
    {
      id: 'form',
      name: 'Aether Form',
      description: 'Surveys & data collection',
      icon: ClipboardList,
      color: 'from-cyan-500 to-cyan-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-form',
      features: ['Custom forms', 'Data analysis', 'Automated workflows']
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Zero-trust architecture with end-to-end encryption for all your enterprise data.',
      features: ['Zero-trust architecture', 'End-to-end encryption', 'GDPR compliant']
    },
    {
      icon: Zap,
      title: 'Scalability & Performance',
      description: 'Enterprise-grade infrastructure that scales with your organization&apos;s needs.',
      features: ['99.9% uptime SLA', 'Auto-scaling', 'Global CDN']
    },
    {
      icon: Users,
      title: 'Unified Interface',
      description: 'Single platform for all enterprise applications with seamless integration.',
      features: ['Single sign-on', 'Unified dashboard', 'Cross-app workflows']
    },
    {
      icon: Building2,
      title: 'European Digital Sovereignty',
      description: 'Data residency and compliance with European digital sovereignty requirements.',
      features: ['EU data centers', 'GDPR compliance', 'Local data processing']
    },
    {
      icon: TrendingUp,
      title: 'Cost Efficiency',
      description: 'Centralized management reduces operational costs and improves productivity.',
      features: ['Consolidated billing', 'Reduced overhead', 'ROI optimization']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Automation',
      description: 'Advanced analytics and workflow automation to drive business insights.',
      features: ['Real-time analytics', 'Custom workflows', 'AI-powered insights']
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
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            {/* Enterprise badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-12 hover:border-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Aether Office Platform
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-white">Aether</span>
                  <span className="text-white">Office</span>
                </div>
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-xl sm:text-2xl md:text-4xl lg:text-6xl font-normal leading-relaxed">
                  Your Complete Enterprise Workspace
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Collaborate, communicate, and create securely with our unified suite of enterprise applications. 
                Transform how your organization works with a single, integrated platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="https://office.skygenesisenterprise.com" 
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="https://office.skygenesisenterprise.com" 
                className="border border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
              >
                Request a Demo
              </Link>
            </div>


          </div>
        </div>
      </section>

      {/* APPLICATION SUITE */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Complete Application Suite
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-center">
              All your applications
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                unified in one platform
              </span>
            </h2>
            <div className="space-y-4 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center text-gray-300">
              <p>
                Communication, collaboration, productivity. Every application is designed 
                to work perfectly with others, creating an integrated ecosystem that 
                transforms the way you work.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {applications.map((app) => (
              <div 
                key={app.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${allowedColors.includes(app.color) ? app.color : 'from-gray-500 to-gray-600'} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* GitHub Link */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={isValidGitHubUrl(app.githubUrl) ? app.githubUrl : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                    aria-label={`View ${sanitizeText(app.name)} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${allowedColors.includes(app.color) ? app.color : 'from-gray-500 to-gray-600'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{app.description}</p>
                  
                  <div className="space-y-3">
                    {app.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center group">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400 mb-6">
              <Target className="w-4 h-4 mr-2" />
              Competitive Advantages
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-center">
              Why choose
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Aether Office
              </span>
            </h2>
            <div className="space-y-4 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center text-gray-300">
              <p>
                More than an application suite, a true digital transformation 
                for your business. Security, performance, and European digital sovereignty.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 mb-3 leading-relaxed">{benefit.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {benefit.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {benefits.slice(3, 6).map((benefit, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 mb-3 leading-relaxed">{benefit.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {benefit.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL INTEGRATIONS */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400 mb-6">
              <Settings className="w-4 h-4 mr-2" />
              Native Integrations
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-center">
              The unified
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Aether ecosystem
              </span>
            </h2>
            <div className="space-y-4 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center text-gray-300">
              <p>
                Every Aether service integrates seamlessly with Office to create 
                a consistent and powerful experience.
              </p>
            </div>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* Office + Identity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400">
                    <Lock className="w-4 h-4 mr-2" />
                    Office + Identity
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">
                    Unified authentication
                    <br />
                    <span className="text-blue-400">Centralized SSO</span>
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    One identity to access all your applications. 
                    Centralized permission management, multi-factor authentication, 
                    and built-in GDPR compliance.
                  </p>
                  <div className="space-y-3">
                    {['Single Sign-On (SSO)', 'Multi-factor authentication', 'Role-based access control'].map((item, index) => (
                      <div key={index} className="flex items-center text-gray-400">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 lg:p-12">
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <Lock className="w-16 h-16 lg:w-24 lg:h-24 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Office + Drive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 lg:p-12">
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    <Cloud className="w-16 h-16 lg:w-24 lg:h-24 text-purple-400" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400">
                  <Cloud className="w-4 h-4 mr-2" />
                  Office + Drive
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  Unlimited storage
                  <br />
                  <span className="text-purple-400">Smart sharing</span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Native integration with Aether Drive for secure storage 
                  and seamless sharing. Automatic versioning, real-time collaboration, 
                  and multi-device synchronization.
                </p>
                <div className="space-y-3">
                  {['Unlimited storage', 'Real-time collaboration', 'Version control & backup'].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-400">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Office + AI */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400">
                    <Cpu className="w-4 h-4 mr-2" />
                    Office + AI
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">
                    Artificial intelligence
                    <br />
                    <span className="text-green-400">Enhanced productivity</span>
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    AI assistants integrated into every application. Content generation, 
                    automatic analysis, intelligent suggestions, and automation 
                    of repetitive tasks.
                  </p>
                  <div className="space-y-3">
                    {['Smart content generation', 'Automated workflows', 'Predictive analytics'].map((item, index) => (
                      <div key={index} className="flex items-center text-gray-400">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 lg:p-12">
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <Cpu className="w-16 h-16 lg:w-24 lg:h-24 text-green-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Office + Admin Console */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 lg:p-12">
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center">
                    <Settings className="w-16 h-16 lg:w-24 lg:h-24 text-orange-400" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm text-orange-400">
                  <Settings className="w-4 h-4 mr-2" />
                  Office + Admin Console
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  Centralized administration
                  <br />
                  <span className="text-orange-400">Complete control</span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Unified administration console to manage all aspects of your 
                  Office ecosystem. Real-time monitoring, detailed reports, 
                  and security policy management.
                </p>
                <div className="space-y-3">
                  {['Centralized dashboard', 'Advanced monitoring', 'Security policy management'].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-400">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION IMPACT */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-sm text-yellow-400 mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Transformation Impact
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-center">
              How Aether Office
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                transforms work
              </span>
            </h2>
            <div className="space-y-4 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center text-gray-300">
              <p>
                Beyond tools and features, discover the real impact on daily operations, 
                collaboration, and business growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Impact 1: Collaboration Revolution */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Collaboration Revolution</h3>
                  <p className="text-gray-400 text-sm">Breaking silos</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-300 leading-relaxed">
                  Transform how teams work together with real-time collaboration across all applications. No more version conflicts or communication gaps.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="text-sm font-semibold text-blue-400">Key Impact</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Teams collaborate 5x faster with unified workspace and real-time editing capabilities
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Real-time document collaboration</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Cross-functional project spaces</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Unified communication channels</span>
                </div>
              </div>
            </div>

            {/* Impact 2: Security & Compliance */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Security by Design</h3>
                  <p className="text-gray-400 text-sm">Built-in protection</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-300 leading-relaxed">
                  Enterprise-grade security embedded in every layer. From encryption to compliance, protect your data without compromising productivity.
                </p>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Lock className="w-4 h-4 mr-2 text-purple-400" />
                    <span className="text-sm font-semibold text-purple-400">Key Impact</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Zero-trust architecture reduces security incidents by 85% while maintaining seamless user experience
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>GDPR & compliance automation</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>European data sovereignty</span>
                </div>
              </div>
            </div>

            {/* Impact 3: Productivity Amplification */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Productivity Amplified</h3>
                  <p className="text-gray-400 text-sm">Smart workflows</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-300 leading-relaxed">
                  AI-powered automation and intelligent workflows eliminate repetitive tasks, allowing teams to focus on high-value work that drives business growth.
                </p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Cpu className="w-4 h-4 mr-2 text-green-400" />
                    <span className="text-sm font-semibold text-green-400">Key Impact</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    AI automation saves 15+ hours per employee monthly while improving work quality by 40%
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>AI-powered content generation</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Automated workflow orchestration</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Smart task prioritization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Impact Metrics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">5x</div>
              <p className="text-gray-300 font-medium">Faster collaboration</p>
              <p className="text-gray-500 text-sm mt-1">Real-time workflows</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">85%</div>
              <p className="text-gray-300 font-medium">Fewer security incidents</p>
              <p className="text-gray-500 text-sm mt-1">Zero-trust protection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">15h+</div>
              <p className="text-gray-300 font-medium">Saved per employee monthly</p>
              <p className="text-gray-500 text-sm mt-1">AI automation</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
              <Target className="w-4 h-4 mr-2" />
              <span>Measurable business impact across all industries</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white mb-8">
              <Award className="w-4 h-4 mr-2" />
              Start for free
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              Ready to transform
              <br />
              <span className="text-yellow-300">your business?</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-center mb-12">
              <p className="text-white/90">
                Join thousands of organizations that have already chosen 
                Aether Office. 14-day free trial, no commitment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link 
                href="https://account.skygenesisenterprise.com"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Start free trial
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact/sales"
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Request a demo
                <MessageSquare className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span>14-day trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span>Full feature access</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}