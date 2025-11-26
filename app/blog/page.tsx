'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, ChevronLeft, ChevronRight, User, ArrowRight, BookOpen } from 'lucide-react';
import { blogService, BlogPost } from '../lib/services/cms-service';

interface ExtendedBlogPost extends BlogPost {
  authorName: string;
  featured: boolean;
  readTime: number;
  category: string;
}

interface Category {
  name: string;
  count: number;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<ExtendedBlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        try {
          const fetchedPosts = await blogService.getAllBlogPosts();
          const publishedPosts = fetchedPosts.filter(post => post.status === 'PUBLISHED');
          
          // Transform API data to match our interface
          const transformedPosts: ExtendedBlogPost[] = publishedPosts.map(post => ({
            ...post,
            authorName: `${post.author.firstName || ''} ${post.author.lastName || ''}`.trim() || post.author.email,
            featured: false, // Default value
            readTime: Math.ceil(post.content.length / 1000), // Estimate read time
            category: post.tags[0]?.name || 'General' // Use first tag as category
          }));
          
          setPosts(transformedPosts);

          // Extract categories
          const categoryMap = new Map<string, number>();
          transformedPosts.forEach(post => {
            categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
          });
          
          const categoryList: Category[] = Array.from(categoryMap.entries()).map(([name, count]) => ({
            name,
            count
          }));
          
          setCategories(categoryList);
        } catch (error) {
          console.error('Error processing posts:', error);
          // Set empty state on error
          setPosts([]);
          setCategories([]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
                         post.tags.some(tag => tag.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Tech grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold text-white mb-4">Blog & Insights</h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert perspectives on technology, strategy, and innovation
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/admin/content/blog/new"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border-white/20 rounded-xl font-medium text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Writing
            </Link>
            <Link 
              href="/admin/content/blog"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600/10 backdrop-blur-sm border-blue-600/20 rounded-xl font-medium text-white hover:bg-blue-700/20 transition-all duration-300 transform hover:scale-105"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-900/50 border-gray-700/50 rounded-lg text-white focus:border-blue-500 focus:ring-blue-500/20"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category.name} value={category.name}>{category.name} ({category.count})</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">
                {posts.length} articles published
              </div>
              <div className="text-lg text-gray-300">
                {categories.reduce((sum, cat) => sum + cat.count, 0)} total categories
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {currentPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">
                {searchTerm || selectedCategory !== 'all' 
                  ? 'Try adjusting your search or filter criteria' 
                  : 'Be the first to publish an article'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <article key={post.id} className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-blue-400" />
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-md">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime} min read
                      </span>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        <span>{post.authorName}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                      </div>
                    </div>
                    
                    {post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag.id} className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded-md">
                            #{tag.name}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded-md">
                            +{post.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white hover:bg-gray-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-900/50 border border-gray-700/50 text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white hover:bg-gray-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}