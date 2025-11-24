'use client';

import { useEffect, useState } from 'react';
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
  Trash2,
  FileText,
  Folder,
  Download,
  Hash,
  Loader2
} from 'lucide-react';

interface Whitepaper {
  id: string;
  title: string;
  slug: string;
  abstract?: string;
  category: string;
  version: string;
  fileUrl?: string;
  fileSize?: number;
  fileType?: string;
  status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
  };
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
  };
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'PUBLISHED':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'DRAFT':
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    case 'SCHEDULED':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'ARCHIVED':
      return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'PUBLISHED':
      return <CheckCircle className="h-4 w-4" />;
    case 'DRAFT':
      return <AlertCircle className="h-4 w-4" />;
    case 'SCHEDULED':
      return <Clock className="h-4 w-4" />;
    case 'ARCHIVED':
      return <Archive className="h-4 w-4" />;
    default:
      return null;
  }
};

const formatFileSize = (bytes?: number) => {
  if (!bytes) return 'Unknown';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Bytes';
  
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
};

export default function WhitepapersManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [whitepapers, setWhitepapers] = useState<Whitepaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWhitepapers = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/v1/cms/whitepapers?search=${searchTerm}&status=${selectedStatus !== 'all' ? selectedStatus : ''}&category=${selectedCategory !== 'all' ? selectedCategory : ''}`);
        
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setWhitepapers(data.data.whitepapers);
          } else {
            setError(data.error || 'Failed to fetch whitepapers');
          }
        } else {
          setError('Failed to fetch whitepapers');
        }
      } catch (err) {
        setError('Failed to fetch whitepapers');
        console.error('Error fetching whitepapers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWhitepapers();
  }, [searchTerm, selectedStatus, selectedCategory]);

  const categories = Array.from(new Set(whitepapers.map(paper => paper.category)));

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Whitepapers Management</h1>
          <p className="text-slate-400 text-lg">Manage technical whitepapers and documentation</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/content/whitepapers/new">
            <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 shadow-lg">
              <FileText className="h-4 w-4 mr-2" />
              New Whitepaper
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
                placeholder="Search whitepapers..."
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
              <option value="PUBLISHED">Published</option>
              <option value="DRAFT">Draft</option>
              <option value="SCHEDULED">Scheduled</option>
              <option value="ARCHIVED">Archived</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border-slate-700/50 rounded-lg text-white focus:border-blue-500 focus:ring-blue-500/20"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Whitepapers Table */}
      <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white text-xl">Whitepapers</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
              <span className="ml-2 text-slate-400">Loading whitepapers...</span>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400 mb-4">{error}</p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Title</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Category</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Version</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">File Size</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Updated</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-slate-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {whitepapers.map((whitepaper) => (
                    <tr key={whitepaper.id} className="border-b border-slate-800/30 hover:bg-slate-800/50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="text-white font-medium">{whitepaper.title}</div>
                        {whitepaper.abstract && (
                          <div className="text-slate-400 text-sm mt-1 line-clamp-2">
                            {whitepaper.abstract}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {whitepaper.tags.map((tag) => (
                            <span key={tag.id} className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded-full">
                              <Hash className="h-3 w-3" />
                              {tag.name}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-slate-300 flex items-center gap-1">
                          <Folder className="h-3 w-3" />
                          {whitepaper.category}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-slate-300 font-mono text-sm">v{whitepaper.version}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-slate-300 text-sm">{formatFileSize(whitepaper.fileSize)}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(whitepaper.status)}`}>
                          {getStatusIcon(whitepaper.status)}
                          {whitepaper.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-slate-300">{new Date(whitepaper.updatedAt).toLocaleDateString()}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-2">
                          {whitepaper.fileUrl && (
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                              <Download className="h-4 w-4" />
                            </Button>
                          )}
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
          )}
        </CardContent>
      </Card>
    </div>
  );
}