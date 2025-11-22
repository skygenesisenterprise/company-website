'use client';

import { useState } from 'react';

export default function TermsOfService() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">
            Terms and Conditions for Using Sky Genesis Enterprise Services
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Agreement */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Agreement to Terms
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300 leading-relaxed mb-4">
              By accessing and using Sky Genesis Enterprise&apos;s website, products, or services, 
              you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree 
              to these Terms, you may not access or use our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              These Terms constitute a legally binding agreement between you (&quot;User&quot; or &quot;Customer&quot;) 
              and Sky Genesis Enterprise S.A. (&quot;Company,&quot; &quot;We,&quot; or &quot;Us&quot;).
            </p>
          </div>
        </section>

        {/* Services Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Aether Office",
                description: "Collaborative workspace and productivity suite",
                features: ["Document management", "Team collaboration", "Project tracking"]
              },
              {
                title: "Cloud Infrastructure",
                description: "Enterprise-grade cloud computing services",
                features: ["Virtual servers", "Storage solutions", "Networking"]
              },
              {
                title: "Security Solutions",
                description: "Cybersecurity and compliance services",
                features: ["Threat detection", "Data protection", "Compliance monitoring"]
              },
              {
                title: "Consulting Services",
                description: "Digital transformation and strategy consulting",
                features: ["Strategic planning", "Implementation support", "Training"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-medium text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                <ul className="text-gray-500 text-xs space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
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
              <div key={index} className="bg-gray-900 rounded-lg border border-gray-800">
                <button
                  onClick={() => toggleSection(`responsibility-${index}`)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-lg font-medium text-white">{responsibility.title}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${
                      expandedSection === `responsibility-${index}` ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSection === `responsibility-${index}` && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 leading-relaxed">{responsibility.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Payment Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Payment Terms
          </h2>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Subscription Plans</h3>
                <p className="text-gray-300 mb-3">
                  Our services are offered on subscription basis with the following payment terms:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Monthly and annual billing cycles available</li>
                  <li>• Payments processed in advance of service period</li>
                  <li>• Auto-renewal unless cancelled before renewal date</li>
                  <li>• Prices subject to change with 30-day notice</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Payment Methods</h3>
                <p className="text-gray-300 mb-3">
                  We accept the following payment methods:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Credit/Debit cards (Visa, MasterCard, American Express)</li>
                  <li>• Bank transfers (for enterprise customers)</li>
                  <li>• SEPA direct debit (European customers)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Refund Policy</h3>
                <p className="text-gray-300 mb-3">
                  Refunds are handled as follows:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• 14-day money-back guarantee for new subscriptions</li>
                  <li>• Pro-rated refunds for annual plans cancelled within 30 days</li>
                  <li>• No refunds for monthly plans after 14 days</li>
                  <li>• Refunds processed within 10 business days</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Level Agreement */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Service Level Agreement (SLA)
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-800">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left p-4 text-white font-medium">Service</th>
                  <th className="text-left p-4 text-white font-medium">Uptime Target</th>
                  <th className="text-left p-4 text-white font-medium">Response Time</th>
                  <th className="text-left p-4 text-white font-medium">Credit for Failure</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Core Services</td>
                  <td className="p-4 text-gray-300">99.9%</td>
                  <td className="p-4 text-gray-300">&lt; 1 hour</td>
                  <td className="p-4 text-gray-300">10% of monthly fee</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">API Services</td>
                  <td className="p-4 text-gray-300">99.5%</td>
                  <td className="p-4 text-gray-300">&lt; 4 hours</td>
                  <td className="p-4 text-gray-300">5% of monthly fee</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Support Response</td>
                  <td className="p-4 text-gray-300">N/A</td>
                  <td className="p-4 text-gray-300">&lt; 24 hours</td>
                  <td className="p-4 text-gray-300">Service credit</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Emergency Issues</td>
                  <td className="p-4 text-gray-300">N/A</td>
                  <td className="p-4 text-gray-300">&lt; 1 hour</td>
                  <td className="p-4 text-gray-300">Priority handling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Intellectual Property Rights
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">Our Intellectual Property</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                All content, features, and functionality of our services are owned by Sky Genesis Enterprise 
                and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Software code and algorithms</li>
                <li>• User interface designs and layouts</li>
                <li>• Documentation and training materials</li>
                <li>• Brand names, logos, and trademarks</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">Your Content</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                You retain ownership of content you upload or create using our services. By using our 
                services, you grant us a license to use, modify, and distribute your content as necessary 
                to provide the services.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• You grant us a worldwide, non-exclusive license</li>
                <li>• License is limited to providing our services</li>
                <li>• You can terminate this license by deleting your content</li>
                <li>• We respect your intellectual property rights</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Data Protection and Privacy
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We are committed to protecting your personal data and privacy. Our data processing practices 
            comply with GDPR and other applicable data protection regulations.
          </p>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-medium text-white mb-3">Key Privacy Commitments</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• We collect only necessary personal data</li>
              <li>• We use data only for specified purposes</li>
              <li>• We implement appropriate security measures</li>
              <li>• We respect your data protection rights</li>
              <li>• We do not sell personal data to third parties</li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              For detailed information, please refer to our Privacy Policy.
            </p>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Limitation of Liability
          </h2>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-medium text-white mb-3">Our Liability</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              To the fullest extent permitted by law, our total liability for any claims arising from 
              or related to our services shall not exceed the amount you paid us in the 12 months 
              preceding the claim.
            </p>
            
            <h3 className="text-lg font-medium text-white mb-3 mt-6">Exclusions</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We shall not be liable for:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Indirect, incidental, or consequential damages</li>
              <li>• Loss of profits, revenue, or business opportunities</li>
              <li>• Data loss or corruption</li>
              <li>• Service interruptions beyond our control</li>
              <li>• Third-party service failures</li>
            </ul>
            
            <p className="text-gray-400 text-sm mt-4">
              Some jurisdictions do not allow exclusion of certain damages, so these exclusions may not apply to you.
            </p>
          </div>
        </section>

        {/* Termination */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Termination
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">Termination by You</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• You can terminate your account at any time</li>
                <li>• No cancellation fees for monthly plans</li>
                <li>• Pro-rated refund for annual plans</li>
                <li>• Data export available before termination</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">Termination by Us</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• For violation of these Terms</li>
                <li>• For non-payment of fees</li>
                <li>• For illegal or harmful activities</li>
                <li>• With 30-day notice for service changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Dispute Resolution
          </h2>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-medium text-white mb-3">Resolution Process</h3>
            <ol className="text-gray-300 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-medium">1.</span>
                <div>
                  <strong>Informal Resolution:</strong> Contact our support team to resolve issues informally
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-medium">2.</span>
                <div>
                  <strong>Formal Complaint:</strong> Submit written complaint to legal@skygenesisenterprise.com
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-medium">3.</span>
                <div>
                  <strong>Mediation:</strong> If unresolved, we agree to mediation through accredited mediator
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-medium">4.</span>
                <div>
                  <strong>Legal Action:</strong> Courts of Brussels, Belgium have exclusive jurisdiction
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Governing Law and Jurisdiction
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms of Service are governed by and construed in accordance with the laws of Belgium, 
              without regard to its conflict of law principles.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of 
              the courts of Brussels, Belgium.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For consumers, this does not affect your mandatory consumer protection rights under your 
              local laws.
            </p>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Changes to These Terms
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We may update these Terms from time to time to reflect changes in our services, legal requirements, 
            or business practices. We will notify you of any material changes by:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>• Posting updated Terms on our website</li>
            <li>• Sending email notification to registered users</li>
            <li>• Displaying prominent notice in our services</li>
            <li>• Providing at least 30 days notice for significant changes</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            Your continued use of our services after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            If you have questions about these Terms of Service, please contact us:
          </p>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="space-y-3">
              <div>
                <span className="text-gray-400">Email:</span>
                <span className="text-white ml-2">legal@skygenesisenterprise.com</span>
              </div>
              <div>
                <span className="text-gray-400">Phone:</span>
                <span className="text-white ml-2">+32 2 123 45 67</span>
              </div>
              <div>
                <span className="text-gray-400">Address:</span>
                <span className="text-white ml-2">Rue de la Loi 1, 1000 Brussels, Belgium</span>
              </div>
              <div>
                <span className="text-gray-400">Business Hours:</span>
                <span className="text-white ml-2">Monday - Friday, 9:00 - 18:00 CET</span>
              </div>
            </div>
          </div>
        </section>

        {/* Acceptance */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              By using our services, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Service.
            </h3>
            <p className="text-gray-400 text-sm">
              These Terms were last updated on {new Date().toLocaleDateString()} 
              and are effective as of that date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}