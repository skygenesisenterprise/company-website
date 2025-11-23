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
  BookOpen
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

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}



export default function LeadershipPage() {
  const leaders: Leader[] = [
    {
      id: 'liam-dispa',
      name: 'Liam Dispa',
      position: 'President',
      bio: 'Founder and Chief Architect of Sky Genesis Enterprise, leading the strategic vision and technological innovation across all subsidiaries. With over 15 years in enterprise infrastructure, Liam drives the company\'s mission for European digital sovereignty.',
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
      position: 'Chief Executive Officer',
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
  ];

  const values: Value[] = [
    {
      title: 'Innovation & Vision',
      description: 'We continuously push the boundaries of what\'s possible in enterprise technology, always looking ahead to the next breakthrough.',
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
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="#team" 
                className="bg-white text-black px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-base lg:text-lg whitespace-nowrap"
              >
                Meet Our Leaders
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/careers" 
                className="border border-white/20 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-base lg:text-lg whitespace-nowrap"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section id="team" className="py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Executive Team</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  Meet the visionary leaders driving Sky Genesis Enterprise forward
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-12 max-w-4xl mx-auto">
              {leaders.map((leader) => (
                <div key={leader.id} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 flex-1 max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                  
                  <div className="relative">
                    {/* Leader Image */}
                    <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Users className="w-16 h-16 text-gray-600" />
                    </div>
                    
                    {/* Name and Position */}
                    <h3 className="text-2xl font-bold mb-2 text-white text-center">{leader.name}</h3>
                    <p className="text-blue-400 font-medium mb-4 text-center">{leader.position}</p>
                    
                    {/* Bio */}
                    <p className="text-gray-300 mb-6 leading-relaxed text-center">{leader.bio}</p>
                    
                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {leader.expertise.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    {leader.achievements && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Key Achievements</h4>
                        <div className="space-y-2">
                          {leader.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-400">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* LinkedIn Link */}
                    {leader.linkedin && (
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Leadership Philosophy</h2>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center">
                <p>
                  The core values and principles that guide our decision-making and company culture
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-all duration-300">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Connect With Our Leadership
          </h2>
          <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center mb-12">
            <p className="text-white/90">
              Whether you&apos;re interested in partnership opportunities, media inquiries, or joining our team, 
              we&apos;d love to hear from you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Leadership
            </Link>
            <Link 
              href="/careers" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <Users className="w-5 h-5 mr-2" />
              Explore Careers
            </Link>
            <Link 
              href="/company/press" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Press & Media
            </Link>
          </div>
          
          <p className="text-white/70 mt-6 text-sm">
            Executive response within 48 hours • Confidential inquiries welcome
          </p>
        </div>
      </section>
    </div>
  );
}