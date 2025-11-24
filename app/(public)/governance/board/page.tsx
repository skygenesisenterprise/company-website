'use client';

import { 
  Users, 
  Shield, 
  ChevronRight, 
  ArrowRight, 
  Building, 
  Eye, 
  CheckCircle, 
  Award,
  FileText,
  Target,
  GitBranch,
  Database,
  Cpu,
  UserCheck,
  Lock,
  BookOpen,
  Calendar,
  Scale,
  Handshake
} from 'lucide-react';
import Link from 'next/link';

interface BoardMember {
  name: string;
  title: string;
  type: 'executive' | 'independent' | 'technical' | 'compliance';
  description: string;
  expertise: string[];
}

interface Committee {
  name: string;
  description: string;
  responsibilities: string[];
  meetingFrequency: string;
  icon: React.ReactNode;
  color: string;
}

const boardComposition: BoardMember[] = [
  {
    name: 'Chairperson',
    title: 'Independent Chair',
    type: 'independent',
    description: 'Lead independent director responsible for board governance and oversight',
    expertise: ['Corporate Governance', 'Strategic Leadership', 'Risk Management']
  },
  {
    name: 'CEO',
    title: 'Chief Executive Officer',
    type: 'executive',
    description: 'Executive leadership and operational management of enterprise',
    expertise: ['Business Strategy', 'Operations', 'Executive Leadership']
  },
  {
    name: 'Position Open',
    title: 'Chief Financial Officer',
    type: 'executive',
    description: 'We are seeking a financial leader to oversee financial reporting, fiscal strategy, and regulatory compliance. This role will drive financial oversight and strategic planning.',
    expertise: ['Financial Management', 'Regulatory Compliance', 'Strategic Planning']
  },
  {
    name: 'Position Open',
    title: 'Chief Technology Officer',
    type: 'technical',
    description: 'We are looking for a technology visionary to lead innovation strategy and technical governance. This role will shape our technology roadmap and digital transformation.',
    expertise: ['Technology Strategy', 'Innovation', 'Technical Architecture']
  },
  {
    name: 'Position Open',
    title: 'Chief Security Officer',
    type: 'compliance',
    description: 'We are seeking a security expert to lead governance, risk management, and compliance programs. This role will ensure enterprise security and regulatory adherence.',
    expertise: ['Security Governance', 'Risk Management', 'Compliance']
  },
  {
    name: 'Position Open',
    title: 'Independent Director',
    type: 'independent',
    description: 'We are looking for independent directors to provide oversight and strategic guidance. This role will bring objective perspective to board decisions.',
    expertise: ['Corporate Governance', 'Strategic Advisory', 'Risk Oversight']
  },
  {
    name: 'Position Open',
    title: 'Independent Director',
    type: 'independent',
    description: 'We are seeking additional independent directors to strengthen board oversight. This role will contribute diverse expertise and independent judgment.',
    expertise: ['Corporate Governance', 'Strategic Advisory', 'Risk Oversight']
  },
  {
    name: 'Position Open',
    title: 'Chief Technical Advisor',
    type: 'technical',
    description: 'We are seeking technical expertise to guide innovation and architecture decisions. This role will provide strategic technical counsel to the board.',
    expertise: ['Technical Advisory', 'Innovation Strategy', 'Architecture Review']
  }
];

const committees: Committee[] = [
  {
    name: 'Audit Committee',
    description: 'Oversight of financial reporting, internal controls, and external audit processes',
    responsibilities: [
      'Financial statement review and approval',
      'Internal control system oversight',
      'External auditor appointment and supervision',
      'Risk management framework monitoring'
    ],
    meetingFrequency: 'Quarterly',
    icon: <Eye className="w-6 h-6" />,
    color: 'blue'
  },
  {
    name: 'Security & Risk Committee',
    description: 'Enterprise security, risk management, and compliance oversight',
    responsibilities: [
      'Security strategy and policy oversight',
      'Risk assessment and mitigation monitoring',
      'Compliance framework supervision',
      'Incident response protocol review'
    ],
    meetingFrequency: 'Monthly',
    icon: <Shield className="w-6 h-6" />,
    color: 'green'
  },
  {
    name: 'Technology & Innovation Committee',
    description: 'Technology strategy, innovation roadmap, and digital transformation oversight',
    responsibilities: [
      'Technology strategy development',
      'Innovation pipeline review',
      'Digital transformation initiatives',
      'Technical architecture governance'
    ],
    meetingFrequency: 'Bi-monthly',
    icon: <Cpu className="w-6 h-6" />,
    color: 'purple'
  },
  {
    name: 'Ethics & Compliance Committee',
    description: 'Corporate ethics, compliance programs, and governance standards',
    responsibilities: [
      'Code of conduct enforcement',
      'Ethics policy development',
      'Compliance monitoring programs',
      'Governance standards implementation'
    ],
    meetingFrequency: 'Quarterly',
    icon: <Scale className="w-6 h-6" />,
    color: 'orange'
  }
];

const decisionProcess = [
  {
    step: 1,
    title: 'Proposal Submission',
    description: 'Strategic initiatives and major decisions submitted for board review',
    icon: <FileText className="w-6 h-6" />
  },
  {
    step: 2,
    title: 'Committee Review',
    description: 'Specialized committees evaluate proposals within their domains',
    icon: <Users className="w-6 h-6" />
  },
  {
    step: 3,
    title: 'Board Deliberation',
    description: 'Full board discussion and analysis of recommendations',
    icon: <Target className="w-6 h-6" />
  },
  {
    step: 4,
    title: 'Decision & Implementation',
    description: 'Final approval and delegation to executive leadership',
    icon: <CheckCircle className="w-6 h-6" />
  }
];

const governancePrinciples = [
  {
    title: 'Independence',
    description: 'Majority of board members are independent directors ensuring objective oversight',
    icon: <Users className="w-6 h-6" />,
    color: 'blue'
  },
  {
    title: 'Transparency',
    description: 'Open communication and comprehensive reporting to stakeholders',
    icon: <Eye className="w-6 h-6" />,
    color: 'green'
  },
  {
    title: 'Accountability',
    description: 'Clear responsibility structures and performance measurement systems',
    icon: <Target className="w-6 h-6" />,
    color: 'purple'
  },
  {
    title: 'Ethical Conduct',
    description: 'Unwavering commitment to ethical business practices and integrity',
    icon: <Scale className="w-6 h-6" />,
    color: 'orange'
  },
  {
    title: 'Risk Awareness',
    description: 'Proactive identification and management of enterprise risks',
    icon: <Shield className="w-6 h-6" />,
    color: 'red'
  },
  {
    title: 'Stakeholder Focus',
    description: 'Balanced consideration of all stakeholder interests in decision-making',
    icon: <Handshake className="w-6 h-6" />,
    color: 'cyan'
  }
];

const boardStats = [
  {
    value: '8',
    label: 'Board Members',
    description: 'Balanced mix of executive and independent directors',
    icon: <Users className="w-6 h-6" />
  },
  {
    value: '4',
    label: 'Specialized Committees',
    description: 'Focused oversight in key governance areas',
    icon: <Shield className="w-6 h-6" />
  },
  {
    value: '75%',
    label: 'Independent Directors',
    description: 'Ensuring objective oversight and governance',
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    value: '24/7',
    label: 'Governance Monitoring',
    description: 'Continuous oversight and compliance tracking',
    icon: <Eye className="w-6 h-6" />
  }
];

export default function GovernanceBoardPage() {
  const getMemberTypeColor = (type: string) => {
    switch (type) {
      case 'executive': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'independent': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'technical': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'compliance': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getMemberTypeLabel = (type: string) => {
    switch (type) {
      case 'executive': return 'Executive';
      case 'independent': return 'Independent';
      case 'technical': return 'Technical';
      case 'compliance': return 'Compliance';
      default: return 'Member';
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
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        
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
                Governance
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Board
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                The Governance Board provides strategic oversight, ensures regulatory compliance, and safeguards 
                the long-term interests of all stakeholders through transparent, ethical, and accountable leadership.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {boardStats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROLE AND MISSION */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Role and Mission</h2>
              <p className="text-gray-400 text-lg">
                Strategic oversight and governance excellence across the enterprise
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Oversight</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Guide long-term strategy, approve major initiatives, and ensure alignment with 
                  corporate vision and stakeholder interests.
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Oversee enterprise risk management frameworks, ensure adequate controls, and 
                  monitor emerging risks across all business operations.
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Compliance & Ethics</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ensure adherence to regulatory requirements, maintain ethical standards, and 
                  promote culture of integrity throughout the organization.
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Leadership Development</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Oversee succession planning, evaluate executive performance, and ensure 
                  development of future leadership capabilities.
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Financial Supervision</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Review financial performance, approve budgets, and ensure fiscal responsibility 
                  and sustainable financial practices.
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Security Governance</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ensure robust security frameworks, protect enterprise assets, and maintain 
                  trust with customers and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOARD COMPOSITION */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Board Composition</h2>
              <p className="text-gray-400 text-lg">
                Diverse expertise and balanced representation for effective governance
              </p>
            </div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Multiple board positions available
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardComposition.map((member, index) => {
                const isOpenPosition = member.name === 'Position Open';
                return (
                  <div key={index} className={`group relative bg-gray-900/50 border ${isOpenPosition ? 'border-green-500/30 hover:border-green-500/40' : 'border-gray-800 hover:border-gray-700'} rounded-xl p-6 transition-all`}>
                    {/* Position Open Badge */}
                    {isOpenPosition && (
                      <div className="absolute -top-2 -right-2 z-10">
                        <div className="relative">
                          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-1 ${isOpenPosition ? 'text-green-400' : 'text-white'}`}>{member.name}</h3>
                        <p className={`text-sm mb-2 ${isOpenPosition ? 'text-green-300' : 'text-gray-400'}`}>{member.title}</p>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${isOpenPosition ? 'bg-green-500/10 border-green-500/20 text-green-400' : getMemberTypeColor(member.type)}`}>
                          {isOpenPosition ? 'Open' : getMemberTypeLabel(member.type)}
                        </span>
                      </div>
                      <div className={`w-10 h-10 ${isOpenPosition ? 'bg-green-800/20 border-2 border-dashed border-green-500/30' : 'bg-gray-800'} rounded-full flex items-center justify-center`}>
                        {isOpenPosition ? (
                          <div className="text-center">
                            <UserCheck className="w-5 h-5 text-green-400" />
                            <span className="text-xs text-green-400 font-semibold block mt-0.5">OPEN</span>
                          </div>
                        ) : (
                          <UserCheck className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className={`text-xs px-2 py-1 rounded ${isOpenPosition ? 'bg-green-800/30 text-green-400' : 'bg-gray-800 text-gray-400'}`}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button for open positions */}
                    {isOpenPosition && (
                      <div className="flex justify-center">
                        <a 
                          href="/careers?board=true"
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-sm"
                        >
                          <Target className="w-4 h-4 mr-2" />
                          Apply for Board Position
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* COMMITTEES */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Specialized Committees</h2>
              <p className="text-gray-400 text-lg">
                Focused oversight through specialized committee structures
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {committees.map((committee) => (
                <div key={committee.name} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      committee.color === 'blue' ? 'bg-blue-500/20' :
                      committee.color === 'green' ? 'bg-green-500/20' :
                      committee.color === 'purple' ? 'bg-purple-500/20' :
                      committee.color === 'orange' ? 'bg-orange-500/20' :
                      'bg-gray-800'
                    }`}>
                      <div className={
                        committee.color === 'blue' ? 'text-blue-400' :
                        committee.color === 'green' ? 'text-green-400' :
                        committee.color === 'purple' ? 'text-purple-400' :
                        committee.color === 'orange' ? 'text-orange-400' :
                        'text-gray-400'
                      }>
                        {committee.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">{committee.name}</h3>
                      <p className="text-gray-400 text-sm">{committee.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <h4 className="font-medium text-white text-sm">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {committee.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">Meeting Frequency:</span>
                      <span className="text-sm text-white font-medium">{committee.meetingFrequency}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DECISION-MAKING PROCESS */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Governance Processes</h2>
              <p className="text-gray-400 text-lg">
                Structured approach to decision-making and oversight
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {decisionProcess.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < decisionProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-700 to-transparent"></div>
                  )}
                  
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
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

      {/* GOVERNANCE PRINCIPLES */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Governance Principles</h2>
              <p className="text-gray-400 text-lg">
                Core values guiding our board&apos;s conduct and decision-making
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governancePrinciples.map((principle, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    principle.color === 'blue' ? 'bg-blue-500/20' :
                    principle.color === 'green' ? 'bg-green-500/20' :
                    principle.color === 'purple' ? 'bg-purple-500/20' :
                    principle.color === 'orange' ? 'bg-orange-500/20' :
                    principle.color === 'red' ? 'bg-red-500/20' :
                    principle.color === 'cyan' ? 'bg-cyan-500/20' :
                    'bg-gray-800'
                  }`}>
                    <div className={
                      principle.color === 'blue' ? 'text-blue-400' :
                      principle.color === 'green' ? 'text-green-400' :
                      principle.color === 'purple' ? 'text-purple-400' :
                      principle.color === 'orange' ? 'text-orange-400' :
                      principle.color === 'red' ? 'text-red-400' :
                      principle.color === 'cyan' ? 'text-cyan-400' :
                      'text-gray-400'
                    }>
                      {principle.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{principle.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIONS WITH OTHER GOVERNANCE ENTITIES */}
      <section className="py-20 border-t border-gray-800 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Governance Integration</h2>
              <p className="text-gray-400 text-lg">
                Seamless coordination with organizational governance structures
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                href="/governance/structure"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  Organizational Structure
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Hierarchical governance and reporting structures
                </p>
                <span className="text-blue-400 text-sm font-medium flex items-center">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              
              <Link 
                href="/governance/policies"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                  Policies & Procedures
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Comprehensive governance policies and frameworks
                </p>
                <span className="text-green-400 text-sm font-medium flex items-center">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              
              <Link 
                href="/governance/compliance"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  Compliance & Standards
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Regulatory compliance and international standards
                </p>
                <span className="text-purple-400 text-sm font-medium flex items-center">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              
              <Link 
                href="/company/subsidiaries"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                  Subsidiaries Governance
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Oversight of subsidiary operations and governance
                </p>
                <span className="text-orange-400 text-sm font-medium flex items-center">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL DOCUMENTS & REFERENCES */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Official Documents</h2>
              <p className="text-gray-400 text-lg">
                Key governance documents and reference materials
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                href="/license"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  License & Legal
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Enterprise licensing and legal documentation
                </p>
                <span className="text-blue-400 text-sm font-medium flex items-center">
                  View Documents <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              
              <Link 
                href="/governance/policies"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                  Governance Policies
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Complete board governance policies
                </p>
                <span className="text-green-400 text-sm font-medium flex items-center">
                  View Policies <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              
              <Link 
                href="/governance/compliance"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  Audit Reports
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Annual audit reports and certifications
                </p>
                <span className="text-purple-400 text-sm font-medium flex items-center">
                  View Reports <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}