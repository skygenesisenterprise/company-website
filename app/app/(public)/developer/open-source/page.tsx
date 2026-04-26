'use client';

import Link from 'next/link';
import { 
  GitBranch, 
  Users, 
  Shield, 
  Globe, 
  Code, 
  Star, 
  ExternalLink, 
  ArrowRight, 
  Package, 
  Terminal, 
  Lock, 
  Award, 
  MessageSquare, 
  Book, 
  TrendingUp,
  Building,
  Clock,
  FileText,
  Eye,

} from 'lucide-react';

interface Repository {
  name: string;
  description: string;
  language: string;
  stars: string;
  forks: string;
  license: string;
  icon: React.ReactNode;
  url: string;
  category: 'platform' | 'sdk' | 'tools' | 'infrastructure';
}

interface Principle {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CommunityChannel {
  name: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  members?: string;
}

interface SuccessStory {
  title: string;
  description: string;
  author: string;
  role: string;
  project: string;
  url: string;
}

export default function OpenSourcePage() {
  // Main repositories
  const repositories: Repository[] = [
    {
      name: 'Giteria',
      description: 'Open-source platform for distributed code collaboration and version control with enterprise-grade security.',
      language: 'TypeScript',
      stars: '12.5k',
      forks: '1.8k',
      license: 'MIT',
      icon: <GitBranch className="w-6 h-6" />,
      url: 'https://github.com/skygenesisenterprise/giteria',
      category: 'platform'
    },
    {
      name: 'SkyDB Client',
      description: 'Official client library for high-performance distributed database with built-in encryption.',
      language: 'Go',
      stars: '8.2k',
      forks: '945',
      license: 'Apache 2.0',
      icon: <Package className="w-6 h-6" />,
      url: 'https://github.com/skygenesisenterprise/skydb',
      category: 'sdk'
    },
    {
      name: 'Enterprise SDK',
      description: 'Comprehensive SDK for building secure enterprise applications with Sky Genesis APIs.',
      language: 'TypeScript',
      stars: '6.7k',
      forks: '523',
      license: 'MIT',
      icon: <Code className="w-6 h-6" />,
      url: 'https://github.com/skygenesisenterprise/enterprise-node',
      category: 'sdk'
    },
    {
      name: 'DevOps Tools',
      description: 'Collection of CLI tools and utilities for streamlined development and deployment workflows.',
      language: 'Rust',
      stars: '4.1k',
      forks: '287',
      license: 'MIT',
      icon: <Terminal className="w-6 h-6" />,
      url: 'https://github.com/skygenesisenterprise/devops-tools',
      category: 'tools'
    },
    {
      name: 'Security Framework',
      description: 'Zero-trust security framework for building compliant enterprise applications.',
      language: 'Rust',
      stars: '5.3k',
      forks: '412',
      license: 'Apache 2.0',
      icon: <Shield className="w-6 h-6" />,
      url: 'https://github.com/skygenesisenterprise/security-framework',
      category: 'infrastructure'
    },
    {
      name: 'Monitoring Stack',
      description: 'Open-source observability stack for distributed systems and microservices.',
      language: 'Go',
      stars: '3.8k',
      forks: '198',
      license: 'MIT',
      icon: <TrendingUp className="w-6 h-6" />,
      url: 'https://github.com/skygenesisenterprise/monitoring-stack',
      category: 'infrastructure'
    }
  ];

  // Key principles
  const principles: Principle[] = [
    {
      title: 'Transparency First',
      description: 'All our development processes, decisions, and code are openly visible and auditable by the community.',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Global Collaboration',
      description: 'We actively collaborate with developers worldwide to build better, more secure software together.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Enterprise Security',
      description: 'Security is embedded in every open-source project with enterprise-grade protections by default.',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'European Sovereignty',
      description: 'Our open-source projects align with European values, privacy standards, and digital independence.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Long-Term Sustainability',
      description: 'We commit to maintaining and supporting our open-source projects for the long term.',
      icon: <Clock className="w-6 h-6" />
    }
  ];

  // Community channels
  const communityChannels: CommunityChannel[] = [
    {
      name: 'GitHub Discussions',
      description: 'Technical discussions, feature requests, and community support.',
      icon: <MessageSquare className="w-6 h-6" />,
      url: 'https://github.com/skygenesisenterprise/discussions',
      members: '5.2k active'
    },
    {
      name: 'Discord Community',
      description: 'Real-time chat with developers and Sky Genesis team members.',
      icon: <MessageSquare className="w-6 h-6" />,
      url: 'https://discord.gg/skygenesisenterprise',
      members: '8.7k members'
    },
    {
      name: 'Developer Forums',
      description: 'In-depth technical discussions and best practices sharing.',
      icon: <FileText className="w-6 h-6" />,
      url: 'https://developer.skygenesisenterprise.com/blog',
      members: '3.1k members'
    },
    {
      name: 'Community Calls',
      description: 'Monthly virtual meetings for roadmap discussions and Q&A.',
      icon: <Users className="w-6 h-6" />,
      url: '/community/calls',
      members: 'Monthly'
    }
  ];

  // Success stories
  const successStories: SuccessStory[] = [
    {
      title: 'Building a Secure Financial Platform',
      description: 'How FinTech startup used our security framework to achieve compliance in record time.',
      author: 'Sarah Chen',
      role: 'CTO',
      project: 'SecurePay',
      url: '/stories/securepay'
    },
    {
      title: 'Scaling to 1 Million Users',
      description: 'Enterprise company leveraged SkyDB to handle massive scale with zero downtime.',
      author: 'Marcus Weber',
      role: 'Lead Engineer',
      project: 'DataFlow',
      url: '/stories/dataflow'
    },
    {
      title: 'Open-Source Collaboration Success',
      description: 'How our tools helped a distributed team across 12 countries collaborate effectively.',
      author: 'Elena Rodriguez',
      role: 'DevOps Lead',
      project: 'GlobalTech',
      url: '/stories/globaltech'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'platform': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'sdk': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'tools': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'infrastructure': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
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
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-7xl mx-auto text-center">
              {/* Enterprise badge */}
                <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-12 hover:border-white/20 transition-all duration-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                Sky Genesis Enterprise
                </div>
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Open-Source at the
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Core of Sky Genesis Enterprise
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4">
              <p>
                Sky Genesis Enterprise develops unified open-source platforms for secure collaboration, 
                governance, and large-scale digital operations.
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="https://github.com/skygenesisenterprise" 
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Explore Our GitHub Organization
              </Link>
              <Link 
                href="/docs/opensource/contribute" 
                className="border border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-sm sm:text-base whitespace-nowrap flex items-center"
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Contribute to Open-Source Projects
              </Link>
            </div>
          </div>
      </section>

      {/* Key Principles / Philosophy */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Open-Source Philosophy</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                The values that guide our commitment to transparent, collaborative development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="card group">
                  <div className="space-y-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{principle.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Repositories / Projects Overview */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Repositories</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Our major open-source projects powering enterprise infrastructure worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {repositories.map((repo, index) => (
                <div key={index} className="card group">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-blue-400 group-hover:scale-110 transition-transform">
                          {repo.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                            {repo.name}
                          </h3>
                          <p className="text-sm text-gray-500">{repo.language}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(repo.category)}`}>
                        {repo.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-400">{repo.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-gray-400">{repo.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitBranch className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-400">{repo.forks}</span>
                        </div>
                      </div>
                      <span className="text-gray-500">{repo.license}</span>
                    </div>
                    
                    <a 
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      View Repository
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community & Contribution */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Join Our Community</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Connect with developers worldwide and contribute to the future of open-source enterprise software.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {communityChannels.map((channel, index) => (
                <a key={index} href={channel.url} className="card group block">
                  <div className="space-y-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {channel.icon}
                    </div>
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                      {channel.name}
                    </h3>
                    <p className="text-sm text-gray-400">{channel.description}</p>
                    {channel.members && (
                      <span className="text-xs text-gray-500">{channel.members}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Book className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">Contribution Guidelines</h3>
                  <p className="text-gray-400 text-sm">
                    Clear, comprehensive guidelines for contributing to our projects with code of conduct and review processes.
                  </p>
                  <Link href="/docs/opensource/contributing" className="text-blue-400 hover:text-blue-300 font-medium">
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="card text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">Recognition Program</h3>
                  <p className="text-gray-400 text-sm">
                    We recognize and celebrate our top contributors with special badges, opportunities, and community recognition.
                  </p>
                  <Link href="/community/recognition" className="text-blue-400 hover:text-blue-300 font-medium">
                    View Program
                  </Link>
                </div>
              </div>

              <div className="card text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Building className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">Partnership Opportunities</h3>
                  <p className="text-gray-400 text-sm">
                    Collaborate with Sky Genesis Enterprise on joint projects and strategic initiatives.
                  </p>
                  <Link href="/partnerships/opensource" className="text-blue-400 hover:text-blue-300 font-medium">
                    Explore Partnerships
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlights / Success Stories */}
      <section className="py-20 lg:py-24 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                How developers and organizations are building amazing things with our open-source projects.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="card group">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-gray-400">{story.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div>
                        <p className="font-medium text-white">{story.author}</p>
                        <p className="text-sm text-gray-500">{story.role} at {story.project}</p>
                      </div>
                      <Link 
                        href={story.url}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/community/stories" className="btn-secondary">
                <Book className="w-5 h-5" />
                View All Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Shape the Future of
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Open-Source Enterprise
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Join thousands of developers building secure, transparent, and sovereign enterprise software together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://github.com/skygenesisenterprise" className="btn-primary">
                <GitBranch className="w-5 h-5" />
                Explore Our GitHub Organization
              </Link>
              <Link href="/docs/opensource/contribute" className="btn-secondary">
                <Code className="w-5 h-5" />
                Contribute to Open-Source Projects
              </Link>
              <Link href="/community" className="btn-secondary">
                <Users className="w-5 h-5" />
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}