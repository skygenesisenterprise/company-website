'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Sky Genesis
            </Link>
          </div>

          {/* Desktop Menu */}
           <div className="hidden md:flex space-x-8 items-center">
             <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               Home
             </Link>
             <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               Blog
             </Link>
             <Link href="/licences" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               Licences
             </Link>
             <Link href="/swagger" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               API Docs
             </Link>
             <Link href="/auth/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               Login
             </Link>
             <Link href="/auth/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
               Register
             </Link>
             <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               {isDark ? '☀️' : '🌙'}
             </button>
           </div>

          {/* Mobile Menu Button */}
           <div className="md:hidden flex items-center space-x-2">
             <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               {isDark ? '☀️' : '🌙'}
             </button>
             <button
               onClick={() => setIsOpen(!isOpen)}
               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
             >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
               </svg>
             </button>
           </div>
        </div>

        {/* Mobile Menu */}
         {isOpen && (
           <div className="md:hidden pb-4">
             <Link href="/" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               Home
             </Link>
             <Link href="/blog" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               Blog
             </Link>
             <Link href="/licences" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               Licences
             </Link>
             <Link href="/swagger" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               API Docs
             </Link>
             <Link href="/auth/login" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               Login
             </Link>
             <Link href="/auth/register" className="block py-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-2">
               Register
             </Link>
             <button onClick={toggleTheme} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
               {isDark ? '☀️ Light' : '🌙 Dark'}
             </button>
           </div>
         )}
      </div>
    </nav>
  );
}