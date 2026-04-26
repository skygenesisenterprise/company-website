'use client';

import Link from 'next/link';
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  Award, 
  Globe, 
  Database, 
  FileText, 
  Users, 
  AlertCircle, 
  TrendingUp, 
  ArrowRight, 
  ChevronRight, 
  Download, 
  Mail, 
  MapPin, 
  Key, 
  Eye, 
  Activity,
  Server,
  Cloud,
  Fingerprint,
  Building,
  Clock,
  RefreshCw,
  Zap,
  HardDrive,
  Wifi,
  UserCheck,
  BookOpen,
  BarChart
} from 'lucide-react';

interface Certification {
  name: string;
  description: string;
  status: 'Achieved' | 'In Progress' | 'Planned';
  icon: React.ReactNode;
  color: string;
  features: string[];
}

interface ComplianceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function SecurityCompliancePage() {
  const certifications: Certification[] = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management System certification ensuring comprehensive security controls and risk management.',
      status: 'Achieved',
      icon: <Shield className="w-8 h-8" />,
      color: 'green',
      features: ['ISMS Implementation', 'Risk Assessment Framework', 'Continuous Monitoring']
    },
    {
      name: 'ISO 27017',
      description: 'Cloud security information management guidelines for cloud services.',
      status: 'Achieved',
      icon: <Cloud className="w-8 h-8" />,
      color: 'blue',
      features: ['Cloud Security Controls', 'Shared Responsibility Model', 'Cloud Risk Management']
    },
    {
      name: 'ISO 27018',
      description: 'Code of practice for protection of personally identifiable information (PII) in public clouds.',
      status: 'Achieved',
      icon: <Eye className="w-8 h-8" />,
      color: 'purple',
      features: ['PII Protection', 'Privacy Controls', 'Data Subject Rights']
    },
    {
      name: 'SOC 2 Type I & II',
      description: 'Service Organization Control reports validating security, availability, and processing integrity.',
      status: 'Achieved',
      icon: <Award className="w-8 h-8" />,
      color: 'orange',
      features: ['Security Controls', 'Availability Commitments', 'Processing Integrity']
    },
    {
      name: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance with comprehensive data protection for EU citizens.',
      status: 'Achieved',
      icon: <Globe className="w-8 h-8" />,
      color: 'indigo',
      features: ['Data Subject Rights', 'Privacy by Design', 'DPIAs Implementation']
    },
    {
      name: 'PCI-DSS',
      description: 'Payment Card Industry Data Security Standard for secure payment processing (Vaelix Bank).',
      status: 'In Progress',
      icon: <Lock className="w-8 h-8" />,
      color: 'red',
      features: ['Payment Security', 'Cardholder Data Protection', 'Secure Transactions']
    },
    {
      name: 'CSA STAR',
      description: 'Cloud Security Alliance Security, Trust, Assurance and Risk certification program.',
      status: 'Achieved',
      icon: <Award className="w-8 h-8" />,
      color: 'cyan',
      features: ['Cloud Security Assessment', 'Risk Management', 'Transparency Reporting']
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance for healthcare data protection.',
      status: 'Planned',
      icon: <Database className="w-8 h-8" />,
      color: 'pink',
      features: ['Healthcare Data Protection', 'Privacy Controls', 'Security Safeguards']
    }
  ];

  const zeroTrustFeatures: ComplianceFeature[] = [
    {
      title: 'Identity-First Security',
      description: 'Zero-trust architecture with identity as the primary security perimeter, ensuring least-privilege access.',
      icon: <Fingerprint className="w-6 h-6" />,
      color: 'blue'
    },
    {
      title: 'Network Segmentation',
      description: 'Micro-segmentation of network resources to prevent lateral movement and contain potential breaches.',
      icon: <Wifi className="w-6 h-6" />,
      color: 'green'
    },
    {
      title: 'Continuous Verification',
      description: 'Real-time authentication and authorization checks for all access requests and resource interactions.',
      icon: <RefreshCw className="w-6 h-6" />,
      color: 'purple'
    },
    {
      title: 'Session Risk Evaluation',
      description: 'Dynamic risk assessment of user sessions with adaptive security controls based on behavior patterns.',
      icon: <Activity className="w-6 h-6" />,
      color: 'orange'
    },
    {
      title: 'RBAC/ABAC Permissions',
      description: 'Role-based and attribute-based access control for granular permission management.',
      icon: <UserCheck className="w-6 h-6" />,
      color: 'cyan'
    }
  ];

  const encryptionFeatures: ComplianceFeature[] = [
    {
      title: 'Encryption in Transit',
      description: 'TLS 1.3 protocol for all data transmissions with perfect forward secrecy.',
      icon: <Wifi className="w-6 h-6" />,
      color: 'blue'
    },
    {
      title: 'Encryption at Rest',
      description: 'AES-256 encryption for all stored data with hardware security module integration.',
      icon: <HardDrive className="w-6 h-6" />,
      color: 'green'
    },
    {
      title: 'File-Level Encryption',
      description: 'Granular encryption controls at the file and object level for sensitive data.',
      icon: <FileText className="w-6 h-6" />,
      color: 'purple'
    },
    {
      title: 'Automated Key Rotation',
      description: 'Regular automated rotation of encryption keys with secure key lifecycle management.',
      icon: <RefreshCw className="w-6 h-6" />,
      color: 'orange'
    },
    {
      title: 'Sovereign KMS',
      description: 'European-based key management service with sovereign control over cryptographic keys.',
      icon: <Key className="w-6 h-6" />,
      color: 'cyan'
    },
    {
      title: 'BYOK/HYOK Support',
      description: 'Bring Your Own Key and Hold Your Own Key options for maximum control.',
      icon: <Lock className="w-6 h-6" />,
      color: 'red'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Achieved': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'In Progress': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'Planned': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getCertificationColor = (color: string) => {
    switch (color) {
      case 'green': return 'bg-green-500/20 text-green-400 hover:bg-green-500/30';
      case 'blue': return 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30';
      case 'purple': return 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30';
      case 'orange': return 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30';
      case 'indigo': return 'bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30';
      case 'red': return 'bg-red-500/20 text-red-400 hover:bg-red-500/30';
      case 'cyan': return 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30';
      case 'pink': return 'bg-pink-500/20 text-pink-400 hover:bg-pink-500/30';
      default: return 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30';
    }
  };

  const getFeatureColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500/20 text-blue-400';
      case 'green': return 'bg-green-500/20 text-green-400';
      case 'purple': return 'bg-purple-500/20 text-purple-400';
      case 'orange': return 'bg-orange-500/20 text-orange-400';
      case 'cyan': return 'bg-cyan-500/20 text-cyan-400';
      case 'red': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
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
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            {/* Enterprise badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-12 hover:border-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Security & Compliance
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Security &
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Compliance Framework
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-3 md:space-y-4 text-base md:text-xl max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Sky Genesis Enterprise maintains rigorous security standards and compliance certifications, 
                ensuring sovereign, secure, and compliant digital infrastructure for European enterprises.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">8+</div>
                <div className="text-gray-400 text-sm">Active Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400 text-sm">Audit Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">EU</div>
                <div className="text-gray-400 text-sm">Sovereign Cloud</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & STANDARDS */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Certifications & Standards
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Internationally recognized certifications and standards that validate our commitment to 
                security, privacy, and operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className={`w-16 h-16 ${getCertificationColor(cert.color)} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}>
                    {cert.icon}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{cert.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(cert.status)}`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {cert.description}
                  </p>
                  <div className="space-y-2">
                    {cert.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ZERO-TRUST ARCHITECTURE */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Zero-Trust Architecture
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Identity-first security model with continuous verification and least-privilege access 
                controls for comprehensive protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {zeroTrustFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className={`w-16 h-16 ${getFeatureColor(feature.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Architecture Diagram */}
            <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Zero-Trust Security Flow</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-400" />
                  </div>
                  <p className="text-sm font-semibold">User Identity</p>
                </div>
                <ChevronRight className="w-8 h-8 text-gray-400 mx-auto" />
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Fingerprint className="w-10 h-10 text-green-400" />
                  </div>
                  <p className="text-sm font-semibold">Authentication</p>
                </div>
                <ChevronRight className="w-8 h-8 text-gray-400 mx-auto" />
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Server className="w-10 h-10 text-purple-400" />
                  </div>
                  <p className="text-sm font-semibold">Resource Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA ENCRYPTION & PRIVACY */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Data Encryption & Privacy
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Comprehensive encryption strategies and privacy-by-design principles ensuring 
                data protection across all states and locations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {encryptionFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className={`w-16 h-16 ${getFeatureColor(feature.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Privacy Philosophy */}
            <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Privacy-by-Design Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Data Minimization</h4>
                  <p className="text-gray-400 text-sm">
                    Collect only necessary data and retain it for the minimum required duration.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Default Privacy</h4>
                  <p className="text-gray-400 text-sm">
                    Privacy settings are maximized by default with user-controlled data sharing.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Transparency</h4>
                  <p className="text-gray-400 text-sm">
                    Clear documentation of data processing activities and privacy practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA RESIDENCY & SOVEREIGN CLOUD */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Data Residency & Sovereign Cloud
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                European-based infrastructure with sovereign cloud options ensuring data 
                protection and regulatory compliance for EU enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-8">European Data Centers</h3>
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                      <h4 className="text-xl font-semibold">Belgium - Liège</h4>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Primary European data center with advanced security infrastructure and 24/7 monitoring.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Tier:</span>
                        <span className="text-white ml-2">III+</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Certification:</span>
                        <span className="text-green-400 ml-2">ISO 27001</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-green-400 mr-3" />
                      <h4 className="text-xl font-semibold">Germany - Frankfurt</h4>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Secondary European location with redundant infrastructure and disaster recovery capabilities.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Tier:</span>
                        <span className="text-white ml-2">III</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Status:</span>
                        <span className="text-blue-400 ml-2">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-purple-400 mr-3" />
                      <h4 className="text-xl font-semibold">France - Paris</h4>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Edge computing location for low-latency services and content delivery across Western Europe.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Type:</span>
                        <span className="text-white ml-2">Edge</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Status:</span>
                        <span className="text-yellow-400 ml-2">Planned</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8">Zenth Cloud - Sovereign Infrastructure</h3>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Cloud className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-center">European Sovereign Cloud</h4>
                  <p className="text-gray-400 mb-6 text-center">
                    Zenth Cloud provides sovereign cloud infrastructure with European data residency 
                    and independent control over all systems and data.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-green-400 font-semibold">EU Data Sovereignty</span>
                      </div>
                      <span className="text-gray-400 text-sm">Guaranteed</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-blue-400 mr-3" />
                        <span className="text-blue-400 font-semibold">Government Ready</span>
                      </div>
                      <span className="text-gray-400 text-sm">Certified</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-purple-400 mr-3" />
                        <span className="text-purple-400 font-semibold">Independent Control</span>
                      </div>
                      <span className="text-gray-400 text-sm">100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDITING & MONITORING */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Auditing, Logging & Monitoring
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Comprehensive security monitoring and audit capabilities ensuring real-time 
                threat detection and compliance reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-8">Security Operations</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Activity className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Real-time Monitoring</h4>
                      <p className="text-gray-400">
                        24/7 security operations center with continuous monitoring of all systems 
                        and automated threat detection.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Security Event Logging</h4>
                      <p className="text-gray-400">
                        Comprehensive logging of all security events with tamper-evident storage 
                        and chain-of-custody preservation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BarChart className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">SIEM Integration</h4>
                      <p className="text-gray-400">
                        Security Information and Event Management integration with automated 
                        correlation and alerting.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Threat Detection</h4>
                      <p className="text-gray-400">
                        Advanced threat detection with machine learning algorithms and behavioral 
                        analysis for anomaly detection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8">Audit Capabilities</h3>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Audit Log Retention</span>
                        <span className="text-green-400 font-semibold">7 Years</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Real-time Alerting</span>
                        <span className="text-blue-400 font-semibold">&lt;1min</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Compliance Reporting</span>
                        <span className="text-purple-400 font-semibold">Automated</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Forensic Capabilities</span>
                        <span className="text-orange-400 font-semibold">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-orange-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="text-blue-400 font-semibold">Regular Audit Cycles</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Quarterly internal audits, annual external assessments, and continuous 
                      compliance monitoring with automated reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITY & ACCESS MANAGEMENT */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Identity & Access Management
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Aether Auth provides comprehensive identity and access management with 
                enterprise-grade security and seamless user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                  <Key className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">SSO Integration</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Single Sign-On support with SAML, OAuth2, and OpenID Connect protocols 
                  for seamless authentication across enterprise systems.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">SAML 2.0</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">OAuth 2.0</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">OpenID Connect</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-all duration-300">
                  <Fingerprint className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">MFA & Passkeys</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Multi-factor authentication with support for hardware tokens, biometrics, 
                  and passwordless passkey authentication.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Hardware Tokens</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Biometric Auth</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Passkey Support</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-all duration-300">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Role Management</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Organizational role management with granular permissions and policy-driven 
                  access control for enterprise security.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">RBAC Support</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Policy Engine</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Audit Logging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS CONTINUITY & INCIDENT RESPONSE */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Business Continuity & Incident Response
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Comprehensive disaster recovery and incident response capabilities ensuring 
                operational resilience and rapid threat mitigation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-8">Business Continuity</h3>
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Database className="w-6 h-6 text-blue-400 mr-3" />
                      <h4 className="text-xl font-semibold">Automated Backups</h4>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Continuous automated backups with point-in-time recovery capabilities and 
                      geographic distribution for redundancy.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Frequency:</span>
                        <span className="text-white ml-2">Continuous</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Retention:</span>
                        <span className="text-white ml-2">90 Days</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Server className="w-6 h-6 text-green-400 mr-3" />
                      <h4 className="text-xl font-semibold">Regional Redundancy</h4>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Multi-region deployment with automatic failover and load balancing 
                      for high availability and disaster recovery.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">RTO:</span>
                        <span className="text-green-400 ml-2">&lt;4 Hours</span>
                      </div>
                      <div>
                        <span className="text-gray-500">RPO:</span>
                        <span className="text-green-400 ml-2">&lt;1 Hour</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Zap className="w-6 h-6 text-purple-400 mr-3" />
                      <h4 className="text-xl font-semibold">Disaster Recovery</h4>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Comprehensive disaster recovery plans with regular testing and validation 
                      ensuring business continuity under all scenarios.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Testing:</span>
                        <span className="text-white ml-2">Quarterly</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Availability:</span>
                        <span className="text-green-400 ml-2">99.99%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8">Incident Response</h3>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <div className="flex items-center">
                        <Clock className="w-6 h-6 text-blue-400 mr-3" />
                        <div>
                          <h4 className="text-blue-400 font-semibold">24/7 Security Operations</h4>
                          <p className="text-gray-400 text-sm">Round-the-clock monitoring and response</p>
                        </div>
                      </div>
                      <span className="text-green-400 text-sm">Active</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center">
                        <BookOpen className="w-6 h-6 text-green-400 mr-3" />
                        <div>
                          <h4 className="text-green-400 font-semibold">Response Playbooks</h4>
                          <p className="text-gray-400 text-sm">Documented procedures for all incident types</p>
                        </div>
                      </div>
                      <span className="text-green-400 text-sm">Complete</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                      <div className="flex items-center">
                        <AlertCircle className="w-6 h-6 text-purple-400 mr-3" />
                        <div>
                          <h4 className="text-purple-400 font-semibold">SLA Notifications</h4>
                          <p className="text-gray-400 text-sm">Guaranteed response times and escalation</p>
                        </div>
                      </div>
                      <span className="text-green-400 text-sm">Enforced</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                      <div className="flex items-center">
                        <TrendingUp className="w-6 h-6 text-orange-400 mr-3" />
                        <div>
                          <h4 className="text-orange-400 font-semibold">Post-Incident Review</h4>
                          <p className="text-gray-400 text-sm">Thorough analysis and improvement process</p>
                        </div>
                      </div>
                      <span className="text-green-400 text-sm">Automated</span>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                      <span className="text-red-400 font-semibold">Emergency Response</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Critical incident response with guaranteed 15-minute initial response 
                      and 1-hour containment for security events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL & REGULATORY FRAMEWORK */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Legal & Regulatory Framework
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Comprehensive legal documentation and regulatory compliance framework 
                ensuring adherence to international and European standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Privacy Policy</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  GDPR-compliant privacy policy with comprehensive data protection guidelines.
                </p>
                <div className="space-y-2">
                  <Link href="/policies/privacy" className="flex items-center text-blue-400 hover:text-blue-300 text-sm">
                    View Policy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                    <Download className="w-4 h-4 mr-1" /> Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Data Handling Practices</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Detailed documentation of data processing and handling procedures.
                </p>
                <div className="space-y-2">
                  <Link href="/policies/data-handling" className="flex items-center text-green-400 hover:text-green-300 text-sm">
                    View Practices <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                    <Download className="w-4 h-4 mr-1" /> Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Incident Disclosure Policy</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Transparent incident reporting and disclosure procedures for stakeholders.
                </p>
                <div className="space-y-2">
                  <Link href="/policies/incident-disclosure" className="flex items-center text-purple-400 hover:text-purple-300 text-sm">
                    View Policy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                    <Download className="w-4 h-4 mr-1" /> Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Code of Conduct</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Ethical guidelines and professional conduct standards for all operations.
                </p>
                <div className="space-y-2">
                  <Link href="/policies/code-of-conduct" className="flex items-center text-orange-400 hover:text-orange-300 text-sm">
                    View Code <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                    <Download className="w-4 h-4 mr-1" /> Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Whitepapers</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Technical whitepapers on security architecture and compliance frameworks.
                </p>
                <div className="space-y-2">
                  <Link href="/whitepapers" className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm">
                    Browse Whitepapers <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                    <Download className="w-4 h-4 mr-1" /> View All
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compliance Documentation</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Complete compliance documentation for audit and regulatory requirements.
                </p>
                <div className="space-y-2">
                  <Link href="/compliance/docs" className="flex items-center text-indigo-400 hover:text-indigo-300 text-sm">
                    View Documentation <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                    <Download className="w-4 h-4 mr-1" /> Request Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES & DOWNLOADS */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Resources & Downloads
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Comprehensive security resources, documentation, and guides for enterprise 
                implementation and compliance management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-500/30 transition-all duration-300">
                  <FileText className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">Security Whitepapers</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  In-depth technical analysis of security architecture and threat models.
                </p>
                <button className="flex items-center text-blue-400 hover:text-blue-300 font-semibold mx-auto text-sm">
                  <Download className="w-4 h-4 mr-1" /> Download
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-green-500/30 transition-all duration-300">
                  <BarChart className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">Architecture Diagrams</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Visual representations of security architecture and network topology.
                </p>
                <button className="flex items-center text-green-400 hover:text-green-300 font-semibold mx-auto text-sm">
                  <Download className="w-4 h-4 mr-1" /> Download
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-500/30 transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">Implementation Guides</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Step-by-step guides for secure implementation and configuration.
                </p>
                <button className="flex items-center text-purple-400 hover:text-purple-300 font-semibold mx-auto text-sm">
                  <Download className="w-4 h-4 mr-1" /> Download
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-500/30 transition-all duration-300">
                  <Shield className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">Compliance Checklists</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Comprehensive checklists for audit preparation and compliance verification.
                </p>
                <button className="flex items-center text-orange-400 hover:text-orange-300 font-semibold mx-auto text-sm">
                  <Download className="w-4 h-4 mr-1" /> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contact Our Security Team
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Have questions about our security framework or need documentation for your organization? 
                Our security experts are here to help.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-400 text-sm mb-3">security@skygenesisenterprise.com</p>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                    Send Message
                  </button>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Office</h3>
                  <p className="text-gray-400 text-sm mb-3">Liège, Belgium</p>
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                    Get Directions
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  Request Security Documentation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                  Schedule Security Consultation
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}