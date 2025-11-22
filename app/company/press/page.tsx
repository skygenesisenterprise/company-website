'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Download, 
  Calendar, 
  ExternalLink, 
  Mail, 
  Building, 
  Users, 
  Globe, 
  Award,
  TrendingUp,
  FileText,
  Image as ImageIcon,
  Camera,
  ChevronRight,
  Star,
  Clock,
  MapPin,
  Target,
  Zap
} from 'lucide-react';

interface PressRelease {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: 'announcements' | 'product-updates' | 'partnerships' | 'insights';
  readMoreUrl: string;
}

interface MediaCoverage {
  id: string;
  outlet: string;
  outletLogo: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
}

interface PressKitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  downloadUrl: string;
  fileSize?: string;
  format?: string;
}

interface CompanyFact {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export default function PressPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Mock data for press releases
  const pressReleases: PressRelease[] = [
    {
      id: '1',
      title: 'Sky Genesis Enterprise Launches Revolutionary Aether Office Platform',
      summary: 'Next-generation enterprise collaboration suite redefines workplace productivity with AI-powered tools and seamless integration.',
      date: '2024-11-15',
      category: 'announcements',
      readMoreUrl: '/press/releases/aether-office-launch'
    },
    {
      id: '2',
      title: 'Strategic Partnership with European Cloud Alliance',
      summary: 'New collaboration strengthens digital sovereignty and data protection for European enterprises.',
      date: '2024-11-10',
      category: 'partnerships',
      readMoreUrl: '/press/releases/cloud-alliance-partnership'
    },
    {
      id: '3',
      title: 'Q3 2024 Financial Results Show 45% Revenue Growth',
      summary: 'Record-breaking quarter driven by enterprise adoption of Aether Office and expansion into new markets.',
      date: '2024-11-05',
      category: 'insights',
      readMoreUrl: '/press/releases/q3-2024-results'
    },
    {
      id: '4',
      title: 'New Security Features Achieve ISO 27001 Certification',
      summary: 'Enhanced security framework meets international standards for enterprise data protection.',
      date: '2024-10-28',
      category: 'product-updates',
      readMoreUrl: '/press/releases/iso-27001-certification'
    },
    {
      id: '5',
      title: 'Sky Genesis Expands Operations to Germany and France',
      summary: 'New offices in Berlin and Paris support growing European customer base and local partnerships.',
      date: '2024-10-20',
      category: 'announcements',
      readMoreUrl: '/press/releases/european-expansion'
    },
    {
      id: '6',
      title: 'AI-Powered Analytics Dashboard Transforms Business Intelligence',
      summary: 'Advanced machine learning capabilities provide real-time insights and predictive analytics for enterprise decision-making.',
      date: '2024-10-15',
      category: 'product-updates',
      readMoreUrl: '/press/releases/ai-analytics-dashboard'
    }
  ];

  // Mock data for media coverage
  const mediaCoverage: MediaCoverage[] = [
    {
      id: '1',
      outlet: 'TechCrunch',
      outletLogo: '/media/techcrunch-logo.png',
      title: 'Sky Genesis Enterprise Raises €50M Series B to Revolutionize European Digital Infrastructure',
      excerpt: 'The Brussels-based company is building enterprise-grade solutions that prioritize European digital sovereignty.',
      date: '2024-11-12',
      url: 'https://techcrunch.com/skygenesisenterprise-series-b'
    },
    {
      id: '2',
      outlet: 'Forbes',
      outletLogo: '/media/forbes-logo.png',
      title: 'How Sky Genesis Enterprise is Leading the Charge in European Tech Independence',
      excerpt: 'A deep dive into the company\'s mission to provide secure, scalable alternatives to US-based enterprise solutions.',
      date: '2024-11-08',
      url: 'https://forbes.com/skygenesisenterprise-european-tech'
    },
    {
      id: '3',
      outlet: 'Reuters',
      outletLogo: '/media/reuters-logo.png',
      title: 'European Enterprises Embrace Homegrown Digital Solutions',
      excerpt: 'Growing demand for locally-developed enterprise software drives innovation in the European tech sector.',
      date: '2024-11-05',
      url: 'https://reuters.com/european-enterprise-solutions'
    },
    {
      id: '4',
      outlet: 'Wired',
      outletLogo: '/media/wired-logo.png',
      title: 'The Future of Work: Inside Sky Genesis\'s Aether Office Platform',
      excerpt: 'An exclusive look at the AI-powered collaboration suite that\'s changing how European teams work together.',
      date: '2024-10-30',
      url: 'https://wired.com/aether-office-platform'
    }
  ];

  // Press kit items
  const pressKitItems: PressKitItem[] = [
    {
      id: '1',
      title: 'Complete Press Kit',
      description: 'All press materials in one comprehensive package',
      icon: <Download className="w-6 h-6" />,
      downloadUrl: '/press/kit/skygenesisenterprise-press-kit.zip',
      fileSize: '45 MB',
      format: 'ZIP'
    },
    {
      id: '2',
      title: 'Logo Pack',
      description: 'Brand logos in SVG and PNG formats (dark/light variants)',
      icon: <ImageIcon className="w-6 h-6" />,
      downloadUrl: '/press/kit/logo-pack.zip',
      fileSize: '12 MB',
      format: 'SVG/PNG'
    },
    {
      id: '3',
      title: 'Leadership Photos',
      description: 'High-resolution headshots of executive team',
      icon: <Camera className="w-6 h-6" />,
      downloadUrl: '/press/kit/leadership-photos.zip',
      fileSize: '28 MB',
      format: 'JPG'
    },
    {
      id: '4',
      title: 'Product Images',
      description: 'Screenshots and product photography',
      icon: <ImageIcon className="w-6 h-6" />,
      downloadUrl: '/press/kit/product-images.zip',
      fileSize: '18 MB',
      format: 'PNG/JPG'
    },
    {
      id: '5',
      title: 'Brand Guidelines',
      description: 'Comprehensive brand usage guidelines',
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: '/press/kit/brand-guidelines.pdf',
      fileSize: '2.4 MB',
      format: 'PDF'
    },
    {
      id: '6',
      title: 'Company One-Pager',
      description: 'Executive summary and key information',
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: '/press/kit/company-one-pager.pdf',
      fileSize: '890 KB',
      format: 'PDF'
    }
  ];

  // Company facts
  const companyFacts: CompanyFact[] = [
    {
      label: 'Founded',
      value: '2020',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      label: 'Headquarters',
      value: 'Brussels, Belgium',
      icon: <MapPin className="w-5 h-5" />
    },
    {
      label: 'Subsidiaries',
      value: '12',
      icon: <Building className="w-5 h-5" />
    },
    {
      label: 'Core Products',
      value: 'Aether Office Suite',
      icon: <Zap className="w-5 h-5" />
    },
    {
      label: 'Mission',
      value: 'European Digital Sovereignty',
      icon: <Target className="w-5 h-5" />
    },
    {
      label: 'Team Size',
      value: '500+ Employees',
      icon: <Users className="w-5 h-5" />
    },
    {
      label: 'Industry Focus',
      value: 'Enterprise Software',
      icon: <Globe className="w-5 h-5" />
    },
    {
      label: 'Annual Revenue',
      value: '€85M (2024)',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  // Awards and recognitions
  const awards = [
    {
      name: 'European Tech Scale-Up of the Year',
      organization: 'Tech EU Awards 2024',
      icon: <Award className="w-5 h-5" />
    },
    {
      name: 'Best Enterprise Solution',
      organization: 'SaaS Awards 2024',
      icon: <Star className="w-5 h-5" />
    },
    {
      name: 'Innovation in Digital Sovereignty',
      organization: 'Digital Europe Awards 2024',
      icon: <Award className="w-5 h-5" />
    }
  ];

  // Company milestones
  const milestones = [
    { year: '2020', event: 'Company founded in Brussels' },
    { year: '2021', event: 'Seed funding round: €5M' },
    { year: '2022', event: 'Aether Office beta launch' },
    { year: '2023', event: 'Series A: €25M, expanded to 8 countries' },
    { year: '2024', event: 'Series B: €50M, 500+ employees' }
  ];

  const categories = [
    { id: 'all', label: 'All Releases' },
    { id: 'announcements', label: 'Announcements' },
    { id: 'product-updates', label: 'Product Updates' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'insights', label: 'Insights' }
  ];

  const filteredPressReleases = selectedCategory === 'all' 
    ? pressReleases 
    : pressReleases.filter(release => release.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'announcements': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'product-updates': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'partnerships': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'insights': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6 text-center max-w-4xl mx-auto">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                    Press & Media Resources
                </h1>

                <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed">
                    Access the latest news, press releases, and media resources about Sky Genesis Enterprise’s mission to advance European digital sovereignty.
                </p>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="btn-primary">
                <Download className="w-5 h-5" />
                Download Press Kit
              </button>
              <button className="btn-secondary">
                <Mail className="w-5 h-5" />
                Contact Media Relations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Press Releases */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Latest Press Releases</h2>
              <p className="text-xl text-gray-400">Stay updated with our latest announcements and company news</p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-900 text-gray-400 hover:bg-gray-800 border border-gray-800'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Press Releases Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPressReleases.map((release) => (
                <div key={release.id} className="card group cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(release.category)}`}>
                        {categories.find(c => c.id === release.category)?.label}
                      </span>
                      <span className="text-sm text-gray-500">{formatDate(release.date)}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {release.title}
                    </h3>
                    
                    <p className="text-gray-400 line-clamp-3">
                      {release.summary}
                    </p>
                    
                    <Link 
                      href={release.readMoreUrl}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Media Coverage */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Media Coverage</h2>
              <p className="text-xl text-gray-400">What leading publications are saying about Sky Genesis Enterprise</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {mediaCoverage.map((coverage) => (
                <div key={coverage.id} className="card group">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-400">{coverage.outlet}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{coverage.outlet}</h4>
                        <span className="text-sm text-gray-500">{formatDate(coverage.date)}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {coverage.title}
                    </h3>
                    
                    <p className="text-gray-400 line-clamp-2">
                      {coverage.excerpt}
                    </p>
                    
                    <a 
                      href={coverage.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Read Article
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit Download Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Press Kit</h2>
              <p className="text-xl text-gray-400">Download our complete media kit with all essential resources</p>
            </div>

            {/* Main Press Kit Card */}
            <div className="card bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20 mb-12">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Download className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Download Complete Press Kit</h3>
                  <p className="text-gray-400 mb-6">All press materials, logos, images, and company information in one package</p>
                  <button className="btn-primary">
                    <Download className="w-5 h-5" />
                    Download Press Kit (45 MB)
                  </button>
                </div>
              </div>
            </div>

            {/* Individual Press Kit Items */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressKitItems.slice(1).map((item) => (
                <div key={item.id} className="card group">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {item.fileSize} • {item.format}
                        </span>
                        <button className="text-blue-400 hover:text-blue-300 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Factsheet */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Company Factsheet</h2>
              <p className="text-xl text-gray-400">Key information about Sky Genesis Enterprise</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyFacts.map((fact, index) => (
                <div key={index} className="card text-center">
                  <div className="text-blue-400 mb-3 flex justify-center">
                    {fact.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-1">{fact.label}</h4>
                  <p className="text-gray-400 text-sm">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Milestones */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Awards */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Awards & Recognitions</h3>
                <div className="space-y-6">
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-yellow-500 mt-1">
                        {award.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{award.name}</h4>
                        <p className="text-gray-400 text-sm">{award.organization}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestones */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Company Milestones</h3>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-blue-400 mt-1">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{milestone.year}</h4>
                        <p className="text-gray-400 text-sm">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20">
              <div className="text-center space-y-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-10 h-10" />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-4">Media Contact</h2>
                  <div className="space-y-3 text-gray-300">
                    <p className="text-lg">
                      <strong>Sarah Mitchell</strong> • Head of Communications
                    </p>
                    <p className="text-lg">
                      Email: <a href="mailto:media@skygenesisenterprise.com" className="text-blue-400 hover:text-blue-300">media@skygenesisenterprise.com</a>
                    </p>
                    <p className="text-lg">
                      Phone: +32 2 123 45 67
                    </p>
                    <p className="text-sm text-gray-400 mt-4">
                      Available for media inquiries, interviews, and press events
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">
                    <Mail className="w-5 h-5" />
                    Contact Media Relations
                  </button>
                  <button className="btn-secondary">
                    <Calendar className="w-5 h-5" />
                    Schedule Interview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}