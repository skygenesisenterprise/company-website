'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/admin/components/ui/card';
import { Button } from '@/app/admin/components/ui/button';
import { Input } from '@/app/admin/components/ui/input';
import { 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Archive, 
  Eye, 
  Edit, 
  Trash2 
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Enterprise Applications',
    author: 'John Doe',
    tags: ['Architecture', 'Scalability', 'Enterprise'],
    status: 'published',
    date: '2024-01-15',
    views: 1234,
    excerpt: 'Learn how to build enterprise-grade applications that can scale to millions of users...'
  },
  {
    id: 2,
    title: 'Microservices Best Practices',
    author: 'Jane Smith',
    tags: ['Microservices', 'Best Practices'],
    status: 'draft',
    date: '2024-01-14',
    views: 0,
    excerpt: 'Discover best practices for designing and implementing microservices architecture...'
  },
  {
    id: 3,
    title: 'Cloud Security Fundamentals',
    author: 'Mike Johnson',
    tags: ['Security', 'Cloud'],
    status: 'published',
    date: '2024-01-13',
    views: 892,
    excerpt: 'Essential security practices for cloud-native applications and infrastructure...'
  },
  {
    id: 4,
    title: 'DevOps Transformation Guide',
    author: 'Sarah Wilson',
    tags: ['DevOps', 'Transformation'],
    status: 'scheduled',
    date: '2024-01-20',
    views: 0,
    excerpt: 'Complete guide to transforming your organization with DevOps practices...'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'published':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'draft':
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    case 'scheduled':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'archived':
      return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'published':
      return <CheckCircle className="h-4 w-4" />;
    case 'draft':
      return <AlertCircle className="h-4 w-4" />;
    case 'scheduled':
      return <Clock className="h-4 w-4" />;
    case 'archived':
      return <Archive className="h-4 w-4" />;
    default:
      return null;
  }
};

export default function BlogManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Blog Management</h1>
          <p className="text-slate-400 text-lg">Manage your blog posts and content</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/content/blog/new">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg">
              New Blog Post
            </Button>
          </Link>
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
            Export
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border-slate-700/50 rounded-lg text-white focus:border-blue-500 focus:ring-blue-500/20"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Blog Posts Table */}
      <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white text-xl">Blog Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Title</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Author</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Views</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-slate-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedPosts.map((post) => (
                  <tr key={post.id} className="border-b border-slate-800/30 hover:bg-slate-800/50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="text-white font-medium">{post.title}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-slate-300">{post.author}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(post.status)}`}>
                        {getStatusIcon(post.status)}
                        {post.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-slate-300">{post.date}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-slate-300">{post.views.toLocaleString()}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}