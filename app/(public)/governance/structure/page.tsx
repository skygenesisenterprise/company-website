'use client';

import Link from 'next/link';
import { 
  Users, 
  Shield, 
  ChevronRight, 
  ArrowRight, 
  Building, 
  Eye, 
  CheckCircle, 
  TrendingUp,
  Award,
  FileText,
  Target,
  GitBranch,
  Database,
  Cpu,
  UserCheck,
  BarChart3
} from 'lucide-react';

const governanceStats = [
  {
    value: '12',
    label: 'Board Members',
    description: 'Experienced leaders from technology and business',
    icon: <Users className="w-6 h-6" />
  },
  {
    value: '3',
    label: 'Executive Committees',
    description: 'Specialized oversight for key areas',
    icon: <Shield className="w-6 h-6" />
  },
  {
    value: '4',
    label: 'Product Divisions',
    description: 'Focused business units with clear accountability',
    icon: <Building className="w-6 h-6" />
  },
  {
    value: '24/7',
    label: 'Governance Monitoring',
    description: 'Continuous oversight and compliance tracking',
    icon: <Eye className="w-6 h-6" />
  }
];

export default function GovernanceStructurePage() {

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
              Corporate Governance
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Governance & Organizational
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Structure
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Our transparent, structured approach to decision-making ensures accountability, 
                strategic alignment, and effective division management across all Sky Genesis Enterprise operations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {governanceStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRÉSENTATION GÉNÉRALE DE LA STRUCTURE ORGANISATIONNELLE */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Organizational Philosophy</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                A structured approach to governance that balances strategic oversight with operational agility, 
                ensuring accountability while fostering innovation across all enterprise divisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Governance Excellence</h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Sky Genesis Enterprise operates under a decentralized governance model that empowers 
                    autonomous business units while maintaining centralized strategic oversight. This approach 
                    enables rapid decision-making at the operational level while ensuring alignment with 
                    corporate objectives and regulatory requirements.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our governance framework is built on three core pillars: transparency in decision-making, 
                    accountability at all levels, and adaptability to market changes. Each subsidiary maintains 
                    operational independence within defined governance boundaries, reporting through established 
                    channels to the executive leadership team.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <h4 className="text-xl font-semibold mb-6 text-white">Core Governance Principles</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Strategic Alignment</h5>
                      <p className="text-gray-400 text-sm">All operations aligned with corporate vision and stakeholder interests</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Risk Management</h5>
                      <p className="text-gray-400 text-sm">Proactive identification and mitigation of enterprise risks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Stakeholder Focus</h5>
                      <p className="text-gray-400 text-sm">Balanced consideration of all stakeholder interests</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Continuous Improvement</h5>
                      <p className="text-gray-400 text-sm">Regular review and enhancement of governance processes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIGRAMME / DIAGRAMME STRUCTUREL */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Corporate Structure</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Hierarchical representation of our organizational entities, reporting lines, and governance relationships
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <Building className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-blue-400 font-semibold">Sky Genesis Enterprise Group</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Board of Directors</h3>
                  <p className="text-gray-400 text-sm mb-4">Strategic oversight and governance</p>
                  <div className="text-xs text-gray-500">12 Members • 4 Committees</div>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Executive Leadership</h3>
                  <p className="text-gray-400 text-sm mb-4">CEO Office & C-Suite</p>
                  <div className="text-xs text-gray-500">CEO, CTO, CSO, COO, CFO</div>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <GitBranch className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Business Divisions</h3>
                  <p className="text-gray-400 text-sm mb-4">Autonomous operating units</p>
                  <div className="text-xs text-gray-500">6 Major Divisions</div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-8">
                <h4 className="text-xl font-semibold text-white mb-6 text-center">Specialized Committees</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
                    <Cpu className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <h5 className="text-sm font-medium text-white">Technical Committee</h5>
                    <p className="text-xs text-gray-400 mt-1">Architecture & Innovation</p>
                  </div>
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
                    <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <h5 className="text-sm font-medium text-white">Security Committee</h5>
                    <p className="text-xs text-gray-400 mt-1">Risk & Compliance</p>
                  </div>
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
                    <Target className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <h5 className="text-sm font-medium text-white">Research Committee</h5>
                    <p className="text-xs text-gray-400 mt-1">Innovation & R&D</p>
                  </div>
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
                    <FileText className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <h5 className="text-sm font-medium text-white">Audit Committee</h5>
                    <p className="text-xs text-gray-400 mt-1">Financial Oversight</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP ENTITIES ET FILIALES */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Group Entities & Subsidiaries</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Our diverse portfolio of specialized business units, each operating with strategic autonomy 
                while contributing to the collective strength of Sky Genesis Enterprise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">Financial Services</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Vaelix Bank</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Digital banking and financial services platform providing innovative solutions for modern banking needs.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Founded: 2021</span>
                  <span>Employees: 250+</span>
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">Cloud Infrastructure</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">Zenth Cloud</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Enterprise cloud computing services with focus on scalability, security, and performance optimization.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Founded: 2020</span>
                  <span>Employees: 180+</span>
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded-full">Digital Community</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">Astron Collection</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Premium digital community platform and Discord ecosystem for exclusive content and experiences.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Founded: 2022</span>
                  <span>Members: 50K+</span>
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded-full">Aerospace</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Aerospace Division</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Advanced aerospace technology development and satellite communication systems.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Founded: 2019</span>
                  <span>Employees: 120+</span>
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full">Logistics</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">Logistics Network</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Global supply chain management and logistics optimization solutions for enterprise clients.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Founded: 2020</span>
                  <span>Employees: 200+</span>
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-indigo-400" />
                  </div>
                  <span className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded-full">Innovation Lab</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">R&D Division</h3>
                <p className="text-gray-400 text-sm mb-4">
                    Research and development division focused on emerging technologies and breakthrough innovations.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Founded: 2018</span>
                  <span>Researchers: 80+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CADRE DÉCISIONNEL */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Decision-Making Framework</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Structured approach to organizational decision-making ensuring transparency, accountability, 
                and strategic alignment across all levels of the enterprise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Governance Levels</h3>
                <div className="space-y-6">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-blue-400 font-bold">1</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white">Strategic Level</h4>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      Board of Directors and Executive Committee define long-term strategy, major investments, 
                      and corporate governance policies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">Annual Planning</span>
                      <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">Major Investments</span>
                      <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">Policy Setting</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-green-400 font-bold">2</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white">Tactical Level</h4>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      Division leadership and specialized committees oversee operational strategies, resource allocation, 
                      and cross-functional coordination.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded">Quarterly Reviews</span>
                      <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded">Budget Management</span>
                      <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded">Resource Planning</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-purple-400 font-bold">3</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white">Operational Level</h4>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      Business unit management handles day-to-day operations, team leadership, and implementation 
                      of strategic initiatives.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded">Daily Operations</span>
                      <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded">Team Management</span>
                      <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded">Project Execution</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Decision Processes</h3>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileText className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Proposal Development</h4>
                        <p className="text-gray-400 text-sm">
                          Initiatives are developed with clear objectives, risk assessments, and resource requirements.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Users className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Stakeholder Consultation</h4>
                        <p className="text-gray-400 text-sm">
                          Relevant stakeholders review and provide input on proposals within their domains.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Committee Review</h4>
                        <p className="text-gray-400 text-sm">
                          Specialized committees evaluate proposals against strategic objectives and compliance requirements.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Target className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Executive Approval</h4>
                        <p className="text-gray-400 text-sm">
                          Final approval by appropriate authority level based on impact and resource requirements.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <TrendingUp className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Implementation & Monitoring</h4>
                        <p className="text-gray-400 text-sm">
                          Execution with defined KPIs and regular progress reporting to governance bodies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION VERS AUTRES PAGES GOVERNANCE */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Governance Ecosystem</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Explore our comprehensive governance framework across all organizational domains and regulatory areas.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link 
                href="/governance/board"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      Governance Board
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Board composition, committees, and leadership oversight structures
                    </p>
                    <span className="text-blue-400 text-sm font-medium flex items-center">
                      Explore Board <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="/governance/policies"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                      Policies & Procedures
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Comprehensive governance policies and operational procedures
                    </p>
                    <span className="text-green-400 text-sm font-medium flex items-center">
                      View Policies <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="/governance/compliance"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                      Compliance & Standards
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Regulatory compliance and international certification standards
                    </p>
                    <span className="text-purple-400 text-sm font-medium flex items-center">
                      Check Compliance <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="/license"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                      License & Legal
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Enterprise licensing, legal documentation, and certifications
                    </p>
                    <span className="text-orange-400 text-sm font-medium flex items-center">
                      View Licenses <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="/company/subsidiaries"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      Subsidiaries
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Detailed information about our subsidiary companies and divisions
                    </p>
                    <span className="text-cyan-400 text-sm font-medium flex items-center">
                      Explore Entities <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="/company/about"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                      About Us
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Company overview, mission, and corporate information
                    </p>
                    <span className="text-indigo-400 text-sm font-medium flex items-center">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}