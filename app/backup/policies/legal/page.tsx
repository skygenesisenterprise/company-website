'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ChevronDown, Shield, Users, FileText, Globe, Eye, AlertCircle, Mail, Phone, MapPin, Target, Clock, Wrench, Scale, Banknote, Gavel, Building, Database, UserCheck } from 'lucide-react';

export default function LegalNotice() {
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
            <Scale className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Legal Notice
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Legal Information and Disclaimer
          </p>
          <p className="text-muted-foreground/70 text-sm mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Company Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Company Information
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Building className="w-5 h-5 text-primary" />
                Corporate Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Company Name</div>
                      <div className="text-foreground font-medium">Sky Genesis Enterprise S.A.</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Scale className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Legal Form</div>
                      <div className="text-foreground font-medium">Société Anonyme (Public Limited Company)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Registration Number</div>
                      <div className="text-foreground font-medium">BE 0123.456.789</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Banknote className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">VAT Number</div>
                      <div className="text-foreground font-medium">BE 0123.456.789</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Registered Office</div>
                      <div className="text-foreground font-medium">Brussels, Belgium</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Business Address</div>
                      <div className="text-foreground font-medium">Rue de la Loi 1, 1000 Brussels</div>
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
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="text-foreground font-medium">legal@skygenesisenterprise.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Management & Representation
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                Board of Directors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Chief Executive Officer",
                    person: "Jean-Pierre Dubois"
                  },
                  {
                    name: "Chief Technology Officer", 
                    person: "Marie Laurent"
                  },
                  {
                    name: "Chief Financial Officer",
                    person: "Pierre Martin"
                  },
                  {
                    name: "Chief Legal Officer",
                    person: "Sophie Bernard"
                  }
                ].map((director, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-4 border border-border">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-muted-foreground">{director.name}</div>
                        <div className="text-foreground font-medium">{director.person}</div>
                      </div>
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <UserCheck className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-blue-800 dark:text-blue-200 text-sm font-medium">
                  The company is legally represented by any two directors acting jointly.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Business Activities */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Business Activities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Wrench className="w-5 h-5 text-primary" />
                  </div>
                  Primary Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Development and provision of enterprise software solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Cloud computing and infrastructure services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Data processing and analytics services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Cybersecurity consulting and implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Digital transformation consulting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Software as a Service (SaaS) platforms
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  Secondary Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Technical training and certification programs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Research and development in emerging technologies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Strategic consulting services
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Legal Disclaimers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Legal Disclaimers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Website Content",
                content: "The information provided on this website is for general informational purposes only. While we strive to keep information accurate and up-to-date, we make no warranties of any kind, express or implied, about completeness, accuracy, reliability, or availability of information.",
                icon: <Globe className="w-5 h-5" />
              },
              {
                title: "Professional Services",
                content: "Our services are provided on an 'as is' basis. We do not guarantee specific outcomes or results. Clients should seek independent professional advice before making business decisions based on our services or recommendations.",
                icon: <Wrench className="w-5 h-5" />
              },
              {
                title: "Third-Party Links",
                content: "Our website may contain links to third-party websites. We are not responsible for content, privacy policies, or practices of these external sites. Inclusion of any link does not imply endorsement.",
                icon: <Eye className="w-5 h-5" />
              },
              {
                title: "Intellectual Property",
                content: "All content on this website, including text, graphics, logos, and software, is property of Sky Genesis Enterprise or its content suppliers and is protected by intellectual property laws. Unauthorized use is prohibited.",
                icon: <Shield className="w-5 h-5" />
              },
              {
                title: "Limitation of Liability",
                content: "To the fullest extent permitted by law, Sky Genesis Enterprise shall not be liable for any indirect, incidental, special, or consequential damages arising from use of our services or website.",
                icon: <AlertCircle className="w-5 h-5" />
              }
            ].map((disclaimer, index) => (
              <Card key={index} className="overflow-hidden">
                <Button
                  variant="ghost"
                  onClick={() => toggleSection(`disclaimer-${index}`)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 rounded-none border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {disclaimer.icon}
                    </div>
                    <h3 className="text-lg font-medium text-foreground">{disclaimer.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transform transition-transform ${
                      expandedSection === `disclaimer-${index}` ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
                {expandedSection === `disclaimer-${index}` && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">{disclaimer.content}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Jurisdiction & Applicable Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Jurisdiction & Applicable Law
          </h2>
          <Card>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Gavel className="w-5 h-5 text-primary" />
                      Governing Law
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      This website and our services are governed by the laws of Belgium. Any disputes 
                      arising from the use of our services shall be subject to the exclusive jurisdiction 
                      of the courts of Brussels, Belgium.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-primary" />
                      EU Regulations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      As a European company, we comply with all applicable EU regulations including 
                      GDPR, ePrivacy Directive, and Digital Services Act.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Consumer Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Consumer Protection
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                Consumer Rights & Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Your Rights</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Right to clear and transparent information about our services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Right to cancel contracts within statutory cooling-off period
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Right to fair contract terms and conditions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Right to effective dispute resolution mechanisms
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Right to data protection and privacy
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Dispute Resolution Process</h3>
                <p className="text-muted-foreground mb-4">
                  We are committed to resolving disputes amicably. If you have a complaint:
                </p>
                <ol className="text-muted-foreground space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">1</div>
                    <div>
                      <strong className="text-foreground">Customer Service:</strong> Contact our customer service at support@skygenesisenterprise.com
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">2</div>
                    <div>
                      <strong className="text-foreground">Legal Department:</strong> If unresolved, contact our legal department at legal@skygenesisenterprise.com
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">3</div>
                    <div>
                      <strong className="text-foreground">Consumer Protection:</strong> You may also contact the Belgian Consumer Protection Authority
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">4</div>
                    <div>
                      <strong className="text-foreground">EU ODR Platform:</strong> EU residents can use the Online Dispute Resolution (ODR) platform
                    </div>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Financial Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Financial Information
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Banknote className="w-5 h-5 text-primary" />
                Financial & Banking Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Banknote className="w-5 h-5 text-primary" />
                      </div>
                      Bank Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-muted-foreground">Bank</div>
                        <div className="text-foreground font-medium">Vaelix Bank</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-muted-foreground">IBAN</div>
                        <div className="text-foreground font-medium">BE12 3456 7890 5678</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-muted-foreground">BIC</div>
                        <div className="text-foreground font-medium">BPOTBEB1</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Database className="w-5 h-5 text-primary" />
                      </div>
                      Financial Oversight
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-muted-foreground">Auditor</div>
                        <div className="text-foreground font-medium">PwC Belgium</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-muted-foreground">Tax ID</div>
                        <div className="text-foreground font-medium">BE 0123.456.789</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-muted-foreground">Chamber of Commerce</div>
                        <div className="text-foreground font-medium">Brussels</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact for Legal Matters */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Legal Contact
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            For all legal matters, including contracts, compliance, disputes, or regulatory inquiries, 
            please contact our legal department:
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
                      <div className="text-foreground font-medium">legal@skygenesisenterprise.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="text-foreground font-medium">+32 2 123 45 67 (Legal Department)</div>
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
                      <div className="text-sm text-muted-foreground">Business Hours</div>
                      <div className="text-foreground font-medium">Monday - Friday, 9:00 - 18:00 CET</div>
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
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                This Legal Notice was last updated on {new Date().toLocaleDateString()} 
                and is subject to change without notice.
              </h3>
              <p className="text-muted-foreground text-sm">
                Please review this page periodically for any updates or contact our legal department 
                for questions regarding this notice.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}