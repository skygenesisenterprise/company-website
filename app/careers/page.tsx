'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Code, Users, Globe, Heart, Lightbulb, Target, Award, MapPin, Briefcase, CheckCircle, Star, Calendar, BookOpen, Coffee, Zap } from 'lucide-react';

// Job data structure
interface Job {
  id: string;
  title: string;
  category: string;
  type: string;
  location: string;
  summary: string;
  department: string;
}

const openPositions: Job[] = [
  {
    id: '1',
    title: 'Senior Security Engineer',
    category: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    summary: 'Build and maintain enterprise-grade security infrastructure for our sovereign cloud platform.',
    department: 'Security'
  },
  {
    id: '2',
    title: 'Enterprise Solutions Architect',
    category: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    summary: 'Design and implement large-scale enterprise solutions using our Aether Office platform.',
    department: 'Solutions'
  },
  {
    id: '3',
    title: 'Product Manager, Aether Office',
    category: 'Product',
    type: 'Full-time',
    location: 'Remote',
    summary: 'Lead product strategy and development for our flagship enterprise workspace platform.',
    department: 'Product'
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    category: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    summary: 'Manage and optimize our Kubernetes-based infrastructure and CI/CD pipelines.',
    department: 'Infrastructure'
  },
  {
    id: '5',
    title: 'Frontend Developer',
    category: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    summary: 'Build beautiful, performant user interfaces for our enterprise applications.',
    department: 'Engineering'
  },
  {
    id: '6',
    title: 'UX Designer',
    category: 'Design',
    type: 'Full-time',
    location: 'Remote',
    summary: 'Create intuitive, accessible designs for complex enterprise workflows.',
    department: 'Design'
  }
];

const companyValues = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Sovereignty First',
    description: 'We believe in digital independence and European-hosted infrastructure that puts control back in the hands of organizations.'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Open-Source by Design',
    description: 'Transparency and collaboration drive innovation. We build in the open and contribute to the community.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Security at the Core',
    description: 'Zero-trust architecture isn&apos;t an afterthought—it&apos;s embedded in every line of code we write.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Excellence & Craftsmanship',
    description: 'We take pride in our work, obsessing over details and delivering products that exceed expectations.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Developer-Driven Culture',
    description: 'Engineers lead the way, making technical decisions and shaping the future of our products.'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation with Purpose',
    description: 'We solve real problems for real organizations, focusing on impact over hype.'
  }
];

const benefits = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Remote-First Culture',
    description: 'Work from anywhere in Europe with flexible hours and async-first communication.'
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Learning & Development',
    description: 'Annual budget for courses, certifications, conferences, and technical books.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'High-End Equipment',
    description: 'Latest MacBook Pro, 4K monitors, ergonomic furniture, and software licenses.'
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Home Office Stipend',
    description: 'Monthly allowance for co-working space, internet, and home office setup.'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Generous Time Off',
    description: '30 days paid vacation, public holidays, and additional wellness days.'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Open Source Time',
    description: 'Dedicated time to contribute to open-source projects and personal tech projects.'
  }
];

const hiringProcess = [
  {
    step: '01',
    title: 'Application Review',
    description: 'Our team carefully reviews your application and relevant experience.'
  },
  {
    step: '02',
    title: 'First Interview',
    description: 'Meet the team and discuss your background, skills, and cultural fit.'
  },
  {
    step: '03',
    title: 'Technical Interview',
    description: 'Deep dive into your technical expertise with our engineering team.'
  },
  {
    step: '04',
    title: 'Take-Home Challenge',
    description: 'Solve a real-world problem that reflects the work you\'ll do at Sky Genesis.'
  },
  {
    step: '05',
    title: 'Final Interview',
    description: 'Meet leadership and discuss your vision for the role and future growth.'
  },
  {
    step: '06',
    title: 'Offer',
    description: 'Receive a competitive offer with comprehensive benefits and growth opportunities.'
  }
];

export default function CareersPage() {
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
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            {/* Enterprise badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-12 hover:border-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Join Our Mission
            </div>

            {/* Main title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight mx-auto">
              <div className="max-w-5xl mx-auto">
                Build the Future of
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Sovereign Technology
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-4 md:space-y-6 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-center mb-12">
              <p>
                Join a team of engineers, designers, and visionaries building the next generation 
                of enterprise infrastructure. Work on projects that matter, with people who inspire you.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="#open-positions" 
                className="bg-white text-black px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-base lg:text-lg whitespace-nowrap"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#life-at-sky-genesis" 
                className="border border-white/20 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-base lg:text-lg whitespace-nowrap"
              >
                Meet Our Team
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-5xl mx-auto px-4">
              <div className="text-center p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-xs lg:text-sm text-gray-400">Team Members</div>
              </div>
              <div className="text-center p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-xs lg:text-sm text-gray-400">Countries</div>
              </div>
              <div className="text-center p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-xs lg:text-sm text-gray-400">Remote</div>
              </div>
              <div className="text-center p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">4.9★</div>
                <div className="text-xs lg:text-sm text-gray-400">Team Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Our Values
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                The principles that guide everything we do, from code architecture to company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                    <div className="text-blue-400">
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

      {/* WHY JOIN US */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Why Join Sky Genesis Enterprise?
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                We&apos;re not just building products—we&apos;re shaping the future of enterprise technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Impact at Scale</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Work on infrastructure that powers thousands of organizations across Europe. 
                      Your code will directly impact millions of users.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Engineering-First Culture</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Engineers lead product decisions. We value technical excellence, 
                      thoughtful architecture, and clean code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Modern Tech Stack</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Work with Rust, Go, TypeScript, Next.js, and cutting-edge infrastructure 
                      technologies. No legacy systems holding you back.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Small Teams, Big Impact</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Join lean, focused teams where your contribution matters. 
                      No bureaucracy, just meaningful work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Open-Source Leadership</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Contribute to major open-source projects and build your reputation 
                      in the developer community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">European Values</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Build technology that respects privacy, security, and digital sovereignty. 
                      Make a difference that aligns with your values.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS & PERKS */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Benefits & Perks
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                We invest in our people with comprehensive benefits designed for modern professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400">
                <CheckCircle className="w-4 h-4 mr-2" />
                Competitive salary + equity options for key roles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Open Positions
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Join our team and help build the future of enterprise technology.
              </p>
            </div>

            {openPositions.length > 0 ? (
              <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                  {openPositions.map((job) => (
                    <div key={job.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                              {job.category}
                            </span>
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                              {job.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-gray-400 mb-4 leading-relaxed">
                            {job.summary}
                          </p>
                          <div className="flex items-center gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4" />
                              {job.department}
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Link 
                            href={`/careers/${job.id}`}
                            className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                          >
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <p className="text-gray-400 mb-6">
                    Don&apos;t see the perfect role? We&apos;re always looking for exceptional talent.
                  </p>
                  <Link 
                    href="#contact"
                    className="inline-flex items-center border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300"
                  >
                    Send Spontaneous Application
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
                  <h3 className="text-2xl font-bold mb-4">No Open Positions Currently</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    We&apos;re not actively hiring right now, but we&apos;re always interested in connecting with talented individuals 
                    who share our vision for sovereign enterprise technology.
                  </p>
                  <Link 
                    href="#contact"
                    className="inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Join Our Talent Pool
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Hiring Process
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Our transparent process designed to find the best fit for both you and our team.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hiringProcess.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                      <div className="text-3xl font-bold text-blue-400 mb-4">{step.step}</div>
                      <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                    {index < hiringProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFE AT SKY GENESIS Enterprise*/}
      <section id="life-at-sky-genesis" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Life at Sky Genesis Enterprise
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Hear from our team members about what it&apos;s really like to work here.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">Culture Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Coffee className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Weekly Tech Talks</h4>
                    <p className="text-gray-400 text-sm">Share knowledge and learn from team members about cutting-edge technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Quarterly Hackathons</h4>
                    <p className="text-gray-400 text-sm">Innovate and build new features in our intensive 48-hour coding events.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Code className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Open Source Fridays</h4>
                    <p className="text-gray-400 text-sm">Dedicated time to contribute to open-source projects and personal growth.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Team Retreats</h4>
                    <p className="text-gray-400 text-sm">Bi-annual in-person gatherings to connect, strategize, and celebrate together.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVERSITY & INCLUSION */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Diversity & Inclusion
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At Sky Genesis Enterprise, we are committed to building a diverse, inclusive, and equitable workplace 
                where everyone can thrive. We believe that diverse perspectives drive innovation and better solutions 
                for our global customer base.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We provide equal opportunities regardless of race, ethnicity, gender, age, religion, sexual orientation, 
                disability, or any other characteristic. Our meritocratic culture ensures that ideas and contributions 
                are valued based on their impact, not who they come from.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We maintain a safe, respectful environment where every team member can bring their authentic self 
                to work and contribute to our shared mission of building sovereign enterprise technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Take the next step in your career and help us build the future of enterprise technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="#open-positions" 
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="mailto:careers@skygenesis.eu" 
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300"
              >
                Send Spontaneous Application
              </Link>
            </div>

            <div className="mt-16">
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400">
                <Star className="w-4 h-4 mr-2" />
                Join our talent pool for future opportunities
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}