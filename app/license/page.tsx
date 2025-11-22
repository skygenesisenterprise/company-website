'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Download, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  ExternalLink,
  Scale,
  Users
} from 'lucide-react';

const LICENSE_TEXT = `Sky Genesis Enterprise Public License (SGE-PL-1.0)
Version 1.0

Copyright (c) 2025 Sky Genesis Enterprise

This license is a remastered version of the Apache License, Version 2.0,
specifically adapted for Sky Genesis Enterprise's open-source projects and
enterprise software solutions.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SGE-PL-1.0 Addendum

This license (SGE-PL-1.0) is a remastered version of Apache License 2.0,
enhanced for enterprise requirements while maintaining open-source principles.

Additional Terms:

1. Commercial Usage
   - Free for commercial use without restrictions
   - No limitations on deployment, revenue generation, or business applications
   - Attribution required in documentation and about sections

2. Contribution Guidelines
   - Contributions must follow Sky Genesis Enterprise coding standards
   - All contributions are licensed under SGE-PL-1.0 terms
   - Patent rights granted to users and contributors

3. Redistribution and Modification
   - You may redistribute modified versions under SGE-PL-1.0
   - Must include original license and copyright notices
   - Must clearly state modifications made
   - Derivative works must maintain SGE-PL-1.0 compatibility

4. Enterprise Compliance
   - SPDX License Identifier: SGE-PL-1.0
   - ISO/IEC 27001 compliant security standards
   - Linux Foundation Open Source Program best practices
   - Enterprise-grade audit and compliance requirements

5. Limitation of Liability
   - Software provided "as is" without warranties
   - Enterprise support available separately
   - No liability for data loss, system failures, or business interruption
   - Risk allocation appropriate for enterprise environments

6. Trademark Usage
   - "Sky Genesis Enterprise" name and logo are registered trademarks
   - Commercial branding requires explicit permission
   - Fair use allowed for attribution and compatibility purposes
   - Trademark guidelines available upon request

7. Support and Maintenance
   - Community support through official channels
   - Enterprise support contracts with SLA guarantees
   - Professional maintenance and update services
   - Priority support for commercial customers

8. International Compliance
   - GDPR-compliant data handling requirements
   - European digital sovereignty principles
   - Cross-border data transfer compliance
   - International export control adherence

This SGE-PL-1.0 license maintains Apache 2.0's permissive nature while adding
enterprise-specific provisions for professional adoption, ensuring transparency,
security, and compliance with international standards.`;

export default function LicensePage() {
  const [licenseExpanded, setLicenseExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(LICENSE_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy license text:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([LICENSE_TEXT], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SGE-PL-1.0-License.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
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
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            {/* Enterprise badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-12 hover:border-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Legal & Compliance
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Sky Genesis Enterprise
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Public License (SGE-PL-1.0)
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Discover the terms and conditions of using our software, our SGE-PL-1.0 remastered 
                Apache license, and compliance with industry standards including ISO, 
                SPDX, and Linux Foundation guidelines.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20 px-4">
              <button
                onClick={handleDownload}
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                Download License
                <Download className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setLicenseExpanded(!licenseExpanded)}
                className="border border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
              >
                {licenseExpanded ? 'Hide License Text' : 'View License Text'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">License Overview</h2>
              <p className="text-gray-400 text-lg">
                A remastered Apache 2.0 license (SGE-PL-1.0) enhanced for enterprise requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Permissive</h3>
                <p className="text-gray-400">
                  Free for commercial use, modification, and distribution with minimal restrictions
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Contribution-Friendly</h3>
                <p className="text-gray-400">
                  Encourages community contributions with clear patent grants and attribution
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise-Ready</h3>
                <p className="text-gray-400">
                  Compliant with ISO, SPDX, and Linux Foundation standards for professional use
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full License Text */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-2">Full License Text</h2>
                <p className="text-gray-400">
                  Complete license terms and conditions
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setLicenseExpanded(!licenseExpanded)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-medium">
                  {licenseExpanded ? 'Hide License Text' : 'Show License Text'}
                </span>
                {licenseExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {licenseExpanded && (
                <div className="border-t border-gray-800">
                  <div className="p-6 max-h-96 overflow-y-auto">
                    <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap leading-relaxed">
                      {LICENSE_TEXT}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Key Terms</h2>
              <p className="text-gray-400 text-lg">
                Important clauses and conditions you should know
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Commercial Usage</h3>
                <p className="text-gray-300">
                  Free for commercial use without restrictions on deployment, revenue generation, or business applications. 
                  Attribution required in documentation and about sections.
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Attribution</h3>
                <p className="text-gray-300">
                  Must include original copyright notices and license terms. Clear attribution to Sky Genesis Enterprise 
                  required in all distributions and derivative works.
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Modification & Redistribution</h3>
                <p className="text-gray-300">
                  You may modify and redistribute the software. All modifications must be clearly stated, and 
                  derivative works must be licensed under the same terms.
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Limitation of Liability</h3>
                <p className="text-gray-300">
                  Software provided &quot;as is&quot; without warranties. No liability for data loss, system failures, 
                  or business interruption. Enterprise support available separately.
                </p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-red-400">Compliance Standards</h3>
                <p className="text-gray-300">
                  SPDX License Identifier: SGE-PL-1.0. Compliant with ISO/IEC 27001 security 
                  standards and Linux Foundation Open Source Program best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Standards & References */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Related Standards & References</h2>
              <p className="text-gray-400 text-lg">
                Official standards and documentation that inform our license
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="https://www.apache.org/licenses/LICENSE-2.0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      Apache License 2.0
                    </h3>
                    <p className="text-gray-400 text-sm">
                      The base license our custom license extends
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="https://spdx.org/licenses/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                      SPDX License List
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Standardized license identification and metadata
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="https://www.linuxfoundation.org/legal/open-source-guidelines"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                      Linux Foundation Licensing
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Open source program best practices and guidelines
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="https://www.iso.org/isoiec-27001-information-security.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                      ISO/IEC 27001
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Information security management standards
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}