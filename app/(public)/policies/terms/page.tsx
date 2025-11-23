'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ChevronDown, Shield, Users, FileText, Building, Globe, Code, Wrench } from 'lucide-react';

export default function TermsOfService() {
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
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Terms and Conditions for Using Sky Genesis Enterprise Services
          </p>
          <p className="text-muted-foreground/70 text-sm mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Agreement */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Sky Genesis Enterprise&apos;s website, products, or services, 
                you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree 
                to these Terms, you may not access or use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These Terms constitute a legally binding agreement between you (&quot;User&quot; or &quot;Customer&quot;) 
                and Sky Genesis Enterprise S.A. (&quot;Company,&quot; &quot;We,&quot; or &quot;Us&quot;).
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Services Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Aether Office",
                description: "Collaborative workspace and productivity suite",
                features: ["Document management", "Team collaboration", "Project tracking"],
                icon: <Building className="w-5 h-5" />
              },
              {
                title: "Cloud Infrastructure",
                description: "Enterprise-grade cloud computing services",
                features: ["Virtual servers", "Storage solutions", "Networking"],
                icon: <Globe className="w-5 h-5" />
              },
              {
                title: "Security Solutions",
                description: "Cybersecurity and compliance services",
                features: ["Threat detection", "Data protection", "Compliance monitoring"],
                icon: <Shield className="w-5 h-5" />
              },
              {
                title: "Consulting Services",
                description: "Digital transformation and strategy consulting",
                features: ["Strategic planning", "Implementation support", "Training"],
                icon: <Users className="w-5 h-5" />
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {service.icon}
                    </div>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <ul className="text-muted-foreground/70 text-sm space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            User Responsibilities
          </h2>
          
          <div className="space-y-4">
            {[
              {
                title: "Account Security",
                content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
              },
              {
                title: "Accurate Information",
                content: "You must provide accurate, current, and complete information when registering for our services and keep such information updated."
              },
              {
                title: "Compliance with Laws",
                content: "You must comply with all applicable laws and regulations when using our services, including data protection and export control laws."
              },
              {
                title: "Prohibited Activities",
                content: "You may not use our services for illegal activities, harassment, spam, malware distribution, or any other harmful purposes."
              },
              {
                title: "Intellectual Property",
                content: "You must not infringe on the intellectual property rights of others or use our services to distribute copyrighted material without permission."
              }
            ].map((responsibility, index) => (
              <Card key={index} className="overflow-hidden">
                <Button
                  variant="ghost"
                  onClick={() => toggleSection(`responsibility-${index}`)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 rounded-none border-0"
                >
                  <h3 className="text-lg font-medium text-foreground">{responsibility.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transform transition-transform ${
                      expandedSection === `responsibility-${index}` ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
                {expandedSection === `responsibility-${index}` && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">{responsibility.content}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Payment Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Payment Terms
          </h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">Subscription Plans</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Our services are offered on subscription basis with the following payment terms:
                  </p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Monthly and annual billing cycles available
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Payments processed in advance of service period
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Auto-renewal unless cancelled before renewal date
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Prices subject to change with 30-day notice
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">Payment Methods</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    We accept the following payment methods:
                  </p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Credit/Debit cards (Visa, MasterCard, American Express)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Bank transfers (for enterprise customers)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      SEPA direct debit (European customers)
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">Refund Policy</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Refunds are handled as follows:
                  </p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      14-day money-back guarantee for new subscriptions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Pro-rated refunds for annual plans cancelled within 30 days
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      No refunds for monthly plans after 14 days
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Refunds processed within 10 business days
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Service Level Agreement */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Service Level Agreement (SLA)
          </h2>
          
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-foreground font-medium">Service</th>
                      <th className="text-left p-4 text-foreground font-medium">Uptime Target</th>
                      <th className="text-left p-4 text-foreground font-medium">Response Time</th>
                      <th className="text-left p-4 text-foreground font-medium">Credit for Failure</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 text-muted-foreground">Core Services</td>
                      <td className="p-4 text-muted-foreground">99.9%</td>
                      <td className="p-4 text-muted-foreground">&lt; 1 hour</td>
                      <td className="p-4 text-muted-foreground">10% of monthly fee</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-muted-foreground">API Services</td>
                      <td className="p-4 text-muted-foreground">99.5%</td>
                      <td className="p-4 text-muted-foreground">&lt; 4 hours</td>
                      <td className="p-4 text-muted-foreground">5% of monthly fee</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-muted-foreground">Support Response</td>
                      <td className="p-4 text-muted-foreground">N/A</td>
                      <td className="p-4 text-muted-foreground">&lt; 24 hours</td>
                      <td className="p-4 text-muted-foreground">Service credit</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-muted-foreground">Emergency Issues</td>
                      <td className="p-4 text-muted-foreground">N/A</td>
                      <td className="p-4 text-muted-foreground">&lt; 1 hour</td>
                      <td className="p-4 text-muted-foreground">Priority handling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Intellectual Property Rights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-primary" />
                  Our Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  All content, features, and functionality of our services are owned by Sky Genesis Enterprise 
                  and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Software code and algorithms
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    User interface designs and layouts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Documentation and training materials
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Brand names, logos, and trademarks
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  Your Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  You retain ownership of content you upload or create using our services. By using our 
                  services, you grant us a license to use, modify, and distribute your content as necessary 
                  to provide the services.
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    You grant us a worldwide, non-exclusive license
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    License is limited to providing our services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    You can terminate this license by deleting your content
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    We respect your intellectual property rights
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Data Protection and Privacy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We are committed to protecting your personal data and privacy. Our data processing practices 
            comply with GDPR and other applicable data protection regulations.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                Key Privacy Commitments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  We collect only necessary personal data
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  We use data only for specified purposes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  We implement appropriate security measures
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  We respect your data protection rights
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  We do not sell personal data to third parties
                </li>
              </ul>
              <p className="text-muted-foreground/70 text-sm mt-4">
                For detailed information, please refer to our Privacy Policy.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Limitation of Liability
          </h2>
          
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Our Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, our total liability for any claims arising from 
                  or related to our services shall not exceed the amount you paid us in the 12 months 
                  preceding the claim.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Exclusions</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We shall not be liable for:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Indirect, incidental, or consequential damages
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Loss of profits, revenue, or business opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Data loss or corruption
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Service interruptions beyond our control
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Third-party service failures
                  </li>
                </ul>
              </div>
              
              <p className="text-muted-foreground/70 text-sm">
                Some jurisdictions do not allow exclusion of certain damages, so these exclusions may not apply to you.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Termination */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Termination
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  Termination by You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    You can terminate your account at any time
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    No cancellation fees for monthly plans
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Pro-rated refund for annual plans
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Data export available before termination
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  Termination by Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    For violation of these Terms
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    For non-payment of fees
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    For illegal or harmful activities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    With 30-day notice for service changes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Dispute Resolution
          </h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Wrench className="w-5 h-5 text-primary" />
                Resolution Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="text-muted-foreground space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">1</div>
                  <div>
                    <strong className="text-foreground">Informal Resolution:</strong> Contact our support team to resolve issues informally
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">2</div>
                  <div>
                    <strong className="text-foreground">Formal Complaint:</strong> Submit written complaint to legal@skygenesisenterprise.com
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">3</div>
                  <div>
                    <strong className="text-foreground">Mediation:</strong> If unresolved, we agree to mediation through accredited mediator
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">4</div>
                  <div>
                    <strong className="text-foreground">Legal Action:</strong> Courts of Brussels, Belgium have exclusive jurisdiction
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Governing Law and Jurisdiction
          </h2>
          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of Belgium, 
                without regard to its conflict of law principles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of 
                the courts of Brussels, Belgium.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For consumers, this does not affect your mandatory consumer protection rights under your 
                local laws.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Changes to Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Changes to These Terms
          </h2>
          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time to reflect changes in our services, legal requirements, 
                or business practices. We will notify you of any material changes by:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Posting updated Terms on our website
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Sending email notification to registered users
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Displaying prominent notice in our services
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Providing at least 30 days notice for significant changes
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Your continued use of our services after changes constitutes acceptance of the updated Terms.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you have questions about these Terms of Service, please contact us:
          </p>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="text-foreground font-medium">legal@skygenesisenterprise.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
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
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Address</div>
                      <div className="text-foreground font-medium">Rue de la Loi 1, 1000 Brussels, Belgium</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Business Hours</div>
                      <div className="text-foreground font-medium">Monday - Friday, 9:00 - 18:00 CET</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Acceptance */}
        <div className="mt-16 pt-8 border-t border-border">
          <Card className="text-center bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                By using our services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Service.
              </h3>
              <p className="text-muted-foreground text-sm">
                These Terms were last updated on {new Date().toLocaleDateString()} 
                and are effective as of that date.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}