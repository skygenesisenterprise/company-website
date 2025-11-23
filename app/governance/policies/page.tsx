'use client';

import { useState, useMemo } from 'react';
import { Search, Download, Eye, Calendar, FileText, Shield, Users, Code, ChevronDown, ChevronUp, ExternalLink, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface Policy {
  id: string;
  title: string;
  summary: string;
  category: 'security' | 'compliance' | 'operational' | 'development';
  version: string;
  lastUpdated: string;
  status: 'active' | 'draft' | 'archived';
  downloadUrl?: string;
  viewUrl?: string;
  tags: string[];
}

const policiesData: Policy[] = [
  // Security Policies
  {
    id: 'sec-001',
    title: 'Data Protection Policy',
    summary: 'Comprehensive framework for protecting sensitive company and customer data across all platforms and storage systems.',
    category: 'security',
    version: '2.1.0',
    lastUpdated: '2024-11-15',
    status: 'active',
    tags: ['GDPR', 'encryption', 'data-classification'],
    viewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 'sec-002',
    title: 'Access Control Policy',
    summary: 'Procedures for managing user access, authentication, and authorization across enterprise systems.',
    category: 'security',
    version: '1.8.3',
    lastUpdated: '2024-10-28',
    status: 'active',
    tags: ['RBAC', 'MFA', 'zero-trust'],
    viewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 'sec-003',
    title: 'Encryption Standards',
    summary: 'Technical standards and requirements for data encryption at rest and in transit.',
    category: 'security',
    version: '3.0.1',
    lastUpdated: '2024-11-01',
    status: 'active',
    tags: ['AES-256', 'TLS', 'key-management'],
    viewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 'sec-004',
    title: 'Incident Response Protocol',
    summary: 'Step-by-step procedures for detecting, responding to, and recovering from security incidents.',
    category: 'security',
    version: '2.5.0',
    lastUpdated: '2024-09-20',
    status: 'active',
    tags: ['incident-response', 'forensics', 'recovery'],
    viewUrl: '#',
    downloadUrl: '#'
  },

  // Compliance & Legal Policies
  {
    id: 'comp-001',
    title: 'GDPR Compliance Framework',
    summary: 'Complete implementation guide for GDPR compliance across all business operations.',
    category: 'compliance',
    version: '4.2.0',
    lastUpdated: '2024-11-10',
    status: 'active',
    tags: ['GDPR', 'privacy', 'data-rights'],
    viewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 'comp-002',
    title: 'ISO 27001 Implementation',
    summary: 'Information Security Management System (ISMS) aligned with ISO 27001 standards.',
    category: 'compliance',
    version: '3.1.0',
    lastUpdated: '2024-10-15',
    status: 'active',
    tags: ['ISO-27001', 'ISMS', 'certification'],
    viewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 'comp-003',
    title: 'Audit & Reporting Procedures',
    summary: 'Standardized processes for internal and external audits, compliance reporting.',
    category: 'compliance',
    version: '2.0.3',
    lastUpdated: '2024-11-05',
    status: 'active',
    tags: ['auditing', 'reporting', 'compliance'],
    viewUrl: '#',
    downloadUrl: '#'
  },

  // Operational Policies
  {
    id: 'ops-001',
    title: 'Employee Code of Conduct',
    summary: 'Guidelines for professional behavior, ethics, and workplace standards.',
    category: 'operational',
    version: '5.0.0',
    lastUpdated: '2024-01-15',
    status: 'active',
    tags: ['ethics', 'workplace', 'professionalism'],
    viewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 'ops-002',
    title: 'Project Management Framework',
    summary: 'Standardized methodologies for project planning, execution, and delivery.',
    category: 'operational',
    version: '3.2.1',
    lastUpdated: '2024-10-20',
    status: 'active',
    tags: ['agile', 'scrum', 'project-lifecycle'],
    viewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 'ops-003',
    title: 'Risk Management Policy',
    summary: 'Framework for identifying, assessing, and mitigating business and operational risks.',
    category: 'operational',
    version: '2.8.0',
    lastUpdated: '2024-09-30',
    status: 'active',
    tags: ['risk-assessment', 'mitigation', 'governance'],
    viewUrl: '#',
    downloadUrl: '#'
  },

  // Product / Development Policies
  {
    id: 'dev-001',
    title: 'Open Source Contribution Guidelines',
    summary: 'Rules and procedures for contributing to and using open source software.',
    category: 'development',
    version: '1.5.0',
    lastUpdated: '2024-11-12',
    status: 'active',
    tags: ['open-source', 'contributions', 'licensing'],
    viewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 'dev-002',
    title: 'API Usage Policy',
    summary: 'Guidelines for API development, documentation, and third-party integration.',
    category: 'development',
    version: '2.3.0',
    lastUpdated: '2024-10-25',
    status: 'active',
    tags: ['API', 'integration', 'documentation'],
    viewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 'dev-003',
    title: 'Versioning & Release Management',
    summary: 'Procedures for software versioning, release cycles, and deployment.',
    category: 'development',
    version: '3.0.0',
    lastUpdated: '2024-11-08',
    status: 'active',
    tags: ['versioning', 'CI/CD', 'deployment'],
    viewUrl: '#',
    downloadUrl: '#'
  }
];

const categoryConfig = {
  security: {
    name: 'Security Policies',
    icon: Shield,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20'
  },
  compliance: {
    name: 'Compliance & Legal',
    icon: FileText,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  operational: {
    name: 'Operational Policies',
    icon: Users,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20'
  },
  development: {
    name: 'Product / Development',
    icon: Code,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  }
};

const statusConfig = {
  active: { icon: CheckCircle, color: 'text-green-400', label: 'Active' },
  draft: { icon: Clock, color: 'text-yellow-400', label: 'Draft' },
  archived: { icon: AlertCircle, color: 'text-gray-400', label: 'Archived' }
};

export default function PoliciesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['security', 'compliance', 'operational', 'development']));
  const [sortBy, setSortBy] = useState<'title' | 'updated' | 'category'>('updated');

  const filteredPolicies = useMemo(() => {
    const filtered = policiesData.filter(policy => {
      const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           policy.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           policy.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || policy.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort policies
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'updated':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const policiesByCategory = useMemo(() => {
    const grouped: Record<string, Policy[]> = {};
    Object.keys(categoryConfig).forEach(category => {
      grouped[category] = filteredPolicies.filter(p => p.category === category);
    });
    return grouped;
  }, [filteredPolicies]);

  const stats = useMemo(() => {
    const totalPolicies = policiesData.length;
    const activePolicies = policiesData.filter(p => p.status === 'active').length;
    const updatedThisYear = policiesData.filter(p => 
      new Date(p.lastUpdated).getFullYear() === new Date().getFullYear()
    ).length;
    const categoriesCovered = Object.keys(categoryConfig).length;

    return { totalPolicies, activePolicies, updatedThisYear, categoriesCovered };
  }, []);

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
                Governance Framework
                </div>
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Policies &
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Procedures
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Comprehensive governance framework ensuring transparency, compliance, and operational excellence 
                across Sky Genesis Enterprise. Our policies reflect our commitment to security, ethics, and innovation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stats.totalPolicies}</div>
                <div className="text-sm text-gray-400">Total Policies</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">{stats.activePolicies}</div>
                <div className="text-sm text-gray-400">Active Policies</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">{stats.updatedThisYear}</div>
                <div className="text-sm text-gray-400">Updated This Year</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">{stats.categoriesCovered}</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
            </div>
          </div>
      </section>

      {/* Search and Filter Section */}
      <section className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search policies, tags, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-all"
              >
                <option value="all">All Categories</option>
                {Object.entries(categoryConfig).map(([key, config]) => (
                  <option key={key} value={key}>{config.name}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'title' | 'updated' | 'category')}
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-all"
              >
                <option value="updated">Sort by Last Updated</option>
                <option value="title">Sort by Title</option>
                <option value="category">Sort by Category</option>
              </select>

              {/* Results Count */}
              <div className="text-sm text-gray-400">
                {filteredPolicies.length} of {policiesData.length} policies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies by Category */}
      <section className="container mx-auto px-4 py-12">
        {Object.entries(policiesByCategory).map(([category, policies]) => {
          const config = categoryConfig[category as keyof typeof categoryConfig];
          const isExpanded = expandedCategories.has(category);
          const Icon = config.icon;

          if (policies.length === 0) return null;

          return (
            <div key={category} className="mb-8">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:bg-gray-900/70 transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 ${config.bgColor} ${config.borderColor} border rounded-lg`}>
                    <Icon className={`w-6 h-6 ${config.color}`} />
                  </div>
                  <div className="text-left">
                    <h2 className="text-2xl font-bold text-white">{config.name}</h2>
                    <p className="text-gray-400">{policies.length} policies</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">
                    {isExpanded ? 'Click to collapse' : 'Click to expand'}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Policies List */}
              {isExpanded && (
                <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
                  {policies.map((policy) => {
                    const statusConfigItem = statusConfig[policy.status];
                    const StatusIcon = statusConfigItem.icon;

                    return (
                      <div
                        key={policy.id}
                        className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/50 hover:border-gray-700 transition-all"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          {/* Main Content */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">{policy.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{policy.summary}</p>
                              </div>
                              <div className="flex items-center space-x-2 ml-4">
                                <StatusIcon className={`w-4 h-4 ${statusConfigItem.color}`} />
                                <span className={`text-sm ${statusConfigItem.color}`}>{statusConfigItem.label}</span>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {policy.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Metadata */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                              <div className="flex items-center space-x-1">
                                <span>Version:</span>
                                <span className="text-white font-medium">{policy.version}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>Updated: {new Date(policy.lastUpdated).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col sm:flex-row gap-2 lg:ml-4">
                            <button
                              onClick={() => window.open(policy.viewUrl, '_blank')}
                              className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                              <span>View</span>
                            </button>
                            <button
                              onClick={() => window.open(policy.downloadUrl, '_blank')}
                              className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                            >
                              <Download className="w-4 h-4" />
                              <span>PDF</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* No Results */}
        {filteredPolicies.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg mb-4">No policies found matching your criteria.</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Related Standards Section */}
      <section className="border-t border-gray-800 bg-gray-900/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Standards & Frameworks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'ISO 27001', description: 'Information Security Management', url: '#' },
                { name: 'GDPR', description: 'General Data Protection Regulation', url: '#' },
                { name: 'SOC 2', description: 'Service Organization Control 2', url: '#' },
                { name: 'NIST', description: 'National Institute of Standards and Technology', url: '#' },
                { name: 'SPDX', description: 'Software Package Data Exchange', url: '#' },
                { name: 'OSI', description: 'Open Source Initiative', url: '#' }
              ].map((standard) => (
                <a
                  key={standard.name}
                  href={standard.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/70 hover:border-gray-600 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{standard.name}</h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-400 text-sm">{standard.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}