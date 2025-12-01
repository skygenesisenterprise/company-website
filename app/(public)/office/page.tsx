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
  Github,
  Lock,
  MessageSquare,
  Cpu,
  Cloud,
  Award,
  Target,
  Euro,
  PiggyBank,
  Search,
  Grid3X3,
  List,
  Star
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';

const applications = [
    {
      id: 'mail',
      name: 'Aether Mail',
      description: 'Secure enterprise email',
      icon: Mail,
      color: 'from-blue-500 to-blue-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-mail',
      features: ['End-to-end encryption', 'Advanced spam filtering', 'Calendar integration'],
      category: 'communication',
      popularity: 'high',
      isNew: false
    },
    {
      id: 'meet',
      name: 'Aether Meet',
      description: 'Video conferencing & team meetings',
      icon: Video,
      color: 'from-green-500 to-green-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-meet',
      features: ['HD video quality', 'Screen sharing', 'Recording capabilities'],
      category: 'communication',
      popularity: 'high',
      isNew: false
    },
    {
      id: 'drive',
      name: 'Aether Drive',
      description: 'Cloud storage & file management',
      icon: HardDrive,
      color: 'from-purple-500 to-purple-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-drive',
      features: ['Unlimited storage', 'Version control', 'Real-time collaboration'],
      category: 'management',
      popularity: 'high',
      isNew: false
    },
    {
      id: 'slide',
      name: 'Aether Slide',
      description: 'Presentations',
      icon: FileText,
      color: 'from-orange-500 to-orange-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-slide',
      features: ['Professional templates', 'Real-time editing', 'Export options'],
      category: 'productivity',
      popularity: 'medium',
      isNew: false
    },
    {
      id: 'sites',
      name: 'Aether Sites',
      description: 'Internal or public site creation',
      icon: Globe,
      color: 'from-pink-500 to-pink-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-sites',
      features: ['Drag-and-drop builder', 'Responsive design', 'Custom domains'],
      category: 'productivity',
      popularity: 'medium',
      isNew: true
    },
    {
      id: 'vids',
      name: 'Aether Vids',
      description: 'Enterprise video hosting',
      icon: Play,
      color: 'from-red-500 to-red-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-vids',
      features: ['Secure hosting', 'Analytics', 'Embedding options'],
      category: 'management',
      popularity: 'low',
      isNew: true
    },
    {
      id: 'desk',
      name: 'Aether Desk',
      description: 'Support & ticketing system',
      icon: HelpCircle,
      color: 'from-indigo-500 to-indigo-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-desk',
      features: ['Ticket management', 'Knowledge base', 'SLA tracking'],
      category: 'management',
      popularity: 'medium',
      isNew: false
    },
    {
      id: 'calendar',
      name: 'Aether Calendar',
      description: 'Scheduling & events',
      icon: Calendar,
      color: 'from-teal-500 to-teal-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-calendar',
      features: ['Shared calendars', 'Meeting scheduling', 'Reminders'],
      category: 'communication',
      popularity: 'high',
      isNew: false
    },
    {
      id: 'sheet',
      name: 'Aether Sheet',
      description: 'Spreadsheets & analytics',
      icon: Table,
      color: 'from-emerald-500 to-emerald-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-sheet',
      features: ['Advanced formulas', 'Data visualization', 'Collaboration'],
      category: 'productivity',
      popularity: 'high',
      isNew: false
    },
    {
      id: 'form',
      name: 'Aether Form',
      description: 'Surveys & data collection',
      icon: ClipboardList,
      color: 'from-cyan-500 to-cyan-600',
      githubUrl: 'https://github.com/skygenesisenterprise/aether-form',
      features: ['Custom forms', 'Data analysis', 'Automated workflows'],
      category: 'productivity',
      popularity: 'medium',
      isNew: false
    }
  ];

  const appCategories = {
    communication: {
      name: "Communication & Collaboration",
      description: "Connect your team seamlessly",
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-600'
    },
    productivity: {
      name: "Productivity & Creation", 
      description: "Create and collaborate effectively",
      icon: Cpu,
      color: 'from-emerald-500 to-emerald-600'
    },
    management: {
      name: "Management & Support",
      description: "Manage and support your operations",
      icon: Settings,
      color: 'from-purple-500 to-purple-600'
    }
  };

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

export default function AetherOffice() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

  // Filter applications based on search and category
  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.features.some((feature: string) => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort applications by popularity and new status
  const sortedApplications = [...filteredApplications].sort((a, b) => {
    if (a.isNew && !b.isNew) return -1;
    if (!a.isNew && b.isNew) return 1;
    const popularityOrder = { high: 0, medium: 1, low: 2 };
    return popularityOrder[a.popularity as keyof typeof popularityOrder] - popularityOrder[b.popularity as keyof typeof popularityOrder];
  });

  const pricingComparison = [
    {
      id: 'opensource',
      name: 'Open-Source Tier',
      price: 'Free',
      savings: '100% less expensive',
      competitor: 'Google Workspace Basic: $6/user/month',
      features: ['Core collaboration tools', 'Community support', 'Self-hosted option'],
      whyCheaper: 'Open-source foundation, no licensing fees',
      color: 'from-emerald-500 to-emerald-600',
      savingsPercentage: 100
    },
    {
      id: 'enterprise',
      name: 'Enterprise Tier',
      price: '€10-15/user/month',
      savings: '55% less expensive',
      competitor: 'Microsoft 365 Business: $22/user/month',
      features: ['All enterprise features', 'EU data sovereignty', 'Priority support', 'Advanced security'],
      whyCheaper: 'Unified platform, no complex licensing',
      color: 'from-blue-500 to-blue-600',
      savingsPercentage: 55
    },
    {
      id: 'organization',
      name: 'Organization Tier',
      price: '€500-3000/year',
      savings: '40% less expensive',
      competitor: 'Salesforce Enterprise: $150+/user/month',
      features: ['Custom integrations', 'Dedicated account manager', 'SLA guarantees', 'Advanced compliance'],
      whyCheaper: 'No per-seat complexity, transparent pricing',
      color: 'from-purple-500 to-purple-600',
      savingsPercentage: 40
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
              The right tools for
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                every workflow
              </span>
            </h2>
            <div className="space-y-4 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center text-gray-300">
              <p>
                Discover how Aether apps work together to transform your daily operations. 
                Communication, collaboration, productivity—every tool designed to integrate seamlessly.
              </p>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 w-full lg:w-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search applications, features, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400 w-full"
                />
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Category Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mt-8">
              <TabsList className="bg-white/5 border border-white/10 w-full justify-start">
                <TabsTrigger value="all" className="data-[state=active]:bg-white/10 text-white">
                  All Applications ({applications.length})
                </TabsTrigger>
                {Object.entries(appCategories).map(([key, category]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key} 
                    className="data-[state=active]:bg-white/10 text-white"
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Results Summary */}
          <div className="mb-8 text-center">
            <p className="text-gray-400">
              Showing {sortedApplications.length} of {applications.length} applications
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${appCategories[selectedCategory as keyof typeof appCategories].name}`}
            </p>
          </div>

          {/* Applications Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {sortedApplications.map((app) => (
                <div 
                  key={app.id}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl"
                >
                  {/* New Badge */}
                  {app.isNew && (
                    <div className="absolute -top-3 left-6 z-10">
                      <div className="inline-flex items-center px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                        <Star className="w-3 h-3 mr-1" />
                        NEW
                      </div>
                    </div>
                  )}
                  
                  {/* Popularity Indicator */}
                  {app.popularity === 'high' && !app.isNew && (
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center text-yellow-400 text-xs">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  
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
{app.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-gray-500">
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
          ) : (
            <div className="space-y-4">
              {sortedApplications.map((app) => (
                <div 
                  key={app.id}
                  className="group bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    {/* App Icon and Badges */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${allowedColors.includes(app.color) ? app.color : 'from-gray-500 to-gray-600'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <app.icon className="w-8 h-8 text-white" />
                      </div>
                      {app.isNew && (
                        <div className="absolute -top-2 -right-2">
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* App Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                            {app.name}
                          </h3>
                          <p className="text-gray-400 mb-4 leading-relaxed">{app.description}</p>
                          
                          {/* Features */}
                          <div className="flex flex-wrap gap-2 mb-4">
{app.features.slice(0, 3).map((feature, index) => (
                              <span key={index} className="inline-flex items-center text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                                <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                          {app.popularity === 'high' && (
                            <div className="flex items-center text-yellow-400 text-xs">
                              <Star className="w-4 h-4 mr-1" />
                              Popular
                            </div>
                          )}
                          <a 
                            href={isValidGitHubUrl(app.githubUrl) ? app.githubUrl : '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                            aria-label={`View ${sanitizeText(app.name)} on GitHub`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center group">
                            Learn more
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results State */}
          {sortedApplications.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No applications found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search or browse all categories
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
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

      {/* PRICING COMPARISON */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400 mb-6">
              <PiggyBank className="w-4 h-4 mr-2" />
              Cost Advantage
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-center">
              Why Aether Office costs
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                40-60% less than competitors
              </span>
            </h2>
            <div className="space-y-4 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center text-gray-300">
              <p>
                Enterprise-grade features without enterprise pricing. 
                Transparent costs with no hidden fees or complex licensing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingComparison.map((plan, index) => (
              <div 
                key={plan.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Savings badge */}
                <div className="absolute -top-4 right-6 z-10">
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${plan.color} text-white text-sm font-bold rounded-full shadow-lg`}>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {plan.savings}
                  </div>
                </div>
                
                <div className="relative">
                  {/* Plan header */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Euro className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                    <div className="text-sm text-emerald-400 font-medium">{plan.savings}</div>
                  </div>
                  
                  {/* Competitor comparison */}
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <BarChart3 className="w-4 h-4 mr-2 text-red-400" />
                      <span className="text-sm font-semibold text-red-400">Competitor Price</span>
                    </div>
                    <p className="text-sm text-gray-300">{plan.competitor}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Why cheaper */}
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <Target className="w-4 h-4 mr-2 text-emerald-400" />
                      <span className="text-sm font-semibold text-emerald-400">Why We're Cheaper</span>
                    </div>
                    <p className="text-sm text-gray-300">{plan.whyCheaper}</p>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <button className="w-full text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center justify-center group">
                      Calculate your savings
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom trust indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
              <Award className="w-4 h-4 mr-2" />
              <span>Transforming enterprise economics worldwide</span>
            </div>
          </div>

          {/* Savings summary */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">100%</div>
              <p className="text-gray-300 font-medium">Open-source savings</p>
              <p className="text-gray-500 text-sm mt-1">No licensing fees</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">55%</div>
              <p className="text-gray-300 font-medium">Enterprise tier savings</p>
              <p className="text-gray-500 text-sm mt-1">vs Microsoft 365</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">40%</div>
              <p className="text-gray-300 font-medium">Organization tier savings</p>
              <p className="text-gray-500 text-sm mt-1">vs Salesforce Enterprise</p>
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