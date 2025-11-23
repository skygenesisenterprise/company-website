'use client';

import { useState } from 'react';

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            How We Collect, Use, and Protect Your Personal Information
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Our Commitment to Privacy
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            At Sky Genesis Enterprise, we are committed to protecting your privacy and ensuring the 
            security of your personal information. This Privacy Policy explains how we collect, use, 
            store, and protect your data when you use our website, products, and services.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We comply with the General Data Protection Regulation (GDPR) and other applicable 
            data protection laws in the jurisdictions where we operate.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Information We Collect
          </h2>
          
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">
                Personal Information
              </h3>
              <p className="text-gray-400 mb-3">
                We may collect the following personal information:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Full name and contact details (email, phone, address)</li>
                <li>• Professional information (company, job title, industry)</li>
                <li>• Account credentials and authentication data</li>
                <li>• Communication preferences</li>
              </ul>
            </div>

            {/* Usage Data */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">
                Usage Data
              </h3>
              <p className="text-gray-400 mb-3">
                We automatically collect information about how you use our services:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• IP address and device information</li>
                <li>• Browser type and operating system</li>
                <li>• Pages visited and time spent on our website</li>
                <li>• Click patterns and navigation paths</li>
                <li>• Error reports and crash data</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">
                Cookies and Tracking Technologies
              </h3>
              <p className="text-gray-400 mb-3">
                We use cookies and similar technologies to:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Remember your preferences and settings</li>
                <li>• Analyze website traffic and user behavior</li>
                <li>• Provide personalized content and recommendations</li>
                <li>• Ensure security and prevent fraud</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            How We Use Your Information
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Service Provision",
                description: "To provide, maintain, and improve our services",
                icon: "🔧"
              },
              {
                title: "Communication",
                description: "To respond to your inquiries and send important updates",
                icon: "💬"
              },
              {
                title: "Personalization",
                description: "To customize your experience and provide relevant content",
                icon: "⚙️"
              },
              {
                title: "Analytics",
                description: "To understand usage patterns and improve our offerings",
                icon: "📊"
              },
              {
                title: "Security",
                description: "To protect our services and prevent fraudulent activities",
                icon: "🔒"
              },
              {
                title: "Legal Compliance",
                description: "To comply with legal obligations and regulatory requirements",
                icon: "⚖️"
              }
            ].map((use, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{use.icon}</span>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">{use.title}</h3>
                    <p className="text-gray-400 text-sm">{use.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Basis for Processing */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Legal Basis for Processing
          </h2>
          
          <div className="space-y-4">
            {[
              {
                basis: "Contractual Necessity",
                description: "Processing is necessary for the performance of our contract with you",
                examples: ["Service delivery", "Account management", "Customer support"]
              },
              {
                basis: "Legitimate Interest",
                description: "Processing is necessary for our legitimate business interests",
                examples: ["Network security", "Fraud prevention", "Service improvement"]
              },
              {
                basis: "Consent",
                description: "You have given explicit consent for the processing",
                examples: ["Marketing communications", "Analytics cookies", "Newsletter subscription"]
              },
              {
                basis: "Legal Obligation",
                description: "Processing is necessary to comply with legal requirements",
                examples: ["Tax reporting", "Regulatory compliance", "Legal proceedings"]
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 rounded-lg border border-gray-800">
                <button
                  onClick={() => toggleSection(`basis-${index}`)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-medium text-white">{item.basis}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${
                      expandedSection === `basis-${index}` ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSection === `basis-${index}` && (
                  <div className="px-6 pb-4">
                    <h4 className="text-white font-medium mb-2">Examples:</h4>
                    <ul className="text-gray-400 space-y-1">
                      {item.examples.map((example, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-blue-400 mr-2">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Data Sharing and Disclosure */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Data Sharing and Disclosure
          </h2>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-medium text-white mb-4">We may share your data with:</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">Service Providers</h4>
                <p className="text-gray-400 text-sm">
                  Third-party companies that help us operate our business (cloud providers, 
                  payment processors, analytics services)
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2">Business Partners</h4>
                <p className="text-gray-400 text-sm">
                  Trusted partners with whom we jointly offer services
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2">Legal Authorities</h4>
                <p className="text-gray-400 text-sm">
                  When required by law, court order, or government regulation
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2">Business Transfers</h4>
                <p className="text-gray-400 text-sm">
                  In connection with mergers, acquisitions, or asset sales
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mt-4">
              We never sell your personal information to third parties for marketing purposes.
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Data Security Measures
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">Technical Security</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• End-to-end encryption for data transmission</li>
                <li>• AES-256 encryption for data at rest</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• Multi-factor authentication for access control</li>
                <li>• Intrusion detection and prevention systems</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">Organizational Security</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Employee background checks and training</li>
                <li>• Need-to-know access principles</li>
                <li>• Regular security awareness programs</li>
                <li>• Incident response procedures</li>
                <li>• Business continuity and disaster recovery plans</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Data Retention Periods
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-800">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left p-4 text-white font-medium">Data Type</th>
                  <th className="text-left p-4 text-white font-medium">Retention Period</th>
                  <th className="text-left p-4 text-white font-medium">Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Account Information</td>
                  <td className="p-4 text-gray-300">Until account deletion</td>
                  <td className="p-4 text-gray-300">Contractual necessity</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Transaction Data</td>
                  <td className="p-4 text-gray-300">7 years</td>
                  <td className="p-4 text-gray-300">Tax and legal requirements</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Analytics Data</td>
                  <td className="p-4 text-gray-300">26 months</td>
                  <td className="p-4 text-gray-300">Legitimate interest</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Marketing Communications</td>
                  <td className="p-4 text-gray-300">Until consent withdrawn</td>
                  <td className="p-4 text-gray-300">Consent</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Support Tickets</td>
                  <td className="p-4 text-gray-300">3 years</td>
                  <td className="p-4 text-gray-300">Service improvement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Your Privacy Rights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                right: "Access",
                description: "Request a copy of your personal data",
                action: "Submit a data access request"
              },
              {
                right: "Rectification",
                description: "Correct inaccurate or incomplete data",
                action: "Update your profile or contact us"
              },
              {
                right: "Erasure",
                description: "Request deletion of your personal data",
                action: "Submit a deletion request"
              },
              {
                right: "Portability",
                description: "Receive your data in a machine-readable format",
                action: "Request data export"
              },
              {
                right: "Restriction",
                description: "Limit how we process your data",
                action: "Submit a restriction request"
              },
              {
                right: "Objection",
                description: "Object to processing of your data",
                action: "Submit an objection request"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-medium text-white mb-2">
                  Right to {item.right}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                <p className="text-blue-400 text-sm font-medium">{item.action}</p>
              </div>
            ))}
          </div>
        </section>

        {/* International Data Transfers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            International Data Transfers
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Your personal data may be transferred to and processed in countries outside the European 
            Economic Area (EEA). We ensure adequate protection through:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>• Standard Contractual Clauses (SCCs) approved by the European Commission</li>
            <li>• Binding Corporate Rules (BCRs) for intra-group transfers</li>
            <li>• Adequacy decisions for countries with EU-approved data protection laws</li>
            <li>• Additional technical and organizational security measures</li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Children&apos;s Privacy
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300 leading-relaxed mb-4">
              Our services are not intended for individuals under the age of 16. We do not knowingly 
              collect personal information from children under 16. If we become aware that we have 
              collected personal information from a child under 16 without parental consent, we 
              will take steps to remove that information immediately.
            </p>
            <p className="text-gray-300">
              Parents or guardians who believe their child has provided personal information to us 
              should contact us immediately at privacy@skygenesisenterprise.com.
            </p>
          </div>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices, 
            legal requirements, or business operations. We will notify you of any material changes 
            by posting the updated policy on our website and sending you an email notification.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            If you have questions about this Privacy Policy or want to exercise your privacy rights, 
            please contact our Data Protection Officer:
          </p>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="space-y-3">
              <div>
                <span className="text-gray-400">Email:</span>
                <span className="text-white ml-2">privacy@skygenesisenterprise.com</span>
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
                <span className="text-gray-400">Response Time:</span>
                <span className="text-white ml-2">Within 30 days</span>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            This Privacy Policy was last updated on {new Date().toLocaleDateString()} 
            and is effective as of that date.
          </p>
        </div>
      </div>
    </div>
  );
}