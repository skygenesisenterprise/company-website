import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sky Genesis Enterprise</h3>
            <p className="text-gray-300 dark:text-gray-400">
              Innovating the future with technology solutions that drive success.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition">Home</Link></li>
              <li><Link href="/blog" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition">Blog</Link></li>
              <li><Link href="/licences" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition">Licences</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition">Web Development</a></li>
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition">API Development</a></li>
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 dark:text-gray-400 mb-2">Email: contact@skygenesisenterprise.com</p>
            <p className="text-gray-300 dark:text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 dark:text-gray-400">
            © {new Date().getFullYear()} Sky Genesis Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}