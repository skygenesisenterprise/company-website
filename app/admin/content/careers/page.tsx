'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/admin/components/ui/card';
import { Button } from '@/app/admin/components/ui/button';
import { Input } from '@/app/admin/components/ui/input';
import { cmsService, JobPosting } from '@/app/admin/lib/services/cms-service';
import { 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Archive, 
  Eye, 
  Edit, 
  Trash2,
  Briefcase,
  MapPin,
  DollarSign,
  Loader2
} from 'lucide-react';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'OPEN':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'CLOSED':
      return 'bg-red-500/20 text-red-400 border-red-500/30';
    case 'DRAFT':
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    case 'PAUSED':
      return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'OPEN':
      return <CheckCircle className="h-4 w-4" />;
    case 'CLOSED':
      return <Archive className="h-4 w-4" />;
    case 'DRAFT':
      return <AlertCircle className="h-4 w-4" />;
    case 'PAUSED':
      return <Clock className="h-4 w-4" />;
    default:
      return null;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'FULL_TIME':
      return 'bg-blue-500/20 text-blue-400';
    case 'PART_TIME':
      return 'bg-purple-500/20 text-purple-400';
    case 'CONTRACT':
      return 'bg-orange-500/20 text-orange-400';
    case 'INTERNSHIP':
      return 'bg-green-500/20 text-green-400';
    case 'REMOTE':
      return 'bg-cyan-500/20 text-cyan-400';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
};

export default function CareersManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        setLoading(true);
        const response = await cmsService.getJobPostings({
          search: searchTerm || undefined,
          status: selectedStatus !== 'all' ? selectedStatus : undefined,
          department: selectedDepartment !== 'all' ? selectedDepartment : undefined
        });
        
        if (response.success && response.data) {
          setJobPostings(response.data.postings);
        } else {
          setError(response.error || 'Failed to fetch job postings');
        }
      } catch (err) {
        setError('Failed to fetch job postings');
        console.error('Error fetching job postings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobPostings();
  }, [searchTerm, selectedStatus, selectedDepartment]);

  const departments = Array.from(new Set(jobPostings.map(post => post.department)));

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Careers Management</h1>
          <p className="text-slate-400 text-lg">Manage job postings and career opportunities</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/content/careers/new">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-lg">
              <Briefcase className="h-4 w-4 mr-2" />
              New Job Posting
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
                placeholder="Search job postings..."
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
              <option value="OPEN">Open</option>
              <option value="CLOSED">Closed</option>
              <option value="DRAFT">Draft</option>
              <option value="PAUSED">Paused</option>
            </select>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border-slate-700/50 rounded-lg text-white focus:border-blue-500 focus:ring-blue-500/20"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Job Postings Table */}
      <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white text-xl">Job Postings</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
              <span className="ml-2 text-slate-400">Loading job postings...</span>
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
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Department</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Location</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Type</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Posted</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-slate-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobPostings.map((posting) => (
                    <tr key={posting.id} className="border-b border-slate-800/30 hover:bg-slate-800/50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="text-white font-medium">{posting.title}</div>
                        {posting.salary && (
                          <div className="text-slate-400 text-sm flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {posting.salary}
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-slate-300">{posting.department}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-slate-300 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {posting.location}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(posting.type)}`}>
                          {posting.type.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(posting.status)}`}>
                          {getStatusIcon(posting.status)}
                          {posting.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-slate-300">{new Date(posting.createdAt).toLocaleDateString()}</div>
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
          )}
        </CardContent>
      </Card>
    </div>
  );
}