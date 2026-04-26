'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ChevronDown, Shield, Users, FileText, Globe, Eye, Lock, AlertCircle, CheckCircle, Mail, Phone, MapPin, Target, Clock } from 'lucide-react';

export default function GDPRCompliance() {
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
            GDPR Compliance
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            General Data Protection Regulation Compliance Statement
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
                Our Commitment to GDPR
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Sky Genesis Enterprise is committed to protecting privacy and personal data of our customers, 
                users, and employees in compliance with the General Data Protection Regulation (GDPR) and other 
                applicable data protection laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This GDPR Compliance Statement outlines how we collect, use, store, and protect personal data 
                in accordance with GDPR requirements.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            GDPR Principles We Follow
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Lawfulness, Fairness & Transparency",
                description: "We process personal data lawfully, fairly, and in a transparent manner.",
                icon: <Eye className="w-5 h-5" />
              },
              {
                title: "Purpose Limitation",
                description: "We collect data for specified, explicit, and legitimate purposes.",
                icon: <Target className="w-5 h-5" />
              },
              {
                title: "Data Minimization",
                description: "We only collect and process data that is necessary for our purposes.",
                icon: <FileText className="w-5 h-5" />
              },
              {
                title: "Accuracy",
                description: "We ensure personal data is accurate and kept up to date.",
                icon: <CheckCircle className="w-5 h-5" />
              },
              {
                title: "Storage Limitation",
                description: "We retain data only as long as necessary for specified purposes.",
                icon: <Lock className="w-5 h-5" />
              },
              {
                title: "Integrity & Confidentiality",
                description: "We protect data using appropriate security measures.",
                icon: <Shield className="w-5 h-5" />
              }
            ].map((principle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {principle.icon}
                    </div>
                    {principle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Data Subject Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Your Rights Under GDPR
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Right to Information",
                description: "You have right to be informed about how we collect and use your personal data.",
                icon: <FileText className="w-5 h-5" />
              },
              {
                title: "Right of Access",
                description: "You can request access to personal data we hold about you.",
                icon: <Eye className="w-5 h-5" />
              },
              {
                title: "Right to Rectification",
                description: "You can request correction of inaccurate or incomplete personal data.",
                icon: <CheckCircle className="w-5 h-5" />
              },
              {
                title: "Right to Erasure",
                description: "You can request deletion of your personal data in certain circumstances.",
                icon: <AlertCircle className="w-5 h-5" />
              },
              {
                title: "Right to Restrict Processing",
                description: "You can request restriction of processing your personal data.",
                icon: <Lock className="w-5 h-5" />
              },
              {
                title: "Right to Data Portability",
                description: "You can request transfer of your data to another service provider.",
                icon: <Globe className="w-5 h-5" />
              },
              {
                title: "Right to Object",
                description: "You can object to processing of your personal data.",
                icon: <Shield className="w-5 h-5" />
              },
              {
                title: "Rights Related to Automated Decision Making",
                description: "You have rights concerning automated decision making and profiling.",
                icon: <Users className="w-5 h-5" />
              }
            ].map((right, index) => (
              <Card key={index} className="overflow-hidden">
                <Button
                  variant="ghost"
                  onClick={() => toggleSection(`right-${index}`)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 rounded-none border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {right.icon}
                    </div>
                    <h3 className="text-lg font-medium text-foreground">{right.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transform transition-transform ${
                      expandedSection === `right-${index}` ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
                {expandedSection === `right-${index}` && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">{right.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Data Processing Activities */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Data Processing Activities
          </h2>
          
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-foreground font-medium">Purpose</th>
                      <th className="text-left p-4 text-foreground font-medium">Legal Basis</th>
                      <th className="text-left p-4 text-foreground font-medium">Data Categories</th>
                      <th className="text-left p-4 text-foreground font-medium">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 text-muted-foreground">Service Provision</td>
                      <td className="p-4 text-muted-foreground">Contractual Necessity</td>
                      <td className="p-4 text-muted-foreground">Name, Email, Company</td>
                      <td className="p-4 text-muted-foreground">Contract Duration + 7 years</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-muted-foreground">Marketing</td>
                      <td className="p-4 text-muted-foreground">Consent</td>
                      <td className="p-4 text-muted-foreground">Email, Preferences</td>
                      <td className="p-4 text-muted-foreground">Until consent withdrawn</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-muted-foreground">Analytics</td>
                      <td className="p-4 text-muted-foreground">Legitimate Interest</td>
                      <td className="p-4 text-muted-foreground">Usage Data, IP Address</td>
                      <td className="p-4 text-muted-foreground">26 months</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-muted-foreground">Legal Compliance</td>
                      <td className="p-4 text-muted-foreground">Legal Obligation</td>
                      <td className="p-4 text-muted-foreground">All relevant data</td>
                      <td className="p-4 text-muted-foreground">As required by law</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data Breach Procedures */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Data Breach Procedures
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In the event of a personal data breach, we will:
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-primary" />
                Breach Response Protocol
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="text-muted-foreground space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">1</div>
                  <div>
                    <strong className="text-foreground">Assessment:</strong> Assess breach within 72 hours of discovery
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">2</div>
                  <div>
                    <strong className="text-foreground">Notification:</strong> Notify relevant supervisory authorities if required
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">3</div>
                  <div>
                    <strong className="text-foreground">Individual Notice:</strong> Inform affected individuals if there&apos;s a high risk to their rights
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">4</div>
                  <div>
                    <strong className="text-foreground">Documentation:</strong> Document breach and our response
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">5</div>
                  <div>
                    <strong className="text-foreground">Prevention:</strong> Implement measures to prevent future breaches
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
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
                As a European company, we ensure that international data transfers comply with GDPR requirements:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  We use Standard Contractual Clauses (SCCs) for transfers outside EEA
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  We only transfer data to countries with adequate protection levels
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  We implement appropriate technical and organizational measures
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  We maintain records of all international data transfers
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Data Protection Officer */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Data Protection Officer (DPO)
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                DPO Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our Data Protection Officer is responsible for:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Monitoring compliance with GDPR
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Advising on data protection obligations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Providing guidance on Data Protection Impact Assessments
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Coordinating with supervisory authorities
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Exercise Your Rights
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To exercise your GDPR rights or if you have questions about our data protection practices, 
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
                      <div className="text-foreground font-medium">dpo@skygenesisenterprise.com</div>
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
                      <div className="text-foreground font-medium">Brussels, Belgium</div>
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

        {/* Complaint Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Complaint Process
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-primary" />
                Resolution Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you believe we have violated your data protection rights, you have right to:
              </p>
              <ol className="text-muted-foreground space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">1</div>
                  <div>
                    <strong className="text-foreground">Contact DPO:</strong> Contact our DPO directly at dpo@skygenesisenterprise.com
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">2</div>
                  <div>
                    <strong className="text-foreground">File Complaint:</strong> File a complaint with Belgian Data Protection Authority
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">3</div>
                  <div>
                    <strong className="text-foreground">Legal Remedy:</strong> Seek judicial remedy in competent courts
                  </div>
                </li>
              </ol>
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
                This GDPR Compliance Statement was last updated on {new Date().toLocaleDateString()} 
                and is reviewed annually to ensure ongoing compliance.
              </h3>
              <p className="text-muted-foreground text-sm">
                For questions about data protection or to exercise your rights, please contact our DPO.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}