'use client';

import Link from 'next/link';
import { 
  Users, 
  Shield, 
  Globe, 
  ArrowRight,
  Lightbulb,
  CheckCircle,
  Mail,
  BookOpen,
  Target,
  Award,
  TrendingUp,
  Building,
  Zap,
  Eye,
  Heart,
  Code,
  Database,
  Cpu,
  BarChart3
} from 'lucide-react';

interface Leader {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  achievements?: string[];
  expertise: string[];
}

interface DepartmentHead {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  responsibilities: string[];
  image: string;
  linkedin?: string;
}

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Principle {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function LeadershipPage() {
  // Executive Leadership Team (existing content)
  const leaders: Leader[] = [
    {
      id: 'liam-dispa',
      name: 'Liam Dispa',
      position: 'President & Chief Executive Officer',
      bio: 'Founder and Chief Architect of Sky Genesis Enterprise, leading strategic vision and technological innovation across all subsidiaries. With over 15 years in enterprise infrastructure, Liam drives the company\'s mission for European digital sovereignty.',
      image: '/assets/liam-dispa.jpg',
      linkedin: 'https://linkedin.com/in/liamdispa',
      achievements: [
        'Founded Sky Genesis Enterprise in 2026',
        'Led €85M Series B funding round',
        'Pioneered zero-trust architecture implementation'
      ],
      expertise: ['Enterprise Architecture', 'Digital Sovereignty', 'Strategic Vision', 'Open Source Leadership']
    },
    {
      id: 'mathis-luymoeyen',
      name: 'Mathis Luymoeyen',
      position: 'Chief Operating Officer',
      bio: 'Distributed systems architect with 15+ years building enterprise infrastructure. Mathis oversees technical operations and ensures delivery of world-class solutions that meet European standards for security and performance.',
      image: '/leadership/mathis-luymoeyen.jpg',
      linkedin: 'https://linkedin.com/in/mathisluymoeyen',
      achievements: [
        'Scaled infrastructure to 500+ enterprise customers',
        'Architected 99.99% uptime SLA systems',
        'Led GDPR compliance implementation'
      ],
      expertise: ['Distributed Systems', 'Cloud Architecture', 'Security Engineering', 'Performance Optimization']
    },
    {
      id: 'cto-position',
      name: 'Position Open',
      position: 'Chief Technology Officer',
      bio: 'We are seeking a technology visionary to lead our enterprise R&D and innovation strategy. This role will drive our technical roadmap, oversee product development, infrastructure modernization, and emerging technology integration.',
      image: '/leadership/position-open.jpg',
      linkedin: '/careers?role=cto',
      achievements: [
        'Opportunity to lead Aether Office 2.0 development',
        'Shape multi-cloud infrastructure strategy',
        'Establish enterprise AI/ML capabilities'
      ],
      expertise: ['Technology Strategy', 'Product Innovation', 'Cloud Architecture', 'AI/ML Integration']
    },
    {
      id: 'cpo-position',
      name: 'Position Open',
      position: 'Chief Product Officer',
      bio: 'We are looking for a product strategist to drive our product vision and user experience across our enterprise portfolio. This role will oversee market positioning and product-led growth initiatives.',
      image: '/leadership/position-open.jpg',
      linkedin: '/careers?role=cpo',
      achievements: [
        'Launch flagship enterprise products',
        'Grow product portfolio to 15+ solutions',
        'Establish product-led growth strategy'
      ],
      expertise: ['Product Strategy', 'User Experience', 'Market Analysis', 'Go-to-Market']
    },
    {
      id: 'cfo-position',
      name: 'Position Open',
      position: 'Chief Financial Officer',
      bio: 'We are seeking a financial strategist to manage our financial planning, investor relations, and sustainable growth initiatives. This role will ensure fiscal responsibility and drive ESG strategy implementation.',
      image: '/leadership/position-open.jpg',
      linkedin: '/careers?role=cfo',
      achievements: [
        'Opportunity to secure significant funding rounds',
        'Implement ESG reporting framework',
        'Drive sustainable profitability'
      ],
      expertise: ['Financial Planning', 'Investor Relations', 'ESG Strategy', 'Risk Management']
    },
    {
      id: 'cso-position',
      name: 'Position Open',
      position: 'Chief Security Officer',
      bio: 'We are looking for a security expert to lead our enterprise cybersecurity and governance programs. This role will drive security strategy, compliance, and zero-trust implementation across all platforms.',
      image: '/leadership/position-open.jpg',
      linkedin: '/careers?role=cso',
      achievements: [
        'Achieve SOC 2 Type II certification',
        'Implement zero-trust architecture',
        'Lead GDPR and ISO 27001 compliance'
      ],
      expertise: ['Cybersecurity', 'Risk Management', 'Compliance', 'Zero-Trust Architecture']
    }
  ];

  // Extended Leadership - Department Heads
  const departmentHeads: DepartmentHead[] = [
    {
      id: 'vp-engineering-position',
      name: 'Position Open',
      position: 'VP of Engineering',
      department: 'Engineering',
      bio: 'We are seeking an engineering leader to build scalable enterprise systems and drive technical excellence. This role will lead our engineering organization and foster innovation across all product lines.',
      responsibilities: [
        'Lead engineering teams across all products',
        'Drive technical architecture decisions',
        'Foster engineering culture and best practices',
        'Oversee talent development and retention'
      ],
      image: '/leadership/position-open.jpg',
      linkedin: '/careers?role=vp-engineering'
    },
    {
      id: 'vp-design-position',
      name: 'Position Open',
      position: 'VP of Product Design',
      department: 'Design',
      bio: 'We are looking for a design executive to champion human-centered design across our product ecosystem. This role will ensure intuitive and accessible enterprise solutions.',
      responsibilities: [
        'Lead product design and UX research',
        'Establish design systems and standards',
        'Drive design thinking culture',
        'Collaborate with product and engineering teams'
      ],
      image: '/leadership/position-open.jpg',
      linkedin: '/careers?role=vp-design'
    },
    {
      id: 'vp-sales-position',
      name: 'Position Open',
      position: 'VP of Sales',
      department: 'Sales',
      bio: 'We are seeking a sales leader to build strategic partnerships and drive revenue growth across European markets. This role will lead our global sales organization.',
      responsibilities: [
        'Lead global sales strategy and execution',
        'Build and manage enterprise sales teams',
        'Develop strategic partnerships',
        'Drive revenue growth and market expansion'
      ],
      image: '/leadership/position-open.jpg',
      linkedin: '/careers?role=vp-sales'
    },
    {
      id: 'vp-marketing-position',
      name: 'Position Open',
      position: 'VP of Marketing',
      department: 'Marketing',
      bio: 'We are looking for a marketing executive to lead our strategy, brand positioning, and demand generation. This role will drive marketing initiatives across European markets.',
      responsibilities: [
        'Lead marketing strategy and brand positioning',
        'Drive demand generation and lead acquisition',
        'Oversee content marketing and communications',
        'Manage marketing analytics and ROI'
      ],
      image: '/leadership/position-open.jpg',
      linkedin: '/careers?role=vp-marketing'
    },
    {
      id: 'vp-customer-success-position',
      name: 'Position Open',
      position: 'VP of Customer Success',
      department: 'Customer Success',
      bio: 'We are seeking a customer experience leader to ensure maximum value from our solutions. This role will drive exceptional service and support programs.',
      responsibilities: [
        'Lead customer success and support teams',
        'Drive customer adoption and retention',
        'Develop customer success programs',
        'Oversee customer feedback and satisfaction'
      ],
      image: '/leadership/position-open.jpg',
      linkedin: '/careers?role=vp-customer-success'
    },
    {
      id: 'vp-hr-position',
      name: 'Position Open',
      position: 'VP of Human Resources',
      department: 'Human Resources',
      bio: 'We are looking for an HR executive to lead our people strategy and foster a culture of innovation. This role will drive organizational development and excellence.',
      responsibilities: [
        'Lead talent acquisition and development',
        'Drive organizational culture and values',
        'Oversee employee experience and engagement',
        'Manage compensation and benefits programs'
      ],
      image: '/leadership/position-open.jpg',
      linkedin: '/careers?role=vp-hr'
    }
  ];

  // Core Values
  const values: Value[] = [
    {
      title: 'Innovation & Vision',
      description: 'We continuously push boundaries of what\'s possible in enterprise technology, always looking ahead to the next breakthrough.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: 'Security & Reliability',
      description: 'Security and reliability are embedded in our DNA, ensuring enterprise-grade protection and 99.99% uptime.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Collaboration & Transparency',
      description: 'We believe in open collaboration and radical transparency, both internally with our team and externally with our community.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'European Excellence',
      description: 'We are committed to advancing European technological sovereignty and building solutions that reflect European values.',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  // Guiding Principles
  const principles: Principle[] = [
    {
      title: 'Customer-Centric Approach',
      description: 'Every decision we make starts with our customers\' success and security in mind.',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Technical Excellence',
      description: 'We pursue engineering excellence in everything we build, from code quality to system architecture.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Sustainable Growth',
      description: 'We build for long-term success, balancing innovation with stability and sustainability.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Operational Transparency',
      description: 'We operate with transparency and accountability, building trust through open communication.',
      icon: <Eye className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
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
              Executive Leadership
            </div>

            {/* Main title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight mx-auto text-center">
              <div className="max-w-5xl mx-auto">
                Our Leadership
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Team
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center mb-12">
              <p>
                Guiding Sky Genesis Enterprise toward European digital sovereignty and next-generation enterprise solutions.
              </p>
              <p className="text-gray-400">
                Meet the visionary leaders and department heads driving innovation, excellence, and sustainable growth across our organization.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="#executive-team" 
                className="bg-white text-black px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-base lg:text-lg whitespace-nowrap"
              >
                <Award className="w-5 h-5 mr-2" />
                Executive Team
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#department-heads" 
                className="border border-white/20 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-base lg:text-lg whitespace-nowrap"
              >
                <Building className="w-5 h-5 mr-2" />
                Department Heads
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Team Section */}
      <section id="executive-team" className="py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Executive Leadership Team</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  Join our founding team and help shape the future of European digital sovereignty
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Multiple C-level positions available
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {leaders.map((leader) => {
                const isOpenPosition = leader.name === 'Position Open';
                return (
                  <div key={leader.id} className={`group relative bg-gradient-to-br ${isOpenPosition ? 'from-green-500/5 to-blue-500/5 border-green-500/20 hover:border-green-500/30' : 'from-white/5 to-white/[0.02] border-white/10 hover:border-white/20'} backdrop-blur-sm rounded-xl p-8 transition-all duration-300`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${isOpenPosition ? 'from-green-500/10 to-blue-500/10' : 'from-blue-500/5 to-purple-500/5'} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity`}></div>
                    
                    <div className="relative">
                      {/* Position Open Badge */}
                      {isOpenPosition && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <div className="relative">
                            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                          </div>
                        </div>
                      )}
                      
                      {/* Leader Image */}
                      <div className={`w-32 h-32 ${isOpenPosition ? 'bg-gradient-to-br from-green-800/20 to-blue-800/20 border-2 border-dashed border-green-500/30' : 'bg-gray-800'} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        {isOpenPosition ? (
                          <div className="text-center">
                            <Users className="w-12 h-12 text-green-400 mx-auto mb-1" />
                            <span className="text-xs text-green-400 font-semibold">OPEN</span>
                          </div>
                        ) : (
                          <Users className="w-16 h-16 text-gray-600" />
                        )}
                      </div>
                      
                      {/* Name and Position */}
                      <h3 className={`text-2xl font-bold mb-2 text-center ${isOpenPosition ? 'text-green-400' : 'text-white'}`}>{leader.name}</h3>
                      <p className={`font-medium mb-4 text-center ${isOpenPosition ? 'text-green-300' : 'text-blue-400'}`}>{leader.position}</p>
                      
                      {/* Bio */}
                      <p className="text-gray-300 mb-6 leading-relaxed text-center">{leader.bio}</p>
                      
                      {/* Expertise */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {leader.expertise.map((skill, index) => (
                            <span key={index} className={`px-2 py-1 text-xs rounded-full border ${isOpenPosition ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      {leader.achievements && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white mb-3">{isOpenPosition ? 'Opportunity' : 'Key Achievements'}</h4>
                          <div className="space-y-2">
                            {leader.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-start">
                                {isOpenPosition ? (
                                  <Target className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                ) : (
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                )}
                                <span className="text-sm text-gray-400">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* CTA Button for open positions */}
                      {isOpenPosition && (
                        <div className="flex justify-center">
                          <Link 
                            href={leader.linkedin || '/careers'}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                          >
                            <Target className="w-4 h-4 mr-2" />
                            Apply Now
                          </Link>
                        </div>
                      )}
                      
                      {/* LinkedIn Link for filled positions */}
                      {!isOpenPosition && leader.linkedin && (
                        <div className="flex justify-center">
                          <a 
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all"
                          >
                            <Users className="w-4 h-4 mr-2" />
                            LinkedIn Profile
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Extended Leadership - Department Heads */}
      <section id="department-heads" className="py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Department Leadership</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  Key leadership positions available across our core business functions
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                  6 VP positions open
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {departmentHeads.map((head) => {
                const isOpenPosition = head.name === 'Position Open';
                return (
                  <div key={head.id} className={`group relative bg-gradient-to-br ${isOpenPosition ? 'from-blue-500/5 to-purple-500/5 border-blue-500/20 hover:border-blue-500/30' : 'from-white/5 to-white/[0.02] border-white/10 hover:border-white/20'} backdrop-blur-sm rounded-xl p-8 transition-all duration-300`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${isOpenPosition ? 'from-blue-500/10 to-purple-500/10' : 'from-green-500/5 to-blue-500/5'} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity`}></div>
                    
                    <div className="relative">
                      {/* Position Open Badge */}
                      {isOpenPosition && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <div className="relative">
                            <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
                          </div>
                        </div>
                      )}
                      
                      {/* Department Badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs mb-4 ${isOpenPosition ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-green-500/10 border border-green-500/20 text-green-400'}`}>
                        {head.department}
                      </div>
                      
                      {/* Leader Image */}
                      <div className={`w-24 h-24 ${isOpenPosition ? 'bg-gradient-to-br from-blue-800/20 to-purple-800/20 border-2 border-dashed border-blue-500/30' : 'bg-gray-800'} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        {isOpenPosition ? (
                          <div className="text-center">
                            <Users className="w-10 h-10 text-blue-400 mx-auto mb-1" />
                            <span className="text-xs text-blue-400 font-semibold">OPEN</span>
                          </div>
                        ) : (
                          <Users className="w-12 h-12 text-gray-600" />
                        )}
                      </div>
                      
                      {/* Name and Position */}
                      <h3 className={`text-xl font-bold mb-2 text-center ${isOpenPosition ? 'text-blue-400' : 'text-white'}`}>{head.name}</h3>
                      <p className={`font-medium mb-4 text-center ${isOpenPosition ? 'text-blue-300' : 'text-green-400'}`}>{head.position}</p>
                      
                      {/* Bio */}
                      <p className="text-gray-300 mb-6 leading-relaxed text-center text-sm">{head.bio}</p>
                      
                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Key Responsibilities</h4>
                        <div className="space-y-2">
                          {head.responsibilities.map((responsibility, index) => (
                            <div key={index} className="flex items-start">
                              {isOpenPosition ? (
                                <Target className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                              ) : (
                                <Target className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              )}
                              <span className="text-sm text-gray-400">{responsibility}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA Button for open positions */}
                      {isOpenPosition && (
                        <div className="flex justify-center">
                          <Link 
                            href={head.linkedin || '/careers'}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 text-sm"
                          >
                            <Target className="w-4 h-4 mr-2" />
                            Apply Now
                          </Link>
                        </div>
                      )}
                      
                      {/* LinkedIn Link for filled positions */}
                      {!isOpenPosition && head.linkedin && (
                        <div className="flex justify-center">
                          <a 
                            href={head.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all text-sm"
                          >
                            <Users className="w-4 h-4 mr-2" />
                            Connect
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Vision & Core Values */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Vision & Values</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  The core principles and values that guide our organization and shape our culture
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-center mb-12">Core Values</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-all duration-300">
                      <div className="text-blue-400 group-hover:scale-110 transition-transform">
                        {value.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Guiding Principles */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-12">Guiding Principles</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {principles.map((principle, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="text-green-400 group-hover:scale-110 transition-transform">
                        {principle.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-4">{principle.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Impact Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Impact</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  Measurable results driven by our leadership team and organizational excellence
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-blue-400 mb-4">500+</div>
                <p className="text-xl font-semibold mb-2">Enterprise Customers</p>
                <p className="text-gray-400">Trusted by leading organizations across Europe</p>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-green-400 mb-4">99.99%</div>
                <p className="text-xl font-semibold mb-2">Uptime SLA</p>
                <p className="text-gray-400">Industry-leading reliability and performance</p>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-purple-400 mb-4">15+</div>
                <p className="text-xl font-semibold mb-2">Countries</p>
                <p className="text-gray-400">Serving customers across European markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Section badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/80 mb-8">
              <Target className="w-4 h-4 mr-2" />
              Take Action
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              <span className="block mb-2">Join Our</span>
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Leadership Journey
              </span>
            </h2>
            
            {/* Enhanced subtitle */}
            <div className="space-y-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-center mb-16">
              <p className="text-white/95">
                Be part of a team that's shaping the future of European digital sovereignty. 
                Whether you're seeking to join our leadership team, explore partnerships, 
                or engage with our vision, we're ready to connect.
              </p>
              <p className="text-white/80 text-base md:text-lg">
                Together, we're building the next generation of enterprise technology 
                with European values at our core.
              </p>
            </div>
            
            {/* Enhanced CTA cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <Link 
                href="/careers" 
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Build Your Career</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    Join a team of innovators and leaders shaping the future of enterprise technology
                  </p>
                  <div className="inline-flex items-center text-blue-300 font-semibold group-hover:text-blue-200 transition-colors">
                    Explore Opportunities
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              <Link 
                href="/contact" 
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Partner With Us</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    Connect with our leadership team to explore strategic partnerships and collaborations
                  </p>
                  <div className="inline-flex items-center text-purple-300 font-semibold group-hover:text-purple-200 transition-colors">
                    Start Conversation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              <Link 
                href="/company/press" 
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Stay Informed</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    Access press releases, leadership insights, and company updates
                  </p>
                  <div className="inline-flex items-center text-indigo-300 font-semibold group-hover:text-indigo-200 transition-colors">
                    View Resources
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Enhanced trust indicators */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-white font-semibold mb-1">48-Hour Response</p>
                <p className="text-white/70 text-sm">Executive team commitment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-white font-semibold mb-1">Confidential</p>
                <p className="text-white/70 text-sm">All inquiries handled discreetly</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-white font-semibold mb-1">Equal Opportunity</p>
                <p className="text-white/70 text-sm">Diverse and inclusive workplace</p>
              </div>
            </div>
            
            {/* Final call-to-action */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Make an Impact?</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Join us in our mission to advance European digital sovereignty 
                and build the future of enterprise technology.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-3" />
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}