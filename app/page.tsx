export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Sky Genesis Enterprise
            </h1>
            <p className="text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Innovating the future with cutting-edge technology solutions that drive your business forward.
            </p>
          </div>
          <div className="space-x-6">
            <a href="/auth/login" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </a>
            <a href="#features" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
       <section id="features" className="py-24 bg-gray-800">
         <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold mb-6">Why Choose Sky Genesis?</h2>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
               We deliver exceptional technology solutions that transform businesses and drive innovation.
             </p>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
             <div className="text-center p-8 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300">
               <div className="text-6xl mb-6">🚀</div>
               <h3 className="text-2xl font-semibold mb-4 text-blue-400">Lightning Fast</h3>
               <p className="text-gray-300">Rapid development and deployment of cutting-edge solutions.</p>
             </div>
             <div className="text-center p-8 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300">
               <div className="text-6xl mb-6">🔧</div>
               <h3 className="text-2xl font-semibold mb-4 text-purple-400">Expert Craftsmanship</h3>
               <p className="text-gray-300">High-quality code and architecture that scales with your business.</p>
             </div>
             <div className="text-center p-8 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300">
               <div className="text-6xl mb-6">🤝</div>
               <h3 className="text-2xl font-semibold mb-4 text-green-400">Trusted Partnership</h3>
               <p className="text-gray-300">Building lasting relationships through trust and collaboration.</p>
             </div>
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
           <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Let's build the future together. Contact us to start your next project.</p>
           <a href="mailto:contact@skygenesisenterprise.com" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
             Get In Touch
           </a>
         </div>
       </section>
    </div>
  );
}
