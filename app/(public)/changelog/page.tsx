'use client';

import { useState } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle, 
  Zap, 
  Shield, 
  Package,
  Search
} from 'lucide-react';

interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  type: 'feature' | 'improvement' | 'fix' | 'security' | 'breaking';
  title: string;
  description: string;
  affected: string[];
  author: string;
  pr?: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

export default function ChangelogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Changelog data
  const changelog: ChangelogEntry[] = [
    {
      id: '1',
      version: 'v2.1.0',
      date: '2024-11-15',
      type: 'feature',
      title: 'Enhanced Authentication API with Multi-Factor Support',
      description: 'Added comprehensive multi-factor authentication (MFA) support to the Authentication API, including TOTP, SMS, and hardware token options. Enhanced security controls and improved user experience flows.',
      affected: ['Authentication API', 'Security Framework', 'Enterprise SDK'],
      author: 'Sarah Chen',
      pr: '#1234'
    },
    {
      id: '2',
      version: 'v2.1.0',
      date: '2024-11-15',
      type: 'improvement',
      title: 'Python SDK Performance Optimizations',
      description: 'Significant performance improvements in the Python SDK with 40% faster response times and reduced memory footprint. Added async context manager support for better resource management.',
      affected: ['Python SDK', 'Data API'],
      author: 'Marcus Weber',
      pr: '#1235'
    },
    {
      id: '3',
      version: 'v2.1.0',
      date: '2024-11-15',
      type: 'security',
      title: 'Security Patch for Zero-Trust Framework',
      description: 'Critical security update addressing potential privilege escalation in zero-trust framework. All users are strongly recommended to update immediately.',
      affected: ['Security Framework', 'Enterprise Console'],
      author: 'Elena Rodriguez',
      pr: '#1236'
    },
    {
      id: '4',
      version: 'v2.0.5',
      date: '2024-11-12',
      type: 'improvement',
      title: 'Multi-Region Deployment Enhancements',
      description: 'Improved multi-region deployment capabilities with automatic failover testing and enhanced monitoring. Added support for new European regions.',
      affected: ['Infrastructure', 'Monitoring Stack'],
      author: 'Thomas Müller',
      pr: '#1228'
    },
    {
      id: '5',
      version: 'v2.0.5',
      date: '2024-11-12',
      type: 'feature',
      title: 'Real-Time Collaboration API',
      description: 'New real-time collaboration API enabling live document editing, presence awareness, and synchronized state management across distributed teams.',
      affected: ['Collaboration API', 'Aether Office'],
      author: 'Alexandra Chen',
      pr: '#1229'
    },
    {
      id: '6',
      version: 'v2.0.4',
      date: '2024-11-08',
      type: 'fix',
      title: 'Fixed Memory Leak in Database Connection Pool',
      description: 'Resolved memory leak issue in database connection pool that could cause gradual performance degradation in long-running applications.',
      affected: ['SkyDB Client', 'Go SDK'],
      author: 'David Kim',
      pr: '#1215'
    },
    {
      id: '7',
      version: 'v2.0.4',
      date: '2024-11-08',
      type: 'improvement',
      title: 'Enhanced Error Handling and Logging',
      description: 'Improved error messages with more detailed context and better debugging information. Enhanced logging with structured JSON output.',
      affected: ['All APIs', 'SDKs'],
      author: 'Sophie Laurent',
      pr: '#1216'
    },
    {
      id: '8',
      version: 'v2.0.3',
      date: '2024-11-05',
      type: 'breaking',
      title: 'API Rate Limiting Structure Update',
      description: 'Updated rate limiting response headers and error format for better consistency across all APIs. Requires client updates for proper handling.',
      affected: ['All APIs'],
      author: 'Michael Brown',
      pr: '#1202'
    },
    {
      id: '9',
      version: 'v2.0.3',
      date: '2024-11-05',
      type: 'feature',
      title: 'Advanced Analytics Dashboard API',
      description: 'New comprehensive analytics API providing detailed insights into API usage, performance metrics, and cost optimization recommendations.',
      affected: ['Analytics API', 'Enterprise Console'],
      author: 'Lisa Wang',
      pr: '#1203'
    }
  ];

  // Categories
  const categories: Category[] = [
    { id: 'all', name: 'All Updates', count: changelog.length },
    { id: 'feature', name: 'Features', count: changelog.filter(e => e.type === 'feature').length },
    { id: 'improvement', name: 'Improvements', count: changelog.filter(e => e.type === 'improvement').length },
    { id: 'fix', name: 'Bug Fixes', count: changelog.filter(e => e.type === 'fix').length },
    { id: 'security', name: 'Security', count: changelog.filter(e => e.type === 'security').length },
    { id: 'breaking', name: 'Breaking Changes', count: changelog.filter(e => e.type === 'breaking').length }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'feature': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'improvement': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'fix': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'security': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'breaking': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'feature': return <Zap className="w-4 h-4" />;
      case 'improvement': return <ArrowRight className="w-4 h-4" />;
      case 'fix': return <CheckCircle className="w-4 h-4" />;
      case 'security': return <Shield className="w-4 h-4" />;
      case 'breaking': return <AlertCircle className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredChangelog = changelog.filter(entry => {
    const matchesCategory = selectedCategory === 'all' || entry.type === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.affected.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Group by version
  const groupedChangelog = filteredChangelog.reduce((groups, entry) => {
    if (!groups[entry.version]) {
      groups[entry.version] = [];
    }
    groups[entry.version].push(entry);
    return groups;
  }, {} as Record<string, ChangelogEntry[]>);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                Changelog
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Track the evolution of Sky Genesis Enterprise APIs and services.
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Stay informed about new features, improvements, security updates, and important changes across our entire platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 border-b border-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search changelog..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-800 transition-colors"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-900 text-gray-400 hover:bg-gray-800 border border-gray-800'
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 text-xs bg-gray-800 px-2 py-0.5 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog Entries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {Object.entries(groupedChangelog).map(([version, entries]) => (
              <div key={version} className="mb-16">
                {/* Version Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <h2 className="text-3xl font-bold">{version}</h2>
                  <span className="text-gray-500">{formatDate(entries[0].date)}</span>
                </div>

                {/* Entries for this version */}
                <div className="space-y-6">
                  {entries.map((entry) => (
                    <div key={entry.id} className="card">
                      <div className="space-y-4">
                        {/* Entry Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg border ${getTypeColor(entry.type)}`}>
                              {getTypeIcon(entry.type)}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">{entry.title}</h3>
                              <p className="text-sm text-gray-500">
                                By {entry.author} {entry.pr && (
                                  <a 
                                    href={`https://github.com/skygenesisenterprise/pull/${entry.pr.replace('#', '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 ml-2"
                                  >
                                    {entry.pr}
                                  </a>
                                )}
                              </p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(entry.type)}`}>
                            {entry.type}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed">{entry.description}</p>

                        {/* Affected Components */}
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-400">Affected:</p>
                          <div className="flex flex-wrap gap-2">
                            {entry.affected.map((item, index) => (
                              <span key={index} className="text-xs bg-gray-800 px-2 py-1 rounded border border-gray-700">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {filteredChangelog.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">
                  No changelog entries found matching your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">
              Stay Updated with Latest Changes
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Subscribe to our developer newsletter or follow our GitHub repository to receive notifications about new releases and important updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://github.com/skygenesisenterprise" className="btn-primary">
                <Package className="w-5 h-5" />
                Follow on GitHub
              </a>
              <a href="/newsletter" className="btn-secondary">
                <Calendar className="w-5 h-5" />
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}