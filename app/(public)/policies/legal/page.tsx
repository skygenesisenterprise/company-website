'use client';

import { useState } from 'react';

export default function LegalNotice() {
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
            Legal Notice
          </h1>
          <p className="text-gray-400 text-lg">
            Legal Information and Disclaimer
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Company Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Company Information
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Corporate Details</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Company Name:</span>
                    <span className="text-white ml-2">Sky Genesis Enterprise S.A.</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Legal Form:</span>
                    <span className="text-white ml-2">Société Anonyme (Public Limited Company)</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Registration Number:</span>
                    <span className="text-white ml-2">BE 0123.456.789</span>
                  </div>
                  <div>
                    <span className="text-gray-400">VAT Number:</span>
                    <span className="text-white ml-2">BE 0123.456.789</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Contact Information</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Registered Office:</span>
                    <span className="text-white ml-2">Brussels, Belgium</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Business Address:</span>
                    <span className="text-white ml-2">Rue de la Loi 1, 1000 Brussels</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Phone:</span>
                    <span className="text-white ml-2">+32 2 123 45 67</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white ml-2">legal@skygenesisenterprise.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Management & Representation
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-medium text-white mb-4">Board of Directors</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-800">
                <span className="text-gray-300">Chief Executive Officer</span>
                <span className="text-white">Jean-Pierre Dubois</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-800">
                <span className="text-gray-300">Chief Technology Officer</span>
                <span className="text-white">Marie Laurent</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-800">
                <span className="text-gray-300">Chief Financial Officer</span>
                <span className="text-white">Pierre Martin</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-300">Chief Legal Officer</span>
                <span className="text-white">Sophie Bernard</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              The company is legally represented by any two directors acting jointly.
            </p>
          </div>
        </section>

        {/* Business Activities */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Business Activities
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-medium text-white mb-4">Primary Activities</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Development and provision of enterprise software solutions</li>
              <li>• Cloud computing and infrastructure services</li>
              <li>• Data processing and analytics services</li>
              <li>• Cybersecurity consulting and implementation</li>
              <li>• Digital transformation consulting</li>
              <li>• Software as a Service (SaaS) platforms</li>
            </ul>
            
            <h3 className="text-lg font-medium text-white mb-4 mt-6">Secondary Activities</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Technical training and certification programs</li>
              <li>• Research and development in emerging technologies</li>
              <li>• Strategic consulting services</li>
            </ul>
          </div>
        </section>

        {/* Legal Disclaimers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Legal Disclaimers
          </h2>
          
          <div className="space-y-4">
            {[
              {
                title: "Website Content",
                content: "The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information."
              },
              {
                title: "Professional Services",
                content: "Our services are provided on an 'as is' basis. We do not guarantee specific outcomes or results. Clients should seek independent professional advice before making business decisions based on our services or recommendations."
              },
              {
                title: "Third-Party Links",
                content: "Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. Inclusion of any link does not imply endorsement."
              },
              {
                title: "Intellectual Property",
                content: "All content on this website, including text, graphics, logos, and software, is the property of Sky Genesis Enterprise or its content suppliers and is protected by intellectual property laws. Unauthorized use is prohibited."
              },
              {
                title: "Limitation of Liability",
                content: "To the fullest extent permitted by law, Sky Genesis Enterprise shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website."
              }
            ].map((disclaimer, index) => (
              <div key={index} className="bg-gray-900 rounded-lg border border-gray-800">
                <button
                  onClick={() => toggleSection(`disclaimer-${index}`)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-lg font-medium text-white">{disclaimer.title}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${
                      expandedSection === `disclaimer-${index}` ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSection === `disclaimer-${index}` && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 leading-relaxed">{disclaimer.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Jurisdiction & Applicable Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Jurisdiction & Applicable Law
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Governing Law</h3>
                <p className="text-gray-300">
                  This website and our services are governed by the laws of Belgium. Any disputes 
                  arising from the use of our services shall be subject to the exclusive jurisdiction 
                  of the courts of Brussels, Belgium.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2">European Union Regulations</h3>
                <p className="text-gray-300">
                  As a European company, we comply with all applicable EU regulations including 
                  GDPR, ePrivacy Directive, and Digital Services Act.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consumer Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Consumer Protection
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-medium text-white mb-3">Your Rights</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Right to clear and transparent information about our services</li>
              <li>• Right to cancel contracts within the statutory cooling-off period</li>
              <li>• Right to fair contract terms and conditions</li>
              <li>• Right to effective dispute resolution mechanisms</li>
              <li>• Right to data protection and privacy</li>
            </ul>
            
            <h3 className="text-lg font-medium text-white mb-3 mt-6">Dispute Resolution</h3>
            <p className="text-gray-300 mb-3">
              We are committed to resolving disputes amicably. If you have a complaint:
            </p>
            <ol className="text-gray-300 space-y-2">
              <li>1. Contact our customer service at support@skygenesisenterprise.com</li>
              <li>2. If unresolved, contact our legal department at legal@skygenesisenterprise.com</li>
              <li>3. You may also contact the Belgian Consumer Protection Authority</li>
              <li>4. EU residents can use the Online Dispute Resolution (ODR) platform</li>
            </ol>
          </div>
        </section>

        {/* Financial Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Financial Information
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Bank Details</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Bank:</span>
                    <span className="text-white ml-2">BNP Paribas Fortis</span>
                  </div>
                  <div>
                    <span className="text-gray-400">IBAN:</span>
                    <span className="text-white ml-2">BE12 3456 7890 1234</span>
                  </div>
                  <div>
                    <span className="text-gray-400">BIC:</span>
                    <span className="text-white ml-2">BPOTBEB1</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Financial Oversight</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Auditor:</span>
                    <span className="text-white ml-2">PwC Belgium</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Tax ID:</span>
                    <span className="text-white ml-2">BE 0123.456.789</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Chamber of Commerce:</span>
                    <span className="text-white ml-2">Brussels</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Legal Matters */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Legal Contact
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            For all legal matters, including contracts, compliance, disputes, or regulatory inquiries, 
            please contact our legal department:
          </p>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="space-y-3">
              <div>
                <span className="text-gray-400">Email:</span>
                <span className="text-white ml-2">legal@skygenesisenterprise.com</span>
              </div>
              <div>
                <span className="text-gray-400">Phone:</span>
                <span className="text-white ml-2">+32 2 123 45 67 (Legal Department)</span>
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

        {/* Last Updated */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            This Legal Notice was last updated on {new Date().toLocaleDateString()} 
            and is subject to change without notice. Please review this page periodically 
            for any updates.
          </p>
        </div>
      </div>
    </div>
  );
}