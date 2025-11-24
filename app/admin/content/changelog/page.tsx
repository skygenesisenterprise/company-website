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
  TrendingUp,
  Calendar,
  Hash,
  Loader2
} from 'lucide-react';

interface Changelog {
  id: string;
  title: string;
  description?: string;
  version: string;
  type: 'MAJOR' | 'MINOR' | 'PATCH';
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
  changes: Array<{
    id: string;
    type: 'ADDED' | 'IMPROVED' | 'FIXED' | 'REMOVED' | 'DEPRECATED' | 'SECURITY';
    description: string;
    order: number;
  }>;
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

const getTypeColor = (type: string) => {
  switch (type) {
    case 'MAJOR':
      return 'bg-red-500/20 text-red-400';
    case 'MINOR':
      return 'bg-blue-500/20 text-blue-400';
    case 'PATCH':
      return 'bg-green-500/20 text-green-400';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
};

const getChangeTypeColor = (type: string) => {
  switch (type) {
    case 'ADDED':
      return 'bg-green-500/20 text-green-400';
    case 'IMPROVED':
      return 'bg-blue-500/20 text-blue-400';
    case 'FIXED':
      return 'bg-orange-500/20 text-orange-400';
    case 'REMOVED':
      return 'bg-red-500/20 text-red-400';
    case 'DEPRECATED':
      return 'bg-yellow-500/20 text-yellow-400';
    case 'SECURITY':
      return 'bg-purple-500/20 text-purple-400';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
};

export default function ChangelogManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [changelogs, setChangelogs] = useState<Changelog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChangelogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/v1/cms/changelogs?search=${searchTerm}&status=${selectedStatus !== 'all' ? selectedStatus : ''}`);
        
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setChangelogs(data.data.changelogs);
          } else {
            setError(data.error || 'Failed to fetch changelogs');
          }
        } else {
          setError('Failed to fetch changelogs');
        }
      } catch (err) {
        setError('Failed to fetch changelogs');
        console.error('Error fetching changelogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchChangelogs();
  }, [searchTerm, selectedStatus]);

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Changelog Management</h1>
          <p className="text-slate-400 text-lg">Manage version updates and release notes</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/content/changelog/new">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 shadow-lg">
              <TrendingUp className="h-4 w-4 mr-2" />
              New Changelog
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
                placeholder="Search changelogs..."
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
          </div>
        </CardContent>
      </Card>

      {/* Changelogs Table */}
      <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white text-xl">Changelogs</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
              <span className="ml-2 text-slate-400">Loading changelogs...</span>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400 mb-4">{error}</p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          ) : (
            <div className="space-y-6">
              {changelogs.map((changelog) => (
                <div key={changelog.id} className="border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{changelog.title}</h3>
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(changelog.type)}`}>
                          <Hash className="h-3 w-3" />
                          {changelog.type}
                        </span>
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(changelog.status)}`}>
                          {getStatusIcon(changelog.status)}
                          {changelog.status}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-slate-800/50 text-slate-300">
                          <Calendar className="h-3 w-3" />
                          {changelog.version}
                        </span>
                      </div>
                      <p className="text-slate-300 mb-3">
                        {changelog.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span>By {`${changelog.author.firstName || ''} ${changelog.author.lastName || ''}`.trim() || changelog.author.email}</span>
                        <span>•</span>
                        <span>{new Date(changelog.createdAt).toLocaleDateString()}</span>
                        {changelog.publishedAt && (
                          <>
                            <span>•</span>
                            <span>Published {new Date(changelog.publishedAt).toLocaleDateString()}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
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
                  </div>

                  {/* Changes */}
                  {changelog.changes && changelog.changes.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium text-slate-400 mb-2">Changes:</h4>
                      {changelog.changes.map((change) => (
                        <div key={change.id} className="flex items-center gap-2 p-2 bg-slate-800/30 rounded-lg">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${getChangeTypeColor(change.type)}`}>
                            {change.type}
                          </span>
                          <span className="text-slate-300 text-sm">{change.description}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}