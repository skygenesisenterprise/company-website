'use client';

import { useState } from 'react';
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
import OrganizationalStructure from '../../components/organizational-structure';

interface OrgNode {
  id: string;
  name: string;
  title: string;
  description: string;
  children?: OrgNode[];
  icon?: React.ReactNode;
}

interface CommitteeMember {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  avatar?: string;
}

interface Committee {
  name: string;
  description: string;
  responsibilities: string[];
  members: CommitteeMember[];
  icon: React.ReactNode;
  color: string;
}

const organizationalChart: OrgNode = {
  id: 'board',
  name: 'Board of Directors',
  title: 'Strategic Oversight',
  description: 'Provides strategic direction and governance oversight',
  icon: <Users className="w-6 h-6" />,
  children: [
    {
      id: 'ceo',
      name: 'CEO Office',
      title: 'Executive Leadership',
      description: 'Operational management and strategic execution',
      icon: <Building className="w-6 h-6" />,
      children: [
        {
          id: 'cto',
          name: 'CTO Office',
          title: 'Technology & Innovation',
          description: 'Technology strategy and R&D oversight',
          icon: <Cpu className="w-6 h-6" />
        },
        {
          id: 'cso',
          name: 'CSO Office',
          title: 'Security & Compliance',
          description: 'Security governance and risk management',
          icon: <Shield className="w-6 h-6" />
        },
        {
          id: 'coo',
          name: 'COO Office',
          title: 'Operations & Infrastructure',
          description: 'Operational excellence and infrastructure',
          icon: <Database className="w-6 h-6" />
        }
      ]
    }
  ]
};

const committees: Committee[] = [
  {
    name: 'Technical Committee',
    description: 'Oversees technical architecture, standards, and innovation initiatives',
    responsibilities: [
      'Technical architecture review',
      'Open-source strategy',
      'Technology standards compliance',
      'Innovation roadmap development'
    ],
    icon: <Cpu className="w-6 h-6" />,
    color: 'blue',
    members: [
      {
        name: 'Dr. Sarah Chen',
        title: 'Chief Technology Officer',
        bio: '15+ years in enterprise architecture and distributed systems',
        expertise: ['Cloud Architecture', 'Microservices', 'DevOps']
      },
      {
        name: 'Marcus Weber',
        title: 'Head of Engineering',
        bio: 'Expert in scalable systems and open-source contributions',
        expertise: ['System Design', 'Performance', 'Open Source']
      }
    ]
  },
  {
    name: 'Security & Compliance Committee',
    description: 'Ensures security standards, regulatory compliance, and risk management',
    responsibilities: [
      'Security policy development',
      'Compliance monitoring',
      'Risk assessment',
      'Audit coordination'
    ],
    icon: <Shield className="w-6 h-6" />,
    color: 'green',
    members: [
      {
        name: 'Elena Rodriguez',
        title: 'Chief Security Officer',
        bio: 'Former cybersecurity consultant with Fortune 500 experience',
        expertise: ['Zero Trust', 'GDPR', 'ISO 27001']
      },
      {
        name: 'James Mitchell',
        title: 'Compliance Director',
        bio: 'Specialist in international data protection regulations',
        expertise: ['GDPR', 'SOC 2', 'Risk Management']
      }
    ]
  },
  {
    name: 'Research & Innovation Committee',
    description: 'Drives research initiatives and evaluates emerging technologies',
    responsibilities: [
      'Research strategy development',
      'Innovation pipeline management',
      'Technology scouting',
      'Academic partnerships'
    ],
    icon: <Target className="w-6 h-6" />,
    color: 'purple',
    members: [
      {
        name: 'Prof. David Kumar',
        title: 'Head of Research',
        bio: 'Academic background in AI and distributed systems',
        expertise: ['AI/ML', 'Research', 'Innovation']
      },
      {
        name: 'Lisa Zhang',
        title: 'Innovation Director',
        bio: 'Expert in emerging technologies and market analysis',
        expertise: ['Blockchain', 'IoT', 'Market Analysis']
      }
    ]
  }
];

const decisionProcess = [
  {
    step: 1,
    title: 'Strategic Planning',
    description: 'Board defines strategic objectives and KPIs',
    icon: <Target className="w-6 h-6" />
  },
  {
    step: 2,
    title: 'Committee Review',
    description: 'Technical, security, and innovation committees evaluate proposals',
    icon: <Users className="w-6 h-6" />
  },
  {
    step: 3,
    title: 'Executive Approval',
    description: 'CEO office reviews and approves implementation plans',
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    step: 4,
    title: 'Division Execution',
    description: 'Product divisions implement with oversight and reporting',
    icon: <GitBranch className="w-6 h-6" />
  }
];

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
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [expandedCommittee, setExpandedCommittee] = useState<string | null>(null);

  const renderOrgNode = (node: OrgNode, level: number = 0) => {
    const isSelected = selectedNode === node.id;
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className={`${level > 0 ? 'ml-8' : ''}`}>
        <div
          className={`bg-gray-900/50 border rounded-xl p-4 mb-4 cursor-pointer transition-all duration-300 ${
            isSelected 
              ? 'border-blue-500 bg-blue-500/10' 
              : 'border-gray-800 hover:border-gray-700 hover:bg-gray-800/50'
          }`}
          onClick={() => setSelectedNode(isSelected ? null : node.id)}
        >
          <div className="flex items-center space-x-3">
            {node.icon && (
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                isSelected ? 'bg-blue-500/20' : 'bg-gray-800'
              }`}>
                <div className={isSelected ? 'text-blue-400' : 'text-gray-400'}>
                  {node.icon}
                </div>
              </div>
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-white">{node.name}</h3>
              <p className="text-sm text-gray-400">{node.title}</p>
              <p className="text-xs text-gray-500 mt-1">{node.description}</p>
            </div>
            {hasChildren && (
              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                isSelected ? 'rotate-90' : ''
              }`} />
            )}
          </div>
        </div>
        
        {isSelected && hasChildren && (
          <div className="mt-4 space-y-2 animate-in slide-in-from-top-2 duration-300">
            {node.children?.map(child => renderOrgNode(child, level + 1))}
          </div>
        )}
      </div>
    );
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

      {/* ORGANIZATIONAL CHART */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Organizational Chart</h2>
              <p className="text-gray-400 text-lg">
                Interactive hierarchical structure showing leadership and reporting lines
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {renderOrgNode(organizationalChart)}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP & COMMITTEES */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Leadership & Committees</h2>
              <p className="text-gray-400 text-lg">
                Specialized committees providing expert oversight and strategic guidance
              </p>
            </div>
            
            <div className="space-y-8">
              {committees.map((committee) => (
                <div key={committee.name} className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedCommittee(expandedCommittee === committee.name ? null : committee.name)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        committee.color === 'blue' ? 'bg-blue-500/20' :
                        committee.color === 'green' ? 'bg-green-500/20' :
                        'bg-purple-500/20'
                      }`}>
                        <div className={
                          committee.color === 'blue' ? 'text-blue-400' :
                          committee.color === 'green' ? 'text-green-400' :
                          'text-purple-400'
                        }>
                          {committee.icon}
                        </div>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold">{committee.name}</h3>
                        <p className="text-gray-400 text-sm">{committee.description}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedCommittee === committee.name ? 'rotate-90' : ''
                    }`} />
                  </button>
                  
                  {expandedCommittee === committee.name && (
                    <div className="border-t border-gray-800 p-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4 text-white">Responsibilities</h4>
                          <ul className="space-y-2">
                            {committee.responsibilities.map((responsibility, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-4 text-white">Key Members</h4>
                          <div className="space-y-4">
                            {committee.members.map((member, index) => (
                              <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                                    <UserCheck className="w-5 h-5 text-gray-400" />
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-medium text-white text-sm">{member.name}</h5>
                                    <p className="text-xs text-gray-400">{member.title}</p>
                                    <p className="text-xs text-gray-500 mt-1">{member.bio}</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                      {member.expertise.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="text-xs bg-gray-700 px-2 py-1 rounded">
                                          {skill}
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
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DECISION-MAKING PROCESS */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Decision-Making Process</h2>
              <p className="text-gray-400 text-lg">
                Transparent flow from strategic planning to execution with oversight
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {decisionProcess.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < decisionProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-700 to-transparent"></div>
                  )}
                  
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <div className="text-blue-400">{step.icon}</div>
                      </div>
                      <div className="text-2xl font-bold text-gray-600">{step.step}</div>
                    </div>
                    
                    <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POLICIES & STANDARDS */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Policies & Standards</h2>
              <p className="text-gray-400 text-lg">
                Governance guidelines, security policies, and compliance frameworks
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                href="/governance/policies"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      Governance Guidelines
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Internal governance policies and procedures
                    </p>
                    <span className="text-blue-400 text-sm font-medium flex items-center">
                      View Guidelines <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="/governance/compliance"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                      Security Policies
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Security frameworks and compliance standards
                    </p>
                    <span className="text-green-400 text-sm font-medium flex items-center">
                      View Policies <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="/governance/compliance"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                      Compliance Audits
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      ISO standards and audit reports
                    </p>
                    <span className="text-purple-400 text-sm font-medium flex items-center">
                      View Audits <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZATIONAL STRUCTURE SECTION */}
      <OrganizationalStructure />

      {/* ORGANIZATIONAL KPIs */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Organizational Metrics</h2>
              <p className="text-gray-400 text-lg">
                Key performance indicators showing governance effectiveness
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400 mb-1">Decision Efficiency</div>
                <div className="text-xs text-gray-500">Average time to strategic decision</div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400 mb-1">Compliance Rate</div>
                <div className="text-xs text-gray-500">ISO and regulatory compliance</div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">24</div>
                <div className="text-gray-400 mb-1">Audits Completed</div>
                <div className="text-xs text-gray-500">This year with zero findings</div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400 mb-1">Governance Training</div>
                <div className="text-xs text-gray-500">Employees certified annually</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}