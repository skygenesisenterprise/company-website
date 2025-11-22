'use client';

import { useState } from 'react';

export default function CookiesPolicy() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

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
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            What Are Cookies
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Cookies are small text files that are stored on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences, 
            analyzing website traffic, and personalizing content.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This Cookie Policy explains how Sky Genesis Enterprise uses cookies and similar technologies 
            on our website and how you can manage your preferences.
          </p>
        </section>

        {/* Cookie Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Types of Cookies We Use
          </h2>
          
          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Necessary Cookies
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Essential for the website to function properly. Cannot be disabled.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.necessary}
                  disabled
                  className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded"
                />
              </div>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Authentication and security</li>
                <li>• Shopping cart contents</li>
                <li>• Privacy preferences</li>
              </ul>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.analytics}
                  onChange={(e) => handleCookieChange('analytics', e.target.checked)}
                  className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
              </div>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Page views and user behavior</li>
                <li>• Time spent on pages</li>
                <li>• Bounce rates and exit pages</li>
              </ul>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Marketing Cookies
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Used to deliver personalized advertisements and content.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.marketing}
                  onChange={(e) => handleCookieChange('marketing', e.target.checked)}
                  className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
              </div>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Personalized ads</li>
                <li>• Cross-site tracking</li>
                <li>• Remarketing campaigns</li>
              </ul>
            </div>

            {/* Functional Cookies */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Functional Cookies
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Enable enhanced functionality and personalization.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.functional}
                  onChange={(e) => handleCookieChange('functional', e.target.checked)}
                  className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
              </div>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Language preferences</li>
                <li>• Regional settings</li>
                <li>• Custom features</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Third-Party Cookies
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We use third-party services that may set their own cookies on your device. These include:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <h4 className="font-medium text-white mb-2">Google Analytics</h4>
              <p className="text-gray-400 text-sm">
                Website analytics and performance monitoring
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <h4 className="font-medium text-white mb-2">LinkedIn Pixel</h4>
              <p className="text-gray-400 text-sm">
                Social media advertising and analytics
              </p>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Managing Your Cookie Preferences
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">
                Browser Settings
              </h3>
              <p className="text-gray-300 leading-relaxed">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="text-gray-400 mt-2 space-y-1">
                <li>• View stored cookies</li>
                <li>• Delete individual cookies</li>
                <li>• Block third-party cookies</li>
                <li>• Receive notifications when cookies are set</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-2">
                Cookie Consent Banner
              </h3>
              <p className="text-gray-300 leading-relaxed">
                When you first visit our website, you&apos;ll see a cookie consent banner where you can 
                customize your preferences for different cookie categories.
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Lifespan */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Cookie Lifespan
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-800">
              <span className="text-gray-300">Session Cookies</span>
              <span className="text-gray-400">Deleted when browser closes</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-800">
              <span className="text-gray-300">Persistent Cookies</span>
              <span className="text-gray-400">30 days to 1 year</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-300">Authentication Cookies</span>
              <span className="text-gray-400">24 hours</span>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Your Rights
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Under GDPR and other data protection regulations, you have the right to:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>• Access information about cookies we use</li>
            <li>• Withdraw consent at any time</li>
            <li>• Request deletion of your data</li>
            <li>• File a complaint with supervisory authorities</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you have questions about this Cookie Policy or how we handle cookies, please contact us:
          </p>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="space-y-2">
              <p className="text-gray-300">
                <strong>Email:</strong> privacy@skygenesisenterprise.com
              </p>
              <p className="text-gray-300">
                <strong>Address:</strong> Brussels, Belgium
              </p>
              <p className="text-gray-300">
                <strong>Phone:</strong> +32 2 123 45 67
              </p>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={savePreferences}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Save My Preferences
          </button>
          <button
            onClick={() => setCookiePreferences({
              necessary: true,
              analytics: true,
              marketing: true,
              functional: true,
            })}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Accept All Cookies
          </button>
          <button
            onClick={() => setCookiePreferences({
              necessary: true,
              analytics: false,
              marketing: false,
              functional: false,
            })}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-gray-600"
          >
            Only Necessary Cookies
          </button>
        </div>
      </div>
    </div>
  );
}