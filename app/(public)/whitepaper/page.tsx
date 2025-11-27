'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Download, 
  Calendar, 
  FileText, 
  Search, 
  Star, 
  TrendingUp, 
  Shield, 
  Globe, 
  BookOpen, 
  Mail, 
  ArrowRight,
  Clock
} from 'lucide-react';

interface Whitepaper {
  id: string;
  title: string;
  category: 'technical' | 'strategic' | 'market-analysis' | 'vision';
  date: string;
  abstract: string;
  featured: boolean;
  downloadCount: number;
  readTime: string;
  fileSize: string;
}

export default function WhitepapersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const whitepapers: Whitepaper[] = [
    {
      id: 'digital-sovereignty-2025',
      title: 'Digital Sovereignty in Europe: A Strategic Imperative for 2025',
      category: 'strategic',
      date: '2025-01-15',
      abstract: 'An in-depth analysis of European digital sovereignty challenges and opportunities, providing a comprehensive roadmap for organizations seeking technological independence.',
      featured: true,
      downloadCount: 15420,
      readTime: '12 min',
      fileSize: '2.4 MB'
    },
    {
      id: 'zero-trust-architecture',
      title: 'Zero-Trust Architecture: Building Security-First Enterprise Infrastructure',
      category: 'technical',
      date: '2025-01-10',
      abstract: 'Technical deep-dive into implementing zero-trust security models across distributed enterprise systems, with practical implementation guidelines.',
      featured: true,
      downloadCount: 12350,
      readTime: '18 min',
      fileSize: '3.1 MB'
    },
    {
      id: 'open-source-ecosystem',
      title: 'The Open-Source Ecosystem: Driving European Innovation',
      category: 'vision',
      date: '2024-12-20',
      abstract: 'Exploring how open-source collaboration is reshaping European technology landscape and fostering sustainable digital independence.',
      featured: false,
      downloadCount: 8920,
      readTime: '10 min',
      fileSize: '1.8 MB'
    },
    {
      id: 'enterprise-collaboration',
      title: 'Next-Generation Enterprise Collaboration: Beyond Traditional Tools',
      category: 'technical',
      date: '2024-12-15',
      abstract: 'Comparative analysis of modern collaboration platforms and their impact on enterprise productivity and security.',
      featured: false,
      downloadCount: 7650,
      readTime: '15 min',
      fileSize: '2.7 MB'
    },
    {
      id: 'gdpr-compliance-guide',
      title: 'GDPR Compliance in Modern Enterprise Architecture',
      category: 'technical',
      date: '2024-12-01',
      abstract: 'Practical guide to implementing GDPR-compliant data handling across enterprise infrastructure and applications.',
      featured: false,
      downloadCount: 11200,
      readTime: '14 min',
      fileSize: '2.2 MB'
    },
    {
      id: 'market-analysis-2025',
      title: 'European Enterprise Software Market Analysis 2025',
      category: 'market-analysis',
      date: '2024-11-28',
      abstract: 'Comprehensive market analysis of European enterprise software trends, opportunities, and competitive landscape.',
      featured: true,
      downloadCount: 9800,
      readTime: '20 min',
      fileSize: '4.5 MB'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Publications', icon: BookOpen },
    { id: 'technical', name: 'Technical Research', icon: Shield },
    { id: 'strategic', name: 'Strategy & Vision', icon: TrendingUp },
    { id: 'market-analysis', name: 'Market Analysis', icon: Globe }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technical': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'strategic': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'market-analysis': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'vision': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technical': return Shield;
      case 'strategic': return TrendingUp;
      case 'market-analysis': return Globe;
      case 'vision': return BookOpen;
      default: return FileText;
    }
  };

  const filteredWhitepapers = whitepapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredWhitepapers = whitepapers.filter(paper => paper.featured);

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
              Research & Publications
            </div>

            {/* Main title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight mx-auto text-center">
              <div className="max-w-5xl mx-auto">
                Whitepapers &
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Research
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center mb-12">
              <p>
                Explore our in-depth research, technological insights, and strategic publications. 
                Discover how Sky Genesis Enterprise is shaping the future of European digital sovereignty.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="#whitepapers" 
                className="bg-white text-black px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-base lg:text-lg whitespace-nowrap"
              >
                Explore Research
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#subscribe" 
                className="border border-white/20 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-base lg:text-lg whitespace-nowrap"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Whitepapers Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Research</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  Our most influential publications shaping European digital transformation
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredWhitepapers.map((paper) => (
                <div key={paper.id} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300">
                  <div className="absolute top-4 right-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  
                  <div className="mb-6">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(paper.category)} mb-4`}>
                      {(() => {
                        const IconComponent = getCategoryIcon(paper.category);
                        return <IconComponent className="w-3 h-3 mr-2" />;
                      })()}
                      {paper.category.replace('-', ' ').charAt(0).toUpperCase() + paper.category.slice(1).replace('-', ' ')}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {paper.abstract}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {paper.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="w-4 h-4 mr-1" />
                      {paper.downloadCount.toLocaleString()}
                    </div>
                    
                    <button className="inline-flex items-center px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 group-hover:scale-105">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Whitepapers Section */}
      <section id="whitepapers" className="py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">All Publications</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  Complete collection of our research papers and strategic publications
                </p>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search whitepapers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedCategory === category.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Whitepapers List */}
            <div className="space-y-6">
              {filteredWhitepapers.map((paper) => (
                <div key={paper.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(paper.category)}`}>
                          {(() => {
                            const IconComponent = getCategoryIcon(paper.category);
                            return <IconComponent className="w-3 h-3 mr-2" />;
                          })()}
                          {paper.category.replace('-', ' ').charAt(0).toUpperCase() + paper.category.slice(1).replace('-', ' ')}
                        </div>
                        
                        {paper.featured && (
                          <div className="inline-flex items-center px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-xs font-medium">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {paper.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {paper.abstract}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {paper.readTime}
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          {paper.downloadCount.toLocaleString()} downloads
                        </div>
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          {paper.fileSize}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex lg:flex-col gap-3">
                      <button className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-300">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredWhitepapers.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No whitepapers found</h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="subscribe" className="py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Stay Updated with Latest Research
          </h2>
          <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center mb-12">
            <p className="text-white/90">
              Subscribe to receive our latest whitepapers, research insights, and strategic publications 
              directly in your inbox.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all w-full sm:w-96"
            />
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              Subscribe to Research
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-all"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Research Team
            </Link>
            <Link 
              href="/research" 
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-all"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Download Complete Pack
            </Link>
          </div>
          
          <p className="text-white/70 mt-6 text-sm">
            Join 10,000+ professionals receiving our research insights • Unsubscribe anytime
          </p>
        </div>
      </section>
    </div>
  );
}