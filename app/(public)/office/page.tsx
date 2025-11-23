'use client';

import { useState } from 'react';
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
  ChevronRight,
  Github
} from 'lucide-react';

export default function AetherOffice() {
  const [, setActiveApp] = useState<string | null>(null);

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

  const workflowSteps = [
    {
      step: 1,
      title: 'Onboarding & Setup',
      description: 'Quick setup with guided configuration and user provisioning.',
      icon: Rocket
    },
    {
      step: 2,
      title: 'App Integration',
      description: 'Seamlessly integrate all applications with existing workflows.',
      icon: Settings
    },
    {
      step: 3,
      title: 'Collaboration',
      description: 'Enable teams to work together across all applications.',
      icon: Users
    },
    {
      step: 4,
      title: 'Governance & Security',
      description: 'Implement enterprise-grade security and compliance controls.',
      icon: Shield
    },
    {
      step: 5,
      title: 'Analytics & Automation',
      description: 'Gain insights and automate repetitive tasks.',
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-start justify-center pt-24 sm:pt-32 overflow-hidden">
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
        
        <div className="relative z-10 container mx-auto px-4 pt-8 sm:pt-12">
          <div className="max-w-7xl mx-auto text-center">

            {/* Main title */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 md:mb-12 leading-tight tracking-tight mx-auto text-center">
              <div className="max-w-5xl mx-auto px-2 sm:px-4">
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
            <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center mb-12">
              <p>
                Collaborate, communicate, and create securely with our unified suite of enterprise applications. 
                Transform how your organization works with a single, integrated platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="https://office.skygenesisenterprise.com" 
                className="bg-white text-black px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-base lg:text-lg whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="https://office.skygenesisenterprise.com" 
                className="border border-white/20 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-base lg:text-lg whitespace-nowrap"
              >
                Request a Demo
              </Link>
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto px-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                  {applications.slice(0, 5).map((app) => (
                    <div 
                      key={app.id}
                      className="bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 hover:bg-white/10 transition-all cursor-pointer relative touch-manipulation active:scale-[0.98]"
                      onMouseEnter={() => setActiveApp(app.id)}
                      onMouseLeave={() => setActiveApp(null)}
                    >
                      <a 
                        href={app.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-white/10 z-10"
                        aria-label={`View ${app.name} on GitHub`}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${app.color} rounded-lg flex items-center justify-center mb-2 sm:mb-3`}>
                        <app.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-medium text-white leading-tight">{app.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Applications Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">Complete Application Suite</h2>
            <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
              <p>
                Everything your enterprise needs in one integrated platform. 
                From communication to collaboration, we&apos;ve got you covered.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {applications.map((app) => (
              <div 
                key={app.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 touch-manipulation active:scale-[0.98]"
                onMouseEnter={() => setActiveApp(app.id)}
                onMouseLeave={() => setActiveApp(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${app.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>
                
                {/* GitHub Link */}
                <div className="absolute top-4 right-4">
                  <a 
                    href={app.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                    aria-label={`View ${app.name} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-r ${app.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <app.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-white">{app.name}</h3>
                  <p className="text-gray-400 mb-4">{app.description}</p>
                  
                  <div className="space-y-2">
                    {app.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">How It Works</h2>
            <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
              <p>
                Get up and running in days, not months. Our streamlined process ensures 
                smooth adoption and immediate value.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {workflowSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-white text-black rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-sm sm:text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/onboarding"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Start Your Journey
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Enterprise Benefits</h2>
            <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
              <p>
                Built for the modern enterprise. Security, scalability, and performance 
                that organizations can rely on.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400 mb-4">{benefit.description}</p>
                
                <ul className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Aether Office Pricing</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  Flexible plans for individuals, teams, and enterprises. Start free or scale with our enterprise solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Free / Open-Source Plan */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Free</h3>
                  <p className="text-gray-400 mb-6">Open-Source</p>
                  <div className="text-5xl font-bold text-white mb-1">0 €</div>
                  <p className="text-gray-500 text-sm">per user / month</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    <span>Aether Mail, Chat, Meet</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    <span>Aether Docs & Sheets</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    <span>Aether Drive</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    <span>Aether Teams</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    <span>Aether Auth (SSO/permissions)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    <span>Basic API & Webhooks</span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-center mb-4">
                    <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                      Target Audience
                    </span>
                  </div>
                  <p className="text-center text-sm text-gray-400">
                    Individuals, small teams, open-source communities, initial adoption
                  </p>
                </div>

                <div className="mt-8">
                  <Link 
                    href="https://account.skygenesisenterprise.com"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all"
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
                  <p className="text-blue-400 mb-6">Most Popular</p>
                  <div className="text-5xl font-bold text-white mb-1">10–15 €</div>
                  <p className="text-gray-500 text-sm">per user / month</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    <span>Everything in Free, plus:</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                    <span>Priority support & 99.9% SLA</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                    <span>Advanced encryption</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                    <span>Role management & compliance</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                    <span>Automated migration (G Suite / Microsoft 365)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                    <span>Advanced offline sync</span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-center mb-4">
                    <span className="text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">
                      Target Audience
                    </span>
                  </div>
                  <p className="text-center text-sm text-gray-400">
                    SMEs, startups, mid-sized teams
                  </p>
                </div>

                <div className="mt-8">
                  <Link 
                    href="https://account.skygenesisenterprise.com"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 border border-blue-600"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>

              {/* Organization Plan */}
              <div className="relative bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Organization</h3>
                  <p className="text-purple-400 mb-6">Enterprise Grade</p>
                  <div className="text-5xl font-bold text-white mb-1">500–3000 €</div>
                  <p className="text-gray-500 text-sm">per month (custom pricing)</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    <span>Everything in Enterprise, plus:</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" />
                    <span>Unlimited users</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" />
                    <span>Extended storage & optional sovereign cloud</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" />
                    <span>Aether Security Essentials included</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" />
                    <span>Advanced monitoring & audits</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" />
                    <span>Premium support</span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-center mb-4">
                    <span className="text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30">
                      Target Audience
                    </span>
                  </div>
                  <p className="text-center text-sm text-gray-400">
                    Large enterprises, institutions, multi-site organizations
                  </p>
                </div>

                <div className="mt-8">
                  <Link 
                    href="https://account.skygenesisenterprise.com"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition-all transform hover:scale-105"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold mb-6 text-white">All plans include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm text-gray-400">
                  <div className="flex items-center justify-center">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    <span>GDPR compliant</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    <span>99.99% uptime SLA</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    <span>European data centers</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    <span>24/7 support (Enterprise)</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    <span>Zero-trust architecture</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    <span>Open-source transparency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Enterprise?
          </h2>
          <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center mb-8">
            <p className="text-white/90">
              Join thousands of organizations that have already made the switch to Aether Office. 
              Start your free trial today and see the difference for yourself.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/trial"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Try Aether Office Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link 
              href="/demo"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-all"
            >
              Request a Demo
              <Calendar className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <p className="text-white/70 mt-6 text-sm">
            No credit card required • 14-day free trial • Full feature access
          </p>
        </div>
      </section>
    </div>
  );
}