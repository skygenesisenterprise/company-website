'use client';

import Link from 'next/link';
import { Shield, CheckCircle, FileText, Users, Award, BookOpen, ArrowRight, ChevronRight, Download, Mail, Phone, MapPin, ExternalLink, AlertCircle, TrendingUp, Lock, Globe, Database } from 'lucide-react';

export default function CompliancePage() {
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
              Governance & Compliance
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Compliance &
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Regulatory Standards
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-3 md:space-y-4 text-base md:text-xl max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Sky Genesis Enterprise maintains rigorous adherence to international and European compliance standards, 
                ensuring legal, security, and operational excellence across all our enterprise solutions.
              </p>
              <p className="text-gray-400 text-lg">
                Our commitment to regulatory compliance is built into every layer of our architecture, 
                from data protection to operational transparency.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400 text-sm">Active Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400 text-sm">Audit Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Compliance Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">GDPR</div>
                <div className="text-gray-400 text-sm">Fully Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS & CERTIFICATIONS */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Standards & Certifications
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Internationally recognized certifications and standards that validate our commitment to 
                security, privacy, and operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* GDPR */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">GDPR</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  General Data Protection Regulation compliance with comprehensive data protection 
                  and privacy controls for European citizens.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Data Subject Rights Implementation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Privacy by Design Architecture</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Data Protection Impact Assessments</span>
                  </div>
                </div>
                <Link href="https://gdpr.eu/" target="_blank" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                  Learn more <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* ISO 27001 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-all duration-300">
                  <Lock className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">ISO 27001</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Information Security Management System certification ensuring comprehensive 
                  security controls and risk management.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">ISMS Implementation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Risk Assessment Framework</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Continuous Monitoring</span>
                  </div>
                </div>
                <Link href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold">
                  Learn more <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* SOC 2/SOC 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-all duration-300">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">SOC 2/SOC 3</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Service Organization Control reports validating security, availability, and 
                  processing integrity of our services.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Security Controls</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Availability Commitments</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Processing Integrity</span>
                  </div>
                </div>
                <Link href="https://www.aicpa.org/research/standards/at-trust-services.html" target="_blank" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold">
                  Learn more <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Open Source Compliance */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Open Source Compliance</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  SPDX, Linux Foundation standards ensuring proper open-source license management 
                  and contribution compliance.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">SPDX License Compliance</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Component Scanning</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">License Management</span>
                  </div>
                </div>
                <Link href="https://spdx.org/" target="_blank" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold">
                  Learn more <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* NIST Framework */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-all duration-300">
                  <Database className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">NIST Framework</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  National Institute of Standards and Technology Cybersecurity Framework 
                  for comprehensive risk management.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Identify, Protect, Detect</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Respond, Recover</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Govern Framework</span>
                  </div>
                </div>
                <Link href="https://www.nist.gov/cyberframework" target="_blank" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                  Learn more <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* EU Cloud Code of Conduct */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-all duration-300">
                  <Globe className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">EU Cloud Code</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  European Cloud Code of Conduct for GDPR compliance ensuring 
                  data protection in cloud services.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">GDPR Alignment</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Data Minimization</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Transparency Reports</span>
                  </div>
                </div>
                <Link href="https://european-cloud-initiative.eu/" target="_blank" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold">
                  Learn more <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE PROCESSES */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Compliance Processes
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Systematic approach to maintaining compliance through continuous monitoring, 
                assessment, and improvement of our governance framework.
              </p>
            </div>

            {/* Process Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Our Compliance Framework</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Risk Assessment</h4>
                      <p className="text-gray-400">
                        Continuous identification and evaluation of compliance risks across all 
                        business units and operational processes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Policy Implementation</h4>
                      <p className="text-gray-400">
                        Deployment of comprehensive policies and procedures aligned with 
                        regulatory requirements and industry standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Internal Auditing</h4>
                      <p className="text-gray-400">
                        Regular internal audits and assessments to verify compliance effectiveness 
                        and identify areas for improvement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-400 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Training & Awareness</h4>
                      <p className="text-gray-400">
                        Comprehensive training programs ensuring all employees understand their 
                        compliance responsibilities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-400 font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Continuous Monitoring</h4>
                      <p className="text-gray-400">
                        Real-time monitoring and reporting of compliance metrics with automated 
                        alerts for potential issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Compliance Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Audit Completion Rate</span>
                      <span className="text-green-400 font-semibold">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Policy Compliance</span>
                      <span className="text-green-400 font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Training Coverage</span>
                      <span className="text-blue-400 font-semibold">95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Incident Response Time</span>
                      <span className="text-purple-400 font-semibold">&lt;1hr</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Documentation Coverage</span>
                      <span className="text-cyan-400 font-semibold">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-blue-400 font-semibold">Real-time Monitoring</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Our compliance dashboard provides 24/7 monitoring of all regulatory requirements 
                    with automated alerts and reporting capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POLICIES & PROCEDURES INTEGRATION */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Policies & Procedures
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Comprehensive governance framework with documented policies and procedures 
                ensuring consistent compliance across all operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Security Policy</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Information security management framework and controls.
                </p>
                <div className="space-y-2">
                  <Link href="/policies/security" className="flex items-center text-blue-400 hover:text-blue-300 text-sm">
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
                <h3 className="text-xl font-bold mb-3">Data Handling Policy</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Data classification, processing, and retention guidelines.
                </p>
                <div className="space-y-2">
                  <Link href="/policies/data-handling" className="flex items-center text-green-400 hover:text-green-300 text-sm">
                    View Policy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                    <Download className="w-4 h-4 mr-1" /> Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Operational Policy</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Business continuity and operational resilience procedures.
                </p>
                <div className="space-y-2">
                  <Link href="/policies/operational" className="flex items-center text-purple-400 hover:text-purple-300 text-sm">
                    View Policy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                    <Download className="w-4 h-4 mr-1" /> Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Privacy Policy</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  GDPR-compliant privacy and data protection framework.
                </p>
                <div className="space-y-2">
                  <Link href="/policies/privacy" className="flex items-center text-orange-400 hover:text-orange-300 text-sm">
                    View Policy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                    <Download className="w-4 h-4 mr-1" /> Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Incident Response</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Security incident management and response procedures.
                </p>
                <div className="space-y-2">
                  <Link href="/policies/incident-response" className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm">
                    View Policy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                    <Download className="w-4 h-4 mr-1" /> Download PDF
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Acceptable Use</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Guidelines for appropriate use of company systems and data.
                </p>
                <div className="space-y-2">
                  <Link href="/policies/acceptable-use" className="flex items-center text-indigo-400 hover:text-indigo-300 text-sm">
                    View Policy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                    <Download className="w-4 h-4 mr-1" /> Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY & REPORTING */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Transparency & Reporting
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Our commitment to openness and accountability through comprehensive reporting 
                and transparent communication of our compliance status.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-8">Compliance Reports</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Annual Compliance Report</h4>
                        <p className="text-gray-400 text-sm">Comprehensive overview of yearly compliance activities</p>
                      </div>
                      <span className="text-green-400 text-sm">2024</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-blue-400 hover:text-blue-300 text-sm">
                        <Download className="w-4 h-4 mr-1" /> Download PDF
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                        <ExternalLink className="w-4 h-4 mr-1" /> View Online
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold mb-1">SOC 2 Type II Report</h4>
                        <p className="text-gray-400 text-sm">Service organization controls audit report</p>
                      </div>
                      <span className="text-green-400 text-sm">Q3 2024</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-blue-400 hover:text-blue-300 text-sm">
                        <Download className="w-4 h-4 mr-1" /> Request Access
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                        <ExternalLink className="w-4 h-4 mr-1" /> Learn More
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold mb-1">GDPR Compliance Statement</h4>
                        <p className="text-gray-400 text-sm">Data protection and privacy compliance status</p>
                      </div>
                      <span className="text-green-400 text-sm">Updated</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-blue-400 hover:text-blue-300 text-sm">
                        <Download className="w-4 h-4 mr-1" /> Download PDF
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                        <ExternalLink className="w-4 h-4 mr-1" /> View Online
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Security Assessment Report</h4>
                        <p className="text-gray-400 text-sm">Latest security posture and vulnerability assessment</p>
                      </div>
                      <span className="text-blue-400 text-sm">Monthly</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-blue-400 hover:text-blue-300 text-sm">
                        <Download className="w-4 h-4 mr-1" /> Download PDF
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-gray-300 text-sm">
                        <ExternalLink className="w-4 h-4 mr-1" /> View Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8">Transparency Metrics</h3>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">47</div>
                      <div className="text-gray-400 text-sm">Audits Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">15</div>
                      <div className="text-gray-400 text-sm">Active Certifications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">234</div>
                      <div className="text-gray-400 text-sm">Public Reports</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                      <div className="text-gray-400 text-sm">Compliance Rate</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-green-400 font-semibold">No Major Findings</span>
                      </div>
                      <span className="text-gray-400 text-sm">Last 24 months</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                        <span className="text-blue-400 font-semibold">All Certifications Active</span>
                      </div>
                      <span className="text-gray-400 text-sm">Current status</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-purple-400 mr-3" />
                        <span className="text-purple-400 font-semibold">Industry Recognition</span>
                      </div>
                      <span className="text-gray-400 text-sm">Multiple awards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contact Our Compliance Team
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Have questions about our compliance standards or need documentation for your organization? 
                Our compliance team is here to help.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-400 text-sm mb-3">compliance@skygenesisenterprise.com</p>
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
                  Request Documentation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                  Schedule Consultation
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