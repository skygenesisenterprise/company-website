'use client';

import { useState, useEffect } from 'react';
import { Search, Calendar, Clock, User, Filter, ChevronRight, Star, TrendingUp, Tag, Archive, Mail } from 'lucide-react';

// Types
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  imageUrl?: string;
}

interface Category {
  name: string;
  count: number;
  color: string;
}

// Mock data
const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Enterprise AI: Transforming Business Operations',
    excerpt: 'Explore how artificial intelligence is revolutionizing enterprise operations and driving unprecedented efficiency gains across industries.',
    content: '',
    author: 'Sarah Chen',
    publishDate: '2024-01-15',
    readTime: 8,
    category: 'Technology',
    tags: ['AI', 'Enterprise', 'Innovation'],
    featured: true,
    imageUrl: '/api/placeholder/800/400'
  },
  {
    id: '2',
    title: 'Cybersecurity Best Practices for Modern Enterprises',
    excerpt: 'Essential strategies and frameworks to protect your organization from evolving cyber threats in an increasingly digital landscape.',
    content: '',
    author: 'Michael Rodriguez',
    publishDate: '2024-01-12',
    readTime: 6,
    category: 'Security',
    tags: ['Cybersecurity', 'Risk Management', 'Compliance'],
    featured: true,
    imageUrl: '/api/placeholder/800/400'
  },
  {
    id: '3',
    title: 'Cloud Migration Strategies: A Comprehensive Guide',
    excerpt: 'Step-by-step approach to successfully migrate your enterprise infrastructure to the cloud while minimizing disruption.',
    content: '',
    author: 'Emily Watson',
    publishDate: '2024-01-10',
    readTime: 10,
    category: 'Cloud',
    tags: ['Cloud Computing', 'Migration', 'AWS'],
    featured: false,
    imageUrl: '/api/placeholder/600/300'
  },
  {
    id: '4',
    title: 'Data Analytics: Turning Information into Business Value',
    excerpt: 'How leading enterprises leverage data analytics to drive decision-making and gain competitive advantages.',
    content: '',
    author: 'David Kim',
    publishDate: '2024-01-08',
    readTime: 7,
    category: 'Analytics',
    tags: ['Data Science', 'Business Intelligence', 'Analytics'],
    featured: false,
    imageUrl: '/api/placeholder/600/300'
  },
  {
    id: '5',
    title: 'Digital Transformation: Lessons from Industry Leaders',
    excerpt: 'Key insights and case studies from successful digital transformation initiatives across various sectors.',
    content: '',
    author: 'Lisa Anderson',
    publishDate: '2024-01-05',
    readTime: 9,
    category: 'Strategy',
    tags: ['Digital Transformation', 'Innovation', 'Leadership'],
    featured: false,
    imageUrl: '/api/placeholder/600/300'
  },
  {
    id: '6',
    title: 'Building Scalable Enterprise Applications',
    excerpt: 'Architectural patterns and best practices for developing applications that can grow with your business.',
    content: '',
    author: 'James Taylor',
    publishDate: '2024-01-03',
    readTime: 11,
    category: 'Development',
    tags: ['Software Architecture', 'Scalability', 'Engineering'],
    featured: false,
    imageUrl: '/api/placeholder/600/300'
  }
];

const categories: Category[] = [
  { name: 'Technology', count: 15, color: 'bg-blue-500' },
  { name: 'Security', count: 12, color: 'bg-red-500' },
  { name: 'Cloud', count: 8, color: 'bg-purple-500' },
  { name: 'Analytics', count: 10, color: 'bg-green-500' },
  { name: 'Strategy', count: 6, color: 'bg-yellow-500' },
  { name: 'Development', count: 9, color: 'bg-indigo-500' }
];

const popularTags = [
  'AI', 'Cloud Computing', 'Cybersecurity', 'Digital Transformation',
  'Data Analytics', 'Enterprise', 'Innovation', 'Leadership'
];

export default function BlogPage() {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');

  const postsPerPage = 6;
  const featuredPosts = mockBlogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  useEffect(() => {
    let filtered = mockBlogPosts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const BlogPostCard = ({ post, isFeatured = false }: { post: BlogPost; isFeatured?: boolean }) => (
    <article className={`enterprise-card group cursor-pointer transition-all duration-300 ${
      isFeatured ? 'md:col-span-2 md:row-span-2' : ''
    }`}>
      <div className="relative overflow-hidden rounded-lg">
        {post.imageUrl && (
          <div className={`relative ${isFeatured ? 'h-64 md:h-48' : 'h-48'} bg-gray-800`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                <Archive className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded">
              {post.category}
            </span>
            {post.featured && (
              <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-medium rounded flex items-center gap-1">
                <Star className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>

          <h3 className={`font-bold text-white mb-3 group-hover:text-blue-400 transition-colors ${
            isFeatured ? 'text-2xl' : 'text-xl'
          }`}>
            {post.title}
          </h3>

          <p className="text-gray-400 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded hover:bg-gray-700 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          <button className="enterprise-button flex items-center gap-2 text-sm">
            Read More
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="enterprise-hero py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Insights, innovations, and industry perspectives from the Sky Genesis Enterprise team
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search articles, topics, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-4 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Star className="w-8 h-8 text-yellow-400" />
                  Featured Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} isFeatured={true} />
                  ))}
                </div>
              </section>
            )}

            {/* Category Filter */}
            <section className="mb-8">
              <div className="flex items-center gap-4 flex-wrap">
                <Filter className="w-5 h-5 text-gray-400" />
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  All Posts
                </button>
                {categories.map(category => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                      selectedCategory === category.name
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Regular Posts Grid */}
            <section>
              <h2 className="text-2xl font-bold mb-8">
                Latest Articles
                {selectedCategory !== 'all' && (
                  <span className="text-gray-400 font-normal ml-2">
                    in {selectedCategory}
                  </span>
                )}
              </h2>
              
              {currentPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-12">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          currentPage === page
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Newsletter Signup */}
            <div className="enterprise-card p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                Newsletter
              </h3>
              <p className="text-gray-400 mb-4">
                Get the latest insights delivered to your inbox weekly.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors mb-3"
              />
              <button className="w-full enterprise-button">
                Subscribe
              </button>
            </div>

            {/* Categories */}
            <div className="enterprise-card p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map(category => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between cursor-pointer hover:text-blue-400 transition-colors"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${category.color}`} />
                      <span>{category.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="enterprise-card p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-blue-400" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-full hover:bg-gray-700 hover:text-blue-400 transition-colors cursor-pointer"
                    onClick={() => setSearchTerm(tag)}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="enterprise-card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Recent Posts
              </h3>
              <div className="space-y-4">
                {mockBlogPosts.slice(0, 3).map(post => (
                  <div key={post.id} className="cursor-pointer group">
                    <h4 className="font-medium text-white mb-1 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {formatDate(post.publishDate)} • {post.readTime} min read
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}