export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-block p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-8">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Innovating the Future<br/>of Technology
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-slate-300 leading-relaxed">
            Sky Genesis Enterprise delivers cutting-edge solutions powering the next generation of global innovation and sovereign technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="/products" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore Products
            </a>
            <a href="/governance" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Learn More
            </a>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-2xl">🔗</span>
              <span className="text-sm font-medium">API</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-2xl">☁️</span>
              <span className="text-sm font-medium">Cloud</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-2xl">📡</span>
              <span className="text-sm font-medium">Telecom</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-2xl">🔧</span>
              <span className="text-sm font-medium">SDK</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-2xl">🏛️</span>
              <span className="text-sm font-medium">Governance</span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">Redefining Enterprise Technology</h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Sky Genesis Enterprise makes technological sovereignty simple again through federated innovation and global governance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400">Instant Innovation</h3>
              <p className="text-slate-600 dark:text-slate-300">Rapid deployment of sovereign technologies with zero vendor lock-in.</p>
            </div>
            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6">🔒</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Sovereign Security</h3>
              <p className="text-slate-600 dark:text-slate-300">Federated governance ensuring data sovereignty and compliance across borders.</p>
            </div>
            <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6">🌍</div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Global Scale</h3>
              <p className="text-slate-600 dark:text-slate-300">Unified platform powering international operations and cross-border collaboration.</p>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-slate-900 dark:bg-slate-800 rounded-xl p-8 shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-slate-400 text-sm">Sky Genesis API Integration</span>
            </div>
            <pre className="text-slate-300 overflow-x-auto">
              <code>{`import { SkyGenesisAPI } from '@skygenesis/enterprise';

const client = new SkyGenesisAPI({
  federation: 'eu-west',
  governance: 'sovereign'
});

const result = await client.deploy({
  service: 'telecom-infrastructure',
  region: 'global'
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Services Section */}
       <section className="bg-gray-900 py-24">
         <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold mb-6">Our Services</h2>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
               Comprehensive technology solutions tailored to meet your business needs and drive growth.
             </p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 border border-gray-700">
               <div className="text-4xl mb-4">🌐</div>
               <h3 className="text-2xl font-semibold mb-4 text-blue-400">Web Development</h3>
               <p className="text-gray-300">Custom web applications built with modern frameworks and best practices.</p>
             </div>
             <div className="p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 border border-gray-700">
               <div className="text-4xl mb-4">🔌</div>
               <h3 className="text-2xl font-semibold mb-4 text-purple-400">API Development</h3>
               <p className="text-gray-300">Robust and scalable API solutions for seamless system integration.</p>
             </div>
             <div className="p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 border border-gray-700">
               <div className="text-4xl mb-4">💡</div>
               <h3 className="text-2xl font-semibold mb-4 text-green-400">Consulting</h3>
               <p className="text-gray-300">Expert advice and strategic planning for your technology initiatives.</p>
             </div>
           </div>
         </div>
       </section>

      {/* Contact Section */}
       <section className="py-24 bg-gray-800">
         <div className="container mx-auto px-4 text-center">
           <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Let&apos;s build the future together. Contact us to start your next project.</p>
           <a href="mailto:contact@skygenesisenterprise.com" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
             Get In Touch
           </a>
         </div>
       </section>
    </div>
  );
}
