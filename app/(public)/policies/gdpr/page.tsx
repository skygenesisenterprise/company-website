'use client';

import { useState } from 'react';

export default function GDPRCompliance() {
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
            GDPR Compliance
          </h1>
          <p className="text-gray-400 text-lg">
            General Data Protection Regulation Compliance Statement
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Our Commitment to GDPR
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Sky Genesis Enterprise is committed to protecting the privacy and personal data of our customers, 
            users, and employees in compliance with the General Data Protection Regulation (GDPR) and other 
            applicable data protection laws.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This GDPR Compliance Statement outlines how we collect, use, store, and protect personal data 
            in accordance with GDPR requirements.
          </p>
        </section>

        {/* Key Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            GDPR Principles We Follow
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">
                Lawfulness, Fairness & Transparency
              </h3>
              <p className="text-gray-400 text-sm">
                We process personal data lawfully, fairly, and in a transparent manner.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">
                Purpose Limitation
              </h3>
              <p className="text-gray-400 text-sm">
                We collect data for specified, explicit, and legitimate purposes.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">
                Data Minimization
              </h3>
              <p className="text-gray-400 text-sm">
                We only collect and process data that is necessary for our purposes.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">
                Accuracy
              </h3>
              <p className="text-gray-400 text-sm">
                We ensure personal data is accurate and kept up to date.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">
                Storage Limitation
              </h3>
              <p className="text-gray-400 text-sm">
                We retain data only as long as necessary for the specified purposes.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-medium text-white mb-3">
                Integrity & Confidentiality
              </h3>
              <p className="text-gray-400 text-sm">
                We protect data using appropriate security measures.
              </p>
            </div>
          </div>
        </section>

        {/* Data Subject Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Your Rights Under GDPR
          </h2>
          
          <div className="space-y-4">
            {[
              {
                title: "Right to Information",
                description: "You have the right to be informed about how we collect and use your personal data."
              },
              {
                title: "Right of Access",
                description: "You can request access to the personal data we hold about you."
              },
              {
                title: "Right to Rectification",
                description: "You can request correction of inaccurate or incomplete personal data."
              },
              {
                title: "Right to Erasure",
                description: "You can request deletion of your personal data in certain circumstances."
              },
              {
                title: "Right to Restrict Processing",
                description: "You can request restriction of processing your personal data."
              },
              {
                title: "Right to Data Portability",
                description: "You can request transfer of your data to another service provider."
              },
              {
                title: "Right to Object",
                description: "You can object to processing of your personal data."
              },
              {
                title: "Rights Related to Automated Decision Making",
                description: "You have rights concerning automated decision making and profiling."
              }
            ].map((right, index) => (
              <div key={index} className="bg-gray-900 rounded-lg border border-gray-800">
                <button
                  onClick={() => toggleSection(`right-${index}`)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-lg font-medium text-white">{right.title}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${
                      expandedSection === `right-${index}` ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSection === `right-${index}` && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400">{right.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Data Processing Activities */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Data Processing Activities
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-lg border border-gray-800">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left p-4 text-white font-medium">Purpose</th>
                  <th className="text-left p-4 text-white font-medium">Legal Basis</th>
                  <th className="text-left p-4 text-white font-medium">Data Categories</th>
                  <th className="text-left p-4 text-white font-medium">Retention Period</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Service Provision</td>
                  <td className="p-4 text-gray-300">Contractual Necessity</td>
                  <td className="p-4 text-gray-300">Name, Email, Company</td>
                  <td className="p-4 text-gray-300">Contract Duration + 7 years</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Marketing</td>
                  <td className="p-4 text-gray-300">Consent</td>
                  <td className="p-4 text-gray-300">Email, Preferences</td>
                  <td className="p-4 text-gray-300">Until consent withdrawn</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Analytics</td>
                  <td className="p-4 text-gray-300">Legitimate Interest</td>
                  <td className="p-4 text-gray-300">Usage Data, IP Address</td>
                  <td className="p-4 text-gray-300">26 months</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Legal Compliance</td>
                  <td className="p-4 text-gray-300">Legal Obligation</td>
                  <td className="p-4 text-gray-300">All relevant data</td>
                  <td className="p-4 text-gray-300">As required by law</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Data Breach Procedures */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Data Breach Procedures
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            In the event of a personal data breach, we will:
          </p>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">1.</span>
                <span>Assess the breach within 72 hours of discovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">2.</span>
                <span>Notify relevant supervisory authorities if required</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">3.</span>
                <span>Inform affected individuals if there&apos;s a high risk to their rights</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">4.</span>
                <span>Document the breach and our response</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">5.</span>
                <span>Implement measures to prevent future breaches</span>
              </li>
            </ol>
          </div>
        </section>

        {/* International Data Transfers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            International Data Transfers
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            As a European company, we ensure that international data transfers comply with GDPR requirements:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>• We use Standard Contractual Clauses (SCCs) for transfers outside the EEA</li>
            <li>• We only transfer data to countries with adequate protection levels</li>
            <li>• We implement appropriate technical and organizational measures</li>
            <li>• We maintain records of all international data transfers</li>
          </ul>
        </section>

        {/* Data Protection Officer */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Data Protection Officer (DPO)
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300 mb-4">
              Our Data Protection Officer is responsible for:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Monitoring compliance with GDPR</li>
              <li>• Advising on data protection obligations</li>
              <li>• Providing guidance on Data Protection Impact Assessments</li>
              <li>• Coordinating with supervisory authorities</li>
            </ul>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Exercise Your Rights
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            To exercise your GDPR rights or if you have questions about our data protection practices, 
            please contact our Data Protection Officer:
          </p>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="space-y-3">
              <div>
                <span className="text-gray-400">Email:</span>
                <span className="text-white ml-2">dpo@skygenesisenterprise.com</span>
              </div>
              <div>
                <span className="text-gray-400">Phone:</span>
                <span className="text-white ml-2">+32 2 123 45 67</span>
              </div>
              <div>
                <span className="text-gray-400">Address:</span>
                <span className="text-white ml-2">Brussels, Belgium</span>
              </div>
              <div>
                <span className="text-gray-400">Response Time:</span>
                <span className="text-white ml-2">Within 30 days</span>
              </div>
            </div>
          </div>
        </section>

        {/* Complaint Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Complaint Process
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you believe we have violated your data protection rights, you have the right to:
          </p>
          <ol className="text-gray-300 space-y-2">
            <li>1. Contact our DPO directly at dpo@skygenesisenterprise.com</li>
            <li>2. File a complaint with the Belgian Data Protection Authority</li>
            <li>3. Seek judicial remedy in competent courts</li>
          </ol>
        </section>

        {/* Last Updated */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            This GDPR Compliance Statement was last updated on {new Date().toLocaleDateString()} 
            and is reviewed annually to ensure ongoing compliance.
          </p>
        </div>
      </div>
    </div>
  );
}