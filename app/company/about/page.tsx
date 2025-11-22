'use client';
import Link from 'next/link';
import { 
  ArrowRight, 
  Users, 
  Target, 
  Shield, 
  Code, 
  Globe, 
  TrendingUp, 
  Building, 
  Zap, 
  Lock, 
  Database, 
  GitBranch, 
  Monitor, 
  MapPin, 
  ExternalLink,
  ChevronRight,
  BarChart3,
  Lightbulb,
  Heart,
  Flag
} from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'milestone' | 'founding' | 'expansion' | 'achievement';
}

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Product {
  name: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  status: 'active' | 'beta' | 'coming-soon';
}

interface Commitment {
  title: string;
  description: string;
  icon: React.ReactNode;
  metric?: string;
}

interface Leader {
  name: string;
  title: string;
  description: string;
  image: string;
}

interface Metric {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface PressMention {
  outlet: string;
  title: string;
  url: string;
  logo: string;
}

export default function AboutPage() {

  // Timeline data
  const timeline: TimelineEvent[] = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Sky Genesis Enterprise established in Brussels with a mission to advance European digital sovereignty.',
      type: 'founding'
    },
    {
      year: '2021',
      title: 'Seed Funding & Team Expansion',
      description: 'Secured €5M seed funding and grew the team to 25 engineers focused on open-source infrastructure.',
      type: 'milestone'
    },
    {
      year: '2022',
      title: 'Giteria Launch',
      description: 'Released our open-source Git collaboration platform, gaining 10,000+ developers in the first month.',
      type: 'achievement'
    },
    {
      year: '2023',
      title: 'Series A & European Expansion',
      description: 'Raised €25M Series A and expanded operations to 8 European countries with 150+ employees.',
      type: 'expansion'
    },
    {
      year: '2024',
      title: 'SkyDB & Enterprise Console',
      description: 'Launched distributed database and enterprise management platform, reaching 500+ enterprise customers.',
      type: 'achievement'
    }
  ];

  // Core values
  const values: Value[] = [
    {
      title: 'Open-Source Excellence',
      description: 'We believe in transparent, collaborative development that empowers communities and drives innovation.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Zero Trust Security',
      description: 'Security is embedded in every layer of our architecture, ensuring enterprise-grade protection by default.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Engineering-First Culture',
      description: 'Technical excellence and architectural purity guide every decision we make and product we build.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'European Digital Autonomy',
      description: 'We champion technological independence and sovereignty for European businesses and institutions.',
      icon: <Flag className="w-6 h-6" />
    },
    {
      title: 'Radical Transparency',
      description: 'Our processes, decisions, and code are open because trust is built through visibility and accountability.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: 'Reliability & Performance',
      description: 'We engineer systems that scale, perform under pressure, and maintain 99.99% availability guarantees.',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  // Products
  const products: Product[] = [
    {
      name: 'Giteria',
      description: 'Open-source Git collaboration platform for distributed development teams.',
      icon: <GitBranch className="w-6 h-6" />,
      url: '/products/giteria',
      status: 'active'
    },
    {
      name: 'SkyDB',
      description: 'High-performance distributed database with built-in security and scalability.',
      icon: <Database className="w-6 h-6" />,
      url: '/products/skydb',
      status: 'active'
    },
    {
      name: 'Enterprise Console',
      description: 'Centralized management and security platform for enterprise infrastructure.',
      icon: <Monitor className="w-6 h-6" />,
      url: '/products/enterprise-console',
      status: 'active'
    },
    {
      name: 'Aether Office',
      description: 'Next-generation enterprise collaboration suite with AI-powered productivity tools.',
      icon: <Users className="w-6 h-6" />,
      url: '/aether-office',
      status: 'active'
    }
  ];

  // Commitments
  const commitments: Commitment[] = [
    {
      title: 'Open-Source Contribution',
      description: 'Over 1M lines of code contributed to European open-source projects.',
      icon: <Code className="w-6 h-6" />,
      metric: '50+ Projects'
    },
    {
      title: 'Security & Zero Trust',
      description: 'Military-grade encryption and zero-trust architecture across all products.',
      icon: <Lock className="w-6 h-6" />,
      metric: 'ISO 27001'
    },
    {
      title: 'GDPR Compliance',
      description: 'Full compliance with European data protection regulations and privacy standards.',
      icon: <Shield className="w-6 h-6" />,
      metric: '100% Compliant'
    },
    {
      title: 'Sustainable Engineering',
      description: 'Carbon-neutral infrastructure and green computing practices.',
      icon: <Heart className="w-6 h-6" />,
      metric: 'Carbon Neutral'
    }
  ];

  // Leadership team preview
  const leadership: Leader[] = [
    {
      name: 'Liam Dispa',
      title: 'President and CEO',
      description: 'Group Founder and Chief Architect, leading the strategic direction and technical innovation across all subsidiaries.',
      image: '/leadership/alexandra-chen.jpg'
    },
    {
      name: 'Mathis Luymoeyen',
      title: 'Chief Executif Officer',
      description: 'Distributed systems architect with 15+ years building enterprise infrastructure.',
      image: '/leadership/marcus-weber.jpg'
    },
  ];

  // Metrics
  const metrics: Metric[] = [
    {
      value: '500+',
      label: 'Enterprise Customers',
      icon: <Building className="w-5 h-5" />
    },
    {
      value: '50,000+',
      label: 'Open-Source Contributors',
      icon: <Users className="w-5 h-5" />
    },
    {
      value: '99.99%',
      label: 'Uptime SLA',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      value: '12',
      label: 'European Countries',
      icon: <MapPin className="w-5 h-5" />
    },
    {
      value: '500+',
      label: 'Employees',
      icon: <Users className="w-5 h-5" />
    },
    {
      value: '€85M',
      label: 'Annual Revenue',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  // Press mentions
  const pressMentions: PressMention[] = [
    {
      outlet: 'TechCrunch',
      title: 'Sky Genesis Raises €50M to Challenge US Tech Dominance in Europe',
      url: 'https://techcrunch.com/sky-genesis-series-b',
      logo: '/press/techcrunch-logo.png'
    },
    {
      outlet: 'Forbes',
      title: 'The European Company Building an Alternative to Silicon Valley',
      url: 'https://forbes.com/european-alternative',
      logo: '/press/forbes-logo.png'
    },
    {
      outlet: 'Reuters',
      title: 'European Enterprises Embrace Homegrown Digital Infrastructure',
      url: 'https://reuters.com/european-infrastructure',
      logo: '/press/reuters-logo.png'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'beta': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'coming-soon': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getTimelineColor = (type: string) => {
    switch (type) {
      case 'founding': return 'bg-blue-500';
      case 'milestone': return 'bg-green-500';
      case 'expansion': return 'bg-purple-500';
      case 'achievement': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                Redefining European
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Sovereignty
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-center">
                Sky Genesis Enterprise builds open-source infrastructure and enterprise solutions that empower European organizations with technological independence, security, and engineering excellence.
              </p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto text-center">
                We are engineering the future of European digital autonomy through transparent, secure, and scalable technology that puts control back in the hands of European businesses and institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story / Origins Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Story</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center">
                From a vision of European technological independence to a continent-spanning enterprise infrastructure provider.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800 hidden lg:block"></div>
              
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                      <div className="card">
                        <div className="flex items-center space-x-3 mb-3 lg:justify-end">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTimelineColor(event.type)} bg-opacity-20 text-white`}>
                            {event.type}
                          </span>
                          <span className="text-sm text-gray-500">{event.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-400">{event.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-800 border-4 border-black hidden lg:block">
                      <div className={`w-2 h-2 rounded-full ${getTimelineColor(event.type)} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                    </div>
                    
                    <div className="w-full lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Mission & Vision</h2>
              <p className="text-xl text-gray-400">Our purpose and our aspirations</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="card bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-500/20">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Mission</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To build and deliver open-source enterprise infrastructure that empowers European organizations with complete technological sovereignty. We engineer secure, scalable, and transparent solutions that enable businesses to thrive without compromising on data ownership, security, or European values.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="card bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/20">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                      A future where European digital infrastructure is independent, innovative, and sovereign. We envision a continent where every organization has access to world-class technology that respects European values, protects data sovereignty, and enables unprecedented levels of collaboration and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Core Values</h2>
              <p className="text-xl text-gray-400">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card group">
                  <div className="space-y-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Group Structure / Subsidiaries Overview */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Ecosystem</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A multi-subsidiary structure that combines specialized expertise with unified vision and shared values.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { name: 'Giteria', description: 'Open-source Git platform', icon: <GitBranch className="w-6 h-6" /> },
                { name: 'SkyDB', description: 'Distributed database', icon: <Database className="w-6 h-6" /> },
                { name: 'Aether Office', description: 'Enterprise collaboration', icon: <Users className="w-6 h-6" /> },
                { name: 'Security Labs', description: 'Cybersecurity research', icon: <Shield className="w-6 h-6" /> }
              ].map((subsidiary, index) => (
                <div key={index} className="card text-center group">
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {subsidiary.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{subsidiary.name}</h3>
                  <p className="text-sm text-gray-400">{subsidiary.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/company/subsidiaries" className="btn-primary">
                Explore All Subsidiaries
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">What We Build</h2>
              <p className="text-xl text-gray-400">Enterprise infrastructure engineered for European sovereignty</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div key={index} className="card group">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)}`}>
                          {product.status.replace('-', ' ')}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4">{product.description}</p>
                      <Link 
                        href={product.url}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Commitments Section */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Commitments</h2>
              <p className="text-xl text-gray-400">Promises we keep to our customers and community</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commitments.map((commitment, index) => (
                <div key={index} className="card text-center">
                  <div className="text-blue-400 mb-4">
                    {commitment.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{commitment.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{commitment.description}</p>
                  {commitment.metric && (
                    <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
                      {commitment.metric}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Overview */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Leadership</h2>
              <p className="text-xl text-gray-400">Visionary leaders driving European technological independence</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {leadership.map((leader, index) => (
                <div key={index} className="text-center group">
                  <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-600" />
                  </div>
                  <h3 className="font-semibold mb-1">{leader.name}</h3>
                  <p className="text-sm text-blue-400 mb-2">{leader.title}</p>
                  <p className="text-sm text-gray-400">{leader.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/company/leadership" className="btn-secondary">
                Meet the Full Leadership Team
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facts, Achievements & Metrics */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">By the Numbers</h2>
              <p className="text-xl text-gray-400">Our impact measured in metrics that matter</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="card text-center">
                  <div className="text-blue-400 mb-3">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <p className="text-gray-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Preview Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">In the Press</h2>
              <p className="text-xl text-gray-400">What leading publications are saying about us</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {pressMentions.map((mention, index) => (
                <div key={index} className="card group">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-400">{mention.outlet}</span>
                    </div>
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                      {mention.title}
                    </h3>
                    <a 
                      href={mention.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      Read Article
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/company/press" className="btn-secondary">
                View All Press Coverage
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Shape the Future of
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                European Technology
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join our mission to build sovereign, secure, and innovative digital infrastructure for Europe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/careers" className="btn-primary">
                Join Our Mission
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/products" className="btn-secondary">
                Explore Our Ecosystem
                <Zap className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}