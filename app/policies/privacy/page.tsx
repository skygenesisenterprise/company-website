'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ChevronDown, Shield, Users, FileText, Globe, Eye, Lock, AlertCircle, CheckCircle, Mail, Phone, MapPin, Target, Clock, Database, Cookie, UserCheck, Wrench } from 'lucide-react';

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            How We Collect, Use, and Protect Your Personal Information
          </p>
          <p className="text-muted-foreground/70 text-sm mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                Our Commitment to Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                At Sky Genesis Enterprise, we are committed to protecting your privacy and ensuring the 
                security of your personal information. This Privacy Policy explains how we collect, use, 
                store, and protect your data when you use our website, products, and services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We comply with the General Data Protection Regulation (GDPR) and other applicable 
                data protection laws in the jurisdictions where we operate.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Information We Collect
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Personal Information */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <UserCheck className="w-5 h-5 text-primary" />
                  </div>
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 text-sm">
                  We may collect the following personal information:
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Full name and contact details
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Professional information
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Account credentials
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Communication preferences
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Usage Data */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  Usage Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 text-sm">
                  We automatically collect information about how you use our services:
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    IP address and device information
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Browser and operating system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Pages visited and time spent
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Click patterns and navigation
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Cookie className="w-5 h-5 text-primary" />
                  </div>
                  Cookies & Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 text-sm">
                  We use cookies and similar technologies to:
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Remember preferences and settings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Analyze traffic and behavior
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Provide personalized content
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Ensure security and prevent fraud
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            How We Use Your Information
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Service Provision",
                description: "To provide, maintain, and improve our services",
                icon: <Wrench className="w-5 h-5" />
              },
              {
                title: "Communication",
                description: "To respond to your inquiries and send important updates",
                icon: <Mail className="w-5 h-5" />
              },
              {
                title: "Personalization",
                description: "To customize your experience and provide relevant content",
                icon: <Target className="w-5 h-5" />
              },
              {
                title: "Analytics",
                description: "To understand usage patterns and improve our offerings",
                icon: <Database className="w-5 h-5" />
              },
              {
                title: "Security",
                description: "To protect our services and prevent fraudulent activities",
                icon: <Lock className="w-5 h-5" />
              },
              {
                title: "Legal Compliance",
                description: "To comply with legal obligations and regulatory requirements",
                icon: <Shield className="w-5 h-5" />
              }
            ].map((use, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {use.icon}
                    </div>
                    {use.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{use.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Legal Basis for Processing */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Legal Basis for Processing
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                basis: "Contractual Necessity",
                description: "Processing is necessary for the performance of our contract with you",
                examples: ["Service delivery", "Account management", "Customer support"],
                icon: <FileText className="w-5 h-5" />
              },
              {
                basis: "Legitimate Interest",
                description: "Processing is necessary for our legitimate business interests",
                examples: ["Network security", "Fraud prevention", "Service improvement"],
                icon: <Target className="w-5 h-5" />
              },
              {
                basis: "Consent",
                description: "You have given explicit consent for the processing",
                examples: ["Marketing communications", "Analytics cookies", "Newsletter subscription"],
                icon: <CheckCircle className="w-5 h-5" />
              },
              {
                basis: "Legal Obligation",
                description: "Processing is necessary to comply with legal requirements",
                examples: ["Tax reporting", "Regulatory compliance", "Legal proceedings"],
                icon: <Shield className="w-5 h-5" />
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <Button
                  variant="ghost"
                  onClick={() => toggleSection(`basis-${index}`)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 rounded-none border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{item.basis}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transform transition-transform ${
                      expandedSection === `basis-${index}` ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
                {expandedSection === `basis-${index}` && (
                  <CardContent className="pt-0">
                    <h4 className="text-foreground font-medium mb-2">Examples:</h4>
                    <ul className="text-muted-foreground space-y-2">
                      {item.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Data Sharing and Disclosure */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Data Sharing and Disclosure
          </h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                We may share your data with:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-foreground font-medium mb-2">Service Providers</h4>
                  <p className="text-muted-foreground text-sm">
                    Third-party companies that help us operate our business (cloud providers, 
                    payment processors, analytics services)
                  </p>
                </div>
                
                <div>
                  <h4 className="text-foreground font-medium mb-2">Business Partners</h4>
                  <p className="text-muted-foreground text-sm">
                    Trusted partners with whom we jointly offer services
                  </p>
                </div>
                
                <div>
                  <h4 className="text-foreground font-medium mb-2">Legal Authorities</h4>
                  <p className="text-muted-foreground text-sm">
                    When required by law, court order, or government regulation
                  </p>
                </div>
                
                <div>
                  <h4 className="text-foreground font-medium mb-2">Business Transfers</h4>
                  <p className="text-muted-foreground text-sm">
                    In connection with mergers, acquisitions, or asset sales
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                  We never sell your personal information to third parties for marketing purposes.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Data Security Measures
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  Technical Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    End-to-end encryption for data transmission
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    AES-256 encryption for data at rest
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Regular security audits and penetration testing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Multi-factor authentication for access control
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Intrusion detection and prevention systems
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  Organizational Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Employee background checks and training
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Need-to-know access principles
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Regular security awareness programs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Incident response procedures
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Business continuity and disaster recovery plans
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Data Retention Periods
          </h2>
          
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-foreground font-medium">Data Type</th>
                      <th className="text-left p-4 text-foreground font-medium">Retention Period</th>
                      <th className="text-left p-4 text-foreground font-medium">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 text-muted-foreground">Account Information</td>
                      <td className="p-4 text-muted-foreground">Until account deletion</td>
                      <td className="p-4 text-muted-foreground">Contractual necessity</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-muted-foreground">Transaction Data</td>
                      <td className="p-4 text-muted-foreground">7 years</td>
                      <td className="p-4 text-muted-foreground">Tax and legal requirements</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-muted-foreground">Analytics Data</td>
                      <td className="p-4 text-muted-foreground">26 months</td>
                      <td className="p-4 text-muted-foreground">Legitimate interest</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-muted-foreground">Marketing Communications</td>
                      <td className="p-4 text-muted-foreground">Until consent withdrawn</td>
                      <td className="p-4 text-muted-foreground">Consent</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-muted-foreground">Support Tickets</td>
                      <td className="p-4 text-muted-foreground">3 years</td>
                      <td className="p-4 text-muted-foreground">Service improvement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Your Privacy Rights
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                right: "Access",
                description: "Request a copy of your personal data",
                action: "Submit a data access request",
                icon: <Eye className="w-5 h-5" />
              },
              {
                right: "Rectification",
                description: "Correct inaccurate or incomplete data",
                action: "Update your profile or contact us",
                icon: <CheckCircle className="w-5 h-5" />
              },
              {
                right: "Erasure",
                description: "Request deletion of your personal data",
                action: "Submit a deletion request",
                icon: <AlertCircle className="w-5 h-5" />
              },
              {
                right: "Portability",
                description: "Receive your data in a machine-readable format",
                action: "Request data export",
                icon: <Database className="w-5 h-5" />
              },
              {
                right: "Restriction",
                description: "Limit how we process your data",
                action: "Submit a restriction request",
                icon: <Lock className="w-5 h-5" />
              },
              {
                right: "Objection",
                description: "Object to processing of your data",
                action: "Submit an objection request",
                icon: <Shield className="w-5 h-5" />
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {item.icon}
                    </div>
                    Right to {item.right}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <p className="text-primary text-sm font-medium">{item.action}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* International Data Transfers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            International Data Transfers
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                Cross-Border Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Your personal data may be transferred to and processed in countries outside the European 
                Economic Area (EEA). We ensure adequate protection through:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Standard Contractual Clauses (SCCs) approved by European Commission
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Binding Corporate Rules (BCRs) for intra-group transfers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Adequacy decisions for countries with EU-approved data protection laws
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Additional technical and organizational security measures
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Children&apos;s Privacy
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                Protection of Minors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under the age of 16. We do not knowingly 
                collect personal information from children under 16. If we become aware that we have 
                collected personal information from a child under 16 without parental consent, we 
                will take steps to remove that information immediately.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  <strong>Parents or guardians:</strong> If you believe your child has provided personal information to us 
                  should contact us immediately at privacy@skygenesisenterprise.com.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Changes to This Privacy Policy
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                Policy Updates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                legal requirements, or business operations. We will notify you of any material changes 
                by posting the updated policy on our website and sending you an email notification.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Updated policy posted on website
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Email notification for material changes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  30-day notice for significant modifications
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you have questions about this Privacy Policy or want to exercise your privacy rights, 
            please contact our Data Protection Officer:
          </p>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="text-foreground font-medium">privacy@skygenesisenterprise.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="text-foreground font-medium">+32 2 123 45 67</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Address</div>
                      <div className="text-foreground font-medium">Rue de la Loi 1, 1000 Brussels, Belgium</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                      <div className="text-foreground font-medium">Within 30 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Last Updated */}
        <div className="mt-16 pt-8 border-t border-border">
          <Card className="text-center bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                This Privacy Policy was last updated on {new Date().toLocaleDateString()} 
                and is effective as of that date.
              </h3>
              <p className="text-muted-foreground text-sm">
                For questions about your privacy or to exercise your rights, please contact our Data Protection Officer.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}