'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Cloud, 
  Users, 
  Shield, 
  Building, 
  MessageSquare, 
  Truck, 
  Plane,
  ArrowRight,
  ChevronRight,
  GitBranch,
  Crown,
  Zap,
  Lock,
  Globe,
  Target,
  Award,
  Eye,
  CheckCircle
} from 'lucide-react';

interface Subsidiary {
  name: string;
  description: string;
  detailedDescription: string;
  icon: React.ReactNode;
  division: string;
  color: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface Division {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  subsidiaries: string[];
}

const subsidiaries: Subsidiary[] = [
  {
    name: 'Zenth Cloud',
    description: 'Cloud & edge infrastructure for European digital sovereignty.',
    detailedDescription: 'Provides secure, scalable cloud and edge computing infrastructure designed specifically for European organizations requiring data sovereignty and compliance with regional regulations.',
    icon: <Cloud className="w-6 h-6" />,
    division: 'Technology & Cloud',
    color: 'cyan',
    metrics: [
      { label: 'Data Centers', value: '12' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Regions', value: '8' }
    ]
  },
  {
    name: 'Aether Office',
    description: 'Productivity & collaboration suite for enterprise teams.',
    detailedDescription: 'Unified workspace platform combining productivity tools, real-time collaboration, and enterprise-grade security in a single integrated ecosystem.',
    icon: <Users className="w-6 h-6" />,
    division: 'Technology & Cloud',
    color: 'green',
    metrics: [
      { label: 'Active Users', value: '500K+' },
      { label: 'Enterprise Clients', value: '1,200+' },
      { label: 'Integration', value: '200+' }
    ]
  },
  {
    name: 'Aether Security',
    description: 'Zero-Trust identity & compliance management platform.',
    detailedDescription: 'Comprehensive security platform providing zero-trust architecture, identity management, and compliance automation for enterprise environments.',
    icon: <Shield className="w-6 h-6" />,
    division: 'Technology & Cloud',
    color: 'red',
    metrics: [
      { label: 'Security Score', value: 'A+' },
      { label: 'Compliance', value: '100%' },
      { label: 'Threats Blocked', value: '10M+/day' }
    ]
  },
  {
    name: 'Vaelix Bank',
    description: 'Financial services & sovereign banking solutions.',
    detailedDescription: 'European digital bank offering sovereign financial services, embedded banking solutions, and compliant financial infrastructure for the digital economy.',
    icon: <Building className="w-6 h-6" />,
    division: 'Finance',
    color: 'blue',
    metrics: [
      { label: 'Assets Under Management', value: '€2.5B' },
      { label: 'Countries', value: '15' },
      { label: 'License', value: 'EU Full' }
    ]
  },
  {
    name: 'Astron Collection',
    description: 'Communication & community platforms.',
    detailedDescription: 'Modern communication platforms enabling secure community building, real-time messaging, and collaborative content creation for organizations.',
    icon: <MessageSquare className="w-6 h-6" />,
    division: 'Communications',
    color: 'purple',
    metrics: [
      { label: 'Active Communities', value: '50K+' },
      { label: 'Messages/Day', value: '100M+' },
      { label: 'Languages', value: '25' }
    ]
  },
  {
    name: 'Sky Logistics',
    description: 'Supply chain & automation solutions.',
    detailedDescription: 'Advanced supply chain management platform combining IoT, automation, and AI to optimize logistics operations for European enterprises.',
    icon: <Truck className="w-6 h-6" />,
    division: 'Logistics',
    color: 'orange',
    metrics: [
      { label: 'Shipments Managed', value: '5M+/year' },
      { label: 'Efficiency Gain', value: '40%' },
      { label: 'Partners', value: '1,000+' }
    ]
  },
  {
    name: 'GESA Aerospace',
    description: 'Aeronautics & orbital technologies.',
    detailedDescription: 'Cutting-edge aerospace company developing next-generation aviation technologies, satellite systems, and space exploration solutions.',
    icon: <Plane className="w-6 h-6" />,
    division: 'Aerospace',
    color: 'indigo',
    metrics: [
      { label: 'Patents', value: '200+' },
      { label: 'Projects', value: '15' },
      { label: 'Engineers', value: '500+' }
    ]
  }
];

const divisions: Division[] = [
  {
    name: 'Technology & Cloud',
    description: 'Core infrastructure and productivity solutions',
    icon: <Cloud className="w-6 h-6" />,
    color: 'blue',
    subsidiaries: ['Zenth Cloud', 'Aether Office', 'Aether Security']
  },
  {
    name: 'Finance',
    description: 'Sovereign financial services and banking',
    icon: <Building className="w-6 h-6" />,
    color: 'green',
    subsidiaries: ['Vaelix Bank']
  },
  {
    name: 'Communications',
    description: 'Digital communication and community platforms',
    icon: <MessageSquare className="w-6 h-6" />,
    color: 'purple',
    subsidiaries: ['Astron Collection']
  },
  {
    name: 'Logistics',
    description: 'Supply chain optimization and automation',
    icon: <Truck className="w-6 h-6" />,
    color: 'orange',
    subsidiaries: ['Sky Logistics']
  },
  {
    name: 'Aerospace',
    description: 'Aviation and space exploration technologies',
    icon: <Plane className="w-6 h-6" />,
    color: 'indigo',
    subsidiaries: ['Sky Aerospace']
  }
];

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: {
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      hover: 'hover:bg-blue-500/10 hover:border-blue-500/50'
    },
    cyan: {
      bg: 'bg-cyan-500/20',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
      hover: 'hover:bg-cyan-500/10 hover:border-cyan-500/50'
    },
    purple: {
      bg: 'bg-purple-500/20',
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      hover: 'hover:bg-purple-500/10 hover:border-purple-500/50'
    },
    green: {
      bg: 'bg-green-500/20',
      border: 'border-green-500/30',
      text: 'text-green-400',
      hover: 'hover:bg-green-500/10 hover:border-green-500/50'
    },
    red: {
      bg: 'bg-red-500/20',
      border: 'border-red-500/30',
      text: 'text-red-400',
      hover: 'hover:bg-red-500/10 hover:border-red-500/50'
    },
    orange: {
      bg: 'bg-orange-500/20',
      border: 'border-orange-500/30',
      text: 'text-orange-400',
      hover: 'hover:bg-orange-500/10 hover:border-orange-500/50'
    },
    indigo: {
      bg: 'bg-indigo-500/20',
      border: 'border-indigo-500/30',
      text: 'text-indigo-400',
      hover: 'hover:bg-indigo-500/10 hover:border-indigo-500/50'
    }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

export default function CompanySubsidiariesPage() {
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);
  const [hoveredSubsidiary, setHoveredSubsidiary] = useState<string | null>(null);

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
              Sky Genesis Enterprise
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Sky Genesis Enterprise
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Subsidiaries
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Our group operates a unified ecosystem of companies advancing sovereign and secure digital infrastructure 
                for European organizations and institutions.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">7</div>
                <div className="text-gray-400 text-sm">Subsidiaries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5</div>
                <div className="text-gray-400 text-sm">Divisions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400 text-sm">EU Owned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP STRUCTURE OVERVIEW */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Group Structure</h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  A strategic organization of specialized companies unified by shared values, technology standards, and commitment to European digital sovereignty.
                </p>
              </div>
            </div>

            {/* Parent Entity */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <Crown className="w-6 h-6 text-yellow-400 mr-4" />
                <span className="text-white font-bold text-lg">Sky Genesis Enterprise</span>
                <span className="text-gray-400 ml-3">(Parent Entity)</span>
              </div>
            </div>

            {/* Divisions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {divisions.map((division) => {
                const colors = getColorClasses(division.color);
                const isSelected = selectedDivision === division.name;
                
                return (
                  <div
                    key={division.name}
                    className={`bg-white/5 backdrop-blur-sm border ${colors.border} rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      isSelected ? colors.bg : colors.hover
                    }`}
                    onClick={() => setSelectedDivision(isSelected ? null : division.name)}
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <div className={colors.text}>
                          {division.icon}
                        </div>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-2 leading-tight min-h-[3.5rem] flex items-center justify-center">
                        {division.name === 'Communications' ? (
                          <span className="break-words">Communications</span>
                        ) : (
                          division.name
                        )}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-400 mb-3 leading-relaxed">{division.description}</p>
                      <div className="text-xs text-gray-500">
                        {division.subsidiaries.length} {division.subsidiaries.length === 1 ? 'subsidiary' : 'subsidiaries'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Division Subsidiaries */}
            {selectedDivision && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {selectedDivision} Subsidiaries
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {divisions.find(d => d.name === selectedDivision)?.subsidiaries.map((subName) => {
                    const subsidiary = subsidiaries.find(s => s.name === subName);
                    if (!subsidiary) return null;
                    const colors = getColorClasses(subsidiary.color);
                    
                    return (
                      <div key={subName} className={`bg-white/5 border ${colors.border} rounded-xl p-4 text-center`}>
                        <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                          <div className={colors.text}>
                            {subsidiary.icon}
                          </div>
                        </div>
                        <h4 className="font-semibold text-white">{subsidiary.name}</h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SUBSIDIARIES GRID */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Subsidiaries</h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  Each subsidiary operates independently while contributing to our unified mission of European technological sovereignty.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subsidiaries.map((subsidiary) => {
                const colors = getColorClasses(subsidiary.color);
                const isHovered = hoveredSubsidiary === subsidiary.name;
                
                return (
                  <div
                    key={subsidiary.name}
                    className={`bg-white/5 backdrop-blur-sm border ${colors.border} rounded-2xl p-8 cursor-pointer transition-all duration-300 transform ${
                      isHovered ? 'scale-105 -translate-y-2' : ''
                    } ${colors.hover}`}
                    onMouseEnter={() => setHoveredSubsidiary(subsidiary.name)}
                    onMouseLeave={() => setHoveredSubsidiary(null)}
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <div className={colors.text}>
                          {subsidiary.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{subsidiary.name}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                          {subsidiary.division}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {subsidiary.description}
                    </p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {subsidiary.detailedDescription}
                    </p>

                    {/* Metrics */}
                    {subsidiary.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {subsidiary.metrics.map((metric, index) => (
                          <div key={index} className="text-center">
                            <div className={`text-lg font-bold ${colors.text}`}>{metric.value}</div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {isHovered && (
                      <div className="pt-4 border-t border-gray-800">
                        <Link 
                          href={`/subsidiaries/${subsidiary.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className={`flex items-center text-sm ${colors.text} font-medium hover:opacity-80 transition-opacity`}
                        >
                          Learn more <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC PURPOSE */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Strategic Purpose</h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  Our subsidiaries exist within a single group to advance European digital sovereignty through specialized expertise and unified vision.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Sovereignty</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ensuring European technological independence and data sovereignty across all sectors.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Resilience</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Building robust, redundant systems that ensure operational continuity and security.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Interoperability</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Creating seamless integration between systems for unified user experiences.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Unified Security</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Implementing consistent security standards and zero-trust architecture across all entities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-SUBSIDIARY SYNERGY */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Cross-Subsidiary Synergy</h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  Our subsidiaries collaborate and complement one another to deliver comprehensive solutions greater than sum of their parts.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Technology Integration</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Cloud className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Unified Infrastructure</h4>
                      <p className="text-gray-400 text-sm">
                        Zenth Cloud provides the foundation for all other subsidiaries, ensuring consistent performance and security.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Shared Security</h4>
                      <p className="text-gray-400 text-sm">
                        Aether Security protects all subsidiaries with zero-trust architecture and unified compliance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Collaborative Workspace</h4>
                      <p className="text-gray-400 text-sm">
                        Aether Office enables seamless collaboration across all subsidiary teams and client organizations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Business Ecosystem</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Building className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Financial Integration</h4>
                      <p className="text-gray-400 text-sm">
                        Vaelix Bank provides embedded financial services across the ecosystem for seamless transactions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Truck className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Logistics Support</h4>
                      <p className="text-gray-400 text-sm">
                        Sky Logistics optimizes supply chains for hardware deployment and physical operations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Plane className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Advanced Technology</h4>
                      <p className="text-gray-400 text-sm">
                        Sky Aerospace drives innovation that benefits all subsidiaries with cutting-edge R&D.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Synergy Flow Diagram */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Synergy Flow</h3>
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Crown className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                
                <div className="relative grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Cloud className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-xs text-gray-400">Cloud</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-xs text-gray-400">Office</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="text-xs text-gray-400">Security</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Building className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-xs text-gray-400">Bank</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <MessageSquare className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-xs text-gray-400">Communications</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Truck className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="text-xs text-gray-400">Logistics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE & OVERSIGHT */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Governance & Oversight</h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  Our ownership model balances operational independence with cross-group alignment to ensure both agility and coherence.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Operational Independence</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Each subsidiary maintains operational autonomy to respond quickly to market demands and specialized needs.
                </p>
                <div className="text-left space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Independent leadership teams</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Dedicated R&D resources</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Separate financial reporting</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cross-Group Alignment</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Unified strategic direction ensures all subsidiaries work toward common goals and maintain consistency.
                </p>
                <div className="text-left space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Shared technology standards</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Unified security policies</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Common compliance framework</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Shared Excellence</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Best practices and innovations flow freely between subsidiaries to elevate the entire ecosystem.
                </p>
                <div className="text-left space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Cross-subsidiary knowledge sharing</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Joint innovation initiatives</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Unified talent development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore Our Leadership and Governance
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Meet the visionaries guiding our subsidiaries and learn more about our governance model.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/company/leadership" 
                className="inline-flex items-center bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Leadership Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/governance/structure" 
                className="inline-flex items-center border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300"
              >
                Governance Model
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}