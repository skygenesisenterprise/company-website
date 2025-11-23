'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ChevronDown, Shield, Users, Globe, Lock, CheckCircle, Mail, Phone, MapPin, Clock, Database, Cookie, Settings, Trash2 } from 'lucide-react';

export default function CookiesPolicy() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleCookieChange = (category: string, value: boolean) => {
    setCookiePreferences(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const savePreferences = () => {
    // Save cookie preferences logic here
    console.log('Cookie preferences saved:', cookiePreferences);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Cookie className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            How We Use Cookies and Similar Technologies
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
                <Cookie className="w-5 h-5 text-primary" />
                What Are Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing website traffic, and personalizing content.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This Cookie Policy explains how Sky Genesis Enterprise uses cookies and similar technologies 
                on our website and how you can manage your preferences.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Cookie Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Types of Cookies We Use
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Necessary Cookies */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  Necessary Cookies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 text-sm">
                  Essential for the website to function properly. Cannot be disabled.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Always Active</span>
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Authentication and security
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Shopping cart contents
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Privacy preferences
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Load balancing
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Analytics Cookies */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Button
                  variant="ghost"
                  onClick={() => toggleSection('analytics')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 rounded-none border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">Analytics Cookies</h3>
                      <p className="text-muted-foreground text-sm mt-1">Help us understand how visitors interact with our website.</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transform transition-transform ${
                      expandedSection === 'analytics' ? 'rotate-180' : ''
                    }`}
                  />
                 </Button>
               </CardHeader>
                {expandedSection === 'analytics' && (
                  <CardContent className="pt-0">
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Page views and user behavior
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Time spent on pages
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Bounce rates and exit pages
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Device and browser information
                      </li>
                     </ul>
                   </CardContent>
                 )}
                </Card>

            {/* Functional Cookies */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Button
                  variant="ghost"
                  onClick={() => toggleSection('functional')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 rounded-none border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Settings className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">Functional Cookies</h3>
                      <p className="text-muted-foreground text-sm mt-1">Enable enhanced functionality and personalization.</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transform transition-transform ${
                      expandedSection === 'functional' ? 'rotate-180' : ''
                    }`}
                  />
                 </Button>
               </CardHeader>
                 {expandedSection === 'functional' && (
                  <CardContent className="pt-0">
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Language preferences
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Regional settings
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Custom features
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        Theme preferences
                      </li>
                    </ul>
                  </CardContent>
                 )}
               </Card>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Third-Party Services
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                Third-Party Cookie Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We use third-party services that may set their own cookies on your device. These include:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Database className="w-5 h-5 text-primary" />
                      Google Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Website analytics and performance monitoring
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Users className="w-5 h-5 text-primary" />
                      LinkedIn Pixel
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Social media advertising and analytics
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Managing Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Managing Your Cookie Preferences
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-primary" />
                Cookie Management Options
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Browser Settings</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    View stored cookies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Delete individual cookies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Block third-party cookies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Receive notifications when cookies are set
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Cookie Consent Banner</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you first visit our website, you&apos;ll see a cookie consent banner where you can 
                  customize your preferences for different cookie categories.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-blue-800 dark:text-blue-200 text-sm font-medium">
                    <strong>Transparency:</strong> You can review and modify your cookie preferences at any time through this page.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cookie Lifespan */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Cookie Lifespan
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                Cookie Duration & Expiration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Trash2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Session Cookies</div>
                      <div className="text-foreground font-medium">Deleted when browser closes</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground bg-red-100 dark:bg-red-900/20 px-2 py-1 rounded">Temporary</div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Persistent Cookies</div>
                      <div className="text-foreground font-medium">30 days to 1 year</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground bg-blue-100 dark:bg-blue-900/20 px-2 py-1 rounded">Stored</div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Authentication Cookies</div>
                      <div className="text-foreground font-medium">24 hours</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground bg-orange-100 dark:bg-orange-900/20 px-2 py-1 rounded">Security</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Your Rights & Choices
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                Cookie Rights Under GDPR
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under GDPR and other data protection regulations, you have the right to:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Access information about cookies we use
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Withdraw consent at any time
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Request deletion of your data
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  File a complaint with supervisory authorities
                </li>
              </ul>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                  <strong>Your Control:</strong> You can accept or reject non-essential cookies through our consent banner and manage preferences at any time.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you have questions about this Cookie Policy or how we handle cookies, please contact our privacy team:
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
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Address</div>
                      <div className="text-foreground font-medium">Rue de la Loi 1, 1000 Brussels, Belgium</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
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

        {/* Cookie Preferences Manager */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold text-foreground mb-6">
    Cookie Preferences Manager
  </h2>

  <Card>
    <CardContent className="p-6">
      <div className="grid md:grid-cols-2 gap-6 mb-6">

        <div className="text-center">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground mb-2">Current Settings</h3>

            <div className="space-y-2">

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Necessary</span>
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Analytics</span>
                <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Marketing</span>
                <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Functional</span>
                <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={savePreferences}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Save Preferences
        </button>

        <button
          onClick={() =>
            setCookiePreferences({
              necessary: true,
              analytics: true,
              marketing: true,
              functional: true,
            })
          }
          className="bg-muted hover:bg-muted/80 text-muted-foreground px-6 py-3 rounded-lg font-medium transition-colors border border-border"
        >
          Accept All
        </button>

        <button
          onClick={() =>
            setCookiePreferences({
              necessary: true,
              analytics: false,
              marketing: false,
              functional: false,
            })
          }
          className="bg-background hover:bg-muted text-foreground px-6 py-3 rounded-lg font-medium transition-colors border border-border"
        >
          Only Necessary
        </button>
      </div>

    </CardContent>
  </Card>

</section>

      </div>
    </div>
  );
}