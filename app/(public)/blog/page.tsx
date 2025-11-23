'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
    <div className={`card group cursor-pointer ${isFeatured ? 'md:col-span-2' : ''}`}>
      <div className="space-y-4">
        {post.imageUrl && (
          <div className={`relative ${isFeatured ? 'h-64' : 'h-48'} bg-gray-800 rounded-lg overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                <Archive className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
            {post.category}
          </span>
          {post.featured && (
            <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/20 flex items-center gap-1">
              <Star className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>

        <h3 className={`font-semibold group-hover:text-blue-400 transition-colors ${
          isFeatured ? 'text-2xl' : 'text-xl'
        }`}>
          {post.title}
        </h3>

        <p className="text-gray-400 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
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

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded hover:bg-gray-700 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        <Link 
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          Read More
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );

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
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            {/* Enterprise badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-12 hover:border-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Insights & Perspectives
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Blog & Insights
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  from Our Team
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4">
              <p>
                Discover the latest innovations, industry perspectives, and technical insights 
                from the Sky Genesis Enterprise team.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-4 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20 px-4">
              <Link 
                href="#featured" 
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Browse Featured Articles
              </Link>
              <Link 
                href="#categories" 
                className="border border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-sm sm:text-base whitespace-nowrap flex items-center"
              >
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Explore Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <section id="featured" className="mb-16">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Articles</h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                      Hand-picked insights from our team
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredPosts.map(post => (
                      <BlogPostCard key={post.id} post={post} isFeatured={true} />
                    ))}
                  </div>
                </section>
              )}

              {/* Category Filter */}
              <section id="categories" className="mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Browse by Category</h3>
                  <p className="text-gray-400">Filter articles by topic</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-900 text-gray-400 hover:bg-gray-800 border border-gray-800'
                    }`}
                  >
                    All Posts
                  </button>
                  {categories.map(category => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                        selectedCategory === category.name
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-900 text-gray-400 hover:bg-gray-800 border border-gray-800'
                      }`}
                    >
                      {category.name}
                      <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Regular Posts Grid */}
              <section>
                <div className="text-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                    Latest Articles
                    {selectedCategory !== 'all' && (
                      <span className="text-gray-400 font-normal ml-2">
                        in {selectedCategory}
                      </span>
                    )}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                    Fresh insights and perspectives from our team
                  </p>
                </div>
                
                {currentPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentPosts.map(post => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-10 h-10 text-gray-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">No articles found</h3>
                    <p className="text-gray-400 text-lg">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-16">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-6 py-3 bg-gray-900 text-gray-400 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-800"
                    >
                      Previous
                    </button>
                    
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-3 rounded-lg transition-colors ${
                            currentPage === page
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-900 text-gray-400 hover:bg-gray-800 border border-gray-800'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-6 py-3 bg-gray-900 text-gray-400 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-800"
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
              <div className="card mb-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">Newsletter</h3>
                  <p className="text-gray-400 text-sm">
                    Get the latest insights delivered to your inbox weekly.
                  </p>
                </div>
                <div className="space-y-4 mt-6">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <button className="w-full btn-primary">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="card mb-8">
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="space-y-4">
                  {categories.map(category => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between cursor-pointer hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-900"
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`} />
                        <span>{category.name}</span>
                      </div>
                      <span className="text-gray-500 text-sm bg-gray-900 px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="card mb-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-blue-400" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-900 text-gray-400 text-sm rounded-full hover:bg-gray-800 hover:text-blue-400 transition-colors cursor-pointer border border-gray-800"
                      onClick={() => setSearchTerm(tag)}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="card">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {mockBlogPosts.slice(0, 3).map(post => (
                    <div key={post.id} className="cursor-pointer group p-3 rounded-lg hover:bg-gray-900 transition-colors">
                      <h4 className="font-medium text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
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
      {/* Final Call-to-Action */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Stay Updated with
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Latest Insights
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Subscribe to our newsletter and never miss an update from our team of experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary">
                <Mail className="w-5 h-5" />
                Subscribe to Newsletter
              </button>
              <Link href="/rss" className="btn-secondary">
                <Archive className="w-5 h-5" />
                RSS Feed
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}