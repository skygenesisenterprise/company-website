'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Award, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  Users, 
  Target, 
  TrendingUp, 
  Search,
  ChevronRight,
  Zap,
  Globe,
  Lock,
  Code,
  Server,
  Database,
  PlayCircle,
  Calendar
} from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  description: string;
  duration: string;
  validity: string;
  category: string;
  role: string[];
  prerequisites?: string[];
  objectives?: string[];
  modules?: number;
  examType?: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface FilterState {
  role: string;
  category: string;
  level: string;
  search: string;
}

export default function CertificatesPage() {
  const [filters, setFilters] = useState<FilterState>({
    role: 'all',
    category: 'all',
    level: 'all',
    search: ''
  });

  const certifications: Certification[] = [
    {
      id: 'sg-ae-001',
      name: 'Aether Office Administrator',
      issuer: 'Sky Genesis Enterprise',
      level: 'Intermediate',
      description: 'Master enterprise workspace administration, user management, and security configurations.',
      duration: '3 weeks',
      validity: '2 years',
      category: 'Workspace Management',
      role: ['Administrator', 'IT Manager'],
      prerequisites: ['Basic IT knowledge', 'Understanding of enterprise environments'],
      objectives: ['Configure Aether Office', 'Manage users and permissions', 'Implement security policies'],
      modules: 5,
      examType: 'Practical exam + Multiple choice',
      badge: 'Popular',
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 'sg-gs-001',
      name: 'Governance Systems Professional',
      issuer: 'Sky Genesis Enterprise',
      level: 'Advanced',
      description: 'Implement zero-trust architecture, compliance frameworks, and enterprise governance.',
      duration: '6 weeks',
      validity: '3 years',
      category: 'Security & Governance',
      role: ['Security Engineer', 'Compliance Officer'],
      prerequisites: ['Network security knowledge', 'Experience with enterprise systems'],
      objectives: ['Design zero-trust architecture', 'Implement compliance frameworks', 'Manage audit trails'],
      modules: 8,
      examType: 'Lab assessment + Written exam',
      badge: 'Advanced',
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 'sg-dev-001',
      name: 'Giteria Platform Developer',
      issuer: 'Sky Genesis Enterprise',
      level: 'Intermediate',
      description: 'Build collaborative applications on Giteria platform with enterprise-grade security.',
      duration: '4 weeks',
      validity: '2 years',
      category: 'Development',
      role: ['Developer', 'Software Engineer'],
      prerequisites: ['Programming experience', 'Git knowledge', 'API understanding'],
      objectives: ['Develop Giteria applications', 'Implement enterprise security', 'Optimize performance'],
      modules: 6,
      examType: 'Code project + Technical interview',
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 'sg-api-001',
      name: 'Enterprise API Specialist',
      issuer: 'Sky Genesis Enterprise',
      level: 'Advanced',
      description: 'Design, implement, and secure enterprise APIs with Sky Genesis API ecosystem.',
      duration: '5 weeks',
      validity: '2 years',
      category: 'API Development',
      role: ['API Developer', 'Backend Engineer'],
      prerequisites: ['REST API knowledge', 'Authentication concepts', 'Database skills'],
      objectives: ['Design enterprise APIs', 'Implement security', 'Optimize performance'],
      modules: 7,
      examType: 'Practical implementation + Documentation',
      badge: 'New',
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 'sg-cloud-001',
      name: 'Cloud Infrastructure Architect',
      issuer: 'Sky Genesis Enterprise',
      level: 'Expert',
      description: 'Design and deploy scalable cloud infrastructure with European sovereignty requirements.',
      duration: '8 weeks',
      validity: '3 years',
      category: 'Infrastructure',
      role: ['Cloud Architect', 'DevOps Engineer'],
      prerequisites: ['Cloud platform experience', 'Infrastructure as code', 'Networking knowledge'],
      objectives: ['Design cloud architecture', 'Implement sovereignty', 'Optimize costs'],
      modules: 10,
      examType: 'Design project + Oral defense',
      badge: 'Expert',
      icon: <Server className="w-6 h-6" />
    },
    {
      id: 'sg-data-001',
      name: 'Data Management Professional',
      issuer: 'Sky Genesis Enterprise',
      level: 'Intermediate',
      description: 'Manage enterprise data with compliance, security, and analytics capabilities.',
      duration: '4 weeks',
      validity: '2 years',
      category: 'Data Management',
      role: ['Data Engineer', 'Database Administrator'],
      prerequisites: ['Database knowledge', 'Data privacy concepts', 'Analytics basics'],
      objectives: ['Design data architecture', 'Ensure compliance', 'Implement analytics'],
      modules: 6,
      examType: 'Case study + Practical exam',
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 'sg-sec-001',
      name: 'Security Fundamentals',
      issuer: 'Sky Genesis Enterprise',
      level: 'Beginner',
      description: 'Essential security concepts for enterprise environments and best practices.',
      duration: '2 weeks',
      validity: '1 year',
      category: 'Security & Governance',
      role: ['Junior Engineer', 'IT Support'],
      prerequisites: ['Basic IT knowledge'],
      objectives: ['Understand security concepts', 'Implement basic security', 'Recognize threats'],
      modules: 4,
      examType: 'Multiple choice',
      badge: 'Starter',
      icon: <Lock className="w-6 h-6" />
    },
    {
      id: 'sg-int-001',
      name: 'Integration Specialist',
      issuer: 'Sky Genesis Enterprise',
      level: 'Intermediate',
      description: 'Connect enterprise systems and third-party applications with secure integrations.',
      duration: '3 weeks',
      validity: '2 years',
      category: 'Integration',
      role: ['Integration Engineer', 'Solution Architect'],
      prerequisites: ['API knowledge', 'System integration concepts'],
      objectives: ['Design integrations', 'Implement security', 'Troubleshoot connections'],
      modules: 5,
      examType: 'Lab project + Documentation',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const roles = ['all', 'Administrator', 'Developer', 'Security Engineer', 'Cloud Architect', 'Data Engineer', 'IT Manager'];
  const categories = ['all', 'Workspace Management', 'Security & Governance', 'Development', 'API Development', 'Infrastructure', 'Data Management', 'Integration'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Intermediate': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Advanced': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'Expert': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case 'New': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Popular': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Advanced': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Expert': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'Starter': return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
      default: return '';
    }
  };

  const filteredCertifications = certifications.filter(cert => {
    const roleMatch = filters.role === 'all' || cert.role.includes(filters.role);
    const categoryMatch = filters.category === 'all' || cert.category === filters.category;
    const levelMatch = filters.level === 'all' || cert.level === filters.level;
    const searchMatch = filters.search === '' || 
      cert.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      cert.description.toLowerCase().includes(filters.search.toLowerCase());
    
    return roleMatch && categoryMatch && levelMatch && searchMatch;
  });

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
              <Award className="w-4 h-4 mr-3" />
              Professional Development
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Certificates &
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Professional Development
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Empower your skills, validate your expertise, and grow with Sky Genesis Enterprise.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center items-center px-4">
              <button 
                onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                Explore Certifications
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER/SEARCH SECTION */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="grid md:grid-cols-4 gap-4">
                {/* Search Bar */}
                <div className="md:col-span-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search certifications..."
                      value={filters.search}
                      onChange={(e) => setFilters({...filters, search: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Role Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <select 
                    value={filters.role}
                    onChange={(e) => setFilters({...filters, role: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>
                        {role === 'all' ? 'All Roles' : role}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select 
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Level Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">Level</label>
                  <select 
                    value={filters.level}
                    onChange={(e) => setFilters({...filters, level: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>
                        {level === 'all' ? 'All Levels' : level}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <button
                    onClick={() => setFilters({ role: 'all', category: 'all', level: 'all', search: '' })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION CARDS */}
      <section id="certifications" className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Professional Certifications</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Industry-recognized certifications validating your expertise in Sky Genesis Enterprise technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredCertifications.map((cert) => (
                <div key={cert.id} className="card group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-400 group-hover:scale-110 transition-transform">
                        {cert.icon || <Award className="w-6 h-6" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{cert.name}</h3>
                        <p className="text-sm text-gray-500">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {cert.badge && (
                        <span className={`text-xs px-2 py-1 rounded-full border ${getBadgeColor(cert.badge)}`}>
                          {cert.badge}
                        </span>
                      )}
                      <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(cert.level)}`}>
                        {cert.level}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">{cert.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {cert.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {cert.validity}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 mr-2">Category:</span>
                      <span className="text-blue-400">{cert.category}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 mr-2">Roles:</span>
                      <div className="flex flex-wrap gap-1">
                        {cert.role.map((role, idx) => (
                          <span key={idx} className="text-xs bg-gray-800 px-2 py-1 rounded">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center text-sm">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                    <div className="flex items-center space-x-2">
                      {cert.modules && (
                        <span className="text-xs text-gray-500">
                          {cert.modules} modules
                        </span>
                      )}
                      {cert.examType && (
                        <span className="text-xs text-gray-500">
                          {cert.examType}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCertifications.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No certifications found matching your criteria.</p>
                <button
                  onClick={() => setFilters({ role: 'all', category: 'all', level: 'all', search: '' })}
                  className="mt-4 text-blue-400 hover:text-blue-300"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CERTIFICATION DETAILS EXAMPLE */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">What You&apos;ll Learn</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Comprehensive curriculum designed to build practical, job-ready skills.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <div className="space-y-4">
                  <div className="text-blue-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Learning Objectives</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Master core concepts and best practices</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Implement real-world solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Develop problem-solving skills</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="space-y-4">
                  <div className="text-blue-400">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Evaluation Methods</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Hands-on practical exams</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Real-world project assessments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Peer review and feedback</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="space-y-4">
                  <div className="text-blue-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Career Benefits</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Industry-recognized credentials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Enhanced job opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                      <span>Professional network access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYEE DASHBOARD SECTION */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Track Your Progress</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Monitor your certification journey and showcase your achievements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Your Progress</h3>
                      <p className="text-sm text-gray-400">3 certifications in progress</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Aether Office Administrator</span>
                        <span className="text-blue-400">75%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>API Specialist</span>
                        <span className="text-blue-400">40%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-green-900/20 to-blue-900/20 border-green-500/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Completed Certifications</h3>
                      <p className="text-sm text-gray-400">2 earned badges</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-sm">Security Fundamentals</span>
                      </div>
                      <span className="text-xs text-gray-400">Completed</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-sm">Getting Started</span>
                      </div>
                      <span className="text-xs text-gray-400">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL-TO-ACTION */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Start Your Certification
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Journey Today
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Join thousands of professionals advancing their careers with Sky Genesis Enterprise certifications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/certifications/catalog" className="btn-primary">
                <BookOpen className="w-5 h-5" />
                Browse Full Catalog
              </Link>
              <Link href="/learning-platform" className="btn-secondary">
                <PlayCircle className="w-5 h-5" />
                Access Learning Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}