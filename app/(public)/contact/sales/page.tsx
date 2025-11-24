'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { ArrowRight, Users, Shield, Headphones, Clock, CheckCircle, Globe, Lock, Building, Phone, Mail, Calendar, FileText, Handshake } from 'lucide-react';

export default function SalesPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    country: '',
    companySize: '',
    interestedProducts: [] as string[],
    timeline: '',
    useCase: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProductToggle = (product: string) => {
    setFormData(prev => ({
      ...prev,
      interestedProducts: prev.interestedProducts.includes(product)
        ? prev.interestedProducts.filter(p => p !== product)
        : [...prev.interestedProducts, product]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
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
          <div className="max-w-5xl mx-auto text-center">
            {/* Enterprise badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-12 hover:border-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <Building className="w-4 h-4 mr-2" />
              Enterprise Sales
            </div>
            
            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Connect with Our
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Enterprise Sales Team
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Get tailored guidance for your organization's digital sovereignty journey. 
                Our enterprise specialists provide customized solutions for large-scale deployments 
                and complex infrastructure requirements.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                href="/office" 
                className="border border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE CONTACT FORM */}
      <section id="contact-form" className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Start Your Enterprise Journey
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Tell us about your organization and requirements. Our team will respond within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Thank You for Your Interest</h3>
                <p className="text-gray-400 mb-6">
                  Our enterprise sales team has received your request and will contact you within 24 hours.
                </p>
                <p className="text-gray-500 text-sm">
                  Reference ID: SG-{Date.now().toString().slice(-8)}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Professional Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                          placeholder="+33 1 23 45 67 89"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name *</label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                          placeholder="Acme Corporation"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Country *</label>
                        <select
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                        >
                          <option value="">Select Country</option>
                          <option value="france">France</option>
                          <option value="germany">Germany</option>
                          <option value="italy">Italy</option>
                          <option value="spain">Spain</option>
                          <option value="netherlands">Netherlands</option>
                          <option value="belgium">Belgium</option>
                          <option value="switzerland">Switzerland</option>
                          <option value="austria">Austria</option>
                          <option value="sweden">Sweden</option>
                          <option value="denmark">Denmark</option>
                          <option value="norway">Norway</option>
                          <option value="finland">Finland</option>
                          <option value="poland">Poland</option>
                          <option value="czech">Czech Republic</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Organization Information */}
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Organization Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Size *</label>
                      <select
                        name="companySize"
                        required
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select Company Size</option>
                        <option value="1-10">1–10 employees</option>
                        <option value="11-50">11–50 employees</option>
                        <option value="51-200">51–200 employees</option>
                        <option value="200-1000">200–1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-4">Interested Products *</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          'Aether Office',
                          'Aether Cloud',
                          'Zenth Cloud',
                          'Vaelix Bank',
                          'Governance Suite',
                          'SDK / Integrations',
                          'Other'
                        ].map(product => (
                          <label key={product} className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.interestedProducts.includes(product)}
                              onChange={() => handleProductToggle(product)}
                              className="w-4 h-4 text-blue-400 bg-white/5 border-white/10 rounded focus:ring-blue-400 focus:ring-2"
                            />
                            <span className="ml-3">{product}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project Details */}
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Timeline *</label>
                        <select
                          name="timeline"
                          required
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                        >
                          <option value="">Select Timeline</option>
                          <option value="immediately">Immediately</option>
                          <option value="1-3-months">1–3 months</option>
                          <option value="3-6-months">3–6 months</option>
                          <option value="exploring">Just exploring</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Use Case *</label>
                        <select
                          name="useCase"
                          required
                          value={formData.useCase}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                        >
                          <option value="">Select Use Case</option>
                          <option value="collaboration">Team Collaboration</option>
                          <option value="cloud-migration">Cloud Migration</option>
                          <option value="governance">Governance & Compliance</option>
                          <option value="multi-site">Multi-site Operations</option>
                          <option value="financial">Financial Integrations</option>
                          <option value="custom-infrastructure">Custom Infrastructure</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us more about your requirements, current challenges, and what you're looking to achieve..."
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                  >
                    Submit Request
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <p className="text-gray-500 text-sm mt-4">
                    We respect your privacy. Your information will be handled according to our GDPR compliance.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Enterprise Benefits
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Comprehensive support and expertise tailored for your organization's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tailored Consulting</h3>
              <p className="text-gray-400 leading-relaxed">
                Personalized guidance from enterprise architects who understand your industry and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Migration Support</h3>
              <p className="text-gray-400 leading-relaxed">
                Seamless migration from Google Workspace, Microsoft 365, and other enterprise platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Dedicated Support</h3>
              <p className="text-gray-400 leading-relaxed">
                24/7 dedicated account managers and technical support for mission-critical operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Compliance Expertise</h3>
              <p className="text-gray-400 leading-relaxed">
                Deep knowledge of GDPR, ISO 27001, and European digital sovereignty requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE PLAN OVERVIEW */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Enterprise Plans
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Flexible pricing designed for organizations of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Open-Source Tier</h3>
              <div className="text-3xl font-bold mb-4">Free</div>
              <p className="text-gray-400 mb-6">
                Essential apps and core functionality for small teams and evaluation
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Core collaboration tools</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Community support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Self-hosted option</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-sm rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise Tier</h3>
              <div className="text-3xl font-bold mb-4">€10-15<span className="text-lg text-gray-400">/user/month</span></div>
              <p className="text-gray-400 mb-6">
                Full-featured platform for growing organizations and enterprises
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">All features included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Advanced security features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">SSO & compliance tools</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Organization Tier</h3>
              <div className="text-3xl font-bold mb-4">€500-3000<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-400 mb-6">
                Custom solutions for large enterprises with complex requirements
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Everything in Enterprise</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">SLA guarantees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED ORGANIZATIONS */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              European institutions, enterprises, and multi-site organizations rely on Sky Genesis Enterprise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center justify-center h-24">
                <div className="text-gray-600 text-sm font-medium">Client {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & COMPLIANCE ASSURANCE */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Security & Compliance
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Enterprise-grade security built on European digital sovereignty principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">EU Sovereign Cloud</h3>
              <p className="text-gray-400 text-sm">
                Data hosted within European borders with full jurisdictional control
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">GDPR Compliant</h3>
              <p className="text-gray-400 text-sm">
                Full compliance with European data protection regulations
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <Lock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Advanced Encryption</h3>
              <p className="text-gray-400 text-sm">
                End-to-end encryption with zero-knowledge architecture
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Aether Security Suite</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive security monitoring and threat protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ALTERNATIVE CONTACT OPTIONS */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Other Ways to Connect
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Choose the engagement model that works best for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Request a Demo</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Schedule a personalized demonstration of our enterprise platform
              </p>
              <Button variant="outline" className="w-full">
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <Headphones className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Technical Advisory</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Free consultation with our solutions architects
              </p>
              <Button variant="outline" className="w-full">
                Book Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <FileText className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Documentation</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Comprehensive technical documentation and implementation guides
              </p>
              <Button variant="outline" className="w-full">
                View Docs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <Handshake className="w-12 h-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Partnerships</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Explore partnership opportunities with Sky Genesis Enterprise
              </p>
              <Button variant="outline" className="w-full">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}