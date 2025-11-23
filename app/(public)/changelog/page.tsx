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
  Search,
  GitPullRequest,
  User
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

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
      case 'feature': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'improvement': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'fix': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'security': return 'bg-red-500/10 text-red-600 border-red-500/20';
      case 'breaking': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
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
    <div className="min-h-screen bg-background">
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
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            {/* Enterprise badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-12 hover:border-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Changelog Status
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Track Our
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Platform Evolution
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Stay informed about new features, improvements, security updates, and important changes across our entire platform.
              </p>
            </div>

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <Calendar className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search changelog..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-accent/50 transition-colors"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    {category.name}
                    <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                      {category.count}
                    </span>
                  </Button>
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
                  <h2 className="text-3xl font-bold text-foreground">{version}</h2>
                  <span className="text-muted-foreground">{formatDate(entries[0].date)}</span>
                </div>

                {/* Entries for this version */}
                <div className="space-y-6">
                  {entries.map((entry) => (
                    <Card key={entry.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {/* Entry Header */}
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg border ${getTypeColor(entry.type)}`}>
                                {getTypeIcon(entry.type)}
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-foreground">{entry.title}</h3>
                                <p className="text-sm text-muted-foreground flex items-center gap-2">
                                  <User className="w-3 h-3" />
                                  By {entry.author}
                                  {entry.pr && (
                                    <>
                                      <span>•</span>
                                      <a 
                                        href={`https://github.com/skygenesisenterprise/pull/${entry.pr.replace('#', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 flex items-center gap-1"
                                      >
                                        <GitPullRequest className="w-3 h-3" />
                                        {entry.pr}
                                      </a>
                                    </>
                                  )}
                                </p>
                              </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(entry.type)}`}>
                              {entry.type}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">{entry.description}</p>

                          {/* Affected Components */}
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-muted-foreground">Affected:</p>
                            <div className="flex flex-wrap gap-2">
                              {entry.affected.map((item, index) => (
                                <span key={index} className="text-xs bg-muted px-2 py-1 rounded border border-border">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {filteredChangelog.length === 0 && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-lg">
                  No changelog entries found matching your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Package className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Stay Updated with Latest Changes
            </h2>
            <p className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
              Subscribe to our developer newsletter or follow our GitHub repository to receive notifications about new releases and important updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href="https://github.com/skygenesisenterprise" className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Follow on GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/newsletter" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Subscribe to Newsletter
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}